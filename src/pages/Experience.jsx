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
          {r.story && (
            <div className="tenure__part tenure__part--cases">
              <dt className="label">Founder story</dt>
              <dd>
                <Link to={r.story.to} className="link-arrow">
                  <span>{r.story.label}</span>
                  <ArrowRight />
                </Link>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </article>
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
          For full career history, visit <a href={person.linkedin}>my LinkedIn profile</a>. Each role reads the same way: the problem I was handed, what I owned, the decisions that mattered, how we executed, and what it produced.
        </p>
      </div>
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
