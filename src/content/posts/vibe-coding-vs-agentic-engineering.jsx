import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// KC's background (20+ years across software, networking, security, infrastructure, DevOps, product and
// operations; former CTO and founder; experimenting with Claude Code and Codex) and his two guiding ideas come
// from his brief for this article. No anecdotes, incidents or results are invented: the multi-company feature is a
// labelled hypothetical. Terminology checked October 15, 2026: Karpathy coined "vibe coding" and, a year later,
// proposed "agentic engineering" (The New Stack); DORA added deployment rework rate to its delivery metrics.
export const metadata = {
  slug: 'vibe-coding-vs-agentic-engineering',
  title: 'Vibe Coding vs. Agentic Engineering: Writing Code Is No Longer the Hardest Part',
  shortTitle: 'Vibe coding vs. agentic engineering',
  seoTitle: 'Vibe Coding vs. Agentic Engineering: What Changes for Engineering Teams — Ka Lun Chan',
  description:
    'Vibe coding vs. agentic engineering from an engineering leader: where each fits, why AI moves the bottleneck to review and validation, and what leaders should measure.',
  teaser:
    'What vibe coding is good for, what makes AI-assisted work agentic engineering, one multi-company SaaS feature built both ways, running review, testing and UAT in parallel, and what leaders should measure.',
  dek:
    'AI made writing code cheaper and faster. It didn’t make bad engineering decisions any cheaper. It just implements them sooner.',
  summary:
    'Why the bottleneck moved from writing code to deciding and verifying; what vibe coding is and where it works; what agentic engineering is, and why five agents can still be vibe coding; a multi-company, role-based SaaS feature built both ways; a side-by-side comparison; what code review should answer now; running review, testing and UAT in parallel on preview environments; the hidden costs of AI coding; why engineering judgment is worth more; and how engineering leaders can measure delivery without counting lines of code.',
  topics: ['AI', 'Leadership', 'Delivery'],
  minutes: 10,
  related: [
    { to: '/writing/loop-engineering-feedback-loops/', label: 'Loop engineering: the feedback loop matters more than the code' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review doesn’t start with a pull request' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/generalist-advantage-in-the-ai-era/', label: 'Why being a generalist is an advantage in the AI era' },
    { to: '/writing/recognizing-ai-generated-code/', label: 'I can recognize AI-generated code. Here’s why.' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'vibe coding vs agentic engineering',
    'agentic engineering',
    'vibe coding',
    'AI-assisted software development',
    'AI coding agents',
    'AI code review',
    'engineering leadership in the AI era',
    'AI software development workflow',
    'AI-generated technical debt',
  ],
  about: [
    { '@type': 'Thing', name: 'Vibe coding', sameAs: 'https://en.wikipedia.org/wiki/Vibe_coding' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
  ],
  mentions: [
    { '@type': 'Person', name: 'Andrej Karpathy', sameAs: 'https://en.wikipedia.org/wiki/Andrej_Karpathy' },
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/' },
    { '@type': 'SoftwareApplication', name: 'Codex', url: 'https://openai.com/codex/' },
    { '@type': 'Organization', name: 'DORA', url: 'https://dora.dev/' },
  ],
  faq: [
    {
      q: 'What is the difference between vibe coding and agentic engineering?',
      a: 'Vibe coding is a loop of prompting, running the result and prompting again, judged mostly by whether it seems to work. Agentic engineering uses AI agents inside a structured lifecycle, from requirements and architecture through testing, review, acceptance and monitoring, with engineers accountable for the decisions at each stage.',
    },
    {
      q: 'Is vibe coding bad?',
      a: 'No. It is a fast way to prototype, test an idea, build a personal tool or let someone who doesn’t code build something useful. The risk starts when vibe-coded software goes to production, handles customer data or has to be maintained by a team, without anyone understanding how it works.',
    },
    {
      q: 'Does using multiple AI agents mean you are doing agentic engineering?',
      a: 'No. Agentic engineering is defined by the process around the agents: written requirements, an agreed design, tests tied to risk, review, real user acceptance and monitoring. Five agents prompting and rewriting each other without that structure is still vibe coding, only more expensive.',
    },
    {
      q: 'How should engineering leaders measure productivity with AI coding agents?',
      a: 'Measure delivery outcomes at the team level: lead time for changes, change failure rate, rework rate, escaped defects, production incidents and cost per successfully delivered feature. Lines of code, prompt counts and pull request volume measure activity, and none of these should be used to rank individual developers.',
    },
  ],
};

export const toc = [
  ['bottleneck', 'The bottleneck moved'],
  ['vibe', 'What vibe coding is good at'],
  ['agentic', 'What makes it agentic engineering'],
  ['example', 'One feature, built two ways'],
  ['compare', 'The tradeoffs side by side'],
  ['review', 'Code review still matters'],
  ['parallel', 'Review, testing and UAT in parallel'],
  ['cost', 'The hidden cost of doing it wrong'],
  ['judgment', 'Judgment is worth more now'],
  ['leaders', 'What engineering leaders should change'],
];

// ---------- Fig. 705-1: the agentic lifecycle, with what the agent does and what the engineer owns ----------
const stages = [
  ['Requirements', 'Drafts user stories and asks about missing cases', 'The problem, the user and what done means'],
  ['Planning', 'Breaks the work into small tasks', 'Scope, and what we won’t build'],
  ['Architecture', 'Compares options and finds code to reuse', 'The design and its tradeoffs'],
  ['Implementation', 'Writes code against the plan', 'Keeping it inside the agreed design'],
  ['Testing', 'Writes and runs unit, integration and end-to-end tests', 'Which risks deserve tests'],
  ['Review', 'First-pass code and security review', 'Fit, complexity and security boundaries'],
  ['UAT', 'Walks the flows as a simulated user', 'Business users accept it'],
  ['Deployment', 'Prepares the release and the rollback', 'Go or no go'],
  ['Monitoring', 'Watches errors and usage, summarizes them', 'Whether it worked, and what comes next'],
];

function Lifecycle() {
  return (
    <figure className="aglife post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 705-1</span> In agentic engineering, agents work at every stage and engineers own every decision
        <span className="journey__key label">Read top to bottom. The dashed column is the agent’s work. The solid column is what a person is accountable for.</span>
      </figcaption>
      <div className="aglife__head" aria-hidden="true">
        <span className="label">Stage</span>
        <span className="label">Agent does</span>
        <span className="label">Engineer owns</span>
      </div>
      <ol className="aglife__stages">
        {stages.map(([stage, agent, human], i) => (
          <li key={stage} className="aglife__stage">
            <span className="aglife__name"><span className="mono">{String(i + 1).padStart(2, '0')}</span> {stage}</span>
            <span className="aglife__agent"><span className="aglife__who label">Agent does</span>{agent}</span>
            <span className="aglife__human"><span className="aglife__who label">Engineer owns</span>{human}</span>
          </li>
        ))}
      </ol>
      <p className="aglife__back label">What we learn in production becomes the next requirement.</p>
    </figure>
  );
}

// ---------- Fig. 705-2: review, testing and acceptance run in parallel on one preview environment ----------
const lanes = [
  ['Automated tests', 'Unit, integration and end-to-end, in CI', 'Agents and CI'],
  ['Code review', 'AI first pass, then a person, scaled to risk', 'AI, then an engineer'],
  ['Security review', 'AI-assisted scan; a person for auth, data and permissions', 'AI, then an engineer'],
  ['Simulated usability', 'An agent walks the flows and flags confusing steps', 'AI'],
  ['User acceptance', 'Business users try it on the preview', 'People only'],
];

function Parallel() {
  return (
    <figure className="agpar post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 705-2</span> Five checks run at the same time against one preview environment
        <span className="journey__key label">Nothing merges until every lane passes. A change made after feedback reruns the lanes it affects.</span>
      </figcaption>
      <div className="agpar__flow">
        <p className="agpar__node">Pull request opens a preview environment</p>
        <ul className="agpar__lanes">
          {lanes.map(([name, what, who]) => (
            <li key={name} className={`agpar__lane${who === 'People only' ? ' is-human' : ''}`}>
              <span className="agpar__name">{name}</span>
              <span className="agpar__what">{what}</span>
              <span className="agpar__who label">{who}</span>
            </li>
          ))}
        </ul>
        <p className="agpar__node is-end">Merge, release and monitor</p>
      </div>
      <p className="agpar__back label">Changed after feedback? Rerun the affected lanes.</p>
    </figure>
  );
}

// ---------- Fig. 705-3: vibe coding vs agentic engineering ----------
const compare = [
  ['Development speed', 'Fastest to a first working version', 'Slower to start, fewer rewrites later'],
  ['Planning', 'Mostly in the prompt', 'Written requirements and acceptance criteria first'],
  ['Architecture', 'Whatever the model chose', 'Agreed before the build, reviewed after'],
  ['Code quality', 'Varies, and nobody may know which parts are weak', 'Checked against team standards'],
  ['Testing', 'Does it run?', 'Tests chosen by risk, plus real acceptance'],
  ['Security', 'Often assumed', 'Boundaries defined and tested'],
  ['Maintainability', 'Hard to change code nobody understands', 'Built for the team that has to change it'],
  ['AI token costs', 'Low per prompt, high across loops and rewrites', 'Higher up front, lower per delivered feature'],
  ['Human involvement', 'Low until something breaks', 'At every decision point'],
  ['Production readiness', 'Prototype, unless someone rebuilds it', 'The goal from the start'],
];

function Compare() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 705-3</span> Vibe coding and agentic engineering, side by side</caption>
        <thead><tr><th scope="col">Dimension</th><th scope="col">Vibe coding</th><th scope="col">Agentic engineering</th></tr></thead>
        <tbody>{compare.map(([dim, vibe, agentic]) => <tr key={dim}><th scope="row">{dim}</th><td data-col="Vibe">{vibe}</td><td data-col="Agentic">{agentic}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">Neither column is always right. A weekend prototype doesn’t need the right-hand column, and a billing system can’t live with the left.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="bottleneck" aria-labelledby="bottleneck-h">
        <h2 id="bottleneck-h" className="post__h2">The bottleneck moved</h2>
        <p>I’ve spent more than 20 years building software and running the systems underneath it: networks, security, infrastructure, DevOps, product and operations. Lately I’ve been spending a lot of time with AI coding agents, mostly Claude Code and Codex. I still enjoy writing code. What makes AI interesting to me is how much of the software lifecycle I can now explore and automate on my own.</p>
        <p>I’ve also noticed patterns. The agent produces working software quickly. Then I see the same shapes again and again: more abstraction than the problem needs, a second version of something that already exists, and rework when the first answer solved a slightly different problem than the one I had.</p>
        <p className="post__answer">AI has made writing code cheaper and faster. It hasn’t made bad engineering decisions cheaper. It implements them faster.</p>
        <p>The bigger change is where the time goes. A team with AI agents can now produce code faster than it can review, test and validate it. The bottleneck has moved from writing code to deciding what to build and verifying that it works. That shift is the main difference between vibe coding and agentic engineering.</p>
      </section>

      <section id="vibe" aria-labelledby="vibe-h">
        <h2 id="vibe-h" className="post__h2">What vibe coding is good at</h2>
        <p>Andrej Karpathy coined “vibe coding” for a way of working where you describe what you want, accept what the model writes, and mostly forget the code exists. The workflow is a loop:</p>
        <p className="post__pull">Prompt → generate code → run it → find problems → prompt again.</p>
        <p>It’s exciting, and it opened software up to people who couldn’t build it before. A product manager can try an idea before asking for engineering time. An operations lead can build the internal tool they’ve wanted for a year. It’s also a cheap way to find out in an afternoon whether an idea is worth more time.</p>
        <p>It works well for prototypes, demos, throwaway scripts, personal tools and experiments where being wrong costs very little.</p>
        <p>The risk starts when the loop is all there is. If nobody understands the implementation, every new prompt is a guess about code you haven’t read. Fixes stack on fixes. The app works until it meets real data, a second user role, or an attacker. And a prototype that “just works” has a way of becoming production without anyone deciding it should.</p>
      </section>

      <section id="agentic" aria-labelledby="agentic-h">
        <h2 id="agentic-h" className="post__h2">What makes it agentic engineering</h2>
        <p>About a year after coining vibe coding, Karpathy suggested <a href="https://thenewstack.io/vibe-coding-is-passe/" rel="noopener" target="_blank">“agentic engineering”</a> for the more disciplined version: you orchestrate agents that write most of the code, and you provide the oversight. The term is still settling, and people use it loosely.</p>
        <p>When I say agentic engineering, I mean AI agents working inside a normal engineering lifecycle: requirements, planning, architecture, implementation, testing, review, user acceptance, deployment and monitoring. Agents can do real work at every one of those stages. Engineers stay accountable for the decisions.</p>
        <Lifecycle />
        <p>Using several agents doesn’t mean you’re practicing agentic engineering. If five agents are prompting, generating and rewriting each other’s code without written requirements, an agreed design or a definition of done, you’re vibe coding with five agents instead of one.</p>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">One feature, built two ways</h2>
        <p>Here’s a hypothetical feature from a multi-company SaaS product. A user can belong to several companies. Each company can have more than one business identifier, such as a tax ID and a government registration number. Each user has a role per company: owner, admin, member or read-only.</p>
        <p><strong>Vibe coding it.</strong> I prompt for “multi-company accounts with roles.” In minutes I have tables, a company switcher and role checks. It demos well. Then the questions arrive one at a time, each as a new prompt. Can one identifier belong to two companies? What happens to open sessions when a user is removed from a company? Does the API check the role, or only the UI? Each answer patches the last one. A week later the permission logic lives in four places, and nobody can say with confidence that a member of company A can’t read company B’s data.</p>
        <p><strong>Engineering it with agents.</strong> Before any code, I write the rules down. Who can see what, and which identifiers must be unique. What “switching companies” means for cached data and open tabs. I ask an agent to challenge that spec and list the cases I missed. We agree on one place where authorization is enforced, on the server, for every request. Then agents implement small pieces against that design, write tests for the risky paths (cross-company access, role changes, removed users), and run a first review. I review the authorization layer myself. Business users try it on a preview environment before it merges.</p>
        <p>The second path takes longer to get to the first demo. It’s usually much faster to get to something I’d put in front of customers. I looked at the user’s side of this same kind of workflow in <Link to="/writing/code-review-in-the-ai-era/">code review doesn’t start with a pull request</Link>.</p>
      </section>

      <section id="compare" aria-labelledby="compare-h">
        <h2 id="compare-h" className="post__h2">The tradeoffs side by side</h2>
        <Compare />
        <p>Vibe coding wins on speed to a first version and on cost when the code is disposable. Agentic engineering wins once the software has to be secure, maintained by a team, and changed for years. The mistake is using one where the other belongs.</p>
      </section>

      <section id="review" aria-labelledby="review-h">
        <h2 id="review-h" className="post__h2">Code review still matters</h2>
        <p>When AI writes the code, it’s tempting to let AI review it and stop there. AI code review is useful, and I use it for the first pass on style, common bugs, missing error handling and known security patterns. But code review was never mainly about syntax. It should answer questions like these:</p>
        <ul className="post__list">
          <li>Does the implementation satisfy the business requirement?</li>
          <li>Is the architecture appropriate for the problem?</li>
          <li>Is it adding complexity the problem doesn’t need?</li>
          <li>Are security boundaries enforced on every path?</li>
          <li>Are we duplicating something that already exists?</li>
          <li>Can the team maintain it?</li>
          <li>Are we building something nobody actually needs?</li>
        </ul>
        <p>AI can help ask every one of those. It can’t own the answers, because it doesn’t carry the business context or the accountability. When the same model wrote the code and reviewed it, both can share the same misunderstanding of the requirement. I wrote about what that looks like in a diff in <Link to="/writing/recognizing-ai-generated-code/">I can recognize AI-generated code</Link>.</p>
      </section>

      <section id="parallel" aria-labelledby="parallel-h">
        <h2 id="parallel-h" className="post__h2">Review, testing and UAT in parallel</h2>
        <p>If implementation got faster, the checks after it have to keep up. Running them one after another (review, then QA, then UAT) turns a two-hour change into a two-week wait. With pull-request preview environments, they can run at the same time.</p>
        <Parallel />
        <p>Every pull request gets its own deployed preview. Automated unit, integration and end-to-end tests run in CI. An AI first pass on code and security runs alongside human review. An agent can walk through the main flows as a simulated user and flag confusing steps, unclear errors or dead ends. Business users can try the real thing on the preview while review is still going.</p>
        <p>AI-simulated usability testing is a cheap early filter. It doesn’t replace a business user accepting the feature, because the agent doesn’t know how the work is actually done. And parallel checks only work if you retest when something changes. If review feedback changes the permission logic, the earlier UAT result no longer counts for that part.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">The hidden cost of doing it wrong</h2>
        <p>Used badly, AI coding gets expensive in ways that don’t show up on a demo:</p>
        <ul className="post__list">
          <li>Repeated prompts that resend the same context and burn tokens</li>
          <li>Several agents doing overlapping work, or rewriting each other’s implementations</li>
          <li>A simple requirement turned into a framework</li>
          <li>Hundreds of tests that don’t match where the real risk is</li>
          <li>Features generated before anyone checked that customers want them</li>
          <li>AI-generated technical debt piling up faster than a team could ever write it by hand</li>
        </ul>
        <p>More AI-generated code doesn’t mean more engineering productivity. Code is a liability someone has to read, secure, test and run. Just because AI can build something in a few minutes doesn’t mean we should build it. I went through the token and rework math in <Link to="/writing/hidden-cost-of-ai-coding/">the hidden cost of AI coding</Link>, and the bigger version of this problem in <Link to="/writing/engineering-work-nobody-needed/">the most expensive engineering work is work nobody needed</Link>.</p>
      </section>

      <section id="judgment" aria-labelledby="judgment-h">
        <h2 id="judgment-h" className="post__h2">Judgment is worth more now</h2>
        <p>When typing the code is no longer the slow part, the engineer’s job shifts toward everything around it. Developers increasingly need to understand the business problem, define acceptance criteria, evaluate architecture, spot security and operational risks, review AI-generated implementations, design a testing strategy, understand deployment and production, and make build-versus-buy decisions.</p>
        <p>That’s why I think experienced generalists have an advantage with AI agents. Someone who has worked across product, development, infrastructure, security and operations knows which questions to ask at each stage, and notices when an agent’s confident answer doesn’t fit. Teams still need deep specialists. I wrote more about that balance in <Link to="/writing/generalist-advantage-in-the-ai-era/">why being a generalist is an advantage in the AI era</Link>.</p>
      </section>

      <section id="leaders" aria-labelledby="leaders-h">
        <h2 id="leaders-h" className="post__h2">What engineering leaders should change</h2>
        <p>For engineering leadership in the AI era, the work shifts toward deciding what gets built and making sure it’s verified. A few things I’d change:</p>
        <ul className="post__list">
          <li><strong>Move review earlier.</strong> Review the plan and acceptance criteria before the agents start. A wrong design costs a conversation there and a rewrite later.</li>
          <li><strong>Scale review to risk.</strong> Docs and copy can rely on automated checks. Authentication, permissions, billing, data migrations and production infrastructure always get a human approval.</li>
          <li><strong>Treat AI-generated debt like any other debt.</strong> Set standards the agents follow, keep pull requests small, and budget time to remove duplication before it spreads.</li>
          <li><strong>Balance speed against operational risk.</strong> Feature flags, gradual rollouts and a tested rollback let you ship fast without betting everything on each release.</li>
          <li><strong>Protect how juniors learn.</strong> Ask them to explain the code and the tradeoff before merging, and give them decisions to make, not only prompts to write. Judgment comes from making decisions, with a mentor close by.</li>
        </ul>
        <p>Then measure outcomes instead of output. Lines of code and prompt counts got even less meaningful once an agent can produce thousands of lines in an hour. I’d watch these at the team level:</p>
        <ul className="post__list">
          <li><strong>Lead time for changes:</strong> from commit to running in production</li>
          <li><strong>Change failure rate:</strong> how often a release causes a problem</li>
          <li><strong>Rework rate:</strong> deployments that exist to fix a recent one, which <a href="https://dora.dev/guides/dora-metrics/" rel="noopener" target="_blank">DORA</a> added to its delivery metrics</li>
          <li><strong>Escaped defects:</strong> bugs found by customers instead of by us</li>
          <li><strong>Production incidents:</strong> how many, and how severe</li>
          <li><strong>Cost per successfully delivered feature:</strong> people, tokens and infrastructure, divided by features customers actually use</li>
        </ul>
        <p>These describe how the system of work is performing. They shouldn’t be used to rank individual developers, because people learn to game whatever they’re ranked on. If lead time drops while rework and escaped defects climb, the team got faster at producing problems.</p>
        <p>The goal isn’t to generate more code. The goal is to deliver better software with less unnecessary work. More on how I approach that in <Link to="/leadership/">how I run engineering</Link>.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Code got cheaper. Decisions didn’t.</h2>
      <div className="post__close-copy">
        <p className="lead">Vibe coding makes software development more accessible. Agentic engineering gives us a structured way to use AI to build and maintain production software. Neither one removes the need for engineering judgment.</p>
        <p>The future of engineering won’t be decided by who generates code fastest. It belongs to the people who can turn a business problem into reliable software while managing complexity, risk and cost.</p>
        <p className="post__close-principle">Writing code is getting easier. Knowing what to build, how to build it, and whether it should be built at all is still the hard part.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk about how your team works with AI agents <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
