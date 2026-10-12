import { Link } from 'react-router';
import { cycling } from '../community';
import { ArrowRight } from '../../components/Icons';

// Personal story. Confirmed: strength training and weightlifting, Spartan race
// and obstacle course training, road cycling and amateur racing (first races
// post), a broken collarbone and a faster comeback (first races post), coach
// and club (first races post), leading a co-ed amateur team, junior riders,
// Berkeley Omnium. From KC's brief: a crash and retinal detachment surgery this
// year (no causal link stated, no medical detail), gaps from work and from a
// life event (unspecified on purpose). No race results, PRs, FTP numbers or
// training volumes are stated. No years in visible text (site audit).

export const toc = [
  ['harder', 'Working harder'],
  ['strength', 'Strength: progress takes time'],
  ['spartan', 'Spartan: comfortable being uncomfortable'],
  ['cycling', 'Cycling: harder isn’t faster'],
  ['recovery', 'Recovery'],
  ['coming-back', 'Coming back'],
  ['others', 'Training with others'],
  ['three', 'What all three taught me'],
  ['leadership', 'How it changed how I lead'],
  ['still-learning', 'Still learning'],
];

export default function Body() {
  return (
    <>
      <section id="harder" aria-labelledby="harder-h">
        <h2 id="harder-h" className="post__h2">I used to think getting better meant working harder</h2>
        <p>For most of my twenties and thirties, my theory of improvement was simple. If something wasn’t getting better, I wasn’t working hard enough. It worked for a while in the gym, it worked for a while in a startup, and it stopped working in both places for the same reason.</p>
        <p>I have spent more than two decades in technology, from hands-on engineering to founding a company and leading engineering teams. Outside work, I have trained in three very different ways: strength training and weightlifting, then many Spartan races and the obstacle course training that goes with them, and then road cycling, which turned into endurance training and amateur bike racing. Each one taught me something the others could not, and together they changed what I think improvement is.</p>
        <p className="post__answer">Strength training, Spartan racing and cycling taught me that getting better means training smarter, not harder. Progress comes from consistency, the right kind of effort at the right time, recovery you take on purpose, and people who are better than you. The same is true of engineering teams.</p>
      </section>

      <section id="strength" aria-labelledby="strength-h">
        <h2 id="strength-h" className="post__h2">Strength training: progress takes time</h2>
        <p>The gym was where I first learned that enthusiasm is not a training plan. You cannot walk in, lift heavy for a few days and expect to be stronger. What works is boring: show up, add a little weight or a rep when the last session was clean, keep the technique honest, eat, sleep, repeat for months.</p>
        <p>Progressive overload is the idea that the body adapts to a load slightly beyond what it is used to, so you keep nudging the load. The mistake I made for years was reading “progressive” as “more weight, every time”. Adding weight to a lift you do badly makes you better at doing it badly, and eventually it makes you hurt. The lifts I am proudest of were the ones where I took weight off the bar, fixed the movement, and spent a few weeks catching back up to where I thought I already was.</p>
        <p>Then the easy gains run out. Early on, almost anything works. Later, the increments get smaller and the recovery gets more important. Tracking matters at that point, because memory lies. I would swear I had been stuck for months, and the log would show I had added a plate to a lift and lost two days a week to work. Listening to the body got harder to ignore too. The day you learn the difference between sore and injured is usually the day you get it wrong.</p>
        <p>Building an engineering team works the same way. You do not turn a struggling team into a strong one in a quarter. You fix one process, develop one person, remove one bottleneck, and do it again next month. The team that improves trains consistently. The one that pulls a heroic weekend needs a month to recover from it.</p>
      </section>

      <section id="spartan" aria-labelledby="spartan-h">
        <h2 id="spartan-h" className="post__h2">Spartan training: getting comfortable being uncomfortable</h2>
        <p>I raced a lot of Spartan races before cycling came along, and the first one humbled the gym version of me quickly. I was strong, and being strong turned out to be a small part of the job. An obstacle course asks you to run until you are tired, then carry something heavy up a hill, then climb a rope with wet hands, then run again. Strength that only works fresh, on a flat floor, with chalk, is a narrower thing than it felt like under a barbell.</p>
        <p>So the training changed. Grip work, carries, running, climbing, moving well when I was already spent. The strange part was learning to perform tired. In the gym, tired is a signal to stop. On a course, tired is the normal condition and the obstacle is still there. You learn to slow down instead of stopping, to look for a technique that costs less, and to accept that the plan you had at the start line will not survive the third obstacle.</p>
        <p>That turned out to be good preparation for founding a company. When I co-founded a <Link to="/writing/founding-a-startup-isnt-easy/">startup</Link>, I could not specialize. In one week I was the software developer, the network engineer, the Linux administrator, the infrastructure engineer, the product manager, and sometimes the field technician running cable in a data center. You do not get to pick the obstacle in front of you. You get to pick how you get over it, and whether you learn something you can use at the next one.</p>
        <p>Being adaptable turned out to matter more than being exceptional at one thing. The exceptional thing was useful, and it was never the whole course.</p>
      </section>

      <section id="cycling" aria-labelledby="cycling-h">
        <h2 id="cycling-h" className="post__h2">Cycling: working harder doesn’t always make you faster</h2>
        <p>I took up cycling a month before the pandemic, and it rearranged what I thought I knew about training. My first club ride with the <a href={cycling.club}>Berkeley Bicycle Club</a> ended with someone having to come back and pull me home, which was not the entrance I had planned. I have written about the <Link to="/writing/first-bike-races-novice-race-reports/#start-line">club members and the coach who got me to a start line</Link>, and about my first races, in which I managed to forget where the finish was twice.</p>
        <p>What cycling added was structure. Performance on a bike depends on more things than I was used to counting: aerobic endurance, functional threshold power, the easy miles in zone 2, hard intervals near VO2 max, sprint power, recovery, nutrition, total volume, and then, on race day, tactics and the group around you. The first lesson from a coach was the one I least wanted to hear. Most of my rides should be easy, and easy meant boringly easy, the kind where you can hold a conversation the whole way. The hard days are hard because the easy days are easy, and the rider who goes medium every day gets good at going medium.</p>
        <p>That is the difference between training to feel exhausted and training for a specific adaptation. A session that leaves you wrecked feels productive. A session that targets one thing, at the right intensity, with enough recovery around it to absorb it, is productive. They are not the same ride, and for a long time I could only tell them apart by how I felt, which was the wrong instrument.</p>
        <p>Racing added patience. The rider with the highest threshold power often does not win. The rider who sat in the right wheel, conserved energy on the climb, read the move when it went, and had something left at the finish does. Positioning, timing and the willingness to work with riders you were trying to beat a lap ago are skills, and effort is only one input to them. I wrote about the judgment side of that in <Link to="/writing/what-cycling-taught-me-about-engineering-leadership/#pace">what cycling taught me about engineering leadership</Link>.</p>
        <p>The engineering parallel is the one I needed most. The team working the longest hours is not the most productive. A team that goes from one emergency to the next looks busy and may not be going anywhere. Effort matters. Knowing where and when to apply it matters more, and deciding that is the leader’s job.</p>
      </section>

      <section id="recovery" aria-labelledby="recovery-h">
        <h2 id="recovery-h" className="post__h2">Recovery: the hardest lesson</h2>
        <p>When I was younger, recovery was what happened by accident between workouts. Rest days were a sign of weak planning. All three disciplines eventually corrected me, and cycling did it most clearly, with a coach who put rest weeks on the calendar on purpose and expected me to take them.</p>
        <p>Fatigue builds up without telling you. A hard week feels fine. Three hard weeks feel fine until the fourth one, when the numbers go backwards and the mood goes with them. Sleep and food are training. Enough, absorbed, beats more. The adaptation happens while you rest. The session only orders it.</p>
        <p>Teams accumulate fatigue the same way. Constant emergencies, overtime that becomes the schedule, and deadlines nobody believed in the first place do not produce a stronger team. They produce a tired one that eventually breaks, and the break is rarely at a convenient moment. I have written about <Link to="/writing/what-sprint-carryover-is-telling-you/">what sprint carryover is telling you</Link>, and a lot of it is this: the load is higher than the capacity, and no amount of pushing fixes that.</p>
        <p>Recovery is not the opposite of progress. It is part of it. I believe that now. It took me an embarrassingly long time, and a few injuries, to get there.</p>
      </section>

      <section id="coming-back" aria-labelledby="coming-back-h">
        <h2 id="coming-back-h" className="post__h2">Coming back is its own discipline</h2>
        <p>Nobody warns you that the hard part of training is the coming back. I have had to do it more than once, for different reasons, and each time the gap had a different shape.</p>
        <p>The first was an injury. I broke my collarbone in a bike crash, and for a while the only training available was patience. I came back faster than I had been before, which a club member had predicted and I had not believed. Part of it was forced rest. Part of it, as one of them pointed out, was that cutting back on weight training left my legs fresher for the bike. The injury took something I would never have given up voluntarily and handed me a result I could not have planned.</p>
        <p>The second kind of gap was work. There have been stretches where the job ate everything and training went from a plan, to a hope, to a bike in the garage I walked past on the way to the car. Fitness leaves faster than it arrives. The temptation when you come back is to make up for the lost weeks by doubling up, which is the single most reliable way I know to get injured. What worked was smaller. Twenty minutes counts. A short ride beats a perfect ride that does not happen. The first goal is the habit. Fitness follows it.</p>
        <p>The third was a life event that took me out of training for longer than any injury. I will leave the details where they belong. What I learned is that coming back after a long gap means being a beginner again with an experienced person’s memory, and the memory is the problem. Every ride gets compared to the rider I used to be. The fix was to stop comparing to that person and compare to last week, which is the only comparison that produces a plan.</p>
        <p>This year brought a crash, and surgery for a detached retina, and a longer stretch off the bike than I wanted. Being told when you can and cannot train, by someone who is right, is a different kind of patience from choosing a rest week. It also makes the question very clear. Progress is a line you keep returning to, from wherever the gap left you, and the skill is in the returning.</p>
        <p>Teams come back too, from a failed launch, a reorganization, losing a senior engineer, a quarter that went sideways. The instinct is to sprint to make up the time. The better move is the same as on the bike: start below where you were, rebuild the basics, protect the habit of shipping small things, and measure against last week.</p>
      </section>

      <section id="others" aria-labelledby="others-h">
        <h2 id="others-h" className="post__h2">Training with others makes the journey better</h2>
        <p>Fitness can be a solitary thing, and some of mine has been. The best of it was not. On the bike I learned from riders who were stronger and far more experienced, who told me which training to do and, more usefully, which to skip. Riding with people who are better than you is uncomfortable in exactly the way that makes you better, and they were generous about it.</p>
        <p>Then it turned around. I now lead a co-ed amateur team, support junior riders, and help organize the <a href={cycling.omnium}>Berkeley Omnium</a>, a race weekend whose proceeds go to six East Bay youth cycling teams. Helping a new rider feel confident in a group, or watching a junior ride a smarter race than I did at their age, is a satisfaction I did not get from my own results. Passing on what you know is also how a club stays a club.</p>
        <p>I did not plan for cycling to become that. It did, and it changed how I think about <Link to="/mentorship/">mentoring engineers</Link>. The job is the same: meet people where they are, give them a wheel to follow, then make room for them to go past you.</p>
      </section>

      <section id="three" aria-labelledby="three-h">
        <h2 id="three-h" className="post__h2">What all three taught me</h2>
        <p>Strength training taught me consistency, patience, small progressive improvements, and that the fundamentals are not the beginner part. Spartan training taught me adaptability, resilience, the difference between strength and capability, and how to get through an obstacle I did not choose. Cycling taught me strategy, efficiency, teamwork, structured training, and when to push and when to sit in.</p>
        <p>The theme underneath is that working hard was never enough. Improvement needs a clear idea of what you are trying to change, an approach that produces that change, and the willingness to adjust when it is not working, which is usually sooner than pride would like.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">How it changed how I lead</h2>
        <p>I try not to force the analogy, and I notice I keep reaching for it anyway, because the same decisions come up. Progressive overload against a team’s workload: a little more than last time, when last time was clean, and never a jump because the calendar says so. A training plan against a roadmap: periodized, with recovery built in, and adjusted when the data says the plan was wrong. Coaching an athlete against mentoring an engineer: context, a target, feedback on technique, then room to own the result. Race strategy against technical decisions: the strongest option is not always the one that wins, and timing matters as much as power.</p>
        <p>Mostly it changed what I believe makes a team better. More hours, more people, or more process are the gym equivalent of adding weight to a bad lift. Sometimes they help. Usually the improvement is somewhere smaller and less dramatic: technique, consistency, recovery, and knowing which effort matters this week.</p>
      </section>

      <section id="still-learning" aria-labelledby="still-learning-h">
        <h2 id="still-learning-h" className="post__h2">I’m still learning</h2>
        <p>After all these years I still find a better exercise, change how I train on the bike, adjust what I expect from a season, or discover that something I was sure about a decade ago was only half right. Fitness is not something you finish. Neither is engineering, and neither is leading people. There is always something to improve.</p>
        <p>Sometimes the biggest improvement comes from learning when not to push harder. That one took me three sports, a collarbone and a few lost seasons to learn. I would like to say I have it down now. Ask me again after the next comeback.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Train smarter. Then keep showing up.</h2>
      <div className="post__close-copy">
        <p className="lead">I used to think getting better meant working harder. Three sports taught me it means training smarter, recovering on purpose, and coming back from the gaps.</p>
        <p className="post__close-principle">Consistency over heroics, the right effort at the right time, recovery as part of the plan, and people who make you better.</p>
        <p>That is how I train now, and it is how I try to build engineering teams. Neither is finished.</p>
        <div className="post__close-actions">
          <Link to="/mentorship/" className="action">How I mentor engineers and junior riders <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
