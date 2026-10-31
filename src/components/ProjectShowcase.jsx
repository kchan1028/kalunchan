import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { projects } from '../content/projects';
import { showcase } from '../content/showcase';
import ProjectShot from './ProjectShot';
import { ArrowOut, ArrowRight } from './Icons';

const chosen = (p) => p.decisions[0].options.find((o) => o.chosen).label;
const others = showcase.filter((item) => !item.caseStudy);

// The poster is always in the page, so the project reads the same with no video, no JavaScript or reduced motion.
// The video element only exists once a card is first asked to play, and it stays hidden until frames are running.
function Preview({ item, playing, small, sizes, eager }) {
  const video = useRef(null);
  const [requested, setRequested] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (playing) setRequested(true);
  }, [playing]);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (playing) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0; // The clip's first frame is the poster, so this never shows as a jump.
      setRunning(false);
    }
  }, [playing, requested]);

  return (
    <a className="showcase__media" data-preview={item.slug} href={item.url} target="_blank" rel="noopener" tabIndex={-1}>
      <img
        src={`/images/projects/${item.slug}-poster-960.webp`}
        srcSet={`/images/projects/${item.slug}-poster-640.webp 640w, /images/projects/${item.slug}-poster-960.webp 960w`}
        sizes={sizes}
        width="1280"
        height="800"
        alt={item.posterAlt}
        decoding="async"
        loading={eager ? undefined : 'lazy'}
      />
      {requested && (
        <video
          ref={video}
          className={running ? 'is-running' : undefined}
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setRunning(true)}
        >
          <source src={`/videos/projects/${item.slug}-${small ? 640 : 960}.webm`} type="video/webm" />
          <source src={`/videos/projects/${item.slug}-${small ? 640 : 960}.mp4`} type="video/mp4" />
        </video>
      )}
    </a>
  );
}

export default function ProjectShowcase() {
  const section = useRef(null);
  const hoverTimer = useRef(0);
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const [centred, setCentred] = useState(null);
  const [paused, setPaused] = useState(false);
  // still: posters only. hover: a pointer plays the card under it. touch: the preview in the middle of the screen plays.
  const [mode, setMode] = useState('still');
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const calm = matchMedia('(prefers-reduced-motion: reduce)');
    const fine = matchMedia('(hover: hover) and (pointer: fine)');
    const narrow = matchMedia('(max-width: 899px)');
    const read = () => {
      setSmall(narrow.matches);
      if (calm.matches || navigator.connection?.saveData) setMode('still');
      else setMode(fine.matches ? 'hover' : 'touch');
    };
    read();
    [calm, fine, narrow].forEach((q) => q.addEventListener('change', read));
    return () => [calm, fine, narrow].forEach((q) => q.removeEventListener('change', read));
  }, []);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  useEffect(() => {
    if (mode !== 'touch') return undefined;
    const band = new Set();
    let timer = 0;
    // The root is a band across the middle of the screen, and the last preview into it plays.
    // Settling waits a moment, so scrolling past a preview costs no video.
    const seen = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) band.add(entry.target.dataset.preview);
        else band.delete(entry.target.dataset.preview);
      });
      clearTimeout(timer);
      timer = setTimeout(() => setCentred([...band].at(-1) ?? null), 300);
    }, { rootMargin: '-30% 0px -30% 0px' });
    section.current.querySelectorAll('[data-preview]').forEach((el) => seen.observe(el));
    return () => {
      seen.disconnect();
      clearTimeout(timer);
    };
  }, [mode]);

  // A short delay, so moving the pointer across the section doesn't start six downloads.
  const hoverOn = (slug) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHovered(slug), 120);
  };
  const hoverOff = () => {
    clearTimeout(hoverTimer.current);
    setHovered(null);
  };
  const card = (slug) => ({
    onPointerEnter: (e) => e.pointerType === 'mouse' && hoverOn(slug),
    onPointerLeave: (e) => e.pointerType === 'mouse' && hoverOff(),
    onFocus: (e) => e.target.matches(':focus-visible') && setFocused(slug),
    onBlur: (e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(null),
  });

  const playing = mode === 'hover' ? hovered ?? focused
    : mode === 'touch' && !paused ? centred
    : null;

  return (
    <section className="sheet shipped" ref={section} aria-labelledby="shipped-h" data-coord="310 · Shipped">
      <header className="shipped__head">
        <h2 id="shipped-h" className="h2">Shipped products and sites</h2>
        <p className="body-copy">Each preview is a short recording of the public site. The first three get the full story. VeloWise, below them, is showing its built-in sample project.</p>
      </header>
      {mode !== 'still' && (
        <div className="showcase__controls">
          {mode === 'hover' && <p className="showcase__hint">Hover or tab to a preview to play it</p>}
          {mode === 'touch' && (
            <button type="button" className="showcase__pause" onClick={() => setPaused((p) => !p)}>
              {paused ? 'Play previews' : 'Pause previews'}
            </button>
          )}
        </div>
      )}
      <ol className="shipped__list">
        {projects.map((p, i) => {
          const item = showcase.find((s) => s.slug === p.shot);
          return (
            <li key={p.slug} className="shipped__item showcase__item" {...card(item.slug)}>
              <ProjectShot
                project={p}
                media={(
                  <Preview
                    item={item}
                    playing={playing === item.slug}
                    small={small}
                    sizes="(max-width: 899px) 92vw, (max-width: 1440px) 54vw, 760px"
                    eager={i < 2}
                  />
                )}
              />
              <div className="shipped__body">
                <p className="shipped__kind label">
                  <span className="mono">{p.no}</span> {p.kind}
                </p>
                <h3 className="shipped__name">
                  <Link to={`/projects/${p.slug}/`}>{p.name}</Link>
                </h3>
                <p className="shipped__claim">{p.claim}</p>
                <dl className="shipped__story">
                  <div>
                    <dt className="label">Problem</dt>
                    <dd>{p.problemShort}</dd>
                  </div>
                  <div>
                    <dt className="label">Built</dt>
                    <dd>{p.built.map((b) => b.name).join(' · ')}</dd>
                  </div>
                  <div>
                    <dt className="label">Decision</dt>
                    <dd>{chosen(p)}</dd>
                  </div>
                  <div>
                    <dt className="label">Outcome</dt>
                    <dd>{p.outcome[0]}</dd>
                  </div>
                </dl>
                <div className="shipped__actions">
                  <a className="action" href={p.site} target="_blank" rel="noopener">
                    Visit {p.domainLabel} <ArrowOut />
                  </a>
                  <Link className="link-arrow" to={`/projects/${p.slug}/`}>
                    <span>How I built {p.name}</span> <ArrowRight />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="shipped__more">
        <h3 className="label">Also live</h3>
        <ul className="showcase__grid">
          {others.map((item) => (
            <li key={item.slug} className="showcase__item" {...card(item.slug)}>
              <div className="shot__frame">
                <div className="shot__bar" aria-hidden="true">
                  <span className="mono">{item.domain}</span>
                </div>
                <Preview
                  item={item}
                  playing={playing === item.slug}
                  small={small}
                  sizes="(max-width: 899px) 92vw, (max-width: 1440px) 31vw, 450px"
                />
              </div>
              <div className="showcase__body">
                <h4 className="showcase__name">{item.name}</h4>
                <p className="showcase__type">{item.type}</p>
                <div className="showcase__links">
                  <a href={item.url} target="_blank" rel="noopener" aria-label={`Visit ${item.domain}`}>
                    <span className="mono">{item.domain}</span> <ArrowOut />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
