export const metadata = {
  seoTitle: 'Claude Code Environments vs This Computer',
  dek:
    'A Claude Code cloud environment runs your session on a remote VM instead of your machine. What it is, what follows you there, and when it beats running on this computer.',
  related: [
    { to: '/writing/loop-engineering-feedback-loops/', label: 'Loop engineering: the feedback loop matters more than the code' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'AI coding can cost more than a human engineer' },
    { to: '/writing/ai-generated-code-verification-depth/', label: 'AI can write the code. But can we verify it?' },
    { to: '/writing/the-architecture-you-dont-build/', label: 'The architecture you don’t build' },
    { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'Scheduling AI work: Hermes, ChatGPT and Claude' },
  ],
  keywords: [
    'Claude Code environments',
    'Claude Code cloud environment',
    'Claude Code cloud vs local',
    'Claude Code cloud sessions',
    'Claude Code setup script',
    'Claude Code cost',
  ],
  about: [
    { '@type': 'Thing', name: 'AI coding agents' },
    { '@type': 'Thing', name: 'Execution environment' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/docs/en/claude-code-on-the-web' },
  ],
  faq: [
    {
      q: 'What is a Claude Code cloud environment?',
      a: 'A saved configuration for network access, environment variables, network secrets and a setup script. Cloud sessions start from it and run on a remote VM, managed by Anthropic by default, instead of your machine.',
    },
    {
      q: 'Why use a cloud environment instead of this computer?',
      a: 'When the work should keep running with your laptop closed, when you want several tasks running without sharing one machine, or when you want Claude away from the credentials on your computer.',
    },
    {
      q: 'When should Claude Code stay on this computer?',
      a: 'When the work depends on something only your machine has, such as gitignored settings, a local database, a VPN or a signed-in browser, or when it needs macOS or more resources than the VM provides.',
    },
    {
      q: 'Do Claude Code cloud sessions cost extra?',
      a: 'Anthropic lists no separate charge for the cloud VM. Sessions count toward your plan’s usage limits, shared with your other Claude usage.',
    },
  ],
};
