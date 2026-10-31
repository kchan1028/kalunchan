import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Founder story. The company stays unnamed (site privacy rule); years appear on
// this route only (owner-approved, see scripts/audit-seo.py). Stages are undated
// on purpose: only founding, acquisition and the end of the story have known years.

export const toc = [
  ['no-playbook', 'There was no playbook'],
  ['zero-to-one', '0→1: building from nothing'],
  ['customers', 'Who we were building for'],
  ['business', 'When software becomes a business'],
  ['one-to-ten', '1→10: scaling more than software'],
  ['organization', 'The organization is a system'],
  ['delegation', 'Founder to engineering leader'],
  ['technical-debt', 'Technical debt'],
  ['acquisition', 'The acquisition'],
  ['what-changed', 'What those years changed'],
  ['still-build', 'Why I still build'],
  ['starting-today', 'If you’re starting today'],
];

const stages = [
  { title: 'The beginning', year: '2007', text: 'Co-founders, an idea and no playbook. No platform, team or process to inherit.' },
  { title: 'Building the first product', tag: '0→1', text: 'Servers, network and software, built from scratch. Revenue in less than four months.' },
  { title: 'Finding customers', text: 'Learning what the market actually needed, which wasn’t always what we’d built.', loop: 'Back to building, more than once' },
  { title: 'Production', text: 'Software became something people depended on. Reliability became part of the product.', loop: 'Fix, learn, fix again' },
  { title: 'Growth', text: 'Users across three continents. The first data center stopped being enough.', loop: 'Rebuilt: one site to cloud regions' },
  { title: 'Scaling technology and people', tag: '1→10', text: 'Repeatable deploys, clear ownership, and technical debt managed on purpose.' },
  { title: 'Engineering leadership', text: 'Moving from solving problems myself to building teams that solve them.' },
  { title: 'Acquisition', year: '2013', text: '400,000+ users and multimillion-dollar growth. A real result, and not the end.', accent: true },
  { title: 'After the acquisition', text: 'I stayed on board. Customers still needed the platform the next morning.' },
  { title: 'Looking back', year: '2024', text: 'Where my part of the story ends, and where this piece looks back from.' },
];

const buildout = [
  { name: 'founder-empty-rack', step: 'Empty rack', alt: 'An empty rack in a wire-mesh data center cage, with boxed Dell servers stacked behind it and a power strip at its base' },
  { name: 'founder-servers-racked', step: 'Servers racked', alt: 'Rows of Dell PowerEdge servers mounted in open racks inside the cage' },
  { name: 'founder-rack-cabling', step: 'Cabled and running', alt: 'The back of the racks after cabling: bundled red and yellow network cables, blue velcro ties and power cords, with status lights on' },
];

const photo = (name) => ({
  src: `/images/writing/${name}-1280.webp`,
  srcSet: `/images/writing/${name}-640.webp 640w, /images/writing/${name}-1280.webp 1280w`,
});

const phases = [
  {
    name: '0→1',
    title: 'Solve the problem',
    job: 'Find a real problem and ship the smallest thing that solves it.',
    focus: ['Problem discovery', 'Product', 'Architecture', 'Prototype', 'First customers', 'Production'],
    question: 'What’s the simplest thing that solves this without making tomorrow harder?',
    letGo: 'The perfect architecture. There wasn’t time, and we didn’t know enough yet.',
  },
  {
    name: '1→10',
    title: 'Build the system',
    job: 'Build a team and a system that can solve problems repeatedly.',
    focus: ['Reliability', 'Scaling', 'Teams', 'Processes', 'Security', 'Architecture evolution', 'Operational maturity'],
    question: 'Will this still work when I’m not the one doing it?',
    letGo: 'Being the person who knew how everything worked.',
  },
  {
    name: 'Leadership',
    title: 'Build the organization',
    job: 'Create an organization that makes good decisions without waiting for me.',
    focus: ['Direction', 'Ownership', 'Mentorship', 'Prioritization', 'Business alignment', 'Organizational design'],
    question: 'Does the team have the context to make this call without me?',
    letGo: 'Being the default answer to every hard question.',
  },
];

const orgSystem = [
  { property: 'Bottlenecks', software: 'One overloaded database every request waits on.', org: 'One person every decision or review waits on.' },
  { property: 'Dependencies', software: 'Services that can’t ship without each other.', org: 'Teams that can’t ship without each other.' },
  { property: 'Failure modes', software: 'A single point of failure in the architecture.', org: 'The one engineer who knows how billing works.' },
  { property: 'Feedback loops', software: 'Monitoring and alerts that say something is wrong.', org: 'Incidents, retros and delivery data that say the process is wrong.' },
  { property: 'Technical debt', software: 'Shortcuts in the code.', org: 'Undocumented decisions, tribal knowledge, and workarounds that became “how we do it.”' },
];

const outside = ['Idea', 'Growth', 'Acquisition'];
const inside = ['Idea', 'Build', 'Mistake', 'Learn', 'Rebuild', 'Customer', 'Problem', 'Fix', 'Growth', 'Technical debt', 'Improvement', 'Opportunity', 'Uncertainty', 'Keep going'];

function Note({ label, children }) {
  return (
    <div className="post__note" role="note">
      <p className="label">{label}</p>
      <p>{children}</p>
    </div>
  );
}

function Loop() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M13 8a5 5 0 1 1-1.5-3.6M12 1.5v3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function Journey() {
  return (
    <figure className="journey">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 656-1</span> From founding to acquisition and after, by stage
        <span className="journey__key label">Stages, not a schedule. Only the years I can date are dated.</span>
      </figcaption>
      <ol className="journey__list">
        {stages.map((s, i) => (
          <li key={s.title} className={`journey__stage${s.year ? ' is-dated' : ''}${s.accent ? ' is-accent' : ''}`}>
            <span className="journey__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="journey__node" aria-hidden="true" />
            <div className="journey__body">
              <p className="journey__title">
                {s.year && <span className="journey__year mono">{s.year}</span>}
                {s.tag && <span className="journey__tag mono">{s.tag}</span>}
                {s.title}
              </p>
              <p className="journey__text">{s.text}</p>
              {s.loop && <p className="journey__loop label"><Loop /> {s.loop}</p>}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Phases() {
  const [active, setActive] = useState(0);
  const select = (i, focus) => {
    const next = (i + phases.length) % phases.length;
    setActive(next);
    if (focus) document.getElementById(`phase-tab-${next}`)?.focus();
  };
  const onKeyDown = (e) => {
    const moves = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: phases.length - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    select(moves[e.key], true);
  };
  return (
    <figure className="phases">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 656-4</span> How the job changed
        <span className="journey__key label">Select a stage to see where the work went.</span>
      </figcaption>
      <div className="phases__tabs" role="tablist" aria-label="Stages of the job" onKeyDown={onKeyDown}>
        {phases.map((p, i) => (
          <button
            key={p.name}
            id={`phase-tab-${i}`}
            type="button"
            role="tab"
            className="phases__tab"
            aria-selected={i === active}
            aria-controls={`phase-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
          >
            <span className="phases__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="phases__name">{p.name}</span>
            <span className="phases__title">{p.title}</span>
            <span className="phases__job">{p.job}</span>
          </button>
        ))}
      </div>
      {phases.map((p, i) => (
        <div
          key={p.name}
          id={`phase-panel-${i}`}
          className="phases__panel"
          role="tabpanel"
          aria-labelledby={`phase-tab-${i}`}
          hidden={i !== active}
        >
          <div>
            <p className="label">Where the work went</p>
            <ul className="ticks phases__focus">
              {p.focus.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div>
            <p className="label">The question I kept asking</p>
            <p className="phases__question">“{p.question}”</p>
            <p className="label">What I had to let go of</p>
            <p>{p.letGo}</p>
          </div>
        </div>
      ))}
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="no-playbook" aria-labelledby="no-playbook-h">
        <h2 id="no-playbook-h" className="post__h2">There was no playbook</h2>
        <p>In 2007 I co-founded a company with an idea and not much else. There was no engineering organization to join, no platform to inherit, no team waiting for direction, and no playbook for what came next. We had to figure most of it out as we went.</p>
        <p>The company built a global communications platform: VoIP and cloud telecom services for underserved and underbanked communities, including many immigrants who were often poorly served by traditional financial systems. Some customers used the service directly. Others reached it through local businesses that resold it in their own communities and ran on our hosted platform.</p>
        <p>I was a co-founder and the CTO. The platform grew past 400,000 users across South America, Asia and Africa, handled millions of dollars in transactions, and grew revenue to multimillion-dollar levels. In 2013 the company was acquired. I stayed on board after the deal closed, and my part of the story ran until 2024.</p>
        <p>I came into it from networks, not startups. I’d kept a nationwide carrier network running and then run operations for a voice service. I knew a lot about how networks fail. I knew much less about building a company, hiring a team, or deciding which problems were worth solving first.</p>
        <p>From the outside, the story fits on one line: idea, growth, acquisition. What I want to write down is what that line leaves out: a long run of decisions made with incomplete information, some of them wrong, and a slow change in what my job was.</p>
        <Journey />
      </section>

      <section id="zero-to-one" aria-labelledby="zero-to-one-h">
        <h2 id="zero-to-one-h" className="post__h2">0→1: Building something from nothing</h2>
        <h3 className="post__h3">What does 0→1 mean in startup engineering?</h3>
        <p className="post__answer">In startup engineering, 0→1 is the stage where nothing exists yet: no product, no customers and no proof that anyone wants what you’re building. The job is to find a real problem, ship the smallest thing that solves it, and make good decisions with incomplete information.</p>
        <p>At that stage, titles don’t mean much. I was the CTO on paper. In practice, in a given week I might be doing product management, writing the web application, building the voice network, racking and cabling servers in the data center, working on marketing and SEO, and answering a customer who couldn’t connect.</p>
        <p>We built everything from scratch, from racking servers and building the network to writing the software, and we were bringing in revenue in less than four months.</p>
        <figure className="post__photos">
          <ol>
            {buildout.map((b, i) => (
              <li key={b.name}>
                <img {...photo(b.name)} sizes="(max-width: 599px) 92vw, (max-width: 899px) 30vw, 280px" width="1280" height="1707" loading="lazy" decoding="async" alt={b.alt} />
                <span className="label"><span className="mono">{String(i + 1).padStart(2, '0')}</span> {b.step}</span>
              </li>
            ))}
          </ol>
          <figcaption><span className="mono">Fig. 656-2</span> Building it ourselves: an empty rack with the servers still in their boxes, the servers racked, then the back of the racks cabled and running.</figcaption>
        </figure>
        <p>All of it is yours at once, and nobody hands you a priority list. You decide what gets your attention today, knowing the rest will still be there tomorrow.</p>

        <h3 className="post__h3">Start with the problem, not the architecture</h3>
        <p>My instinct as an engineer was to start with the system: how it should be structured, how it would scale, what it should be built on. Those questions matter. They just aren’t the first questions. Early on, I didn’t know which parts of the product would matter, which customers would stay, or what they’d use it for. An architecture designed before you know those things is mostly a guess with a diagram attached.</p>
        <p>The more useful question was simpler: what problem does this person have, and what’s the smallest thing we can build that solves it?</p>

        <h3 className="post__h3">Fast, or able to change?</h3>
        <p>Every early decision sits on a tension between building quickly and building something that can evolve. Build too slowly and you run out of money or time before you learn anything. Build carelessly and the thing you learned from becomes the thing you can’t change.</p>
        <p className="post__pull">What is the simplest architecture that solves today’s problem without making tomorrow unnecessarily difficult?</p>
        <p>I didn’t always answer that well. Some things I built more elaborately than the stage called for, and some I built so quickly that we were paying for them long after. But asking the question every time was better than defaulting to either extreme.</p>
        <p>The first data center is a good example of when it worked. We planned it deliberately and kept the tiers clean: web, application and data as separate layers. That wasn’t because we expected to leave. Clean layers were cheap to build and easy to reason about. Later, when we did move to cloud regions on three continents, those tiers moved as units. The care we took early is what made the later change possible.</p>
      </section>

      <section id="customers" aria-labelledby="customers-h">
        <h2 id="customers-h" className="post__h2">Building for people the system wasn’t designed for</h2>
        <p>Our customers changed how I think about product engineering more than any architecture decision did.</p>
        <p>Many of them were immigrants. Many were underbanked. A lot of them dealt with money, identity and technology differently from the people who usually design software, me included. It’s easy, as an engineer, to assume every user has a credit card, a bank account, a stable address, a name that fits neatly into first-name and last-name fields, fluent English, and a fast connection on a recent device. None of those were safe assumptions for us.</p>
        <p>Assumptions like that are rarely decided on purpose. They creep into a signup form, a payment flow, a fraud rule or a support script because that’s how the people building it live. Then they turn real customers away, and nobody notices, because the customers who were turned away aren’t in the data.</p>
        <p>The reseller channel added a second kind of customer: businesses that sold our service in their own communities and ran on our hosted platform. They needed tools to run their own business, and they needed the platform to keep working for customers who trusted them, not us. Building for both at once taught me that “the user” is rarely one person.</p>
        <p className="post__pull">Build for the person using the system, not for the engineers building it.</p>
        <p>In practice that means questioning defaults you didn’t know you had, and paying more attention to what customers actually do than to what you assumed they would do.</p>
      </section>

      <section id="business" aria-labelledby="business-h">
        <h2 id="business-h" className="post__h2">When software becomes a business</h2>
        <p>There’s a point where software stops being a project and becomes something people depend on. Nobody announces it. You notice because the questions change. Before that point I mostly asked whether something worked. After it, the questions looked like this:</p>
        <dl className="post__terms">
          <div><dt>Reliability</dt><dd>What happens when this fails, and who notices first?</dd></div>
          <div><dt>Security</dt><dd>Who could misuse this, and what would it cost the customer?</dd></div>
          <div><dt>Data integrity</dt><dd>Can we prove every transaction is right?</dd></div>
          <div><dt>Deployments</dt><dd>Can we ship this without taking anything down?</dd></div>
          <div><dt>Monitoring</dt><dd>Will we know before the customer tells us?</dd></div>
          <div><dt>Performance</dt><dd>Does it hold up for a user on the other side of an ocean?</dd></div>
          <div><dt>Operations</dt><dd>Who handles it at night, and do they have what they need?</dd></div>
          <div><dt>Customer support</dt><dd>Can support explain what happened, in the customer’s terms?</dd></div>
          <div><dt>Production incidents</dt><dd>When it breaks, do we learn something, or just fix it?</dd></div>
        </dl>
        <p>Reliability becomes part of the product. When software handles real transactions for people who may not have much margin, a bug isn’t an engineering inconvenience. A failed payment or a wrong balance is someone’s money. A dropped call is a conversation that didn’t happen.</p>
        <p>Voice made that sharper. Real-time traffic can’t hide behind a cache, and our users were spread across South America, Asia and Africa. Every session from the far side of an ocean paid for the distance in latency and call quality. Users feel geography before they notice any new feature.</p>
        <p>That pushed one of the biggest technical decisions we made: leaving the single data center we’d planned so carefully, and running the full application in cloud regions on three continents, with each user routed to the nearest one. A small engineering team that also owned operations did it with no downtime window, because users were active in every time zone. I’ve written up <Link to="/work/three-continent-platform/">that move from one data center to three continents</Link> as a case study.</p>
        <p>My years in network operations helped here. Most outages aren’t dramatic. They’re a full disk, an expired certificate, a config change nobody reviewed, or a dependency that got slow. What I had to learn was how to build that knowledge into the system and the team, instead of keeping it in my head.</p>
        <figure className="post__photo">
          <img {...photo('founder-router-and-servers')} sizes="(max-width: 599px) 92vw, 416px" width="1280" height="1707" loading="lazy" decoding="async" alt="Racks of Dell and HP servers with a Cisco 7604 router, a laptop resting on top and a monitor on a lower shelf" />
          <figcaption><span className="mono">Fig. 656-3</span> Servers and a Cisco 7604 router in racks we built and ran ourselves.</figcaption>
        </figure>
      </section>

      <section id="one-to-ten" aria-labelledby="one-to-ten-h">
        <h2 id="one-to-ten-h" className="post__h2">1→10: Scaling more than software</h2>
        <h3 className="post__h3">What changes when a startup goes from 0→1 to 1→10?</h3>
        <p className="post__answer">At 0→1 the job is to solve the problem. At 1→10 the job is to build a team and a system that can solve problems repeatedly, without a founder in every decision. Processes, ownership, deployments, architecture and technical debt all have to become deliberate.</p>
        <p>The things that got us to our first customers started to break as we grew, one at a time and usually under load.</p>
        <ul className="post__list">
          <li>Early processes stopped working. What a small team could coordinate by talking had to be written down once the team outgrew a single conversation.</li>
          <li>Knowledge couldn’t stay in people’s heads, including mine. Every system only one person understood was an outage waiting for that person’s vacation.</li>
          <li>Deployments had to become repeatable. A release that depended on someone remembering the right steps would eventually go wrong.</li>
          <li>Ownership had to become clear. “Everyone owns it” turned out to mean nobody did.</li>
          <li>The architecture had to evolve while the business kept running on it.</li>
          <li>Technical debt needed managing, not just accumulating.</li>
          <li>Communication had to scale, between engineers and between engineering and everyone else.</li>
        </ul>
        <p>Underneath all of that, my job changed.</p>
        <dl className="post__contrast">
          <div><dt className="label">0→1</dt><dd>Solve the problem.</dd></div>
          <div><dt className="label">1→10</dt><dd>Build a team and a system capable of repeatedly solving problems.</dd></div>
        </dl>
        <p>The second job is harder, and much less visible. When you solve a problem yourself, you can point at it. When you build a team that solves problems, the evidence is that things keep working when you aren’t in the room.</p>
        <Phases />
        <Note label="What changed">I stopped measuring my week by what I built and started measuring it by what the team could do that it couldn’t do before.</Note>
      </section>

      <section id="organization" aria-labelledby="organization-h">
        <h2 id="organization-h" className="post__h2">Engineering organizations are systems too</h2>
        <p>As the team grew, more of my time went to things that never show up in the codebase: team structure, hiring, mentorship, ownership, how architecture decisions got made, documentation, code review, deployment processes, engineering standards, communication, and how engineering worked with the rest of the company.</p>
        <p>I treated those as overhead for longer than I should have. An engineering organization is a system too, with the same properties as the software it builds.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 656-5</span> The same failure, in the software and in the organization
            </caption>
            <thead>
              <tr>
                <th scope="col">Property</th>
                <th scope="col">In the software</th>
                <th scope="col">In the organization</th>
              </tr>
            </thead>
            <tbody>
              {orgSystem.map((r) => (
                <tr key={r.property}>
                  <th scope="row">{r.property}</th>
                  <td data-label="In the software">{r.software}</td>
                  <td data-label="In the organization">{r.org}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
        <p>A strong engineering leader has to be able to debug the organization the same way they’d debug the software: look at the symptoms, form a hypothesis, find the real constraint, change one thing, and watch what happens. When delivery slows down, the cause is rarely where it first appears. It’s often a review queue, an unclear owner, or a test suite nobody trusts. I’ve written about reading one of those signals in <Link to="/writing/what-sprint-carryover-is-telling-you/">what sprint carryover is actually telling a team</Link>.</p>
        <p>Decisions are part of the system too. The ones that outlive the meeting where they were made need to be <Link to="/leadership/#decisions">written down with the options and the tradeoff</Link>, or the next person to touch that part of the system has to rediscover the reasoning from scratch.</p>
        <Note label="Leadership lesson">Most organizational problems look like people problems at first. Many turn out to be system problems: unclear ownership, missing context, or one person everything routes through.</Note>
      </section>

      <section id="delegation" aria-labelledby="delegation-h">
        <h2 id="delegation-h" className="post__h2">From technical founder to engineering leader</h2>
        <h3 className="post__h3">How does a technical founder become an engineering leader?</h3>
        <p className="post__answer">A technical founder becomes an engineering leader by moving from solving problems personally to making sure other people can solve them well: giving engineers the problem, the context, the constraints and real ownership, and getting out of the way of the decisions they can make.</p>
        <p>This was the hardest transition for me, and I didn’t make it cleanly.</p>
        <p>When you built the first version of something, you know where everything is. You can often fix a problem faster than you can explain it. That’s true, and it’s a trap. Every time I solved something myself because it was quicker, the team learned that hard problems came back to me. I became the bottleneck I would have flagged in anyone else’s system.</p>
        <p>Being capable of solving a problem doesn’t mean the leader should be the one solving it. The change showed up in how I handed work over:</p>
        <dl className="post__contrast">
          <div className="is-before"><dt className="label">Before</dt><dd>“Here’s exactly how I would implement this.”</dd></div>
          <div><dt className="label">After</dt><dd>“Here’s the problem, the context, the constraints, and why it matters. What do you think?”</dd></div>
        </dl>
        <p>The first version gets a task done. The second gets a better answer more often than I expected, because the engineer closest to the work often sees something I don’t. It also builds someone who can handle the next problem without me.</p>
        <p>Context is the part leaders skip. An engineer who knows why something matters, what it connects to and what we can’t compromise on will make good decisions I wouldn’t have thought to ask for. An engineer who only has the task will do exactly the task.</p>
        <p>What I wanted was an organization that makes good decisions without the leader becoming the bottleneck. That idea became the center of <Link to="/mentorship/">how I mentor engineers</Link>: every step moves a decision from me to them.</p>
        <Note label="Looking back">I held on to some decisions longer than I should have. That cost us speed, and it cost the engineers who didn’t get the chance to grow into them.</Note>
      </section>

      <section id="technical-debt" aria-labelledby="technical-debt-h">
        <h2 id="technical-debt-h" className="post__h2">How should startups think about technical debt?</h2>
        <p className="post__answer">Technical debt isn’t automatically bad. Some comes from poor engineering, and some comes from rational business decisions made with limited time, money, people or information. Treat it as an investment decision: pay down the debt that costs you speed, reliability or security, and leave the rest.</p>
        <p>A startup with no technical debt probably shipped too slowly. Some of our debt is what kept us going: things built quickly because a customer needed them now, or because we couldn’t yet afford to build them properly. Most of those were the right calls at the time.</p>
        <p>Some of our debt was just mistakes: shortcuts that weren’t buying anything, or designs that weren’t thought through. That kind is worth being honest about, because pretending all debt was strategic is how a team stops learning from it.</p>
        <p>So I stopped asking whether we had technical debt. We always did. The better questions were:</p>
        <ol className="post__steps">
          <li>What is it costing us?</li>
          <li>What risk does it create?</li>
          <li>Is it slowing development?</li>
          <li>Is it affecting reliability?</li>
          <li>Is it affecting security?</li>
          <li>What is the opportunity cost of fixing it now?</li>
        </ol>
        <p>The last question is the one engineers tend to skip. Every week spent on a rewrite is a week not spent on something a customer asked for. Sometimes the rewrite is still right. But it has to compete with everything else on the same terms: what it costs, what it returns, and what happens if we wait.</p>
        <p>Framed that way, technical debt stops being an argument between engineers who want to clean things up and a business that wants features. It becomes an investment decision both sides can reason about. I still run it that way: <Link to="/leadership/#debt">capacity set aside every cycle, spent where debt blocks the roadmap</Link>.</p>
        <Note label="Decision">Pay down debt on hot paths, risky deploys and security boundaries first. Let cosmetic debt wait, and write down why.</Note>
      </section>

      <section id="acquisition" aria-labelledby="acquisition-h">
        <h2 id="acquisition-h" className="post__h2">The acquisition</h2>
        <p>In 2013, the company was acquired.</p>
        <p>I’m proud of that. It was real validation that what we built had value to someone else, and it mattered to the people who had bet on us. But it wasn’t a destination we were always heading for. For most of those years the acquisition was one possible outcome among many, and several of the others were much worse.</p>
        <p>From the outside, startup stories tend to look like the first line below. From the inside, they look like the second.</p>
        <figure className="paths">
          <figcaption className="journey__cap">
            <span className="mono">Fig. 656-6</span> The same company, seen from two places
          </figcaption>
          <div className="paths__row">
            <p className="label">From the outside</p>
            <ol className="paths__seq paths__seq--outside">
              {outside.map((w) => <li key={w}>{w}</li>)}
            </ol>
          </div>
          <div className="paths__row">
            <p className="label">From the inside</p>
            <ol className="paths__seq">
              {inside.map((w, i) => <li key={`${w}${i}`}>{w}</li>)}
            </ol>
          </div>
        </figure>
        <p>Most days the outcome was far away, and the next problem was right in front of us.</p>
        <p>I stayed on board after the deal closed. An acquisition changes who owns a company. It doesn’t change what customers need from the platform the next morning.</p>
      </section>

      <section id="what-changed" aria-labelledby="what-changed-h">
        <h2 id="what-changed-h" className="post__h2">What those years changed</h2>
        <p>I started out thinking like an engineer. The questions I cared about were technical: is it correct, is it fast, is it well designed?</p>
        <p>Over time I learned to think about the larger system the software lives inside:</p>
        <ul className="post__many">
          {['Technology', 'People', 'Customers', 'Operations', 'Money', 'Risk', 'Timing', 'Execution'].map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p>Any one of those can sink a company that gets the others right. Three ideas from those years have stayed with me more than any technical lesson:</p>
        <ol className="post__tenets">
          <li>A technically correct decision can still be the wrong business decision.</li>
          <li>Before investing in a more elaborate design, check whether the product solves a problem customers have.</li>
          <li>Engineering leadership is about repeatedly turning difficult problems into useful outcomes.</li>
        </ol>
        <p>The first took me longest to accept. Being right about the technology and being right about the business are separate questions, and the second one usually decides what happens.</p>
      </section>

      <section id="still-build" aria-labelledby="still-build-h">
        <h2 id="still-build-h" className="post__h2">Why I still build</h2>
        <p>Since then I’ve led technology for a media publishing platform, and today I lead architecture and delivery work for government, startup and founder clients through Yippify. I still write software. I build my own products too: <a href="https://getvelowise.com">VeloWise</a> for delivery analytics, <a href="https://getsurgeiq.com">SurgeIQ</a> for cycling stats and workouts, <a href="https://usefullittletools.app">Useful Little Tools</a> for everyday calculators, and <Link to="/projects/fedpath/">FedPath</Link> for small businesses chasing federal contracts.</p>
        <p>Lately most of my experimenting is AI engineering: working with LLMs, retrieval-augmented generation (RAG), agents and the Model Context Protocol (MCP), alongside cloud platforms, modern application architecture and developer tooling.</p>
        <p>I don’t do it to be the team’s primary coder. An engineering executive doesn’t need to personally implement every production feature, and a leader who tries usually becomes the bottleneck I described above.</p>
        <p>I stay hands-on for a narrower reason: to understand new technology well enough to judge it. Whether it’s useful or just new, what its risks are, what it will cost to run and own, and which questions to ask the team that will build with it. You can’t evaluate an AI feature’s failure modes from a slide, and some of the most useful conclusions are about where not to use it.</p>
        <p>It’s the same point I made in <Link to="/writing/you-dont-need-to-remember-everything/">You Don’t Need to Remember Everything to Be a Good Software Engineer</Link>: the job is judgment, and judgment needs enough first-hand understanding to be worth anything. You can see what I’m building now on the <Link to="/projects/">projects page</Link>.</p>
      </section>

      <section id="starting-today" aria-labelledby="starting-today-h">
        <h2 id="starting-today-h" className="post__h2">What I’d tell someone starting today</h2>
        <p>If you’re building something from nothing, this is what I’d tell you, mostly because I learned it the slow way:</p>
        <ol className="post__steps">
          <li>Find a real problem. Ideally one you can describe without mentioning your solution.</li>
          <li>Talk to customers, before you build and constantly after.</li>
          <li>Build the smallest useful version.</li>
          <li>Get it into people’s hands.</li>
          <li>Observe what they actually do, not what they say they’ll do.</li>
          <li>Use what you learn to change the product, then check the result again.</li>
        </ol>
        <p>As usage grows, invest deliberately in architecture, reliability, security, automation, people and process. Not all at once, and not before you need them. Don’t prematurely optimize for a scale you may never reach.</p>
        <p>But learn to recognize when yesterday’s solution is becoming tomorrow’s bottleneck. It rarely announces itself. It shows up as slower releases, more incidents, more questions routed to one person, and a team that’s busier without shipping more. That’s when to invest.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What I took from it</h2>
      <div className="post__close-copy">
        <p className="lead">As the company grew, my responsibility expanded from making the product work to helping other people build, operate and improve it.</p>
        <p className="post__close-principle">That meant giving them enough context and ownership to make decisions without waiting for me.</p>
        <p>If you’re at 0→1, or somewhere between 1 and 10 and watching the old ways break, I’m happy to compare notes.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk about building or scaling a team <ArrowRight /></Link>
          <Link to="/experience/#communications" className="link-arrow"><span>The co-founder and CTO role, in detail</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
