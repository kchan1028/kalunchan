// Security response headers for kalunchan.dev. The S3 website origin can't set them, so they're added at the
// Cloudflare edge by one Response Header Transform Rule: HSTS, CSP, nosniff, X-Frame-Options, Referrer-Policy and
// Permissions-Policy. The CSP allows any hashed inline script in build/index.html (run npm run build first),
// the Cloudflare Web Analytics beacon and the contact form endpoint in .env.production.local.
//
// Usage:  npm run headers                 # print the rule, change nothing
//         npm run headers -- --apply      # write it, CSP as Content-Security-Policy-Report-Only
//         npm run headers -- --apply --enforce   # once the browser console shows no CSP reports
//
// Needs CLOUDFLARE_ZONE_ID and a token with Zone · Transform Rules · Edit on kalunchan.dev
// (CLOUDFLARE_RULES_API_TOKEN, else CLOUDFLARE_API_TOKEN). Safe to re-run: only this rule is replaced; other
// response header rules in the zone are kept.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

process.chdir(fileURLToPath(new URL('..', import.meta.url)));

function readEnvFile(file) {
  if (!existsSync(file)) return {};
  return Object.fromEntries(readFileSync(file, 'utf8').split('\n')
    .map((line) => line.trim().match(/^([A-Z0-9_]+)=(.*)$/))
    .filter(Boolean)
    .map(([, key, value]) => [key, value.replace(/^(['"])(.*)\1$/, '$2')]));
}

const fail = (message) => { console.error(message); process.exit(1); };
const args = new Set(process.argv.slice(2));
const apply = args.has('--apply');
const enforce = args.has('--enforce');
const config = { ...process.env, ...readEnvFile('.env.production.local'), ...readEnvFile('.env') };

// ---------- CSP sources ----------
if (!existsSync('build/index.html')) fail('build/index.html is missing. Run npm run build first so the inline script can be hashed.');
const html = readFileSync('build/index.html', 'utf8');
// Inline scripts the browser executes (JSON-LD is data, not script, and needs no hash).
const inline = [...html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const hashes = inline.map((body) => `'sha256-${createHash('sha256').update(body).digest('base64')}'`);
const contact = config.VITE_CONTACT_ENDPOINT ? new URL(config.VITE_CONTACT_ENDPOINT).origin : '';

const csp = [
  "default-src 'self'",
  // Cloudflare Web Analytics: the beacon is injected at the edge and reports to cloudflareinsights.com.
  ['script-src', "'self'", ...hashes, 'https://static.cloudflareinsights.com'].join(' '),
  // Prerender inlines the CSS, and components set custom properties through style attributes.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self' https://cloudflareinsights.com ${contact}`.trim(),
  // Without JavaScript the contact form posts straight to the endpoint.
  `form-action 'self' ${contact}`.trim(),
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const headers = {
  // No includeSubDomains or preload: both are hard to undo, so add them only once every subdomain serves HTTPS.
  'Strict-Transport-Security': 'max-age=31536000',
  [enforce ? 'Content-Security-Policy' : 'Content-Security-Policy-Report-Only']: csp,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
};

const REF = 'kalunchan_security_headers';
const rule = {
  ref: REF,
  description: 'kalunchan.dev security headers (scripts/cloudflare-security-headers.mjs)',
  expression: 'true',
  action: 'rewrite',
  action_parameters: { headers: Object.fromEntries(Object.entries(headers).map(([k, value]) => [k, { operation: 'set', value }])) },
  enabled: true,
};

console.log(`Inline scripts hashed: ${hashes.length}${contact ? `; contact endpoint: ${contact}` : '; no contact endpoint set'}`);
for (const [k, v] of Object.entries(headers)) console.log(`  ${k}: ${v}`);
if (!apply) {
  console.log('\nDry run: nothing was changed. Re-run with --apply to write the rule.');
  process.exit(0);
}

// ---------- Cloudflare ----------
const zone = config.CLOUDFLARE_ZONE_ID;
const token = config.CLOUDFLARE_RULES_API_TOKEN || config.CLOUDFLARE_API_TOKEN;
if (!zone || !token) fail('Set CLOUDFLARE_ZONE_ID and CLOUDFLARE_RULES_API_TOKEN (Zone · Transform Rules · Edit) in .env.');
const url = `https://api.cloudflare.com/client/v4/zones/${zone}/rulesets/phases/http_response_headers_transform/entrypoint`;
const cf = async (method, body) => {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body && JSON.stringify(body),
  });
  return { status: res.status, json: await res.json().catch(() => ({})) };
};

const current = await cf('GET');
if (current.status !== 200 && current.status !== 404) fail(`Cloudflare refused to read the ruleset (${current.status}): ${JSON.stringify(current.json.errors)}`);
const keep = (current.json.result?.rules || [])
  .filter((r) => r.ref !== REF)
  .map(({ id, ref, description, expression, action, action_parameters, enabled }) => ({ id, ref, description, expression, action, action_parameters, enabled }));

const put = await cf('PUT', { rules: [...keep, rule] });
if (!put.json.success) fail(`Cloudflare did not accept the rule (${put.status}): ${JSON.stringify(put.json.errors)}`);
console.log(`\n✓ Security headers rule written (${enforce ? 'CSP enforced' : 'CSP report-only'}); ${keep.length} other rule(s) kept.`);
console.log('  Check with: curl -sI https://kalunchan.dev/ | grep -iE "strict|content-security|x-frame|x-content|referrer|permissions"');
