import { Link, useParams } from 'react-router';
import { cases, caseBySlug } from '../content/work';
import TitleBlock from '../components/TitleBlock';
import Diagram from '../components/Diagram';
import NotFound from './NotFound';
import { ArrowLeft, ArrowRight } from '../components/Icons';

const toc = [
  ['problem', 'Problem'],
  ['architecture', 'Architecture'],
  ['decisions', 'Decisions'],
  ['outcome', 'Outcome'],
  ['lessons', 'Lessons'],
];

export default function CaseStudy() {
  const { slug } = useParams();
  const c = caseBySlug[slug];
  if (!c) return <NotFound />;
  const idx = cases.indexOf(c);
  const next = cases[(idx + 1) % cases.length];

  return (
    <article className="case" aria-labelledby="case-title">
      <TitleBlock
        section={c.no}
        title="Case study"
        as="p"
        coord={`${c.no} · Case study`}
        cells={[
          { k: 'Where', v: c.org },
          { k: 'Role', v: c.role },
        ]}
      />
      <header className="sheet grid case__head">
        <nav className="case__back">
          <Link to="/projects/" className="link-arrow">
            <ArrowLeft /> <span>All work</span>
          </Link>
        </nav>
        <h1 id="case-title" className="case__title display">{c.title}</h1>
        <p className="case__claim">{c.claim}</p>
        <p className="case__domains label">{c.domain.join(' / ')}</p>
      </header>

      <div className="sheet grid case__body">
        <nav className="case__toc" aria-label="In this case study">
          <ol>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="problem" className="case__problem" aria-labelledby="problem-h" data-coord={`${c.no}-1 · Problem`}>
          <h2 id="problem-h" className="case__h label">Problem</h2>
          <p className="case__problem-text">{c.problem}</p>
          <div className="case__constraints">
            <h3 className="case__subh label">Constraints</h3>
            <ul className="spec-list">
              {c.constraints.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section id="architecture" className="case__arch on-blue" aria-labelledby="arch-h" data-coord={`${c.no}-2 · Architecture`}>
        <div className="sheet grid">
          <h2 id="arch-h" className="case__h label">Architecture &amp; approach</h2>
          <p className="case__approach">{c.approach}</p>
          <div className="case__figure">
            <Diagram spec={c.diagram} id={c.slug} no={`${c.no}-2`} />
          </div>
        </div>
      </section>

      <section id="decisions" className="sheet grid case__decisions" aria-labelledby="dec-h" data-coord={`${c.no}-3 · Decisions`}>
        <h2 id="dec-h" className="case__h label">Key decisions</h2>
        <div className="case__decision-list">
          {c.decisions.map((d, i) => (
            <div key={d.question} className="decision">
              <h3 className="decision__q h3">
                {d.question} <span className="decision__no mono">{`${c.no}-3.${i + 1}`}</span>
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

      <section id="outcome" className="sheet grid case__outcome" aria-labelledby="out-h" data-coord={`${c.no}-4 · Outcome`}>
        <h2 id="out-h" className="case__h label">Outcome</h2>
        <ol className="outcomes">
          {c.outcome.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ol>
        <div className="case__tech">
          <h3 className="case__subh label">Technology</h3>
          <p>{c.technology.join(', ')}</p>
        </div>
      </section>

      <section id="lessons" className="sheet grid case__lessons" aria-labelledby="les-h" data-coord={`${c.no}-5 · Lessons`}>
        <h2 id="les-h" className="case__h label">Lessons &amp; tradeoffs</h2>
        <ul className="lessons">
          {c.lessons.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <nav className="sheet case__next" aria-label="Next case study">
        <Link to={`/work/${next.slug}/`} className="case__next-link">
          <span className="case__next-title">{next.title}</span>
          <span className="case__next-no label">Next case study · {next.no}</span>
          <ArrowRight />
        </Link>
      </nav>
    </article>
  );
}
