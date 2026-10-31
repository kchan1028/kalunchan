export const metadata = {
  seoTitle: 'Connect Hermes Agent on Hostinger VPS to VS Code — Ka Lun Chan',
  dek:
    'The setup half of my self-hosted agent experiment: getting from a MacBook to the Hermes Agent container on a Hostinger VPS through VS Code, with the model key in the right file and nothing exposed that should not be.',
  related: [
    { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Building my own AI job search agent with Hermes' },
    { to: '/writing/connect-strava-to-claude-mcp/', label: 'Connecting Strava to Claude with MCP, step by step' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/#guardrails', label: 'Don’t hand AI the production keys' },
    { to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI' },
    { to: '/writing/network-security-before-devsecops/', label: 'Where the least-privilege habit comes from' },
    { to: '/writing/omniroute-hermes-agent-docker/', label: 'Part three: an AI model router in front of Hermes' },
  ],
  keywords: [
    'Hermes Agent Hostinger VPS',
    'connect VS Code to VPS SSH',
    'VS Code Remote-SSH Hostinger',
    'Hermes Agent Docker container',
    'Hermes Agent Anthropic API key configuration',
    'self-hosted AI agent setup',
    'Hostinger Hermes one-click install',
    'SSH key authentication VPS',
    'Permission denied publickey fix',
    'Hermes Agent config.yaml .env',
  ],
  about: [
    { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
    { '@type': 'SoftwareApplication', name: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'VS Code Remote - SSH', url: 'https://code.visualstudio.com/docs/remote/ssh' },
    { '@type': 'Thing', name: 'Hermes Agent configuration', url: 'https://hermes-agent.nousresearch.com/docs/user-guide/configuration' },
    { '@type': 'Thing', name: 'Hermes Agent model providers', url: 'https://hermes-agent.nousresearch.com/docs/integrations/providers' },
    { '@type': 'Thing', name: 'Hostinger Managed Hermes overview and setup', url: 'https://www.hostinger.com/support/hostinger-managed-hermes-overview-and-setup/' },
    { '@type': 'Thing', name: 'Docker', sameAs: 'https://en.wikipedia.org/wiki/Docker_(software)' },
    { '@type': 'Thing', name: 'Secure Shell', sameAs: 'https://en.wikipedia.org/wiki/Secure_Shell' },
  ],
  faq: [
    {
      q: 'Does a Claude subscription give Hermes access to the Anthropic API?',
      a: 'No. A Claude Pro, Max or Team subscription pays for the Claude apps and Claude Code. The Anthropic API is a separate pay-per-token account with its own key, and that key is the predictable way to run Hermes on Claude. Hermes can reuse a Claude Code login through OAuth, but its docs say that path needs a Max plan with extra-usage credits.',
    },
    {
      q: 'Where does Hermes Agent store its configuration and API keys?',
      a: 'Non-secret settings live in ~/.hermes/config.yaml and secrets in ~/.hermes/.env, inside the container user’s home. The hermes model command writes both interactively, and hermes config set writes a key to the env file so it never lands in the YAML. Keep that directory on a Docker volume or the changes vanish when the container is recreated.',
    },
    {
      q: 'Why does “hermes: command not found” happen on a Hostinger VPS?',
      a: 'Because Hostinger’s one-click install runs Hermes inside a Docker container, so the command exists in the container, not on the host. Run it through docker exec -it CONTAINER_NAME hermes, or open a shell in the container first.',
    },
    {
      q: 'How do I fix “Permission denied (publickey,password)” when connecting to the VPS?',
      a: 'Check that your public key is in ~/.ssh/authorized_keys for the user you log in as, that ~/.ssh is mode 700 and authorized_keys is 600, and that the client is offering the right key, which ssh -v shows. Pin the key with IdentityFile and IdentitiesOnly yes in your SSH config. If SSH is unreachable, paste the key through the hPanel browser terminal.',
    },
  ],
};
