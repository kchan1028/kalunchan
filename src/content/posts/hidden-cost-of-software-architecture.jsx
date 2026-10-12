import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Architecture decisions as operating expenses. General reasoning plus KC's
// confirmed experience: the co-founded platform (modular monolith, one data
// center to cloud regions), Kafka event-driven work (see /work/event-driven-
// platform/), media publishing AWS re-platform with about 30% lower AWS
// costs, Yippify client work on managed AWS services. No invented numbers,
// no employers named, no years. The decision table is KC's framework.

export const toc = [
  ['bill', 'Every architecture decision has a bill'],
  ['monolith', 'Monolith or microservices: count the boxes'],
  ['events', 'Synchronous or event-driven: Kafka is also a team'],
  ['managed', 'Managed or self-hosted: pay in money or in people'],
  ['database', 'The database is where money leaks'],
  ['too-early', 'Scaling for users you don’t have'],
  ['deciding', 'How I decide'],
];

const decisions = [
  {
    choice: 'Build or buy',
    now: 'Buy when the capability is not what customers choose you for, a vendor does it well, and the integration is thin.',
    later: 'Build when it is the product, when the vendor’s pricing scales faster than your revenue, or when the integration would be most of the work anyway.',
  },
  {
    choice: 'Managed or self-hosted',
    now: 'Managed for a small team: the premium is cheaper than the engineer-hours to run it, and the on-call is someone else’s.',
    later: 'Self-host when the workload is large and steady enough that the premium is a salary, and you have the people to carry the pager.',
  },
  {
    choice: 'Scale now or scale later',
    now: 'Later, by default: keep the boundaries clean so scaling is possible, and spend the money when measured demand, not a forecast, asks for it.',
    later: 'Now, only for the one resource that fills first and has a real lead time, such as a data model that is painful to change once it holds customer data.',
  },
];

function Decisions() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption>
          <span className="mono">Fig. 683-1</span> Three decisions, and which way I lean by default
        </caption>
        <thead>
          <tr>
            <th scope="col">Decision</th>
            <th scope="col">My default</th>
            <th scope="col">When I go the other way</th>
          </tr>
        </thead>
        <tbody>
          {decisions.map((d) => (
            <tr key={d.choice}>
              <th scope="row">{d.choice}</th>
              <td>{d.now}</td>
              <td>{d.later}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="bill" aria-labelledby="bill-h">
        <h2 id="bill-h" className="post__h2">Every architecture decision has a bill</h2>
        <p>Architecture diagrams do not have a price column, and they should. Every box on the whiteboard is a thing that runs somewhere, is monitored by someone, fails on its own schedule and is paid for every month. Most teams count the engineering cost of building a system. Fewer count the cost of operating it, and almost nobody counts it at the design review, which is the only place it is cheap to change.</p>
        <p className="post__answer">Software architecture drives operating cost through the number of components that must run and be watched, the way they communicate, how much of the work a vendor does for you, how efficiently the database is used, and how much capacity is bought ahead of demand. Scaling too early spends on the last of those before there is any demand to justify it, and it is one of the most expensive mistakes a growing company can make.</p>
        <p>I have paid that bill from several seats: as a founder watching a data center invoice land before the revenue did, as a CTO who re-platformed a media business onto AWS and brought the AWS bill down by about 30% along the way, and as an advisor to teams that had built for a million users and were serving a few thousand. The patterns repeat.</p>
      </section>

      <section id="monolith" aria-labelledby="monolith-h">
        <h2 id="monolith-h" className="post__h2">Monolith or microservices: count the boxes</h2>
        <p>Microservices buy flexibility: independent deployment, separate scaling, a boundary a team can own. They also multiply the things that cost money. Each service is its own compute, its own logs and metrics, its own deployment pipeline, its own set of failure modes, and its own share of someone’s attention. Traffic between services is not free either, in latency or, across availability zones, in actual dollars. Ten services serving the traffic of one modest monolith will usually cost more to run and considerably more to operate, and the operating cost is paid in engineers.</p>
        <p>The platform I co-founded ran as a modular monolith for most of its life and scaled to hundreds of thousands of users that way. The boundaries were in the code, which cost nothing to cross, and we split things out only where a real reason appeared. I wrote the longer argument in <Link to="/writing/should-it-be-a-microservice/#five-years">what it costs to own a service for five years</Link>. The short version: a boundary should pay for itself, and the rent is due monthly.</p>
      </section>

      <section id="events" aria-labelledby="events-h">
        <h2 id="events-h" className="post__h2">Synchronous or event-driven: Kafka is also a team</h2>
        <p>Event-driven architecture decouples producers from consumers and lets each side scale on its own. I have built on Kafka and I would do it again for the right workload. The right workload is the part that gets skipped. A Kafka cluster is brokers, storage, replication, a schema registry, consumers that have to be idempotent, and an operations burden that lands on whoever is nearest when a partition rebalances at the wrong moment. A managed Kafka service removes some of that and replaces it with a line on the invoice that grows with throughput and retention.</p>
        <p>For a system with real fan-out, high write volume or several consumers that must not block each other, the decoupling is worth every dollar. For a service that calls two others in order, a queue or a plain HTTP call does the job for a fraction of the cost and with far less to understand at three in the morning. The <Link to="/writing/event-driven-architecture-kafka-tradeoffs/">tradeoffs of Kafka</Link> have their own post, and the <Link to="/work/event-driven-platform/">event-driven platform case study</Link> shows where it earned its place.</p>
      </section>

      <section id="managed" aria-labelledby="managed-h">
        <h2 id="managed-h" className="post__h2">Managed or self-hosted: pay in money or in people</h2>
        <p>Managed services charge a premium over the raw compute underneath them. In exchange, somebody else patches, backs up, fails over and carries the pager. For a small team that premium is almost always cheaper than the engineer-hours it replaces, and the engineer-hours are the scarcer resource. On client work I default to managed databases, managed container orchestration and serverless for occasional work, and the team gets to spend its time on the product.</p>
        <p>The math flips at scale. A large, steady workload can turn a managed premium into the cost of a full-time engineer, and at that point self-hosting with a competent team can be the cheaper option, provided the team actually exists. The mistake in both directions is the same one: deciding once and never revisiting. The line moves as the workload grows and as the team changes, and I put a reminder on the calendar to check which side of it we are on.</p>
      </section>

      <section id="database" aria-labelledby="database-h">
        <h2 id="database-h" className="post__h2">The database is where money leaks</h2>
        <p>If I had to pick one place where infrastructure cost hides, it is the database. A query that scans a table instead of using an index runs fine at ten thousand rows and needs a bigger instance at ten million. An index nobody uses still costs writes and storage. An application that opens a new connection per request will push a database to its connection limit long before it is busy, and the usual response is to buy a larger database rather than add a connection pool. An N+1 query pattern turns one page view into a hundred round trips and shows up on the bill as a database that is mysteriously always at 80%.</p>
        <p>None of that appears on a whiteboard, and all of it is architecture: decisions about how the system uses its most expensive, least elastic resource. On the publishing platform, query fixes, connection handling and caching were a large part of what let the database be the size it should have been instead of the size fear had made it.</p>
      </section>

      <section id="too-early" aria-labelledby="too-early-h">
        <h2 id="too-early-h" className="post__h2">Scaling for users you don’t have</h2>
        <p>The most expensive version of all of this is building for a million users when the product has a few thousand. Multi-region before there is a second region of customers. A service mesh for four services. Kafka for a signup form. Autoscaling groups that never scale because the baseline was set for a launch that is still a slide. Each of these costs money every month, and worse, costs engineering attention that a young product needs for finding out what customers want.</p>
        <p>The argument for it is always the same: we will need it eventually, and it is harder to add later. The second half is sometimes true and usually not. What is hard to change later is the data model and the boundaries. What is easy to add later is capacity, because capacity in the cloud is a purchase you can make in an afternoon. So I spend the early effort on clean boundaries and a data model I can live with, and I buy the capacity when the measured demand asks for it. I learned that on a platform that served three continents from one data center for longer than fashion would have allowed, and moved when the latency and the cost structure, not the diagram, said it was time. The capacity side of that story is in <Link to="/writing/capacity-planning-carrier-networks-to-cloud/">what carrier networks taught me about scaling cloud infrastructure</Link>.</p>
      </section>

      <section id="deciding" aria-labelledby="deciding-h">
        <h2 id="deciding-h" className="post__h2">How I decide</h2>
        <p>Five inputs settle most of these questions. The size of the team, because every component is carried by people and a small team can carry only so many. The maturity of the product, because a system still looking for its market needs flexibility more than throughput. The actual traffic, measured, not the number in the deck. The growth we have evidence for, as opposed to the growth we hope for. And the business constraints: budget, compliance, what the client can own after hand-over.</p>
        <Decisions />
        <p>The common thread is to be honest about which resource is scarce. Early on it is engineering attention and cash, so the right architecture is the one that spends the least of both while keeping the doors open. Later it may be compute, or the database, or the team’s ability to understand the system, and the right architecture changes with it. The job of a technical leader is to keep asking which resource is scarce this year, and to make sure the design review has a price column.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Put a price column on the whiteboard</h2>
      <div className="post__close-copy">
        <p className="lead">Every box in an architecture diagram runs somewhere, is watched by someone and is paid for every month.</p>
        <p className="post__close-principle">Spend early effort on boundaries and the data model, which are hard to change. Buy capacity when measured demand asks for it, which is easy.</p>
        <p>That is how I keep technical decisions connected to what the business pays to run them.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an architecture decision <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
