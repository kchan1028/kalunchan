import { Link } from 'react-router';
import { person } from '../content/profile';
import { practices, counterparts } from '../content/practice';
import TitleBlock from '../components/TitleBlock';
import { ArrowOut, ArrowRight } from '../components/Icons';

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
            <a className="action" href={person.linkedin} rel="me noopener" target="_blank">
              Start a conversation <ArrowOut />
            </a>
          </div>
        </div>
      </aside>

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
          I lead a Bay Area co-ed amateur cycling team: racing, recruitment rides, and volunteering at local events. Same job, different peloton. Set the pace, bring new riders in, and make sure nobody gets dropped.
        </p>
      </section>
    </>
  );
}
