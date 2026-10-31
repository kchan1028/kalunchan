import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Fundamentals essay, deliberately light on AI (one section). Facts from the
// site: carrier network operations; co-founder/CTO building a VoIP platform
// from scratch; data center to cloud regions migrated region by region;
// WordPress-to-Rails publishing re-platform; restructuring a startup's mobile
// app, network and voice platform; public-service modernization with an API
// facade, one journey at a time, accessibility and security as release gates,
// hand-over to the agency team. Examples of requirements and decision records
// are general practice, not invented incidents. No employers, no years.

export const toc = [
  ['what-it-is', 'What forward engineering is'],
  ['methods', 'Waterfall, Agile, iterative: still forward'],
  ['reverse', 'Forward and reverse engineering'],
  ['changing', 'What is actually changing'],
  ['productive', 'Are we more productive?'],
  ['leadership', 'What it asks of engineering leaders'],
  ['perspective', 'What I have learned'],
];

// Fig. 697-0: the chain and its handoffs.
const chain = ['Business need', 'Requirements', 'Design', 'Code', 'Running system'];
const handoffs = ['A requirement nobody wrote down', 'A decision that lived in one head', 'An assumption the business never agreed to', 'A system nobody owns'];

function Chain() {
  return (
    <figure className="chain post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 697-0</span> Forward engineering is a chain, and it breaks at the handoffs
        <span className="journey__key label">Forward runs left to right. Reverse engineering walks the same chain back, from a running system to the rules it encodes.</span>
      </figcaption>
      <ol className="chain__steps">
        {chain.map((c, i) => (
          <li key={c} className="chain__step">
            <span className="chain__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="chain__name">{c}</span>
            {i < handoffs.length && <span className="chain__gap"><span className="label">Where meaning gets lost</span>{handoffs[i]}</span>}
          </li>
        ))}
      </ol>
      <p className="chain__dirs">
        <span className="chain__dir"><span className="mono">Forward</span> need → requirement → design → code → production</span>
        <span className="chain__dir is-reverse"><span className="mono">Reverse</span> production → behaviour → design → requirements</span>
      </p>
    </figure>
  );
}

const pairs = [
  { f: 'Requirements to design', r: 'Code back to requirements', ex: 'Reading a legacy service to learn which rules the business still depends on' },
  { f: 'Design to code', r: 'Code back to design', ex: 'Drawing the real architecture of a system nobody documented' },
  { f: 'Code to running system', r: 'Running system back to behaviour', ex: 'Watching production traffic to learn what callers actually use' },
  { f: 'Schema to data', r: 'Data back to schema', ex: 'Finding the meaning of a column three teams have used three ways' },
];

function Directions() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 697-1</span> The same layers, travelled in opposite directions</caption>
        <thead><tr><th scope="col">Forward engineering</th><th scope="col">Reverse engineering</th><th scope="col">Where it shows up in a modernization</th></tr></thead>
        <tbody>{pairs.map((p) => <tr key={p.f}><th scope="row">{p.f}</th><td>{p.r}</td><td>{p.ex}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="what-it-is" aria-labelledby="what-it-is-h">
        <h2 id="what-it-is-h" className="post__h2">What forward engineering is</h2>
        <p>Every few years a familiar idea comes back with a new name, and forward engineering is having its turn. When I hear it described as a new way to build software, I smile a little, because I have been doing it my whole career and so has everyone else who has shipped anything.</p>
        <p className="post__answer">Forward engineering is the ordinary direction of software work: from what the business needs, to requirements, to an architecture and design, to code, to a running system. Each step makes the previous one more concrete. It is the opposite of reverse engineering, which starts from an existing system and works backwards to recover its design and the rules it encodes.</p>
        <p>When I co-founded a communications company, forward engineering was the job in its rawest form. A business idea about affordable calls for immigrant families became requirements about rates, balances and resellers. Those became an architecture of signaling, media, business logic and billing. That became servers I racked, a network I configured and code I wrote, and eventually a platform that people depended on. Nobody called it forward engineering. We called it building the thing.</p>
        <p>The term is useful anyway, because naming the direction makes you notice the handoffs. Each arrow in that chain is a place where meaning can be lost: a requirement nobody wrote down, a design decision that lived in one person’s head, an assumption in the code that the business never agreed to. Most of the expensive problems I have seen in software started at one of those arrows.</p>
        <Chain />
      </section>

      <section id="methods" aria-labelledby="methods-h">
        <h2 id="methods-h" className="post__h2">Waterfall, Agile, iterative: still forward</h2>
        <p>People sometimes treat forward engineering as a polite word for waterfall: write all the requirements, then all the design, then all the code, in that order, once. Waterfall is one way to do forward engineering, and usually a bad one for software whose requirements are still being discovered. It is not the definition.</p>
        <p>Agile and iterative development are forward engineering in small slices. A user story is a requirement. The conversation in planning about how to build it is design. The pull request is implementation, and the release is the running system. The difference is that you go around the loop every week or two instead of once a year, and you let what you learn in production change the next requirement. I wrote about why the slices should be small in <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link>; the short version is that a small slice keeps every arrow in the chain short enough to check.</p>
        <p>None of these approaches excludes the others. On the startup, the architecture of the voice platform was decided early and deliberately, because changing how calls were routed and billed later would have been painful, while the reseller dashboard was built in small iterations because we were still learning what resellers needed. That mix is normal. Some decisions are expensive to reverse and deserve design up front. Others are cheap to change and deserve to be discovered. Part of engineering judgment is telling them apart.</p>
      </section>

      <section id="reverse" aria-labelledby="reverse-h">
        <h2 id="reverse-h" className="post__h2">Forward and reverse engineering</h2>
        <p>Most of the forward engineering I have done in the second half of my career started with reverse engineering. A legacy system is a set of requirements nobody wrote down, expressed in code. Before you can rebuild it, you have to read it back out.</p>
        <Directions />
        <p>Consider <Link to="/writing/modernizing-public-sector-applications/">modernizing a public-sector application</Link>, an ageing system people need to keep using. I would first investigate its existing behavior and business rules, then place a routing layer in front of it to support replacing workflows individually, with accessibility and security checks in the release process and infrastructure definitions the receiving team could maintain.</p>
        <p>The same pattern showed up elsewhere. Moving a publishing platform off WordPress onto Ruby on Rails meant first understanding how years of plugins and templates had shaped the content, then designing a structure that kept what readers relied on. Moving the communications platform from one data center to cloud regions meant mapping what depended on what before moving anything, then migrating one region at a time with a way back at every step. In every case the reverse half took longer than people expected, and it was where the risk lived. A migration fails on the behaviour you did not know you had.</p>
        <p>For junior engineers, this is the most useful thing I can say about legacy code: treat it as evidence, not as an embarrassment. Somebody made each of those decisions for a reason. Some reasons are gone, and some are still holding up the business.</p>
      </section>

      <section id="changing" aria-labelledby="changing-h">
        <h2 id="changing-h" className="post__h2">What is actually changing</h2>
        <p>The direction has not changed. The speed of one step has. AI coding tools and specification-driven development compress the arrow from design to code: describe the behaviour precisely, and a working first implementation appears in minutes rather than days. That is real, and I use it.</p>
        <p>What it does not compress is the arrows on either side. Turning a vague business need into a requirement precise enough to build is still a conversation with people. Choosing an architecture that the team can operate, that fails in ways you can reason about and that costs what the business can carry is still judgment. And turning code into a reliable running system is still testing, deployment, monitoring and someone answering the page. Specification-driven development is, at heart, a renewed insistence on the first arrow: if the specification is good, the code follows. If it is vague, you now get vague code faster.</p>
      </section>

      <section id="productive" aria-labelledby="productive-h">
        <h2 id="productive-h" className="post__h2">Are we more productive?</h2>
        <p>Producing code faster is not the same as delivering value faster, and the gap between the two is where teams get hurt. Every line still has to be reviewed, tested, secured, deployed and maintained by someone. If code arrives three times faster and the review process stays the same, review becomes the bottleneck, and the temptation is to skim. If tests are generated alongside the code from the same misunderstanding, they pass and prove nothing. Security review that was sized for a human pace of change falls behind. And maintenance is forever: a codebase that grew twice as fast has twice as much to understand when something breaks at night.</p>
        <p>I think about this the way I think about capacity on a network. Speeding up one link does not speed up the path; it moves the congestion to the next hop. A team that wants real productivity gains has to widen the downstream steps too: smaller changes so review stays meaningful, tests written from the requirement rather than from the implementation, security checks in the pipeline, and a clear owner for every component. I made the same argument about delivery in <Link to="/writing/what-sprint-carryover-is-telling-you/">what sprint carryover is telling you</Link>, where the work that slips is usually work stuck downstream of the part everyone measured.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">What it asks of engineering leaders</h2>
        <p>If implementation gets cheaper, everything around it matters more, and most of that is a leader’s job.</p>
        <p>Clear requirements come first. A vague goal is a risk, and it is cheapest to fix in week one. I want every engineer able to say what problem their work solves and how we will know it worked, which is the practice I describe as <Link to="/leadership/#ambiguity">turning ambiguity into executable work</Link>.</p>
        <p>Architecture decisions belong in writing: the options, the choice, and what we gave up. A decision record is forward engineering’s memory. It is also the thing that makes reverse engineering unnecessary for the next team.</p>
        <p>Accountability needs a name. Every service, pipeline and scheduled job needs someone who owns it, who gets the alert, and who can say why it behaves the way it does.</p>
        <p>Production reliability is the end of the chain and the part the customer sees. Fast delivery of a system that falls over is not delivery. Release gates, monitoring, rollback and a sustainable on-call rotation are part of done, not a phase after it.</p>
      </section>

      <section id="perspective" aria-labelledby="perspective-h">
        <h2 id="perspective-h" className="post__h2">What I have learned</h2>
        <p>I started on carrier networks, where every change was forward engineering with a technician on the phone and no undo button. I built a platform from a business idea to racked servers to working software, and then moved it to the cloud one region at a time. I have re-platformed systems, restructured a startup’s mobile app, network and voice platform, and modernized public services that could not go down. And I have led teams through all of it.</p>
        <p>The work still runs from need to requirement to design to code to production, and it still breaks at the handoffs. What I have come to value most is keeping the whole chain honest: requirements someone agreed to, designs someone wrote down, code someone reviewed, systems someone owns. That has been true with every generation of tools I have used, and I expect it to be true of the next one.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Following a requirement through delivery</h2>
      <div className="post__close-copy">
        <p className="lead">Speed at one step moves the bottleneck to the next. Clear requirements, written decisions, named owners and reliable production are what turn code into delivery.</p>
        <p>I want a team to be able to trace a requirement through those decisions and check it against the running system.</p>
        <div className="post__close-actions">
          <Link to="/writing/modernizing-public-sector-applications/" className="action">Modernizing without a big-bang rewrite <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
