import { Link } from 'react-router';
import { person } from '../profile';
import { ArrowRight, ArrowOut } from '../../components/Icons';

const priorities = '/writing/when-everything-is-a-priority/';

export const toc = [
  ['symptom', 'A symptom, not a diagnosis'],
  ['is-it-bad', 'Is carryover bad?'],
  ['causes', 'Six reasons work carries over'],
  ['reading', 'Reading it by cause'],
  ['record', 'Record the reason'],
  ['not-a-metric', 'Not a performance metric'],
  ['wrong-fixes', 'Fixes that miss'],
  ['reporting', 'Reporting it upward'],
  ['reduce', 'How to reduce it'],
];

const causes = [
  {
    cause: 'Underestimated',
    signal: 'The work was too big, or its unknowns weren’t named',
    help: 'Smaller slices, spike the unknown first, agree on done',
  },
  {
    cause: 'Requirements changed',
    signal: 'Work started before it was ready, or the team learned something',
    help: 'A bar for ready; treat real learning as a new decision',
  },
  {
    cause: 'Blocked by another team',
    signal: 'Hidden dependencies, or team boundaries in the wrong place',
    help: 'Surface dependencies at planning; fix ownership if it’s constant',
  },
  {
    cause: 'Production support',
    signal: 'Planning ignores unplanned work, or reliability is slipping',
    help: 'Plan around real capacity; invest if the share keeps growing',
  },
  {
    cause: 'Unexpected complexity',
    signal: 'Technical debt in specific parts of the system',
    help: 'Pay down debt where carryover keeps showing up',
  },
  {
    cause: 'Priority changed',
    signal: 'Decision-making, not engineering',
    help: 'Make the tradeoff explicit and move the dates',
  },
];

export default function Body() {
  return (
    <>
      <section id="symptom" aria-labelledby="symptom-h">
        <h2 id="symptom-h" className="post__h2">Carryover is a symptom, not a diagnosis</h2>
        <p>Every sprint ends with a comparison: what the team said it would finish, and what it actually finished. The gap between the two is carryover.</p>
        <p className="post__answer">Sprint carryover, also called spillover, is work a team committed to in a sprint that isn’t finished when the sprint ends, so it moves into the next one. On its own, it only tells you that the plan and the result didn’t match. Why they didn’t match is what tells you what to fix.</p>
        <p>The usual reaction to carryover is some version of three things: estimate better, commit to less, or push harder. Sometimes one of those is right. Often it isn’t, because nobody has asked why the work didn’t finish.</p>
        <p>In <Link to={priorities}>When Everything Is a Priority, Nothing Is</Link>, I wrote that when work keeps carrying over, I want to know the reason before I conclude anything about how fast engineers are delivering. This is the longer version: what each reason looks like, what it’s telling you, and what actually helps.</p>
      </section>

      <section id="is-it-bad" aria-labelledby="is-it-bad-h">
        <h2 id="is-it-bad-h" className="post__h2">Is sprint carryover bad?</h2>
        <p className="post__answer">Not by itself. Some carryover is normal for a team doing work with real uncertainty. It becomes a problem when it’s persistent, when the same items carry over sprint after sprint, or when nobody can explain why it’s happening.</p>
        <p>A team that never carries anything over isn’t necessarily healthy. Sometimes it’s a team that has learned to commit to less than it can do, or to pad every estimate, because missing a commitment gets punished. The number looks great. Delivery doesn’t improve.</p>
        <p>So I look at three things instead of a single number:</p>
        <ul className="post__list">
          <li><strong>The trend.</strong> Is carryover steady, growing or shrinking over several sprints?</li>
          <li><strong>The age.</strong> The same item carrying over three sprints in a row tells you far more than a dozen items that slipped by a day.</li>
          <li><strong>The cause.</strong> What actually stopped the work from finishing.</li>
        </ul>
        <p>The third one matters most.</p>
      </section>

      <section id="causes" aria-labelledby="causes-h">
        <h2 id="causes-h" className="post__h2">What causes sprint carryover?</h2>
        <p>When I look at why work didn’t finish, it usually comes down to one of six causes. They look the same on a burndown chart. They have very different fixes.</p>

        <h3 className="post__h3">The work was bigger than we thought</h3>
        <p>This is the cause most people assume, and it’s real. A story that looked like two days takes five. A ticket stays “almost done” for most of the sprint. One piece of work quietly turns into three.</p>
        <p>What it’s telling you is usually about how the work was shaped before it started. It was too big to estimate well, or the unknowns inside it weren’t named. Better estimation helps less than you’d think. Smaller slices help more. So does spiking the riskiest unknown before committing to the whole thing, and agreeing what “done” means before the work starts. It’s why I put so much weight on <Link to="/leadership/#ambiguity">turning ambiguity into executable work</Link>.</p>

        <h3 className="post__h3">The requirements changed during the sprint</h3>
        <p>The work started, and then what “done” meant changed underneath it. A stakeholder saw a demo and asked for something different. An edge case turned into a product decision nobody had made yet.</p>
        <p>Sometimes that’s healthy: the team learned something, and the plan should change. Sometimes it means the work entered the sprint before it was ready. The fix for the second is a lightweight bar for “ready” and keeping discovery separate from delivery. The fix for the first is treating the change as a new decision, with its cost made visible, instead of letting it silently stretch the original commitment.</p>

        <h3 className="post__h3">Another team blocked us</h3>
        <p>The work was waiting on an API, a review, an environment, a decision or a deploy from somewhere else. The team was busy, just not on the thing it committed to.</p>
        <p>Occasional blockers mean dependencies weren’t visible at planning. Surfacing them earlier and sequencing around them usually fixes that. Constant blockers mean something bigger: the boundaries between teams are probably in the wrong place. If one team can’t finish its work without another team shipping at the same time, that’s the same coupling I look for when I decide <Link to="/writing/should-it-be-a-microservice/">whether something should actually be a microservice</Link>. It’s an ownership problem dressed up as a scheduling problem.</p>

        <h3 className="post__h3">Production support consumed the capacity</h3>
        <p>Incidents, bugs, customer escalations and security fixes arrived during the sprint, and they had to win. Usually they should.</p>
        <p>What this tells you depends on whether it’s a surprise. If the team spends a similar share of every sprint on unplanned work, the problem is the plan, not the interruptions. Planning at full feature capacity when a fifth of the team’s time has historically gone to support guarantees carryover. I wrote more about <Link to={`${priorities}#interruptions`}>separating interruptions from strategy</Link>. If the unplanned share keeps growing, that’s a different signal. Something in the system is getting less reliable, and it needs investment, not a better plan.</p>

        <h3 className="post__h3">We found unexpected complexity</h3>
        <p>The work was understood and scoped sensibly, and then the system turned out to be harder to change than anyone expected. Missing tests. An undocumented dependency. Code only one person understands.</p>
        <p>When that happens once, it’s normal. When it keeps happening in the same parts of the system, carryover is pointing at technical debt that’s charging interest. That’s useful information. It tells you where paying down debt would speed up the roadmap, which is how I prefer to <Link to="/leadership/#debt">balance delivery and technical debt</Link>.</p>

        <h3 className="post__h3">The priority changed halfway through</h3>
        <p>The team was pulled onto something else, and the original work was left partly done. On the board, it looks exactly like slow delivery.</p>
        <p>This one has nothing to do with estimation or engineering speed. It’s a decision-making problem, and the fix belongs to whoever changed the priority: say what stops, say what moves, and update the dates. That’s the whole argument of <Link to={priorities}>my piece on leading through constant priority changes</Link>. If priority changes are behind a large share of your carryover, no amount of better estimation will fix delivery.</p>
      </section>

      <section id="reading" aria-labelledby="reading-h">
        <h2 id="reading-h" className="post__h2">Reading carryover by cause</h2>
        <p>Side by side, the six causes point to very different fixes.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 655-1</span> What each cause of carryover is telling you
            </caption>
            <thead>
              <tr>
                <th scope="col">Cause</th>
                <th scope="col">What it’s telling you</th>
                <th scope="col">What tends to help</th>
              </tr>
            </thead>
            <tbody>
              {causes.map((c) => (
                <tr key={c.cause}>
                  <th scope="row">{c.cause}</th>
                  <td data-label="What it’s telling you">{c.signal}</td>
                  <td data-label="What tends to help">{c.help}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
        <p>Notice that “push the team harder” doesn’t appear anywhere in the last column.</p>
      </section>

      <section id="record" aria-labelledby="record-h">
        <h2 id="record-h" className="post__h2">Record the reason, not just the number</h2>
        <p>Most teams already track carryover in some form. Jira will show you what moved from one sprint to the next. What it won’t show you is why.</p>
        <p>The simplest fix I know is to record one primary reason for every item that carries over, at the end of the sprint, while people still remember. A few rules make it work:</p>
        <ol className="post__steps">
          <li><strong>Use a short, fixed list.</strong> The six causes above, plus “other,” is enough. Free text is hard to add up.</li>
          <li><strong>Pick one primary reason per item.</strong> Most items have several. Choose the one that mattered most.</li>
          <li><strong>Ask the people who did the work.</strong> They know why it didn’t finish. A manager guessing afterward often doesn’t.</li>
          <li><strong>Look across several sprints.</strong> One sprint is noise. A pattern over a quarter is information.</li>
          <li><strong>Keep it blameless.</strong> The goal is to find the system problem, not a person to blame. If it turns into blame, people will pick the safest reason instead of the true one.</li>
        </ol>
        <p>Within a few sprints, a pattern tends to show up. That’s where to start.</p>
      </section>

      <section id="not-a-metric" aria-labelledby="not-a-metric-h">
        <h2 id="not-a-metric-h" className="post__h2">Carryover isn’t a performance metric</h2>
        <p className="post__answer">Sprint carryover shouldn’t be used to judge individual engineers or to compare teams. It reflects planning, dependencies, interruptions and decisions as much as effort. Once it becomes a target, teams learn to commit to less and pad estimates until the number looks fine.</p>
        <p>Comparing carryover across teams is especially misleading. Teams estimate differently, carry different amounts of support work, and depend on different parts of the organization. The team with more carryover might be the one doing the harder, more uncertain work.</p>
        <p>Used well, carryover is a diagnostic for a team and its leaders. Used as a scorecard, it stops telling you anything true.</p>
      </section>

      <section id="wrong-fixes" aria-labelledby="wrong-fixes-h">
        <h2 id="wrong-fixes-h" className="post__h2">The fixes that miss</h2>
        <p>Each of these is the right answer for one cause and the wrong answer for the rest.</p>
        <dl className="post__terms">
          <div><dt>Commit to less</dt><dd>Helps when the team is overcommitting. When blockers or priority changes are the cause, it hides the problem behind a smaller plan.</dd></div>
          <div><dt>Estimate harder</dt><dd>Helps with underestimated work. It does nothing for blockers, interruptions or changing priorities.</dd></div>
          <div><dt>Make sprints longer</dt><dd>Bigger batches take longer to finish and cost more to redirect when something changes.</dd></div>
          <div><dt>Push the team harder</dt><dd>Longer hours mean more lost context, more mistakes and more rework. It might clear one sprint. It won’t change the pattern.</dd></div>
        </dl>
        <p>This is why the cause matters more than the number. The wrong fix can make the number look better while delivery stays exactly the same.</p>
      </section>

      <section id="reporting" aria-labelledby="reporting-h">
        <h2 id="reporting-h" className="post__h2">Report carryover with its causes</h2>
        <p>How carryover gets reported shapes the conversation that follows. “We missed our sprint commitment again” invites one question: why is the team slow?</p>
        <p>Compare that with this:</p>
        <p className="post__pull">“Five items carried over: two because priorities changed mid-sprint, two because of incident load, and one we underestimated.”</p>
        <p>Now leadership can see which problems are theirs to solve. Two of the five came from decisions above the team. Two came from reliability. Only one is an estimation problem. That’s a much more useful conversation, and a much fairer one.</p>
        <p>It’s also the first thing I’d want to look at if a company brought me in through <a href={person.yippify}>Yippify</a> to help with unpredictable delivery. Before estimates, before velocity, before any process change: what is the carryover actually telling us?</p>
      </section>

      <section id="reduce" aria-labelledby="reduce-h">
        <h2 id="reduce-h" className="post__h2">How do you reduce sprint carryover?</h2>
        <p className="post__answer">Find the cause before you fix anything. Record a reason for every item that carries over, look for the pattern across several sprints, fix the biggest cause first, and plan around the capacity the team actually has after support work.</p>
        <p>In practice, that usually means a few targeted changes rather than a process overhaul:</p>
        <ul className="post__list">
          <li>Slice work smaller, so less of it is in flight when something goes wrong. It’s the same reason I <Link to="/leadership/#execution">improve execution with small, safe changes</Link>.</li>
          <li>Reserve capacity for the unplanned work the team actually gets.</li>
          <li>Surface dependencies at planning, and fix ownership where blockers are constant.</li>
          <li>Make every mid-sprint priority change come with a stated tradeoff.</li>
          <li>Pay down debt where complexity keeps surprising the team.</li>
        </ul>
        <p>Carryover rarely goes to zero, and it doesn’t need to. The goal is carryover you understand, trending in the right direction, with causes that the team and its leadership are both working on.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The question I ask about carryover</h2>
      <div className="post__close-copy">
        <p className="lead">Carryover is one of the most honest signals an engineering team produces. Sprint after sprint, it shows where the system around the team is getting in the way. So I don’t start by asking, “Why didn’t the team finish?”</p>
        <p className="post__close-principle">I ask, “What stopped the work from finishing?”</p>
        <p>The answers point to different owners and different fixes, and that’s exactly what makes them useful.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through what your carryover is telling you <ArrowRight /></Link>
          <a href={person.yippify} className="link-arrow"><span>Work with me through Yippify</span> <ArrowOut /></a>
        </div>
      </div>
    </>
  );
}
