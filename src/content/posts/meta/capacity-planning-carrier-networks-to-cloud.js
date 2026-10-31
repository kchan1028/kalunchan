export const metadata = {
  seoTitle: 'Cloud Capacity Planning Lessons From Carrier Networks — Ka Lun Chan',
  dek:
    'When capacity was a purchase order, being wrong meant congestion or dark hardware. In the cloud, being wrong means a bill. The method in between did not change: measure first, plan from data, know what fills first, and count the engineers as capacity too.',
  related: [
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture: scaling too early' },
    { to: '/work/carrier-capacity/', label: 'Case study: capacity planning across 2,000+ collocations' },
    { to: '/work/three-continent-platform/', label: 'Case study: one data center to three continents' },
    { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open-source VoIP taught me about distributed systems' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
    { to: '/expertise/#capacity', label: 'Infrastructure scaling, capacity planning and cost optimization' },
    { to: '/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/', label: 'What each layer, from carrier to founder, taught me about cost' },
    { to: '/writing/data-driven-engineering-network-voip-publishing/', label: 'The R program, the routing metrics and the publishing analytics behind the method' },
  ],
  keywords: [
    'capacity planning',
    'infrastructure capacity planning',
    'cloud capacity planning',
    'AWS capacity planning',
    'network capacity forecasting',
    'SNMP capacity monitoring',
    'autoscaling vs capacity planning',
    'cloud cost optimization',
    'AWS cost reduction',
    'infrastructure scaling',
    'VoIP capacity planning',
    'carrier network capacity planning',
    'least cost routing VoIP',
    'geolocation routing media path',
    'engineering leadership capacity',
    'performance optimization',
  ],
  about: [
    { '@type': 'Thing', name: 'Capacity planning', sameAs: 'https://en.wikipedia.org/wiki/Capacity_planning' },
    { '@type': 'Thing', name: 'Cloud cost optimization' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Simple Network Management Protocol', sameAs: 'https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol' },
    { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
    { '@type': 'Thing', name: 'Least-cost routing', sameAs: 'https://en.wikipedia.org/wiki/Least-cost_routing' },
    { '@type': 'Thing', name: 'Amazon Web Services', sameAs: 'https://en.wikipedia.org/wiki/Amazon_Web_Services' },
    { '@type': 'Thing', name: 'Terraform', sameAs: 'https://en.wikipedia.org/wiki/Terraform_(software)' },
    { '@type': 'Thing', name: 'Asterisk (PBX)', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
  ],
  faq: [
    {
      q: 'What is capacity planning?',
      a: 'The work of making sure a system has enough resources to meet demand before the demand arrives, without paying for resources that sit idle. On a carrier network it meant forecasting utilization far enough ahead to cover hardware lead times. In the cloud it means the same forecast, with a monthly bill replacing the purchase order.',
    },
    {
      q: 'How does capacity planning differ between physical infrastructure and the cloud?',
      a: 'The unit of capacity changed from routers and circuits to containers and instance sizes, lead time collapsed from months to minutes, and the cost of over-provisioning went from sunk hardware to a recurring bill. The method is unchanged: measure first, plan from data, decide headroom in advance, and know which resource fills first.',
    },
    {
      q: 'Does autoscaling replace capacity planning?',
      a: 'No. Autoscaling reacts after a metric crosses a threshold, new capacity takes time to start, and the database and other limits such as connections, Lambda concurrency and third-party rate limits usually do not scale the same way. Forecast the baseline and known peaks from history, let autoscaling handle the variation, and set maximums as a cost guardrail.',
    },
    {
      q: 'How did Ka Lun Chan reduce AWS costs?',
      a: 'As CTO of a media publishing platform he led a re-platform onto AWS, and the infrastructure improvements that came with it contributed to AWS costs about 30% lower: right-sizing instances, scaling the web tier on real demand, fixing database queries and connection handling, caching unchanged pages, and removing resources nobody used.',
    },
    {
      q: 'Why is engineering capacity part of capacity planning?',
      a: 'A system with enough compute and not enough engineers to run it is the more common failure. Team size, velocity, technical debt, operational overhead, budget and commitments all fill up and all have lead times, and hiring adds delivery capacity only after a delay and only if the architecture gives new people something to own.',
    },
  ],
};
