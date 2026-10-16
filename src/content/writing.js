// Writing: metadata for each post. Bodies live in src/content/posts/.
// Dates feed JSON-LD and article:* meta only; the audit keeps years out of visible text.
import { cycling } from './community';
import { draftMetadata as hermesLearningDraft } from './posts/learning-hermes-building-ai-automation-around-the-clock';
import { metadata as generalistMeta } from './posts/generalist-advantage-in-the-ai-era';
import { metadata as aiCodeMeta } from './posts/recognizing-ai-generated-code';
import { metadata as aiCurveMeta } from './posts/ai-learning-curve-future-of-work';
import { metadata as codeReviewMeta } from './posts/code-review-in-the-ai-era';
import { metadata as vibeAgenticMeta } from './posts/vibe-coding-vs-agentic-engineering';
import { metadata as loopMeta } from './posts/loop-engineering-feedback-loops';

export const posts = [
  { ...loopMeta, no: '707', published: '2026-10-16', modified: '2026-10-16' },
  {
  slug: 'the-architecture-you-dont-build',
  title: 'The Architecture You Don’t Build Is Sometimes Your Best Decision',
  shortTitle: 'The architecture you don’t build',
  seoTitle: 'The Architecture You Don’t Build: Engineering Judgment',
  description: 'Every service creates work beyond the code. An engineering leader on choosing simpler architecture, counting operating costs, and knowing when complexity is justified.',
  teaser: 'A reporting request can become a new platform before anyone asks how fresh the data needs to be. How I decide which complexity is worth owning.',
  dek: 'After more than twenty years building and operating software, I’m much more interested in whether a system needs to exist than whether we know how to build it.',
  summary: 'Starting with the business requirement; a hypothetical reporting request; the operating costs of AWS infrastructure, databases, APIs and Kafka; modular monoliths and team capacity; preserving useful boundaries; and recording when a deferred architecture decision should be revisited.',
  topics: ['Architecture', 'Engineering judgment', 'Leadership'],
  keywords: ['software architecture', 'engineering leadership', 'technical debt', 'system design', 'overengineering', 'operational complexity', 'modular monolith'],
  minutes: 8,
  related: [
    { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
    { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'Event-driven architecture with Kafka: the tradeoffs' },
    { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'What different systems taught me about architecture' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
  ],
  no: '706', published: '2026-10-16', modified: '2026-10-16',
},
  { ...vibeAgenticMeta, no: '705', published: '2026-10-15', modified: '2026-10-15' },
  { ...codeReviewMeta, no: '704', published: '2026-10-15', modified: '2026-10-15' },
  { ...aiCurveMeta, no: '703', published: '2026-10-14', modified: '2026-10-14' },
  { ...aiCodeMeta, no: '702', published: '2026-10-13', modified: '2026-10-13' },
  { ...generalistMeta, no: '701', published: '2026-10-13', modified: '2026-10-13' },
  {
    slug: 'hidden-cost-of-ai-coding',
    no: '700',
    title: 'AI Coding Can Cost More Than a Human Engineer — Especially When Used Incorrectly',
    shortTitle: 'The hidden cost of AI coding',
    seoTitle: 'The Hidden Cost of AI Coding: Why Experience Still Matters',
    description:
      'AI coding tools can cut development costs or raise them. An engineering leader on token usage, endless AI loops, and the real cost per accepted change.',
    teaser:
      'Why the same AI agent makes one engineer faster and another more expensive: junior loops, work outside your expertise, endless reviews, real token prices, and what leaders can measure.',
    dek:
      'AI can make software much cheaper to build. Used badly, it can cost more than doing the work by hand. The difference is the experience and judgment of the person directing it.',
    summary:
      'Why AI amplifies both good and bad decisions; a junior developer’s authentication loop and how mentorship, smaller tasks and acceptance criteria fix it; a developer using AI for marketing without the expertise to judge it; why more AI reviews do not mean better software; subscription versus API pricing with current list prices; a hypothetical cost per accepted change for three ways of working; and practical guidance for engineering leaders.',
    topics: ['AI', 'Leadership', 'Engineering judgment'],
    related: [
      { to: '/writing/building-software-before-and-after-ai/', label: 'How I build software now that AI is in the loop' },
      { to: '/writing/ai-agents-reliable-in-production/', label: 'What it takes to make AI agents reliable in production' },
      { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring' },
      { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
      { to: '/leadership/', label: 'How I run engineering' },
    ],
    minutes: 12,
    image: { path: '/images/writing/hidden-cost-of-ai-coding-og.jpg', width: 1200, height: 630, alt: 'AI coding can cost more than a human engineer. Used badly: prompt, generate, review, rewrite, repeat, and the bill and the hours keep growing. Used well: define, plan, generate, verify, deliver, and the judgment is still human.' },
    published: '2026-10-12',
    modified: '2026-10-12',
    keywords: [
      'AI coding costs',
      'AI token usage',
      'AI coding productivity',
      'AI coding vs human developers',
      'AI engineering costs',
      'AI agent cost optimization',
      'cost per accepted change',
      'Claude Code cost per developer',
      'junior developers using AI',
      'AI coding subscription vs API pricing',
    ],
    about: [
      { '@type': 'Thing', name: 'AI-assisted software development' },
      { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/' },
      { '@type': 'Organization', name: 'Anthropic', sameAs: 'https://en.wikipedia.org/wiki/Anthropic' },
      { '@type': 'Organization', name: 'OpenAI', sameAs: 'https://en.wikipedia.org/wiki/OpenAI' },
      { '@type': 'Thing', name: 'Mentorship', sameAs: 'https://en.wikipedia.org/wiki/Mentorship' },
    ],
    faq: [
      {
        q: 'Is AI coding cheaper than a human developer?',
        a: 'Often, but not always. An experienced engineer using AI can finish work in a fraction of the time. A developer who can’t judge the output can spend days in loops of prompts, reviews and rewrites, and that time plus the senior review it needs can cost more than an experienced engineer working without AI.',
      },
      {
        q: 'How much does AI coding cost per developer?',
        a: 'Anthropic reports that across enterprise deployments, Claude Code averages around $13 per developer per active day and $150 to $250 per developer per month, with 90% of users under $30 per active day. Subscription plans charge a flat monthly price with usage limits instead.',
      },
      {
        q: 'Why do AI coding agents use so many tokens?',
        a: 'An agent sends the conversation, including files and tool results, with every request. Long sessions, repeated explanations and reviews, rewrites, and returning after the prompt cache has expired all multiply the tokens processed for the same piece of work.',
      },
      {
        q: 'How can engineering leaders reduce AI coding costs?',
        a: 'Keep tasks small, write acceptance criteria before prompting, set retry limits, match the model to the task, clear sessions between unrelated tasks, monitor usage, pair junior developers with mentors, and measure cost per accepted change instead of lines of code or prompt counts.',
      },
    ],
  },
  {
    slug: 'why-i-enjoy-mentoring',
    no: '699',
    title: 'Why I Enjoy Mentoring: The Satisfaction of Helping Others Grow',
    shortTitle: 'Why I enjoy mentoring',
    seoTitle: 'Why I Enjoy Mentoring Engineers and Junior Cyclists — Ka Lun Chan',
    description:
      'After 20+ years in software engineering and years mentoring junior cyclists, I’ve learned that helping others grow is one of the most rewarding parts of leadership.',
    teaser:
      'What mentoring junior engineers and junior riders has in common, why the goal is independence, why some lessons can only be experienced, and why it is as rewarding as building something myself.',
    dek:
      'I still love building software. But somewhere along the way, I discovered that helping people grow can be just as rewarding as building something myself, at work and on a bike.',
    summary:
      'How the moments I remember best became other people’s; why mentoring aims at judgment and independence; the parallels between junior engineers and junior riders in the Berkeley Bicycle Club; why you cannot hand someone twenty years and should make mistakes survivable instead; what mentoring teaches the mentor; why a leader does not need to be the smartest person in the room; and the part that lasts.',
    topics: ['Leadership', 'Community', 'Cycling'],
    related: [
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
      { to: '/writing/what-cycling-taught-me-about-engineering-leadership/', label: 'What cycling taught me about engineering leadership' },
      { to: '/leadership/', label: 'How I run engineering' },
      { to: '/experience/', label: 'Experience, role by role' },
      { to: '/community/', label: 'Berkeley Omnium and the riders it supports' },
      { to: '/writing/hidden-cost-of-ai-coding/', label: 'Why junior developers using AI still need mentors' },
    ],
    minutes: 8,
    published: '2026-10-11',
    modified: '2026-10-11',
    keywords: [
      'mentoring software engineers',
      'why I enjoy mentoring',
      'mentoring junior engineers',
      'mentoring junior cyclists',
      'engineering leadership mentoring',
      'growing engineers into leaders',
      'leadership is not being the smartest person in the room',
      'learning from mistakes mentoring',
    ],
    about: [
      { '@type': 'Thing', name: 'Mentorship', sameAs: 'https://en.wikipedia.org/wiki/Mentorship' },
      { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
    ],
    mentions: [
      { '@type': 'Organization', name: 'Berkeley Bicycle Club', url: 'https://berkeleybikeclub.org/' },
      { '@type': 'Event', name: 'Berkeley Omnium', url: 'https://berkeleyomnium.com/' },
      { '@type': 'Organization', name: 'National Interscholastic Cycling Association', sameAs: 'https://en.wikipedia.org/wiki/National_Interscholastic_Cycling_Association' },
    ],
    faq: [
      {
        q: 'What is the goal of mentoring an engineer?',
        a: 'Independence. Knowledge is easy to share through documentation; judgment only develops by making decisions. Mentoring hands decisions over a little at a time until the engineer no longer needs you, and ideally starts teaching someone else.',
      },
      {
        q: 'How is mentoring junior cyclists like mentoring junior engineers?',
        a: 'Both build skills through practice rather than instruction, need encouragement to try something hard, learn most from the difficult days, and develop at different paces. In both, progress over last month matters more than a single result.',
      },
      {
        q: 'Should a mentor try to prevent every mistake?',
        a: 'No. Some lessons can only be experienced. The mentor’s job is to make mistakes survivable, through staging, review and small changes, and to make the lesson clear in a blameless conversation afterwards, while knowing when to guide, when to demonstrate and when to step aside.',
      },
    ],
  },
  {
    slug: 'fast-paced-vs-changing-priorities',
    no: '698',
    title: 'Fast-Paced Doesn’t Mean Constantly Changing Priorities',
    shortTitle: 'Fast-paced doesn’t mean constantly changing priorities',
    seoTitle: 'Fast-Paced vs Constantly Changing Priorities — Ka Lun Chan',
    description:
      'Moving fast and changing direction constantly are different. What Agile does and does not absorb, when Scrum stops fitting, and how leaders make tradeoffs visible.',
    teaser:
      'Fast teams decide quickly toward a stable goal. Churning teams start everything and finish little. When to drop Scrum for Kanban, why WIP limits work, and the question every new priority should face.',
    dek:
      'I enjoy fast-paced teams. After more than twenty years as an engineer, founder, CTO and engineering leader, I have learned that moving quickly and changing direction constantly are two very different things.',
    summary:
      'The difference between fast and churning; what Agile’s response to change does and does not cover; when fixed sprint commitments stop fitting and how to match the process to the real rate of change; the hidden costs of context switching; real emergencies versus loud requests; making each new priority a visible tradeoff; finishing before starting with WIP limits and small changes; process that helps engineers; and balancing business flexibility with engineering discipline.',
    topics: ['Leadership', 'Delivery'],
    related: [
      { to: '/writing/when-everything-is-a-priority/', label: 'When everything is a priority: handling a change once it arrives' },
      { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is telling you' },
      { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
      { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
      { to: '/leadership/', label: 'How I run engineering' },
    ],
    minutes: 9,
    published: '2026-10-11',
    modified: '2026-10-11',
    keywords: [
      'constantly changing priorities',
      'fast-paced engineering team',
      'context switching engineering productivity',
      'Scrum vs Kanban changing priorities',
      'work in progress limit',
      'engineering leadership tradeoffs',
      'Agile changing requirements cost',
      'engineering capacity is finite',
      'managing business expectations engineering',
    ],
    about: [
      { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
      { '@type': 'Thing', name: 'Agile software development', sameAs: 'https://en.wikipedia.org/wiki/Agile_software_development' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Scrum (software development)', sameAs: 'https://en.wikipedia.org/wiki/Scrum_(software_development)' },
      { '@type': 'Thing', name: 'Kanban (development)', sameAs: 'https://en.wikipedia.org/wiki/Kanban_(development)' },
      { '@type': 'Thing', name: 'Context switch', sameAs: 'https://en.wikipedia.org/wiki/Human_multitasking' },
      { '@type': 'Thing', name: 'Continuous delivery', sameAs: 'https://en.wikipedia.org/wiki/Continuous_delivery' },
    ],
    faq: [
      {
        q: 'What is the difference between a fast-paced team and constantly changing priorities?',
        a: 'A fast-paced team decides quickly and ships often toward a goal that holds long enough to reach. Constantly changing priorities replace the goal every few days, so the team keeps starting and rarely finishes. Speed comes from short feedback loops and clear direction, not from changing direction often.',
      },
      {
        q: 'Isn’t Agile supposed to handle changing requirements?',
        a: 'Agile lowers the cost of changing direction by keeping work small and feedback fast, but the cost is not zero. Half-built stories, branches and designs still have to be finished, parked or thrown away. Agile lets you make that choice cheaply; it does not remove it.',
      },
      {
        q: 'When should a team use Kanban instead of Scrum?',
        a: 'When priorities change more often than the sprint length, so sprint commitments keep breaking. Kanban with a work-in-progress limit lets the team pull the next most important item when something finishes. If direction changes daily, no process fixes it; the instability is upstream and needs a leadership conversation.',
      },
      {
        q: 'How should an engineering leader respond to a new top priority?',
        a: 'By asking, without defensiveness, “If this becomes our highest priority, what should we stop working on?” It treats the request as legitimate and puts the cost in front of the person who owns the business decision, instead of silently adding work the team cannot finish.',
      },
    ],
  },
  {
    slug: 'forward-engineering-isnt-new',
    no: '697',
    title: 'Forward Engineering Isn’t New. So What’s Different Today?',
    shortTitle: 'Forward engineering isn’t new',
    seoTitle: 'Forward Engineering vs Reverse Engineering, Explained — Ka Lun Chan',
    description:
      'Forward engineering has always been the job: need to requirement to design to code. How it relates to Agile and reverse engineering, and what faster code changes.',
    teaser:
      'Need, requirement, design, code, running system: the chain is decades old. How it fits Agile, why modernization starts with reverse engineering, and why faster code moves the bottleneck.',
    dek:
      'Forward engineering is having a moment, but it is the oldest direction in software. After twenty years of building, migrating and leading teams, what I have learned is that the risk lives in the handoffs, not the typing.',
    summary:
      'What forward engineering is and where meaning gets lost between steps; why waterfall, Agile and iterative development are all forward engineering at different slice sizes; reverse engineering as the first half of every modernization, with a public-service migration, a WordPress-to-Rails re-platform and a data center move; what faster implementation does and does not change; why speeding up code moves the bottleneck to review, testing, security and maintenance; and what that asks of engineering leaders.',
    topics: ['Architecture', 'Engineering judgment', 'Leadership'],
    related: [
      { to: '/work/public-service-modernization/', label: 'Case study: modernizing a public service without a rewrite' },
      { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
      { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Architecture lessons from very different systems' },
      { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is telling you' },
      { to: '/leadership/', label: 'How I run engineering' },
    ],
    minutes: 9,
    published: '2026-10-11',
    modified: '2026-10-11',
    keywords: [
      'forward engineering',
      'forward engineering vs reverse engineering',
      'what is forward engineering',
      'reverse engineering legacy systems',
      'legacy modernization',
      'forward engineering agile',
      'specification-driven development',
      'software engineering fundamentals',
      'engineering leadership requirements architecture',
    ],
    about: [
      { '@type': 'Thing', name: 'Forward engineering', sameAs: 'https://en.wikipedia.org/wiki/Forward_engineering' },
      { '@type': 'Thing', name: 'Reverse engineering', sameAs: 'https://en.wikipedia.org/wiki/Reverse_engineering' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Agile software development', sameAs: 'https://en.wikipedia.org/wiki/Agile_software_development' },
      { '@type': 'Thing', name: 'Waterfall model', sameAs: 'https://en.wikipedia.org/wiki/Waterfall_model' },
      { '@type': 'Thing', name: 'Legacy system', sameAs: 'https://en.wikipedia.org/wiki/Legacy_system' },
      { '@type': 'Thing', name: 'Strangler fig pattern', sameAs: 'https://en.wikipedia.org/wiki/Strangler_fig_pattern' },
    ],
    faq: [
      {
        q: 'What is forward engineering?',
        a: 'The ordinary direction of software work: from a business need to requirements, to an architecture and design, to code, to a running system, each step making the previous one more concrete. Reverse engineering runs the other way, from an existing system back to its design and rules.',
      },
      {
        q: 'Is forward engineering the same as waterfall?',
        a: 'No. Waterfall is one way to do forward engineering, all at once. Agile and iterative development are forward engineering in small slices: a story is a requirement, planning is design, the pull request is implementation and the release is the running system, repeated every week or two.',
      },
      {
        q: 'How do forward and reverse engineering work together in a modernization?',
        a: 'A legacy system is requirements nobody wrote down, expressed in code. You reverse-engineer it first to recover what it actually does, then forward-engineer replacements, often behind an API facade one journey at a time so the service stays up.',
      },
      {
        q: 'Does generating code faster make teams more productive?',
        a: 'Only if the downstream steps keep up. Faster code moves the bottleneck to review, testing, security and maintenance. Smaller changes, tests written from requirements, security checks in the pipeline and a named owner for each component are what turn faster code into faster delivery.',
      },
    ],
  },
  {
    slug: 'ai-agents-reliable-in-production',
    no: '696',
    title: 'AI Agents Are Easy to Demonstrate. Making Them Reliable in Production Is Hard.',
    shortTitle: 'Making AI agents reliable in production',
    seoTitle: 'Making AI Agents Reliable in Production — Ka Lun Chan',
    description:
      'An AI agent that works once is easy. One that runs daily, handles failures, controls cost, protects data and earns trust is distributed systems engineering.',
    teaser:
      'Retries, idempotency, missed schedules, state, observability, model cost and least privilege: what an agent needs before it runs unattended, and eight questions I would ask a team.',
    dek:
      'Getting an agent to work in an afternoon is delightful. Getting it to run every morning without me, safely and within budget, is the same engineering I have done for twenty years, with a model in the middle.',
    summary:
      'Part three of Still Building After 20 Years: the gap between an agent demo and a production agent; failures, retries, idempotency, missed runs and state as distributed-systems problems; cost as an architectural choice, including when FedPath deliberately uses no AI; scoping credentials and tools; and a readiness checklist for engineering leaders.',
    topics: ['AI', 'Architecture', 'Leadership'],
    related: [
      { to: '/writing/from-cisco-routers-to-ai-agents/', label: 'Part 1: From Cisco routers to AI agents' },
      { to: '/writing/why-i-still-write-code/', label: 'Part 2: Why I still write code after 20 years' },
      { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'Scheduling AI work: Hermes, ChatGPT and Claude compared' },
      { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open-source VoIP taught me about distributed systems' },
      { to: '/projects/fedpath/', label: 'FedPath: transparent scoring, no AI on solicitations' },
      { to: '/writing/hidden-cost-of-ai-coding/', label: 'What AI coding really costs, and who it costs most' },
    ],
    minutes: 9,
    published: '2026-10-11',
    modified: '2026-10-11',
    keywords: [
      'AI agents in production',
      'AI agent reliability',
      'production readiness AI agent',
      'LLM retries idempotency',
      'AI agent cost management',
      'AI agent security least privilege',
      'multi-provider LLM architecture',
      'engineering leadership AI agents',
    ],
    about: [
      { '@type': 'Thing', name: 'Intelligent agent', sameAs: 'https://en.wikipedia.org/wiki/Intelligent_agent' },
      { '@type': 'Thing', name: 'Distributed computing', sameAs: 'https://en.wikipedia.org/wiki/Distributed_computing' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Idempotence', sameAs: 'https://en.wikipedia.org/wiki/Idempotence' },
      { '@type': 'Thing', name: 'Exponential backoff', sameAs: 'https://en.wikipedia.org/wiki/Exponential_backoff' },
      { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
      { '@type': 'SoftwareApplication', name: 'OmniRoute', url: 'https://github.com/diegosouzapw/OmniRoute' },
      { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/docs/en/overview' },
    ],
    faq: [
      {
        q: 'What is the difference between an AI agent demo and a production agent?',
        a: 'A demo shows a model can do the task once with a person watching. A production agent does it every day without one: it survives failed calls and missed schedules, never repeats an irreversible action, stays within a budget, touches only what it is allowed to, and produces results someone can check.',
      },
      {
        q: 'How do you make an AI agent reliable?',
        a: 'Treat it as a distributed system: timeouts and bounded retries with exponential backoff on every model and tool call, idempotent side effects keyed so a repeat changes nothing, detection of missed runs, durable state between runs, and observability of what ran, what it cost and whether the result passed a check.',
      },
      {
        q: 'When should you not use AI in an agent?',
        a: 'For anything that does not need judgment. Fetching, filtering, de-duplicating and scoring by transparent rules are better as deterministic code you can test. FedPath, for example, scores contracts with visible rules and keeps solicitation documents off outside AI services.',
      },
    ],
  },
  {
    slug: 'why-i-still-write-code',
    no: '695',
    title: 'Why I Still Write Code After More Than 20 Years in Software Engineering',
    shortTitle: 'Why I still write code after 20 years',
    seoTitle: 'Why I Still Write Code as an Engineering Leader — Ka Lun Chan',
    description:
      'After CTO and VP roles, I still write code. Not to prove anything, but because staying technical makes me a better judge of estimates, debt and tradeoffs.',
    teaser:
      'From doing almost everything at a startup to CTO roles, and why I still build FedPath, Useful Little Tools and the Omnium site without becoming my team’s bottleneck.',
    dek:
      'After CTO and VP roles, I still build software. Here is where the hours went when I moved into leadership, what staying technical buys a leader, and the line I try never to cross.',
    summary:
      'Part two of Still Building After 20 Years: learning the whole system by doing almost every job at a startup; how leadership moves your hours; what I build now and why on my own projects; how hands-on work sharpens estimates, debt, tradeoffs and cost; how not to become the bottleneck; and how AI coding tools changed the fun.',
    topics: ['Leadership', 'Learning', 'Founder story'],
    related: [
      { to: '/writing/from-cisco-routers-to-ai-agents/', label: 'Part 1: From Cisco routers to AI agents' },
      { to: '/writing/ai-agents-reliable-in-production/', label: 'Part 3: Making AI agents reliable in production' },
      { to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
      { to: '/leadership/', label: 'How I run engineering' },
    ],
    minutes: 8,
    published: '2026-10-11',
    modified: '2026-10-11',
    keywords: [
      'should engineering leaders code',
      'technical engineering leader',
      'CTO still writing code',
      'hands-on engineering manager',
      'engineering leader bottleneck',
      'staying technical as a manager',
      'AI coding tools engineering leadership',
    ],
    about: [
      { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'FedPath', url: 'https://gofedpath.com/' },
      { '@type': 'WebSite', name: 'Useful Little Tools', url: 'https://usefullittletools.app/' },
      { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/docs/en/overview' },
    ],
    faq: [
      {
        q: 'Should engineering leaders still write code?',
        a: 'Not as their main job, and not where the team has to wait on them. Writing code on side projects or prototypes keeps a leader close enough to judge estimates, technical debt, architecture tradeoffs, debugging and infrastructure cost, while the team owns the production codebase.',
      },
      {
        q: 'How do technical leaders avoid becoming a bottleneck?',
        a: 'By using their technical depth to ask better questions rather than to make every decision: no mandatory review of every pull request, no overriding estimates, no taking the keyboard. If the team cannot run without the leader, the leader has built a dependency rather than a team.',
      },
    ],
  },
  {
    slug: 'from-cisco-routers-to-ai-agents',
    no: '694',
    title: 'From Cisco Routers and Carrier Networks to Cloud Infrastructure and AI Agents',
    shortTitle: 'From Cisco routers to AI agents',
    seoTitle: 'From Carrier Networks to Cloud and AI Agents — Ka Lun Chan',
    description:
      'Cisco ACLs, a new SOC, VoIP routing, then cloud and AI agents: the infrastructure and security habits from a carrier network that still shape how I build.',
    teaser:
      'From router consoles and NetScreen firewalls to VoIP, cloud architecture and AI agents: how a network engineer carried path thinking, deny-by-default and capacity planning up the stack.',
    dek:
      'The tools changed from Cisco routers and physical servers to cloud regions and AI agents. The questions I ask about a system mostly did not, and most of them I learned at a console port.',
    summary:
      'Part one of Still Building After 20 Years: carrier network operations before the cloud; security as an operations job in a new SOC; VoIP where networking met the business; moving up the stack with the network still in my head; security as every layer’s job; why AI agents are a network problem too; and five habits that carried over.',
    topics: ['Architecture', 'Learning', 'Leadership'],
    related: [
      { to: '/writing/why-i-still-write-code/', label: 'Part 2: Why I still write code after 20 years' },
      { to: '/writing/ai-agents-reliable-in-production/', label: 'Part 3: Making AI agents reliable in production' },
      { to: '/writing/network-security-before-devsecops/', label: 'Network security long before DevSecOps' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
      { to: '/work/carrier-capacity/', label: 'Case study: capacity across 2,000+ collocations' },
    ],
    minutes: 8,
    published: '2026-10-11',
    modified: '2026-10-11',
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
  },
  ...(import.meta.env.DEV ? [{
    ...hermesLearningDraft,
    no: '694',
    shortTitle: 'Learning Hermes: automation around the clock',
    dek: 'I have Hermes on a Docker VPS. Now I want to learn how to turn a planned content research assistant into useful, dependable scheduled work.',
    summary: 'A content research assistant I am planning for Useful Little Tools: what code and AI each handle, what unattended work requires, and how I will test scheduling, failures, recovery and usage.',
  }] : []),
  {
    slug: 'scheduling-ai-work-hermes-chatgpt-claude',
    no: '693',
    title: 'Scheduling AI Work: What I Learned Comparing Hermes, ChatGPT and Claude',
    shortTitle: 'Scheduling AI work: Hermes, ChatGPT and Claude compared',
    seoTitle: 'Scheduling AI Work: Hermes vs ChatGPT vs Claude — Ka Lun Chan',
    description:
      'What changes when an AI task runs on a schedule, and how self-hosted Hermes, ChatGPT scheduled tasks, Claude Cowork tasks, Claude Code routines and cron compare on ownership, billing and limits.',
    teaser:
      'One job, five schedulers: who owns execution, context, credentials, logs and recovery; when a subscription covers the run and when an API key quietly pays; and why the chat you designed it in is not the system.',
    dek:
      'The moment an AI task runs on a timer instead of in a conversation, every assumption about working with an assistant stops holding. A content research assistant for Useful Little Tools is my test case, and five ways to schedule it are the comparison.',
    summary:
      'Why a scheduled run has to carry its own instructions and context; a weekly research assistant that reads the site, researches reader questions, de-duplicates, saves three ranked ideas and sends a brief; five options compared in one table; who owns execution, context, credentials, logs and recovery in each; subscription login versus API billing and where overage lands; which steps stay deterministic; why instructions and data must be durable files; and where to start.',
    topics: ['Learning', 'AI'],
    related: [
      { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Building my own AI job search agent with Hermes' },
      { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'Connecting the Hermes VPS to VS Code' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/#guardrails', label: 'Don’t hand AI the production keys' },
      { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Useful Little Tools: why I build my own tools' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'Every box has a bill' },
      { to: '/writing/ai-agents-reliable-in-production/', label: 'Making AI agents reliable in production' },
    ],
    minutes: 10,
    published: '2026-10-10',
    modified: '2026-10-10',
    keywords: [
      'scheduling AI tasks',
      'ChatGPT scheduled tasks limits',
      'Claude Cowork scheduled tasks',
      'Claude Code routines',
      'Claude Code cron headless',
      'Hermes Agent cron',
      'self-hosted AI agent scheduling',
      'AI subscription vs API billing',
      'AI automation ownership credentials logs',
      'content research assistant AI',
    ],
    about: [
      { '@type': 'Thing', name: 'Job scheduler', sameAs: 'https://en.wikipedia.org/wiki/Job_scheduler' },
      { '@type': 'Thing', name: 'AI agent automation' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
      { '@type': 'Thing', name: 'Scheduled tasks in ChatGPT', url: 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt' },
      { '@type': 'Thing', name: 'Schedule recurring tasks in Claude Cowork', url: 'https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork' },
      { '@type': 'Thing', name: 'Claude Code routines', url: 'https://code.claude.com/docs/en/routines' },
      { '@type': 'Thing', name: 'Claude Code scheduled tasks', url: 'https://code.claude.com/docs/en/scheduled-tasks' },
      { '@type': 'Thing', name: 'Cron', sameAs: 'https://en.wikipedia.org/wiki/Cron' },
    ],
    faq: [
      {
        q: 'What changes when an AI task runs on a schedule instead of in a chat?',
        a: 'Nobody is there to supply context, catch mistakes or decide the next step. The task has to carry self-contained instructions, read its data from files or a database, hold its credentials somewhere it can reach, fail in a way someone notices, and never take an action a person would have stopped. Scheduling turns an assistant into a system with an owner for execution, context, credentials, uptime, logs and recovery.',
      },
      {
        q: 'Does a ChatGPT or Claude subscription cover scheduled runs?',
        a: 'ChatGPT scheduled tasks are part of the plan within active-task caps (3 on Free and Go, 5 on Plus, 10 on Business and Edu, 15 on Pro and Enterprise). Claude Cowork tasks run under a paid plan. Claude Code routines draw down subscription usage, and once the limit is hit, runs continue on metered overage only if usage credits are on; otherwise they are rejected until the window resets. A headless Claude Code run bills the API whenever an API key or auth token is in its environment.',
      },
      {
        q: 'When is a script enough and when does the model add value?',
        a: 'Fetching articles, loading stored ideas, checking for duplicates and sending a message are deterministic and should be scripts you can test. The model earns its place where interpretation or judgment is needed: turning messy reader questions into candidate ideas, and ranking them with reasons for a person to review.',
      },
      {
        q: 'What is the difference between Hermes using Claude as a model and Hermes running Claude Code?',
        a: 'Using Claude as the model is an ordinary API call from Hermes’s own agent loop, billed to the configured key or login. Running Claude Code is a shell command the agent can execute like any other, which starts a separate coding agent with its own permissions and billing. The first is how a research assistant thinks; the second is for code.',
      },
    ],
  },
  {
    slug: 'talking-to-ai-in-a-terminal',
    no: '692',
    title: 'Talking to AI in a Terminal Reminds Me of Computing in the ’90s',
    shortTitle: 'Talking to AI in a terminal',
    seoTitle: 'Talking to AI in a Terminal Feels Like DOS Again — Ka Lun Chan',
    description:
      'Claude Code and Codex CLI put me back at a prompt, thirty years after DOS. What is the same, what changed, why the terminal never left, and why judgment matters more when execution is free.',
    teaser:
      'A prompt, typed words, text back, real effects on the machine. The shape is DOS and the Unix shells; the language is now mine. Why the terminal survived, and why reading the command still matters.',
    dek:
      'We spent two decades moving away from the command line, and I am back at a prompt, describing what I want in ordinary language to an AI assistant. The interface is familiar. The conversation is not.',
    summary:
      'Why terminal AI assistants feel like DOS and early Unix; how precise syntax gave way to interpreted intent while permissions and consequences stayed real; the lineage from Expect scripts to agents that type for you; an illustrative six-command fix done both ways; and the leadership lesson that faster execution makes clear intent and verification more valuable.',
    topics: ['Learning', 'AI'],
    related: [
      { to: '/writing/from-dos-to-ai-thirty-years-of-technology/', label: 'From DOS to AI: thirty years of technology' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
      { to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything' },
      { to: '/leadership/', label: 'How I run engineering' },
    ],
    minutes: 6,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'AI in the terminal',
      'Claude Code terminal',
      'Codex CLI',
      'command line nostalgia DOS',
      'natural language command line',
      'AI coding assistant terminal',
      'terminal vs GUI',
      'Expect scripts automation',
      'engineering leadership AI tools judgment',
    ],
    about: [
      { '@type': 'Thing', name: 'Command-line interface', sameAs: 'https://en.wikipedia.org/wiki/Command-line_interface' },
      { '@type': 'Thing', name: 'AI-assisted software development' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/docs/en/overview' },
      { '@type': 'SoftwareApplication', name: 'OpenAI Codex CLI', url: 'https://github.com/openai/codex' },
      { '@type': 'Thing', name: 'DOS', sameAs: 'https://en.wikipedia.org/wiki/DOS' },
      { '@type': 'Thing', name: 'Unix shell', sameAs: 'https://en.wikipedia.org/wiki/Unix_shell' },
      { '@type': 'Thing', name: 'Expect', sameAs: 'https://en.wikipedia.org/wiki/Expect' },
    ],
    faq: [
      {
        q: 'Why does using an AI assistant in a terminal feel like DOS?',
        a: 'Because the shape is the same: a prompt, typed instructions, text output, and real effects on the machine. DOS and the Unix shells needed exact syntax; terminal assistants like Claude Code and Codex CLI accept intent, propose the commands, and run them with your permissions once you approve.',
      },
      {
        q: 'Is the ChatGPT website a terminal tool?',
        a: 'No. ChatGPT is a web and desktop application. OpenAI’s terminal tool is Codex CLI, which, like Claude Code, runs inside your shell, reads and edits files, and executes commands you approve.',
      },
      {
        q: 'Do AI terminal assistants make the command line safe?',
        a: 'They make it approachable. The commands still run with your user’s permissions and consequences, so a deleted directory is still deleted. Reading what the assistant is about to run, and verifying the result afterwards, is still the engineer’s job.',
      },
    ],
  },
  {
    slug: 'omniroute-hermes-agent-docker',
    no: '691',
    title: 'What Is OmniRoute? Setting Up AI Model Routing with Hermes Agent on a Hostinger VPS',
    shortTitle: 'OmniRoute with Hermes Agent on a Hostinger VPS',
    seoTitle: 'OmniRoute + Hermes Agent: AI Model Routing in Docker — Ka Lun Chan',
    description:
      'What OmniRoute is, why you would put a model router in front of an AI agent, the Docker steps to connect it to Hermes Agent on a Hostinger VPS, and whether you need one at all.',
    teaser:
      'An open-source AI gateway with one OpenAI-compatible endpoint, many providers and fallback, wired to Hermes over a shared Docker network. Two architectures side by side, the request path, and the honest tradeoffs.',
    dek:
      'Third post in my self-hosted agent experiment: an AI model router between Hermes Agent and the providers it calls. What OmniRoute does, the Docker steps on a Hostinger VPS, how a request travels, and the leadership question underneath: do you need the extra box?',
    summary:
      'What OmniRoute is and what is verified versus version-dependent; the responsibilities of an agent runtime versus a model gateway; a switchable diagram of direct versus routed architectures; ten installation steps including the shared Docker network and why localhost does not cross containers; the eight-step request lifecycle; cost, performance and security tradeoffs; how the job-search agent would split routing between application and gateway; and when a router is earned complexity.',
    topics: ['Learning', 'AI', 'Architecture'],
    related: [
      { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'Part one: connecting the Hermes VPS to VS Code' },
      { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Part two: designing the job-search agent' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture' },
      { to: '/writing/api-architecture-lessons/', label: 'API architecture lessons from real systems' },
      { to: '/writing/network-security-before-devsecops/', label: 'Where the least-privilege habit comes from' },
    ],
    minutes: 13,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'what is OmniRoute',
      'OmniRoute tutorial',
      'Hermes Agent OmniRoute setup',
      'Hermes Agent Docker configuration',
      'self-hosted AI model router',
      'AI model gateway vs AI agent',
      'Hostinger Hermes Agent setup',
      'OpenAI-compatible endpoint Docker',
      'Docker network between containers localhost',
      'AI gateway fallback cost tracking',
    ],
    about: [
      { '@type': 'SoftwareApplication', name: 'OmniRoute', url: 'https://github.com/diegosouzapw/OmniRoute' },
      { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'OmniRoute on Docker Hub', url: 'https://hub.docker.com/r/diegosouzapw/omniroute' },
      { '@type': 'Thing', name: 'Hermes Agent model providers', url: 'https://hermes-agent.nousresearch.com/docs/integrations/providers' },
      { '@type': 'Thing', name: 'Docker', sameAs: 'https://en.wikipedia.org/wiki/Docker_(software)' },
      { '@type': 'Thing', name: 'API gateway', sameAs: 'https://en.wikipedia.org/wiki/API_management' },
    ],
    faq: [
      {
        q: 'What is OmniRoute?',
        a: 'OmniRoute is an open-source, MIT-licensed AI gateway you run yourself. It exposes one OpenAI-compatible endpoint on port 20128 and routes each request to a provider and model you have connected in its dashboard, with quota-aware fallback, retries, usage and cost tracking, and per-key spend limits. Provider keys are stored encrypted on its data volume.',
      },
      {
        q: 'How does Hermes Agent connect to OmniRoute?',
        a: 'As a custom OpenAI-compatible endpoint: in Hermes’s config.yaml set model.provider to custom, model.base_url to the OmniRoute address ending in /v1, and the gateway key through key_env so it lives in the .env file. When both run in Docker on one host, put them on a shared Docker network and use the container name as the host, because localhost inside a container means that container.',
      },
      {
        q: 'Do I need an AI model router for an agent?',
        a: 'Not if the agent calls one provider and will for the foreseeable future; the router then adds a container, a second key store and a failure domain without hiding anything that varies. It earns its place when you use several providers, want fallback when one fails, or need one ledger of usage and cost across jobs.',
      },
      {
        q: 'What is the difference between routing a model request and orchestrating an agent?',
        a: 'The router owns one step: given a chat-completion request, pick a provider and model and return a response, retrying on failure. The agent runtime owns the loop around it: what to ask, which tools to run on the answer, what to remember, when to stop and how to report. Most of an agent’s quality comes from the loop, not the routing.',
      },
    ],
  },
  {
    slug: 'connect-hermes-agent-hostinger-vps-vs-code',
    no: '690',
    title: 'How to Connect a Self-Hosted Hermes AI Agent on Hostinger VPS to VS Code',
    shortTitle: 'Connect a Hermes agent on a Hostinger VPS to VS Code',
    seoTitle: 'Connect Hermes Agent on Hostinger VPS to VS Code — Ka Lun Chan',
    description:
      'Step by step: SSH keys, a non-root user, VS Code Remote-SSH, finding the Hermes Docker container, configuring Claude by API key or credits, and the problems you will hit. From my own setup.',
    teaser:
      'SSH keys and a non-root user, VS Code Remote-SSH, docker ps and docker exec, Hermes config.yaml and .env, Claude by API key or Hostinger credits, and a troubleshooting list from doing it.',
    dek:
      'The setup half of my self-hosted agent experiment: getting from a MacBook to the Hermes Agent container on a Hostinger VPS through VS Code, with the model key in the right file and nothing exposed that should not be.',
    summary:
      'What Hermes Agent is and why self-host it; prerequisites; generating and installing an SSH key, the SSH config, a non-root admin user; connecting VS Code with Remote-SSH and knowing which window is remote; finding the container, reading logs, checking volumes; configuring Claude through an Anthropic API key, a Claude Code login, or Hostinger’s nexos.ai credits, and keeping the key out of Git; day-to-day use from the editor; eight common problems; and the job-search agent this sets up.',
    topics: ['Learning', 'AI'],
    related: [
      { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Building my own AI job search agent with Hermes' },
      { to: '/writing/connect-strava-to-claude-mcp/', label: 'Connecting Strava to Claude with MCP, step by step' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/#guardrails', label: 'Don’t hand AI the production keys' },
      { to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI' },
      { to: '/writing/network-security-before-devsecops/', label: 'Where the least-privilege habit comes from' },
      { to: '/writing/omniroute-hermes-agent-docker/', label: 'Part three: an AI model router in front of Hermes' },
    ],
    minutes: 12,
    published: '2026-10-09',
    modified: '2026-10-09',
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
  },
  {
    slug: 'building-an-ai-job-search-agent-with-hermes',
    no: '689',
    title: 'Building My Own AI Job Search Agent with Hermes: Going Beyond ChatGPT and Claude',
    shortTitle: 'Building an AI job search agent with Hermes',
    seoTitle: 'Building an AI Job Search Agent With Hermes Agent — Ka Lun Chan',
    description:
      'A learning log: deploying the open-source Hermes Agent on a VPS and designing an autonomous job-search pipeline for engineering leadership roles, with the engineering tradeoffs and what is planned versus built.',
    teaser:
      'Hermes Agent on a VPS, public job-board APIs, deterministic filtering before the model, a daily Telegram report, and me deciding. Part one of a series, written before the results.',
    dek:
      'What can I build with a self-hosted AI agent that I could not easily do in a chat window? A job-search pipeline for engineering leadership roles is the experiment, Hermes Agent is the framework, and this is the plan before the results.',
    summary:
      'Why a persistent, self-hosted agent is a different shape from a chat assistant; the tedium of a senior job search; a pipeline that normalizes, dedupes and filters postings from public Greenhouse, Lever and Ashby endpoints before any model sees them; what Hermes adds and what it does not; the architecture, cost, reliability, security, data-quality, observability and oversight decisions; and the eight steps planned next.',
    topics: ['Learning', 'AI'],
    related: [
      { to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
      { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Why I build my own developer tools' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture' },
      { to: '/writing/connect-strava-to-claude-mcp/', label: 'Connecting Strava to Claude with MCP' },
      { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'The setup: connecting the Hermes VPS to VS Code' },
      { to: '/writing/omniroute-hermes-agent-docker/', label: 'OmniRoute: routing the agent’s model calls' },
      { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'Scheduling AI work: Hermes, ChatGPT and Claude compared' },
    ],
    minutes: 9,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'Hermes Agent',
      'self-hosted AI agent',
      'AI job search agent',
      'autonomous agent job search',
      'Hermes Agent VPS',
      'AI agent architecture tools state memory scheduling',
      'Greenhouse Lever Ashby job board API',
      'AI agents vs ChatGPT Claude',
      'engineering leadership job search automation',
      'learning AI agents by building',
    ],
    about: [
      { '@type': 'Thing', name: 'Intelligent agent', sameAs: 'https://en.wikipedia.org/wiki/Intelligent_agent' },
      { '@type': 'SoftwareApplication', name: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'OpenClaw', url: 'https://github.com/openclaw/openclaw' },
      { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.com/claude-code' },
      { '@type': 'Thing', name: 'Greenhouse Job Board API', url: 'https://developers.greenhouse.io/job-board.html' },
      { '@type': 'Thing', name: 'Cron', sameAs: 'https://en.wikipedia.org/wiki/Cron' },
      { '@type': 'Thing', name: 'Telegram', sameAs: 'https://en.wikipedia.org/wiki/Telegram_(software)' },
    ],
    faq: [
      {
        q: 'What is Hermes Agent?',
        a: 'Hermes Agent is an open-source, self-hosted AI agent from Nous Research. It is built around skills, small instruction files it loads when a task needs them and can write for itself, a scheduler for one-shot or recurring jobs, and a gateway that connects it to Telegram and other messaging platforms. It runs on a small VPS.',
      },
      {
        q: 'What can a self-hosted agent do that ChatGPT or Claude cannot?',
        a: 'Mostly nothing in terms of capability; hosted assistants have tools and integrations too. The difference is control: the agent, its state and credentials live on a server you administer, it runs on a schedule without you, its integrations are code you can read and change, and the workflow is a defined process with logs rather than a conversation.',
      },
      {
        q: 'Why filter job postings before sending them to a language model?',
        a: 'Because the model is the most expensive, slowest and least predictable step. Normalizing, de-duplicating and filtering on title, level, location and published pay are deterministic and testable, and they cut the list to the few postings worth a model’s judgment, which also keeps the cost per run down.',
      },
      {
        q: 'Is the job-search agent built?',
        a: 'No. Hermes Agent is deployed on a Hostinger VPS. The job-search pipeline is a planned experiment, and the post lists the eight steps in order, from confirming the agent can research openings at all to measuring matching accuracy and cost over a few weeks. Applications and recruiter contact stay approval-gated.',
      },
    ],
  },
  {
    slug: 'building-federal-government-applications',
    no: '688',
    title: 'What Building Federal Government Applications Taught Me About Software Engineering',
    shortTitle: 'What building federal government applications taught me',
    seoTitle: 'Building Federal Government Applications: FedRAMP, ATO, 508 — Ka Lun Chan',
    description:
      'From startups to federal certification systems: what FedRAMP, Authority to Operate, Section 508, Plain Writing and continuous monitoring taught me about engineering that must be demonstrably secure, accessible and maintainable.',
    teaser:
      'The stack was familiar. Everything around it changed: demonstrable security, an Authorizing Official instead of a deploy button, accessibility in the acceptance criteria, plain language in every message, and change you can trace.',
    dek:
      'From startup development to supporting federal systems: what I learned about FedRAMP, Authority to Operate, Section 508, Plain Writing, security and building software that must meet government requirements, and why the discipline makes commercial software better too.',
    summary:
      'Federal certification systems on a familiar stack; the difference between implementing a control and proving it operates; what an Authority to Operate asks of an engineering team; Section 508 as an engineering responsibility; Plain Writing as a product problem; how security controls shape architecture; continuous monitoring folded into normal operations; change management without bureaucracy; a one-page map of the frameworks; and what it changed about leading engineers.',
    topics: ['Leadership', 'Architecture', 'Engineering judgment'],
    related: [
      { to: '/work/public-service-modernization/', label: 'Case study: public-sector modernization with security and accessibility as release gates' },
      { to: '/writing/network-security-before-devsecops/', label: 'Where my security habits come from: network security before DevSecOps' },
      { to: '/writing/api-architecture-lessons/#security', label: 'Authorization is enforced on the server, on the record' },
      { to: '/projects/fedpath/', label: 'FedPath: finding and evaluating federal contracts' },
      { to: '/expertise/#gov', label: 'Government technology and federal compliance' },
    ],
    minutes: 11,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'building federal government applications',
      'FedRAMP for engineers',
      'Authority to Operate engineering',
      'Section 508 accessibility web applications',
      'Plain Writing Act software',
      'NIST SP 800-53 controls engineering team',
      'continuous monitoring federal systems',
      'government software engineering lessons',
      'federal certification systems engineering',
      'regulated environment engineering leadership',
    ],
    about: [
      { '@type': 'Thing', name: 'FedRAMP', sameAs: 'https://en.wikipedia.org/wiki/FedRAMP' },
      { '@type': 'Thing', name: 'Section 508 Amendment to the Rehabilitation Act of 1973', sameAs: 'https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973' },
      { '@type': 'Thing', name: 'Government software engineering' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Federal Information Security Management Act of 2002', sameAs: 'https://en.wikipedia.org/wiki/Federal_Information_Security_Management_Act_of_2002' },
      { '@type': 'Thing', name: 'NIST Special Publication 800-53', sameAs: 'https://en.wikipedia.org/wiki/NIST_Special_Publication_800-53' },
      { '@type': 'Thing', name: 'Risk Management Framework', sameAs: 'https://en.wikipedia.org/wiki/Risk_Management_Framework' },
      { '@type': 'Thing', name: 'Plain Writing Act of 2010', sameAs: 'https://en.wikipedia.org/wiki/Plain_Writing_Act_of_2010' },
      { '@type': 'Thing', name: 'Web Content Accessibility Guidelines', sameAs: 'https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines' },
    ],
    faq: [
      {
        q: 'What is the difference between FedRAMP and an Authority to Operate?',
        a: 'FedRAMP is the standardized program for assessing and authorizing cloud services that federal agencies use, and its authorization covers a cloud service within a defined boundary. An Authority to Operate is the formal decision by an agency’s Authorizing Official that a specific system’s risk is understood and accepted. An application on a FedRAMP-authorized platform still needs its own controls, evidence and authorization.',
      },
      {
        q: 'What does an engineering team contribute to an Authority to Operate?',
        a: 'Implemented controls and the evidence that they work: system security plans, control assessments, risk assessments, plans of action (POA&Ms) for open findings, configuration and vulnerability management, continuous monitoring, incident response procedures and contingency plans. The Authorizing Official makes the decision; engineering makes it possible.',
      },
      {
        q: 'Why is Section 508 an engineering responsibility rather than a design one?',
        a: 'Because a feature can pass every functional test and still be unusable with a screen reader or a keyboard. Labelled fields, understandable validation errors, sufficient contrast, keyboard-operable controls and correct focus management are implemented in code, tested by people as well as tools, and belong in the acceptance criteria.',
      },
      {
        q: 'Do government engineering disciplines apply to commercial software?',
        a: 'Yes, at the right level of rigor. A startup does not need an authorization process, and it still benefits from server-side access control, accessible interfaces, clear user communication, traceable changes and reliable deployment. Security has to be demonstrable, accessibility designed in, and risk evaluated continuously, wherever people depend on the system.',
      },
    ],
  },
  {
    slug: 'building-startups-technical-leadership',
    no: '687',
    title: 'Building Startups: What I’ve Learned Turning Ideas Into Working Products',
    shortTitle: 'Building startups: turning ideas into working products',
    seoTitle: 'Building Startups: From Mobile Apps and VoIP to Real Estate — Ka Lun Chan',
    description:
      'Helping startups build mobile apps, a fitness platform, wholesale VoIP, real estate software and virtual tours, and the technical leadership lessons: the right decisions for the stage of the business.',
    teaser:
      'Six startups, six stacks: a hybrid app on LAMP, consulting for my own acquirer, Laravel and Python, open-source VoIP with Yii, Go and Next.js, 360-degree tours. What startups need from a technical leader.',
    dek:
      'From mobile applications and VoIP platforms to fitness technology, real estate software and virtual tours: what working with startups, and founding one, taught me about engineering, leadership and building businesses.',
    summary:
      'A hybrid iOS and Android app on a LAMP backend, staying on as a consultant after my own company was acquired, a fitness platform on Laravel, React and Python, a wholesale VoIP business on open-source telecom and Yii, a real estate platform on Go, React and Next.js, a 360-degree virtual tour app, what they had in common, and why startups need technical leadership more than more code.',
    topics: ['Founder story', 'Leadership', 'Architecture'],
    related: [
      { to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder story: from an idea to an acquisition' },
      { to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture: scaling too early' },
      { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
      { to: '/experience/#yippify', label: 'Consulting and government technology through Yippify' },
      { to: '/mentorship/', label: 'How I mentor engineers' },
    ],
    minutes: 10,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'startup technical leadership',
      'fractional CTO startups',
      'interim head of engineering',
      'choosing a technology stack for a startup',
      'hybrid mobile app LAMP AWS',
      'wholesale VoIP Asterisk OpenSIPS',
      'Go React Next.js platform',
      'startup architecture decisions',
      'zero to one product development',
      'business-aware engineering',
    ],
    about: [
      { '@type': 'Thing', name: 'Startup company', sameAs: 'https://en.wikipedia.org/wiki/Startup_company' },
      { '@type': 'Thing', name: 'Chief technology officer', sameAs: 'https://en.wikipedia.org/wiki/Chief_technology_officer' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'LAMP (software bundle)', sameAs: 'https://en.wikipedia.org/wiki/LAMP_(software_bundle)' },
      { '@type': 'Thing', name: 'Laravel', sameAs: 'https://en.wikipedia.org/wiki/Laravel' },
      { '@type': 'Thing', name: 'Yii', sameAs: 'https://en.wikipedia.org/wiki/Yii' },
      { '@type': 'Thing', name: 'Go (programming language)', sameAs: 'https://en.wikipedia.org/wiki/Go_(programming_language)' },
      { '@type': 'Thing', name: 'Next.js', sameAs: 'https://en.wikipedia.org/wiki/Next.js' },
      { '@type': 'Thing', name: 'A-Frame (virtual reality framework)', sameAs: 'https://en.wikipedia.org/wiki/A-Frame_(virtual_reality_framework)' },
      { '@type': 'Thing', name: 'Asterisk (PBX)', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
    ],
    faq: [
      {
        q: 'What does a startup need from a technical leader?',
        a: 'Help making the right technical decisions for the stage of the business: what to build now and what can wait, a stack the team can own, an architecture as simple as the product allows, infrastructure the company can afford to run, and the judgment to say a feature should not be built yet. Writing more code is not the same as making progress.',
      },
      {
        q: 'How do you choose a technology stack for a startup?',
        a: 'By the product, the team and the budget rather than by fashion. A hybrid mobile app over two native ones, a LAMP backend the team already knew, Go with React and Next.js where the product needed it: the right stack is the one the company can build, operate and maintain at its current size, with room to change later.',
      },
      {
        q: 'What changes after a startup is acquired?',
        a: 'The technology has to fit a larger organization, knowledge has to move out of the founders’ heads, existing systems must keep running while the people change, and decisions have to serve people who did not build the platform. Software ownership does not end when its author leaves, so systems should be built to be operated and improved by whoever inherits them.',
      },
    ],
  },
  {
    slug: 'data-driven-engineering-network-voip-publishing',
    no: '686',
    title: 'Different Industries, Same Engineering Problems: From Carrier Networks to VoIP and Digital Publishing',
    shortTitle: 'Different industries, same engineering problems',
    seoTitle: 'From SNMP Capacity Forecasting to VoIP Routing and SEO — Ka Lun Chan',
    description:
      'What building R-based network capacity forecasts, VoIP least-cost routing with call statistics, and digital publishing analytics taught me about turning data into decisions.',
    teaser:
      'An R program forecasting carrier links from SNMP data, call statistics feeding least-cost routing, and two articles with very different revenue per view: the same measure-analyze-decide loop in three industries.',
    dek:
      'What building network capacity forecasting tools, optimizing VoIP call routing, and analyzing website traffic taught me about engineering: the products changed, the data changed, and the method stayed the same.',
    summary:
      'Forecasting when a carrier link would fill with an R program over SNMP statistics, why the average hid the peaks; routing calls on cost and quality with answer-seizure ratio, call duration and route history; which article to improve when traffic and revenue disagree; a side-by-side of the three industries; why collecting data was never the hard part; forecasting as a loop; the same questions in cloud and AI; and what it changed about how I lead.',
    topics: ['Engineering judgment', 'Architecture', 'Leadership'],
    related: [
      { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning: what carrier networks taught me about scaling cloud infrastructure' },
      { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open-source VoIP taught me about distributed systems' },
      { to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/', label: 'From SEO and AdSense to AI search: what digital publishing taught me' },
      { to: '/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/', label: 'What 20+ years taught me about infrastructure costs' },
      { to: '/leadership/', label: 'How I run engineering' },
    ],
    minutes: 9,
    published: '2026-10-09',
    modified: '2026-10-09',
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
  },
  {
    slug: 'digital-publishing-seo-adsense-affiliate-ai-search',
    no: '685',
    title: 'From SEO and AdSense to AI Search: What Digital Publishing Taught Me',
    shortTitle: 'From SEO and AdSense to AI search',
    seoTitle: 'Digital Publishing: SEO, AdSense, Affiliate and AI Search — Ka Lun Chan',
    description:
      'How publishers turned content into revenue with SEO, AdSense and affiliate networks, what changed with social, zero-click and AI search, and the engineering behind a profitable platform.',
    teaser:
      'The publishing revenue engine from an engineer’s seat: AdSense and RPM, affiliate tracking and disclosure, SEO, SMO, AEO and GEO, the economics that changed, and why a fast site is only half a business.',
    dek:
      'There was a time when useful content, a good search ranking and a display ad could make real money. I ran the technology for a publishing business through that era and into AI search. Here is how the business worked, what the engineering had to carry, and what changed.',
    summary:
      'When content could make money and why not all traffic was worth the same; how AdSense pays and what Page RPM means, with a React ad unit; affiliate models, tracking and FTC disclosure; technical SEO, SMO, AEO and GEO and how they work together; why the economics changed; the operating-contribution test; and what I apply to Useful Little Tools, Yippify, FedPath and this site.',
    topics: ['Leadership', 'Learning', 'AI'],
    related: [
      { to: '/writing/what-publishing-taught-me-about-seo-aeo-geo/', label: 'What being a CTO in publishing taught me about SEO, AEO and GEO' },
      { to: '/work/publishing-distribution/', label: 'Case study: making a publishing platform compete on distribution' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture' },
      { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Useful Little Tools: why I build my own tools' },
      { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning, from carrier networks to the cloud' },
      { to: '/writing/data-driven-engineering-network-voip-publishing/', label: 'Different industries, same engineering problems' },
    ],
    minutes: 14,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'digital publishing business model',
      'how AdSense makes money',
      'AdSense page RPM explained',
      'affiliate marketing for publishers',
      'affiliate tracking and attribution',
      'SEO SMO AEO GEO',
      'answer engine optimization',
      'generative engine optimization',
      'zero-click search publishers',
      'publishing platform engineering',
      'content monetization strategy',
    ],
    about: [
      { '@type': 'Thing', name: 'Digital publishing', sameAs: 'https://en.wikipedia.org/wiki/Electronic_publishing' },
      { '@type': 'Thing', name: 'Online advertising', sameAs: 'https://en.wikipedia.org/wiki/Online_advertising' },
      { '@type': 'Thing', name: 'Search engine optimization', sameAs: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Google AdSense', sameAs: 'https://en.wikipedia.org/wiki/Google_AdSense' },
      { '@type': 'Thing', name: 'Affiliate marketing', sameAs: 'https://en.wikipedia.org/wiki/Affiliate_marketing' },
      { '@type': 'Thing', name: 'Social media optimization', sameAs: 'https://en.wikipedia.org/wiki/Social_media_optimization' },
      { '@type': 'Thing', name: 'Core Web Vitals', sameAs: 'https://web.dev/articles/vitals' },
      { '@type': 'Thing', name: 'FTC Endorsement Guides', sameAs: 'https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking' },
      { '@type': 'Thing', name: 'Google Search Console', sameAs: 'https://search.google.com/search-console/about' },
      { '@type': 'Thing', name: 'WordPress', sameAs: 'https://en.wikipedia.org/wiki/WordPress' },
      { '@type': 'Thing', name: 'Ruby on Rails', sameAs: 'https://en.wikipedia.org/wiki/Ruby_on_Rails' },
    ],
    faq: [
      {
        q: 'How does Google AdSense make money for a publisher?',
        a: 'A publisher builds a site with original content, applies, is reviewed, and adds Google’s ad code once approved. Ads are served to eligible visitors, advertisers pay through the ad ecosystem, and the publisher keeps a share, about 68% overall. AdSense pays per impression, so earnings depend on page RPM: estimated earnings divided by page views, times a thousand.',
      },
      {
        q: 'What is the difference between CPM, CPC and RPM?',
        a: 'CPM and CPC describe what advertisers pay, per thousand impressions or per click. RPM describes what a publisher earns per thousand: Page RPM per thousand page views, impression RPM per thousand ad impressions. A publisher manages RPM; the advertiser-side numbers are inputs to it.',
      },
      {
        q: 'How does affiliate marketing differ from display advertising?',
        a: 'Display advertising pays for impressions. Affiliate marketing pays for a defined action after a reader follows your link: a sale, a qualified lead, a subscription. A tracking identifier and a cookie or server-side record attribute the conversion within a window, the network validates it, and reversals follow refunds. Disclosures must be clear: the FTC accepts “paid link”; “affiliate link” alone is not enough.',
      },
      {
        q: 'How do SEO, SMO, AEO and GEO differ?',
        a: 'SEO earns organic search visibility and traffic. SMO earns social reach and referral traffic. AEO makes answers clear and extractable for search features and assistants, sometimes without a click. GEO aims at being cited accurately by generative AI systems. One well-structured, original, credible article supports all four.',
      },
      {
        q: 'Why is a site with advertising revenue not necessarily profitable?',
        a: 'Because operating contribution is advertising plus affiliate plus other revenue minus direct operating costs: hosting, content production, software services and other attributable expenses. A page that earns less per thousand views than it costs to produce and serve loses money at any scale, which is why performance and infrastructure work affect both sides of the formula.',
      },
    ],
  },
  {
    slug: 'infrastructure-costs-from-carrier-networks-to-the-cloud',
    no: '684',
    title: 'From Carrier Networks to the Cloud: What 20+ Years Taught Me About Infrastructure Costs',
    shortTitle: 'What 20+ years taught me about infrastructure costs',
    seoTitle: 'Infrastructure Costs From Carrier Networks to the Cloud — Ka Lun Chan',
    description:
      'Infrastructure economics from seven seats: carrier capital, data center bills, VoIP routing margins, AWS consumption, architecture, teams and my own businesses. What each layer taught me about cost.',
    teaser:
      'Carrier capital, the real cost of a server, why the cheapest VoIP route loses money, cloud waste by default, and the questions a founder asks that an engineer doesn’t. Seven layers, one bill.',
    dek:
      'I have paid for infrastructure from the carrier network to the company that owns the invoice. Each layer taught me something different about cost, and together they are why I never evaluate a technical decision on whether it works alone.',
    summary:
      'Why carrier capacity was capital, what a server really costs when you carry it, how call statistics improved least-cost routing and why the cheapest route loses money, how the cloud turned capital into consumption, why people and process are infrastructure costs too, the founder’s questions that changed how I decide, and the seven-layer figure that puts it on one page.',
    topics: ['Leadership', 'Architecture', 'Founder story'],
    related: [
      { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'The forecasting method: capacity planning from carrier networks to the cloud' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'The architecture decisions: the hidden cost of scaling too early' },
      { to: '/writing/building-a-startup-from-idea-to-acquisition/#business', label: 'When software becomes a business' },
      { to: '/about/#stack', label: 'The seven layers on the About page' },
      { to: '/expertise/#capacity', label: 'Infrastructure strategy, capacity planning and cost optimization' },
    ],
    minutes: 8,
    published: '2026-10-09',
    modified: '2026-10-09',
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
  },
  {
    slug: 'hidden-cost-of-software-architecture',
    no: '683',
    title: 'The Hidden Cost of Software Architecture: Why Scaling Too Early Is Expensive',
    shortTitle: 'The hidden cost of software architecture',
    seoTitle: 'The Hidden Cost of Software Architecture — Ka Lun Chan',
    description:
      'Microservices, Kafka, managed services, database habits and premature scale all show up on the monthly bill. How I connect architecture decisions to what a system costs to run.',
    teaser:
      'Every box on the whiteboard runs somewhere and is paid for monthly. Monolith or microservices, Kafka or a queue, managed or self-hosted, scale now or later: how I decide, with a price column.',
    dek:
      'Architecture diagrams have no price column, and they should. Every component runs somewhere, is watched by someone and is paid for every month, and scaling before the demand exists is one of the most expensive mistakes a growing company makes.',
    summary:
      'How microservices multiply the things that cost money, why Kafka is also a team, when managed services stop being cheaper than self-hosting, where the database leaks money, what scaling for users you don’t have costs, and the five inputs and three decisions I use to connect architecture to operating expense.',
    topics: ['Architecture', 'Engineering judgment', 'Leadership'],
    related: [
      { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning: what carrier networks taught me about scaling cloud infrastructure' },
      { to: '/writing/should-it-be-a-microservice/', label: 'Should it be a microservice?' },
      { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'The tradeoffs of event-driven architecture with Kafka' },
      { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
      { to: '/expertise/#capacity', label: 'Infrastructure scaling, capacity planning and cost optimization' },
      { to: '/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/', label: 'Infrastructure costs from seven seats, including the founder’s' },
    ],
    minutes: 7,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'hidden cost of software architecture',
      'cost of microservices',
      'scaling too early',
      'premature optimization infrastructure cost',
      'managed services vs self-hosted cost',
      'Kafka operational cost',
      'database performance and cloud cost',
      'build vs buy decision',
      'architecture and operating expenses',
      'cloud cost optimization',
    ],
    about: [
      { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
      { '@type': 'Thing', name: 'Cloud cost optimization' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Microservices', sameAs: 'https://en.wikipedia.org/wiki/Microservices' },
      { '@type': 'Thing', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
      { '@type': 'Thing', name: 'Total cost of ownership', sameAs: 'https://en.wikipedia.org/wiki/Total_cost_of_ownership' },
      { '@type': 'Thing', name: 'Connection pool', sameAs: 'https://en.wikipedia.org/wiki/Connection_pool' },
    ],
    faq: [
      {
        q: 'How does software architecture affect operating costs?',
        a: 'Through the number of components that must run and be monitored, how they communicate, how much a vendor does for you, how efficiently the database is used, and how much capacity is bought ahead of demand. Each extra service, cluster or cross-zone call is a recurring cost, paid in dollars and in engineer attention.',
      },
      {
        q: 'Why is scaling too early expensive?',
        a: 'Because capacity in the cloud is easy to add later and costs money every month until it is needed. Multi-region, service meshes or Kafka for a product with a few thousand users spend cash and engineering attention a young product needs elsewhere. What is hard to change later is the data model and the boundaries, so that is where early effort belongs.',
      },
      {
        q: 'When are managed services more expensive than self-hosting?',
        a: 'For a small team the managed premium is almost always cheaper than the engineer-hours it replaces. The math flips for large, steady workloads where the premium approaches an engineer’s salary and the team exists to carry the pager. The line moves as the workload and the team change, so the decision needs revisiting.',
      },
    ],
  },
  {
    slug: 'capacity-planning-carrier-networks-to-cloud',
    no: '682',
    title: 'Capacity Planning: What Carrier Networks Taught Me About Scaling Cloud Infrastructure',
    shortTitle: 'Capacity planning, from carrier networks to cloud',
    seoTitle: 'Capacity Planning From Carrier Networks to Cloud — Ka Lun Chan',
    description:
      'Capacity planning on a 2,000-collocation carrier network, VoIP servers behind millions of minutes, geo-routed media paths, and AWS bills: the method that survived every generation of infrastructure.',
    teaser:
      'From purchase orders and technicians in trucks to a Terraform plan and a monthly invoice: forecasting demand, finding the bottleneck, routing media by location, and cutting cloud cost without cutting reliability.',
    dek:
      'When capacity was a purchase order, being wrong meant congestion or dark hardware. In the cloud, being wrong means a bill. The method in between did not change: measure first, plan from data, know what fills first, and count the engineers as capacity too.',
    summary:
      'Forecasting carrier network capacity from measured utilization across 2,000+ collocations, planning VoIP servers behind millions of minutes a month, choosing media paths by caller location to improve quality and cut bandwidth cost, moving a platform from one data center to cloud regions as capacity followed revenue, and bringing a publishing platform’s AWS bill down by about 30%. Plus why engineering capacity is the constraint most dashboards miss.',
    topics: ['Architecture', 'Leadership', 'Engineering judgment'],
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
    minutes: 9,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'capacity planning',
      'infrastructure capacity planning',
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
        q: 'How did Ka Lun Chan reduce AWS costs?',
        a: 'As CTO of a media publishing platform he led a re-platform onto AWS, and the infrastructure improvements that came with it contributed to AWS costs about 30% lower: right-sizing instances, scaling the web tier on real demand, fixing database queries and connection handling, caching unchanged pages, and removing resources nobody used.',
      },
      {
        q: 'Why is engineering capacity part of capacity planning?',
        a: 'A system with enough compute and not enough engineers to run it is the more common failure. Team size, velocity, technical debt, operational overhead, budget and commitments all fill up and all have lead times, and hiring adds delivery capacity only after a delay and only if the architecture gives new people something to own.',
      },
    ],
  },
  {
    slug: 'from-dos-to-ai-thirty-years-of-technology',
    no: '681',
    title: 'From DOS to AI: Watching the World Change, One Decade at a Time',
    shortTitle: 'From DOS to AI',
    seoTitle: 'From DOS to AI: 30 Years of Technology Evolution — Ka Lun Chan',
    description:
      'From 286 computers, DOS, BBSs and dial-up to fiber, 5G, cloud computing and AI. A personal journey through 30 years of technology, as a user and as the engineer behind some of it.',
    teaser:
      'A 286 and a screaming modem, BBSs and mIRC, dial-up to fiber, Nokia apps to AI assistants: what thirty years of technology looked like from the inside.',
    dek:
      'From 286 computers and dial-up modems to fiber internet, smartphones and artificial intelligence. Every decade changed what I thought was possible, and I helped build some of the infrastructure that made it ordinary.',
    summary:
      'DOS and Windows 3.1 on a 486, dialing into BBSs, IRC and mIRC, AOL bringing everyone online, dial-up giving way to DSL and cable, VoIP and Nokia apps, 3G to 5G, fiber, cloud, and now AI. What stayed the same underneath, and why the only durable skill is learning the next thing.',
    topics: ['Learning', 'AI'],
    related: [
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'The engineering side: DevOps from Expect scripts to AI agents' },
      { to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI' },
      { to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/', label: 'VoIP apps for Nokia phones, before the iPhone took over' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything' },
      { to: '/writing/network-security-before-devsecops/', label: 'Network security long before DevSecOps' },
      { to: '/writing/talking-to-ai-in-a-terminal/', label: 'Back at a prompt: talking to AI in a terminal' },
    ],
    minutes: 9,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'from DOS to AI',
      '30 years of technology evolution',
      'personal technology journey',
      'BBS and IRC in the 1990s',
      'dial-up to broadband to fiber',
      'evolution of the internet personal story',
      'cloud computing changed infrastructure',
      'AI changing software engineering',
      'keep learning technology career',
    ],
    about: [
      { '@type': 'Thing', name: 'History of the Internet', sameAs: 'https://en.wikipedia.org/wiki/History_of_the_Internet' },
      { '@type': 'Thing', name: 'Technological change', sameAs: 'https://en.wikipedia.org/wiki/Technological_change' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Bulletin board system', sameAs: 'https://en.wikipedia.org/wiki/Bulletin_board_system' },
      { '@type': 'Thing', name: 'Internet Relay Chat', sameAs: 'https://en.wikipedia.org/wiki/IRC' },
      { '@type': 'Thing', name: 'mIRC', sameAs: 'https://en.wikipedia.org/wiki/MIRC' },
      { '@type': 'Thing', name: 'AOL', sameAs: 'https://en.wikipedia.org/wiki/AOL' },
      { '@type': 'Thing', name: 'DOS', sameAs: 'https://en.wikipedia.org/wiki/DOS' },
      { '@type': 'Thing', name: 'Windows 3.1', sameAs: 'https://en.wikipedia.org/wiki/Windows_3.1' },
      { '@type': 'Thing', name: 'Dial-up Internet access', sameAs: 'https://en.wikipedia.org/wiki/Dial-up_Internet_access' },
      { '@type': 'Thing', name: 'Fiber to the premises', sameAs: 'https://en.wikipedia.org/wiki/Fiber_to_the_x' },
      { '@type': 'Thing', name: '5G', sameAs: 'https://en.wikipedia.org/wiki/5G' },
      { '@type': 'Thing', name: 'Cloud computing', sameAs: 'https://en.wikipedia.org/wiki/Cloud_computing' },
    ],
    faq: [
      {
        q: 'What was a BBS?',
        a: 'A Bulletin Board System was a computer you dialed into directly with a modem, one caller per phone line. You could read and post messages, download files, join discussions and sometimes chat with other users. There was no browser and no search; you dialed one particular system and waited if its lines were busy.',
      },
      {
        q: 'How did broadband change the internet?',
        a: 'DSL and cable kept the connection up all the time, so the internet stopped being something you dialed into for a while and became something that was always there. That made online businesses, connected software and streaming practical, and later fiber raised expectations again.',
      },
      {
        q: 'What stayed the same across thirty years of technology change?',
        a: 'The underlying engineering problems: networking, security, monitoring, and understanding how systems talk to each other. Cloud, infrastructure as code and AI changed the tools and the amount of automation, and the goal of making systems reliable and taking repetitive work off people did not change.',
      },
      {
        q: 'Is AI the biggest shift in software engineering?',
        a: 'It is the latest in a series: DOS to graphical interfaces, dial-up to broadband, physical servers to cloud. Each made some tasks easy, created work that did not exist before and changed the skills the job needed. AI drafts code, tests and explanations quickly, and still needs a person who understands the problem, the architecture and the security implications.',
      },
    ],
  },
  {
    slug: 'fitness-journey-training-smarter',
    no: '680',
    title: 'I Used to Think Getting Better Meant Working Harder',
    shortTitle: 'Getting better means training smarter',
    seoTitle: 'What Strength Training, Spartan Racing and Cycling Taught Me — Ka Lun Chan',
    description:
      'Strength training, Spartan racing and bike racing taught me that getting better means training smarter: consistency, recovery, coming back from gaps, and leading teams the same way.',
    teaser:
      'Three sports, one lesson: consistency over heroics, the right effort at the right time, recovery on purpose, and the discipline of coming back after an injury, a busy year or a life event.',
    dek:
      'What strength training, Spartan racing and cycling taught me about discipline, recovery and coming back, and how those lessons shape the way I lead engineering teams.',
    summary:
      'Progress in the gym takes time, Spartan courses punish narrow strength, cycling proved that riding slowly can make you faster, recovery is part of training, and coming back from a broken collarbone, a work-eaten season, a life event and this year’s surgery is its own discipline. Plus the club, the team and the juniors, and what all of it changed about how I lead.',
    topics: ['Cycling', 'Leadership', 'Learning'],
    related: [
      { to: '/writing/what-cycling-taught-me-about-engineering-leadership/', label: 'What cycling taught me about engineering leadership' },
      { to: '/writing/first-bike-races-novice-race-reports/', label: 'Race reports from my first three bike races' },
      { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is telling you about load and capacity' },
      { to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
      { to: '/mentorship/', label: 'How I mentor engineers and junior riders' },
      { to: '/community/', label: 'Berkeley Omnium and the community behind it' },
      { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring' },
    ],
    minutes: 10,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'lessons learned from strength training',
      'Spartan race training lessons',
      'cycling training and discipline',
      'fitness and engineering leadership',
      'endurance sports and personal development',
      'strength training vs endurance training',
      'fitness consistency and recovery',
      'coming back from injury training',
      'training smarter not harder',
    ],
    about: [
      { '@type': 'Thing', name: 'Strength training', sameAs: 'https://en.wikipedia.org/wiki/Strength_training' },
      { '@type': 'Thing', name: 'Spartan Race', sameAs: 'https://en.wikipedia.org/wiki/Spartan_Race' },
      { '@type': 'Thing', name: 'Road bicycle racing', sameAs: 'https://en.wikipedia.org/wiki/Road_bicycle_racing' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Progressive overload', sameAs: 'https://en.wikipedia.org/wiki/Progressive_overload' },
      { '@type': 'Thing', name: 'Functional threshold power', sameAs: 'https://en.wikipedia.org/wiki/Functional_threshold_power' },
      { '@type': 'Thing', name: 'Obstacle course racing', sameAs: 'https://en.wikipedia.org/wiki/Obstacle_racing' },
      { '@type': 'Organization', name: 'Berkeley Bicycle Club', url: 'https://berkeleybikeclub.org/' },
      { '@type': 'Event', name: 'Berkeley Omnium', url: 'https://berkeleyomnium.com/' },
    ],
    faq: [
      {
        q: 'What does strength training teach about engineering leadership?',
        a: 'That sustainable progress comes from consistency, not occasional heroic efforts. Teams improve the way lifters do: a little more load when the last cycle was clean, technique before volume, tracking so memory doesn’t lie, and recovery built in as the gains get smaller.',
      },
      {
        q: 'Why does riding slowly make cyclists faster?',
        a: 'Because training targets specific adaptations. Easy rides build the aerobic base that hard intervals depend on, and keeping easy days easy leaves enough recovery to absorb the hard ones. Riding medium every day leaves you good at riding medium.',
      },
      {
        q: 'How do you come back to training after an injury or a long gap?',
        a: 'Start below where you were, rebuild the habit before the fitness, and resist doubling up to make up lost weeks. Compare yourself to last week rather than to the athlete you used to be. A short session that happens beats a perfect one that doesn’t.',
      },
      {
        q: 'What is the connection between recovery and burnout on engineering teams?',
        a: 'Fatigue accumulates in teams the way it does in athletes. Constant emergencies, overtime that becomes the schedule and unrealistic deadlines produce a tired team that eventually breaks. Recovery is part of progress, in training and in delivery.',
      },
    ],
  },
  {
    slug: 'network-security-before-devsecops',
    no: '679',
    title: 'I Was Working on Network Security Long Before DevSecOps Was a Thing',
    shortTitle: 'Network security before DevSecOps',
    seoTitle: 'From Cisco ACLs and NetScreen Firewalls to Cloud Security — Ka Lun Chan',
    description:
      'My security work began with Cisco ACLs in a carrier network and a seat in a new SOC supporting NetScreen firewalls. How that shaped how I build software, cloud and teams.',
    teaser:
      'Cisco ACLs in a carrier network, one of the first three in a new Security Operations Center, training the TAC, and how it all carried into application, cloud and government security.',
    dek:
      'How working in carrier networks, helping launch a managed security service, and training a technical support team shaped the way I approach software and infrastructure security today.',
    summary:
      'Security as a thread through a whole career: router ACLs in carrier operations, one of the first three people supporting a NetScreen managed firewall service, training the TAC, then AAA on voice platforms, authentication and authorization in applications, mobile apps as untrusted clients, IAM and Terraform in the cloud, federal security requirements, and what it means to lead with security as a release gate. With a staged timeline and a layer-by-layer explorer.',
    topics: ['Architecture', 'Leadership', 'Learning'],
    related: [
      { to: '/writing/api-architecture-lessons/#security', label: 'Authorization in API design: a valid token says nothing about the record' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents, from the same NOC' },
      { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'Following a VoIP call across every boundary' },
      { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Architecture lessons that held across very different systems' },
      { to: '/expertise/#security', label: 'Security engineering, role by role' },
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
      { to: '/writing/building-federal-government-applications/', label: 'Security that has to be demonstrable: building federal applications' },
      { to: '/writing/from-cisco-routers-to-ai-agents/', label: 'The longer path: Cisco routers to AI agents' },
    ],
    minutes: 11,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'network security engineering career',
      'Cisco ACL network security',
      'NetScreen firewall history',
      'managed security services carrier',
      'security operations center experience',
      'network security to cloud security',
      'security across the technology stack',
      'secure software architecture',
      'engineering leadership and security',
      'object-level authorization',
      'mobile application security',
      'security before DevSecOps',
    ],
    about: [
      { '@type': 'Thing', name: 'Network security', sameAs: 'https://en.wikipedia.org/wiki/Network_security' },
      { '@type': 'Thing', name: 'Application security', sameAs: 'https://en.wikipedia.org/wiki/Application_security' },
      { '@type': 'Thing', name: 'DevSecOps', sameAs: 'https://en.wikipedia.org/wiki/DevOps#DevSecOps' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Access-control list', sameAs: 'https://en.wikipedia.org/wiki/Access-control_list' },
      { '@type': 'Thing', name: 'NetScreen Technologies', sameAs: 'https://en.wikipedia.org/wiki/NetScreen_Technologies' },
      { '@type': 'Thing', name: 'Juniper Networks', sameAs: 'https://en.wikipedia.org/wiki/Juniper_Networks' },
      { '@type': 'Thing', name: 'Stateful firewall', sameAs: 'https://en.wikipedia.org/wiki/Stateful_firewall' },
      { '@type': 'Thing', name: 'IPsec', sameAs: 'https://en.wikipedia.org/wiki/IPsec' },
      { '@type': 'Thing', name: 'Security operations center', sameAs: 'https://en.wikipedia.org/wiki/Security_operations_center' },
      { '@type': 'Thing', name: 'AAA (computer security)', sameAs: 'https://en.wikipedia.org/wiki/AAA_(computer_security)' },
      { '@type': 'Thing', name: 'OAuth', sameAs: 'https://en.wikipedia.org/wiki/OAuth' },
      { '@type': 'Thing', name: 'Single sign-on', sameAs: 'https://en.wikipedia.org/wiki/Single_sign-on' },
      { '@type': 'Thing', name: 'Role-based access control', sameAs: 'https://en.wikipedia.org/wiki/Role-based_access_control' },
      { '@type': 'Thing', name: 'AWS Identity and Access Management' },
      { '@type': 'Thing', name: 'FedRAMP', sameAs: 'https://en.wikipedia.org/wiki/FedRAMP' },
    ],
    faq: [
      {
        q: 'Where did Ka Lun Chan’s security experience start?',
        a: 'In carrier network operations, writing access control lists on Cisco routers. When the carrier launched a managed firewall and VPN service on NetScreen products, he was one of the first three people supporting it in the Security Operations Center, and he later travelled to the East Coast to train the Technical Assistance Center to support it.',
      },
      {
        q: 'How does network security experience apply to application and cloud security?',
        a: 'The same habits carry over: deny by default, allow explicitly, mind the order of rules, log what you deny, and test each rule with the traffic it should permit. An ACL is an authorization policy over IP addresses; role-based access control is one over roles; object-level authorization is the rule on a single record; a security group is a stateful ACL and an IAM policy is an ACL over API calls.',
      },
      {
        q: 'What was NetScreen?',
        a: 'NetScreen Technologies, founded in 1997, built firewall and VPN appliances with security processing in custom hardware, running ScreenOS with zone-based policies and IPsec VPNs. Juniper Networks acquired it in 2004 for about four billion dollars, and ScreenOS continued in Juniper products for years.',
      },
      {
        q: 'What does security at every layer of a company mean?',
        a: 'That security is the sum of decisions at the network, infrastructure, application, mobile, data, cloud, software delivery, operations and leadership layers, made mostly by people without security in their title. Technical controls get the attention; organizational ones, such as a named owner and vulnerabilities fixed as high-priority work, decide whether the technical controls exist.',
      },
    ],
  },
  {
    slug: 'voip-apps-for-nokia-phones-before-the-iphone',
    no: '678',
    title: 'Before the iPhone Took Over, We Were Building VoIP Apps for Nokia Phones',
    shortTitle: 'Building VoIP apps for Nokia phones',
    seoTitle: 'Building VoIP Apps for Nokia Phones Before the iPhone — Ka Lun Chan',
    description:
      'Between 2005 and 2010 we wrote mobile VoIP apps in C++ for Nokia phones so immigrants could call home for less. What Symbian, SIP and our customers taught me.',
    teaser:
      'Writing mobile VoIP apps in C++ for the Symbian phones our customers already owned, and why that was the right call before the iPhone took over.',
    dek:
      'Building mobile VoIP applications with C++ between 2005 and 2010, when affordable international calling mattered more than having the latest smartphone.',
    summary:
      'Why a VoIP service for immigrants calling home went onto Nokia phones instead of the iPhone, what Symbian C++ development was like, how a handset talked to an Asterisk and OpenSIPS backend over bad mobile data, and the lessons about customers and constraints that outlasted the phones.',
    topics: ['Founder story', 'Learning', 'Architecture'],
    related: [
      { to: '/writing/building-software-before-and-after-ai/', label: 'The backend those apps talked to, and how I build now' },
      { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open-source VoIP taught me about distributed systems' },
      { to: '/writing/building-a-startup-from-idea-to-acquisition/#customers', label: 'Building for people the system wasn’t designed for' },
      { to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
      { to: '/experience/#communications', label: 'Co-founder and CTO: the problem, decisions and outcome' },
    ],
    minutes: 8,
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'Nokia VoIP application',
      'Symbian C++ development',
      'Nokia S60 VoIP app',
      'mobile VoIP before smartphones',
      'early mobile application development',
      'history of mobile VoIP',
      'developing applications for Nokia phones',
      'VoIP technology in the 2000s',
      'mobile SIP client battery and NAT',
      'affordable international calling app',
    ],
    about: [
      { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
      { '@type': 'Thing', name: 'Symbian', sameAs: 'https://en.wikipedia.org/wiki/Symbian' },
      { '@type': 'Thing', name: 'Mobile app development', sameAs: 'https://en.wikipedia.org/wiki/Mobile_app_development' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Nokia', sameAs: 'https://en.wikipedia.org/wiki/Nokia' },
      { '@type': 'Thing', name: 'S60 (software platform)', sameAs: 'https://en.wikipedia.org/wiki/S60_(software_platform)' },
      { '@type': 'Thing', name: 'C++', sameAs: 'https://en.wikipedia.org/wiki/C%2B%2B' },
      { '@type': 'Thing', name: 'Session Initiation Protocol', sameAs: 'https://en.wikipedia.org/wiki/Session_Initiation_Protocol' },
      { '@type': 'Thing', name: 'iPhone (1st generation)', sameAs: 'https://en.wikipedia.org/wiki/IPhone_(1st_generation)' },
      { '@type': 'Thing', name: 'Asterisk (PBX)', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
      { '@type': 'Thing', name: 'OpenSIPS', sameAs: 'https://en.wikipedia.org/wiki/OpenSIPS' },
      { '@type': 'Thing', name: 'Nokia 1100', sameAs: 'https://en.wikipedia.org/wiki/Nokia_1100' },
    ],
    faq: [
      {
        q: 'Why build VoIP apps for Nokia phones instead of the iPhone?',
        a: 'Because our customers carried Nokias. The service made international calls cheaper for immigrants calling family in South America, Asia and Africa, and in those years the iPhone was expensive, sold in few countries and could not run VoIP over cellular. A Symbian app on the phone a customer already owned reached far more of them.',
      },
      {
        q: 'What was it like to develop apps for Nokia phones in C++?',
        a: 'Native Nokia development meant Symbian C++, a dialect built for phones with tens of megabytes of memory: descriptors instead of strings, leaves and a cleanup stack instead of exceptions, two-phase construction and active objects for anything asynchronous. You built for a Windows emulator with one compiler and for the phone’s ARM chip with another, so some bugs only appeared on the device.',
      },
      {
        q: 'How did a mobile VoIP app work with the telecom backend?',
        a: 'To the platform, the phone was one more SIP endpoint. It registered with the SIP proxy, set up the call, sent audio over RTP, and the server side handled least-cost routing, call records and billing on Asterisk and OpenSIPS. The phone-specific work was keeping that session alive on a slow, metered, unreliable data connection without draining the battery.',
      },
      {
        q: 'What were the hardest problems in mobile VoIP before smartphones?',
        a: 'Keeping a SIP registration alive through carrier NATs without waking the radio constantly, choosing a codec that fit a GPRS or EDGE connection, handling jitter and packet loss, dealing with one-way audio when a data session dropped, and ending the call at the right second for billing when the connection died mid-call.',
      },
    ],
  },
  {
    slug: 'ux-ui-design-before-and-after-ai',
    no: '677',
    title: 'I Used to Design Every Screen Myself',
    seoTitle: 'UX and UI Design Before and After AI — Ka Lun Chan',
    description:
      'A founder who designed his own signup forms, dashboards and phone menus on how AI changed UX and UI work, what it still can’t know about your users, and why.',
    dek:
      'From forms that assumed every customer had a credit card, to an assistant that drafts the layout, checks the contrast and still knows nothing about the person on the other side.',
    summary:
      'Being the designer by default at a bootstrapped startup, the assumptions that turned customers away, what readers, residents and drivers taught later, how I design with an AI assistant now, and the five things that haven’t changed about building for the person using the system.',
    topics: ['Learning', 'AI', 'Founder story'],
    related: [
      { to: '/writing/building-software-before-and-after-ai/', label: 'The engineering half: building everything myself, then with AI' },
      { to: '/writing/building-a-startup-from-idea-to-acquisition/#customers', label: 'Building for people the system wasn’t designed for' },
      { to: '/writing/berkeley-omnium-new-website-next-generation/', label: 'The new Berkeley Omnium site' },
      { to: '/projects/union-city-smog-check/', label: 'Union City Smog Check: call and directions first' },
      { to: '/work/public-service-modernization/', label: 'Case study: accessibility as a release gate' },
    ],
    minutes: 7,
    image: { path: '/images/writing/ux-before-and-after-ai-og.jpg', width: 1200, height: 630, alt: 'I used to design every screen myself. Then: signup forms, phone menus, a reseller dashboard, the support line as a usability lab. Now: a direction, a layout, a phone in hand. The person using it is still the point.' },
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'AI in UX design',
      'AI-assisted UI design',
      'UX design before AI',
      'designing for users not engineers',
      'engineer doing UX design',
      'accessibility as a release gate',
      'mobile-first design',
      'startup founder UX lessons',
      'can AI design a user interface',
    ],
    about: [
      { '@type': 'Thing', name: 'User experience design', sameAs: 'https://en.wikipedia.org/wiki/User_experience_design' },
      { '@type': 'Thing', name: 'AI-assisted software development' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Web accessibility', sameAs: 'https://en.wikipedia.org/wiki/Web_accessibility' },
      { '@type': 'Thing', name: 'Web Content Accessibility Guidelines', sameAs: 'https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines' },
      { '@type': 'Thing', name: 'Progressive web app', sameAs: 'https://en.wikipedia.org/wiki/Progressive_web_app' },
      { '@type': 'Thing', name: 'Design system' },
    ],
    faq: [
      {
        q: 'How has AI changed UX and UI design for engineers?',
        a: 'It made producing a layout cheap. I describe the audience, the device and the one action that matters, and an assistant returns a working layout in the site’s own design system, checks contrast and keyboard order, and drafts the states I used to forget. The work moves from drawing screens to explaining the user.',
      },
      {
        q: 'Can AI design a good user interface on its own?',
        a: 'It can produce a plausible one quickly, and left alone it produces the same generic page every model produces: a hero, three cards, a gradient. It knows nothing about your specific users unless you tell it, so the quality of the result depends on the brief and on someone experienced reviewing it.',
      },
      {
        q: 'What do engineers get wrong when they design interfaces themselves?',
        a: 'They design for themselves without noticing. Forms assume a credit card, a stable address, a name that fits two fields, fluent English and a fast connection. Those assumptions turn real customers away, and the people turned away never show up in the data.',
      },
      {
        q: 'What does an engineer need to know about UX?',
        a: 'Who the person is, what they are trying to do, what device and connection they have, how much patience they bring, what happens when it fails, and whether they can use it with a keyboard or a screen reader. A screen that looks good but doesn’t produce the action it exists for has failed.',
      },
    ],
  },
  {
    slug: 'building-software-before-and-after-ai',
    no: '676',
    title: 'I Used to Build Everything Myself',
    seoTitle: 'Software Development Before and After AI — Ka Lun Chan',
    description:
      'I racked the servers and wrote the billing system for my first startup. Now I build with AI. What got easier, what didn’t, and why I still write code.',
    dek:
      'From a data center I cabled myself and a VoIP platform built on Asterisk and OpenSIPS, to shipping products with an AI assistant in the terminal. What changed, and what the years in the data center still pay for.',
    summary:
      'Building a bootstrapped communications startup by hand, the open-source VoIP stack and the failures it taught, how AI-assisted development changed the way I build FedPath, Useful Little Tools and client work, and the six things that haven’t changed.',
    topics: ['Founder story', 'AI', 'Learning'],
    related: [
      { to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
      { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What the VoIP platform taught me about distributed systems' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything to be a good engineer' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
      { to: '/projects/', label: 'The products built this way' },
      { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'The design half: every screen myself, then with AI' },
      { to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/', label: 'The mobile apps we wrote for Nokia phones on this stack' },
      { to: '/writing/from-dos-to-ai-thirty-years-of-technology/', label: 'The longer view: from DOS to AI, one decade at a time' },
      { to: '/writing/building-startups-technical-leadership/', label: 'The startups I helped build in between' },
      { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'The next experiment: a self-hosted job-search agent on Hermes' },
      { to: '/writing/why-i-still-write-code/', label: 'Why I still write code after 20 years' },
      { to: '/writing/hidden-cost-of-ai-coding/', label: 'When AI coding costs more than a human engineer' },
    ],
    minutes: 7,
    image: { path: '/images/writing/before-and-after-ai-og.jpg', width: 1200, height: 630, alt: 'I used to build everything myself. Then: servers, cables, Asterisk, OpenSIPS, a billing system. Now: an idea, a conversation, working software. Same decisions.' },
    published: '2026-10-09',
    modified: '2026-10-09',
    keywords: [
      'how AI has changed software development',
      'software engineering before AI',
      'AI-assisted software development',
      'building a startup with AI',
      'software engineering career evolution',
      'engineering leadership in the AI era',
      'AI coding assistants for experienced engineers',
      'open-source VoIP startup',
      'Asterisk OpenSIPS platform',
      'technical founder lessons',
    ],
    about: [
      { '@type': 'Thing', name: 'AI-assisted software development' },
      { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Asterisk (PBX)', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
      { '@type': 'Thing', name: 'OpenSIPS', sameAs: 'https://en.wikipedia.org/wiki/OpenSIPS' },
      { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
      { '@type': 'Thing', name: 'Bootstrapping', sameAs: 'https://en.wikipedia.org/wiki/Bootstrapping' },
    ],
    faq: [
      {
        q: 'How has AI changed software development for an experienced engineer?',
        a: 'It shortened the distance between an idea and working software. I use AI assistants to explore ideas, draft implementations, write tests, review code, research unfamiliar tools and troubleshoot. The judgment about what to build, how it should fail and whether it makes sense for the business hasn’t moved.',
      },
      {
        q: 'Does AI-assisted development replace engineering experience?',
        a: 'No. AI produces code quickly, and someone still has to recognize when that code is wrong in a way that looks right. Experience with production systems, infrastructure and teams is what catches architectural and operational risks before they ship.',
      },
      {
        q: 'Is it easier to build a startup with AI?',
        a: 'Building the product is easier. Building the business isn’t. Finding customers, understanding what they need and reaching sustainable revenue are as hard as they were before AI tools, so the decision about what to build matters more, not less.',
      },
      {
        q: 'What was it like building software before AI tools?',
        a: 'For my first company it meant racking servers, routers and switches in a data center, configuring the network, administering Linux, and writing the platform on open-source VoIP with Asterisk, OpenSIPS, MediaProxy, Python AGI scripts and an in-house billing system. Every layer was mine to build and mine to fix.',
      },
    ],
  },
  {
    slug: 'founding-a-startup-isnt-easy',
    no: '675',
    title: 'Founding a Startup Isn’t Easy, but the Experience Is Priceless',
    seoTitle: 'Founding a Startup Isn’t Easy, but the Experience Is Priceless',
    description:
      'A technical founder on bootstrapping a startup: being every department at once, learning fast, the first revenue, profitability, and why the experience outlasts the payout.',
    dek:
      'Friends-and-family money, a data center I cabled myself, and a job title that meant “whichever department we’re missing today.” What building a company from nothing taught me about engineering, business and leadership.',
    summary:
      'Bootstrapping with very little money, being the field technician, network engineer, sysadmin, developer, architect, designer, product manager and support desk at once, learning under pressure, the first paying customer, what profitability changes, why not every founder gets rich, and how it shaped me as an engineering leader.',
    topics: ['Founder story', 'Leadership'],
    related: [
      { to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'The full founder story, from idea to acquisition' },
      { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What running an open-source VoIP platform taught me' },
      { to: '/writing/why-hiring-good-engineers-is-so-hard/', label: 'Why hiring is so hard' },
      { to: '/leadership/', label: 'How I lead engineering teams' },
      { to: '/writing/building-software-before-and-after-ai/', label: 'Building everything myself then, building with AI now' },
      { to: '/writing/building-startups-technical-leadership/', label: 'Building startups: six engagements and what they had in common' },
    ],
    minutes: 6,
    published: '2026-10-08',
    modified: '2026-10-08',
    keywords: [
      'founding a technology startup',
      'startup founder experience',
      'bootstrapping a startup',
      'lessons from building a startup',
      'technical founder',
      'startup CTO',
      'engineering leadership',
      'building a software company from scratch',
    ],
    about: [
      { '@type': 'Thing', name: 'Entrepreneurship', sameAs: 'https://en.wikipedia.org/wiki/Entrepreneurship' },
      { '@type': 'Thing', name: 'Engineering leadership' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Bootstrapping', sameAs: 'https://en.wikipedia.org/wiki/Bootstrapping' },
      { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
      { '@type': 'Thing', name: 'Chief technology officer', sameAs: 'https://en.wikipedia.org/wiki/Chief_technology_officer' },
    ],
    faq: [
      {
        q: 'What does a technical founder actually do at an early-stage startup?',
        a: 'Whatever the company is missing that day. I co-founded a communications platform and was its field technician, network engineer, Linux sysadmin, developer, architect, UX designer, product manager and support desk, often within the same week, because there was nobody else to escalate to.',
      },
      {
        q: 'What is it like to bootstrap a startup on friends-and-family money?',
        a: 'Every dollar has a face attached. Spending money from people who know you personally is a different pressure from spending an investor’s, and it forces you to stretch hardware, headcount and time further than any plan would recommend.',
      },
      {
        q: 'Does founding a startup make you wealthy?',
        a: 'Not reliably. Some startups succeed financially, some survive for years without making their founders rich, and some fail after enormous effort. The experience still teaches how technology, customers, money, operations and people connect, which a single job rarely does.',
      },
      {
        q: 'How does founder experience change an engineering leader?',
        a: 'You’ve seen engineering decisions land on an invoice, so you weigh cost and customer impact alongside architecture. You’ve worked in every part of the stack and the business, so you understand what each team is dealing with, and you know a sustainable business matters more than impressive technology.',
      },
    ],
  },
  {
    slug: 'smaller-user-stories-and-pull-requests',
    no: '674',
    title: 'Why Smaller User Stories and Pull Requests Make Better Engineering Teams',
    seoTitle: 'Smaller User Stories and Pull Requests Make Better Teams — Ka Lun Chan',
    description:
      'Why smaller user stories, smaller pull requests and smaller releases improve planning, code review and delivery, and why one fast developer can’t make a team fast.',
    dek:
      'A story that was too big on day one makes a pull request nobody can review and a release nobody can roll back. Smaller stories, PRs and rollouts fix different problems, and a team needs all three.',
    summary:
      'Why oversized stories produce oversized pull requests, how smaller stories improve planning and prioritization, how smaller PRs improve review and quality, why smaller releases shrink the blast radius, individual speed versus team throughput, and how product and engineering share the job.',
    topics: ['Delivery', 'Leadership'],
    related: [
      { to: '/writing/good-teams-dont-expect-everyone-to-know-everything/', label: 'Why good teams don’t expect everyone to know everything' },
      { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is actually telling you' },
      { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
      { to: '/leadership/#execution', label: 'How I improve execution with small, safe changes' },
      { to: '/writing/forward-engineering-isnt-new/', label: 'Agile as forward engineering in small slices' },
    ],
    minutes: 4,
    published: '2026-10-08',
    modified: '2026-10-08',
    keywords: [
      'smaller pull requests',
      'user story splitting',
      'how to split user stories',
      'small pull requests code review',
      'incremental delivery',
      'feature flags gradual rollout',
      'agile development',
      'engineering leadership',
      'software delivery',
    ],
    about: [
      { '@type': 'Thing', name: 'Agile software development', sameAs: 'https://en.wikipedia.org/wiki/Agile_software_development' },
      { '@type': 'Thing', name: 'Engineering leadership' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'User story', sameAs: 'https://en.wikipedia.org/wiki/User_story' },
      { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
      { '@type': 'Thing', name: 'Feature toggle', sameAs: 'https://en.wikipedia.org/wiki/Feature_toggle' },
    ],
    faq: [
      {
        q: 'Why are smaller user stories better?',
        a: 'Each piece can be understood, estimated and tested on its own. Acceptance criteria fit on a card, dependencies show up in planning rather than mid-sprint, and when priorities change the team reprioritizes the remaining pieces instead of abandoning a half-built feature.',
      },
      {
        q: 'Why are smaller pull requests better for code quality?',
        a: 'A reviewer can read a few hundred lines carefully and notice a missing authorization check or a query inside a loop. A few thousand lines get approved on trust. Small PRs also mean fewer merge conflicts, changes that are easy to find and revert when production breaks, and code other engineers can learn from.',
      },
      {
        q: 'Does one user story need one pull request?',
        a: 'No. Stories solve a planning problem and PRs solve a review problem, so one story often ships as several PRs. The aim is less complexity per step, not a particular ratio of tickets to PRs.',
      },
      {
        q: 'Why roll out features in smaller pieces?',
        a: 'A feature released to everyone at once has the largest blast radius and the vaguest failure signal. Releasing behind a flag or to a slice of users first lets the team learn from real traffic while exposure is small, and turn one thing off without rolling everything back.',
      },
    ],
  },
  {
    slug: 'why-hiring-good-engineers-is-so-hard',
    no: '673',
    title: 'Why Hiring Is So Hard, and Why Interviews Don’t Tell the Whole Story',
    seoTitle: 'Why Hiring Is So Hard and Interviews Don’t Tell the Whole Story',
    description:
      'Why hiring software engineers is so difficult: resumes, interviews, coding tests and references are all partial signals, and a good hire still needs good leadership.',
    dek:
      'Resumes, interviews, coding tests and references each show a slice of a person. After years of hiring and managing engineers, I trust none of them alone, and I’ve learned the harder work starts after the offer.',
    summary:
      'Predicting years from a few hours, what resumes and ATS filters miss, why interviews measure interviewing, what coding tests leave out, reading references for context, the “what would you ask?” question, the real cost of a bad hire, why good hires fail in bad organizations, managing people, building a team rather than collecting talent, and the candidate’s side of the evaluation.',
    topics: ['Leadership', 'Hiring'],
    related: [
      { to: '/writing/good-teams-dont-expect-everyone-to-know-everything/', label: 'Why good teams don’t expect everyone to know everything' },
      { to: '/writing/specialization-beyond-your-own-code/', label: 'Specialization shouldn’t stop at your own code' },
      { to: '/writing/when-everything-is-a-priority/', label: 'When everything is a priority, nothing is' },
      { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
    ],
    minutes: 11,
    published: '2026-10-08',
    modified: '2026-10-08',
    keywords: [
      'why hiring software engineers is difficult',
      'engineering hiring challenges',
      'why technical interviews fail',
      'hiring software developers',
      'engineering leadership',
      'building high-performing engineering teams',
      'technical assessments vs real-world engineering skills',
      'hiring mistakes in software engineering',
    ],
    about: [
      { '@type': 'Thing', name: 'Engineering leadership' },
      { '@type': 'Thing', name: 'Recruitment', sameAs: 'https://en.wikipedia.org/wiki/Recruitment' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Applicant tracking system', sameAs: 'https://en.wikipedia.org/wiki/Applicant_tracking_system' },
      { '@type': 'Thing', name: 'Job interview', sameAs: 'https://en.wikipedia.org/wiki/Job_interview' },
      { '@type': 'Thing', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
    ],
    faq: [
      {
        q: 'Why is hiring software engineers so difficult?',
        a: 'Because you’re predicting years of performance from a resume, a few interviews and maybe a coding exercise. Each of those is a partial signal that rewards different skills than the job does, and on a small team one wrong hire, or a long vacancy, changes what everyone can deliver.',
      },
      {
        q: 'Why do technical interviews fail to identify good engineers?',
        a: 'Interviews mostly measure how well someone interviews. Confident talkers do well; people who think quietly or need time often don’t, even when they’re the ones who diagnose production problems best. I treat the interview as one input and try to see candidates work on something close to the real job.',
      },
      {
        q: 'Are coding tests a good way to assess software engineers?',
        a: 'Only when they test the work the role actually involves. Algorithm puzzles measure one skill. Many roles depend more on reading unfamiliar code, debugging production issues or maintaining legacy systems, so a short exercise built around that work tells a hiring manager far more.',
      },
      {
        q: 'What does a bad engineering hire cost?',
        a: 'Far more than salary. One person who dismisses feedback or makes others afraid to ask questions can shrink reviews, silence standups and push good engineers to leave. Before calling a struggling hire a mistake, though, check whether they got real onboarding, clear tickets and feedback. Some performance problems are leadership failures.',
      },
      {
        q: 'Should candidates evaluate the company during the hiring process?',
        a: 'Yes. A strong engineer will struggle in a badly run organization. Candidates should ask whether expectations are reasonable, whether leadership communicates clearly, whether engineers grow, and whether the company is honest about its technical debt and organizational problems.',
      },
    ],
  },
  {
    slug: 'good-teams-dont-expect-everyone-to-know-everything',
    no: '672',
    title: 'Good Engineering Teams Don’t Expect Everyone to Know Everything',
    seoTitle: 'Good Engineering Teams Don’t Expect Everyone to Know Everything — Ka Lun Chan',
    description:
      'What leading engineering teams taught me about expectations by experience level, smaller pull requests, smaller stories, acceptance criteria and precise communication.',
    dek:
      'Experience should change what we expect from an engineer. It shouldn’t excuse unclear tickets, oversized pull requests or decisions that live in one person’s head.',
    summary:
      'What to expect from engineers at different experience levels, why experience doesn’t replace clarity, smaller pull requests and stories, acceptance criteria, saying what actually happened, reviews and documentation, distributed teams, and the habits I encourage.',
    topics: ['Leadership', 'Delivery'],
    related: [
      { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is actually telling you' },
      { to: '/writing/specialization-beyond-your-own-code/', label: 'Why frontend and backend engineers need some of each other’s world' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why understanding a system beats memorizing it' },
      { to: '/writing/why-hiring-good-engineers-is-so-hard/', label: 'Why hiring is so hard' },
      { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Why smaller stories and pull requests make better teams' },
      { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
    ],
    minutes: 12,
    published: '2026-10-08',
    modified: '2026-10-08',
    keywords: [
      'engineering team expectations',
      'senior vs junior engineer expectations',
      'smaller pull requests',
      'how to write acceptance criteria',
      'breaking down user stories',
      'code review best practices',
      'distributed engineering teams',
      'engineering leadership',
      'bus factor',
    ],
    about: [
      { '@type': 'Thing', name: 'Engineering leadership' },
      { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
      { '@type': 'Thing', name: 'User story', sameAs: 'https://en.wikipedia.org/wiki/User_story' },
      { '@type': 'Thing', name: 'Acceptance testing', sameAs: 'https://en.wikipedia.org/wiki/Acceptance_testing' },
    ],
    faq: [
      {
        q: 'Should a senior engineer know everything about the codebase?',
        a: 'No. A senior engineer should be more independent at breaking down problems, spotting risks and investigating unfamiliar code, but nobody can know a business rule that was never explained or a decision that was never documented. Experience changes expectations; it doesn’t replace clear requirements.',
      },
      {
        q: 'Why are smaller pull requests better?',
        a: 'They’re easier to understand, review, test, troubleshoot and revert. A reviewer should be able to tell what problem the PR solves, what changed and how we know it works without a long conversation. Smaller means one logical change with less context required, not fewer lines for their own sake.',
      },
      {
        q: 'How small should a user story be?',
        a: 'Small enough that it has one clear outcome and its own acceptance criteria, so progress is visible and blockers show early. Not so small that every ticket depends on five others. A story like “implement the registration workflow” is usually several deliverables: the form, the API, validation, uploads, permissions and status changes.',
      },
      {
        q: 'What should acceptance criteria include?',
        a: 'Enough expected behavior that someone unfamiliar with the implementation can follow it: which cases apply, what the user sees, what gets logged, and what happens on failure or retry. Answering those questions before development starts prevents the developer, QA and the product owner from each assuming something different.',
      },
    ],
  },
  {
    slug: 'why-i-build-my-own-developer-tools',
    no: '671',
    title: 'I Still Look Up Syntax. So I Started Building My Own Developer Tools.',
    seoTitle: 'I Still Look Up Syntax, So I Built My Own Developer Tools — Ka Lun Chan',
    description:
      'My system for remembering commands went from bookmarks to Stack Overflow to AI assistants. Why I started building small browser tools instead: Useful Little Tools.',
    dek:
      'My system for remembering things went from bookmarks to Stack Overflow to AI assistants. None of them quite fit the problem, so I started building small tools of my own.',
    summary:
      'Why I still look up Git, Docker and SQL syntax, how bookmarks, Stack Overflow and AI assistants each fell short, the repeat searches that became Useful Little Tools, what building a tool teaches, and why I keep them small.',
    topics: ['Learning', 'AI'],
    related: [
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything to be a good engineer' },
      { to: '/writing/specialization-beyond-your-own-code/', label: 'Following a bug past the edge of your own code' },
      { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether something should be a microservice' },
      { to: '/projects/', label: 'Projects and case studies' },
      { to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/', label: 'From SEO and AdSense to AI search: what digital publishing taught me' },
      { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'Building an AI job search agent with Hermes' },
      { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'A scheduled research assistant for Useful Little Tools' },
    ],
    minutes: 7,
    published: '2026-10-08',
    modified: '2026-10-08',
    keywords: [
      'Useful Little Tools',
      'developer tools',
      'git command finder',
      'docker command finder',
      'SQL JOIN visualizer',
      'regex tester',
      'JWT debugger',
      'experienced developers look up syntax',
      'building your own developer tools',
    ],
    about: [
      { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
      { '@type': 'WebApplication', name: 'Useful Little Tools', url: 'https://usefullittletools.app' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Git', sameAs: 'https://en.wikipedia.org/wiki/Git' },
      { '@type': 'Thing', name: 'Docker', sameAs: 'https://en.wikipedia.org/wiki/Docker_(software)' },
      { '@type': 'Thing', name: 'Stack Overflow', sameAs: 'https://en.wikipedia.org/wiki/Stack_Overflow' },
      { '@type': 'Thing', name: 'JSON Web Token', sameAs: 'https://en.wikipedia.org/wiki/JSON_Web_Token' },
    ],
    faq: [
      {
        q: 'Why do experienced developers still look up syntax?',
        a: 'Because the number of tools they work across keeps growing while the syntax of each one changes. Ka Lun Chan still looks up Git, Docker, SQL and Django syntax almost daily. The concepts carry over between technologies; the exact flags and function names don’t.',
      },
      {
        q: 'What is Useful Little Tools?',
        a: 'Useful Little Tools (usefullittletools.app) is a collection of small browser-based developer tools built by Ka Lun Chan, including a Git command finder, a Docker command finder, a SQL JOIN visualizer, a regex tester and a JWT debugger. Most run entirely in the browser with no account.',
      },
      {
        q: 'Do small developer tools need a backend?',
        a: 'Usually not. A command finder, regex tester or JWT debugger can run entirely in the browser, which avoids accounts, stored personal data and infrastructure. Some functionality does need an external service, so the choice depends on the tool.',
      },
    ],
  },
  {
    slug: 'specialization-beyond-your-own-code',
    no: '670',
    title: 'Specialization Shouldn’t Stop at Understanding Your Own Code',
    seoTitle: 'Specialization Shouldn’t Stop at Your Own Code — Ka Lun Chan',
    description:
      'Why frontend and backend specialists need enough of each other’s world to troubleshoot across boundaries, ask better questions and avoid fragile workarounds.',
    dek:
      'Specialists matter. The trouble starts when engineers can’t follow a user’s problem across a system boundary, explain what they need from another team, or see how their decisions land on someone else.',
    summary:
      'Depth versus breadth, “the API works” versus a working product, what frontend and backend engineers each need to know about the other, evidence-based bug reports, developer quality of life, client versus server responsibilities, and how leaders create silos.',
    topics: ['Leadership', 'Learning'],
    related: [
      { to: '/writing/api-architecture-lessons/', label: 'API architecture: what real systems have taught me' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'What I still look up, and what I never have to' },
      { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
    ],
    minutes: 7,
    published: '2026-10-07',
    modified: '2026-10-07',
    keywords: [
      'frontend backend collaboration',
      'specialist vs generalist engineer',
      'T-shaped engineer',
      'full stack developer',
      'engineering silos',
      'debugging CORS',
      'server-side filtering',
      'developer experience',
    ],
    about: [
      { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
      { '@type': 'Thing', name: 'Engineering leadership' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Cross-origin resource sharing', sameAs: 'https://en.wikipedia.org/wiki/Cross-origin_resource_sharing' },
      { '@type': 'Thing', name: 'Pagination', sameAs: 'https://en.wikipedia.org/wiki/Pagination' },
    ],
    faq: [
      {
        q: 'Should frontend developers learn backend development?',
        a: 'Enough to ask useful questions. Understanding pagination, server-side filtering, validation, authorization and asynchronous processing lets a frontend developer request the right API change instead of building fragile workarounds in the UI. They don’t need to become backend specialists.',
      },
      {
        q: 'Should backend developers learn frontend development?',
        a: 'Enough to design payloads the UI can use and to investigate problems in the browser. Knowing how a screen renders data helps a backend developer choose the right fields, consistent names and formats, clear null rules and field-level errors. Knowing the network panel, CORS and cookies helps them narrow down issues without owning the frontend.',
      },
      {
        q: 'Why does an API return 200 but the browser shows an error?',
        a: 'Often because of cross-origin resource sharing (CORS). The server handled the request, but the browser won’t give the response to the page without the right headers for that origin. The browser’s network panel and console show the preflight request and the missing headers.',
      },
      {
        q: 'Should validation happen on the frontend or the backend?',
        a: 'Both, for different reasons. Frontend validation gives users faster feedback. The server’s validation is authoritative, because the browser can’t be trusted to enforce business rules or access control.',
      },
    ],
  },
  {
    slug: 'api-architecture-lessons',
    no: '669',
    title: 'API Architecture: What Building and Operating Real Systems Has Taught Me',
    seoTitle: 'API Architecture Lessons From Real Systems — Ka Lun Chan',
    description:
      'API architecture beyond endpoints: consumers, REST vs GraphQL vs gRPC, contracts, object-level authorization, idempotent retries, operations and cost.',
    dek:
      'Endpoints are the visible part of an API. Ownership, contracts, authorization, failure behavior and operations decide whether it’s still useful two years later.',
    summary:
      'Designing for consumers and workflows, choosing REST, GraphQL or gRPC, boundaries and ownership, backward compatibility, object-level authorization, idempotent retries, asynchronous work, performance, operations, cost and a decision checklist.',
    topics: ['Architecture', 'Leadership'],
    related: [
      { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'Event-driven architecture with Kafka: the tradeoffs' },
      { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
      { to: '/work/public-service-modernization/', label: 'Case study: modernizing a public-sector service' },
      { to: '/writing/specialization-beyond-your-own-code/', label: 'Depth in one area, enough breadth to investigate' },
      { to: '/writing/network-security-before-devsecops/', label: 'Where my authorization habits come from: router ACLs' },
      { to: '/writing/building-federal-government-applications/', label: 'What federal applications demand of authorization and audit' },
    ],
    minutes: 8,
    published: '2026-10-07',
    modified: '2026-10-07',
    keywords: [
      'API architecture',
      'API design best practices',
      'REST vs GraphQL vs gRPC',
      'API backward compatibility',
      'broken object level authorization',
      'JWT authorization',
      'idempotency key',
      'backend for frontend',
      'API cost',
    ],
    about: [
      { '@type': 'Thing', name: 'Application programming interface', sameAs: 'https://en.wikipedia.org/wiki/API' },
      { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'REST', sameAs: 'https://en.wikipedia.org/wiki/REST' },
      { '@type': 'Thing', name: 'GraphQL', sameAs: 'https://en.wikipedia.org/wiki/GraphQL' },
      { '@type': 'SoftwareApplication', name: 'gRPC', sameAs: 'https://en.wikipedia.org/wiki/GRPC' },
      { '@type': 'Thing', name: 'JSON Web Token', sameAs: 'https://en.wikipedia.org/wiki/JSON_Web_Token' },
      { '@type': 'Thing', name: 'OWASP API Security Top 10', url: 'https://api-security.owasp.org/' },
    ],
    faq: [
      {
        q: 'Should I use REST, GraphQL or gRPC?',
        a: 'Choose from the consumers’ needs. REST suits public, partner and browser APIs and works well with HTTP caching. GraphQL suits front ends that combine many data sources. gRPC suits high-volume internal service calls. Team familiarity and operational tooling matter as much as the style itself.',
      },
      {
        q: 'Does a valid JWT mean a user can access a record?',
        a: 'No. A valid JWT authenticates the caller. The API still has to check, on every request, that this caller may perform this action on this specific record, including tenant and ownership checks. Missing those checks is broken object level authorization, first on the OWASP API Security Top 10.',
      },
      {
        q: 'How do you make API retries safe?',
        a: 'Use idempotency. The client sends a unique key with a create or payment request, and the server stores the result under that key, so a retry after a timeout returns the original result instead of creating a duplicate.',
      },
    ],
  },
  {
    slug: 'event-driven-architecture-kafka-tradeoffs',
    no: '668',
    title: 'Event-Driven Architecture with Kafka: Should Systems React to Events Instead of Calling Each Other Directly?',
    seoTitle: 'Event-Driven Architecture with Kafka: Tradeoffs — Ka Lun Chan',
    description:
      'When to use direct calls, a simple queue or Kafka: event-driven tradeoffs, the outbox pattern, exactly-once limits and the real cost of running Kafka.',
    dek:
      'Event-driven architecture changes how systems coordinate, how failures show up and who carries the operational load. Kafka can support it, but the decision needs a concrete business benefit and an honest look at the cost.',
    summary:
      'When to call directly and when to publish, facts versus commands, topics, partitions and replay, eventual consistency, the dual-write problem and outbox, what exactly-once covers, coupling through events, the total cost of Kafka, and a leadership checklist.',
    topics: ['Architecture', 'Leadership'],
    related: [
      { to: '/work/event-driven-platform/', label: 'Case study: event-driven microservices with Kafka' },
      { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether a microservice should be a microservice' },
      { to: '/writing/team-size-should-influence-architecture/', label: 'Why a small team shouldn’t build like a large one' },
      { to: '/writing/api-architecture-lessons/', label: 'API architecture: what real systems have taught me' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'Kafka is also a team: architecture as an operating expense' },
    ],
    minutes: 8,
    published: '2026-10-07',
    modified: '2026-10-07',
    keywords: [
      'event-driven architecture',
      'Kafka vs REST API',
      'when to use Kafka',
      'Kafka cost',
      'managed vs self-managed Kafka',
      'transactional outbox pattern',
      'idempotent consumer',
      'Kafka exactly once',
      'event vs command',
      'event-driven architecture vs event sourcing',
    ],
    about: [
      { '@type': 'Thing', name: 'Event-driven architecture', sameAs: 'https://en.wikipedia.org/wiki/Event-driven_architecture' },
      { '@type': 'SoftwareApplication', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Eventual consistency', sameAs: 'https://en.wikipedia.org/wiki/Eventual_consistency' },
      { '@type': 'Thing', name: 'Idempotence', sameAs: 'https://en.wikipedia.org/wiki/Idempotence' },
      { '@type': 'Thing', name: 'Event sourcing', url: 'https://martinfowler.com/eaaDev/EventSourcing.html' },
      { '@type': 'SoftwareApplication', name: 'Amazon MSK', url: 'https://aws.amazon.com/msk/' },
      { '@type': 'SoftwareApplication', name: 'Confluent Cloud', url: 'https://www.confluent.io/confluent-cloud/' },
    ],
    faq: [
      {
        q: 'When should I use Kafka instead of direct API calls?',
        a: 'Use a direct call when the caller needs an immediate answer. Use Kafka when several independent consumers need to react to the same events, when you need retained history or replay, and when the team can operate the resulting lag, duplicates and schema changes. For a single background task, a simpler queue is often enough.',
      },
      {
        q: 'What is the transactional outbox pattern?',
        a: 'The service writes its business change and an outbox record in the same database transaction. A separate relay publishes outbox records to Kafka and retries until it succeeds, so a saved change is never left without its event.',
      },
      {
        q: 'Does Kafka exactly-once mean my side effects happen once?',
        a: 'No. Kafka’s exactly-once features cover reading from and writing to Kafka within a transaction. Sending an email, charging a payment or writing to another database still needs idempotency keys and careful consumer design.',
      },
      {
        q: 'Is event-driven architecture the same as event sourcing?',
        a: 'No. Event-driven architecture uses events to let systems react to each other. Event sourcing stores every state change as an event and rebuilds state from that history. You can use Kafka for events while a regular database stays the source of truth.',
      },
    ],
  },
  {
    slug: 'should-it-be-a-microservice',
    no: '667',
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
      { to: '/writing/team-size-should-influence-architecture/', label: 'Team size and architecture: matching one to the other' },
      { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'What different systems taught me about software architecture' },
      { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'Event-driven architecture with Kafka: the tradeoffs' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'What every extra service costs to run, every month' },
    ],
    minutes: 16,
    published: '2026-10-07',
    modified: '2026-10-07',
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
    slug: 'open-source-voip-distributed-systems-lessons',
    no: '666',
    title: 'What Open Source VoIP Taught Me About Distributed Systems Before We Called Them Distributed Systems',
    seoTitle: 'Open Source VoIP Lessons on Distributed Systems — Ka Lun Chan',
    description:
      'Asterisk, OpenSIPS, Python AGI, billing and geolocation routing: what VoIP taught me about partial failure, retries, idempotency and reconciliation.',
    dek:
      'Partial failure, routing, retries and records that had to reconcile were everyday VoIP problems. Working with Asterisk, OpenSIPS, Python AGI and billing taught me the questions I still ask before choosing any architecture.',
    summary:
      'How signaling, call handling, AGI business logic and billing split one call across boundaries, a hypothetical double-charge failure, routing as a business decision, why retries need context, reconciliation, and what modern tools do and don’t change.',
    topics: ['Architecture'],
    related: [
      { to: '/writing/founding-a-startup-isnt-easy/', label: 'What being every department at once taught me' },
      { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Architecture lessons that held up across very different systems' },
      { to: '/writing/team-size-should-influence-architecture/', label: 'How many services can your team actually run?' },
      { to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder story: from an idea to an acquisition' },
      { to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/', label: 'The same problems with a radio in someone’s pocket: VoIP on Nokia phones' },
      { to: '/writing/data-driven-engineering-network-voip-publishing/', label: 'Routing on call statistics: the data-to-decision loop' },
    ],
    minutes: 7,
    published: '2026-10-07',
    modified: '2026-10-07',
    keywords: [
      'VoIP distributed systems',
      'Asterisk OpenSIPS architecture',
      'Python AGI',
      'VoIP billing idempotency',
      'partial failure',
      'idempotency example',
      'SIP signaling vs media',
      'geolocation call routing',
    ],
    about: [
      { '@type': 'Thing', name: 'Distributed computing', sameAs: 'https://en.wikipedia.org/wiki/Distributed_computing' },
      { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'Asterisk', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
      { '@type': 'SoftwareApplication', name: 'OpenSIPS', url: 'https://opensips.org/' },
      { '@type': 'Thing', name: 'Session Initiation Protocol', sameAs: 'https://en.wikipedia.org/wiki/Session_Initiation_Protocol' },
      { '@type': 'Thing', name: 'Call detail record', sameAs: 'https://en.wikipedia.org/wiki/Call_detail_record' },
      { '@type': 'Thing', name: 'Idempotence', sameAs: 'https://en.wikipedia.org/wiki/Idempotence' },
    ],
    faq: [
      {
        q: 'What is partial failure in a distributed system?',
        a: 'Partial failure is when some components work while others fail or time out. In VoIP, a call can connect and sound fine while the billing update for it fails, so “the system is up” doesn’t mean every outcome the business needs happened.',
      },
      {
        q: 'What is idempotency in billing?',
        a: 'Idempotency means running an operation more than once has the same result as running it once. In billing, each charge is keyed to a unique identifier for the call, so a retried or replayed event finds the charge already recorded instead of charging the customer twice.',
      },
      {
        q: 'What is the difference between SIP signaling and media?',
        a: 'SIP signaling carries the messages that set up, change and end a call. The media, the audio itself, usually travels separately over RTP and can take a different path, which is why a call can be set up correctly and still have audio problems.',
      },
    ],
  },
  {
    slug: 'software-architecture-lessons-from-different-systems',
    no: '665',
    title: 'Software Architecture Through the Years: What Different Systems Taught Me',
    seoTitle: 'Software Architecture Lessons, VoIP to Kafka — Ka Lun Chan',
    description:
      'What VoIP, publishing, monoliths, microservices and Kafka taught me about software architecture, and why the right choice depends on the problem and the team.',
    dek:
      'Telecom, publishing, monoliths, microservices and Kafka each taught me the same thing from a different side: the right architecture depends on the problem, and every choice leaves your team something to operate.',
    summary:
      'Telecom and the whole call path, publishing and business-shaped architecture, the case for monoliths, what microservices and Kafka really cost, how team size changes the answer, and why boring architecture often wins.',
    topics: ['Architecture', 'Leadership', 'Engineering judgment'],
    related: [
      { to: '/writing/should-it-be-a-microservice/', label: 'Should it be a microservice? How I decide' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'From Expect scripts to AI agents: how DevOps changed' },
      { to: '/writing/what-publishing-taught-me-about-seo-aeo-geo/', label: 'What being a CTO in publishing taught me about SEO' },
      { to: '/work/event-driven-platform/', label: 'Case study: event-driven microservices with Kafka' },
      { to: '/writing/team-size-should-influence-architecture/', label: 'Architecture decisions that depend on headcount' },
      { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open source VoIP taught me about distributed systems' },
      { to: '/writing/network-security-before-devsecops/', label: 'Security as a thread through every system' },
      { to: '/writing/forward-engineering-isnt-new/', label: 'Forward engineering isn’t new' },
    ],
    minutes: 11,
    published: '2026-10-07',
    modified: '2026-10-07',
    keywords: [
      'software architecture lessons',
      'monolith vs microservices',
      'are monoliths bad',
      'microservices tradeoffs',
      'event-driven architecture tradeoffs',
      'Kafka tradeoffs',
      'architecture and team size',
      'boring architecture',
      'engineering leadership architecture decisions',
    ],
    about: [
      { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
      { '@type': 'Thing', name: 'Microservices', sameAs: 'https://en.wikipedia.org/wiki/Microservices' },
      { '@type': 'Thing', name: 'Engineering leadership' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
      { '@type': 'Thing', name: 'Session Initiation Protocol', sameAs: 'https://en.wikipedia.org/wiki/Session_Initiation_Protocol' },
      { '@type': 'Thing', name: 'Event-driven architecture', sameAs: 'https://en.wikipedia.org/wiki/Event-driven_architecture' },
      { '@type': 'SoftwareApplication', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
      { '@type': 'Thing', name: 'Conway’s law', sameAs: 'https://en.wikipedia.org/wiki/Conway%27s_law' },
    ],
    faq: [
      {
        q: 'Are monoliths bad?',
        a: 'No. A well-designed monolith is often the most productive choice for a small team or a new product: one deployment, simple transactions, easy debugging and local development. Monoliths become a problem when the boundaries inside them disappear and every change touches everything else.',
      },
      {
        q: 'What do microservices actually cost?',
        a: 'Microservices move complexity from inside one application onto the network. Teams take on service discovery, API contracts, retries, timeouts, idempotency, distributed tracing, schema evolution, deployment coordination and eventual consistency, plus a pipeline, logs and monitoring for every service.',
      },
      {
        q: 'What are the tradeoffs of event-driven architecture with Kafka?',
        a: 'Kafka lets producers publish events without knowing every consumer, which loosens coupling. In exchange, teams have to handle duplicate and out-of-order messages, failed processing, schema evolution, replays and debugging transactions that cross several services asynchronously.',
      },
      {
        q: 'How does team size affect software architecture?',
        a: 'Architecture has an organizational cost. A six-person team running twenty microservices has to operate twenty pipelines and monitor twenty things that can fail. When thirty engineers keep blocking each other in one application, clearer service boundaries can give them real independence.',
      },
      {
        q: 'How should you choose a software architecture?',
        a: 'Start with the constraints, not the technology: what you’re building, who uses it, traffic, rate of change, what must scale, reliability requirements and what the team can realistically operate. Then pick the least complicated system that solves the problem and can evolve with the business.',
      },
    ],
  },
  {
    slug: 'devops-from-expect-scripts-to-ai-agents',
    no: '663',
    title: 'From Expect Scripts to AI Agents: How DevOps Changed During My Career',
    seoTitle: 'How DevOps Changed: Expect Scripts to AI Agents — Ka Lun Chan',
    description:
      'From Expect and ksh scripts in a NOC to Terraform, Kubernetes and AI agents: how DevOps changed, whether AI can automate it, and where to draw the line.',
    dek:
      'I started out writing Expect scripts that pretended to be a human operator. Now AI agents can reason about the work an operator does. The tools changed almost completely. The engineering problem underneath them barely moved.',
    summary:
      'Expect and ksh in a NOC, what that taught me about operations, how Jenkins, Docker, Terraform and Kubernetes standardized the work, what AI can automate in DevOps now, the guardrails I’d insist on, and the skills that outlast every tool.',
    topics: ['Learning', 'AI', 'Architecture'],
    related: [
      { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'What VoIP, publishing, SaaS and government systems had in common' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'Syntax is cheap to retrieve. Understanding isn’t.' },
      { to: '/work/carrier-capacity/', label: 'Case study: capacity planning across 2,000+ collocations' },
      { to: '/writing/building-software-before-and-after-ai/', label: 'I used to build everything myself, then with AI' },
      { to: '/writing/network-security-before-devsecops/', label: 'The security story from the same carrier network' },
      { to: '/writing/from-dos-to-ai-thirty-years-of-technology/', label: 'From DOS to AI: thirty years of technology, as a user and a builder' },
      { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning, from the same carrier network to the cloud' },
      { to: '/writing/building-an-ai-job-search-agent-with-hermes/', label: 'An agent on a VPS: cron, state and a Telegram report' },
      { to: '/writing/talking-to-ai-in-a-terminal/', label: 'Expect’s descendant: the AI assistant in my terminal' },
    ],
    minutes: 13,
    published: '2026-10-07',
    modified: '2026-10-07',
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
  },
  {
    slug: 'team-size-should-influence-architecture',
    no: '662',
    title: 'Your Team Size Should Influence Your Architecture',
    seoTitle: 'How Team Size Should Shape Software Architecture — Ka Lun Chan',
    description:
      'Every architecture creates work a team has to carry. How team size, ownership and on-call coverage should shape the choice between a modular monolith and services.',
    dek:
      'An architecture diagram doesn’t show who gets paged when an arrow stops working. The right design meets the business’s needs and leaves the team with work it can carry.',
    summary:
      'The ongoing cost of every service, a hypothetical five-person team weighing twelve services, the modular monolith as a deliberate choice, when separation earns its cost, and the triggers that should reopen the decision.',
    topics: ['Architecture', 'Leadership'],
    related: [
      { to: '/writing/should-it-be-a-microservice/', label: 'The questions I ask before splitting out a service' },
      { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'The architecture lessons I keep reusing' },
      { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'From Expect scripts to AI agents: how DevOps changed' },
      { to: '/writing/hidden-cost-of-software-architecture/', label: 'The hidden cost of software architecture' },
    ],
    minutes: 6,
    published: '2026-10-07',
    modified: '2026-10-07',
    keywords: [
      'team size and software architecture',
      'microservices for small teams',
      'how many microservices for a small team',
      'modular monolith',
      'Conway’s law',
      'architecture decision checklist',
      'engineering leadership architecture',
    ],
    about: [
      { '@type': 'Thing', name: 'Software architecture', sameAs: 'https://en.wikipedia.org/wiki/Software_architecture' },
      { '@type': 'Thing', name: 'Microservices', sameAs: 'https://en.wikipedia.org/wiki/Microservices' },
      { '@type': 'Thing', name: 'Engineering leadership' },
    ],
    faq: [
      {
        q: 'Should a small team use microservices?',
        a: 'Usually only for a few specific parts of the system. A small team carries every service’s deployments, monitoring, upgrades and on-call. Extract a service when it solves a named problem, such as independent scaling, security isolation or a team ready to own it, and keep the rest in a well-structured application.',
      },
      {
        q: 'What is a modular monolith?',
        a: 'A modular monolith is one deployable application with firm internal boundaries. Each module owns its data and exposes a small interface, which keeps operations simple and makes it easier to extract a service later if the evidence calls for it.',
      },
      {
        q: 'When should a team move from a monolith to services?',
        a: 'When observable problems appear: releases waiting on unrelated changes, one workload affecting everything else, repeated incidents in one area, a compliance boundary, or a team ready to own a domain long term. Headcount alone is not a good trigger.',
      },
    ],
  },
  {
    slug: 'what-publishing-taught-me-about-seo-aeo-geo',
    no: '661',
    title: 'What Being a CTO in Publishing Taught Me About SEO, and Why AEO and GEO Matter Now',
    seoTitle: 'What CTOs Should Know About SEO, AEO and GEO — Ka Lun Chan',
    description:
      'What being CTO of a publishing platform taught me about SEO, technical SEO and social distribution, and what I’m learning now about AEO and GEO.',
    dek:
      'Publishing taught me that a technically good website is only part of the job. If nobody discovers the content, the technology behind it doesn’t matter very much. Now AI is changing how people discover things again.',
    summary:
      'Content as product and channel, search intent, technical SEO as engineering work, decisions that cost traffic without anyone noticing, social cards, measuring more than traffic, and what I’m learning about AEO and GEO.',
    topics: ['Leadership', 'Learning', 'AI'],
    related: [
      { to: '/work/publishing-distribution/', label: 'Case study: making a publishing platform compete on distribution' },
      { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why experienced developers still Google things' },
      { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Software architecture lessons from different systems' },
      { to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/', label: 'The business side: AdSense, affiliate networks and the publishing revenue engine' },
    ],
    minutes: 12,
    published: '2026-10-07',
    modified: '2026-10-07',
    keywords: [
      'CTO lessons',
      'what CTOs should know about SEO',
      'engineering leadership and SEO',
      'technical SEO for engineering leaders',
      'SEO AEO GEO',
      'Answer Engine Optimization',
      'Generative Engine Optimization',
      'engineering and content marketing',
      'site migration SEO',
      'publishing platform engineering',
    ],
    about: [
      { '@type': 'Thing', name: 'Search engine optimization', alternateName: 'SEO', sameAs: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
      { '@type': 'Thing', name: 'Answer engine optimization', alternateName: 'AEO' },
      { '@type': 'Thing', name: 'Generative engine optimization', alternateName: 'GEO', sameAs: 'https://en.wikipedia.org/wiki/Generative_engine_optimization' },
      { '@type': 'Thing', name: 'Engineering leadership' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Content marketing', sameAs: 'https://en.wikipedia.org/wiki/Content_marketing' },
      { '@type': 'Thing', name: 'Social media optimization', sameAs: 'https://en.wikipedia.org/wiki/Social_media_optimization' },
      { '@type': 'Thing', name: 'Open Graph protocol', url: 'https://ogp.me/' },
      { '@type': 'Thing', name: 'Core Web Vitals', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
    ],
    // Rendered at the end of the post and emitted as JSON-LD citations.
    sources: [
      { label: 'Google Search Central: Creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Google Search Central: Site moves with URL changes', url: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes' },
      { label: 'Google Search Central: Consolidate duplicate URLs (canonicalization)', url: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls' },
      { label: 'Google Search Central: JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' },
      { label: 'Google Search Central: Core Web Vitals', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
      { label: 'Google Search Central: AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
      { label: 'The Open Graph protocol', url: 'https://ogp.me/' },
      { label: 'Aggarwal et al., GEO: Generative Engine Optimization (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
    ],
    faq: [
      {
        q: 'What should a CTO know about SEO?',
        a: 'Enough to recognize when an engineering decision helps or hurts discovery. URL changes, redirects, canonical URLs, rendering, page speed, information architecture and structured data are all decided in engineering, and each one can affect years of accumulated search traffic. A CTO doesn’t need to be the SEO specialist, but should bring that expertise in before a release, not after traffic drops.',
      },
      {
        q: 'How can engineering decisions hurt organic traffic?',
        a: 'Changing URLs without redirects, rendering content only with client-side JavaScript, redesigns that remove headings or internal links, poor information architecture, slow pages and deleting old pages that still earn links and traffic can all reduce how often a site is found in search.',
      },
      {
        q: 'What is the difference between SEO, AEO and GEO?',
        a: 'SEO (search engine optimization) helps search engines crawl, understand and rank pages. AEO (answer engine optimization) structures content so search features and AI assistants can extract a direct answer. GEO (generative engine optimization) makes content and the entities behind it easy for generative AI systems to understand, trust and cite.',
      },
      {
        q: 'Is SEO dead because of AI search?',
        a: 'No. AEO and GEO expand the problem rather than replace SEO. AI systems still depend on crawlable, technically healthy, trustworthy pages, and Google says the same SEO best practices apply to its AI features. What changes is that discovery is no longer only about earning a blue link.',
      },
      {
        q: 'How do you make content that AI systems can cite?',
        a: 'Answer real questions directly, write passages that make sense on their own, support claims with first-hand experience, evidence and sources, use clear headings and structured data that match the visible page, keep pages fast and server-rendered, and connect related pages with meaningful internal links.',
      },
      {
        q: 'What did Ka Lun Chan learn as CTO of a publishing platform?',
        a: 'Ka Lun Chan (KC) learned that discovery is part of the product. As CTO of a media publishing platform, he moved distribution into the platform itself: structured content, fast cached rendering, and metadata for search engines and social cards. Organic traffic, social traffic and social engagement each grew 50%.',
      },
    ],
  },
  {
    slug: 'organizing-berkeley-omnium-leadership-lessons',
    no: '660',
    title: 'What Organizing Berkeley Omnium Taught Me About Leading Teams',
    seoTitle: 'Berkeley Omnium Lessons for Leading Teams — Ka Lun Chan',
    description:
      'What organizing the Berkeley Omnium with a volunteer team taught me about leading engineering teams: shared purpose, ownership, scope and handoffs.',
    dek:
      'Berkeley Omnium is a team effort. Organizing it with volunteers, clubs, sponsors and partners has reinforced what I believe about leading engineering teams: people need a clear purpose, realistic commitments, ownership and support.',
    summary:
      'Shared purpose, volunteer time as a real constraint, naming an owner, letting the race date decide scope, why finished tasks don’t make a ready event, and the work that continues after the finish.',
    topics: ['Leadership', 'Community', 'Cycling'],
    related: [
      { to: '/writing/what-cycling-taught-me-about-engineering-leadership/', label: 'What cycling taught me about engineering leadership' },
      { to: '/community/', label: 'Berkeley Omnium: the races and the community behind them' },
      { to: '/writing/when-everything-is-a-priority/', label: 'What constant priority changes cost an engineering team' },
      { to: '/writing/fitness-journey-training-smarter/', label: 'What three sports taught me about discipline and leading' },
    ],
    minutes: 6,
    published: '2026-10-06',
    modified: '2026-10-06',
    keywords: [
      'Berkeley Omnium',
      'organizing a bike race',
      'leading volunteer teams',
      'engineering leadership lessons',
      'ownership and accountability in teams',
      'NICA fundraising',
      'community event leadership',
    ],
    mentions: [{ '@id': cycling.omnium + '#subject' }, { '@id': cycling.club + '#club' }],
    faq: [
      {
        q: 'How much has the Berkeley Omnium raised for NICA teams?',
        a: 'Berkeley Omnium events raised $21,000 for NICA teams in 2025 and $28,610 for six NICA teams in 2026. Those results come from the combined work of the organizing committee, volunteers, clubs, sponsors, community partners and racers.',
      },
      {
        q: 'What does organizing a community event teach about engineering leadership?',
        a: 'That people need a clear purpose, realistic commitments, a named owner for each piece of work and support when things slip. A fixed event date also forces honest scope decisions, and individually finished tasks don’t guarantee the whole thing works together.',
      },
      {
        q: 'How do you lead a volunteer team with limited time?',
        a: 'Make clear, bounded requests, size responsibilities to the time people actually have, set realistic deadlines, and protect the standards that matter by reducing scope or sharing roles rather than asking people for more time than they have.',
      },
      {
        q: 'Why don’t completed tasks guarantee a ready release?',
        a: 'Because the risk often sits between tasks. Each piece can be finished and tested on its own while the handoff between two pieces has no owner. Testing the whole path early, and making it easy for people to raise concerns, catches those gaps before launch day.',
      },
    ],
  },
  {
    slug: 'what-cycling-taught-me-about-engineering-leadership',
    no: '659',
    title: 'What Cycling Taught Me About Engineering Leadership',
    seoTitle: 'Engineering Leadership Lessons from Cycling — Ka Lun Chan',
    description:
      'Pacing, pacelines, preparation and mentoring junior riders: what cycling and organizing the Berkeley Omnium taught me about leading engineering teams.',
    dek:
      'Cycling comes down to judgment about effort: when to push, when to recover, when to support someone else, and when to change the plan. Leading engineering teams involves the same decisions.',
    summary:
      'Sustainable pace, riding predictably in a group, taking a turn at the front, preparing for changing conditions, meeting junior riders where they are and leading volunteers without authority, plus where the analogy breaks down.',
    topics: ['Leadership', 'Cycling', 'Community'],
    related: [
      { to: '/mentorship/', label: 'Mentoring engineers and junior riders' },
      { to: '/writing/berkeley-omnium-new-website-next-generation/', label: 'Berkeley Omnium: a new website and the next generation of racers' },
      { to: '/writing/when-everything-is-a-priority/', label: 'Leading engineering through constant change' },
      { to: '/writing/first-bike-races-novice-race-reports/', label: 'Race reports from my first three bike races' },
      { to: '/writing/fitness-journey-training-smarter/', label: 'Strength, Spartan and cycling: getting better means training smarter' },
      { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring engineers and junior riders' },
    ],
    minutes: 7,
    published: '2026-10-06',
    modified: '2026-10-06',
    keywords: [
      'engineering leadership lessons',
      'leadership lessons from cycling',
      'sustainable pace for engineering teams',
      'mentoring engineers',
      'mentoring junior cyclists',
      'leading without authority',
      'teamwork in cycling',
      'Berkeley Omnium',
    ],
    // Defined on /community/; referenced here so the post joins the same entity graph.
    mentions: [{ '@id': cycling.omnium + '#subject' }, { '@id': cycling.club + '#club' }],
    faq: [
      {
        q: 'What can engineering leaders learn from cycling?',
        a: 'Mostly judgment about effort: when to push and when to recover, how predictable behavior lets a group of strong individuals work together, when to take the hardest work yourself and when to hand it to someone else, and how preparation creates options when conditions change.',
      },
      {
        q: 'What does sustainable pace mean for an engineering team?',
        a: 'Planning for the capacity a team can hold over time, including maintenance, learning, unplanned work and recovery, instead of running every sprint as a deadline push. A team at a sustainable pace still has reserve when real urgency arrives.',
      },
      {
        q: 'How do you lead people who don’t report to you?',
        a: 'With a shared goal and follow-through. Make the goal and each person’s part in it explicit, and keep small commitments so people trust the big ones. Ka Lun Chan applies the same approach to cross-team engineering work and to helping organize the Berkeley Omnium with volunteers and partners.',
      },
      {
        q: 'How is engineering leadership different from leading a cycling team?',
        a: 'Engineering effort is less predictable and progress is less visible. A small-looking task can hide a week of complexity, important work like reducing risk often can’t be seen, and an overloaded engineer can struggle for weeks before it shows, so leaders have to check in and watch signals directly.',
      },
    ],
  },
  {
    slug: 'engineering-work-nobody-needed',
    no: '658',
    title: 'The Most Expensive Engineering Work Is Work Nobody Needed',
    seoTitle: 'The Real Cost of Building Features Nobody Needs — Ka Lun Chan',
    description:
      'Shipping on time doesn’t prove the work was worth building. How I question requests, test the need first, and weigh what unneeded features cost after launch.',
    dek:
      'A team can execute perfectly and still deliver something that didn’t deserve the investment. The build is only the first cost: work nobody needed keeps consuming maintenance, support and capacity long after launch.',
    summary:
      'Why on-time delivery doesn’t prove value, how unneeded features get built, separating a request from the real need, three hypothetical examples, and eight questions to ask before committing a team.',
    topics: ['Leadership', 'Engineering judgment', 'Delivery'],
    related: [
      { to: '/writing/when-everything-is-a-priority/', label: 'Leading engineering through constant change' },
      { to: '/writing/should-it-be-a-microservice/', label: 'When a microservice is really a distributed monolith' },
      { to: '/leadership/#ambiguity', label: 'Turning ambiguity into executable work' },
    ],
    minutes: 8,
    published: '2026-10-06',
    modified: '2026-10-06',
    keywords: [
      'building features nobody needs',
      'cost of unnecessary features',
      'how to decide what to build',
      'engineering opportunity cost',
      'how to push back on feature requests',
      'validate customer demand before building',
      'feature bloat',
      'engineering capacity',
      'AI and engineering prioritization',
      'engineering leadership',
    ],
    faq: [
      {
        q: 'What does unnecessary engineering work cost?',
        a: 'More than the build. A feature nobody needed still has to be maintained, upgraded, supported and monitored for as long as it exists, and it makes nearby changes slower and riskier. The largest cost is the more important work the team didn’t do instead.',
      },
      {
        q: 'How do you avoid building features nobody needs?',
        a: 'Separate the request from the proposed solution and the underlying need, ask what evidence shows the problem matters, test the need in the smallest way possible, and agree before launch what result would make you continue, change direction or stop.',
      },
      {
        q: 'How should engineers push back on a feature request?',
        a: 'Ask about the outcome before the solution, with questions such as “What outcome are we trying to change?” and “Could we test this before committing a team?”, and offer a smaller first step instead of a refusal. Engineering leaders need to make those questions safe to ask.',
      },
      {
        q: 'Is a failed experiment wasted engineering work?',
        a: 'Not if it had a clear hypothesis, success criteria and an end date. An experiment that comes back “no” has done its job. The waste comes from experiments nobody can judge, or ones that become permanent features without a decision.',
      },
      {
        q: 'Does AI make deciding what to build more important?',
        a: 'Yes. AI makes code cheaper to produce, but maintenance, support and operational complexity don’t shrink with it. As building gets faster, deciding what deserves to be built has a larger effect on the outcome.',
      },
    ],
  },
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
      { to: '/writing/you-dont-need-to-remember-everything/', label: 'What to actually keep in your head as an engineer' },
      { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'Another how-to: a Hermes agent on a VPS, from VS Code' },
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
      { to: '/writing/founding-a-startup-isnt-easy/', label: 'What being every department at once taught me' },
      { to: '/experience/#communications', label: 'Co-founder and CTO: the problem, decisions and outcome' },
      { to: '/work/three-continent-platform/', label: 'Case study: one data center to three continents' },
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
      { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'What designing for our customers taught me about UX' },
      { to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/', label: 'Building VoIP apps for the Nokia phones our customers carried' },
      { to: '/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/', label: 'What paying the infrastructure bill taught me as a founder' },
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
      'Sprint carryover is a signal about the system around a team. How I read it by cause: estimation, scope changes, blockers, support load and shifting priorities.',
    dek:
      'Carryover is a symptom, not a diagnosis. The same number can mean bad estimates, hidden dependencies, an unreliable system or a leadership team that keeps changing its mind, and each one needs a different fix.',
    summary:
      'The six causes behind most sprint carryover, what each one is telling you, how to record the reason instead of just the number, and the common fixes that make the number look better without improving delivery.',
    topics: ['Delivery', 'Leadership', 'Engineering judgment'],
    related: [
      { to: '/writing/when-everything-is-a-priority/', label: 'Why “everything is urgent” means nothing gets finished' },
      { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller stories, smaller pull requests, smaller releases' },
      { to: '/writing/good-teams-dont-expect-everyone-to-know-everything/', label: 'Why good teams don’t expect everyone to know everything' },
      { to: '/leadership/#risk', label: 'How I reduce delivery risk early' },
      { to: '/writing/should-it-be-a-microservice/', label: 'When team boundaries are in the wrong place: deciding on microservices' },
      { to: '/writing/fast-paced-vs-changing-priorities/', label: 'When Scrum stops fitting the rate of change' },
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
      'Priorities change, and a good engineering organization needs to respond. It becomes a problem when an organization pretends that changing priorities has no cost.',
    summary:
      'What a priority change really costs a team, why constant change leads to more half-finished work, how to make the tradeoff explicit, and the five things I make clear every time priorities shift.',
    topics: ['Leadership', 'Delivery', 'Engineering judgment'],
    related: [
      { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is actually telling a team' },
      { to: '/leadership/#cross-functional', label: 'How I work across product, QA and leadership' },
      { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
      { to: '/writing/fast-paced-vs-changing-priorities/', label: 'Fast-paced doesn’t mean constantly changing priorities' },
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
    slug: 'berkeley-omnium-new-website-next-generation',
    no: '652',
    title: '2027 Berkeley Omnium: A New Website and Building the Next Generation of Cyclists',
    // Used where the post is recommended from other pages; event years stay on this route only.
    shortTitle: 'Berkeley Omnium: A New Website and the Next Generation of Cyclists',
    teaser: 'Why I built the new berkeleyomnium.com, what bike racing teaches young riders, and how sponsors can support the Omnium and youth cycling.',
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
      { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'How I design screens now, with AI in the loop' },
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
      { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Why I started building my own developer tools' },
      { to: '/writing/should-it-be-a-microservice/', label: 'How I decide whether a microservice should actually be a microservice' },
      { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
      { to: '/leadership/', label: 'How I lead engineering teams' },
      { to: '/writing/building-software-before-and-after-ai/', label: 'How I build with AI, and what hasn’t changed' },
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
        a: 'No. Syntax is easy to retrieve and changes often. It matters more to understand how the system works, so you know what to look for and can spot when something is wrong.',
      },
      {
        q: 'What should software engineers focus on learning?',
        a: 'Fundamentals that carry across tools: data and databases, networking, concurrency, failure handling, security basics and debugging. As you grow more senior, add architecture, delivery, communication and tradeoffs.',
      },
      {
        q: 'Does AI make fundamentals less important?',
        a: 'No. AI makes it faster to retrieve information and generate code, but you still need to ask the right questions, validate the output, catch wrong assumptions and decide whether a solution fits your system. Understanding matters more, not less.',
      },
    ],
  },
  {
    slug: 'first-bike-races-novice-race-reports',
    no: '650',
    title: 'My First Three Bike Races: Race Reports From a Novice Season',
    seoTitle: 'My First Bike Races: Novice Race Reports — Ka Lun Chan',
    description:
      'Race reports from my first three bike races: the Livermore and Cherry Pie criteriums and the Snelling Road Race, plus what I learned as a novice racer.',
    dek:
      'Three novice races: a crit where my cornering kept putting me on the front, a well-marshalled course I loved, and a road race where I lost track of the finish. Plus the club members and coaches who got me to the start.',
    summary:
      'How I got from struggling on club rides to a start line, race reports from the Livermore Criterium, Cherry Pie Criterium and Snelling Road Race, and the lessons I took from them.',
    topics: ['Cycling'],
    related: [
      { to: '/writing/what-cycling-taught-me-about-engineering-leadership/', label: 'What cycling taught me about engineering leadership' },
      { to: '/writing/organizing-berkeley-omnium-leadership-lessons/', label: 'What organizing Berkeley Omnium taught me about leading teams' },
      { to: '/community/', label: 'The Berkeley Omnium race weekend' },
      { to: '/writing/fitness-journey-training-smarter/', label: 'The longer fitness story, including the comebacks' },
    ],
    minutes: 6,
    published: '2023-02-13',
    modified: '2026-10-07',
    keywords: [
      'novice bike race report',
      'first criterium race',
      'Livermore Criterium',
      'Cherry Pie Criterium',
      'Snelling Road Race',
      'first bike race tips',
      'Berkeley Bicycle Club',
    ],
    about: [
      { '@type': 'Thing', name: 'Road bicycle racing', sameAs: 'https://en.wikipedia.org/wiki/Road_bicycle_racing' },
      { '@type': 'Thing', name: 'Criterium', sameAs: 'https://en.wikipedia.org/wiki/Criterium' },
    ],
    mentions: [
      { '@type': 'SportsOrganization', name: 'Berkeley Bicycle Club', url: 'https://berkeleybikeclub.org/' },
      { '@type': 'SportsOrganization', name: 'Eagle Cycling Club', url: 'https://www.eaglecyclingclub.org/' },
      { '@type': 'Organization', name: 'VeloPromo', url: 'https://www.velopromo.com/' },
    ],
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

// Topic filters on /writing/, in display order. A post can carry several;
// topics with no posts yet stay hidden.
const topicOrder = ['Leadership', 'Architecture', 'Delivery', 'Engineering judgment', 'Learning', 'AI', 'Hiring', 'Founder story', 'Cycling', 'Community'];
export const topics = topicOrder.filter((t) => posts.some((p) => p.topics.includes(t)));

// Reading paths: the five categories on /writing/ and the ordered journey through
// each. A post may appear in more than one; the first match is its primary.
export const journeys = [
  {
    id: 'leadership',
    title: 'Engineering leadership',
    lead: 'From hiring an engineer to running a team that can work without you.',
    slugs: [
      'why-hiring-good-engineers-is-so-hard',
      'good-teams-dont-expect-everyone-to-know-everything',
      'smaller-user-stories-and-pull-requests',
      'specialization-beyond-your-own-code',
      'what-sprint-carryover-is-telling-you',
      'when-everything-is-a-priority',
      'fast-paced-vs-changing-priorities',
      'engineering-work-nobody-needed',
      'hidden-cost-of-ai-coding',
      'recognizing-ai-generated-code',
      'generalist-advantage-in-the-ai-era',
      'ai-learning-curve-future-of-work',
      'code-review-in-the-ai-era',
      'vibe-coding-vs-agentic-engineering',
      'loop-engineering-feedback-loops',
      'what-cycling-taught-me-about-engineering-leadership',
      'why-i-enjoy-mentoring',
      'building-federal-government-applications',
    ],
  },
  {
    id: 'architecture',
    title: 'Software architecture',
    lead: 'Service boundaries, team size, events, APIs and the lessons that carried across systems.',
    slugs: [
      'the-architecture-you-dont-build',
      'should-it-be-a-microservice',
      'team-size-should-influence-architecture',
      'event-driven-architecture-kafka-tradeoffs',
      'api-architecture-lessons',
      'software-architecture-lessons-from-different-systems',
      'open-source-voip-distributed-systems-lessons',
      'forward-engineering-isnt-new',
      'network-security-before-devsecops',
      'capacity-planning-carrier-networks-to-cloud',
      'hidden-cost-of-software-architecture',
      'infrastructure-costs-from-carrier-networks-to-the-cloud',
      'data-driven-engineering-network-voip-publishing',
    ],
  },
  {
    id: 'learning',
    title: 'Learning and tools',
    lead: 'What experienced engineers actually keep in their heads, and what they build instead.',
    slugs: [
      ...(import.meta.env.DEV ? [hermesLearningDraft.slug] : []),
      'you-dont-need-to-remember-everything',
      'from-dos-to-ai-thirty-years-of-technology',
      'talking-to-ai-in-a-terminal',
      'why-i-build-my-own-developer-tools',
      'specialization-beyond-your-own-code',
      'devops-from-expect-scripts-to-ai-agents',
      'building-software-before-and-after-ai',
      'ux-ui-design-before-and-after-ai',
      'what-publishing-taught-me-about-seo-aeo-geo',
      'digital-publishing-seo-adsense-affiliate-ai-search',
      'connect-hermes-agent-hostinger-vps-vs-code',
      'omniroute-hermes-agent-docker',
      'building-an-ai-job-search-agent-with-hermes',
      'scheduling-ai-work-hermes-chatgpt-claude',
    ],
  },
  {
    id: 'founder',
    title: 'Founder story',
    lead: 'Building a communications platform from a rack of servers to an acquisition, and what stuck.',
    slugs: [
      'building-a-startup-from-idea-to-acquisition',
      'founding-a-startup-isnt-easy',
      'building-startups-technical-leadership',
      'building-software-before-and-after-ai',
      'voip-apps-for-nokia-phones-before-the-iphone',
      'open-source-voip-distributed-systems-lessons',
      'software-architecture-lessons-from-different-systems',
      'what-publishing-taught-me-about-seo-aeo-geo',
    ],
  },
  {
    id: 'cycling',
    title: 'Cycling and community',
    lead: 'Racing, organizing the Berkeley Omnium, and the small projects that came out of it.',
    slugs: [
      'first-bike-races-novice-race-reports',
      'what-cycling-taught-me-about-engineering-leadership',
      'organizing-berkeley-omnium-leadership-lessons',
      'berkeley-omnium-new-website-next-generation',
      'connect-strava-to-claude-mcp',
      'fitness-journey-training-smarter',
    ],
  },
  {
    id: 'still-building',
    title: 'Still Building After 20 Years',
    lead: 'A three-part series: from network engineer to software developer, CTO, engineering leader and AI practitioner.',
    slugs: [
      'from-cisco-routers-to-ai-agents',
      'why-i-still-write-code',
      'ai-agents-reliable-in-production',
    ],
  },
];

const slugOf = (to) => (to.match(/^\/writing\/([^/#?]+)\/?$/) || [])[1];

// The journey a post belongs to, with its position and neighbours.
export function journeyFor(slug) {
  for (const j of journeys) {
    const i = j.slugs.indexOf(slug);
    if (i === -1) continue;
    return {
      ...j,
      index: i,
      prev: i > 0 ? postBySlug[j.slugs[i - 1]] : null,
      next: i < j.slugs.length - 1 ? postBySlug[j.slugs[i + 1]] : null,
    };
  }
  return null;
}

// Up to `limit` posts to read next: curated `related` posts first, then journey
// neighbours, then the strongest topic overlap. Never the post itself, no repeats.
export function continueReading(slug, limit = 3) {
  const post = postBySlug[slug];
  if (!post) return [];
  const picked = [];
  const add = (p) => {
    if (p && p.slug !== slug && !picked.includes(p) && picked.length < limit) picked.push(p);
  };
  (post.related || []).map((r) => postBySlug[slugOf(r.to)]).forEach(add);
  const j = journeyFor(slug);
  if (j) [j.next, j.prev].forEach(add);
  if (picked.length < limit) {
    const score = (p) => p.topics.filter((t) => post.topics.includes(t)).length;
    posts
      .filter((p) => p.slug !== slug && score(p) > 0)
      .sort((a, b) => score(b) - score(a) || Number(b.no) - Number(a.no))
      .forEach(add);
  }
  return picked;
}

// Curated links that point outside /writing/ (leadership, mentorship, case studies).
export const elsewhereLinks = (slug) => (postBySlug[slug]?.related || []).filter((r) => !slugOf(r.to));
