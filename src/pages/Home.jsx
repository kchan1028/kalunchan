import { useState } from 'react';
import { Link } from 'react-router';
import Diagram from '../components/Diagram';
import HiringContactLink from '../components/HiringContactLink';
import PressedType from '../components/PressedType';
import { ArrowDown, ArrowOut, ArrowRight, BikeIcon } from '../components/Icons';
import { track } from '../track';
import { availability, availabilityLabel } from '../content/availability';
import { cycling } from '../content/community';
import { platformDiagram } from '../content/platformDiagram';
import { caseTiles, heroHeadline, heroProof, resume, skills } from '../content/portfolio';
import { person } from '../content/profile';

function CaseTile({ tile }) {
  return (
    <article className={`tile tile--case tile--${tile.id}`} aria-labelledby={`case-${tile.id}`} data-coord="010 · Selected work">
      <p className="tile__role"><strong>{tile.level}</strong> <span>{tile.where}</span></p>
      <h2 id={`case-${tile.id}`} className="h3"><Link to={tile.to} className="tile__cover">{tile.title}</Link></h2>
      <p className="tile__result">{tile.figure && <strong className="tile__figure">{tile.figure}</strong>}{tile.result}</p>
      {tile.problem && <p className="tile__problem">{tile.problem}</p>}
      <p className="tile__more" aria-hidden="true">{tile.more} <ArrowRight /></p>
    </article>
  );
}

// The easter egg: a rider laps the bottom of the photo. Reduced motion skips the ride; the lap count still goes up.
function LapButton() {
  const [laps, setLaps] = useState(0);
  const [riding, setRiding] = useState(false);
  return (
    <>
      <span className="tile__track" aria-hidden="true">
        {riding && <span className="tile__rider" onAnimationEnd={() => setRiding(false)}><BikeIcon /></span>}
      </span>
      <p className="tile__lap">
        <button type="button" onClick={() => { setLaps((n) => n + 1); setRiding(true); }}>Ride a lap</button>
        <span role="status">{laps > 0 && `${laps} ${laps === 1 ? 'lap' : 'laps'} done`}</span>
      </p>
    </>
  );
}

export default function Home() {
  return (
    <div className="sheet bento">
      <section className="tile tile--hero on-blue" aria-labelledby="thesis" data-coord="000 · Overview">
        <div className="tile__hero-main">
          <p className="tile__name">{person.name} <span>({person.short})</span></p>
          <h1 id="thesis" className="tile__headline display"><PressedType text={heroHeadline} /></h1>
          <p className="tile__proof">{heroProof}</p>
          <div className="tile__hero-foot">
            <p className="tile__actions">
              <HiringContactLink />
              <a className="tile__linkedin" href={person.linkedin} onClick={() => track('linkedin_click', person.linkedin)} rel="me noopener" target="_blank">LinkedIn <ArrowOut /></a>
            </p>
            {availability.show && <p><Link to="/engineering-leadership/" className="badge">{availabilityLabel(availability)} <ArrowRight /></Link></p>}
            <p className="tile__location">{availability.location}</p>
            {availability.show && availability.timing && <p className="tile__location">{availability.timing}</p>}
          </div>
        </div>
        <div className="tile__hero-figure">
          <Diagram spec={platformDiagram} id="home-platform" no="301-2" stacked />
        </div>
      </section>

      <section className="tile tile--resume" aria-labelledby="resume-title">
        <h2 id="resume-title" className="h3">Résumé</h2>
        {resume.pdf
          ? <p className="tile__resume-action"><a className="action" href={resume.pdf} download>Download PDF <ArrowDown /></a></p>
          : <>
            <p>Send your name and email, and I’ll reply with it within 2 business days.</p>
            <p className="tile__resume-action"><Link className="action" to={resume.request}>Request résumé <ArrowRight /></Link></p>
          </>}
      </section>

      {caseTiles.map((tile) => <CaseTile key={tile.id} tile={tile} />)}

      <section className="tile tile--skills" aria-labelledby="skills-title" data-coord="020 · Skills and stack">
        <h2 id="skills-title" className="h3">Skills and stack</h2>
        <dl className="tile__facts tile__facts--rows">
          {skills.map((s) => <div key={s.area}><dt className="label">{s.area}</dt><dd>{s.items}</dd></div>)}
        </dl>
        <p><Link to="/expertise/" className="link-arrow"><span>Full expertise</span> <ArrowRight /></Link></p>
      </section>

      <section className="tile tile--personal" aria-labelledby="personal-title" data-coord="030 · Away from work">
        <div className="tile__photo">
          <img
            src="/images/community/berkeley-hills-road-race-960.webp"
            srcSet="/images/community/berkeley-hills-road-race-640.webp 640w, /images/community/berkeley-hills-road-race-960.webp 960w"
            sizes="(max-width: 639px) 92vw, 46vw"
            width="1920" height="1080" loading="lazy" decoding="async"
            alt="A line of cyclists follows a tree-lined road at the Berkeley Hills Road Race"
          />
          <LapButton />
        </div>
        <div className="tile__personal-text">
          <h2 id="personal-title" className="h3">Away from work, I’m usually on a bike</h2>
          <p>I help organize the <a href={cycling.omnium} rel="noopener" target="_blank">Berkeley Omnium</a>, a nonprofit race weekend that pairs the Berkeley Hills Road Race with the Berkeley Streets Criterium. All proceeds support six East Bay NICA teams.</p>
          <p><Link to="/community/" className="link-arrow"><span>Why I help run it</span> <ArrowRight /></Link></p>
        </div>
      </section>
    </div>
  );
}
