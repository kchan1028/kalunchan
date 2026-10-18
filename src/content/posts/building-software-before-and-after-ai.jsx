import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Reflection on building a startup by hand versus building with AI assistance
// today. Facts come from KC directly (friends-and-family funding, racking the
// hardware, the open-source VoIP stack, the in-house billing system, routing,
// the data-center-to-cloud move) and from the projects already on this site.
// The company stays unnamed, no years appear in visible text, and no incident
// or number is claimed that KC hasn't supplied.

export const toc = [
  ['everything-myself', 'Everything myself'],
  ['the-stack', 'What the platform was made of'],
  ['failure', 'Where it failed'],
  ['today', 'How I build now'],
  ['hasnt-changed', 'What hasn’t changed'],
  ['still-building', 'Why I still build'],
];

export default function Body() {
  return (
    <>
      <section id="everything-myself" aria-labelledby="everything-myself-h">
        <h2 id="everything-myself-h" className="post__h2">When I had to build everything myself</h2>
        <p>When I started my first company, I did almost everything myself. We had raised our first money from friends and family and bootstrapped the rest, so there was rarely anyone else to hand a problem to.</p>
        <p>In a given week I’d be in a data center with a field technician, racking servers, routers and switches and running cable. Then I’d configure the network gear, get circuits turned up with the service providers, and install Linux on the boxes I had just racked. Then I’d go home and write the software that was supposed to run on them: the backend, the front end, the database, the user interface, and the billing system that decided what a call cost. When something broke in production, the pager, the logs and the code in the logs all belonged to me. Somewhere in there I was also the product manager, which mostly meant talking to customers and learning that what they needed was not what I had assumed.</p>
        <p>I’ve written about <Link to="/writing/founding-a-startup-isnt-easy/">being every department at once</Link>, so I won’t repeat the whole org chart here. The short version is that I learned whatever the business needed that week. This post is about what that work was made of, and how different the same work looks today.</p>
      </section>

      <section id="the-stack" aria-labelledby="the-stack-h">
        <h2 id="the-stack-h" className="post__h2">What the platform was made of</h2>
        <p className="post__answer">The platform was built on open-source VoIP. Asterisk handled the calls and the voice applications. OpenSIPS handled SIP signaling, registration and the routing logic in front of Asterisk. MediaProxy relayed audio for users behind NAT routers. The business logic lived in Python, called from Asterisk through AGI, and it talked to a billing system I wrote myself because nothing off the shelf priced calls the way we needed.</p>
        <p>Routing was where engineering met the spreadsheet. Least-cost routing meant choosing, per call, the cheapest carrier that could still deliver acceptable quality, and the two rarely agreed. Geolocation routing meant sending a user to the nearest region so a call didn’t cross an ocean twice. Both decisions affected call quality and the margin on each call.</p>
        <p>The mobile apps sat on top of the same stack. We wrote them in C++ for Nokia phones first, then for iPhone and Android, and to the platform each one was another SIP endpoint. That chapter has <Link to="/writing/voip-apps-for-nokia-phones-before-the-iphone/">its own story</Link>.</p>
        <p>Underneath all of it was a data center I had cabled by hand, and later a move into early cloud infrastructure, mostly to lower our cost structure and put servers closer to users on three continents. The migration had to happen with customers on the phone, so it happened one region at a time, with a way back at every step. I describe that move in the <Link to="/work/three-continent-platform/">case study on going from one data center to three continents</Link>.</p>
      </section>

      <section id="failure" aria-labelledby="failure-h">
        <h2 id="failure-h" className="post__h2">Where it failed, and what that taught me</h2>
        <p>None of those pieces failed in a tidy way. A single call crossed all of them. Signaling could succeed while the audio went nowhere. The routing engine could pick a carrier that answered quickly and billed badly. A careless retry could run the billing logic twice for one call. Each of those was a distributed systems problem, and I was solving them before I knew the term. The <Link to="/writing/open-source-voip-distributed-systems-lessons/">VoIP platform’s distributed systems lessons</Link> have their own post.</p>
        <p>Operations taught the rest. A hard drive that fails in a cabinet forty minutes away doesn’t have a retry button. A carrier that degrades at two in the morning doesn’t open a pull request. You learn to design for the failure you haven’t seen yet, to keep state somewhere you can reconcile later, and to know which layer a problem lives in before you touch anything. Most of what I believe about architecture, reliability and running systems started in that building.</p>
      </section>

      <section id="today" aria-labelledby="today-h">
        <h2 id="today-h" className="post__h2">How I build now</h2>
        <p>These days, when I have an idea, I open a terminal and start a conversation.</p>
        <p className="post__answer">I use AI-assisted development for most of the work I used to do by hand: exploring an idea before committing to it, sketching the design, generating a first implementation, writing tests, reviewing code, researching a library I haven’t used, troubleshooting, writing documentation, and scripting deployments. The assistant does the first pass. I read every line.</p>
        <p><Link to="/projects/fedpath/">FedPath</Link>, which helps small businesses find and evaluate federal contracts, went from an idea to a working product far faster than I could have managed alone. <Link to="/writing/why-i-build-my-own-developer-tools/">Useful Little Tools</Link> is a collection of small browser tools built the same way, for the things I kept searching for. The <Link to="/projects/berkeley-omnium/">Berkeley Omnium site</Link> and the Berkeley Bicycle Club site were built with an assistant in the loop, and so was the site you’re reading. None of these needed a rack, and none needed a drive to a data center.</p>
        <p>On <Link to="/experience/#yippify">Yippify</Link> client work the gain is different. The code still has to meet security and accessibility requirements, and it still goes through review, tests and a pipeline before it reaches production. The assistant drafts the migration, the test and the infrastructure module. A person still owns what ships.</p>
        <p>What surprised me is how much of the old job this replaces. It handles the first hour of research, the boring parts of setup, and the scaffolding I used to type from memory. Some of what it writes is wrong in ways that look right, and the reason I catch it is that I’ve been bitten by the real version before.</p>
      </section>

      <section id="hasnt-changed" aria-labelledby="hasnt-changed-h">
        <h2 id="hasnt-changed-h" className="post__h2">What hasn’t changed</h2>
        <p className="post__answer">The difficult decisions usually concerned which problem was worth solving, what the solution had to survive, and which trade-offs the business could afford. Once people depended on it, keeping it running was a substantial part of the work. AI helps with implementation, but I still have to understand those decisions.</p>
        <p>Speed doesn’t improve the decision. The assistant generates code quickly, and whether the code makes sense is a separate question that is still mine to answer. That is why I care about <Link to="/writing/engineering-work-nobody-needed/">not building work nobody needed</Link>.</p>
        <p>Experience shows up as earlier recognition. Years of troubleshooting production systems, running infrastructure and leading teams mean I see the retry without an idempotency key, or the schema that will hurt at ten times the data, before the code runs. The assistant will happily write both. I’ve learned to ask it why not, and to check its answer.</p>
        <p>Finding customers still takes work. I need to understand which problems they will pay to solve and whether they will keep using the product. AI helps me test an implementation sooner, but it does not answer those questions for me.</p>
        <p>Learning is still the job. I learned Asterisk from mailing lists and SIP from packet captures. Now I learn by reading what the assistant wrote and checking it against what I know. AI is a big shift, and I’ve worked through several before it. Adapting to the next tool is nothing new. It is most of what the career has been.</p>
      </section>

      <section id="still-building" aria-labelledby="still-building-h">
        <h2 id="still-building-h" className="post__h2">Why I still build</h2>
        <p>I moved into engineering leadership a long time ago, and I still write code. What changed is where the time goes: less on scaffolding, more on the idea, the design, and finding out quickly whether anyone wants the thing. That was the part I liked in the first place. The rack, the cables and the late-night pages were the price of admission.</p>
        <p>AI lowered that price. The reason I keep paying it is the same as it was when I unpacked the first server. There is a problem, I can see a way to solve it, and I want to find out whether I’m right.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Where I spend my time now</h2>
      <div className="post__close-copy">
        <p className="lead">I can get a first version working much sooner now. Before I rely on it, I still need to check the failure cases and find out whether it solves a problem someone cares enough about to use it.</p>
        <p className="post__close-principle">The help lets me try more ideas. I still own the decision to ship and the consequences once someone uses what I built.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/writing/building-a-startup-from-idea-to-acquisition/" className="link-arrow"><span>Read the full founder story</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
