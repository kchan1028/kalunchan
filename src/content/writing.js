// Writing: metadata for each post. Bodies live in src/content/posts/.
// Dates feed JSON-LD and article:* meta only; the audit keeps years out of visible text.

export const posts = [
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
