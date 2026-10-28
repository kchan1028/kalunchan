import { Link } from 'react-router';
import { nav } from '../components/Layout';
import ExperienceMap from '../components/ExperienceMap';
import { Impact, CareerTimeline, CaseStudies, LeadershipFlow } from '../components/HomeSections';
import { homeIntro, headlineNumbers, person, proofPoints, roleIntent } from '../content/profile';
import { projects } from '../content/projects';
import { ArrowRight } from '../components/Icons';

export default function Home() {
  return <>
  <section className="opening" aria-labelledby="thesis">
    <div className="opening__sheet sheet">
      <div className="opening__stamp" data-coord="000 · Overview">
        <p className="opening__name">Ka Lun Chan <span>(KC)</span></p>
        <p className="opening__cell"><span className="label">Engineering practice</span></p>
      </div>
      <div className="opening__text">
        <h1 id="thesis" className="opening__thesis display">{person.thesis}</h1>
        <p className="opening__intent">
          <Link to="/engineering-leadership/" className="link-arrow"><span>{roleIntent}</span> <ArrowRight /></Link>
        </p>
        <p className="opening__entity">{homeIntro}</p>
        <p className="opening__actions">
          <Link to="/contact/#start" className="action">Start a conversation <ArrowRight /></Link>
          <Link to="/experience/" className="action action--quiet">Experience <ArrowRight /></Link>
          <Link to="/leadership/" className="action action--quiet">Leadership <ArrowRight /></Link>
          <Link to="/engineering-leadership/" className="action action--quiet">For hiring teams <ArrowRight /></Link>
        </p>
        <ul className="opening__facts" aria-label="Headline numbers">{headlineNumbers.map((n) => <li key={n.figure}>
          <strong>{n.figure}</strong> {n.text}
        </li>)}</ul>
        <p className="opening__story">
          <Link to="/writing/building-a-startup-from-idea-to-acquisition/" className="link-arrow">
            <span>Founder story: from an idea to an acquisition</span> <ArrowRight />
          </Link>
        </p>
        <p className="opening__level">I have made technology work at scale, first on carrier networks and a data center I cabled by hand, now in the cloud. Every system had to perform at a cost the business could carry. I’m still hands-on.</p>
        <ul className="opening__proof" aria-label="Proof points">
          {proofPoints.map((p) => <li key={p.figure}><Link to={p.to}><strong>{p.figure}</strong> {p.text}</Link></li>)}
        </ul>
        <p className="opening__story">
          <Link to="/about/" className="link-arrow">
            <span>Every layer of a company, one chapter at a time</span> <ArrowRight />
          </Link>
        </p>
        <p className="opening__shipped">
          <span className="label">Recently shipped</span>
          {projects.map((p) => <Link key={p.slug} to={`/projects/${p.slug}/`}>{p.name}</Link>)}
        </p>
        <ol className="contents-list">{nav.map((item) => <li key={item.to}>
          <Link to={item.to}><span className="mono">{item.no}</span><span>{item.label}</span></Link>
        </li>)}</ol>
      </div>
      <div className="opening__figure"><ExperienceMap /></div>
    </div>
  </section>
  <Impact />
  <CareerTimeline />
  <CaseStudies />
  <LeadershipFlow />
  </>;
}
