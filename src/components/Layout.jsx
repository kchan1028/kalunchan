import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import { person } from '../content/profile';
import { headFor } from '../site';
import { ArrowOut } from './Icons';
import Coordinate from './Coordinate';

export const nav = [
  { to: '/about/', no: '050', label: 'About' },
  { to: '/leadership/', no: '100', label: 'Leadership' },
  { to: '/experience/', no: '200', label: 'Experience' },
  { to: '/projects/', no: '300', label: 'Projects' },
  { to: '/expertise/', no: '400', label: 'Expertise' },
  { to: '/community/', no: '500', label: 'Community' },
  { to: '/mentorship/', no: '600', label: 'Mentorship' },
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
    </header>
  );
}

function Colophon() {
  const { pathname } = useLocation();
  const isAbout = pathname.replace(/\/$/, '') === '/about';
  return (
    <footer id="contact" className="colophon" data-coord="Contact">
      <div className="sheet">
        <div className="grid colophon__grid">
          {isAbout ? (
            <div className="colophon__story">
              <h2 className="colophon__ask h2">Let’s build something that can outgrow us.</h2>
              <p>I’m interested in organizations scaling teams, modernizing platforms, improving engineering execution, or building new products. If your next challenge needs technical depth, product thinking, and people who can grow with the work, I’d like to talk.</p>
              <nav className="colophon__next" aria-label="Explore my engineering work">
                <Link to="/experience/">View My Experience</Link>
                <Link to="/projects/">See What I’ve Built</Link>
              </nav>
            </div>
          ) : (
            <h2 className="colophon__ask h2">
              Hiring an engineering leader, or need a system shipped? Let’s talk.
            </h2>
          )}
          <div className="colophon__routes">
            <a className="action" href={person.linkedin} rel="me noopener" target="_blank">
              {isAbout ? 'Talk with KC' : 'Message me on LinkedIn'} <ArrowOut />
            </a>
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
          <span>© Ka Lun Chan</span>
        </div>
      </div>
    </footer>
  );
}

function useDocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const head = new DOMParser().parseFromString(headFor(pathname), 'text/html').head;
    document.head.querySelectorAll(
      'title, meta[name="description"], meta[name="robots"], link[rel="canonical"], meta[property^="og:"], meta[name="twitter:card"], script[type="application/ld+json"]'
    ).forEach((element) => element.remove());
    document.head.append(...Array.from(head.children));
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
