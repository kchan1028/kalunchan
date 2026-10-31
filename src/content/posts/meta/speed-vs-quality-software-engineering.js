export const metadata = {
  seoTitle: 'Speed vs. Quality in Software Engineering — Ka Lun Chan',
  dek:
    'Speed to market matters. So does engineering quality. The hard part is knowing which one a given piece of work needs more, and making that tradeoff without making the next release harder.',
  related: [
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Why smaller stories and pull requests ship faster' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'What AI coding really costs' },
    { to: '/writing/loop-engineering-feedback-loops/', label: 'Loop engineering: faster, more honest feedback loops' },
    { to: '/writing/should-it-be-a-microservice/', label: 'Should it be a microservice?' },
    { to: '/writing/when-to-add-engineering-process/', label: 'When process helps, and when it becomes the problem' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'speed vs quality in software engineering',
    'speed to market',
    'engineering leadership',
    'software delivery speed',
    'technical debt',
    'software quality',
    'risk-based engineering process',
    'reduce scope before quality',
    'sustainable development pace',
    'AI-assisted development',
  ],
  about: [
    { '@type': 'Thing', name: 'Software quality', sameAs: 'https://en.wikipedia.org/wiki/Software_quality' },
    { '@type': 'Thing', name: 'Time to market', sameAs: 'https://en.wikipedia.org/wiki/Time_to_market' },
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Technical debt', sameAs: 'https://en.wikipedia.org/wiki/Technical_debt' },
    { '@type': 'Thing', name: 'Continuous delivery', sameAs: 'https://en.wikipedia.org/wiki/Continuous_delivery' },
  ],
  faq: [
    {
      q: 'How do you balance speed and quality in software engineering?',
      a: 'Start with the business impact of the work, keep a minimum quality bar for anything in production, and match testing and review to the risk of each change. When a deadline is at risk, cut or simplify scope before cutting quality, and make any shortcut a documented decision with an owner for the follow-up.',
    },
    {
      q: 'Is speed to market more important than quality?',
      a: 'Neither wins every time. Speed matters because software creates value only once customers can use it, and early releases bring feedback. Quality matters because shipping fast only helps when the release works. The right balance depends on what a failure would cost and how easily the change can be undone.',
    },
    {
      q: 'When is technical debt acceptable?',
      a: 'Technical debt is acceptable when it is a deliberate choice: the team knows what it is borrowing, why, and how it will pay it back, and leadership understands the tradeoff. It becomes a problem when temporary shortcuts turn into permanent architecture and nobody schedules the time to fix them.',
    },
    {
      q: 'Do smaller releases improve software quality?',
      a: 'Usually, yes. Small releases mean smaller pull requests that get read properly, problems that are easier to trace to one change, simpler rollback, and earlier customer feedback. In most situations they are both faster and safer than one large release every few months.',
    },
    {
      q: 'Does AI make the speed vs. quality tradeoff harder?',
      a: 'It raises the stakes. AI has made code much cheaper to generate, but not cheaper to understand, validate or maintain, so teams can create technical debt faster than before. AI helps most when it shortens feedback loops, improves testing and removes repetitive work, and engineering judgment still decides what ships.',
    },
  ],
};
