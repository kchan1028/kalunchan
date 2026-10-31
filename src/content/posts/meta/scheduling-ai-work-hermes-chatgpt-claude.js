export const metadata = {
  seoTitle: 'Scheduling AI Work: Hermes vs ChatGPT vs Claude — Ka Lun Chan',
  dek:
    'The moment an AI task runs on a timer instead of in a conversation, every assumption about working with an assistant stops holding. A content research assistant for Useful Little Tools is my test case, and five ways to schedule it are the comparison.',
  related: [
    { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Building my own AI job search agent with Hermes' },
    { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'Connecting the Hermes VPS to VS Code' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/#guardrails', label: 'Don’t hand AI the production keys' },
    { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Useful Little Tools: why I build my own tools' },
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'Every box has a bill' },
    { to: '/writing/ai-agents-reliable-in-production/', label: 'Making AI agents reliable in production' },
  ],
  keywords: [
    'scheduling AI tasks',
    'ChatGPT scheduled tasks limits',
    'Claude Cowork scheduled tasks',
    'Claude Code routines',
    'Claude Code cron headless',
    'Hermes Agent cron',
    'self-hosted AI agent scheduling',
    'AI subscription vs API billing',
    'AI automation ownership credentials logs',
    'content research assistant AI',
  ],
  about: [
    { '@type': 'Thing', name: 'Job scheduler', sameAs: 'https://en.wikipedia.org/wiki/Job_scheduler' },
    { '@type': 'Thing', name: 'AI agent automation' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
    { '@type': 'Thing', name: 'Scheduled tasks in ChatGPT', url: 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt' },
    { '@type': 'Thing', name: 'Schedule recurring tasks in Claude Cowork', url: 'https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork' },
    { '@type': 'Thing', name: 'Claude Code routines', url: 'https://code.claude.com/docs/en/routines' },
    { '@type': 'Thing', name: 'Claude Code scheduled tasks', url: 'https://code.claude.com/docs/en/scheduled-tasks' },
    { '@type': 'Thing', name: 'Cron', sameAs: 'https://en.wikipedia.org/wiki/Cron' },
  ],
  faq: [
    {
      q: 'What changes when an AI task runs on a schedule instead of in a chat?',
      a: 'Nobody is there to supply context, catch mistakes or decide the next step. The task has to carry self-contained instructions, read its data from files or a database, hold its credentials somewhere it can reach, fail in a way someone notices, and never take an action a person would have stopped. Scheduling turns an assistant into a system with an owner for execution, context, credentials, uptime, logs and recovery.',
    },
    {
      q: 'Does a ChatGPT or Claude subscription cover scheduled runs?',
      a: 'ChatGPT scheduled tasks are part of the plan within active-task caps (3 on Free and Go, 5 on Plus, 10 on Business and Edu, 15 on Pro and Enterprise). Claude Cowork tasks run under a paid plan. Claude Code routines draw down subscription usage, and once the limit is hit, runs continue on metered overage only if usage credits are on; otherwise they are rejected until the window resets. A headless Claude Code run bills the API whenever an API key or auth token is in its environment.',
    },
    {
      q: 'When is a script enough and when does the model add value?',
      a: 'Fetching articles, loading stored ideas, checking for duplicates and sending a message are deterministic and should be scripts you can test. The model earns its place where interpretation or judgment is needed: turning messy reader questions into candidate ideas, and ranking them with reasons for a person to review.',
    },
    {
      q: 'What is the difference between Hermes using Claude as a model and Hermes running Claude Code?',
      a: 'Using Claude as the model is an ordinary API call from Hermes’s own agent loop, billed to the configured key or login. Running Claude Code is a shell command the agent can execute like any other, which starts a separate coding agent with its own permissions and billing. The first is how a research assistant thinks; the second is for code.',
    },
  ],
};
