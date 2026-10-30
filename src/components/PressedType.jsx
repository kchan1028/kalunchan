import { useEffect, useRef } from 'react';

// Heading type that presses from wide and light into its final setting, word by word. A hidden copy of each word
// holds the final layout, so nothing moves around it. Plays on mount, or with onScroll the first time it scrolls in.
export default function PressedType({ text, onScroll = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!onScroll || !root || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (root.getBoundingClientRect().top < window.innerHeight) return undefined;
    root.dataset.wait = '';
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      delete root.dataset.wait;
      root.classList.add('is-in');
      io.disconnect();
    }, { rootMargin: '0px 0px -12% 0px' });
    io.observe(root);
    return () => {
      io.disconnect();
      delete root.dataset.wait;
    };
  }, [onScroll]);

  if (typeof text !== 'string') return text;
  const words = text.split(' ');
  return (
    <span ref={ref} className={onScroll ? 'pressed pressed--scroll' : 'pressed'}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="pressed__word" data-t={word}>
            <span className="pressed__ink" style={{ '--i': i }}>{word}</span>
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
}
