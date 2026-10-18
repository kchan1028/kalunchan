// Capability areas, where each was exercised, and the operating practices.

export const eras = [
  { id: 'carrier', label: 'Carrier networks' },
  { id: 'voice', label: 'Voice services' },
  { id: 'communications', label: 'Communications' },
  { id: 'publishing', label: 'Media publishing' },
  { id: 'yippify', label: 'Yippify' },
];

// depth per era: 2 = led it, 1 = practiced it, 0 = not a focus.
export const capabilities = [
  {
    id: 'leadership',
    no: '401',
    name: 'Engineering leadership',
    claim: 'I set direction, make the calls, and build teams that keep shipping after I step back.',
    practice: [
      'Architecture decisions and technical strategy',
      'Mentoring engineers and growing leads',
      'Scaling teams and delivery process',
      'Cross-functional work with product, QA and executives',
    ],
    stack: [],
    evidence: [
      { to: '/leadership/', label: 'My engineering leadership operating manual' },
      { to: '/writing/when-everything-is-a-priority/', label: 'Leading engineering through changing priorities' },
      { to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder story: from first line of code to acquisition' },
    ],
    depth: { carrier: 1, voice: 2, communications: 2, publishing: 2, yippify: 2 },
  },
  {
    id: 'product',
    no: '402',
    name: 'Product engineering',
    claim: 'Web and mobile applications people use, built so they can keep changing.',
    practice: [
      'Web and mobile product delivery',
      'Front-end architecture and performance',
      'Accessible, testable interfaces',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'Ruby on Rails'],
    evidence: [
      { to: '/projects/fedpath/', label: 'FedPath: a federal contracting product' },
      { to: '/projects/union-city-smog-check/', label: 'Union City Smog Check: a small-business site' },
      { to: '/writing/building-startups-technical-leadership/', label: 'Six startups: mobile, fitness, VoIP, real estate and virtual tours' },
    ],
    depth: { carrier: 0, voice: 2, communications: 2, publishing: 2, yippify: 2 },
  },
  {
    id: 'architecture',
    no: '403',
    name: 'Software architecture',
    claim: 'Systems whose boundaries follow the business, and that fail in ways you can reason about.',
    practice: [
      'API and service design',
      'Event-driven systems and messaging',
      'Data modelling and caching',
      'Incremental migration of legacy systems',
    ],
    stack: ['REST APIs', 'Microservices', 'Kafka', 'PostgreSQL', 'Redis'],
    evidence: [
      { to: '/writing/should-it-be-a-microservice/', label: 'When something should actually be a microservice' },
      { to: '/work/event-driven-platform/', label: 'Design example: event-driven microservices with Kafka' },
    ],
    depth: { carrier: 1, voice: 1, communications: 2, publishing: 2, yippify: 2 },
  },
  {
    id: 'cloud',
    no: '404',
    name: 'Cloud & infrastructure',
    claim: 'Infrastructure as code, pipelines that make releasing boring, and costs that follow revenue.',
    practice: [
      'Multi-region deployment and routing',
      'Reliability, capacity and cost planning',
      'Security as a release gate',
      'CI/CD and environment automation',
    ],
    stack: ['AWS', 'ECS', 'Lambda', 'S3', 'CloudFront', 'Docker', 'Terraform', 'CI/CD'],
    evidence: [
      { to: '/work/three-continent-platform/', label: 'Case study: one data center to three continents' },
      { to: '/work/carrier-capacity/', label: 'Case study: capacity planning across 2,000+ collocations' },
    ],
    depth: { carrier: 2, voice: 2, communications: 2, publishing: 2, yippify: 2 },
  },
  {
    id: 'gov',
    no: '405',
    name: 'Government technology & public-sector compliance',
    claim: 'Public services where accessibility, security and a clean hand-over to the agency are part of the scope from day one. Building, modernizing and supporting public-sector applications, including public-sector certification systems.',
    practice: [
      'Incremental modernization of services the public relies on',
      'Engineering that supports public-sector security authorization: FedRAMP-aligned cloud environments, NIST security controls, Authority to Operate evidence, continuous monitoring',
      'Section 508 and WCAG accessibility, and Plain Writing, in the acceptance criteria',
      'Procurement-aware delivery, change management and agency hand-over',
    ],
    stack: [],
    evidence: [
      { to: '/writing/building-public-sector-applications/', label: 'What building public-sector applications taught me' },
      { to: '/writing/modernizing-public-sector-applications/', label: 'Modernizing public-sector applications is more than rewriting code' },
      { to: '/projects/fedpath/', label: 'FedPath: SAM.gov opportunities for small businesses' },
    ],
    depth: { carrier: 0, voice: 0, communications: 0, publishing: 0, yippify: 2 },
    verify: true,
  },
  {
    id: 'ai',
    no: '406',
    name: 'AI & data',
    claim: 'LLMs used where they are reliable, with people and evaluation where they are not.',
    practice: [
      'LLM integrations and retrieval (RAG)',
      'Document processing pipelines',
      'ML-backed product features',
      'Workflow automation',
    ],
    stack: ['LLM APIs', 'RAG', 'Vector search', 'Python'],
    evidence: [
      { to: '/writing/building-document-intelligence-workflows/', label: 'Building document intelligence is more than extracting text with AI' },
      { to: '/writing/building-a-startup-from-idea-to-acquisition/#still-build', label: 'Why I stay hands-on with LLMs, RAG, agents and MCP' },
    ],
    depth: { carrier: 0, voice: 0, communications: 0, publishing: 1, yippify: 2 },
    verify: true,
  },
  {
    id: 'hands-on',
    no: '407',
    name: 'Hands-on engineering',
    claim: 'I still write code: prototypes, reviews, and the hard parts of the build.',
    practice: [
      'Prototyping the riskiest part first',
      'Code review for judgement, not only style',
      'Debugging production across the stack',
    ],
    stack: ['Python', 'TypeScript', 'SQL', 'Docker'],
    evidence: [
      { to: '/projects/', label: 'Products and sites I’ve shipped' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why I still look things up' },
    ],
    depth: { carrier: 2, voice: 2, communications: 2, publishing: 2, yippify: 2 },
    verify: true,
  },
  {
    id: 'security',
    no: '408',
    name: 'Security engineering & secure architecture',
    claim: 'Security as an engineering decision at every layer, from the router ACL to the authorization check on one record.',
    practice: [
      'Network security: Cisco ACLs in a carrier network, NetScreen firewalls and VPNs, security operations',
      'Application security: authentication, SSO, OAuth, RBAC, object-level authorization, secure API design',
      'Mobile application security: iOS and Android apps as untrusted clients, secure token storage, no secrets in the bundle, authorization re-checked on the server',
      'Cloud and infrastructure security: AWS IAM, network controls, secrets management, Terraform, secure deployment',
      'Operations and leadership: vulnerabilities monitored and fixed as high-priority work, security as a release gate, documentation and technical training',
    ],
    stack: ['Cisco ACLs', 'NetScreen / ScreenOS', 'IPsec VPN', 'AAA', 'OAuth', 'SSO', 'JWT', 'RBAC', 'AWS IAM', 'Terraform'],
    evidence: [
      { to: '/writing/network-security-before-devsecops/', label: 'From Cisco ACLs and NetScreen firewalls to cloud and application security' },
      { to: '/writing/api-architecture-lessons/#security', label: 'Authorization: a valid token says nothing about the record' },
      { to: '/writing/building-public-sector-applications/#architecture', label: 'Public-sector applications: authorization, least privilege and audit logging' },
      { to: '/writing/modernizing-public-sector-applications/#requirements', label: 'Modernizing public-sector applications: security, accessibility and audit from the first slice' },
    ],
    depth: { carrier: 2, voice: 2, communications: 2, publishing: 2, yippify: 2 },
  },
  {
    id: 'capacity',
    no: '409',
    name: 'Infrastructure strategy, capacity planning & cost optimization',
    claim: 'Systems sized from measured demand, scaled when the data asks for it, and run at a cost the business can carry, from the carrier network to the company paying the bill.',
    practice: [
      'Capacity planning: forecasting from measured utilization, finding the resource that fills first, headroom decided in advance',
      'Scaling: carrier networks across 2,000+ collocations, VoIP servers behind 8M+ minutes a month, a platform from one data center to cloud regions on three continents',
      'Cost optimization: least-cost and geolocation routing, right-sizing, demand-based scaling, database query and connection fixes, managed versus self-hosted decisions',
      'Infrastructure economics: total cost of ownership, technology investment and build-versus-buy decisions, software subscriptions reviewed like headcount',
      'Leadership: engineering capacity, technical debt and operational overhead planned alongside infrastructure; architecture reviewed alongside infrastructure and support costs',
    ],
    stack: ['AWS ECS / Fargate', 'Lambda', 'RDS PostgreSQL', 'Redis', 'S3', 'CloudFront', 'Kafka', 'Terraform', 'Docker', 'GitHub Actions', 'SNMP / Cacti'],
    evidence: [
      { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning: what carrier networks taught me about scaling cloud infrastructure' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture: scaling too early' },
      { to: '/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/', label: 'What I’ve learned about infrastructure costs, from carrier to founder' },
      { to: '/work/carrier-capacity/', label: 'Case study: capacity planning across 2,000+ collocations' },
      { to: '/work/three-continent-platform/', label: 'Case study: one data center to three continents' },
    ],
    depth: { carrier: 2, voice: 2, communications: 2, publishing: 2, yippify: 2 },
  },
  {
    id: 'data',
    no: '410',
    name: 'Data, analytics & business optimization',
    claim: 'Operational data turned into decisions with money attached: measure, analyze, forecast, optimize, validate.',
    practice: [
      'Capacity forecasting from SNMP statistics with an R program, so links were upgraded ahead of lead times',
      'VoIP routing on call statistics: answer rates, durations, completion and quality weighed against carrier cost',
      'Publishing analytics: traffic sources, rankings, engagement and revenue per thousand views deciding which content to invest in',
      'Cloud monitoring and cost data driving right-sizing and scaling decisions',
    ],
    stack: ['R', 'SNMP / Cacti', 'SQL', 'Python', 'Google Analytics', 'Search Console', 'AWS cost and monitoring data'],
    evidence: [
      { to: '/writing/data-driven-engineering-network-voip-publishing/', label: 'Different industries, same engineering problems: the data-to-decision loop' },
      { to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/', label: 'The publishing revenue engine, from an engineer’s seat' },
      { to: '/work/carrier-capacity/', label: 'Case study: capacity planning across 2,000+ collocations' },
    ],
    depth: { carrier: 2, voice: 2, communications: 2, publishing: 2, yippify: 1 },
  },
];

// The operating manual: how I lead. Numbered because the numbers are the
// page's coordinates and are referenced from the corner indicator.
export const practices = [
  {
    no: '101',
    id: 'ambiguity',
    title: 'Turn ambiguity into executable work',
    claim: 'A vague goal is a risk. My first job is to turn it into a plan a team can start on Monday.',
    body:
      'I start from the business outcome, name the unknowns, and break the work into slices that each prove something. The first slice is the riskiest assumption, not the easiest screen.',
    signals: ['Every engineer can say why their current task matters', 'Unknowns have owners and dates'],
    read: { to: '/writing/engineering-work-nobody-needed/', label: 'How I decide what deserves to be built' },
  },
  {
    no: '102',
    id: 'decisions',
    title: 'Make architecture decisions in writing',
    claim: 'Decisions outlive the meeting. Put the options, the choice and the tradeoff on paper.',
    body:
      'Significant choices get a short decision record: context, the options considered, what we chose, and what we are giving up. A new engineer can recover the reasoning, and the team can revisit it when the constraints change.',
    signals: ['New engineers can find why, not just what', 'We revisit decisions on evidence, not mood'],
    read: { to: '/writing/hidden-cost-of-software-architecture/#deciding', label: 'How I decide build or buy, managed or self-hosted, scale now or later' },
  },
  {
    no: '103',
    id: 'debt',
    title: 'Balance delivery and technical debt',
    claim: 'Debt is a financing decision. Take it on deliberately, record it, and pay it down where it costs interest.',
    body:
      'I budget capacity for paying down debt every cycle and spend it where debt slows the roadmap: hot paths, flaky tests, risky deploys. Cosmetic debt waits.',
    signals: ['Lead time and change-failure rate trend down', 'Debt items are tied to the roadmap they block'],
    read: { to: '/writing/building-a-startup-from-idea-to-acquisition/#technical-debt', label: 'How a startup taught me to treat debt as an investment' },
  },
  {
    no: '104',
    id: 'execution',
    title: 'Improve execution with small, safe changes',
    claim: 'Small stacked PRs, continuous integration, and releases so frequent they stop being events.',
    body:
      'Batch size is the lever. Small changes get reviewed properly, deploy safely and roll back cheaply. I invest in the pipeline before asking a team to go faster.',
    signals: ['PRs reviewed within a day', 'Deploys are routine, rollbacks rare and fast'],
    read: { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Why smaller stories and pull requests change everything downstream' },
  },
  {
    no: '105',
    id: 'risk',
    title: 'Reduce delivery risk early',
    claim: 'Surprises are cheapest in week one. I pull integration, data and security risk to the front.',
    body:
      'Walking skeletons end to end before features, real data before demos, and security and accessibility as release gates rather than launch-week audits.',
    signals: ['Major integration and security risks investigated before launch', 'Estimates tighten as work progresses'],
    read: { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is telling you' },
  },
  {
    no: '106',
    id: 'maintainable',
    title: 'Build systems the next team can own',
    claim: 'Maintainable beats clever. Boring technology, clear boundaries, and documentation that stays current.',
    body:
      'I choose conventional stacks that can be hired for, draw service boundaries along business lines, and treat runbooks and docs as part of done.',
    signals: ['On-call is quiet', 'Hand-overs take days, not months'],
    read: { to: '/writing/should-it-be-a-microservice/#five-years', label: 'What it costs to own a service for five years' },
  },
  {
    no: '107',
    id: 'mentoring',
    title: 'Grow engineers into leaders',
    claim: 'Engineers have the context and authority to lead design reviews and make decisions without waiting for me.',
    body:
      'I delegate real ownership with context, review for judgement as well as syntax, and create room for engineers to lead a decision end to end.',
    signals: ['Engineers run their own design reviews', 'Promotions come from inside the team'],
    read: { to: '/writing/building-a-startup-from-idea-to-acquisition/#delegation', label: 'Learning to delegate as a technical founder' },
  },
  {
    no: '108',
    id: 'cross-functional',
    title: 'Work across product, QA and leadership',
    claim: 'Engineering is one voice at the table. I translate between the tradeoffs and the business.',
    body:
      'Product gets honest options with costs attached. QA is in planning, not only at the end. Executives get risk in plain language, early.',
    signals: ['Roadmap changes cost negotiation, not surprise', 'Quality is planned, not inspected in'],
    read: { to: '/writing/when-everything-is-a-priority/', label: 'How I handle changing priorities' },
  },
  {
    no: '109',
    id: 'capacity',
    title: 'Plan capacity before it becomes a cost',
    claim: 'Compute, engineers and budget all fill up, and each has a lead time. I find the constraint before it becomes an expensive incident.',
    body:
      'I size systems from measured demand, decide headroom in advance, and treat team capacity, technical debt and operational overhead as resources with lead times, the same as a circuit order. Architecture reviews include infrastructure estimates and the engineering time needed to operate the design.',
    signals: ['Nobody is surprised by the infrastructure bill', 'Hiring and scaling decisions are made ahead of the lead time, not after the incident'],
    read: { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'What carrier networks taught me about scaling cloud infrastructure' },
  },
];

export const counterparts = [
  { who: 'Product', gets: 'Options with cost and risk attached, and a team that can say “not yet” with a reason.' },
  { who: 'QA', gets: 'A seat in planning, testable acceptance criteria, and automation that frees time for exploratory testing.' },
  { who: 'Engineers', gets: 'Context, ownership, fast reviews, and cover to do the job properly.' },
  { who: 'Executives', gets: 'Delivery risk in plain language, early, with a recommendation attached.' },
];
