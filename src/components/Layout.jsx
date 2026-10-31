import { useEffect, useRef, useState } from 'react';
import { track } from '../track';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import { availability, person } from '../content/profile';
import { outcomes } from '../content/engineeringLeadership';
import { ArrowOut, ArrowRight } from './Icons';
import Coordinate from './Coordinate';
import PressedType from './PressedType';

const bayAreaTime = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit' });

// Filled in on the client: the prerendered page must not carry the time it was built.
function LocalTime() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const tick = () => setTime(bayAreaTime.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return time && <span className="local-time label">Bay Area <span className="mono">{time}</span></span>;
}

export const nav = [
  { to: '/about/', no: '050', label: 'About' },
  { to: '/leadership/', no: '100', label: 'Leadership' },
  { to: '/experience/', no: '200', label: 'Experience' },
  { to: '/projects/', no: '300', label: 'Projects' },
  { to: '/expertise/', no: '400', label: 'Expertise' },
  { to: '/community/', no: '500', label: 'Community' },
  { to: '/mentorship/', no: '600', label: 'Mentorship' },
  { to: '/writing/', no: '650', label: 'Writing' },
  { to: '/contact/', no: '700', label: 'Contact' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header" data-open={open || undefined}>
      <div className="sheet site-header__bar">
        <Link to="/" className="wordmark" aria-label="Ka Lun Chan, home">
          <span className="wordmark__name">Ka Lun Chan</span>
        </Link>
        <Coordinate />
        <LocalTime />
        <button
          type="button"
          className="contents-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{open ? 'Close' : 'Contents'}</span>
          <span className="contents-toggle__bars" aria-hidden="true" />
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Sections">
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} className="site-nav__link">
                  <span className="mono">{n.no}</span>
                  <span>{n.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <span className="site-header__progress" aria-hidden="true" />
    </header>
  );
}

function Colophon() {
  const { pathname } = useLocation();
  const isAbout = pathname.replace(/\/$/, '') === '/about';
  const isHome = pathname === '/';
  return (
    <footer id="contact" className="colophon" data-coord="Contact">
      <div className="sheet">
        <ul className="colophon__proof" aria-label="Headline outcomes">
          {outcomes.map((o) => (
            <li key={o.figure}>
              <Link to={o.to}>
                <strong className="colophon__figure"><PressedType text={o.figure} onScroll /></strong>
                <span>{o.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid colophon__grid">
          {isAbout ? (
            <div className="colophon__story">
              <h2 className="colophon__ask h2"><PressedType text="Talk to me about your engineering team." onScroll /></h2>
              <p>I’m interested in organizations scaling teams, modernizing platforms, improving engineering execution, or building new products. If your next challenge needs technical depth, product thinking, and people who can grow with the work, I’d like to talk.</p>
              <nav className="colophon__next" aria-label="Explore my engineering work">
                <Link to="/experience/">See my engineering experience</Link>
                <Link to="/projects/">See what I’ve built</Link>
              </nav>
            </div>
          ) : (
            <h2 className="colophon__ask h2">
              <PressedType text="Have a system to ship or a team to lead? Let’s talk." onScroll />
            </h2>
          )}
          <div className="colophon__routes">
            {isHome && <p className="colophon__availability"><strong>{availability.ask}</strong> {availability.text}</p>}
            <div className="colophon__actions">
              <a className="action" href={person.linkedin} onClick={() => track('linkedin_click', person.linkedin)} rel="me noopener" target="_blank">
                {isAbout ? 'Talk with KC' : 'Message me on LinkedIn'} <ArrowOut />
              </a>
              <Link className="action action--quiet" to="/engineering-leadership/">For hiring teams <ArrowRight /></Link>
            </div>
            <ul className="colophon__links">
              {person.email && (
                <li>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </li>
              )}
              <li>
                <a href={person.github} rel="me noopener" target="_blank">Code profile</a>
                <span className="colophon__note">Code and experiments</span>
              </li>
              <li>
                <a href={person.yippify} rel="noopener" target="_blank">Yippify</a>
                <span className="colophon__note">For a team to deliver your software</span>
              </li>
              {person.products.map((p) => (
                <li key={p.url}>
                  <a href={p.url} rel="noopener" target="_blank">{p.name}</a>
                  {p.note && <span className="colophon__note">{p.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="colophon__base label">
          <span>Ka Lun Chan · Engineering practice</span>
          <span>San Francisco Bay Area</span>
          <LocalTime />
          <span>© Ka Lun Chan</span>
          <Link to="/privacy/">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

// Each page's head tags are written to /_head/ by scripts/prerender.mjs, so site.js and every post's metadata stay out of the client.
const fetchHead = (url) => fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(new Error(url))));
const headTagsFor = import.meta.env.DEV
  ? (pathname) => import('../site').then((site) => site.headFor(pathname))
  : (pathname) => fetchHead(`/_head${pathname.replace(/\/$/, '') || '/index'}.json`).catch(() => fetchHead('/_head/404.json'));

function useDocumentTitle() {
  const { pathname } = useLocation();
  const landed = useRef(false);
  useEffect(() => {
    // The prerendered head already belongs to the page it arrived with.
    if (!landed.current && !import.meta.env.DEV) {
      landed.current = true;
      return undefined;
    }
    let live = true;
    headTagsFor(pathname).then((tags) => {
      if (!live) return;
      const head = new DOMParser().parseFromString(tags, 'text/html').head;
      document.head.querySelectorAll(
        'title, meta[name="description"], meta[name="robots"], link[rel="canonical"], meta[property^="og:"], meta[property^="article:"], meta[name^="twitter:"], script[type="application/ld+json"]'
      ).forEach((element) => element.remove());
      document.head.append(...Array.from(head.children));
    }, () => {});
    return () => {
      live = false;
    };
  }, [pathname]);
}

function useScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const frame = window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
}

// Blue fields, figures, images and plain section heads print in as they scroll into view. Only what starts below
// the fold waits, so nothing already on screen flashes, and no JS or reduced motion leaves everything visible.
function useScrollVisuals() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const waiting = [];
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.dataset.sw = 'in';
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('main .on-blue, main figure, main img, main h2').forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight || (n.matches('h2') && n.querySelector('.pressed'))) return;
      n.dataset.sw = 'wait';
      waiting.push(n);
      io.observe(n);
    });
    return () => {
      io.disconnect();
      waiting.forEach((n) => delete n.dataset.sw);
    };
  }, [pathname]);
}

export const legacyAnchors = {
  about: '/about/', experience: '/experience/', projects: '/projects/',
  work: '/projects/', 'work-h': '/projects/', leadership: '/leadership/',
  'practice-h': '/leadership/', expertise: '/expertise/', skills: '/expertise/',
  contact: '/contact/', community: '/community/', mentorship: '/mentorship/',
  'scale-h': '/experience/',
};

export default function Layout() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const target = legacyAnchors[hash.slice(1).toLowerCase()];
    if (pathname === '/' && target) navigate(target, { replace: true });
  }, [pathname, hash, navigate]);
  useDocumentTitle();
  useScrollReset();
  useScrollVisuals();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Colophon />
    </>
  );
}
