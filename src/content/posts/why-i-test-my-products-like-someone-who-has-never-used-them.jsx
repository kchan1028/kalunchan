import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Testing your own product as someone who has never seen it. Source: KC's brief (Oct 25 2026), edited for
// AGENTS.md: the brief's "isn't X. It's Y" lines and "after years" anchor rewritten. The personas and the
// questions they ask are KC's, from the brief; no user feedback or findings are claimed. FedPath facts come from
// the /projects/fedpath/ case study (GovCon Readiness, known/inferred fit findings, browsing without an account);
// the FedPath article is DEV-only, so it isn't linked. Omnium audience pages (juniors, women's racing, path to
// racing, travel racing) exist on berkeleyomnium.com. Companion to the user-stories post (718).

export const toc = [
  ['forgetting', 'Forgetting what I know'],
  ['too-much', 'Developers know too much'],
  ['who', 'Who I pretend to be'],
  ['fedpath', 'FedPath, for a first-time contractor'],
  ['omnium', 'Berkeley Omnium, for every kind of rider'],
  ['working', 'Working and usable are different tests'],
  ['complexity', 'Why I push back on complexity'],
  ['real-people', 'Walkthroughs come before real users'],
];

// ---------- Fig. 722-1: the people I test as ----------
const testers = [
  ['Someone who has never used the product', 'What it does and where to start', 'A first screen that assumes they already know why they’re there'],
  ['Someone new to the industry', 'What the words mean', 'Jargon in labels, filters and headings'],
  ['A younger user', 'What to press next', 'Technical terms and instructions that need reading twice'],
  ['An experienced user', 'How to finish quickly', 'Extra steps and screens between them and the task'],
  ['A first-time visitor from search', 'Whether this page answers their question', 'A page with no context and no obvious next step'],
];

function Testers() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 722-1</span> The people I test as</caption>
        <thead><tr><th scope="col">Who I pretend to be</th><th scope="col">What they need to work out alone</th><th scope="col">What I watch for</th></tr></thead>
        <tbody>{testers.map(([who, needs, watch]) => <tr key={who}><th scope="row">{who}</th><td>{needs}</td><td>{watch}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">Imagined walkthroughs, not research. They help me find likely problems before real people use the product.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="forgetting" aria-labelledby="forgetting-h">
        <h2 id="forgetting-h" className="post__h2">Forgetting what I know</h2>
        <p>Something I keep relearning from building software is that a feature can make complete sense to the developer and still confuse the person using it. By the time something ships, I know where every button is, what each screen is for and which steps come in which order. Someone opening the product for the first time knows none of that, and nobody is sitting next to them to explain.</p>
        <p>So before I put something in front of real users, I try to use it as someone who has never seen it. Sometimes I go further and imagine I’m seven, or thirteen, or an adult who knows nothing about the subject. Users are smart. What I’m looking for is the knowledge I’ve quietly assumed they already have, because that’s the part I can no longer see.</p>
        <p className="post__answer">The hardest part of testing your own product is forgetting everything you already know about it. Developers understand the terminology, navigation and business rules, so they can’t easily see where a newcomer will get stuck. Walking through the product as specific people with less context, such as a first-time visitor, someone new to the field or a younger user, exposes those assumptions before real usability testing does.</p>
      </section>

      <section id="too-much" aria-labelledby="too-much-h">
        <h2 id="too-much-h" className="post__h2">Developers know too much</h2>
        <p>Familiarity builds up without anyone noticing. After a few weeks on a feature, the internal name for a screen starts to feel like plain English. I stop reading labels and start recognizing them. The workflow feels obvious because I designed it, and the business rules feel natural because I argued about them in planning. None of that context ships with the product.</p>
        <p>Teams make this harder in a perfectly reasonable way. Everyone in the review shares the same vocabulary, so a confusing term never gets challenged. A feature can work perfectly from a technical point of view and still be hard to use, and the people closest to it are often the last ones able to tell.</p>
      </section>

      <section id="who" aria-labelledby="who-h">
        <h2 id="who-h" className="post__h2">Who I pretend to be</h2>
        <p>When I test, I pick a specific person and stay in character for the whole walkthrough. A vague “new user” doesn’t help much, because I end up quietly testing as myself.</p>
        <Testers />
        <p>For each of them I ask the same three things. Can they tell what the product does? Do they know where to start? When they finish one step, do they know what to do next? If the honest answer depends on someone explaining it, I’ve found work to do.</p>
      </section>

      <section id="fedpath" aria-labelledby="fedpath-h">
        <h2 id="fedpath-h" className="post__h2">FedPath, for a first-time contractor</h2>
        <p>FedPath helps small businesses find federal contracts and decide whether they’re worth bidding on. Government contracting has a lot of terminology and some complicated processes. Someone who has done it for a while reads NAICS codes (the industry classifications agencies use), set-asides (contracts reserved for certain kinds of small business), solicitations and compliance requirements without slowing down. A small business owner exploring federal work for the first time probably doesn’t know what most of those terms mean, or which ones matter for them.</p>
        <p>That owner is who I try to be when I test it. Can they find an opportunity that fits their work? Can they tell whether it’s relevant without reading the whole solicitation? Do they know what to do next? Parts of the product are built for exactly that person. The GovCon Readiness check is a five-minute check for businesses deciding whether federal work suits them at all. Fit Analysis labels each finding as known or inferred, so nobody has to guess how far to trust it. And anyone can browse real opportunities before creating an account, which answers a first-time visitor’s real question, whether this is worth their time, before the product asks them for anything. The <Link to="/projects/fedpath/">FedPath case study</Link> shows how those pieces fit together.</p>
      </section>

      <section id="omnium" aria-labelledby="omnium-h">
        <h2 id="omnium-h" className="post__h2">Berkeley Omnium, for every kind of rider</h2>
        <p>The <Link to="/projects/berkeley-omnium/">Berkeley Omnium website</Link> has the same problem with a different vocabulary. Someone who has raced bikes for years understands race categories, licenses, registration and the difference between a road race and a criterium. Someone new to racing may not know where to begin, and may not want to ask.</p>
        <p>So I test the site as a junior racer, a parent, a first-time racer, an experienced racer, a woman deciding whether there’s a race for her, and someone coming from outside the Bay Area. Each arrives with a different question. The experienced racer wants the course, the start time and the registration link, quickly. A parent wants to understand what the day involves for their kid. The first-timer wants to know whether they’re allowed to enter and which category they’d race in. The rider traveling in wants to know how to get there. The site has separate pages for juniors, women’s racing, getting into racing and traveling to race, because one page can’t answer all of those questions well.</p>
        <p>I do the same with smaller projects. A calculator on <Link to="/writing/why-i-build-my-own-developer-tools/">Useful Little Tools</Link> gets a minute of someone’s attention, so if the first field asks for a number they don’t know how to find, the tool has failed them. With internal tools, I picture whoever uses it after me, at a bad moment, without my notes.</p>
      </section>

      <section id="working" aria-labelledby="working-h">
        <h2 id="working-h" className="post__h2">Working and usable are different tests</h2>
        <p className="post__answer">A feature can pass every automated test, meet its acceptance criteria, work exactly as designed and have no obvious bugs, and people can still struggle to use it. Those checks confirm we built what we agreed to build. They don’t tell us whether someone who wasn’t part of those conversations can figure it out.</p>
        <p>I think engineering teams overlook this partly because nothing fails. No test goes red when a label is confusing. The cost shows up later, as support questions, abandoned sign-ups and people who quietly stop coming back.</p>
        <p>This is the other half of <Link to="/writing/why-writing-good-user-stories-is-hard/">why writing good user stories is so hard</Link>. That piece is about how difficult it is for a team to agree on what to build. This one is about what happens when we build exactly what we agreed and it still doesn’t work for the person using it.</p>
      </section>

      <section id="complexity" aria-labelledby="complexity-h">
        <h2 id="complexity-h" className="post__h2">Why I push back on complexity</h2>
        <p>Testing this way is a big part of why I challenge complexity in planning, reviews and design. When a simpler approach reaches the same goal, users understand the product faster, and the team has less to build, test and maintain, so it can ship earlier and hear from real users sooner.</p>
        <p>Simpler still has to do the job. If a contractor needs a compliance matrix, removing it to make a screen look cleaner helps nobody. What I want to cut is the effort and confusion that don’t need to be there: the extra step that exists because it was easy to build, the setting nobody asked for, the label that only makes sense inside the team. I wrote more about that habit in <Link to="/writing/what-engineering-leadership-actually-does/#simpler">what engineering leadership actually does</Link>, and about the architecture version in <Link to="/writing/the-architecture-you-dont-build/">the architecture you don’t build</Link>.</p>
      </section>

      <section id="real-people" aria-labelledby="real-people-h">
        <h2 id="real-people-h" className="post__h2">Walkthroughs come before real users</h2>
        <p>Different people reveal different problems, which is why I don’t test as one generic user. A beginner struggles with terminology. An experienced user gets frustrated by too many steps. A parent can’t find the information that applies to their child. A business owner understands an opportunity and still doesn’t know what action to take. The same product can be a completely different experience depending on who is using it.</p>
        <p className="post__answer">Imagined walkthroughs don’t replace usability testing with real users. When I pretend to be a first-time racer, I’m still guessing, and a real first-time racer will hit things I never thought of. The walkthroughs catch the obvious problems early, while they’re cheap to fix, so that time with real people goes to the problems nobody on the team could predict.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Why I keep testing</h2>
      <div className="post__close-copy">
        <p className="lead">Building software means more than making features work. People have to be able to understand what we built and use it without someone beside them. I don’t always get the design right the first time, and something that seems obvious to me regularly turns out to be confusing to someone else. Whenever I approach a product from a different perspective, I still find something I overlooked.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
