import { useEffect, useRef, useState } from 'react';

function Decision({ d, code, illustrative, playing }) {
  const ref = useRef(null);
  const [picked, setPicked] = useState(null);
  useEffect(() => setPicked(null), [playing]);

  const answered = picked !== null;
  const chosenLabel = d.options.find((o) => o.chosen)?.label;
  const pick = (label) => {
    setPicked(label);
    ref.current.focus({ preventScroll: true });
  };
  const stateOf = (o) => (illustrative ? (o.chosen ? 'Example choice' : 'Alternative') : (o.chosen ? 'Chosen' : 'Rejected'));

  return (
    <div ref={ref} className="decision" tabIndex={-1}>
      <h3 className="decision__q h3">
        {d.question} <span className="decision__no mono">{code}</span>
      </h3>
      {playing && !answered ? (
        <ul className="decision__options decision__options--play">
          {d.options.map((o) => (
            <li key={o.label}>
              <button type="button" className="decision__pick" onClick={() => pick(o.label)}>{o.label}</button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="decision__options">
          {d.options.map((o) => (
            <li key={o.label} className={`${o.chosen ? 'is-chosen' : 'is-rejected'}${o.label === picked ? ' is-picked' : ''}`}>
              <span className="decision__state label">{stateOf(o)}{o.label === picked && <span className="decision__yours"> · your pick</span>}</span>
              <span className="decision__label">{o.label}</span>
              <span className="decision__note">{o.note}</span>
            </li>
          ))}
        </ul>
      )}
      {playing && (
        <p className="decision__result" role="status">
          {answered && (picked === chosenLabel ? 'Same call.' : 'A different call. Here’s how the options compared.')}
        </p>
      )}
      {(!playing || answered) && d.why && <p className="decision__why">{d.why}</p>}
    </div>
  );
}

// Everything is open by default, so the reasoning scans and crawls as text. A reader can choose to make each call first.
// The button needs JavaScript, so it appears only after hydration and isn't in the prerendered page.
export default function DecisionList({ decisions, no, illustrative = false }) {
  const [hydrated, setHydrated] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => setHydrated(true), []);

  return (
    <div className="case__decision-list">
      {hydrated && (
        <div className="decision__play">
          <button type="button" className="action action--quiet" onClick={() => setPlaying((p) => !p)}>
            {playing ? 'Show all the answers' : 'Make these calls yourself first'}
          </button>
          {playing && <p className="decision__hint">Pick what you’d do. The notes and reasoning open after you choose.</p>}
        </div>
      )}
      {decisions.map((d, i) => (
        <Decision key={d.question} d={d} code={`${no}-3.${i + 1}`} illustrative={illustrative} playing={playing} />
      ))}
    </div>
  );
}
