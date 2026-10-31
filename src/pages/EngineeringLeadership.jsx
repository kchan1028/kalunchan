import { Link } from 'react-router';
import { person, roles } from '../content/profile';
import { posts } from '../content/writing';
import {
  opportunityStatement, resumeRequest, currentWork, briefing, outcomes, paths, summary, impact, problems, focuses, principles, expertise, featuredSlugs,
} from '../content/engineeringLeadership';
import HiringContactLink from '../components/HiringContactLink';
import TitleBlock from '../components/TitleBlock';
import FocusPicker, { useFocus } from '../components/FocusPicker';
import { track } from '../track';
import { ArrowOut, ArrowRight } from '../components/Icons';

const onResume = () => track('resume_request', resumeRequest);

const featured = featuredSlugs.map((slug) => posts.find((p) => p.slug === slug)).filter(Boolean);

// Matches first, otherwise in their written order. Nothing is removed.
const matchesFirst = (items, keys, keyOf) => (keys ? [...items].sort((a, b) => keys.includes(keyOf(b)) - keys.includes(keyOf(a))) : items);
const matchCount = (noun, items, keys, keyOf) => {
  const n = items.filter((i) => keys.includes(keyOf(i))).length;
  return `${n} ${noun}${n === 1 ? '' : 's'}`;
};
const figureOf = (i) => i.figure;
const idOf = (p) => p.id;
const slugOf = (p) => p.slug;

export default function EngineeringLeadership() {
  const { focus, arrived, choose } = useFocus(focuses);
  const isMatch = (group, key) => (focus?.[group].includes(key) ? 'is-match' : undefined);

  return (
    <>
      <TitleBlock section="090" title="Engineering leadership" cells={[{ k: 'Open to', v: 'Engineering leadership opportunities' }, { k: 'Based', v: 'SF Bay Area' }]} />
      <section className="sheet grid hire-brief" aria-labelledby="brief-h" data-coord="090 · Briefing">
        {/* Someone who arrived on a focused link hasn't reached the picker yet, so the first screen says the page is arranged for them. */}
        {arrived && focus && (
          <p className="hire-brief__focus">
            <span className="label">Evidence arranged for</span>
            <a href="#impact" className="link-arrow"><span>{focus.label}</span> <ArrowRight /></a>
          </p>
        )}
        <h2 id="brief-h" className="hire-brief__h label">Briefing</h2>
        <dl className="hire-brief__facts">
          {briefing.map((b) => (
            <div key={b.k}>
              <dt className="label">{b.k}</dt>
              <dd>{b.v}</dd>
            </div>
          ))}
        </dl>
        <ul className="hire-brief__outcomes" aria-label="Headline outcomes">
          {outcomes.map((o) => (
            <li key={o.figure}>
              <Link to={o.to}><strong className="hire-brief__figure">{o.figure}</strong> <span>{o.text}</span></Link>
            </li>
          ))}
        </ul>
        <p className="hire-brief__actions">
          <HiringContactLink />
          <Link to="/experience/" className="action action--quiet">See my experience <ArrowRight /></Link>
        </p>
      </section>
      <div className="sheet grid page-lead hire-lead">
        <p className="page-lead__claim">
          I’m most useful when a team is growing, delivery is slowing or a platform needs modernizing while people still depend on it.
        </p>
        <p className="page-lead__aside body-copy">
          Ka Lun Chan (KC) is a San Francisco Bay Area engineering leader. As co-founder and CTO he built a startup from the ground up to 400,000+ users and an acquisition, then served as CTO of a media publishing platform. Earlier he was VP of Operations for a voice services company. He now leads architecture and delivery for government and startup clients through Yippify, and he still writes code.
        </p>
        <p className="hire-lead__actions">
          <a href="#experience" className="action action--quiet">View my experience <ArrowRight /></a>
        </p>
      </div>

      <aside className="open-to on-blue" aria-label="Roles I’m open to" data-coord="090 · Open to">
        <div className="sheet grid">
          <p className="open-to__roles">{opportunityStatement}</p>
          <div className="open-to__side">
            <HiringContactLink />
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
          <a href={`${person.linkedin}details/recommendations/`} className="action action--quiet" rel="me noopener" target="_blank" onClick={() => track('linkedin_click', `${person.linkedin}details/recommendations/`)}>Read LinkedIn recommendations <ArrowOut /></a>
        </p>
      </section>


      <section id="current-work" className="sheet grid hire-section" aria-labelledby="current-work-h" data-coord="091-2 · Current work">
        <div className="hire-section__head">
          <h2 id="current-work-h" className="h2">Current work through Yippify</h2>
          <p className="body-copy">Public-sector application delivery, alongside work with startups and founders.</p>
        </div>
        <dl className="hire-summary">
          {currentWork.map((item) => (
            <div key={item.k}>
              <dt className="label">{item.k}</dt>
              <dd>{item.v}</dd>
            </div>
          ))}
        </dl>
        <p className="hire-section__foot">
          <Link to="/writing/building-public-sector-applications/" className="link-arrow"><span>The engineering behind public-sector delivery</span> <ArrowRight /></Link>
          <Link to="/writing/modernizing-public-sector-applications/" className="link-arrow"><span>How I approach modernization</span> <ArrowRight /></Link>
        </p>
      </section>

      <FocusPicker
        title="What are you hiring for?"
        options={focuses}
        focus={focus}
        choose={choose}
        coord="091-1 · Hiring for"
        status={focus
          ? `Moved to the top: ${matchCount('result', impact, focus.impact, figureOf)}, ${matchCount('problem', problems, focus.problems, idOf)} and ${matchCount('post', featured, focus.writing, slugOf)}. Everything else is still below.`
          : 'Pick one and the closest evidence moves to the top of each section below. Nothing is hidden.'}
      />

      <section id="impact" className="sheet grid hire-section" aria-labelledby="impact-h" data-coord="092 · Business impact">
        <div className="hire-section__head">
          <p className="label">092</p>
          <h2 id="impact-h" className="h2">Business impact</h2>
          <p className="body-copy">Each result links to the work behind it.</p>
        </div>
        <ol className="hire-impact">
          {matchesFirst(impact, focus?.impact, figureOf).map((i) => (
            <li key={i.title} className={isMatch('impact', i.figure)}>
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
          {matchesFirst(problems, focus?.problems, idOf).map((p) => (
            <article key={p.id} id={p.id} className={isMatch('problems', p.id)} aria-labelledby={`${p.id}-h`}>
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
          {matchesFirst(featured, focus?.writing, slugOf).map((p) => (
            <li key={p.slug} className={isMatch('writing', p.slug)}>
              <h3 className="h3"><Link to={`/writing/${p.slug}/`}>{p.title}</Link></h3>
              <p className="body-copy">{p.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
