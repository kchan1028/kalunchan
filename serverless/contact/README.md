# Contact form endpoint

The site is static (prerendered to S3 behind Cloudflare), so the form on `/contact/` posts to a small AWS Lambda function at `POST /contact`. It is the Berkeley Bike Club forms endpoint, cut down to one form.

Mail goes out through Amazon SES using the function's IAM role. There is no SMTP password or API key anywhere: not in the browser, not in this repo, not in environment variables. The inbox comes only from the function's environment, so a browser can never choose where mail goes, and the address never appears on the site.

## How a submission is handled

1. The page validates in the browser (the same rules as the server: `common.mjs`, `contact.mjs`) and posts JSON. Without JavaScript the browser posts the form directly and the function redirects to `/contact/#message-sent` or `/contact/#message-not-sent`, which show a notice through CSS `:target`.
2. The function rejects requests whose `Origin` is not in `ALLOWED_ORIGINS`, bodies over 20 KB, and malformed input.
3. Spam signals: a hidden honeypot field (`website`), and a form sent under 3 seconds after the page loaded. Both get a normal-looking success and nothing is sent.
4. Every field is cleaned and validated again on the server. Single-line fields lose all control characters, so nothing can inject email headers. The visitor's address only goes in Reply-To.
5. Rate limit per visitor (default 5 per hour), keyed on a salted hash of the IP address. The raw IP is never stored or emailed.
6. Duplicate protection: the page sends a random `submissionId` per form fill, so a double click or a retry after a lost response sends one email.
7. SES sends the email. If sending fails, the visitor sees an error that points to LinkedIn, and the submission id is released so they can retry.

Logs record only the outcome and the names of invalid fields, never submitted values, and are kept 30 days. The form sends nothing to analytics. What's collected and kept is stated on `/privacy/` (`src/pages/Privacy.jsx`); keep the two in step.

## Local development

```sh
npm run contact:dev   # http://localhost:8787, writes emails to .contact-outbox/
npm run dev           # the site; dev builds post to http://localhost:8787
```

- `EMAIL_TRANSPORT=fail npm run contact:dev` simulates SES being down.
- Nothing is emailed locally. The dev server uses placeholder `.test` addresses.

Automated tests: `npm run test:contact`.

## Deploying on AWS

1. Add `CONTACT_TO` and `CONTACT_FROM_ADDRESS` to `.env`. See `.env.example`.
2. `npm run contact:email-dns` authenticates the sender's domain so the mail passes DMARC instead of landing in spam (see **Email authentication** below). Run it once, before the first deploy.
3. `npm run contact:deploy` creates or updates, in `us-west-2` by default:
   - the SES identities for the sender and inbox (it starts verification if needed),
   - the IAM role `kalunchan-contact-lambda` (CloudWatch Logs plus `ses:SendEmail` on those identities only),
   - the Lambda `kalunchan-contact` (Node.js 22, reserved concurrency 3 where the account allows),
   - its CloudWatch log group, with 30-day retention,
   - a public function URL. The function answers CORS itself, so the URL has no CORS settings.

   It writes `VITE_CONTACT_ENDPOINT` to `.env.production.local` (gitignored), which the site build picks up. Re-run it after changing any file in this folder or any setting.
4. `npm run deploy` publishes the site with the form. Without `VITE_CONTACT_ENDPOINT`, production builds leave the form out and keep LinkedIn as the only route.

The profile is `CONTACT_AWS_PROFILE`, or `DEPLOY_AWS_PROFILE`. The shell's `AWS_PROFILE` is unset on purpose. The minimum permissions for that profile are in `deployer-policy.json`.

**Email authentication.** Mail goes from `website@kalunchan.dev` to the `CONTACT_TO` inbox. `npm run contact:email-dns` (`scripts/contact-email-dns.mjs`) sets up kalunchan.dev so that mail passes SPF, DKIM and DMARC, all aligned with the From domain:

- SES domain identity `kalunchan.dev` with Easy DKIM (2048-bit): three `_domainkey` CNAMEs, DNS only, never proxied.
- Custom MAIL FROM `mail.kalunchan.dev`: an MX to `feedback-smtp.us-west-2.amazonses.com` and the SPF TXT `v=spf1 include:amazonses.com ~all`. The root domain's records are untouched.
- DMARC `_dmarc.kalunchan.dev`: `v=DMARC1; p=none`. Report-only, so a DNS mistake can't quarantine the form's own mail.

With `CLOUDFLARE_DNS_API_TOKEN` (Zone · DNS · Edit) in `.env` it publishes the records in Cloudflare; otherwise it prints them. It never replaces a record that differs. Re-run it any time to see the DKIM and MAIL FROM status.

**SES sandbox.** New SES accounts can only send to verified addresses. This account has production access, so that doesn't apply.

**DynamoDB (optional).** Without a table, rate limiting and duplicate checks only work within one warm Lambda instance. To share them, create a table with partition key `pk` (String), on-demand capacity and TTL on `expiresAt`, then set `CONTACT_RATE_LIMIT_TABLE` and re-run the deploy.

### Function environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `FORMS_FROM` | Yes | SES-verified sender, e.g. `kalunchan.dev contact form <contact@kalunchan.dev>`. |
| `CONTACT_TO` | Yes | Inbox for messages. |
| `ALLOWED_ORIGINS` | Yes | Comma-separated. Default `https://kalunchan.dev,https://www.kalunchan.dev`. |
| `SITE_URL` | No | Used for the no-JavaScript redirects and in the email. Default `https://kalunchan.dev`. |
| `RATE_LIMIT_TABLE` | No | DynamoDB table name. |
| `RATE_LIMIT_MAX`, `RATE_LIMIT_WINDOW_SECONDS` | No | Default 5 per 3600 seconds. |
| `IP_HASH_SALT` | No | Random string; makes the hashed IP keys unguessable. The deploy generates one. |
| `CLIENT_IP_HEADER` | No | Header a proxy sets with the visitor's address. Never a header the browser controls. |
| `EMAIL_TRANSPORT` | No | `log` or `fail` for testing; unset means SES. |

## Before launch

- [ ] DNS records live and `npm run contact:email-dns` reports DKIM and MAIL FROM `SUCCESS`.
- [ ] A real test message reaches the `CONTACT_TO` inbox, not spam, and **Show original** in Gmail shows SPF, DKIM and DMARC `PASS`.
- [ ] `npm run contact:deploy`, then `npm run deploy`, then send a message from https://kalunchan.dev/contact/.

## Submission retries

Submission IDs are claimed as pending before sending. A completed send is marked sent only after SES accepts the message. Retries of pending submissions return HTTP 409, while retries of sent submissions return success without sending another email. A send failure releases the claim so the same submission can be retried.

If sending succeeds but recording completion fails, the claim remains pending to avoid sending the message twice. This is an uncertain outcome requiring investigation; the endpoint does not claim success. Records expire after one day. Deploy the updated Lambda role along with the code: DynamoDB duplicate checks now also require GetItem permission. Without a DynamoDB table, these guarantees apply only within one warm Lambda instance.
