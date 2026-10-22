import { Link } from 'react-router';
import { roles, earlier, person } from '../content/profile';
import { caseBySlug } from '../content/work';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';

const parts = [
  ['problem', 'Problem'],
  ['responsibility', 'Responsibility'],
  ['decisions', 'Decisions'],
  ['execution', 'Execution'],
  ['outcome', 'Outcome'],
];

function Role({ r, index }) {
  const now = r.id === 'yippify';
  return (
    <article
      id={r.id}
      className={`tenure${now ? ' tenure--now on-blue' : ''}`}
      aria-labelledby={`${r.id}-h`}
      data-coord={`200-${index + 1} · ${r.org}`}
    >
      <div className="sheet grid tenure__grid">
        <header className="tenure__head">
          <h2 id={`${r.id}-h`} className="tenure__org h3">{r.org}</h2>
          <p className="tenure__title">{r.title}</p>
          <p className="tenure__era label">{r.era}</p>
        </header>
        <dl className="tenure__spec">
          {parts.map(([k, label]) => (
            <div key={k} className={`tenure__part tenure__part--${k}`}>
              <dt className="label">{label}</dt>
              <dd>
                {Array.isArray(r[k]) ? (
                  <ul className="ticks">
                    {r[k].map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : (
                  r[k]
                )}
              </dd>
            </div>
          ))}
          {r.cases.length > 0 && (
            <div className="tenure__part tenure__part--cases">
              <dt className="label">Case studies</dt>
              <dd>
                {r.cases.map((slug) => (
                  <Link key={slug} to={`/work/${slug}/`} className="link-arrow">
                    <span>
                      {caseBySlug[slug].no} · {caseBySlug[slug].title}
                    </span>
                    <ArrowRight />
                  </Link>
                ))}
              </dd>
            </div>
          )}
          {[].concat(r.story || []).map((s) => (
            <div key={s.to} className="tenure__part tenure__part--cases">
              <dt className="label">{s.kind || 'Founder story'}</dt>
              <dd>
                <Link to={s.to} className="link-arrow">
                  <span>{s.label}</span>
                  <ArrowRight />
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

// Fig. 200-1: five roles, oldest first, with scale, what KC owned, and whether he
// did the work himself or led it. Each column links to the role below.
function Progression() {
  const ordered = [...roles].reverse();
  return (
    <figure className="sheet prog" aria-labelledby="prog-cap" data-coord="200-0 · Progression">
      <figcaption id="prog-cap" className="prog__cap">
        <span className="mono">Fig. 200-1</span>
        <span>How the responsibility grew, role by role</span>
        <span className="prog__key label">Oldest on the left. Each column links to the role.</span>
      </figcaption>
      <ol className="prog__list">
        {ordered.map((r, i) => (
          <li key={r.id} className={`prog__role${r.id === 'yippify' ? ' is-now' : ''}`}>
            <a href={`#${r.id}`} className="prog__link">
              <span className="prog__no mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="prog__title">{r.title}</span>
              <span className="prog__org">{r.org}</span>
              <span className="prog__scale">{r.scale}</span>
              <span className="label prog__label">Owned</span>
              <span className="prog__owned">{r.owned}</span>
              <span className="prog__mode mono">{r.mode}</span>
            </a>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function Experience() {
  return (
    <>
      <TitleBlock section="200" title="Experience" cells={[{ k: 'Roles', v: `${roles.length} leadership & engineering` }]} />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          One through-line: keep the system up while the business grows around it. The systems changed, from carrier networks to SaaS, media and public services. The job didn’t.
        </p>
        <p className="page-lead__aside body-copy">
          For full career history, visit <a href={person.linkedin}>my LinkedIn profile</a>. Each role reads the same way: the problem I was handed, what I owned, the decisions that mattered, how we executed, and what it produced. Hiring for a senior engineering role? <Link to="/engineering-leadership/">Start with the summary for hiring teams</Link>.
        </p>
      </div>
      <Progression />
      <div className="tenures">
        {roles.map((r, i) => (
          <Role key={r.id} r={r} index={i} />
        ))}
      </div>
      <section className="sheet grid earlier" aria-labelledby="earlier-h" data-coord="200-6 · Earlier">
        <h2 id="earlier-h" className="earlier__h label">Earlier</h2>
        <ul className="earlier__list">
          {earlier.map((e) => (
            <li key={e.org}>
              <span>
                {e.org}, {e.title}
              </span>
            </li>
          ))}
        </ul>
        <p className="earlier__note body-copy">Where it started: supporting the network before designing it.</p>
      </section>
    </>
  );
}
