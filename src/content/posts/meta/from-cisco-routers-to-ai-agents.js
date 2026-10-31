export const metadata = {
  seoTitle: 'From Carrier Networks to Cloud and AI Agents — Ka Lun Chan',
  dek:
    'The tools changed from Cisco routers and physical servers to cloud regions and AI agents. The questions I ask about a system mostly did not, and most of them I learned at a console port.',
  related: [
    { to: '/writing/why-i-still-write-code/', label: 'Part 2: Why I still write code' },
    { to: '/writing/ai-agents-reliable-in-production/', label: 'Part 3: Making AI agents reliable in production' },
    { to: '/writing/network-security-before-devsecops/', label: 'Network security long before DevSecOps' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
    { to: '/work/carrier-capacity/', label: 'Case study: capacity across 2,000+ collocations' },
  ],
  keywords: [
    'network engineer to cloud architect',
    'carrier network career',
    'Cisco ACL to cloud security',
    'infrastructure engineering career',
    'security at every layer',
    'AI agents infrastructure fundamentals',
    'engineering career journey',
  ],
  about: [
    { '@type': 'Thing', name: 'Computer network', sameAs: 'https://en.wikipedia.org/wiki/Computer_network' },
    { '@type': 'Thing', name: 'Cloud computing', sameAs: 'https://en.wikipedia.org/wiki/Cloud_computing' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Access-control list', sameAs: 'https://en.wikipedia.org/wiki/Access-control_list' },
    { '@type': 'Thing', name: 'NetScreen Technologies', sameAs: 'https://en.wikipedia.org/wiki/NetScreen_Technologies' },
    { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
    { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
  ],
  faq: [
    {
      q: 'How does network engineering experience help with cloud architecture?',
      a: 'Cloud concepts map onto network ones: a VPC with public and private subnets is a zone design, a security group is a stateful ACL, and debugging a distributed system is walking a request path hop by hop. Latency, DNS, timeouts and slow dependencies are the failures network engineers learn first.',
    },
    {
      q: 'Are AI agents different from earlier infrastructure?',
      a: 'The model is new; the rest is familiar. An agent calls a model over the network with a credential, through a gateway, with a timeout, calls tools with their own permissions, keeps state and runs on a schedule. Authentication, authorization, reliability, observability, cost and security boundaries all still apply.',
    },
  ],
};
