export const metadata = {
  seoTitle: 'When Technical Debt Becomes a Business Problem',
  dek:
    'Not every piece of technical debt is a problem. It becomes one when the cost moves out of the codebase and into delivery dates, operating costs, security and the business’s ability to respond.',
  related: [
    { to: '/writing/building-a-startup-from-idea-to-acquisition/#technical-debt', label: 'How a startup taught me to treat debt as an investment' },
    { to: '/writing/modernizing-public-sector-applications/', label: 'Modernizing public-sector applications without stopping the service' },
    { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is telling you' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/the-architecture-you-dont-build/', label: 'The architecture you don’t build' },
    { to: '/writing/speed-vs-quality-software-engineering/', label: 'Speed vs quality: match the process to the risk' },
    { to: '/writing/patch-mitigate-or-retire-vulnerability-triage/', label: 'Patch, mitigate or retire: when debt blocks a security fix' },
    { to: '/leadership/#debt', label: 'How I balance delivery and technical debt' },
  ],
  keywords: [
    'technical debt',
    'when technical debt becomes a business problem',
    'cost of technical debt',
    'prioritizing technical debt',
    'refactor or rewrite',
    'legacy code rewrite risks',
    'explaining technical debt to stakeholders',
    'technical debt and security',
    'engineering leadership',
    'software architecture',
  ],
  about: [
    { '@type': 'Thing', name: 'Technical debt', sameAs: 'https://en.wikipedia.org/wiki/Technical_debt' },
    { '@type': 'Thing', name: 'Code refactoring', sameAs: 'https://en.wikipedia.org/wiki/Code_refactoring' },
  ],
  mentions: [
    { '@type': 'Person', name: 'Ward Cunningham', sameAs: 'https://en.wikipedia.org/wiki/Ward_Cunningham' },
    { '@type': 'Thing', name: 'Strangler fig pattern', sameAs: 'https://en.wikipedia.org/wiki/Strangler_fig_pattern' },
    { '@type': 'Thing', name: 'Single point of failure', sameAs: 'https://en.wikipedia.org/wiki/Single_point_of_failure' },
  ],
  faq: [
    {
      q: 'Is technical debt always bad?',
      a: 'No. Taking a shortcut to ship, validate an idea or meet a deadline with limited people and money is often a sound business decision. Debt becomes a problem when it isn’t repaid and its cost starts showing up in delivery time, operating costs, security exposure or reliability.',
    },
    {
      q: 'When does technical debt become a business problem?',
      a: 'When its cost leaves the codebase and reaches things the business tracks: release dates that keep slipping, infrastructure costs nobody can safely reduce, security patches that can’t be applied, recurring incidents, slow onboarding, dependence on a few engineers, or opportunities the team can’t take on because the system is too hard to change.',
    },
    {
      q: 'Should you refactor or rewrite legacy code?',
      a: 'Usually refactor incrementally or replace one component at a time. A full rewrite has to rediscover every undocumented rule and edge case in the old system while that system keeps changing, so it carries the most risk. Understand why the original was built the way it was, and name what has to be better afterward, before choosing a rewrite.',
    },
    {
      q: 'How do you explain technical debt to non-technical stakeholders?',
      a: 'Describe the consequence instead of the code. Rather than saying a module is messy, explain that every change to it needs extra testing and carries a higher risk of production issues, and what improving it would do for delivery time and risk. Then let the business weigh the cost of keeping the debt against the cost of fixing it.',
    },
  ],
};
