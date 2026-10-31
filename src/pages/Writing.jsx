import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { posts, postBySlug, startHere, journeys, chapters, topics } from '../content/writing';
import TitleBlock from '../components/TitleBlock';
import WritingJourney from '../components/WritingJourney';
import { ArrowRight } from '../components/Icons';

const minutesOf = (slugs) => slugs.reduce((n, s) => n + postBySlug[s].minutes, 0);
const PostLink = ({ p }) => <Link to={`/writing/${p.slug}/`}>{p.shortTitle || p.title}</Link>;

// Shown first in each chapter; the rest sit behind a toggle.
const CHAPTER_VISIBLE = 3;
// Newest posts shown before the archive folds. The fold only happens after hydration, so without JS every row is visible.
const ARCHIVE_VISIBLE = 15;

export default function Writing() {
  const start = startHere.map((s) => postBySlug[s]);
  const [topic, setTopic] = useState(null);
  const [folded, setFolded] = useState(false);
  useEffect(() => setFolded(true), []);
  const matches = (p) => !topic || p.topics.includes(topic);
  const shownCount = posts.filter(matches).length;
  const isFolded = folded && !topic;
  return (
    <>
      <TitleBlock section="650" title="Writing" cells={[{ k: 'Posts', v: `${posts.length}` }, { k: 'Chapters', v: `${chapters.length}` }]} />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          Things I’m learning, building, riding and testing.
        </p>
        <p className="page-lead__aside">
          Some of it is about work, and a lot of it isn’t. Usually I write because I wanted to understand how something works, or because I learned something on the bike that I don’t want to forget.
        </p>
      </div>
      <div className="sheet writing-doors">
        <a href="#journey" className="action">Take the journey <ArrowRight /></a>
        <a href="#path-hiring" className="link-arrow"><span>Hiring an engineering leader</span> <ArrowRight /></a>
        <a href="#all-posts" className="link-arrow"><span>Browse all {posts.length} posts</span> <ArrowRight /></a>
      </div>

      <WritingJourney />

      <div id="library" className="sheet writing-library" data-coord="650-6 · Library">
        <h2 className="h2">The library</h2>
        <p className="writing-section__lead">The same posts, for browsing: a short list to start with, reading paths, chapters and the full archive.</p>
        <nav className="writing-jump" aria-label="In the library">
          <a href="#start-here">Start here</a>
          <a href="#paths">Reading paths</a>
          <a href="#chapters">Chapters</a>
          <a href="#all-posts">All posts</a>
        </nav>
      </div>

      <section id="start-here" className="sheet writing-section" aria-labelledby="start-here-h">
        <h2 id="start-here-h" className="h3">Start here</h2>
        <p className="writing-section__lead">If you only read five posts, read these, in this order. About {minutesOf(startHere)} minutes in all.</p>
        <ol className="case-index writing-start">
          {start.map((p, i) => (
            <li key={p.slug}>
              <Link to={`/writing/${p.slug}/`} className="case-index__row">
                <span className="case-index__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="case-index__body">
                  <span className="case-index__title">{p.shortTitle || p.title}</span>
                  <span className="case-index__summary">{p.teaser || p.description}</span>
                </span>
                <span className="case-index__meta">
                  <span className="label">{p.minutes} min read</span>
                  <span className="case-index__domains">No. {p.no}</span>
                </span>
                <ArrowRight className="case-index__arrow" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="paths" className="sheet writing-section" aria-labelledby="paths-h">
        <h2 id="paths-h" className="h3">Reading paths</h2>
        <p className="writing-section__lead">Short, ordered paths depending on why you’re here. Each post links to the next one in its path.</p>
        <div className="writing-paths">
          {journeys.map((j) => (
            <section key={j.id} id={`path-${j.id}`} className="writing-path" aria-labelledby={`path-${j.id}-h`}>
              <h3 id={`path-${j.id}-h`} className="writing-path__title">{j.title}</h3>
              <p className="label">{j.slugs.length} posts · {minutesOf(j.slugs)} min</p>
              <p className="writing-path__lead">{j.lead}</p>
              <ol className="writing-path__steps">
                {j.slugs.map((s) => <li key={s}><PostLink p={postBySlug[s]} /></li>)}
              </ol>
            </section>
          ))}
        </div>
      </section>

      <section id="chapters" className="sheet writing-section" aria-labelledby="chapters-h">
        <h2 id="chapters-h" className="h3">Chapters</h2>
        <p className="writing-section__lead">The same stages as the career timeline on the homepage, in the order I lived them, then two side tracks. Each chapter starts with the post I’d read first.</p>
        <ol className="writing-chapters">
          {chapters.map((c, i) => {
            const [anchor, ...rest] = c.slugs.map((s) => postBySlug[s]);
            const shown = rest.slice(0, CHAPTER_VISIBLE);
            const more = rest.slice(CHAPTER_VISIBLE);
            return (
              <li key={c.id} id={`chapter-${c.id}`} className={`writing-chapter${c.side ? ' writing-chapter--side' : ''}`}>
                <div className="writing-chapter__head">
                  <span className="writing-chapter__no">{c.side ? 'Side track' : `Chapter ${String(i + 1).padStart(2, '0')}`}</span>
                  <h3 className="writing-chapter__title">{c.title}</h3>
                  <p className="writing-chapter__lead">{c.lead}</p>
                </div>
                <div className="writing-chapter__posts">
                  <Link to={`/writing/${anchor.slug}/`} className="writing-chapter__anchor">
                    <span className="label">Start with · {anchor.minutes} min</span>
                    <span className="writing-chapter__anchor-title">{anchor.shortTitle || anchor.title}</span>
                    <span className="writing-chapter__anchor-teaser">{anchor.teaser || anchor.description}</span>
                  </Link>
                  {shown.length > 0 && (
                    <ul className="writing-chapter__list">
                      {shown.map((p) => <li key={p.slug}><PostLink p={p} /></li>)}
                    </ul>
                  )}
                  {more.length > 0 && (
                    <details className="writing-chapter__more">
                      <summary>{more.length} more in this chapter</summary>
                      <ul className="writing-chapter__list">
                        {more.map((p) => <li key={p.slug}><PostLink p={p} /></li>)}
                      </ul>
                    </details>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="all-posts" className="sheet writing-section" aria-labelledby="all-posts-h">
        <h2 id="all-posts-h" className="h3">All posts</h2>
        <p className="writing-section__lead">Everything, newest first.</p>
        <div className="writing-filter" role="group" aria-label="Filter posts by topic">
          {[null, ...topics].map((t) => (
            <button key={t || 'all'} type="button" aria-pressed={topic === t} onClick={() => setTopic(t)}>{t || 'All topics'}</button>
          ))}
        </div>
        <p className="writing-filter__count label" role="status">{topic ? `${shownCount} of ${posts.length} posts in ${topic}` : `${posts.length} posts`}</p>
        <ol id="writing-index" className="case-index writing-archive" data-coord="650 · Index">
          {posts.map((p, i) => (
            <li key={p.slug} hidden={!matches(p) || (isFolded && i >= ARCHIVE_VISIBLE)}>
              <Link to={`/writing/${p.slug}/`} className="case-index__row">
                <span className="case-index__no">{p.no}</span>
                <span className="case-index__body">
                  <span className="case-index__title">{p.title}</span>
                  <span className="case-index__summary">{p.teaser || p.description}</span>
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
        {isFolded && (
          <button type="button" className="action writing-archive__more" onClick={() => setFolded(false)}>Show all {posts.length} posts</button>
        )}
      </section>
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
