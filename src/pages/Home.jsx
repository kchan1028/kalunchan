import { Link } from 'react-router';
import { nav } from '../components/Layout';
import SignalPath from '../components/SignalPath';

export default function Home() {
  return <section className="opening" aria-labelledby="thesis">
    <div className="opening__sheet sheet">
      <div className="opening__stamp" data-coord="000 · Overview">
        <p className="opening__name">Ka Lun Chan <span>(KC)</span></p>
        <p className="opening__cell"><span className="label">Engineering practice</span></p>
      </div>
      <div className="opening__text">
        <h1 id="thesis" className="opening__thesis display">I build teams, systems, and products that deliver.</h1>
        <p className="opening__level">Engineering leadership, software architecture, and hands-on delivery.</p>
        <ol className="contents-list">{nav.map((item) => <li key={item.to}>
          <Link to={item.to}><span className="mono">{item.no}</span><span>{item.label}</span></Link>
        </li>)}</ol>
      </div>
      <div className="opening__figure"><SignalPath /></div>
    </div>
  </section>;
}
