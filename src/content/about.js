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
  '23+ years in software development, from technical support and carrier networks to co-founder and CTO.',
  'Scaled a communications platform to 400,000+ users on three continents, through to acquisition.',
  'Hands-on in Python, Django, Rails, React, Next.js, PostgreSQL and AWS.',
  'Leads by removing single points of failure: written architecture decisions, small safe changes, and growing engineers into leaders.',
  'Works with companies through Yippify on engineering leadership, architecture and delivery, including government technology.',
];

export const currentWork = [
  { name: 'Yippify', text: 'software engineering and product development consulting.' },
  { name: 'VeloWise', text: 'delivery analytics for engineering leaders.' },
  { name: 'SurgeIQ', text: 'cycling training insights.' },
  { name: 'Useful Little Tools', text: 'free calculators for everyday decisions, and my playground for trying new tools and techniques on real users.' },
];

export const delivered = [
  { term: 'Co-Founder & CTO, global communications platform:', text: 'scaled to 400,000+ users across three continents, grew revenue to multimillion-dollar levels, and led through to acquisition.' },
  { term: 'Chief Technology Officer, media publishing platform:', text: 'grew organic traffic, social traffic and social engagement by 50% each.' },
  { term: 'VP of Operations, voice services:', text: 'built a stable, scalable platform through a growth phase, with capacity expansion planned ahead of demand.' },
  { term: 'Member of Technical Staff, national broadband network:', text: 'integrated and expanded carrier infrastructure across 2,000+ collocations.' },
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
  { term: 'Grow engineers into leaders,', text: 'and work closely across product, QA and leadership.' },
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
    a: 'Ka Lun Chan (KC) is a San Francisco Bay Area engineering leader and generalist with 23+ years in software and business operations. As co-founder and CTO he built a startup from the ground up to 400,000+ users and an acquisition, and he now leads government technology work through Yippify.',
  },
  {
    q: 'Is Ka Lun Chan a generalist or a specialist?',
    a: 'He is a generalist with deep technical roots. He has worked across support, network operations, capacity planning, software architecture, product, marketing and SEO, and he used that range to build a startup from the ground up to an acquisition as co-founder and CTO.',
  },
  {
    q: 'What does Ka Lun Chan help companies with?',
    a: 'He helps companies turn ambiguous problems into shipped software: setting technical direction, designing architecture, building and leading teams, and fixing delivery. He works through Yippify, on scoped projects or ongoing engineering leadership.',
  },
  {
    q: 'What has Ka Lun Chan built?',
    a: 'As co-founder and CTO, he scaled a global communications platform to 400,000+ users across three continents through to acquisition. Earlier, he integrated carrier infrastructure across 2,000+ collocations for a national broadband network. He also built VeloWise, SurgeIQ and Useful Little Tools.',
  },
  {
    q: 'What technologies does Ka Lun Chan work with?',
    a: 'His main stack is Python, Django, Rails, React, Next.js and PostgreSQL on AWS. His experience also covers distributed systems, cloud infrastructure and AI/ML products.',
  },
  {
    q: 'How does Ka Lun Chan approach engineering leadership?',
    a: 'He works to remove single points of failure in systems, knowledge and decision-making. In practice that means architecture decisions in writing, small pull requests reviewed within a day, frequent low-risk deploys, and growing engineers into leaders.',
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
