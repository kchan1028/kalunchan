export const metadata = {
  seoTitle: 'When Should Engineering Teams Add Process? Balancing Trust, Speed, and Accountability',
  dek:
    'Process isn’t good or bad on its own. The useful questions are when to add it, what problem it solves, whether it builds trust, and when it has become overhead nobody needs.',
  related: [
    { to: '/writing/hidden-cost-of-too-many-meetings/', label: 'The hidden cost of too many meetings' },
    { to: '/writing/speed-vs-quality-software-engineering/', label: 'Match the process to the risk of the change' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review starts with the plan' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
    { to: '/writing/building-public-sector-applications/', label: 'What public-sector applications taught me' },
    { to: '/writing/when-everything-is-a-priority/', label: 'When everything is a priority, nothing is' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'when to introduce process',
    'engineering process vs bureaucracy',
    'balance process and productivity',
    'building trust in engineering teams',
    'engineering leadership accountability',
    'process overhead in software development',
    'scaling engineering teams',
    'engineering management best practices',
    'team autonomy',
    'change approval process',
  ],
  about: [
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
    { '@type': 'Thing', name: 'Institutional trust', sameAs: 'https://en.wikipedia.org/wiki/Institutional_trust_(social_sciences)' },
    { '@type': 'Thing', name: 'Trust', sameAs: 'https://en.wikipedia.org/wiki/Trust_(social_science)' },
    { '@type': 'Thing', name: 'Bureaucracy', sameAs: 'https://en.wikipedia.org/wiki/Bureaucracy' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Brooks’s law', sameAs: 'https://en.wikipedia.org/wiki/Brooks%27s_law' },
    { '@type': 'Thing', name: 'Separation of duties', sameAs: 'https://en.wikipedia.org/wiki/Separation_of_duties' },
    { '@type': 'Thing', name: 'Change advisory board', sameAs: 'https://en.wikipedia.org/wiki/Change-advisory_board' },
    { '@type': 'Organization', name: 'DORA (DevOps Research and Assessment)', url: 'https://dora.dev/' },
  ],
  // Emitted as JSON-LD citations (site.js).
  sources: [
    { label: 'DORA: Streamlining change approval', url: 'https://dora.dev/capabilities/streamlining-change-approval/' },
  ],
  faq: [
    {
      q: 'When should a company introduce process?',
      a: 'Introduce process when a specific problem keeps recurring and costs more than the process would: unclear ownership, missed handoffs, unpredictable delivery, repeated quality failures, or a security or regulatory requirement. Growth makes those problems more likely, but headcount alone is not a reason to add process.',
    },
    {
      q: 'What is the difference between engineering process and bureaucracy?',
      a: 'A useful engineering process is tied to a real risk, sized to that risk, owned by someone, and reviewed to see whether it still works. It becomes bureaucracy when it costs more than the risk it reduces, when nobody can say what problem it solves, or when people satisfy it on paper without changing how they work.',
    },
    {
      q: 'Can process build trust in an engineering team?',
      a: 'Yes. Consistent delivery updates, early risk reporting, clear API contracts, code review and shared standards give people a reason to trust colleagues they do not know well. Process cannot create trust on its own, though. If leaders punish bad news or senior people skip the rules, the process loses credibility.',
    },
    {
      q: 'How do you balance process and productivity?',
      a: 'Start from the recurring problem and its root cause, use the smallest control that works, match it to the risk, and automate repetitive checks. Treat meetings, approvals and reports as a budget of engineering time, measure whether each process still pays for itself, and simplify or retire the ones that do not.',
    },
    {
      q: 'Does more autonomy mean less accountability?',
      a: 'It shouldn’t. Autonomy changes how closely leaders supervise the steps. A trusted team makes more of its own decisions and still answers for delivery, reliability and raising risks early. Some controls, such as peer review on production changes and separation of duties in regulated work, stay regardless of trust.',
    },
  ],
};
