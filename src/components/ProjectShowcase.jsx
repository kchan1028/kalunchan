import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { showcase } from '../content/showcase';
import { ArrowLeft, ArrowOut, ArrowRight } from './Icons';

const pad = (n) => String(n).padStart(2, '0');

// The poster is always in the page, so the project reads the same with no video, no JavaScript or reduced motion.
// The video element only exists once a card is first asked to play, and it stays hidden until frames are running.
function Preview({ item, playing, small, index }) {
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
    <a className="showcase__media" href={item.url} target="_blank" rel="noopener" tabIndex={-1}>
      <img
        src={`/images/projects/${item.slug}-poster-960.webp`}
        srcSet={`/images/projects/${item.slug}-poster-640.webp 640w, /images/projects/${item.slug}-poster-960.webp 960w`}
        sizes="(max-width: 899px) 86vw, clamp(420px, 48vw, 680px)"
        width="1280"
        height="800"
        alt={item.posterAlt}
        decoding="async"
        loading={index < 2 ? undefined : 'lazy'}
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
  const track = useRef(null);
  const bar = useRef(null);
  const hoverTimer = useRef(0);
  const settleTimer = useRef(0);
  const viewTimer = useRef(0);
  const frame = useRef(0);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const [inView, setInView] = useState(false);
  const [settled, setSettled] = useState(true);
  const [paused, setPaused] = useState(false);
  // still: posters only. hover: a pointer plays the card under it. swipe: touch plays the card in front.
  const [mode, setMode] = useState('still');
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const calm = matchMedia('(prefers-reduced-motion: reduce)');
    const fine = matchMedia('(hover: hover) and (pointer: fine)');
    const narrow = matchMedia('(max-width: 899px)');
    const read = () => {
      setSmall(narrow.matches);
      if (calm.matches || navigator.connection?.saveData) setMode('still');
      else setMode(fine.matches ? 'hover' : 'swipe');
    };
    read();
    [calm, fine, narrow].forEach((q) => q.addEventListener('change', read));
    return () => [calm, fine, narrow].forEach((q) => q.removeEventListener('change', read));
  }, []);

  useEffect(() => {
    // Coming into view waits a moment, so scrolling down the page past the row costs no video.
    const seen = new IntersectionObserver(([entry]) => {
      clearTimeout(viewTimer.current);
      if (entry.isIntersecting) viewTimer.current = setTimeout(() => setInView(true), 300);
      else setInView(false);
    }, { threshold: 0.5 });
    seen.observe(track.current);
    return () => {
      seen.disconnect();
      clearTimeout(hoverTimer.current);
      clearTimeout(settleTimer.current);
      clearTimeout(viewTimer.current);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  const measure = useCallback(() => {
    frame.current = 0;
    const el = track.current;
    const items = [...el.children];
    const start = items[0].offsetLeft;
    const nearest = items.reduce((best, item, i) => (
      Math.abs(item.offsetLeft - start - el.scrollLeft) < Math.abs(items[best].offsetLeft - start - el.scrollLeft) ? i : best
    ), 0);
    const last = items.at(-1).offsetLeft - start;
    bar.current.style.setProperty('--progress', last > 0 ? Math.min(1, el.scrollLeft / last) : 0);
    setActive(nearest);
  }, []);

  // Nothing plays or downloads mid-swipe, so swiping past a card costs no video.
  const onScroll = () => {
    if (!frame.current) frame.current = requestAnimationFrame(measure);
    setSettled(false);
    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => setSettled(true), 220);
  };

  const go = (index) => {
    const el = track.current;
    const items = el.children;
    if (index < 0 || index >= items.length) return;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: items[index].offsetLeft - items[0].offsetLeft, behavior: calm ? 'auto' : 'smooth' });
  };

  // A short delay, so moving the pointer across the row doesn't start six downloads.
  const hoverOn = (i) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHovered(i), 120);
  };
  const hoverOff = () => {
    clearTimeout(hoverTimer.current);
    setHovered(null);
  };

  const playing = !inView ? null
    : mode === 'hover' ? hovered ?? focused
    : mode === 'swipe' && settled && !paused ? active
    : null;

  return (
    <section className="sheet showcase" aria-labelledby="showcase-h" data-coord="305 · Live">
      <header className="shipped__head">
        <h2 id="showcase-h" className="h2">Six live sites, recorded as they run</h2>
        <p className="body-copy">Each preview is a short recording of the public site. VeloWise is showing its built-in sample project.</p>
      </header>
      <ol className="showcase__track" ref={track} onScroll={onScroll}>
        {showcase.map((item, i) => (
          <li
            key={item.slug}
            className={`showcase__item${i === active ? ' is-active' : ''}`}
            onPointerEnter={(e) => e.pointerType === 'mouse' && hoverOn(i)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && hoverOff()}
            onFocus={(e) => e.target.matches(':focus-visible') && setFocused(i)}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(null)}
          >
            <div className="shot__frame showcase__frame">
              <div className="shot__bar" aria-hidden="true">
                <span className="mono">{item.domain}</span>
              </div>
              <Preview item={item} playing={playing === i} small={small} index={i} />
            </div>
            <div className="showcase__body">
              <h3 className="showcase__name">{item.name}</h3>
              <p className="showcase__type">{item.type}</p>
              <div className="showcase__links">
                <a href={item.url} target="_blank" rel="noopener" aria-label={`Visit ${item.domain}`}>
                  <span className="mono">{item.domain}</span> <ArrowOut />
                </a>
                {item.caseStudy && (
                  <Link className="link-arrow" to={item.caseStudy}>
                    <span>How I built {item.name}</span> <ArrowRight />
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="showcase__controls">
        <p className="showcase__count mono" aria-live="polite">
          <span aria-hidden="true">{pad(active + 1)} / {pad(showcase.length)}</span>
          <span className="visually-hidden">Project {active + 1} of {showcase.length}: {showcase[active].name}</span>
        </p>
        <div className="showcase__progress" ref={bar} aria-hidden="true"><span /></div>
        {mode === 'hover' && <p className="showcase__hint">Hover or tab to a preview to play it</p>}
        {mode === 'swipe' && (
          <button type="button" className="showcase__pause" onClick={() => setPaused((p) => !p)}>
            {paused ? 'Play previews' : 'Pause previews'}
          </button>
        )}
        <div className="showcase__arrows">
          <button type="button" aria-label="Previous project" aria-disabled={active === 0} onClick={() => go(active - 1)}><ArrowLeft /></button>
          <button type="button" aria-label="Next project" aria-disabled={active === showcase.length - 1} onClick={() => go(active + 1)}><ArrowRight /></button>
        </div>
      </div>
    </section>
  );
}
