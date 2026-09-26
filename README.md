# kalunchan.dev

Personal site of Ka Lun Chan: engineering leadership, case studies, and operating style.

Built with Vite + React and prerendered to static HTML per route, so every page is crawlable and fast without a server.

## Commands

```sh
npm install
npm run dev       # local dev server
npm run build     # client build → SSR build → prerender every route into build/
npm run preview   # serve build/ locally
npm run audit:seo # validate the built pages, links, metadata, privacy, and backlinks
```

`npm run build` writes `build/<route>/index.html` for every route, plus `404.html` and `sitemap.xml`. Deploy the `build/` folder as-is. The live site sits on an S3 website endpoint behind Cloudflare, which serves directory `index.html` files.

## Where things live

- `src/content/`: all copy. Update `profile.js` (roles), `work.js` (case studies) and `practice.js` (capabilities, leadership practices) here, not in page components.
- `src/site.js`: per-route titles, descriptions, canonical URLs, Open Graph tags and JSON-LD.
- `src/pages/`: one component per route. `src/components/`: title block, signal path, career line, diagram.
- `src/styles/`: tokens in `base.css`, then shell (`chrome.css`), home, inner pages and diagram styles.
- `scripts/prerender.mjs`: renders each route to static HTML after the build.

Adding a case study: append an entry to `cases` in `src/content/work.js`. The route, sitemap entry, metadata and diagram are generated from it.

Drafted content that still needs verification is listed in `CONTENT-REVIEW.md`.

Community copy and source notes: `src/content/community.js` and `docs/COMMUNITY-CONTENT.md`. The guide stays at `/community/`; About and Mentorship link to it without duplicating the full guide.
