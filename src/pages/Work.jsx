import { Link } from 'react-router';
import { cases } from '../content/work';
import { projects } from '../content/projects';
import TitleBlock from '../components/TitleBlock';
import ProjectShot from '../components/ProjectShot';
import { ArrowOut, ArrowRight } from '../components/Icons';

const chosen = (p) => p.decisions[0].options.find((o) => o.chosen).label;

export default function Work() {
  return (
    <>
      <TitleBlock
        section="300"
        title="Projects"
        cells={[
          { k: 'Shipped', v: `${projects.length}` },
          { k: 'Case studies', v: `${cases.length}` },
        ]}
      />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          I don’t stop at features. I find the problem, build the product, and stay with it until it works in the real world.
        </p>
        <p className="page-lead__aside body-copy">
          That work crosses engineering, product and operations: a product for small businesses chasing federal contracts, the digital home of a community race weekend, and a family-owned local business brought up to date. Below those are six systems from my engineering leadership work.
        </p>
      </div>

      <section className="sheet shipped" aria-labelledby="shipped-h" data-coord="310 · Shipped">
        <header className="shipped__head">
          <h2 id="shipped-h" className="h2">Shipped products and sites</h2>
          <p className="body-copy">Each one reads the same way: the problem, what I built, the decision that shaped it, and what it changed. All three are live.</p>
        </header>
        <ol className="shipped__list">
          {projects.map((p) => (
            <li key={p.slug} className="shipped__item">
              <ProjectShot project={p} sizes="(max-width: 899px) 92vw, (max-width: 1440px) 54vw, 760px" />
              <div className="shipped__body">
                <p className="shipped__kind label">
                  <span className="mono">{p.no}</span> {p.kind}
                </p>
                <h3 className="shipped__name">
                  <Link to={`/projects/${p.slug}/`}>{p.name}</Link>
                </h3>
                <p className="shipped__claim">{p.claim}</p>
                <dl className="shipped__story">
                  <div>
                    <dt className="label">Problem</dt>
                    <dd>{p.problemShort}</dd>
                  </div>
                  <div>
                    <dt className="label">Built</dt>
                    <dd>{p.built.map((b) => b.name).join(' · ')}</dd>
                  </div>
                  <div>
                    <dt className="label">Decision</dt>
                    <dd>{chosen(p)}</dd>
                  </div>
                  <div>
                    <dt className="label">Outcome</dt>
                    <dd>{p.outcome[0]}</dd>
                  </div>
                </dl>
                <div className="shipped__actions">
                  <a className="action" href={p.site} target="_blank" rel="noopener">
                    Visit {p.domainLabel} <ArrowOut />
                  </a>
                  <Link className="link-arrow" to={`/projects/${p.slug}/`}>
                    <span>How I built {p.name}</span> <ArrowRight />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sheet cases" aria-labelledby="cases-h">
        <header className="shipped__head">
          <h2 id="cases-h" className="h2">Architecture case studies</h2>
          <p className="body-copy">Six systems, written up the way I would review them: what was at stake, what constrained us, which options we rejected, and what shipped.</p>
        </header>
      </section>
      <ol className="sheet case-index" data-coord="300 · Case studies">
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
