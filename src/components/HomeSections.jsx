import { useState } from 'react';
import { Link } from 'react-router';
import { impact, careerStages, caseStudies, caseSteps, leadershipFlow } from '../content/home';
import { ArrowRight } from './Icons';

// Homepage sections below the hero: 001 impact, 002 career timeline,
// 003 case-study previews, 004 leadership flow. Each keeps all of its text in
// the HTML; interaction only chooses what is shown.

export function Impact() {
  return (
    <section className="sheet home-section" aria-labelledby="impact-h" data-coord="001 · Impact">
      <div className="home-section__head">
        <h2 id="impact-h" className="h2">What the work produced.</h2>
        <p>Six things a hiring manager can check. Each links to the page that backs it.</p>
      </div>
      <ul className="impact" aria-label="Verified accomplishments">
        {impact.map((i) => (
          <li key={i.figure}>
            <Link to={i.to}>
              <strong>{i.figure}</strong>
              <span>{i.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function useTabs(count, prefix) {
  const [active, setActive] = useState(0);
  const select = (i, focus) => {
    const next = (i + count) % count;
    setActive(next);
    if (focus) document.getElementById(`${prefix}-tab-${next}`)?.focus();
  };
  const onKeyDown = (e) => {
    const moves = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: count - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    select(moves[e.key], true);
  };
  return { active, select, onKeyDown };
}

export function CareerTimeline() {
  const { active, select, onKeyDown } = useTabs(careerStages.length, 'tl');
  return (
    <section className="sheet home-section" aria-labelledby="timeline-h" data-coord="002 · Career">
      <div className="home-section__head">
        <h2 id="timeline-h" className="h2">Seven stages, one direction.</h2>
        <p>Stages, not dates. Select one for the role, the technology, what it produced and the lesson carried to the next.</p>
      </div>
      <figure className="tl">
        <div className="tl__tabs" role="tablist" aria-label="Career stages" onKeyDown={onKeyDown}>
          {careerStages.map((s, i) => (
            <button
              key={s.id}
              id={`tl-tab-${i}`}
              type="button"
              role="tab"
              className="tl__tab"
              aria-selected={i === active}
              aria-controls={`tl-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
            >
              <span className="tl__no mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="tl__name">{s.name}</span>
            </button>
          ))}
        </div>
        {careerStages.map((s, i) => (
          <div key={s.id} id={`tl-panel-${i}`} className="tl__panel" role="tabpanel" aria-labelledby={`tl-tab-${i}`} hidden={i !== active}>
            <p className="tl__role">{s.role}</p>
            <div className="tl__cells">
              <div>
                <p className="label">What it produced</p>
                <p>{s.did}</p>
              </div>
              <div>
                <p className="label">Technologies</p>
                <p>{s.tech}</p>
              </div>
              <div>
                <p className="label">Lesson carried forward</p>
                <p className="tl__lesson">{s.lesson}</p>
                <Link to={s.to} className="link-arrow"><span>{s.label}</span> <ArrowRight /></Link>
              </div>
            </div>
          </div>
        ))}
      </figure>
    </section>
  );
}

export function CaseStudies() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sheet home-section" aria-labelledby="cases-h" data-coord="003 · Case studies">
      <div className="home-section__head">
        <h2 id="cases-h" className="h2">Problem, analysis, decision, implementation, outcome.</h2>
        <p>Five pieces of work in the same five steps. Open one, then read the full account.</p>
      </div>
      <ol className="cs">
        {caseStudies.map((c, i) => {
          const isOpen = open === i;
          return (
            <li key={c.id} className={`cs__item${isOpen ? ' is-open' : ''}`}>
              <button type="button" className="cs__head" aria-expanded={isOpen} aria-controls={`cs-body-${c.id}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span className="cs__no mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="cs__name">{c.name}</span>
                <span className="cs__where">{c.where}</span>
                <span className="cs__toggle mono" aria-hidden="true">{isOpen ? 'Close' : 'Open'}</span>
              </button>
              <div id={`cs-body-${c.id}`} className="cs__body" hidden={!isOpen}>
                <ol className="cs__flow">
                  {c.steps.map((step, j) => (
                    <li key={caseSteps[j]}>
                      <span className="label">{caseSteps[j]}</span>
                      <span className="cs__step">{step}</span>
                    </li>
                  ))}
                </ol>
                <Link to={c.to} className="link-arrow cs__link"><span>{c.label}</span> <ArrowRight /></Link>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function LeadershipFlow() {
  return (
    <section className="sheet home-section" aria-labelledby="flow-h" data-coord="004 · Leadership">
      <div className="home-section__head">
        <h2 id="flow-h" className="h2">How I run engineering, as a loop.</h2>
        <p>Business goals in, measured outcomes out, and the measurement feeds the next round. Each step links to the practice behind it.</p>
      </div>
      <figure className="flow">
        <ol className="flow__steps">
          {leadershipFlow.map((s, i) => (
            <li key={s.name} className="flow__step">
              <span className="flow__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <Link to={s.to} className="flow__name">{s.name}</Link>
              <p className="flow__text">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="flow__loop">
          <svg className="flow__arrow" viewBox="0 0 120 28" aria-hidden="true" focusable="false">
            <path d="M116 4 C 116 22, 8 22, 8 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 14 L 8 8 L 13 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>What the measurement shows goes back into the goals. The loop is the job; no single step is.</span>
        </p>
      </figure>
    </section>
  );
}
