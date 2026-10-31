import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router';

// <Routes location> tells everything inside it that each navigation is a POP, so App passes the real type down.
export const NavigationTypeContext = createContext('POP');
export const useRealNavigationType = () => useContext(NavigationTypeContext);
import { loadRoute, routeReady } from '../pageRoutes';

// Leave and enter in chrome.css fit inside these, delays included. Timers rather than animationend, so a missed event can't strand a navigation.
const LEAVE_MS = 180;
const ENTER_MS = 480;
// A chunk that won't load usually means a deploy replaced it, so fetch the page fresh.
const reloadPage = () => window.location.reload();
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Links to another page fade the current page out and the next one in, swapping routes while nothing is visible.
// Back, forward, redirects, same-page anchors and reduced motion swap straight away.
// A page whose chunks aren't in yet stays up until they arrive, with the loading line running, so a slow connection never shows a blank page.
export function usePageTransition() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [shown, setShown] = useState(location);
  const [phase, setPhase] = useState('idle');
  const [, setLoaded] = useState(null);
  const latest = useRef(location);

  useEffect(() => {
    latest.current = location;
  }, [location]);

  // By identity, not key: native hash changes after a fresh load all share the key "default".
  const changed = phase !== 'leave' && location !== shown;
  const waiting = changed && !routeReady(location.pathname);
  if (changed && !waiting) {
    const animate = navigationType === 'PUSH'
      && location.pathname !== shown.pathname
      && !reducedMotion();
    if (animate) setPhase('leave');
    else setShown(location);
  }

  useEffect(() => {
    if (!waiting) return undefined;
    let live = true;
    loadRoute(location.pathname).then(() => {
      if (live) setLoaded(location);
    }, reloadPage);
    return () => {
      live = false;
    };
  }, [waiting, location]);

  const stage = waiting ? (!reducedMotion() && 'load') : phase !== 'idle' && phase;
  useEffect(() => {
    if (!stage) return undefined;
    document.documentElement.dataset.page = stage;
    return () => {
      delete document.documentElement.dataset.page;
    };
  }, [stage]);

  useEffect(() => {
    if (phase === 'idle') return undefined;
    const id = setTimeout(() => {
      if (phase === 'enter') {
        setPhase('idle');
        return;
      }
      setShown(latest.current);
      setPhase('enter');
    }, phase === 'leave' ? LEAVE_MS : ENTER_MS);
    return () => clearTimeout(id);
  }, [phase]);

  return shown;
}
