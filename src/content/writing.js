// Writing: metadata for each post. Bodies live in src/content/posts/.
// Dates feed JSON-LD and article:* meta only; the audit keeps years out of visible text.

export const posts = [
  {
    slug: 'connect-strava-to-claude-mcp',
    no: '657',
    title: 'How to Connect Strava to Claude with MCP: A Step-by-Step Guide',
    seoTitle: 'How to Connect Strava to Claude with MCP — Ka Lun Chan',
    description:
      'Connect Strava’s official MCP connector to Claude or Claude Code step by step, then ask better questions about your rides, intensity, climbing and race prep.',
    dek:
      'Strava now has an official MCP connector for Claude. This is how to set it up, what happens when you ask it something, and the questions about your training that are worth asking.',
    summary:
      'Setting up Strava’s official, read-only MCP connector in Claude or Claude Code, then putting it to work: prompts for volume, intensity, climbing and race prep, and what it can’t do.',
    topics: ['Cycling'],
    related: [
      { to: '/writing/berkeley-omnium-new-website-next-generation/', label: 'Berkeley Omnium: a new website and the next generation of racers' },
      { to: '/community/', label: 'Why I help organize Berkeley Omnium' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why understanding a system beats memorizing it' },
    ],
    minutes: 17,
    image: { path: '/images/writing/strava-mcp-claude-og.jpg', width: 1200, height: 630, alt: 'How to connect Strava to Claude with MCP: a question goes from you to Claude, through Strava’s MCP server to your activities, and back as an answer' },
    published: '2026-10-05',
    modified: '2026-10-05',
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
  },
  {
    slug: 'building-a-startup-from-idea-to-acquisition',
    no: '656',
    title: 'From an Idea to an Acquisition: What Building a Startup Taught Me',
    seoTitle: 'Startup CTO Lessons: From Idea to Acquisition — Ka Lun Chan',
    description:
      'What building a startup from the ground up taught me as co-founder and CTO: 0→1 engineering, scaling to 400,000+ users, technical debt and an acquisition.',
    dek:
      'My journey building a company from the ground up: writing the software and finding customers, then scaling systems, leading engineers, and eventually seeing the company acquired.',
    summary:
      'Co-founding and building a global communications company: 0→1 with incomplete information, when reliability becomes the product, 1→10, learning to delegate, technical debt as an investment, and an acquisition.',
    topics: ['Founder story', 'Leadership', 'Architecture'],
    related: [
      { to: '/experience/#communications', label: 'Co-founder and CTO: the problem, decisions and outcome' },
      { to: '/work/three-continent-platform/', label: 'Case study: one data center to three continents' },
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
    ],
    minutes: 17,
    image: { path: '/images/writing/founder-story-og.jpg', width: 1200, height: 630, alt: 'From an idea to an acquisition: the stages from idea through 0→1, customers, production, 1→10 and leadership to acquisition' },
    published: '2026-10-05',
    modified: '2026-10-05',
    keywords: [
      'building a startup from scratch',
      'startup engineering journey',
      'startup CTO experience',
      'CTO startup journey',
      '0 to 1 engineering',
      '0 to 1 vs 1 to 10',
      'scaling an engineering team',
      'engineering leadership lessons',
      'startup technical debt',
      'technical founder to engineering leader',
      'founder engineering lessons',
    ],
    faq: [
      {
        q: 'What does 0→1 mean in startup engineering?',
        a: '0→1 is the stage where a product goes from nothing to something people use. There is no product, no customers and no proof of demand yet, so the engineering job is to find a real problem, ship the smallest thing that solves it, and make good decisions with incomplete information.',
      },
      {
        q: 'What changes when a startup goes from 0→1 to 1→10?',
        a: 'The goal shifts from solving the problem to building a team and a system that can solve problems repeatedly. Knowledge has to leave people’s heads, deployments become repeatable, ownership becomes explicit, the architecture evolves deliberately, and technical debt is managed on purpose.',
      },
      {
        q: 'How should startups think about technical debt?',
        a: 'As an investment decision. Some technical debt is a rational trade made with limited time, money, people or information, and some is poor engineering. Ask what each piece costs, what risk it creates, whether it slows development or affects reliability or security, and what fixing it now would displace.',
      },
      {
        q: 'How does a technical founder become an engineering leader?',
        a: 'By shifting from solving problems personally to enabling others to solve them: sharing the problem, the context, the constraints and why it matters, handing over real ownership, and making sure the organization can make good decisions without the founder becoming the bottleneck.',
      },
      {
        q: 'What did Ka Lun Chan build as a co-founder and CTO?',
        a: 'Ka Lun Chan (KC) co-founded a global communications company in 2007 and served as its CTO. He and the team built the servers, network and software from scratch, including the voice network and the multi-tier web and mobile application, and were bringing in revenue in less than four months. The platform served underserved and immigrant communities, grew past 400,000 users across South America, Asia and Africa, handled millions of dollars in transactions, and was acquired in 2013.',
      },
    ],
  },
  {
    slug: 'what-sprint-carryover-is-telling-you',
    no: '655',
    title: 'What Sprint Carryover Is Actually Telling an Engineering Team',
    seoTitle: 'What Is Sprint Carryover Telling Your Team? — Ka Lun Chan',
    description:
      'Sprint carryover isn’t a velocity problem, it’s a signal. How I read it by cause: estimation, scope changes, blockers, support load and shifting priorities.',
    dek:
      'Carryover is a symptom, not a diagnosis. The same number can mean bad estimates, hidden dependencies, an unreliable system or a leadership team that keeps changing its mind, and each one needs a different fix.',
    summary:
      'The six causes behind most sprint carryover, what each one is telling you, how to record the reason instead of just the number, and the common fixes that make the number look better without improving delivery.',
    topics: ['Delivery', 'Leadership', 'Engineering judgment'],
    related: [
      { to: '/writing/when-everything-is-a-priority/', label: 'When everything is a priority, nothing is' },
      { to: '/leadership/#risk', label: 'How I reduce delivery risk early' },
      { to: '/writing/should-it-be-a-microservice/', label: 'When team boundaries are in the wrong place: deciding on microservices' },
    ],
    minutes: 9,
    published: '2026-10-03',
    modified: '2026-10-03',
    keywords: [
      'sprint carryover',
      'sprint spillover',
      'what causes sprint carryover',
      'is sprint carryover bad',
      'how to reduce sprint carryover',
      'unfinished sprint work',
      'engineering delivery predictability',
      'agile delivery metrics',
    ],
    faq: [
      {
        q: 'What is sprint carryover?',
        a: 'Sprint carryover, also called spillover, is work a team committed to in a sprint that isn’t finished when the sprint ends, so it moves into the next sprint. It shows that the plan and the result didn’t match; the reason behind it shows what to fix.',
      },
      {
        q: 'Is sprint carryover bad?',
        a: 'Not by itself. Some carryover is normal when work involves real uncertainty. It becomes a problem when it’s persistent, when the same items carry over sprint after sprint, or when nobody can explain why it’s happening.',
      },
      {
        q: 'What causes sprint carryover?',
        a: 'Most carryover comes from six causes: underestimated work, requirements that changed mid-sprint, blockers from other teams, production support consuming capacity, unexpected technical complexity, and priorities that changed halfway through the sprint.',
      },
      {
        q: 'How do you reduce sprint carryover?',
        a: 'Find the cause first. Record one reason for every carried-over item, look for the pattern across several sprints, fix the biggest cause, and plan around the capacity the team actually has after bugs, incidents and escalations.',
      },
      {
        q: 'Should sprint carryover be used as a performance metric?',
        a: 'No. Carryover reflects planning, dependencies, interruptions and leadership decisions as much as effort. Used to judge engineers or compare teams, it pushes people to commit to less and pad estimates instead of improving delivery.',
      },
    ],
  },
  {
    slug: 'when-everything-is-a-priority',
    no: '654',
    title: 'When Everything Is a Priority, Nothing Is: Leading Engineering Through Constant Change',
    seoTitle: 'How Should Engineering Handle Changing Priorities? — Ka Lun Chan',
    description:
      'Changing priorities is normal. Pretending it’s free isn’t. How I make the cost of a priority change visible: lost context, work in progress and tradeoffs.',
    dek:
      'Priorities change, and a good engineering organization needs to respond. The real problem is when an organization pretends that changing priorities has no cost.',
    summary:
      'What a priority change really costs a team, why constant change leads to more half-finished work, how to make the tradeoff explicit, and the five things I make clear every time priorities shift.',
    topics: ['Leadership', 'Delivery', 'Engineering judgment'],
    related: [
      { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is actually telling a team' },
      { to: '/leadership/#cross-functional', label: 'How I work across product, QA and leadership' },
      { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
    ],
    minutes: 10,
    published: '2026-10-03',
    modified: '2026-10-03',
    keywords: [
      'changing priorities engineering team',
      'constantly changing priorities',
      'cost of context switching',
      'work in progress limits',
      'stop starting start finishing',
      'urgent vs important',
      'unplanned work capacity planning',
      'sprint carryover',
      'engineering leadership',
    ],
    faq: [
      {
        q: 'How should engineering teams handle changing priorities?',
        a: 'Make the cost of the change visible. Explain why the priority changed, name the single new priority, decide what stops or slips, decide what happens to work in progress, and update the dates or commitments that no longer hold.',
      },
      {
        q: 'What does changing priorities cost a software team?',
        a: 'Mostly lost context. Engineers moved off a feature have to rebuild their understanding when they come back, and frequent changes leave several initiatives partially finished. None of that shows up in Jira, but it slows delivery across the whole team.',
      },
      {
        q: 'Why does limiting work in progress improve delivery?',
        a: 'Only finished work reaches customers, earns revenue or produces feedback. With fewer things in flight, the team switches context less and finishes sooner, and a priority change leaves less half-done work behind.',
      },
      {
        q: 'How much capacity should a team leave for unplanned work?',
        a: 'Base it on the team’s own history rather than a standard number. If a team has historically spent 20% of its capacity on bugs, incidents and escalations, planning every sprint at 100% feature capacity is unrealistic.',
      },
      {
        q: 'What is the difference between agility and constantly changing priorities?',
        a: 'An agile team keeps a stable goal and changes how it gets there as it learns. Constantly changing priorities means the goal itself changes every few days, which keeps a team busy without letting it finish anything.',
      },
    ],
  },
  {
    slug: 'should-it-be-a-microservice',
    no: '653',
    title: 'How I Decide Whether a Microservice Should Actually Be a Microservice',
    seoTitle: 'When Should Something Be a Microservice? — Ka Lun Chan',
    description:
      'How I decide if a component should be a microservice: domain boundaries, ownership, data, scaling and failure isolation, and when a modular monolith wins.',
    dek:
      'A microservice should solve an organizational, scaling, deployment, reliability or domain-boundary problem. It shouldn’t exist just because microservices sound like modern architecture.',
    summary:
      'The questions I ask before splitting out a service, what happens to the data, the distributed monolith trap, when a modular monolith wins, and what it really costs to own a service for five years.',
    topics: ['Architecture', 'Engineering judgment', 'Leadership'],
    related: [
      { to: '/work/event-driven-platform/', label: 'Case study: event-driven microservices with Kafka' },
      { to: '/work/three-continent-platform/', label: 'Case study: one data center to three continents' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why judgment matters more than memorizing tools' },
    ],
    minutes: 16,
    published: '2026-10-03',
    modified: '2026-10-03',
    keywords: [
      'when to use microservices',
      'when to split a monolith',
      'are microservices worth it',
      'microservices vs monolith',
      'modular monolith',
      'distributed monolith',
      'microservice architecture decision',
      'service boundaries',
    ],
    faq: [
      {
        q: 'When should I use microservices?',
        a: 'Use microservices when a separate service makes a specific problem meaningfully easier: independent team ownership, very different scaling needs, real failure isolation, or a security or compliance boundary. If you can’t name the problem a split solves, keep the code in your existing application.',
      },
      {
        q: 'When should I split a monolith?',
        a: 'Split a monolith when one part of it already behaves like a separate system: it has its own domain and data, changes on its own schedule, needs its own team or scaling, or sits behind a compliance boundary. Extract that part behind a stable interface, one piece at a time, rather than rewriting everything.',
      },
      {
        q: 'Are microservices worth the complexity?',
        a: 'Only when they solve a problem you actually have. Every service adds pipelines, infrastructure, monitoring, on-call, API versioning and data consistency work for as long as it exists. If independent ownership, scaling or isolation aren’t in play, that complexity is pure cost.',
      },
      {
        q: 'What is a distributed monolith?',
        a: 'A distributed monolith is a set of services that still have to change, deploy or fail together, often because they share a database or depend on chains of synchronous calls. It carries the operational cost of microservices without the independence that justifies them.',
      },
      {
        q: 'What is a modular monolith?',
        a: 'A modular monolith is a single deployable application divided into modules with strict boundaries. Each module owns its domain and data and exposes a small interface to the others. It keeps deployment simple and makes it much easier to extract a service later.',
      },
    ],
  },
  {
    slug: 'berkeley-omnium-new-website-next-generation',
    no: '652',
    title: '2027 Berkeley Omnium: A New Website and Building the Next Generation of Cyclists',
    seoTitle: '2027 Berkeley Omnium: New Website and Sponsors — Ka Lun Chan',
    description:
      'Why I built the new berkeleyomnium.com, what bike racing teaches young riders, and how sponsors can support the 2027 Berkeley Omnium and youth cycling.',
    dek:
      'I spend most of my time building software and leading engineering teams. One of the projects I care about most happens away from a computer.',
    summary:
      'The new berkeleyomnium.com, what bike racing teaches young riders, why local racing takes a whole community, and how to sponsor the 2027 Berkeley Omnium.',
    topics: ['Community', 'Cycling', 'Leadership'],
    related: [
      { to: '/community/', label: 'Why I help organize Berkeley Omnium' },
      { to: '/projects/berkeley-omnium/', label: 'How the new Berkeley Omnium website was built' },
      { to: '/mentorship/', label: 'Mentoring engineers and junior riders' },
    ],
    minutes: 6,
    image: { path: '/images/projects/omnium-og.jpg', width: 1200, height: 630, alt: 'The new Berkeley Omnium website: Where champions race, over video of a pack of cyclists on a hillside road' },
    published: '2026-09-29',
    modified: '2026-09-29',
    keywords: [
      '2027 Berkeley Omnium',
      'Berkeley Omnium sponsorship',
      'Berkeley Hills Road Race',
      'Berkeley Streets Criterium',
      'junior cycling Bay Area',
      'sponsor youth cycling',
      'grassroots bike racing',
    ],
    faq: [
      {
        q: 'What is the Berkeley Omnium?',
        a: 'The Berkeley Omnium is a Northern California cycling weekend that brings together the Berkeley Hills Road Race and the Berkeley Streets Criterium, organized by the Berkeley Bicycle Club. Event proceeds support six East Bay NICA teams.',
      },
      {
        q: 'How can a company sponsor the 2027 Berkeley Omnium?',
        a: 'Sponsorship opportunities are listed at berkeleyomnium.com/sponsor. Sponsors can support the Berkeley Hills Road Race, the Berkeley Streets Criterium, junior and kids racing, women’s racing, collegiate racing, prizes, community activities or the overall event.',
      },
      {
        q: 'Who does the Berkeley Omnium support?',
        a: 'All event proceeds support six East Bay NICA high school teams. The event also works with the KaiVelo Foundation, a 501(c)(3) nonprofit partner focused on youth and grassroots cycling.',
      },
      {
        q: 'Can I share old photos or stories from Berkeley races?',
        a: 'Yes. If you raced the Berkeley Hills Road Race or Berkeley Streets Criterium and have photos, videos, stories or history, Ka Lun Chan would like to hear from you for the new berkeleyomnium.com.',
      },
    ],
  },
  {
    slug: 'you-dont-need-to-remember-everything',
    no: '651',
    title: 'You Don’t Need to Remember Everything to Be a Good Software Engineer',
    seoTitle: 'Do Software Engineers Need to Remember Everything? — Ka Lun Chan',
    description:
      'After two decades in software, I still look up Git commands, SQL syntax and Kafka settings. Why understanding systems beats memorizing syntax, especially with AI.',
    dek:
      'After more than two decades in software, I still look things up. That isn’t something I’m embarrassed about anymore. There is simply too much to know, and the amount you need to understand only grows as your career goes on.',
    summary:
      'Why I still look things up after two decades in software, the difference between memorizing syntax and understanding systems, and what that means now that AI can retrieve almost anything.',
    topics: ['Learning', 'Engineering judgment', 'AI'],
    related: [
      { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether a microservice should actually be a microservice' },
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
      { to: '/leadership/', label: 'How I lead engineering teams' },
    ],
    minutes: 11,
    published: '2026-09-28',
    modified: '2026-09-28',
    keywords: [
      'software engineer learning',
      'how software engineers keep learning',
      'do programmers need to remember everything',
      'experienced developers still Google things',
      'what senior software engineers need to know',
      'AI and software engineering skills',
    ],
    faq: [
      {
        q: 'Do experienced developers still Google things?',
        a: 'Yes, all the time. Experienced developers look up syntax, flags and configuration constantly. The difference is that they know what to search for, and they can tell quickly whether the answer fits their system.',
      },
      {
        q: 'Is it bad if I can’t remember syntax?',
        a: 'No. Syntax is easy to retrieve and changes often. It’s more valuable to understand how the system works, so you know what to look for and can spot when something is wrong.',
      },
      {
        q: 'What should software engineers focus on learning?',
        a: 'Fundamentals that carry across tools: data and databases, networking, concurrency, failure handling, security basics and debugging. As you grow more senior, add architecture, delivery, communication and tradeoffs.',
      },
      {
        q: 'Does AI make fundamentals less important?',
        a: 'No. AI makes it faster to retrieve information and generate code, but you still need to ask the right questions, validate the output, catch wrong assumptions and decide whether a solution fits your system. Understanding becomes more valuable, not less.',
      },
    ],
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

// Topic filters on /writing/, in display order. A post can carry several;
// topics with no posts yet stay hidden.
const topicOrder = ['Cycling', 'Building', 'Learning', 'Leadership', 'Architecture'];
export const topics = topicOrder.filter((t) => posts.some((p) => p.topics.includes(t)));
