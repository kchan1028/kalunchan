export const metadata = {
  seoTitle: 'How Team Size Should Shape Software Architecture — Ka Lun Chan',
  dek:
    'An architecture diagram doesn’t show who gets paged when an arrow stops working. The right design meets the business’s needs and leaves the team with work it can carry.',
  related: [
    { to: '/writing/should-it-be-a-microservice/', label: 'The questions I ask before splitting out a service' },
    { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'The architecture lessons I keep reusing' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'From Expect scripts to AI agents: how DevOps changed' },
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture' },
  ],
  keywords: [
    'team size and software architecture',
    'microservices for small teams',
    'how many microservices for a small team',
    'modular monolith',
    'Conway’s law',
    'architecture decision checklist',
    'engineering leadership architecture',
  ],
  about: [
    { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
    { '@type': 'Thing', name: 'Microservices', sameAs: 'https://en.wikipedia.org/wiki/Microservices' },
    { '@type': 'Thing', name: 'Engineering leadership' },
  ],
  faq: [
    {
      q: 'Should a small team use microservices?',
      a: 'Usually only for a few specific parts of the system. A small team carries every service’s deployments, monitoring, upgrades and on-call. Extract a service when it solves a named problem, such as independent scaling, security isolation or a team ready to own it, and keep the rest in a well-structured application.',
    },
    {
      q: 'What is a modular monolith?',
      a: 'A modular monolith is one deployable application with firm internal boundaries. Each module owns its data and exposes a small interface, which keeps operations simple and makes it easier to extract a service later if the evidence calls for it.',
    },
    {
      q: 'When should a team move from a monolith to services?',
      a: 'When observable problems appear: releases waiting on unrelated changes, one workload affecting everything else, repeated incidents in one area, a compliance boundary, or a team ready to own a domain long term. Headcount alone is not a good trigger.',
    },
  ],
};
