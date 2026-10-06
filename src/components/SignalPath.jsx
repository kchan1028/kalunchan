import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from './Icons';

// The seven capabilities drawn as one signal path, from business problem to
// shipped outcome. Focusing a stage lights the path up to it and shows the
// evidence behind it.

const W = 440;
const X = 64; // main path column
const NW = 232; // main node width
const NH = 50;
const BX = 322; // branch column
const JR = 3.5; // junction dot radius
const BW = 112;

const stages = [
  { id: 'leadership', y: 104, label: 'Engineering leadership', evidence: 'Co-founded a global communications platform and led its engineering from the first line of code to acquisition. Later CTO of a media publishing platform; earlier VP of Operations for a voice service.', to: '/leadership/' },
  { id: 'product', y: 196, label: 'Product engineering', evidence: 'Web and mobile products for 400k+ users. Publishing platforms that grew organic and social traffic 50%.', to: '/work/publishing-distribution/' },
  { id: 'architecture', y: 288, label: 'Software architecture', evidence: 'Multi-tier platforms, event-driven microservices, and incremental migrations that keep legacy systems in service.', to: '/work/event-driven-platform/' },
  { id: 'cloud', y: 380, label: 'Cloud & infrastructure', evidence: 'From one data center to cloud regions on three continents with geo-routing. Earlier: 2,000+ carrier collocations.', to: '/work/three-continent-platform/' },
];

const branches = [
  { id: 'gov', from: 'product', label: ['Government', 'technology'], evidence: 'Public-sector delivery through Yippify, where accessibility, security and hand-over shape the architecture.', to: '/work/public-service-modernization/' },
  { id: 'ai', from: 'architecture', label: ['AI & data'], evidence: 'LLM integrations, retrieval (RAG) and document processing, with people in the loop where accuracy matters.', to: '/work/document-intelligence/' },
];

const handsOn = {
  id: 'hands-on',
  label: 'Hands-on engineering',
  evidence: 'Still in the code: prototypes, reviews and the hard parts of the build, at every stage of the path.',
  to: '/expertise/#hands-on',
};

const TOP = 34;
const BOTTOM = 470;
const BUS = 30;

const order = stages.map((s) => s.id);
const stageY = Object.fromEntries(stages.map((s) => [s.id, s.y]));

export default function SignalPath() {
  const [active, setActive] = useState(null);
  const all = [...stages, ...branches, handsOn];
  const current = all.find((n) => n.id === active);

  const reach = (() => {
    if (!active) return order.length; // everything lit
    if (active === 'hands-on') return order.length;
    const b = branches.find((x) => x.id === active);
    return order.indexOf(b ? b.from : active) + 1;
  })();
  const lit = (i) => i < reach;

  const bind = (id) => ({
    tabIndex: 0,
    role: 'button',
    'aria-pressed': active === id,
    onMouseEnter: () => setActive(id),
    onFocus: () => setActive(id),
    onClick: () => setActive(id),
    onKeyDown: (e) => {
      if (e.key === 'Escape') setActive(null);
    },
    className: `sp-node${active === id ? ' is-active' : ''}`,
  });

  return (
    <figure className="signal on-blue" onMouseLeave={() => setActive(null)}>
      <figcaption className="signal__caption">
        <span className="mono">Fig. 000-1</span>
        <span>From business problem to shipped outcome</span>
      </figcaption>
      <svg className="signal__svg" viewBox={`0 0 ${W} 500`} role="group" aria-label="Capabilities as a signal path">
        {/* main line */}
        <line className="sp-wire sp-draw" style={{ '--d': 0 }} x1={X + NW / 2} y1={TOP + 8} x2={X + NW / 2} y2={stages[0].y} pathLength="1" />
        {stages.map((s, i) => {
          const next = stages[i + 1];
          const y2 = next ? next.y : BOTTOM - 8;
          return (
            <line
              key={s.id}
              className={`sp-wire sp-draw${lit(i + 1) || (!next && reach === order.length) ? '' : ' is-dim'}`}
              style={{ '--d': i + 1 }}
              x1={X + NW / 2}
              y1={s.y + NH}
              x2={X + NW / 2}
              y2={y2}
              pathLength="1"
            />
          );
        })}

        {/* terminals */}
        <g className="sp-terminal">
          <circle cx={X + NW / 2} cy={TOP} r="8" />
          <text x={X + NW / 2 + 18} y={TOP + 4}>Business problem</text>
        </g>
        <g className={`sp-terminal${reach === order.length ? '' : ' is-dim'}`}>
          <circle cx={X + NW / 2} cy={BOTTOM} r="8" className="sp-terminal__filled" />
          <text x={X + NW / 2 + 18} y={BOTTOM + 4}>Shipped outcome</text>
        </g>

        {/* hands-on bus: taps every stage */}
        <g {...bind('hands-on')} aria-label={handsOn.label}>
          <line className="sp-bus" x1={BUS} y1={stages[0].y + NH / 2} x2={BUS} y2={stages.at(-1).y + NH / 2} />
          {stages.map((s) => (
            <line key={s.id} className="sp-bus" x1={BUS} y1={s.y + NH / 2} x2={X} y2={s.y + NH / 2} />
          ))}
          <rect className="sp-hit" x={BUS - 16} y={stages[0].y} width="32" height={stages.at(-1).y - stages[0].y + NH} />
          <text className="sp-bus__label" transform={`translate(${BUS - 8} ${(stages[0].y + stages.at(-1).y + NH) / 2}) rotate(-90)`} textAnchor="middle">
            Hands-on engineering
          </text>
        </g>

        {/* branches */}
        {branches.map((b, i) => {
          const y = stageY[b.from];
          const h = b.label.length > 1 ? 58 : NH;
          return (
            <g key={b.id} {...bind(b.id)} aria-label={b.label.join(' ')}>
              <line className={`sp-wire sp-draw${active && active !== b.id ? ' is-dim' : ''}`} style={{ '--d': 5 + i }} x1={X + NW} y1={y + NH / 2} x2={BX} y2={y + NH / 2} pathLength="1" />
              <rect className="sp-box sp-box--branch" x={BX} y={y + NH / 2 - h / 2} width={BW} height={h} />
              {b.label.map((l, j) => (
                <text key={l} x={BX + 12} y={y + NH / 2 - (b.label.length - 1) * 9 + j * 18 + 5}>
                  {l}
                </text>
              ))}
            </g>
          );
        })}

        {/* junctions */}
        {branches.map((b) => (
          <circle key={b.id} className="sp-junction" cx={X + NW} cy={stageY[b.from] + NH / 2} r={JR} />
        ))}
        {stages.map((s) => (
          <circle key={s.id} className="sp-junction" cx={BUS} cy={s.y + NH / 2} r={JR} />
        ))}

        {/* stages */}
        {stages.map((s, i) => (
          <g key={s.id} {...bind(s.id)} aria-label={s.label}>
            <rect className={`sp-box${lit(i) ? '' : ' is-dim'}`} x={X} y={s.y} width={NW} height={NH} />
            <text className="sp-no" x={X + 14} y={s.y + NH / 2 + 4}>{`0${i + 1}`}</text>
            <text x={X + 46} y={s.y + NH / 2 + 5}>{s.label}</text>
          </g>
        ))}
      </svg>
      <div className="signal__readout" aria-live="polite">
        {current ? (
          <>
            <p className="signal__readout-title">{Array.isArray(current.label) ? current.label.join(' ') : current.label}</p>
            <p>{current.evidence}</p>
            <Link to={current.to} className="link-arrow signal__readout-link">
              <span>See the evidence</span> <ArrowRight />
            </Link>
          </>
        ) : (
          <>
            <p className="signal__readout-title">Seven capabilities, one path</p>
            <p>Select any stage to see where I have done it. Leadership sets direction, architecture and platform carry it, and hands-on engineering runs the whole length.</p>
          </>
        )}
      </div>
    </figure>
  );
}
