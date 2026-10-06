import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import BandHead from '../components/BandHead';
import ContactForm, { contactEndpoint } from '../components/ContactForm';
import useReveal from '../components/useReveal';
import { ArrowDown, ArrowOut, ArrowRight } from '../components/Icons';
import { person } from '../content/profile';
import { branches, problems, strengths, operating, becomes, impression } from '../content/contact';

// Engineering leadership drawn as one system: three branches joined by a hands-on bus, converging on the outcome.
function Stack() {
  return (
    <div className="stack__tree">
      <p className="stack__node stack__root">Engineering leadership</p>
      <span className="stack__wire" aria-hidden="true" />
      <div className="stack__branches">
        {branches.map((b) => (
          <section key={b.id} className="stack__branch" aria-labelledby={`stack-${b.id}`}>
            <h3 id={`stack-${b.id}`} className="stack__node stack__name">{b.name}</h3>
            <span className="stack__wire" aria-hidden="true" />
            <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </section>
        ))}
        <span className="stack__bus" aria-hidden="true" />
      </div>
      <span className="stack__wire" aria-hidden="true" />
      <p className="stack__node stack__outcome">Business outcome</p>
    </div>
  );
}

export default function Contact() {
  const ref = useReveal();
  const heroRef = useRef(null);
  const talkRef = useRef(null);
  const [bar, setBar] = useState(false);

  // Mobile: keep the primary action one tap away between the hero and the form.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const seen = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.isIntersecting));
      setBar(![...seen.values()].some(Boolean));
    });
    io.observe(heroRef.current);
    io.observe(talkRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <article className="contact" ref={ref} aria-labelledby="contact-title">
      <TitleBlock section="700" title="Contact" as="p" cells={[{ k: 'Best route', v: 'LinkedIn' }]} />

      <header ref={heroRef} className="sheet grid contact-hero" data-coord="700 · Contact">
        <h1 id="contact-title" className="contact-hero__title display">Let’s talk about what you’re trying to build.</h1>
        <div className="contact-hero__copy">
          <p className="contact-hero__lead">I’m always interested in a good engineering problem: scaling an engineering organization, modernizing a complex platform, fixing slow delivery, building a new product, or bringing in experienced technical leadership.</p>
          <div className="contact-hero__actions">
            <a className="action" href="#start">Start a conversation <ArrowDown /></a>
            <Link className="link-arrow" to="/experience/"><span>View my experience</span> <ArrowRight /></Link>
          </div>
        </div>
        <nav className="contact-hero__still" aria-label="Still evaluating">
          <p className="label">Still evaluating?</p>
          <ul>
            <li><Link to="/experience/">Experience</Link></li>
            <li><Link to="/projects/">Projects</Link></li>
            <li><Link to="/about/">The longer story</Link></li>
          </ul>
        </nav>
      </header>

      <section className="stack on-blue" aria-labelledby="stack-title" data-coord="701 · Leader who goes deep">
        <div className="sheet grid">
          <header className="stack__head">
            <p className="mono stack__fig">Fig. 700-1</p>
            <h2 id="stack-title" className="h2">Need an engineering leader who can still go deep?</h2>
          </header>
          <div className="stack__copy">
            <p>I don’t see engineering management, architecture, delivery and people development as separate jobs. They influence each other.</p>
            <p>I work across people and organization on one side, systems and architecture on the other, with product thinking and hands-on technical depth connecting them.</p>
          </div>
          <div className="stack__fig-body">
            <Stack />
            <div className="stack__axis label" aria-hidden="true"><span>People &amp; organization</span><span>Systems &amp; architecture</span></div>
            <p className="stack__key label"><span className="stack__key-dash" aria-hidden="true" /> Hands-on technical depth runs through all three.</p>
          </div>
        </div>
      </section>

      <section className="sheet contact-band problems" aria-labelledby="problems-title" data-coord="702 · Problems worth a call">
        <BandHead no="702" id="problems-title" title="We should probably talk if you’re dealing with…" />
        <ul className="problems__list">
          {problems.map((p, i) => <li key={p} style={{ '--i': i % 2 }} data-reveal>{p}</li>)}
        </ul>
      </section>

      <section className="sheet grid contact-band fit" aria-labelledby="fit-title" data-coord="703 · Where I add value">
        <div className="fit__copy">
          <h2 id="fit-title" className="h2">Capability first. Title second.</h2>
          <p className="body-copy">I’m most useful where engineering, product and the business have to move together, and where the team needs to get stronger while it ships.</p>
        </div>
        <ul className="fit__run" aria-label="Where I’m most relevant">
          {strengths.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <p className="fit__roles">I work with companies through Yippify, on scoped projects or ongoing engineering leadership.</p>
      </section>

      <section className="sheet contact-band operate" aria-labelledby="operate-title" data-coord="704 · What you get">
        <BandHead no="704" id="operate-title" title="What you’ll get from me." />
        <dl className="operate__list">
          {operating.map((o, i) => (
            <div key={o.says} style={{ '--i': i }} data-reveal>
              <dt>{o.says}</dt>
              <dd>{o.means}</dd>
            </div>
          ))}
        </dl>
        <aside className="operate__mentor" aria-label="Mentorship">
          <p>I want engineers who can challenge me, make decisions, lead others, and eventually take over parts of my job. A team that needs me for every call is a team I’ve built badly.</p>
          <Link className="link-arrow" to="/mentorship/"><span>Read how I think about mentorship</span> <ArrowRight /></Link>
        </aside>
      </section>

      <section className="sheet grid contact-band founder" aria-labelledby="founder-title" data-coord="705 · Founder perspective">
        <div className="founder__copy">
          <h2 id="founder-title" className="h2">I’ve sat on both sides of the engineering conversation.</h2>
          <p className="body-copy">As a co-founder and CTO, I watched technical decisions turn into cost, hiring, product and customer decisions, usually sooner than anyone expected. I still lead with that in mind.</p>
          <div className="founder__links">
            <Link className="link-arrow" to="/writing/building-a-startup-from-idea-to-acquisition/"><span>Read the founder story</span> <ArrowRight /></Link>
            <Link className="link-arrow" to="/experience/"><span>Experience</span> <ArrowRight /></Link>
          </div>
        </div>
        <div className="founder__becomes">
          <p className="label">A technical decision eventually becomes a</p>
          <ol>
            {becomes.map((b, i) => <li key={b} style={{ '--i': i }} data-reveal><strong>{b}</strong> decision.</li>)}
          </ol>
        </div>
      </section>

      <section id="start" ref={talkRef} className={`sheet grid contact-band talk${contactEndpoint ? ' talk--form' : ''}`} aria-labelledby="talk-title" data-coord="706 · Start a conversation">
        <div className="talk__intro">
          <h2 id="talk-title" className="talk__title display">Let’s talk.</h2>
          <p className="talk__lead">You don’t have to decide from a website whether I’m the right person. That’s what a conversation is for.</p>
          <p className="body-copy">You don’t need a polished pitch. If there’s an interesting engineering, product or organizational problem worth discussing, send me a note.</p>
          {contactEndpoint && <ContactForm />}
          <div className="talk__direct">
            {contactEndpoint
              ? <a className="link-arrow" href={person.linkedin} target="_blank" rel="me noopener"><span>Prefer LinkedIn? Message me there</span> <ArrowOut /></a>
              : <a className="action" href={person.linkedin} target="_blank" rel="me noopener">Contact me on LinkedIn <ArrowOut /></a>}
            {person.email && <a className="link-arrow" href={`mailto:${person.email}`}><span>{person.email}</span></a>}
          </div>
        </div>
        <ul className="talk__impression">
          {impression.map((l) => <li key={l}>{l}</li>)}
        </ul>
      </section>

      <div className={bar ? 'contact-bar is-on' : 'contact-bar'} aria-hidden={!bar}>
        <a className="action" href="#start" tabIndex={bar ? 0 : -1}>Start a conversation <ArrowDown /></a>
      </div>
    </article>
  );
}
