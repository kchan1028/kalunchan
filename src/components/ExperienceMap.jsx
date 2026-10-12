import { useState } from 'react';
import { Link } from 'react-router';
import { experienceMap } from '../content/about';
import { ArrowRight } from './Icons';

// Fig. 000-1: six layers of technology from the business down to the wire.
// Selecting a layer shows the work behind it. Every panel is in the HTML, so
// the content reads without interaction and crawls as text.
export default function ExperienceMap() {
  const [active, setActive] = useState(0);
  const select = (i, focus) => {
    const next = (i + experienceMap.length) % experienceMap.length;
    setActive(next);
    if (focus) document.getElementById(`emap-tab-${next}`)?.focus();
  };
  const onKeyDown = (e) => {
    const moves = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: experienceMap.length - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    select(moves[e.key], true);
  };
  return (
    <figure className="emap on-blue">
      <figcaption className="emap__caption">
        <span className="mono">Fig. 000-1</span>
        <span>From the network layer to the business layer</span>
      </figcaption>
      <div className="emap__layers" role="tablist" aria-label="Layers of technology KC has worked in" aria-orientation="vertical" onKeyDown={onKeyDown}>
        {experienceMap.map((l, i) => (
          <button
            key={l.id}
            id={`emap-tab-${i}`}
            type="button"
            role="tab"
            className="emap__layer"
            aria-selected={i === active}
            aria-controls={`emap-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
          >
            <span className="emap__name">{l.name}</span>
            <span className="emap__sub">{l.sub}</span>
          </button>
        ))}
      </div>
      {experienceMap.map((l, i) => (
        <div key={l.id} id={`emap-panel-${i}`} className="emap__panel" role="tabpanel" aria-labelledby={`emap-tab-${i}`} hidden={i !== active}>
          <p className="emap__claim">{l.claim}</p>
          <ul className="emap__examples">
            {l.examples.map((e) => (
              <li key={e.to}><Link to={e.to}>{e.text} <ArrowRight /></Link></li>
            ))}
          </ul>
        </div>
      ))}
      <p className="emap__foot label">Seven layers, business at the top, wire at the bottom. Select one for the work behind it.</p>
    </figure>
  );
}
