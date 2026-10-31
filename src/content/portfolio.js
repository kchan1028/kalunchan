// Homepage tiles. Every fact comes from profile.js, work.js, projects.js or engineeringLeadership.js and is on the
// site with its evidence. Yippify has no confirmed figure, so its tile states the outcome without one.
import { resumeRequest } from './engineeringLeadership';

export const heroHeadline = 'Engineering leader building products and the teams that scale them.';

// Set `pdf` to a file in /public (for example '/ka-lun-chan-resume.pdf') to turn the button into a download.
// scripts/audit-seo.py rejects links to PDF and résumé files, so relax that rule at the same time.
export const resume = { pdf: null, request: resumeRequest };

export const caseTiles = [
  {
    id: 'platform',
    where: 'Global communications platform',
    title: 'From one data center to three continents',
    to: '/work/three-continent-platform/',
    problem: 'Users across South America, Asia and Africa were paying for the distance to one data center in latency and call quality.',
    role: 'Co-founder and CTO. I built the network and the application, and led engineering through the acquisition.',
    stack: 'Open-source VoIP (Asterisk, OpenSIPS, MediaProxy), in-house billing, least-cost routing, cloud regions on three continents',
    figure: '400,000+',
    result: 'users and an acquisition. The move to the cloud had zero downtime.',
  },
  {
    id: 'publishing',
    where: 'Media publishing platform',
    title: 'Making a publishing platform compete on distribution',
    to: '/work/publishing-distribution/',
    problem: 'Good content was losing to larger publishers on search and social, and the platform treated distribution as an afterthought.',
    role: 'CTO. I owned technical strategy and engineering, and worked on business and operations with the CEO.',
    stack: 'Ruby on Rails, AWS, Terraform, caching and query work, replacing WordPress',
    figure: '+50%',
    result: 'each in organic traffic, social traffic and social engagement. Infrastructure improvements contributed to about 30% lower AWS costs.',
  },
  {
    id: 'yippify',
    where: 'Yippify',
    title: 'Engineering and product ownership for public-sector and startup teams',
    to: '/writing/building-public-sector-applications/',
    problem: 'Government teams, startups and founders need web and mobile products shipped by a small team, with no budget for a rewrite later.',
    role: 'Consultant, owning architecture, technical strategy and delivery, and hands-on where it takes risk out of the build.',
    stack: 'AWS (ECS, Fargate, Lambda, RDS), Terraform, GitHub Actions, Section 508 and security authorization evidence',
    figure: null,
    result: 'Mobile and web applications delivered for government, startup and entrepreneur clients.',
  },
];

export const skills = [
  { area: 'Leadership', items: 'Engineering strategy, team building, mentoring, delivery management' },
  { area: 'Cloud', items: 'AWS (ECS, Fargate, RDS, Lambda), Terraform, Docker, CI/CD' },
  { area: 'Software', items: 'Python and Django, Ruby on Rails, React and Next.js, Node.js, PostgreSQL, Kafka' },
  { area: 'Security', items: 'FedRAMP-aligned environments, Authority to Operate evidence, Section 508' },
  { area: 'AI', items: 'LLM integrations and RAG, evaluation and human review' },
];
