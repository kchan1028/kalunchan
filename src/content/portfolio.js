// Homepage tiles. Every fact comes from profile.js, work.js, projects.js or engineeringLeadership.js and is on the
// site with its evidence. Lead tiles have a confirmed figure; the others are compact and state the outcome without one.
import { resumeRequest } from './engineeringLeadership';

export const heroHeadline = 'Engineering leader building products and the teams that scale them.';
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
    title: 'Engineering and product ownership for public-sector and startup teams',
    to: '/writing/building-public-sector-applications/',
    more: 'Read the post',
    result: 'Mobile and web applications delivered for government, startup and entrepreneur clients.',
  },
  {
    id: 'nokia',
    level: 'VP of Operations, then co-founder and CTO',
    where: 'Voice services and communications platforms',
    title: 'VoIP apps for Nokia phones, before the iPhone took over',
    to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/',
    more: 'Read the post',
    result: 'Mobile VoIP apps for the phones customers already owned, so they could call home for less.',
  },
];

export const skills = [
  { area: 'Leadership', items: 'Engineering strategy, team building, mentoring, delivery management' },
  { area: 'Cloud', items: 'AWS (ECS, Fargate, RDS, Lambda), Terraform, Docker, CI/CD' },
  { area: 'Software', items: 'Python and Django, Ruby on Rails, React and Next.js, Node.js, PostgreSQL, Kafka' },
  { area: 'Security', items: 'Authentication and authorization, FedRAMP-aligned environments, Authority to Operate evidence' },
  { area: 'Accessibility', items: 'Section 508' },
  { area: 'AI', items: 'LLM integrations and RAG, evaluation and human review' },
];
