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
    depth: { carrier: 1, voice: 2, communications: 2, publishing: 2, yippify: 2 },
  },
  {
    id: 'product',
    no: '402',
    name: 'Product engineering',
    claim: 'Product work: web and mobile applications people actually use, built to keep changing.',
    practice: [
      'Web and mobile product delivery',
      'Front-end architecture and performance',
      'Accessible, testable interfaces',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'Ruby on Rails'],
    depth: { carrier: 0, voice: 1, communications: 2, publishing: 2, yippify: 2 },
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
    depth: { carrier: 2, voice: 2, communications: 2, publishing: 1, yippify: 2 },
  },
  {
    id: 'gov',
    no: '405',
    name: 'Government technology',
    claim: 'Public services where accessibility, security and hand-over are requirements, not extras.',
    practice: [
      'Incremental modernization of services the public relies on',
      'Accessibility (WCAG) and security as release gates',
      'Procurement-aware delivery and agency hand-over',
    ],
    stack: ['Python', 'Django', 'React', 'AWS', 'Terraform'],
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
    depth: { carrier: 2, voice: 1, communications: 2, publishing: 1, yippify: 2 },
    verify: true,
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
  },
  {
    no: '102',
    id: 'decisions',
    title: 'Make architecture decisions in writing',
    claim: 'Decisions outlive the meeting. Put the options, the choice and the tradeoff on paper.',
    body:
      'Significant choices get a short decision record: context, the options considered, what we chose, and what we are giving up. It keeps debates short, onboarding fast, and reversals honest.',
    signals: ['New engineers can find why, not just what', 'We revisit decisions on evidence, not mood'],
  },
  {
    no: '103',
    id: 'debt',
    title: 'Balance delivery and technical debt',
    claim: 'Debt is a financing decision. Take it on deliberately, record it, and pay it down where it costs interest.',
    body:
      'I budget capacity for paying down debt every cycle and spend it where debt slows the roadmap: hot paths, flaky tests, risky deploys. Cosmetic debt waits.',
    signals: ['Lead time and change-failure rate trend down', 'Debt items are tied to the roadmap they block'],
  },
  {
    no: '104',
    id: 'execution',
    title: 'Improve execution with small, safe changes',
    claim: 'Small stacked PRs, continuous integration, and releases so frequent they stop being events.',
    body:
      'Batch size is the lever. Small changes get reviewed properly, deploy safely and roll back cheaply. I invest in the pipeline before asking a team to go faster.',
    signals: ['PRs reviewed within a day', 'Deploys are routine, rollbacks rare and fast'],
  },
  {
    no: '105',
    id: 'risk',
    title: 'Reduce delivery risk early',
    claim: 'Surprises are cheapest in week one. I pull integration, data and security risk to the front.',
    body:
      'Walking skeletons end to end before features, real data before demos, and security and accessibility as release gates rather than launch-week audits.',
    signals: ['Nothing new is learned on launch day', 'Estimates tighten as work progresses'],
  },
  {
    no: '106',
    id: 'maintainable',
    title: 'Build systems the next team can own',
    claim: 'Maintainable beats clever. Boring technology, clear boundaries, and documentation that stays current.',
    body:
      'I choose conventional stacks that can be hired for, draw service boundaries along business lines, and treat runbooks and docs as part of done.',
    signals: ['On-call is quiet', 'Hand-overs take days, not months'],
  },
  {
    no: '107',
    id: 'mentoring',
    title: 'Grow engineers into leaders',
    claim: 'The measure of a lead is the team that works without them.',
    body:
      'I delegate real ownership with context, review for judgement as well as syntax, and create room for engineers to lead a decision end to end.',
    signals: ['Engineers run their own design reviews', 'Promotions come from inside the team'],
  },
  {
    no: '108',
    id: 'cross-functional',
    title: 'Work across product, QA and leadership',
    claim: 'Engineering is one voice at the table. I translate between the tradeoffs and the business.',
    body:
      'Product gets honest options with costs attached. QA is in planning, not only at the end. Executives get risk in plain language, early.',
    signals: ['Roadmap changes cost negotiation, not surprise', 'Quality is planned, not inspected in'],
  },
];

export const counterparts = [
  { who: 'Product', gets: 'Options with cost and risk attached, and a team that can say “not yet” with a reason.' },
  { who: 'QA', gets: 'A seat in planning, testable acceptance criteria, and automation that frees time for exploratory testing.' },
  { who: 'Engineers', gets: 'Context, ownership, fast reviews, and cover to do the job properly.' },
  { who: 'Executives', gets: 'Delivery risk in plain language, early, with a recommendation attached.' },
];
