export const metadata = {
  seoTitle: 'How DevOps Changed: Expect Scripts to AI Agents — Ka Lun Chan',
  dek:
    'I started out writing Expect scripts that pretended to be a human operator. Now AI agents can reason about the work an operator does. The tools changed almost completely. The engineering problem underneath them barely moved.',
  related: [
    { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'What VoIP, publishing, SaaS and government systems had in common' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'Syntax is cheap to retrieve. Understanding isn’t.' },
    { to: '/work/carrier-capacity/', label: 'Case study: capacity planning across 2,000+ collocations' },
    { to: '/writing/building-software-before-and-after-ai/', label: 'I used to build everything myself, then with AI' },
    { to: '/writing/network-security-before-devsecops/', label: 'The security story from the same carrier network' },
    { to: '/writing/from-dos-to-ai-thirty-years-of-technology/', label: 'From DOS to AI: decades of technology, as a user and a builder' },
    { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning, from the same carrier network to the cloud' },
    { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'An agent on a VPS: cron, state and a Telegram report' },
    { to: '/writing/talking-to-ai-in-a-terminal/', label: 'Expect’s descendant: the AI assistant in my terminal' },
  ],
  keywords: [
    'evolution of DevOps',
    'history of DevOps automation',
    'AI and DevOps',
    'AI DevOps automation',
    'can AI replace DevOps engineers',
    'AI infrastructure automation',
    'Terraform AI',
    'Kubernetes AI',
    'infrastructure as code',
    'future of DevOps',
    'Expect scripts',
  ],
  about: [
    { '@type': 'Thing', name: 'DevOps', sameAs: 'https://en.wikipedia.org/wiki/DevOps' },
    { '@type': 'Thing', name: 'Infrastructure as code', sameAs: 'https://en.wikipedia.org/wiki/Infrastructure_as_code' },
    { '@type': 'Thing', name: 'AIOps', sameAs: 'https://en.wikipedia.org/wiki/AIOps' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Expect', sameAs: 'https://en.wikipedia.org/wiki/Expect' },
    { '@type': 'SoftwareApplication', name: 'KornShell', sameAs: 'https://en.wikipedia.org/wiki/KornShell' },
    { '@type': 'SoftwareApplication', name: 'Jenkins', sameAs: 'https://en.wikipedia.org/wiki/Jenkins_(software)' },
    { '@type': 'SoftwareApplication', name: 'Docker', sameAs: 'https://en.wikipedia.org/wiki/Docker_(software)' },
    { '@type': 'SoftwareApplication', name: 'Terraform', sameAs: 'https://en.wikipedia.org/wiki/Terraform_(software)' },
    { '@type': 'SoftwareApplication', name: 'Kubernetes', sameAs: 'https://en.wikipedia.org/wiki/Kubernetes' },
    { '@type': 'SoftwareApplication', name: 'GitHub Actions', url: 'https://github.com/features/actions' },
    { '@type': 'Thing', name: 'Network operations center', sameAs: 'https://en.wikipedia.org/wiki/Network_operations_center' },
  ],
  faq: [
    {
      q: 'Can AI automate DevOps?',
      a: 'Increasingly, yes. AI can write Terraform, Kubernetes manifests and CI/CD pipelines, read logs and stack traces, investigate failed deployments and propose fixes as pull requests. It works best taking on investigation and repetitive work, with read-only access by default and a person approving every production change.',
    },
    {
      q: 'Will AI replace DevOps engineers?',
      a: 'Unlikely, at least not outright. AI will write more of the infrastructure code and do more of the first investigation during incidents. Someone still has to understand networking, security, databases and failure modes well enough to judge whether a proposed change is safe, and to own the result.',
    },
    {
      q: 'How has DevOps changed?',
      a: 'DevOps moved from hand-written scripts that automated people at terminals to standardized, version-controlled tools: CI/CD pipelines, containers, infrastructure as code, Kubernetes and cloud APIs. Operational knowledge that once lived in scripts, runbooks and people’s heads is now mostly in files that can be reviewed, tested and rolled back.',
    },
    {
      q: 'What did engineers use before modern DevOps?',
      a: 'Shell scripts such as ksh, Expect scripts that automated interactive command lines, runbooks, and people. Expect was common because a lot of network equipment had no API, so scripts waited for a prompt, sent a command and checked the response, the way an operator would. Some changes still needed a technician on site with a console cable.',
    },
    {
      q: 'What is the future of DevOps?',
      a: 'More AI-assisted operations: agents that investigate alerts across logs, metrics, traces and recent commits, then propose a fix as a pull request that goes through tests, policy checks and human approval. The guardrails, such as least privilege, audit trails, rollback and blast-radius limits, matter as much as the agents.',
    },
  ],
};
