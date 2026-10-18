# Content to verify before deploying

The 2026 redesign drafted some content from the brief rather than from the previous site. Nothing below is a number, but it is all presented as fact. Confirm, correct, or delete each item. When an item is confirmed, remove its `verify` flag in `src/content/`.

## Case studies (`src/content/work.js`)

| Case | Status | What to check |
|---|---|---|
| 301 From one data center to three continents | Mostly confirmed | Rejected options (CDN only, per-market instances, relaying every call through one site) and the region-by-region rollout are inferred. Expanded text is drawn from the founder and capacity-planning posts; inferred: the migration ran alongside day-to-day operations, the 30+ team "over the life of the company", and the tradeoffs (replicated writes travelling further, extra operational attention). |
| 302 Publishing platform distribution | `verify` | The +50% and ~30% AWS figures and the WordPress → Rails on AWS re-platform are confirmed. The approach (structured content, cached rendering, social metadata) is inferred. The options are now labelled as a design discussion rather than a record of rejected proposals. Expanded text is drawn from the publishing SEO post; inferred: the rejected "keep extending WordPress" option, the CMS field list, redirect maps as part of the re-platform, and title-specific requests waiting. |
| 303 Public-sector modernization | Illustrative design | Converted to a hypothetical scenario. Client role and delivered outcomes removed. Do not describe it as a completed engagement without a confirmed source. |
| 304 LLM document processing | Illustrative design | Converted to a hypothetical document-intake design, with proposed goals and review criteria. No client engagement or achieved outcome is claimed. |
| 305 Event-driven microservices | Illustrative design | Converted to a hypothetical SaaS design. The outbox and Kafka discussion remains educational; no organization, client role or delivered result is claimed. |
| 306 Carrier capacity planning | Mostly confirmed | The "plan from measured utilization" decision is inferred. Expanded text is drawn from the capacity-planning post and the Experience role; inferred: the rejected options in the headroom and operations decisions, planning each network layer from its own data, and the two tradeoffs. |

## Shipped projects (`src/content/projects.js`)

Features, audiences and outcomes come from the live sites and the owner's brief. No metrics are claimed. Each project is flagged `verify` because the decision rationale (rejected options and notes) is drafted.

| Project | What to check |
|---|---|
| 311 FedPath | Role ("Product, design & engineering") and "Independent product". Rejected options: AI scoring, search-only product, gated search. |
| 312 Berkeley Omnium | Role ("Organizing team · website, promotion & partnerships"). Rejected options: one site per race, text-and-gallery site. |
| 313 Union City Smog Check | Rejected options: stock imagery, online booking, site-builder/CMS. "Static prerendered React" per the owner's brief. |

Screenshots in `public/images/projects/` were captured from the live sites; re-capture them when a site changes. The Union City desktop screenshot shows the live "Closed now" hours badge from the time of capture.

## Experience (`src/content/profile.js`)

- Yippify start year: shown as **2018 – now**.
- Yippify and Boulevard "Decisions" bullets are drafted (`verifyDecisions`).
- Execution lines for Boulevard and iWorld are reasonable inferences from the original copy.

## Expertise (`src/content/practice.js`)

- The capability matrix (led / practiced / not a focus, per role) is a judgement call. Check every cell.
- The AI & data capability (`verify`): confirm the depth claimed at Boulevard and Yippify.

## Elsewhere

- Learning article draft: `src/content/posts/learning-hermes-building-ai-automation-around-the-clock.jsx`. Proposed title, meta description, Learning/AI topics, and related links are in `draftMetadata`. Body and table of contents follow the existing JSX post format. Personal facts are from KC's brief; technical claims link to official documentation checked October 10, 2026. Review the voice and planned workflow before enabling production registration. It is visible without a draft label in the development Writing page and Learning path. The registry includes it only when import.meta.env.DEV is true, so production builds exclude its route and sitemap entry. No publication date is assigned.

- Colophon location: "San Francisco Bay Area" (inferred from the cycling team).
- Public email: none is shown. Set `person.email` in `profile.js` to add one.
- Leadership practices (101–108) and "Signals I watch" are written in your voice from the brief. Edit them freely.
- Contact reply channel: the unconfirmed two-business-day promise was removed. The form and contact page now state only that replies go to the supplied email address.

The AI-style cleanup also recast article references to 303–305 as illustrative designs, including the microservices, DevOps, forward-engineering, federal-applications and architecture articles. Routes and incoming links remain available.
