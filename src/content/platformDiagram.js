// Fig. 301-2. Its own module so the homepage can draw it without loading every case study in work.js.
export const platformDiagram = {
  label: 'Geo-routed regional deployment',
  tiers: [
    { name: 'Users', nodes: [{ id: 'na', label: 'North America' }, { id: 'sa', label: 'South America' }, { id: 'as', label: 'Asia' }, { id: 'eu', label: 'Europe' }] },
    { name: 'Edge', nodes: [{ id: 'geo', label: 'Geo-location routing', sub: 'nearest healthy region' }] },
    { name: 'Regions', nodes: [{ id: 'rna', label: 'Region NA', sub: 'web · app tier' }, { id: 'reu', label: 'Region EU', sub: 'web · app tier' }, { id: 'ras', label: 'Region APAC', sub: 'web · app tier' }] },
    { name: 'Data', nodes: [{ id: 'db', label: 'Primary data', sub: 'replicated' }] },
  ],
  edges: [['na', 'geo'], ['sa', 'geo'], ['as', 'geo'], ['eu', 'geo'], ['geo', 'rna', null, true], ['geo', 'reu'], ['geo', 'ras'], ['rna', 'db', null, true], ['reu', 'db'], ['ras', 'db']],
};
