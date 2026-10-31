import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Technologies (Asterisk, OpenSIPS, Python AGI, billing, geolocation routing)
// supplied by KC. Topology, traffic, outages and results are not described; the
// call flow below is hypothetical and labelled as such on the page.
// Oct 18 revision adds facts already confirmed elsewhere on the site:
// MediaProxy for NAT, least-cost routing on call statistics (ASR, ACD,
// completion, cost, media quality; data-driven post), source-IP geolocation
// for media paths, one application run in three regions (should-it-be-a-
// microservice, three-continent case study), resellers on the hosted platform
// (founder story), the move from one data center to cloud regions. Fallback
// and fault-tolerance points are written as general practice, not incidents.

export const toc = [
  ['before-the-term', 'Before I used the term'],
  ['boundaries', 'One call, several boundaries'],
  ['example', 'A hypothetical call'],
  ['partial-failure', '“The system is up”'],
  ['routing', 'Carrier selection set the margin'],
  ['distance', 'Distance was a boundary too'],
  ['retries', 'Retries need context'],
  ['records', 'State and records'],
  ['whole-path', 'Following the whole path'],
  ['boundaries-cost', 'Every boundary costs something'],
  ['business', 'Engineering decisions were business decisions'],
  ['map', 'The lessons in today’s terms'],
  ['today', 'What I ask today'],
];

const callFlow = {
  label: 'Hypothetical flow: one prepaid call across four components',
  key: 'Where the billing record is written',
  tiers: [
    { name: 'Caller', nodes: [{ id: 'phone', label: 'SIP phone' }] },
    { name: 'Signaling', nodes: [{ id: 'opensips', label: 'OpenSIPS', sub: 'SIP routing, no media' }] },
    { name: 'Call handling', nodes: [{ id: 'asterisk', label: 'Asterisk', sub: 'dialplan · media' }] },
    { name: 'Business logic', nodes: [{ id: 'agi', label: 'Python AGI script', sub: 'balance check · route choice' }] },
    {
      name: 'Records',
      nodes: [
        { id: 'cdr', label: 'Call detail record' },
        { id: 'billing', label: 'Rating & balance' },
      ],
    },
  ],
  edges: [
    ['phone', 'opensips'],
    ['opensips', 'asterisk'],
    ['asterisk', 'agi'],
    ['asterisk', 'cdr', null, true],
    ['cdr', 'billing', null, true],
  ],
};

const lessons = [
  { voip: 'A call connects and the audio goes nowhere', term: 'Partial failure', ask: 'Which outcome does the customer care about, and do we measure that or only whether each component is up?' },
  { voip: 'A replayed billing event could charge a call twice', term: 'Retries and idempotency', ask: 'Which operations are safe to retry, and what is the idempotency key for the ones that aren’t?' },
  { voip: 'Audio crossing an ocean twice, and the cost of carrying it', term: 'Routing and latency', ask: 'Where are the users, and which path does each request really take?' },
  { voip: 'Matching SIP messages, Asterisk channels, AGI logs and billing rows', term: 'Observability and tracing', ask: 'Can we follow one request across every component by a shared identifier?' },
  { voip: 'A carrier that stops answering or degrades', term: 'Fault tolerance', ask: 'What is the fallback for each dependency we don’t control, and how do we notice it has degraded?' },
  { voip: 'Call records, balances and carrier invoices that must agree', term: 'Consistency and reconciliation', ask: 'Who owns each piece of state, and how do we prove the records are right after a failure?' },
  { voip: 'Signaling, media and relays filling at different rates', term: 'Capacity planning', ask: 'Which resource fills first, and what does the next step up cost?' },
];

function Lessons() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 666-2</span> VoIP problems, their modern names, and the question I ask before choosing an architecture</caption>
        <thead><tr><th scope="col">Today’s term</th><th scope="col">On the VoIP platform</th><th scope="col">The question I ask now</th></tr></thead>
        <tbody>
          {lessons.map((l) => <tr key={l.term}><th scope="row">{l.term}</th><td>{l.voip}</td><td>{l.ask}</td></tr>)}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="before-the-term" aria-labelledby="before-the-term-h">
        <h2 id="before-the-term-h" className="post__h2">Distributed systems, before I used the term</h2>
        <p>Distributed systems were a well-established field long before I worked on VoIP. The title describes my own path: I was dealing with the problems every day before the phrase was part of my working vocabulary.</p>
        <p>As a co-founder, I built a <Link to="/writing/building-a-startup-from-idea-to-acquisition/">communications platform</Link> on open-source VoIP. The pieces I worked with most were Asterisk, OpenSIPS, Python scripts running through the Asterisk Gateway Interface (AGI), a billing system, and routing informed by where callers were. Years later, when I started hearing microservices debates, a lot of them sounded familiar.</p>
        <p className="post__answer">Many of the problems engineers now discuss around microservices were everyday concerns in VoIP: coordinating separate components, routing requests, handling partial failures, tracking state across steps and keeping business records accurate. The components themselves weren’t microservices, but the questions were the same.</p>
      </section>

      <section id="boundaries" aria-labelledby="boundaries-h">
        <h2 id="boundaries-h" className="post__h2">A phone call crossed several system boundaries</h2>
        <p>OpenSIPS handles SIP signaling: the messages that set up, change and end a call. It decides where a call request should go and passes it along. The audio doesn’t flow through it. The media path, carried over RTP, is a separate stream that can take a different route, which is why a call can be set up perfectly and still have one-way audio.</p>
        <p>Users behind home and office NAT routers added another piece. MediaProxy relayed their audio, so for many calls the media went through a relay we operated. That made the relay a capacity concern, because it carried the full audio of every relayed call, and another place a call could fail while signaling looked fine.</p>
        <p>Asterisk handles the call itself. Its dialplan decides what happens step by step, and it can terminate and process media for features like prompts and recordings. When the dialplan needs a business decision, it can run an AGI script. With plain AGI, Asterisk starts the script as a local process and talks to it over standard input and output. That script is where Python could check an account, look up a rate or choose a route from backend data.</p>
        <p>Billing sits after all of that. It turns usage into money: call records, rating, balances and reconciliation. Ours also had to work for local businesses that resold the service to their own communities on our hosted platform, so a single call could matter to a customer’s balance, a reseller’s account and a carrier’s invoice at once.</p>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">A hypothetical call, and where it goes wrong</h2>
        <p>The flow below is illustrative, and real deployments differ a lot. I didn’t take it from any system I ran.</p>
        <div className="post__diagram">
          <Diagram spec={callFlow} id="voip-call-flow" no="666-1" />
        </div>
        <p>A prepaid customer places a call. OpenSIPS receives the SIP request and forwards it to an Asterisk server. The dialplan runs a Python AGI script, which checks the customer’s balance and picks a carrier route. The call connects and lasts twelve minutes. At hangup, Asterisk writes a call detail record, and a billing job rates the call and deducts it from the balance.</p>
        <p>Now suppose the billing job deducts the charge, and the database connection drops before the job hears that the write succeeded. The job assumes it failed and tries again. Without protection, the customer pays twice for one call.</p>
        <p>A second problem sits earlier in the flow. If the AGI script can’t reach the balance database, should the call go through? Allowing it risks usage nobody can bill. Blocking it turns away a paying customer because of an internal timeout. That’s a policy decision, and someone on the business side should make it before the outage, not during it.</p>
      </section>

      <section id="partial-failure" aria-labelledby="partial-failure-h">
        <h2 id="partial-failure-h" className="post__h2">Why “the system is up” was never the whole answer</h2>
        <p>In that example, every component could report itself healthy. OpenSIPS routed the call, Asterisk handled it and the customer had a clear conversation. The failure was in a record.</p>
        <p>That’s what partial failure looks like day to day. One component can be fine while another times out. A call can connect while the billing update fails. A completed call and a correctly billed call are separate outcomes, and a platform has to get both right. A status page that only asked whether each server was up would have missed the problem customers cared about most.</p>
      </section>

      <section id="routing" aria-labelledby="routing-h">
        <h2 id="routing-h" className="post__h2">Carrier selection set the margin</h2>
        <p>Choosing where a call goes involves several inputs that pull against each other: carrier availability, cost per minute, call quality, regulatory policy and the caller’s location.</p>
        <p>In a business that sells minutes, what you pay carriers is most of what each call costs, so the routing table effectively sets the gross margin. Least-cost routing picks the cheapest carrier for each destination that can still deliver acceptable quality. The cheapest carrier on the rate sheet was not always the cheapest in practice. A route that drops calls or delivers poor audio costs you in repeat attempts, support tickets and customers who stop calling. We ranked routes on call statistics, including answer rates, call durations, completion, cost and media quality, which I describe in <Link to="/writing/data-driven-engineering-network-voip-publishing/#voip">the data-to-decision loop behind those routes</Link>.</p>
        <p>Carriers also fail, sometimes cleanly and sometimes by answering and then delivering bad audio. Routing has to account for that with a next choice for each destination, and the statistics are how you notice a route has degraded before the support queue tells you. In today’s terms that is fault tolerance: a fallback for every dependency you don’t control, and monitoring that measures the outcome customers care about, not just whether the dependency answered.</p>
        <p>Location needs care. A telephone number’s prefix tells you where the number was issued, not where the caller is standing; mobile and VoIP numbers travel with their owners. IP geolocation is an estimate, and sometimes a badly wrong one. And physical distance doesn’t guarantee a better network path. A nearby data center can sit behind a congested link while a farther one performs better. Location was a useful signal for routing, weighed with the others, and routing needs a sensible fallback for when it’s wrong.</p>
      </section>

      <section id="distance" aria-labelledby="distance-h">
        <h2 id="distance-h" className="post__h2">Distance was a boundary too</h2>
        <p>Our users were in South America, Asia and Africa, and the platform started in one data center. Audio that crosses an ocean twice arrives late, and no amount of server capacity fixes latency. We used the caller’s source IP address to estimate their location and steered the media through a closer path, which improved call quality for distant users and cut what we paid to carry the audio. I covered the capacity and cost side of that in <Link to="/writing/capacity-planning-carrier-networks-to-cloud/#geo">capacity planning from carrier networks to the cloud</Link>.</p>
        <p>When we moved from the data center into cloud regions on three continents, we ran the same application in each region and routed users to the nearest one, rather than breaking the application apart. Distance was the problem, and splitting the code wouldn’t have fixed it. That is a distinction I still use when a team proposes microservices to solve a latency or scaling problem: first find out which boundary is actually causing it. The <Link to="/work/three-continent-platform/">three-continent case study</Link> covers how the move happened one region at a time.</p>
      </section>

      <section id="retries" aria-labelledby="retries-h">
        <h2 id="retries-h" className="post__h2">Retries needed context</h2>
        <p>“Just retry it” means very different things depending on what you retry.</p>
        <ul className="post__list">
          <li>Retrying a rate lookup is usually harmless. Reading the same data twice costs a little time.</li>
          <li>Trying another carrier before the call is answered can rescue it. Starting a second call after the first one connected rings someone twice.</li>
          <li>Replaying a billing event can charge a customer twice for one call.</li>
        </ul>
        <p className="post__answer">Idempotency means an operation can run more than once with the same result as running it once. In billing, that usually means keying each charge to a unique identifier for the call, so a replayed event finds the charge already recorded and does nothing.</p>
        <p>SIP gives every dialog a Call-ID, and Asterisk assigns its own unique IDs to channels. Using an identifier like that as the key turns a dangerous retry into a safe one.</p>
      </section>

      <section id="records" aria-labelledby="records-h">
        <h2 id="records-h" className="post__h2">State and records needed reconciliation</h2>
        <p>A call passes through several stages: setup, an active session, a finished call detail record, and finally a charge on an account. Each stage lives in a different place and can fail on its own.</p>
        <p>A call detail record (CDR) records that a call happened and how long it lasted. A billing system also needs the rate that applied, the balance before and after, adjustments and refunds, and a way to match its records against what carriers bill you. Reconciliation is the regular job of comparing those sources and explaining every difference. It only works if the same call can be followed through every stage by a shared identifier.</p>
      </section>

      <section id="whole-path" aria-labelledby="whole-path-h">
        <h2 id="whole-path-h" className="post__h2">Debugging meant following the whole path</h2>
        <p>When a customer reported a problem, the answer was rarely in one log. You matched the SIP messages from signaling to the channel in Asterisk, the AGI script’s log lines, and the rows in billing, and the identifiers had to line up for any of that to work.</p>
        <p>Distributed tracing today does something similar with far better tools: one trace ID carried across service calls, with timing for each step. The two aren’t identical, but the habit transfers directly. I wrote about the same lesson from the network side in <Link to="/writing/software-architecture-lessons-from-different-systems/">what different systems taught me about software architecture</Link>.</p>
      </section>

      <section id="boundaries-cost" aria-labelledby="boundaries-cost-h">
        <h2 id="boundaries-cost-h" className="post__h2">Every boundary came with work</h2>
        <p>Separating signaling, call handling, business logic and billing made each piece easier to reason about. It also added configuration to keep consistent, monitoring for each component, version compatibility between them, and failure handling at every handoff.</p>
        <p>That trade is the same one teams face when they count services today. Each boundary should solve a real problem, and the team has to be able to carry it, which is the argument in <Link to="/writing/team-size-should-influence-architecture/">your team size should influence your architecture</Link>.</p>
      </section>

      <section id="business" aria-labelledby="business-h">
        <h2 id="business-h" className="post__h2">Engineering decisions were business decisions</h2>
        <p>On that platform almost every technical choice showed up somewhere in the business. Carrier selection set the gross margin. Routing decided whether a call sounded clear or broken, which is the whole product for a communications company. Infrastructure was a fixed cost that arrived every month whether or not the minutes did, and the move into cloud regions was as much about our cost structure as about latency. Reliability decided retention, because a customer who can’t complete a call rarely files a bug report. They are more likely to try another service.</p>
        <p>Complexity was a cost too. Every component we added needed someone who understood it, monitoring that worked, and a plan for when it failed. The architecture had to fit the business requirements and the people we had at the time.</p>
        <p>I still evaluate modern architecture that way. Before a team splits a system into microservices, I want to know which boundary <Link to="/writing/should-it-be-a-microservice/">earns its operating cost</Link>. Before Kafka, I want the fan-out or write volume that <Link to="/writing/event-driven-architecture-kafka-tradeoffs/">justifies an event stream</Link>. Before an infrastructure investment, I want the measured demand behind it and an idea of <Link to="/writing/hidden-cost-of-software-architecture/">what it will cost every month</Link> after it ships.</p>
      </section>

      <section id="map" aria-labelledby="map-h">
        <h2 id="map-h" className="post__h2">The lessons in today’s terms</h2>
        <p>The vocabulary changed more than the problems did. The table maps what the VoIP platform had to handle to the names modern engineers use, and to the question I ask now. The last column is general practice, not a description of how we implemented it.</p>
        <Lessons />
      </section>

      <section id="today" aria-labelledby="today-h">
        <h2 id="today-h" className="post__h2">The tools improved; the questions stayed</h2>
        <p>Containers, orchestration and observability tools make this work far easier than it was. They help a team deploy consistently, restart what crashes and see across components. I’ve written about that change in <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">how DevOps changed during my career</Link>.</p>
        <p>They don’t answer the design questions. Someone still has to decide who owns each piece of state, what happens when a step fails halfway, which operations are safe to retry, and how the system recovers and proves its records are right.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Boundaries and failure first, tools second</h2>
      <div className="post__close-copy">
        <p className="lead">VoIP taught me to look at a system through what crosses its boundaries and what happens when one of them fails.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an architecture decision <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
