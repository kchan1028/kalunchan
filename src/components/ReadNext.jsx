import { Link } from 'react-router';
import { continueReading, elsewhereLinks, journeyFor } from '../content/writing';
import { ArrowLeft, ArrowRight } from './Icons';

// Previous / next within the reading path a post belongs to.
export function JourneyNav({ slug }) {
  const j = journeyFor(slug);
  if (!j) return null;
  return (
    <nav className="sheet post__journey" aria-label={`Reading path: ${j.title}`}>
      <p className="label">
        <Link to={`/writing/?path=${j.id}`}>{j.title}</Link>
        {' · '}Part {j.index + 1} of {j.slugs.length}
      </p>
      <div className="post__journey-links">
        {j.prev ? (
          <Link to={`/writing/${j.prev.slug}/`} className="link-arrow" rel="prev">
            <ArrowLeft /> <span>{j.prev.shortTitle || j.prev.title}</span>
          </Link>
        ) : <span />}
        {j.next ? (
          <Link to={`/writing/${j.next.slug}/`} className="link-arrow" rel="next">
            <span>{j.next.shortTitle || j.next.title}</span> <ArrowRight />
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
