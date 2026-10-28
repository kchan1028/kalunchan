import { Link } from 'react-router';
import { track } from '../track';
import { person } from '../content/profile';
import { practices, counterparts } from '../content/practice';
import { leadershipFlow } from '../content/home';
import TitleBlock from '../components/TitleBlock';
import { ArrowOut, ArrowRight } from '../components/Icons';

// Fig. 100-1: the six-step loop from the homepage, with each practice placed
// on the step where it does its work. Links go to the practices below.
const onLoop = {
  'Business goals': ['101', '109'],
  'Technical strategy': ['102', '106'],
  'Team alignment': ['108'],
  'Execution': ['104'],
  'Measurement': ['105', '103'],
  'Continuous improvement': ['107'],
};

function PracticeLoop() {
  const byNo = Object.fromEntries(practices.map((p) => [p.no, p]));
  return (
    <figure className="sheet flow flow--page" aria-labelledby="loop-cap" data-coord="100-0 · The loop">
      <figcaption id="loop-cap" className="prog__cap">
        <span className="mono">Fig. 100-1</span>
        <span>Where each practice does its work</span>
        <span className="prog__key label">Business goals in, measured outcomes out, and the measurement feeds the next round.</span>
      </figcaption>
      <ol className="flow__steps">
        {leadershipFlow.map((s, i) => (
          <li key={s.name} className="flow__step">
            <span className="flow__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="flow__name flow__name--static">{s.name}</span>
            <ul className="flow__practices">
              {(onLoop[s.name] || []).map((no) => (
                <li key={no}><a href={`#${byNo[no].id}`}><span className="mono">{no}</span> {byNo[no].title}</a></li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="flow__loop">
        <svg className="flow__arrow" viewBox="0 0 120 28" aria-hidden="true" focusable="false">
          <path d="M116 4 C 116 22, 8 22, 8 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 14 L 8 8 L 13 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span>What the measurement shows goes back into the goals. The practices below are the loop, written down.</span>
      </p>
    </figure>
  );
}

export default function Leadership() {
  return (
    <>
      <TitleBlock section="100" title="Leadership" cells={[{ k: 'Form', v: 'Operating manual' }, { k: 'Practices', v: `${practices.length}` }]} />
      <div className="sheet grid page-lead lead-leadership">
        <p className="page-lead__claim">
          How I run engineering, written down so you know what you’re getting before our first conversation.
        </p>
      </div>

      <aside className="open-to on-blue" aria-label="Current work" data-coord="100 · Current work">
        <div className="sheet grid">
          <p className="open-to__roles">Working with teams through Yippify on engineering leadership, architecture and delivery.</p>
          <div className="open-to__side">
            <a className="action" href={person.linkedin} onClick={() => track('linkedin_click', person.linkedin)} rel="me noopener" target="_blank">
              Start a conversation <ArrowOut />
            </a>
            <Link to="/engineering-leadership/" className="link-arrow"><span>Hiring for a leadership role?</span> <ArrowRight /></Link>
          </div>
        </div>
      </aside>

      <PracticeLoop />

      <nav className="sheet grid practice-index" aria-label="Practices">
        <ol>
          {practices.map((p) => (
            <li key={p.no}>
              <a href={`#${p.id}`}>
                <span className="mono">{p.no}</span> {p.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="practices">
        {practices.map((p) => (
          <article key={p.no} id={p.id} className="practice sheet grid" aria-labelledby={`${p.id}-h`} data-coord={`${p.no} · ${p.title}`}>
            <p className="practice__no" aria-hidden="true">{p.no}</p>
            <div className="practice__main">
              <h2 id={`${p.id}-h`} className="practice__title h3">{p.title}</h2>
              <p className="practice__claim">{p.claim}</p>
            </div>
            <div className="practice__detail">
              <p className="body-copy">{p.body}</p>
              <p className="practice__signals-h label">Signals I watch</p>
              <ul className="ticks">
                {p.signals.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {p.read && (
                <p className="practice__read">
                  <Link to={p.read.to} className="link-arrow"><span>{p.read.label}</span> <ArrowRight /></Link>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="sheet grid counterparts" aria-labelledby="cp-h" data-coord="109 · Working across the org">
        <h2 id="cp-h" className="counterparts__h h2">What each partner gets from me.</h2>
        <dl className="counterparts__table">
          {counterparts.map((c) => (
            <div key={c.who}>
              <dt>{c.who}</dt>
              <dd>{c.gets}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="sheet grid off-clock" aria-labelledby="off-h" data-coord="110 · Off the clock">
        <h2 id="off-h" className="off-clock__h label">Off the clock</h2>
        <p className="off-clock__text">
          I lead a Bay Area co-ed amateur cycling team: racing, recruitment rides, and volunteering at local events. Some of it overlaps with leading engineers more than I expected: setting a pace people can hold, bringing new riders in, and making sure nobody gets dropped.
        </p>
        <Link to="/writing/what-cycling-taught-me-about-engineering-leadership/" className="link-arrow off-clock__read"><span>What cycling taught me about engineering leadership</span> <ArrowRight /></Link>
      </section>
    </>
  );
}
