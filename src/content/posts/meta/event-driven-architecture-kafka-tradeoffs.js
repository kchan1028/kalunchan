export const metadata = {
  seoTitle: 'Event-Driven Architecture with Kafka: Tradeoffs — Ka Lun Chan',
  dek:
    'Event-driven architecture changes how systems coordinate, how failures show up and who carries the operational load. Kafka can support it, but the decision needs a concrete business benefit and an honest look at the cost.',
  related: [
    { to: '/work/event-driven-platform/', label: 'Design example: event-driven microservices with Kafka' },
    { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether a microservice should be a microservice' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Why a small team shouldn’t build like a large one' },
    { to: '/writing/api-architecture-lessons/', label: 'API architecture: what real systems have taught me' },
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'Kafka is also a team: architecture as an operating expense' },
  ],
  keywords: [
    'event-driven architecture',
    'Kafka vs REST API',
    'when to use Kafka',
    'Kafka cost',
    'managed vs self-managed Kafka',
    'transactional outbox pattern',
    'idempotent consumer',
    'Kafka exactly once',
    'event vs command',
    'event-driven architecture vs event sourcing',
  ],
  about: [
    { '@type': 'Thing', name: 'Event-driven architecture', sameAs: 'https://en.wikipedia.org/wiki/Event-driven_architecture' },
    { '@type': 'SoftwareApplication', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Eventual consistency', sameAs: 'https://en.wikipedia.org/wiki/Eventual_consistency' },
    { '@type': 'Thing', name: 'Idempotence', sameAs: 'https://en.wikipedia.org/wiki/Idempotence' },
    { '@type': 'Thing', name: 'Event sourcing', url: 'https://martinfowler.com/eaaDev/EventSourcing.html' },
    { '@type': 'SoftwareApplication', name: 'Amazon MSK', url: 'https://aws.amazon.com/msk/' },
    { '@type': 'SoftwareApplication', name: 'Confluent Cloud', url: 'https://www.confluent.io/confluent-cloud/' },
  ],
  faq: [
    {
      q: 'When should I use Kafka instead of direct API calls?',
      a: 'Use a direct call when the caller needs an immediate answer. Use Kafka when several independent consumers need to react to the same events, when you need retained history or replay, and when the team can operate the resulting lag, duplicates and schema changes. For a single background task, a simpler queue is often enough.',
    },
    {
      q: 'What is the transactional outbox pattern?',
      a: 'The service writes its business change and an outbox record in the same database transaction. A separate relay publishes outbox records to Kafka and retries until it succeeds, so a saved change is never left without its event.',
    },
    {
      q: 'Does Kafka exactly-once mean my side effects happen once?',
      a: 'No. Kafka’s exactly-once features cover reading from and writing to Kafka within a transaction. Sending an email, charging a payment or writing to another database still needs idempotency keys and careful consumer design.',
    },
    {
      q: 'Is event-driven architecture the same as event sourcing?',
      a: 'No. Event-driven architecture uses events to let systems react to each other. Event sourcing stores every state change as an event and rebuilds state from that history. You can use Kafka for events while a regular database stays the source of truth.',
    },
  ],
};
