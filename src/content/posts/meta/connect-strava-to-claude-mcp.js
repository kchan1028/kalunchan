export const metadata = {
  seoTitle: 'How to Connect Strava to Claude with MCP — Ka Lun Chan',
  dek:
    'Strava now has an official MCP connector for Claude. This is how to set it up, what happens when you ask it something, and the questions about your training that are worth asking.',
  related: [
    { to: '/writing/berkeley-omnium-new-website-next-generation/', label: 'Berkeley Omnium: a new website and the next generation of racers' },
    { to: '/community/', label: 'Why I help organize Berkeley Omnium' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'What to actually keep in your head as an engineer' },
    { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'Another how-to: a Hermes agent on a VPS, from VS Code' },
  ],
  image: { path: '/images/writing/strava-mcp-claude-og.jpg', width: 1200, height: 630, alt: 'How to connect Strava to Claude with MCP: a question goes from you to Claude, through Strava’s MCP server to your activities, and back as an answer' },
  keywords: [
    'Strava MCP',
    'Strava MCP connector',
    'connect Strava to Claude',
    'Claude Strava integration',
    'how to use Strava MCP',
    'Strava MCP Claude Code',
    'analyze Strava data with AI',
    'Strava AI',
    'Model Context Protocol',
  ],
  // Entities for the BlogPosting graph (see site.js). Plain Things, not
  // SoftwareApplication, so validators don't treat them as app listings.
  about: [
    {
      '@type': 'Thing',
      name: 'Strava MCP connector',
      description: 'Strava’s official, read-only Model Context Protocol server for Claude, included with a paid Strava subscription.',
      url: 'https://support.strava.com/en-us/articles/15401531-what-is-the-strava-mcp-connector',
    },
    {
      '@type': 'Thing',
      name: 'Model Context Protocol',
      alternateName: 'MCP',
      url: 'https://modelcontextprotocol.io/',
      sameAs: 'https://en.wikipedia.org/wiki/Model_Context_Protocol',
    },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Strava', url: 'https://www.strava.com/', sameAs: 'https://en.wikipedia.org/wiki/Strava' },
    { '@type': 'Thing', name: 'Claude', url: 'https://claude.ai/', sameAs: 'https://en.wikipedia.org/wiki/Claude_(language_model)' },
    { '@type': 'Thing', name: 'Claude Code', url: 'https://code.claude.com/docs/en/overview' },
    { '@type': 'Organization', name: 'Anthropic', url: 'https://www.anthropic.com/', sameAs: 'https://en.wikipedia.org/wiki/Anthropic' },
    { '@type': 'Thing', name: 'OAuth', sameAs: 'https://en.wikipedia.org/wiki/OAuth' },
    { '@type': 'Thing', name: 'Road bicycle racing', sameAs: 'https://en.wikipedia.org/wiki/Road_bicycle_racing' },
  ],
  // First-party sources for every setup step and limit. Rendered at the end of
  // the post and emitted as JSON-LD citations. Re-check them before editing.
  sources: [
    { label: 'Strava Help Center: What Is the Strava MCP Connector?', url: 'https://support.strava.com/en-us/articles/15401531-what-is-the-strava-mcp-connector' },
    { label: 'Strava Help Center: Strava API and MCP FAQ', url: 'https://support.strava.com/en-us/articles/15401526-strava-api-and-mcp-faq' },
    { label: 'Strava press release: Strava Launches MCP Connector', url: 'https://press.strava.com/articles/strava-launches-mcp-connector' },
    { label: 'Strava API Policy (sections 3.5, 5.3 and 5.16)', url: 'https://www.strava.com/legal/api_policy' },
    { label: 'Strava developer community: Strava API FAQ', url: 'https://communityhub.strava.com/developers-knowledge-base-14/strava-api-faq-12906' },
    { label: 'Claude directory: Strava connector', url: 'https://claude.com/marketplace/connectors/strava' },
    { label: 'Claude Help Center: Use connectors to extend Claude’s capabilities', url: 'https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities' },
    { label: 'Claude Code docs: Connect Claude Code to tools via MCP', url: 'https://code.claude.com/docs/en/mcp' },
    { label: 'Model Context Protocol: Introduction', url: 'https://modelcontextprotocol.io/docs/getting-started/intro' },
  ],
  faq: [
    {
      q: 'What is the Strava MCP connector?',
      a: 'It’s Strava’s official Model Context Protocol server. After you authorize it with OAuth, Claude can read your Strava activities, heart rate, power, pace and GPS data, training zones and gear, and use them to answer questions about your training. It’s read-only and included with a paid Strava subscription.',
    },
    {
      q: 'How do I connect Strava to Claude?',
      a: 'In Claude on the web or the desktop app, open Customize, then Connectors, click the + icon, search for Strava, click Connect and approve access on Strava. In Claude Code, run claude mcp add --transport http strava-mcp https://mcp.strava.com/mcp, then sign in from the /mcp menu.',
    },
    {
      q: 'Does Strava MCP require a subscription?',
      a: 'Yes. It’s included with paid Strava subscriptions, including the Strava + Runna bundle, the Family and Student plans, and the military, educator and medical discount plans. Free accounts can’t use it, and a trial gets access only once it converts to a paid subscription.',
    },
    {
      q: 'Can Claude analyze my Strava rides?',
      a: 'Yes. With the connector, Claude can read your rides and their heart rate, power, pace and GPS streams, along with your zones and gear, and answer questions about volume, intensity, climbing, consistency and cross-training. Its answers can differ from Strava’s own features, so check any number that would change a decision.',
    },
    {
      q: 'Is Strava MCP read-only?',
      a: 'Yes. The connector only reads data, and the OAuth scopes it requests are all read scopes. Access is limited to your own account, and you can revoke it at any time from your Strava settings.',
    },
    {
      q: 'Can Claude edit or upload Strava activities through MCP?',
      a: 'No. Through Strava’s official connector, Claude can’t upload, edit, rename or delete activities. It can only read them.',
    },
    {
      q: 'What’s the difference between Strava MCP and the Strava API?',
      a: 'The Strava API is for developers building applications, who handle OAuth, tokens, endpoints, rate limits and app review themselves. Strava MCP connects an AI assistant to your own Strava data so you can ask questions in plain language without writing code. Strava’s API Policy also restricts using API data with AI applications and makes the Strava MCP the exception.',
    },
    {
      q: 'How do I disconnect Strava from Claude?',
      a: 'On strava.com, open Settings, then My Apps, and click Revoke Access next to Claude. That works however you connected. You can also click Disconnect under Customize, then Connectors, then Strava in Claude, or run claude mcp remove strava-mcp in Claude Code.',
    },
    {
      q: 'Can I use an unofficial Strava MCP server instead?',
      a: 'Strava’s API Policy names the Strava MCP as the only authorized agent interface to Strava and says developers may not operate other MCP servers that expose Strava data. Read the current policy before you run an open-source Strava MCP server against your account.',
    },
  ],
};
