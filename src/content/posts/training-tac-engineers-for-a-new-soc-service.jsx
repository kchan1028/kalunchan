import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Training the TAC to support a new managed security service. Confirmed by KC (Nov 2026): helped train 20+ TAC
// engineers, all in one week-long training (KC corrected an earlier "30" to 20+); preparing the training and building the PowerPoint deck from
// nothing was the hard part; afterwards he supported the TAC's escalations; the lesson is patience with people who
// don't yet have the skill set or the fundamentals. Earlier facts come from network-security-before-devsecops
// (one of the first three in the SOC, no title, NetScreen firewall/VPN, East Coast trip, things done by feel had to
// become steps). The closing checklist is advice in hindsight, not a claim about how the original course was built.
// No specific escalation, trainee or incident is described because none was supplied. Stages are undated.

const security = '/writing/network-security-before-devsecops/';

export const toc = [
  ['service', 'What the SOC was supporting'],
  ['preparing', 'Preparing the training'],
  ['week', 'A week with the TAC'],
  ['patience', 'Patience with missing fundamentals'],
  ['escalations', 'Taking the escalations'],
];

// Fig. 729-1. Stages, not a schedule: no years, by site rule.
const stages = [
  { title: 'Learning it ourselves', text: 'One of the first three people supporting a new managed firewall and VPN service in the SOC. No runbook yet, so we wrote things down as we learned.' },
  { title: 'Preparing the training', text: 'My first course. A week of material and a PowerPoint deck built from nothing, turning troubleshooting I did by feel into steps.', accent: true },
  { title: 'A week with the TAC', text: 'More than twenty TAC engineers in the room for a week, with different backgrounds.' },
  { title: 'The TAC takes the calls', text: 'Customers call the TAC, and the TAC troubleshoots first, without anyone from the SOC in the room.' },
  { title: 'Escalations come back to me', text: 'The cases the TAC can’t close come to me. What keeps coming back shows where the training or the fundamentals fell short.', now: true },
];

function Handoff() {
  return (
    <figure className="journey" aria-labelledby="handoff-cap">
      <figcaption id="handoff-cap" className="journey__cap">
        <span className="mono">Fig. 729-1</span> How support for the service moved from three people to the TAC
        <span className="journey__key label">Stages, not a schedule.</span>
      </figcaption>
      <ol className="journey__list">
        {stages.map((s, i) => (
          <li key={s.title} className={`journey__stage${s.accent ? ' is-accent' : ''}${s.now ? ' is-now' : ''}`}>
            <span className="journey__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="journey__node" aria-hidden="true" />
            <div className="journey__body">
              <p className="journey__title">{s.title}</p>
              <p className="journey__text">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="service" aria-labelledby="service-h">
        <p>The first training course I ever built was for a service I had only just learned myself. I was one of the first three people supporting a new managed security service in a carrier’s Security Operations Center (SOC). As the service grew, the Technical Assistance Center (TAC) had to be able to support it without us. I helped train more than twenty TAC engineers to do that, and afterwards I supported their escalations.</p>
        <h2 id="service-h" className="post__h2">What was the SOC supporting?</h2>
        <p className="post__answer">The carrier sold managed firewalls and IPsec VPNs on NetScreen hardware to its business customers. Supporting the service meant taking change requests, maintaining security policy on each customer’s behalf, and troubleshooting connections that crossed networks we didn’t run. At first, three of us did all of it, without a runbook.</p>
        <p>I had no title for that work and I wasn’t running the SOC. I had never done security operations before. Most of what I knew about the service I had learned in the months before, from the documentation, from the devices in front of us and from customer tickets. I wrote about the technology and those first months in <Link to={security}>I Was Working on Network Security Long Before DevSecOps Was a Thing</Link>. This post is about what came after: handing the service to the people who would support it next.</p>
        <Handoff />
      </section>

      <section id="preparing" aria-labelledby="preparing-h">
        <h2 id="preparing-h" className="post__h2">The hard part was preparing the training</h2>
        <p>Knowing how to troubleshoot the service didn’t mean I knew how to teach it. I had never prepared a training course. I had a week to fill and a PowerPoint deck to build from nothing, and the questions I kept coming back to were basic ones. What goes first? How much can one slide hold before nobody reads it? How do I explain something I mostly do by feel?</p>
        <p>The closest thing I had to course material was what the three of us had written down as we learned. Notes like that are written by people who already understand the service, for people who already understand it. A class needs everything the authors have stopped noticing: why a rule exists, what a healthy tunnel looks like, what to check first and when to stop and escalate. Each of those had to become a step someone else could follow on a call without me.</p>
      </section>

      <section id="week" aria-labelledby="week-h">
        <h2 id="week-h" className="post__h2">A week with the TAC</h2>
        <p>I flew to the East Coast for a week of training with a group of more than twenty TAC engineers. They were the people who would answer the phone when a customer’s VPN went down at three in the morning, with nobody from the SOC on the line.</p>
        <p>What they needed most was a way to troubleshoot the service. That meant how traffic moves between zones and policies, what network address translation does to an address, why both ends of an IPsec tunnel have to agree before it comes up, where the session table and logs show what really happened, and the order to rule things out in. A firewall gets blamed in nearly every ticket, so the method had to start with the whole path from client to server.</p>
        <p>Their questions found the gaps quickly, in my understanding as much as in our notes. Teaching the service made me learn it again, properly this time.</p>
      </section>

      <section id="patience" aria-labelledby="patience-h">
        <h2 id="patience-h" className="post__h2">What did training the TAC teach me?</h2>
        <p className="post__answer">Be patient with people who don’t have the skill set or the fundamentals yet. A room of engineers rarely starts from the same place, and the people missing the basics are the ones the training most needs to reach.</p>
        <p>Some engineers in the room had the networking background to follow a firewall policy the first time through. Others didn’t have those fundamentals yet, and a policy between zones makes little sense until you know how a packet is routed and what an address translation changes. Going faster would have suited the first group and left the second holding slides they couldn’t use on a real call.</p>
        <p>Patience meant going back to how the network was supposed to work, as many times as it took, in a week that was already full. Usually the gap isn’t the trainee’s fault. The material assumed knowledge it never taught.</p>
      </section>

      <section id="escalations" aria-labelledby="escalations-h">
        <h2 id="escalations-h" className="post__h2">Taking the escalations</h2>
        <p>After the training, the TAC took the customer calls and troubleshot them first. The cases they couldn’t close came to me as escalations.</p>
        <p>An escalation tells you something about the training as well as the customer. When the same kind of problem keeps coming back, either the material didn’t cover it or the fundamentals underneath it are still missing. Either way, the fix is more teaching, and fixing the ticket alone leaves the next one on its way.</p>
        <p>That’s still how I think about <Link to="/mentorship/">mentoring engineers</Link>. A support organization that depends on the two or three people who were there at the beginning is a single point of failure. The aim is a team that handles the problem without you, and the escalations show how close it is.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">How I’d prepare that training today</h2>
      <div className="post__close-copy">
        <p>Looking back, this is the order I’d use to prepare a team to support something new.</p>
        <ol className="post__close-list">
          <li>List the problems the team will be asked to solve, from real tickets if you have them.</li>
          <li>For each one, write what to check first, what healthy looks like and when to escalate.</li>
          <li>Find the fundamentals those problems depend on, and teach them before the product.</li>
          <li>Ask early what people already know, so you can tell who needs the basics.</li>
          <li>Put diagrams and steps people will need again on the slides. Spend the rest of the time troubleshooting together.</li>
          <li>Leave a runbook behind and name the escalation path.</li>
        </ol>
        <div className="post__close-actions">
          <Link to="/mentorship/" className="action">How I mentor engineers <ArrowRight /></Link>
          <Link to={security} className="link-arrow"><span>Network security before DevSecOps</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
