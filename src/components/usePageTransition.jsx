import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { loadBody } from '../content/postBodies';

// Leave and enter in chrome.css fit inside these, delays included. Timers rather than animationend, so a missed event can't strand a navigation.
const LEAVE_MS = 180;
const ENTER_MS = 480;

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
    else setShown(location);
  }

  useEffect(() => {
    if (phase === 'idle') return undefined;
    document.documentElement.dataset.page = phase;
    // A post's body is its own chunk: start it now so it's there when the page fades in. Post.jsx retries if this fails.
    const postSlug = phase === 'leave' && latest.current.pathname.match(/^\/writing\/([^/]+)\/?$/)?.[1];
    if (postSlug) loadBody(postSlug).catch(() => {});
    const id = setTimeout(() => {
      if (phase === 'enter') {
        setPhase('idle');
        return;
      }
      setShown(latest.current);
      setPhase('enter');
    }, phase === 'leave' ? LEAVE_MS : ENTER_MS);
    return () => {
      clearTimeout(id);
      delete document.documentElement.dataset.page;
    };
  }, [phase]);

  return shown;
}
