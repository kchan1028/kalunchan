import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Why AI coding can cost more than a human engineer when it is used badly. KC's verified experience only
// (co-founder and CTO, media publishing CTO, marketing at the family restaurant, building FedPath and client work
// with AI, mentoring). The junior, marketing and review examples are illustrations, labeled as such, not stories
// about real people. Prices come from the official pricing pages, checked 12 October 2026 (platform.claude.com
// pricing, claude.com/pricing, developers.openai.com pricing); the Claude Code averages come from Anthropic's
// "Manage costs effectively" page (code.claude.com/docs/en/costs). Every cost scenario is hypothetical and says so;
// the arithmetic is in `scenarios` below, so the chart and the table can't disagree.

export const toc = [
  ['directed', 'Only as good as the person directing it'],
  ['junior', 'The junior developer and the login loop'],
  ['outside', 'A developer running the marketing'],
  ['reviews', 'The review that never ends'],
  ['economics', 'The real economics of AI coding'],
  ['judgment', 'Judgment got more valuable'],
  ['leaders', 'What engineering leaders can do'],
  ['literacy', 'AI literacy is not expertise'],
];

// ---------- Fig. 700-1: AI and mentorship ----------
const mentorSteps = [
  { who: 'Senior engineer', what: 'Defines the task', how: 'Writes what done means and names the risky parts.' },
  { who: 'Junior developer', what: 'Learns the idea', how: 'In a separate session, before writing the feature.' },
  { who: 'AI agent', what: 'Assists the build', how: 'One small task, against the written definition.', ai: true },
  { who: 'Senior engineer', what: 'Reviews with them', how: 'Explains the why, not only the fix.' },
  { who: 'Junior developer', what: 'Gains experience', how: 'The next task gets a little bigger.' },
];

function MentorFlow() {
  return (
    <figure className="aimentor post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 700-1</span> AI plus mentorship: the junior developer learns, and the AI does the typing
        <span className="journey__key label">Read left to right. The dashed step is the AI. Everything around it is people.</span>
      </figcaption>
      <ol className="aimentor__steps">
        {mentorSteps.map((s, i) => (
          <li key={s.what} className={`aimentor__step${s.ai ? ' is-ai' : ''}`}>
            <span className="aimentor__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="aimentor__who label">{s.who}</span>
            <span className="aimentor__what">{s.what}</span>
            <span className="aimentor__how">{s.how}</span>
          </li>
        ))}
      </ol>
      <p className="aimentor__back label">Then repeat, with a bigger task and a little less supervision.</p>
    </figure>
  );
}

// ---------- Fig. 700-2: the expensive loop vs the deliberate path ----------
const loopSteps = ['Prompt', 'Generate', 'Confusion', 'Review', 'Rewrite', 'Test'];
const pathSteps = [
  ['Define', 'What done means, in writing'],
  ['Plan', 'The approach, agreed before code'],
  ['Generate', 'The AI drafts one small piece'],
  ['Verify', 'Against the definition, by a person'],
  ['Deliver', 'Merge it and stop'],
];

function LoopVsPath() {
  return (
    <figure className="ailoop post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 700-2</span> The expensive loop and the deliberate path use the same AI
        <span className="journey__key label">The loop has no exit, because nobody wrote down what done looks like. The path ends when the definition is met.</span>
      </figcaption>
      <div className="ailoop__grid">
        <section className="ailoop__panel is-loop" aria-labelledby="ailoop-loop">
          <h3 id="ailoop-loop" className="ailoop__name">The expensive loop</h3>
          <ol className="ailoop__steps">
            {loopSteps.map((s) => <li key={s}>{s}</li>)}
          </ol>
          <p className="ailoop__back"><span aria-hidden="true">↻ </span>Repeat from the prompt. Each lap resends the whole conversation and costs another hour.</p>
          <p className="ailoop__end">Result: higher cost, no clear finish</p>
        </section>
        <section className="ailoop__panel is-path" aria-labelledby="ailoop-path">
          <h3 id="ailoop-path" className="ailoop__name">The deliberate path</h3>
          <ol className="ailoop__steps">
            {pathSteps.map(([s, note]) => <li key={s}><span>{s}</span> <span className="ailoop__note">{note}</span></li>)}
          </ol>
          <p className="ailoop__end">Result: done, by a definition written first</p>
        </section>
      </div>
    </figure>
  );
}

// ---------- Fig. 700-3: list prices ----------
const prices = [
  { model: 'Claude Opus 5.5', input: '$4', cached: '$0.20', output: '$20' },
  { model: 'Claude Sonnet 5.5', input: '$2', cached: '$0.10', output: '$10' },
  { model: 'Claude Haiku 5.5 (prompts up to 100,000 tokens)', input: '$0.10', cached: '$0.01', output: '$0.50' },
  { model: 'OpenAI gpt-6.1-sol', input: '$2', cached: '$0.10', output: '$10' },
];

function Prices() {
  return (
    <figure className="post__figure">
      <table className="post__table aiprice">
        <caption>
          <span className="mono">Fig. 700-3</span> API list prices per million tokens, as of October 2026
        </caption>
        <thead>
          <tr><th scope="col">Model</th><th scope="col">Input</th><th scope="col">Cached input</th><th scope="col">Output</th></tr>
        </thead>
        <tbody>
          {prices.map((p) => (
            <tr key={p.model}><th scope="row">{p.model}</th><td>{p.input}</td><td>{p.cached}</td><td>{p.output}</td></tr>
          ))}
        </tbody>
        <tfoot>
          <tr><td colSpan={4}>Standard rates from <a href="https://platform.claude.com/docs/en/about-claude/pricing" rel="noopener" target="_blank">Anthropic’s pricing page</a> and <a href="https://developers.openai.com/api/docs/pricing" rel="noopener" target="_blank">OpenAI’s pricing page</a>. Cache writes, batch discounts and long-context rates differ. Prices change, so check the source before you budget.</td></tr>
        </tfoot>
      </table>
    </figure>
  );
}

// ---------- Fig. 700-4: hypothetical cost per accepted change ----------
// Opus 5.5 list prices; everything else is an illustrative assumption, shown in the text below the figure.
const RATE = { input: 4, cached: 0.2, output: 20 }; // $ per million tokens
const SENIOR = 120; // hypothetical fully loaded $ per hour
const JUNIOR = 70;
const tokenCost = ({ requests, cachedContext, freshInput, output, misses }) =>
  (requests * (cachedContext * RATE.cached + freshInput * RATE.input + output * RATE.output) + misses * cachedContext * RATE.input) / 1e6;

export const scenarios = [
  {
    name: 'Experienced engineer, no AI',
    build: 16 * SENIOR, review: 1 * SENIOR, rework: 2 * SENIOR, tokens: 0,
  },
  {
    name: 'Junior developer with AI',
    build: 24 * JUNIOR,
    review: 6 * SENIOR,
    rework: 6 * JUNIOR,
    tokens:
      tokenCost({ requests: 900, cachedContext: 250_000, freshInput: 15_000, output: 4_000, misses: 90 })
      + tokenCost({ requests: 200, cachedContext: 200_000, freshInput: 10_000, output: 3_000, misses: 20 }),
  },
  {
    name: 'Experienced engineer with AI',
    build: 6 * SENIOR, review: 1 * SENIOR, rework: 0.5 * SENIOR,
    tokens: tokenCost({ requests: 150, cachedContext: 150_000, freshInput: 8_000, output: 3_000, misses: 10 }),
  },
].map((s) => ({ ...s, total: s.build + s.review + s.rework + s.tokens }));

const parts = [
  ['build', 'Building'],
  ['review', 'Senior review'],
  ['rework', 'Rework'],
  ['tokens', 'AI tokens'],
];
const usd = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
const max = Math.max(...scenarios.map((s) => s.total));

function CostChart() {
  return (
    <figure className="aicost post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 700-4</span> What one accepted login feature might cost, three ways (hypothetical)
        <span className="journey__key label">Illustrative hours, hourly costs and token volumes. Token prices are Claude Opus 5.5 list rates. Not a measurement of any real team.</span>
      </figcaption>
      <ul className="aicost__legend">
        {parts.map(([key, label]) => <li key={key}><span className={`aicost__swatch is-${key}`} aria-hidden="true" />{label}</li>)}
      </ul>
      <div className="aicost__rows" aria-hidden="true">
        {scenarios.map((s) => (
          <div key={s.name} className="aicost__row">
            <span className="aicost__name">{s.name}</span>
            <div className="aicost__track">
              <div className="aicost__bar" style={{ width: `calc((100% - 4.5rem) * ${(s.total / max).toFixed(4)})` }}>
                {parts.map(([key, label]) => s[key] > 0 && (
                  <span key={key} className={`aicost__seg is-${key}`} style={{ flexGrow: s[key] }} title={`${label}: ${usd(s[key])}`} />
                ))}
              </div>
              <span className="aicost__total">{usd(s.total)}</span>
            </div>
          </div>
        ))}
      </div>
      {/* A labeled, focusable scroll region, so a phone scrolls the table and never the page. */}
      <div className="aicost__scroll" role="region" aria-label="Cost per accepted change, as a table" tabIndex={0}>
      <table className="post__table aicost__table">
        <caption className="visually-hidden">The same figures as a table</caption>
        <thead>
          <tr>
            <th scope="col">Scenario</th>
            {parts.map(([key, label]) => <th key={key} scope="col">{label}</th>)}
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((s) => (
            <tr key={s.name}>
              <th scope="row">{s.name}</th>
              {parts.map(([key]) => <td key={key}>{usd(s[key])}</td>)}
              <td><strong>{usd(s.total)}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </figure>
  );
}

export default function Body() {
  const [, junior, senior] = scenarios;
  return (
    <>
      <section id="directed" aria-labelledby="directed-h">
        <h2 id="directed-h" className="post__h2">AI is only as effective as the person directing it</h2>
        <p>Give five people the same AI coding agent and you won’t get five equal results. I use these tools every day, on my own products and on client work, and the difference between users is bigger than the difference between tools.</p>
        <p className="post__answer">AI coding tools multiply the skill of the person using them. An engineer who knows what to build, and how to check it, gets faster. Someone who can’t judge the output gets more output to judge, and more ways to go in circles.</p>
        <ul className="post__list">
          <li>A junior developer gets working code quickly, but often can’t tell whether it’s good. So they ask the AI to check its own work, and then to check the check.</li>
          <li>An experienced engineer already knows what done looks like. They use the AI to draft, then compare the draft with what they know about the system, the users and the failure cases.</li>
          <li>A nontechnical user can get an impressive demo running in an afternoon. What they usually can’t see is the missing security check, the data that will be lost on the next deploy, or the hosting bill that arrives later.</li>
        </ul>
        <p>AI doesn’t care which kind of decision it is executing. A good decision gets done sooner. A bad decision also gets done sooner, and now there is code to undo as well.</p>
      </section>

      <section id="junior" aria-labelledby="junior-h">
        <h2 id="junior-h" className="post__h2">The junior developer and the login loop</h2>
        <p>Picture a junior developer asked to add login to a web app: sign up, sign in, and password reset. This is an illustration, but anyone who has led a team will recognize it.</p>
        <p>They ask the AI agent to build it, and it does. They don’t fully follow the code, so they ask it to explain. Then they ask it to review the code. The review suggests changes, so they ask it to apply them. They run the tests, three fail, and they ask it to fix them. The fix breaks the password reset. They ask for a rewrite “using a cleaner approach,” then ask for another review of the rewrite. By the end of the week the feature mostly works, and nobody, including the developer, is sure why.</p>
        <p className="post__answer">That loop is expensive because an AI coding agent rereads the conversation on every request. A long session that keeps asking for explanations, reviews and rewrites sends the same large context to the model again and again, so token usage grows with every lap. The bigger cost is the days spent, and the senior time needed to untangle the result.</p>
        <p>Login is also a bad place to learn by trial and error. It touches passwords, sessions and account recovery, which are exactly where a plausible-looking mistake becomes a security problem.</p>
        <p>I want junior developers using AI. I learned SIP from packet captures and a lot of trial and error, and today’s junior developers have a tutor that never gets tired of questions. What needs to change is how the work is set up:</p>
        <ul className="post__list">
          <li>A senior engineer mentors them, setting the task up and reviewing it with them, not after them.</li>
          <li>Tasks get smaller: “Add the password reset email” instead of “add login.”</li>
          <li>Clear acceptance criteria are written before the first prompt, so there is something to check the output against.</li>
          <li>Learning happens separately from building. Ask the AI to teach how sessions and tokens work in a scratch session, on a small model. Then build the feature in a short, focused session.</li>
        </ul>
        <MentorFlow />
        <p>I wrote more about why I enjoy this part of the job in <Link to="/writing/why-i-enjoy-mentoring/">why I enjoy mentoring</Link>. AI doesn’t replace that work. It makes it more important, because the junior developer can now produce code faster than they can learn from it.</p>
      </section>

      <section id="outside" aria-labelledby="outside-h">
        <h2 id="outside-h" className="post__h2">A developer running the marketing</h2>
        <p>Now picture a capable software developer who has built a side product and wants customers. They ask the AI for a marketing plan. Then they ask it to rewrite the messaging, improve the SEO, and redesign the landing page. A week later they decide the target audience is wrong, so they ask for a new audience, new messaging and a reworked website.</p>
        <p>Every answer looks reasonable, and that is what keeps the loop going. Without marketing experience, the developer has no way to judge which version is better, so the only move left is to ask again. The AI won’t say, “Stop rewriting the page and go talk to ten customers.” It answers the question it was given.</p>
        <p className="post__answer">When people use AI outside their own expertise, most of the cost comes from rework. Missing domain knowledge removes the stopping rule: if you can’t tell a good answer from a weak one, you keep asking, and every round changes things without moving them forward.</p>
        <p>I learned that side of the business the slow way, first running marketing at my family’s restaurant and later as CTO of a media publishing company where organic search was how the business grew. <Link to="/writing/what-publishing-taught-me-about-seo-aeo-geo/">What publishing taught me about SEO</Link> is that you decide who the page is for before you write it, and you change one thing at a time so you can tell what worked. AI makes the writing faster. It doesn’t make that decision for you.</p>
        <p>If you are outside your field, an hour with someone who knows it will usually save more than another week of prompts.</p>
      </section>

      <section id="reviews" aria-labelledby="reviews-h">
        <h2 id="reviews-h" className="post__h2">The hidden cost of endless AI reviews</h2>
        <p>Ask an AI agent to review code and it will find something. Another test. A refactor. A helper function. An edge case that can’t happen in your system. Apply the suggestions, ask again, and you’ll get a new list. It never runs out, because “could this be better?” always has an answer.</p>
        <p className="post__answer">More AI reviews don’t always mean better software. Each round costs tokens and time, and the suggestions often add code that someone has to maintain. Software is good enough when it meets the written acceptance criteria, the risky paths are tested, a person who owns it has read it, and the next suggestion wouldn’t change anything for the user.</p>
        <p>That last test matters most. Complexity should earn its place, and I’ve written about <Link to="/writing/hidden-cost-of-software-architecture/">what that complexity costs to run</Link>. A layer the AI suggested still has to be run and maintained by someone on the team.</p>
        <LoopVsPath />
      </section>

      <section id="economics" aria-labelledby="economics-h">
        <h2 id="economics-h" className="post__h2">The real economics of AI coding</h2>
        <p>There are two ways to pay for AI coding tools, and they hide waste in different places.</p>
        <p className="post__answer">Subscription plans charge a flat monthly price with usage limits. API billing charges for every token the model reads and writes. On a subscription, wasted loops show up as hitting your limit and waiting, or paying for extra usage. On the API, they show up on the bill.</p>
        <ul className="post__list">
          <li><strong>Subscriptions.</strong> Claude’s Pro plan is $20 a month billed monthly, Max starts at $100 a month, and Team seats start at $25 a month billed monthly. All of them include Claude Code. Usage resets on a rolling five-hour window, paid plans also have weekly limits, and Claude Code shares that allowance with chat. When you run out, you wait, upgrade, or buy usage credits at API rates. (From <a href="https://claude.com/pricing" rel="noopener" target="_blank">claude.com/pricing</a>.)</li>
          <li><strong>API billing.</strong> You pay per million tokens, with separate prices for input, output and cached input. Output costs about five times as much as input on the models below. Thinking counts as output.</li>
        </ul>
        <Prices />
        <p>Anthropic publishes a useful reference point. Across enterprise deployments of Claude Code, the average cost is around $13 per developer per active day and $150 to $250 per developer per month, and 90% of users stay below $30 per active day (<a href="https://code.claude.com/docs/en/costs" rel="noopener" target="_blank">Claude Code cost documentation</a>).</p>
        <p>For most teams that is less than a day of an engineer’s time each month. So the token bill usually isn’t the biggest cost. The biggest cost is the people time a bad loop burns, and the senior time it pulls in to clean up.</p>
        <p>To make that concrete, here is a hypothetical comparison for one login feature, measured as <strong>cost per accepted change</strong>: everything spent until a change is merged and stays merged.</p>
        <CostChart />
        <p>The assumptions behind it, all illustrative:</p>
        <ul className="post__list">
          <li><strong>Hourly cost.</strong> $120 an hour, fully loaded, for an experienced engineer and $70 for a junior developer. Use your own numbers.</li>
          <li><strong>Without AI.</strong> 16 hours to build, an hour of review, two hours of fixes.</li>
          <li><strong>Junior with AI.</strong> 24 hours across a week of loops, about 1,100 model requests carrying long conversations, one rejected attempt, six hours of senior review and rescue, then six hours of rework. That comes to roughly 311 million tokens, mostly the same conversation read again from cache.</li>
          <li><strong>Experienced with AI.</strong> Six hours, about 150 focused requests, one hour of review, half an hour of fixes.</li>
          <li><strong>Prices.</strong> Claude Opus 5.5 list rates from the table above, with a share of requests missing the cache after breaks.</li>
        </ul>
        <p>Under those assumptions the junior developer with AI costs about {usd(junior.total)}, more than the experienced engineer working without AI. The AI tokens are only about {Math.round((junior.tokens / junior.total) * 100)}% of that. The experienced engineer with AI comes in around {usd(senior.total)}. Change the assumptions and the numbers move, but in most versions I can construct, the hours cost far more than the tokens.</p>
        <p>These are hypothetical numbers. In a future article I want to run the real experiment: give the same task to a junior engineer and an experienced engineer, both using AI, and compare total tokens, retries, human time and code quality.</p>
      </section>

      <section id="judgment" aria-labelledby="judgment-h">
        <h2 id="judgment-h" className="post__h2">AI makes engineering judgment more valuable</h2>
        <p>The most expensive code is code that works and solves the wrong problem. AI makes that code faster to write, so the person who can stop it before it is written matters more.</p>
        <p className="post__answer">Experienced engineers save money with AI mostly by what they don’t ask it to build. They notice an unclear requirement, unneeded complexity, or the wrong architecture before the agent spends hours implementing it.</p>
        <p>In the login example, an experienced engineer would ask questions before any code exists. Do we need to build login ourselves, or should we use the identity provider we already pay for? Does password reset by text message need a messaging vendor we don’t have yet? Does this need to be <Link to="/writing/should-it-be-a-microservice/">its own service</Link>, or a module in the app we already run? Each of those answers can remove days of work. No amount of prompting finds them if nobody asks.</p>
        <p>The same judgment shows up after the code is written. An experienced engineer can read an AI’s confident explanation and see that it’s wrong, mostly because they have been wrong in production before. It is also why I care about <Link to="/writing/engineering-work-nobody-needed/">not building work nobody needed</Link>.</p>
      </section>

      <section id="leaders" aria-labelledby="leaders-h">
        <h2 id="leaders-h" className="post__h2">Recommendations for engineering leaders</h2>
        <p>Giving everyone an AI agent is easy. Getting value from it takes the same management habits as any other engineering spend.</p>
        <ul className="post__list">
          <li>Set a monthly AI usage budget per team and review it like any other cost. The point is to notice unusual spend, not to punish people for using the tools.</li>
          <li>Monitor tokens and runs. Claude Code shows session usage with <code>/usage</code>, and API organizations get usage reports and per-user analytics. Look at which tasks consume the most, and why.</li>
          <li>Set retry limits. If the agent hasn’t solved it after the third attempt, stop and bring in a person. A fourth attempt with the same context rarely does better.</li>
          <li>Pick the model for the job. A smaller, cheaper model handles most routine coding. Save the largest model for hard design and reasoning, and use the smallest for simple subtasks.</li>
          <li>Keep tasks small. <Link to="/writing/smaller-user-stories-and-pull-requests/">Smaller user stories and pull requests</Link> help AI for the same reasons they help people: less context, clearer checks, easier review.</li>
          <li>Write acceptance criteria first. If you can’t say what done looks like, the agent can’t either.</li>
          <li>Keep people accountable for what ships. Someone who understands the code reads it, especially around login, payments and anything that deletes data.</li>
          <li>Pair AI with mentorship. Have senior engineers look at how juniors use the tools, not only at what they merge.</li>
          <li>Measure cost per accepted change. People hours plus tokens plus review plus rework, divided by changes that were merged and stayed merged. Lines of code and prompt counts don’t tell you much.</li>
        </ul>
        <p>Start fresh sessions between unrelated tasks, too. Old context carried into a new task is sent again with every request, and you pay for it each time.</p>
      </section>

      <section id="literacy" aria-labelledby="literacy-h">
        <h2 id="literacy-h" className="post__h2">AI literacy vs. domain expertise</h2>
        <p>Knowing how to run Claude Code, Codex or another agent is a real skill, and it is mostly a skill of steering. Deciding where to go takes knowledge of the field.</p>
        <p className="post__answer">Being good at operating AI coding agents doesn’t make someone a software architect, a marketing strategist or a product leader. AI literacy is knowing how to get output from the tool. Domain expertise is knowing whether the output is right, and what to ask for in the first place.</p>
        <p>Strong teams need both, and they don’t need everyone to have all of it. A good team knows who has the expertise and brings them in early, which is what <Link to="/writing/good-teams-dont-expect-everyone-to-know-everything/">good teams do with knowledge in general</Link>. With AI in the loop, skipping that step costs more, because the wrong work gets built faster.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What AI changes, and what it doesn’t</h2>
      <div className="post__close-copy">
        <p className="lead">AI doesn’t automatically make someone a better engineer, marketer or business strategist. It makes them faster at executing decisions, including bad ones.</p>
        <p className="post__close-principle">Every engineer can have an AI agent. The advantage comes from a team that knows how to use AI without wasting time, money or engineering judgment.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk about your team’s AI workflow <ArrowRight /></Link>
          <Link to="/mentorship/" className="link-arrow"><span>How I mentor engineers</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
