import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// KC's position (20+ years building software, leading teams and running distributed systems; works with Claude Code
// and Codex) and the article's argument come from his brief. "Loop engineering" is presented as a working framework,
// not an established methodology, as the brief asks. No anecdotes, incidents or results are invented: the scheduling
// feature and the time-zone bug are labelled hypotheticals. DORA metric names checked against dora.dev.
export const toc = [
  ['definition', 'What is loop engineering?'],
  ['decades', 'We’ve been doing this for decades'],
  ['ai', 'How AI changes the loop'],
  ['three', 'Vibe, agentic and loop engineering'],
  ['bad', 'When the feedback is wrong'],
  ['smaller', 'Smaller loops, smaller changes'],
  ['humans', 'What humans still own'],
  ['workflow', 'A practical workflow'],
  ['leaders', 'What this means for leaders'],
];

// ---------- Fig. 707-1: the loop, split into the inner loop an agent can run and the outer loop people own ----------
const loop = [
  ['Understand', 'The problem, in the user’s words, agreed with whoever asked for it', 'Person'],
  ['Plan', 'A small plan someone has read before any code exists', 'Person, agent drafts'],
  ['Build', 'One small change against the plan', 'Agent'],
  ['Test', 'Tests written from the acceptance criteria, run by CI', 'Agent and CI'],
  ['Review', 'A person reads the change and tries the behavior', 'Person'],
  ['Learn', 'Production errors, usage, support tickets', 'Person, agent summarizes'],
];

function Loop() {
  return (
    <figure className="loopfig post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 707-1</span> The engineering loop, and the signal that closes each step
        <span className="journey__key label">Dashed steps are the inner loop an agent can repeat on its own. Solid steps are where a person decides whether to go on.</span>
      </figcaption>
      <ol className="loopfig__steps">
        {loop.map(([name, signal, who], i) => (
          <li key={name} className={`loopfig__step${who.startsWith('Agent') ? ' is-agent' : ''}`}>
            <span className="loopfig__name"><span className="mono">{String(i + 1).padStart(2, '0')}</span> {name}</span>
            {signal}
            <span className="loopfig__who label">{who}</span>
          </li>
        ))}
      </ol>
      <p className="loopfig__back label">Repeat: what Learn finds becomes the next Understand. A failed test goes back to Build; a failed review usually goes back to Plan.</p>
    </figure>
  );
}

// ---------- Fig. 707-2: vibe coding, agentic engineering and loop engineering ----------
const approaches = [
  ['Vibe coding', 'Generate working code quickly', 'Little understanding or validation of what was built'],
  ['Agentic engineering', 'Delegate implementation tasks to AI agents', 'The wrong outcome, delivered by a run that succeeded'],
  ['Loop engineering', 'Validate and improve the outcome on every pass', 'Poor feedback that reinforces a wrong assumption'],
];

function Approaches() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 707-2</span> Three ways of working with AI, by what each optimizes and how each fails</caption>
        <thead><tr><th scope="col">Approach</th><th scope="col">Primary focus</th><th scope="col">Main risk</th></tr></thead>
        <tbody>{approaches.map(([name, focus, risk]) => <tr key={name}><th scope="row">{name}</th><td data-col="Focus">{focus}</td><td data-col="Risk">{risk}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">These overlap. Loop engineering is the discipline that makes agentic engineering trustworthy.</figcaption>
    </figure>
  );
}

// ---------- Fig. 707-3: traditional vs agentic development ----------
const compare = [
  ['Who writes the code', 'The engineer', 'The agent, against a plan the engineer approved'],
  ['Where engineers spend time', 'Implementing and debugging', 'Defining outcomes, constraints and checks, then reviewing'],
  ['Cost of one iteration', 'Hours to days', 'Minutes'],
  ['What limits speed', 'Typing and debugging', 'Review capacity and test quality'],
  ['Main failure mode', 'Slow delivery, bugs found late', 'Fast delivery of the wrong thing'],
  ['What a passing build proves', 'Roughly what the engineer meant to test', 'Only what the tests check, which the agent may have written'],
];

function Compare() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 707-3</span> Traditional and agentic development, side by side</caption>
        <thead><tr><th scope="col">Dimension</th><th scope="col">Traditional</th><th scope="col">Agentic</th></tr></thead>
        <tbody>{compare.map(([dim, a, b]) => <tr key={dim}><th scope="row">{dim}</th><td data-col="Traditional">{a}</td><td data-col="Agentic">{b}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

// ---------- Fig. 707-4: the ten-step workflow, with who closes each step ----------
const workflow = [
  ['Define the expected behavior', 'What a customer can do, written as acceptance criteria', 'Human gate'],
  ['List constraints and edge cases', 'Time zones, double booking, cancellations, permissions. The agent can suggest more', 'Human gate'],
  ['Agent proposes a small plan', 'Files it will touch, data changes, tests it will add', 'Agent'],
  ['Review the plan', 'Approve, narrow or reject before code exists', 'Human gate'],
  ['Implement one piece', 'One slice, inside the approved files', 'Agent loop'],
  ['Run unit, integration and E2E tests', 'In CI, against tests the agent cannot edit', 'Agent loop'],
  ['Analyze failures, propose fixes', 'Up to three attempts per failure, then stop and report', 'Agent loop'],
  ['Human acceptance testing', 'Someone books, moves and cancels a real appointment on a preview', 'Human gate'],
  ['Deploy with monitoring', 'Behind a flag, with alerts on booking errors', 'Human gate'],
  ['Evaluate production feedback', 'Errors, abandoned bookings, support tickets', 'Human gate'],
];

function Workflow() {
  return (
    <figure className="loopflow post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 707-4</span> A loop engineering workflow for one feature
        <span className="journey__key label">Dashed steps can repeat without a person. Solid steps need someone to approve before the next one starts.</span>
      </figcaption>
      <ol className="loopflow__steps">
        {workflow.map(([step, what, who], i) => (
          <li key={step} className={`loopflow__step${who === 'Agent loop' || who === 'Agent' ? ' is-agent' : ''}`}>
            <span className="loopflow__name"><span className="mono">{String(i + 1).padStart(2, '0')}</span> {step}</span>
            <span className="loopflow__what">{what}</span>
            <span className="loopflow__who label">{who}</span>
          </li>
        ))}
      </ol>
      <p className="loopfig__back label">Three failed attempts at step 7 send the work back to step 3 with a person.</p>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="definition" aria-labelledby="definition-h">
        <h2 id="definition-h" className="post__h2">What is loop engineering?</h2>
        <p className="post__answer">Loop engineering is building software around short, repeatable feedback loops: understand the problem, plan, build, test, review, learn, and repeat. With AI coding agents, the engineer’s main job becomes designing the feedback the agent works against.</p>
        <p>It isn’t an official methodology. There’s no manifesto or certification. I use the term as a practical name for something good teams already do, which matters more now that an agent can run the build and test steps dozens of times an hour.</p>
        <Loop />
        <p>Asking an agent to write code and accepting what comes back is one pass through the middle of that loop, with nothing at either end. Nobody checked the problem going in, and nobody checked the result coming out. Loop engineering puts both ends back and makes each step produce a signal you can act on.</p>
        <p>The important part is the quality of that signal. An agent that iterates ten times against a weak test suite gets very good at passing weak tests.</p>
      </section>

      <section id="decades" aria-labelledby="decades-h">
        <h2 id="decades-h" className="post__h2">We’ve been doing this for decades</h2>
        <p>Software engineering has always been more than writing code. It’s understanding a problem, making decisions, checking assumptions, delivering something that works and learning from what happens next. Most of our best practices are feedback loops of different lengths:</p>
        <ul className="post__list">
          <li>Test-driven development: seconds to minutes. Does this function do what I said it would?</li>
          <li>Continuous integration: minutes. Does my change still work with everyone else’s?</li>
          <li>Code review: hours. Does another engineer understand it and agree with the approach?</li>
          <li>Agile iterations: a week or two. Did we build what the business needed?</li>
          <li>Monitoring and observability: continuous. Is it working for real users right now?</li>
          <li>Incident reviews: after something breaks. Why did our other loops miss it?</li>
          <li>Customer feedback: weeks to months. Did it solve the problem?</li>
        </ul>
        <p>None of this is new. I made the same argument about design and requirements in <Link to="/writing/forward-engineering-isnt-new/">forward engineering isn’t new</Link>. What’s changing is how fast the inner loops can run, and that puts new pressure on the outer ones.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">How AI changes the loop</h2>
        <p>The traditional loop looks like this:</p>
        <p className="post__pull">Engineer → write code → run tests → debug → review → deploy</p>
        <p>With an agent like Claude Code or Codex, it looks more like this:</p>
        <p className="post__pull">Engineer defines the outcome → AI plans → AI implements → automated validation → AI fixes → human reviews → deploy</p>
        <p>The engineer has moved to both ends. More of the time goes into defining the outcome, the constraints and the checks up front, and into reviewing behavior at the end. The middle runs faster than any person could run it.</p>
        <Compare />
        <p>The last row matters most. When the same agent writes the code and the tests, a green build tells you the two agree with each other. It doesn’t tell you either one matches what the customer needed. That’s why an agent shouldn’t be allowed to keep changing code without checks it can’t influence and a limit on how long it can keep trying.</p>
      </section>

      <section id="three" aria-labelledby="three-h">
        <h2 id="three-h" className="post__h2">Vibe coding, agentic engineering and loop engineering</h2>
        <p>I compared the first two in <Link to="/writing/vibe-coding-vs-agentic-engineering/">vibe coding vs. agentic engineering</Link>. Loop engineering is the third piece, and it’s the part that makes the second one work.</p>
        <Approaches />
        <p>Agentic engineering asks who does the work. Loop engineering asks how we’ll know the work is right, at every step, and what happens when it isn’t.</p>
      </section>

      <section id="bad" aria-labelledby="bad-h">
        <h2 id="bad-h" className="post__h2">When the feedback is wrong</h2>
        <p>A fast loop with bad feedback produces wrong answers faster. These are the failure modes I watch for:</p>
        <ul className="post__list">
          <li>The agent fixes symptoms. A test fails, it adds a special case, the test passes, and the bug underneath stays.</li>
          <li>Tests pass but check the implementation, not the business requirement.</li>
          <li>The agent changes unrelated code to make its change fit.</li>
          <li>Each fix adds a layer, and the solution keeps getting more complicated.</li>
          <li>Acceptance criteria were vague, so the agent built a reasonable reading of them that nobody wanted.</li>
          <li>The agent grades its own work, with no independent check.</li>
          <li>An engineer sees green checks and merges without trying the feature.</li>
        </ul>
        <p>Here’s a hypothetical that combines several of these. An agent builds appointment booking for a business with customers in more than one time zone. It stores every slot in UTC, and its tests confirm that a booking for 9:00 UTC is saved as 9:00 UTC. Every test passes. The review looks clean. But the booking page shows available slots in the server’s time zone, so a customer three hours away picks “9:00,” thinking it’s their morning, and arrives at the wrong time.</p>
        <p>The code did what the tests said. The tests checked storage, and nobody had written down that customers must see slots in their own time zone. A successful execution loop doesn’t mean a successful engineering outcome. The fix starts with an acceptance criterion and a test written from the customer’s side of the screen.</p>
      </section>

      <section id="smaller" aria-labelledby="smaller-h">
        <h2 id="smaller-h" className="post__h2">Smaller loops, smaller changes</h2>
        <p>I prefer small user stories and small pull requests, and AI makes that preference stronger. The bigger the change, the longer the loop, and the more it costs to be wrong. Small changes give you:</p>
        <ul className="post__list">
          <li>Feedback in minutes or hours instead of at the end of a sprint</li>
          <li>Reviews someone can read carefully</li>
          <li>Less risk per deployment</li>
          <li>Debugging where the cause is one of a few changed lines</li>
          <li>Rollback that undoes one thing</li>
          <li>A team that knows what changed</li>
        </ul>
        <p>An agent can produce a 3,000-line pull request in the time it takes to get coffee. Nobody reviews 3,000 lines carefully, so that pull request has effectively skipped review. Continuous delivery depends on keeping each change small enough that the loop closes quickly. I wrote about the team side of this in <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link>.</p>
      </section>

      <section id="humans" aria-labelledby="humans-h">
        <h2 id="humans-h" className="post__h2">What humans still own</h2>
        <p>AI can help with every item on this list. Accountability for each one stays with the engineering team:</p>
        <ul className="post__list">
          <li>Understanding the actual business problem</li>
          <li>Architecture decisions, including the ones to <Link to="/writing/the-architecture-you-dont-build/">not build at all</Link></li>
          <li>Security and compliance</li>
          <li>Acceptance criteria</li>
          <li>Weighing tradeoffs</li>
          <li>Production readiness</li>
          <li>Deciding when a solution is good enough</li>
        </ul>
        <p>The last one is easy to miss. An agent will keep improving something as long as you let it. Someone has to decide that the change does what it needs to, at a cost that makes sense, and stop.</p>
      </section>

      <section id="workflow" aria-labelledby="workflow-h">
        <h2 id="workflow-h" className="post__h2">A practical loop engineering workflow</h2>
        <p>This is how I’d run a hypothetical feature, letting customers book appointments, with Claude Code or Codex.</p>
        <Workflow />
        <p>The pattern is that people approve direction and agents iterate inside it. Steps 1 to 4 decide what we’re building and how. Steps 5 to 7 are where automated iteration pays off, because the agent is working against checks a person already agreed with. Steps 8 to 10 confirm it worked for a real user.</p>
        <p>The guardrails I’d set before step 5:</p>
        <ul className="post__list">
          <li>Three attempts at the same failure, then the agent stops and reports what was tried. Repeated failure usually means the plan is wrong, and more attempts won’t fix a plan.</li>
          <li>The plan names the files and directories the agent may change. Anything outside that is a new conversation.</li>
          <li>Tests come from the acceptance criteria and the agent can’t edit them without approval. CI runs them, not the agent’s own report.</li>
          <li>When the agent hits a limit, touches authentication or payments, or wants to change a test, a person decides.</li>
          <li>Project rules live in a CLAUDE.md or AGENTS.md file, so every session starts with the same constraints.</li>
        </ul>
        <p>Review scales with risk. A copy change can lean on automated checks. Anything touching permissions, money or customer data gets a person, which I covered in <Link to="/writing/code-review-in-the-ai-era/">code review doesn’t start with a pull request</Link>. Unlimited loops also cost real money in tokens and time, as I worked through in <Link to="/writing/hidden-cost-of-ai-coding/">the hidden cost of AI coding</Link>.</p>
      </section>

      <section id="leaders" aria-labelledby="leaders-h">
        <h2 id="leaders-h" className="post__h2">What this means for engineering leaders</h2>
        <p>If AI cuts implementation time, the bottleneck moves somewhere else. On most teams it moves to:</p>
        <ul className="post__list">
          <li>How clear the requirements are</li>
          <li>Architecture decisions</li>
          <li>Review capacity</li>
          <li>Test quality</li>
          <li>Deployment safety</li>
          <li>Coordination across teams</li>
        </ul>
        <p>That changes what to invest in. A team that doubles its code output without improving its tests or adding review capacity has built a bigger queue in front of review.</p>
        <p>It also changes what to measure. Lines of code, pull request counts and agent iterations were weak measures before AI, and they’re now trivial to inflate. I’d look at:</p>
        <ul className="post__list">
          <li>Lead time to deliver useful functionality</li>
          <li>Change failure rate, how often a release causes a problem</li>
          <li>Time to recover when one does</li>
          <li>Escaped defects that customers find before we do</li>
          <li>Rework, changes that exist to fix recent changes</li>
          <li>Customer outcomes, whether the feature solved the problem it was built for</li>
        </ul>
        <p>The first three come from <a href="https://dora.dev/guides/dora-metrics/" rel="noopener" target="_blank">DORA’s delivery metrics</a>. All of them describe how well the loop works, which is why they’re harder to game than activity counts. More on how I run teams in <Link to="/leadership/">how I run engineering</Link>.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Check the result before adding more code</h2>
      <div className="post__close-copy">
        <p className="lead">AI has reduced the cost of writing code. The cost of building the wrong thing is still there, and it shows up later and bigger when the feedback is weak.</p>
        <p className="post__close-principle">I want each loop to tell us something specific about whether the software solves the problem, before we spend time building on it.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me how your team works with AI agents <ArrowRight /></Link>
          <Link to="/writing/vibe-coding-vs-agentic-engineering/" className="link-arrow"><span>Vibe coding vs. agentic engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
