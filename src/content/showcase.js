import { builtSites } from './home';

// What each recording shows, for the poster alt text. Files come from scripts/record-project-previews.mjs.
const previews = {
  VeloWise: { slug: 'velowise', posterAlt: 'VeloWise home page with the headline See beyond velocity. Understand delivery. The recording opens the sample project and scrolls its delivery overview.' },
  FedPath: { slug: 'fedpath', caseStudy: '/projects/fedpath/', posterAlt: 'FedPath home page beside the question What does your business do? The recording answers three questions and shows matching open opportunities.' },
  SurgeIQ: { slug: 'surgeiq', posterAlt: 'SurgeIQ Lab home page with the headline Your cycling stats. Free. The recording steps its demo through FTP, power zones, a structured workout and the ride.' },
  'Useful Little Tools': { slug: 'tools', posterAlt: 'Useful Little Tools home page with a tool search box. The recording finds the JWT Debugger and decodes an expired sample token.' },
  'Union City Smog Check': { slug: 'smog', caseStudy: '/projects/union-city-smog-check/', posterAlt: 'Union City Smog Check home page with Call now and Get directions buttons beside a photo of the station. The recording scrolls to the prep checklist and opens two items.' },
  'Berkeley Omnium': { slug: 'omnium', caseStudy: '/projects/berkeley-omnium/', posterAlt: 'Berkeley Omnium home page with the race weekend headline over a photo of riders. The recording scrolls to the race options and the event numbers.' },
};

export const showcase = builtSites.map((site) => {
  if (!previews[site.name]) throw new Error(`No preview for ${site.name}: record one and add it to src/content/showcase.js`);
  return { ...site, ...previews[site.name] };
});
