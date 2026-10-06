import { useState } from 'react';
import { Link } from 'react-router';
import { posts, topics } from '../content/writing';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';

export default function Writing() {
  const [topic, setTopic] = useState(null);
  const shown = topic ? posts.filter((p) => p.topics.includes(topic)) : posts;
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
      <div className="sheet writing-topics" role="group" aria-label="Filter posts by topic">
        <span className="label">Topics</span>
        {[null, ...topics].map((t) => (
          <button key={t || 'all'} type="button" aria-pressed={topic === t} aria-controls="writing-index" onClick={() => setTopic(t)}>
            {t || 'All'}
          </button>
        ))}
        <p className="visually-hidden" aria-live="polite">
          {topic ? `${shown.length} posts about ${topic}` : ''}
        </p>
      </div>
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
    </>
  );
}
