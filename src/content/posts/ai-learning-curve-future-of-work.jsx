import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Facts about KC come from profile.md and posts already on this site (carrier network, ACLs and the
// managed security team, scripting operations, co-founder and CTO, media publishing re-platform to AWS,
// mentoring). No anecdotes are invented: the role examples are general observations, not war stories.
// Research figures were checked against the primary pages on 2026-10-14 (see `sources`); years stay out
// of visible text per the site audit, so studies are described by publisher instead of date.
const sources = [
  { label: 'Stanford Digital Economy Lab: Canaries in the Coal Mine? Six facts about the recent employment effects of AI (revised August update)', url: 'https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/' },
  { label: 'World Economic Forum: Future of Jobs Report (press release)', url: 'https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/' },
  { label: 'METR: Measuring the impact of early AI tools on experienced open-source developer productivity (arXiv)', url: 'https://arxiv.org/abs/2507.09089' },
  { label: 'Anthropic: How AI assistance impacts the formation of coding skills', url: 'https://www.anthropic.com/research/AI-assistance-coding-skills' },
  { label: 'DORA: State of AI-assisted Software Development report', url: 'https://dora.dev/research/2025/dora-report/' },
  { label: 'Stack Overflow Developer Survey: AI section (previous year)', url: 'https://survey.stackoverflow.co/2025/ai' },
  { label: 'Stack Overflow Developer Survey: AI section (latest)', url: 'https://survey.stackoverflow.co/2026/ai' },
  { label: 'Nielsen Norman Group: Synthetic users, if, when, and how to use AI-generated research', url: 'https://www.nngroup.com/articles/synthetic-users/' },
];

export const metadata = {
  slug: 'ai-learning-curve-future-of-work',
  title: 'AI Is Great, But Not Everyone Is Ready to Use It Yet',
  shortTitle: 'AI has a learning curve',
  seoTitle: 'AI Is Great, But Not Everyone Is Ready to Use It Yet — Ka Lun Chan',
  description:
    'AI will transform jobs, but using it well takes experience and judgment. How UX, engineering, product and leadership roles are changing, and what leaders can do.',
  teaser:
    'Why access to AI isn’t the same as knowing how to use it: tasks versus jobs, how design, engineering and product work shifts toward judgment, what happens to junior engineers, and what leaders should do.',
  dek:
    'AI makes it easier to produce work. Experience and judgment still decide whether that work is worth anything, and like every technology I’ve learned, AI has a learning curve.',
  summary:
    'Why AI automates tasks faster than it removes jobs, and what the employment research shows so far; how UX designers, software engineers and product managers move from producing work to validating it; what happens when AI writes both the code and the tests; how junior engineers learn when AI writes the first draft; why a generalist background helps; why AI is expensive when used badly; and seven things engineering leaders should do.',
  topics: ['AI', 'Leadership', 'Engineering judgment'],
  minutes: 12,
  related: [
    { to: '/writing/generalist-advantage-in-the-ai-era/', label: 'Why being a generalist is an advantage in the AI era' },
    { to: '/writing/recognizing-ai-generated-code/', label: 'I can recognize AI-generated code. Here’s why.' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'How I design screens now, with AI in the loop' },
    { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'AI adoption',
    'future of work',
    'AI learning curve',
    'engineering leadership',
    'AI software development',
    'AI UX design',
    'AI workforce transformation',
    'AI and junior engineers',
    'AI-generated tests',
  ],
  about: [
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Future of work', sameAs: 'https://en.wikipedia.org/wiki/Future_of_work' },
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Stanford Digital Economy Lab', url: 'https://digitaleconomy.stanford.edu/' },
    { '@type': 'Organization', name: 'World Economic Forum', sameAs: 'https://en.wikipedia.org/wiki/World_Economic_Forum' },
    { '@type': 'Organization', name: 'METR', url: 'https://metr.org/' },
    { '@type': 'Organization', name: 'Anthropic', sameAs: 'https://en.wikipedia.org/wiki/Anthropic' },
    { '@type': 'Organization', name: 'DORA', url: 'https://dora.dev/' },
    { '@type': 'Organization', name: 'Nielsen Norman Group', sameAs: 'https://en.wikipedia.org/wiki/Nielsen_Norman_Group' },
  ],
  sources,
  faq: [
    {
      q: 'Will AI replace jobs?',
      a: 'AI replaces tasks first. Some jobs are mostly made of tasks AI does well, and those will shrink. Most jobs are a mix, so they change shape: less time producing drafts, more time judging, testing and deciding. Stanford research on payroll data finds the clearest effect so far is fewer hires of early-career workers in occupations where AI substitutes for the work.',
    },
    {
      q: 'Why don’t all employees get more productive with AI?',
      a: 'Because using AI well is a skill. Someone who can judge the output gets faster. Someone who can’t spends time prompting, reviewing and redoing work that looks right but isn’t. A randomized study by METR found experienced developers took about 19% longer on real tasks with AI tools, while believing they were faster.',
    },
    {
      q: 'If AI writes both the code and the tests, can you trust the tests?',
      a: 'Not on their own. If the AI misunderstood the requirement, it can write code and tests that share the same wrong assumption, and every test passes. Someone who understands the requirement needs to write or review the key test cases, especially the edge cases and failure paths.',
    },
    {
      q: 'How do junior engineers learn when AI writes the code?',
      a: 'They learn when they have to understand what the AI wrote: asking it to explain, debugging without it, and having their work reviewed by someone experienced. An Anthropic study found that people who used AI to understand code kept much more of what they learned than people who only delegated the code to it.',
    },
    {
      q: 'What should engineering leaders do when adopting AI?',
      a: 'Train people instead of only buying subscriptions, set review and quality standards for AI output, decide where a human must sign off, measure outcomes rather than AI usage, keep sensitive data out of tools that aren’t approved for it, keep hiring and developing junior engineers, and let teams experiment within a cost budget.',
    },
  ],
};

export const toc = [
  ['access', 'Access isn’t the same as knowing how'],
  ['tasks', 'AI replaces tasks first'],
  ['designers', 'Designers: from screens to validated experiences'],
  ['engineers', 'Engineers: from writing code to evaluating it'],
  ['product', 'Product managers: from requirements to problems'],
  ['juniors', 'Junior engineers and the learning curve'],
  ['generalists', 'Why a broad background helps'],
  ['cost', 'AI is expensive when used badly'],
  ['leaders', 'What engineering leaders should do'],
  ['sources', 'Sources'],
];

// ---------- Fig. 703-1: where the work moves, role by role ----------
const roles = [
  ['UX and UI designer', 'Wireframes, prototype variations, first-pass analysis of feedback', 'Knowing whether the experience works for real people, and which result to trust'],
  ['Software engineer', 'First drafts of code, tests, refactors, documentation', 'Architecture, tradeoffs, security, operating cost, and whether the tests check the right thing'],
  ['Product manager', 'Requirement drafts, specs, prototypes, research summaries', 'Choosing the right problem, prioritizing, and tying the work to a business outcome'],
  ['Engineering leader', 'Status reports, planning drafts, review assistance', 'Standards, oversight, cost control, and growing the next generation of engineers'],
];

function Roles() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 703-1</span> Where the work moves when AI speeds up production</caption>
        <thead><tr><th scope="col">Role</th><th scope="col">What AI speeds up</th><th scope="col">What still takes judgment</th></tr></thead>
        <tbody>{roles.map(([r, fast, judge]) => <tr key={r}><th scope="row">{r}</th><td data-col="Faster:">{fast}</td><td data-col="Judgment:">{judge}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">In every row, producing the work gets cheaper. Deciding whether the work is right becomes a bigger share of the job.</figcaption>
    </figure>
  );
}

// ---------- Fig. 703-2: how one wrong assumption gets past AI-written tests (hypothetical) ----------
function SharedAssumption() {
  return (
    <figure className="post__figure">
      <ol className="post__steps">
        <li><strong>The request:</strong> “Customers can cancel within 30 days.”</li>
        <li><strong>The assumption:</strong> the AI counts 30 days from the order date. The business meant 30 days from delivery.</li>
        <li><strong>The code</strong> checks the order date.</li>
        <li><strong>The tests</strong> are generated from the same reading, so they check the order date too.</li>
        <li><strong>Every test passes.</strong> The first customer whose package arrived late finds the bug.</li>
      </ol>
      <figcaption className="post__figcaption"><span className="mono">Fig. 703-2</span> A hypothetical example. When one reading of the requirement produces both the code and the tests, nothing checks the reading itself.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="access" aria-labelledby="access-h">
        <h2 id="access-h" className="post__h2">Access isn’t the same as knowing how</h2>
        <p>I’ve spent a lot of this year experimenting with AI, and I think it’s great. It writes code, drafts documents, sketches screens and answers questions in fields I don’t work in. Some days it feels like I have a small team sitting in my terminal.</p>
        <p>What I keep noticing is how different the results are from one person to the next. Two people can use the same tool, on the same subscription, on the same kind of task, and get very different outcomes. One ships something useful. The other spends the afternoon going in circles with a confident assistant.</p>
        <p>That shouldn’t surprise anyone who has been in this industry for a while. Every technology I’ve learned had a learning curve. On a carrier network I had to learn router access lists and shell scripting, and neither came easily. Moving a publishing platform onto AWS meant learning a new way to think about capacity and cost. Nobody handed me a login and expected me to be good at it the next day.</p>
        <p>AI is the same. Giving someone access to it doesn’t mean they know how to use it. So why do so many companies roll it out as if it does?</p>
      </section>

      <section id="tasks" aria-labelledby="tasks-h">
        <h2 id="tasks-h" className="post__h2">AI replaces tasks first</h2>
        <p className="post__answer">AI automates tasks. Whether a job disappears depends on how much of that job those tasks were.</p>
        <p>A job is a bundle of tasks. A support role includes answering routine questions, but also calming down an angry customer, spotting a pattern in complaints and telling engineering about it. AI is already good at the first one. It’s much weaker at the others. When most of a job is the first kind of task, that job shrinks. When it’s a mix, the job changes shape.</p>
        <p>The research so far points the same way, and it’s worth separating what has been measured from what is being predicted.</p>
        <ul className="post__list">
          <li><strong>Measured:</strong> the <a href="https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/" rel="noopener" target="_blank">Stanford Digital Economy Lab</a>, using payroll data covering millions of US workers, found that employment of 22- to 25-year-olds in AI-exposed occupations is 19% below where it would have been had it kept pace with less-exposed peers. The decline is concentrated in occupations where AI mostly substitutes for the work. Where AI mostly complements people, employment is flat or rising, especially for experienced workers.</li>
          <li><strong>Predicted:</strong> the <a href="https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/" rel="noopener" target="_blank">World Economic Forum’s Future of Jobs Report</a> projects 170 million jobs created and 92 million displaced by the end of the decade, with technology as one of several drivers. That’s a survey of over 1,000 employers about what they expect. It’s a forecast, not a measurement.</li>
        </ul>
        <p>So yes, AI will replace some jobs, and the early evidence says entry-level roles feel it first. But the bigger change for most people is inside the job they already have. When producing the work gets cheap, the valuable part becomes knowing whether the work is any good.</p>
        <Roles />
      </section>

      <section id="designers" aria-labelledby="designers-h">
        <h2 id="designers-h" className="post__h2">Designers: from screens to validated experiences</h2>
        <p>I’ve written about <Link to="/writing/ux-ui-design-before-and-after-ai/">designing every screen myself and then doing it with an AI assistant</Link>. Drawing the screen is the part that got fastest. A designer can now generate several prototypes for the same flow before lunch.</p>
        <p>That changes where a designer’s time goes. I expect more of it to go into questions like these:</p>
        <ul className="post__list">
          <li>Which of these five prototypes actually works for the people using it?</li>
          <li>Where in the journey do people hesitate, back out or call support?</li>
          <li>What do the analytics and the feedback say, and do they agree?</li>
          <li>When we compare two approaches, are we measuring the thing that matters?</li>
          <li>What did we learn, and what do we change next?</li>
        </ul>
        <p>AI can help with all of that: running automated usability checks, clustering feedback, flagging drop-off points. It can’t be the user, though. <a href="https://www.nngroup.com/articles/synthetic-users/" rel="noopener" target="_blank">Nielsen Norman Group</a> found that AI-generated “synthetic users” are useful for generating hypotheses but tend to be overly favorable, and recommends against using them in place of research with real people.</p>
        <p>The value moves toward knowing whether the experience works, and that takes the same skill it always did: understanding the person on the other side.</p>
      </section>

      <section id="engineers" aria-labelledby="engineers-h">
        <h2 id="engineers-h" className="post__h2">Engineers: from writing code to evaluating it</h2>
        <p>AI writes code well enough now that typing it is rarely the slow part. The slow part is everything around it. Does this design hold up at ten times the traffic? What happens when the payment provider times out? Who can call this endpoint? What does it cost to run every month? Will someone understand it in a year?</p>
        <p>Those questions are architecture, performance, security, reliability, maintainability and operating cost. The AI will answer each one if you ask. Knowing to ask, and recognizing a weak answer, is the engineer’s job. I wrote about one side of this in <Link to="/writing/recognizing-ai-generated-code/">recognizing AI-generated code</Link>, where a 53-line answer lost to a 6-line one.</p>
        <p>AI is also good at the checking side. It can generate tests, run them, read the failures, suggest fixes and point out likely problems in a pull request. I use it for all of those. But there’s a question I keep coming back to:</p>
        <p className="post__pull">If AI writes both the implementation and the tests, how do we know they aren’t making the same wrong assumption?</p>
        <SharedAssumption />
        <p>Passing tests feel like proof. They’re only proof that the code does what the tests expect. If the same misunderstanding produced both, nothing in the pipeline compares the code with what the customer asked for. The fix is a human who understands the requirement writing or reviewing the important test cases, especially the edge cases and failure paths.</p>
        <p>Developers sense this. In <a href="https://survey.stackoverflow.co/2025/ai" rel="noopener" target="_blank">Stack Overflow’s developer survey</a>, the top frustration with AI tools was “solutions that are almost right, but not quite,” picked by 66% of respondents. In <a href="https://survey.stackoverflow.co/2026/ai" rel="noopener" target="_blank">the latest edition</a>, 48% said they trust AI when the answer is easy to validate. Trust follows the ability to check.</p>
      </section>

      <section id="product" aria-labelledby="product-h">
        <h2 id="product-h" className="post__h2">Product managers: from requirements to problems</h2>
        <p>AI can turn a rough idea into a tidy requirements document, a set of user stories and a clickable prototype in an afternoon. That’s useful, and it makes it easy to skip the hard part.</p>
        <p>Building faster doesn’t mean building the right thing. If the problem is wrong, AI just gets you to the wrong product sooner, with better documentation. I’ve always believed in starting with the customer’s problem, not the architecture, and that matters more when the architecture is nearly free to produce.</p>
        <p>So the product work that grows in value is the part AI can’t do from a prompt: talking to customers, deciding what not to build, choosing between two good ideas with one team, and connecting the work to a business result someone will pay for. How do you know this is a problem people have? What will change for them if you solve it? How will you know it worked?</p>
      </section>

      <section id="juniors" aria-labelledby="juniors-h">
        <h2 id="juniors-h" className="post__h2">Junior engineers and the learning curve</h2>
        <p>This is the part I worry about most. I learned to debug by being stuck. I read logs, broke things, fixed them, and slowly built a feel for where problems hide. If an AI writes most of a junior engineer’s code, where does that feel come from?</p>
        <p>There’s early evidence on this. In a <a href="https://www.anthropic.com/research/AI-assistance-coding-skills" rel="noopener" target="_blank">randomized study by Anthropic</a>, 52 mostly junior engineers learned a new Python library, half with an AI assistant and half without. On the quiz afterward the AI group averaged 50% and the hand-coding group 67%. The biggest gap was on debugging questions. The authors call the results preliminary, and the sample was small.</p>
        <p>The more useful finding was about how people used it. Participants who asked the AI to explain things, or who generated code and then worked to understand it, scored much higher than those who handed the whole task over. How people used the assistant mattered more than whether they had one.</p>
        <p>That puts a responsibility on engineering leaders. If AI takes the routine tasks juniors used to learn on, we have to design the learning on purpose: reviews where they explain their code, debugging work without the assistant, smaller tasks they can own end to end, and time with someone experienced. I wrote about <Link to="/writing/why-i-enjoy-mentoring/">why I enjoy mentoring</Link>, and this is why it matters more now. If nobody grows junior engineers today, who reviews the AI’s work in ten years?</p>
      </section>

      <section id="generalists" aria-labelledby="generalists-h">
        <h2 id="generalists-h" className="post__h2">Why a broad background helps</h2>
        <p>I’ve been in this industry for 20+ years, and I’ve worked across carrier networking and VoIP, network and application security, software engineering and architecture, cloud infrastructure and DevOps, product development, and the business side of running a startup as a co-founder and CTO. I wasn’t the deepest expert in all of those. I learned how they affect each other.</p>
        <p>That turns out to be useful with AI. When an assistant hands me a solution, I can look at it from several sides: will it scale, who can abuse it, what will it cost, who supports it, does the customer even need it? I don’t need to be a specialist to notice that a design has no rate limit or that a cost estimate ignores data transfer. I need to have seen those problems before. I went into more detail in <Link to="/writing/generalist-advantage-in-the-ai-era/">why being a generalist is an advantage in the AI era</Link>.</p>
        <p>That doesn’t make specialists less important. AI gets you to a decent first answer in most fields. The hard last stretch still needs people who have spent years in one area.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">AI is expensive when used badly</h2>
        <p>AI doesn’t automatically make everyone more productive. In a <a href="https://arxiv.org/abs/2507.09089" rel="noopener" target="_blank">randomized trial by METR</a>, experienced open-source developers took about 19% longer on real tasks when AI tools were allowed. They expected a speedup beforehand and still believed they’d been faster afterward. That study used earlier tools, and newer ones are better, but the gap between feeling productive and being productive is worth taking seriously.</p>
        <p>The costs hide in a few places: prompting in circles because the requirement was never clear, rework when the output looked right and wasn’t, extra review cycles, test suites that grow without checking anything new, and senior time spent untangling it all. Tokens are the visible part of the bill. People’s time is the larger part. I broke down the numbers in <Link to="/writing/hidden-cost-of-ai-coding/">the hidden cost of AI coding</Link>.</p>
        <p><a href="https://dora.dev/research/2025/dora-report/" rel="noopener" target="_blank">DORA’s research on AI-assisted development</a> puts it well: AI acts as an amplifier, magnifying an organization’s existing strengths and weaknesses. A team with clear requirements, small changes and good review gets faster. A team without them gets more of what it already had.</p>
      </section>

      <section id="leaders" aria-labelledby="leaders-h">
        <h2 id="leaders-h" className="post__h2">What engineering leaders should do</h2>
        <p className="post__answer">Treat AI like any other technology with a learning curve: train people, set standards, keep a human accountable, and measure results.</p>
        <ol className="post__steps">
          <li><strong>Train people as well as buying seats.</strong> A subscription is access. Show people how to write a clear task, how to check output, and when to stop prompting and think.</li>
          <li><strong>Set review and quality standards.</strong> AI-written code goes through the same review as any other code, and the person who opens the pull request has to be able to explain it.</li>
          <li><strong>Decide where a human signs off.</strong> Production changes, security-sensitive code, customer communication and anything with money or legal weight need a named person, not just a passing check.</li>
          <li><strong>Measure outcomes, not usage.</strong> Prompts sent and lines generated tell you nothing. Lead time, defects that reach customers, rework and cost per accepted change tell you something.</li>
          <li><strong>Protect sensitive information.</strong> Be clear about which tools are approved for which data, and keep customer data, credentials and confidential work out of the rest.</li>
          <li><strong>Keep investing in junior engineers.</strong> Hire them, pair them with experienced people, and give them work that builds judgment.</li>
          <li><strong>Encourage experiments, with a budget.</strong> Let teams try things, set cost limits, and share what worked and what didn’t.</li>
        </ol>
        <p>None of this is new. It’s the same discipline we applied to cloud adoption, to DevOps, and to every other tool that made it easy to do a lot quickly.</p>
      </section>

      <section id="sources" aria-labelledby="sources-h">
        <h2 id="sources-h" className="post__h2">Sources</h2>
        <p>Research figures were checked against these pages in October. The opinions and recommendations are mine.</p>
        <ul className="post__list">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} rel="noopener" target="_blank">{s.label}</a></li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The learning curve is the point</h2>
      <div className="post__close-copy">
        <p className="lead">AI makes it easier to produce work. Experience and judgment decide whether that work is valuable.</p>
        <p className="post__close-principle">I’m still learning how to use it well myself. I expect the teams that treat it as a skill to build, and give people time to learn it, to get the most out of it.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
