// Shipped products and sites, shown on /projects/ and at /projects/<slug>/.
// Every fact here is visible on the live site or was supplied by the owner.
// No metrics, dates, prices or sponsor names (see CONTENT-REVIEW.md and
// docs/COMMUNITY-CONTENT.md). `verify: true` marks drafted decision rationale.
//
// Screens live in /public/images/projects/: <shot>-desktop-{640,1280}.webp,
// <shot>-mobile-520.webp and <shot>-og.jpg (1200×630 social preview).

import { cycling } from './community';

export const projects = [
  {
    slug: 'fedpath',
    seoTitle: 'FedPath (GoFedPath): GovCon Product Case Study — Ka Lun Chan',
    description:
      'How I built FedPath at gofedpath.com: SAM.gov opportunity discovery, Fit Analysis, Go/No-Go decisions and a Compliance Matrix for small businesses.',
    problemShort: 'Small businesses without capture teams spend hours on solicitations before knowing whether a contract is worth bidding.',
    schema: { '@type': 'SoftwareApplication', alternateName: 'GoFedPath', applicationCategory: 'BusinessApplication', operatingSystem: 'Web' },
    no: '311',
    name: 'FedPath',
    site: 'https://gofedpath.com/',
    domainLabel: 'gofedpath.com',
    shot: 'fedpath',
    kind: 'Product · GovCon SaaS',
    where: 'Independent product',
    role: 'Product, design & engineering',
    domain: ['Product engineering', 'Government contracting', 'Data & decision tools'],
    title: 'FedPath: federal contracting, from notice to bid decision',
    claim:
      'Small businesses can find federal contracts worth pursuing, and decide whether to bid, before they spend hours reading solicitations.',
    summary:
      'A GovCon product that takes a small business from SAM.gov opportunity discovery through fit analysis, a Go/No-Go decision and a compliance matrix, in one workflow.',
    problem:
      'Federal contracting rewards teams that can read the market quickly. Small businesses without capture or proposal staff face thousands of SAM.gov notices, long solicitations, and a bid decision that often gets made after the hours are already spent.',
    audience: [
      'Small businesses bidding on U.S. federal contracts',
      'Teams new to government contracting',
      'Owners who do capture and proposals themselves',
    ],
    built: [
      { name: 'Opportunity Watch', text: 'New SAM.gov notices that match your work, checked every few hours.' },
      { name: 'Fit Analysis', text: 'Compares each opportunity with your business profile and shows the reason for every finding.' },
      { name: 'Go/No-Go', text: 'A structured bid or no-bid assessment before any proposal work starts.' },
      { name: 'Compliance Matrix', text: 'Turns solicitation requirements into items a team can track to submission.' },
      { name: 'GovCon Readiness', text: 'A five-minute check for businesses deciding whether federal work is for them.' },
    ],
    flow: ['Readiness', 'Watch', 'Fit', 'Go/No-Go', 'Compliance'],
    decisions: [
      {
        question: 'How should Fit Analysis reach a verdict?',
        options: [
          { label: 'Score opportunities with an AI model', note: 'Quick to demo, but hard to explain, and solicitations would leave the product for an outside model.' },
          { label: 'Fixed, explainable rules', note: 'Every match, gap and open question shows its source, and solicitation PDFs are read on FedPath’s own server.', chosen: true },
        ],
      },
      {
        question: 'What should the product be?',
        options: [
          { label: 'A better opportunity search', note: 'Useful, but it leaves the expensive part, deciding whether to bid, to the user.' },
          { label: 'One workflow from discovery to compliance', note: 'Watch, fit, decide, pursue and track requirements in the same place, so each step feeds the next.', chosen: true },
        ],
      },
      {
        question: 'When should people have to sign up?',
        options: [
          { label: 'Gate search behind an account', note: 'More sign-ups, and more people leaving before they see any value.' },
          { label: 'Browse real opportunities without an account', note: 'The product proves itself on live SAM.gov data first.', chosen: true },
        ],
      },
    ],
    outcome: [
      'One path from a SAM.gov notice to a compliance matrix, built for teams without a capture department',
      'Fit findings that explain themselves, labelled as known or inferred',
      'Solicitation documents stay on FedPath’s server; none are sent to an AI service',
      'Live on real SAM.gov opportunities, open to browse without an account',
    ],
    capabilities: ['SAM.gov opportunity data', 'Rule-based fit engine', 'Document parsing', 'Decision workflow', 'Compliance tracking', 'Product & UX design'],
    lessons: [
      'In a domain this regulated, an explanation is worth more than a score.',
      'The most valuable feature is often the decision not to spend the next ten hours.',
    ],
    alt: {
      desktop: 'FedPath home page: a headline about finding government contracts worth pursuing beside an Opportunity Watch panel listing matched federal notices',
      mobile: 'FedPath on a phone, with the headline and Find opportunities button',
    },
    verify: true,
  },
  {
    slug: 'berkeley-omnium',
    seoTitle: 'Berkeley Omnium Website: Event Platform Project — Ka Lun Chan',
    description:
      'The new berkeleyomnium.com: race landing pages, video and social, sponsorship and SEO for the Berkeley Hills Road Race and Berkeley Streets Criterium.',
    problemShort: 'A volunteer-run race weekend has to win riders, sponsors and volunteers against events with far bigger budgets.',
    schema: { '@type': 'WebSite', about: { '@id': `${cycling.omnium}#subject` } },
    related: [
      { to: '/writing/berkeley-omnium-new-website-next-generation/', label: 'Why I built the new Berkeley Omnium website' },
      { to: '/community/', label: 'Why I help organize Berkeley Omnium' },
    ],
    no: '312',
    name: 'Berkeley Omnium',
    site: cycling.omnium,
    domainLabel: 'berkeleyomnium.com',
    shot: 'omnium',
    kind: 'Community · Event platform',
    where: 'Berkeley Bicycle Club',
    role: 'Organizing team · website, promotion & partnerships',
    domain: ['Community leadership', 'Event promotion', 'Web & search'],
    title: 'Berkeley Omnium: a digital home for a community race weekend',
    claim:
      'Two races, their riders, sponsors and volunteers got one fast, modern home that makes the case for local racing.',
    summary:
      'A modern event website for the Berkeley Hills Road Race and Berkeley Streets Criterium, with race landing pages, video and social, sponsorship and community impact.',
    problem:
      'A long-running local race weekend has to compete for riders, spectators, sponsors and volunteers with events that have far bigger budgets. Each of those groups needs something different from the site, and the racing itself is hard to convey in text.',
    audience: [
      'Racers choosing their season',
      'Sponsors and partners',
      'Volunteers, families and spectators',
      'Junior and collegiate riders',
    ],
    built: [
      { name: 'Race landing pages', text: 'The Berkeley Hills Road Race and Berkeley Streets Criterium each have their own page, under one weekend brand.' },
      { name: 'Video and social', text: 'Race footage and the club’s social channels bring the racing onto the page.' },
      { name: 'Sponsorship and impact', text: 'A clear story for partners: all proceeds support six East Bay NICA teams.' },
      { name: 'Paths for every audience', text: 'Register, volunteer, collegiate, kids and sponsor routes from a single navigation.' },
      { name: 'SEO, AEO and GEO', text: 'Structured, answerable pages so search engines and AI assistants describe the event accurately.' },
      { name: 'Performance and responsive design', text: 'Built mobile-first for people checking race details on the way to the start.' },
    ],
    flow: ['Discover', 'Watch', 'Register', 'Volunteer', 'Sponsor'],
    decisions: [
      {
        question: 'One site for the weekend, or one per race?',
        options: [
          { label: 'A separate site for each race', note: 'Splits the audience, the search authority and the sponsor story in two.' },
          { label: 'One weekend brand with a landing page per race', note: 'Each race keeps its identity, and every visit builds the same event.', chosen: true },
        ],
      },
      {
        question: 'How should the site show what racing here is like?',
        options: [
          { label: 'Schedules, text and a photo gallery', note: 'Complete, but it undersells the racing to new riders and sponsors.' },
          { label: 'Lead with video and live social channels', note: 'The racing sells itself, and the site stays current between editions.', chosen: true },
        ],
      },
    ],
    outcome: [
      'One home for both races: registration, race information, volunteering, sponsorship and impact',
      'A sponsor story tied to a real outcome: all proceeds support six East Bay NICA teams',
      'Junior, collegiate and women’s racing visible alongside the elite fields',
    ],
    capabilities: ['Event website & landing pages', 'Video & social integration', 'Structured data', 'SEO / AEO / GEO', 'Responsive design', 'Partnerships & promotion'],
    lessons: [
      'A volunteer-run event needs a site that works for sponsors as hard as it works for racers.',
      'The same skills that ship software, clear audiences and fast feedback, run a race weekend too.',
    ],
    alt: {
      desktop: 'Berkeley Omnium home page: the headline Where champions race over video of a pack of cyclists on a hillside road',
      mobile: 'Berkeley Omnium on a phone, showing a section about riders who went on to race professionally',
    },
    verify: true,
  },
  {
    slug: 'union-city-smog-check',
    seoTitle: 'Union City Smog Check: Small-Business Redesign — Ka Lun Chan',
    description:
      'Modernizing a family-owned STAR smog check station’s website with mobile-first UX, local SEO, real photography and a fast static React build.',
    problemShort: 'Drivers search on a phone, close to a deadline, and pick whichever nearby station they trust fastest.',
    schema: { '@type': 'WebSite', about: { '@type': 'AutomotiveBusiness', name: 'Union City Smog Check', url: 'https://unioncitysmogcheck.com/' } },
    no: '313',
    name: 'Union City Smog Check',
    site: 'https://unioncitysmogcheck.com/',
    domainLabel: 'unioncitysmogcheck.com',
    shot: 'smog',
    kind: 'Small business · Modernization',
    where: 'Family-owned local business',
    role: 'Redesign, build & search',
    domain: ['Small-business modernization', 'Local SEO', 'Mobile-first UX'],
    title: 'Union City Smog Check: a local business site built to convert',
    claim:
      'A family-owned smog station got a fast, mobile-first site that answers drivers’ questions and gets them to call or drive over.',
    summary:
      'Modernizing a STAR-certified smog check station’s website: mobile-first UX, local SEO, real photography, clear conversion paths, and a fast static React build.',
    problem:
      'Most smog check searches happen on a phone, close to a deadline, from someone comparing a few nearby stations. The business needed to be found, trusted and reached in seconds, and generic stock imagery made it look like every other listing.',
    audience: [
      'Drivers with a DMV smog notice',
      'People searching for a smog check nearby',
      'Owners of STAR-directed vehicles',
    ],
    built: [
      { name: 'Mobile-first redesign', text: 'Call and directions are the first two actions on every phone screen.' },
      { name: 'Clear service pages', text: 'STAR smog checks, a smog check guide, prep tips, FAQ, and location and hours.' },
      { name: 'Real business photography', text: 'The actual station and customers’ cars instead of generic stock or SEO imagery.' },
      { name: 'Local SEO, AEO and GEO', text: 'Answer-first pages such as “Do I need a smog check?” for search engines and AI assistants.' },
      { name: 'Static React build', text: 'Prerendered pages that load fast and leave nothing to patch.' },
    ],
    flow: ['Search', 'Answer', 'Trust', 'Call', 'Arrive'],
    decisions: [
      {
        question: 'What should the imagery say?',
        options: [
          { label: 'Stock photos chosen for SEO', note: 'Cheap and plentiful, and they say nothing about this shop.' },
          { label: 'Real photos of the station and real cars', note: 'Visitors recognize the place when they arrive, and the site earns trust a stock photo cannot.', chosen: true },
        ],
      },
      {
        question: 'What is the conversion?',
        options: [
          { label: 'An online booking form', note: 'Adds a step for a business that takes walk-ins.' },
          { label: 'Call now and Get directions', note: 'Walk-ins need no appointment, so the fastest path is a tap to call or navigate.', chosen: true },
        ],
      },
      {
        question: 'How should the site be built?',
        options: [
          { label: 'A site-builder or CMS template', note: 'Easy to start, heavier pages, and ongoing updates to maintain.' },
          { label: 'Static, prerendered React', note: 'Fast on a phone, cheap to host, and nothing for a small business to keep patched.', chosen: true },
        ],
      },
    ],
    outcome: [
      'Call and directions one tap away on every phone',
      'Services, STAR certification, hours and prep tips each easy to find and answer',
      'Real photography that shows the actual station',
      'Fast static pages a small business never has to maintain',
    ],
    capabilities: ['React', 'Static prerendering', 'Local SEO', 'SEO / AEO / GEO', 'Mobile-first UX', 'Conversion design'],
    lessons: [
      'For a local business, the website’s job is to end the search, not to be browsed.',
      'Real photos are a trust signal and a search signal at the same time.',
    ],
    alt: {
      desktop: 'Union City Smog Check home page: the headline Union City smog check, done fast, with Call now and Get directions buttons beside a photo of the station',
      mobile: 'Union City Smog Check on a phone, with full-width Call now and Get directions buttons above a photo of the station',
    },
    verify: true,
  },
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

export const shotSrc = (p) => ({
  desktop: `/images/projects/${p.shot}-desktop-1280.webp`,
  desktopSet: `/images/projects/${p.shot}-desktop-640.webp 640w, /images/projects/${p.shot}-desktop-960.webp 960w, /images/projects/${p.shot}-desktop-1280.webp 1280w`,
  mobile: `/images/projects/${p.shot}-mobile-520.webp`,
  mobileSet: `/images/projects/${p.shot}-mobile-260.webp 260w, /images/projects/${p.shot}-mobile-520.webp 520w`,
  og: `/images/projects/${p.shot}-og.jpg`,
});
