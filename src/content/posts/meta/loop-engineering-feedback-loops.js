export const metadata = {
  seoTitle: 'What Is Loop Engineering? AI Agents and Feedback Loops — Ka Lun Chan',
  dek:
    'AI has cut the cost of writing code. It hasn’t cut the cost of being wrong. That cost is set by how quickly and honestly we find out.',
  related: [
    { to: '/writing/vibe-coding-vs-agentic-engineering/', label: 'Vibe coding vs. agentic engineering' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review doesn’t start with a pull request' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/the-architecture-you-dont-build/', label: 'The architecture you don’t build' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'what is loop engineering',
    'loop engineering',
    'loop engineering vs agentic engineering',
    'AI software development feedback loops',
    'Claude Code workflow',
    'Codex development workflow',
    'AI coding agent best practices',
    'continuous feedback in software engineering',
  ],
  about: [
    { '@type': 'Thing', name: 'Feedback loop', sameAs: 'https://en.wikipedia.org/wiki/Feedback' },
    { '@type': 'Thing', name: 'Continuous integration', sameAs: 'https://en.wikipedia.org/wiki/Continuous_integration' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/' },
    { '@type': 'SoftwareApplication', name: 'Codex', url: 'https://openai.com/codex/' },
    { '@type': 'Organization', name: 'DORA', url: 'https://dora.dev/' },
  ],
  faq: [
    {
      q: 'What is loop engineering?',
      a: 'Loop engineering is a feedback-driven way to build software: understand the problem, plan, build a small change, test it, review it, learn from the result, and repeat. With AI coding agents, it means designing the checks an agent runs against, so each iteration is judged by evidence that the outcome is right. It is a practical framework, not a formal methodology.',
    },
    {
      q: 'What is the difference between loop engineering and agentic engineering?',
      a: 'Agentic engineering is delegating implementation work to AI agents inside a structured lifecycle. Loop engineering is the discipline of designing the feedback those agents work against: acceptance criteria, independent tests, review points, iteration limits and production signals. Loop engineering is what makes agentic engineering reliable.',
    },
    {
      q: 'Do more AI iterations produce better code?',
      a: 'No. An agent that keeps iterating against weak tests gets better at passing those tests, not at solving the problem. The quality of the feedback decides whether iterations move toward the right outcome, so improving the checks is usually worth more than adding attempts.',
    },
    {
      q: 'How do you stop an AI coding agent from looping forever?',
      a: 'Give it an iteration limit (for example, three attempts at the same failure), a defined set of files it may change, tests it is not allowed to edit, and a rule to stop and report when it hits the limit. Repeated failure usually means the plan or the requirement is wrong, which is a decision for a person.',
    },
    {
      q: 'How should engineering leaders measure productivity with AI agents?',
      a: 'Measure outcomes at the team level: lead time to useful functionality, change failure rate, time to recover from failures, escaped defects, rework and customer outcomes. Lines of code, pull request counts and agent iterations measure activity and are easy to inflate with AI.',
    },
  ],
};
