// Homepage sections below the hero. Every fact here appears elsewhere on the
// site with its source; nothing is stated only here. Employers unnamed, no years.

// 001 · Impact: six verified accomplishments, each linking to its evidence.
export const impact = [
  { figure: 'Every layer', text: 'of a company, from the helpdesk and network operations to the boardroom', to: '/about/' },
  { figure: 'Acquired', text: 'co-founded a communications company and led it to acquisition, then stayed on after the sale', to: '/writing/building-a-startup-from-idea-to-acquisition/#acquisition' },
  { figure: '400,000+', text: 'users served from cloud regions on three continents', to: '/work/three-continent-platform/' },
  { figure: '30+', text: 'people in the team I built as co-founder and CTO, and fully remote teams after it', to: '/experience/#communications' },
  { figure: '~30%', text: 'lower AWS costs on a publishing re-platform, with traffic and engagement up 50%', to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost' },
  { figure: 'Public sector', text: 'applications engineered to security authorization and Section 508 requirements', to: '/writing/building-public-sector-applications/' },
];

// 002 · Career timeline: seven stages in the order lived. Stages, not dates.
export const careerStages = [
  {
    id: 'carrier', name: 'Carrier networks', role: 'Member of technical staff, national broadband network',
    tech: 'Cisco routing and ACLs, ATM, IP and VoIP, SNMP and Cacti, Expect and shell, an R forecasting program',
    did: 'Capacity planning and expansion across 2,000+ collocations. Operations for network security and IP services.',
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
    did: 'Ran the server farm behind 8M+ VoIP minutes a month and planned its expansion ahead of demand. Built least-cost and geolocation routing with in-house billing.',
    lesson: 'Quality, cost and security are one decision; the cheapest route is often cheap for a reason.',
    to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What VoIP taught me about distributed systems',
  },
  {
    id: 'founder', name: 'Startup founder', role: 'Co-founder and CTO, global communications platform',
    tech: 'A multi-tier web and mobile platform, a data center cabled by hand, then cloud regions on three continents',
    did: '400,000+ users across South America, Asia and Africa, with revenue in under four months. Growth reached multimillion-dollar levels, then an acquisition.',
    lesson: 'Build for the person using the system, not for the engineers building it.',
    to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder story: from an idea to an acquisition',
  },
  {
    id: 'architecture', name: 'Software architecture', role: 'CTO, media publishing; architect on client platforms',
    tech: 'Ruby on Rails, Python and Django, React and Next.js, PostgreSQL, Redis, Kafka',
    did: 'Re-platformed a publishing portfolio from WordPress to Rails on AWS. Organic traffic, social traffic and social engagement each grew 50%, and infrastructure improvements contributed to about 30% lower AWS costs. Built event-driven services on Kafka and APIs that enforce authorization on the record.',
    lesson: 'A service boundary needs to justify its ongoing infrastructure and support cost.',
    to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Architecture lessons from very different systems',
  },
  {
    id: 'leadership', name: 'Engineering leadership', role: 'CTO, VP of Operations, interim head of engineering',
    tech: 'Decisions in writing, small pull requests, frequent deploys, security and accessibility as release gates',
    did: 'Led engineering at a startup through its acquisition and at a media publisher, then for client teams, some fully remote. Mentored engineers into leads.',
    lesson: 'Help the team make decisions without depending on one person.',
    to: '/leadership/', label: 'How I run engineering',
  },
  {
    id: 'cloud-ai', name: 'Cloud & AI', role: 'Consultant, Yippify',
    tech: 'AWS with ECS and Fargate, Lambda, RDS, Terraform, GitHub Actions; LLM document processing; an AI assistant in the terminal',
    did: 'Public-sector applications built to security authorization and accessibility requirements. FedPath and Useful Little Tools shipped with AI assistance.',
    lesson: 'Capacity became a bill, and the tools keep changing. Keep learning.',
    to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI',
  },
];

// 003 · Case-study previews: the same five-step flow for each. Outcomes are
// the ones already published; qualitative where no figure is confirmed.
// Thumbnail strip under the homepage hero. Each card links to the live site.
export const builtSites = [
  { name: 'VeloWise', type: 'Engineering delivery intelligence', url: 'https://getvelowise.com/', domain: 'getvelowise.com', src: '/images/projects/velowise-desktop-1200.webp', alt: 'VeloWise product visual: the headline “See beyond velocity. Understand delivery.” above a chart of work moving from requirements to release.', width: 1200, height: 630 },
  { name: 'FedPath', type: 'Government contracting platform', url: 'https://gofedpath.com/', domain: 'gofedpath.com', src: '/images/projects/fedpath-desktop-640.webp', alt: 'FedPath home page on desktop, headed “Find government contracts worth pursuing, before you spend hours analyzing them.”', width: 640, height: 400 },
  { name: 'SurgeIQ', type: 'Cycling training insights', url: 'https://getsurgeiq.com/', domain: 'getsurgeiq.com', src: '/images/projects/surgeiq-desktop-1440.webp', alt: 'SurgeIQ home page on desktop: the headline “Your cycling stats. Free.” beside a watts-per-kilogram demo.', width: 1440, height: 900 },
  { name: 'Useful Little Tools', type: 'Small-tools playground', url: 'https://usefullittletools.app/', domain: 'usefullittletools.app', src: '/images/projects/tools-desktop-1440.webp', alt: 'Useful Little Tools home page on desktop: the headline “Small developer tools for problems you shouldn’t have to solve twice” and a tool search box.', width: 1440, height: 900 },
  { name: 'Union City Smog Check', type: 'Local business website', url: 'https://unioncitysmogcheck.com/', domain: 'unioncitysmogcheck.com', src: '/images/projects/smog-desktop-640.webp', alt: 'Union City Smog Check home page on desktop, with the headline and a photo of the station.', width: 640, height: 400 },
  { name: 'Berkeley Omnium', type: 'Community and event website', url: 'https://berkeleyomnium.com/', domain: 'berkeleyomnium.com', src: '/images/projects/omnium-desktop-640.webp', alt: 'Berkeley Omnium home page on desktop, with the headline over race footage.', width: 640, height: 400 },
];

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
      'Traffic sources and revenue per thousand views, page by page',
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
      'Database load, and the pages that never changed',
      'Right-size, scale on real demand, fix the database before buying a bigger one',
      'Caching and query fixes, with Terraform-managed infrastructure',
      'Infrastructure improvements contributed to about 30% lower AWS costs',
    ],
    to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost', label: 'Cloud capacity is a bill',
  },
  {
    id: 'federal', name: 'Public-sector application security, accessibility and compliance', where: 'Government technology, Yippify',
    steps: [
      'Applications that must prove they are secure and accessible',
      'Which controls the platform inherits and which the application owns',
      'Security, Section 508 and Plain Writing written into the acceptance criteria from the start',
      'Server-side authorization and audit logs, with a pipeline that leaves evidence',
      'Engineering evidence that supports the Authority to Operate',
    ],
    to: '/writing/building-public-sector-applications/', label: 'What building public-sector applications taught me',
  },
];

export const caseSteps = ['Problem', 'Analysis', 'Decision', 'Implementation', 'Outcome'];

// 004 · Leadership flow: six steps and a loop, each tied to a practice.
export const leadershipFlow = [
  { name: 'Business goals', text: 'Start from the outcome the business needs, in its own words, and name the unknowns.', to: '/leadership/#ambiguity' },
  { name: 'Technical strategy', text: 'Architecture decisions in writing, with the options and what each costs to run.', to: '/leadership/#decisions' },
  { name: 'Team alignment', text: 'Every engineer can say why their task matters. Product and QA sit in the same loop.', to: '/leadership/#cross-functional' },
  { name: 'Execution', text: 'Small stacked pull requests and frequent low-risk deploys. Security and accessibility gate each release.', to: '/leadership/#execution' },
  { name: 'Measurement', text: 'Lead time, change-failure rate, sprint carryover and the infrastructure bill, read every cycle.', to: '/writing/what-sprint-carryover-is-telling-you/' },
  { name: 'Continuous improvement', text: 'Pay down the debt that slows the roadmap, and grow engineers into leaders so the system improves without me.', to: '/leadership/#mentoring' },
];
