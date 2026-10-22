// Deploys the click-count Worker (serverless/events/worker.mjs) on kalunchan.dev/e, and reports its counts.
//
// Usage:  npm run events                    # print what would be deployed, change nothing
//         npm run events -- --apply         # upload the Worker and point kalunchan.dev/e at it
//         npm run events -- --report [days] # clicks by event and link over the last 30 (or [days]) days
//
// Needs CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_ZONE_ID and CLOUDFLARE_WORKERS_API_TOKEN (Account · Workers Scripts · Edit,
// Account · Account Analytics · Read, Zone · Workers Routes · Edit on kalunchan.dev), else CLOUDFLARE_API_TOKEN.
// Safe to re-run: the upload replaces the script and the route for kalunchan.dev/e is updated in place.
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
const args = process.argv.slice(2);
const apply = args.includes('--apply');
const report = args.includes('--report');
const config = { ...process.env, ...readEnvFile('.env.production.local'), ...readEnvFile('.env') };
const SCRIPT = 'kalunchan-events';
const DATASET = 'kalunchan_events';
const PATTERN = 'kalunchan.dev/e';
const source = readFileSync('serverless/events/worker.mjs', 'utf8');
const metadata = {
  main_module: 'worker.mjs',
  compatibility_date: '2026-10-01',
  bindings: [{ type: 'analytics_engine', name: 'EVENTS', dataset: DATASET }],
};

if (!apply && !report) {
  console.log(`  Worker ${SCRIPT} (${source.length} bytes), Analytics Engine dataset ${DATASET}`);
  console.log(`  Route  ${PATTERN} → ${SCRIPT}`);
  console.log('\nDry run, nothing changed. Re-run with --apply to deploy, or --report to read the counts.');
  process.exit(0);
}

const account = config.CLOUDFLARE_ACCOUNT_ID;
const zone = config.CLOUDFLARE_ZONE_ID;
const token = config.CLOUDFLARE_WORKERS_API_TOKEN || config.CLOUDFLARE_API_TOKEN;
if (!account || !zone || !token) fail('Set CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_ZONE_ID and CLOUDFLARE_WORKERS_API_TOKEN in .env.');
const api = 'https://api.cloudflare.com/client/v4';
const cf = async (method, path, body, type = 'application/json') => {
  const res = await fetch(api + path, {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(type && { 'Content-Type': type }) },
    body: type === 'application/json' && body ? JSON.stringify(body) : body,
  });
  const text = await res.text();
  try {
    return { status: res.status, json: JSON.parse(text) };
  } catch {
    return { status: res.status, text };
  }
};

if (report) {
  const days = Number(args[args.indexOf('--report') + 1]) || 30;
  const sql = `SELECT blob1 AS event, blob3 AS target, SUM(_sample_interval) AS clicks FROM ${DATASET}
    WHERE timestamp > NOW() - INTERVAL '${days}' DAY GROUP BY event, target ORDER BY clicks DESC FORMAT JSON`;
  const res = await cf('POST', `/accounts/${account}/analytics_engine/sql`, sql, 'text/plain');
  if (res.status !== 200) fail(`Cloudflare refused the query (${res.status}): ${res.text || JSON.stringify(res.json)}`);
  console.log(`Clicks over the last ${days} days:`);
  for (const row of res.json.data) console.log(`  ${String(row.clicks).padStart(5)}  ${row.event.padEnd(15)} ${row.target}`);
  if (!res.json.data.length) console.log('  none yet');
  process.exit(0);
}

const form = new FormData();
form.append('metadata', JSON.stringify(metadata));
form.append('worker.mjs', new Blob([source], { type: 'application/javascript+module' }), 'worker.mjs');
const upload = await cf('PUT', `/accounts/${account}/workers/scripts/${SCRIPT}`, form, null);
if (!upload.json?.success) fail(`Cloudflare did not accept the Worker (${upload.status}): ${JSON.stringify(upload.json?.errors || upload.text)}`);

const routes = await cf('GET', `/zones/${zone}/workers/routes`);
if (!routes.json?.success) fail(`Cloudflare refused to list routes (${routes.status}): ${JSON.stringify(routes.json?.errors)}`);
const existing = routes.json.result.find((r) => r.pattern === PATTERN);
const route = existing
  ? await cf('PUT', `/zones/${zone}/workers/routes/${existing.id}`, { pattern: PATTERN, script: SCRIPT })
  : await cf('POST', `/zones/${zone}/workers/routes`, { pattern: PATTERN, script: SCRIPT });
if (!route.json?.success) fail(`Cloudflare did not accept the route (${route.status}): ${JSON.stringify(route.json?.errors)}`);
console.log(`✓ Worker ${SCRIPT} deployed; ${PATTERN} ${existing ? 'updated' : 'created'}.`);
console.log(`  Check with: curl -si -X POST https://${PATTERN} -H 'Origin: https://kalunchan.dev' -d '{"e":"contact_click","p":"/engineering-leadership/","t":"/contact/"}' | head -1`);
