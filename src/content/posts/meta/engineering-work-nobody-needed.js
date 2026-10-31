export const metadata = {
  seoTitle: 'The Real Cost of Building Features Nobody Needs — Ka Lun Chan',
  dek:
    'A team can execute perfectly and still deliver something that didn’t deserve the investment. The build is only the first cost: work nobody needed keeps consuming maintenance, support and capacity long after launch.',
  related: [
    { to: '/writing/when-everything-is-a-priority/', label: 'Leading engineering through constant change' },
    { to: '/writing/should-it-be-a-microservice/', label: 'When a microservice is really a distributed monolith' },
    { to: '/leadership/#ambiguity', label: 'Turning ambiguity into executable work' },
  ],
  keywords: [
    'building features nobody needs',
    'cost of unnecessary features',
    'how to decide what to build',
    'engineering opportunity cost',
    'how to push back on feature requests',
    'validate customer demand before building',
    'feature bloat',
    'engineering capacity',
    'AI and engineering prioritization',
    'engineering leadership',
  ],
  faq: [
    {
      q: 'What does unnecessary engineering work cost?',
      a: 'More than the build. A feature nobody needed still has to be maintained, upgraded, supported and monitored for as long as it exists, and it makes nearby changes slower and riskier. The largest cost is the more important work the team didn’t do instead.',
    },
    {
      q: 'How do you avoid building features nobody needs?',
      a: 'Separate the request from the proposed solution and the underlying need, ask what evidence shows the problem matters, test the need in the smallest way possible, and agree before launch what result would make you continue, change direction or stop.',
    },
    {
      q: 'How should engineers push back on a feature request?',
      a: 'Ask about the outcome before the solution, with questions such as “What outcome are we trying to change?” and “Could we test this before committing a team?”, and offer a smaller first step instead of a refusal. Engineering leaders need to make those questions safe to ask.',
    },
    {
      q: 'Is a failed experiment wasted engineering work?',
      a: 'Not if it had a clear hypothesis, success criteria and an end date. An experiment that comes back “no” has done its job. The waste comes from experiments nobody can judge, or ones that become permanent features without a decision.',
    },
    {
      q: 'Does AI make deciding what to build more important?',
      a: 'Yes. AI makes code cheaper to produce, but maintenance, support and operational complexity don’t shrink with it. As building gets faster, deciding what deserves to be built has a larger effect on the outcome.',
    },
  ],
};
