import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Leadership essay. Companion to when-everything-is-a-priority, which covers
// handling a change once it arrives; this one is about what "fast" means, and
// matching the process to the real rate of change (Scrum vs Kanban, WIP
// limits, async standups, small PRs, continuous delivery). Experience framed
// from KC's record: founder/CTO at a startup, CTO at a media publisher, VP of
// Operations, Yippify client teams including government. Examples are
// illustrative and labelled; no invented incidents, employers or years.

export const toc = [
  ['two-things', 'Fast-paced and constantly changing are two different things'],
  ['agile', 'Isn’t Agile supposed to handle change?'],
  ['scrum', 'When Scrum stops fitting'],
  ['switching', 'What context switching actually costs'],
  ['urgent', 'Real emergencies and loud requests'],
  ['tradeoffs', 'Leaders make the tradeoff visible'],
  ['finish', 'Finish before you start'],
  ['process', 'Process that helps engineers'],
  ['learned', 'What I have learned'],
];

// Fig. 698-0: the illustrative week from the text, as a grid.
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const tracks = [
  { name: 'Reporting feature', cells: [['start', 'Started; data model loaded'], ['pause', 'Paused'], ['', ''], ['rework', 'Resumed; rebase after a schema change'], ['open', 'Still open']] },
  { name: 'Customer integration', cells: [['', ''], ['start', 'Started'], ['pause', 'Paused'], ['', ''], ['drop', 'Deprioritized']] },
  { name: 'Production issue', cells: [['', ''], ['', ''], ['fix', 'Afternoon on the fix'], ['', ''], ['', '']] },
];
const marks = { start: '▶', pause: 'Ⅱ', rework: '↺', open: '…', drop: '✕', fix: '!' };

function Week() {
  return (
    <figure className="week post__figure">
      <table className="week__table">
        <caption><span className="mono">Fig. 698-0</span> An illustrative week: five days of effort, three pieces of work touched, nothing shipped</caption>
        <thead><tr><th scope="col"><span className="visually-hidden">Work</span></th>{days.map((d) => <th key={d} scope="col">{d}</th>)}</tr></thead>
        <tbody>
          {tracks.map((t) => (
            <tr key={t.name}>
              <th scope="row">{t.name}</th>
              {t.cells.map(([k, label], i) => (
                <td key={i} className={k ? `is-${k}` : 'is-empty'} data-day={days[i]}>
                  {k && <><span className="week__mark" aria-hidden="true">{marks[k]}</span><span className="week__label">{label}</span></>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot><tr><th scope="row">Shipped</th><td colSpan={5} className="week__shipped">Nothing. Every restart paid to reload context, and two branches drifted further from main.</td></tr></tfoot>
      </table>
    </figure>
  );
}

const modes = [
  { s: 'Priorities hold for the sprint', fit: 'Scrum with a sprint goal', why: 'Planning once and committing works when the plan survives two weeks' },
  { s: 'Priorities shift every few days', fit: 'Kanban with a WIP limit', why: 'Pull the next most important item when something finishes; no commitment to break' },
  { s: 'Steady interruptions, stable direction', fit: 'Either, with reserved capacity', why: 'Plan around the support load the team really gets instead of pretending it is zero' },
  { s: 'Direction changes daily', fit: 'No process fixes this', why: 'The problem is the decision-making upstream, and it belongs in a leadership conversation' },
];

function Fit() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 698-1</span> Match the process to the real rate of change</caption>
        <thead><tr><th scope="col">How often priorities really change</th><th scope="col">What fits</th><th scope="col">Why</th></tr></thead>
        <tbody>{modes.map((m) => <tr key={m.s}><th scope="row">{m.s}</th><td>{m.fit}</td><td>{m.why}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="two-things" aria-labelledby="two-things-h">
        <h2 id="two-things-h" className="post__h2">Fast-paced and constantly changing are two different things</h2>
        <p>I like fast-paced environments. I co-founded a startup where we had revenue in under four months, and the pace was a large part of why I loved it. Decisions were made in a hallway conversation, a problem found in the morning was fixed by the afternoon, and the distance between an idea and a customer using it was short. I have worked in growing companies and larger organizations since, and the teams I enjoyed most always had that same quality: they moved.</p>
        <p>Over the years I have learned to separate that from something that looks similar from the outside and feels completely different on the inside. In a fast-paced team, decisions are quick and direction is stable. In a team whose priorities change constantly, decisions are quick and direction is not. The first team moves fast toward something. The second team moves fast, full stop.</p>
        <p className="post__answer">A fast-paced engineering team decides quickly and ships often toward a goal that holds long enough to reach. Constantly changing priorities replace the goal every few days, so the team keeps starting and rarely finishes. Speed comes from short feedback loops and clear direction; it does not come from changing direction often.</p>
        <p>The hard part is noticing which one you are in, because both feel busy, and busy feels like progress.</p>
      </section>

      <section id="agile" aria-labelledby="agile-h">
        <h2 id="agile-h" className="post__h2">Isn’t Agile supposed to handle change?</h2>
        <p>The Agile Manifesto values responding to change over following a plan, and I agree with it. The software I have built most successfully was shaped by what customers did, not by what we guessed in a planning document. Iterating in short cycles is exactly how you find out what to build.</p>
        <p>But responding to change and absorbing unlimited change are different promises. Agile lowers the cost of changing direction by keeping work small and feedback fast. It does not make that cost zero. A story half built, a branch half reviewed, a design half discussed: each of those is work that has to be finished, parked or thrown away when the direction moves. Agile lets you choose which, cheaply, and it does not let you skip the choice. Changing priorities in an Agile team still has consequences; Agile keeps them small enough to see and decide on.</p>
      </section>

      <section id="scrum" aria-labelledby="scrum-h">
        <h2 id="scrum-h" className="post__h2">When Scrum stops fitting</h2>
        <p>Scrum assumes a sprint plan survives the sprint. The team plans two weeks of work, commits to a goal, and protects it. When that holds, it is a good rhythm. When priorities change several times a week, the commitment becomes fiction. Planning is redone mid-sprint, the board stops reflecting reality, and the retrospective is mostly an explanation of why the plan did not happen. The team ends up doing the ceremony and getting none of the benefit, and the carryover becomes chronic, which I wrote about in <Link to="/writing/what-sprint-carryover-is-telling-you/">what sprint carryover is telling you</Link>.</p>
        <p>Trying harder at Scrum will not fix it. Pick a process that matches how often priorities change.</p>
        <Fit />
        <p>The last row matters most. If direction changes daily, no board layout will save the team, because the instability is upstream of engineering. Switching to Kanban there just makes the churn more efficient. That needs a conversation with whoever is setting the priorities, which is a leadership job and the subject of the sections below.</p>
      </section>

      <section id="switching" aria-labelledby="switching-h">
        <h2 id="switching-h" className="post__h2">What context switching actually costs</h2>
        <p>Here is an illustrative week, the kind I think most engineers will recognize. Monday, an engineer starts a reporting feature and spends the morning loading the data model into their head. Tuesday, it is paused for an integration a customer asked for. Wednesday, a production issue takes the afternoon. Thursday, the reporting feature is back, but someone has merged a schema change in the meantime, so the morning goes to rebasing and re-reading. Friday, the integration is deprioritized. Five days of effort, and nothing shipped.</p>
        <Week />
        <p>The visible cost is the unfinished work. The less visible costs are worse. Every restart pays to reload context. Every pause leaves a branch that drifts away from main and gets harder to merge. Every re-plan is a meeting. Half-finished work is also inventory: it has cost money and delivered nothing, and the more of it a team carries, the more it costs to keep track of. And people notice. Engineers who never finish anything stop believing the plan, and a team that does not believe the plan stops raising problems early, because what would be the point. Engineering capacity is finite, so every new start is paid for by something that is now not finishing.</p>
      </section>

      <section id="urgent" aria-labelledby="urgent-h">
        <h2 id="urgent-h" className="post__h2">Real emergencies and loud requests</h2>
        <p>Some things are urgent. Customers cannot use the product. Data is wrong. Revenue is being lost by the hour. A security problem is open. Those should interrupt anything, and a team that cannot drop everything for them has a different problem.</p>
        <p>Most requests that arrive marked urgent are important to someone, often for a good reason, and arrived loudly while nothing was on fire. Calling everything urgent leaves the word with no information. I try to sort requests by asking what happens if this waits until we finish what is in flight. If the honest answer is “a customer is blocked”, it goes now. If it is “someone will be disappointed”, it goes into planning, with a date. I wrote about how to ask why a priority changed, and how to tell a strategic shift from a stream of interruptions, in <Link to="/writing/when-everything-is-a-priority/">when everything is a priority</Link>; I will not repeat it here.</p>
      </section>

      <section id="tradeoffs" aria-labelledby="tradeoffs-h">
        <h2 id="tradeoffs-h" className="post__h2">Leaders make the tradeoff visible</h2>
        <p>The worst thing an engineering leader can do with a new priority is say yes and add it to the pile. It feels supportive, and it hurts the team, because it now carries more than it can finish, and the business believes it is getting everything it asked for. The gap shows up weeks later as a missed date nobody saw coming.</p>
        <p>I ask the requester to choose what should stop so the team can take on the new priority:</p>
        <p className="post__pull">If this becomes our highest priority, what should we stop working on?</p>
        <p>It treats the request as legitimate, which it usually is, and it puts the cost on the table where the person who owns the business decision can see it. Sometimes the answer is to stop something, and that is fine; the business decided with the facts. Sometimes, seeing the cost, the requester decides it can wait two weeks, and that is fine too. What it prevents is the silent version, where everything is accepted and the team absorbs the impossible. As CTO and in operations roles, I learned that executives almost always prefer to make the tradeoff themselves than to discover later that engineering made it for them. Making tradeoffs visible is part of what I mean by <Link to="/leadership/#cross-functional">working across product and leadership</Link>.</p>
      </section>

      <section id="finish" aria-labelledby="finish-h">
        <h2 id="finish-h" className="post__h2">Finish before you start</h2>
        <p>If I could give a team one rule, it would be to finish before starting something new. A work-in-progress limit sounds bureaucratic and works like a release valve: when the limit is reached, the only way to start something is to finish something. It makes the team swarm on the work closest to done, and it turns a new priority into a visible swap instead of an invisible addition.</p>
        <p>Smaller changes make that rule practical. A story that takes two days can usually finish before the next priority shift. A story that takes three weeks almost never does. Smaller pull requests get reviewed the same day instead of sitting, and smaller releases are cheap to make and cheap to roll back. A team working this way can change direction often without much waste, because there is little in flight to throw away. That is the real connection between small batches and agility, and why I wrote about <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link> separately.</p>
      </section>

      <section id="process" aria-labelledby="process-h">
        <h2 id="process-h" className="post__h2">Process that helps engineers</h2>
        <p>Processes should solve problems, not create additional work. I judge every piece of process by whether it removes a problem the team really has.</p>
        <p>A lightweight Agile rhythm, with a clear goal and short planning, helps. A standup that is a status report to a manager does not; an asynchronous update in a channel gives the same information without stopping everyone at the same time each day, and saves the live conversation for when someone is blocked. A Kanban board with a WIP limit helps when priorities move. Small pull requests reviewed within a day help everyone. Continuous delivery helps most of all, because when shipping is routine, finishing becomes the natural end of every piece of work instead of a separate event that gets postponed. And if a ceremony has outlived the problem it solved, I would rather drop it than defend it.</p>
        <p>The test I use is simple: if the team stopped doing this tomorrow, what would go wrong? If the answer is nothing, it is overhead.</p>
      </section>

      <section id="learned" aria-labelledby="learned-h">
        <h2 id="learned-h" className="post__h2">What I have learned</h2>
        <p>I have been on both sides of this. As a founder, I was sometimes the person changing the priorities, because a customer called or an opportunity appeared, and I learned the hard way what it did to the people building things. As a CTO and engineering leader, I have been the person explaining to the business why a team that was working hard was not delivering, and more often than not the answer was that it had been asked to start too many things.</p>
        <p>The team needs to see the balance handled honestly, by a leader who will say what something costs and then support whatever the business decides. A fast-paced company still needs clear direction. That direction is the thing that lets a team go fast.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Fast toward something</h2>
      <div className="post__close-copy">
        <p className="lead">Make every priority change a visible tradeoff, finish before starting, and choose a process that fits how often the business really changes its mind.</p>
        <div className="post__close-actions">
          <Link to="/leadership/" className="action">How I run engineering <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
