#!/usr/bin/env bash
# Creates or updates the contact form Lambda (SES email) and its public function URL, then writes
# VITE_CONTACT_ENDPOINT to .env.production.local so the next site build shows the form.
# Settings come from .env in the project root (gitignored): at minimum CONTACT_TO=<inbox>.
# Safe to re-run: do so after changing any file in this folder or any setting.
set -euo pipefail
cd "$(dirname "$0")/../.."

if [ -f .env ]; then set -a; . ./.env; set +a; fi
: "${CONTACT_TO:?Set CONTACT_TO (the inbox that receives messages) in .env. See .env.example.}"
# The profile comes only from .env, so a stray shell export (a work profile) can't send this to another account.
PROFILE="${CONTACT_AWS_PROFILE:-${DEPLOY_AWS_PROFILE:-}}"
[ -n "$PROFILE" ] || { echo "Set CONTACT_AWS_PROFILE or DEPLOY_AWS_PROFILE in .env. The shell's AWS_PROFILE is ignored on purpose." >&2; exit 1; }
EXPECTED_ACCOUNT="${CONTACT_AWS_ACCOUNT_ID:-${DEPLOY_AWS_ACCOUNT_ID:-}}"
FROM_ADDRESS="${CONTACT_FROM_ADDRESS:-$CONTACT_TO}"
FORMS_FROM="kalunchan.dev contact form <$FROM_ADDRESS>"
ALLOWED_ORIGINS="${CONTACT_ALLOWED_ORIGINS:-https://kalunchan.dev,https://www.kalunchan.dev}"
SITE_URL=https://kalunchan.dev
REGION="${CONTACT_AWS_REGION:-us-west-2}"
RATE_LIMIT_TABLE="${CONTACT_RATE_LIMIT_TABLE:-}"
FUNCTION=kalunchan-contact
ROLE=kalunchan-contact-lambda

unset AWS_PROFILE AWS_DEFAULT_PROFILE AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN
aws() { command aws --profile "$PROFILE" --region "$REGION" --output text "$@"; }

# Older CLIs can't limit the public InvokeFunction permission to the function URL.
command aws lambda add-permission --generate-cli-skeleton | grep -q InvokedViaFunctionUrl \
  || { echo "AWS CLI too old for function URL permissions. Run: brew upgrade awscli" >&2; exit 1; }

ACCOUNT=$(aws sts get-caller-identity --query Account)
if [ -n "$EXPECTED_ACCOUNT" ] && [ "$ACCOUNT" != "$EXPECTED_ACCOUNT" ]; then
  echo "Profile $PROFILE is signed in to a different account than DEPLOY_AWS_ACCOUNT_ID. Nothing was changed." >&2
  exit 1
fi

if [ -z "${CONTACT_IP_HASH_SALT:-}" ]; then
  CONTACT_IP_HASH_SALT=$(openssl rand -hex 16)
  printf '\nCONTACT_IP_HASH_SALT=%s\n' "$CONTACT_IP_HASH_SALT" >> .env
fi
IP_HASH_SALT="$CONTACT_IP_HASH_SALT"
export FORMS_FROM CONTACT_TO ALLOWED_ORIGINS SITE_URL IP_HASH_SALT RATE_LIMIT_TABLE

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

echo "SES identities"
# The SES sandbox only delivers between verified addresses; the form only mails CONTACT_TO.
for address in $(printf '%s\n' "$FROM_ADDRESS" "$CONTACT_TO" | sort -u); do
  # An address on a domain identity (DKIM records in DNS) needs no verification email of its own.
  if status=$(aws sesv2 get-email-identity --email-identity "${address#*@}" --query VerificationStatus 2>/dev/null); then
    [ "$status" = SUCCESS ] && echo "  $address: domain verified" || echo "  $address: domain ${address#*@} waiting on its DKIM DNS records ($status)"
    continue
  fi
  if status=$(aws sesv2 get-email-identity --email-identity "$address" --query VerificationStatus 2>/dev/null); then
    [ "$status" = SUCCESS ] && echo "  $address verified" || echo "  $address: open the SES verification email ($status)"
  else
    aws sesv2 create-email-identity --email-identity "$address" >/dev/null
    echo "  $address: SES sent a verification email; click its link before testing"
  fi
done

echo "IAM role"
if ! ROLE_ARN=$(aws iam get-role --role-name "$ROLE" --query Role.Arn 2>/dev/null); then
  ROLE_ARN=$(aws iam create-role --role-name "$ROLE" --query Role.Arn --assume-role-policy-document \
    '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}')
  aws iam attach-role-policy --role-name "$ROLE" --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
fi
# In the sandbox SES also authorizes the recipient identity, so the inbox is listed too.
IDENTITY="arn:aws:ses:$REGION:$ACCOUNT:identity"
aws iam put-role-policy --role-name "$ROLE" --policy-name ses-send --policy-document \
  "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":\"ses:SendEmail\",\"Resource\":[\"$IDENTITY/$FROM_ADDRESS\",\"$IDENTITY/$CONTACT_TO\",\"$IDENTITY/${FROM_ADDRESS#*@}\",\"$IDENTITY/${CONTACT_TO#*@}\"]}]}"
if [ -n "$RATE_LIMIT_TABLE" ]; then
  aws iam put-role-policy --role-name "$ROLE" --policy-name rate-limit-table --policy-document \
    "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":[\"dynamodb:GetItem\",\"dynamodb:UpdateItem\",\"dynamodb:PutItem\",\"dynamodb:DeleteItem\"],\"Resource\":\"arn:aws:dynamodb:$REGION:$ACCOUNT:table/$RATE_LIMIT_TABLE\"}]}"
fi
echo "  $ROLE"

echo "Lambda"
(cd serverless/contact && zip -q "$WORK/contact.zip" ./*.mjs)
node -e 'const keys = ["FORMS_FROM", "CONTACT_TO", "ALLOWED_ORIGINS", "SITE_URL", "IP_HASH_SALT", "RATE_LIMIT_TABLE"];
  console.log(JSON.stringify({ Variables: Object.fromEntries(keys.filter((k) => process.env[k]).map((k) => [k, process.env[k]])) }));' > "$WORK/env.json"
if aws lambda get-function --function-name "$FUNCTION" >/dev/null 2>&1; then
  aws lambda update-function-code --function-name "$FUNCTION" --zip-file "fileb://$WORK/contact.zip" >/dev/null
  aws lambda wait function-updated-v2 --function-name "$FUNCTION"
  aws lambda update-function-configuration --function-name "$FUNCTION" --environment "file://$WORK/env.json" >/dev/null
  aws lambda wait function-updated-v2 --function-name "$FUNCTION"
  echo "  $FUNCTION updated"
else
  # A new role takes a few seconds before Lambda can assume it.
  for attempt in 1 2 3 4 5 6; do
    if out=$(aws lambda create-function --function-name "$FUNCTION" --runtime nodejs22.x --handler handler.handler \
      --role "$ROLE_ARN" --zip-file "fileb://$WORK/contact.zip" --timeout 10 --memory-size 256 \
      --environment "file://$WORK/env.json" 2>&1); then break; fi
    if ! grep -q 'cannot be assumed' <<<"$out" || [ "$attempt" = 6 ]; then echo "$out" >&2; exit 1; fi
    sleep 10
  done
  aws lambda wait function-active-v2 --function-name "$FUNCTION"
  echo "  $FUNCTION created"
fi
# Caps cost if someone floods the form. New accounts often have too little concurrency to reserve any.
aws lambda put-function-concurrency --function-name "$FUNCTION" --reserved-concurrent-executions 3 >/dev/null 2>&1 \
  || echo "  note: could not reserve concurrency (account limit); the function still works"

# The privacy notice (/privacy/) promises 30 days. Lambda creates the group on first run, so create it here
# to set retention before then.
LOG_GROUP="/aws/lambda/$FUNCTION"
aws logs create-log-group --log-group-name "$LOG_GROUP" >/dev/null 2>&1 || true
aws logs put-retention-policy --log-group-name "$LOG_GROUP" --retention-in-days 30
echo "  logs kept 30 days"

echo "Function URL"
if ! URL=$(aws lambda get-function-url-config --function-name "$FUNCTION" --query FunctionUrl 2>/dev/null); then
  # No CORS here: the function answers CORS itself and checks Origin against ALLOWED_ORIGINS.
  URL=$(aws lambda create-function-url-config --function-name "$FUNCTION" --auth-type NONE --query FunctionUrl)
  aws lambda add-permission --function-name "$FUNCTION" --statement-id public-url \
    --action lambda:InvokeFunctionUrl --principal '*' --function-url-auth-type NONE >/dev/null
  aws lambda add-permission --function-name "$FUNCTION" --statement-id public-url-invoke \
    --action lambda:InvokeFunction --principal '*' --invoked-via-function-url >/dev/null
fi
URL=${URL%/}
echo "  $URL"

touch .env.production.local
{ grep -v '^VITE_CONTACT_ENDPOINT=' .env.production.local || true; echo "VITE_CONTACT_ENDPOINT=$URL"; } > "$WORK/env.production"
mv "$WORK/env.production" .env.production.local
echo "Wrote VITE_CONTACT_ENDPOINT to .env.production.local. Run npm run deploy to turn on the form."
