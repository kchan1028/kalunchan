import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

export const toc = [
  ['not-a-maturity-level', 'Not a maturity level'],
  ['when-to-use', 'When to use microservices'],
  ['questions', 'Questions I ask first'],
  ['data', 'What happens to the data'],
  ['network', 'The network tax'],
  ['kafka', 'Kafka and events'],
  ['distributed-monolith', 'The distributed monolith'],
  ['modular-monolith', 'The modular monolith'],
  ['extract-later', 'Extracting later'],
  ['framework', 'My decision framework'],
  ['five-years', 'Owning it for five years'],
  ['worth-it', 'Worth the complexity?'],
];

const distributed = {
  label: 'Distributed monolith: separate deploys, one shared database',
  key: 'Hidden coupling',
  tiers: [
    { name: 'Callers', nodes: [{ id: 'web', label: 'Web app' }] },
    {
      name: 'Services',
      nodes: [
        { id: 'orders', label: 'Orders service', sub: 'own repo · own pipeline' },
        { id: 'billing', label: 'Billing service', sub: 'own repo · own pipeline' },
        { id: 'stock', label: 'Inventory service', sub: 'own repo · own pipeline' },
      ],
    },
    { name: 'Data', nodes: [{ id: 'db', label: 'Shared database', sub: 'same tables, same migrations' }] },
  ],
  edges: [
    ['web', 'orders'],
    ['orders', 'billing'],
    ['billing', 'stock'],
    ['orders', 'db', null, true],
    ['billing', 'db', null, true],
    ['stock', 'db', null, true],
  ],
};

const modular = {
  label: 'Modular monolith: one deploy, enforced module boundaries',
  key: 'Clean seam, ready to extract',
  tiers: [
    { name: 'Callers', nodes: [{ id: 'clients', label: 'Web & mobile' }] },
    { name: 'One deployable', nodes: [{ id: 'app', label: 'Application', sub: 'one pipeline · one deploy' }] },
    {
      name: 'Modules',
      nodes: [
        { id: 'm-orders', label: 'Orders', sub: 'public interface' },
        { id: 'm-billing', label: 'Billing', sub: 'public interface' },
        { id: 'm-catalog', label: 'Catalog', sub: 'public interface' },
      ],
    },
    {
      name: 'Owned data',
      nodes: [
        { id: 's-orders', label: 'orders schema' },
        { id: 's-billing', label: 'billing schema' },
        { id: 's-catalog', label: 'catalog schema' },
      ],
    },
  ],
  edges: [
    ['clients', 'app'],
    ['app', 'm-orders'],
    ['app', 'm-billing'],
    ['app', 'm-catalog'],
    ['m-orders', 's-orders'],
    ['m-billing', 's-billing', null, true],
    ['m-catalog', 's-catalog'],
  ],
};

const extracted = {
  label: 'Extracting billing later, behind the same front door',
  key: 'Extracted path',
  tiers: [
    { name: 'Callers', nodes: [{ id: 'clients', label: 'Web & mobile' }] },
    { name: 'Front door', nodes: [{ id: 'gateway', label: 'API gateway', sub: 'routes by path' }] },
    {
      name: 'Runtime',
      nodes: [
        { id: 'mono', label: 'Modular monolith', sub: 'orders · catalog · publishes events' },
        { id: 'svc', label: 'Billing service', sub: 'own team · own deploy' },
      ],
    },
    {
      name: 'Data',
      nodes: [
        { id: 'maindb', label: 'Main database' },
        { id: 'billdb', label: 'Billing database', sub: 'migrated from billing schema' },
      ],
    },
  ],
  edges: [
    ['clients', 'gateway'],
    ['gateway', 'mono'],
    ['gateway', 'svc', null, true],
    ['mono', 'svc'],
    ['mono', 'maindb'],
    ['svc', 'billdb', null, true],
  ],
};

const signals = [
  {
    area: 'Problem',
    keep: 'Nobody can name the specific problem a split would solve.',
    split: 'A named problem that a separate service makes meaningfully easier.',
  },
  {
    area: 'Domain',
    keep: 'Hard to describe without describing the rest of the system.',
    split: 'Its own language, rules and data, behind a contract that stays stable.',
  },
  {
    area: 'Ownership',
    keep: 'The same team that owns the rest of the application.',
    split: 'A different team that will own it long term, pager included.',
  },
  {
    area: 'Lifecycle',
    keep: 'Usually changes and ships alongside other code.',
    split: 'Changes and ships on its own schedule.',
  },
  {
    area: 'Data',
    keep: 'Shares tables and transactions with the rest of the app.',
    split: 'Can own its data outright. Everyone else uses its API or its events.',
  },
  {
    area: 'Scaling',
    keep: 'A similar load profile, or one that workers and queues can handle.',
    split: 'A very different resource profile, confirmed by measurement.',
  },
  {
    area: 'Failure',
    keep: 'Sits on the critical path either way.',
    split: 'Can fail without taking the core product down, with a real fallback.',
  },
  {
    area: 'Security',
    keep: 'The same trust level as everything around it.',
    split: 'A security or compliance boundary worth enforcing at the network level.',
  },
  {
    area: 'Capacity',
    keep: 'The team is already stretched on operations.',
    split: 'The team has the tooling and people to run another service well.',
  },
];

export default function Body() {
  return (
    <>
      <section id="not-a-maturity-level" aria-labelledby="not-a-maturity-level-h">
        <h2 id="not-a-maturity-level-h" className="post__h2">Microservices aren’t a maturity level</h2>
        <p>I’ve been building and running production software for my whole career: first in network operations, later as a co-founder and CTO, and now leading engineering teams and helping companies with architecture. Over that time, one conversation keeps coming back. Someone proposes pulling a piece of the system out into its own service. Sometimes it’s the right call. Often, nobody in the room can say what problem it solves.</p>
        <p>The reasons tend to sound like this. “It’ll be cleaner.” “That’s how bigger companies do it.” “We’ll need it eventually.” “The monolith is getting too big.” None of those are wrong, exactly. They just aren’t reasons on their own.</p>
        <p>Where I’ve landed is that a microservice should solve a real problem: an organizational one, a scaling one, a deployment one, a reliability one, or a domain-boundary one. It shouldn’t exist because microservices sound like what a serious engineering team is supposed to have.</p>
        <p>Below is how I think through the decision, including the parts that only show up after a service has been running for a few years.</p>
      </section>

      <section id="when-to-use" aria-labelledby="when-to-use-h">
        <h2 id="when-to-use-h" className="post__h2">When should you use microservices?</h2>
        <p className="post__answer">Use a microservice when a separate service makes a specific problem meaningfully easier: teams blocked on each other’s releases, a component that needs to scale or fail on its own, or a security boundary that has to be enforced. If you can’t name the problem, you probably don’t need the service yet.</p>
        <p>So before I look at any architecture diagram, I want to know what’s hurting in the business and in operations.</p>
        <ul className="post__list">
          <li>Are releases slow because teams are waiting on each other?</li>
          <li>Is one part of the system eating resources the rest doesn’t need?</li>
          <li>Does an outage in one feature take down unrelated features?</li>
          <li>Is sensitive data sitting too close to everything else, in a way an auditor will eventually notice?</li>
          <li>Is the code hard to change because the domain is tangled, or because nobody has cleaned it up?</li>
        </ul>
        <p>Each of those has more than one possible fix, and a new service is only one of them. A better module boundary, a background job queue, a read replica, a feature flag or a week of cleanup is often cheaper and solves the same problem. If splitting things out is the only option anyone has considered, I slow the conversation down.</p>
      </section>

      <section id="questions" aria-labelledby="questions-h">
        <h2 id="questions-h" className="post__h2">The questions I ask before splitting anything out</h2>
        <p>When a split does look worthwhile, I walk through the same set of questions. No single answer decides it. What I’m looking for is several strong reasons pointing the same way.</p>

        <h3 className="post__h3">Does it have a clear domain boundary?</h3>
        <p>A good service boundary follows the business, not the folder structure. Billing, identity, search and notifications usually have their own vocabulary, their own rules and their own data. You can explain what they do without explaining the rest of the system.</p>
        <p>A weak boundary is one you can only describe in technical terms: the validation service, the database service, the utilities service. If a component needs to know the internals of three other components to do its job, it’s part of another domain.</p>
        <p>One test I use: could we write the API contract for this in an afternoon, and would it stay mostly stable for a year? If the contract would change every time a product requirement changes, the boundary is in the wrong place.</p>

        <h3 className="post__h3">Can it be deployed and owned independently?</h3>
        <p>The whole point of a separate service is that it can change on its own schedule. If shipping a change to it almost always means shipping a change somewhere else at the same time, you haven’t gained independence. You’ve added a deployment step.</p>
        <p>Ownership matters as much as deployment. Someone has to be on the hook for its roadmap, its bugs, its upgrades and its pager.</p>

        <h3 className="post__h3">Does it need to scale differently?</h3>
        <p>This is one of the strongest reasons, and one of the most overstated. Image processing, report generation, search indexing and model inference often do have very different resource needs from a request-and-response web app. Pulling them out can make capacity planning much simpler.</p>
        <p>But plenty of scaling problems turn out to be a slow query, a missing index, or work that belongs in a background queue. A monolith can run separate worker processes with separate queues and separate autoscaling for each kind of work. You don’t need a new service to scale one workload differently. Measure first.</p>

        <h3 className="post__h3">Will separating it improve reliability?</h3>
        <p>Failure isolation is a real benefit when it’s designed in. If the recommendations engine falls over, checkout should keep working. A separate service with timeouts, a circuit breaker and a sensible fallback can give you that.</p>
        <p>A separate service with a synchronous call in the critical path doesn’t isolate anything. If checkout can’t finish without a response from recommendations, the two are still tied together, just over a network, and now there are two things that can fail instead of one. Reliability comes from how you handle the dependency, not from which process it runs in.</p>

        <h3 className="post__h3">Will another team actually own it?</h3>
        <p>Conway’s law gets quoted a lot because it keeps holding up. Microservices work best when the service boundary matches a team boundary: one team, one service, a contract between them.</p>
        <p>When the same five engineers own eight services, the team boundary hasn’t moved. They still coordinate constantly and still deploy together, and now they also maintain eight pipelines. I’d much rather see a small team own one well-structured application than spread itself across a fleet of services it can’t keep up with.</p>

        <h3 className="post__h3">Is there a security or compliance boundary?</h3>
        <p>This is the reason I take most seriously. Payment data, health records, authentication, encryption keys and regulated personal data are all good candidates. Separating them can shrink the part of the system an auditor has to examine, limit who has network access to sensitive data, and keep a compromise in one place from becoming a compromise everywhere.</p>
        <p>Even here, the boundary has to be real. A payments service that shares database credentials with the main application hasn’t reduced much of anything.</p>
      </section>

      <section id="data" aria-labelledby="data-h">
        <h2 id="data-h" className="post__h2">What happens to the data?</h2>
        <p>This question settles more of these debates for me than any other, and it’s the one teams most often leave for later.</p>
        <p className="post__answer">A service that shares a database with the rest of the application isn’t really independent. If two services read and write the same tables, the database has become the integration layer, and nobody designed it to be one.</p>
        <p>A schema change in one service can break the other. Neither can migrate on its own schedule. Changing how something is stored means coordinating with everyone who reads it. You have separate deploys and a shared fate.</p>
        <p>Real independence means the service owns its data. The rest of the system gets at that data through the service’s API or the events it publishes, never by reaching into its tables. That has consequences you need to be ready for:</p>
        <ul className="post__list">
          <li>Queries that used to be one join now span two systems. Reporting gets harder.</li>
          <li>Transactions that used to be atomic are now spread across services. You need patterns like the transactional outbox or sagas, and you have to accept eventual consistency in some places.</li>
          <li>Some data gets copied, because services keep local views of what they need. Those copies have to be kept current, and someone has to decide what happens when they disagree.</li>
          <li>A data migration goes from one script to a coordinated rollout with backfills.</li>
        </ul>
        <p>You can still do it, as long as you know what you’re signing up for. When the plan for the data is “it’ll use the same database for now,” I take that as a sign the boundary isn’t ready yet.</p>
      </section>

      <section id="network" aria-labelledby="network-h">
        <h2 id="network-h" className="post__h2">Every new boundary becomes a network call</h2>
        <p>Inside one application, calling another module is a function call. It’s fast, it either works or throws, and it shows up in a single stack trace.</p>
        <p>Across services, that same call is a network request. It can be slow. It can time out after the work was already done. It can succeed on the server and fail on the client. It can be retried and run twice. Everything you got for free in-process now has to be designed and maintained:</p>
        <dl className="post__terms">
          <div><dt>Timeouts</dt><dd>Every call needs one, and each layer’s timeout has to make sense against the layers around it.</dd></div>
          <div><dt>Retries</dt><dd>With backoff and jitter, and only for operations that are safe to repeat.</dd></div>
          <div><dt>Idempotency</dt><dd>Because retries mean the same request will sometimes arrive twice.</dd></div>
          <div><dt>Observability</dt><dd>Logs, metrics and request IDs correlated across services, or debugging turns into guesswork.</dd></div>
          <div><dt>Distributed tracing</dt><dd>The only practical way to see where one slow request spent its time across five hops.</dd></div>
          <div><dt>Deployment pipelines</dt><dd>A build, test and release path per service, and someone to keep each one working.</dd></div>
          <div><dt>Infrastructure</dt><dd>Service discovery, load balancing, network policy, and more resources on the bill.</dd></div>
          <div><dt>On-call</dt><dd>More things that can page someone at night, and incidents that cross team lines.</dd></div>
        </dl>
        <p>This is the part teams underestimate most. The first service feels great. The tenth, during an outage that takes three teams and an hour just to locate, is when people start asking why everything got so hard.</p>
      </section>

      <section id="kafka" aria-labelledby="kafka-h">
        <h2 id="kafka-h" className="post__h2">Kafka helps decouple systems, and it isn’t free</h2>
        <p>Event-driven architecture is often the right answer to the coupling problems above. Instead of the order service calling billing, notifications and search one after another and waiting on each, it publishes an “order placed” event and moves on. Each consumer picks it up on its own time. A slow consumer no longer slows down the user’s request, and a new consumer can be added without touching the producer.</p>
        <p>The <Link to="/work/event-driven-platform/">event-driven design example</Link> explores a move from synchronous calls to Kafka events. A transactional outbox records work to publish, and idempotent consumers handle repeated deliveries. That can support independent releases, but it adds operational work:</p>
        <p>Kafka moves complexity more than it removes it. Some of what comes along:</p>
        <ul className="post__list">
          <li>Event schemas become public contracts. Changing one safely needs versioning and compatibility rules.</li>
          <li>Ordering only holds within a partition, so partition keys need real thought.</li>
          <li>Delivery is effectively at least once, so every consumer has to handle duplicates.</li>
          <li>One malformed message can stall a consumer until someone deals with it. You need dead-letter handling and a plan for replays.</li>
          <li>Consumer lag becomes a number someone has to watch and alert on.</li>
          <li>A business process is no longer readable in one place. It’s spread across producers and consumers, and following it takes good tracing.</li>
          <li>Someone has to run the cluster, or pay for a managed one, and understand it when it misbehaves.</li>
        </ul>
        <p>I reach for events when the decoupling clearly pays for itself: several independent consumers, work that doesn’t need to finish before the user gets a response, or teams that need to move at different speeds. I avoid them as the default way to connect two pieces of code that the same team changes together. A function call is a lot easier to debug than a topic.</p>
      </section>

      <section id="distributed-monolith" aria-labelledby="distributed-monolith-h">
        <h2 id="distributed-monolith-h" className="post__h2">The danger of a distributed monolith</h2>
        <p>The worst outcome is a system with all the costs of microservices and none of the benefits: lots of services, each with its own repository and pipeline, that still have to change together, deploy together and fail together.</p>
        <div className="post__diagram">
          <Diagram spec={distributed} id="distributed-monolith" no="667-1" />
        </div>
        <p>The symptoms are easy to spot once you’ve lived with them:</p>
        <ul className="post__list">
          <li>One feature means pull requests in four repositories, merged in a specific order.</li>
          <li>Releases are coordinated across services, sometimes with a spreadsheet.</li>
          <li>Services read each other’s tables, or all share one database.</li>
          <li>A shared library release forces every service to upgrade at the same time.</li>
          <li>Long chains of synchronous calls, where one slow service makes every request slow.</li>
          <li>The only place the whole system works is a shared staging environment nobody fully trusts.</li>
        </ul>
        <p>It usually comes from splitting along technical lines instead of domain lines, or splitting before anyone understood the domain. The boundaries land in the wrong places, and moving a boundary that’s already a network contract is far harder than moving one inside a codebase.</p>
        <p>If you’re already there, the fix is sometimes fewer services: merging the services that always change together back into one, getting the boundaries right, and only then splitting again.</p>
      </section>

      <section id="modular-monolith" aria-labelledby="modular-monolith-h">
        <h2 id="modular-monolith-h" className="post__h2">When a modular monolith is the better engineering decision</h2>
        <p className="post__answer">A modular monolith is one deployable application with strict internal boundaries. Each module owns its domain and its data, and modules talk to each other only through small, defined interfaces.</p>
        <p>It deploys as one unit and usually runs on one database, with each module owning its own tables or schema. Workers and queues can still scale separately.</p>
        <div className="post__diagram">
          <Diagram spec={modular} id="modular-monolith" no="667-2" />
        </div>
        <p>For most teams, this is where I’d start. You get much of what people want from microservices: clear ownership, code that’s easier to reason about, and boundaries you can enforce. You skip most of the cost. There’s no network between modules, one pipeline, one deploy, transactions that still work, and one stack trace when something breaks.</p>
        <p>Discipline is what makes it work. These are the rules I’d put in place:</p>
        <ol className="post__steps">
          <li><strong>Each module owns its tables.</strong> No other module queries them directly.</li>
          <li><strong>Modules call each other through a small public interface,</strong> never through internal classes or models.</li>
          <li><strong>Boundaries are checked automatically.</strong> Import rules or architecture tests in CI keep them from eroding under deadline pressure.</li>
          <li><strong>Cross-module side effects go through in-process events</strong> where it makes sense, so the code is already shaped like something that could be split.</li>
          <li><strong>Every module has a named owner,</strong> even when one team owns several.</li>
        </ol>
        <p>Scale alone isn’t a reason to split, either. When I was <Link to="/work/three-continent-platform/">co-founder and CTO of a platform that grew past 400,000 users</Link> across South America, Asia and Africa, the answer wasn’t to break the application up. We kept one architecture and ran the full application tier in three regions, routing users to the nearest one. The hard problem was distance, and splitting the code wouldn’t have fixed it.</p>
      </section>

      <section id="extract-later" aria-labelledby="extract-later-h">
        <h2 id="extract-later-h" className="post__h2">Why extracting a service later is often cheaper than creating one today</h2>
        <p>A common argument for splitting early is that it will be harder later. In my experience, it’s usually the other way around.</p>
        <p>Early in a product’s life, you don’t know where the real boundaries are. The domain is still moving. You don’t know which parts will see heavy load, which will need their own team, or which will pick up compliance requirements. Service boundaries drawn now are guesses, and wrong guesses turn into network contracts, separate databases and pipelines that are expensive to undo.</p>
        <p>Later, you know. You’ve seen which module changes on its own, which one gets the traffic spikes, and which one a new team is ready to own. If that module already has a clean interface and owns its data, extracting it is a contained project: stand up the service, route traffic to it, migrate the data, and delete the old code path.</p>
        <div className="post__diagram">
          <Diagram spec={extracted} id="extract-later" no="667-3" />
        </div>
        <p><Link to="/writing/modernizing-public-sector-applications/#incremental">Modernizing public-sector applications</Link> describes how a routing layer can let a team replace one workflow at a time. In that kind of project, I would compare a conventional stack on managed infrastructure with the extra operating work of a service mesh. The receiving team’s ability to support the system belongs in that decision.</p>
        <p>So my default is to build the modular monolith well, keep the seams clean, and extract when a real reason shows up. Extraction is cheaper and safer at that point, because you’re working from evidence instead of guesses.</p>
      </section>

      <section id="framework" aria-labelledby="framework-h">
        <h2 id="framework-h" className="post__h2">My practical decision framework</h2>
        <p>When it’s time to decide, this is roughly the checklist I use. It helps make sure we’ve asked the right questions and can explain the answer to someone who wasn’t in the room.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 667-4</span> The questions, and which way each answer points
            </caption>
            <thead>
              <tr>
                <th scope="col">Question</th>
                <th scope="col">Keep it in the application</th>
                <th scope="col">Consider a separate service</th>
              </tr>
            </thead>
            <tbody>
              {signals.map((s) => (
                <tr key={s.area}>
                  <th scope="row">{s.area}</th>
                  <td data-label="Keep it in the application">{s.keep}</td>
                  <td data-label="Consider a separate service">{s.split}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>

        <h3 className="post__h3">Keep it in the existing application when</h3>
        <p>The same team owns it, it shares the same lifecycle and data, scaling requirements are similar, and separation doesn’t provide meaningful operational value.</p>

        <h3 className="post__h3">Consider extracting a service when</h3>
        <p>There is a strong domain boundary, independent ownership, independent scaling or deployment requirements, meaningful failure isolation, or a security or compliance reason.</p>

        <p>One reason on its own is rarely enough. Security and compliance are the exception, because they can carry the decision by themselves. When several reasons point the same way, the case gets strong. And if the only reason left is “it would be cleaner,” that’s a refactoring job, not a new service.</p>
        <p>Whatever we decide, I want it written down in a short architecture decision record: the problem, the options, what we chose and why, and what would make us revisit it. Decisions like this outlive the meeting where they were made. I’ve written more about how I run them on my <Link to="/leadership/">engineering leadership</Link> page.</p>
      </section>

      <section id="five-years" aria-labelledby="five-years-h">
        <h2 id="five-years-h" className="post__h2">Creating a microservice is easy. Owning one for the next five years is the expensive part.</h2>
        <p>I’ve seen this over and over. Spinning up a new service takes days. With a good template and AI tools, it might take an afternoon. The cost doesn’t show up in the first sprint. It shows up in year two, three and five, often after the people who created the service have moved on.</p>
        <p>Every service brings all of this with it, for as long as it exists:</p>
        <dl className="post__terms">
          <div><dt>CI/CD</dt><dd>A pipeline to build, test, scan and deploy it, and to fix when the runner or base image changes.</dd></div>
          <div><dt>Infrastructure</dt><dd>Compute, networking, load balancers, DNS, and infrastructure as code to keep it reproducible.</dd></div>
          <div><dt>Monitoring</dt><dd>Dashboards and health checks that someone looks at.</dd></div>
          <div><dt>Logging</dt><dd>Structured logs shipped somewhere searchable, with retention and cost to manage.</dd></div>
          <div><dt>Alerts</dt><dd>Thresholds tuned to page for real problems and stay quiet otherwise.</dd></div>
          <div><dt>Secrets</dt><dd>Credentials, keys and certificates to store, rotate and audit.</dd></div>
          <div><dt>Dependency management</dt><dd>Framework upgrades and security patches, one service at a time.</dd></div>
          <div><dt>API versioning</dt><dd>Old clients to support while new ones move over, and a plan for retiring versions.</dd></div>
          <div><dt>Migrations</dt><dd>Schema changes and backfills that have to roll out without breaking anyone.</dd></div>
          <div><dt>Incident response</dt><dd>Runbooks, an on-call rotation, and people who know how it fails.</dd></div>
          <div><dt>Documentation</dt><dd>What it does, who calls it, how to run it locally, and what not to touch.</dd></div>
          <div><dt>Knowledge transfer</dt><dd>Someone new who can own it when the original authors leave.</dd></div>
        </dl>
        <p>Now multiply that by the number of services. A dozen services owned by a team of eight means every engineer is partly responsible for more than one system on top of their feature work. An upgrade that’s routine in one codebase becomes a quarter-long project across twelve.</p>
        <p>The failure I worry about most is the orphaned service. The original team moves on, the service keeps running, and nobody quite owns it. It works until the day it doesn’t, and the incident starts with someone asking, “Does anyone know what this does?” That’s a single point of failure in knowledge, and removing those is a big part of how I <Link to="/mentorship/">mentor engineers until they can replace me</Link>.</p>
      </section>

      <section id="worth-it" aria-labelledby="worth-it-h">
        <h2 id="worth-it-h" className="post__h2">Are microservices worth the complexity?</h2>
        <p className="post__answer">Sometimes, yes. When independent teams, independent scaling, real failure isolation or a compliance boundary are in play, microservices can pay for themselves many times over. When they aren’t, the complexity is pure cost.</p>
        <p>A lot of architecture discussions assume that microservices are what sophisticated teams build, and a monolith is what you have before you know better. I don’t agree.</p>
        <p>Choosing a monolith or a modular monolith is often the more sophisticated call. It takes experience to look at a system, see that a split would be interesting, and decide against it because the problem doesn’t call for it. It takes some confidence to hold that position in a room where everyone wants the more impressive diagram.</p>
        <p className="post__pull">Sometimes the senior engineering decision is deliberately choosing the simpler architecture, and being able to say exactly what would have to change before you’d choose differently.</p>
        <p>“We don’t do microservices” gives the team nothing to work with. “Billing stays in the monolith until it needs its own team or its own scaling, and we’ve kept it easy to extract” does. It tells everyone what would change the decision, and it keeps the door open.</p>
        <p>The best engineers I’ve worked with spend their complexity budget carefully. They spend it where it buys something real for the business and keep everything else as boring as they can. It’s close to what I wrote in <Link to="/writing/you-dont-need-to-remember-everything/">You Don’t Need to Remember Everything to Be a Good Software Engineer</Link>: the skill that matters is judging which tool fits the situation in front of you.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The principle I keep coming back to</h2>
      <div className="post__close-copy">
        <p className="lead">A separate service needs an owner, a deployment pipeline, monitoring and a stable contract. Those ongoing responsibilities belong in the decision.</p>
        <p className="post__close-principle">I would extract it when a specific benefit, such as independent scaling or release ownership, justifies that work.</p>
        <p>Until then, the code can stay in a module with a clear interface. We can return to the deployment decision when demand or ownership changes.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an architecture decision <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
