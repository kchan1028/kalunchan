# Editorial standards for kalunchan.dev

Apply these rules to new articles and edits to existing public content.

- Write in KC’s conversational, straightforward voice: an experienced, hands-on software engineer and engineering leader. Prefer practical explanations, specific tradeoffs and considered opinions over marketing language.
- Do not use em dashes in article prose, or en dashes or double hyphens as sentence separators. Rewrite the sentence to express the relationship naturally; do not mechanically swap punctuation. Numerical ranges and literal code, commands and quoted technical output may retain their required punctuation.
- Remove staged openings, repetitive rhetorical questions, exaggerated claims, generic encouragement, forced contrasts such as “It’s not about X. It’s about Y,” and conclusions that repeat the article as a slogan.
- Give each paragraph a useful point. Vary sentence length naturally, combine dramatic fragments, and remove repeated explanations. Keep questions that support a real investigation or decision.
- Use bold text when it helps someone find information, not as decoration on every bullet. Preserve useful technical lists, headings and article structure.
- Show experience through the work instead of counting it. Do not state KC’s years of experience (“20+ years”, “more than two decades”, “after 20 years in software”) in copy, titles, metadata or structured data. Let projects, decisions and lessons carry the credibility. Where a time anchor helps, vary it naturally (“throughout my career”, “over the course of my career”) or drop it; never swap one stock phrase in everywhere. Historical dates, eras, project timelines and approved founder-story years stay. URL slugs stay unchanged.
- Preserve personal details, uncertainty and opinions supported by KC’s brief or existing source material. Never invent anecdotes, incidents, dates, metrics or personal experience. Do not turn an illustrative scenario into a claimed real event. Check questionable historical or technical claims against primary sources, and qualify broad claims rather than exaggerating them.
- When discussing AI, explain the actual engineering work: learning, validation, fundamentals, security, reliability, operating cost and judgment. Avoid defaulting to a generic debate about replacing developers.
- Preserve SEO titles and descriptions, routes, internal links, structured data, code examples and article formatting unless a specific correction requires a change. Keep visible answers and any corresponding structured data consistent.
- Read the edited paragraphs and ending together before finishing. Check that punctuation is natural, the narrative still sounds personal, and each sentence adds information.
- Run `npm run validate` after content changes. This builds the site and runs the SEO and writing audits. Review warnings as well as failures. Automated checks supplement the editorial review; they do not establish authenticity or factual accuracy.

# Documentation lookup

For library, framework, SDK, API, CLI or cloud-service usage questions, use Context7 outside the default sandbox: first `npx ctx7@latest library <official-name> "<specific concept>"`, then `npx ctx7@latest docs <returned-library-id> "<specific concept>"`. Use at most three commands per question. Use a supplied `/org/project` ID directly. Do not include secrets in queries. On quota errors, report the limit and suggest `npx ctx7@latest login` or `CONTEXT7_API_KEY`. Rerun DNS or network failures outside the sandbox. This lookup is not required for prose editing, general programming, refactoring, business-logic debugging or code review.
