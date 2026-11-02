export const metadata = {
  seoTitle: 'Claude Environments: When They’re Worth the Cost',
  dek:
    'Claude doesn’t have one product called an environment. I separate the options, compare what each one costs, and explain how I decide whether a task needs more than chat.',
  related: [
    { to: '/writing/loop-engineering-feedback-loops/', label: 'Loop engineering: the feedback loop matters more than the code' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'AI coding can cost more than a human engineer' },
    { to: '/writing/ai-generated-code-verification-depth/', label: 'AI can write the code. But can we verify it?' },
    { to: '/writing/the-architecture-you-dont-build/', label: 'The architecture you don’t build' },
    { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'Scheduling AI work: Hermes, ChatGPT and Claude' },
  ],
  keywords: [
    'Claude environments',
    'Claude Code cloud environment',
    'Claude Cowork vs Claude Code',
    'Claude Code cost',
    'Claude Projects vs Cowork',
    'Claude Code vs Codex environments',
  ],
  about: [
    { '@type': 'Thing', name: 'AI coding agents' },
    { '@type': 'Thing', name: 'Execution environment' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/docs/en/claude-code-on-the-web' },
    { '@type': 'SoftwareApplication', name: 'Claude Cowork', url: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork' },
    { '@type': 'Thing', name: 'Claude Projects', url: 'https://support.claude.com/en/articles/9517075-what-are-projects' },
    { '@type': 'SoftwareApplication', name: 'OpenAI Codex', url: 'https://learn.chatgpt.com/docs/environments/modes' },
    { '@type': 'SoftwareApplication', name: 'ChatGPT Work', url: 'https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex' },
  ],
  faq: [
    {
      q: 'Is “Claude environment” an official product?',
      a: 'No. Claude Code has cloud environments and Local, Cloud, SSH and WSL options. Cowork and claude.ai use other terms, and “project” means different things across them.',
    },
    {
      q: 'Do Claude Code cloud sessions cost extra?',
      a: 'Anthropic lists no separate charge for the cloud VM. Sessions count toward your plan’s usage limits, shared with your other Claude usage.',
    },
    {
      q: 'When is ordinary chat enough?',
      a: 'When the work ends in text you can judge by reading, such as brainstorming, explaining a concept or drafting a standalone article.',
    },
  ],
};
