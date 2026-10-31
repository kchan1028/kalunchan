// Engineering work and illustrative architecture discussions. `illustrative`
// entries describe hypothetical scenarios, not completed engagements.
// `verify: true` marks remaining inferred details in CONTENT-REVIEW.md.
//
// Diagram spec: `tiers` are drawn left→right on wide screens and top→bottom on
// narrow ones. `edges` connect node ids; `accent` marks the path the decision
// section is about.

export const cases = [
  {
    slug: 'three-continent-platform',
    // First published (git history). The sitemap and dateModified come from src/lastmod.json.
    published: '2026-09-26',
    no: '301',
    title: 'From one data center to three continents',
    seoTitle: 'Data Center to Three Continents: CTO Case Study',
    description: 'As co-founder and CTO, I moved a platform serving 400,000+ users from one data center to cloud regions on three continents, with zero downtime.',
    org: 'Global communications platform',
    role: 'Co-Founder & CTO',
    domain: ['Cloud & infrastructure', 'Software architecture', 'Engineering leadership'],
    claim:
      'Users on three continents got the same service, with no big-bang migration.',
    summary:
      'Moving a founder-built platform out of a single data center and into the cloud. Each user’s traffic went to the nearest region.',
    problem:
      'The platform started in one data center. As the user base grew past 400,000 across South America, Asia and Africa, distance itself became the problem: every session from the far side of an ocean paid for it in latency and quality.',
    context: [
      'I co-founded the company and ran engineering as CTO. The platform carried VoIP and cloud telecom services for underserved and underbanked communities, many of them immigrants, sold directly and through local resellers who ran their own businesses on our hosted platform. It was built on open-source VoIP with an in-house billing system, and it handled millions of dollars in transactions.',
      'We built the first data center ourselves: racked the servers, ran the cabling, configured the routers and switches, and wrote the software. We planned it deliberately, with web, application and data as separate tiers for clarity, and that choice later made leaving possible.',
      'Real-time voice is the hard case for distance. Audio that crosses an ocean twice arrives late and arrives damaged, and no amount of server capacity fixes latency. A data center also buys capacity in large, lumpy steps, while a startup’s revenue grows in small, uneven ones.',
    ],
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
        { name: 'Users', nodes: [{ id: 'sa', label: 'South America' }, { id: 'af', label: 'Africa' }, { id: 'as', label: 'Asia' }] },
        { name: 'Edge', nodes: [{ id: 'geo', label: 'Geo-location routing', sub: 'nearest healthy region' }] },
        { name: 'Regions', nodes: [{ id: 'rna', label: 'Region NA', sub: 'web · app tier' }, { id: 'reu', label: 'Region EU', sub: 'web · app tier' }, { id: 'ras', label: 'Region APAC', sub: 'web · app tier' }] },
        { name: 'Data', nodes: [{ id: 'db', label: 'Primary data', sub: 'replicated' }] },
      ],
      edges: [['sa', 'geo'], ['af', 'geo'], ['as', 'geo'], ['geo', 'rna', null, true], ['geo', 'reu'], ['geo', 'ras'], ['rna', 'db', null, true], ['reu', 'db'], ['ras', 'db']],
    },
    decisions: [
      {
        question: 'How should distant users reach the platform?',
        options: [
          { label: 'Stay in one region and add a CDN', note: 'Cheap, but only static assets get faster. Real-time traffic still crosses the ocean.' },
          { label: 'Geo-routed full regional stacks', note: 'Every region serves the whole application. Users resolve to the nearest one.', chosen: true },
          { label: 'Separate product instance per market', note: 'Fast locally, but it forks the codebase and the team.' },
        ],
        why: 'Voice can’t hide behind a cache, so a CDN would have sped up the parts users noticed least. A separate instance per market would have meant a forked codebase and a team split across it. Running the same architecture in each region kept one product and one team, and the clean tiers from the first data center moved as units.',
      },
      {
        question: 'Which path should a call’s audio take?',
        options: [
          { label: 'Relay every call through one site', note: 'Simple to run, but distant callers’ audio crosses the world and back.' },
          { label: 'Choose the media path from the caller’s location', note: 'Estimate location from the source IP and use the nearest appropriate media path, with a fallback.', chosen: true },
        ],
        why: 'Geolocation from an IP address is an estimate, so the routing needed a sensible fallback for when it was wrong. As a single change it raised call quality for distant users and cut the bandwidth bill, because we stopped paying to haul audio across the world and back.',
      },
      {
        question: 'How should the migration run?',
        options: [
          { label: 'Cut over everything at once', note: 'Short project, unbounded blast radius.' },
          { label: 'Region by region, reversible at each step', note: 'Slower, but each step is observable and can be rolled back.', chosen: true },
        ],
        why: 'Users were active in every time zone, so there was never a quiet hour to cut over. Going one region at a time meant each step could be watched under real traffic and reversed if it misbehaved, at the cost of a longer project.',
      },
    ],
    execution: [
      'Each region carried the full web and application tier. Users resolved to the nearest healthy region through geo-location DNS, and data replicated back to a primary. Regions went live one at a time, with customers on calls throughout and a way back at every step.',
      'Media routing changed alongside the regions. We estimated each caller’s location from the source IP and steered the audio through the nearest appropriate media path instead of hairpinning it through a single site. Least-cost routing picked the cheapest carrier for each call, and we tuned it with call statistics so the cheapest route also had to deliver acceptable quality.',
      'The team that built the platform also ran it, so the migration happened alongside day-to-day operations rather than as a separate project. Over the life of the company the team grew to more than 30 people, and the architecture grew with the customer base.',
    ],
    technology: ['Multi-tier web & mobile application', 'Open-source VoIP (Asterisk, OpenSIPS, MediaProxy)', 'In-house billing system', 'Least-cost routing', 'Data center design', 'Cloud regions (NA / EU / Asia)', 'Geo-location DNS routing', 'Data replication'],
    outcome: [
      '400k+ users served across South America, Asia and Africa',
      'Lower network latency and better quality for distant users',
      'A lower cost structure: capacity followed revenue, and audio stopped crossing the world and back',
      'Multimillion-dollar growth and a successful acquisition',
    ],
    lessons: [
      'Latency is a product feature. Users feel geography before they notice any new feature.',
      'Designing the first data center carefully made leaving it easier. Clean tiers moved as units.',
      'The best capacity decisions avoid consuming capacity in the first place.',
    ],
    tradeoffs: [
      'Three regions took more operational attention than one site. We accepted that because capacity could follow revenue instead of leading it by a rack at a time.',
      'Replicating to one primary kept data consistent and easy to reason about, at the cost of writes from distant regions travelling further than reads.',
      'A staged rollout took longer than a single cutover. The extra time bought a way back at every step.',
    ],
    related: [
      { to: '/writing/building-a-startup-from-idea-to-acquisition/#business', label: 'The founder story behind this platform, from 0→1 to acquisition' },
      { to: '/writing/should-it-be-a-microservice/#modular-monolith', label: 'Why scale alone isn’t a reason to split a monolith' },
    ],
  },
  {
    slug: 'publishing-distribution',
    illustrativeDecisions: true,
    published: '2026-09-26',
    no: '302',
    title: 'Making a publishing platform compete on distribution',
    seoTitle: 'Media Publishing CTO Case Study: Search & Social',
    description: 'As CTO of a media publishing platform, I built search and social distribution into the platform. Organic traffic, social traffic and engagement each grew 50%.',
    org: 'Media publishing platform',
    role: 'CTO',
    domain: ['Product engineering', 'Software architecture', 'Engineering leadership'],
    claim: 'Organic traffic, social traffic and social engagement each grew 50%.',
    summary:
      'Setting technical strategy for a group of media titles. Search and social reach were built into the platform once, for every title.',
    problem:
      'Good content lost to larger publishers on search rankings and social feeds. The platform treated distribution as something editors did after publishing, not something the system was built for.',
    context: [
      'I was CTO of a media publishing platform: a portfolio of titles on one shared platform, competing for readers with media companies far larger than us. I owned technical strategy and engineering, and worked on business and operations with the CEO and the partners across the affiliated publishing network.',
      'In publishing, content is both the product and the distribution channel. An article is what a reader came for and also the reason they found the site. So an article wasn’t finished when an editor pressed publish. It was finished when it could be found, understood, shared and read on whatever device someone was holding, and most of that depended on engineering.',
      'The site worked and it stayed up. The readers we wanted just weren’t finding it.',
    ],
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
        why: 'Automating shared metadata can reduce the number of publishing steps an editor has to remember. A shared implementation also lets titles benefit from the same validation and updates.',
      },
      {
        question: 'What should the titles run on?',
        options: [
          { label: 'Keep extending the WordPress sites', note: 'Least effort now, but rendering, caching and metadata stay hard to control across titles.' },
          { label: 'Re-platform to Ruby on Rails on AWS', note: 'One codebase for every title, with the delivery path under engineering control.', chosen: true },
        ],
        why: 'The move was also the chance to fix the infrastructure bill: right-size instances provisioned for a peak that never came back, scale the web tier on real demand, fix database queries and connection handling, cache pages that didn’t change between requests, and remove resources nobody remembered creating. Those improvements contributed to AWS costs about 30% lower.',
      },
      {
        question: 'How do we know a release helped?',
        options: [
          { label: 'Ship it and judge by whether it works', note: 'Says nothing about whether anyone found the content.' },
          { label: 'Measure every release against traffic and engagement', note: 'Which channel brought readers, what they did next, and whether the page answered what they came for.', chosen: true },
        ],
        why: 'Most of our audience arrived through algorithms we didn’t control, and traffic alone was a poor scoreboard: a page that ranks for a search it doesn’t answer brings in visitors who leave immediately. Measuring what readers did ended up shaping much of the roadmap.',
      },
    ],
    execution: [
      'We put structure into the CMS so every article carried what search engines and social platforms read: titles, descriptions, authors, dates and images. Metadata and social cards were generated from that structure automatically instead of typed by hand.',
      'Technical SEO became part of engineering review: readable, stable URLs, permanent redirects whenever something moved, one canonical URL per piece of content, current sitemaps, internal links between related pages, content included in the HTML a crawler receives, and pages that load fast on a phone.',
      'Social cards got the same treatment. A shared link is judged in a second or two on a title, a description and an image, so headlines written for a feed, images sized for each platform and fast loads from mobile became platform features.',
      'Editorial knew what readers wanted, marketing knew where they came from, and the business side knew which audiences mattered most. Engineering controlled whether the platform made any of that easy or hard, so the work included bringing those people into a decision before the release, not after the traffic dropped.',
    ],
    technology: ['Ruby on Rails', 'AWS', 'Publishing platform', 'Content APIs', 'Caching & page performance', 'Structured data & social metadata', 'Analytics'],
    outcome: [
      'Organic traffic up 50%',
      'Social traffic up 50%',
      'Social engagement up 50%',
      'Infrastructure improvements contributed to about 30% lower AWS costs',
    ],
    lessons: [
      'Automating common publishing checks can reduce manual work, though the generated output still needs validation.',
      'When the market is someone else’s algorithm, measurement is the roadmap.',
      'Search value builds up over years and can be lost in one release by a team that didn’t know it was there.',
    ],
    tradeoffs: [
      'A re-platform carries search risk: every changed URL can throw away the rankings and links the old page earned, so redirect maps were part of the work.',
      'Investing in the shared platform meant some title-specific requests waited. The return was improvements that compounded across every title.',
    ],
    related: { to: '/writing/what-publishing-taught-me-about-seo-aeo-geo/', label: 'What being a CTO in publishing taught me about SEO, AEO and GEO' },
    verify: true,
  },
  {
    slug: 'event-driven-platform',
    illustrative: true,
    published: '2026-09-26',
    no: '305',
    title: 'Event-driven microservices that stay consistent',
    seoTitle: 'Event-Driven Microservices With Kafka: Design Example',
    org: 'Illustrative SaaS scenario',
    role: 'Design example',
    domain: ['Software architecture', 'Hands-on engineering', 'Engineering leadership'],
    claim:
      'A proposed design for independent consumers, durable event publication and safe retries.',
    summary:
      'An illustrative Kafka design using a transactional outbox and idempotent consumers to recover from publication failures and duplicate delivery.',
    problem:
      'Consider services connected by synchronous calls, where a slow downstream dependency delays unrelated work. The example explores moving suitable reactions to events while preserving synchronous responses where users need them.',
    constraints: [
      'No lost or double-applied business events',
      'Teams migrating at different speeds',
      'Existing PostgreSQL data as the source of truth',
    ],
    approach:
      'Services write state and an outbox record in one transaction. A relay publishes the outbox to Kafka, and consumers are idempotent, so retries are safe. Redis handles hot read paths. Synchronous calls remain only where a user is waiting.',
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
      'Allow consumers to release independently within compatible event contracts',
      'Keep slow asynchronous consumers off the user’s request path',
      'Verify recovery from duplicate delivery and partial failure',
    ],
    lessons: [
      'Idempotency helps make retries safe, but its guarantees depend on where state is recorded and which side effects are covered.',
      'Use synchronous calls where an immediate response is required. For other work, compare a background job with an event stream before choosing.',
    ],
    related: { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether a microservice should actually be a microservice' },
    verify: true,
  },
  {
    slug: 'carrier-capacity',
    published: '2026-09-26',
    no: '306',
    title: 'Capacity planning across 2,000+ collocations',
    seoTitle: 'Carrier Network Capacity Planning Case Study',
    description: 'Capacity planning for a national broadband network across 2,000+ collocations, from ATM and OC circuits to IP and VoIP, ordered ahead of hardware lead times.',
    org: 'National broadband network',
    role: 'Member of Technical Staff',
    domain: ['Cloud & infrastructure', 'Reliability', 'Security'],
    claim:
      'The network expanded nationwide while service held steady and operations stayed repeatable.',
    summary:
      'Planning capacity and growth for a national broadband network, from ATM and OC circuits to IP and VoIP.',
    problem:
      'A broadband network spread over 2,000+ collocations had to keep adding customers and services, including VoIP, without degrading the service it already carried.',
    context: [
      'This was my first capacity planning job, as a Member of Technical Staff. Capacity meant physical things: bandwidth on a circuit, ports on a router, slots in a chassis, power and cooling in a cabinet. When a link filled up, the fix was a purchase order, a shipping date and a technician driving to a site. Noticing a link fill up the week it filled up meant you were already a quarter late.',
      'I worked on integration, expansion, deployment and capacity planning for the ATM, IP, VoIP and OC infrastructure, and on operations for the Network Security and IP Services group: Cisco router access control lists and the managed firewall and VPN service built on NetScreen.',
      'A mistake in either direction was expensive. Too little capacity meant congestion customers could feel. Too much meant equipment sitting dark for years that someone had already paid for.',
    ],
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
        why: 'We pulled interface statistics over SNMP, graphed them in Cacti, and projected the trend far enough ahead to order before the lead time ran out. Where the data showed growth, the next circuit or line card went there. Where it showed nothing, nothing was ordered, however loudly someone wanted a bigger box.',
      },
      {
        question: 'When is high utilization a plan, and when is it an incident?',
        options: [
          { label: 'Decide case by case as links fill', note: 'The call gets made at two in the morning by whoever is on shift.' },
          { label: 'Headroom thresholds set in advance', note: 'Written down: which level triggers an order, which level is an incident.', chosen: true },
        ],
        why: 'Every system has one resource that fills first, and the forecast only matters for that one. On a router it might be a specific uplink, not the chassis. Writing the thresholds down took the decision out of the moment.',
      },
      {
        question: 'How should operations scale with the footprint?',
        options: [
          { label: 'Rely on the few experts who know the network', note: 'Works until they’re on vacation or the footprint doubles.' },
          { label: 'Standard process, training and escalation', note: 'Expansions repeat cleanly, and more people can run them.', chosen: true },
        ],
        why: 'I was one of the first three people supporting the new managed security service in the Security Operations Center, and travelled to the East Coast to train the Technical Assistance Center. Training the next tier was how the service stopped depending on the first three of us.',
      },
    ],
    execution: [
      'Expansion followed a standard integration and deployment process, so adding capacity at one site looked like adding it at any other. Process development, training, escalation support and deployment covered the ATM, IP and VoIP networks and the network security services.',
      'Several network generations ran side by side, so capacity in one layer wasn’t capacity in another. Each layer was planned from its own utilization data rather than from a single network-wide number.',
      'Security services shared the same infrastructure, so a congested link was also a security problem. Access control lists on Cisco routers and the NetScreen managed firewall and VPN service sat with IP services in the same operations group, which meant capacity and security had to be planned together.',
    ],
    technology: ['ATM', 'IP', 'VoIP', 'OC transport', 'SNMP & Cacti', 'Cisco ACLs', 'NetScreen firewall & VPN', 'Capacity planning'],
    outcome: [
      'Integration and expansion across a 2,000+ collocation footprint',
      'Process, training and escalation for network security and IP services',
      'A capacity method I still use on cloud infrastructure: measure first, plan from data, decide the headroom in advance, and know which resource fills first',
    ],
    lessons: [
      'Reliability is mostly process. Heroics do not scale to 2,000 sites.',
      'This is where I first learned to find the resource that fills first.',
    ],
    tradeoffs: [
      'Ordering ahead of lead times means paying for capacity before the demand arrives. Planning from measured trends kept that bet small and specific.',
      'Standard process is slower than an expert improvising, and it’s the only version that works across 2,000 sites.',
    ],
    related: { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'What this network taught me about scaling cloud infrastructure' },
  },
];

export const caseBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
