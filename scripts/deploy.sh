#!/usr/bin/env bash
# Production deploy: validate → build → verify → sync build/ to S3 → update security headers → purge Cloudflare.
#
# Fails closed: S3 is only touched after validation, the production build and the
# audit of the exact files being uploaded have all passed. Any failing command
# stops the script (set -e) before the deploy stage is reached.
#
# Usage:  npm run deploy            # deploy (then notifies IndexNow of new and updated pages)
#         npm run deploy -- --dry-run   # everything except writing to S3
#
# Config comes from the environment, or from a gitignored .env at the repo
# root (see .env.example). Credentials come from your AWS CLI profile.

set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

dry_run=false
for arg in "$@"; do
  case "$arg" in
    --dry-run) dry_run=true ;;
    *) echo "Unknown option: $arg (supported: --dry-run)" >&2; exit 2 ;;
  esac
done

stage="Configuration check"
s3_touched=false
s3_done=false
on_error() {
  local code=$?
  echo >&2
  if [ "$s3_done" = true ]; then
    echo "✗ $stage failed (exit $code). The S3 deploy itself completed; purge the cache in the Cloudflare dashboard (Caching → Configuration → Purge Everything) or run npm run deploy again." >&2
  elif [ "$s3_touched" = true ]; then
    echo "✗ $stage failed (exit $code). S3 may hold a partial upload; fix the problem and run npm run deploy again." >&2
  else
    echo "✗ $stage failed (exit $code). Nothing was uploaded to S3." >&2
  fi
  exit "$code"
}
trap on_error ERR

step() { echo; echo "→ $1..."; }
ok() { echo "✓ $1"; }
# Run a command quietly; print its full output only if it fails.
log="$(mktemp -t kalunchan-deploy)"
quiet() {
  if ! "$@" >"$log" 2>&1; then
    cat "$log" >&2
    return 1
  fi
}

# ---------- Configuration ----------
if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
fi

: "${DEPLOY_S3_BUCKET:?Set DEPLOY_S3_BUCKET (in .env or the environment). See .env.example.}"
: "${DEPLOY_AWS_PROFILE:?Set DEPLOY_AWS_PROFILE to the AWS CLI profile that owns the site bucket. The AWS_PROFILE of your shell is deliberately ignored.}"
DEPLOY_S3_DELETE="${DEPLOY_S3_DELETE:-false}"
DEPLOY_ASSET_RETENTION_DAYS="${DEPLOY_ASSET_RETENTION_DAYS:-8}"
case "$DEPLOY_ASSET_RETENTION_DAYS" in
  '' | *[!0-9]*) echo "DEPLOY_ASSET_RETENTION_DAYS must be a whole number of days, got: $DEPLOY_ASSET_RETENTION_DAYS" >&2; false ;;
esac
# When each old bundle was first missing from a build. Local and gitignored; if it's
# lost, bundles are simply kept for another full retention period.
drops_file=".deploy/dropped-assets.tsv"
build_dir="build"
bucket="s3://${DEPLOY_S3_BUCKET#s3://}"
bucket="${bucket%/}"

aws_cmd=(aws --profile "$DEPLOY_AWS_PROFILE")
[ -n "${DEPLOY_AWS_REGION:-}" ] && aws_cmd+=(--region "$DEPLOY_AWS_REGION")

command -v aws >/dev/null || { echo "The AWS CLI (v2) is required: https://aws.amazon.com/cli/" >&2; false; }

# Cloudflare purge is optional, but if either variable is set, both must be.
cf_purge=false
if [ -n "${CLOUDFLARE_ZONE_ID:-}" ] || [ -n "${CLOUDFLARE_API_TOKEN:-}" ]; then
  : "${CLOUDFLARE_ZONE_ID:?Set CLOUDFLARE_ZONE_ID as well, since both Cloudflare variables are needed to purge the cache.}"
  : "${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN as well, since both Cloudflare variables are needed to purge the cache.}"
  cf_purge=true
fi
cf_api() {
  curl -sS --max-time 30 -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" -H "Content-Type: application/json" "$@"
}

step "Checking AWS credentials"
account="$("${aws_cmd[@]}" sts get-caller-identity --query Account --output text)"
if [ -n "${DEPLOY_AWS_ACCOUNT_ID:-}" ] && [ "$account" != "$DEPLOY_AWS_ACCOUNT_ID" ]; then
  echo "Profile $DEPLOY_AWS_PROFILE is signed in to account $account, expected $DEPLOY_AWS_ACCOUNT_ID." >&2
  false
fi
ok "Signed in to AWS account $account as profile $DEPLOY_AWS_PROFILE"

if [ "$cf_purge" = true ]; then
  step "Checking Cloudflare token"
  resp="$(cf_api https://api.cloudflare.com/client/v4/user/tokens/verify || true)"
  if ! printf '%s' "$resp" | grep -Eq '"status": ?"active"'; then
    echo "Cloudflare token is missing, invalid or inactive. Response: ${resp:-none}" >&2
    false
  fi
  ok "Cloudflare token is active"
fi

revision="$(git rev-parse --short HEAD 2>/dev/null || echo unknown)"
[ -n "$(git status --porcelain 2>/dev/null)" ] && revision="$revision + uncommitted changes"
echo "  Source: $revision"
target_note=""
[ "$dry_run" = true ] && target_note=" (dry run)"
echo "  Target: $bucket$target_note"

# ---------- 1. Validate ----------
stage="Validation"
step "Validating changes"
quiet npm run validate
ok "Validation passed"

# ---------- 2. Build ----------
stage="Production build"
step "Building production site"
quiet npm run build
ok "Build completed"

# Audit the exact files about to be uploaded, not just the validation copy.
stage="Build verification"
step "Verifying build output"
quiet npm run audit:seo
ok "Build output verified"

# ---------- 3. Deploy ----------
stage="S3 deploy"
step "Deploying to S3"
sync=("${aws_cmd[@]}" s3 sync --only-show-errors --no-progress)
[ "$dry_run" = true ] && sync=("${aws_cmd[@]}" s3 sync --dryrun)
s3_touched=$([ "$dry_run" = true ] && echo false || echo true)

# Upload order matters: hashed assets first, then images, then HTML, so a visitor
# never gets a page that points at a file that isn't there yet.
"${sync[@]}" "$build_dir/assets" "$bucket/assets" --exclude "*" --include "*.woff2" \
  --content-type font/woff2 --cache-control "public, max-age=31536000, immutable"
"${sync[@]}" "$build_dir/assets" "$bucket/assets" --exclude "*.woff2" \
  --cache-control "public, max-age=31536000, immutable"
"${sync[@]}" "$build_dir" "$bucket" --exclude "assets/*" --exclude "*.html" --exclude "*.xml" --exclude "*.txt" --exclude "*.json" \
  --cache-control "public, max-age=86400"
"${sync[@]}" "$build_dir" "$bucket" --exclude "*" --include "*.html" --include "*.xml" --include "*.txt" --include "*.json" \
  --cache-control "public, max-age=0, must-revalidate"

# Deletes old JS/CSS bundles (and the fonts they load) once they've been out of the
# build for DEPLOY_ASSET_RETENTION_DAYS. An object's S3 date can't be used for this:
# every deploy re-uploads current files, so it shows the last upload, not the drop.
prune_old_assets() {
  local now keep stale expired kept
  now="$(date +%s)"
  keep=$((DEPLOY_ASSET_RETENTION_DAYS * 86400))
  # Read-only: --dryrun lists the assets/ objects that aren't in this build.
  stale="$("${aws_cmd[@]}" s3 sync "$build_dir/assets" "$bucket/assets" --delete --dryrun | sed -n "s#^.*delete: $bucket/##p")"
  expired="$(mktemp -t kalunchan-expired)"
  mkdir -p "$(dirname "$drops_file")"
  printf '%s\n' "$stale" | awk -F'\t' -v now="$now" -v keep="$keep" -v drops="$drops_file" -v expired="$expired" '
    BEGIN { while ((getline line < drops) > 0) { split(line, f, "\t"); since[f[1]] = f[2] } }
    $0 == "" { next }
    { t = ($0 in since) ? since[$0] : now
      if (now - t >= keep) print $0 > expired; else print $0 "\t" t }
  ' > "$drops_file.next"
  while IFS= read -r key; do
    "${aws_cmd[@]}" s3 rm $([ "$dry_run" = true ] && echo --dryrun || echo --only-show-errors) "$bucket/$key"
  done < "$expired"
  kept="$(grep -c . "$drops_file.next" || true)"
  local verb="Deleted"
  [ "$dry_run" = true ] && verb="Would delete"
  echo "  $verb $(grep -c . "$expired" || true) old bundle file(s); keeping $kept until they've been out of the build for $DEPLOY_ASSET_RETENTION_DAYS day(s)."
  # A dry run leaves the record as it was.
  if [ "$dry_run" = true ]; then rm -f "$drops_file.next"; else mv "$drops_file.next" "$drops_file"; fi
  rm -f "$expired"
}

# Stale objects (old asset hashes, removed routes). Only deleted when the bucket is
# confirmed to hold nothing but this site's build output.
if [ "$DEPLOY_S3_DELETE" = true ]; then
  # Pages, images and other files go right away; old bundles wait out the retention period.
  "${sync[@]}" "$build_dir" "$bucket" --delete --exclude "assets/*"
  prune_old_assets
  ok "Removed files no longer in the build"
else
  # Only delete lines contain "delete: ", so count those. Read-only: --dryrun never writes.
  stale="$("${aws_cmd[@]}" s3 sync "$build_dir" "$bucket" --delete --dryrun | grep -c 'delete: ' || true)"
  [ "$stale" -gt 0 ] && echo "  $stale object(s) in the bucket are not in this build. Set DEPLOY_S3_DELETE=true to remove them (see README)."
fi

[ "$dry_run" = true ] || s3_done=true

# ---------- 4. Security headers ----------
# The CSP allows the inline script by hash, so it has to match the HTML just uploaded. Before the purge,
# so cached pages are only dropped once the new policy is in place.
if [ "$cf_purge" = true ]; then
  stage="Security headers"
  step "Updating security headers"
  if [ "$dry_run" = true ]; then
    quiet node scripts/cloudflare-security-headers.mjs --enforce
    ok "Dry run: would write the rule with the CSP enforced"
  else
    quiet node scripts/cloudflare-security-headers.mjs --apply --enforce || {
      echo "The site is uploaded, but its CSP wasn't updated and the cache wasn't purged. Check that the token has Zone · Transform Rules · Edit, then run npm run deploy again." >&2
      false
    }
    ok "Security headers updated"
  fi
fi

# ---------- 5. Purge Cloudflare ----------
if [ "$cf_purge" = true ]; then
  stage="Cloudflare cache purge"
  step "Purging Cloudflare cache"
  if [ "$dry_run" = true ]; then
    ok "Dry run: would purge everything for the zone"
  else
    resp="$(cf_api -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
      --data '{"purge_everything":true}' || true)"
    if ! printf '%s' "$resp" | grep -Eq '"success": ?true'; then
      echo "Cloudflare did not accept the purge. Response: ${resp:-none}" >&2
      false
    fi
    ok "Cloudflare cache purged"
  fi
else
  echo
  echo "  Cloudflare purge skipped: set CLOUDFLARE_ZONE_ID and CLOUDFLARE_API_TOKEN to enable it."
fi

# ---------- 6. IndexNow ----------
# After the purge, so search engines that fetch right away get the new pages. A failure here doesn't undo
# the deploy: the next deploy submits whatever was missed.
step "Notifying IndexNow of new and updated pages"
if [ "$dry_run" = true ]; then
  node scripts/indexnow.mjs --dry-run || echo "  IndexNow dry run failed; see above." >&2
else
  node scripts/indexnow.mjs || echo "  IndexNow submission failed; it will be retried on the next deploy." >&2
fi

echo
if [ "$dry_run" = true ]; then
  ok "Dry run completed. Nothing was uploaded."
else
  ok "Deployment completed: $bucket"
fi
