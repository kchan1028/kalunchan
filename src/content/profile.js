// Facts marked `verify: true` were drafted during the redesign and are
// listed in CONTENT-REVIEW.md. Everything else comes from the previous site.

export const person = {
  name: 'Ka Lun Chan',
  short: 'KC',
  role: 'Engineering leader',
  thesis: 'I build teams, systems, and products that deliver.',
  level:
    'Engineering leader across carrier networks, SaaS, media platforms and government technology. I co-founded a SaaS company and ran engineering through its acquisition. Today I lead architecture and delivery for public-sector and startup clients.',
  linkedin: 'https://www.linkedin.com/in/kchan1288/',
  github: 'https://github.com/kchan1028',
  yippify: 'https://yippify.com',
  products: [
    { name: 'FedPath', url: 'https://gofedpath.com', note: 'Find and evaluate federal contracts for small business' },
    { name: 'VeloWise', url: 'https://getvelowise.com', note: 'Delivery analytics for engineering leaders' },
    { name: 'SurgeIQ', url: 'https://getsurgeiq.com', note: 'Free cycling stats, power zones and workouts' },
    { name: 'Useful Little Tools', url: 'https://usefullittletools.app', note: 'Free calculators for everyday decisions' },
  ],
  // Public email is undecided; set a string here to render a mail link.
  email: null,
};

// Entity summary, headline numbers and call to action (POSITIONING.md).
// Values still set to a REPLACE_WITH_ placeholder are left out of the site until filled in.
export const isPlaceholder = (value) => typeof value === 'string' && value.includes('REPLACE_WITH_');

export const entity =
  'Ka Lun Chan (KC) is a San Francisco Bay Area engineering leader and generalist with 23+ years across every layer of a business, from helpdesk and network operations to product, marketing and architecture. As co-founder and CTO, he built a startup from the ground up to 400,000+ users and an acquisition. He now leads government technology work through Yippify.';

export const headlineNumbers = [
  { figure: '23+', text: 'years in software' },
  { figure: '400,000+', text: 'users scaled as co-founder and CTO' },
  { figure: 'Acquired', text: 'with users across 3 continents' },
];

export const updated = '[REPLACE_WITH_MONTH YEAR]';

export const availability = {
  ask: 'Need an engineering leader who has done the work?',
  text: `From helpdesk calls and data center cabling to product, SEO and an acquisition, I’ve worked every layer of a company. Tell me what you’re building.${isPlaceholder(updated) ? '' : ` Updated ${updated}.`}`,
};

// One row per tenure, newest first. Five-part impact story:
// problem → responsibility → decisions → execution → outcome.
export const roles = [
  {
    id: 'yippify',
    org: 'Yippify',
    title: 'Consultant',
    era: 'Consulting & government technology',
    scale: 'Public sector, startups, founders',
    problem:
      'Government teams, startups and founders who need web and mobile products shipped by a small team, with no budget for a rewrite later.',
    responsibility:
      'Architecture, technical strategy and delivery leadership across client engagements, plus hands-on engineering wherever it takes risk out of the build.',
    decisions: [
      'Choose well-understood platforms (Django, Rails, React and Next.js on AWS) that a client team can own after hand-over.',
      'Infrastructure as code and CI/CD from the first sprint, not the last.',
      'Record architecture decisions in writing so the reasoning survives the engagement.',
    ],
    verifyDecisions: true,
    execution:
      'Small stacked pull requests, iterative releases stakeholders can see every sprint, and QA and product in the same planning loop as engineering.',
    outcome:
      'Mobile and web applications delivered for government, startup and entrepreneur clients.',
    cases: ['public-service-modernization', 'document-intelligence'],
  },
  {
    id: 'publishing',
    org: 'Media publishing platform',
    title: 'Chief Technology Officer',
    era: 'Media platforms',
    scale: '+50% organic & social traffic',
    problem:
      'Publishing platforms, a portfolio of media titles, competing for audience against far larger media companies on search and social.',
    responsibility:
      'Overall technical strategy and engineering leadership for the publishing platforms.',
    decisions: [
      'Treat page speed, structured content and social distribution as platform features rather than editorial afterthoughts.',
      'Invest in the shared publishing platform instead of per-title one-offs.',
    ],
    verifyDecisions: true,
    execution:
      'Rebuilt the delivery path from editorial tooling to rendered page, and measured every release against traffic and engagement.',
    outcome:
      'Organic traffic, social traffic and social engagement each up 50%.',
    cases: ['publishing-distribution'],
  },
  {
    id: 'communications',
    org: 'Global communications platform',
    title: 'Co-Founder & CTO',
    era: 'SaaS, founder',
    scale: '400k+ users · 3 continents · acquired',
    problem:
      'Build a service from nothing, then keep it fast for users spread across North America, Europe and Asia.',
    responsibility:
      'Co-founded the company. Built the network and the multi-tier web and mobile application, and led engineering from first line of code to acquisition.',
    decisions: [
      'Plan the first data center deliberately, then leave it: move from a single site to cloud regions on three continents.',
      'Route users by geography to the nearest region to cut latency and improve call and session quality.',
    ],
    execution:
      'Staged the migration region by region so the platform kept serving users throughout, and grew the team and architecture with the customer base.',
    outcome:
      '400k+ users, multimillion-dollar growth, and a successful acquisition.',
    cases: ['three-continent-platform'],
  },
  {
    id: 'voice',
    org: 'Voice services',
    title: 'Vice President of Operations',
    era: 'Voice & web services',
    scale: 'Voice network + web platform',
    problem:
      'A growing voice service whose software and network both had to scale without dropping calls.',
    responsibility:
      'Directed software engineering and network operations across web applications and the voice network.',
    decisions: [
      'Plan capacity expansions ahead of growth rather than after incidents.',
    ],
    execution:
      'Built a resilient, supportable environment for application development and the voice network, with operations and engineering run as one function.',
    outcome:
      'A stable, scalable platform through the company’s growth phase, with expansion planned ahead of demand.',
    cases: [],
  },
  {
    id: 'carrier',
    org: 'National broadband network',
    title: 'Member of Technical Staff',
    era: 'Carrier networks',
    scale: '2,000+ collocations nationwide',
    problem:
      'A nationwide broadband network spanning 2,000+ collocations that had to keep expanding without degrading service.',
    responsibility:
      'ATM, IP, VoIP and OC infrastructure integration, expansion, deployment, capacity planning and optimization. Operations for the Network Security and IP Services group.',
    decisions: [
      'Capacity planning driven by measured utilization across the footprint.',
      'Standardize process, training and escalation so operations scale beyond individual experts.',
    ],
    execution:
      'Process development, training, escalation support and deployment for the ATM, IP and VoIP networks and for network security services.',
    outcome:
      'Integrated and expanded carrier infrastructure across the national footprint while supporting network security and IP services operations.',
    cases: ['carrier-capacity'],
  },
];

export const earlier = [
  { org: 'Broadband services', title: 'Technical Support Engineer' },
  { org: 'Technical services', title: 'Technical Support Specialist' },
];

