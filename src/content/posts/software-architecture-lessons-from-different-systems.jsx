import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Role facts come from profile.js ('voice', 'communications', 'publishing') and work.js.
// Keep employers unnamed and years out of the visible text.

export const toc = [
  ['right-architecture', 'It depends on the problem'],
  ['network', 'Software and the network'],
  ['publishing', 'What publishing taught me'],
  ['monolith', 'The monolith wasn’t the enemy'],
  ['microservices', 'Then came microservices'],
  ['events', 'Kafka and events'],
  ['organizations', 'Architecture and organizations'],
  ['fashion', 'Architecture fashion'],
  ['boring', 'Boring architecture'],
  ['full-circle', 'The full circle'],
  ['tradeoffs', 'Architecture is tradeoffs'],
];

const callPath = {
  label: 'One phone call, many places to fail',
  key: 'Every hop is part of the system',
  tiers: [
    { name: 'Caller', nodes: [{ id: 'phone', label: 'Phone' }] },
    { name: 'Network', nodes: [{ id: 'net', label: 'Access network', sub: 'DNS · NAT · firewall' }] },
    {
      name: 'Platform',
      nodes: [
        { id: 'sip', label: 'SIP infrastructure', sub: 'signaling · codecs' },
        { id: 'app', label: 'Application logic' },
      ],
    },
    { name: 'Carrier', nodes: [{ id: 'carrier', label: 'Carrier' }, { id: 'pstn', label: 'PSTN' }] },
    { name: 'Callee', nodes: [{ id: 'dest', label: 'Destination' }] },
  ],
  edges: [
    ['phone', 'net'],
    ['net', 'sip'],
    ['sip', 'app'],
    ['sip', 'carrier'],
    ['carrier', 'pstn'],
    ['pstn', 'dest'],
  ],
};

const events = {
  label: 'Event-driven: producers don’t need to know their consumers',
  key: 'Looser coupling, harder debugging',
  tiers: [
    { name: 'Producer', nodes: [{ id: 'a', label: 'Service A', sub: 'publishes an event' }] },
    { name: 'Stream', nodes: [{ id: 'kafka', label: 'Kafka topic' }] },
    {
      name: 'Consumers',
      nodes: [
        { id: 'b', label: 'Service B' },
        { id: 'c', label: 'Service C' },
      ],
    },
    { name: 'Downstream', nodes: [{ id: 'd', label: 'Service D' }] },
  ],
  edges: [
    ['a', 'kafka', null, true],
    ['kafka', 'b', null, true],
    ['kafka', 'c', null, true],
    ['c', 'd', null, true],
  ],
};

export default function Body() {
  return (
    <>
      <section id="right-architecture" aria-labelledby="right-architecture-h">
        <h2 id="right-architecture-h" className="post__h2">The right architecture depends on the problem</h2>
        <p>I’ve been building software long enough to watch architecture change several times. As a co-founder, I built an open-source VoIP and telecommunications platform, billing system included, from the ground up. I was CTO of a <Link to="/experience/#publishing">media publishing platform</Link>, where WordPress, Ruby on Rails, editorial workflows and SEO all had to coexist. I’ve built traditional monolithic applications, and later I worked with distributed systems and microservices.</p>
        <p>I expected the lesson to be that architecture kept improving. What I learned instead is that each kind of system was right for some problems and wrong for others.</p>
        <p className="post__answer">The right software architecture is the one that fits the problem, the team and the stage of the business. Monoliths, microservices and event-driven systems each solve some problems and create others, so the useful question is which of those tradeoffs you can afford.</p>
      </section>

      <section id="network" aria-labelledby="network-h">
        <h2 id="network-h" className="post__h2">When software and the network were the same problem</h2>
        <p>Some of my earliest architecture lessons came from telecommunications and VoIP. I ran operations for a <Link to="/experience/#voice">voice service</Link> and later co-founded a <Link to="/writing/building-a-startup-from-idea-to-acquisition/">global communications platform</Link>.</p>
        <p>We built that platform from the rack up. I racked servers, ran the cabling, configured the servers, routers and switches, and wrote the software on top, including our own billing system. Seeing every layer taught me early that software architecture doesn’t stop at the application boundary.</p>
        <p>A single call travels through a lot of systems before anyone hears a voice on the other end.</p>
        <Diagram spec={callPath} id="call-path" no="665-1" />
        <p>When a call failed, the application wasn’t necessarily the problem. It could be DNS, routing, NAT, a firewall, SIP signaling, a codec negotiation, the carrier, latency or packet loss. Or it could be the application. You couldn’t open one repository and understand the whole system.</p>
        <p className="post__pull">Understand the whole path, including the parts outside your component.</p>
        <p>That lesson has stayed with me. Today the path runs through Kubernetes, AWS, APIs, queues and databases instead of SIP gateways and carriers, but debugging a distributed system still means understanding what happens between the components. The operations side of that story, from Expect scripts in a NOC to AI agents, is in <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">how DevOps changed during my career</Link>. I go deeper on the VoIP side in <Link to="/writing/open-source-voip-distributed-systems-lessons/">what open source VoIP taught me about distributed systems</Link>.</p>
      </section>

      <section id="publishing" aria-labelledby="publishing-h">
        <h2 id="publishing-h" className="post__h2">Publishing taught me a different kind of architecture</h2>
        <p>From the outside, publishing looks like writing an article and putting it on a website. At scale there’s a lot more to it.</p>
        <p>We had different systems serving different purposes, including WordPress and Ruby on Rails applications. Content moved through editorial workflows and reached readers through websites, search engines, social platforms and other channels. Architecture decisions reached well past how the application behaved. They affected:</p>
        <ul className="post__list">
          <li>editorial workflows and publishing speed</li>
          <li>search visibility, URL structure and page performance</li>
          <li>advertising, analytics and content discovery</li>
          <li>integrations and migrations</li>
          <li>years of existing content</li>
        </ul>
        <p>A developer could make a technically reasonable decision and create a business problem without noticing. Changing URLs could hurt SEO. Changing how pages rendered could change what search engines saw. Replacing a CMS could disrupt the editors. One migration could break thousands of old links. Slow pages lost readers and search visibility, and eventually revenue.</p>
        <p className="post__pull">The business runs through the software, so architecture shapes how the business operates.</p>
        <p>I wrote more about this side of the job in <Link to="/writing/what-publishing-taught-me-about-seo-aeo-geo/">what being a CTO in publishing taught me about SEO, AEO and GEO</Link>.</p>
      </section>

      <section id="monolith" aria-labelledby="monolith-h">
        <h2 id="monolith-h" className="post__h2">The monolith wasn’t the enemy</h2>
        <p>Like many engineers, I spent a lot of time on monolithic applications, and I think monoliths have an unfair reputation.</p>
        <p>A well-designed monolith can be extremely productive. You have one application and one deployment, often with one database, so transactions are straightforward and debugging and local development are easier. You can trace a request through the code without jumping across five services, three queues and two observability platforms. For a small team or a new product, that simplicity is worth a great deal.</p>
        <p>The problems start when the boundaries inside the monolith disappear. Everything depends on everything else. A small change requires understanding half the application. Deployments get riskier, tests get slower, and one team’s changes break another team’s work. Parts of the system that need to scale differently can’t.</p>
        <p>Eventually the organization’s boundaries and the application’s boundaries stop matching, and the architecture starts pushing back.</p>
      </section>

      <section id="microservices" aria-labelledby="microservices-h">
        <h2 id="microservices-h" className="post__h2">Then came microservices</h2>
        <p>Microservices offered an attractive answer: break the system into independently deployable services. Teams can own individual services. Services can scale on their own. Different workloads can use different technologies, deployments get smaller, and failures can be isolated.</p>
        <p>Sometimes you get all of that. You also get new work, because splitting a system up moves its complexity onto the network.</p>
        <p className="post__answer">Microservices trade complexity inside one application for complexity across a network. A function call becomes a network request, a database transaction may become an asynchronous workflow, and an exception may become a timeout.</p>
        <p>Now the team has to think about service discovery, API contracts, authentication and authorization between services, retries, timeouts, queues, event ordering, idempotency, distributed tracing, schema evolution, deployment coordination and eventual consistency.</p>
        <p>Networks fail, which made my telecommunications experience relevant again. I go deeper on when a split is worth it in <Link to="/writing/should-it-be-a-microservice/">how I decide whether a microservice should actually be a microservice</Link>.</p>
      </section>

      <section id="events" aria-labelledby="events-h">
        <h2 id="events-h" className="post__h2">Kafka changed how I thought about communication</h2>
        <p>Another shift for me was moving from mostly synchronous calls, where service A calls B and B calls C, toward event-driven systems.</p>
        <Diagram spec={events} id="event-driven" no="665-2" />
        <p>Producers don’t need to know every consumer, consumers process events independently, and services become less tightly coupled. In exchange, a new set of questions shows up:</p>
        <ul className="post__list">
          <li>What happens if a message is processed twice?</li>
          <li>What happens if processing fails halfway?</li>
          <li>What happens when events arrive out of order?</li>
          <li>How do we evolve schemas, and how do we replay events?</li>
          <li>How do we find which service produced bad data?</li>
          <li>How do we debug a business transaction that crossed six services asynchronously?</li>
        </ul>
        <p>The diagram gets cleaner, but operating the system often gets harder. The <Link to="/work/event-driven-platform/">event-driven design example</Link> explores how a transactional outbox and idempotent consumers address publication failures and duplicate delivery.</p>
      </section>

      <section id="organizations" aria-labelledby="organizations-h">
        <h2 id="organizations-h" className="post__h2">Architecture and organizations are connected</h2>
        <p>One of the biggest things I’ve learned as an engineering leader is that software architecture usually reflects the organization that builds it.</p>
        <p>A six-person engineering team rarely needs twenty microservices. You could build them, but then six engineers have to operate twenty services: twenty pipelines, twenty sets of logs, twenty things to monitor and twenty things that can fail.</p>
        <p>As teams grow, the calculation changes. If thirty engineers keep stepping on each other inside one application, clearer service boundaries can create real independence. That’s why I no longer treat architecture as a purely technical decision. I ask:</p>
        <ul className="post__list">
          <li>How many engineers do we have?</li>
          <li>How often does this system change?</li>
          <li>Which teams own which capabilities?</li>
          <li>Where are the actual scaling problems?</li>
          <li>What are our reliability requirements?</li>
          <li>How hard will this be to operate at 2 AM?</li>
        </ul>
        <p>And one question that doesn’t get asked enough: what is the simplest architecture that solves the problem we actually have?</p>
      </section>

      <section id="fashion" aria-labelledby="fashion-h">
        <h2 id="fashion-h" className="post__h2">I’ve become more skeptical of architecture fashion</h2>
        <p>Technology has trends like every other industry. Everything needed to be service-oriented. Then everything needed to be microservices. Then Kubernetes, then serverless. Now everything seems to need AI.</p>
        <p>I’ve learned to be careful when an architecture conversation starts with a technology instead of a problem. “We should use microservices.” “We should use Kafka.” “We should use Kubernetes.” My answer to each is the same: why? Until someone answers that, they’re technology preferences, and nobody has made an architecture decision yet.</p>
        <p>The architecture conversation should start with the constraints. We need to understand who uses the product, its traffic and reliability requirements, and how quickly those may change. The design also has to fit what the team can realistically operate. Those constraints guide the technology choice.</p>
      </section>

      <section id="boring" aria-labelledby="boring-h">
        <h2 id="boring-h" className="post__h2">Sometimes the best architecture is boring</h2>
        <p>After working with increasingly complicated systems, I appreciate boring architecture more than I used to:</p>
        <ul className="post__list">
          <li>A Django or Rails application on PostgreSQL</li>
          <li>Redis when it’s actually needed</li>
          <li>A queue where asynchronous processing provides real value</li>
          <li>A few well-defined services where there are genuine domain or scaling boundaries</li>
          <li>Good monitoring, deployment automation and backups</li>
          <li>Clear ownership</li>
        </ul>
        <p>That stack won’t produce many conference talks, but it can run a very successful business.</p>
        <p className="post__pull">If an architecture mostly makes the engineering team feel sophisticated, it’s the wrong one.</p>
      </section>

      <section id="full-circle" aria-labelledby="full-circle-h">
        <h2 id="full-circle-h" className="post__h2">The full circle</h2>
        <p>VoIP taught me about distributed systems before I regularly used the term, and publishing showed me that architecture affects much more than engineering. Monoliths taught me the value of simplicity, microservices taught me that boundaries matter, and event-driven systems taught me that decoupling comes with an operational cost. Cloud infrastructure made distributed architectures dramatically easier to build.</p>
        <p>After years of racking our own hardware, <Link to="/work/three-continent-platform/">moving the platform out of our data center into cloud regions on three continents</Link> was one of the most fun projects I’ve worked on. We moved to lower our cost structure and to put the platform closer to users, with each user routed to the nearest region.</p>
        <p>Engineering leadership added the lesson I use most: every architectural decision creates a future operational obligation. Someone will have to deploy it, monitor it, debug it and eventually change it. And someone will probably get paged when it breaks.</p>
      </section>

      <section id="tradeoffs" aria-labelledby="tradeoffs-h">
        <h2 id="tradeoffs-h" className="post__h2">Architecture is about tradeoffs</h2>
        <p>Earlier in my career, I sometimes thought there was a best architecture. After working across enough systems, I don’t anymore. There are architectures that suit particular problems, teams and stages of a business.</p>
        <p>A monolith isn’t automatically bad. Microservices aren’t automatically scalable. Kafka doesn’t automatically make a system usefully event-driven. Kubernetes doesn’t automatically make an application reliable. Another layer of abstraction doesn’t automatically improve anything.</p>
        <p>Sometimes the right decision is to break a system apart, and sometimes it’s to keep it together. Sometimes asynchronous processing is the answer, and sometimes a database transaction is perfectly fine. Good architecture is mostly about understanding which of those you’re facing.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The question that survived every trend</h2>
      <div className="post__close-copy">
        <p className="lead">The technology has changed enormously over my career. The question I keep coming back to has gotten simpler.</p>
        <p className="post__close-principle">What is the least complicated system we can build that reliably solves the problem, can evolve with the business, and that our team can actually operate?</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an architecture decision <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
