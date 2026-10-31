export const metadata = {
  seoTitle: 'Vibe Coding vs. Agentic Engineering: What Changes for Engineering Teams — Ka Lun Chan',
  dek:
    'AI made writing code cheaper and faster. It didn’t make bad engineering decisions any cheaper. It just implements them sooner.',
  related: [
    { to: '/writing/loop-engineering-feedback-loops/', label: 'Loop engineering: the feedback loop matters more than the code' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review doesn’t start with a pull request' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/generalist-advantage-in-the-ai-era/', label: 'Why being a generalist is an advantage in the AI era' },
    { to: '/writing/recognizing-ai-generated-code/', label: 'I can recognize AI-generated code. Here’s why.' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'vibe coding vs agentic engineering',
    'agentic engineering',
    'vibe coding',
    'AI-assisted software development',
    'AI coding agents',
    'AI code review',
    'engineering leadership in the AI era',
    'AI software development workflow',
    'AI-generated technical debt',
  ],
  about: [
    { '@type': 'Thing', name: 'Vibe coding', sameAs: 'https://en.wikipedia.org/wiki/Vibe_coding' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
  ],
  mentions: [
    { '@type': 'Person', name: 'Andrej Karpathy', sameAs: 'https://en.wikipedia.org/wiki/Andrej_Karpathy' },
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/' },
    { '@type': 'SoftwareApplication', name: 'Codex', url: 'https://openai.com/codex/' },
    { '@type': 'Organization', name: 'DORA', url: 'https://dora.dev/' },
  ],
  faq: [
    {
      q: 'What is the difference between vibe coding and agentic engineering?',
      a: 'Vibe coding is a loop of prompting, running the result and prompting again, judged mostly by whether it seems to work. Agentic engineering uses AI agents inside a structured lifecycle, from requirements and architecture through testing, review, acceptance and monitoring, with engineers accountable for the decisions at each stage.',
    },
    {
      q: 'Is vibe coding bad?',
      a: 'No. It is a fast way to prototype, test an idea, build a personal tool or let someone who doesn’t code build something useful. The risk starts when vibe-coded software goes to production, handles customer data or has to be maintained by a team, without anyone understanding how it works.',
    },
    {
      q: 'Does using multiple AI agents mean you are doing agentic engineering?',
      a: 'No. Agentic engineering is defined by the process around the agents: written requirements, an agreed design, tests tied to risk, review, real user acceptance and monitoring. Five agents prompting and rewriting each other without that structure is still vibe coding, only more expensive.',
    },
    {
      q: 'How should engineering leaders measure productivity with AI coding agents?',
      a: 'Measure delivery outcomes at the team level: lead time for changes, change failure rate, rework rate, escaped defects, production incidents and cost per successfully delivered feature. Lines of code, prompt counts and pull request volume measure activity, and none of these should be used to rank individual developers.',
    },
  ],
};
