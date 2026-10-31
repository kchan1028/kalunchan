export const metadata = {
  seoTitle: 'OmniRoute + Hermes Agent: AI Model Routing in Docker — Ka Lun Chan',
  dek:
    'Third post in my self-hosted agent experiment: an AI model router between Hermes Agent and the providers it calls. What OmniRoute does, the Docker steps on a Hostinger VPS, how a request travels, and the leadership question underneath: do you need the extra box?',
  related: [
    { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'Part one: connecting the Hermes VPS to VS Code' },
    { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Part two: designing the job-search agent' },
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture' },
    { to: '/writing/api-architecture-lessons/', label: 'API architecture lessons from real systems' },
    { to: '/writing/network-security-before-devsecops/', label: 'Where the least-privilege habit comes from' },
  ],
  keywords: [
    'what is OmniRoute',
    'OmniRoute tutorial',
    'Hermes Agent OmniRoute setup',
    'Hermes Agent Docker configuration',
    'self-hosted AI model router',
    'AI model gateway vs AI agent',
    'Hostinger Hermes Agent setup',
    'OpenAI-compatible endpoint Docker',
    'Docker network between containers localhost',
    'AI gateway fallback cost tracking',
  ],
  about: [
    { '@type': 'SoftwareApplication', name: 'OmniRoute', url: 'https://github.com/diegosouzapw/OmniRoute' },
    { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'OmniRoute on Docker Hub', url: 'https://hub.docker.com/r/diegosouzapw/omniroute' },
    { '@type': 'Thing', name: 'Hermes Agent model providers', url: 'https://hermes-agent.nousresearch.com/docs/integrations/providers' },
    { '@type': 'Thing', name: 'Docker', sameAs: 'https://en.wikipedia.org/wiki/Docker_(software)' },
    { '@type': 'Thing', name: 'API gateway', sameAs: 'https://en.wikipedia.org/wiki/API_management' },
  ],
  faq: [
    {
      q: 'What is OmniRoute?',
      a: 'OmniRoute is an open-source, MIT-licensed AI gateway you run yourself. It exposes one OpenAI-compatible endpoint on port 20128 and routes each request to a provider and model you have connected in its dashboard, with quota-aware fallback, retries, usage and cost tracking, and per-key spend limits. Provider keys are stored encrypted on its data volume.',
    },
    {
      q: 'How does Hermes Agent connect to OmniRoute?',
      a: 'As a custom OpenAI-compatible endpoint: in Hermes’s config.yaml set model.provider to custom, model.base_url to the OmniRoute address ending in /v1, and the gateway key through key_env so it lives in the .env file. When both run in Docker on one host, put them on a shared Docker network and use the container name as the host, because localhost inside a container means that container.',
    },
    {
      q: 'Do I need an AI model router for an agent?',
      a: 'Not if the agent calls one provider and will for the foreseeable future; the router then adds a container, a second key store and a failure domain without hiding anything that varies. It earns its place when you use several providers, want fallback when one fails, or need one ledger of usage and cost across jobs.',
    },
    {
      q: 'What is the difference between routing a model request and orchestrating an agent?',
      a: 'The router owns one step: given a chat-completion request, pick a provider and model and return a response, retrying on failure. The agent runtime owns the loop around it: what to ask, which tools to run on the answer, what to remember, when to stop and how to report. Most of an agent’s quality comes from the loop, not the routing.',
    },
  ],
};
