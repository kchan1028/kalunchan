import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { loadRoute, routeReady } from '../pageRoutes';

// Leave and enter in chrome.css fit inside these, delays included. Timers rather than animationend, so a missed event can't strand a navigation.
const LEAVE_MS = 180;
const ENTER_MS = 480;
// A chunk that won't load usually means a deploy replaced it, so fetch the page fresh.
const reloadPage = () => window.location.reload();

// Links to another page fade the current page out and the next one in, swapping routes while nothing is visible.
// Back, forward, redirects, same-page anchors and reduced motion swap straight away.
export function usePageTransition() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [shown, setShown] = useState(location);
  const [phase, setPhase] = useState('idle');
  const latest = useRef(location);

  useEffect(() => {
    latest.current = location;
  }, [location]);

  // By identity, not key: native hash changes after a fresh load all share the key "default".
  if (phase !== 'leave' && location !== shown) {
    const animate = navigationType === 'PUSH'
      && location.pathname !== shown.pathname
      && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animate) setPhase('leave');
    else if (routeReady(location.pathname)) setShown(location);
  }

  // A straight swap with its chunks still to come keeps the current page up until they arrive.
  useEffect(() => {
    if (phase === 'leave' || location === shown || routeReady(location.pathname)) return;
    loadRoute(location.pathname).then(() => setShown(latest.current), reloadPage);
  }, [location, shown, phase]);

  useEffect(() => {
    if (phase === 'idle') return undefined;
    document.documentElement.dataset.page = phase;
    let id;
    let live = true;
    const timer = new Promise((resolve) => {
      id = setTimeout(resolve, phase === 'leave' ? LEAVE_MS : ENTER_MS);
    });
    // The next page is its own chunk: start it now, and swap only when it's in, so the new page never fades in empty.
    const next = phase === 'leave' && loadRoute(latest.current.pathname).catch(reloadPage);
    Promise.all([timer, next]).then(() => {
      if (!live) return;
      if (phase === 'enter') {
        setPhase('idle');
        return;
      }
      setShown(latest.current);
      setPhase('enter');
    });
    return () => {
      live = false;
      clearTimeout(id);
      delete document.documentElement.dataset.page;
    };
  }, [phase]);

  return shown;
}
