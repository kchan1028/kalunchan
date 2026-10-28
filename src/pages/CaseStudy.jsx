import { Link, useParams } from 'react-router';
import { cases, caseBySlug } from '../content/work';
import { hireLink } from '../content/engineeringLeadership';
import TitleBlock from '../components/TitleBlock';
import Diagram from '../components/Diagram';
import NotFound from './NotFound';
import { ArrowLeft, ArrowRight } from '../components/Icons';

const toc = [
  ['problem', 'Problem'],
  ['architecture', 'Architecture'],
  ['decisions', 'Decisions'],
  ['execution', 'Delivery'],
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
        title={c.illustrative ? 'Design example' : 'Case study'}
        as="p"
        coord={`${c.no} · ${c.illustrative ? 'Design example' : 'Case study'}`}
        cells={[
          { k: 'Where', v: c.org },
          { k: c.illustrative ? 'Format' : 'Role', v: c.role },
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
        {c.illustrative && <p className="case__para">This is an illustrative architecture discussion, not an account of a completed client engagement. The choices and goals below belong to the example.</p>}
        <p className="case__domains label">{c.domain.join(' / ')}</p>
      </header>

      <div className="sheet grid case__body">
        <nav className="case__toc" aria-label={c.illustrative ? 'In this design example' : 'In this case study'}>
          <ol>
            {toc.filter(([id]) => id !== 'execution' || c.execution).map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{id === 'outcome' && c.illustrative ? 'Design goals' : label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="problem" className="case__problem" aria-labelledby="problem-h" data-coord={`${c.no}-1 · Problem`}>
          <h2 id="problem-h" className="case__h label">Problem</h2>
          <div className="case__problem-copy">
            <p className="case__problem-text">{c.problem}</p>
            {c.context?.map((t) => <p key={t} className="case__para">{t}</p>)}
          </div>
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
        <h2 id="dec-h" className="case__h label">{c.illustrative || c.illustrativeDecisions ? 'Design tradeoffs' : 'Key decisions'}</h2>
        <div className="case__decision-list">
          {c.decisions.map((d, i) => (
            <div key={d.question} className="decision">
              <h3 className="decision__q h3">
                {d.question} <span className="decision__no mono">{`${c.no}-3.${i + 1}`}</span>
              </h3>
              <ul className="decision__options">
                {d.options.map((o) => (
                  <li key={o.label} className={o.chosen ? 'is-chosen' : 'is-rejected'}>
                    <span className="decision__state label">{c.illustrative || c.illustrativeDecisions ? (o.chosen ? 'Example choice' : 'Alternative') : (o.chosen ? 'Chosen' : 'Rejected')}</span>
                    <span className="decision__label">{o.label}</span>
                    <span className="decision__note">{o.note}</span>
                  </li>
                ))}
              </ul>
              {d.why && <p className="decision__why">{d.why}</p>}
            </div>
          ))}
        </div>
      </section>

      {c.execution && (
        <section id="execution" className="sheet grid case__execution" aria-labelledby="exe-h" data-coord={`${c.no}-3 · Delivery`}>
          <h2 id="exe-h" className="case__h label">How it was delivered</h2>
          <div className="case__execution-body">
            {c.execution.map((t) => <p key={t} className="case__para">{t}</p>)}
          </div>
        </section>
      )}

      <section id="outcome" className="sheet grid case__outcome" aria-labelledby="out-h" data-coord={`${c.no}-4 · Outcome`}>
        <h2 id="out-h" className="case__h label">{c.illustrative ? 'Design goals' : 'Outcome'}</h2>
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
        {c.tradeoffs && (
          <div className="case__tradeoffs">
            <h3 className="case__subh label">Tradeoffs accepted</h3>
            <ul className="spec-list">
              {c.tradeoffs.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        )}
        {c.related && (
          <p className="case__related">
            <span className="label">Related writing</span>
            {[].concat(c.related).map((r) => (
              <Link key={r.to} to={r.to} className="link-arrow"><span>{r.label}</span> <ArrowRight /></Link>
            ))}
          </p>
        )}
        <p className="case__related">
          <span className="label">For hiring teams</span>
          <Link to={hireLink.to} className="link-arrow"><span>{hireLink.label}</span> <ArrowRight /></Link>
        </p>
      </section>

      <nav className="sheet case__next" aria-label="Next case study">
        <Link to={`/work/${next.slug}/`} className="case__next-link">
          <span className="case__next-title">{next.title}</span>
          <span className="case__next-no label">{next.illustrative ? 'Next design example' : 'Next case study'} · {next.no}</span>
          <ArrowRight />
        </Link>
      </nav>
    </article>
  );
}
