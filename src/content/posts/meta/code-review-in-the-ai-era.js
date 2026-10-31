export const metadata = {
  seoTitle: 'Should AI Do Code Reviews? Rethinking Code Review in the AI Era — Ka Lun Chan',
  dek:
    'AI can review a pull request in seconds. That doesn’t tell me whether we built the right thing, whether it works for the customer, or whether we’re ready to put it in production.',
  related: [
    { to: '/writing/recognizing-ai-generated-code/', label: 'I can recognize AI-generated code. Here’s why.' },
    { to: '/writing/ai-generated-code-verification-depth/', label: 'AI can write the code. But can we verify it?' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/ai-learning-curve-future-of-work/', label: 'AI is great, but not everyone is ready to use it yet' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'AI code review',
    'should AI do code reviews',
    'code review process',
    'risk-based code review',
    'reviewing AI-generated code',
    'engineering leadership AI',
    'end-to-end testing',
    'change failure rate',
  ],
  about: [
    { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Software testing', sameAs: 'https://en.wikipedia.org/wiki/Software_testing' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'DORA', url: 'https://dora.dev/' },
  ],
  faq: [
    {
      q: 'Can AI replace human code review?',
      a: 'For routine checks, mostly yes: style, common bugs, missing error handling, known security patterns and test gaps. It can’t decide whether the team built the right thing, whether the design fits the business, or who owns the risk if the change fails. Those still need a person, and the amount of human review should depend on the risk of the change.',
    },
    {
      q: 'Does every pull request need a human reviewer?',
      a: 'Not at the same depth. A documentation or copy change can rely on automated checks. Changes to authentication, permissions, billing, database migrations, critical workflows and high-risk infrastructure should always get a human review. Team maturity and regulatory obligations can raise that bar.',
    },
    {
      q: 'When should code review start?',
      a: 'Before any code is written. Reviewing the problem, acceptance criteria, design and risks catches a wrong approach when it is cheap to change. Review then continues through testing, release and production, where you find out whether the change actually worked for users.',
    },
    {
      q: 'How do you measure whether a code review process works?',
      a: 'Look at review turnaround time, change failure rate, escaped defects and customer-reported issues together. Lines of code reviewed and the number of approvals measure activity, not quality.',
    },
  ],
};
