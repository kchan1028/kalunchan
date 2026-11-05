export const metadata = {
  seoTitle: 'Training a TAC to Support a New SOC Service',
  dek:
    'I helped train the TAC to support a managed firewall and VPN service I had only just learned myself. Preparing the course was the hard part, patience was the lesson, and the escalations showed what the training had missed.',
  related: [
    { to: '/writing/network-security-before-devsecops/', label: 'Network security before DevSecOps' },
    { to: '/writing/from-cisco-routers-to-ai-agents/', label: 'From Cisco routers to AI agents' },
    { to: '/mentorship/', label: 'How I mentor engineers' },
    { to: '/writing/when-your-best-engineer-becomes-a-bottleneck/', label: 'When your best engineer becomes a bottleneck' },
  ],
  keywords: [
    'training a TAC',
    'Security Operations Center',
    'managed security service',
    'technical support training',
    'how to prepare technical training',
    'escalation support',
    'NetScreen firewall',
  ],
  about: [
    { '@type': 'Thing', name: 'Security operations center', sameAs: 'https://en.wikipedia.org/wiki/Security_operations_center' },
    { '@type': 'Thing', name: 'Managed security service', sameAs: 'https://en.wikipedia.org/wiki/Managed_security_service' },
    { '@type': 'Thing', name: 'Technical support', sameAs: 'https://en.wikipedia.org/wiki/Technical_support' },
  ],
  faq: [
    {
      q: 'What is the difference between a SOC and a TAC?',
      a: 'A Security Operations Center (SOC) operates and monitors security services. A Technical Assistance Center (TAC) is the support team that takes customer calls and troubleshoots problems. In my case the SOC supported a new managed firewall and VPN service, and the TAC was trained so it could support that service too.',
    },
    {
      q: 'How do you prepare technical training for a support team?',
      a: 'Start from the problems the team will be asked to solve. For each one, write what to check first, what healthy looks like and when to escalate. Teach the fundamentals those problems depend on before the product, use slides for diagrams and steps, and spend the rest of the time troubleshooting together.',
    },
    {
      q: 'What is the most important lesson in training a support team on something new?',
      a: 'Be patient with people who don’t have the skill set or the fundamentals yet. A group rarely starts from the same place, and going back to how the system is supposed to work is what lets everyone take the calls afterwards.',
    },
  ],
};
