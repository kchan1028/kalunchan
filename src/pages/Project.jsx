import { Link, useParams } from 'react-router';
import { projects, projectBySlug } from '../content/projects';
import TitleBlock from '../components/TitleBlock';
import ProjectShot from '../components/ProjectShot';
import NotFound from './NotFound';
import { ArrowLeft, ArrowOut, ArrowRight } from '../components/Icons';

const toc = [
  ['problem', 'Problem'],
  ['built', 'What I built'],
  ['decisions', 'Decisions'],
  ['outcome', 'Outcome'],
  ['lessons', 'Lessons'],
];

export default function Project() {
  const { slug } = useParams();
  const p = projectBySlug[slug];
  if (!p) return <NotFound />;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];

  return (
    <article className="case project" aria-labelledby="project-title">
      <TitleBlock
        section={p.no}
        title="Project"
        as="p"
        coord={`${p.no} · Project`}
        cells={[
          { k: 'Where', v: p.where },
          { k: 'Role', v: p.role },
        ]}
      />
      <header className="sheet grid case__head">
        <nav className="case__back">
          <Link to="/projects/" className="link-arrow">
            <ArrowLeft /> <span>All projects</span>
          </Link>
        </nav>
        <h1 id="project-title" className="case__title display">{p.title}</h1>
        <p className="case__claim">{p.claim}</p>
        <p className="case__domains label">{p.kind} · {p.domain.join(' / ')}</p>
        <div className="project__visit">
          <a className="action" href={p.site} target="_blank" rel="noopener">
            Visit {p.domainLabel} <ArrowOut />
          </a>
        </div>
      </header>

      <div className="sheet project__hero">
        <ProjectShot project={p} eager sizes="(max-width: 899px) 92vw, (max-width: 1440px) 80vw, 1150px" caption={`${p.name} on desktop and phone`} />
      </div>

      <div className="sheet grid case__body">
        <nav className="case__toc" aria-label="In this project">
          <ol>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="problem" className="case__problem" aria-labelledby="problem-h" data-coord={`${p.no}-1 · Problem`}>
          <h2 id="problem-h" className="case__h label">Problem</h2>
          <p className="case__problem-text">{p.problem}</p>
          <div className="case__constraints">
            <h3 className="case__subh label">Built for</h3>
            <ul className="spec-list">
              {p.audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section id="built" className="case__arch on-blue" aria-labelledby="built-h" data-coord={`${p.no}-2 · What I built`}>
        <div className="sheet grid">
          <h2 id="built-h" className="case__h label">What I built</h2>
          <p className="case__approach">{p.summary}</p>
          <ol className="project__flow" aria-label={`${p.name} journey`}>
            {p.flow.map((step, i) => (
              <li key={step}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
          <dl className="project__built">
            {p.built.map((b) => (
              <div key={b.name}>
                <dt>{b.name}</dt>
                <dd>{b.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="decisions" className="sheet grid case__decisions" aria-labelledby="dec-h" data-coord={`${p.no}-3 · Decisions`}>
        <h2 id="dec-h" className="case__h label">Key decisions</h2>
        <div className="case__decision-list">
          {p.decisions.map((d, i) => (
            <div key={d.question} className="decision">
              <h3 className="decision__q h3">
                {d.question} <span className="decision__no mono">{`${p.no}-3.${i + 1}`}</span>
              </h3>
              <ul className="decision__options">
                {d.options.map((o) => (
                  <li key={o.label} className={o.chosen ? 'is-chosen' : 'is-rejected'}>
                    <span className="decision__state label">{o.chosen ? 'Chosen' : 'Rejected'}</span>
                    <span className="decision__label">{o.label}</span>
                    <span className="decision__note">{o.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="outcome" className="sheet grid case__outcome" aria-labelledby="out-h" data-coord={`${p.no}-4 · Outcome`}>
        <h2 id="out-h" className="case__h label">Outcome</h2>
        <ol className="outcomes">
          {p.outcome.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ol>
        <div className="case__tech">
          <h3 className="case__subh label">Capabilities</h3>
          <p>{p.capabilities.join(', ')}</p>
          <a className="link-arrow" href={p.site} target="_blank" rel="noopener">
            <span>See it live</span> <ArrowOut />
          </a>
        </div>
      </section>

      <section id="lessons" className="sheet grid case__lessons" aria-labelledby="les-h" data-coord={`${p.no}-5 · Lessons`}>
        <h2 id="les-h" className="case__h label">Lessons</h2>
        <ul className="lessons">
          {p.lessons.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        {p.related && (
          <ul className="project__related">
            {p.related.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="link-arrow">
                  <span>{r.label}</span> <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <nav className="sheet case__next" aria-label="Next project">
        <Link to={`/projects/${next.slug}/`} className="case__next-link">
          <span className="case__next-title">{next.title}</span>
          <span className="case__next-no label">Next project · {next.no}</span>
          <ArrowRight />
        </Link>
      </nav>
    </article>
  );
}
