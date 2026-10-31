export const metadata = {
  seoTitle: 'Building an AI Job Search Agent With Hermes Agent — Ka Lun Chan',
  dek:
    'What can I build with a self-hosted AI agent that I could not easily do in a chat window? A job-search pipeline for engineering leadership roles is the experiment, Hermes Agent is the framework, and this is the plan before the results.',
  related: [
    { to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
    { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Why I build my own developer tools' },
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture' },
    { to: '/writing/connect-strava-to-claude-mcp/', label: 'Connecting Strava to Claude with MCP' },
    { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'The setup: connecting the Hermes VPS to VS Code' },
    { to: '/writing/omniroute-hermes-agent-docker/', label: 'OmniRoute: routing the agent’s model calls' },
    { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'Scheduling AI work: Hermes, ChatGPT and Claude compared' },
  ],
  keywords: [
    'Hermes Agent',
    'self-hosted AI agent',
    'AI job search agent',
    'autonomous agent job search',
    'Hermes Agent VPS',
    'AI agent architecture tools state memory scheduling',
    'Greenhouse Lever Ashby job board API',
    'AI agents vs ChatGPT Claude',
    'engineering leadership job search automation',
    'learning AI agents by building',
  ],
  about: [
    { '@type': 'Thing', name: 'Intelligent agent', sameAs: 'https://en.wikipedia.org/wiki/Intelligent_agent' },
    { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'OpenClaw', url: 'https://github.com/openclaw/openclaw' },
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.com/claude-code' },
    { '@type': 'Thing', name: 'Greenhouse Job Board API', url: 'https://developers.greenhouse.io/job-board.html' },
    { '@type': 'Thing', name: 'Cron', sameAs: 'https://en.wikipedia.org/wiki/Cron' },
    { '@type': 'Thing', name: 'Telegram', sameAs: 'https://en.wikipedia.org/wiki/Telegram_(software)' },
  ],
  faq: [
    {
      q: 'What is Hermes Agent?',
      a: 'Hermes Agent is an open-source, self-hosted AI agent from Nous Research. It is built around skills, small instruction files it loads when a task needs them and can write for itself, a scheduler for one-shot or recurring jobs, and a gateway that connects it to Telegram and other messaging platforms. It runs on a small VPS.',
    },
    {
      q: 'What can a self-hosted agent do that ChatGPT or Claude cannot?',
      a: 'Mostly nothing in terms of capability; hosted assistants have tools and integrations too. The difference is control: the agent, its state and credentials live on a server you administer, it runs on a schedule without you, its integrations are code you can read and change, and the workflow is a defined process with logs rather than a conversation.',
    },
    {
      q: 'Why filter job postings before sending them to a language model?',
      a: 'Because the model is the most expensive, slowest and least predictable step. Normalizing, de-duplicating and filtering on title, level, location and published pay are deterministic and testable, and they cut the list to the few postings worth a model’s judgment, which also keeps the cost per run down.',
    },
    {
      q: 'Is the job-search agent built?',
      a: 'No. Hermes Agent is deployed on a Hostinger VPS. The job-search pipeline is a planned experiment, and the post lists the eight steps in order, from confirming the agent can research openings at all to measuring matching accuracy and cost over a few weeks. Applications and recruiter contact stay approval-gated.',
    },
  ],
};
