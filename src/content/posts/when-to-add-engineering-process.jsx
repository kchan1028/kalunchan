import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// When to add engineering process, with trust as the thread. Source: KC's brief (Oct 2026): 20+ years with startups,
// growing organizations, distributed teams and regulated systems. Career facts from profile.md: co-founded company's
// global team of 30+ engineers, VoIP specialists and designers; government systems with federal requirements.
// Researched: coordination paths n(n-1)/2 (Brooks's law); DORA's streamlining change approval capability (heavyweight
// external approval hurts delivery performance, no evidence it lowers change fail rate; peer review can meet
// segregation of duties), checked 2026-10-18. Every scenario is an illustration and is labelled as one.

export const metadata = {
  slug: 'when-to-add-engineering-process',
  title: 'When Process Helps and When It Becomes the Problem',
  shortTitle: 'When process helps',
  seoTitle: 'When Should Engineering Teams Add Process? Balancing Trust, Speed, and Accountability',
  description:
    'When should engineering teams add process? An engineering leader on using process to build trust, letting trust earn autonomy, and keeping accountability.',
  teaser:
    'Why companies add process, how the right process builds trust between people who barely know each other, what it costs in engineering time, and how trust should earn a team more autonomy.',
  dek:
    'Process isn’t good or bad on its own. The useful questions are when to add it, what problem it solves, whether it builds trust, and when it has become overhead nobody needs.',
  summary:
    'Why growing organizations add process; how process builds trust between leadership and engineering, between teams and between individuals; why process fails; the hidden workload it adds; how trust should earn autonomy while accountability stays; an eight-step way to decide whether to add a process, plus a process budget; how needs change with complexity and risk; and why removing process is a leadership job.',
  topics: ['Leadership', 'Delivery', 'Engineering judgment'],
  related: [
    { to: '/writing/speed-vs-quality-software-engineering/', label: 'Match the process to the risk of the change' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review starts with the plan' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'Your team size should influence your architecture' },
    { to: '/writing/building-federal-government-applications/', label: 'What federal government applications taught me' },
    { to: '/writing/when-everything-is-a-priority/', label: 'When everything is a priority, nothing is' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  minutes: 10,
  keywords: [
    'when to introduce process',
    'engineering process vs bureaucracy',
    'balance process and productivity',
    'building trust in engineering teams',
    'engineering leadership accountability',
    'process overhead in software development',
    'scaling engineering teams',
    'engineering management best practices',
    'team autonomy',
    'change approval process',
  ],
  about: [
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
    { '@type': 'Thing', name: 'Institutional trust', sameAs: 'https://en.wikipedia.org/wiki/Institutional_trust_(social_sciences)' },
    { '@type': 'Thing', name: 'Trust', sameAs: 'https://en.wikipedia.org/wiki/Trust_(social_science)' },
    { '@type': 'Thing', name: 'Bureaucracy', sameAs: 'https://en.wikipedia.org/wiki/Bureaucracy' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Brooks’s law', sameAs: 'https://en.wikipedia.org/wiki/Brooks%27s_law' },
    { '@type': 'Thing', name: 'Separation of duties', sameAs: 'https://en.wikipedia.org/wiki/Separation_of_duties' },
    { '@type': 'Thing', name: 'Change advisory board', sameAs: 'https://en.wikipedia.org/wiki/Change-advisory_board' },
    { '@type': 'Organization', name: 'DORA (DevOps Research and Assessment)', url: 'https://dora.dev/' },
  ],
  // Emitted as JSON-LD citations (site.js).
  sources: [
    { label: 'DORA: Streamlining change approval', url: 'https://dora.dev/capabilities/streamlining-change-approval/' },
  ],
  faq: [
    {
      q: 'When should a company introduce process?',
      a: 'Introduce process when a specific problem keeps recurring and costs more than the process would: unclear ownership, missed handoffs, unpredictable delivery, repeated quality failures, or a security or regulatory requirement. Growth makes those problems more likely, but headcount alone is not a reason to add process.',
    },
    {
      q: 'What is the difference between engineering process and bureaucracy?',
      a: 'A useful engineering process is tied to a real risk, sized to that risk, owned by someone, and reviewed to see whether it still works. It becomes bureaucracy when it costs more than the risk it reduces, when nobody can say what problem it solves, or when people satisfy it on paper without changing how they work.',
    },
    {
      q: 'Can process build trust in an engineering team?',
      a: 'Yes. Consistent delivery updates, early risk reporting, clear API contracts, code review and shared standards give people a reason to trust colleagues they do not know well. Process cannot create trust on its own, though. If leaders punish bad news or senior people skip the rules, the process loses credibility.',
    },
    {
      q: 'How do you balance process and productivity?',
      a: 'Start from the recurring problem and its root cause, use the smallest control that works, match it to the risk, and automate repetitive checks. Treat meetings, approvals and reports as a budget of engineering time, measure whether each process still pays for itself, and simplify or retire the ones that do not.',
    },
    {
      q: 'Does more autonomy mean less accountability?',
      a: 'It shouldn’t. Autonomy changes how closely leaders supervise the steps. A trusted team makes more of its own decisions and still answers for delivery, reliability and raising risks early. Some controls, such as peer review on production changes and separation of duties in regulated work, stay regardless of trust.',
    },
  ],
};

export const toc = [
  ['why', 'When should a company introduce process?'],
  ['trust', 'Sometimes process is how trust gets built'],
  ['fails', 'Why process works in one place and fails in another'],
  ['cost', 'The workload process adds'],
  ['autonomy', 'Trust should earn autonomy'],
  ['decide', 'How to decide whether to add a process'],
  ['grow', 'Process should change as the organization does'],
  ['remove', 'Removing process is a leadership job'],
];

// ---------- Fig. 710-1: one-to-one connections grow much faster than headcount ----------
// n(n-1)/2 possible pairs. Bars share one linear scale starting at zero; the five-person bar is a sliver on purpose.
const teamSizes = [5, 30, 100].map((n) => ({ n, pairs: (n * (n - 1)) / 2 }));
const maxPairs = teamSizes[teamSizes.length - 1].pairs;

function CoordinationPaths() {
  return (
    <figure className="pcpaths post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 710-1</span> Possible one-to-one connections grow much faster than the team
        <span className="journey__key label">Pairs of people who might need to coordinate: n × (n − 1) ÷ 2. Bars share one scale starting at zero.</span>
      </figcaption>
      <ul className="pcpaths__rows">
        {teamSizes.map(({ n, pairs }) => (
          <li key={n} className="pcpaths__row">
            <span className="pcpaths__label">{n} people</span>
            <span className="pcpaths__track" aria-hidden="true">
              <span className="pcpaths__bar" style={{ width: `${(pairs / maxPairs) * 100}%` }} />
            </span>
            <span className="pcpaths__value mono">{pairs.toLocaleString('en-US')} pairs</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

// ---------- Fig. 710-2: useful control vs bureaucracy ----------
// The examples are illustrations, not records of a particular team.
const controlRows = [
  ['Code review', 'A peer reviews every production change, more closely when the risk is higher', 'Two approvals from another team before a copy change can ship'],
  ['Status reporting', 'A short written update with risks at the top, sent before anyone has to ask', 'A weekly meeting that reads the ticket board aloud'],
  ['Approvals', 'One named decision owner and an agreed response time', 'Sign-off from every team lead, with nobody named to decide'],
  ['Documentation', 'A decision record for choices that are hard to undo', 'Templates filled in after the work, for a review nobody runs'],
  ['Compliance', 'Evidence collected by the pipeline as the work happens', 'Screenshots gathered by hand the week before an audit'],
];

function ControlCompare() {
  return (
    <figure className="post__figure">
      {/* A labeled, focusable scroll region, so a phone scrolls the table and never the page. */}
      <div className="pccontrol__scroll" role="region" aria-label="Useful operational controls compared with bureaucracy" tabIndex={0}>
        <table className="post__table pccontrol">
          <caption>
            <span className="mono">Fig. 710-2</span> The same need, met two ways (illustrations)
          </caption>
          <thead>
            <tr><td></td><th scope="col">Useful operational control</th><th scope="col">Bureaucracy</th></tr>
          </thead>
          <tbody>
            {controlRows.map(([need, useful, bureaucracy]) => (
              <tr key={need}><th scope="row">{need}</th><td className="is-better">{useful}</td><td>{bureaucracy}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

// ---------- Fig. 710-3: trust earns autonomy, above a floor of controls that stay ----------
const trustSteps = [
  { name: 'Clear expectations', who: 'A new team, a new leader, or unfamiliar work', how: 'Agreed standards, closer review, frequent check-ins.' },
  { name: 'Delegated decisions', who: 'After a run of consistent delivery', how: 'The team decides within agreed limits and reports outcomes and risks.' },
  { name: 'Autonomy with accountability', who: 'Sustained, predictable results', how: 'The team owns decisions end to end. Leadership reviews results instead of each step.' },
];
const trustFloor = [
  'Peer review on production changes',
  'Security review for authentication and permissions',
  'Audit trails and separation of duties where regulation requires them',
  'Extra care for changes that are costly and hard to undo',
];

function TrustLadder() {
  return (
    <figure className="pctrust post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 710-3</span> As trust grows, supervision shrinks
        <span className="journey__key label">Each step is earned by consistency, and a team can step back down. The floor stays wherever the team stands.</span>
      </figcaption>
      <ol className="pctrust__steps">
        {trustSteps.map((s, i) => (
          <li key={s.name} className="pctrust__step" style={{ '--i': i }}>
            <span className="pctrust__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="pctrust__name">{s.name}</span>
            <span className="pctrust__who label">{s.who}</span>
            <span className="pctrust__how">{s.how}</span>
          </li>
        ))}
      </ol>
      <div className="pctrust__floor">
        <p className="pctrust__floor-name">Controls that stay regardless of trust</p>
        <ul className="pctrust__floor-list">
          {trustFloor.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </figure>
  );
}

// ---------- Fig. 710-4: deciding whether to add a process ----------
const decideSteps = [
  ['Identify the recurring problem', 'One bad week is an incident. The same failure three times is a pattern.'],
  ['Find the root cause', 'Ask why it keeps happening until the answer is something you can change.'],
  ['Decide whether process is the fix', 'Often it isn’t.', 'If not: fix the cause directly with an owner, a tool or a conversation, and stop here.'],
  ['Start with the smallest control', 'A checklist before a meeting, a meeting before a committee.'],
  ['Match the control to the risk', 'Lighter for changes that are cheap and easy to undo, heavier for the rest.'],
  ['Automate the repetitive checks', 'A check that runs in the pipeline costs nobody’s attention.'],
  ['Measure outcomes and cost', 'Did the problem shrink, and how many hours a week does the control take?'],
  ['Review, simplify or retire it', 'Give it an owner and a review date when it is created.', 'Then go back to step 1 with whatever is still going wrong.'],
];

function DecidePath() {
  return (
    <figure className="pcdecide post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 710-4</span> Eight steps before a new process becomes a recurring obligation
        <span className="journey__key label">Step 3 is an exit. Step 8 loops back.</span>
      </figcaption>
      <ol className="pcdecide__steps">
        {decideSteps.map(([name, note, branch], i) => (
          <li key={name} className={`pcdecide__step${branch ? ' has-branch' : ''}`}>
            <span className="pcdecide__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="pcdecide__name">{name}</span>
            <span className="pcdecide__note">{note}</span>
            {branch && <span className="pcdecide__branch">{branch}</span>}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="why" aria-labelledby="why-h">
        <h2 id="why-h" className="post__h2">When should a company introduce process?</h2>
        <p>With five engineers, most process lives in one chat channel. Everyone knows who is changing the billing code, who is on call, and who to ask when a deploy looks strange. Add twenty-five people, a second time zone and a customer contract with security terms, and the same informal habits start dropping things.</p>
        <p>I’ve worked on both sides of that line: early startups, the global team of more than 30 engineers, VoIP specialists and designers at the company I co-founded, and government systems where some controls are written into the requirements. The question of when to add process has come up in every one of them.</p>
        <p className="post__answer">Companies should introduce process when a specific, recurring problem costs more than the process would: unclear ownership, missed handoffs, unpredictable delivery, repeated quality failures, or a security or regulatory requirement. Growth makes those problems more likely, but headcount on its own is not a reason. The best process also builds trust, and the supervision it adds should shrink as that trust is earned.</p>
        <p>Part of the pressure is arithmetic. Every pair of people who might need to coordinate is a possible conversation, and the number of pairs grows much faster than the team. Fred Brooks used the same count in <cite>The Mythical Man-Month</cite> to explain why adding people to a late software project tends to make it later.</p>
        <CoordinationPaths />
        <p>Nobody talks to all 4,950 pairs, of course. Informal communication just stops reaching everyone, and the gaps show up as recognizable problems. Two teams each assume the other owns the payment retry job. Delivery dates swing because nobody sees dependencies until the week they block. An outage repeats because the fix lived in one person’s head. A customer asks for evidence that every production change was reviewed, and nobody can produce it.</p>
        <p>Each of those has a different cause and needs a different fix. “We’re bigger now” doesn’t say which one you have, so it can’t tell you which process would help.</p>
      </section>

      <section id="trust" aria-labelledby="trust-h">
        <h2 id="trust-h" className="post__h2">Sometimes process is how trust gets built</h2>
        <p>Engineers often read new process as a message that leadership doesn’t trust them. Sometimes that reading is correct. Just as often, it’s how trust starts, especially between people who don’t work together every day.</p>

        <h3 className="post__h3">Between engineering and leadership</h3>
        <p>An executive who hears three weeks early that a date is slipping, along with options, trusts the next estimate more. One who hears the day before stops trusting estimates and starts asking for daily updates. A short weekly written update with risks at the top is process. It also heads off a lot of heavier process later.</p>

        <h3 className="post__h3">Between engineering teams</h3>
        <p>When the team that owns an orders service publishes a versioned contract and a named owner, the teams that depend on it can plan without a meeting. Without that, every change needs a conversation, and people start keeping defensive copies of data they don’t trust. I’ve written about why <Link to="/writing/api-architecture-lessons/">clear API boundaries</Link> matter for the systems. They matter for the people just as much.</p>

        <h3 className="post__h3">Between individuals</h3>
        <p>A new engineer doesn’t know yet whether a teammate handles edge cases or tests the failure path. Code review, shared standards and clear expectations give them a reason to trust the code before they know the person. Good review is also how people learn the team’s judgment, which is why I think <Link to="/writing/code-review-in-the-ai-era/">code review starts with the plan</Link>, well before the pull request.</p>

        <h3 className="post__h3">Personal trust and institutional trust</h3>
        <p className="post__answer">Personal trust comes from knowing someone’s track record. Institutional trust is confidence in how the organization works: ownership is clear, risks get raised early, and changes are reviewed before they ship. Small teams run on personal trust. Growing organizations need institutional trust, because people depend every day on colleagues they have never met.</p>
        <p>Process can’t manufacture trust by itself. If leaders say they want risks raised early and then punish the first person who raises one, the risk section of the weekly update goes quiet. If a review standard exists but senior engineers skip it, nobody believes the standard. People trust behavior they can predict, so a process helps only when the people running it behave consistently.</p>
      </section>

      <section id="fails" aria-labelledby="fails-h">
        <h2 id="fails-h" className="post__h2">Why process works in one place and fails in another</h2>
        <p>The same process can work well on one team and fail on the next. The failures tend to follow a few patterns.</p>

        <h3 className="post__h3">It solves the wrong problem</h3>
        <p>An illustration: a team has two outages caused by bad configuration changes. Leadership responds with a weekly change review meeting for every deploy. The meeting adds days to every change, and nobody in the room reads the configuration closely enough to catch the next mistake. The root cause was missing validation. A check in the deployment pipeline would have caught both outages and cost nobody a meeting.</p>

        <h3 className="post__h3">It ignores how the work actually happens</h3>
        <p>A process designed by someone who doesn’t do the work tends to get satisfied on paper. Engineers fill in the release template after the release, because the template asks for information that only exists afterward.</p>

        <h3 className="post__h3">Every change gets the same controls</h3>
        <p>A copy change on a marketing page and a change to authentication don’t carry the same risk. Giving them the same review slows the first and under-protects the second. I wrote about <Link to="/writing/speed-vs-quality-software-engineering/">matching process to the risk of each change</Link> in more detail.</p>

        <h3 className="post__h3">It stands in for leadership</h3>
        <p>One person keeps merging untested code, so everyone gets a new approval step. That is a conversation a manager avoided, turned into a cost the whole team pays.</p>

        <h3 className="post__h3">Approvals have no decision owner</h3>
        <p>A request needs sign-off from five people. Any of them can block it and none of them can decide. It waits until someone escalates, which is the decision process the organization really has.</p>

        <h3 className="post__h3">Nobody measures it or retires it</h3>
        <p>The process was added for a problem that went away a reorganization ago. Nobody checked whether it helped, and nobody owns removing it, so it stays.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">The workload process adds</h2>
        <p>Process is never free, even when the calendar makes it look that way. A one-hour weekly meeting for eight engineers takes a full working day of engineering time every week, before counting the context switch on either side of it. Approval queues, status reports and documentation take hours too, and those hours never show up on a roadmap.</p>
        <p>The costs also compound. An illustration: approvals slow releases down, so teams batch more changes into each release. Bigger releases fail more often and are harder to diagnose, so leadership adds another approval to fix a problem the first approval caused.</p>
        <p><a href="https://dora.dev/capabilities/streamlining-change-approval/" target="_blank" rel="noopener noreferrer">DORA’s research on change approval</a> points the same way. It found that heavyweight approval by an external body, such as a change advisory board, was associated with lower software delivery performance, and it found no evidence that more formal external review lowered the rate of failed changes. DORA recommends peer review built into the development workflow instead. Controls still have a place. The question is which ones reduce a real risk and which only add work.</p>
        <ControlCompare />
        <p className="post__answer">Engineering process becomes bureaucracy when it costs more than the risk it reduces, when nobody can say what problem it solves, or when people satisfy it on paper without changing how they work. A useful control is tied to a real risk, sized to that risk, owned by someone, and checked to see whether it still works.</p>
      </section>

      <section id="autonomy" aria-labelledby="autonomy-h">
        <h2 id="autonomy-h" className="post__h2">Trust should earn autonomy</h2>
        <p>The right amount of process for a team should change as that team proves itself. A new team, a new leader or a team working in unfamiliar territory benefits from clear expectations, closer review and more frequent check-ins. That is how everyone learns what good looks like. As the team delivers consistently, leadership can delegate more decisions and judge the team on its results.</p>
        <TrustLadder />
        <p className="post__answer">Trust should earn a team more autonomy while its accountability stays the same. As a team delivers consistently, leaders can delegate decisions and supervise less. The team still owns its outcomes, raises risks early and keeps the controls that protect production, security and regulated work.</p>
        <p>Some controls stay no matter how much I trust the people involved. A second reviewer on a change to permissions or payments protects the author as much as the company, and it says nothing about the author’s competence. In regulated work, separation of duties is a requirement, and DORA notes that peer review recorded in the development platform can satisfy it. I’ve <Link to="/writing/building-federal-government-applications/">built government applications</Link> where those requirements shape the whole delivery process.</p>
        <p>Trust can also move the other way. If a team misses commitments repeatedly or ships a run of incidents, adding expectations back for a while is reasonable, as long as everyone knows what would remove them again.</p>
      </section>

      <section id="decide" aria-labelledby="decide-h">
        <h2 id="decide-h" className="post__h2">How to decide whether to add a process</h2>
        <p>When someone proposes a new process, I walk through roughly the same steps. The third one ends a lot of proposals, and that is a good result.</p>
        <DecidePath />

        <h3 className="post__h3">Give process a budget</h3>
        <p>Every recurring meeting, approval and report spends engineering capacity, and most organizations never add it up. I’d rather leaders treat it like a budget. Decide roughly how much of a team’s week coordination should take. When a new process comes in, ask what goes out to make room. Leaders who assume administrative work is free tend to find out otherwise in the delivery dates, a pattern that also shows up in <Link to="/writing/what-sprint-carryover-is-telling-you/">sprint carryover</Link>.</p>
        <p>Automation is the best way to stay inside that budget. Tests, linting, dependency scanning, policy checks on infrastructure code and evidence collection can all run in the pipeline, where they cost nobody’s attention and never skip a step on a busy day.</p>
      </section>

      <section id="grow" aria-labelledby="grow-h">
        <h2 id="grow-h" className="post__h2">Process should change as the organization does</h2>
        <p>A small team with shared context needs very little: code review, a deploy checklist, and decisions written down when they are hard to undo. Once there are several teams, the needs shift toward ownership boundaries, API contracts, shared standards and planning around dependencies. A growing organization adds delivery reporting, an incident process and onboarding that doesn’t depend on one person’s memory. Large enterprises and regulated environments add audit trails, change records, access reviews and compliance evidence, and the ones that run well automate most of it.</p>
        <p className="post__answer">Headcount alone doesn’t determine how much process a team needs. Complexity, risk, coordination requirements and organizational maturity matter more. A ten-person team building a payments product may need controls that a fifty-person team building an internal reporting tool never will.</p>
        <p>The same logic applies to architecture, which is why I think <Link to="/writing/team-size-should-influence-architecture/">team size should influence architecture</Link> as one input among several, never the only one.</p>
      </section>

      <section id="remove" aria-labelledby="remove-h">
        <h2 id="remove-h" className="post__h2">Removing process is a leadership job</h2>
        <p>Adding a process is easy. It feels responsible, and nobody gets blamed for being careful. Removing one takes judgment, because someone remembers why it was added and removing it feels like accepting risk. That is why process tends to pile up, and why someone with authority has to own taking it away.</p>
        <p>Before adding a process, I want to agree on the problem, its current cost and how we will judge whether the additional work helps.</p>
        <p>I also look for a fix that avoids adding another recurring obligation. A clearer owner or a one-time change to the tooling may be enough.</p>
        <p>An engineering leader answers for reliability and for speed at the same time, so they are the person who has to weigh one against the other. Protecting reliability with controls nobody questions is easy. So is protecting speed by removing everything. The job is keeping the controls that earn their cost and having the discipline to drop the rest.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Good process makes people more effective</h2>
      <div className="post__close-copy">
        <p className="lead">Good process makes an organization more predictable without making the people in it less effective. People can see who owns what and how the work gets done, which gives leadership confidence and lets teams work on their own without someone checking each step. When a process stops doing those things, leadership should have the discipline to change it or remove it, even if it was a good idea when it started.</p>
        <p className="post__close-principle">I want the team to know which decisions it can make on its own and when someone else needs to be involved. A process should make that easier to understand.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through your team’s process <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
