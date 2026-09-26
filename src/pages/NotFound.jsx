import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import { nav } from '../components/Layout';

export default function NotFound() {
  return (
    <>
      <TitleBlock section="404" title="Section not found" />
      <div className="sheet grid page-lead not-found">
        <p className="page-lead__claim">This page isn’t in the manual. It may have moved during the redesign.</p>
        <ul className="contents-list not-found__list">
          <li>
            <Link to="/"><span className="mono">000</span><span>Overview</span></Link>
          </li>
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to}><span className="mono">{n.no}</span><span>{n.label}</span></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
