import { shotSrc } from '../content/projects';

// Desktop screenshot in a ruled frame, with the phone view laid over its corner.
export default function ProjectShot({ project: p, sizes, eager = false, caption }) {
  const s = shotSrc(p);
  const load = eager ? { fetchPriority: 'high' } : { loading: 'lazy', decoding: 'async' };
  return (
    <figure className="shot">
      <div className="shot__frame">
        <div className="shot__bar" aria-hidden="true">
          <span className="mono">{p.domainLabel}</span>
        </div>
        <img src={s.desktop} srcSet={s.desktopSet} sizes={sizes} width="1280" height="800" alt={p.alt.desktop} {...load} />
      </div>
      {/* The phone view overlays 22–26% of the frame, so it never needs more than ~260 CSS px. */}
      <img className="shot__phone" src={s.mobile} srcSet={s.mobileSet} sizes="(max-width: 899px) 24vw, 260px" width="520" height="885" alt={p.alt.mobile} loading="lazy" decoding="async" />
      {caption && (
        <figcaption className="shot__caption label">
          <span className="mono">Fig. {p.no}</span> {caption}
        </figcaption>
      )}
    </figure>
  );
}
