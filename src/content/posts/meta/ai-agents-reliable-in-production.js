export const metadata = {
  seoTitle: 'AI Agents in Production: Reliability, Evaluation and Cost — Ka Lun Chan',
  dek:
    'Getting an agent to work in an afternoon is delightful. Getting it to run every morning without me, safely and within budget, is the same engineering I have done throughout my career, with a model in the middle.',
  related: [
    { to: '/writing/from-cisco-routers-to-ai-agents/', label: 'Part 1: From Cisco routers to AI agents' },
    { to: '/writing/why-i-still-write-code/', label: 'Part 2: Why I still write code' },
    { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'Scheduling AI work: Hermes, ChatGPT and Claude compared' },
    { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open-source VoIP taught me about distributed systems' },
    { to: '/projects/fedpath/', label: 'FedPath: transparent scoring, no AI on solicitations' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'What AI coding really costs, and who it costs most' },
    { to: '/writing/building-software-before-and-after-ai/', label: 'I used to build everything myself: building before and after AI' },
  ],
  keywords: [
    'AI agents in production',
    'AI agent reliability',
    'production readiness AI agent',
    'LLM retries idempotency',
    'AI agent cost management',
    'AI agent security least privilege',
    'multi-provider LLM architecture',
    'engineering leadership AI agents',
    'AI agent evaluation',
    'human in the loop AI agents',
    'agentic AI for business',
    'AI prototype vs production',
  ],
  about: [
    { '@type': 'Thing', name: 'Intelligent agent', sameAs: 'https://en.wikipedia.org/wiki/Intelligent_agent' },
    { '@type': 'Thing', name: 'Distributed computing', sameAs: 'https://en.wikipedia.org/wiki/Distributed_computing' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Idempotence', sameAs: 'https://en.wikipedia.org/wiki/Idempotence' },
    { '@type': 'Thing', name: 'Exponential backoff', sameAs: 'https://en.wikipedia.org/wiki/Exponential_backoff' },
    { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
    { '@type': 'SoftwareApplication', name: 'OmniRoute', url: 'https://github.com/diegosouzapw/OmniRoute' },
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/docs/en/overview' },
  ],
  faq: [
    {
      q: 'What is the difference between an AI agent demo and a production agent?',
      a: 'A demo shows a model can do the task once with a person watching. A production agent does it every day without one: it survives failed calls and missed schedules, never repeats an irreversible action, stays within a budget, touches only what it is allowed to, and produces results someone can check.',
    },
    {
      q: 'How do you make an AI agent reliable?',
      a: 'Treat it as a distributed system: timeouts and bounded retries with exponential backoff on every model and tool call, idempotent side effects keyed so a repeat changes nothing, detection of missed runs, durable state between runs, and observability of what ran, what it cost and whether the result passed a check.',
    },
    {
      q: 'How should an engineering leader decide whether agentic AI fits a problem?',
      a: 'Agentic AI fits when the task needs judgment over unstructured input, the steps vary, a wrong answer is cheap to catch or reverse, and the volume justifies the build and running cost. It fits poorly when the rules can be written down, decisions must be explained to a customer or regulator, mistakes are expensive and hard to detect, or volume is too low to repay the operational work. Often the best design is deterministic code plus a model for the one step that needs judgment, with a person approving what matters.',
    },
    {
      q: 'When should you not use AI in an agent?',
      a: 'For anything that does not need judgment. Fetching, filtering, de-duplicating and scoring by transparent rules are better as deterministic code you can test. FedPath, for example, scores contracts with visible rules and keeps solicitation documents off outside AI services.',
    },
  ],
};
