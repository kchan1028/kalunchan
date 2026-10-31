import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { acts } from '../content/writing';
import { ArrowRight } from './Icons';
import PressedType from './PressedType';
import useJourneyMotion from './useJourneyMotion';

// Five acts through the writing, under one blue field that stays pinned while the articles pass beside it.
// Every act is in the HTML in reading order; the field and its motion only exist on screens with room for them.
export default function WritingJourney() {
  const ref = useRef(null);
  const [current, setCurrent] = useState(acts[0].id);
  useJourneyMotion(ref);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) setCurrent(e.target.dataset.act);
    }), { rootMargin: '-45% 0px -50% 0px' });
    ref.current.querySelectorAll('.jrny-act').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="journey" className="jrny" aria-labelledby="journey-h">
      <h2 id="journey-h" className="visually-hidden">The journey</h2>
      <div className="jrny__field on-blue" aria-hidden="true" />
      <nav className="jrny__nav" aria-label="Journey acts">
        <div className="jrny__nav-links">
          {acts.map((a) => (
            <a key={a.id} href={`#act-${a.id}`} aria-current={a.id === current ? 'true' : undefined}>{a.short}</a>
          ))}
        </div>
        <span className="jrny__progress" aria-hidden="true" />
      </nav>
      {acts.map((a, i) => (
        <article key={a.id} id={`act-${a.id}`} className="jrny-act sheet" data-act={a.id} data-coord={`650-${i + 1} · ${a.short}`} aria-labelledby={`act-${a.id}-h`}>
          <div className="jrny-panel">
            <span className="jrny-panel__no" aria-hidden="true">{i + 1}</span>
            <h3 id={`act-${a.id}-h`} className="jrny-panel__title"><PressedType text={a.title} onScroll /></h3>
            <p className="jrny-panel__principle">{a.principle}</p>
            {a.proof && <p className="jrny-panel__proof">{a.proof}</p>}
            {a.figure && (
              <div className="jrny-fig" role="figure" aria-labelledby={`act-${a.id}-fig`}>
                <p id={`act-${a.id}-fig`} className="jrny-fig__cap"><span className="mono">{a.figure.no}</span> {a.figure.title}</p>
                <div className="jrny-fig__steps">
                  <span className="jrny-fig__line" aria-hidden="true" />
                  <ol>
                    {a.figure.steps.map((s) => (
                      <li key={s}><span className="jrny-fig__node" aria-hidden="true"><span className="jrny-fig__fill" /></span>{s}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
          <div className="jrny-act__body">
            <ol className="jrny-act__posts">
              {a.posts.map((p, n) => (
                <li key={p.slug} className={`jrny-post${n === 0 ? ' jrny-post--lead' : ''}`}>
                  <span className="jrny-post__rule" aria-hidden="true" />
                  <Link to={`/writing/${p.slug}/`} className="jrny-post__link">
                    <span className="jrny-post__title">{p.shortTitle || p.title}</span>
                    <span className="jrny-post__teaser">{p.teaser || p.description}</span>
                    <span className="label">{p.minutes} min read</span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="jrny-act__more">
              <ul>
                {a.chapters.map((c) => (
                  <li key={c.id}><a href={`#chapter-${c.id}`}>{c.title}: all {c.slugs.length} posts</a></li>
                ))}
              </ul>
              <Link to={a.next.to} className="link-arrow"><span>{a.next.label}</span> <ArrowRight /></Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
