import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import ContactForm, { contactEndpoint } from '../components/ContactForm';
import { ArrowDown, ArrowOut, ArrowRight } from '../components/Icons';
import { person } from '../content/profile';
import { paths } from '../content/contact';
import { track } from '../track';

const onLinkedIn = () => track('linkedin_click', person.linkedin);

export default function Contact() {
  return <article className="contact" aria-labelledby="contact-title">
    <TitleBlock section="700" title="Contact" as="p" cells={[{ k: 'Best route', v: 'LinkedIn or the form below' }]} />
    <header className="sheet grid contact-hero" data-coord="700 · Contact">
      <h1 id="contact-title" className="contact-hero__title display">Tell me about your team or opportunity.</h1>
      <div className="contact-hero__copy">
        <p className="contact-hero__lead">Share what you need, what stage the team is in, and where delivery or technical direction could be stronger.</p>
        <div className="contact-hero__actions">
          <a className="action" href="#leadership">Start an enquiry <ArrowDown /></a>
          <a className="action action--quiet" href={person.linkedin} target="_blank" rel="me noopener" onClick={onLinkedIn}>Message me on LinkedIn <ArrowOut /></a>
        </div>
      </div>
      <nav className="contact-hero__still" aria-label="Still evaluating">
        <p className="label">Still evaluating?</p>
        <ul><li><Link to="/engineering-leadership/">Leadership profile</Link></li><li><Link to="/experience/">Experience</Link></li><li><Link to="/projects/">Projects</Link></li></ul>
      </nav>
    </header>

    <section id="leadership" className="sheet grid contact-path" aria-labelledby="leadership-title" data-coord="701 · Leadership roles">
      <div className="contact-path__intro">
        <h2 id="leadership-title" className="h2">{paths.leadership.title}</h2>
        <p className="contact-path__lead">{paths.leadership.lead}</p>
        {contactEndpoint && <p className="contact-path__links"><a className="link-arrow" href={person.linkedin} target="_blank" rel="me noopener" onClick={onLinkedIn}><span>Prefer LinkedIn? Message me there</span> <ArrowOut /></a></p>}
      </div>
      <div className="contact-path__side">{contactEndpoint ? <ContactForm variant="leadership" /> : <a className="action" href={person.linkedin} target="_blank" rel="me noopener" onClick={onLinkedIn}>Contact me on LinkedIn <ArrowOut /></a>}</div>
    </section>

    <section id="consulting" className="sheet grid contact-path contact-path--last" aria-labelledby="consulting-title" data-coord="702 · Consulting">
      <div className="contact-path__intro"><h2 id="consulting-title" className="h2">{paths.consulting.title}</h2><p className="contact-path__lead">{paths.consulting.lead}</p></div>
      <p className="contact-path__side contact-path__links"><a className="action" href={person.yippify}>Visit Yippify <ArrowOut /></a><Link className="link-arrow" to="/projects/"><span>See selected projects</span> <ArrowRight /></Link></p>
    </section>

    <section id="start" className="sheet grid contact-path contact-path--last" aria-labelledby="start-title" data-coord="703 · Other questions">
      <div className="contact-path__intro">
        <h2 id="start-title" className="h2">Something else?</h2>
        <p className="contact-path__lead">Send a short note and I’ll reply by email.</p>
      </div>
      <div className="contact-path__side"><ContactForm /></div>
    </section>
  </article>;
}
