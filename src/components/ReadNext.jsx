import { Link } from 'react-router';
import { chapterFor, continueReading, elsewhereLinks, journeyFor, postBySlug } from '../content/writing';
import { ArrowLeft, ArrowRight } from './Icons';

// Where a post sits: its chapter, then previous / next within its reading path,
// or within the chapter when the post is in no path.
export function WhereThisFits({ slug }) {
  const c = chapterFor(slug);
  const j = journeyFor(slug);
  if (!c) return null;
  const i = c.slugs.indexOf(slug);
  const prev = j ? j.prev : postBySlug[c.slugs[i - 1]];
  const next = j ? j.next : postBySlug[c.slugs[i + 1]];
  return (
    <nav className="sheet post__journey" aria-labelledby="fits-h">
      <h2 id="fits-h" className="label">Where this fits</h2>
      <p className="post__journey-place">
        <Link to={`/writing/#chapter-${c.id}`}>{c.side ? `Side track: ${c.title}` : `Chapter ${c.no}: ${c.title}`}</Link>
        <span>{c.lead}</span>
      </p>
      <p className="label">
        {j ? (
          <><Link to={`/writing/#path-${j.id}`}>{j.title}</Link>{' · '}Part {j.index + 1} of {j.slugs.length}</>
        ) : (
          <>Post {i + 1} of {c.slugs.length} in this chapter</>
        )}
      </p>
      <div className="post__journey-links">
        {prev ? (
          <Link to={`/writing/${prev.slug}/`} className="link-arrow" rel="prev">
            <ArrowLeft /> <span>{prev.shortTitle || prev.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/writing/${next.slug}/`} className="link-arrow" rel="next">
            <span>{next.shortTitle || next.title}</span> <ArrowRight />
          </Link>
        ) : <span />}
      </div>
    </nav>
  );
}

// Up to three posts to read next, plus curated links elsewhere on the site.
export function ContinueReading({ slug }) {
  const picks = continueReading(slug);
  const elsewhere = elsewhereLinks(slug);
  return (
    <nav className="sheet post__more" aria-labelledby="continue-h">
      <h2 id="continue-h" className="label">Continue reading</h2>
      <ol className="post__more-list">
        {picks.map((p) => (
          <li key={p.slug}>
            <Link to={`/writing/${p.slug}/`} className="post__more-card">
              <span className="post__more-no">{p.no}</span>
              <span className="post__more-body">
                <span className="post__more-title">{p.shortTitle || p.title}</span>
                <span className="post__more-teaser">{p.teaser || p.description}</span>
              </span>
              <span className="post__more-meta">
                <span className="label">{p.minutes} min read</span>
                <span className="post__more-topics">{p.topics.join(' / ')}</span>
              </span>
              <ArrowRight className="post__more-arrow" />
            </Link>
          </li>
        ))}
      </ol>
      <p className="post__elsewhere">
        {elsewhere.map((r) => (
          <Link key={r.to} to={r.to} className="link-arrow">
            <span>{r.label}</span> <ArrowRight />
          </Link>
        ))}
        <Link to="/writing/" className="link-arrow">
          <span>All writing</span> <ArrowRight />
        </Link>
      </p>
    </nav>
  );
}
