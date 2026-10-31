export const sources = [
  { label: 'Stanford Digital Economy Lab: Canaries in the Coal Mine? Six facts about the recent employment effects of AI (revised August update)', url: 'https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/' },
  { label: 'World Economic Forum: Future of Jobs Report (press release)', url: 'https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/' },
  { label: 'METR: Measuring the impact of early AI tools on experienced open-source developer productivity (arXiv)', url: 'https://arxiv.org/abs/2507.09089' },
  { label: 'Anthropic: How AI assistance impacts the formation of coding skills', url: 'https://www.anthropic.com/research/AI-assistance-coding-skills' },
  { label: 'DORA: State of AI-assisted Software Development report', url: 'https://dora.dev/research/2025/dora-report/' },
  { label: 'Stack Overflow Developer Survey: AI section (previous year)', url: 'https://survey.stackoverflow.co/2025/ai' },
  { label: 'Stack Overflow Developer Survey: AI section (latest)', url: 'https://survey.stackoverflow.co/2026/ai' },
  { label: 'Nielsen Norman Group: Synthetic users, if, when, and how to use AI-generated research', url: 'https://www.nngroup.com/articles/synthetic-users/' },
];

export const metadata = {
  seoTitle: 'AI Is Great, But Not Everyone Is Ready to Use It Yet — Ka Lun Chan',
  dek:
    'AI makes it easier to produce work. Experience and judgment still decide whether that work is worth anything, and like every technology I’ve learned, AI has a learning curve.',
  related: [
    { to: '/writing/generalist-advantage-in-the-ai-era/', label: 'Why being a generalist is an advantage in the AI era' },
    { to: '/writing/recognizing-ai-generated-code/', label: 'I can recognize AI-generated code. Here’s why.' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'How I design screens now, with AI in the loop' },
    { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring' },
    { to: '/writing/from-aol-to-ai-lowering-the-barrier/', label: 'From AOL to AI: what happens when the knowledge barrier falls' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'AI adoption',
    'future of work',
    'AI learning curve',
    'engineering leadership',
    'AI software development',
    'AI UX design',
    'AI workforce transformation',
    'AI and junior engineers',
    'AI-generated tests',
  ],
  about: [
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Future of work', sameAs: 'https://en.wikipedia.org/wiki/Future_of_work' },
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Stanford Digital Economy Lab', url: 'https://digitaleconomy.stanford.edu/' },
    { '@type': 'Organization', name: 'World Economic Forum', sameAs: 'https://en.wikipedia.org/wiki/World_Economic_Forum' },
    { '@type': 'Organization', name: 'METR', url: 'https://metr.org/' },
    { '@type': 'Organization', name: 'Anthropic', sameAs: 'https://en.wikipedia.org/wiki/Anthropic' },
    { '@type': 'Organization', name: 'DORA', url: 'https://dora.dev/' },
    { '@type': 'Organization', name: 'Nielsen Norman Group', sameAs: 'https://en.wikipedia.org/wiki/Nielsen_Norman_Group' },
  ],
  sources,
  faq: [
    {
      q: 'Will AI replace jobs?',
      a: 'AI replaces tasks first. Some jobs are mostly made of tasks AI does well, and those will shrink. Most jobs are a mix, so they change shape: less time producing drafts, more time judging, testing and deciding. Stanford research on payroll data finds the clearest effect so far is fewer hires of early-career workers in occupations where AI substitutes for the work.',
    },
    {
      q: 'Why don’t all employees get more productive with AI?',
      a: 'Because using AI well is a skill. Someone who can judge the output gets faster. Someone who can’t spends time prompting, reviewing and redoing work that looks right but isn’t. A randomized study by METR found experienced developers took about 19% longer on real tasks with AI tools, while believing they were faster.',
    },
    {
      q: 'If AI writes both the code and the tests, can you trust the tests?',
      a: 'Not on their own. If the AI misunderstood the requirement, it can write code and tests that share the same wrong assumption, and every test passes. Someone who understands the requirement needs to write or review the key test cases, especially the edge cases and failure paths.',
    },
    {
      q: 'How do junior engineers learn when AI writes the code?',
      a: 'They learn when they have to understand what the AI wrote: asking it to explain, debugging without it, and having their work reviewed by someone experienced. An Anthropic study found that people who used AI to understand code kept much more of what they learned than people who only delegated the code to it.',
    },
    {
      q: 'What should engineering leaders do when adopting AI?',
      a: 'Train people instead of only buying subscriptions, set review and quality standards for AI output, decide where a human must sign off, measure outcomes rather than AI usage, keep sensitive data out of tools that aren’t approved for it, keep hiring and developing junior engineers, and let teams experiment within a cost budget.',
    },
  ],
};
