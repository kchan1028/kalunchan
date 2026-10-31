import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { loadRoute, reloadPage, routeReady } from '../pageRoutes';

// <Routes location> tells everything inside it that each navigation is a POP, so App passes the real type down.
export const NavigationTypeContext = createContext('POP');
export const useRealNavigationType = () => useContext(NavigationTypeContext);

// Leave and enter in chrome.css fit inside these, delays included. Timers rather than animationend, so a missed event can't strand a navigation.
const LEAVE_MS = 180;
const ENTER_MS = 480;
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
  const waiting = location !== shown && !routeReady(location.pathname);
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
    let live = true;
    const id = setTimeout(async () => {
      if (phase === 'enter') {
        setPhase('idle');
        return;
      }
      // A second click can change the destination while the first page is leaving.
      // Keep the current page mounted until the latest destination is ready.
      try {
        while (live) {
          const destination = latest.current;
          await loadRoute(destination.pathname);
          if (!live) return;
          if (destination !== latest.current) continue;
          setShown(destination);
          break;
        }
      } catch {
        if (live) reloadPage();
        return;
      }
      if (!live) return;
      setPhase('enter');
    }, phase === 'leave' ? LEAVE_MS : ENTER_MS);
    return () => {
      live = false;
      clearTimeout(id);
    };
  }, [phase]);

  return shown;
}
