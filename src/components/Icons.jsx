// One stroke weight, square caps: drawn to match the schematic linework.
const base = { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true, focusable: false };

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10ZM11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const SunIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const BikeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 10.5 6 6h4.5l2 4.5M6 6l2.5 4.5 2-4.5M5.5 4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

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
