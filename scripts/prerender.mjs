// Renders every route to static HTML after the client and SSR builds.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'build');
const { render, routes, headFor } = await import(pathToFileURL(path.join(root, '.ssr/entry-server.js')).href);

const template = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
const assets = fs.readdirSync(path.join(out, 'assets'));
const preload = assets
  .filter((f) => /^archivo-latin-wdth-normal.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');

function write(url, file) {
  const html = template
    .replace('<!--app-head-->', `${headFor(url)}\n    ${preload}`)
    .replace('<!--app-html-->', render(url));
  const dest = path.join(out, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}

for (const r of routes) write(r.path, path.join(r.path, 'index.html'));
write('/404', '404.html');

fs.writeFileSync(
  path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .filter((r) => !r.canonical)
    .map((r) => `  <url><loc>https://kalunchan.dev${r.path}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);
fs.rmSync(path.join(root, '.ssr'), { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes + 404`);
