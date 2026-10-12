import { Link } from 'react-router';
import { cycling } from '../community';

// Personal leadership essay, no AI. Facts from the site and KC: 20+ years as
// engineer, co-founder/CTO, CTO and engineering leader; led teams of 30+;
// mentors engineers into leads (Mentorship page); volunteers with junior
// riders in the Berkeley Bicycle Club, leads a co-ed amateur team, helps
// organize the Berkeley Omnium (proceeds to six East Bay NICA teams). No
// specific mentoring stories, no minors named, no results. Companion to the
// Mentorship page and the cycling-leadership post, which it links rather than
// repeats.

export const toc = [
  ['building-people', 'From building software to building people'],
  ['independent', 'The goal is independence'],
  ['similar', 'Junior riders and junior engineers'],
  ['experience', 'You cannot hand someone twenty years'],
  ['learning', 'Mentoring is also learning'],
  ['smartest', 'Not the smartest person in the room'],
  ['lasting', 'The part that lasts'],
];

// Fig. 699-1: the same job in different clothes, drawn from the text.
const sameJob = [
  { k: 'What I am building', eng: 'Problem-solving and judgment', ride: 'Bike handling and race awareness' },
  { k: 'How it is learned', eng: 'Making real decisions, inside limits that keep mistakes survivable', ride: 'Repetition in a group, not being told' },
  { k: 'What I encourage', eng: 'Asking the questions they worry are obvious', ride: 'Staying with a faster group a little longer' },
  { k: 'What teaches most', eng: 'The change that did not go as planned', ride: 'The difficult race, and the talk afterwards' },
  { k: 'What I measure', eng: 'Whether they decide without me', ride: 'Whether they are better than last month' },
];

function SameJob() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 699-1</span> Mentoring junior engineers and junior riders: the same job in different clothes</caption>
        <thead><tr><th scope="col"> </th><th scope="col">Junior engineer</th><th scope="col">Junior rider</th></tr></thead>
        <tbody>{sameJob.map((r) => <tr key={r.k}><th scope="row">{r.k}</th><td>{r.eng}</td><td>{r.ride}</td></tr>)}</tbody>
        <tfoot><tr><th scope="row">What both need</th><td colSpan={2}>Patience, encouragement, and room to develop at their own pace</td></tr></tfoot>
      </table>
    </figure>
  );
}

// Fig. 699-2: three modes, ordered from most of my involvement to least.
const modesOfHelp = [
  { name: 'Guide', me: 'Ask questions until they see the problem themselves', when: 'They are close to the answer and the lesson is in finding it' },
  { name: 'Demonstrate', me: 'Show it once, then hand it back', when: 'Watching once is worth an hour of explanation' },
  { name: 'Step aside', me: 'Let them go down a path I would not have chosen', when: 'Being wrong is cheap and survivable, and the lesson is worth more than my being right' },
];

function Modes() {
  return (
    <figure className="spectrum post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 699-2</span> Guide, demonstrate, or step aside: pick the mode the moment calls for
        <span className="journey__key label">Left to right, my involvement shrinks and their independence grows. The goal is to spend more time on the right.</span>
      </figcaption>
      <div className="spectrum__axis" aria-hidden="true">
        <span>More of me</span><span className="spectrum__line" /><span>More of them</span>
      </div>
      <ol className="spectrum__modes">
        {modesOfHelp.map((m, i) => (
          <li key={m.name} className={`spectrum__mode${i === modesOfHelp.length - 1 ? ' is-goal' : ''}`}>
            <span className="spectrum__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="spectrum__name">{m.name}</span>
            <span className="label">What I do</span>
            <span className="spectrum__text">{m.me}</span>
            <span className="label">When</span>
            <span className="spectrum__text">{m.when}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="building-people" aria-labelledby="building-people-h">
        <h2 id="building-people-h" className="post__h2">From building software to building people</h2>
        <p>For a long time I measured a good year by what I built. A network that held up. A platform that launched. A system that scaled. A company that grew enough to be acquired. I still enjoy all of that, and I still write code most weeks, mostly because I like it.</p>
        <p>Somewhere along the way, though, I noticed that the moments I remembered best were not always my own. They were the times an engineer I had been working with solved something they could not have solved a few months earlier, and did it without asking me. There is a particular satisfaction in that which is different from shipping something yourself. It is quieter, and it lasts longer.</p>
        <p className="post__answer">I enjoy mentoring because watching someone become capable of something they could not do before is as rewarding as building something myself. In engineering and in junior cycling the work is the same: give people context, room to try and support when it goes wrong, until they no longer need me, and then watch them help the next person.</p>
        <p>I did not plan to feel this way. As a co-founder I was too busy doing every job myself to think about growing anyone. It was only when the team grew and I had to let go of work, which I have written about in <Link to="/writing/building-a-startup-from-idea-to-acquisition/#delegation">learning to delegate as a technical founder</Link>, that I discovered how much I liked seeing other people pick it up.</p>
      </section>

      <section id="independent" aria-labelledby="independent-h">
        <h2 id="independent-h" className="post__h2">The goal is independence</h2>
        <p>The point of mentoring is not to become the person everyone has to ask. If an engineer needs me for every decision, I have built a dependency, and I have also built myself a very tiring job.</p>
        <p>What I am trying to grow is judgment. Knowledge is the easy part to share; documentation does that. Judgment is knowing which of three reasonable designs fits this team and this business, when a shortcut is fine and when it will hurt, and when to raise a concern even though it is awkward. That only develops by making decisions, so mentoring means handing decisions over, a little at a time, and being there when they turn out differently than expected.</p>
        <p>The best signal that it is working is a little deflating: people stop coming to you. The engineer who used to ask what to do starts telling you what they did and why. Then, if you are lucky, they start explaining it to someone newer. That is the moment I care about most. I describe the stages I try to move people through on the <Link to="/mentorship/">Mentorship page</Link>, from asking what to do to teaching someone else.</p>
      </section>

      <section id="similar" aria-labelledby="similar-h">
        <h2 id="similar-h" className="post__h2">Junior riders and junior engineers</h2>
        <p>Outside work, I volunteer with junior riders in the <a href={cycling.club}>Berkeley Bicycle Club</a>, lead a co-ed amateur team, and help organize the <a href={cycling.omnium}>Berkeley Omnium</a>, whose proceeds go to six East Bay youth cycling teams. I expected cycling to be a break from leading engineers. It turned out to be the same job in different clothes.</p>
        <p>With a junior engineer, I am trying to build problem-solving rather than hand out answers, so I ask more questions than I answer. I want them to ask questions too, including the ones they worry are obvious, because the obvious ones are where most misunderstandings hide. I want them to understand why a system is built the way it is, not only how to change it, because the why is what lets them make the next decision without me. And I want them to make real decisions and own the outcome, inside limits that keep a mistake survivable.</p>
        <p>With a junior rider, the skills are different and the shape is identical. Bike handling and race awareness come from repetition, not from being told. They need to be encouraged to try something hard, like staying with a faster group a little longer than feels comfortable. They learn teamwork and responsibility by riding in a group where other people depend on them holding a line. The difficult races teach the most, and the conversation afterwards matters more than the result. I care more about whether a rider is better than they were last month than about where they finished.</p>
        <SameJob />
        <p>Both groups need patience, and both develop at their own pace. Some engineers get comfortable with production in weeks and some in a year, and neither tells you much about where they will end up. Some riders improve in a straight line and some plateau and then jump. Treating everyone as if they should be on the same schedule is the fastest way to lose the ones who would have been great. I wrote more about the parallels in <Link to="/writing/what-cycling-taught-me-about-engineering-leadership/#readiness">what cycling taught me about engineering leadership</Link>.</p>
      </section>

      <section id="experience" aria-labelledby="experience-h">
        <h2 id="experience-h" className="post__h2">You cannot hand someone twenty years</h2>
        <p>The hardest lesson for me was accepting that some things cannot be taught, only experienced.</p>
        <p>I can explain why a migration needs a way back at every step. I can describe what happened the last time I skipped one. I can warn, clearly and in advance, that a design will be painful to change later. And often the person nods, understands the words, and does it anyway, because the words are not the same as the feeling of a two-in-the-morning rollback. I know this because I was that person, and my mentors were patient with me.</p>
        <p>So I no longer think my job is to prevent every mistake. That is impossible, and trying makes people timid. My job is to make the mistakes survivable and the lesson clear: a staging environment before production, a review before the merge, a small change instead of a big one, and a conversation afterwards that is about what we learned rather than who to blame.</p>
        <p>The skill is knowing which mode the moment calls for. Sometimes I guide, asking questions until the person sees the problem themselves. Sometimes I demonstrate, because watching once is worth an hour of explanation. And sometimes I step aside on purpose and let someone go down a path I would not have chosen, because the cost of being wrong is small and the lesson is worth more than my being right. Cycling is the same. You can tell a junior rider a hundred times not to spend everything on the first climb, and they will learn it properly the first time they cannot hold the wheel on the second one.</p>
        <Modes />
      </section>

      <section id="learning" aria-labelledby="learning-h">
        <h2 id="learning-h" className="post__h2">Mentoring is also learning</h2>
        <p>I do not think mentoring runs in one direction. Junior engineers ask questions that expose assumptions I have carried for years. Sometimes the honest answer to “why do we do it this way?” is “because that is how we did it last time”, and a good mentor notices that and changes it. Newer engineers also come in knowing tools and approaches I have not used, and I would be foolish not to learn them.</p>
        <p>Young riders do the same thing in a different way. Their enthusiasm for something I have done a thousand times reminds me why I started. Their questions are blunt and often very good. And they are, unsurprisingly, faster than me on most climbs, which keeps the coaching humble.</p>
        <p>That curiosity is contagious. After more than two decades I am still learning, still experimenting and still writing code, and I think mentoring is part of why. It is hard to get bored of something when you keep seeing it through someone who is seeing it for the first time. I want people to challenge me, which is why <Link to="/mentorship/">two-way mentoring</Link> is part of how I describe the way I work.</p>
      </section>

      <section id="smartest" aria-labelledby="smartest-h">
        <h2 id="smartest-h" className="post__h2">Not the smartest person in the room</h2>
        <p>Mentoring changed how I think about leadership. Early on I assumed a leader should be the person with the best answer. It took me longer than I would like to admit to see that a leader who always has the best answer is usually the reason the team has stopped offering any.</p>
        <p>A good leader does not need to know everything. The job is to build an environment where other people can succeed. In practice, that means a handful of ordinary things done consistently. Giving people real opportunities, not just the work nobody else wants. Sharing what I know freely, including the mistakes. Giving feedback that is specific, honest and kind, and asking for it back. Clearing obstacles out of the way, which is often the most useful thing I do in a week. Building trust by doing what I said I would. Noticing progress out loud. And letting people own their work, including the decisions I would have made differently.</p>
        <p>The measure of a lead is the team that works without them. If my team can make good decisions when I am on vacation, I have done my job. If everything waits for me, I have not, however busy I look. That idea runs through <Link to="/leadership/#mentoring">how I run engineering</Link>, and it is why I care more about growing engineers into leads than about how many people report to me.</p>
      </section>

      <section id="lasting" aria-labelledby="lasting-h">
        <h2 id="lasting-h" className="post__h2">The part that lasts</h2>
        <p>Building software is rewarding. Building a company is rewarding. I have done both and would do both again. But software gets rewritten and companies change hands. What someone learns about how to think through a problem, how to own a decision, or how to keep going on a hard climb, they carry with them for the rest of their career or their life.</p>
        <p>The greatest satisfaction, I think, comes later and mostly out of sight. It is when someone I worked with becomes the person others go to, and starts doing for them what someone once did for me. At that point what I learned is reaching people I will never meet, through someone I helped. I find that a good thing to have been part of.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Still building, in a different way</h2>
      <div className="post__close-copy">
        <p className="lead">I still love building software.</p>
        <p className="post__close-principle">But somewhere along the way, I discovered that helping people grow can be just as rewarding as building something myself.</p>
        <p>I expect to keep doing both for as long as people let me, on a team and on a bike.</p>
      </div>
    </>
  );
}
