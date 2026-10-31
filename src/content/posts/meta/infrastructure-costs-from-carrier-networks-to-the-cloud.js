export const metadata = {
  seoTitle: 'Infrastructure Costs From Carrier Networks to the Cloud — Ka Lun Chan',
  dek:
    'I have paid for infrastructure from the carrier network to the company that owns the invoice. Each layer taught me something different about cost, and together they are why I never evaluate a technical decision on whether it works alone.',
  related: [
    { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'The forecasting method: capacity planning from carrier networks to the cloud' },
    { to: '/writing/hidden-cost-of-software-architecture/', label: 'The architecture decisions: the hidden cost of scaling too early' },
    { to: '/writing/building-a-startup-from-idea-to-acquisition/#business', label: 'When software becomes a business' },
    { to: '/about/#stack', label: 'The seven layers on the About page' },
    { to: '/expertise/#capacity', label: 'Infrastructure strategy, capacity planning and cost optimization' },
  ],
  keywords: [
    'infrastructure strategy',
    'infrastructure economics',
    'infrastructure cost management',
    'total cost of ownership technology',
    'cloud cost optimization',
    'AWS cost optimization',
    'VoIP least cost routing quality',
    'data center cost considerations',
    'engineering leadership and budgets',
    'CTO experience infrastructure',
    'technology cost management',
  ],
  about: [
    { '@type': 'Thing', name: 'Total cost of ownership', sameAs: 'https://en.wikipedia.org/wiki/Total_cost_of_ownership' },
    { '@type': 'Thing', name: 'IT infrastructure', sameAs: 'https://en.wikipedia.org/wiki/IT_infrastructure' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Least-cost routing', sameAs: 'https://en.wikipedia.org/wiki/Least-cost_routing' },
    { '@type': 'Thing', name: 'Colocation centre', sameAs: 'https://en.wikipedia.org/wiki/Colocation_centre' },
    { '@type': 'Thing', name: 'Amazon Web Services', sameAs: 'https://en.wikipedia.org/wiki/Amazon_Web_Services' },
    { '@type': 'Thing', name: 'Capacity planning', sameAs: 'https://en.wikipedia.org/wiki/Capacity_planning' },
    { '@type': 'Organization', name: 'Yippify', url: 'https://yippify.com/' },
  ],
  faq: [
    {
      q: 'How do infrastructure costs differ between carrier networks, data centers and the cloud?',
      a: 'Carrier and data center capacity is capital bought ahead of demand, with long lead times, lifecycle, power, cooling and rack space, and you pay for peak capacity every day. Cloud capacity is consumption billed behind demand, available in minutes, where waste is the default state unless someone right-sizes, scales on real traffic and removes what nobody owns.',
    },
    {
      q: 'Why is the cheapest VoIP route not always the best one?',
      a: 'Because cheap routes are often cheap for a reason: they fail to connect, connect late or carry poor audio. A customer who redials costs the minutes, the retry and sometimes the customer. Feeding call statistics such as answer rates, durations and post-dial delay back into least-cost routing picks the route with the better margin once quality is counted.',
    },
    {
      q: 'How does being a founder change how an engineer evaluates technology?',
      a: 'An engineer asks whether a solution works. A founder also asks whether the business can afford to operate it, what it costs at ten times the usage, who maintains it, whether the complexity is justified by a problem that exists today, and whether it solves a real business problem rather than an interesting one.',
    },
  ],
};
