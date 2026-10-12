// Renders every route to static HTML after the client and SSR builds.
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// BUILD_DIR lets validation render into a scratch directory instead of build/.
const out = path.resolve(root, process.env.BUILD_DIR || 'build');
const { render, routes, headFor, llmsTxt, loadAllBodies } = await import(pathToFileURL(path.join(root, '.ssr/entry-server.js')).href);
// Post bodies are lazy chunks; load them all so render() stays synchronous.
await loadAllBodies();

// Inline the single stylesheet: one fewer render-blocking request before first paint.
const template = fs.readFileSync(path.join(out, 'index.html'), 'utf8').replace(
  /<link rel="stylesheet"[^>]*href="\/assets\/([^"]+\.css)"[^>]*>/,
  (_, file) => `<style>${fs.readFileSync(path.join(out, 'assets', file), 'utf8')}</style>`
);
const assets = fs.readdirSync(path.join(out, 'assets'));
const preload = assets
  .filter((f) => /^archivo-latin-wdth-normal.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');

// Each post page preloads its own body chunk, so hydration doesn't wait on a second round trip.
const manifestFile = path.join(out, '.vite', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
fs.rmSync(path.join(out, '.vite'), { recursive: true, force: true });
const bodyChunk = (slug) => manifest[`src/content/posts/${slug}.jsx`]?.file;

// lastmod for every page that isn't a post (posts keep their own dates): the date its <main> content last
// changed, tracked by content hash in src/lastmod.json. Commit that file; a date moves only on a genuine edit.
const lastmodFile = path.join(root, 'src', 'lastmod.json');
const lastmod = JSON.parse(fs.readFileSync(lastmodFile, 'utf8'));
const today = new Date().toISOString().slice(0, 10);
let lastmodChanged = false;
function modifiedFor(route, body) {
  if (route.post) return route.post.modified;
  if (route.canonical || !routes.includes(route)) return undefined;
  const main = body.match(/<main[\s\S]*<\/main>/)?.[0] ?? body;
  const hash = createHash('sha256').update(main).digest('hex').slice(0, 16);
  const prev = lastmod[route.path];
  if (prev?.hash !== hash) {
    // A seeded entry (date, no hash yet) keeps its date the first time it is hashed.
    lastmod[route.path] = { date: prev && !prev.hash ? prev.date : today, hash };
    lastmodChanged = true;
  }
  return lastmod[route.path].date;
}

const modified = {};
function write(route, file) {
  const body = render(route.path);
  const date = modifiedFor(route, body);
  if (date) modified[route.path] = date;
  const chunk = route.post && bodyChunk(route.post.slug);
  const head = [headFor(route.path, { modified: date }), preload, chunk && `<link rel="modulepreload" href="/${chunk}" />`].filter(Boolean);
  const html = template
    .replace('<!--app-head-->', head.join('\n    '))
    .replace('<!--app-html-->', body);
  const dest = path.join(out, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}

for (const r of routes) write(r, path.join(r.path, 'index.html'));
write({ path: '/404' }, '404.html');
if (lastmodChanged) fs.writeFileSync(lastmodFile, `${JSON.stringify(lastmod, null, 2)}\n`);

fs.writeFileSync(
  path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .filter((r) => !r.canonical)
    .map((r) => `  <url><loc>https://kalunchan.dev${r.path}</loc>${modified[r.path] ? `<lastmod>${modified[r.path]}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`
);
fs.writeFileSync(path.join(out, 'llms.txt'), llmsTxt());
fs.rmSync(path.join(root, '.ssr'), { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes + 404`);
