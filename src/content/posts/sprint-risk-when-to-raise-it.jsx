import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// How to spot sprint risk early, say it so someone can act on it, and turn it into an owner, a checkpoint and a trigger.
// Source: KC's brief (Nov 2026). First-person opinions match practice.js #risk ("Surprises are cheapest in week one")
// and the carryover post. The checkout team, Priya, the address API and every date in the example are invented and
// labeled as an example; no real team practice or result is claimed. Scrum Guide wording checked 4 November 2026.

const carryover = '/writing/what-sprint-carryover-is-telling-you/';

export const toc = [
  ['meaning', 'What sprint risk means'],
  ['signals', 'When to call it out'],
  ['early', 'Why early beats certain'],
  ['say-it', 'How to say it'],
  ['action', 'What happens next'],
  ['example', 'Example: a late API'],
  ['habit', 'A lightweight team habit'],
];

// Fig. 727-1: the invented example on a ten-day sprint. Columns are working days, so spacing is proportional to time.
// The article doesn't say which day the platform team's date slipped, so that event spans days 4 and 5.
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const timeline = [
  { from: 2, to: 2, when: 'Day 2, Tuesday', tag: 'Risk raised', text: 'Priya names the risk, an owner and action due Wednesday, and a trigger for Monday.' },
  { from: 3, to: 3, when: 'Day 3, Wednesday', tag: 'Checkpoint', text: 'Contract agreed and a stub working, so the checkout side keeps moving.' },
  { from: 4, to: 5, when: 'Later in week one', tag: 'Now an issue', text: 'An incident pulls the platform team away. Staging slips to late in week two.' },
  { from: 6, to: 6, when: 'Day 6, Monday', tag: 'Trigger, then decision', text: 'No endpoint. The product owner agrees format checks now and verification next sprint.', key: true },
  { from: 7, to: 10, when: 'Days 7 to 10', tag: 'Agreed scope', text: 'The rest of the sprint goes to the updated goal.' },
];

function RiskTimeline() {
  return (
    <figure className="post__figure risktl" aria-labelledby="risktl-cap">
      <p id="risktl-cap" className="risktl__cap"><span className="mono">Fig. 727-1</span> The delayed API example, day by day. The fallback was agreed on day 2, so day 6 only needed a decision</p>
      <div className="risktl__days" aria-hidden="true">
        <span className="risktl__week mono" style={{ gridColumn: '1 / 6' }}>Week 1</span>
        <span className="risktl__week mono" style={{ gridColumn: '6 / 11' }}>Week 2</span>
        {days.map((d, i) => <span key={i} className="risktl__day mono" style={{ gridColumn: i + 1 }}>{d}</span>)}
      </div>
      <ol className="risktl__events">
        {timeline.map((e) => (
          <li key={e.tag} className={e.key ? 'risktl__event is-key' : 'risktl__event'} style={{ '--from': e.from, '--to': e.to + 1 }}>
            <span className="risktl__bar" aria-hidden="true" />
            <span className="risktl__when mono">{e.when}</span>
            <span className="risktl__tag">{e.tag}</span>
            <span className="risktl__text">{e.text}</span>
          </li>
        ))}
      </ol>
      <figcaption className="post__figcaption">An invented example. Days are working days, and each bar marks when its event happened.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="meaning" aria-labelledby="meaning-h">
        <p>A lot of sprint surprises were visible to someone days before they landed. An engineer gets a bad feeling about an integration on Tuesday and keeps it quiet because nothing is certain yet. By Thursday it’s a blocker, and the good options are gone.</p>
        <h2 id="meaning-h" className="post__h2">What is sprint risk?</h2>
        <p className="post__answer">Sprint risk is uncertainty that could stop a team from meeting its sprint goal. It hasn’t happened yet. Once it does, it becomes an issue, and if that issue stops work right now, it’s a blocker. Raising a risk early gives the team time to act while it still has choices.</p>
        <p>Each of those calls for a different conversation. A risk asks what the team will do if it happens. An issue asks what to do now. A blocker asks who can clear it today. Teams that only talk about blockers have skipped the cheapest of the three conversations.</p>
        <p>The sprint goal is the reference point. The <a href="https://scrumguides.org/scrum-guide.html">Scrum Guide</a> treats the sprint goal as the developers’ commitment and leaves the exact work flexible, so one slipped ticket doesn’t make a failed sprint. A risk worth raising threatens the outcome the team agreed to deliver. A ticket running a day late while the goal is still safe is a status update. When the same kind of work keeps slipping, <Link to={carryover}>what sprint carryover is telling you</Link> covers how to read the pattern afterward. This article is about catching it while the sprint is still running.</p>
      </section>

      <section id="signals" aria-labelledby="signals-h">
        <h2 id="signals-h" className="post__h2">When should you raise a sprint risk?</h2>
        <p className="post__answer">Raise a sprint risk as soon as you have a credible reason to think the sprint goal could be affected. You don’t need proof or a solution first. Unclear acceptance criteria, work running longer than expected, unconfirmed dependencies, lost capacity, new technical complexity and shrinking test time are all reasons to start the conversation.</p>
        <p>These are the signals I’d want someone to mention, even when they aren’t sure yet:</p>
        <dl className="post__terms">
          <div><dt>Unclear acceptance criteria</dt><dd>Two people describe “done” differently, or an edge case turns into a product question nobody has answered. Each one is a decision someone still has to make. <Link to="/writing/why-writing-good-user-stories-is-hard/">Why good user stories are hard</Link> covers where that usually starts.</dd></div>
          <div><dt>Work taking longer than expected</dt><dd>A two-day story is on day four and still “almost done.” The overrun matters less than what’s left, and whether anyone can say how much that is.</dd></div>
          <div><dt>Unconfirmed dependencies</dt><dd>The work needs an API, an environment, a review or a decision from another team, and nobody on that team has confirmed a date.</dd></div>
          <div><dt>Reduced capacity</dt><dd>Someone is out sick, an incident pulled two engineers away, or a person was lent to another project. The plan assumed people who aren’t available.</dd></div>
          <div><dt>Unexpected technical complexity</dt><dd>The code has no tests, the data doesn’t match the spec, or a change touches more of the system than anyone expected.</dd></div>
          <div><dt>Shrinking test time</dt><dd>Development is eating into the days set aside for testing and review. That squeeze tends to land at the end of the sprint, where it’s hardest to recover.</dd></div>
        </dl>
        <p>Credible uncertainty is the bar. “I think this might not make it, and here’s why” is a useful sentence. Waiting until you’re certain usually means waiting until it has happened.</p>
      </section>

      <section id="early" aria-labelledby="early-h">
        <h2 id="early-h" className="post__h2">Why early beats certain</h2>
        <p>Surprises are cheapest in week one, which is why I try to <Link to="/leadership/#risk">pull delivery risk to the front</Link>. On the second day of a sprint, a team can bring in someone who knows the system, try a different approach, chase the dependency, or agree a smaller scope with the product owner while there’s still time to deliver it. On the last day, the only option left is explaining what didn’t ship.</p>
        <p>The Scrum Guide describes the scope part directly: when the work turns out to be different than expected, the developers work with the product owner to renegotiate the sprint backlog without changing the sprint goal. That negotiation needs time to be worth anything.</p>
        <p>All of this depends on how the team reacts. If raising a risk gets the response “why didn’t you estimate better?”, people learn to stay quiet until the risk is undeniable. The person who raises it is doing the team a favor, and the follow-up should be about what happens next. The risk belongs to the team. Usually nobody caused it, and even when someone did, the next step matters more than the cause.</p>
      </section>

      <section id="say-it" aria-labelledby="say-it-h">
        <h2 id="say-it-h" className="post__h2">How do you communicate a sprint risk?</h2>
        <p className="post__answer">Say what might go wrong and why, what it would affect, who is doing what about it by when, and what the team will do if it gets worse. One sentence for each part is enough.</p>
        <p>This template covers it:</p>
        <p className="post__pull">There is a risk that [outcome] because [reason]. This could affect [sprint goal or deliverable]. [Owner] will [next action] by [time]. If [trigger], we will [fallback or decision].</p>
        <p>The last two sentences turn a concern into a plan. Without them, everyone knows about the risk and nobody is doing anything about it.</p>
        <p>Where you say it depends on how urgent it is:</p>
        <ul className="post__list">
          <li>Standup is for routine visibility. Mention the risk in a sentence so the team knows, and move the detail to a follow-up with the people involved.</li>
          <li>The team’s shared channel or tracker is for follow-through. Write the template there so the owner, checkpoint and trigger don’t depend on anyone remembering standup.</li>
          <li>Escalate right away when waiting would remove options: a production dependency changed, a key person is out for the rest of the sprint, or a date outside the team just moved.</li>
        </ul>
      </section>

      <section id="action" aria-labelledby="action-h">
        <h2 id="action-h" className="post__h2">What happens after a risk is raised?</h2>
        <p className="post__answer">Give the risk an owner, choose a mitigation, set a checkpoint and agree an escalation trigger. The owner coordinates the response and keeps the team informed. They don’t have to solve the problem alone.</p>
        <ol className="post__steps">
          <li>Assign an owner. Often that’s the person closest to the work. Their job is to make sure the next action happens and to report back, which may mean asking someone else to do most of it.</li>
          <li>Choose a mitigation. You can make the risk less likely (confirm the dependency now), make it hurt less (build against a stub, split the story) or prepare a fallback (agree in advance what scope comes out).</li>
          <li>Set a checkpoint: a specific time to look again, like Wednesday’s standup or 2 p.m. tomorrow. “We’ll keep an eye on it” has no time attached, so it never comes due.</li>
          <li>Define an escalation trigger. Agree the condition that turns the fallback into a decision, so nobody has to argue about it when the moment comes.</li>
        </ol>
        <p>Small risks may only need an owner and a checkpoint. The trigger matters most when the sprint goal itself is at stake.</p>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">Example: a delayed API dependency</h2>
        <p>Here’s an invented example. A checkout team starts a two-week sprint with this goal: customers can save a verified shipping address at checkout. Verification depends on a new address API from the platform team, promised for “early in the sprint.”</p>
        <p>On day two, Priya, the engineer building the checkout side, notices the platform team hasn’t published the API contract and there’s no staging endpoint yet. At standup she says:</p>
        <p className="post__pull">“Still waiting on the address API. Should be fine.”</p>
        <p>That update tells the team almost nothing. It doesn’t say what “fine” depends on, when anyone will know more, or what happens if it isn’t fine. The same update, using the template:</p>
        <p className="post__pull">“There is a risk that address verification won’t make the sprint because the platform team hasn’t confirmed the API contract or a staging date. This could affect the sprint goal. I’ll agree the contract with their lead and build against a stub by Wednesday. If the staging endpoint isn’t live by Monday of week two, we’ll ask the product owner whether to ship saved addresses with format checks only and add verification next sprint.”</p>
        <p>By Wednesday, Priya has a confirmed contract and a working stub, so the checkout side keeps moving. The platform team’s date slips anyway: an incident pulled their engineers away, and staging is now expected late in week two. Monday arrives with no endpoint, and the trigger fires.</p>
        <p>The team brings the product owner a decision instead of a surprise. Saved addresses with format checks give customers most of the value now, and verification can follow once the API is live. The product owner agrees, the sprint goal is updated to match, and the verification story moves to the next sprint with the contract already settled. Nobody spends the last two days of the sprint hoping the endpoint shows up.</p>
        <RiskTimeline />
      </section>

      <section id="habit" aria-labelledby="habit-h">
        <h2 id="habit-h" className="post__h2">A lightweight team habit</h2>
        <p>None of this needs a risk register or a new meeting. It needs a few questions asked at moments the team already has.</p>
        <p>At sprint planning, ask what could stop the team from meeting the goal. Name the dependencies, the unclear stories and the people who will be out. Some of those are reasons to <Link to="/writing/smaller-user-stories-and-pull-requests/">slice the work smaller</Link> before the sprint starts.</p>
        <p>During daily coordination, check whether any open risk has reached its checkpoint and whether anything new is worth raising. When nothing has changed, that takes a minute.</p>
        <p>In the tracker, keep only what helps someone act: the template sentence, the owner, the checkpoint and what happened. If nobody reads a field, stop filling it in.</p>
        <p>In retrospectives, look for the same cause coming back. If dependency risk shows up every sprint, the fix is probably in how work is planned across teams. If shifting priorities keep creating risk mid-sprint, that’s a decision-making problem, which <Link to="/writing/when-everything-is-a-priority/">When Everything Is a Priority, Nothing Is</Link> takes on directly.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">A checklist for your next sprint</h2>
      <div className="post__close-copy">
        <ol className="post__close-list">
          <li>Write the sprint goal down and judge risk against it, not against individual tickets.</li>
          <li>At planning, name the dependencies, unclear stories and capacity gaps.</li>
          <li>Raise a risk when you have a credible reason. Don’t wait for proof.</li>
          <li>Use the template: what might happen and why, the impact, the owner’s next action, and the fallback with its trigger.</li>
          <li>Give every risk an owner and a checkpoint with a real time on it.</li>
          <li>Escalate right away when waiting would remove options.</li>
          <li>Thank whoever raised it, then talk about what happens next.</li>
          <li>Take recurring causes to the retrospective.</li>
        </ol>
        <div className="post__close-actions">
          <Link to="/leadership/#risk" className="action">How I reduce delivery risk early <ArrowRight /></Link>
          <Link to={carryover} className="link-arrow"><span>What sprint carryover is telling you</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
