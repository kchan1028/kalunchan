import { Link } from 'react-router';
import { cycling } from '../community';
import { ArrowRight } from '../../components/Icons';

export const toc = [
  ['group-ride', 'Judgment about effort'],
  ['pace', 'Sustainable pace'],
  ['paceline', 'Riding predictably'],
  ['front', 'A turn at the front'],
  ['conditions', 'Preparation and changing plans'],
  ['readiness', 'Meeting people where they are'],
  ['omnium', 'Leading without authority'],
  ['limits', 'Where the analogy breaks'],
];

export default function Body() {
  return (
    <>
      <section id="group-ride" aria-labelledby="group-ride-h">
        <h2 id="group-ride-h" className="post__h2">Most of the decisions on a group ride are about effort</h2>
        <p>On a group ride, the decisions that matter most are small and constant. When to close a gap. When to sit in and save energy. When to take a pull. When to tell the group the pace is too high for the riders at the back.</p>
        <p>Outside work, I lead a co-ed amateur cycling team in the Bay Area, ride with the <a href={cycling.club}>Berkeley Bicycle Club</a>, support junior riders, and help organize the Berkeley Omnium. Inside work, I’ve spent <Link to="/about/">more than two decades in software</Link>, much of it leading engineering teams.</p>
        <p className="post__answer">Cycling has taught me that leadership is mostly judgment about effort: when to push, when to recover, when to support someone else, and when to change the plan. Engineering leadership involves the same decisions, with less visibility into how hard people are working.</p>
      </section>

      <section id="pace" aria-labelledby="pace-h">
        <h2 id="pace-h" className="post__h2">Sustainable pace beats constant intensity</h2>
        <p>Every ride can’t be an interval session. A rider who goes hard every day doesn’t get faster. They get tired, and they have nothing left on the day the effort matters. Training works because hard days are separated by easier ones.</p>
        <p>Engineering teams behave the same way. If every sprint is a deadline push, there’s no room for maintenance, learning or recovery. Then real urgency arrives, a production incident or a customer commitment, and the team has no reserve to respond with.</p>
        <p>It changed how I treat urgency: as something to spend deliberately. I plan around the unplanned work a team actually gets, which I wrote about in <Link to="/writing/when-everything-is-a-priority/#interruptions">separating interruptions from strategy</Link>, and I ask for a hard push only when the reason is clear and the push has an end.</p>
        <p>The tension is real. Protecting capacity can become an excuse never to stretch. The question I ask is whether a hard effort is followed by recovery or has become the new baseline without anyone deciding it should.</p>
      </section>

      <section id="paceline" aria-labelledby="paceline-h">
        <h2 id="paceline-h" className="post__h2">A strong rider can still break the paceline</h2>
        <p>In a paceline, the strongest rider can be the problem. Surge at the front, brake without warning or open a gap, and the whole line gets less efficient and less safe. Group riding depends on predictable behavior: a steady line, hazards called out, smooth rotations.</p>
        <p>Engineering teams have the same failure mode. An engineer who changes direction without telling anyone, ships a change too large to review, or hands work over half-explained slows the team down, however good the code is.</p>
        <p>This is why I care about clear handoffs, priorities everyone can repeat, and <Link to="/leadership/#execution">small changes that others can follow</Link>. Individual talent matters a great deal. It produces results when the rest of the team can predict what it will do.</p>
        <p>Racing makes the tradeoff obvious. Sometimes a rider’s job is to protect a teammate or chase down a break, giving up their own result so someone else has a chance. On an engineering team, the most useful effort isn’t always the most impressive individual one.</p>
      </section>

      <section id="front" aria-labelledby="front-h">
        <h2 id="front-h" className="post__h2">Take a turn at the front, then rotate off</h2>
        <p>Someone has to ride at the front, into the wind, while the riders behind save energy. In engineering leadership, that means taking the hardest pulls: the difficult conversation, the risky migration, the problem nobody has scoped yet. Leaders absorb uncertainty and remove obstacles so the team can keep moving.</p>
        <p>But a rider who never leaves the front wears out, and the group never learns to share the work. A leader every decision runs through creates the same weakness.</p>
        <p>So I take the front when the work is risky or unclear, then rotate off on purpose and hand real ownership to someone else. That’s the core of how I <Link to="/mentorship/">mentor engineers until they can replace me</Link>.</p>
      </section>

      <section id="conditions" aria-labelledby="conditions-h">
        <h2 id="conditions-h" className="post__h2">Preparation creates options when conditions change</h2>
        <p>Fitness, a bike that’s been checked, knowing where the climbs are: none of it guarantees a good ride. It removes avoidable problems, and it gives you choices when wind, heat, terrain or the group’s pace changes the day.</p>
        <p>Testing, observability, documentation and operational readiness do the same job in engineering. They don’t prevent every problem. They let a team see what’s happening and <Link to="/leadership/#risk">change course without guessing</Link>.</p>
        <p>A good plan is a starting point, and sticking to it after the evidence has changed is stubbornness. When I change direction, I explain what we learned, what’s different now and what it costs. That explanation is what lets a team tell adapting apart from wandering.</p>
      </section>

      <section id="readiness" aria-labelledby="readiness-h">
        <h2 id="readiness-h" className="post__h2">Mentoring means meeting people where they are</h2>
        <p>Junior riders arrive with very different levels of confidence and experience. Some are ready for a faster group. Others still need to get comfortable riding close to other wheels. The right challenge depends on the rider, not the calendar.</p>
        <p>Developing engineers works the same way. A problem slightly beyond what someone has done before, with enough support to succeed, builds confidence. Too much too soon teaches them to avoid risk.</p>
        <p>I size challenges to where someone is now and add ownership as their judgment grows. With juniors, getting faster is the smallest part of what they build. Confidence, independence and teamwork last longer, which is why I care more about <Link to="/community/#development">rider development</Link> than race results. I remember how little the results mattered in <Link to="/writing/first-bike-races-novice-race-reports/">my own first races</Link>, and how much the people who got me to the start line did.</p>
      </section>

      <section id="omnium" aria-labelledby="omnium-h">
        <h2 id="omnium-h" className="post__h2">Organizing a race weekend is leading without authority</h2>
        <p>I help organize the <a href={cycling.omnium}>Berkeley Omnium</a>, a nonprofit weekend that brings together the Berkeley Hills Road Race and the Berkeley Streets Criterium. All proceeds go to six East Bay NICA teams.</p>
        <p>Very little of it runs on authority. Volunteers give their time. Sponsors and partners choose to take part. Clubs and officials have their own priorities. The weekend comes together because people trust each other to do what they said they would.</p>
        <p>Much of engineering leadership works this way too. Product, design, QA, security and other engineering teams usually sit outside an engineering leader’s reporting line, and authority rarely gets cross-team work done anyway. A shared goal does, along with following through on small commitments so people believe the big ones.</p>
        <p>So I make the goal and each person’s part in it explicit, and I try to be the person who does what they said, when they said they would. I wrote more about organizing with the team in <Link to="/writing/organizing-berkeley-omnium-leadership-lessons/">what organizing Berkeley Omnium taught me about leading teams</Link>.</p>
      </section>

      <section id="limits" aria-labelledby="limits-h">
        <h2 id="limits-h" className="post__h2">Where the analogy breaks down</h2>
        <p>The comparison only goes so far. In cycling, effort is measurable and progress is visible: a power meter shows how hard you’re working, and you can watch a gap close. Engineering effort is far less predictable. A task that looks small can hide a week of complexity, and much of the most important work, like removing a risk or simplifying a system, produces nothing anyone can see.</p>
        <p>Struggle is harder to see, too. On a ride, you can tell when someone is about to be dropped. On a team, someone can be overloaded for weeks before it shows. That means checking in directly and watching signals like <Link to="/writing/what-sprint-carryover-is-telling-you/">sprint carryover</Link> and on-call load, because nobody’s struggle shows up as a gap on the road.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The kind of leader I try to be</h2>
      <div className="post__close-copy">
        <p className="lead">On the bike and at work, I try to set a pace people can hold, take a turn at the front when the work is hard, call out what’s coming, and make sure nobody gets dropped.</p>
        <p>I measure it by whether the group gets there, and whether more people are ready to lead the next ride.</p>
        <p className="post__close-principle">Push when it matters, protect the team’s capacity the rest of the time, and keep handing the front to someone new.</p>
        <div className="post__close-actions">
          <Link to="/about/" className="action">More about how I work <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
