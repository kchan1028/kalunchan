import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { SearchIcon } from './Icons';

const MAX_RESULTS = 20;

function SearchDialog({ onClose }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(null);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    inputRef.current.focus();
    import('../content/searchIndex').then(setIndex, () => setFailed(true));
  }, []);

  const matches = useMemo(() => (index ? index.search(query) : []), [index, query]);
  const results = matches.slice(0, MAX_RESULTS);
  const trimmed = query.trim();

  useEffect(() => {
    document.getElementById(`site-search-option-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const onKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      navigate(results[active].to);
      onClose();
      return;
    }
    const step = { ArrowDown: 1, ArrowUp: -1 }[e.key];
    if (!step || !results.length) return;
    e.preventDefault();
    setActive((a) => (a + step + results.length) % results.length);
  };

  let status = 'Search posts, case studies, projects and pages.';
  if (failed) status = 'Search couldn’t load. Reload the page and try again.';
  else if (trimmed && !index) status = 'Loading…';
  else if (trimmed && !matches.length) status = `Nothing matches “${trimmed}”. Titles, summaries and topics are searched, not full posts.`;
  else if (matches.length > MAX_RESULTS) status = `Showing ${MAX_RESULTS} of ${matches.length} results.`;
  else if (matches.length) status = `${matches.length} result${matches.length === 1 ? '' : 's'}.`;

  return (
    <dialog
      ref={dialogRef}
      className="site-search"
      aria-label="Search this site"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
    >
      <div className="site-search__panel">
        <button type="button" className="site-search__close" onClick={() => dialogRef.current.close()}>Close search</button>
        <input
          ref={inputRef}
          className="site-search__input"
          type="text"
          enterKeyHint="search"
          role="combobox"
          aria-label="Search this site"
          aria-expanded={results.length > 0}
          aria-controls="site-search-results"
          aria-activedescendant={results.length ? `site-search-option-${active}` : undefined}
          placeholder="Search"
          autoComplete="off"
          spellCheck="false"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
        />
        <p className="site-search__status" role="status">{status}</p>
        <ul id="site-search-results" className="site-search__results" role="listbox" aria-label="Search results">
          {results.map((r, i) => (
            <li key={r.to} id={`site-search-option-${i}`} role="option" aria-selected={i === active}>
              <Link to={r.to} className="site-search__row" tabIndex={-1} onClick={onClose} onMouseMove={() => setActive(i)}>
                <span className="site-search__kind label">{r.kind}</span>
                <span className="site-search__title">{r.title}</span>
                {r.snippet && <span className="site-search__snippet">{r.snippet}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}

// The toggle needs JavaScript, so it stays hidden until hydration. The index is its own chunk, loaded on first open.
export default function SiteSearch() {
  const { pathname } = useLocation();
  const [hint, setHint] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    setHint(/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl K');
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button type="button" className="search-toggle" hidden={!hint} aria-haspopup="dialog" aria-label="Search this site" onClick={() => setOpen(true)}>
        <SearchIcon />
        <span className="search-toggle__label">Search</span>
        <kbd className="search-toggle__hint mono">{hint}</kbd>
      </button>
      {open && <SearchDialog onClose={() => setOpen(false)} />}
    </>
  );
}
