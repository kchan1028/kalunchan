// Engineering case studies. `verify: true` marks case studies whose detail was
// drafted from the owner's brief and must be confirmed (see CONTENT-REVIEW.md).
// Drafted studies stay qualitative: no unconfirmed numbers.
//
// Diagram spec: `tiers` are drawn left→right on wide screens and top→bottom on
// narrow ones. `edges` connect node ids; `accent` marks the path the decision
// section is about.

export const cases = [
  {
    slug: 'three-continent-platform',
    no: '301',
    title: 'From one data center to three continents',
    org: 'Global communications platform',
    role: 'Co-Founder & CTO',
    domain: ['Cloud & infrastructure', 'Software architecture', 'Engineering leadership'],
    claim:
      'Users on three continents got the same fast, reliable service, with no big-bang migration.',
    summary:
      'Taking a founder-built platform from a single data center to cloud regions in North America, Europe and Asia, with traffic routed by geography.',
    problem:
      'The platform started in one data center. As the user base grew past 400,000 across North America, Europe and Asia, distance itself became the problem: every session from the far side of an ocean paid for it in latency and quality.',
    constraints: [
      'A small engineering team that also owned operations',
      'No downtime window: users were active in every time zone',
      'Real-time traffic, which a static CDN cannot hide',
      'Startup budget: capacity had to follow revenue',
    ],
    approach:
      'Keep one architecture and run it in three places. Each region carries the full web and application tier, users resolve to the nearest healthy region, and data replicates back to a primary. Regions went live one at a time, so every step could be rolled back.',
    diagram: {
      label: 'Geo-routed regional deployment',
      tiers: [
        { name: 'Users', nodes: [{ id: 'na', label: 'North America' }, { id: 'eu', label: 'Europe' }, { id: 'as', label: 'Asia' }] },
        { name: 'Edge', nodes: [{ id: 'geo', label: 'Geo-location routing', sub: 'nearest healthy region' }] },
        { name: 'Regions', nodes: [{ id: 'rna', label: 'Region NA', sub: 'web · app tier' }, { id: 'reu', label: 'Region EU', sub: 'web · app tier' }, { id: 'ras', label: 'Region APAC', sub: 'web · app tier' }] },
        { name: 'Data', nodes: [{ id: 'db', label: 'Primary data', sub: 'replicated' }] },
      ],
      edges: [['na', 'geo'], ['eu', 'geo'], ['as', 'geo'], ['geo', 'rna', null, true], ['geo', 'reu'], ['geo', 'ras'], ['rna', 'db', null, true], ['reu', 'db'], ['ras', 'db']],
    },
    decisions: [
      {
        question: 'How should distant users reach the platform?',
        options: [
          { label: 'Stay in one region and add a CDN', note: 'Cheap, but only static assets get faster. Real-time traffic still crosses the ocean.' },
          { label: 'Geo-routed full regional stacks', note: 'Every region serves the whole application. Users resolve to the nearest one.', chosen: true },
          { label: 'Separate product instance per market', note: 'Fast locally, but it forks the codebase and the team.' },
        ],
      },
      {
        question: 'How should the migration run?',
        options: [
          { label: 'Cut over everything at once', note: 'Short project, unbounded blast radius.' },
          { label: 'Region by region, reversible at each step', note: 'Slower, but each step is observable and can be rolled back.', chosen: true },
        ],
      },
    ],
    technology: ['Multi-tier web & mobile application', 'Data center design', 'Cloud regions (NA / EU / Asia)', 'Geo-location DNS routing', 'Data replication'],
    outcome: [
      '400k+ users served across North America, Europe and Asia',
      'Lower network latency and better quality for distant users',
      'Multimillion-dollar growth and a successful acquisition',
    ],
    lessons: [
      'Latency is a product feature. Users feel geography before they notice any new feature.',
      'Designing the first data center carefully made leaving it easier. Clean tiers moved as units.',
    ],
  },
  {
    slug: 'publishing-distribution',
    no: '302',
    title: 'Making a publishing platform compete on distribution',
    org: 'Media publishing platform',
    role: 'CTO',
    domain: ['Product engineering', 'Software architecture', 'Engineering leadership'],
    claim: 'Organic traffic, social traffic and social engagement each grew 50%.',
    summary:
      'Setting technical strategy for a portfolio of media titles, and treating search and social reach as platform capabilities.',
    problem:
      'Good content lost to larger publishers on search rankings and social feeds. The platform treated distribution as something editors did after publishing, not something the system was built for.',
    constraints: [
      'Several titles on one shared platform',
      'An editorial team that could not pause publishing',
      'Traffic depended on third-party algorithms outside our control',
    ],
    approach:
      'Move distribution into the platform itself: structured content in the CMS, fast cached rendering, and machine-readable metadata for search engines and social cards. Then measure every release against traffic and engagement.',
    diagram: {
      label: 'Publishing and distribution path',
      tiers: [
        { name: 'Editorial', nodes: [{ id: 'cms', label: 'Editorial CMS', sub: 'structured content' }] },
        { name: 'Platform', nodes: [{ id: 'api', label: 'Content service' }, { id: 'meta', label: 'Metadata', sub: 'search · social cards' }] },
        { name: 'Delivery', nodes: [{ id: 'render', label: 'Rendering', sub: 'cached pages' }] },
        { name: 'Channels', nodes: [{ id: 'search', label: 'Search' }, { id: 'social', label: 'Social' }, { id: 'direct', label: 'Direct & apps' }] },
      ],
      edges: [['cms', 'api', null, true], ['cms', 'meta'], ['api', 'render', null, true], ['meta', 'render'], ['render', 'search', null, true], ['render', 'social', null, true], ['render', 'direct']],
    },
    decisions: [
      {
        question: 'Where should distribution live?',
        options: [
          { label: 'In editorial process and checklists', note: 'Depends on every editor, every time.' },
          { label: 'In the shared platform', note: 'Every title gets it by default and improvements compound.', chosen: true },
          { label: 'Per-title custom builds', note: 'Local wins, but the platform fragments.' },
        ],
      },
    ],
    technology: ['Publishing platform', 'Content APIs', 'Caching & page performance', 'Structured data & social metadata', 'Analytics'],
    outcome: [
      'Organic traffic up 50%',
      'Social traffic up 50%',
      'Social engagement up 50%',
    ],
    lessons: [
      'A platform capability beats a process: it works on the busiest day, too.',
      'When the market is someone else’s algorithm, measurement is the roadmap.',
    ],
    verify: true,
  },
  {
    slug: 'public-service-modernization',
    no: '303',
    title: 'Modernizing a public-sector service without a big-bang rewrite',
    org: 'Yippify client engagement',
    role: 'Architecture & delivery lead',
    domain: ['Government technology', 'Software architecture', 'Cloud & infrastructure'],
    claim:
      'A legacy public service moved onto a modern, accessible platform while it stayed in service.',
    summary:
      'Replacing a legacy public-facing service incrementally, using a strangler pattern, Django and React on AWS, and infrastructure as code.',
    problem:
      'A government service ran on an ageing system that was hard to change, hard to secure and hard to use on a phone. Residents still depended on it every day, so switching it off to rebuild was not an option.',
    constraints: [
      'Continuous public availability',
      'Accessibility (WCAG) and security review as release gates',
      'Procurement and hand-over: the agency team must own the result',
      'Legacy data that could not be migrated in one step',
    ],
    approach:
      'Put an API facade in front of the legacy system, then replace one journey at a time behind it. New services run as containers on AWS, provisioned with Terraform, and ship through a pipeline with automated accessibility and security checks.',
    diagram: {
      label: 'Strangler migration behind an API facade',
      tiers: [
        { name: 'Residents', nodes: [{ id: 'web', label: 'Web app', sub: 'React · accessible' }] },
        { name: 'Facade', nodes: [{ id: 'gw', label: 'API facade', sub: 'routes by journey' }] },
        { name: 'Services', nodes: [{ id: 'new', label: 'New services', sub: 'Django · ECS' }, { id: 'old', label: 'Legacy system', sub: 'shrinking' }] },
        { name: 'Data', nodes: [{ id: 'pg', label: 'PostgreSQL', sub: 'RDS' }, { id: 'ldb', label: 'Legacy data' }] },
      ],
      edges: [['web', 'gw', null, true], ['gw', 'new', null, true], ['gw', 'old'], ['new', 'pg', null, true], ['old', 'ldb'], ['new', 'ldb', 'sync']],
    },
    decisions: [
      {
        question: 'How do we replace a system the public relies on daily?',
        options: [
          { label: 'Full rewrite, then switch over', note: 'Years without user value, plus one very risky launch day.' },
          { label: 'Lift-and-shift to the cloud', note: 'New hosting, same problems.' },
          { label: 'Strangler pattern behind an API facade', note: 'Ship one journey at a time. The legacy system shrinks with every release.', chosen: true },
        ],
      },
      {
        question: 'What stack will the agency own after we leave?',
        options: [
          { label: 'Bespoke microservice mesh', note: 'Powerful, but needs a platform team the agency does not have.' },
          { label: 'Django + React on managed AWS, all in Terraform', note: 'Conventional, well documented, and easy to hire for.', chosen: true },
        ],
      },
    ],
    technology: ['Python / Django', 'React', 'AWS ECS', 'RDS PostgreSQL', 'Terraform', 'CI/CD', 'WCAG accessibility'],
    outcome: [
      'Resident journeys moved to the new platform one at a time, with the service up throughout',
      'Accessibility and security checks built into every release',
      'Infrastructure and runbooks handed over to the agency team',
    ],
    lessons: [
      'In government, hand-over is the product. Design for the team that inherits it.',
      'A facade turns one terrifying migration into a series of boring releases.',
    ],
    verify: true,
  },
  {
    slug: 'document-intelligence',
    no: '304',
    title: 'LLM document processing with a human in the loop',
    org: 'Yippify client engagement',
    role: 'Architect & hands-on engineer',
    domain: ['AI & data', 'Software architecture', 'Hands-on engineering'],
    claim:
      'Document intake went from manual keying to reviewer-approved extraction, and every decision stays auditable.',
    summary:
      'Designing an LLM pipeline that extracts and classifies documents, grounds answers in the client’s own policy through retrieval, and sends low-confidence results to a person.',
    problem:
      'Staff re-keyed information from incoming documents by hand. The process was slow and error-prone, and it was hard to audit why a document was handled a certain way.',
    constraints: [
      'Wrong answers are expensive, so the model cannot have the last word',
      'Sensitive documents: data stays in the client’s cloud account',
      'Every automated decision must be explainable after the fact',
    ],
    approach:
      'An event-driven pipeline: documents land in storage, get OCR’d and chunked, and an LLM extracts fields using retrieval over the client’s policy corpus. A confidence score decides whether a result flows straight through or goes to a reviewer queue. Reviewer corrections become evaluation data.',
    diagram: {
      label: 'Document pipeline with confidence routing',
      tiers: [
        { name: 'Intake', nodes: [{ id: 'up', label: 'Upload', sub: 'S3' }] },
        { name: 'Process', nodes: [{ id: 'ocr', label: 'OCR & chunking', sub: 'Lambda' }] },
        { name: 'Reason', nodes: [{ id: 'llm', label: 'LLM extraction' }, { id: 'rag', label: 'Retrieval', sub: 'policy corpus' }] },
        { name: 'Route', nodes: [{ id: 'auto', label: 'Auto-approve', sub: 'high confidence' }, { id: 'rev', label: 'Reviewer queue', sub: 'low confidence' }] },
        { name: 'Record', nodes: [{ id: 'sor', label: 'System of record', sub: 'with audit trail' }] },
      ],
      edges: [['up', 'ocr', null, true], ['ocr', 'llm', null, true], ['rag', 'llm'], ['ocr', 'rag'], ['llm', 'auto'], ['llm', 'rev', null, true], ['auto', 'sor'], ['rev', 'sor', null, true]],
    },
    decisions: [
      {
        question: 'Fine-tune a model or ground it with retrieval?',
        options: [
          { label: 'Fine-tune on historical documents', note: 'Bakes today’s policy into weights, so every policy change means retraining.' },
          { label: 'Retrieval over the live policy corpus', note: 'Policy updates take effect immediately, and citations make answers auditable.', chosen: true },
        ],
      },
      {
        question: 'How much should run without a person?',
        options: [
          { label: 'Fully automated', note: 'Fastest, until the first confident mistake.' },
          { label: 'Confidence-routed human review', note: 'Automation where it is safe, people where it is not. Corrections feed evaluation.', chosen: true },
          { label: 'Suggestions only', note: 'Safe, but saves little time.' },
        ],
      },
    ],
    technology: ['LLM APIs', 'Retrieval-augmented generation', 'PostgreSQL + vector search', 'AWS S3 · Lambda', 'Python', 'React review UI'],
    outcome: [
      'Manual keying replaced by reviewer-approved extraction',
      'Every automated decision traceable to its source passages',
      'Reviewer corrections captured as evaluation data',
    ],
    lessons: [
      'The confidence threshold is a product decision, not a model setting.',
      'Evaluation data is the moat. Design the review UI to produce it.',
    ],
    verify: true,
  },
  {
    slug: 'event-driven-platform',
    no: '305',
    title: 'Event-driven microservices that stay consistent',
    org: 'SaaS platform',
    role: 'Architect & engineering lead',
    domain: ['Software architecture', 'Hands-on engineering', 'Engineering leadership'],
    claim:
      'Teams could ship services independently without breaking each other or losing events.',
    summary:
      'Moving a platform from tightly coupled synchronous calls to Kafka-based events, using a transactional outbox and idempotent consumers.',
    problem:
      'Services called each other synchronously. One slow dependency stalled every request behind it, and each team’s release had to be coordinated with the others.',
    constraints: [
      'No lost or double-applied business events',
      'Teams migrating at different speeds',
      'Existing PostgreSQL data as the source of truth',
    ],
    approach:
      'Services write state and an outbox record in one transaction. A relay publishes the outbox to Kafka, and consumers are idempotent, so retries are safe. Redis handles hot read paths. Synchronous calls remain only where a user is actually waiting.',
    diagram: {
      label: 'Outbox to Kafka with idempotent consumers',
      tiers: [
        { name: 'Producer', nodes: [{ id: 'svc', label: 'Service', sub: 'API' }] },
        { name: 'Commit', nodes: [{ id: 'db', label: 'PostgreSQL', sub: 'state + outbox' }] },
        { name: 'Stream', nodes: [{ id: 'relay', label: 'Outbox relay' }, { id: 'kafka', label: 'Kafka topics' }] },
        { name: 'Consumers', nodes: [{ id: 'c1', label: 'Billing', sub: 'idempotent' }, { id: 'c2', label: 'Notifications', sub: 'idempotent' }, { id: 'c3', label: 'Search index', sub: 'Redis cache' }] },
      ],
      edges: [['svc', 'db', null, true], ['db', 'relay', null, true], ['relay', 'kafka', null, true], ['kafka', 'c1', null, true], ['kafka', 'c2'], ['kafka', 'c3']],
    },
    decisions: [
      {
        question: 'How do we publish events without losing any?',
        options: [
          { label: 'Write to the database, then publish', note: 'A crash between the two steps loses the event.' },
          { label: 'Distributed transaction across DB and broker', note: 'Correct, but slow and operationally fragile.' },
          { label: 'Transactional outbox plus idempotent consumers', note: 'One local transaction. Replays are safe by design.', chosen: true },
        ],
      },
    ],
    technology: ['Kafka', 'PostgreSQL', 'Redis', 'Microservices', 'REST APIs', 'Docker'],
    outcome: [
      'Services release independently',
      'A slow dependency no longer stalls unrelated requests',
      'Event delivery is safe to retry end to end',
    ],
    lessons: [
      'Exactly-once is a property you design with idempotency, not a setting you buy.',
      'Keep synchronous calls for where a person is waiting. Everything else can be an event.',
    ],
    related: { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether a microservice should actually be a microservice' },
    verify: true,
  },
  {
    slug: 'carrier-capacity',
    no: '306',
    title: 'Capacity planning across 2,000+ collocations',
    org: 'National broadband network',
    role: 'Member of Technical Staff',
    domain: ['Cloud & infrastructure', 'Reliability', 'Security'],
    claim:
      'The network expanded nationwide while service held steady and operations stayed repeatable.',
    summary:
      'Integration, expansion and capacity planning for ATM, IP, VoIP and OC infrastructure across a national broadband footprint.',
    problem:
      'A broadband network spread over 2,000+ collocations had to keep adding customers and services, including VoIP, without degrading the service it already carried.',
    constraints: [
      'Nationwide footprint, long hardware lead times',
      'Several network generations running side by side (ATM, IP, VoIP)',
      'Security services running on shared infrastructure',
    ],
    approach:
      'Plan capacity from measured utilization rather than forecasts alone. Standardize integration and deployment steps so expansions repeat cleanly, and build the process, training and escalation paths that let operations scale beyond a few experts.',
    diagram: {
      label: 'Carrier network hierarchy',
      tiers: [
        { name: 'Access', nodes: [{ id: 'cust', label: 'Subscribers', sub: 'DSL · VoIP' }] },
        { name: 'Collocation', nodes: [{ id: 'colo', label: '2,000+ collocations', sub: 'access equipment' }] },
        { name: 'Backbone', nodes: [{ id: 'atm', label: 'ATM / IP backbone', sub: 'OC transport' }] },
        { name: 'Services', nodes: [{ id: 'ip', label: 'IP services' }, { id: 'sec', label: 'Network security' }, { id: 'voip', label: 'VoIP' }] },
      ],
      edges: [['cust', 'colo', null, true], ['colo', 'atm', null, true], ['atm', 'ip', null, true], ['atm', 'sec'], ['atm', 'voip']],
    },
    decisions: [
      {
        question: 'How should capacity be added?',
        options: [
          { label: 'React to congestion', note: 'Customers find the problem before you do.' },
          { label: 'Plan from measured utilization', note: 'Order ahead of lead times, where the data says growth is.', chosen: true },
        ],
      },
    ],
    technology: ['ATM', 'IP', 'VoIP', 'OC transport', 'Network security services', 'Capacity planning'],
    outcome: [
      'Integration and expansion across a 2,000+ collocation footprint',
      'Process, training and escalation for network security and IP services',
    ],
    lessons: [
      'Reliability is mostly process. Heroics do not scale to 2,000 sites.',
      'Everything I know about systems thinking started here.',
    ],
  },
];

export const caseBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
