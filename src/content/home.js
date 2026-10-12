// Homepage sections below the hero. Every fact here appears elsewhere on the
// site with its source; nothing is stated only here. Employers unnamed, no years.

// 001 · Impact: six verified accomplishments, each linking to its evidence.
export const impact = [
  { figure: '20+', text: 'years in technology, from the helpdesk to the boardroom', to: '/about/' },
  { figure: 'Acquired', text: 'co-founded a communications company and led it to acquisition, staying on the board', to: '/writing/building-a-startup-from-idea-to-acquisition/#acquisition' },
  { figure: '400,000+', text: 'users served from cloud regions on three continents', to: '/work/three-continent-platform/' },
  { figure: '30+', text: 'engineers, VoIP specialists and designers led, including fully remote teams', to: '/experience/#communications' },
  { figure: '~30%', text: 'lower AWS costs on a publishing re-platform, with traffic and engagement up 50%', to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost' },
  { figure: 'Federal', text: 'applications engineered to security authorization, Section 508 and Plain Writing requirements', to: '/writing/building-federal-government-applications/' },
];

// 002 · Career timeline: seven stages in the order lived. Stages, not dates.
export const careerStages = [
  {
    id: 'carrier', name: 'Carrier networks', role: 'Member of technical staff, national broadband network',
    tech: 'Cisco routing and ACLs, ATM, IP and VoIP, SNMP and Cacti, Expect and shell, an R forecasting program',
    did: 'Integration, expansion and capacity planning across 2,000+ collocations; operations for network security and IP services.',
    lesson: 'Measure first, plan from data, and order ahead of the lead time.',
    to: '/work/carrier-capacity/', label: 'Case study: capacity across 2,000+ collocations',
  },
  {
    id: 'security', name: 'Network security', role: 'One of the first three in a new Security Operations Center',
    tech: 'Cisco ACLs, NetScreen firewalls and IPsec VPNs, managed security services',
    did: 'Supported the launch of a managed firewall and VPN service, built its operational process, and trained the Technical Assistance Center on the East Coast.',
    lesson: 'A rule that blocks real traffic is an outage with a security label on it.',
    to: '/writing/network-security-before-devsecops/', label: 'Network security long before DevSecOps',
  },
  {
    id: 'voip', name: 'VoIP', role: 'VP of Operations, voice services, then co-founder',
    tech: 'Asterisk, OpenSIPS, MediaProxy, SIP, Python AGI, C++ on Nokia phones',
    did: 'Ran the server farm behind 8M+ VoIP minutes a month, planned expansion ahead of demand, and built least-cost and geolocation routing with in-house billing.',
    lesson: 'Quality, cost and security are one decision; the cheapest route is often cheap for a reason.',
    to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What VoIP taught me about distributed systems',
  },
  {
    id: 'founder', name: 'Startup founder', role: 'Co-founder and CTO, global communications platform',
    tech: 'A multi-tier web and mobile platform, a data center cabled by hand, then cloud regions on three continents',
    did: '400,000+ users across South America, Asia and Africa, revenue in under four months, a team of 30+, multimillion-dollar growth and an acquisition with a board seat.',
    lesson: 'Build for the person using the system, not for the engineers building it.',
    to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder story: from an idea to an acquisition',
  },
  {
    id: 'architecture', name: 'Software architecture', role: 'CTO, media publishing; architect on client platforms',
    tech: 'Ruby on Rails, Python and Django, React and Next.js, PostgreSQL, Redis, Kafka',
    did: 'Re-platformed a publishing portfolio from WordPress to Rails on AWS, with organic and social traffic up 50%; event-driven services on Kafka; APIs with authorization enforced on the record.',
    lesson: 'A boundary should pay for itself, and the rent is due monthly.',
    to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Architecture lessons from very different systems',
  },
  {
    id: 'leadership', name: 'Engineering leadership', role: 'CTO, VP of Operations, interim head of engineering',
    tech: 'Decisions in writing, small pull requests, frequent deploys, security and accessibility as release gates',
    did: 'Led engineering at a startup through acquisition, at a media publisher, and for client teams, including fully remote ones; mentored engineers into leads.',
    lesson: 'The measure of a lead is the team that works without them.',
    to: '/leadership/', label: 'How I run engineering',
  },
  {
    id: 'cloud-ai', name: 'Cloud & AI', role: 'Consultant and founder, Yippify',
    tech: 'AWS with ECS and Fargate, Lambda, RDS, Terraform, GitHub Actions; LLM document processing; an AI assistant in the terminal',
    did: 'About 30% lower AWS costs on a re-platform; federal applications built to security authorization and accessibility requirements; FedPath and Useful Little Tools shipped with AI assistance.',
    lesson: 'Capacity became a bill, and the tools keep changing. Keep learning.',
    to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI',
  },
];

// 003 · Case-study previews: the same five-step flow for each. Outcomes are
// the ones already published; qualitative where no figure is confirmed.
export const caseStudies = [
  {
    id: 'snmp', name: 'SNMP capacity forecasting with R', where: 'Carrier network',
    steps: [
      'Links filled months before replacement hardware could arrive',
      'Interface statistics over SNMP; the peaks, not the average, told the story',
      'A headroom threshold decided in advance, per link',
      'An R program forecasting when each link would cross it',
      'Upgrades ordered ahead of lead times instead of after congestion',
    ],
    to: '/writing/data-driven-engineering-network-voip-publishing/#capacity', label: 'The data-to-decision loop',
  },
  {
    id: 'voip', name: 'VoIP least-cost routing and voice quality', where: 'Communications platform',
    steps: [
      'The cheapest carrier route often failed to connect or sounded bad',
      'Answer rates, call durations, completion and quality by route and destination',
      'Balance cost against quality; choose media paths by caller location',
      'Call statistics fed into routing; source-IP geolocation for the media path',
      'Better call quality for distant users and less bandwidth paid for',
    ],
    to: '/writing/open-source-voip-distributed-systems-lessons/#routing', label: 'Routing as a business decision',
  },
  {
    id: 'publishing', name: 'Publishing SEO and revenue analytics', where: 'Media publishing platform',
    steps: [
      'A portfolio of titles competing for audience against far larger publishers',
      'Traffic sources, rankings, engagement and revenue per thousand views by page',
      'Treat speed, structure and distribution as platform features',
      'Re-platform from WordPress to Rails on AWS; structured, answerable pages',
      'Organic traffic, social traffic and engagement each up 50%',
    ],
    to: '/work/publishing-distribution/', label: 'Case study: competing on distribution',
  },
  {
    id: 'aws', name: 'AWS modernization and cost optimization', where: 'Media publishing platform',
    steps: [
      'Hosting sized for a peak that never came back, on a stack that was hard to change',
      'Utilization, instance sizing, database load and the pages that never changed',
      'Right-size, scale on real demand, fix the database before buying a bigger one',
      'Caching, query and connection fixes, unused resources removed, Terraform-managed infrastructure',
      'About 30% lower AWS costs, with faster pages',
    ],
    to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost', label: 'Cloud capacity is a bill',
  },
  {
    id: 'federal', name: 'Federal application security, accessibility and compliance', where: 'Government technology, Yippify',
    steps: [
      'Applications that must be demonstrably secure, accessible and maintainable',
      'Which controls the platform inherits and which the application owns',
      'Security, Section 508 and Plain Writing in the acceptance criteria, not a launch-week audit',
      'Server-side authorization, audit logs, infrastructure as code, a pipeline that leaves evidence',
      'Engineering evidence that supports the Authority to Operate',
    ],
    to: '/writing/building-federal-government-applications/', label: 'What building federal applications taught me',
  },
];

export const caseSteps = ['Problem', 'Analysis', 'Decision', 'Implementation', 'Outcome'];

// 004 · Leadership flow: six steps and a loop, each tied to a practice.
export const leadershipFlow = [
  { name: 'Business goals', text: 'Start from the outcome the business needs, in its own words, and name the unknowns.', to: '/leadership/#ambiguity' },
  { name: 'Technical strategy', text: 'Architecture decisions in writing, with the options, the choice and what it costs to run.', to: '/leadership/#decisions' },
  { name: 'Team alignment', text: 'Every engineer can say why their task matters; product, QA and leadership are in the same loop.', to: '/leadership/#cross-functional' },
  { name: 'Execution', text: 'Small stacked pull requests, frequent low-risk deploys, security and accessibility as release gates.', to: '/leadership/#execution' },
  { name: 'Measurement', text: 'Lead time, change-failure rate, sprint carryover and the infrastructure bill, read every cycle.', to: '/writing/what-sprint-carryover-is-telling-you/' },
  { name: 'Continuous improvement', text: 'Pay down the debt that slows the roadmap, and grow engineers into leaders so the system improves without me.', to: '/leadership/#mentoring' },
];
