# Content to verify before deploying

The 2026 redesign drafted some content from the brief rather than from the previous site. Nothing below is a number, but it is all presented as fact. Confirm, correct, or delete each item. When an item is confirmed, remove its `verify` flag in `src/content/`.

## Case studies (`src/content/work.js`)

| Case | Status | What to check |
|---|---|---|
| 301 From one data center to three continents | Mostly confirmed | Rejected options (CDN only, per-market instances) and the region-by-region rollout are inferred. |
| 302 Publishing platform distribution | `verify` | The +50% figures are confirmed. The approach (structured content, cached rendering, social metadata) is inferred. |
| 303 Public-sector modernization | `verify` | Entire case is drafted: strangler pattern, Django/React, ECS, Terraform, WCAG gates, hand-over. Replace it with a real engagement or remove it. |
| 304 LLM document processing | `verify` | Entire case is drafted, including the 2023 start date. Replace it with a real engagement or remove it. |
| 305 Event-driven microservices | `verify` | Organization and years are unknown ("SaaS platform", "Various"). The outbox and Kafka design is drafted. |
| 306 Carrier capacity planning | Mostly confirmed | The "plan from measured utilization" decision is inferred. |

## Experience (`src/content/profile.js`)

- Yippify start year: shown as **2018 – now**.
- Yippify and Boulevard "Decisions" bullets are drafted (`verifyDecisions`).
- Execution lines for Boulevard and iWorld are reasonable inferences from the original copy.

## Expertise (`src/content/practice.js`)

- The capability matrix (led / practiced / not a focus, per role) is a judgement call. Check every cell.
- The AI & data capability (`verify`): confirm the depth claimed at Boulevard and Yippify.

## Elsewhere

- Colophon location: "San Francisco Bay Area" (inferred from the cycling team).
- Public email: none is shown. Set `person.email` in `profile.js` to add one.
- Leadership practices (101–108) and "Signals I watch" are written in your voice from the brief. Edit them freely.
