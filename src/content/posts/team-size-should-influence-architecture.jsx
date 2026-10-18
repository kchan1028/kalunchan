import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Background facts supplied by KC: 20+ years across VoIP, publishing, SaaS and
// government; teams of 2–6 engineers; helped grow teams from 5 to 30. The
// five-person team below is hypothetical and labelled as such on the page.

export const toc = [
  ['carry', 'Who carries the design'],
  ['after-launch', 'The cost after the code ships'],
  ['five-people', 'A five-person team, twelve services'],
  ['modular-monolith', 'The modular monolith, on purpose'],
  ['separation', 'When separation earns its cost'],
  ['headcount', 'Headcount is one input'],
  ['organization', 'What it does to the organization'],
  ['revisit', 'When to revisit'],
  ['checklist', 'A short checklist'],
];

export default function Body() {
  return (
    <>
      <section id="carry" aria-labelledby="carry-h">
        <h2 id="carry-h" className="post__h2">Every design comes with someone to carry it</h2>
        <p>An architecture diagram shows boxes and arrows. It doesn’t show who gets paged when one of the arrows stops working at two in the morning, or who spends a Thursday upgrading the same library in nine repositories.</p>
        <p>I’ve built software across VoIP, publishing, SaaS and government applications. Most of the time I’ve led small teams of two to six engineers, and I’ve helped grow teams from five people to thirty. I’ve worked in Rails and Django monoliths and in microservices on AWS, with CI/CD pipelines and teams spread across time zones. When someone proposes a new design, I ask a practical question early: who is going to carry this?</p>
        <p className="post__answer">Team size should influence architecture because every architecture creates ongoing work: deployments, monitoring, security updates, incident response and ownership. The right design meets the business’s requirements and fits the structure of the team, and the team has to be able to operate it.</p>
      </section>

      <section id="after-launch" aria-labelledby="after-launch-h">
        <h2 id="after-launch-h" className="post__h2">The cost after the code ships</h2>
        <p>Building a service is the part everyone estimates. The rest arrives afterward and stays for as long as the service runs:</p>
        <ul className="post__list">
          <li>An owner who knows how it works and decides how it changes</li>
          <li>A deployment pipeline, kept working when base images and runners change</li>
          <li>Monitoring and alerts tuned well enough that people trust them</li>
          <li>Security patches, dependency upgrades and secrets to rotate</li>
          <li>Incident response, with someone who can debug it under pressure</li>
          <li>Documentation that stays current enough to help the next person</li>
        </ul>
        <p>Each item needs a person with time to do it. A design review that only estimates implementation is pricing the smallest part of the bill.</p>
      </section>

      <section id="five-people" aria-labelledby="five-people-h">
        <h2 id="five-people-h" className="post__h2">A hypothetical five-person team considering twelve services</h2>
        <p>Picture a five-person team running a B2B SaaS product as a single application. The codebase is getting crowded, and someone proposes splitting it into a dozen services: accounts, billing, orders, notifications, reporting, search and six more.</p>
        <p>After the split, their week changes.</p>
        <p>A feature that touches orders and billing now means two pull requests in two repositories, an API contract change between them, and a deploy order someone has to remember. A security fix in the web framework becomes twelve upgrades, each with its own pipeline run. A slow checkout request crosses four services, so finding the cause needs distributed tracing that somebody has to set up and maintain.</p>
        <p>On-call changes most. Five people now cover twelve services. Either everyone learns enough about all twelve to handle a page, or the rotation depends on whoever built the service that’s failing. When the engineer who knows billing goes on vacation, billing changes wait.</p>
        <p>Every hour spent on that work comes out of the same five people’s week. Features, customer support, infrastructure and production problems all draw on one pool of attention, and a small team feels each new obligation right away.</p>
        <p>The split could still be worth it. Suppose reporting jobs were slowing the customer-facing app and needed to scale on their own. Suppose a large customer required payment data to sit behind a separate security boundary. Suppose the company planned to double the team and form a second team around one domain. Each of those is a business reason to extract a service. If two or three of the twelve candidates had a reason like that, I’d extract those and keep the rest together.</p>
      </section>

      <section id="modular-monolith" aria-labelledby="modular-monolith-h">
        <h2 id="modular-monolith-h" className="post__h2">The modular monolith as a deliberate choice</h2>
        <p>A modular monolith is one deployable application with firm internal boundaries. Each module owns its data and exposes a small interface, and checks in CI stop other modules from reaching into its internals. Rails engines and Django apps both support this way of working.</p>
        <p>The team keeps one pipeline, one place to debug and database transactions that still work. The boundaries do the organizing that services would otherwise do. If a module later needs to become a service, the seam is already there, and extracting it is a contained project. I’ve written about that path in more detail in <Link to="/writing/should-it-be-a-microservice/">how I decide whether a microservice should be a microservice</Link>.</p>
      </section>

      <section id="separation" aria-labelledby="separation-h">
        <h2 id="separation-h" className="post__h2">When separation earns its cost</h2>
        <p>Microservices solve real problems, and as teams grow those problems become common. Separation tends to pay for itself in four situations:</p>
        <ul className="post__list">
          <li>Independent scaling: one workload has a very different load profile, such as batch processing next to a request-and-response app.</li>
          <li>Release cadence: one area changes daily and another needs slower, more careful releases.</li>
          <li>Security isolation: payments, authentication or regulated data benefit from a smaller blast radius and tighter access.</li>
          <li>Stable ownership: a team will own the service long term, with backup coverage, not just whoever wrote the first version.</li>
        </ul>
        <p>At thirty engineers, the coordination cost of one shared codebase can outweigh the operational cost of several services. Teams waiting on each other’s merges and releases is a real problem, and service boundaries that match team boundaries can fix it.</p>
      </section>

      <section id="headcount" aria-labelledby="headcount-h">
        <h2 id="headcount-h" className="post__h2">Headcount is one input among several</h2>
        <p>Team size matters, but it doesn’t decide the question alone. A six-person team handling payments, heavy data processing and strict uptime requirements may need more separation than a twelve-person team building a simple internal tool. I also look at:</p>
        <ul className="post__list">
          <li>Domain complexity, and whether the domains have clear edges</li>
          <li>Reliability requirements, and what an outage in one area costs the business</li>
          <li>Skills, especially operating containers, cloud networking and observability</li>
          <li>Organizational boundaries: who reports where, which teams sit in which time zones</li>
        </ul>
      </section>

      <section id="organization" aria-labelledby="organization-h">
        <h2 id="organization-h" className="post__h2">What architecture does to the organization</h2>
        <p>Architecture decides how much people have to coordinate. It decides whether a new engineer can run the product on a laptop in the first week or spends that week wiring up a dozen services. It decides whether on-call is shared fairly or falls to the two people who understand the most moving parts.</p>
        <p>It also decides how much depends on individuals. Every service only one person understands is a single point of failure, the same as a server with no backup. Removing those is a large part of <Link to="/leadership/">how I lead engineering teams</Link>, and the architecture either helps with that or works against it.</p>
      </section>

      <section id="revisit" aria-labelledby="revisit-h">
        <h2 id="revisit-h" className="post__h2">When to revisit the decision</h2>
        <p>I don’t use a headcount threshold as the trigger. I watch for problems the team can see:</p>
        <ul className="post__list">
          <li>Releases regularly wait on unrelated changes from another group</li>
          <li>One workload’s load or failures keep affecting everything else</li>
          <li>Incidents keep landing in the same part of the system</li>
          <li>A compliance requirement calls for a hard boundary</li>
          <li>A team is forming around a domain and is ready to own it</li>
        </ul>
        <p>When one of those shows up, the conversation has evidence behind it. The same logic runs the other way: a set of services that always change together can be merged back. I wrote about how my own thinking moved across these patterns in <Link to="/writing/software-architecture-lessons-from-different-systems/">what different systems taught me about software architecture</Link>.</p>
      </section>

      <section id="checklist" aria-labelledby="checklist-h">
        <h2 id="checklist-h" className="post__h2">A short decision checklist</h2>
        <p>Before adding a service, I want clear answers to five questions:</p>
        <ol className="post__steps">
          <li>What problem are we solving?</li>
          <li>Who owns the service, including backup coverage?</li>
          <li>What delivery or operational benefit will we gain?</li>
          <li>What ongoing work are we adding?</li>
          <li>Why is this the right time?</li>
        </ol>
        <p>If the answer to the second question is “the team” or one person with no backup, the service isn’t ready.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Choose what your team can sustain</h2>
      <div className="post__close-copy">
        <p className="lead">The best architecture for a team is one it can run well on an ordinary week and still debug at two in the morning.</p>
        <p className="post__close-principle">Choose an architecture your team can sustain while it meets the business’s needs, and change it when the evidence supports the change.</p>
        <p>That might mean a modular monolith for years, a few well-chosen services, or a gradual move to many. The answer should follow the team and the business, and it should be revisited as they grow.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an architecture decision <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
