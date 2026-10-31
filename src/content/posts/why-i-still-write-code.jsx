import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Series "Still Building", part 2. Facts from the site and KC:
// network engineering, Linux, C++ on Nokia, PHP/LAMP, Django, Rails,
// React/Next.js, AWS, distributed systems; co-founder/CTO doing everything,
// VP of Operations, CTO of a media publisher, Yippify; recent builds FedPath,
// Useful Little Tools, the Berkeley Omnium site, kalunchan.dev, a job-search
// agent in progress; Claude Code and Codex in the terminal. The examples of
// what hands-on work reveals are general, not invented incidents. No years.

export const toc = [
  ['everything', 'I started by doing almost everything'],
  ['time', 'Leadership changes where the hours go'],
  ['still-building', 'What I still build'],
  ['better-leader', 'What staying technical buys a leader'],
  ['bottleneck', 'What it must not turn into'],
  ['ai', 'AI made building fun in a new way'],
];

const rows = [
  { does: 'Read the code well enough to ask the right question in a design review', doesnt: 'Review every pull request before it can merge' },
  { does: 'Estimate with the team, knowing where the hidden work usually is', doesnt: 'Overrule the team’s estimate because I could do it faster' },
  { does: 'Prototype the riskiest part to learn whether it is possible', doesnt: 'Keep the prototype and make the team maintain it' },
  { does: 'Debug alongside someone when they are stuck', doesnt: 'Take the keyboard and fix it myself' },
  { does: 'Know what the infrastructure costs and why', doesnt: 'Make every architecture decision personally' },
];

function Engaged() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 695-1</span> Staying technical, and the line I try not to cross</caption>
        <thead><tr><th scope="col">What it lets me do</th><th scope="col">What it must not become</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r.does}><td>{r.does}</td><td>{r.doesnt}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="everything" aria-labelledby="everything-h">
        <h2 id="everything-h" className="post__h2">I started by doing almost everything</h2>
        <p>This is the second story in Still Building. The first was about <Link to="/writing/from-cisco-routers-to-ai-agents/">the infrastructure path</Link>. This one is about a question I get from recruiters, engineers and occasionally my own family: after CTO and VP roles, why am I still writing code?</p>
        <p>The honest answer starts with how I learned the job. My early career was network engineering and Linux administration. Then I co-founded a company, and for a long time I was most of its engineering department. In a given week I racked servers, configured routers, administered Linux, wrote the backend, built the front end, kept the billing system honest, wrote C++ for the Nokia app, carried the pager and made product calls with customers on the phone. I have told that story in <Link to="/writing/founding-a-startup-isnt-easy/">being every department at once</Link>.</p>
        <p>What that period gave me was a sense of the whole system, physically. I know what a slow query feels like from the database side, the application side and the customer side, because at one point all three were me. That turned out to be the most useful thing I ever learned for leading engineers, and I did not know it at the time.</p>
      </section>

      <section id="time" aria-labelledby="time-h">
        <h2 id="time-h" className="post__h2">Leadership changes where the hours go</h2>
        <p>As the company grew, my hours moved to hiring and mentoring, architecture decisions written down so they outlived the meeting, and planning that meant saying no to good ideas so the team could finish the important ones. They also went to delivery, which mostly means noticing early that something is slipping, to talking to the board and to customers, to operational responsibility for a platform people depended on, and to business decisions where the technically correct answer was the wrong one. Later, as a VP of Operations and as CTO of a media publisher, the share of my week spent in an editor shrank further.</p>
        <p>A leader who is still the best individual contributor on the team and spends the week proving it is a very expensive engineer and an absent manager. The work that only the leader can do, setting direction, growing people and connecting engineering to the business, does not get done by anyone else.</p>
        <p>I write code alongside leading, in places where it does not sit in my team’s way.</p>
      </section>

      <section id="still-building" aria-labelledby="still-building-h">
        <h2 id="still-building-h" className="post__h2">What I still build</h2>
        <p>Most of what I build now is my own. <Link to="/projects/fedpath/">FedPath</Link> helps small businesses find and evaluate federal contracts. <a href="https://usefullittletools.app">Useful Little Tools</a> is a set of free calculators that doubles as my playground for new techniques. I rebuilt the <Link to="/projects/berkeley-omnium/">Berkeley Omnium site</Link> for the race weekend I help organize. This site is mine too, and I am in the middle of building a job-search agent on Hermes that I am writing up as I go. Yippify is the consulting work, where I am hands-on wherever it takes risk out of the build and stay out of the way where the client’s engineers own it.</p>
        <p>Building my own things is the cleanest arrangement I have found. Nobody waits on my pull request. If I get it wrong, the only person inconvenienced is me. And I get to learn a new framework or a new way of deploying on something real, which is how I learn anything.</p>
      </section>

      <section id="better-leader" aria-labelledby="better-leader-h">
        <h2 id="better-leader-h" className="post__h2">What staying technical buys a leader</h2>
        <p>It makes me a better judge of estimates. When an engineer says a change will take three weeks, I can usually see where the hidden work is: the migration, the edge case in the old data, the test that has to be rewritten. That lets me ask a useful question instead of a skeptical one.</p>
        <p>It keeps architecture tradeoffs honest. I have written <Link to="/writing/hidden-cost-of-software-architecture/">about what every extra service costs</Link>, and I believe it more because I have to run the services I build.</p>
        <p>It keeps developer productivity real. When I set up a pipeline for my own project and the build takes nine minutes, I understand in my body why a team’s velocity is limited by its slowest feedback loop. And it keeps me close to infrastructure costs and security, because on my own projects the bill and the breach would both be mine.</p>
      </section>

      <section id="bottleneck" aria-labelledby="bottleneck-h">
        <h2 id="bottleneck-h" className="post__h2">What it must not turn into</h2>
        <p>There is a failure mode for technical leaders, and I have seen it from both sides. The leader who reviews every line, overrides the team’s design because they would have done it differently, and becomes the single point of failure for every decision. The team learns to wait for approval instead of thinking. Velocity drops, the best engineers leave, and the leader concludes the team needs more supervision.</p>
        <Engaged />
        <p>Staying technical lets me understand the work well enough to support it. Good leaders build an environment where engineers make decisions without them, and step in only where the decision is theirs to make. I think of it the way I think about <Link to="/mentorship/">mentoring</Link>: if the team cannot run without me, I have built a dependency, not a team.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">AI made building fun in a new way</h2>
        <p>The last few years changed how I build, and I have enjoyed it more than I expected. Claude Code and OpenAI’s Codex sit in my terminal, and I describe what I want, read what they propose, and decide. That saves time on the first implementation, which helps when I have limited hours to build. I still spend time reviewing the proposed design and checking what happens when it fails.</p>
        <p>It also brought back an old feeling. Working at a prompt, typing instructions and watching text come back, is how I started on DOS and on router consoles, which I wrote about in <Link to="/writing/talking-to-ai-in-a-terminal/">talking to AI in a terminal</Link>. The difference is that now I speak my own language and the assistant speaks the machine’s.</p>
        <p>The next story in the series is about the part that is not fun: what it takes to make an AI agent reliable once nobody is watching it.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Why I keep building</h2>
      <div className="post__close-copy">
        <p className="lead">I write code because I enjoy building things, learning new tools and understanding the problems my teams solve.</p>
        <p className="post__close-principle">My own projects give me a way to keep learning without putting myself in the way of the team’s delivery.</p>
        <div className="post__close-actions">
          <Link to="/writing/ai-agents-reliable-in-production/" className="action">Part 3: Making AI agents reliable <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
