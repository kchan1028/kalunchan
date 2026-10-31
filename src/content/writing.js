// Writing: the index of every post, which /writing/ and each post's reading links show. Keep it to what those lists need.
// A post's other fields (seoTitle, dek, related, keywords, about, mentions, faq, sources, image) live in
// src/content/posts/meta/<slug>.js and load with that post; site.js merges them in for prerendering. Bodies live in src/content/posts/.
// Dates feed JSON-LD and article:* meta only; the audit keeps years out of visible text.
import { careerStages } from './home';

export const posts = [
  {
    slug: 'why-i-test-my-products-like-someone-who-has-never-used-them',
    title: 'Why I Test My Products Like Someone Who Has Never Used Them',
    shortTitle: 'Testing like a first-time user',
    description:
      'Usability testing from the builder’s side: why developers know too much about their own products, and how I test FedPath and Berkeley Omnium as beginners.',
    teaser:
      'By the time a feature ships, I know where every button is. The hardest part of testing it is forgetting that, and using it the way a first-time visitor would.',
    summary:
      'Why developers and product teams know too much about their own products; the people I pretend to be when I test, from a first-time visitor to a younger user; testing FedPath as a small business owner new to government contracting; testing the Berkeley Omnium site as juniors, parents, first-time and traveling racers; smaller tools; why a working feature can still be hard to use; why I push back on unnecessary complexity; and why imagined walkthroughs come before testing with real people, not instead of it.',
    topics: ['Delivery', 'Engineering judgment', 'Leadership'],
    minutes: 7,
    no: '722',
    published: '2026-10-25',
    modified: '2026-10-25',
  },
  {
    slug: 'patch-mitigate-or-retire-vulnerability-triage',
    title: 'Patch, Mitigate or Retire: How I Triage a Critical Vulnerability',
    shortTitle: 'Patch, mitigate or retire',
    description:
      'Why one vulnerability alert can turn into weeks of work, what a zero-day actually is, and how I decide whether to patch now, mitigate for a while or retire the system.',
    teaser:
      'What PHP-era security and Log4Shell have in common, why exposure matters more than the severity score, and how I decide between patching, mitigating and retiring an application.',
    summary:
      'What a zero-day vulnerability is and why most critical alerts aren’t one; what Log4Shell showed about dependencies nobody knew they had; what the PHP years taught about language flaws versus application code and defaults; the questions I ask to judge exposure, including CISA’s Known Exploited Vulnerabilities catalog, EPSS, reachability and compensating controls; choosing between patching, mitigating and retiring an application, and why a planned shutdown isn’t a mitigation; writing down an accepted risk with an owner and an expiry date; and the inventory and deployment habits that make the next alert a smaller job.',
    topics: ['Security', 'Architecture', 'Leadership'],
    minutes: 8,
    no: '721',
    published: '2026-10-24',
    modified: '2026-10-24',
  },
  {
    slug: 'when-technical-debt-becomes-a-business-problem',
    title: 'When Technical Debt Becomes a Business Problem',
    shortTitle: 'When technical debt becomes a business problem',
    description:
      'When technical debt is a reasonable shortcut, when its cost starts landing on the business, and how I decide whether to refactor, replace, rewrite or leave it alone.',
    teaser:
      'Why some shortcuts are the right call, how debt shows up as friction before it shows up as failure, and how I decide which debt is worth fixing and how to explain that to the business.',
    summary:
      'Why taking on technical debt can be a sound business decision, and what Ward Cunningham’s original metaphor said about repaying it; how debt shows up as friction, slower estimates, extra regression testing and knowledge held by a few engineers before it causes failures; the point where it reaches delivery dates, infrastructure bills, security and compliance, reliability and opportunities; choosing between leaving it, refactoring, replacing a component and rewriting; why I don’t use a fixed sprint percentage and what I weigh instead; and how to explain debt to product managers and executives as a cost of keeping it versus a cost of fixing it.',
    topics: ['Architecture', 'Leadership', 'Engineering judgment'],
    minutes: 8,
    no: '720',
    published: '2026-10-22',
    modified: '2026-10-22',
  },
  {
    slug: 'hidden-cost-of-too-many-meetings',
    title: 'The Hidden Cost of Too Many Meetings: When Collaboration Starts Slowing Engineering Teams Down',
    shortTitle: 'The hidden cost of too many meetings',
    description:
      'Why too many meetings slow engineering teams down, what they are often compensating for, and how leaders can balance collaboration with focused delivery time.',
    teaser:
      'What meetings cost beyond the hour on the calendar, why they pile up, what a recurring meeting is often standing in for, and how I decide when a conversation is worth everyone’s time.',
    summary:
      'What a meeting costs beyond the hour, including preparation, follow-ups and work that waits for the next scheduled slot; how meetings accumulate with good intentions; meetings as symptoms of unclear ownership, incomplete requirements, unowned decisions and low confidence in progress; when a meeting stands in for trust; why fragmented time is expensive for engineers; choosing between writing and conversation, and what asynchronous communication costs; meetings that create clarity across product, design, QA and engineering; how engineering leaders become a source of interruptions; and the questions I ask before a meeting goes on the calendar.',
    topics: ['Leadership', 'Delivery'],
    minutes: 8,
    no: '719',
    published: '2026-10-21',
    modified: '2026-10-21',
  },
  {
    slug: 'why-writing-good-user-stories-is-hard',
    title: 'Why Is Writing a Good User Story So Hard?',
    shortTitle: 'Why good user stories are hard',
    description:
      'Why user stories cause so much confusion: different roles, too much or too little detail, stories versus technical tasks, story mapping and acceptance criteria everyone can use.',
    teaser:
      'Product, design, engineering and QA each read the same story differently. Why more detail and smaller tickets don’t fix that on their own, and what does.',
    summary:
      'Why the user story format hides how hard the job is; how product managers, designers, developers and QA see the same feature; why too much detail can be as bad as too little; stories that are too big or too small; stories versus technical tasks; writing from only one perspective; the cost of developers guessing; acceptance criteria that help everyone; story mapping; using the story to support a conversation; simplicity; who owns the story; and six questions I ask before a story moves into development.',
    topics: ['Delivery', 'Leadership', 'Engineering judgment'],
    minutes: 9,
    no: '718',
    published: '2026-10-20',
    modified: '2026-10-20',
  },
  {
    slug: 'ai-generated-code-verification-depth',
    title: 'AI Can Write the Code. But Can We Verify It?',
    shortTitle: 'Verifying AI-generated code',
    description:
      'AI makes code cheap to write and no cheaper to understand. Five levels of verification depth, matching them to risk, and what it means for juniors and engineering leaders.',
    teaser:
      'Generating code got cheap. Understanding it didn’t. How deeply I verify AI-generated code, how I match that to risk, and what the shift means for juniors and leaders.',
    summary:
      'Why abstraction moves complexity instead of removing it; Werner Vogels on verification debt and the Renaissance Developer; five illustrative levels of verification depth, from “does it run?” to “can we trust it in production?”; matching depth to risk; why verification capacity becomes the constraint on a team; how juniors build the judgment to recognize a wrong implementation; broad knowledge and knowing when to ask; and what engineering leaders should watch instead of output.',
    topics: ['AI', 'Engineering judgment', 'Leadership'],
    minutes: 10,
    no: '717',
    published: '2026-10-20',
    modified: '2026-10-20',
  },
  {
    slug: 'from-idea-to-working-product',
    title: 'From an Idea to a Working Product: What I’ve Been Building on the Side',
    shortTitle: 'From idea to working product',
    description:
      'What building FedPath, VeloWise and a stock research lab on the side taught me about turning an idea into a working product, keeping it simple and checking that it helps.',
    teaser:
      'Three side projects from three directions: client work, leading engineering teams and plain curiosity. The idea was the easy part every time.',
    summary:
      'Where FedPath, VeloWise and Trading Research Lab came from; how small single-purpose tools grew into products; what real SAM.gov notices, Jira exports and market data broke; why two of the products refuse to show a single score; a stock research system that has to beat simple benchmarks before it counts; learning a domain by building in it; and why I still enjoy the work.',
    topics: ['Learning', 'Engineering judgment', 'Delivery'],
    minutes: 7,
    no: '716',
    published: '2026-10-19',
    modified: '2026-10-19',
  },
  {
    slug: 'what-engineering-leadership-actually-does',
    title: 'What Does Engineering Leadership Actually Do All Day?',
    shortTitle: 'What engineering leadership does',
    description:
      'What does an engineering leader actually do all day? My experience moving from writing code to leading teams, simplifying decisions, and balancing engineering with business needs.',
    teaser:
      'How my idea of a productive day changed from engineer to founder, CTO and engineering leader, why I push back on unnecessary UX complexity, and the parts of the job I’m still learning.',
    summary:
      'Measuring productivity by personal output and why that stopped working as a founder and CTO; becoming the bottleneck; questioning whether to build something at all; pushing back on unnecessary UX and UI complexity and what it costs users, developers, QA and the business; where simplifying goes too far; implementing a solution versus being accountable for the outcome; removing obstacles and developing people who can replace me; explaining technical problems in business terms; the invisible work of preventing problems; balancing today against tomorrow; and the difficult decisions I’m still learning to make.',
    topics: ['Leadership', 'Engineering judgment', 'Delivery'],
    minutes: 10,
    no: '715',
    published: '2026-10-19',
    modified: '2026-10-19',
  },
  // Hidden draft: dev server only until KC approves publishing.
  ...(import.meta.env.DEV ? [{
    slug: 'why-i-built-fedpath',
    title: 'Why I Built FedPath: Learning Agentic Engineering on a Real Product',
    shortTitle: 'Why I built FedPath',
    description:
      'Why I built FedPath (gofedpath.com) for small businesses pursuing federal contracts, which parts use AI, which use plain rules, and what coding agents changed.',
    teaser:
      'I wanted to learn agentic engineering on a product with real data and real consequences. The most useful lesson so far is how little of FedPath needs an agent.',
    summary:
      'Why I chose to learn AI agents by building a real product; why federal contracting, from public-sector certification work and running a business; the difference between automation, AI processing and an agent, mapped onto every part of FedPath; why fit and compliance run on fixed rules; the one place a model earns its keep; the opportunity-investigating agent I haven’t built and what it would need; building the product with Claude Code and Codex; and why the core tools are free.',
    topics: ['AI', 'Engineering judgment', 'Architecture'],
    minutes: 8,
    no: '714',
    published: '2026-10-18',
    modified: '2026-10-18',
  }] : []),
  {
    slug: 'building-document-intelligence-workflows',
    title: 'Building Document Intelligence Is More Than Extracting Text With AI',
    shortTitle: 'Building document intelligence workflows',
    description:
      'Turning documents into data a business can trust: classification, extraction, validation, human review, integration, security and cost in AI document processing.',
    teaser:
      'Extracting text from a PDF takes an afternoon. Producing values a business can act on takes classification, validation, review queues, integration and an audit trail.',
    summary:
      'Why organizations want to automate document processing; the difference between extracted text and information a business can trust; classification, extraction, validation and routing; missing fields, inconsistent formats and low-confidence results; designing human review and exception handling; integrating with existing databases, APIs and workflows; security, privacy and auditability for sensitive documents; operating cost and maintainability; and when AI helps versus when conventional code is the better tool.',
    topics: ['AI', 'Architecture', 'Engineering judgment'],
    minutes: 9,
    no: '713',
    published: '2026-10-18',
    modified: '2026-10-18',
  },
  {
    slug: 'modernizing-public-sector-applications',
    title: 'Modernizing Public-Sector Applications Is More Than Rewriting Code',
    shortTitle: 'Modernizing public-sector applications',
    description:
      'What modernizing a public-sector application involves beyond new code: legacy business rules, incremental replacement, security, accessibility, audit and approvals.',
    teaser:
      'The old system is the specification. How I approach legacy business rules, one-journey-at-a-time replacement, technical debt, compliance and approvals on public-sector applications.',
    summary:
      'Why modernizing public-sector applications is more than replacing old technology; treating the legacy system as the specification for eligibility rules and workflows; keeping the service running during replacement; incremental, one-journey-at-a-time migration behind a routing layer; technical debt while still delivering features; carrying security, Section 508, authorization and audit into every slice; coordinating with program staff, reviewers and change approval; the people who feel the change; and what I would tell a team starting one.',
    topics: ['Leadership', 'Architecture', 'Engineering judgment'],
    minutes: 9,
    no: '712',
    published: '2026-10-18',
    modified: '2026-10-18',
  },
  {
    slug: 'from-aol-to-ai-lowering-the-barrier',
    title: 'From AOL to AI: How Building Software Became More Accessible',
    shortTitle: 'From AOL to AI',
    description:
      'AOL, open source, the cloud and now AI each lowered a barrier and changed who could build software. What AI may enable next, and the fundamentals to keep.',
    teaser:
      'AOL made getting online easier. Open source and cloud services helped small teams build. AI opens another door, while raising questions about how developers learn.',
    summary:
      'How AOL made getting online easier, open source gave small teams a foundation, and faster networks and cloud services reduced the work of launching a product. How AI extends that accessibility, why developers still need practice investigating failures, and how engineering leaders can support learning while using AI. Possible applications are discussed as ideas to explore, not predictions.',
    topics: ['AI', 'Engineering judgment', 'Leadership'],
    minutes: 9,
    no: '711',
    published: '2026-10-18',
    modified: '2026-10-18',
  },
  {
    slug: 'when-to-add-engineering-process',
    title: 'When Process Helps and When It Becomes the Problem',
    shortTitle: 'When process helps',
    description:
      'When should engineering teams add process? An engineering leader on using process to build trust, letting trust earn autonomy, and keeping accountability.',
    teaser:
      'Why companies add process, how the right process builds trust between people who barely know each other, what it costs in engineering time, and how trust should earn a team more autonomy.',
    summary:
      'Why growing organizations add process; how process builds trust between leadership and engineering, between teams and between individuals; why process fails; the hidden workload it adds; how trust should earn autonomy while accountability stays; an eight-step way to decide whether to add a process, plus a process budget; how needs change with complexity and risk; and why removing process is a leadership job.',
    topics: ['Leadership', 'Delivery', 'Engineering judgment'],
    minutes: 10,
    no: '710',
    published: '2026-10-18',
    modified: '2026-10-18',
  },
  {
    slug: 'how-i-learn-faster-with-ai',
    title: 'How I Learn Faster With AI: From Research to Implementation',
    shortTitle: 'How I learn faster with AI',
    description:
      'How I use AI to learn new technologies faster: set a goal, map the subject, prime, test my understanding, build something small, and know when to skip steps.',
    teaser:
      'The five-stage path I use for unfamiliar or risky subjects, the three-stage shortcut for familiar ground, the prompts behind each, and why finishing faster is not the same as learning faster.',
    summary:
      'Why finishing faster and learning faster are different; the full path (goals, research, priming, comprehension, implementation) with Kafka as the example; the faster path for familiar fundamentals; how risk decides which path to use; why AI shouldn’t do all the thinking; how experience helps and where it misleads; small tools as a place to learn; and a six-step workflow with prompts, using vector search.',
    topics: ['AI', 'Learning', 'Engineering judgment'],
    minutes: 11,
    no: '709',
    published: '2026-10-17',
    modified: '2026-10-17',
  },
  {
    slug: 'speed-vs-quality-software-engineering',
    title: 'Speed vs. Quality: Why Is It So Hard to Get the Balance Right?',
    shortTitle: 'Speed vs. quality',
    description:
      'Speed to market matters, and so does quality. An engineering leader on risk-based process, cutting scope before quality, technical debt, and AI.',
    teaser:
      'Why business and engineering see different risks, why smaller releases are faster and safer, the quality floor I keep, and how to bring leadership options instead of a request for more time.',
    summary:
      'Why speed to market matters; what quality means beyond perfect code; four reasons the balance is hard; a risk matrix for matching process to the change; why small releases win on speed and safety; five principles, including a quality floor and cutting scope first; what AI changes; and how to put tradeoffs to leadership as options.',
    topics: ['Leadership', 'Delivery', 'Engineering judgment'],
    minutes: 10,
    no: '708',
    published: '2026-10-17',
    modified: '2026-10-17',
  },
  {
    slug: 'loop-engineering-feedback-loops',
    title: 'Loop Engineering: The Feedback Loop Matters More Than the Code',
    shortTitle: 'Loop engineering',
    description:
      'What loop engineering is, how it differs from agentic engineering, and a Claude Code and Codex workflow with guardrails that keep AI feedback loops honest.',
    teaser:
      'A definition of loop engineering, the feedback loops we already had, where AI coding agents speed them up, how a passing test suite can still ship the wrong product, and a ten-step workflow with guardrails.',
    summary:
      'A plain definition of loop engineering; the feedback loops engineering already had, from TDD and CI to incident reviews; how AI coding agents change the loop; vibe coding, agentic engineering and loop engineering compared; failure modes of bad feedback loops, including a scheduling feature that passed every test and confused customers; why smaller changes make better loops; what humans should still own; a ten-step Claude Code and Codex workflow with iteration limits, scoped changes and escalation; and what engineering leaders should measure instead of lines of code or agent iterations.',
    topics: ['AI', 'Delivery', 'Leadership'],
    minutes: 10,
    no: '707',
    published: '2026-10-16',
    modified: '2026-10-16',
  },
  {
    slug: 'the-architecture-you-dont-build',
    title: 'The Architecture You Don’t Build Is Sometimes Your Best Decision',
    shortTitle: 'The architecture you don’t build',
    description: 'Every service creates work beyond the code. An engineering leader on choosing simpler architecture, counting operating costs, and knowing when complexity is justified.',
    teaser: 'A reporting request can become a new platform before anyone asks how fresh the data needs to be. How I decide which complexity is worth owning.',
    summary: 'Starting with the business requirement; a hypothetical reporting request; the operating costs of AWS infrastructure, databases, APIs and Kafka; modular monoliths and team capacity; preserving useful boundaries; and recording when a deferred architecture decision should be revisited.',
    topics: ['Architecture', 'Engineering judgment', 'Leadership'],
    minutes: 8,
    no: '706',
    published: '2026-10-16',
    modified: '2026-10-16',
  },
  {
    slug: 'vibe-coding-vs-agentic-engineering',
    title: 'Vibe Coding vs. Agentic Engineering: Writing Code Is No Longer the Hardest Part',
    shortTitle: 'Vibe coding vs. agentic engineering',
    description:
      'Vibe coding vs. agentic engineering from an engineering leader: where each fits, why AI moves the bottleneck to review and validation, and what leaders should measure.',
    teaser:
      'What vibe coding is good for, what makes AI-assisted work agentic engineering, one multi-company SaaS feature built both ways, running review, testing and UAT in parallel, and what leaders should measure.',
    summary:
      'Why the bottleneck moved from writing code to deciding and verifying; what vibe coding is and where it works; what agentic engineering is, and why five agents can still be vibe coding; a multi-company, role-based SaaS feature built both ways; a side-by-side comparison; what code review should answer now; running review, testing and UAT in parallel on preview environments; the hidden costs of AI coding; why engineering judgment is worth more; and how engineering leaders can measure delivery without counting lines of code.',
    topics: ['AI', 'Leadership', 'Delivery'],
    minutes: 10,
    no: '705',
    published: '2026-10-15',
    modified: '2026-10-15',
  },
  {
    slug: 'code-review-in-the-ai-era',
    title: 'Code Review Doesn’t Start With a Pull Request. It Starts With the Plan.',
    shortTitle: 'Code review in the AI era',
    description:
      'AI can review pull requests. An engineering leader on what AI should review, what humans still must, and why code review runs from the plan to production.',
    teaser:
      'Why “can AI review code?” is the wrong question, a risk-based review model, what AI and people should each review, a company-switching workflow that passes every test and still fails, and a six-stage review process that stays light for small changes.',
    summary:
      'How AI moves the bottleneck from writing code to validating outcomes; three questions every change has to answer; reviewing the plan before the code; a risk-based review model by change type; what AI should review and where it falls short; what people should still review; why passing tests don’t prove a feature works for users; review after deployment; a six-stage process; and how to tell whether a team reviews too much or too little.',
    topics: ['AI', 'Leadership', 'Delivery'],
    minutes: 9,
    no: '704',
    published: '2026-10-15',
    modified: '2026-10-15',
  },
  {
    slug: 'ai-learning-curve-future-of-work',
    title: 'AI Is Great, But Not Everyone Is Ready to Use It Yet',
    shortTitle: 'AI has a learning curve',
    description:
      'AI will transform jobs, but using it well takes experience and judgment. How UX, engineering, product and leadership roles are changing, and what leaders can do.',
    teaser:
      'Why access to AI isn’t the same as knowing how to use it: tasks versus jobs, how design, engineering and product work shifts toward judgment, what happens to junior engineers, and what leaders should do.',
    summary:
      'Why AI automates tasks faster than it removes jobs, and what the employment research shows so far; how UX designers, software engineers and product managers move from producing work to validating it; what happens when AI writes both the code and the tests; how junior engineers learn when AI writes the first draft; why a generalist background helps; why AI is expensive when used badly; and seven things engineering leaders should do.',
    topics: ['AI', 'Leadership', 'Engineering judgment'],
    minutes: 12,
    no: '703',
    published: '2026-10-14',
    modified: '2026-10-14',
  },
  {
    slug: 'recognizing-ai-generated-code',
    title: 'I Can Recognize AI-Generated Code. Here’s Why.',
    shortTitle: 'Recognizing AI-generated code',
    description:
      'The patterns I keep seeing in AI-generated code, a real Django example where 53 lines lose to 6, and how I review AI output so the code fits the problem.',
    teaser:
      'The habits AI coding tools leave in pull requests, one small request answered two ways in real Python, why the longer version passes its test anyway, and how I work with AI so I can explain every line I merge.',
    summary:
      'Eight patterns that show up in AI-generated code and why none of them prove authorship; a status filter written as 53 lines and as 6; what the AI couldn’t know about the project; a test that passes with the bug in place; when to accept, modify, simplify or reject; and how I use AI coding tools day to day.',
    topics: ['AI', 'Engineering judgment'],
    minutes: 10,
    no: '702',
    published: '2026-10-13',
    modified: '2026-10-13',
  },
  {
    slug: 'generalist-advantage-in-the-ai-era',
    title: 'Why Being a Generalist Is an Advantage in the AI Era',
    shortTitle: 'Why being a generalist helps with AI',
    description:
      'AI makes it easy to work across product, code, infrastructure and business. Years as a startup generalist taught me which questions to ask along the way.',
    teaser:
      'Why the startup habit of doing a bit of everything turned out to be useful with AI: moving between disciplines faster, knowing which questions to ask, and why teams still need specialists.',
    summary:
      'How a startup turned me into a generalist; how AI makes moving between product, code, infrastructure and business faster; one hypothetical feature seen through six sets of questions; why teams still need specialists; and why building is fun again.',
    topics: ['AI', 'Leadership', 'Founder story'],
    minutes: 7,
    no: '701',
    published: '2026-10-13',
    modified: '2026-10-13',
  },
  {
    slug: 'hidden-cost-of-ai-coding',
    no: '700',
    title: 'AI Coding Can Cost More Than a Human Engineer When Used Incorrectly',
    shortTitle: 'The hidden cost of AI coding',
    description:
      'AI coding tools can cut development costs or raise them. An engineering leader on token usage, endless AI loops, and the real cost per accepted change.',
    teaser:
      'Why the same AI agent makes one engineer faster and another more expensive: junior loops, work outside your expertise, endless reviews, real token prices, and what leaders can measure.',
    summary:
      'Why AI amplifies both good and bad decisions; a junior developer’s authentication loop and how mentorship, smaller tasks and acceptance criteria fix it; a developer using AI for marketing without the expertise to judge it; why more AI reviews do not mean better software; subscription versus API pricing with current list prices; a hypothetical cost per accepted change for three ways of working; and practical guidance for engineering leaders.',
    topics: ['AI', 'Leadership', 'Engineering judgment'],
    minutes: 12,
    published: '2026-10-12',
    modified: '2026-10-12',
  },
  {
    slug: 'why-i-enjoy-mentoring',
    no: '699',
    title: 'Why I Enjoy Mentoring: The Satisfaction of Helping Others Grow',
    shortTitle: 'Why I enjoy mentoring',
    description:
      'Leading engineering teams and mentoring junior cyclists have taught me that helping others grow is one of the most rewarding parts of leadership.',
    teaser:
      'What mentoring junior engineers and junior riders has in common, why the goal is independence, why some lessons can only be experienced, and why it is as rewarding as building something myself.',
    summary:
      'How the moments I remember best became other people’s; why mentoring aims at judgment and independence; the parallels between junior engineers and junior riders in the Berkeley Bicycle Club; why you cannot hand someone your experience and should make mistakes survivable instead; what mentoring teaches the mentor; why a leader does not need to be the smartest person in the room; and the part that lasts.',
    topics: ['Leadership', 'Community', 'Cycling'],
    minutes: 8,
    published: '2026-10-11',
    modified: '2026-10-11',
  },
  {
    slug: 'fast-paced-vs-changing-priorities',
    no: '698',
    title: 'Fast-Paced Doesn’t Mean Constantly Changing Priorities',
    shortTitle: 'Fast-paced doesn’t mean constantly changing priorities',
    description:
      'Moving fast and changing direction constantly are different. What Agile does and does not absorb, when Scrum stops fitting, and how leaders make tradeoffs visible.',
    teaser:
      'Fast teams decide quickly toward a stable goal. Churning teams start everything and finish little. When to drop Scrum for Kanban, why WIP limits work, and the question every new priority should face.',
    summary:
      'The difference between fast and churning; what Agile’s response to change does and does not cover; when fixed sprint commitments stop fitting and how to match the process to the real rate of change; the hidden costs of context switching; real emergencies versus loud requests; making each new priority a visible tradeoff; finishing before starting with WIP limits and small changes; process that helps engineers; and balancing business flexibility with engineering discipline.',
    topics: ['Leadership', 'Delivery'],
    minutes: 9,
    published: '2026-10-11',
    modified: '2026-10-11',
  },
  {
    slug: 'forward-engineering-isnt-new',
    no: '697',
    title: 'Forward Engineering Isn’t New. So What’s Different Today?',
    shortTitle: 'Forward engineering isn’t new',
    description:
      'Forward engineering has always been the job: need to requirement to design to code. How it relates to Agile and reverse engineering, and what faster code changes.',
    teaser:
      'Need, requirement, design, code, running system: the chain is decades old. How it fits Agile, why modernization starts with reverse engineering, and why faster code moves the bottleneck.',
    summary:
      'What forward engineering is and where meaning gets lost between steps; why waterfall, Agile and iterative development are all forward engineering at different slice sizes; reverse engineering as the first half of every modernization, with a public-service migration, a WordPress-to-Rails re-platform and a data center move; what faster implementation does and does not change; why speeding up code moves the bottleneck to review, testing, security and maintenance; and what that asks of engineering leaders.',
    topics: ['Architecture', 'Engineering judgment', 'Leadership'],
    minutes: 9,
    published: '2026-10-11',
    modified: '2026-10-11',
  },
  {
    slug: 'ai-agents-reliable-in-production',
    no: '696',
    title: 'AI Agents Are Easy to Demonstrate. Making Them Reliable in Production Is Hard.',
    shortTitle: 'Making AI agents reliable in production',
    description:
      'An AI agent that works once is easy. Running it daily means retries, evaluation, permissions, human approval and cost control: distributed systems engineering with a model in it.',
    teaser:
      'Retries, idempotency, recovery, evaluation, model cost, least privilege and human approval: what an agent needs before it runs unattended, how to tell whether it fits the problem, and nine questions I would ask a team.',
    summary:
      'Part three of Still Building: the gap between an agent demo and a production agent; prototype, MVP and production as different questions; failures, retries, idempotency, missed runs, recovery and state as distributed-systems problems; evaluating non-deterministic output; cost and operating overhead as architectural choices, including when FedPath deliberately uses no AI; scoping credentials and tools; designing human approval; when agentic AI fits a business problem; and a readiness checklist for engineering leaders.',
    topics: ['AI', 'Architecture', 'Leadership'],
    minutes: 12,
    published: '2026-10-11',
    modified: '2026-10-18',
  },
  {
    slug: 'why-i-still-write-code',
    no: '695',
    title: 'Why I Still Write Code as an Engineering Leader',
    shortTitle: 'Why I still write code',
    description:
      'After CTO and VP roles, I still write code. Building my own projects helps me understand estimates, debt and technical tradeoffs.',
    teaser:
      'From doing almost everything at a startup to CTO roles, and why I still build FedPath, Useful Little Tools and the Omnium site without becoming my team’s bottleneck.',
    summary:
      'Part two of Still Building: learning the whole system by doing almost every job at a startup; how leadership moves your hours; what I build now and why on my own projects; how hands-on work sharpens estimates, debt, tradeoffs and cost; how not to become the bottleneck; and how AI coding tools changed the fun.',
    topics: ['Leadership', 'Learning', 'Founder story'],
    minutes: 8,
    published: '2026-10-11',
    modified: '2026-10-11',
  },
  {
    slug: 'from-cisco-routers-to-ai-agents',
    no: '694',
    title: 'From Cisco Routers and Carrier Networks to Cloud Infrastructure and AI Agents',
    shortTitle: 'From Cisco routers to AI agents',
    description:
      'Cisco ACLs, a new SOC, VoIP routing, then cloud and AI agents: the infrastructure and security habits from a carrier network that still shape how I build.',
    teaser:
      'From router consoles and NetScreen firewalls to VoIP, cloud architecture and AI agents: how a network engineer carried path thinking, deny-by-default and capacity planning up the stack.',
    summary:
      'Part one of Still Building: carrier network operations before the cloud; security as an operations job in a new SOC; VoIP where networking met the business; moving up the stack with the network still in my head; security as every layer’s job; why AI agents are a network problem too; and five habits that carried over.',
    topics: ['Architecture', 'Learning', 'Leadership'],
    minutes: 8,
    published: '2026-10-11',
    modified: '2026-10-11',
  },
  ...(import.meta.env.DEV ? [{
    slug: 'learning-hermes-building-ai-automation-around-the-clock',
    title: 'Learning Hermes: Building AI Automation That Runs Around the Clock.',
    description: 'My first steps with Hermes on a Docker VPS: planning a content research assistant, separating code from AI, and learning what reliable scheduled work requires.',
    topics: ['Learning', 'AI'],
    minutes: 8,
    no: '694',
    shortTitle: 'Learning Hermes: automation around the clock',
    summary: 'A content research assistant I am planning for Useful Little Tools: what code and AI each handle, what unattended work requires, and how I will test scheduling, failures, recovery and usage.',
  }] : []),
  {
    slug: 'scheduling-ai-work-hermes-chatgpt-claude',
    no: '693',
    title: 'Scheduling AI Work: What I Learned Comparing Hermes, ChatGPT and Claude',
    shortTitle: 'Scheduling AI work: Hermes, ChatGPT and Claude compared',
    description:
      'What changes when an AI task runs on a schedule, and how self-hosted Hermes, ChatGPT scheduled tasks, Claude Cowork tasks, Claude Code routines and cron compare on ownership, billing and limits.',
    teaser:
      'One job, five schedulers: who owns execution, context, credentials, logs and recovery; when a subscription covers the run and when an API key quietly pays; and why the chat you designed it in is not the system.',
    summary:
      'Why a scheduled run has to carry its own instructions and context; a weekly research assistant that reads the site, researches reader questions, de-duplicates, saves three ranked ideas and sends a brief; five options compared in one table; who owns execution, context, credentials, logs and recovery in each; subscription login versus API billing and where overage lands; which steps stay deterministic; why instructions and data must be durable files; and where to start.',
    topics: ['Learning', 'AI'],
    minutes: 10,
    published: '2026-10-10',
    modified: '2026-10-10',
  },
  {
    slug: 'talking-to-ai-in-a-terminal',
    no: '692',
    title: 'Talking to AI in a Terminal Reminds Me of Computing in the ’90s',
    shortTitle: 'Talking to AI in a terminal',
    description:
      'Claude Code and Codex CLI put me back at a prompt, decades after DOS. What is the same, what changed, why the terminal never left, and why judgment matters more when execution is free.',
    teaser:
      'A prompt, typed words, text back, real effects on the machine. The shape is DOS and the Unix shells; the language is now mine. Why the terminal survived, and why reading the command still matters.',
    summary:
      'Why terminal AI assistants feel like DOS and early Unix; how precise syntax gave way to interpreted intent while permissions and consequences stayed real; the lineage from Expect scripts to agents that type for you; an illustrative six-command fix done both ways; and the leadership lesson that faster execution makes clear intent and verification more valuable.',
    topics: ['Learning', 'AI'],
    minutes: 6,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'omniroute-hermes-agent-docker',
    no: '691',
    title: 'What Is OmniRoute? Setting Up AI Model Routing with Hermes Agent on a Hostinger VPS',
    shortTitle: 'OmniRoute with Hermes Agent on a Hostinger VPS',
    description:
      'What OmniRoute is, why you would put a model router in front of an AI agent, the Docker steps to connect it to Hermes Agent on a Hostinger VPS, and whether you need one at all.',
    teaser:
      'An open-source AI gateway with one OpenAI-compatible endpoint, many providers and fallback, wired to Hermes over a shared Docker network. Two architectures side by side, the request path, and the honest tradeoffs.',
    summary:
      'What OmniRoute is and what is verified versus version-dependent; the responsibilities of an agent runtime versus a model gateway; a switchable diagram of direct versus routed architectures; ten installation steps including the shared Docker network and why localhost does not cross containers; the eight-step request lifecycle; cost, performance and security tradeoffs; how the job-search agent would split routing between application and gateway; and when a router is earned complexity.',
    topics: ['Learning', 'AI', 'Architecture'],
    minutes: 13,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'connect-hermes-agent-hostinger-vps-vs-code',
    no: '690',
    title: 'How to Connect a Self-Hosted Hermes AI Agent on Hostinger VPS to VS Code',
    shortTitle: 'Connect a Hermes agent on a Hostinger VPS to VS Code',
    description:
      'Step by step: SSH keys, a non-root user, VS Code Remote-SSH, finding the Hermes Docker container, configuring Claude by API key or credits, and the problems you will hit. From my own setup.',
    teaser:
      'SSH keys and a non-root user, VS Code Remote-SSH, docker ps and docker exec, Hermes config.yaml and .env, Claude by API key or Hostinger credits, and a troubleshooting list from doing it.',
    summary:
      'What Hermes Agent is and why self-host it; prerequisites; generating and installing an SSH key, the SSH config, a non-root admin user; connecting VS Code with Remote-SSH and knowing which window is remote; finding the container, reading logs, checking volumes; configuring Claude through an Anthropic API key, a Claude Code login, or Hostinger’s nexos.ai credits, and keeping the key out of Git; day-to-day use from the editor; eight common problems; and the job-search agent this sets up.',
    topics: ['Learning', 'AI'],
    minutes: 12,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'building-an-ai-job-search-agent-with-hermes',
    no: '689',
    title: 'Building My Own AI Job Search Agent with Hermes: Going Beyond ChatGPT and Claude',
    shortTitle: 'Building an AI job search agent with Hermes',
    description:
      'A learning log: deploying the open-source Hermes Agent on a VPS and designing an autonomous job-search pipeline for engineering leadership roles, with the engineering tradeoffs and what is planned versus built.',
    teaser:
      'Hermes Agent on a VPS, public job-board APIs, deterministic filtering before the model, a daily Telegram report, and me deciding. Part one of a series, written before the results.',
    summary:
      'Why a persistent, self-hosted agent is a different shape from a chat assistant; the tedium of a senior job search; a pipeline that normalizes, dedupes and filters postings from public Greenhouse, Lever and Ashby endpoints before any model sees them; what Hermes adds and what it does not; the architecture, cost, reliability, security, data-quality, observability and oversight decisions; and the eight steps planned next.',
    topics: ['Learning', 'AI'],
    minutes: 9,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'building-public-sector-applications',
    no: '688',
    title: 'What Building Public-Sector Applications Taught Me About Software Engineering',
    shortTitle: 'What building public-sector applications taught me',
    description:
      'From startups to public-sector certification systems: what FedRAMP, Authority to Operate, Section 508, Plain Writing and continuous monitoring taught me about engineering that must be demonstrably secure, accessible and maintainable.',
    teaser:
      'The stack was familiar. Everything around it changed: demonstrable security, an Authorizing Official instead of a deploy button, accessibility in the acceptance criteria, plain language in every message, and change you can trace.',
    summary:
      'Public-sector certification systems on a familiar stack; why a form is rarely just a form; the difference between implementing a control and proving it operates; what an Authority to Operate asks of an engineering team; Section 508 as an engineering responsibility; Plain Writing as a product problem; authorization, least privilege and audit logging in the architecture; designing for external systems that behave unexpectedly; continuous monitoring; the difference between a working feature and an approvable one; the leadership habits that kept delivery predictable; a one-page map of the frameworks; and lessons for startups, SaaS and regulated teams.',
    topics: ['Leadership', 'Architecture', 'Engineering judgment'],
    minutes: 14,
    published: '2026-10-09',
    modified: '2026-10-18',
  },
  {
    slug: 'building-startups-technical-leadership',
    no: '687',
    title: 'Building Startups: What I’ve Learned Turning Ideas Into Working Products',
    shortTitle: 'Building startups: turning ideas into working products',
    description:
      'Helping startups build mobile apps, a fitness platform, wholesale VoIP, real estate software and virtual tours, and the technical leadership lessons: the right decisions for the stage of the business.',
    teaser:
      'Six startups, six stacks: a hybrid app on LAMP, consulting for my own acquirer, Laravel and Python, open-source VoIP with Yii, Go and Next.js, 360-degree tours. What startups need from a technical leader.',
    summary:
      'A hybrid iOS and Android app on a LAMP backend, staying on as a consultant after my own company was acquired, a fitness platform on Laravel, React and Python, a wholesale VoIP business on open-source telecom and Yii, a real estate platform on Go, React and Next.js, a 360-degree virtual tour app, what they had in common, and why startups need technical leadership more than more code.',
    topics: ['Founder story', 'Leadership', 'Architecture'],
    minutes: 10,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'data-driven-engineering-network-voip-publishing',
    no: '686',
    title: 'Different Industries, Same Engineering Problems: From Carrier Networks to VoIP and Digital Publishing',
    shortTitle: 'Different industries, same engineering problems',
    description:
      'What building R-based network capacity forecasts, VoIP least-cost routing with call statistics, and digital publishing analytics taught me about turning data into decisions.',
    teaser:
      'An R program forecasting carrier links from SNMP data, call statistics feeding least-cost routing, and two articles with very different revenue per view: the same measure-analyze-decide loop in three industries.',
    summary:
      'Forecasting when a carrier link would fill with an R program over SNMP statistics, why the average hid the peaks; routing calls on cost and quality with answer-seizure ratio, call duration and route history; which article to improve when traffic and revenue disagree; a side-by-side of the three industries; why collecting data was never the hard part; forecasting as a loop; the same questions in cloud and AI; and what it changed about how I lead.',
    topics: ['Engineering judgment', 'Architecture', 'Leadership'],
    minutes: 9,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'digital-publishing-seo-adsense-affiliate-ai-search',
    no: '685',
    title: 'From SEO and AdSense to AI Search: What Digital Publishing Taught Me',
    shortTitle: 'From SEO and AdSense to AI search',
    description:
      'How publishers turned content into revenue with SEO, AdSense and affiliate networks, what changed with social, zero-click and AI search, and the engineering behind a profitable platform.',
    teaser:
      'The publishing revenue engine from an engineer’s seat: AdSense and RPM, affiliate tracking and disclosure, SEO, SMO, AEO and GEO, the economics that changed, and why a fast site is only half a business.',
    summary:
      'When content could make money and why not all traffic was worth the same; how AdSense pays and what Page RPM means, with a React ad unit; affiliate models, tracking and FTC disclosure; technical SEO, SMO, AEO and GEO and how they work together; why the economics changed; the operating-contribution test; and what I apply to Useful Little Tools, Yippify, FedPath and this site.',
    topics: ['Leadership', 'Learning', 'AI'],
    minutes: 14,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'infrastructure-costs-from-carrier-networks-to-the-cloud',
    no: '684',
    title: 'From Carrier Networks to the Cloud: What I’ve Learned About Infrastructure Costs',
    shortTitle: 'What I’ve learned about infrastructure costs',
    description:
      'Infrastructure economics from seven seats: carrier capital, data center bills, VoIP routing margins, AWS consumption, architecture, teams and my own businesses. What each layer taught me about cost.',
    teaser:
      'Carrier capital, the real cost of a server, why the cheapest VoIP route loses money, cloud waste by default, and the questions a founder asks that an engineer doesn’t. How infrastructure decisions affect the operating budget.',
    summary:
      'Why carrier capacity was capital, what a server really costs when you carry it, how call statistics improved least-cost routing and why the cheapest route loses money, how the cloud turned capital into consumption, why people and process are infrastructure costs too, the founder’s questions that changed how I decide, and the seven-layer figure that puts it on one page.',
    topics: ['Leadership', 'Architecture', 'Founder story'],
    minutes: 8,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'hidden-cost-of-software-architecture',
    no: '683',
    title: 'The Hidden Cost of Software Architecture: Why Scaling Too Early Is Expensive',
    shortTitle: 'The hidden cost of software architecture',
    description:
      'Microservices, Kafka, Kubernetes, database habits and premature scale all show up on the monthly bill. How I weigh architecture against operating cost, team size and business needs.',
    teaser:
      'How I compare service boundaries, event streaming, hosting and capacity decisions against infrastructure and support costs.',
    summary:
      'The recurring costs every component adds; modular monolith or microservices, and when separate services earn their cost; why Kafka is also a team; managed or self-hosted; where the database leaks money; scaling for users you don’t have; what an AWS re-platform with about 30% lower costs taught me about design; why architecture should fit the team; architecture as a business decision; and the five inputs and three decisions I use.',
    topics: ['Architecture', 'Engineering judgment', 'Leadership'],
    minutes: 11,
    published: '2026-10-09',
    modified: '2026-10-18',
  },
  {
    slug: 'capacity-planning-carrier-networks-to-cloud',
    no: '682',
    title: 'Capacity Planning: What Carrier Networks Taught Me About Scaling Cloud Infrastructure',
    shortTitle: 'Capacity planning, from carrier networks to cloud',
    description:
      'Capacity planning from SNMP forecasting on a 2,000-collocation carrier network and VoIP servers behind millions of minutes to AWS autoscaling, database capacity and cost control.',
    teaser:
      'From purchase orders and technicians in trucks to a Terraform plan and a monthly invoice: forecasting demand, finding the bottleneck, routing media by location, and cutting cloud cost without cutting reliability.',
    summary:
      'Forecasting carrier network capacity from measured utilization across 2,000+ collocations, planning VoIP servers behind millions of minutes a month, choosing media paths by caller location to improve quality and cut bandwidth cost, moving a platform from one data center to cloud regions as capacity followed revenue, and the infrastructure improvements behind a publishing platform’s AWS costs about 30% lower. Then forecasting versus autoscaling on AWS, database capacity and caching, the metrics I want on the dashboard including cost per unit of work, and why engineering capacity is the constraint most dashboards miss.',
    topics: ['Architecture', 'Leadership', 'Engineering judgment'],
    minutes: 12,
    published: '2026-10-09',
    modified: '2026-10-18',
  },
  {
    slug: 'from-dos-to-ai-thirty-years-of-technology',
    no: '681',
    title: 'From DOS to AI: Watching the World Change, One Decade at a Time',
    shortTitle: 'From DOS to AI',
    description:
      'From 286 computers, DOS, BBSs and dial-up to fiber, 5G, cloud computing and AI. A personal journey from DOS and dial-up to AI, as a user and as the engineer behind some of it.',
    teaser:
      'A 286 and a screaming modem, BBSs and mIRC, dial-up to fiber, Nokia apps to AI assistants: what those decades of technology looked like from the inside.',
    summary:
      'DOS and Windows 3.1 on a 486, dialing into BBSs, IRC and mIRC, AOL bringing everyone online, dial-up giving way to DSL and cable, VoIP and Nokia apps, 3G to 5G, fiber, cloud, and now AI. What stayed the same underneath, and how I use new tools while continuing to learn the systems underneath.',
    topics: ['Learning', 'AI'],
    minutes: 9,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'fitness-journey-training-smarter',
    no: '680',
    title: 'I Used to Think Getting Better Meant Working Harder',
    shortTitle: 'Getting better means training smarter',
    description:
      'Strength training, Spartan racing and bike racing taught me that getting better means training smarter: consistency, recovery, coming back from gaps, and leading teams the same way.',
    teaser:
      'Three sports, one lesson: consistency over heroics, the right effort at the right time, recovery on purpose, and the discipline of coming back after an injury, a busy year or a life event.',
    summary:
      'Progress in the gym takes time, Spartan courses punish narrow strength, cycling proved that riding slowly can make you faster, recovery is part of training, and coming back from a broken collarbone, a work-eaten season, a life event and this year’s surgery is its own discipline. Plus the club, the team and the juniors, and what all of it changed about how I lead.',
    topics: ['Cycling', 'Leadership', 'Learning'],
    minutes: 10,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'network-security-before-devsecops',
    no: '679',
    title: 'I Was Working on Network Security Long Before DevSecOps Was a Thing',
    shortTitle: 'Network security before DevSecOps',
    description:
      'My security work began with Cisco ACLs in a carrier network and a seat in a new SOC supporting NetScreen firewalls. How that shaped how I build software, cloud and teams.',
    teaser:
      'Cisco ACLs in a carrier network, one of the first three in a new Security Operations Center, training the TAC, and how it all carried into application, cloud and government security.',
    summary:
      'Security as a thread through a whole career: router ACLs in carrier operations, security before the tooling existed, the problems of running a managed service for many customers, one of the first three people supporting a NetScreen managed firewall service, training the TAC, then AAA on voice platforms, authentication and authorization in applications, mobile apps as untrusted clients, IAM and Terraform in the cloud, public-sector security requirements, and what it means to lead with security as a release gate, and why security stays an engineering responsibility when CI/CD automates the checks. With a staged timeline and a layer-by-layer explorer.',
    topics: ['Architecture', 'Leadership', 'Learning'],
    minutes: 13,
    published: '2026-10-09',
    modified: '2026-10-18',
  },
  {
    slug: 'voip-apps-for-nokia-phones-before-the-iphone',
    no: '678',
    title: 'Before the iPhone Took Over, We Were Building VoIP Apps for Nokia Phones',
    shortTitle: 'Building VoIP apps for Nokia phones',
    description:
      'Between 2005 and 2010 we wrote mobile VoIP apps in C++ for Nokia phones so immigrants could call home for less. What Symbian, SIP and our customers taught me.',
    teaser:
      'Writing mobile VoIP apps in C++ for the Symbian phones our customers already owned, and why that was the right call before the iPhone took over.',
    summary:
      'Why a VoIP service for immigrants calling home went onto Nokia phones instead of the iPhone, what Symbian C++ development was like, how a handset talked to an Asterisk and OpenSIPS backend over bad mobile data, and the lessons about customers and constraints that outlasted the phones.',
    topics: ['Founder story', 'Learning', 'Architecture'],
    minutes: 8,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'ux-ui-design-before-and-after-ai',
    no: '677',
    title: 'I Used to Design Every Screen Myself',
    description:
      'A founder who designed his own signup forms, dashboards and phone menus on how AI changed UX and UI work, what it still can’t know about your users, and why.',
    summary:
      'Being the designer by default at a bootstrapped startup, the assumptions that turned customers away, what readers, residents and drivers taught later, how I design with an AI assistant now, and the five things that haven’t changed about building for the person using the system.',
    topics: ['Learning', 'AI', 'Founder story'],
    minutes: 7,
    published: '2026-10-09',
    modified: '2026-10-09',
  },
  {
    slug: 'building-software-before-and-after-ai',
    no: '676',
    title: 'I Used to Build Everything Myself',
    description:
      'I racked the servers and wrote the billing system for my first startup. Now I build with AI. What got faster, what still takes judgment, and how it shaped how I lead.',
    summary:
      'Building a bootstrapped communications startup by hand and letting business constraints make the product decisions, the open-source VoIP stack and the failures it taught, what doing every job changed about how I lead, how AI-assisted development changed the way I build FedPath, Useful Little Tools and client work, why faster building doesn’t mean better deciding, and why I still write code.',
    topics: ['Founder story', 'AI', 'Learning'],
    minutes: 10,
    published: '2026-10-09',
    modified: '2026-10-18',
  },
  {
    slug: 'founding-a-startup-isnt-easy',
    no: '675',
    title: 'Founding a Startup Isn’t Easy, but the Experience Is Priceless',
    description:
      'A technical founder on bootstrapping a startup: being every department at once, learning fast, the first revenue, profitability, and why the experience outlasts the payout.',
    summary:
      'Bootstrapping with very little money, being the field technician, network engineer, sysadmin, developer, architect, designer, product manager and support desk at once, learning under pressure, the first paying customer, what profitability changes, why not every founder gets rich, and how it shaped me as an engineering leader.',
    topics: ['Founder story', 'Leadership'],
    minutes: 6,
    published: '2026-10-08',
    modified: '2026-10-08',
  },
  {
    slug: 'smaller-user-stories-and-pull-requests',
    no: '674',
    title: 'Why Smaller User Stories and Pull Requests Make Better Engineering Teams',
    description:
      'Why smaller user stories, smaller pull requests and smaller releases improve planning, code review and delivery, and why one fast developer can’t make a team fast.',
    summary:
      'Why oversized stories produce oversized pull requests, how smaller stories improve planning and prioritization, how smaller PRs improve review and quality, why smaller releases shrink the blast radius, individual speed versus team throughput, and how product and engineering share the job.',
    topics: ['Delivery', 'Leadership'],
    minutes: 4,
    published: '2026-10-08',
    modified: '2026-10-08',
  },
  {
    slug: 'why-hiring-good-engineers-is-so-hard',
    no: '673',
    title: 'Why Hiring Is So Hard, and Why Interviews Don’t Tell the Whole Story',
    description:
      'Why hiring software engineers is so difficult: resumes, interviews, coding tests and references are all partial signals, and a good hire still needs good leadership.',
    summary:
      'Predicting years from a few hours, what resumes and ATS filters miss, why interviews measure interviewing, what coding tests leave out, reading references for context, the “what would you ask?” question, the real cost of a bad hire, why good hires fail in bad organizations, managing people, building a team rather than collecting talent, and the candidate’s side of the evaluation.',
    topics: ['Leadership', 'Hiring'],
    minutes: 11,
    published: '2026-10-08',
    modified: '2026-10-08',
  },
  {
    slug: 'good-teams-dont-expect-everyone-to-know-everything',
    no: '672',
    title: 'Good Engineering Teams Don’t Expect Everyone to Know Everything',
    description:
      'What leading engineering teams taught me about expectations by experience level, smaller pull requests, smaller stories, acceptance criteria and precise communication.',
    summary:
      'What to expect from engineers at different experience levels, why experience doesn’t replace clarity, smaller pull requests and stories, acceptance criteria, saying what actually happened, reviews and documentation, distributed teams, and the habits I encourage.',
    topics: ['Leadership', 'Delivery'],
    minutes: 12,
    published: '2026-10-08',
    modified: '2026-10-08',
  },
  {
    slug: 'why-i-build-my-own-developer-tools',
    no: '671',
    title: 'I Still Look Up Syntax. So I Started Building My Own Developer Tools.',
    description:
      'My system for remembering commands went from bookmarks to Stack Overflow to AI assistants. Why I started building small browser tools instead: Useful Little Tools.',
    summary:
      'Why I still look up Git, Docker and SQL syntax, how bookmarks, Stack Overflow and AI assistants each fell short, the repeat searches that became Useful Little Tools, what building a tool teaches, and why I keep them small.',
    topics: ['Learning', 'AI'],
    minutes: 7,
    published: '2026-10-08',
    modified: '2026-10-08',
  },
  {
    slug: 'specialization-beyond-your-own-code',
    no: '670',
    title: 'Specialization Shouldn’t Stop at Understanding Your Own Code',
    description:
      'Why frontend and backend specialists need enough of each other’s world to troubleshoot across boundaries, ask better questions and avoid fragile workarounds.',
    summary:
      'Depth versus breadth, “the API works” versus a working product, what frontend and backend engineers each need to know about the other, evidence-based bug reports, developer quality of life, client versus server responsibilities, and how leaders create silos.',
    topics: ['Leadership', 'Learning'],
    minutes: 7,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'api-architecture-lessons',
    no: '669',
    title: 'API Architecture: What Building and Operating Real Systems Has Taught Me',
    description:
      'API architecture beyond endpoints: consumers, REST vs GraphQL vs gRPC, contracts, object-level authorization, idempotent retries, operations and cost.',
    summary:
      'Designing for consumers and workflows, choosing REST, GraphQL or gRPC, boundaries and ownership, backward compatibility, object-level authorization, idempotent retries, asynchronous work, performance, operations, cost and a decision checklist.',
    topics: ['Architecture', 'Leadership'],
    minutes: 8,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'event-driven-architecture-kafka-tradeoffs',
    no: '668',
    title: 'Event-Driven Architecture with Kafka: Should Systems React to Events Instead of Calling Each Other Directly?',
    description:
      'When to use direct calls, a simple queue or Kafka: event-driven tradeoffs, the outbox pattern, exactly-once limits and the real cost of running Kafka.',
    summary:
      'When to call directly and when to publish, facts versus commands, topics, partitions and replay, eventual consistency, the dual-write problem and outbox, what exactly-once covers, coupling through events, the total cost of Kafka, and a leadership checklist.',
    topics: ['Architecture', 'Leadership'],
    minutes: 8,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'should-it-be-a-microservice',
    no: '667',
    title: 'How I Decide Whether a Microservice Should Actually Be a Microservice',
    description:
      'How I decide if a component should be a microservice: domain boundaries, ownership, data, scaling and failure isolation, and when a modular monolith wins.',
    summary:
      'The questions I ask before splitting out a service, what happens to the data, the distributed monolith trap, when a modular monolith wins, and what it really costs to own a service for five years.',
    topics: ['Architecture', 'Engineering judgment', 'Leadership'],
    minutes: 16,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'open-source-voip-distributed-systems-lessons',
    no: '666',
    title: 'What Open Source VoIP Taught Me About Distributed Systems Before We Called Them Distributed Systems',
    description:
      'Asterisk, OpenSIPS, MediaProxy, Python AGI, billing and carrier routing: what VoIP taught me about partial failure, idempotency, latency, reconciliation and margins.',
    summary:
      'How signaling, media relays, call handling, AGI business logic and billing split one call across boundaries, a hypothetical double-charge failure, carrier selection as the gross margin, distance and regions, why retries need context, reconciliation, following the whole path, engineering decisions as business decisions, a map from VoIP problems to modern distributed systems terms, and what modern tools do and don’t change.',
    topics: ['Architecture'],
    minutes: 11,
    published: '2026-10-07',
    modified: '2026-10-18',
  },
  {
    slug: 'software-architecture-lessons-from-different-systems',
    no: '665',
    title: 'Software Architecture Through the Years: What Different Systems Taught Me',
    description:
      'What VoIP, publishing, monoliths, microservices and Kafka taught me about software architecture, and why the right choice depends on the problem and the team.',
    summary:
      'Telecom and the whole call path, publishing and business-shaped architecture, the case for monoliths, what microservices and Kafka really cost, how team size changes the answer, and why boring architecture often wins.',
    topics: ['Architecture', 'Leadership', 'Engineering judgment'],
    minutes: 11,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'devops-from-expect-scripts-to-ai-agents',
    no: '663',
    title: 'From Expect Scripts to AI Agents: How DevOps Changed During My Career',
    description:
      'From Expect and ksh scripts in a NOC to Terraform, Kubernetes and AI agents: how DevOps changed, whether AI can automate it, and where to draw the line.',
    summary:
      'Expect and ksh in a NOC, what that taught me about operations, how Jenkins, Docker, Terraform and Kubernetes standardized the work, what AI can automate in DevOps now, the guardrails I’d insist on, and the skills that outlast every tool.',
    topics: ['Learning', 'AI', 'Architecture'],
    minutes: 13,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'team-size-should-influence-architecture',
    no: '662',
    title: 'Your Team Size Should Influence Your Architecture',
    description:
      'Every architecture creates work a team has to carry. How team size, ownership and on-call coverage should shape the choice between a modular monolith and services.',
    summary:
      'The ongoing cost of every service, a hypothetical five-person team weighing twelve services, the modular monolith as a deliberate choice, when separation earns its cost, and the triggers that should reopen the decision.',
    topics: ['Architecture', 'Leadership'],
    minutes: 6,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'what-publishing-taught-me-about-seo-aeo-geo',
    no: '661',
    title: 'What Being a CTO in Publishing Taught Me About SEO, and Why AEO and GEO Matter Now',
    description:
      'What being CTO of a publishing platform taught me about SEO, technical SEO and social distribution, and what I’m learning now about AEO and GEO.',
    summary:
      'Content as product and channel, search intent, technical SEO as engineering work, decisions that cost traffic without anyone noticing, social cards, measuring more than traffic, and what I’m learning about AEO and GEO.',
    topics: ['Leadership', 'Learning', 'AI'],
    minutes: 12,
    published: '2026-10-07',
    modified: '2026-10-07',
  },
  {
    slug: 'organizing-berkeley-omnium-leadership-lessons',
    no: '660',
    title: 'What Organizing Berkeley Omnium Taught Me About Leading Teams',
    description:
      'What organizing the Berkeley Omnium with a volunteer team taught me about leading engineering teams: shared purpose, ownership, scope and handoffs.',
    summary:
      'Shared purpose, volunteer time as a real constraint, naming an owner, letting the race date decide scope, why finished tasks don’t make a ready event, and the work that continues after the finish.',
    topics: ['Leadership', 'Community', 'Cycling'],
    minutes: 6,
    published: '2026-10-06',
    modified: '2026-10-06',
  },
  {
    slug: 'what-cycling-taught-me-about-engineering-leadership',
    no: '659',
    title: 'What Cycling Taught Me About Engineering Leadership',
    description:
      'Pacing, pacelines, preparation and mentoring junior riders: what cycling and organizing the Berkeley Omnium taught me about leading engineering teams.',
    summary:
      'Sustainable pace, riding predictably in a group, taking a turn at the front, preparing for changing conditions, meeting junior riders where they are and leading volunteers without authority, plus where the analogy breaks down.',
    topics: ['Leadership', 'Cycling', 'Community'],
    minutes: 7,
    published: '2026-10-06',
    modified: '2026-10-06',
  },
  {
    slug: 'engineering-work-nobody-needed',
    no: '658',
    title: 'The Most Expensive Engineering Work Is Work Nobody Needed',
    description:
      'Shipping on time doesn’t prove the work was worth building. How I question requests, test the need first, and weigh what unneeded features cost after launch.',
    summary:
      'Why on-time delivery doesn’t prove value, how unneeded features get built, separating a request from the real need, three hypothetical examples, and eight questions to ask before committing a team.',
    topics: ['Leadership', 'Engineering judgment', 'Delivery'],
    minutes: 8,
    published: '2026-10-06',
    modified: '2026-10-06',
  },
  {
    slug: 'connect-strava-to-claude-mcp',
    no: '657',
    title: 'How to Connect Strava to Claude with MCP: A Step-by-Step Guide',
    description:
      'Connect Strava’s official MCP connector to Claude or Claude Code step by step, then ask better questions about your rides, intensity, climbing and race prep.',
    summary:
      'Setting up Strava’s official, read-only MCP connector in Claude or Claude Code, then putting it to work: prompts for volume, intensity, climbing and race prep, and what it can’t do.',
    topics: ['Cycling'],
    minutes: 17,
    published: '2026-10-05',
    modified: '2026-10-05',
  },
  {
    slug: 'building-a-startup-from-idea-to-acquisition',
    no: '656',
    title: 'From an Idea to an Acquisition: What Building a Startup Taught Me',
    description:
      'What building a startup from the ground up taught me as co-founder and CTO: 0→1 engineering, scaling to 400,000+ users, technical debt and an acquisition.',
    summary:
      'Co-founding and building a global communications company: 0→1 with incomplete information, when reliability becomes the product, 1→10, learning to delegate, technical debt as an investment, and an acquisition.',
    topics: ['Founder story', 'Leadership', 'Architecture'],
    minutes: 17,
    published: '2026-10-05',
    modified: '2026-10-05',
  },
  {
    slug: 'what-sprint-carryover-is-telling-you',
    no: '655',
    title: 'What Sprint Carryover Is Actually Telling an Engineering Team',
    description:
      'Sprint carryover is a signal about the system around a team. How I read it by cause: estimation, scope changes, blockers, support load and shifting priorities.',
    summary:
      'The six causes behind most sprint carryover, what each one is telling you, how to record the reason instead of just the number, and the common fixes that make the number look better without improving delivery.',
    topics: ['Delivery', 'Leadership', 'Engineering judgment'],
    minutes: 9,
    published: '2026-10-03',
    modified: '2026-10-03',
  },
  {
    slug: 'when-everything-is-a-priority',
    no: '654',
    title: 'When Everything Is a Priority, Nothing Is: Leading Engineering Through Constant Change',
    description:
      'Changing priorities is normal. Pretending it’s free isn’t. How I make the cost of a priority change visible: lost context, work in progress and tradeoffs.',
    summary:
      'What a priority change really costs a team, why constant change leads to more half-finished work, how to make the tradeoff explicit, and the five things I make clear every time priorities shift.',
    topics: ['Leadership', 'Delivery', 'Engineering judgment'],
    minutes: 10,
    published: '2026-10-03',
    modified: '2026-10-03',
  },
  {
    slug: 'berkeley-omnium-new-website-next-generation',
    no: '652',
    title: '2027 Berkeley Omnium: A New Website and Building the Next Generation of Cyclists',
    // Used where the post is recommended from other pages; event years stay on this route only.
    shortTitle: 'Berkeley Omnium: A New Website and the Next Generation of Cyclists',
    teaser: 'Why I built the new berkeleyomnium.com, what bike racing teaches young riders, and how sponsors can support the Omnium and youth cycling.',
    description:
      'Why I built the new berkeleyomnium.com, what bike racing teaches young riders, and how sponsors can support the 2027 Berkeley Omnium and youth cycling.',
    summary:
      'The new berkeleyomnium.com, what bike racing teaches young riders, why local racing takes a whole community, and how to sponsor the 2027 Berkeley Omnium.',
    topics: ['Community', 'Cycling', 'Leadership'],
    minutes: 6,
    published: '2026-09-29',
    modified: '2026-09-29',
  },
  {
    slug: 'you-dont-need-to-remember-everything',
    no: '651',
    title: 'You Don’t Need to Remember Everything to Be a Good Software Engineer',
    description:
      'I still look up Git commands, SQL syntax and Kafka settings, and so do most experienced engineers. Why understanding systems beats memorizing syntax, especially with AI.',
    summary:
      'Why I still look things up as an experienced engineer, the difference between memorizing syntax and understanding systems, and what that means now that AI can retrieve almost anything.',
    topics: ['Learning', 'Engineering judgment', 'AI'],
    minutes: 11,
    published: '2026-09-28',
    modified: '2026-09-28',
  },
  {
    slug: 'first-bike-races-novice-race-reports',
    no: '650',
    title: 'My First Three Bike Races: Race Reports From a Novice Season',
    description:
      'Race reports from my first three bike races: the Livermore and Cherry Pie criteriums and the Snelling Road Race, plus what I learned as a novice racer.',
    summary:
      'How I got from struggling on club rides to a start line, race reports from the Livermore Criterium, Cherry Pie Criterium and Snelling Road Race, and the lessons I took from them.',
    topics: ['Cycling'],
    minutes: 6,
    published: '2023-02-13',
    modified: '2026-10-07',
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

// Topic filters on /writing/, in display order. A post can carry several;
// topics with no posts yet stay hidden.
const topicOrder = ['Leadership', 'Architecture', 'Delivery', 'Engineering judgment', 'Learning', 'AI', 'Hiring', 'Founder story', 'Cycling', 'Community'];
export const topics = topicOrder.filter((t) => posts.some((p) => p.topics.includes(t)));

// Start here: five posts, in reading order, for someone new to the site.
export const startHere = [
  'from-cisco-routers-to-ai-agents',
  'building-a-startup-from-idea-to-acquisition',
  'software-architecture-lessons-from-different-systems',
  'what-engineering-leadership-actually-does',
  'ai-agents-reliable-in-production',
];

// Reading paths: short ordered paths for a kind of reader, plus the Still Building
// series. A post may appear in more than one; the first match is its primary, so
// the series comes first.
export const journeys = [
  {
    id: 'still-building',
    title: 'Still Building',
    lead: 'A three-part series: from network engineer to software developer, CTO, engineering leader and AI practitioner.',
    slugs: [
      'from-cisco-routers-to-ai-agents',
      'why-i-still-write-code',
      'ai-agents-reliable-in-production',
    ],
  },
  {
    id: 'hiring',
    title: 'Hiring an engineering leader',
    lead: 'How I build, lead and make technical decisions, in five posts.',
    slugs: [
      'building-a-startup-from-idea-to-acquisition',
      'what-engineering-leadership-actually-does',
      'building-public-sector-applications',
      'hidden-cost-of-software-architecture',
      'ai-generated-code-verification-depth',
    ],
  },
  {
    id: 'clients',
    title: 'Planning a project with me',
    lead: 'What I weigh before changing a system: public-sector constraints, document processing, architecture I’d rather not build, technical debt and security fixes.',
    slugs: [
      'modernizing-public-sector-applications',
      'building-document-intelligence-workflows',
      'the-architecture-you-dont-build',
      'when-technical-debt-becomes-a-business-problem',
      'patch-mitigate-or-retire-vulnerability-triage',
    ],
  },
  {
    id: 'engineers',
    title: 'Growing as an engineer',
    lead: 'For engineers and the people I mentor: learning, looking things up, and working well with AI.',
    slugs: [
      'good-teams-dont-expect-everyone-to-know-everything',
      'you-dont-need-to-remember-everything',
      'how-i-learn-faster-with-ai',
      'recognizing-ai-generated-code',
      'why-i-enjoy-mentoring',
    ],
  },
];

// Chapters: the seven career stages on the homepage, in the order lived, then two
// side tracks. Every post belongs to exactly one; the first slug is the anchor.
const stageById = Object.fromEntries(careerStages.map((s) => [s.id, s]));
const chapter = (id, slugs) => ({ id, title: stageById[id].name, lead: stageById[id].lesson, slugs });
export const chapters = [
  chapter('carrier', [
      'capacity-planning-carrier-networks-to-cloud',
      'from-cisco-routers-to-ai-agents',
      'infrastructure-costs-from-carrier-networks-to-the-cloud',
      'devops-from-expect-scripts-to-ai-agents',
      'from-dos-to-ai-thirty-years-of-technology',
  ]),
  chapter('security', [
      'network-security-before-devsecops',
      'patch-mitigate-or-retire-vulnerability-triage',
  ]),
  chapter('voip', [
      'open-source-voip-distributed-systems-lessons',
      'voip-apps-for-nokia-phones-before-the-iphone',
      'data-driven-engineering-network-voip-publishing',
  ]),
  chapter('founder', [
      'building-a-startup-from-idea-to-acquisition',
      'founding-a-startup-isnt-easy',
      'building-startups-technical-leadership',
      'from-idea-to-working-product',
      'ux-ui-design-before-and-after-ai',
      ...(import.meta.env.DEV ? ['why-i-built-fedpath'] : []),
  ]),
  chapter('architecture', [
      'software-architecture-lessons-from-different-systems',
      'should-it-be-a-microservice',
      'hidden-cost-of-software-architecture',
      'the-architecture-you-dont-build',
      'team-size-should-influence-architecture',
      'event-driven-architecture-kafka-tradeoffs',
      'api-architecture-lessons',
      'forward-engineering-isnt-new',
      'when-technical-debt-becomes-a-business-problem',
      'what-publishing-taught-me-about-seo-aeo-geo',
      'digital-publishing-seo-adsense-affiliate-ai-search',
  ]),
  chapter('leadership', [
      'what-engineering-leadership-actually-does',
      'why-hiring-good-engineers-is-so-hard',
      'good-teams-dont-expect-everyone-to-know-everything',
      'you-dont-need-to-remember-everything',
      'specialization-beyond-your-own-code',
      'smaller-user-stories-and-pull-requests',
      'why-writing-good-user-stories-is-hard',
      'what-sprint-carryover-is-telling-you',
      'when-everything-is-a-priority',
      'fast-paced-vs-changing-priorities',
      'when-to-add-engineering-process',
      'speed-vs-quality-software-engineering',
      'hidden-cost-of-too-many-meetings',
      'engineering-work-nobody-needed',
      'why-i-test-my-products-like-someone-who-has-never-used-them',
      'why-i-enjoy-mentoring',
  ]),
  chapter('cloud-ai', [
      'building-software-before-and-after-ai',
      'why-i-still-write-code',
      'ai-agents-reliable-in-production',
      'building-public-sector-applications',
      'modernizing-public-sector-applications',
      'building-document-intelligence-workflows',
      'ai-generated-code-verification-depth',
      'hidden-cost-of-ai-coding',
      'recognizing-ai-generated-code',
      'code-review-in-the-ai-era',
      'vibe-coding-vs-agentic-engineering',
      'loop-engineering-feedback-loops',
      'ai-learning-curve-future-of-work',
      'generalist-advantage-in-the-ai-era',
      'how-i-learn-faster-with-ai',
      'from-aol-to-ai-lowering-the-barrier',
  ]),
  {
    id: 'lab',
    title: 'The lab',
    lead: 'Setups, tools and experiments: Hermes agents, model routing and the developer tools I build for myself.',
    side: true,
    slugs: [
      'why-i-build-my-own-developer-tools',
      'talking-to-ai-in-a-terminal',
      ...(import.meta.env.DEV ? ['learning-hermes-building-ai-automation-around-the-clock'] : []),
      'connect-hermes-agent-hostinger-vps-vs-code',
      'omniroute-hermes-agent-docker',
      'building-an-ai-job-search-agent-with-hermes',
      'scheduling-ai-work-hermes-chatgpt-claude',
    ],
  },
  {
    id: 'bike',
    title: 'Off the bike',
    lead: 'Racing, organizing the Berkeley Omnium, and the small projects that came out of it.',
    side: true,
    slugs: [
      'what-cycling-taught-me-about-engineering-leadership',
      'first-bike-races-novice-race-reports',
      'organizing-berkeley-omnium-leadership-lessons',
      'berkeley-omnium-new-website-next-generation',
      'fitness-journey-training-smarter',
      'connect-strava-to-claude-mcp',
    ],
  },
].map((c) => ({ ...c, slugs: c.slugs.filter((s) => postBySlug[s]) }));

// The five acts of the /writing/ journey: a reader-facing grouping of the chapters above, which stay the canonical
// structure for post pages and deep links. Copy comes from the career stages and from figures in the linked posts.
export const acts = [
  {
    id: 'leadership',
    title: 'Engineering Leadership',
    short: 'Leadership',
    principle: stageById.leadership.lesson,
    proof: stageById.leadership.did,
    chapterIds: ['leadership'],
    featured: ['what-engineering-leadership-actually-does', 'fast-paced-vs-changing-priorities', 'why-i-enjoy-mentoring'],
    next: { to: '/leadership/', label: 'How I run engineering' },
    figure: { no: 'Fig. 699-2', title: 'Pick the mode the moment calls for', steps: ['Guide', 'Demonstrate', 'Step aside'] },
  },
  {
    id: 'architecture',
    title: 'Software Architecture',
    short: 'Architecture',
    principle: stageById.architecture.lesson,
    proof: 'Capacity planning and expansion across 2,000+ collocations. A publishing portfolio re-platformed from WordPress to Rails on AWS, with infrastructure improvements contributing to about 30% lower AWS costs.',
    chapterIds: ['architecture', 'carrier', 'security', 'voip'],
    featured: ['software-architecture-lessons-from-different-systems', 'the-architecture-you-dont-build', 'capacity-planning-carrier-networks-to-cloud'],
    next: { to: '/work/', label: 'See the case studies' },
    figure: { no: 'Fig. 697-0', title: 'Forward engineering is a chain, and it breaks at the handoffs', steps: ['Business need', 'Requirements', 'Design', 'Code', 'Running system'] },
  },
  {
    id: 'founder',
    title: 'Founder Stories',
    short: 'Founder',
    principle: stageById.founder.lesson,
    proof: stageById.founder.did,
    chapterIds: ['founder'],
    featured: ['building-a-startup-from-idea-to-acquisition', 'founding-a-startup-isnt-easy', 'from-idea-to-working-product'],
    next: { to: '/experience/', label: 'Experience, role by role' },
    figure: { no: 'Fig. 656-1', title: 'From founding to acquisition, by stage', steps: ['Building the first product', 'Finding customers', 'Production', 'Growth', 'Scaling technology and people', 'Acquisition'] },
  },
  {
    id: 'ai',
    title: 'AI & Learning',
    short: 'AI',
    principle: stageById['cloud-ai'].lesson,
    proof: stageById['cloud-ai'].did,
    chapterIds: ['cloud-ai', 'lab'],
    featured: ['ai-agents-reliable-in-production', 'hidden-cost-of-ai-coding', 'how-i-learn-faster-with-ai'],
    next: { to: '/projects/fedpath/', label: 'FedPath: transparent scoring, no AI on solicitations' },
    figure: { no: 'Fig. 700-2', title: 'The deliberate path', steps: ['Define', 'Plan', 'Generate', 'Verify', 'Deliver'] },
  },
  {
    id: 'cycling',
    title: 'Cycling & Community',
    short: 'Cycling',
    principle: 'Racing, organizing the Berkeley Omnium, and the small projects that came out of it.',
    chapterIds: ['bike'],
    featured: ['what-cycling-taught-me-about-engineering-leadership', 'organizing-berkeley-omnium-leadership-lessons', 'connect-strava-to-claude-mcp'],
    next: { to: '/community/', label: 'Berkeley Omnium and the riders it supports' },
  },
].map((a) => ({
  ...a,
  posts: a.featured.map((s) => postBySlug[s]),
  chapters: a.chapterIds.map((id) => chapters.find((c) => c.id === id)),
}));

export function chapterFor(slug) {
  const i = chapters.findIndex((c) => c.slugs.includes(slug));
  return i === -1 ? null : { ...chapters[i], no: String(i + 1).padStart(2, '0') };
}

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
export function continueReading(slug, related = [], limit = 3) {
  const post = postBySlug[slug];
  if (!post) return [];
  const picked = [];
  const add = (p) => {
    if (p && p.slug !== slug && !picked.includes(p) && picked.length < limit) picked.push(p);
  };
  related.map((r) => postBySlug[slugOf(r.to)]).forEach(add);
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
export const elsewhereLinks = (related = []) => related.filter((r) => !slugOf(r.to));
