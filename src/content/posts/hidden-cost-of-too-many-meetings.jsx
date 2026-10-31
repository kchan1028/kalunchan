import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// The hidden cost of too many meetings, with meetings as symptoms of deeper problems as the thread. Source: KC's brief
// (Oct 21 2026). The early-conversation point about simplifying requirements and UX is KC's own, from the brief; every
// other scenario is a generalization or illustration, not an incident. The 8-hours arithmetic, the process budget and
// personal vs institutional trust already live in when-to-add-engineering-process, priority-level context switching in
// fast-paced-vs-changing-priorities, and the bottleneck story in what-engineering-leadership-actually-does, so this
// post links to them. Maker's vs manager's schedule: Paul Graham, July 2009, checked 2026-10-21. No statistics.

export const toc = [
  ['cost', 'What a meeting costs beyond the hour'],
  ['accumulate', 'How meetings pile up'],
  ['symptom', 'What the meeting is standing in for'],
  ['trust', 'When a meeting replaces trust'],
  ['focus', 'Three free hours aren’t three hours of work'],
  ['choose', 'Choosing how to communicate'],
  ['clarity', 'Meetings that create clarity'],
  ['leaders', 'Leaders can be the biggest source'],
  ['questions', 'How I think about meetings now'],
];

// ---------- Fig. 719-1: what a recurring meeting is often standing in for ----------
// Generalizations, not diagnoses of any particular team.
const standIns = [
  ['Weekly status meeting', 'Progress nobody can see without asking', 'A short written update with risks first, and a board that reflects reality'],
  ['Recurring requirements review', 'Stories that arrive without business rules or acceptance criteria', 'Smaller stories, with criteria agreed before development starts'],
  ['The same decision, discussed again', 'Nobody who owns the decision', 'A named decision owner, and the decision written down'],
  ['Cross-team sync', 'Unclear ownership between teams', 'Explicit ownership and a documented interface'],
  ['A large invite list “so nobody misses anything”', 'Decisions that never get written down', 'A short decision record people can find later'],
];

function StandIns() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 719-1</span> What a recurring meeting is often standing in for</caption>
        <thead><tr><th scope="col">Meeting</th><th scope="col">Often making up for</th><th scope="col">What would reduce the need</th></tr></thead>
        <tbody>{standIns.map(([meeting, missing, fix]) => <tr key={meeting}><th scope="row">{meeting}</th><td>{missing}</td><td>{fix}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">Patterns, not diagnoses. Some of these meetings are still worth keeping after the underlying problem is fixed.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">What a meeting costs beyond the hour</h2>
        <p>Meetings aren’t the enemy. Some of the most useful hours I’ve spent as an engineering leader were in a room, or on a call, with the people who needed to make a decision together. I’ve also watched calendars fill up until engineers, product managers and designers had less time for the work those meetings were supposed to support.</p>
        <p>Most people know the arithmetic: a one-hour meeting with eight people uses eight hours of working time. I used that number in <Link to="/writing/when-to-add-engineering-process/#cost">when process helps</Link>, and it still undercounts. Someone prepares for the meeting. The half hour before it rarely goes to anything that needs deep concentration. Someone writes up what was decided, and if the right person wasn’t there, a follow-up meeting gets scheduled to cover the same ground.</p>
        <p>The cost I think gets missed most is waiting. When a question can only be answered at Thursday’s sync, work that runs into that question on Monday either stops for three days or carries on based on a guess. Neither shows up on anyone’s calendar, and the guess can turn into rework that does.</p>
        <p className="post__answer">The real cost of a meeting includes the preparation, the context switch on either side, the notes and follow-up meetings, and the work that waits for the next scheduled slot. For engineers, the largest cost is often the focused time a meeting breaks up, which is much harder to see than the hour itself.</p>
      </section>

      <section id="accumulate" aria-labelledby="accumulate-h">
        <h2 id="accumulate-h" className="post__h2">How meetings pile up</h2>
        <p>Almost every meeting starts with a good reason. A project misses a deadline, so a weekly status meeting appears. Two teams ship changes that conflict, so a sync gets added. Someone hears about an important decision after the fact, so future invitations go to more people. Each of those made sense on the day it was created.</p>
        <p>Six months later the deadline is long past and the teams have been reorganized, and the meeting is still on the calendar. Recurring meetings are easy to create and awkward to cancel, because cancelling one can sound like saying the problem is solved or the organizer’s meeting wasn’t useful. Invite lists only grow, since leaving someone out feels risky and adding them feels free.</p>
        <p>Underneath much of this is an assumption that more communication means better communication. A team can spend hours in meetings every week and still be unclear about who decides, what’s in scope and what changed since last Tuesday. What I care about is whether the people who need information get it when they need it, in a form they can act on.</p>
      </section>

      <section id="symptom" aria-labelledby="symptom-h">
        <h2 id="symptom-h" className="post__h2">What the meeting is standing in for</h2>
        <p>When a team’s calendar is overloaded, I find it more useful to ask why each recurring meeting exists than to cut meetings across the board. A lot of them are compensating for something else. Status meetings exist because there’s no reliable place to see progress. Requirements sessions keep happening because stories arrive without the business rules, which I wrote about in <Link to="/writing/why-writing-good-user-stories-is-hard/">why good user stories are hard</Link>. The same decision gets discussed in three meetings because nobody owns it, so the group keeps reconvening to talk about it again.</p>
        <StandIns />
        <p>Cancelling a meeting without fixing what it covers usually just moves the problem. Status questions turn into direct messages, the requirements discussion happens halfway through a pull request, and within a few weeks someone schedules a new meeting with a different name. That’s why I’m wary of blanket cuts and meeting-free days used on their own. They change the calendar and leave the cause in place.</p>
        <p className="post__answer">Too many meetings are often a symptom of deeper organizational problems: unclear ownership, requirements that arrive incomplete, decisions nobody owns, and low confidence in how work is progressing. Fixing those reduces meetings more durably than cutting meetings directly.</p>
      </section>

      <section id="trust" aria-labelledby="trust-h">
        <h2 id="trust-h" className="post__h2">When a meeting replaces trust</h2>
        <p>Some meetings exist because a leader doesn’t have confidence that the work is moving. If the last project surprised them, they want to see the next problem coming. A recurring meeting is still an expensive way to get that visibility, because it pulls the whole team in so that one person can feel informed. Engineers notice when the check-ins grow after every missed date and never shrink after a run of good ones.</p>
        <p>I don’t think every status meeting signals a lack of trust. A new team, a new leader, a high-stakes launch or a rough patch can all justify closer check-ins for a while. A good standup also helps the team coordinate with itself, which has little to do with oversight. I’ve written about how <Link to="/writing/when-to-add-engineering-process/#trust">process can build trust</Link> and how trust should earn autonomy, so I’ll keep to the part that’s specific to meetings.</p>
        <p>Where possible, visibility should come from the work: clear owners, honest written updates sent before anyone asks, a board that reflects what’s actually happening, and demos of working software. When those exist, the meeting can get shorter or go away, and that change tells the team their reliability was noticed. When oversight stays heavy no matter how a team performs, people learn that the meeting is about control, and some of their energy goes into preparing for it instead of into the work.</p>
      </section>

      <section id="focus" aria-labelledby="focus-h">
        <h2 id="focus-h" className="post__h2">Three free hours aren’t three hours of work</h2>
        <p>An engineer with three hours between meetings rarely gets three hours of development. Hard engineering work starts with building context: reading the code, holding the data model in your head, tracing a request through several services to see where it goes wrong. Debugging often means keeping a few hypotheses alive at once. Architectural thinking needs enough time to follow an idea far enough to see where it breaks. An interruption throws much of that away, and rebuilding it takes time that nobody budgets for.</p>
        <p>A calendar with scattered 30-minute openings leaves room for email, a code review or a small fix. It doesn’t leave room to start something difficult, so the difficult work slides to the evening, to next week, or gets done in fragments, which is when I’d expect subtle mistakes to slip through. Paul Graham described this in an essay as the difference between a <a href="https://www.paulgraham.com/makersschedule.html" target="_blank" rel="noopener noreferrer">maker’s schedule and a manager’s schedule</a>: managers work in hour-long slots, while people who build things need at least half a day to get anything substantial done. A single meeting in the middle of the morning costs a maker more than the hour it occupies.</p>
        <p>The same thing happens across a week when priorities keep shifting, which I wrote about in <Link to="/writing/fast-paced-vs-changing-priorities/#switching">what context switching actually costs</Link>. Meetings are the version of it that happens inside a single day.</p>
        <p className="post__answer">Fragmented time is expensive for software engineers because difficult work depends on context that takes time to build and is easily lost. A day of scattered 30-minute openings leaves room for small tasks, while debugging, design and complex features need longer uninterrupted blocks.</p>
      </section>

      <section id="choose" aria-labelledby="choose-h">
        <h2 id="choose-h" className="post__h2">Choosing how to communicate</h2>
        <p>Plenty of problems don’t need a meeting. Clear acceptance criteria answer questions before anyone has to ask them. A written technical decision stops the same argument from being reopened every quarter. Smaller stories need less coordination to deliver. A pull request discussion keeps the conversation next to the code it’s about. An asynchronous update can replace a round-the-room status report, and a direct conversation between the two people involved often settles something that would otherwise go to a group meeting.</p>
        <p>Asynchronous communication has costs too. A thread can run for a day of back-and-forth messages on something two people could settle in five minutes on a call. Disagreement in text tends to harden, because tone gets lost and everyone answers the most pointed sentence. Across time zones, every round trip can add a day.</p>
        <p>So I try to choose by the kind of problem. Information people need to read, and decisions they’ll need to find later, belong in writing. Ambiguity, disagreement and tradeoffs that need several people’s judgment usually go faster in a conversation, with the outcome written down afterward. When a thread has gone back and forth a few times without getting any closer, a short call is almost always cheaper.</p>
      </section>

      <section id="clarity" aria-labelledby="clarity-h">
        <h2 id="clarity-h" className="post__h2">Meetings that create clarity</h2>
        <p>Engineering doesn’t operate on its own. Product managers, designers, QA and engineers all need to understand what they’re building and why, and some of that understanding only forms when they talk. I’ve been in situations where a complicated requirement or UX design could have been simplified with an early conversation. A short discussion before development can save days of building and testing something more complex than the user needed, which is the kind of question I described in <Link to="/writing/what-engineering-leadership-actually-does/#simpler">can we make this simpler for the user?</Link></p>
        <p>The difference I look for is between meetings that create clarity and meetings that relay status. A clarifying meeting changes what people do next. It ends with a decision, a smaller scope, an answered question or a risk someone now owns. A status meeting mostly passes along information that could have been read. A simple test is to ask whether anyone will work differently after the meeting. If the answer is no, it probably belongs in writing.</p>
        <p>Clarifying meetings also tend to be small. They need the people who own the question and the people who can answer it, and not everyone who might find it interesting.</p>
      </section>

      <section id="leaders" aria-labelledby="leaders-h">
        <h2 id="leaders-h" className="post__h2">Leaders can be the biggest source</h2>
        <p>As engineers move into management, their calendars fill with meetings, and a fair amount of that is the job. Coordination, hiring, planning and one-on-ones all happen in conversation. The risk is that a leader’s meeting-heavy schedule quietly becomes everyone else’s schedule.</p>
        <p>It usually happens with good intentions. A leader who wants to stay informed asks for a quick sync. Each request feels small from where they sit. From the team’s side, it’s one more interruption in a day that already had several. A question from a manager in chat also tends to feel urgent even when it isn’t, because people drop what they’re doing to answer the person who writes their review. I have to remind myself of that, and I don’t think I’m unusual. It’s a version of the <Link to="/writing/what-engineering-leadership-actually-does/#bottleneck">bottleneck problem</Link> I wrote about before: there, decisions queued behind my calendar, and here the team’s focus pays for it.</p>
        <p>What helps is reading what’s already written before asking, batching questions instead of sending them as they occur, and saying when something can wait. It also helps to attend fewer of the team’s meetings. Teams often decide faster without the most senior person in the room, and the ones who need my input know how to get it.</p>
      </section>

      <section id="questions" aria-labelledby="questions-h">
        <h2 id="questions-h" className="post__h2">How I think about meetings now</h2>
        <p>I don’t have a rule for how many meetings a team should have. It depends on the team, the work and how much uncertainty is around. Before I put a meeting on someone’s calendar, or when I look at one that’s been recurring for a while, I ask:</p>
        <ol className="post__list">
          <li>What decision needs to be made?</li>
          <li>Who actually needs to take part?</li>
          <li>Could this be resolved asynchronously?</li>
          <li>What happens if we don’t have this meeting?</li>
          <li>Will this meeting unblock work?</li>
          <li>Is this a recurring meeting that has outlived its purpose?</li>
          <li>Are we solving a problem, or discussing it again?</li>
        </ol>
        <p>The fourth question is the one I find most revealing. For a recurring meeting, the honest way to answer it is sometimes to skip it for a couple of weeks and see what breaks. If nothing does, it was probably habit.</p>
        <p>A useful meeting should produce clarity, a decision, an action or stronger alignment. Not every meeting needs a formal outcome, though. One-on-ones, mentoring and conversations that build working relationships pay off over months, and judging them by the action items they produce misses the point. I wrote about why that time matters to me in <Link to="/writing/why-i-enjoy-mentoring/">why I enjoy mentoring</Link>. Those are usually the last meetings I’d cut.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Information, trust and time</h2>
      <div className="post__close-copy">
        <p className="lead">I don’t measure engineering leadership by how few meetings a team has. Sometimes a team needs a meeting, and sometimes it needs the reason a meeting keeps getting scheduled fixed.</p>
        <p className="post__close-principle">Sometimes the most useful thing I can do is stop interrupting the people doing the work.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through your team’s calendar <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
