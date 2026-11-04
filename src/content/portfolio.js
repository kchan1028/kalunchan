// Homepage tiles. Every fact comes from profile.js, work.js, projects.js or engineeringLeadership.js and is on the
// site with its evidence. Lead tiles have a confirmed figure; the others are compact and state the outcome without one.
import { resumeRequest } from './engineeringLeadership';

export const heroHeadline = 'Engineering leader building products and the teams that scale them.';
export const heroNow = 'Now: consulting through Yippify.';
export const heroProof = 'As co-founder and CTO, I took a communications platform to 400,000+ users and an acquisition.';

// Set `pdf` to a file in /public (for example '/ka-lun-chan-resume.pdf') to turn the button into a download.
// scripts/audit-seo.py rejects links to PDF and résumé files, so relax that rule at the same time.
export const resume = { pdf: null, request: resumeRequest };

export const caseTiles = [
  {
    id: 'platform',
    level: 'Co-founder and CTO',
    where: 'Global communications platform',
    title: 'From one data center to three continents',
    to: '/work/three-continent-platform/',
    more: 'Read the case study',
    figure: '400,000+',
    result: 'users and an acquisition. The move to the cloud had zero downtime.',
    problem: 'With one data center in North America, users in South America, Asia and Europe were paying for the distance in latency and call quality.',
  },
  {
    id: 'publishing',
    level: 'CTO',
    where: 'Media publishing platform',
    title: 'Making a publishing platform compete on distribution',
    to: '/work/publishing-distribution/',
    more: 'Read the case study',
    figure: '+50%',
    result: 'each in organic traffic, social traffic and social engagement. Infrastructure improvements contributed to about 30% lower AWS costs.',
    problem: 'Good content was losing to larger publishers on search and social, and the platform treated distribution as an afterthought.',
  },
  {
    id: 'carrier',
    level: 'Member of Technical Staff',
    where: 'National broadband network',
    title: 'Capacity planning across a national network',
    to: '/work/carrier-capacity/',
    more: 'Read the case study',
    figure: '2,000+',
    result: 'collocations integrated and expanded, with capacity ordered ahead of hardware lead times.',
    problem: 'The network had to keep adding customers and services, including VoIP, without degrading what it already carried, and new hardware had long lead times.',
  },
  {
    id: 'yippify',
    level: 'Consultant, current role',
    where: 'Yippify',
    title: 'Modernizing a public-sector application built on multiple legacy platforms',
    to: '/writing/building-public-sector-applications/',
    more: 'Read the post',
    figure: '4 → 1',
    result: 'legacy platforms combined into one public-sector application.',
  },
  {
    id: 'nokia',
    level: 'VP of Operations, then co-founder and CTO',
    where: 'Voice services and communications platforms',
    title: 'Restructuring a communications platform for resellers',
    to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/',
    more: 'Read the post',
    figure: '8M',
    result: 'minutes a month on the reseller platform, up from 1 million after the restructure.',
  },
  {
    id: 'soc',
    level: 'Member of Technical Staff',
    where: 'Security Operations Center',
    title: 'Training the TAC to support a new security service',
    to: '/writing/training-tac-engineers-for-a-new-soc-service/',
    more: 'Read the post',
    figure: '20+',
    result: 'TAC engineers trained to support a new managed security service, with escalations coming back to me.',
  },
];

export const skillsIntro = 'Engineering leadership, product design, and hands-on delivery, from early concepts to production.';

export const skills = [
  { area: 'Product engineering', items: 'Turning customer needs into shipped products, from discovery and prototyping to launch and iteration' },
  { area: 'UX/UI & product design', items: 'User flows, wireframes, prototyping, interaction design, and design systems' },
  { area: 'Forward-deployed engineering', items: 'Working directly with client teams to build, integrate, and deploy software they can own after hand-over' },
  { area: 'Leadership', items: 'Engineering strategy, team building, mentoring, and delivery' },
  { area: 'Software architecture', items: 'System architecture, API design, and microservices' },
  { area: 'Software', items: 'Python/Django, Ruby on Rails, React/Next.js, Node.js, and LAMP' },
  { area: 'Databases & data', items: 'PostgreSQL, MySQL, Snowflake, and Kafka' },
  { area: 'Cloud & delivery', items: 'AWS, Terraform, Docker, and CI/CD' },
  { area: 'Security', items: 'Authentication, authorization, FedRAMP-aligned environments, and ATO evidence' },
  { area: 'Accessibility', items: 'Section 508' },
  { area: 'Applied AI', items: 'LLM integration, RAG, evaluation, and human review' },
];
