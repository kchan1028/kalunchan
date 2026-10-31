import { useState } from 'react';
import { Link } from 'react-router';
import HiringContactLink from '../components/HiringContactLink';
import PressedType from '../components/PressedType';
import { ArrowDown, ArrowOut, ArrowRight, BikeIcon } from '../components/Icons';
import { track } from '../track';
import { availability, availabilityLabel } from '../content/availability';
import { cycling } from '../content/community';
import { caseTiles, heroHeadline, resume, skills } from '../content/portfolio';
import { person } from '../content/profile';

function ProfileLinks() {
  return (
    <ul className="tile__links">
      <li><a href={person.linkedin} onClick={() => track('linkedin_click', person.linkedin)} rel="me noopener" target="_blank">LinkedIn <ArrowOut /></a></li>
      <li><a href={person.github} rel="me noopener" target="_blank">GitHub <ArrowOut /></a></li>
    </ul>
  );
}

function CaseTile({ tile }) {
  return (
    <article className="tile tile--case" aria-labelledby={`case-${tile.id}`}>
      <p className="label">{tile.where}</p>
      <h2 id={`case-${tile.id}`} className="h3"><Link to={tile.to} className="tile__cover">{tile.title}</Link></h2>
      <dl className="tile__facts">
        <div className="tile__result"><dt className="label">Result</dt><dd>{tile.figure && <strong className="tile__figure">{tile.figure}</strong>}{tile.result}</dd></div>
        <div><dt className="label">Problem</dt><dd>{tile.problem}</dd></div>
        <div><dt className="label">My role</dt><dd>{tile.role}</dd></div>
        <div><dt className="label">Stack</dt><dd>{tile.stack}</dd></div>
      </dl>
      <p className="tile__more" aria-hidden="true">Read more <ArrowRight /></p>
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
      <section className="tile tile--hero on-blue" aria-labelledby="thesis">
        <p className="tile__name">{person.name} <span>({person.short})</span></p>
        <h1 id="thesis" className="tile__headline display"><PressedType text={heroHeadline} /></h1>
        <div className="tile__hero-foot">
          <p className="tile__location">{availability.location}</p>
          {availability.show && <Link to="/engineering-leadership/" className="badge">{availabilityLabel(availability)} <ArrowRight /></Link>}
          {availability.show && availability.timing && <p className="tile__location">{availability.timing}</p>}
          <p><HiringContactLink /></p>
        </div>
      </section>

      <section className="tile tile--resume" aria-labelledby="resume-title">
        <h2 id="resume-title" className="h3">Résumé</h2>
        {resume.pdf
          ? <p><a className="action" href={resume.pdf} download>Download PDF <ArrowDown /></a></p>
          : <>
            <p>Send your name and email, and I’ll reply with it.</p>
            <p><Link className="action" to={resume.request}>Request résumé <ArrowRight /></Link></p>
          </>}
        <ProfileLinks />
      </section>

      {caseTiles.map((tile) => <CaseTile key={tile.id} tile={tile} />)}

      <section className="tile tile--skills" aria-labelledby="skills-title">
        <h2 id="skills-title" className="h3">Skills and stack</h2>
        <dl className="tile__facts tile__facts--rows">
          {skills.map((s) => <div key={s.area}><dt className="label">{s.area}</dt><dd>{s.items}</dd></div>)}
        </dl>
        <p><Link to="/expertise/" className="link-arrow"><span>Full expertise</span> <ArrowRight /></Link></p>
      </section>

      <section className="tile tile--personal" aria-labelledby="personal-title">
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

      <section className="tile tile--contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="h3">Contact</h2>
        {person.email && <p className="tile__email"><a href={`mailto:${person.email}`}>{person.email}</a></p>}
        <p><Link to="/contact/#leadership" className="link-arrow"><span>Send a message</span> <ArrowRight /></Link></p>
        <ProfileLinks />
      </section>
    </div>
  );
}
