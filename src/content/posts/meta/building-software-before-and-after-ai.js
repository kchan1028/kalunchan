export const metadata = {
  seoTitle: 'A Technical Founder on Building Software Before and After AI — Ka Lun Chan',
  dek:
    'From a data center I cabled myself and a VoIP platform built on Asterisk and OpenSIPS, to shipping products with an AI assistant in the terminal. What changed, and what the years in the data center still pay for.',
  related: [
    { to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
    { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What the VoIP platform taught me about distributed systems' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything to be a good engineer' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
    { to: '/projects/', label: 'The products built this way' },
    { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'The design half: every screen myself, then with AI' },
    { to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/', label: 'The mobile apps we wrote for Nokia phones on this stack' },
    { to: '/writing/from-dos-to-ai-thirty-years-of-technology/', label: 'The longer view: from DOS to AI, one decade at a time' },
    { to: '/writing/building-startups-technical-leadership/', label: 'The startups I helped build in between' },
    { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'The next experiment: a self-hosted job-search agent on Hermes' },
    { to: '/writing/why-i-still-write-code/', label: 'Why I still write code' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'When AI coding costs more than a human engineer' },
    { to: '/writing/ai-agents-reliable-in-production/', label: 'Working code versus a system you can leave running: AI agents in production' },
  ],
  image: { path: '/images/writing/before-and-after-ai-og.jpg', width: 1200, height: 630, alt: 'I used to build everything myself. Then: servers, cables, Asterisk, OpenSIPS, a billing system. Now: an idea, a conversation, working software. Same decisions.' },
  keywords: [
    'how AI has changed software development',
    'software engineering before AI',
    'AI-assisted software development',
    'building a startup with AI',
    'software engineering career evolution',
    'engineering leadership in the AI era',
    'AI coding assistants for experienced engineers',
    'open-source VoIP startup',
    'Asterisk OpenSIPS platform',
    'technical founder lessons',
    'technical founder experience',
    'building a software startup',
    'building software from scratch',
  ],
  about: [
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Asterisk (PBX)', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
    { '@type': 'Thing', name: 'OpenSIPS', sameAs: 'https://en.wikipedia.org/wiki/OpenSIPS' },
    { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
    { '@type': 'Thing', name: 'Bootstrapping', sameAs: 'https://en.wikipedia.org/wiki/Bootstrapping' },
  ],
  faq: [
    {
      q: 'How has AI changed software development for an experienced engineer?',
      a: 'It shortened the distance between an idea and working software. I use AI assistants to explore ideas, draft implementations, write tests, review code, research unfamiliar tools and troubleshoot. The judgment about what to build, how it should fail and whether it makes sense for the business hasn’t moved.',
    },
    {
      q: 'Does AI-assisted development replace engineering experience?',
      a: 'No. AI produces code quickly, and someone still has to recognize when that code is wrong in a way that looks right. Experience with production systems, infrastructure and teams is what catches architectural and operational risks before they ship.',
    },
    {
      q: 'Is it easier to build a startup with AI?',
      a: 'Building the product is easier. Building the business isn’t. Finding customers, understanding what they need and reaching sustainable revenue are as hard as they were before AI tools, so the decision about what to build matters more, not less.',
    },
    {
      q: 'What was it like building software before AI tools?',
      a: 'For my first company it meant racking servers, routers and switches in a data center, configuring the network, administering Linux, and writing the platform on open-source VoIP with Asterisk, OpenSIPS, MediaProxy, Python AGI scripts and an in-house billing system. Every layer was mine to build and mine to fix.',
    },
  ],
};
