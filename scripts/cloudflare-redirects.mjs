// Permanent redirects for kalunchan.dev pages that moved. The S3 website origin can't send a 301 for a path the
// build no longer produces, so each entry in scripts/redirects.json becomes one Cloudflare Single Redirect rule
// (301, query string kept, with and without the trailing slash). scripts/audit-seo.py checks the list against
// the build: every target exists, no source is still built or linked, and no target is itself a source.
//
// Usage:  npm run redirects                 # print the rules, change nothing
//         npm run redirects -- --apply      # write them
//
// Needs CLOUDFLARE_ZONE_ID and a token with Zone · Single Redirect · Edit on kalunchan.dev
// (CLOUDFLARE_REDIRECTS_API_TOKEN, else CLOUDFLARE_RULES_API_TOKEN, else CLOUDFLARE_API_TOKEN). Safe to re-run:
// only rules whose ref starts with kalunchan_redirect_ are replaced; other redirect rules in the zone are kept.
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
const apply = process.argv.includes('--apply');
const config = { ...process.env, ...readEnvFile('.env.production.local'), ...readEnvFile('.env') };
const ORIGIN = 'https://kalunchan.dev';
const PREFIX = 'kalunchan_redirect_';

const redirects = JSON.parse(readFileSync('scripts/redirects.json', 'utf8'));
const sources = new Set(redirects.map((r) => r.from));
for (const { from, to } of redirects) {
  if (!from.startsWith('/') || !from.endsWith('/') || !to.startsWith('/') || !to.endsWith('/')) fail(`Paths must start and end with "/": ${from} → ${to}`);
  if (sources.has(to)) fail(`Redirect chain: ${to} is itself redirected.`);
}

const rules = redirects.map(({ from, to }) => ({
  ref: PREFIX + from.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '').toLowerCase(),
  description: `${from} → ${to} (scripts/cloudflare-redirects.mjs)`,
  expression: `http.request.uri.path in {"${from}" "${from.slice(0, -1)}"}`,
  action: 'redirect',
  action_parameters: { from_value: { target_url: { value: ORIGIN + to }, status_code: 301, preserve_query_string: true } },
  enabled: true,
}));

for (const r of rules) console.log(`  301 ${r.expression}\n      → ${r.action_parameters.from_value.target_url.value}`);
if (!apply) {
  console.log(`\nDry run: ${rules.length} redirect rule(s), nothing changed. Re-run with --apply to write them.`);
  process.exit(0);
}

const zone = config.CLOUDFLARE_ZONE_ID;
const token = config.CLOUDFLARE_REDIRECTS_API_TOKEN || config.CLOUDFLARE_RULES_API_TOKEN || config.CLOUDFLARE_API_TOKEN;
if (!zone || !token) fail('Set CLOUDFLARE_ZONE_ID and CLOUDFLARE_REDIRECTS_API_TOKEN (Zone · Single Redirect · Edit) in .env.');
const url = `https://api.cloudflare.com/client/v4/zones/${zone}/rulesets/phases/http_request_dynamic_redirect/entrypoint`;
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
  .filter((r) => !r.ref?.startsWith(PREFIX))
  .map(({ id, ref, description, expression, action, action_parameters, enabled }) => ({ id, ref, description, expression, action, action_parameters, enabled }));

const put = await cf('PUT', { rules: [...keep, ...rules] });
if (!put.json.success) fail(`Cloudflare did not accept the rules (${put.status}): ${JSON.stringify(put.json.errors)}`);
console.log(`\n✓ ${rules.length} redirect rule(s) written; ${keep.length} other rule(s) kept.`);
console.log(`  Check with: curl -sI ${ORIGIN}${redirects[0].from} | grep -iE "^HTTP|^location"`);
