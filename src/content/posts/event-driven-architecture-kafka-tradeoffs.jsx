import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Background (SaaS, government applications, Kafka microservices, AWS, CI/CD,
// distributed teams) supplied by KC. The online-order example is hypothetical.
// No prices: cost is discussed as drivers only.

export const toc = [
  ['direct-calls', 'When to call directly'],
  ['publish', 'When to publish an event'],
  ['kafka', 'Where Kafka fits'],
  ['background', 'What moves into the background'],
  ['consistency', 'Records and events'],
  ['coupling', 'Coupling through events'],
  ['cost', 'What it costs'],
  ['options', 'Comparing the options'],
  ['checklist', 'Leadership checklist'],
];

const flow = {
  label: 'Hypothetical: one fact, three independent reactions',
  key: 'Consumers read on their own schedule',
  tiers: [
    { name: 'Producer', nodes: [{ id: 'app', label: 'Orders service', sub: 'saves the order' }] },
    { name: 'Event', nodes: [{ id: 'topic', label: 'orders topic', sub: 'OrderPlaced' }] },
    {
      name: 'Consumer groups',
      nodes: [
        { id: 'reporting', label: 'Reporting' },
        { id: 'notify', label: 'Notifications' },
        { id: 'fulfill', label: 'Fulfillment' },
      ],
    },
  ],
  edges: [
    ['app', 'topic', null, true],
    ['topic', 'reporting', null, true],
    ['topic', 'notify', null, true],
    ['topic', 'fulfill', null, true],
  ],
};

const options = [
  {
    name: 'Direct API call',
    immediate: 'Yes. The caller waits for the answer.',
    replay: 'No. A missed call is gone unless the caller retries.',
    consumers: 'The caller knows and calls each one.',
    effort: 'Lowest, until dependency chains get long.',
    cost: 'Mostly the services themselves, plus timeouts and retries.',
  },
  {
    name: 'Background job or simple queue',
    immediate: 'No. Work happens after the response.',
    replay: 'Limited. Messages usually disappear once handled.',
    consumers: 'Usually one worker type per queue.',
    effort: 'Moderate: workers, retries and a dead-letter queue.',
    cost: 'Often low, especially as a managed queue.',
  },
  {
    name: 'Kafka event streaming',
    immediate: 'No. Consumers react on their own schedule.',
    replay: 'Yes, within the retention period.',
    consumers: 'Many independent consumer groups read the same events.',
    effort: 'Highest: schemas, lag, partitions, recovery.',
    cost: 'Cluster or managed service, storage, network and engineering time.',
  },
];

export default function Body() {
  return (
    <>
      <section id="direct-calls" aria-labelledby="direct-calls-h">
        <h2 id="direct-calls-h" className="post__h2">When one system should call another directly</h2>
        <p>Event-driven architecture changes three things at once: how systems coordinate work, how failures show up, and who carries the operational load. I’ve worked with Kafka-based microservices, alongside SaaS and government applications on AWS with CI/CD and distributed teams, and those three changes are what I look at before anything about the technology. My first lessons in all three came long before Kafka, <Link to="/writing/open-source-voip-distributed-systems-lessons/">running an open-source VoIP platform</Link> where a lost message was a dropped call.</p>
        <p>A direct call is the right default when the caller needs an answer now. A checkout page has to know whether the payment was authorized. A login form has to know whether the password was right. The request flow is easy to follow: one call, one response, one place to look when it fails.</p>
        <p>The cost is dependency. The caller’s latency includes the callee’s latency. If the callee is down, the caller is partly down too. Chain four services together synchronously and a slowdown in the last one backs up all the others, which is how one slow dependency turns into a wider outage.</p>
      </section>

      <section id="publish" aria-labelledby="publish-h">
        <h2 id="publish-h" className="post__h2">When a system should publish an event instead</h2>
        <p>Take a hypothetical online store. A customer places an order. Several things should follow: reporting needs updated sales numbers, the customer should get a confirmation email, and fulfillment should start preparing the shipment.</p>
        <p>With direct calls, the orders service would call each of those in turn and wait on all of them. With events, it saves the order and publishes one fact: <code>OrderPlaced</code>. Reporting, notifications and fulfillment each react on their own. A new consumer, say a fraud check, can be added later without changing the orders service.</p>
        <Diagram spec={flow} id="order-events" no="668-1" />
        <p>The wording of that event matters. <code>OrderPlaced</code> is a fact about something that already happened, owned by the service that knows it. <code>SendNotification</code> would be a command, a request for specific work, which makes the sender responsible for knowing who does the work and whether it got done. A fact leaves each consumer to decide what to do, while a command keeps the sender tied to the work it asked for.</p>
      </section>

      <section id="kafka" aria-labelledby="kafka-h">
        <h2 id="kafka-h" className="post__h2">Where Kafka fits</h2>
        <p className="post__answer">Apache Kafka is a durable event-streaming platform. Producers write events to topics, Kafka stores them for a configured retention period, and any number of independent consumer groups read them at their own pace and can replay them later.</p>
        <p>In the example, <code>OrderPlaced</code> goes to an orders topic. The topic is split into partitions so the load can spread across brokers and consumers. Reporting, notifications and fulfillment are separate consumer groups, so each one reads every event and tracks its own position. If the reporting consumer has a bug, the team can fix it and replay the retained events to rebuild the numbers.</p>
        <p>That retained, replayable log is what Kafka adds. Plenty of asynchronous work doesn’t need it. Sending one welcome email after a signup is a background job, and a simple queue handles it well.</p>
      </section>

      <section id="background" aria-labelledby="background-h">
        <h2 id="background-h" className="post__h2">What complexity moves into the background</h2>
        <p>When the orders service gets an acknowledgment from Kafka, the event is stored. None of the downstream work has happened yet. Everything after that is eventually consistent, and the team has to manage what that means in production:</p>
        <ul className="post__list">
          <li>Consumer lag: how far behind each consumer is, and who gets alerted when it grows.</li>
          <li>Duplicates: delivery is usually at least once, so consumers will sometimes see the same event twice.</li>
          <li>Ordering: Kafka orders events within a partition, so related events need the same partition key.</li>
          <li>Schema evolution: changing an event without breaking consumers needs compatibility rules.</li>
          <li>Retries and failed events: a malformed message can stall a consumer until something moves it aside.</li>
        </ul>
        <p>Each of those needs an owner, a dashboard and a runbook before the first production incident.</p>
      </section>

      <section id="consistency" aria-labelledby="consistency-h">
        <h2 id="consistency-h" className="post__h2">Keeping business records and events consistent</h2>
        <p>The orders service has to do two things: save the order to its database and publish the event. Those are two different systems. If the database write succeeds and the publish fails, the order exists and nobody downstream knows. That’s the dual-write problem.</p>
        <p>A transactional outbox is one common fix. The service writes the order and an outbox row in the same database transaction. A separate relay reads the outbox and publishes to Kafka, retrying until it succeeds. On the consuming side, idempotent consumers record which events they’ve handled, so a duplicate does nothing. I used that pattern on an <Link to="/work/event-driven-platform/">event-driven microservices platform</Link>, and it’s the part I’d design first.</p>
        <p>Kafka’s exactly-once features help, within a defined scope. Idempotent producers and transactions can make a read-process-write flow inside Kafka behave as if it ran once. They don’t reach outside Kafka, so they can’t make an email, a payment or a write to another database happen exactly once. That still takes idempotency keys and careful design in the consumer.</p>
      </section>

      <section id="coupling" aria-labelledby="coupling-h">
        <h2 id="coupling-h" className="post__h2">Events can still create tightly coupled systems</h2>
        <p>Asynchronous doesn’t automatically mean independent. A shared event schema that every team edits becomes a shared database by another name. A consumer that depends on a field nobody documented breaks when the producer changes it. A business process that needs five consumers to finish in a particular order is a distributed transaction with no coordinator. Each of these brings back the coupling events were supposed to remove, and it’s harder to see. I go deeper on that trap in <Link to="/writing/should-it-be-a-microservice/">how I decide whether a microservice should be a microservice</Link>.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">What Kafka costs to own</h2>
        <p>The infrastructure bill is the visible part. The total cost of ownership includes:</p>
        <ul className="post__list">
          <li>Broker capacity, or a managed service’s charges</li>
          <li>Storage for replication and retention, and network transfer, including traffic between availability zones</li>
          <li>Compute for consumers, plus schema registries and connectors if you use them</li>
          <li>Monitoring, security, upgrades and incident response</li>
          <li>Engineering time on schemas, replay, recovery and debugging</li>
          <li>Local development and test environments that behave enough like production</li>
          <li>Opportunity cost: hours spent maintaining infrastructure instead of improving the product</li>
        </ul>
        <p>Several factors drive those costs. Throughput, message size, retention and replication drive storage and network charges directly. Partition count and consumer patterns mostly create capacity and operational overhead: more partitions mean more to balance and monitor, and every new consumer group reads the full stream again. Pricing models differ between providers, so check current pricing before you commit.</p>
        <p>A managed service, such as Amazon MSK or Confluent Cloud, takes on running and patching the brokers, and some offerings handle scaling for you. Your team still owns topics, schemas, consumers, lag, recovery and the bill. Self-managed Kafka gives you more control over configuration and cost, and it needs people who understand the cluster and an on-call rotation that covers it.</p>
        <p>Kafka can also help avoid costs: the same integration rebuilt for each new system, polling jobs that ask “anything new?” all day, user requests blocked on slow downstream work, and data that can’t be reprocessed after a bug. Those savings depend on the design, so I count them only when the system has those problems today.</p>
      </section>

      <section id="options" aria-labelledby="options-h">
        <h2 id="options-h" className="post__h2">Direct calls, queues or event streaming</h2>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 668-2</span> Three ways to coordinate work
            </caption>
            <thead>
              <tr>
                <th scope="col">Approach</th>
                <th scope="col">Immediate response</th>
                <th scope="col">Replay</th>
                <th scope="col">Multiple consumers</th>
                <th scope="col">Operational effort</th>
                <th scope="col">Cost</th>
              </tr>
            </thead>
            <tbody>
              {options.map((o) => (
                <tr key={o.name}>
                  <th scope="row">{o.name}</th>
                  <td data-label="Immediate response">{o.immediate}</td>
                  <td data-label="Replay">{o.replay}</td>
                  <td data-label="Multiple consumers">{o.consumers}</td>
                  <td data-label="Operational effort">{o.effort}</td>
                  <td data-label="Cost">{o.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
        <p>Most systems I’d design use more than one. Direct calls cover the moments where a user is waiting for an answer. Events carry the reactions that can happen afterward, and background jobs take single tasks that don’t need a retained history.</p>
        <p>Event-driven architecture also isn’t event sourcing. Event sourcing stores every change to an entity as an event and rebuilds state from that history, which is a much bigger commitment. You can use Kafka to publish events while your database stays the source of truth.</p>
      </section>

      <section id="checklist" aria-labelledby="checklist-h">
        <h2 id="checklist-h" className="post__h2">A leadership checklist</h2>
        <ol className="post__steps">
          <li>What business problem requires asynchronous coordination?</li>
          <li>Do we need retained history, replay, or multiple independent consumers?</li>
          <li>How much delay can users and downstream systems tolerate?</li>
          <li>Who owns event contracts, consumers and production recovery?</li>
          <li>How will we detect missing, duplicated or delayed processing?</li>
          <li>Could a simpler queue meet the requirement?</li>
          <li>What will this cost to operate over the next year?</li>
        </ol>
        <p>If the team can’t answer the fourth and fifth questions, the design isn’t ready, however clean the diagram looks. I raise the same capacity question in <Link to="/writing/team-size-should-influence-architecture/">your team size should influence your architecture</Link>.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">So, should systems react to events?</h2>
      <div className="post__close-copy">
        <p className="lead">Sometimes. Kafka is a tool for a specific kind of problem, and using it says nothing about how mature an architecture is.</p>
        <p className="post__close-principle">Systems should react to events when asynchronous coordination brings a benefit worth having, and the organization can support the failure behavior and operating cost that come with it.</p>
        <p>Where a user needs an answer now, call directly. Where the work is a reaction, publish the fact, and make sure someone owns what happens next.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an event-driven design <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
