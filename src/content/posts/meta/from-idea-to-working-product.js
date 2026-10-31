export const metadata = {
  seoTitle: 'From Idea to Working Product: Three Side Projects',
  dek:
    'I’ve been spending some of my free time on three side projects. They solve very different problems, and the work of turning each idea into something that works has been surprisingly similar.',
  related: [
    { to: '/projects/fedpath/', label: 'FedPath case study: from SAM.gov notice to bid decision' },
    { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is telling you' },
    { to: '/writing/what-engineering-leadership-actually-does/', label: 'What engineering leadership actually does all day' },
    { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Why I build my own developer tools' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/why-i-still-write-code/', label: 'Why I still write code as an engineering leader' },
  ],
  keywords: [
    'side projects',
    'from idea to product',
    'building a product',
    'product development lessons',
    'FedPath',
    'VeloWise',
    'engineering delivery analytics',
    'federal contracting software',
    'stock research backtesting',
    'working software vs useful product',
  ],
  about: [
    { '@type': 'Thing', name: 'Product development', sameAs: 'https://en.wikipedia.org/wiki/New_product_development' },
    { '@type': 'SoftwareApplication', name: 'FedPath', alternateName: 'GoFedPath', url: 'https://gofedpath.com/' },
    { '@type': 'SoftwareApplication', name: 'VeloWise', url: 'https://getvelowise.com/' },
  ],
  mentions: [
    { '@type': 'WebSite', name: 'SAM.gov', url: 'https://sam.gov/' },
    { '@type': 'SoftwareApplication', name: 'Jira', sameAs: 'https://en.wikipedia.org/wiki/Jira_(software)' },
    { '@type': 'Thing', name: 'Backtesting', sameAs: 'https://en.wikipedia.org/wiki/Backtesting' },
    { '@type': 'Thing', name: 'Paper trading', sameAs: 'https://en.wikipedia.org/wiki/Paper_trading' },
  ],
  faq: [
    {
      q: 'What are FedPath and VeloWise?',
      a: 'FedPath helps small businesses find U.S. federal contract opportunities and decide whether each one is worth pursuing. VeloWise reads the delivery data engineering teams already have and shows sprint progress, scope changes, carryover, bottlenecks and what actually reached production, so a leader can see why delivery is off track.',
    },
    {
      q: 'Does Trading Research Lab make profitable trade recommendations?',
      a: 'No. It trades only simulated money in a paper account, and so far its research has shown no measurable edge over simple benchmarks such as SPY, random portfolios and plain momentum. Forward results need months of independent data before they mean anything.',
    },
    {
      q: 'What is the difference between working software and a useful product?',
      a: 'Working software runs and produces correct output for its inputs. A useful product helps someone make a better decision or finish a task. A feature can do the first and fail the second, so I judge each project by whether it answers its user’s real question.',
    },
  ],
};
