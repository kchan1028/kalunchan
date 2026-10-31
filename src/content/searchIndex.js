// What site search looks through: pages, posts, case studies and projects, from their titles, summaries and topics.
// Post bodies and SEO metadata stay out, since they load per post. SiteSearch loads this chunk the first time it opens.
import { nav } from '../components/Layout';
import { posts } from './writing';
import { cases } from './work';
import { projects } from './projects';

const normalize = (s) => s.toLowerCase().replace(/’/g, "'");

const entry = ({ to, title, kind, tags = [], text = [], snippet = '' }) => ({
  to,
  title,
  kind,
  snippet,
  searchTitle: normalize(title),
  searchTags: normalize(tags.join(' ')),
  searchText: normalize(text.filter(Boolean).join(' ')),
});

const entries = [
  ...nav.map((n) => entry({ to: n.to, title: n.label, kind: 'Page' })),
  entry({ to: '/engineering-leadership/', title: 'Engineering leadership', kind: 'Page' }),
  ...projects.map((p) => entry({
    to: `/projects/${p.slug}/`,
    title: p.name,
    kind: 'Project',
    tags: p.domain,
    text: [p.kind, p.claim, p.problemShort],
    snippet: p.claim,
  })),
  ...cases.map((c) => entry({
    to: `/work/${c.slug}/`,
    title: c.title,
    kind: c.illustrative ? 'Design example' : 'Case study',
    tags: c.domain,
    text: [c.summary, c.claim, c.org, c.role],
    snippet: c.summary,
  })),
  ...posts.map((p) => entry({
    to: `/writing/${p.slug}/`,
    title: p.title,
    kind: 'Post',
    tags: p.topics,
    text: [p.shortTitle, p.description, p.teaser, p.summary],
    snippet: p.teaser || p.description,
  })),
];

// Every word has to appear somewhere. Titles count most, then topics, then the rest.
function score(e, words) {
  let total = 0;
  for (const word of words) {
    const inTitle = e.searchTitle.includes(word);
    if (!inTitle && !e.searchTags.includes(word) && !e.searchText.includes(word)) return 0;
    if (inTitle) total += ` ${e.searchTitle}`.includes(` ${word}`) ? 6 : 4;
    if (e.searchTags.includes(word)) total += 2;
    if (e.searchText.includes(word)) total += 1;
  }
  return total;
}

export function search(query) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const exact = words.join(' ');
  return entries
    .map((e) => ({ e, s: score(e, words) + (e.searchTitle === exact ? 20 : 0) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .map((r) => r.e);
}
