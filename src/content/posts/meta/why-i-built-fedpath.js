export const metadata = {
  seoTitle: 'Why I Built FedPath: Agentic Engineering on a Real Product',
  dek:
    'FedPath helps small businesses decide which federal contracts are worth bidding on. I built it to learn agentic engineering, and I ended up keeping AI out of most of the product.',
  related: [
    { to: '/projects/fedpath/', label: 'FedPath case study: from SAM.gov notice to bid decision' },
    { to: '/writing/ai-agents-reliable-in-production/', label: 'AI agents are easy to demonstrate. Making them reliable is hard.' },
    { to: '/writing/vibe-coding-vs-agentic-engineering/', label: 'Vibe coding vs. agentic engineering' },
    { to: '/writing/building-public-sector-applications/', label: 'Building public-sector applications' },
    { to: '/writing/building-document-intelligence-workflows/', label: 'Building document intelligence workflows' },
    { to: '/writing/omniroute-hermes-agent-docker/', label: 'Running OmniRoute as a model gateway' },
  ],
  keywords: [
    'FedPath',
    'GoFedPath',
    'agentic engineering',
    'AI for government contracting',
    'federal contracts for small business',
    'SAM.gov opportunities',
    'AI coding agents',
    'when not to use AI agents',
    'rule-based vs AI scoring',
  ],
  about: [
    { '@type': 'SoftwareApplication', name: 'FedPath', alternateName: 'GoFedPath', url: 'https://gofedpath.com/' },
    { '@type': 'Thing', name: 'Government procurement in the United States', sameAs: 'https://en.wikipedia.org/wiki/Government_procurement_in_the_United_States' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
  ],
  mentions: [
    { '@type': 'WebSite', name: 'SAM.gov', url: 'https://sam.gov/' },
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/' },
    { '@type': 'SoftwareApplication', name: 'Codex', url: 'https://openai.com/codex/' },
    { '@type': 'SoftwareApplication', name: 'Gemini', sameAs: 'https://en.wikipedia.org/wiki/Gemini_(language_model)' },
  ],
  faq: [
    {
      q: 'Does FedPath use AI agents?',
      a: 'Not inside the product today. Opportunity monitoring and change detection are scheduled automation, Fit Analysis and the Compliance Matrix run on fixed rules, and the only model in the product writes labelled summaries from public SAM.gov notice text. The agentic engineering is in how FedPath is built, with Claude Code and Codex working inside requirements, review and testing.',
    },
    {
      q: 'Why does FedPath use rules instead of AI to score opportunities?',
      a: 'Users need to see why an opportunity fits or doesn’t, and every finding has to point to its source. Fixed rules give the same answer for the same input, can be tested like ordinary code, and let uploaded solicitations stay on FedPath’s own server instead of going to an outside model.',
    },
    {
      q: 'What is the difference between automation, AI processing and an AI agent?',
      a: 'Automation runs fixed steps, such as checking new notices against saved criteria on a schedule. AI processing uses a model for one step, such as summarizing a notice. An agent decides what to do next: which tools to call, what to read and when it is finished, toward a goal.',
    },
  ],
};
