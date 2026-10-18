// Personal history and philosophy supplied by KC; selected scale comes from profile.js.
export const careerChapters = [
  { id: 'engineering', label: 'Engineer & builder', no: '01' },
  { id: 'founder', label: 'Founder', no: '02' },
  { id: 'leadership', label: 'Engineering leader', no: '03' },
  { id: 'judgment', label: 'Technical leader & mentor', no: '04' },
  { id: 'community', label: 'Community', no: '05' },
];

export const independence = [
  { name: 'Systems', principle: 'Resilience beyond one component.', detail: 'Design for failure and make recovery possible.' },
  { name: 'Teams', principle: 'Knowledge beyond one engineer.', detail: 'Share context, document decisions, and distribute ownership.' },
  { name: 'Leadership', principle: 'Decisions beyond one manager.', detail: 'Develop people with the judgment and authority to act.' },
  { name: 'Community', principle: 'Opportunity beyond one generation.', detail: 'Help the next person gain experience, then make room for them to lead.' },
];

export const mentoringProgression = [
  { title: 'Ask me what to do', body: 'We clarify the problem and its business context. I provide enough structure to get started.' },
  { title: 'Show me what you’re thinking', body: 'Bring the investigation, what you tried, and what is still unclear. We work through the reasoning together.' },
  { title: 'Tell me what you recommend', body: 'Explain the options, the tradeoffs, and your recommendation. My answer is open to challenge, too.' },
  { title: 'Make the decision', body: 'You own the call, communicate it, and follow through. If something goes wrong, we learn and recover without taking ownership away.' },
  { title: 'Teach someone else', body: 'Share the context and help the next person build their judgment. Knowledge and leadership spread through the team.' },
];

import { isPlaceholder } from './profile';

// Full profile from PROFILE.md section 3. The FAQ also feeds the /about/ FAQPage
// JSON-LD, so visible and structured answers stay identical.
export const keyTakeaways = [
  'A career in software development that runs from technical support and carrier networks to co-founder and CTO.',
  'Scaled a communications platform to 400,000+ users on three continents, through to acquisition.',
  'Hands-on in Python, Django, Rails, React, Next.js, PostgreSQL and AWS.',
  'Leads by removing single points of failure, in systems and in teams.',
  'Leads architecture and delivery for clients through Yippify, including government technology.',
];

export const currentWork = [
  { name: 'Yippify', text: 'software engineering and product development consulting.' },
  { name: 'VeloWise', text: 'delivery analytics for engineering leaders.' },
  { name: 'SurgeIQ', text: 'cycling training insights.' },
  { name: 'Useful Little Tools', text: 'free calculators for everyday decisions, and my playground for trying new tools and techniques on real users.' },
];

export const delivered = [
  { term: 'Fractional CTO and technical advisor, startups and growth companies:', text: 'between the acquisition and Yippify, served as interim head of engineering for a startup shipping iOS and Android apps, a web platform and REST APIs on AWS; built a wholesale VoIP platform on Asterisk and OpenSIPS; and led a fully remote team building on Go, React, Next.js and AWS Lambda.' },
  { term: 'Software engineer, no-code machine-learning platform:', text: 'built the customer-facing product, React and Next.js over a Flask back end, with the ML research team, turning research algorithms into a tool non-technical users could run.' },
  { term: 'Chief Technology Officer, media publishing platform:', text: 'grew organic traffic, social traffic and social engagement by 50% each. Re-platformed the titles from WordPress to Ruby on Rails and moved hosting to AWS, where infrastructure improvements contributed to about 30% lower AWS costs. Worked with the CEO on business and operations, including the partners across the affiliated publishing network.' },
  { term: 'Co-Founder & CTO, global communications platform:', text: 'scaled to 400,000+ users across three continents, grew revenue to multimillion-dollar levels, and led through to acquisition, including the technical due diligence. Built and led a global team of 30+ engineers, VoIP specialists and designers, and held a board seat. Shipped the mobile VoIP app on Nokia, iPhone and Android.' },
  { term: 'VP of Operations, voice services:', text: 'ran software engineering, QA and network operations. Restructured engineering and the server farm behind 8M+ VoIP minutes a month, rebuilt the engineering team, and planned capacity expansion ahead of demand. Delivered a mobile VoIP app for Nokia phones.' },
  { term: 'Member of Technical Staff, national broadband network:', text: 'integrated and expanded carrier infrastructure across 2,000+ collocations. Wrote Cisco router access control lists, was one of the first three people supporting the new NetScreen-based managed firewall and VPN service in the Security Operations Center, and travelled to the East Coast to train the Technical Assistance Center.' },
  { term: 'Earlier:', text: 'technical support roles in broadband and technical services.' },
];

export const valueFit = [
  { situation: 'Idea to first product', does: 'Scopes, architects and builds the first version', experience: 'Built a startup from the ground up as co-founder and CTO' },
  { situation: 'Scaling past the first platform', does: 'Re-architects for growth and plans capacity ahead of demand', experience: 'Scaled a platform to 400,000+ users; capacity forecasting for a nationwide carrier network' },
  { situation: 'Slow or unpredictable delivery', does: 'Introduces small safe changes, written decisions and delivery metrics', experience: 'Leadership practices; built VeloWise for delivery analytics' },
  { situation: 'A team without technical leadership', does: 'Provides engineering leadership, hires, and grows engineers into leaders', experience: 'CTO and VP of Operations roles' },
  { situation: 'Fragile or legacy systems', does: 'Restructures applications, networks and platforms', experience: 'Restructured a startup’s mobile app, network and open-source voice platform' },
  { situation: 'Government technology', does: 'Delivers web and mobile applications for public-sector teams', experience: 'Current work through Yippify' },
];

export const leadershipPractices = [
  { term: 'Turn ambiguity into executable work', text: 'before the team commits.' },
  { term: 'Make architecture decisions in writing,', text: 'so the reasoning outlasts the meeting.' },
  { term: 'Balance delivery and technical debt', text: 'explicitly, instead of letting debt pile up unseen.' },
  { term: 'Improve execution with small, safe changes:', text: 'small pull requests reviewed within a day, frequent deploys, and rollbacks that are rare and fast.' },
  { term: 'Reduce delivery risk early,', text: 'and build systems the next team can own.' },
  { term: 'Grow engineers into leaders,', text: 'and work closely with product and QA.' },
];

export const problems = [
  'A new product that needs to go from idea to production.',
  'A platform that has to scale past its original design.',
  'A team without clear technical direction or engineering leadership.',
  'Technical debt that is slowing every release.',
];

export const faq = [
  {
    q: 'Who is Ka Lun Chan?',
    a: 'Ka Lun Chan (KC) is a San Francisco Bay Area engineering leader and generalist with experience across software and business operations. As co-founder and CTO he built a startup from the ground up to 400,000+ users and an acquisition, and he now leads government technology work through Yippify.',
  },
  {
    q: 'Is Ka Lun Chan a generalist or a specialist?',
    a: 'He is a generalist with deep technical roots. His work has run from technical support and capacity planning to product and SEO, and he used that range to build a startup from the ground up to an acquisition as co-founder and CTO.',
  },
  {
    q: 'What does Ka Lun Chan help companies with?',
    a: 'He helps companies turn ambiguous problems into shipped software, from setting technical direction to fixing delivery. For startups that means building the first product and choosing what to build now by budget and operating cost. He works through Yippify, on scoped projects or ongoing engineering leadership.',
  },
  {
    q: 'What has Ka Lun Chan built?',
    a: 'As co-founder and CTO, he scaled a global communications platform to 400,000+ users across three continents through to acquisition. Earlier, he integrated carrier infrastructure across 2,000+ collocations for a national broadband network. He also built VeloWise, SurgeIQ and Useful Little Tools.',
  },
  {
    q: 'What technologies does Ka Lun Chan work with?',
    a: 'His main stack is Python, Django, Rails, React, Next.js and PostgreSQL on AWS. His experience also covers distributed systems and AI/ML products.',
  },
  {
    q: 'What is Ka Lun Chan’s security background?',
    a: 'It started in carrier network operations: Cisco router access control lists, then one of the first three people supporting a new NetScreen-based managed firewall and VPN service in the Security Operations Center, and training the Technical Assistance Center to support it. It continued through AAA on voice platforms and object-level authorization in applications, where mobile apps were treated as untrusted clients. On AWS it meant IAM and Terraform. Government systems were built to public-sector security requirements. On his teams, vulnerabilities are monitored and fixed as high-priority work.',
  },
  {
    q: 'What is Ka Lun Chan’s experience with capacity planning and infrastructure cost?',
    a: 'It spans three generations of infrastructure. On a 2,000+ collocation carrier network he planned capacity from measured utilization. For VoIP servers behind 8M+ minutes a month, he planned expansion ahead of demand, and least-cost and geolocation routing improved call quality while cutting bandwidth cost. Later came a platform moved from one data center to cloud regions on three continents, and a media publishing re-platform to AWS where infrastructure improvements contributed to about 30% lower AWS costs.',
  },
  {
    q: 'How does Ka Lun Chan approach engineering leadership?',
    a: 'He works to remove single points of failure, in people as much as in systems. In practice that starts with architecture decisions in writing and small pull requests reviewed within a day.',
  },
  {
    q: 'Where is Ka Lun Chan based?',
    a: 'He is based in the San Francisco Bay Area and works with teams across the US, remotely and in person in the Bay Area.',
  },
  {
    q: 'How can I contact Ka Lun Chan?',
    a: 'The fastest route is a message on LinkedIn at linkedin.com/in/kchan1288. For consulting projects, you can also reach him through Yippify at yippify.com.',
  },
];

// Questions whose answer still has a placeholder stay hidden, on the page and in JSON-LD.
export const publishedFaq = faq.filter((item) => !isPlaceholder(item.a));

export const sources = [
  { label: 'GoFractional: Fractional CTO rates', url: 'https://www.gofractional.com/insights/rates/cto' },
  { label: 'Ka Lun Chan on LinkedIn', url: 'https://www.linkedin.com/in/kchan1288/' },
  { label: 'kchan1028 on GitHub', url: 'https://github.com/kchan1028' },
  { label: 'Yippify', url: 'https://yippify.com/' },
];

// Fig. 050-1, the at-a-glance figure on /about/: which parts of a company KC worked
// in, chapter by chapter. Layers run top (business) to bottom (systems); each chapter
// spans layers `top` to `bottom` inclusive, by index. Facts come from the generalist
// answer above and profile.js; no years, per the SEO audit.
export const arcLayers = [
  { name: 'Business & operations', short: 'Business' },
  { name: 'Product & marketing', short: 'Product' },
  { name: 'Engineering leadership', short: 'Leadership' },
  { name: 'Network & application security', short: 'Security' },
  { name: 'Software & architecture', short: 'Software' },
  { name: 'Infrastructure, capacity & cost', short: 'Infra & cost' },
  { name: 'Technical support & operations', short: 'Support & ops' },
];

// Fig. 050-2, the stack ladder: seven layers of technology KC has owned, in the
// order he worked through them. Short cells by design; the articles carry detail.
export const stackLayers = [
  { id: 'carrier', name: 'Carrier networks & security', experience: 'Cisco routing and ACLs, NetScreen managed security, operations across 2,000+ collocations.', challenge: 'Links and ports fill months before replacement hardware can arrive.', cost: 'Capital spent ahead of demand: too much sits dark, too little congests.', built: 'Integration, expansion and capacity planning across the footprint; process, training and escalation for security and IP services.', tech: 'Cisco routing, ACLs, ATM, IP, VoIP, SNMP and Cacti, Expect and Korn shell, an R forecasting program.', lesson: 'Measure first, order ahead of the lead time, and write the runbook for the fourth person.', to: '/work/carrier-capacity/', label: 'Case study: capacity across 2,000+ collocations' },
  { id: 'datacenter', name: 'Physical infrastructure & data centers', experience: 'Racked and cabled the servers, configured the network, ran Linux in production.', challenge: 'Every expansion means new hardware and a technician on site.', cost: 'Hardware lifecycle and colocation, plus the power and cooling to run it.', built: 'The first data center for my own company, from empty rack to production; later the server farm behind 8M+ VoIP minutes a month.', tech: 'Dell servers, Cisco routers and switches, Linux, circuits and colocation.', lesson: 'You pay for peak capacity every day of the year, and the cheapest capacity is the capacity you never consume.', to: '/writing/building-a-startup-from-idea-to-acquisition/#zero-to-one', label: 'The build-out, with photos' },
  { id: 'voip', name: 'Telecommunications & VoIP', experience: 'Asterisk, OpenSIPS, MediaProxy and Python AGI; a server farm behind 8M+ minutes a month.', challenge: 'Signaling, media, proxies and servers fill at different rates.', cost: 'Carrier termination and bandwidth, with routing that trades quality against price.', built: 'A VoIP platform with least-cost and geolocation routing, in-house billing, and mobile apps on Nokia, iPhone and Android.', tech: 'Asterisk, OpenSIPS, MediaProxy, SIP, Python AGI, C++ on Symbian.', lesson: 'Quality, security and cost are one decision; a control that drops calls is an outage.', to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What VoIP taught me about distributed systems' },
  { id: 'software', name: 'Software development & architecture', experience: 'A modular monolith to 400k+ users, then event-driven systems.', challenge: 'Boundaries that scale without multiplying what has to be run.', cost: 'Every service, cluster and query is a recurring line on the bill.', built: 'The platform behind 400k+ users and a publishing platform rebuilt from WordPress to Rails. Later, event-driven services on Kafka.', tech: 'Python, Django, Rails, React, Next.js, Node.js, PostgreSQL, Redis, Kafka.', lesson: 'A service boundary needs to justify its ongoing infrastructure and support cost.', to: '/writing/should-it-be-a-microservice/', label: 'Should it be a microservice?' },
  { id: 'cloud', name: 'Cloud infrastructure & DevOps', experience: 'AWS with ECS and Fargate, RDS, Lambda, Terraform and CI/CD; about 30% lower AWS costs on a re-platform.', challenge: 'Capacity in minutes, and waste as the default state of the account.', cost: 'Right-sizing, demand-based scaling, managed versus self-hosted.', built: 'One data center to cloud regions on three continents; a publishing re-platform onto AWS; client platforms provisioned with Terraform and shipped through pipelines with security and accessibility gates.', tech: 'AWS, ECS and Fargate, Lambda, RDS, S3, CloudFront, Terraform, Docker, GitHub Actions.', lesson: 'Capacity became a bill. Measure first and plan from data, the same as on the carrier network.', to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning, from carrier networks to the cloud' },
  { id: 'leadership', name: 'Engineering leadership', experience: 'Teams of 30+, CTO and VP of Operations roles, hiring and delivery planning.', challenge: 'Engineering capacity fills up too, with a longer lead time than compute.', cost: 'Headcount and technical debt, planned as a budget.', built: 'Engineering organizations at a startup through acquisition, at a media publisher, and on client teams; engineers mentored until they could replace me.', tech: 'Written decisions, small pull requests, frequent deploys, security and accessibility as release gates, honest delivery status.', lesson: 'Help the team make decisions without depending on one person.', to: '/leadership/', label: 'How I run engineering' },
  { id: 'founder', name: 'Startup founder & Yippify', experience: 'Co-founded a platform and led it to acquisition; runs Yippify today.', challenge: 'Every technical choice is paid for by the business making it.', cost: 'Can we afford to run it, who maintains it, and is the complexity justified?', built: 'A communications company from the first line of code to acquisition; Yippify; FedPath, VeloWise, SurgeIQ and Useful Little Tools.', tech: 'Whatever the business needed that week, from product and marketing to cabling and billing.', lesson: 'A product needs customers and an operating model the business can afford.', to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
];

// Fig. 000-1, the homepage experience map: six layers from the business down to
// the wire, each with the work behind it. Facts come from the pages linked.
export const experienceMap = [
  { id: 'leadership', name: 'Engineering leadership', sub: 'CTO · team leadership · mentoring · strategy', claim: 'Teams that make decisions and keep improving without depending on me.', examples: [
    { text: 'Led a team of 30+ through the acquisition', to: '/experience/#communications' },
    { text: 'CTO of a media publisher, working with the CEO on business and operations', to: '/experience/#publishing' },
    { text: 'How I run engineering, from written decisions to mentoring', to: '/leadership/' },
  ] },
  { id: 'business', name: 'Product & business', sub: 'startups · SaaS · acquisition · revenue', claim: 'Responsible for product decisions, revenue and operating cost.', examples: [
    { text: 'Co-founded a communications platform that reached 400k+ users on three continents and was acquired', to: '/writing/building-a-startup-from-idea-to-acquisition/' },
    { text: 'Publishing: traffic and engagement up 50%, with SEO run as a business', to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/' },
    { text: 'Six startups helped from idea to working product; FedPath, VeloWise, SurgeIQ and Useful Little Tools shipped', to: '/writing/building-startups-technical-leadership/' },
  ] },
  { id: 'architecture', name: 'Software architecture', sub: 'Kafka · distributed systems · APIs · scale', claim: 'Boundaries that follow the business and fail in ways you can reason about.', examples: [
    { text: 'A modular monolith to 400k+ users, split only where a boundary paid for itself', to: '/writing/should-it-be-a-microservice/' },
    { text: 'Design example: Kafka events with recovery and idempotent consumers', to: '/work/event-driven-platform/' },
    { text: 'Every architecture decision has a bill, from build or buy to managed or self-hosted', to: '/writing/hidden-cost-of-software-architecture/' },
  ] },
  { id: 'software', name: 'Software engineering', sub: 'Python · Django · Rails · React · Next.js · PostgreSQL', claim: 'Still in the code: prototypes, reviews and the hard parts of the build.', examples: [
    { text: 'Mobile VoIP apps in C++ on Nokia, then iPhone and Android', to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/' },
    { text: 'Authorization enforced on the server, on the record, in every API', to: '/writing/api-architecture-lessons/#security' },
    { text: 'Building software before and after AI: what changed and what did not', to: '/writing/building-software-before-and-after-ai/' },
  ] },
  { id: 'cloud', name: 'Cloud & infrastructure', sub: 'Linux · data centers · AWS · Terraform · CI/CD', claim: 'Capacity planned from measured demand, at a cost the business can carry.', examples: [
    { text: 'One data center, cabled by hand, to cloud regions on three continents with no downtime', to: '/work/three-continent-platform/' },
    { text: 'About 30% lower AWS costs on a publishing re-platform', to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost' },
    { text: 'Modernizing public-sector applications one journey at a time, with security and accessibility checks', to: '/writing/modernizing-public-sector-applications/' },
  ] },
  { id: 'security', name: 'Cybersecurity', sub: 'firewalls · VPN · ACLs · security operations · AppSec', claim: 'Deny by default, allow explicitly, and test the rule with the traffic it should permit.', examples: [
    { text: 'Cisco ACLs on a carrier network, then one of the first three in a new SOC on NetScreen', to: '/writing/network-security-before-devsecops/' },
    { text: 'AAA on voice platforms, then SSO and object-level authorization in applications', to: '/expertise/#security' },
    { text: 'Public-sector applications in FedRAMP-aligned environments, with ATO evidence', to: '/writing/building-public-sector-applications/' },
  ] },
  { id: 'network', name: 'Network infrastructure', sub: 'Cisco · carrier networks · SNMP · capacity forecasting', claim: 'Where capacity was a purchase order and reliability was a process.', examples: [
    { text: '2,000+ collocations of ATM, IP and VoIP infrastructure, expanded without degrading service', to: '/work/carrier-capacity/' },
    { text: 'Capacity forecasting from SNMP data with an R program, ordered ahead of lead times', to: '/writing/data-driven-engineering-network-voip-publishing/#capacity' },
    { text: 'Deployments automated with Expect and shell scripts before anyone called it DevOps', to: '/writing/devops-from-expect-scripts-to-ai-agents/' },
  ] },
];

export const arcChapters = [
  { id: 'family', name: 'Family business', role: 'Before software', top: 0, bottom: 1, earlier: true },
  { id: 'support', name: 'Technical support', role: 'Support engineer', top: 6, bottom: 6 },
  { id: 'carrier', name: 'Carrier network', role: 'Member of technical staff', top: 3, bottom: 6, scale: '2,000+ collocations · first three in the SOC' },
  { id: 'voice', name: 'Voice services', role: 'VP of Operations', top: 2, bottom: 6, scale: 'Nokia mobile VoIP app · 8M+ minutes/mo' },
  { id: 'founder', name: 'Communications platform', role: 'Co-founder & CTO', top: 0, bottom: 6, scale: '400k+ users · 3 continents · acquired' },
  { id: 'publishing', name: 'Media publishing', role: 'CTO', top: 0, bottom: 6, scale: '+50% organic & social traffic' },
  { id: 'now', name: 'Yippify', role: 'Consultant & founder', top: 0, bottom: 6, now: true, scale: 'Government & startup clients' },
];
