import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// How a capable engineer or leader becomes the person everything waits on, and how to move judgment to the team.
// Source: KC's brief (Nov 2026). First-person claims come from the brief, the founder post (#delegation, "Looking back")
// and the engineering-leadership post; the team size from profile.md. Sam, the billing system, its boundaries and the team
// of four are invented and labeled as an example; no real handover or result is claimed. KC's own story is linked, not retold.

export const toc = [
  ['starts', 'How it starts'],
  ['hard-to-see', 'Why it’s hard to see in yourself'],
  ['organization', 'One person can’t fix this alone'],
  ['judgment', 'From giving answers to building judgment'],
  ['stages', 'Hand it over in stages'],
  ['documentation', 'What documentation can’t carry'],
  ['boundaries', 'Boundaries and room to differ'],
  ['next-bottleneck', 'Don’t just move the bottleneck'],
  ['replace-me', 'Someone who can replace me'],
];

export default function Body() {
  return (
    <>
      <section id="starts" aria-labelledby="starts-h">
        <p>Sometimes the bottleneck on an engineering team is the person everyone trusts most. I’ve been that person, and I still catch myself sliding back into it.</p>
        <p>As a co-founder and CTO, on a team that grew past 30 people, I could often fix a problem faster than I could explain it. So I fixed it, and the team learned that hard problems came back to me. The <Link to="/writing/building-a-startup-from-idea-to-acquisition/#delegation">founder story</Link> covers how that went.</p>
        <p className="post__answer">A capable, helpful engineer becomes a bottleneck when decisions, reviews and difficult problems start waiting for them because they’re the person everyone trusts to handle them. Usually nobody decided it should work that way. The way out is to move ownership and judgment to more people, with time set aside to do it.</p>
        <h2 id="starts-h" className="post__h2">How it starts</h2>
        <p>Here’s an invented example. Sam joined early and knows the billing system better than anyone. Someone asks a question in Slack and Sam answers in five minutes, correctly. An incident starts at night and Sam joins, because Sam will find it fastest. Sam reviews every billing change, because Sam spots the retry that would charge a customer twice. When a migration looks risky, Sam takes it.</p>
        <p>Each of those is a reasonable call, and each one saves the team time that day. A year later, nothing in billing ships without Sam. The people asking were being sensible too: a five-minute answer beats an afternoon in unfamiliar code.</p>
      </section>

      <section id="hard-to-see" aria-labelledby="hard-to-see-h">
        <h2 id="hard-to-see-h" className="post__h2">Why it’s hard to see in yourself</h2>
        <p>Being needed feels good. People thank you, and your calendar is full of evidence that you matter.</p>
        <p>When I took a problem back, it felt responsible, and in the moment it usually was faster. I wasn’t counting what it did to the next time. Since the feeling won’t warn you, I look for evidence instead:</p>
        <ul className="post__list">
          <li><strong>Work waits for your review.</strong> Check who approved the last 30 merged pull requests in your riskiest repository. If it’s mostly one name, other people may not feel they can approve.</li>
          <li><strong>Decisions stop while you’re away.</strong> Some of what waited for you after your last time off deserved to wait. Some of it was a call the team could have made.</li>
          <li><strong>People ask for answers before forming their own view.</strong> Count how many of your recent direct messages start with “what should I do?” and how many start with “here’s what I think.”</li>
        </ul>
      </section>

      <section id="organization" aria-labelledby="organization-h">
        <h2 id="organization-h" className="post__h2">One person can’t fix this alone</h2>
        <p>If Sam is measured on delivery and the roadmap assumes Sam at full speed, “delegate more” is a request to miss commitments. Handing work over makes things slower for a while. Sam spends hours pairing, and the next person takes twice as long on a change Sam could finish before lunch. As the leader, deciding that cost is worth paying is usually my call.</p>
        <p>That means mentoring time goes in the capacity plan, because anything sitting on top of a full workload gets dropped when a date gets tight. Each critical system gets a named second owner, with real review rights and a place in the on-call rotation. People get real work to practice on, chosen so a mistake is recoverable, even if that sometimes means a later date. And mentoring has to count at review time. If only the heroic save gets recognized, a sensible engineer will keep making heroic saves.</p>
      </section>

      <section id="judgment" aria-labelledby="judgment-h">
        <h2 id="judgment-h" className="post__h2">From giving answers to building judgment</h2>
        <p>When someone brings me a problem, the habit I’m trying to build is four questions before I say what I think:</p>
        <ol className="post__steps">
          <li>What have you investigated?</li>
          <li>What options did you consider?</li>
          <li>What do you recommend?</li>
          <li>Why?</li>
        </ol>
        <p>The last one teaches me the most, because it shows what the person is weighing. If their reasoning holds up, we go with it, even when I’d have leaned another way. If it’s missing something, I can supply that piece, like a customer contract they never saw. That’s the Recommend step on <Link to="/mentorship/">the mentoring ladder I use</Link>.</p>
        <p>These questions can go badly. Someone new with no context will experience them as a quiz. If someone needs the location of a config file, I tell them. During an outage I say what I know, and the teaching waits for the review afterward. And if I ask for a recommendation and then always overrule it, people will learn to guess what I’d say. I also still want to jump in sometimes, especially when I can see the answer.</p>
      </section>

      <section id="stages" aria-labelledby="stages-h">
        <h2 id="stages-h" className="post__h2">Hand it over in stages</h2>
        <p>I move responsibility in three stages, starting small. One category of review or one runbook is a better first handover than an entire system.</p>
        <p><strong>Pairing.</strong> The other engineer drives the next billing change while Sam sits alongside and thinks out loud, including what Sam is choosing to ignore. Nobody has usually written that part down.</p>
        <p><strong>Shadowing.</strong> The other engineer watches Sam run an incident or a design review, and afterward they talk through why Sam made each call.</p>
        <p><strong>Leading with support.</strong> The other engineer runs it and Sam stays available. This one is hardest, because Sam can see a faster route and has to stay quiet unless something crosses a line they agreed on beforehand.</p>
      </section>

      <section id="documentation" aria-labelledby="documentation-h">
        <h2 id="documentation-h" className="post__h2">What documentation can’t carry</h2>
        <p>Write down how the system works, why the retry limit is what it is, and <Link to="/leadership/#decisions">what was decided and why</Link>. That spares Sam the same question for the tenth time.</p>
        <p>A runbook can tell someone how to roll back. It can’t tell them when a rollback is riskier than fixing forward. That comes from making calls like that, then talking them over with someone who’ll say honestly how it went.</p>
      </section>

      <section id="boundaries" aria-labelledby="boundaries-h">
        <h2 id="boundaries-h" className="post__h2">Boundaries, and room to do it differently</h2>
        <p>Handing someone a system with no limits leaves them guessing where the edges are, so I spell them out. For Sam’s billing system, that might be: you decide anything inside the service, but bring me in first if a change alters what customers are charged, touches the ledger schema or can’t be rolled back. If customers are affected, escalate right away.</p>
        <p>Inside those limits, the work is theirs, including doing it differently from how I would. I try to ask whether my version would be safer or just more familiar. If it’s only more familiar, I keep it to myself. Sometimes their way turns out better. When it’s worse in a way that’s cheap to fix, they learn more than my version would have taught them.</p>
      </section>

      <section id="next-bottleneck" aria-labelledby="next-bottleneck-h">
        <h2 id="next-bottleneck-h" className="post__h2">Don’t just move the bottleneck</h2>
        <p>One way to get this wrong looks like success. Sam is free, and the next strongest engineer now gets every question.</p>
        <p>So I try to spread the pieces: billing reviews to one engineer, incident lead to a rotation, the migration plan to someone else. Each new owner also starts teaching someone. A team of four can’t give every system three owners, and some knowledge will stay with fewer people than I’d like. When that’s the case, I want it stated as a known risk, with a plan.</p>
      </section>

      <section id="replace-me" aria-labelledby="replace-me-h">
        <h2 id="replace-me-h" className="post__h2">Why I want someone who can replace me</h2>
        <p>Part of my job is to mentor people until they can take over my responsibilities and eventually replace me. It can sound like a strange thing to say about your own job, but it’s the only way I know to make room for both of us. They get responsibility they’re ready for, and I get time for problems I haven’t solved yet.</p>
        <p>I’m still learning this. In my founder years I held on to some decisions longer than I should have, which cost us speed and cost engineers the chance to grow into them. The test I use now is what happens when I’m absent: whether the team makes sound decisions, including ones I’d have made differently.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Where I’d start</h2>
      <div className="post__close-copy">
        <p className="lead">The next time you take time off, keep a list of everything that waited for you, then mark the items the team could have decided without you.</p>
        <div className="post__close-actions">
          <Link to="/mentorship/" className="action">How I mentor engineers <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
          <Link to="/engineering-leadership/" className="link-arrow"><span>Summary for hiring teams</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
