export const metadata = {
  seoTitle: 'From SNMP Capacity Forecasting to VoIP Routing and SEO — Ka Lun Chan',
  dek:
    'What building network capacity forecasting tools, optimizing VoIP call routing, and analyzing website traffic taught me about engineering: the products changed, the data changed, and the method stayed the same.',
  related: [
    { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning: what carrier networks taught me about scaling cloud infrastructure' },
    { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open-source VoIP taught me about distributed systems' },
    { to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/', label: 'From SEO and AdSense to AI search: what digital publishing taught me' },
    { to: '/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/', label: 'What I’ve learned about infrastructure costs' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'data-driven engineering decisions',
    'network capacity forecasting SNMP',
    'R capacity planning network',
    'VoIP least cost routing call statistics',
    'answer seizure ratio average call duration',
    'website analytics revenue per thousand page views',
    'optimization engineering leadership',
    'measure analyze predict optimize validate',
    'engineering and business outcomes',
  ],
  about: [
    { '@type': 'Thing', name: 'Capacity planning', sameAs: 'https://en.wikipedia.org/wiki/Capacity_planning' },
    { '@type': 'Thing', name: 'Data-driven decision making' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Simple Network Management Protocol', sameAs: 'https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol' },
    { '@type': 'Thing', name: 'R (programming language)', sameAs: 'https://en.wikipedia.org/wiki/R_(programming_language)' },
    { '@type': 'Thing', name: 'Least-cost routing', sameAs: 'https://en.wikipedia.org/wiki/Least-cost_routing' },
    { '@type': 'Thing', name: 'Answer-seizure ratio', sameAs: 'https://en.wikipedia.org/wiki/Answer-seizure_ratio' },
    { '@type': 'Thing', name: 'Asterisk (PBX)', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
    { '@type': 'Thing', name: 'Web analytics', sameAs: 'https://en.wikipedia.org/wiki/Web_analytics' },
  ],
  faq: [
    {
      q: 'How do you forecast network capacity from SNMP data?',
      a: 'Collect interface utilization over SNMP, then analyze the trend in peak-hour traffic rather than the average, because a link averaging 40% can already be hitting 85% every evening. Project the growth in the peaks against a headroom threshold decided in advance, and the result is a date by which each link needs more capacity, ahead of the hardware lead time.',
    },
    {
      q: 'Why is the cheapest VoIP route not always the best?',
      a: 'Because cheap routes often fail to connect, connect slowly or carry poor audio. Feeding call statistics such as the answer-seizure ratio, average call duration, completion rate and media quality per route and destination back into least-cost routing lets the system balance cost against quality instead of chasing the lowest rate.',
    },
    {
      q: 'What do carrier networks, VoIP and digital publishing have in common for an engineer?',
      a: 'The same loop: measure, analyze, predict, optimize, validate. The data differs, SNMP counters, call records or web analytics, and so does the decision, when to upgrade a link, where to send a call, which page to improve. In each one the most available metric hid the real problem, and the decision had a cost on one side and a customer on the other.',
    },
  ],
};
