// /engineering-leadership/: the recruiter and hiring-manager page. Describe opportunities by scope
// rather than specific job titles. Every figure here already appears, with its
// evidence, on /experience/, /about/ or a linked post. Keep employer names, career years and résumé files off
// this page (scripts/audit-seo.py); the résumé is sent on request through the leadership form on /contact/.

// The leadership form on /contact/. Every enquiry there gets the résumé in reply.
export const resumeRequest = '/contact/#leadership';

// Shared link into this page from case studies and Leadership-topic posts.
export const hireLink = { to: '/engineering-leadership/', label: 'Looking for an engineering leader? What I bring to your team' };

export const outcomes = [
  { figure: '400,000+', text: 'users and an acquisition, as co-founder and CTO', to: '/writing/building-a-startup-from-idea-to-acquisition/' },
  { figure: '30+', text: 'in the team I built as co-founder and CTO', to: '/experience/#communications' },
  { figure: '~30%', text: 'lower AWS costs on a publishing re-platform, with infrastructure improvements contributing', to: '/writing/capacity-planning-carrier-networks-to-cloud/#cloud-cost' },
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

// LinkedIn excerpts and attributions supplied by KC on 2026-10-31.
// Michael's excerpt only normalizes spaces around punctuation; the words are unchanged.
export const recommendations = [
  {
    name: 'Michael',
    role: 'Python Developer',
    quote: 'He took the time to understand the business requirement as well as the technical details, ensuring we delivered the application the business needed.',
  },
  {
    name: 'Kaitlyn',
    role: 'Creative Content Writer',
    quote: 'He’s been my mentor and career coach for the past year and a half, and I’m truly grateful for all I’ve learned.',
  },
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

// The picker's focuses: each names the evidence for it, on this page and on /projects/ and /experience/. A focus arranges
// or hides existing evidence and adds none, so add one only when the site already has proof. Illustrative case studies stay out.
// Keys: impact figure, post slug, case study slug, role id.
export const focuses = [
  { id: 'team', label: 'Scaling an engineering team', impact: ['30+', '8M+'], writing: ['hidden-cost-of-too-many-meetings', 'why-writing-good-user-stories-is-hard', 'speed-vs-quality-software-engineering'], cases: ['three-continent-platform'], roles: ['communications', 'voice'] },
  { id: 'cloud', label: 'Cloud cost and infrastructure', impact: ['~30%', '8M+'], writing: ['when-technical-debt-becomes-a-business-problem'], cases: ['three-continent-platform', 'carrier-capacity'], roles: ['publishing', 'communications', 'voice', 'carrier'] },
  { id: 'regulated', label: 'Regulated or public-sector systems', impact: ['Public sector'], writing: ['building-public-sector-applications'], cases: [], roles: ['yippify', 'carrier'] },
  { id: 'growth', label: 'Product and company growth', impact: ['Acquired', '+50%'], writing: ['speed-vs-quality-software-engineering'], cases: ['three-continent-platform', 'publishing-distribution'], roles: ['publishing', 'communications'] },
];
