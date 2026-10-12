import { Link, useSearchParams } from 'react-router';
import { posts, journeys, postBySlug } from '../content/writing';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';

export default function Writing() {
  const [params, setParams] = useSearchParams();
  const path = journeys.find((j) => j.id === params.get('path')) || null;
  const setPath = (j) => setParams(j ? { path: j.id } : {}, { replace: true });
  // A selected path lists its posts newest first, like the full list.
  const shown = path ? path.slugs.map((slug) => postBySlug[slug]).sort((a, b) => Number(b.no) - Number(a.no)) : posts;
  return (
    <>
      <TitleBlock section="650" title="Writing" cells={[{ k: 'Posts', v: `${posts.length}` }]} />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          Things I’m learning, building, riding and testing.
        </p>
        <p className="page-lead__aside">
          Some of it is about work, and a lot of it isn’t. Usually I write because I wanted to understand how something works, or because I learned something on the bike that I don’t want to forget.
        </p>
      </div>
      <div className="sheet writing-topics" role="group" aria-label="Filter posts by reading path">
        <span className="label">Reading paths</span>
        {[null, ...journeys].map((j) => (
          <button key={j ? j.id : 'all'} type="button" aria-pressed={path === j} aria-controls="writing-index" onClick={() => setPath(j)}>
            {j ? j.title : 'All'}
          </button>
        ))}
        <p className="visually-hidden" aria-live="polite">
          {path ? `${shown.length} posts in ${path.title}, newest first` : ''}
        </p>
      </div>
      {path && (
        <p className="sheet writing-path-lead" id={`path-${path.id}`}>
          <strong>{path.title}.</strong> {path.lead} Newest first.
        </p>
      )}
      <ol id="writing-index" className="sheet case-index" data-coord="650 · Index">
        {shown.map((p) => (
          <li key={p.slug}>
            <Link to={`/writing/${p.slug}/`} className="case-index__row">
              <span className="case-index__no">{p.no}</span>
              <span className="case-index__body">
                <span className="case-index__title">{p.title}</span>
                <span className="case-index__summary">{p.summary}</span>
              </span>
              <span className="case-index__meta">
                <span className="label">{p.minutes} min read</span>
                <span className="case-index__domains">{p.topics.join(' / ')}</span>
              </span>
              <ArrowRight className="case-index__arrow" />
            </Link>
          </li>
        ))}
      </ol>
      <aside className="sheet writing-next" aria-labelledby="writing-next-title">
        <h2 id="writing-next-title" className="h3">Working through one of these problems?</h2>
        <p className="body-copy">If you’re dealing with something a post touches on, at work or on the bike, I’m happy to compare notes.</p>
        <div className="writing-next__links">
          <Link to="/contact/?topic=advice#start" className="action">Ask me about it <ArrowRight /></Link>
          <Link to="/work/" className="link-arrow"><span>See the case studies</span> <ArrowRight /></Link>
        </div>
      </aside>
    </>
  );
}
