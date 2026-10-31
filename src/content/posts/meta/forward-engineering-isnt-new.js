export const metadata = {
  seoTitle: 'Forward Engineering vs Reverse Engineering, Explained — Ka Lun Chan',
  dek:
    'Forward engineering is having a moment, but it is the oldest direction in software. Building, migrating and leading teams has taught me that the risk lives in the handoffs, not the typing.',
  related: [
    { to: '/writing/modernizing-public-sector-applications/', label: 'Modernizing public-sector applications without a big-bang rewrite' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Architecture lessons from very different systems' },
    { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is telling you' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'forward engineering',
    'forward engineering vs reverse engineering',
    'what is forward engineering',
    'reverse engineering legacy systems',
    'legacy modernization',
    'forward engineering agile',
    'specification-driven development',
    'software engineering fundamentals',
    'engineering leadership requirements architecture',
  ],
  about: [
    { '@type': 'Thing', name: 'Forward engineering', sameAs: 'https://en.wikipedia.org/wiki/Forward_engineering' },
    { '@type': 'Thing', name: 'Reverse engineering', sameAs: 'https://en.wikipedia.org/wiki/Reverse_engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Agile software development', sameAs: 'https://en.wikipedia.org/wiki/Agile_software_development' },
    { '@type': 'Thing', name: 'Waterfall model', sameAs: 'https://en.wikipedia.org/wiki/Waterfall_model' },
    { '@type': 'Thing', name: 'Legacy system', sameAs: 'https://en.wikipedia.org/wiki/Legacy_system' },
    { '@type': 'Thing', name: 'Strangler fig pattern', sameAs: 'https://en.wikipedia.org/wiki/Strangler_fig_pattern' },
  ],
  faq: [
    {
      q: 'What is forward engineering?',
      a: 'The ordinary direction of software work: from a business need to requirements, to an architecture and design, to code, to a running system, each step making the previous one more concrete. Reverse engineering runs the other way, from an existing system back to its design and rules.',
    },
    {
      q: 'Is forward engineering the same as waterfall?',
      a: 'No. Waterfall is one way to do forward engineering, all at once. Agile and iterative development are forward engineering in small slices: a story is a requirement, planning is design, the pull request is implementation and the release is the running system, repeated every week or two.',
    },
    {
      q: 'How do forward and reverse engineering work together in a modernization?',
      a: 'A legacy system is requirements nobody wrote down, expressed in code. You reverse-engineer it first to recover what it actually does, then forward-engineer replacements, often behind an API facade one journey at a time so the service stays up.',
    },
    {
      q: 'Does generating code faster make teams more productive?',
      a: 'Only if the downstream steps keep up. Faster code moves the bottleneck to review, testing, security and maintenance. Smaller changes, tests written from requirements, security checks in the pipeline and a named owner for each component are what turn faster code into faster delivery.',
    },
  ],
};
