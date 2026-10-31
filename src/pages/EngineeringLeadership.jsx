import { Link } from 'react-router';
import { person } from '../content/profile';
import { resumeRequest, currentWork, recommendations, summary, impact } from '../content/engineeringLeadership';
import HiringContactLink from '../components/HiringContactLink';
import TitleBlock from '../components/TitleBlock';
import { track } from '../track';
import { ArrowOut, ArrowRight } from '../components/Icons';

const onResume = () => track('resume_request', resumeRequest);

export default function EngineeringLeadership() {
  return <>
    <TitleBlock section="090" title="Engineering leadership" cells={[{ k: 'Open to', v: 'Engineering leadership opportunities' }, { k: 'Based', v: 'SF Bay Area' }]} />

    <header className="sheet grid hire-opening" data-coord="090 · Overview">
      <div className="hire-opening__copy">
        <p className="display">I build products and the teams that scale them.</p>
        <p className="body-copy">I lead technical direction and delivery, stay close to the architecture, and help engineers grow into leaders.</p>
      </div>
      <div className="hire-opening__actions">
        <HiringContactLink />
        <Link to="/experience/" className="action action--quiet">See my experience <ArrowRight /></Link>
      </div>
    </header>

    <section id="summary" className="sheet grid hire-section" aria-labelledby="summary-h" data-coord="091 · At a glance">
      <div className="hire-section__head"><h2 id="summary-h" className="h2">At a glance</h2></div>
      <dl className="hire-summary">
        {summary.slice(0, 5).map((item) => <div key={item.k}><dt className="label">{item.k}</dt><dd>{item.v}</dd></div>)}
      </dl>
      <p className="hire-section__foot">
        <Link to={resumeRequest} className="action" onClick={onResume}>Request my résumé <ArrowRight /></Link>
        <a href={`${person.linkedin}details/recommendations/`} className="action action--quiet" rel="me noopener" target="_blank" onClick={() => track('linkedin_click', `${person.linkedin}details/recommendations/`)}>Read LinkedIn recommendations <ArrowOut /></a>
      </p>
    </section>

    <section id="current-work" className="sheet grid hire-section" aria-labelledby="current-work-h" data-coord="092 · Current work">
      <div className="hire-section__head">
        <h2 id="current-work-h" className="h2">Current work through Yippify</h2>
        <p className="body-copy">Public-sector application delivery, alongside work with startups and founders.</p>
      </div>
      <dl className="hire-summary">
        {currentWork.map((item) => <div key={item.k}><dt className="label">{item.k}</dt><dd>{item.v}</dd></div>)}
      </dl>
      <p className="hire-section__foot"><Link to="/writing/building-public-sector-applications/" className="link-arrow"><span>Read about public-sector delivery</span> <ArrowRight /></Link></p>
    </section>

    <section id="impact" className="sheet grid hire-section" aria-labelledby="impact-h" data-coord="093 · Selected results">
      <span id="technical-debt" hidden />
      <span id="security" hidden />
      <span id="pace" hidden />
      <span id="readiness" hidden />
      <div className="hire-section__head"><h2 id="impact-h" className="h2">Selected results</h2><p className="body-copy">Each result links to the work behind it.</p></div>
      <ol className="hire-impact">
        {impact.slice(0, 4).map((item) => <li key={item.figure}>
          <p className="hire-impact__figure">{item.figure}</p>
          <h3 className="h3">{item.title}</h3>
          <p className="body-copy">{item.text}</p>
          <Link to={item.to} className="link-arrow"><span>{item.label}</span> <ArrowRight /></Link>
        </li>)}
      </ol>
    </section>

    <section id="recommendations" className="sheet grid hire-section" aria-labelledby="recommendations-h" data-coord="094 · Recommendations">
      <div className="hire-section__head"><h2 id="recommendations-h" className="h2">From people I’ve worked with</h2><p className="body-copy">Excerpts from LinkedIn recommendations.</p></div>
      <ul className="hire-recommendations">
        {recommendations.map((recommendation) => <li key={recommendation.name}><figure><blockquote><p>“{recommendation.quote}”</p></blockquote><figcaption>{recommendation.name}<span>{recommendation.role}</span></figcaption></figure></li>)}
      </ul>
      <p className="hire-section__foot"><a href={`${person.linkedin}details/recommendations/`} className="link-arrow" rel="me noopener" target="_blank" onClick={() => track('linkedin_click', `${person.linkedin}details/recommendations/`)}><span>Read the full recommendations on LinkedIn</span> <ArrowOut /></a></p>
    </section>
  </>;
}
