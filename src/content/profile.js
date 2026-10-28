// Facts marked `verify: true` were drafted during the redesign and are
// listed in CONTENT-REVIEW.md. Everything else comes from the previous site.

export const person = {
  name: 'Ka Lun Chan',
  short: 'KC',
  role: 'Engineering leader',
  thesis: 'I build products and the teams that scale them.',
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
  'Ka Lun Chan (KC) is a San Francisco Bay Area engineering leader and generalist who has worked across every layer of a business, from an IT helpdesk to software architecture. As co-founder and CTO, he built a startup from the ground up to 400,000+ users and an acquisition, and led its team of 30+. He now leads government technology work through Yippify.';

// The homepage says the same thing in its own words, so / and /about/ don't repeat each other.
export const homeIntro =
  'Ka Lun Chan (KC) is an engineering leader in the San Francisco Bay Area. He co-founded a communications company and grew it to 400,000+ users on three continents. After the acquisition he stayed on with the company. Today he leads government technology work through Yippify.';

// One line of role intent under the home headline, linking to /engineering-leadership/ (POSITIONING.md §0).
export const roleIntent = 'Open to VP or Director of Engineering roles at growing companies, remote or in the Bay Area';

// Verified proof points shown under the home positioning line, each linking to its evidence.
export const proofPoints = [
  { figure: '2,000+', text: 'collocations, carrier capacity planning', to: '/work/carrier-capacity/' },
  { figure: '8M+', text: 'VoIP minutes a month, server farm and expansion', to: '/experience/#voice' },
  { figure: '+50%', text: 'organic and social traffic as publishing CTO', to: '/work/publishing-distribution/' },
  { figure: '~30%', text: 'lower AWS costs on a re-platform', to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost' },
];

export const headlineNumbers = [
  { figure: 'Helpdesk to CTO', text: 'every layer of a company, still hands-on' },
  { figure: '400,000+', text: 'users scaled as co-founder and CTO, through an acquisition' },
  { figure: '30+', text: 'engineers, VoIP specialists and designers in the team I built as co-founder and CTO' },
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
    owned: 'Architecture, strategy and delivery for client teams, hands-on where it takes risk out',
    mode: 'Led and hands-on',
    problem:
      'Government teams, startups and founders who need web and mobile products shipped by a small team, with no budget for a rewrite later.',
    responsibility:
      'Architecture, technical strategy and delivery leadership across client engagements, plus hands-on engineering wherever it takes risk out of the build.',
    decisions: [
      'Choose well-understood platforms that a client team can own after hand-over.',
      'Infrastructure as code and CI/CD from the first sprint, not the last.',
      'Record architecture decisions in writing so the reasoning survives the engagement.',
      'Size infrastructure to the product’s maturity and measured demand, and buy before building when the capability is not what the client pays for.',
    ],
    verifyDecisions: true,
    execution:
      'Small stacked pull requests, iterative releases stakeholders can see every sprint, and QA and product in the same planning loop as engineering. On public-sector work, engineering that supports security authorization: FedRAMP-aligned environments, evidence for the Authority to Operate, Section 508 accessibility and Plain Writing in the acceptance criteria.',
    outcome:
      'Mobile and web applications delivered for government, startup and entrepreneur clients.',
    cases: [],
    story: [
      { to: '/writing/building-startups-technical-leadership/', label: 'Startup story: six engagements, from hybrid mobile to wholesale VoIP and virtual tours', kind: 'Startup story' },
      { to: '/writing/building-public-sector-applications/', label: 'Government story: security, accessibility, integrations and change control on public-sector applications', kind: 'Government story' },
      { to: '/writing/modernizing-public-sector-applications/', label: 'Modernizing public-sector applications: legacy rules, incremental replacement and approvals', kind: 'Modernization story' },
      { to: '/writing/building-document-intelligence-workflows/', label: 'AI document processing with people in the loop: validation, review and integration', kind: 'AI story' },
    ],
  },
  {
    id: 'publishing',
    org: 'Media publishing platform',
    title: 'Chief Technology Officer',
    era: 'Media platforms',
    scale: '+50% organic & social traffic',
    owned: 'All technology, plus business and operations with the CEO and partner network',
    mode: 'Led',
    problem:
      'Publishing platforms, a portfolio of media titles, competing for audience against far larger media companies on search and social.',
    responsibility:
      'Overall technical strategy and engineering leadership for the publishing platforms, plus business and operations work with the CEO and the partners across the affiliated publishing network.',
    decisions: [
      'Treat page speed, structured content and social distribution as platform features rather than editorial afterthoughts.',
      'Invest in the shared publishing platform instead of per-title one-offs.',
      'Re-platform from WordPress to Rails on AWS, then right-size, scale on real demand and fix the database so the infrastructure bill followed the traffic.',
    ],
    verifyDecisions: true,
    execution:
      'Rebuilt the delivery path from editorial tooling to rendered page, and measured every release against traffic and engagement.',
    outcome:
      'Organic traffic, social traffic and social engagement each up 50%, with infrastructure improvements contributing to about 30% lower AWS costs.',
    cases: ['publishing-distribution'],
    story: { to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost', label: 'How infrastructure improvements contributed to about 30% lower AWS costs', kind: 'Cost story' },
  },
  {
    id: 'communications',
    org: 'Global communications platform',
    title: 'Co-Founder & CTO',
    era: 'SaaS, founder',
    scale: '400k+ users · 3 continents · acquired',
    owned: 'Product, network, platform and a team of 30+, from first line of code to acquisition',
    mode: 'Built, then led',
    problem:
      'Build a service from nothing, then keep it fast for users spread across South America, Asia and Africa.',
    responsibility:
      'Co-founded the company. Built the network and the multi-tier web and mobile application, and led engineering from first line of code to acquisition.',
    decisions: [
      'Plan the first data center deliberately, then leave it: move from a single site to cloud regions on three continents.',
      'Route users by geography to the nearest region to cut latency and improve call and session quality.',
      'Choose media paths by caller location, and improve least-cost routing with call statistics so the cheapest route also had to be a good one.',
    ],
    execution:
      'Staged the migration region by region so the platform kept serving users throughout, and grew the team and architecture with the customer base.',
    outcome:
      '400k+ users, multimillion-dollar growth, and a successful acquisition.',
    cases: ['three-continent-platform'],
    story: [
      { to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder journey: from 0→1 to acquisition' },
      { to: '/writing/hidden-cost-of-software-architecture/#monolith', label: 'A modular monolith past 400,000 users, and what each architecture decision costs to run', kind: 'Architecture story' },
    ],
  },
  {
    id: 'voice',
    org: 'Voice services',
    title: 'Vice President of Operations',
    era: 'Voice & web services',
    scale: '8M+ VoIP minutes a month',
    owned: 'Software engineering, QA and network operations, run as one function',
    mode: 'Led',
    problem:
      'A growing voice service whose software and network both had to scale without dropping calls.',
    responsibility:
      'Directed software engineering and network operations across web applications and the voice network.',
    decisions: [
      'Plan capacity expansions ahead of growth rather than after incidents.',
      'Size SIP signaling, media and Asterisk capacity separately, because each fills at a different rate.',
    ],
    execution:
      'Built a resilient, supportable environment for application development and the voice network, with operations and engineering run as one function.',
    outcome:
      'A stable, scalable platform through the company’s growth phase, with expansion planned ahead of demand.',
    cases: [],
    story: { to: '/writing/capacity-planning-carrier-networks-to-cloud/#voip', label: 'Capacity planning behind 8M+ VoIP minutes a month: signaling, media and concurrent calls', kind: 'Capacity story' },
  },
  {
    id: 'carrier',
    org: 'National broadband network',
    title: 'Member of Technical Staff',
    era: 'Carrier networks',
    scale: '2,000+ collocations nationwide',
    owned: 'Infrastructure integration, capacity planning, and security and IP services operations',
    mode: 'Hands-on',
    problem:
      'A nationwide broadband network spanning 2,000+ collocations that had to keep expanding without degrading service.',
    responsibility:
      'ATM, IP, VoIP and OC infrastructure integration, expansion, deployment, capacity planning and optimization. Operations for the Network Security and IP Services group, including Cisco router access control lists and the managed firewall and VPN service built on NetScreen.',
    decisions: [
      'Capacity planning driven by measured utilization across the footprint.',
      'Standardize process, training and escalation so operations scale beyond individual experts.',
    ],
    execution:
      'Process development, training, escalation support and deployment for the ATM, IP and VoIP networks and for network security services. One of the first three people supporting the new managed security service in the Security Operations Center, and travelled to the East Coast to train the Technical Assistance Center.',
    outcome:
      'Integrated and expanded carrier infrastructure across the national footprint while supporting network security and IP services operations.',
    cases: ['carrier-capacity'],
    story: [
      { to: '/writing/capacity-planning-carrier-networks-to-cloud/#forecast', label: 'Forecasting capacity from SNMP data across 2,000+ collocations, and what it taught me about cloud scaling', kind: 'Capacity story' },
      { to: '/writing/network-security-before-devsecops/', label: 'Security story: from Cisco ACLs and NetScreen to cloud and application security', kind: 'Security story' },
    ],
  },
];

export const earlier = [
  { org: 'Broadband services', title: 'Technical Support Engineer' },
  { org: 'Technical services', title: 'Technical Support Specialist' },
];

