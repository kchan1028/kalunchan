export const metadata = {
  seoTitle: 'Hidden Cost of Software Architecture: Scaling Too Early — Ka Lun Chan',
  dek:
    'A design needs an operating budget as well as a build estimate. Service boundaries, storage and capacity choices determine what the business pays and who has to support the system.',
  related: [
    { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning: what carrier networks taught me about scaling cloud infrastructure' },
    { to: '/writing/should-it-be-a-microservice/', label: 'Should it be a microservice?' },
    { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'The tradeoffs of event-driven architecture with Kafka' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
    { to: '/expertise/#capacity', label: 'Infrastructure scaling, capacity planning and cost optimization' },
    { to: '/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/', label: 'Infrastructure costs from seven seats, including the founder’s' },
    { to: '/writing/the-architecture-you-dont-build/', label: 'The architecture you don’t build' },
  ],
  keywords: [
    'hidden cost of software architecture',
    'monolith vs microservices',
    'modular monolith',
    'premature scaling',
    'software architecture tradeoffs',
    'engineering team size and architecture',
    'cloud infrastructure costs',
    'cost of microservices',
    'scaling too early',
    'premature optimization infrastructure cost',
    'managed services vs self-hosted cost',
    'Kafka operational cost',
    'database performance and cloud cost',
    'build vs buy decision',
    'architecture and operating expenses',
    'cloud cost optimization',
  ],
  about: [
    { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
    { '@type': 'Thing', name: 'Cloud cost optimization' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Microservices', sameAs: 'https://en.wikipedia.org/wiki/Microservices' },
    { '@type': 'Thing', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
    { '@type': 'Thing', name: 'Total cost of ownership', sameAs: 'https://en.wikipedia.org/wiki/Total_cost_of_ownership' },
    { '@type': 'Thing', name: 'Connection pool', sameAs: 'https://en.wikipedia.org/wiki/Connection_pool' },
  ],
  faq: [
    {
      q: 'How does software architecture affect operating costs?',
      a: 'Through the number of components that must run and be monitored, how they communicate, how much a vendor does for you, how efficiently the database is used, and how much capacity is bought ahead of demand. Each extra service, cluster or cross-zone call is a recurring cost, paid in dollars and in engineer attention.',
    },
    {
      q: 'Why is scaling too early expensive?',
      a: 'Because capacity in the cloud is easy to add later and costs money every month until it is needed. Multi-region, service meshes or Kafka for a product with a few thousand users spend cash and engineering attention a young product needs elsewhere. What is hard to change later is the data model and the boundaries, so that is where early effort belongs.',
    },
    {
      q: 'When is a modular monolith better than microservices?',
      a: 'When one team or a few teams ship a product with one release cadence and one scaling profile. Separate services pay for themselves when part of the system must scale very differently, sits behind a different security or compliance boundary, must keep working when the rest fails, or belongs to a team that needs to release independently. Ka Lun Chan’s co-founded platform grew past 400,000 users as a modular monolith.',
    },
    {
      q: 'When are managed services more expensive than self-hosting?',
      a: 'For a small team the managed premium is almost always cheaper than the engineer-hours it replaces. The math flips for large, steady workloads where the premium approaches an engineer’s salary and the team exists to carry the pager. The line moves as the workload and the team change, so the decision needs revisiting.',
    },
  ],
};
