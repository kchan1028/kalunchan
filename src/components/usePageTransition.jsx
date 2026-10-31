import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router';

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

  if (phase !== 'leave' && location.key !== shown.key) {
    const animate = navigationType === 'PUSH'
      && location.pathname !== shown.pathname
      && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animate) setPhase('leave');
    else setShown(location);
  }

  useEffect(() => {
    if (phase === 'idle') return undefined;
    document.documentElement.dataset.page = phase;
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
