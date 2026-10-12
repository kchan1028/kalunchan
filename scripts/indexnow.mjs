// Tells IndexNow (Bing, Yandex, Seznam, Naver and others) about new and updated pages after a deploy.
// Compares build/sitemap.xml with the URLs and lastmod dates already submitted (.deploy/indexnow.tsv, local and
// gitignored) and submits only what is new or changed, so publishing a post submits that post and the pages
// that list it. The key is public by design: IndexNow verifies it at https://kalunchan.dev/<key>.txt.
//
// Usage:  node scripts/indexnow.mjs            # submit (run by npm run deploy after the cache purge)
//         node scripts/indexnow.mjs --dry-run  # list what would be submitted
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

process.chdir(fileURLToPath(new URL('..', import.meta.url)));

const KEY = 'a8fdfa3e4ab9b7f32e906f783ee853bf';
const HOST = 'kalunchan.dev';
const stateFile = '.deploy/indexnow.tsv';
const dryRun = process.argv.includes('--dry-run');

if (!existsSync(`public/${KEY}.txt`)) throw new Error(`public/${KEY}.txt is missing; IndexNow can't verify the key without it.`);
const sitemap = readFileSync('build/sitemap.xml', 'utf8');
const current = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map(([, url, mod]) => [url, mod || '']);
const sent = existsSync(stateFile)
  ? Object.fromEntries(readFileSync(stateFile, 'utf8').split('\n').filter(Boolean).map((line) => line.split('\t')))
  : {};
const changed = current.filter(([url, mod]) => sent[url] !== mod).map(([url]) => url);

if (!changed.length) {
  console.log('  IndexNow: nothing new or updated to submit.');
  process.exit(0);
}
if (dryRun) {
  console.log(`  IndexNow: would submit ${changed.length} URL(s):\n${changed.map((u) => `    ${u}`).join('\n')}`);
  process.exit(0);
}

// One request takes up to 10,000 URLs; this site is far below that.
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: changed }),
  signal: AbortSignal.timeout(30000),
});
if (res.status !== 200 && res.status !== 202) {
  throw new Error(`IndexNow refused the submission (${res.status}): ${await res.text().catch(() => '')}`);
}
mkdirSync('.deploy', { recursive: true });
writeFileSync(stateFile, `${current.map(([url, mod]) => `${url}\t${mod}`).join('\n')}\n`);
console.log(`  IndexNow: submitted ${changed.length} URL(s).`);
