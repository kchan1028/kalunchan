import { Fragment } from 'react';
import { Link } from 'react-router';
import { cases } from '../content/work';
import { focuses } from '../content/engineeringLeadership';
import TitleBlock from '../components/TitleBlock';
import ProjectShowcase from '../components/ProjectShowcase';
import { showcase } from '../content/showcase';
import FocusPicker, { useFocus } from '../components/FocusPicker';
import { ArrowRight } from '../components/Icons';

// Only focuses with a real case study behind them are offered here.
const options = focuses.filter((f) => cases.some((c) => f.cases.includes(c.slug)));

export default function Work() {
  const { focus, choose } = useFocus(options);
  const shownCases = focus ? cases.filter((c) => focus.cases.includes(c.slug)) : cases;
  const shipped = <ProjectShowcase key="shipped" />;
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
