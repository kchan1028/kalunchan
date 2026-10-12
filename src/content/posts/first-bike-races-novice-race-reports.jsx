import { Link } from 'react-router';
import { cycling } from '../community';
import { ArrowRight } from '../../components/Icons';

// Moved from KC's old blog (kalunchan.wordpress.com, Cycling category): three race
// reports combined into one post. Every fact, name and result comes from those posts.
// Years are left out of the visible text (site audit); the original posts were dated.

const videos = {
  livermore: 'https://www.youtube.com/watch?v=UHkZ3IoCz9Y',
  cherryPie: 'https://www.youtube.com/watch?v=mM4IbS-WLpQ',
  snelling: 'https://www.youtube.com/watch?v=oOsmO3aoEnI',
};

export const toc = [
  ['start-line', 'Getting to a start line'],
  ['livermore', 'Livermore Criterium'],
  ['cherry-pie', 'Cherry Pie Criterium'],
  ['snelling', 'Snelling Road Race'],
  ['lessons', 'What I took from it'],
];

export default function Body() {
  return (
    <>
      <section id="start-line" aria-labelledby="start-line-h">
        <h2 id="start-line-h" className="post__h2">Getting to a start line</h2>
        <p>I took up cycling a month before the pandemic, and later joined the <a href={cycling.club}>Berkeley Bicycle Club</a>. My first informal club ride was with Paul C, John C, Gwen, OT and Kevin. I couldn’t keep up, and OT had to pull me out of paradise.</p>
        <p>Paul C, OT and Alex C were a huge help. They told me which kinds of training to do and, just as useful, which ones to skip. It was Steve’s ride that got me to take cycling more seriously. Thanks, Steve!</p>
        <p>Then I broke my collarbone, and that forced me to take it easy for a while. I came back faster. Daniel R called it. Paul C turned out to be right again too: cutting back on weight training left my legs fresher for the bike.</p>
        <p>About three months before my first race, I started a training plan with coach <a href="https://englishendurance.com/">Nate English</a>, and my speed and endurance went up quickly. I also did the Early Bird Training Series run by <a href="https://www.velopromo.com/">Velo Promo</a>, where Hussien and Dan were a big help. John at <a href="https://tempoendurance.com/">TempoEndurance</a> gave me a great bike fit.</p>
        <p>I wrote these reports right after each of my first three races, all in novice fields.</p>
      </section>

      <section id="livermore" aria-labelledby="livermore-h">
        <h2 id="livermore-h" className="post__h2">Race 1: Livermore Criterium, Men Novice</h2>
        <p className="post__answer">A criterium, or crit, is a short, fast bike race of many laps around a closed circuit. The Livermore Criterium, presented by <a href="https://skyexpressevents.com/">Sky Express Events</a>, was my first race: 30 minutes in the Men Novice field.</p>
        <p>I raced alongside Brendan Hogg and Nolan Blankenau, which made the whole thing a lot more fun. As a warm-up, I rode the 29 miles from San Leandro to Livermore.</p>
        <p>My motorcycle track day experience came in handy in the corners. I could turn faster than the riders around me. The catch, I think, was that I kept coming out of the turns at the front. Nolan thought I was trying to break away, haha.</p>
        <p>So I tried to slow down and sit at the back. I couldn’t manage that through every turn, and going back and forth burned far too much energy. On the second-to-last turn, someone nearly ran me off the road. That slowed me down, and I forgot it was the last lap just as everyone else was pushing hard for the finish.</p>
        <p>I also got a puncture during the race, and the sealant worked. You can watch <a href={videos.livermore}>my video of the Livermore race</a>.</p>
      </section>

      <section id="cherry-pie" aria-labelledby="cherry-pie-h">
        <h2 id="cherry-pie-h" className="post__h2">Race 2: Cherry Pie Criterium, Men Novice</h2>
        <p>The Cherry Pie Criterium, run by the <a href="https://www.eaglecyclingclub.org/">Eagle Cycling Club</a>, had a course in excellent condition. There were a few road plates at Turn 2 and a small crack at Turn 12, and that was about it. Their course marshals did a fantastic job of sweeping the turns all race.</p>
        <p>Being able to pre-ride the course helped a lot. We got a feel for the surface before the race instead of finding out at speed.</p>
        <p>I really enjoyed the course. For my taste, more twists and fewer long straights is the best kind of crit. Here’s <a href={videos.cherryPie}>my video of the Cherry Pie race</a>.</p>
      </section>

      <section id="snelling" aria-labelledby="snelling-h">
        <h2 id="snelling-h" className="post__h2">Race 3: Snelling Road Race, Master 30/40+ Novice</h2>
        <p>At the Snelling Road Race, put on by <a href="https://www.velopromo.com/">VeloPromo</a>, the Master 30/40+ Novice field raced together with the Master 50+ Cat 4/5 riders.</p>
        <p>I lost track of the finish again. Two riders crossed the line in a photo finish while my inner monologue was still asking, “Are we near the finish?”</p>
        <p>For most of the race it was thrilling, and I enjoyed it. Next time I need a much better plan. The race is in <a href={videos.snelling}>my video of the Snelling Road Race</a>.</p>
      </section>

      <section id="lessons" aria-labelledby="lessons-h">
        <h2 id="lessons-h" className="post__h2">What I took from my first three races</h2>
        <p>Reading these again, the mistakes are easy to spot, and two of the three races had the same one:</p>
        <ul className="post__list">
          <li>Know where the finish is, and count the laps. I forgot the last lap at Livermore and lost track of the finish at Snelling.</li>
          <li>Cornering speed doesn’t help if every turn puts you on the front. Where you come out of a corner matters as much as how fast you take it.</li>
          <li>Wasted effort adds up. Moving back and forth through the field burned energy I needed at the end.</li>
          <li>Pre-ride the course when you can. It took the guesswork out of the corners at Cherry Pie.</li>
          <li>Run sealant. It saved my first race.</li>
        </ul>
        <p>The bigger thing I took away was how much other people got me there. Club members told me what to train and what to skip, a coach built the plan, Velo Promo ran a training series, and clubs like Eagle Cycling Club put on safe, well-marshalled races.</p>
        <p>That’s a big part of why I now lead a co-ed amateur team, support junior riders and help organize the <Link to="/community/">Berkeley Omnium</Link>. I wrote more about what riding has taught me in <Link to="/writing/what-cycling-taught-me-about-engineering-leadership/">what cycling taught me about engineering leadership</Link>, including meeting new riders where they are.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Next time, a better plan</h2>
      <div className="post__close-copy">
        <p className="lead">Three races in, my main lessons were to save my energy in the corners and to find the finish line before the race starts.</p>
        <p className="post__close-principle">Count the laps, and thank the people who got you to the start.</p>
        <p>If you’re thinking about your first race, start local. The Berkeley Omnium, for one, has junior, collegiate and women’s fields, and the people running it want new racers there.</p>
        <div className="post__close-actions">
          <Link to="/community/" className="action">See the Berkeley Omnium race weekend <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
