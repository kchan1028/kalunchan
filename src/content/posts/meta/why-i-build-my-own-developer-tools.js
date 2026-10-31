export const metadata = {
  seoTitle: 'I Still Look Up Syntax, So I Built My Own Developer Tools — Ka Lun Chan',
  dek:
    'My system for remembering things went from bookmarks to Stack Overflow to AI assistants. None of them quite fit the problem, so I started building small tools of my own.',
  related: [
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything to be a good engineer' },
    { to: '/writing/specialization-beyond-your-own-code/', label: 'Following a bug past the edge of your own code' },
    { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether something should be a microservice' },
    { to: '/projects/', label: 'Projects and case studies' },
    { to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/', label: 'From SEO and AdSense to AI search: what digital publishing taught me' },
    { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Building an AI job search agent with Hermes' },
    { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'A scheduled research assistant for Useful Little Tools' },
  ],
  keywords: [
    'Useful Little Tools',
    'developer tools',
    'git command finder',
    'docker command finder',
    'SQL JOIN visualizer',
    'regex tester',
    'JWT debugger',
    'experienced developers look up syntax',
    'building your own developer tools',
  ],
  about: [
    { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
    { '@type': 'WebApplication', name: 'Useful Little Tools', url: 'https://usefullittletools.app' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Git', sameAs: 'https://en.wikipedia.org/wiki/Git' },
    { '@type': 'Thing', name: 'Docker', sameAs: 'https://en.wikipedia.org/wiki/Docker_(software)' },
    { '@type': 'Thing', name: 'Stack Overflow', sameAs: 'https://en.wikipedia.org/wiki/Stack_Overflow' },
    { '@type': 'Thing', name: 'JSON Web Token', sameAs: 'https://en.wikipedia.org/wiki/JSON_Web_Token' },
  ],
  faq: [
    {
      q: 'Why do experienced developers still look up syntax?',
      a: 'Because the number of tools they work across keeps growing while the syntax of each one changes. Ka Lun Chan still looks up Git, Docker, SQL and Django syntax almost daily. The concepts carry over between technologies; the exact flags and function names don’t.',
    },
    {
      q: 'What is Useful Little Tools?',
      a: 'Useful Little Tools (usefullittletools.app) is a collection of small browser-based developer tools built by Ka Lun Chan, including a Git command finder, a Docker command finder, a SQL JOIN visualizer, a regex tester and a JWT debugger. Most run entirely in the browser with no account.',
    },
    {
      q: 'Do small developer tools need a backend?',
      a: 'Usually not. A command finder, regex tester or JWT debugger can run entirely in the browser, which avoids accounts, stored personal data and infrastructure. Some functionality does need an external service, so the choice depends on the tool.',
    },
  ],
};
