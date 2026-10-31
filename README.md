# kalunchan.dev

Personal site of Ka Lun Chan: engineering leadership, case studies, and operating style.

Built with Vite + React and prerendered to static HTML per route, so every page is crawlable and fast without a server.

## Commands

```sh
npm install
npm run dev       # local dev server
npm run build     # client build → SSR build → prerender every route into build/
npm run preview   # serve build/ locally
npm run metadata:update # explicitly refresh tracked page modification metadata
npx playwright install chromium # install the browser once after npm install
npm test          # unit tests and desktop/mobile browser regressions
npm run audit:seo # validate the built pages, links, metadata, privacy, backlinks and JS size budgets
```

`npm run build` writes `build/<route>/index.html` for every route, plus `404.html` and `sitemap.xml`. The live site sits on an S3 website endpoint behind Cloudflare, which serves directory `index.html` files.

`npm run validate` runs the unit and browser suites, builds into `.validate/` (leaving `build/` alone), and runs the SEO and writing audits. Browser tests intercept a local endpoint and never send real email.

Builds check page modification metadata without rewriting `src/lastmod.json`. After changing page content, run `npm run metadata:update`, review the diff and commit the metadata alongside the content. Validation fails if it is stale.

## Deploying

```sh
npm run deploy             # validate → production build → verify → S3 sync → security headers → Cloudflare purge
npm run deploy -- --dry-run  # same checks, then show what would change in S3 without writing
```

The deploy runs these steps in order and stops at the first failure:

1. **Check config:** AWS credentials for the configured profile. With `DEPLOY_AWS_ACCOUNT_ID` set, it also confirms the account ID. With the Cloudflare variables set, it also checks that the Cloudflare token is active, so a bad token stops the deploy before anything is uploaded.
2. **Validate:** runs `npm run validate`.
3. **Build:** runs `npm run build`.
4. **Verify:** runs `npm run audit:seo` on the exact `build/` that will be uploaded.
5. **Sync to S3,** in this order:
   - hashed `assets/`, cached for a year as immutable;
   - images and icons, cached for a day;
   - HTML, sitemap, robots.txt and the manifest, revalidated on every request.
6. **Update security headers:** if the Cloudflare variables are set, rewrites the response header rule with the CSP enforced, so the inline script hash matches the HTML just uploaded. A dry run only prints the rule.
7. **Purge Cloudflare:** if `CLOUDFLARE_ZONE_ID` and `CLOUDFLARE_API_TOKEN` are set, purges everything in the zone once the upload has finished. A dry run skips the purge.

If any step from 1 to 4 fails, S3 is never touched. If the headers step fails, the site is uploaded but its CSP and cache are out of date: fix the token and run the deploy again. If only the purge fails, the site is already deployed: purge from the dashboard (**Caching → Configuration → Purge Everything**) or run the deploy again.

**Setup:** copy `.env.example` to `.env` (gitignored) and fill it in, or export the same variables:

| Variable | Required | Purpose |
|---|---|---|
| `DEPLOY_S3_BUCKET` | yes | Bucket that serves the site |
| `DEPLOY_AWS_PROFILE` | yes | AWS CLI profile with write access to that bucket. The shell's `AWS_PROFILE` is ignored on purpose. |
| `DEPLOY_AWS_REGION` | no | Bucket region |
| `DEPLOY_AWS_ACCOUNT_ID` | no | The deploy aborts if the profile is signed in to a different account |
| `DEPLOY_S3_DELETE` | no | Set to `true` to delete objects that are no longer in `build/`. Only do this once the bucket holds nothing but this site. Until then, the deploy reports how many stale objects it found. |
| `DEPLOY_ASSET_RETENTION_DAYS` | no | Default `8`, matching Cloudflare's browser cache TTL. With delete on, old JS/CSS bundles and the fonts they load are kept for this many days after the deploy that dropped them, so pages still cached by Cloudflare or a browser keep their styles. Use `0` once Cloudflare respects origin headers. The drop dates are recorded in `.deploy/` (gitignored). If that folder is lost, bundles are just kept for another full period. |
| `CLOUDFLARE_ZONE_ID` | no | The kalunchan.dev zone ID, from the dashboard's **Overview** page. Set both Cloudflare variables or neither. |
| `CLOUDFLARE_API_TOKEN` | no | A user API token (**My Profile → API Tokens**) with only **Zone · Cache Purge · Purge** on kalunchan.dev. It's a secret, so keep it in `.env` only. |
| `CLOUDFLARE_RULES_API_TOKEN` | with Cloudflare | A token with **Zone · Transform Rules · Edit** on kalunchan.dev, used to write the security headers. Without it, the deploy tries `CLOUDFLARE_API_TOKEN`, which then needs that permission too. |

**Requirements:**
- AWS CLI v2, signed in for that profile (for SSO profiles, run `aws sso login --profile <name>`).
- Node and npm, with Python 3 for the audit.

**Caching:** the site uses Cloudflare, not CloudFront, so there's no CloudFront invalidation. HTML is uploaded with `max-age=0, must-revalidate` and assets have hashed names. The Cloudflare purge makes sure visitors get the new version straight away, including images, which keep their file names and are cached for a day.

## Contact form

The form on `/contact/` posts to a small Lambda that sends mail through Amazon SES (`serverless/contact/`). Set `CONTACT_TO` and `CONTACT_FROM_ADDRESS` in `.env`, run `npm run contact:email-dns` once (SES DKIM, MAIL FROM and DMARC records in Cloudflare), `npm run contact:deploy` once (and after changing that folder), then `npm run deploy`. Until the endpoint exists, production builds leave the form out. Local: `npm run contact:dev` alongside `npm run dev`. Details: `serverless/contact/README.md`.

## Where things live

- `src/content/`: all copy. Update `profile.js` (roles), `work.js` (case studies) and `practice.js` (capabilities, leadership practices) here, not in page components.
- `src/site.js`: per-route titles, descriptions, canonical URLs, Open Graph tags and JSON-LD.
- `src/pageRoutes.js`: the route table. Each page is its own JS chunk, loaded before hydrating and before a page swap. A new page needs an entry here, and one in `base` in `src/site.js` to be prerendered and reach the sitemap.
- `src/pages/`: one component per route. `src/components/`: title block, signal path, career line, diagram.
- `src/styles/`: tokens in `base.css`, then shell (`chrome.css`), home, inner pages and diagram styles.
- `scripts/prerender.mjs`: renders each route to static HTML after the build.

Adding a post: add its list fields to `posts` in `src/content/writing.js`, its other fields to `src/content/posts/meta/<slug>.js` and its body to `src/content/posts/<slug>.jsx`. A missing meta or body file fails the build. See the comment at the top of `writing.js` for which field goes where.

Adding a case study: append an entry to `cases` in `src/content/work.js`. The route, sitemap entry, metadata and diagram are generated from it.

Drafted content that still needs verification is listed in `CONTENT-REVIEW.md`.

Community copy and source notes: `src/content/community.js` and `docs/COMMUNITY-CONTENT.md`. The guide stays at `/community/`; About and Mentorship link to it without duplicating the full guide.
