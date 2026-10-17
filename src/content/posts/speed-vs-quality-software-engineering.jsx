import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Speed vs. quality from an engineering leadership view. Source: KC's own brief (Oct 2026): 20+ years, startups and
// larger organizations, the microservices and abstraction observations, the deployment/infrastructure/workflow
// work, building in hours with AI what took days or weeks. Carrier scripting in Expect and Korn shell is from
// profile.md. The marketing page and certification examples are KC's, framed as illustrations; the program stays
// generic ("federal small business certification program"). Matrix examples are illustrations, labeled as such.

export const metadata = {
  slug: 'speed-vs-quality-software-engineering',
  title: 'Speed vs. Quality: Why Is It So Hard to Get the Balance Right?',
  shortTitle: 'Speed vs. quality',
  seoTitle: 'Speed vs. Quality in Software Engineering — Ka Lun Chan',
  description:
    'Speed to market matters, and so does quality. An engineering leader on risk-based process, cutting scope before quality, technical debt, and AI.',
  teaser:
    'Why business and engineering see different risks, why smaller releases are faster and safer, the quality floor I keep, and how to bring leadership options instead of a request for more time.',
  dek:
    'Speed to market matters. So does engineering quality. The hard part is knowing which one a given piece of work needs more, and making that tradeoff without making the next release harder.',
  summary:
    'Why speed to market matters; what quality means beyond perfect code; four reasons the balance is hard; a risk matrix for matching process to the change; why small releases win on speed and safety; five principles, including a quality floor and cutting scope first; what AI changes; and how to present tradeoffs to leadership.',
  topics: ['Leadership', 'Delivery', 'Engineering judgment'],
  related: [
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Why smaller stories and pull requests ship faster' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'What AI coding really costs' },
    { to: '/writing/loop-engineering-feedback-loops/', label: 'Loop engineering: faster, more honest feedback loops' },
    { to: '/writing/should-it-be-a-microservice/', label: 'Should it be a microservice?' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  minutes: 10,
  keywords: [
    'speed vs quality in software engineering',
    'speed to market',
    'engineering leadership',
    'software delivery speed',
    'technical debt',
    'software quality',
    'risk-based engineering process',
    'reduce scope before quality',
    'sustainable development pace',
    'AI-assisted development',
  ],
  about: [
    { '@type': 'Thing', name: 'Software quality', sameAs: 'https://en.wikipedia.org/wiki/Software_quality' },
    { '@type': 'Thing', name: 'Time to market', sameAs: 'https://en.wikipedia.org/wiki/Time_to_market' },
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Technical debt', sameAs: 'https://en.wikipedia.org/wiki/Technical_debt' },
    { '@type': 'Thing', name: 'Continuous delivery', sameAs: 'https://en.wikipedia.org/wiki/Continuous_delivery' },
  ],
  faq: [
    {
      q: 'How do you balance speed and quality in software engineering?',
      a: 'Start with the business impact of the work, keep a minimum quality bar for anything in production, and match testing and review to the risk of each change. When a deadline is at risk, cut or simplify scope before cutting quality, and make any shortcut a documented decision with an owner for the follow-up.',
    },
    {
      q: 'Is speed to market more important than quality?',
      a: 'Neither wins every time. Speed matters because software creates value only once customers can use it, and early releases bring feedback. Quality matters because shipping fast only helps when the release works. The right balance depends on what a failure would cost and how easily the change can be undone.',
    },
    {
      q: 'When is technical debt acceptable?',
      a: 'Technical debt is acceptable when it is a deliberate choice: the team knows what it is borrowing, why, and how it will pay it back, and leadership understands the tradeoff. It becomes a problem when temporary shortcuts turn into permanent architecture and nobody schedules the time to fix them.',
    },
    {
      q: 'Do smaller releases improve software quality?',
      a: 'Usually, yes. Small releases mean smaller pull requests that get read properly, problems that are easier to trace to one change, simpler rollback, and earlier customer feedback. In most situations they are both faster and safer than one large release every few months.',
    },
    {
      q: 'Does AI make the speed vs. quality tradeoff harder?',
      a: 'It raises the stakes. AI has made code much cheaper to generate, but not cheaper to understand, validate or maintain, so teams can create technical debt faster than before. AI helps most when it shortens feedback loops, improves testing and removes repetitive work, and engineering judgment still decides what ships.',
    },
  ],
};

export const toc = [
  ['opposites', 'Why speed and quality feel like opposites'],
  ['speed', 'Why speed to market matters'],
  ['quality', 'Quality is not the same as perfect code'],
  ['hard', 'Why the balance is so hard'],
  ['smaller', 'Smaller releases are faster and safer'],
  ['how', 'How I balance speed and quality'],
  ['ai', 'What AI changes'],
  ['options', 'Bring options, not just a request for time'],
];

// ---------- Fig. 708-1: match the process to the risk ----------
// Order follows the grid: top row is the costlier failure, right column is harder to undo.
const quadrants = [
  { key: 'guard', tag: 'Costly failure · easy to undo', name: 'Ship behind a safeguard', rule: 'Feature flag, monitoring and a tested rollback. Release to a few users first.', eg: 'A new step in a customer workflow' },
  { key: 'slow', tag: 'Costly failure · hard to undo', name: 'Slow down', rule: 'Tests on the rules themselves, a second reviewer, a staged rollout and a recovery plan.', eg: 'Ownership validation in a certification application' },
  { key: 'ship', tag: 'Cheap failure · easy to undo', name: 'Ship and fix forward', rule: 'Light review and a quick release. If it’s wrong, fix it.', eg: 'Copy on a marketing page' },
  { key: 'decide', tag: 'Cheap failure · hard to undo', name: 'Decide before you ship', rule: 'The code is small and the commitment is large. Review the design as well as the diff.', eg: 'A field name in a public API' },
];

function RiskMatrix() {
  return (
    <figure className="sqrisk post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 708-1</span> Match the process to the risk of the change
        <span className="journey__key label">Higher up, a failure costs more. Further right, it’s harder to undo. The examples are illustrations.</span>
      </figcaption>
      <div className="sqrisk__frame">
        <span className="sqrisk__axis is-y label" aria-hidden="true">Costlier failure</span>
        <div className="sqrisk__grid">
          {quadrants.map((q) => (
            <section key={q.key} className={`sqrisk__cell is-${q.key}`} aria-labelledby={`sqrisk-${q.key}`}>
              <span className="sqrisk__tag label">{q.tag}</span>
              <h3 id={`sqrisk-${q.key}`} className="sqrisk__name">{q.name}</h3>
              <p className="sqrisk__rule">{q.rule}</p>
              <p className="sqrisk__eg"><span className="label">Example</span> {q.eg}</p>
            </section>
          ))}
        </div>
        <span className="sqrisk__axis is-x label" aria-hidden="true">Harder to undo →</span>
      </div>
    </figure>
  );
}

// ---------- Fig. 708-2: one big release vs small releases ----------
const releaseRows = [
  ['Size of each release', 'Dozens of features at once', 'One small change'],
  ['Code review', 'Large pull requests, skimmed', 'Small pull requests, read'],
  ['Integration and testing', 'Weeks, at the end', 'Continuous, as you go'],
  ['When something breaks', 'Hard to tell which change caused it', 'Usually the last change'],
  ['Rollback', 'All or nothing', 'Undo one change'],
  ['Customer feedback', 'Months after the work started', 'Days after'],
];

function ReleaseCompare() {
  return (
    <figure className="post__figure">
      {/* A labeled, focusable scroll region, so a phone scrolls the table and never the page. */}
      <div className="sqrelease__scroll" role="region" aria-label="One big release compared with small releases" tabIndex={0}>
        <table className="post__table sqrelease">
          <caption>
            <span className="mono">Fig. 708-2</span> The same work, released two ways
          </caption>
          <thead>
            <tr><td></td><th scope="col">One big release every three months</th><th scope="col">Small releases through the week</th></tr>
          </thead>
          <tbody>
            {releaseRows.map(([row, big, small]) => (
              <tr key={row}><th scope="row">{row}</th><td>{big}</td><td className="is-better">{small}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

// ---------- Fig. 708-3: deadline levers above a quality floor ----------
const levers = [
  ['Cut scope', 'Ship three of the ten features now and seven later.'],
  ['Simplify', 'A simpler workflow that still solves the core problem.'],
  ['Postpone the nonessential', 'Polish and nice-to-haves move to a follow-up with an owner.'],
  ['Make the tradeoff visible', 'Write down what was deferred and what it costs, then recommend.'],
];
const floor = [
  'No known critical security vulnerabilities introduced',
  'Tests matched to the risk',
  'Basic error handling',
  'A practical way to detect failures',
  'A rollback or recovery plan',
];

function DeadlineLevers() {
  return (
    <figure className="sqlevers post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 708-3</span> When a deadline is at risk, pull these levers in order
        <span className="journey__key label">Each lever buys back time. None of them goes below the floor.</span>
      </figcaption>
      <ol className="sqlevers__steps">
        {levers.map(([name, note], i) => (
          <li key={name} className="sqlevers__step" style={{ '--i': i }}>
            <span className="sqlevers__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="sqlevers__name">{name}</span>
            <span className="sqlevers__note">{note}</span>
          </li>
        ))}
      </ol>
      <div className="sqlevers__floor">
        <p className="sqlevers__floor-name">The quality floor for production software</p>
        <ul className="sqlevers__floor-list">
          {floor.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="opposites" aria-labelledby="opposites-h">
        <h2 id="opposites-h" className="post__h2">Why speed and quality feel like opposites</h2>
        <p>For more than 20 years I’ve watched teams have the same argument. The business wants the feature this month. Product wants to answer a customer who is waiting. Engineers want something reliable that they can still change next year. Each of them is right about something, and the meeting still turns into speed against quality.</p>
        <p className="post__answer">Speed and quality are hard to balance because business and engineering see different risks, and because the right level of quality changes from one piece of work to the next. The two are connected: small, well-tested changes are usually the fastest way to ship, and a codebase full of unmanaged shortcuts slows down every release after it.</p>
      </section>

      <section id="speed" aria-labelledby="speed-h">
        <h2 id="speed-h" className="post__h2">Why speed to market matters</h2>
        <p>I believe speed matters. A great product that arrives too late may not matter at all. Customers don’t wait, competitors keep shipping, and market conditions change while a team is still designing.</p>
        <p>I’ve worked in startups and in larger organizations. The pressure to deliver feels different in each, but the business reality is the same: software creates value only once someone can use it. A carefully architected system that took six months, for customers who needed it three months ago, hasn’t accomplished much.</p>
        <p className="post__answer">Speed to market matters because early, working releases bring revenue and feedback sooner. Feedback from real customers tells a team whether it is solving the right problem, which another architecture meeting or another sprint can’t tell it.</p>
        <p>There is a catch. Shipping quickly only helps when what you ship works.</p>
      </section>

      <section id="quality" aria-labelledby="quality-h">
        <h2 id="quality-h" className="post__h2">Quality is not the same as perfect code</h2>
        <p>When engineers talk about quality, they usually mean the code: clean architecture, design patterns, test coverage, documentation, reusable components. Those things matter. Pursued for their own sake, they also become a cost.</p>
        <p>I’ve seen engineers spend days debating an abstraction for code that would only ever run in one place. I’ve also seen teams adopt microservices before they had the traffic or the team size to justify them, a question I wrote about in <Link to="/writing/should-it-be-a-microservice/">should it be a microservice?</Link> That is extra engineering, and it doesn’t make the product better.</p>
        <p className="post__answer">In software engineering, quality means a system that is reliable enough for its purpose, maintainable enough for its expected lifetime, and safe enough for its potential impact. The engineering investment should match the risk and the business need.</p>
        <p>A simple internal reporting tool doesn’t need the investment of a financial transaction system. A prototype doesn’t need the production readiness of a platform serving hundreds of thousands of users. Making that judgment correctly is the hard part.</p>
      </section>

      <section id="hard" aria-labelledby="hard-h">
        <h2 id="hard-h" className="post__h2">Why the balance is so hard to get right</h2>

        <h3 className="post__h3">Business and engineering see different risks</h3>
        <p>Business leaders see the cost of moving too slowly: customers lost, revenue missed, a competitor shipping first, a commitment that slips. Engineers see the cost of moving too fast: production incidents, security vulnerabilities, fragile architecture and work that comes back later.</p>
        <p>Neither side is wrong. A missed market opportunity is expensive, and so is an outage. An engineering leader’s job is to weigh both against the actual business impact. Arguing that engineering needs more time is a much smaller job, and usually a less useful one.</p>

        <h3 className="post__h3">Activity gets mistaken for progress</h3>
        <p>I’ve seen teams work extremely hard and still move slowly. Tickets move, pull requests open, the calendar is full of meetings, and very little reaches production. Sometimes the team is building things nobody needs. Sometimes it is building too many things at once.</p>
        <p>Before asking engineers to move faster, ask whether they are building the right things. Removing <Link to="/writing/engineering-work-nobody-needed/">work that never needed to happen</Link> speeds up delivery and costs nothing in quality.</p>

        <h3 className="post__h3">Technical debt is easy to create and hard to measure</h3>
        <p>Under pressure, shortcuts look cheap. Skip a test. Duplicate some logic. Add one more condition in the frontend. Push the refactor to next sprint. Sometimes those are reasonable calls.</p>
        <p>The trouble starts when a temporary shortcut becomes permanent architecture. Another feature comes to depend on the workaround, then another, until a change that should take two days takes two weeks because nobody wants to touch that code.</p>
        <p className="post__answer">Technical debt is acceptable when it is a deliberate decision: you know what you are borrowing, why, and how you will pay it back. Unmanaged debt is the problem, and it rarely goes away unless someone schedules the time to address it.</p>

        <h3 className="post__h3">Not every change carries the same risk</h3>
        <p>Compare two changes. One updates the copy on a marketing page. If something goes wrong, you fix it quickly and the business impact is small. The other changes the ownership validation rules in an application for a federal small business certification program. A mistake there could block eligible applicants, let incorrect information through, or disrupt a process people depend on. I’ve <Link to="/writing/building-federal-government-applications/">built government applications</Link> where rules like that are the core of the product.</p>
        <p>I would not give those two changes the same testing and review. Many organizations do anyway. That delays the low-risk work and can still leave the high-risk work under-protected.</p>
        <p className="post__answer">Engineering process should be risk-based. Two questions sort most changes: what would a failure cost, and how easily could you undo it?</p>
        <RiskMatrix />
      </section>

      <section id="smaller" aria-labelledby="smaller-h">
        <h2 id="smaller-h" className="post__h2">Smaller releases are faster and safer</h2>
        <p>It can sound contradictory, but shipping more often usually produces better software, as long as each release is small. Picture the same quarter of work released two ways.</p>
        <ReleaseCompare />
        <p>In most situations the second approach wins on speed and on safety. That is why I’ve become a strong believer in <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and smaller pull requests</Link>, and in deploying often.</p>
        <p className="post__answer">Shipping in smaller increments improves quality because each change is easier to review, test, trace and roll back. What a team should shorten is the time between making a change and delivering it safely to users. How fast the code gets typed matters much less.</p>
      </section>

      <section id="how" aria-labelledby="how-h">
        <h2 id="how-h" className="post__h2">How I balance speed and quality</h2>
        <p>I don’t think there is a universal formula. These are the five principles I try to follow.</p>

        <h3 className="post__h3">1. Start with the business impact</h3>
        <p>Before deciding how much engineering effort a piece of work deserves, find out why it matters:</p>
        <ul className="post__list">
          <li>What happens if we deliver two weeks late?</li>
          <li>What happens if the feature fails, and how many customers are affected?</li>
          <li>Can we reverse the change easily?</li>
          <li>Is this an experiment or a critical business workflow?</li>
        </ul>
        <p>The answers show where speed matters most and where quality needs extra investment.</p>

        <h3 className="post__h3">2. Define the minimum acceptable quality</h3>
        <p>Moving fast shouldn’t mean abandoning engineering standards. For production software I keep a floor: no known critical security vulnerabilities introduced by the change, tests appropriate to the risk, basic error handling, monitoring or another practical way to detect failures, and a reasonable rollback or recovery plan. The depth of testing and safeguards grows with the potential impact.</p>
        <p>You can reduce scope, simplify the implementation and postpone nonessential improvements. You shouldn’t knowingly ship an unacceptable risk to meet a deadline.</p>

        <h3 className="post__h3">3. Reduce scope before you reduce quality</h3>
        <p>This is one of the most useful lessons I’ve learned. When a deadline gets close, the first conversation should be about scope. Testing comes up only after that. Do we need all ten features? Can we release three now and seven later? Can we simplify the workflow and deliver the most valuable part first?</p>
        <DeadlineLevers />
        <p>A smaller, reliable release is often better than a larger, unstable one, and the business still gets value sooner.</p>

        <h3 className="post__h3">4. Make technical tradeoffs visible</h3>
        <p>Sometimes we really do need a shortcut. That is part of engineering, and the decision should be deliberate. If we postpone a refactor to meet a deadline, it gets documented. If we accept a workaround, we write down its limits. If a feature needs more testing after release, the follow-up work is created and someone owns it.</p>
        <p>Leadership needs to understand the tradeoff too, in business terms. “We need more time because of technical debt” doesn’t give them anything to decide. This does:</p>
        <blockquote className="post__quote">
          <p>“We can deliver this feature this week using the existing implementation. Future changes to this workflow will stay difficult, and we expect more regression risk. I recommend scheduling the refactor before we expand the feature further.”</p>
        </blockquote>
        <p>Then make sure the follow-up actually gets prioritized. A ticket that sits in the backlog forever isn’t a plan.</p>

        <h3 className="post__h3">5. Invest in what makes the next release faster</h3>
        <p>Organizations often treat any engineering work that doesn’t produce a feature as overhead: automated testing, CI/CD pipelines, monitoring, development environments, fewer unnecessary dependencies, better code review. None of it earns revenue this week. All of it lowers the cost and risk of every release after.</p>
        <p>Early in my career I scripted the routine work on a carrier network in Expect and Korn shell, <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">before anyone called it DevOps</Link>. A large part of my work since has been deployment processes, infrastructure and engineering workflows. The aim was never more tools. It was making it easier for engineers to ship a change with confidence.</p>
        <p>Good engineering practices should make a team faster over time. If a process keeps blocking delivery without meaningfully reducing risk, it is worth asking whether it still serves its purpose.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">What AI changes about speed and quality</h2>
        <p>AI-assisted development makes this more interesting. I can now build things in a few hours that used to take me days or even weeks. That is exciting, and it comes with a new risk.</p>
        <p className="post__answer">AI has made code much cheaper to generate. It hasn’t made code cheaper to understand, validate or maintain, so engineering judgment matters more with AI in the loop, and teams can now create technical debt faster than ever.</p>
        <p>You can generate an entire feature quickly. Someone still has to ask whether it handles the edge cases, follows your security model, avoids unnecessary complexity, solves the actual business problem, and will make sense to whoever reads it six months from now.</p>
        <p>If a team measures productivity by how much code it produces, AI will make those numbers look fantastic, and they may say little about value delivered. I wrote about that gap in <Link to="/writing/hidden-cost-of-ai-coding/">the hidden cost of AI coding</Link>. The better use is shorter feedback loops: faster tests, quicker exploration of options, less repetitive work.</p>
      </section>

      <section id="options" aria-labelledby="options-h">
        <h2 id="options-h" className="post__h2">Bring leadership options, not just a request for more time</h2>
        <p>Working with executives taught me that they rarely want to hear only about problems. They need options. So instead of “We can’t deliver this because we need more testing,” I’d bring a recommendation:</p>
        <blockquote className="post__quote">
          <p>“We can release the core workflow this week with the existing safeguards. The remaining functionality adds validation scenarios, so I recommend moving it to the next release. That delivers business value now without increasing risk to the critical workflow.”</p>
        </blockquote>
        <p>Leadership isn’t being asked to choose between speed and quality without context. They get a practical way to have both where that’s possible, and when the tradeoff is real, its consequences are on the table. That is how I think about <Link to="/leadership/">running engineering</Link> in general.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The goal is sustainable speed</h2>
      <div className="post__close-copy">
        <p className="lead">I’ve seen teams move incredibly fast for a few weeks and spend months fixing what they shipped. I’ve also seen teams design for so long that the opportunity passed. Sustainable speed means delivering business value quickly without making the next delivery harder. Sometimes that means shipping something imperfect. Sometimes it means slowing down for a critical risk, saying no to complexity, or challenging a deadline because a failure would cost too much. After more than two decades, I don’t think that call ever gets easy. Experience helps you see which tradeoffs are worth making.</p>
        <p className="post__close-principle">Speed gets a product to market, and quality keeps it there. Sustainable engineering lets a team do both, release after release.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through a delivery tradeoff <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
