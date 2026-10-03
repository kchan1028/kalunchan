// Schematic architecture diagram, laid out from data.
// Wide screens read the tiers left→right; narrow screens redraw the same
// system top→bottom instead of shrinking the wide drawing.

function wrap(text, max) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > max && line) {
      lines.push(line);
      line = w;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function measure(node, w, size, subSize) {
  const lines = wrap(node.label, Math.floor((w - 20) / (size * 0.53)));
  const sub = node.sub ? wrap(node.sub, Math.floor((w - 20) / (subSize * 0.62))) : [];
  const h = 14 + lines.length * size * 1.2 + sub.length * subSize * 1.35 + (sub.length ? 4 : 0) + 10;
  return { lines, sub, h: Math.max(h, size * 3) };
}

function layoutH(spec) {
  const W = 1000;
  const n = spec.tiers.length;
  const nw = Math.min(196, (W - (n - 1) * 56) / n);
  const gx = n > 1 ? (W - n * nw) / (n - 1) : 0;
  const size = 15;
  const subSize = 11.5;
  const top = 48;
  const vgap = 22;
  const tiers = spec.tiers.map((t, i) => {
    const nodes = t.nodes.map((nd) => ({ ...nd, w: nw, ...measure(nd, nw, size, subSize) }));
    const height = nodes.reduce((a, b) => a + b.h, 0) + (nodes.length - 1) * vgap;
    return { ...t, x: i * (nw + gx), nodes, height };
  });
  const inner = Math.max(...tiers.map((t) => t.height));
  const pos = {};
  tiers.forEach((t) => {
    let y = top + (inner - t.height) / 2;
    t.nodes.forEach((nd) => {
      pos[nd.id] = { ...nd, x: t.x, y, tier: t };
      y += nd.h + vgap;
    });
  });
  return { W, H: top + inner + 20, tiers, pos, size, subSize, dir: 'h' };
}

function layoutV(spec) {
  const W = 360;
  const size = 13;
  const subSize = 10.5;
  const hgap = 12;
  const rowGap = 40;
  let y = 8;
  const pos = {};
  const tiers = spec.tiers.map((t) => {
    const k = t.nodes.length;
    const nw = k === 1 ? 220 : (W - (k - 1) * hgap) / k;
    const nodes = t.nodes.map((nd) => ({ ...nd, w: nw, ...measure(nd, nw, size, subSize) }));
    const rowH = Math.max(...nodes.map((nd) => nd.h));
    const total = k * nw + (k - 1) * hgap;
    let x = (W - total) / 2;
    nodes.forEach((nd) => {
      pos[nd.id] = { ...nd, x, y, h: rowH, tier: t };
      x += nw + hgap;
    });
    const row = { ...t, y, h: rowH };
    y += rowH + rowGap;
    return row;
  });
  return { W, H: y - rowGap + 8, tiers, pos, size, subSize, dir: 'v' };
}

function edgePath(L, a, b) {
  const A = L.pos[a];
  const B = L.pos[b];
  const sameTier = A.tier === B.tier;
  if (L.dir === 'h') {
    if (sameTier) {
      const cx = A.x + A.w / 2;
      return A.y > B.y ? `M${cx} ${A.y} V${B.y + B.h}` : `M${cx} ${A.y + A.h} V${B.y}`;
    }
    const x1 = A.x + A.w;
    const y1 = A.y + A.h / 2;
    const x2 = B.x;
    const y2 = B.y + B.h / 2;
    const mx = x1 + (x2 - x1) / 2;
    return `M${x1} ${y1} H${mx} V${y2} H${x2}`;
  }
  if (sameTier) {
    const cy = A.y + A.h / 2;
    return A.x < B.x ? `M${A.x + A.w} ${cy} H${B.x}` : `M${A.x} ${cy} H${B.x + B.w}`;
  }
  const x1 = A.x + A.w / 2;
  const y1 = A.y + A.h;
  const x2 = B.x + B.w / 2;
  const y2 = B.y;
  const my = y1 + (y2 - y1) / 2;
  return `M${x1} ${y1} V${my} H${x2} V${y2}`;
}

function midpoint(L, a, b) {
  const A = L.pos[a];
  const B = L.pos[b];
  if (L.dir === 'h') return { x: (A.x + A.w + B.x) / 2 + 6, y: (A.y + A.h / 2 + B.y + B.h / 2) / 2 - 6 };
  return { x: (A.x + A.w / 2 + B.x + B.w / 2) / 2 + 6, y: (A.y + A.h + B.y) / 2 - 4 };
}

function Drawing({ L, spec, id, className }) {
  const accentNodes = new Set(spec.edges.filter((e) => e[3]).flatMap((e) => [e[0], e[1]]));
  return (
    <svg className={`dg ${className}`} viewBox={`0 0 ${L.W} ${L.H}`} aria-hidden="true" focusable="false">
      <defs>
        <marker id={`${id}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0.5L7.5 4L0 7.5z" className="dg-arrow" />
        </marker>
      </defs>
      {L.dir === 'h' &&
        L.tiers.map((t) => (
          <g key={t.name}>
            <text className="dg-tier" x={t.x} y={16}>{t.name}</text>
            <line className="dg-tier-rule" x1={t.x} x2={t.x + t.nodes[0].w} y1={26} y2={26} />
          </g>
        ))}
      {spec.edges.map(([a, b, label, accent]) => (
        <g key={`${a}-${b}`}>
          <path className={`dg-edge${accent ? ' is-accent' : ''}`} d={edgePath(L, a, b)} markerEnd={`url(#${id}-arrow)`} />
          {label && (
            <text className="dg-edge-label" {...midpoint(L, a, b)}>
              {label}
            </text>
          )}
        </g>
      ))}
      {Object.values(L.pos).map((n) => {
        const accent = accentNodes.has(n.id);
        let ty = n.y + 14 + L.size;
        return (
          <g key={n.id} className={`dg-node${accent ? ' is-accent' : ''}`}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} />
            {n.lines.map((l, i) => (
              <text key={l} className="dg-label" x={n.x + 10} y={ty + i * L.size * 1.2} fontSize={L.size}>
                {l}
              </text>
            ))}
            {n.sub.map((s, i) => (
              <text
                key={s}
                className="dg-sub"
                x={n.x + 10}
                y={ty + (n.lines.length - 1) * L.size * 1.2 + 4 + (i + 1) * L.subSize * 1.35}
                fontSize={L.subSize}
              >
                {s}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export default function Diagram({ spec, id, no }) {
  const names = Object.fromEntries(spec.tiers.flatMap((t) => t.nodes.map((n) => [n.id, n.label])));
  return (
    <figure className="diagram">
      <figcaption className="diagram__caption">
        <span className="mono">Fig. {no}</span>
        <span>{spec.label}</span>
        <span className="diagram__key label">
          <span className="diagram__key-mark" aria-hidden="true" /> {spec.key || 'Critical path'}
        </span>
      </figcaption>
      <Drawing L={layoutH(spec)} spec={spec} id={`${id}-h`} className="dg--h" />
      <Drawing L={layoutV(spec)} spec={spec} id={`${id}-v`} className="dg--v" />
      <ul className="visually-hidden">
        {spec.edges.map(([a, b, label]) => (
          <li key={`${a}-${b}`}>
            {names[a]} to {names[b]}
            {label ? ` (${label})` : ''}
          </li>
        ))}
      </ul>
    </figure>
  );
}
