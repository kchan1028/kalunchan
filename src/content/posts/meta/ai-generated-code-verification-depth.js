export const sources = [
  { label: 'AWS re:Invent keynote with Dr. Werner Vogels (official video, AWS Events)', url: 'https://www.youtube.com/watch?v=3Y1G9najGiI' },
  { label: 'Werner Vogels, All Things Distributed: A little bit uncomfortable', url: 'https://www.allthingsdistributed.com/2025/12/a-little-bit-uncomfortable.html' },
];

export const metadata = {
  seoTitle: 'Verifying AI-Generated Code: How Deep Should You Go?',
  dek:
    'AI has made writing code much faster. It hasn’t made understanding code any faster, and the more code we accept into our systems, the more that gap matters.',
  sources,
  related: [
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review doesn’t start with a pull request' },
    { to: '/writing/recognizing-ai-generated-code/', label: 'I can recognize AI-generated code. Here’s why.' },
    { to: '/writing/ai-learning-curve-future-of-work/', label: 'AI is great, but not everyone is ready to use it yet' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'AI coding can cost more than a human engineer when used incorrectly' },
    { to: '/writing/generalist-advantage-in-the-ai-era/', label: 'Why being a generalist is an advantage in the AI era' },
    { to: '/writing/good-teams-dont-expect-everyone-to-know-everything/', label: 'Good teams don’t expect everyone to know everything' },
  ],
  keywords: [
    'AI-generated code verification',
    'verifying AI-generated code',
    'AI code review',
    'AI-assisted software development',
    'verification depth',
    'verification debt',
    'AI coding risks',
    'AI-generated code testing',
    'software engineering fundamentals',
    'engineering leadership and AI',
    'Renaissance Developer',
    'Werner Vogels',
  ],
  about: [
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Software verification', sameAs: 'https://en.wikipedia.org/wiki/Software_verification' },
    { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
  ],
  mentions: [
    { '@type': 'Person', name: 'Werner Vogels', sameAs: 'https://en.wikipedia.org/wiki/Werner_Vogels' },
    { '@type': 'Event', name: 'AWS re:Invent', sameAs: 'https://en.wikipedia.org/wiki/AWS_re:Invent' },
    { '@type': 'Thing', name: 'Technical debt', sameAs: 'https://en.wikipedia.org/wiki/Technical_debt' },
    { '@type': 'Thing', name: 'Software testing', sameAs: 'https://en.wikipedia.org/wiki/Software_testing' },
  ],
  faq: [
    {
      q: 'How deeply should developers verify AI-generated code?',
      a: 'As deeply as the risk of the change requires. A copy change may only need to run and look right. Code that touches money, permissions, personal data or a production database needs the developer to understand how it fits the system, how it fails and how it will be operated. Every change doesn’t need every level, and the depth should be decided before the code is accepted.',
    },
    {
      q: 'What is verification debt?',
      a: 'Werner Vogels used the term in his closing keynote at AWS re:Invent. When you write code yourself, understanding comes with writing it. When a machine writes it, that understanding has to be rebuilt during review. Code that ships before anyone rebuilds it carries verification debt.',
    },
    {
      q: 'How do junior developers learn to judge AI-generated code?',
      a: 'The same way judgment has always been built, with more deliberate design: explaining generated code in review, debugging without the assistant sometimes, reading unfamiliar implementations, and working through changes with someone more experienced. Using AI to explain and question code helps learning. Handing over the whole task skips it.',
    },
    {
      q: 'Why does AI make understanding code the expensive part?',
      a: 'Writing and understanding code used to happen together, so they cost about the same effort. AI made writing much cheaper and left understanding about where it was. The time of people who can judge whether a change is right becomes the limit on how fast a team can safely ship.',
    },
  ],
};
