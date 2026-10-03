import { Link } from 'react-router';
import { posts } from '../content/writing';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';

export default function Writing() {
  return (
    <>
      <TitleBlock section="650" title="Writing" cells={[{ k: 'Posts', v: `${posts.length}` }]} />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          Lessons from two decades of building software and leading engineers, and from the community work I do away from a computer: how I learn, make tradeoffs, and decide what’s worth building.
        </p>
      </div>
      <ol className="sheet case-index" data-coord="650 · Index">
        {posts.map((p) => (
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
    </>
  );
}
