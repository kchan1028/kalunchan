export const metadata = {
  seoTitle: 'Software Architecture Lessons, VoIP to Kafka — Ka Lun Chan',
  dek:
    'Telecom, publishing, monoliths, microservices and Kafka each taught me the same thing from a different side: the right architecture depends on the problem, and every choice leaves your team something to operate.',
  related: [
    { to: '/writing/should-it-be-a-microservice/', label: 'Should it be a microservice? How I decide' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'From Expect scripts to AI agents: how DevOps changed' },
    { to: '/writing/what-publishing-taught-me-about-seo-aeo-geo/', label: 'What being a CTO in publishing taught me about SEO' },
    { to: '/work/event-driven-platform/', label: 'Design example: event-driven microservices with Kafka' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Architecture decisions that depend on headcount' },
    { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open source VoIP taught me about distributed systems' },
    { to: '/writing/network-security-before-devsecops/', label: 'Security as a thread through every system' },
    { to: '/writing/forward-engineering-isnt-new/', label: 'Forward engineering isn’t new' },
  ],
  keywords: [
    'software architecture lessons',
    'monolith vs microservices',
    'are monoliths bad',
    'microservices tradeoffs',
    'event-driven architecture tradeoffs',
    'Kafka tradeoffs',
    'architecture and team size',
    'boring architecture',
    'engineering leadership architecture decisions',
  ],
  about: [
    { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
    { '@type': 'Thing', name: 'Microservices', sameAs: 'https://en.wikipedia.org/wiki/Microservices' },
    { '@type': 'Thing', name: 'Engineering leadership' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
    { '@type': 'Thing', name: 'Session Initiation Protocol', sameAs: 'https://en.wikipedia.org/wiki/Session_Initiation_Protocol' },
    { '@type': 'Thing', name: 'Event-driven architecture', sameAs: 'https://en.wikipedia.org/wiki/Event-driven_architecture' },
    { '@type': 'SoftwareApplication', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
    { '@type': 'Thing', name: 'Conway’s law', sameAs: 'https://en.wikipedia.org/wiki/Conway%27s_law' },
  ],
  faq: [
    {
      q: 'Are monoliths bad?',
      a: 'No. A well-designed monolith is often the most productive choice for a small team or a new product: one deployment, simple transactions, easy debugging and local development. Monoliths become a problem when the boundaries inside them disappear and every change touches everything else.',
    },
    {
      q: 'What do microservices actually cost?',
      a: 'Microservices move complexity from inside one application onto the network. Teams take on service discovery, API contracts, retries, timeouts, idempotency, distributed tracing, schema evolution, deployment coordination and eventual consistency, plus a pipeline, logs and monitoring for every service.',
    },
    {
      q: 'What are the tradeoffs of event-driven architecture with Kafka?',
      a: 'Kafka lets producers publish events without knowing every consumer, which loosens coupling. In exchange, teams have to handle duplicate and out-of-order messages, failed processing, schema evolution, replays and debugging transactions that cross several services asynchronously.',
    },
    {
      q: 'How does team size affect software architecture?',
      a: 'Architecture has an organizational cost. A six-person team running twenty microservices has to operate twenty pipelines and monitor twenty things that can fail. When thirty engineers keep blocking each other in one application, clearer service boundaries can give them real independence.',
    },
    {
      q: 'How should you choose a software architecture?',
      a: 'Start with the constraints, not the technology: what you’re building, who uses it, traffic, rate of change, what must scale, reliability requirements and what the team can realistically operate. Then pick the least complicated system that solves the problem and can evolve with the business.',
    },
  ],
};
