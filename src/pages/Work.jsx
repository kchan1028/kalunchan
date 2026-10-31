import { Fragment } from 'react';
import { Link } from 'react-router';
import { cases } from '../content/work';
import { projects } from '../content/projects';
import { focuses } from '../content/engineeringLeadership';
import TitleBlock from '../components/TitleBlock';
import ProjectShot from '../components/ProjectShot';
import ProjectShowcase from '../components/ProjectShowcase';
import { showcase } from '../content/showcase';
import FocusPicker, { useFocus } from '../components/FocusPicker';
import { ArrowOut, ArrowRight } from '../components/Icons';

const chosen = (p) => p.decisions[0].options.find((o) => o.chosen).label;

// Only focuses with a real case study behind them are offered here.
const options = focuses.filter((f) => cases.some((c) => f.cases.includes(c.slug)));

export default function Work() {
  const { focus, choose } = useFocus(options);
  const shownCases = focus ? cases.filter((c) => focus.cases.includes(c.slug)) : cases;
  const shipped = (
    <Fragment key="shipped">
      <ProjectShowcase />
      <section className="sheet shipped" aria-labelledby="shipped-h" data-coord="310 · Shipped">
        <header className="shipped__head">
          <h2 id="shipped-h" className="h2">Shipped products and sites</h2>
          <p className="body-copy">Live products for federal contracting, local cycling and a small business.</p>
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
    </Fragment>
  );
  const caseStudies = (
    <Fragment key="cases">
      <section className="sheet cases" aria-labelledby="cases-h">
        <header className="shipped__head">
          <h2 id="cases-h" className="h2">Architecture work and design examples</h2>
          <p className="body-copy">
            {focus
              ? 'The work closest to what you picked. Illustrative designs are left out while a focus is on.'
              : 'Work on communications, publishing and carrier infrastructure, alongside an illustrative design for event-driven services.'}
          </p>
        </header>
      </section>
      <ol className="sheet case-index" data-coord="300 · Case studies">
        {shownCases.map((c, i) => (
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
    </Fragment>
  );
  return (
    <>
      <TitleBlock
        section="300"
        title="Projects"
        cells={[
          { k: 'Shipped', v: `${showcase.length}` },
          { k: 'Case studies', v: `${cases.length}` },
        ]}
      />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          I find the problem, build the product, and stay with it until it works for the people using it.
        </p>
        <p className="page-lead__aside body-copy">
          {focus
            ? 'The closest case studies come first, then six live sites. Three of them get the full story: one helps small businesses chase federal contracts, one is the home of a community race weekend, and one brought a family-owned business up to date.'
            : 'Six live sites come first, so you can watch them run. Three of them get the full story below: one helps small businesses chase federal contracts, one is the home of a community race weekend, and one brought a family-owned business up to date. After them come three systems from my engineering leadership work and one illustrative design.'}
        </p>
      </div>
      <FocusPicker
        title="What are you looking for?"
        options={options}
        focus={focus}
        choose={choose}
        coord="300-0 · Focus"
        status={focus
          ? `Showing ${shownCases.length} of ${cases.length} case studies first, then the shipped products. Choose it again to show everything.`
          : 'Pick one to see the closest case studies first.'}
      />
      {focus ? [caseStudies, shipped] : [shipped, caseStudies]}
    </>
  );
}
