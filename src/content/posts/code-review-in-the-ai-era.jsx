import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// KC's background (20+ years as developer, CTO, founder and engineering leader; reviewing code, designing
// systems, mentoring, releases, production issues) comes from his brief for this article. No anecdotes are
// invented: the company-switching workflow is a labelled hypothetical, and the risk table is offered as a
// starting point, not a rule. No research figures are quoted, so there is no sources list.
export const metadata = {
  slug: 'code-review-in-the-ai-era',
  title: 'Code Review Doesn’t Start With a Pull Request. It Starts With the Plan.',
  shortTitle: 'Code review in the AI era',
  seoTitle: 'Should AI Do Code Reviews? Rethinking Code Review in the AI Era — Ka Lun Chan',
  description:
    'AI can review pull requests. An engineering leader on what AI should review, what humans still must, and why code review runs from the plan to production.',
  teaser:
    'Why “can AI review code?” is the wrong question, a risk-based review model, what AI and people should each review, a company-switching workflow that passes every test and still fails, and a six-stage review process that stays light for small changes.',
  dek:
    'AI can review a pull request in seconds. That doesn’t tell me whether we built the right thing, whether it works for the customer, or whether we’re ready to put it in production.',
  summary:
    'How AI moves the bottleneck from writing code to validating outcomes; three questions every change has to answer; reviewing the plan before the code; a risk-based review model by change type; what AI should review and where it falls short; what people should still review; why passing tests don’t prove a feature works for users; review after deployment; a six-stage process; and how to tell whether a team reviews too much or too little.',
  topics: ['AI', 'Leadership', 'Delivery'],
  minutes: 9,
  related: [
    { to: '/writing/recognizing-ai-generated-code/', label: 'I can recognize AI-generated code. Here’s why.' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/ai-learning-curve-future-of-work/', label: 'AI is great, but not everyone is ready to use it yet' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'AI code review',
    'should AI do code reviews',
    'code review process',
    'risk-based code review',
    'reviewing AI-generated code',
    'engineering leadership AI',
    'end-to-end testing',
    'change failure rate',
  ],
  about: [
    { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Software testing', sameAs: 'https://en.wikipedia.org/wiki/Software_testing' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'DORA', url: 'https://dora.dev/' },
  ],
  faq: [
    {
      q: 'Can AI replace human code review?',
      a: 'For routine checks, mostly yes: style, common bugs, missing error handling, known security patterns and test gaps. It can’t decide whether the team built the right thing, whether the design fits the business, or who owns the risk if the change fails. Those still need a person, and the amount of human review should depend on the risk of the change.',
    },
    {
      q: 'Does every pull request need a human reviewer?',
      a: 'Not at the same depth. A documentation or copy change can rely on automated checks. Changes to authentication, permissions, billing, database migrations, critical workflows and high-risk infrastructure should always get a human review. Team maturity and regulatory obligations can raise that bar.',
    },
    {
      q: 'When should code review start?',
      a: 'Before any code is written. Reviewing the problem, acceptance criteria, design and risks catches a wrong approach when it is cheap to change. Review then continues through testing, release and production, where you find out whether the change actually worked for users.',
    },
    {
      q: 'How do you measure whether a code review process works?',
      a: 'Look at review turnaround time, change failure rate, escaped defects and customer-reported issues together. Lines of code reviewed and the number of approvals measure activity, not quality.',
    },
  ],
};

export const toc = [
  ['wrong-question', 'We’re asking the wrong question'],
  ['plan', 'Review the plan before the code'],
  ['risk', 'Not every change needs the same review'],
  ['ai', 'What AI should review'],
  ['humans', 'What people should still review'],
  ['outcome', 'Is it delivering what I expected?'],
  ['production', 'Review continues after deployment'],
  ['process', 'A review process for the AI era'],
  ['balance', 'Too much review, or too little?'],
];

// ---------- Fig. 704-1: three questions every change has to answer ----------
const questions = [
  ['Did we build it correctly?', 'Code review, automated tests, static and security analysis', 'Mostly'],
  ['Did we build the right thing?', 'Requirements, acceptance criteria, usability, customer validation', 'It can help ask the questions'],
  ['Can we operate it safely?', 'Deployment, monitoring, production verification, rollback', 'It can help watch, not decide'],
];

function Questions() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 704-1</span> Three questions every change has to answer</caption>
        <thead><tr><th scope="col">Question</th><th scope="col">How we answer it</th><th scope="col">Can AI answer it?</th></tr></thead>
        <tbody>{questions.map(([q, how, ai]) => <tr key={q}><th scope="row">{q}</th><td data-col="How">{how}</td><td data-col="AI">{ai}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">Traditional code review mostly answers the first question. The other two are where shipped features fail.</figcaption>
    </figure>
  );
}

// ---------- Fig. 704-2: a risk-based review model ----------
const risk = [
  ['Documentation or copy', 'Automated', 'Optional', 'Basic validation'],
  ['Small UI changes', 'Automated', 'Depends on risk', 'Visual and functional'],
  ['Standard business logic', 'Automated', 'Targeted', 'Unit and integration'],
  ['Authentication or permissions', 'Automated', 'Required', 'Security and negative paths'],
  ['Database migrations', 'Automated', 'Required', 'Migration, rollback, data integrity'],
  ['Critical business workflows', 'Automated', 'Required', 'End-to-end and regression'],
  ['Infrastructure and deployment', 'Automated', 'Required for high-risk changes', 'Deployment and rollback'],
];

function Risk() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 704-2</span> A starting point for risk-based review</caption>
        <thead><tr><th scope="col">Change type</th><th scope="col">AI review</th><th scope="col">Human review</th><th scope="col">Testing</th></tr></thead>
        <tbody>{risk.map(([type, ai, human, test]) => <tr key={type}><th scope="row">{type}</th><td data-col="AI">{ai}</td><td data-col="Human">{human}</td><td data-col="Test">{test}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">A suggestion, not a rule. Team maturity, regulatory obligations and what’s at stake in production should move a change up or down.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="wrong-question" aria-labelledby="wrong-question-h">
        <h2 id="wrong-question-h" className="post__h2">We’re asking the wrong question</h2>
        <p>I’ve spent more than 20 years reviewing code, designing systems, mentoring engineers, managing releases and dealing with whatever broke in production. Now AI can generate the code, review the pull request, write the tests and flag likely vulnerabilities. So I’ve been asking myself how much traditional code review we still need.</p>
        <p>I think that’s the wrong question. Whether AI can review code matters less than whether we’re building and delivering what we actually intended.</p>
        <p>An AI review can tell me the code follows best practices, the implementation is efficient, the tests pass, there are no obvious vulnerabilities and the architecture looks reasonable. All of that can be true of a feature the customer can’t use. A technically correct implementation can still be the wrong solution, and a code review won’t tell you which one you have.</p>
        <p>AI has also moved the bottleneck. Engineers used to spend most of their time writing the code. Now a team can produce code faster than it can confidently verify it. That makes review more important, and it makes reading every diff line by line a poor way to spend the time we have.</p>
        <p className="post__answer">Every change has to answer three questions: did we build it correctly, did we build the right thing, and can we operate it safely?</p>
        <Questions />
      </section>

      <section id="plan" aria-labelledby="plan-h">
        <h2 id="plan-h" className="post__h2">Review the plan before the code</h2>
        <p>Reviewing an implementation plan is often worth more than reviewing hundreds of lines of code afterward. A wrong approach costs a conversation in planning. In a pull request, it costs a rewrite. After release, it can cost a migration.</p>
        <p>Before development starts, I want answers to a short list:</p>
        <ul className="post__list">
          <li>What problem are we solving, and is it the right problem?</li>
          <li>What does success look like, and what are the acceptance criteria?</li>
          <li>Is this the simplest implementation that would work?</li>
          <li>What existing functionality could this affect?</li>
          <li>What are the security, performance and operational risks?</li>
          <li>How will we verify that it works?</li>
        </ul>
        <p>AI is useful here. I ask it to challenge the assumptions in a plan, compare architectural options, and point out requirements nobody wrote down. It’s good at “what about this case?” It doesn’t know which tradeoff the business can live with, so the decision stays with the team. Most of the waste I wrote about in <Link to="/writing/engineering-work-nobody-needed/">the most expensive engineering work is work nobody needed</Link> could have been caught at this stage.</p>
      </section>

      <section id="risk" aria-labelledby="risk-h">
        <h2 id="risk-h" className="post__h2">Not every change needs the same review</h2>
        <p>A typo fix in the docs shouldn’t get the same scrutiny as a change to authentication, billing or a production database. Yet many teams apply one rule to every pull request: two approvals, whatever it touches. The trivial change waits as long as the risky one, and the risky one gets the same quick skim as the trivial one.</p>
        <p>I’d rather match review effort to risk:</p>
        <Risk />
        <p>The tradeoff is real. More human review costs delivery speed. Less review means more risk of defects, and the cost of a defect depends on where it lands. Keeping changes small helps whatever model you use, because a reviewer can actually hold a small change in their head. I went into that in <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link>.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">What AI should review</h2>
        <p>Much of what reviewers traditionally comment on is repetitive, and AI handles it well:</p>
        <ul className="post__list">
          <li>Coding standards and consistency with the rest of the codebase</li>
          <li>Common bugs and missing error handling</li>
          <li>Known security vulnerability patterns</li>
          <li>Unnecessary complexity and duplicate logic</li>
          <li>Performance concerns, like a query inside a loop</li>
          <li>Gaps in test coverage and likely regression risks</li>
          <li>Documentation that no longer matches the code</li>
        </ul>
        <p>Letting AI take this first pass means people stop spending review time on formatting and naming.</p>
        <p>AI review has limits, though. It produces false positives, and people learn to ignore them. It misses subtle problems, especially ones that depend on how the rest of the system behaves. It doesn’t know the business context unless someone gives it. And it can confidently approve an implementation that’s wrong. When AI wrote the code and also reviewed it, both can share the same misunderstanding of the requirement. An AI review is one input. It shows the code was checked. It doesn’t show the code is safe. I wrote about what that looks like in a real diff in <Link to="/writing/recognizing-ai-generated-code/">I can recognize AI-generated code</Link>.</p>
      </section>

      <section id="humans" aria-labelledby="humans-h">
        <h2 id="humans-h" className="post__h2">What people should still review</h2>
        <p>Human attention is expensive, so I want it on the decisions that need context, accountability and judgment:</p>
        <ul className="post__list">
          <li><strong>Are we building the right thing?</strong> Does the change address the customer’s problem, or only the ticket’s wording?</li>
          <li><strong>Is the design appropriate?</strong> Are we adding abstractions or moving parts the problem doesn’t need?</li>
          <li><strong>What could go wrong?</strong> Operational failures, security boundaries, scale, data integrity and side effects in other parts of the system.</li>
          <li><strong>Can the team maintain it?</strong> Will another engineer understand this six months from now?</li>
          <li><strong>Are we comfortable deploying it?</strong> And who owns the risk if it fails?</li>
        </ul>
        <p>A reviewer who spends their time on these, and leaves the routine comments to automation, adds far more than one who reads every line looking for style issues.</p>
      </section>

      <section id="outcome" aria-labelledby="outcome-h">
        <h2 id="outcome-h" className="post__h2">Is it delivering what I expected?</h2>
        <p>This is the question I care about most. A developer can implement exactly what a ticket says and still deliver something the customer can’t use. An AI agent can do the same thing, faster.</p>
        <p>A feature can pass every unit test and still confuse users, add steps nobody needed, break an existing workflow, handle only the happy path, show error messages nobody understands, or fall short on accessibility. Sometimes it simply doesn’t solve the original problem.</p>
        <p>Here’s a hypothetical workflow from an app for federal contractors. A user creates an account and adds several companies. Each company can have more than one UEI, the unique entity ID that identifies a business in federal contracting. The user switches between companies and takes an action for whichever company is selected.</p>
        <p>Every API endpoint behind that can work perfectly, with green unit and integration tests. An end-to-end test can click through the whole flow and pass. And there are still questions none of those tests answer:</p>
        <ul className="post__list">
          <li>Does the user understand which company is active right now?</li>
          <li>Could they change another company’s data by accident?</li>
          <li>Does switching companies keep the right context everywhere, including open tabs and cached data?</li>
          <li>Are permissions enforced on every path, or only the ones the UI shows?</li>
          <li>Does any of it make sense to someone using it for the first time?</li>
        </ul>
        <p>Unit tests tell you the parts behave. Integration tests tell you the parts talk to each other. End-to-end tests tell you the workflow runs. None of them tell you the workflow is useful. That takes code quality, security testing, end-to-end testing and someone actually walking through the product as a user, together.</p>
        <p className="post__pull">So who on the team is responsible for checking that the feature delivers the intended outcome?</p>
        <p>If the answer is “QA will catch it” or “the product owner will see it in the demo,” it probably gets checked late or not at all. Acceptance criteria, product validation and real customer workflows deserve the same attention as the source code.</p>
      </section>

      <section id="production" aria-labelledby="production-h">
        <h2 id="production-h" className="post__h2">Review continues after deployment</h2>
        <p>Most teams treat a merged pull request as the end of review. I think production is where we find out whether the engineering decision was right. Review after release means:</p>
        <ul className="post__list">
          <li>Verifying the deployment did what we expected</li>
          <li>Rolling out gradually behind a feature flag when the risk justifies it</li>
          <li>Watching error logs, performance metrics and alerts</li>
          <li>Looking at how people actually use the feature</li>
          <li>Reading customer feedback and support tickets</li>
          <li>Catching regressions early, with a rollback ready if we need it</li>
        </ul>
        <p>A successful deployment doesn’t mean a successful feature.</p>
      </section>

      <section id="process" aria-labelledby="process-h">
        <h2 id="process-h" className="post__h2">A review process for the AI era</h2>
        <p>Putting it together, this is the process I’d propose:</p>
        <ol className="post__steps">
          <li><strong>Plan review.</strong> The problem, acceptance criteria, design, dependencies and risks.</li>
          <li><strong>Implementation review.</strong> AI does the first pass: code review, static analysis and test gaps. People review based on risk and complexity.</li>
          <li><strong>Functional validation.</strong> The feature behaves the way the requirements say.</li>
          <li><strong>End-to-end validation.</strong> The whole customer journey works, including edge cases and failures.</li>
          <li><strong>Release review.</strong> Deployment risk, monitoring, rollback plan and readiness.</li>
          <li><strong>Post-release validation.</strong> The feature does what we expected in production.</li>
        </ol>
        <p>For a low-risk change, most of these stages take minutes, and some are a single question. For a change to permissions or billing, each one deserves real time. I’m not proposing six approval gates for every pull request. I want the right review effort at the right stage.</p>
      </section>

      <section id="balance" aria-labelledby="balance-h">
        <h2 id="balance-h" className="post__h2">Too much review, or too little?</h2>
        <p>I see teams go wrong in both directions.</p>
        <p>With too much review, developers wait days for approval. Several engineers review a one-line change. Comments argue about style instead of outcomes. Review becomes the bottleneck and people lose momentum.</p>
        <p>With too little review, AI-generated code gets merged by people who don’t understand it. Security and data-integrity risks go unnoticed. Teams ship features that technically work and still fail users. Incidents go up and technical debt piles up. Endless AI review loops are their own version of this, and they cost more than people expect, as I covered in <Link to="/writing/hidden-cost-of-ai-coding/">the hidden cost of AI coding</Link>.</p>
        <p>To tell which problem you have, look at a few measures together: review turnaround time, change failure rate (one of the <a href="https://dora.dev/" rel="noopener" target="_blank">DORA</a> delivery metrics), escaped defects and customer-reported issues. Fast reviews with a rising failure rate mean you’re reviewing too little or reviewing the wrong things. Slow reviews with few escaped defects may mean you’re over-reviewing low-risk work. I wouldn’t use lines of code reviewed or number of approvals as a measure of quality. They measure activity.</p>
        <p>As engineering leaders, our job isn’t to make sure another engineer has read every line. Our job is to make sure the team delivers the right solution, safely and reliably. AI changes how we do that. We should automate the repetitive review and spend engineering expertise where it creates the most value. And developers still need to understand the systems they build, whether a person or an AI wrote the code.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Keep reviewing. Rethink what you review.</h2>
      <div className="post__close-copy">
        <p className="lead">We shouldn’t stop reviewing code. We should rethink what we review, when we review it, and who or what does the reviewing.</p>
        <p>AI can help us review code faster. Someone still has to decide whether we’re building the right thing, whether it works for the customer, and whether we’re ready to put it into production.</p>
        <p className="post__close-principle">I don’t expect the future of code review to be more people reading more code. I expect better engineering judgment, supported by automation, from the plan to production.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk about how your team reviews code <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
