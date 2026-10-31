export const metadata = {
  seoTitle: 'When Should Something Be a Microservice? — Ka Lun Chan',
  dek:
    'A microservice should solve an organizational, scaling, deployment, reliability or domain-boundary problem. It shouldn’t exist just because microservices sound like modern architecture.',
  related: [
    { to: '/work/event-driven-platform/', label: 'Design example: event-driven microservices with Kafka' },
    { to: '/work/three-continent-platform/', label: 'Case study: one data center to three continents' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why judgment matters more than memorizing tools' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Team size and architecture: matching one to the other' },
    { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'What different systems taught me about software architecture' },
    { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'Event-driven architecture with Kafka: the tradeoffs' },
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'What every extra service costs to run, every month' },
  ],
  keywords: [
    'when to use microservices',
    'when to split a monolith',
    'are microservices worth it',
    'microservices vs monolith',
    'modular monolith',
    'distributed monolith',
    'microservice architecture decision',
    'service boundaries',
  ],
  faq: [
    {
      q: 'When should I use microservices?',
      a: 'Use microservices when a separate service makes a specific problem meaningfully easier: independent team ownership, very different scaling needs, real failure isolation, or a security or compliance boundary. If you can’t name the problem a split solves, keep the code in your existing application.',
    },
    {
      q: 'When should I split a monolith?',
      a: 'Split a monolith when one part of it already behaves like a separate system: it has its own domain and data, changes on its own schedule, needs its own team or scaling, or sits behind a compliance boundary. Extract that part behind a stable interface, one piece at a time, rather than rewriting everything.',
    },
    {
      q: 'Are microservices worth the complexity?',
      a: 'Only when they solve a problem you actually have. Every service adds pipelines, infrastructure, monitoring, on-call, API versioning and data consistency work for as long as it exists. If independent ownership, scaling or isolation aren’t in play, that complexity is pure cost.',
    },
    {
      q: 'What is a distributed monolith?',
      a: 'A distributed monolith is a set of services that still have to change, deploy or fail together, often because they share a database or depend on chains of synchronous calls. It carries the operational cost of microservices without the independence that justifies them.',
    },
    {
      q: 'What is a modular monolith?',
      a: 'A modular monolith is a single deployable application divided into modules with strict boundaries. Each module owns its domain and data and exposes a small interface to the others. It keeps deployment simple and makes it much easier to extract a service later.',
    },
  ],
};
