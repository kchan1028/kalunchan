import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Architecture decisions as operating expenses. General reasoning plus KC's
// confirmed experience: the co-founded platform (modular monolith, one data
// center to cloud regions), Kafka event-driven work (see /work/event-driven-
// platform/), media publishing AWS re-platform with about 30% lower AWS
// costs, Yippify client work on managed AWS services. No invented numbers,
// no employers named, no years. The decision table is KC's framework.
// Oct 18 revision: 400,000+ users and three regions from the site
// (should-it-be-a-microservice, three-continent case study); the AWS-bill
// line items repeat the capacity post's confirmed list.

export const toc = [
  ['bill', 'Every architecture decision has a bill'],
  ['monolith', 'Monolith or microservices: count the boxes'],
  ['events', 'Synchronous or event-driven: Kafka is also a team'],
  ['managed', 'Managed or self-hosted: pay in money or in people'],
  ['database', 'The database is where money leaks'],
  ['too-early', 'Scaling for users you don’t have'],
  ['aws-bill', 'What cutting an AWS bill taught me'],
  ['team', 'Architecture should fit the team'],
  ['business', 'Technical decisions are business decisions'],
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
        <p>I want design reviews to include estimates of what the proposed system will cost to run. Every box on the whiteboard is a thing that runs somewhere, is monitored by someone, fails on its own schedule and is paid for every month. Most teams count the engineering cost of building a system. Fewer count the cost of operating it, and it is easy to leave that cost out of a design review, when changing the plan is still relatively cheap.</p>
        <p className="post__answer">Software architecture drives operating cost through the number of components that must run and be watched, the way they communicate, how much of the work a vendor does for you, how efficiently the database is used, and how much capacity is bought ahead of demand. Scaling too early spends on the last of those before there is any demand to justify it, and it is one of the most expensive mistakes a growing company can make.</p>
        <p>I have paid that bill from several seats: as a founder watching a data center invoice land before the revenue did, as a CTO who re-platformed a media business onto AWS, where the infrastructure improvements helped bring AWS costs down about 30%, and as an advisor to teams that had built for a million users and were serving a few thousand. The patterns repeat.</p>
        <p>The bill has more lines than the cloud invoice. Each component an architecture adds brings:</p>
        <ul className="post__list">
          <li>Infrastructure that runs whether or not anyone is using it.</li>
          <li>Maintenance: upgrades, dependency patches and deprecated APIs, forever.</li>
          <li>Monitoring and alerting that someone has to tune and read.</li>
          <li>Another place to look during an incident, and another way for two components to disagree.</li>
          <li>Staffing, because somebody has to understand it well enough to fix it at night.</li>
          <li>Security work: attack surface, credentials, patches and access reviews.</li>
          <li>Deployment complexity: another pipeline, another version to keep compatible, another release to coordinate.</li>
        </ul>
        <p>None of those appear in the estimate to build it, and all of them recur.</p>
      </section>

      <section id="monolith" aria-labelledby="monolith-h">
        <h2 id="monolith-h" className="post__h2">Monolith or microservices: count the boxes</h2>
        <p>Microservices buy flexibility: independent deployment, separate scaling, a boundary a team can own. They also multiply the things that cost money. Each service is its own compute, its own logs and metrics, its own deployment pipeline, its own set of failure modes, and its own share of someone’s attention. Traffic between services is not free either, in latency or, across availability zones, in actual dollars. Ten services serving the traffic of one modest monolith will usually cost more to run and considerably more to operate, and the operating cost is paid in engineers.</p>
        <p>The platform I co-founded ran as a modular monolith for most of its life and grew past 400,000 users that way. When distance became the problem, we ran the same application in three regions instead of breaking it apart. The boundaries were in the code, which cost nothing to cross, and we split things out only where a real reason appeared. I wrote the longer argument in <Link to="/writing/should-it-be-a-microservice/#five-years">what it costs to own a service for five years</Link>. A separate deployment needs to justify its recurring infrastructure cost, monitoring and on-call work.</p>
        <p className="post__answer">A modular monolith is usually enough when one team, or a few teams, ship a product with one release cadence and one scaling profile. Independent services pay for themselves when a part of the system has to scale very differently from the rest, sits behind a different security or compliance boundary, must keep working when the rest fails, or belongs to a team that needs to release on its own schedule. Without one of those reasons, the extra services are mostly cost.</p>
      </section>

      <section id="events" aria-labelledby="events-h">
        <h2 id="events-h" className="post__h2">Synchronous or event-driven: Kafka is also a team</h2>
        <p>Event-driven architecture decouples producers from consumers and lets each side scale on its own. I have built on Kafka and I would do it again for the right workload. The right workload is the part that gets skipped. A Kafka cluster is brokers, storage, replication, a schema registry, consumers that have to be idempotent, and an operations burden that lands on whoever is nearest when a partition rebalances at the wrong moment. A managed Kafka service removes some of that and replaces it with a line on the invoice that grows with throughput and retention.</p>
        <p>For a system with real fan-out, high write volume or several consumers that must not block each other, the decoupling is worth every dollar. For a service that calls two others in order, a queue or a plain HTTP call does the job for a fraction of the cost and with far less to understand at three in the morning. The <Link to="/writing/event-driven-architecture-kafka-tradeoffs/">tradeoffs of Kafka</Link> have their own post, and the <Link to="/work/event-driven-platform/">event-driven design example</Link> explores the responsibilities that come with it.</p>
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
        <p>The most expensive version of all of this is building for a million users when the product has a few thousand. That means multi-region before there is a second region of customers or a business requirement for it, a Kubernetes cluster for three services that a managed container service would run with far less to operate, and a service mesh for four services. A database instance sized for launch-day fear instead of measured load. Kafka for a signup form, when a simple queue would do. Autoscaling groups that never scale because the baseline was set for a launch that is still a slide. Each of these costs money every month, and worse, costs engineering attention that a young product needs for finding out what customers want.</p>
        <p>The argument for it is always the same: we will need it eventually, and it is harder to add later. The second half is sometimes true and usually not. What is hard to change later is the data model and the boundaries. What is easy to add later is capacity, because capacity in the cloud is a purchase you can make in an afternoon. So I spend the early effort on clean boundaries and a data model I can live with, and I buy the capacity when the measured demand asks for it. I learned that on a platform that served three continents from one data center for longer than fashion would have allowed, and moved when the latency and the cost structure, not the diagram, said it was time. The capacity side of that story is in <Link to="/writing/capacity-planning-carrier-networks-to-cloud/">what carrier networks taught me about scaling cloud infrastructure</Link>.</p>
      </section>

      <section id="aws-bill" aria-labelledby="aws-bill-h">
        <h2 id="aws-bill-h" className="post__h2">What cutting an AWS bill taught me</h2>
        <p>On the publishing platform, the infrastructure improvements that came with the move to AWS helped bring AWS costs down about 30%. The work itself was an unglamorous list of right-sizing, demand-based scaling, query fixes, caching and deleting what nobody used, and I walked through it in <Link to="/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost">the capacity planning post</Link>.</p>
        <p>The lesson for architecture is where those line items came from. Instances were sized for a traffic peak that never came back. Queries were written when the tables were small. Resources were created for an experiment and never removed. Each was a reasonable decision on the day it was made, and each kept costing money every month after the reason for it was gone. Recurring cost is decided in design and paid in operations, so I want utilization measured regularly and the expensive line items reviewed by the people who can change the design behind them.</p>
      </section>

      <section id="team" aria-labelledby="team-h">
        <h2 id="team-h" className="post__h2">Architecture should fit the team</h2>
        <p>A five-person engineering team shouldn’t automatically copy the architecture of an organization with hundreds of engineers. The large organization adopted that architecture to solve its own problems: many teams that need to ship without waiting for each other. A small team doesn’t have that problem, and it pays all of the costs anyway.</p>
        <p>Complexity shows up in four places. Delivery slows, because a change that crosses several components needs coordinated releases. Ownership thins, because every component needs someone who knows it, and a small team ends up owning everything a little. Incident response gets harder, because an on-call rotation of four people covering a dozen services means everyone is on call for things they rarely touch. And hiring narrows, because a stack that needs Kubernetes, Kafka and several languages takes longer to hire for and longer to onboard into. I made the longer argument in <Link to="/writing/team-size-should-influence-architecture/">your team size should influence your architecture</Link>.</p>
      </section>

      <section id="business" aria-labelledby="business-h">
        <h2 id="business-h" className="post__h2">Technical decisions are business decisions</h2>
        <p>Every one of these choices lands somewhere outside engineering. A monthly infrastructure cost that arrives before the revenue is a cash flow problem, which I learned as a founder paying a data center invoice. Engineering time spent operating complexity is time not spent on the product, so delivery slows. Latency and outages are what customers actually experience, and for a communications platform they decide whether people keep paying. Reliability costs money, and some of it is exactly what customers are paying for. The question is whether each piece of redundancy matches a real requirement.</p>
        <p>Productivity and maintainability compound the same way cost does. A system the team understands gets changed quickly and safely for years. One that only its original authors understand gets slower to change every time someone leaves. When I review an architecture, I want those consequences in the same conversation as the diagram, in terms a CFO or a founder can weigh against the alternatives.</p>
      </section>

      <section id="deciding" aria-labelledby="deciding-h">
        <h2 id="deciding-h" className="post__h2">How I decide</h2>
        <p>Five inputs settle most of these questions. The size of the team, because every component is carried by people and a small team can carry only so many. The maturity of the product, because a system still looking for its market needs flexibility more than throughput. The actual traffic, measured, not the number in the deck. The growth we have evidence for, as opposed to the growth we hope for. And the business constraints: budget, compliance, what the client can own after hand-over.</p>
        <Decisions />
        <p>The common thread is to be honest about which resource is scarce. Early on, engineering attention and cash are the scarce resources, so the right architecture is the one that spends the least of both while keeping the doors open. Later it may be compute, or the database, or the team’s ability to understand the system, and the right architecture changes with it. The job of a technical leader is to keep asking which resource is scarce this year, and to include that constraint in the design review.</p>
        <p>The best architecture I know how to build is the simplest one that meets today’s business requirements and keeps reasonable options open for growth. Sophistication is a cost, so I pay it when a requirement asks for it. <Link to="/writing/the-architecture-you-dont-build/">The architecture you don’t build</Link> is about making that call explicitly.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Include operating cost in the design review</h2>
      <div className="post__close-copy">
        <p className="lead">Every box in an architecture diagram runs somewhere, is watched by someone and is paid for every month.</p>
        <p className="post__close-principle">Spend early effort on boundaries and the data model, which are hard to change. Buy capacity when measured demand asks for it, which is easy.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an architecture decision <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
