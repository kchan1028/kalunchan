import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

// The manual's locked coordinate, top-left in the header: which section you are reading.
// Reads `data-coord` from the section nearest the top of the viewport.
export default function Coordinate() {
  const { pathname } = useLocation();
  const [label, setLabel] = useState('');

  useEffect(() => {
    const nodes = [...document.querySelectorAll('[data-coord]')];
    if (!nodes.length) return undefined;
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target, e.isIntersecting));
        const current = nodes.filter((n) => seen.get(n)).at(0);
        if (current) setLabel(current.dataset.coord);
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    nodes.forEach((n) => io.observe(n));
    setLabel(nodes[0].dataset.coord);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <span className="coordinate mono" aria-hidden="true">
      <span className="coordinate__mark" />
      <span className="coordinate__label">
        {(label || 'Engineering practice').split(' · ').map((part, i) => (
          <span key={part} className={i ? 'coordinate__name' : undefined}>
            {i ? ` · ${part}` : part}
          </span>
        ))}
      </span>
    </span>
  );
}
