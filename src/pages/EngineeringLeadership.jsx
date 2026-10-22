import { Link } from 'react-router';
import { person, roles } from '../content/profile';
import { posts } from '../content/writing';
import {
  targetRoles, resumeRequest, paths, summary, impact, problems, principles, expertise, featuredSlugs,
} from '../content/engineeringLeadership';
import TitleBlock from '../components/TitleBlock';
import { track } from '../track';
import { ArrowOut, ArrowRight } from '../components/Icons';

const onResume = () => track('resume_request', resumeRequest);
const onLinkedIn = () => track('linkedin_click', person.linkedin);

const featured = featuredSlugs.map((slug) => posts.find((p) => p.slug === slug)).filter(Boolean);

export default function EngineeringLeadership() {
  return (
    <>
      <TitleBlock section="090" title="Engineering leadership" cells={[{ k: 'Open to', v: 'VP, Head or Director of Engineering' }, { k: 'Based', v: 'SF Bay Area' }]} />
      <div className="sheet grid page-lead hire-lead">
        <p className="page-lead__claim">
          I connect engineering execution, architecture, security and the business, and I’m looking for a senior engineering leadership role to do it.
        </p>
        <p className="page-lead__aside body-copy">
          Ka Lun Chan (KC) is a San Francisco Bay Area engineering leader. As co-founder and CTO he built a startup from the ground up to 400,000+ users and an acquisition, then served as CTO of a media publishing platform. Earlier he was VP of Operations for a voice services company. He now leads architecture and delivery for government and startup clients through Yippify, and he still writes code.
        </p>
        <p className="hire-lead__actions">
          <a href="#experience" className="action">View my experience <ArrowRight /></a>
          <Link to={resumeRequest} className="action action--quiet" onClick={onResume}>Request my résumé <ArrowRight /></Link>
          <a href={person.linkedin} className="action action--quiet" rel="me noopener" target="_blank" onClick={onLinkedIn}>Connect on LinkedIn <ArrowOut /></a>
          <Link to="/contact/#start" className="action action--quiet" onClick={() => track('contact_click', '/contact/#start')}>Contact me <ArrowRight /></Link>
        </p>
      </div>

      <aside className="open-to on-blue" aria-label="Roles I’m open to" data-coord="090 · Open to">
        <div className="sheet grid">
          <p className="open-to__roles">Open to conversations about {targetRoles.slice(0, -1).join(', ')} and {targetRoles.at(-1)} roles.</p>
          <div className="open-to__side">
            <Link className="action" to={resumeRequest} onClick={() => track('contact_click', resumeRequest)}>Talk about a role <ArrowRight /></Link>
          </div>
        </div>
      </aside>

      <nav className="sheet grid hire-paths" aria-labelledby="paths-h" data-coord="090-0 · Start here">
        <h2 id="paths-h" className="hire-paths__h label">Start here</h2>
        <ul className="hire-paths__list">
          {paths.map((p) => (
            <li key={p.who}>
              <a href={p.go}>
                <span className="hire-paths__who">{p.who}</span>
                <span className="hire-paths__wants">{p.wants}</span>
                <span className="hire-paths__go">{p.label} <ArrowRight /></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="summary" className="sheet grid hire-section" aria-labelledby="summary-h" data-coord="091 · Quick summary">
        <div className="hire-section__head">
          <p className="label">091</p>
          <h2 id="summary-h" className="h2">Ka Lun Chan at a glance</h2>
        </div>
        <dl className="hire-summary">
          {summary.map((s) => (
            <div key={s.k}>
              <dt className="label">{s.k}</dt>
              <dd>{s.v}</dd>
            </div>
          ))}
        </dl>
        <p className="hire-section__foot">
          <Link to={resumeRequest} className="action" onClick={onResume}>Request my résumé <ArrowRight /></Link>
          <a href={person.linkedin} className="action action--quiet" rel="me noopener" target="_blank" onClick={onLinkedIn}>LinkedIn profile <ArrowOut /></a>
        </p>
      </section>

      <section id="impact" className="sheet grid hire-section" aria-labelledby="impact-h" data-coord="092 · Business impact">
        <div className="hire-section__head">
          <p className="label">092</p>
          <h2 id="impact-h" className="h2">Business impact</h2>
          <p className="body-copy">Each result links to the work behind it.</p>
        </div>
        <ol className="hire-impact">
          {impact.map((i) => (
            <li key={i.title}>
              <p className="hire-impact__figure">{i.figure}</p>
              <h3 className="h3">{i.title}</h3>
              <p className="body-copy">{i.text}</p>
              <Link to={i.to} className="link-arrow"><span>{i.label}</span> <ArrowRight /></Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="problems" className="sheet grid hire-section" aria-labelledby="problems-h" data-coord="093 · Problems I solve">
        <div className="hire-section__head">
          <p className="label">093</p>
          <h2 id="problems-h" className="h2">Problems I help organizations solve</h2>
          <p className="body-copy">Companies rarely need more engineering in general. They need one of these fixed.</p>
        </div>
        <div className="hire-problems">
          {problems.map((p) => (
            <article key={p.id} id={p.id} aria-labelledby={`${p.id}-h`}>
              <h3 id={`${p.id}-h`} className="h3">{p.title}</h3>
              <p className="body-copy">{p.text}</p>
              <Link to={p.to} className="link-arrow"><span>{p.label}</span> <ArrowRight /></Link>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="sheet grid hire-section" aria-labelledby="experience-h" data-coord="094 · Career highlights">
        <div className="hire-section__head">
          <p className="label">094</p>
          <h2 id="experience-h" className="h2">From hands-on engineering to organizational leadership</h2>
          <p className="body-copy">I supported the network before I designed it. Each role added a layer: operations, product, a company, then the business around the engineering.</p>
        </div>
        <ol className="hire-career">
          {roles.map((r) => (
            <li key={r.id}>
              <div className="hire-career__role">
                <h3 className="h3">{r.title}</h3>
                <p className="hire-career__org">{r.org}</p>
                <p className="label">{r.scale}</p>
              </div>
              <dl className="hire-career__spec">
                <div><dt className="label">Context</dt><dd>{r.problem}</dd></div>
                <div><dt className="label">Responsibility</dt><dd>{r.responsibility}</dd></div>
                <div><dt className="label">Outcome</dt><dd>{r.outcome}</dd></div>
              </dl>
              <Link to={`/experience/#${r.id}`} className="link-arrow hire-career__more"><span>Decisions and execution</span> <ArrowRight /></Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="philosophy" className="sheet grid hire-section" aria-labelledby="philosophy-h" data-coord="095 · How I lead">
        <div className="hire-section__head">
          <p className="label">095</p>
          <h2 id="philosophy-h" className="h2">How I lead engineering organizations</h2>
          <p className="body-copy">The longer version, with the signals I watch, is <Link to="/leadership/">my leadership operating manual</Link>.</p>
        </div>
        <ol className="hire-principles">
          {principles.map((p, i) => (
            <li key={p.to}>
              <span className="mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <Link to={p.to}>{p.text}</Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="expertise" className="sheet grid hire-section" aria-labelledby="expertise-h" data-coord="096 · Expertise">
        <div className="hire-section__head">
          <p className="label">096</p>
          <h2 id="expertise-h" className="h2">Technical leadership expertise</h2>
          <p className="body-copy">The tools matter less than knowing when each one is worth its cost. <Link to="/expertise/">Where each capability was earned</Link>.</p>
        </div>
        <dl className="hire-expertise">
          {expertise.map((e) => (
            <div key={e.area}>
              <dt>{e.area}</dt>
              <dd>{e.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="writing" className="sheet grid hire-section" aria-labelledby="writing-h" data-coord="097 · Featured writing">
        <div className="hire-section__head">
          <p className="label">097</p>
          <h2 id="writing-h" className="h2">How I think about the work</h2>
          <p className="body-copy">Essays on decisions engineering leaders make every week. <Link to="/writing/">All writing</Link>.</p>
        </div>
        <ul className="hire-writing">
          {featured.map((p) => (
            <li key={p.slug}>
              <h3 className="h3"><Link to={`/writing/${p.slug}/`} onClick={() => track('article_click', `/writing/${p.slug}/`)}>{p.title}</Link></h3>
              <p className="body-copy">{p.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
