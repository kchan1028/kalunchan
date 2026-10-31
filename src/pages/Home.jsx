import { Link } from 'react-router';
import PressedType from '../components/PressedType';
import HiringContactLink from '../components/HiringContactLink';
import { homeFit, person, roleIntent } from '../content/profile';
import { impact, recommendations } from '../content/engineeringLeadership';
import { projects } from '../content/projects';
import { ArrowOut, ArrowRight } from '../components/Icons';

const selectedImpact = impact.slice(0, 3);
const selectedProjects = projects.slice(0, 2);

export default function Home() {
  return <>
    <section className="opening" aria-labelledby="thesis">
      <div className="opening__sheet sheet">
        <div className="opening__stamp" data-coord="000 · Overview">
          <p className="opening__name">Ka Lun Chan <span>(KC)</span></p>
          <p className="opening__cell"><span className="label">Engineering practice</span></p>
        </div>
        <div className="opening__text opening__text--focused">
          <h1 id="thesis" className="opening__thesis display"><PressedType text={person.thesis} /></h1>
          <p className="opening__fit">{homeFit}</p>
          <p className="opening__actions">
            <HiringContactLink />
            <Link to="/experience/" className="action action--quiet">See my experience <ArrowRight /></Link>
          </p>
          <p className="opening__intent">
            <Link to="/engineering-leadership/" className="link-arrow"><span>{roleIntent}</span> <ArrowRight /></Link>
          </p>
        </div>
      </div>
    </section>

    <section className="sheet grid home-evidence" aria-labelledby="results-h" data-coord="010 · Selected results">
      <header className="home-evidence__head">
        <h2 id="results-h" className="h2">Selected results</h2>
        <p className="body-copy">Three examples with the work behind them.</p>
      </header>
      <ol className="home-evidence__list">
        {selectedImpact.map((item) => <li key={item.figure}>
          <strong>{item.figure}</strong>
          <h3 className="h3">{item.title}</h3>
          <p className="body-copy">{item.text}</p>
          <Link to={item.to} className="link-arrow"><span>{item.label}</span> <ArrowRight /></Link>
        </li>)}
      </ol>
    </section>

    <section className="home-work on-blue" aria-labelledby="work-h" data-coord="020 · Selected work">
      <div className="sheet grid">
        <header className="home-work__head">
          <h2 id="work-h" className="h2">Selected work</h2>
          <p>Products I designed and built.</p>
        </header>
        <ul className="home-work__list">
          {selectedProjects.map((project) => <li key={project.slug}>
            <p className="label">{project.kind}</p>
            <h3 className="h3"><Link to={`/projects/${project.slug}/`}>{project.name}</Link></h3>
            <p>{project.problemShort}</p>
            <Link to={`/projects/${project.slug}/`} className="link-arrow"><span>Read the project</span> <ArrowRight /></Link>
          </li>)}
        </ul>
      </div>
    </section>

    <section className="sheet grid home-recommendations" aria-labelledby="recommendations-h" data-coord="030 · Recommendations">
      <header className="home-recommendations__head">
        <h2 id="recommendations-h" className="h2">From people I’ve worked with</h2>
      </header>
      <ul className="hire-recommendations">
        {recommendations.map((recommendation) => <li key={recommendation.name}>
          <figure>
            <blockquote><p>“{recommendation.quote}”</p></blockquote>
            <figcaption>{recommendation.name}<span>{recommendation.role}</span></figcaption>
          </figure>
        </li>)}
      </ul>
      <p className="home-recommendations__link">
        <a href={`${person.linkedin}details/recommendations/`} className="link-arrow" rel="me noopener" target="_blank"><span>Read the full recommendations on LinkedIn</span> <ArrowOut /></a>
      </p>
    </section>
  </>;
}
