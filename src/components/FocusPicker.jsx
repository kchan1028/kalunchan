import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

// The reader's focus lives in ?for=, so the same link works on any page that has a picker.
export function useFocus(options) {
  const { search, hash } = useLocation();
  const navigate = useNavigate();
  // The prerendered HTML has no query string, so ?for= applies only after hydration.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const focus = hydrated ? options.find((f) => f.id === new URLSearchParams(search).get('for')) : undefined;
  const [arrived] = useState(() => new URLSearchParams(search).has('for'));
  const choose = (id) => {
    const params = new URLSearchParams(search);
    if (focus?.id === id) params.delete('for');
    else params.set('for', id);
    const next = params.toString();
    navigate({ search: next ? `?${next}` : '', hash }, { replace: true, preventScrollReset: true });
  };
  return { focus, arrived, choose };
}

export default function FocusPicker({ options, focus, choose, coord, status }) {
  return (
    <section className="sheet grid focus-picker" aria-labelledby="focus-h" data-coord={coord}>
      <h2 id="focus-h" className="focus-picker__h label">What are you hiring for?</h2>
      <div className="focus-picker__options" role="group" aria-labelledby="focus-h">
        {options.map((f) => (
          <button key={f.id} type="button" className="focus-picker__option" aria-pressed={focus?.id === f.id} onClick={() => choose(f.id)}>{f.label}</button>
        ))}
      </div>
      <p className="focus-picker__status" role="status">{status}</p>
    </section>
  );
}
