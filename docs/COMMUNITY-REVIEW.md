# Community expansion review

## Pages changed

- `/community/`: an expanded Berkeley Omnium guide with organizer perspective, three existing event photographs, road race/criterium comparison, omnium explanation, racing heritage, junior/collegiate/women’s development, NICA impact, and participation guidance.
- `/about/`: KC’s confirmed organizing role, the six-team benefit, and contextual event/club links.
- `/mentorship/`: connection between mentoring and rider development, with a direct link to the Community development section.
- Shared behavior: cross-page fragment links scroll correctly; mobile title blocks no longer crowd the section number and title together.
- `/work/`: retains its working route but canonicalizes to `/projects/`; the duplicate listing is omitted from the sitemap.

No new public routes were created. `/community/` remains the single detailed guide to avoid overlapping search targets. The new `Community.jsx` file replaces the short component previously inside `OverviewPages.jsx`.

## Contextual external links

Every link below is followed and uses the exact permanent destination requested. No staging host is present in built HTML, scripts, styles, metadata, structured data, or image references.

| Page | Destination | Anchor text |
| --- | --- | --- |
| Community | https://berkeleyomnium.com/ | Explore Berkeley Omnium |
| Community | https://berkeleyomnium.com/ | Read the Berkeley racing weekend guide |
| Community | https://berkeleyomnium.com/ | Find your place at the race weekend |
| About | https://berkeleyomnium.com/ | Berkeley Omnium |
| Mentorship | https://berkeleyomnium.com/ | Berkeley Hills Road Race and Berkeley Streets Criterium |
| Community | https://berkeleybikeclub.org/ | Berkeley Bicycle Club |
| Community | https://berkeleybikeclub.org/ | Meet the club supporting local cycling |
| About | https://berkeleybikeclub.org/ | Berkeley Bicycle Club |
| Mentorship | https://berkeleybikeclub.org/ | Berkeley Bicycle Club’s cycling community |

Total: five Berkeley Omnium backlinks and four Berkeley Bicycle Club backlinks across three relevant pages. The previous Community link to the club was replaced by this contextual linking arrangement. The shared footer's Yippify and LinkedIn links are preserved.

## SEO and validation

- Production build: passed, 16 routes plus 404.
- `npm run audit:seo`: passed, 17 HTML pages, 272 internal links/anchors, 15 canonical sitemap entries.
- Unique page titles/descriptions, a single H1 per page, sequential heading levels, and matching Open Graph descriptions.
- Community social preview uses an existing race photo with descriptive alt text.
- Community JSON-LD describes a WebPage, its Berkeley Omnium subject, Berkeley Bicycle Club as a SportsOrganization, and breadcrumbs. No invented Event dates or registration offers.
- Local responsive WebP images with intrinsic dimensions; lower-page images load lazily. Original JPEG retained only for social previews.
- Browser checks: 390, 768, 1280, and 1440 pixel widths; no horizontal overflow; all photographs load; shared nav, mobile menu, legacy anchors, and cross-page fragments work; client-side metadata/schema updates pass; no browser console errors.
- Built-output scan: no removed employer names, résumé/PDF links, or temporary hostnames. Year-shaped numeric matches are image dimensions, SVG namespaces, font Unicode ranges, and dependency constants; no visible years or date ranges were added.

### Lighthouse (local production preview, mobile preset)

| Page | SEO | Accessibility | Performance |
| --- | --- | --- | --- |
| Community | 100 | 100 | 90 |
| About | 100 | 100 | Not measured |
| Mentorship | 100 | 100 | Not measured |

Responsive photographs improved Community performance from 78 to 90, with simulated LCP improving from 5.7s to 3.5s. These are local lab results, not live-site field measurements or search-ranking guarantees.

No project-specific SEO scorer existed. Added the repeatable built-output audit and ran the available Lighthouse installation. Used Impeccable's rendered-page audit and the installed design-taste-frontend skill. Awesome Design was not available locally.

Impeccable reported three `cramped-padding` warnings for zero vertical padding on the existing fixed-height action-button pattern. Buttons have vertically centered content and were visually checked without clipping; preserving the established design is appropriate here.

## Fact verification

Source-by-source notes are in [COMMUNITY-CONTENT.md](COMMUNITY-CONTENT.md). KC confirmed helping organize the event, all proceeds benefiting six East Bay NICA teams, and enjoying working with the team and volunteers. Those statements are published.

No further facts need approval for the shipped copy. Specific claims about leading sponsorships, building the event website, running registration, or measurable personal outcomes remain omitted because they were not supplied.

## Files changed in this expansion

- `README.md`
- `package.json`
- `scripts/prerender.mjs`
- `scripts/audit-seo.py` (new)
- `src/App.jsx`
- `src/components/Layout.jsx`
- `src/content/community.js` (new)
- `src/pages/Community.jsx` (new component, existing route)
- `src/pages/OverviewPages.jsx`
- `src/site.js`
- `src/styles/chrome.css`
- `src/styles/community.css` (new)
- `src/styles/index.css`
- `docs/COMMUNITY-CONTENT.md` (new)
- `docs/COMMUNITY-REVIEW.md` (new)
- `public/images/community/berkeley-hills-road-race.jpg` (new)
- `public/images/community/berkeley-hills-road-race-640.webp` (new)
- `public/images/community/berkeley-hills-road-race-1280.webp` (new)
- `public/images/community/berkeley-streets-criterium-640.webp` (new)
- `public/images/community/berkeley-streets-criterium-1280.webp` (new)
- `public/images/community/junior-cyclists-640.webp` (new)
- `public/images/community/junior-cyclists-1280.webp` (new)

The ignored `build/` directory was regenerated; dependencies were not changed.
