import { Link } from 'react-router';

// Career context is established in the architecture and team-size articles.
// The reporting scenario is hypothetical, not an account of a client project.

export const toc = [
  ['before-design', 'Before choosing technology'],
  ['reporting', 'A reporting request becomes a platform'],
  ['operating-cost', 'The work that stays'],
  ['team', 'Who will operate it?'],
  ['future', 'Leave room without building everything'],
  ['saying-no', 'Make the decision explicit'],
];

export default function Body() {
  return <>
    <section id="before-design" aria-labelledby="before-design-h">
      <h2 id="before-design-h" className="post__h2">Just because we can build it</h2>
      <p>I enjoy the technical part of architecture. Figuring out how systems fit together, where the boundaries belong, and how something will behave under load is interesting work. It’s easy to keep going once a design starts taking shape.</p>
      <p>That enthusiasm needs a check. A new service can be well designed, thoroughly tested, and entirely unnecessary. We can do excellent implementation work on a decision we should have questioned earlier.</p>
      <p>I’ve worked on carrier VoIP infrastructure and on SaaS applications, and the business needed very different things from the technology in each. A call in progress has constraints that a report someone reads tomorrow morning doesn’t. Treating both as the same kind of architecture problem wastes effort and can make the important requirements harder to meet.</p>
      <p className="post__answer">Good architecture solves the business problem with the least complexity necessary to meet its requirements. Reliability, security and recovery belong in those requirements. So does the team’s ability to keep the system running.</p>
      <p>Before discussing tools, I want to know who needs the result, how quickly they need it, and what happens when it’s late or wrong. Those answers often remove whole parts of a proposed design.</p>
    </section>
    <section id="reporting" aria-labelledby="reporting-h">
      <h2 id="reporting-h" className="post__h2">A reporting request becomes a platform</h2>
      <p>Consider a hypothetical SaaS team. A customer asks for a dashboard showing yesterday’s activity. The engineers sketch an event pipeline, a separate reporting service, a database optimized for analytics, and an API for the dashboard.</p>
      <p>Each choice has a reasonable explanation. Events decouple reporting from the application. A separate database protects transactional workloads. The API gives future clients a clean way to access the data. Put those explanations together, and a daily report has become a new platform.</p>
      <p>I’d first ask whether a scheduled job in the existing application could produce the report. Could an indexed query meet the load? Could we precompute the totals and serve them through an existing endpoint? If the data only needs to be ready each morning, streaming every change may buy nothing the customer can use.</p>
      <p>That smaller design still needs care. The job needs safe retries, a way to detect stale results, and a limit on how much database work it can consume. We should check the query against representative data and watch its effect on the application. Sharing infrastructure only saves work when it remains safe to share.</p>
      <p>The answer could change. Customers might need results within seconds. Reporting queries might start affecting transaction latency. Several independent systems might need the same activity stream and the ability to replay it. Those requirements could justify a separate store or Kafka. They also give us something concrete to evaluate before adding either.</p>
      <p>A simpler first version gets the customer useful information sooner and lets the team learn what they actually do with it. Building the whole platform first spends that learning time on infrastructure.</p>
    </section>
    <section id="operating-cost" aria-labelledby="operating-cost-h">
      <h2 id="operating-cost-h" className="post__h2">The work that stays after launch</h2>
      <p>The AWS bill is easy to put in a spreadsheet. The rest of the cost needs someone to ask about it.</p>
      <p>A new database brings access policies, backups, restore procedures, schema changes and capacity decisions. A backup that nobody has restored is an assumption about recovery. A second database also raises questions about which copy owns a fact and how we repair disagreement between them.</p>
      <p>A new API creates a contract. Someone has to handle authentication, authorization, timeouts, compatibility and error behavior. When a request crosses services, debugging may require correlating logs and traces across them. An operation that used to fit inside one database transaction may now need a recovery process when only half of it succeeds.</p>
      <p>Kafka brings its own responsibilities: event schemas, consumer lag, retention, duplicate handling and replay. I’ve worked with Kafka and event-driven systems, and there are good reasons to use them. A durable stream that independent consumers can process at their own pace can be very valuable. But publishing an event doesn’t finish the design. Someone must know how to recover when a consumer falls behind or processes bad data. I discuss those choices in <Link to="/writing/event-driven-architecture-kafka-tradeoffs/">the Kafka tradeoffs article</Link>.</p>
      <p>On AWS, even managed components need configuration, permissions, monitoring and cost ownership. More infrastructure can mean more network paths to secure, more credentials to manage, and more environments to keep consistent. A managed service reduces some operating work; the application’s failure behavior is still our responsibility.</p>
      <p>These obligations accumulate. Testing has to cover more failure modes. Deployments need coordination when contracts change. Future engineers need to understand more of the system before they can change it safely. The business pays through infrastructure expenses and through engineering time that is no longer available for customers.</p>
      <p>I want a proposal to explain what recurring work it removes as well as what it adds. A service that isolates an unreliable integration might save enough incident time to justify itself. A service that merely moves existing code behind a network call needs a stronger case.</p>
    </section>
    <section id="team" aria-labelledby="team-h">
      <h2 id="team-h" className="post__h2">Architecture has to fit the people operating it</h2>
      <p>I’ve led small teams and helped grow teams from five engineers to thirty. The amount of attention available for infrastructure changes substantially as a team grows. Architecture needs to account for that.</p>
      <p>A five-person team adopting the service layout of a company with hundreds of engineers also inherits work that the larger company may distribute across platform, security and reliability teams. Five people still have customer requests, support and holidays. Being capable of building the system doesn’t mean they have room to operate it indefinitely.</p>
      <p>For a small team, a modular monolith is often a sensible starting point. Clear internal modules can organize accounts, billing and reporting while keeping one application deployment. Local calls remain local, and operations within the same database can use its transactions. You can enforce boundaries in code review and automated checks without deploying every boundary separately.</p>
      <p>Microservices can earn their place when a workload needs independent scaling, a security requirement calls for isolation, or teams need to release independently around stable domains. Those benefits can outweigh the distributed debugging and deployment work. Team size alone doesn’t settle it; capabilities, operational maturity and the consequences of an outage matter too.</p>
      <p>I’ve covered this in more detail in <Link to="/writing/team-size-should-influence-architecture/">why team size should influence architecture</Link>. In a design review, I’d also ask who can operate the proposed system when its main author is away. If the answer is nobody, training and backup coverage belong in the estimate.</p>
    </section>
    <section id="future" aria-labelledby="future-h">
      <h2 id="future-h" className="post__h2">Leave room without building everything</h2>
      <p>Restraint can become an excuse for shortcuts. Putting business rules wherever it’s convenient, letting every module change every table, and ignoring data ownership will make a small application difficult to change too.</p>
      <p>I’m willing to spend time on boundaries before there is a reason to split deployments. Give a module a clear responsibility. Keep its interface small. Decide where authoritative data lives. Make important constraints explicit in the data model. Test the behavior that another part of the application depends on.</p>
      <p>In the reporting example, the calculation can live behind an internal interface. The scheduler calls it, and the dashboard reads a defined result. That is enough separation to let us change how reports are produced later without scattering reporting logic through the product.</p>
      <p>It doesn’t make a future extraction free. Moving into another process changes latency, failure handling and data consistency. Data may need migration or backfilling. Good boundaries reduce the work we have to untangle; they don’t eliminate the work of becoming distributed.</p>
      <p>I also want to distinguish a deliberate limit from unexamined technical debt. “This job can run overnight, and we’ll revisit it if it misses the agreed completion window” is a useful decision. “We’ll fix reporting later” leaves the next engineer guessing what was acceptable and why.</p>
      <p>There are times to build ahead. A confirmed customer requirement, a lengthy migration, or a hard recovery target may make waiting expensive. Future flexibility is worth paying for when we can explain what we’re preserving and how likely we are to need it.</p>
    </section>
    <section id="saying-no" aria-labelledby="saying-no-h">
      <h2 id="saying-no-h" className="post__h2">Make the decision explicit</h2>
      <p>Experienced engineers should be able to challenge complexity without shutting down the person proposing it. Usually there’s a concern underneath the proposed technology. I want to understand that concern before deciding the design is too much.</p>
      <p>These are the questions I find useful:</p>
      <ul className="post__list">
        <li>What problem are we solving, and what does success look like?</li>
        <li>What’s the simplest solution that meets the requirements?</li>
        <li>What happens if we don’t build this?</li>
        <li>What operational responsibilities are we introducing, and who will own them?</li>
        <li>Can our current architecture handle this with a smaller change?</li>
        <li>What evidence would justify a more complex solution later?</li>
      </ul>
      <p>Then write down the decision. For our hypothetical report, I’d record the freshness requirement, the expected load, why we’re using the existing database, and the signs that would trigger a review. If reports miss their completion window or harm application performance, we have a reason to return to the design. Whoever inherits the system can see the reasoning instead of assuming we forgot to consider alternatives.</p>
      <p>Saying no also needs to account for the cost of doing nothing. If an existing system is causing repeated outages or blocking delivery, keeping it unchanged may be the expensive choice. The questions should expose that too.</p>
      <p>This is part of engineering leadership: making the ongoing commitment visible while there’s still a choice. The team needs room to say that an interesting design doesn’t yet solve a problem worth its cost.</p>
    </section>
  </>;
}

export function Closing() {
  return <>
    <h2 id="closing-h" className="post__close-title h2">What does the technology need to do?</h2>
    <div className="post__close-copy">
      <p className="lead">These days I ask whether the technology needs to do the job at all before I ask how to build it.</p>
      <p>I still enjoy building systems. I also want the engineers who inherit them to spend their time improving the product, with an architecture they can understand and operate. Every component we add needs to earn the attention it will keep asking for.</p>
    </div>
  </>;
}
