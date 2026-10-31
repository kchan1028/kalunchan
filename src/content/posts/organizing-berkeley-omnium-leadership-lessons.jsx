import { Link } from 'react-router';
import { cycling } from '../community';
import { ArrowRight, ArrowOut } from '../../components/Icons';

const cyclingPost = '/writing/what-cycling-taught-me-about-engineering-leadership/';

export const toc = [
  ['purpose', 'A shared purpose'],
  ['volunteer-time', 'Volunteer time is finite'],
  ['ownership', 'Naming an owner'],
  ['race-date', 'What the date decides'],
  ['ready', 'Done isn’t ready'],
  ['after', 'After the finish'],
];

export default function Body() {
  return (
    <>
      <section id="purpose" aria-labelledby="purpose-h">
        <h2 id="purpose-h" className="post__h2">A shared purpose makes the hard parts worth doing</h2>
        <p><a href={cycling.omnium}>Berkeley Omnium</a> exists because a lot of people decide to give it their time. The weekend brings together the Berkeley Hills Road Race and the Berkeley Streets Criterium, put on by the <a href={cycling.club}>Berkeley Bicycle Club</a>. Every part of it depends on an organizing committee, volunteers, clubs, officials, sponsors and community partners working toward the same two days.</p>
        <p>I help organize it with that team, alongside <Link to="/about/#community">my engineering work</Link>. I wrote about what riding and racing have taught me in <Link to={cyclingPost}>What Cycling Taught Me About Engineering Leadership</Link>. This is the other side: what organizing has taught me. (I started on the racer’s side, and <Link to="/writing/first-bike-races-novice-race-reports/">my first three races</Link> explain why I care about the novice fields.) Part of the work was <Link to="/writing/berkeley-omnium-new-website-next-generation/">rebuilding the Omnium website</Link> so the next generation of organizers inherits something that works.</p>
        <p className="post__answer">Organizing Berkeley Omnium has reinforced the same lessons as leading engineering teams: people need a clear purpose, realistic commitments, named ownership and support. The results belong to the whole team.</p>
        <p>Our purpose is concrete. We create opportunities for racers, including junior, collegiate and women’s fields, and the proceeds support local NICA teams. Our events raised $21,000 for NICA teams in 2025 and $28,610 for six NICA teams in 2026. Those totals belong to everyone who organized, volunteered, sponsored, partnered and raced.</p>
        <p>That purpose does real work when a task is tedious. It helps to know exactly who benefits. Engineers need the same thing, which is why I want <Link to="/leadership/#ambiguity">every engineer to be able to say why their current task matters</Link>, and who is waiting on it.</p>
      </section>

      <section id="volunteer-time" aria-labelledby="volunteer-time-h">
        <h2 id="volunteer-time-h" className="post__h2">Volunteer time is a real constraint</h2>
        <p>Everyone on the team fits this work around jobs, families and everything else in their lives. Enthusiasm is easy to find. Capacity isn’t, and treating one as the other is how good people burn out.</p>
        <p>So the shape of a request matters. A clear ask with a defined end is much easier to say yes to than an open-ended “can you help with sponsors?” Responsibilities need to fit the time people actually have, and deadlines need room for the weeks when life gets in the way.</p>
        <p>The tension is with standards. A race has to be safe and well run, and respecting people’s time can’t mean lowering that bar. It can mean a smaller scope, a longer runway, or two people sharing a role so it doesn’t depend on one person’s free evenings.</p>
        <p>Engineering teams have the same limit with less visibility. Salaried time looks unlimited on a roadmap. It isn’t, and I’d rather <Link to="/writing/when-everything-is-a-priority/#interruptions">plan around the capacity a team actually has</Link> than discover the real number halfway through.</p>
      </section>

      <section id="ownership" aria-labelledby="ownership-h">
        <h2 id="ownership-h" className="post__h2">“We should do this” isn’t the same as owning it</h2>
        <p>Some of the riskiest words in any planning meeting are “we should.” Everyone agrees, nobody leaves owning it, and a task the whole group supported can sit untouched for weeks.</p>
        <p>What helps is plain: a named owner, a clear outcome, and visible dependencies. Who is following up with whom, by when, and what do they need from someone else first?</p>
        <p>The harder question is what to do when an owned task starts slipping. Stepping in can protect the date. It can also teach the owner that their ownership was never real. I’d rather ask what’s in the way, offer help, and agree together on whether the plan should change. Taking the work back is the last option. It’s the same principle behind how I <Link to="/mentorship/">mentor engineers</Link>: support when things go wrong, without taking ownership away.</p>
      </section>

      <section id="race-date" aria-labelledby="race-date-h">
        <h2 id="race-date-h" className="post__h2">The race date forces honest prioritization</h2>
        <p>A software date can usually slip. A race date mostly can’t, and that changes the conversation about scope.</p>
        <p>Some things must be in place for a safe, well-run race: the course, officials, marshals, registration and clear information for racers. Other things are improvements, and they can wait if they have to. Separating the two early protects the team. It stops nice-to-haves from eating the time that the essential work needs, and it lets people say “not this time” without feeling they’ve let the event down.</p>
        <p>A fixed date also means discussion has to end in a decision. On a volunteer team, input matters, because people commit to plans they helped shape. But input with no decision point stalls everything. I try to make sure people are heard, then that someone decides, and that the decision is <Link to="/leadership/#decisions">written down</Link> where everyone can find it.</p>
        <p>A release with a fixed date calls for the same discipline: protect the must-have scope, make the cuts explicit, and ask <Link to="/writing/when-everything-is-a-priority/">what we’re willing to stop</Link> instead of asking the team to absorb everything.</p>
      </section>

      <section id="ready" aria-labelledby="ready-h">
        <h2 id="ready-h" className="post__h2">Finished tasks don’t add up to a ready race</h2>
        <p>A race weekend depends on many separate pieces coming together at once. Each one can be done and the race still not be ready. Registration can be complete while the information hasn’t reached the people who need it. Volunteers can be confirmed without knowing where to report.</p>
        <p>Software releases fail the same way. Every ticket is closed and every service passes its own tests, yet the system doesn’t work end to end because nobody owned the connection between two pieces. That’s why I push to <Link to="/leadership/#risk">test the whole path early</Link>, so nothing new is learned on launch day.</p>
        <p>The people closest to the work usually see these gaps first. A team needs room to say “I don’t think this will work” early, and a leader needs to respond with curiosity instead of defensiveness. A concern raised weeks ahead is cheap to address. The same concern discovered on the morning of the event isn’t.</p>
      </section>

      <section id="after" aria-labelledby="after-h">
        <h2 id="after-h" className="post__h2">The work continues after the finish</h2>
        <p>Race day is the visible part. Much of what makes it work happens earlier: preparation, coordination and follow-through that nobody sees from the finish line. That work deserves the same credit as race-day execution.</p>
        <p>After the finish, there’s still more to do. We thank volunteers, sponsors and partners, review what to change next time, and close the commitments we made. It’s easy to skip when everyone is tired. It’s also a big part of why people come back.</p>
        <p>Engineering teams have their own version: the post-launch review, the cleanup work, the thank-you to the team that unblocked you.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What this team has taught me about leading</h2>
      <div className="post__close-copy">
        <p className="lead">Organizing Berkeley Omnium with this team has made me more careful about what I ask of people, and more deliberate about how ownership is shared and how credit is given. None of it is mine alone. The race happens because a lot of people choose, again, to give it their time.</p>
        <p>It has changed how I lead engineering teams, too. A delivery date matters, but it isn’t the whole job. The people who carried this release will carry the next one, and how they were treated shapes what they’ll be willing to give.</p>
        <div className="post__close-actions">
          <a href={cycling.omnium} className="action">Visit berkeleyomnium.com <ArrowOut /></a>
          <Link to={cyclingPost} className="link-arrow"><span>What cycling taught me about engineering leadership</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
