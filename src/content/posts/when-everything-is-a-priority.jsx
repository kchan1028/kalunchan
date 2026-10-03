import { Link } from 'react-router';
import { person } from '../profile';
import { ArrowRight, ArrowOut } from '../../components/Icons';

export const toc = [
  ['not-the-problem', 'Change isn’t the problem'],
  ['cost', 'What a change costs'],
  ['starting', 'Starting, not changing'],
  ['tradeoff', 'Make the tradeoff explicit'],
  ['why', 'Ask why it changed'],
  ['context', 'Context, not noise'],
  ['interruptions', 'Interruptions vs. strategy'],
  ['urgent', 'Urgent vs. important'],
  ['stable-goal', 'A stable goal'],
  ['carryover', 'Why work doesn’t finish'],
  ['finish', 'Finish more, start less'],
  ['consequences', 'Owning the consequences'],
  ['five-things', 'Five things I make clear'],
  ['agility', 'Agility vs. instability'],
];

const reasons = [
  { now: 'A production incident', later: 'A new idea from leadership' },
  { now: 'A contractual commitment', later: 'A customer asking whether something might be possible' },
  { now: 'A security vulnerability', later: 'A feature that could improve conversion' },
];

export default function Body() {
  return (
    <>
      <section id="not-the-problem" aria-labelledby="not-the-problem-h">
        <h2 id="not-the-problem-h" className="post__h2">Changing priorities isn’t the problem</h2>
        <p>Priorities change. That’s normal. Customers change their minds. A major deal suddenly needs something. Production breaks. Leadership learns something new. A competitor moves. An assumption we made three months ago turns out to be wrong.</p>
        <p>A good engineering organization needs to be able to respond to all of that.</p>
        <p className="post__answer">The problem isn’t changing priorities. The problem is changing priorities without acknowledging what the change costs.</p>
        <p>Across more than two decades in software, as an engineer, a co-founder and CTO, and an engineering leader, I’ve seen teams fall into the same cycle. Something is the top priority on Monday. Something else replaces it on Wednesday. By Friday, everyone is asking why the first thing isn’t finished.</p>
        <p>At that point, the problem isn’t engineering velocity. It’s the system around the team.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">What does changing priorities cost an engineering team?</h2>
        <p className="post__answer">Mostly context. An engineer moved off a feature loses part of what they knew about it, and when they come back weeks later they have to rebuild that understanding before they can make progress. The cost rarely shows up in Jira, but across a whole team it adds up.</p>
        <p>Software development isn’t a queue where you can keep rearranging tickets without consequences. An engineer working on a feature is carrying a lot in their head:</p>
        <ul className="post__list">
          <li>Why the feature exists.</li>
          <li>How the existing system works.</li>
          <li>Which edge cases matter.</li>
          <li>What they already tried.</li>
          <li>What still needs to be tested.</li>
          <li>Where the risks are.</li>
        </ul>
        <p>Move them to something else and some of that disappears. When they return three weeks later, they don’t simply continue where they stopped. They have to reconstruct the problem first.</p>
        <p>That cost is real. And when it happens repeatedly across an entire team, it becomes significant.</p>
      </section>

      <section id="starting" aria-labelledby="starting-h">
        <h2 id="starting-h" className="post__h2">The dangerous part is starting, not changing</h2>
        <p>When priorities keep changing, teams often respond by starting more things. Feature A is paused, so start Feature B. Something happens with a customer, so pause B and start C. A week later, A is important again.</p>
        <p>Now the organization has three partially completed initiatives and very little delivered value.</p>
        <p>This is why I pay so much attention to work in progress. Ten projects at 80% complete don’t provide the same value as eight finished ones. Partially finished work can’t reach customers, can’t earn revenue and can’t teach you anything.</p>
        <p>So sometimes the right response to a new priority isn’t “Start this immediately.” It’s this:</p>
        <p className="post__pull">If this is now the most important thing, what are we going to stop?</p>
        <p>That second question changes the conversation.</p>
      </section>

      <section id="tradeoff" aria-labelledby="tradeoff-h">
        <h2 id="tradeoff-h" className="post__h2">Make the tradeoff explicit</h2>
        <p>When someone tells me something has become the new priority, I don’t think engineering should automatically push back. There may be a very good business reason.</p>
        <p>What I want is for the tradeoff to be visible. If we’re moving engineers from Initiative A to Initiative B, we should be able to say something like this:</p>
        <p className="post__answer">“We can move the team to B. That will likely move A from October to November.”</p>
        <p>Now we’re making a business decision.</p>
        <p>Without that conversation, organizations accidentally create the expectation that A and B will both still happen on their original schedules. Engineering absorbs the change while the rest of the business keeps operating against the old plan. Eventually the team looks slow, even though it may be doing exactly what it was asked to do.</p>
        <p>It’s one of the practices I write about in <Link to="/leadership/#cross-functional">how I work across product, QA and leadership</Link>: product gets honest options with the costs attached, so a roadmap change is a negotiation instead of a surprise.</p>
      </section>

      <section id="why" aria-labelledby="why-h">
        <h2 id="why-h" className="post__h2">Ask why the priority changed</h2>
        <p>Not all priority changes are the same, and they shouldn’t all be handled the same way.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 654-1</span> Not every priority change is the same kind of change
            </caption>
            <thead>
              <tr>
                <th scope="col">Usually can’t wait</th>
                <th scope="col">Usually can wait for planning</th>
              </tr>
            </thead>
            <tbody>
              {reasons.map((r) => (
                <tr key={r.now}>
                  <td data-label="Usually can’t wait">{r.now}</td>
                  <td data-label="Usually can wait for planning">{r.later}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
        <p>Before changing direction, I want to understand what actually changed:</p>
        <ul className="post__list">
          <li>Did we receive new information?</li>
          <li>Is revenue at risk?</li>
          <li>Is a customer blocked?</li>
          <li>Did a deadline move?</li>
          <li>Is there a regulatory or security issue?</li>
          <li>Did a previous assumption turn out to be wrong?</li>
          <li>Or did something simply become more interesting than what we’re doing now?</li>
        </ul>
        <p>The answer matters. Changing priorities because the business learned something important is healthy. Changing priorities because the organization can’t maintain focus is not.</p>
      </section>

      <section id="context" aria-labelledby="context-h">
        <h2 id="context-h" className="post__h2">Protect the team without isolating them from the business</h2>
        <p>I’ve never liked the idea that engineering leadership should shield engineers from everything happening in the company. Engineers should understand why priorities change, because context helps people make better decisions.</p>
        <p>If we suddenly need to move something because a customer launch depends on it, tell the team. If revenue is involved, tell them. If we’re testing an assumption, explain the assumption. People handle change much better when they understand why it matters.</p>
        <p>Context is also how engineers grow. You can’t hand someone real ownership while holding back the reasons behind the work, which is a big part of why I <Link to="/mentorship/">mentor engineers until they can replace me</Link>.</p>
        <p>What I want to protect the team from isn’t business context. It’s organizational noise. There’s a difference.</p>
      </section>

      <section id="interruptions" aria-labelledby="interruptions-h">
        <h2 id="interruptions-h" className="post__h2">Separate interruptions from strategy</h2>
        <p>Some teams effectively run one priority system: everything goes into the same backlog. I prefer to recognize that different types of work behave differently.</p>
        <dl className="post__terms">
          <div><dt>Planned product work</dt><dd>The roadmap: what the team committed to building.</dd></div>
          <div><dt>Bugs</dt><dd>Defects found after the work shipped.</dd></div>
          <div><dt>Production incidents</dt><dd>Work that interrupts everything else until it’s resolved.</dd></div>
          <div><dt>Technical debt</dt><dd>Shortcuts and aging code that slow down future work.</dd></div>
          <div><dt>Customer escalations</dt><dd>Problems a specific customer needs solved now.</dd></div>
          <div><dt>Security issues</dt><dd>Vulnerabilities and fixes that can’t sit in the queue.</dd></div>
          <div><dt>Exploratory work</dt><dd>Spikes and experiments to learn something before committing.</dd></div>
        </dl>
        <p>Pretending all of that can be perfectly planned two weeks in advance creates frustration.</p>
        <p className="post__answer">If a team historically spends 20% of its capacity on unplanned work, planning every sprint at 100% feature capacity isn’t ambitious. It’s unrealistic. Plan around the interruptions the team actually gets.</p>
        <p>Understanding the team’s real operating pattern makes planning much more useful, and it stops urgent work from quietly eating the roadmap.</p>
      </section>

      <section id="urgent" aria-labelledby="urgent-h">
        <h2 id="urgent-h" className="post__h2">Don’t confuse urgent with important</h2>
        <p>One of the responsibilities of engineering and product leadership is helping the organization tell the difference between something that is loud and something that is strategically important.</p>
        <p>The newest request naturally gets attention. The customer who emailed this morning feels more immediate than an architectural problem we’ve known about for six months. But urgency shouldn’t automatically decide where we invest.</p>
        <p>Sometimes fixing an underlying platform problem will eliminate dozens of future urgent requests. Sometimes the customer request really does need to win.</p>
        <p>The job isn’t to eliminate those decisions. The job is to make them deliberately.</p>
      </section>

      <section id="stable-goal" aria-labelledby="stable-goal-h">
        <h2 id="stable-goal-h" className="post__h2">Give people a stable goal, even when the path changes</h2>
        <p>Teams can handle a surprising amount of tactical change when the strategic direction stays clear. Say the goal for the quarter is this:</p>
        <p className="post__answer">Reduce the time it takes a new customer to reach their first successful transaction.</p>
        <p>Along the way, the team might discover that the original feature isn’t the right solution. That’s fine. Changing the implementation because we learned something isn’t failure. The work might move from feature A, to an onboarding improvement, to an API change, to automation. The implementation changed. The goal didn’t.</p>
        <p>That’s very different from this:</p>
        <ul className="post__list">
          <li>Monday: onboarding.</li>
          <li>Wednesday: reporting.</li>
          <li>Friday: AI.</li>
          <li>Next Monday: cost reduction.</li>
        </ul>
        <p>That isn’t agility. It’s a lack of direction.</p>
      </section>

      <section id="carryover" aria-labelledby="carryover-h">
        <h2 id="carryover-h" className="post__h2">Track why work doesn’t finish</h2>
        <p>When I see significant sprint carryover, or initiatives repeatedly missing their expected dates, I don’t immediately conclude that engineers aren’t delivering fast enough. I want to understand the reason:</p>
        <ul className="post__list">
          <li>Was the work underestimated?</li>
          <li>Did the requirements change?</li>
          <li>Did another team block us?</li>
          <li>Did production support consume the capacity?</li>
          <li>Did we discover unexpected complexity?</li>
          <li>Or did leadership change the priority halfway through?</li>
        </ul>
        <p>Those are very different problems, with very different fixes.</p>
        <p className="post__answer">If priority changes are responsible for a meaningful share of unfinished work, better estimation won’t fix delivery. The organization needs to improve how it makes decisions.</p>
        <p>I go through each of those causes, and what actually fixes it, in <Link to="/writing/what-sprint-carryover-is-telling-you/">what sprint carryover is actually telling an engineering team</Link>.</p>
        <p>Slow or unpredictable delivery is one of the problems I help companies with through <a href={person.yippify}>Yippify</a>, and the reasons work doesn’t finish are where I start, before anyone talks about estimates or velocity.</p>
      </section>

      <section id="finish" aria-labelledby="finish-h">
        <h2 id="finish-h" className="post__h2">Finish more. Start less.</h2>
        <p>One of the simplest ways to improve delivery is also one of the hardest: stop starting things.</p>
        <p>When something new becomes important, first ask whether the team can finish something already close to done. Waiting two days to finish the current work is often much cheaper than abandoning it immediately. Emergencies are different, of course. But most business requests aren’t emergencies.</p>
        <p>Reducing work in progress creates the thing organizations need most: finished work. Finished work can reach customers. It can generate revenue. It can produce feedback.</p>
        <p>Half-finished work mostly produces status meetings.</p>
        <p>It’s the same logic behind how I <Link to="/leadership/#execution">improve execution with small, safe changes</Link>. Smaller pieces of work finish sooner, and work that finishes sooner is cheaper to pause or redirect when priorities do change.</p>
      </section>

      <section id="consequences" aria-labelledby="consequences-h">
        <h2 id="consequences-h" className="post__h2">Leadership needs to own the consequences</h2>
        <p>Engineering teams shouldn’t be expected to magically absorb every priority change. If leadership changes direction, leadership should also own the resulting tradeoff. That might mean:</p>
        <ul className="post__list">
          <li>A delivery date moves.</li>
          <li>Another feature gets removed.</li>
          <li>Scope gets smaller.</li>
          <li>More capacity is needed.</li>
          <li>A customer conversation needs to happen.</li>
          <li>A commitment needs to be renegotiated.</li>
        </ul>
        <p>That isn’t engineering pushing back on the business. It’s engineering giving the business enough information to make a real decision.</p>
      </section>

      <section id="five-things" aria-labelledby="five-things-h">
        <h2 id="five-things-h" className="post__h2">How should engineering teams handle changing priorities?</h2>
        <p className="post__answer">Make the cost of the change visible. When priorities change, say why, name the single new priority, decide what stops or slips, decide what happens to work already in progress, and update the dates or commitments that no longer hold.</p>
        <p>In practice, these are the five things I try to make clear every time:</p>
        <ol className="post__steps">
          <li><strong>Why are we changing?</strong> There should be a reason people can understand.</li>
          <li><strong>What is the new priority?</strong> Not one of twelve priorities. The priority.</li>
          <li><strong>What are we stopping or delaying?</strong> New work has a cost.</li>
          <li><strong>What happens to work already in progress?</strong> Finish it, pause it intentionally, reduce its scope, or cancel it.</li>
          <li><strong>Which expectations need to change?</strong> Dates, scope, capacity or commitments need to reflect the new decision.</li>
        </ol>
        <p>That doesn’t stop priorities from changing. It makes the cost visible.</p>
      </section>

      <section id="agility" aria-labelledby="agility-h">
        <h2 id="agility-h" className="post__h2">Agility isn’t constantly changing your mind</h2>
        <p>Engineering organizations should be adaptable. I want teams that can respond quickly when the business learns something important. But adaptability and instability aren’t the same thing.</p>
        <p className="post__answer">An agile team changes direction quickly because it has clear ownership, small increments of work, good architecture and strong communication. A team that changes direction every few days because nobody can decide what matters isn’t agile. It’s just busy.</p>
        <p>Architecture plays a bigger part than people expect. Clear boundaries let one part of a system change without touching everything around it, which is much of what I look for when I decide <Link to="/writing/should-it-be-a-microservice/">whether something should actually be a microservice</Link>.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The question I keep coming back to</h2>
      <div className="post__close-copy">
        <p className="lead">There will always be another customer request, another production problem, another executive idea, and another technology everyone suddenly wants to explore. The goal isn’t to prevent change. It’s to build an organization that can respond to change without losing its ability to finish things.</p>
        <p>So when a new priority arrives, the most useful question often isn’t “How quickly can we start?”</p>
        <p className="post__close-principle">It’s “What are we willing to stop?”</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through a delivery problem <ArrowRight /></Link>
          <a href={person.yippify} className="link-arrow"><span>Work with me through Yippify</span> <ArrowOut /></a>
        </div>
      </div>
    </>
  );
}
