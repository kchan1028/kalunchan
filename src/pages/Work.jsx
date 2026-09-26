import { Link } from 'react-router';
import { cases } from '../content/work';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';

export default function Work() {
  return (
    <>
      <TitleBlock section="300" title="Projects" cells={[{ k: 'Case studies', v: `${cases.length}` }]} />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          Six systems, written up the way I would review them: what was at stake, what constrained us, which options we rejected, and what shipped. Each follows the same order: problem, constraints, architecture, decisions, outcome, lessons.
        </p>
      </div>
      <ol className="sheet case-index" data-coord="300 · Index">
        {cases.map((c, i) => (
          <li key={c.slug} className={i === 0 ? 'case-index__lead' : undefined}>
            <Link to={`/work/${c.slug}/`} className={`case-index__row${i === 0 ? ' on-blue' : ''}`}>
              <span className="case-index__no">{c.no}</span>
              <span className="case-index__body">
                <span className="case-index__title">{c.title}</span>
                <span className="case-index__summary">{c.summary}</span>
              </span>
              <span className="case-index__meta">
                <span className="label">{c.org}</span>
                <span className="case-index__domains">{c.domain.join(' / ')}</span>
              </span>
              <ArrowRight className="case-index__arrow" />
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
