import { useEffect, useRef } from 'react';

// Reveals [data-reveal] children once as they scroll in. Content stays visible without JS or with reduced motion.
export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    root.dataset.motion = 'on';
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -12% 0px' });
    root.querySelectorAll('[data-reveal]').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}
