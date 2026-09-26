// One stroke weight, square caps: drawn to match the schematic linework.
const base = { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true, focusable: false };

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowOut = (p) => (
  <svg {...base} {...p}>
    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowLeft = (p) => (
  <svg {...base} {...p}>
    <path d="M14 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowDown = (p) => (
  <svg {...base} {...p}>
    <path d="M8 2v11M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);
