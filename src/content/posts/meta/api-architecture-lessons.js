export const metadata = {
  seoTitle: 'API Architecture Lessons From Real Systems — Ka Lun Chan',
  dek:
    'Endpoints are the visible part of an API. Ownership, contracts, authorization, failure behavior and operations decide whether it’s still useful two years later.',
  related: [
    { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'Event-driven architecture with Kafka: the tradeoffs' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
    { to: '/writing/modernizing-public-sector-applications/', label: 'Modernizing public-sector applications' },
    { to: '/writing/specialization-beyond-your-own-code/', label: 'Depth in one area, enough breadth to investigate' },
    { to: '/writing/network-security-before-devsecops/', label: 'Where my authorization habits come from: router ACLs' },
    { to: '/writing/building-public-sector-applications/', label: 'What public-sector applications demand of authorization and audit' },
  ],
  keywords: [
    'API architecture',
    'API design best practices',
    'REST vs GraphQL vs gRPC',
    'API backward compatibility',
    'broken object level authorization',
    'JWT authorization',
    'idempotency key',
    'backend for frontend',
    'API cost',
  ],
  about: [
    { '@type': 'Thing', name: 'Application programming interface', sameAs: 'https://en.wikipedia.org/wiki/API' },
    { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'REST', sameAs: 'https://en.wikipedia.org/wiki/REST' },
    { '@type': 'Thing', name: 'GraphQL', sameAs: 'https://en.wikipedia.org/wiki/GraphQL' },
    { '@type': 'SoftwareApplication', name: 'gRPC', sameAs: 'https://en.wikipedia.org/wiki/GRPC' },
    { '@type': 'Thing', name: 'JSON Web Token', sameAs: 'https://en.wikipedia.org/wiki/JSON_Web_Token' },
    { '@type': 'Thing', name: 'OWASP API Security Top 10', url: 'https://api-security.owasp.org/' },
  ],
  faq: [
    {
      q: 'Should I use REST, GraphQL or gRPC?',
      a: 'Choose from the consumers’ needs. REST suits public, partner and browser APIs and works well with HTTP caching. GraphQL suits front ends that combine many data sources. gRPC suits high-volume internal service calls. Team familiarity and operational tooling matter as much as the style itself.',
    },
    {
      q: 'Does a valid JWT mean a user can access a record?',
      a: 'No. A valid JWT authenticates the caller. The API still has to check, on every request, that this caller may perform this action on this specific record, including tenant and ownership checks. Missing those checks is broken object level authorization, first on the OWASP API Security Top 10.',
    },
    {
      q: 'How do you make API retries safe?',
      a: 'Use idempotency. The client sends a unique key with a create or payment request, and the server stores the result under that key, so a retry after a timeout returns the original result instead of creating a duplicate.',
    },
  ],
};
