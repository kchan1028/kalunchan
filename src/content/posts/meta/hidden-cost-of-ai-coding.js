export const metadata = {
  seoTitle: 'The Hidden Cost of AI Coding: Why Experience Still Matters',
  dek:
    'AI can make software much cheaper to build. Used badly, it can cost more than doing the work by hand. The difference is the experience and judgment of the person directing it.',
  related: [
    { to: '/writing/building-software-before-and-after-ai/', label: 'How I build software now that AI is in the loop' },
    { to: '/writing/ai-agents-reliable-in-production/', label: 'What it takes to make AI agents reliable in production' },
    { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  image: { path: '/images/writing/hidden-cost-of-ai-coding-og.jpg', width: 1200, height: 630, alt: 'AI coding can cost more than a human engineer. Used badly: prompt, generate, review, rewrite, repeat, and the bill and the hours keep growing. Used well: define, plan, generate, verify, deliver, and the judgment is still human.' },
  keywords: [
    'AI coding costs',
    'AI token usage',
    'AI coding productivity',
    'AI coding vs human developers',
    'AI engineering costs',
    'AI agent cost optimization',
    'cost per accepted change',
    'Claude Code cost per developer',
    'junior developers using AI',
    'AI coding subscription vs API pricing',
  ],
  about: [
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/' },
    { '@type': 'Organization', name: 'Anthropic', sameAs: 'https://en.wikipedia.org/wiki/Anthropic' },
    { '@type': 'Organization', name: 'OpenAI', sameAs: 'https://en.wikipedia.org/wiki/OpenAI' },
    { '@type': 'Thing', name: 'Mentorship', sameAs: 'https://en.wikipedia.org/wiki/Mentorship' },
  ],
  faq: [
    {
      q: 'Is AI coding cheaper than a human developer?',
      a: 'Often, but not always. An experienced engineer using AI can finish work in a fraction of the time. A developer who can’t judge the output can spend days in loops of prompts, reviews and rewrites, and that time plus the senior review it needs can cost more than an experienced engineer working without AI.',
    },
    {
      q: 'How much does AI coding cost per developer?',
      a: 'Anthropic reports that across enterprise deployments, Claude Code averages around $13 per developer per active day and $150 to $250 per developer per month, with 90% of users under $30 per active day. Subscription plans charge a flat monthly price with usage limits instead.',
    },
    {
      q: 'Why do AI coding agents use so many tokens?',
      a: 'An agent sends the conversation, including files and tool results, with every request. Long sessions, repeated explanations and reviews, rewrites, and returning after the prompt cache has expired all multiply the tokens processed for the same piece of work.',
    },
    {
      q: 'How can engineering leaders reduce AI coding costs?',
      a: 'Keep tasks small, write acceptance criteria before prompting, set retry limits, match the model to the task, clear sessions between unrelated tasks, monitor usage, pair junior developers with mentors, and measure cost per accepted change instead of lines of code or prompt counts.',
    },
  ],
};
