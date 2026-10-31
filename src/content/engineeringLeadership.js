// /engineering-leadership/: the recruiter and hiring-manager page. Describe opportunities by scope
// rather than specific job titles. Every figure here already appears, with its
// evidence, on /experience/, /about/ or a linked post. Keep employer names, career years and résumé files off
// this page (scripts/audit-seo.py); the résumé is sent on request through the leadership form on /contact/.

export const opportunityStatement = 'Open to engineering leadership opportunities where I can build teams, shape technical direction and stay close to the work.';

// The leadership form on /contact/. Every enquiry there gets the résumé in reply.
export const resumeRequest = '/contact/#leadership';

// Shared link into this page from case studies and Leadership-topic posts.
export const hireLink = { to: '/engineering-leadership/', label: 'Looking for an engineering leader? What I bring to your team' };

// Briefing block at the top of the page: the 60-second answer. Facts from facts.md (owner-confirmed 2026-10-28).
export const briefing = [
  { k: 'Opportunity', v: 'Engineering leadership that brings together technical direction, team growth and hands-on delivery.' },
  { k: 'Lane', v: 'Growth-stage and scale-up companies, and engineering leadership for GovTech and regulated platforms.' },
  { k: 'Location', v: 'San Francisco Bay Area. Remote across the US, or hybrid and on-site in the Bay Area.' },
  { k: 'Org scope', v: 'Co-founder and CTO who built a team that grew to 30+. CTO of a media publishing platform. VP of Operations running software engineering, QA and network operations as one function.' },
];

export const outcomes = [
  { figure: '400,000+', text: 'users and an acquisition, as co-founder and CTO', to: '/writing/building-a-startup-from-idea-to-acquisition/' },
  { figure: '30+', text: 'in the team I built as co-founder and CTO', to: '/experience/#communications' },
  { figure: '~30%', text: 'lower AWS costs on a publishing re-platform, with infrastructure improvements contributing', to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost' },
];

// Three readers, three starting points.
export const paths = [
  { who: 'Recruiters', wants: 'Roles, scope, location and a résumé', go: '#summary', label: 'Quick summary' },
  { who: 'CTOs and VPs of Engineering', wants: 'Technical judgment, delivery and how I run teams', go: '#problems', label: 'Problems I solve' },
  { who: 'CEOs and founders', wants: 'Growth, cost, risk and an exit', go: '#impact', label: 'Business impact' },
];

export const summary = [
  { k: 'Opportunity', v: 'Building teams and platforms at growing companies, with ownership of technical direction and delivery.' },
  { k: 'Most recent scope', v: 'Architecture, technical strategy and delivery for government, startup and founder clients through Yippify.' },
  { k: 'Executive roles', v: 'Co-founder and CTO through an acquisition, CTO of a media publishing platform, VP of Operations for a voice services company.' },
  { k: 'Team leadership', v: 'Built and led a global team that grew to 30+ as co-founder and CTO. Mentored engineers into leads and led fully remote teams as a fractional CTO.' },
  { k: 'Business ownership', v: 'Product, architecture and operations as co-founder and CTO. Technology, business and operations alongside the CEO and partners of a media publishing platform.' },
  { k: 'Core strengths', v: 'Engineering organization leadership, cloud platforms on AWS, architecture and modernization, public-sector and regulated systems, product engineering, security and reliability, practical AI adoption.' },
  { k: 'Location', v: 'San Francisco Bay Area. Remote across the US, or hybrid and on-site in the Bay Area.' },
  { k: 'Résumé and history', v: 'Résumé on request. Employer names and dates are on LinkedIn.' },
];


// Current scope, not a claim about a single engagement or a newly measured outcome.
// Sources: roles.yippify and the public-sector application and modernization articles.
export const currentWork = [
  { k: 'Context', v: 'Public-sector applications, including systems supporting small business certification programs, that need to keep working as rules and requirements change.' },
  { k: 'My responsibility', v: 'Architecture, technical strategy and delivery for client teams through Yippify, with hands-on engineering where it reduces risk.' },
  { k: 'Delivery approach', v: 'Small releases with product and QA in the planning loop. Security, accessibility and change documentation are part of the work before a release.' },
  { k: 'Engineering contribution', v: 'Applications built, modernized and supported, with server-side authorization, audit evidence and Section 508 accessibility checks. The agency makes the authorization decision.' },
];

// Each figure links to the page that shows the work behind it.
export const impact = [
  {
    figure: '30+',
    title: 'Built and led engineering teams',
    text: 'Built and led a global team that grew to 30+ as co-founder and CTO, then led fully remote teams as a fractional CTO.',
    to: '/experience/#communications', label: 'The founder-CTO role',
  },
  {
    figure: 'Acquired',
    title: 'Built a company through an acquisition',
    text: '400,000+ users across South America, Asia and Africa, millions of dollars in transactions, and multimillion-dollar revenue. I led the technical due diligence and stayed on with the company after the sale.',
    to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder story',
  },
  {
    figure: '~30%',
    title: 'Lower cloud costs',
    text: 'Re-platformed a media publishing portfolio onto AWS, where right-sizing, scaling on real demand and database fixes contributed to about 30% lower AWS costs.',
    to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost', label: 'How the cost came down',
  },
  {
    figure: '+50%',
    title: 'Product and audience growth',
    text: 'As publishing CTO, organic traffic, social traffic and social engagement each grew 50%, with page speed and structured content treated as platform features.',
    to: '/work/publishing-distribution/', label: 'Publishing case study',
  },
  {
    figure: 'Public sector',
    title: 'Regulated and government platforms',
    text: 'Applications behind public-sector small business certification programs, engineered to security authorization: FedRAMP-aligned environments, evidence for the Authority to Operate, and Section 508 accessibility.',
    to: '/writing/building-public-sector-applications/', label: 'What public-sector work taught me',
  },
  {
    figure: '8M+',
    title: 'Operations at carrier scale',
    text: 'Ran software engineering, QA and network operations behind 8M+ VoIP minutes a month, after integrating carrier infrastructure across 2,000+ collocations.',
    to: '/experience/#voice', label: 'The VP of Operations role',
  },
];

export const problems = [
  {
    id: 'scaling-teams',
    title: 'The team is struggling to scale',
    text: 'What worked with five engineers stops working at twenty. I put in the few practices that let a bigger team move without me in every decision: written architecture decisions, clear ownership, reviews that teach, and engineers growing into leads.',
    to: '/leadership/#mentoring', label: 'Grow engineers into leaders',
  },
  {
    id: 'slow-delivery',
    title: 'Delivery is slowing down',
    text: 'Slow delivery usually starts upstream of the code. I look at how work is defined, how big each change is and how many meetings sit between a decision and a deploy, then shrink stories and pull requests so releases stop being events.',
    to: '/leadership/#execution', label: 'Small, safe changes',
  },
  {
    id: 'technical-debt',
    title: 'Technical debt has become a business risk',
    text: 'I treat debt as a financing decision. I map which parts of the system slow the roadmap or carry real risk, put a cost on them in terms the business uses, and modernize in increments while the product keeps shipping.',
    to: '/writing/when-technical-debt-becomes-a-business-problem/', label: 'When technical debt becomes a business problem',
  },
  {
    id: 'cloud-costs',
    title: 'Cloud costs and operational complexity keep rising',
    text: 'I size infrastructure from measured demand, not from fear of the next spike. That means right-sizing, autoscaling where the data supports it, infrastructure as code and deploy automation, so the bill follows the business.',
    to: '/leadership/#capacity', label: 'Plan capacity before it becomes a cost',
  },
  {
    id: 'security',
    title: 'Security and compliance requirements are growing',
    text: 'I started in network security, writing router access control lists and supporting a managed firewall service. Today that shows up as authorization checks, audit evidence and accessibility written into acceptance criteria, not bolted on before a review.',
    to: '/writing/network-security-before-devsecops/', label: 'Security from ACLs to applications',
  },
  {
    id: 'strategy-and-execution',
    title: 'You need strategy and execution in one leader',
    text: 'I can take a board conversation about cost and risk, turn it into an architecture decision, and then review the pull request that implements it. That range is why founders and small leadership teams bring me in.',
    to: '/writing/why-i-still-write-code/', label: 'Why I still write code',
  },
];

// The picker's focuses: each names the evidence for it, on this page and on /projects/ and /experience/. A focus arranges
// or hides existing evidence and adds none, so add one only when the site already has proof. Illustrative case studies stay out.
// Keys: impact figure, problem id, post slug, case study slug, role id.
export const focuses = [
  { id: 'team', label: 'Scaling an engineering team', impact: ['30+', '8M+'], problems: ['scaling-teams', 'slow-delivery'], writing: ['hidden-cost-of-too-many-meetings', 'why-writing-good-user-stories-is-hard', 'speed-vs-quality-software-engineering'], cases: ['three-continent-platform'], roles: ['communications', 'voice'] },
  { id: 'cloud', label: 'Cloud cost and infrastructure', impact: ['~30%', '8M+'], problems: ['cloud-costs', 'technical-debt'], writing: ['when-technical-debt-becomes-a-business-problem'], cases: ['three-continent-platform', 'carrier-capacity'], roles: ['publishing', 'communications', 'voice', 'carrier'] },
  { id: 'regulated', label: 'Regulated or public-sector systems', impact: ['Public sector'], problems: ['security'], writing: ['building-public-sector-applications'], cases: [], roles: ['yippify', 'carrier'] },
  { id: 'growth', label: 'Product and company growth', impact: ['Acquired', '+50%'], problems: ['strategy-and-execution'], writing: ['speed-vs-quality-software-engineering'], cases: ['three-continent-platform', 'publishing-distribution'], roles: ['publishing', 'communications'] },
];

export const principles = [
  { text: 'Engineering exists to solve business problems. I start from the outcome the business needs before choosing technology.', to: '/leadership/#ambiguity' },
  { text: 'Every technical decision is also a decision about cost, risk and who maintains it later, so I write the tradeoff down.', to: '/leadership/#decisions' },
  { text: 'Clear requirements are the cheapest way to save engineering time. A vague story costs more than a slow sprint.', to: '/writing/why-writing-good-user-stories-is-hard/' },
  { text: 'Smaller releases carry less risk. Small pull requests, frequent deploys and fast rollbacks.', to: '/writing/smaller-user-stories-and-pull-requests/' },
  { text: 'Mentoring and shared knowledge make a team stronger than any one engineer, including me.', to: '/mentorship/' },
  { text: 'Security and reliability belong in everyday engineering practice, from the first sprint.', to: '/leadership/#risk' },
  { text: 'An engineering leader has to understand the technology, the people and the business at the same time.', to: '/writing/what-engineering-leadership-actually-does/' },
  { text: 'AI makes engineers faster, but generated code still needs judgment and verification before it ships.', to: '/writing/ai-generated-code-verification-depth/' },
];

export const expertise = [
  { area: 'Engineering leadership', items: ['Engineering strategy', 'Team building and mentoring', 'Delivery management', 'Architecture reviews', 'Technical roadmaps', 'Cross-functional leadership'] },
  { area: 'Cloud and infrastructure', items: ['AWS (ECS, Fargate, RDS, Lambda)', 'Terraform', 'Docker', 'CI/CD', 'Distributed systems', 'Capacity and cost'] },
  { area: 'Software engineering', items: ['Python and Django', 'Ruby on Rails', 'React and Next.js', 'Node.js', 'PostgreSQL', 'Kafka', 'REST APIs'] },
  { area: 'Security and compliance', items: ['Application and infrastructure security', 'Authentication and authorization', 'FedRAMP-aligned environments', 'Authority to Operate evidence', 'Section 508 accessibility'] },
  { area: 'AI', items: ['AI-assisted software engineering', 'LLM integrations and RAG', 'AI agents and automation', 'Evaluation and human review'] },
];

// Posts that show how I think about leading engineering. Titles and descriptions come from the posts themselves.
export const featuredSlugs = [
  'when-technical-debt-becomes-a-business-problem',
  'hidden-cost-of-too-many-meetings',
  'why-writing-good-user-stories-is-hard',
  'speed-vs-quality-software-engineering',
  'ai-generated-code-verification-depth',
  'building-public-sector-applications',
];
