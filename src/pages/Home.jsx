import { Link } from 'react-router';
import { nav } from '../components/Layout';
import SignalPath from '../components/SignalPath';
import { entity, headlineNumbers, person } from '../content/profile';
import { projects } from '../content/projects';
import { ArrowRight } from '../components/Icons';

export default function Home() {
  return <section className="opening" aria-labelledby="thesis">
    <div className="opening__sheet sheet">
      <div className="opening__stamp" data-coord="000 · Overview">
        <p className="opening__name">Ka Lun Chan <span>(KC)</span></p>
        <p className="opening__cell"><span className="label">Engineering practice</span></p>
      </div>
      <div className="opening__text">
        <h1 id="thesis" className="opening__thesis display">{person.thesis}</h1>
        <p className="opening__entity">{entity}</p>
        <ul className="opening__facts" aria-label="Headline numbers">{headlineNumbers.map((n) => <li key={n.figure}>
          <strong>{n.figure}</strong> {n.text}
        </li>)}</ul>
        <p className="opening__story">
          <Link to="/writing/building-a-startup-from-idea-to-acquisition/" className="link-arrow">
            <span>Founder story: from an idea to an acquisition</span> <ArrowRight />
          </Link>
        </p>
        <p className="opening__level">Engineering leadership, software architecture, and hands-on delivery.</p>
        <p className="opening__shipped">
          <span className="label">Recently shipped</span>
          {projects.map((p) => <Link key={p.slug} to={`/projects/${p.slug}/`}>{p.name}</Link>)}
        </p>
        <ol className="contents-list">{nav.map((item) => <li key={item.to}>
          <Link to={item.to}><span className="mono">{item.no}</span><span>{item.label}</span></Link>
        </li>)}</ol>
      </div>
      <div className="opening__figure"><SignalPath /></div>
    </div>
  </section>;
}
