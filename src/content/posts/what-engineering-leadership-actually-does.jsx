import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// What an engineering leader does all day, told as how KC's measure of a productive day changed. Source: KC's brief
// (Oct 2026), including the pushback on unnecessary UX/UI complexity as his real approach (no specific project,
// conversation or metric). Career facts from profile.md: co-founded company's global team of 30+ engineers, VoIP
// specialists and designers; VP of Operations rebuilt the engineering team; media publishing CTO worked with the CEO
// on business and operations; public-sector client work. Bottleneck story already told in the founder post
// (#delegation) and mentoring post, so this post links to them instead of retelling. No incidents invented.

export const metadata = {
  slug: 'what-engineering-leadership-actually-does',
  title: 'What Does Engineering Leadership Actually Do All Day?',
  shortTitle: 'What engineering leadership does',
  seoTitle: 'What Does Engineering Leadership Actually Do All Day?',
  description:
    'What does an engineering leader actually do all day? My experience moving from writing code to leading teams, simplifying decisions, and balancing engineering with business needs.',
  teaser:
    'How my idea of a productive day changed from engineer to founder, CTO and engineering leader, why I push back on unnecessary UX complexity, and the parts of the job I’m still learning.',
  dek:
    'Earlier in my career I measured a day by what I built. Leading engineering teams changed that. Much of my work now is deciding what is worth building, keeping it simple enough to ship, and making sure the team doesn’t need me for every answer.',
  summary:
    'Measuring productivity by personal output and why that stopped working as a founder and CTO; becoming the bottleneck; questioning whether to build something at all; pushing back on unnecessary UX and UI complexity and what it costs users, developers, QA and the business; where simplifying goes too far; implementing a solution versus being accountable for the outcome; removing obstacles and developing people who can replace me; explaining technical problems in business terms; the invisible work of preventing problems; balancing today against tomorrow; and the difficult decisions I’m still learning to make.',
  topics: ['Leadership', 'Engineering judgment', 'Delivery'],
  related: [
    { to: '/writing/why-i-still-write-code/', label: 'Why I still write code as an engineering leader' },
    { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/the-architecture-you-dont-build/', label: 'The architecture you don’t build' },
    { to: '/leadership/', label: 'How I run engineering' },
    { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
  ],
  minutes: 10,
  keywords: [
    'what does an engineering leader do',
    'engineering leadership',
    'engineering manager responsibilities',
    'from engineer to engineering leader',
    'technical founder to CTO',
    'UX complexity and engineering',
    'simplifying product design',
    'engineering tradeoffs',
    'avoiding being a bottleneck as a leader',
    'communicating technical risk to the business',
  ],
  about: [
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
    { '@type': 'Thing', name: 'Leadership', sameAs: 'https://en.wikipedia.org/wiki/Leadership' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'User experience design', sameAs: 'https://en.wikipedia.org/wiki/User_experience_design' },
    { '@type': 'Thing', name: 'Usability', sameAs: 'https://en.wikipedia.org/wiki/Usability' },
    { '@type': 'Thing', name: 'Software quality assurance', sameAs: 'https://en.wikipedia.org/wiki/Software_quality_assurance' },
    { '@type': 'Thing', name: 'Acceptance testing', sameAs: 'https://en.wikipedia.org/wiki/Acceptance_testing' },
    { '@type': 'Thing', name: 'Mentorship', sameAs: 'https://en.wikipedia.org/wiki/Mentorship' },
  ],
  faq: [
    {
      q: 'What does an engineering leader actually do all day?',
      a: 'In my experience, most of the day goes to decisions and the people making them: deciding what to build and what not to, weighing delivery against reliability, security and cost, clearing obstacles, developing engineers, and explaining technical risk in terms the business can act on. Writing code becomes a smaller share of the job.',
    },
    {
      q: 'Why should engineering leaders push back on UX complexity?',
      a: 'Unnecessary complexity costs everyone at once. Users have more to learn, developers have more screens, states and conditions to build and maintain, QA has more scenarios to test, and the business waits longer for feedback and carries more release risk. The aim is to remove complexity the user’s problem doesn’t need while keeping essential functionality, accessibility, security and usability.',
    },
    {
      q: 'What is the difference between implementing a solution and being accountable for the outcome?',
      a: 'Implementing a solution means building what was specified. Being accountable for the outcome means asking whether what was specified is worth building in that form, given the users, the team, the testing effort and the release commitment. Sometimes the most useful leadership decision is to question a design before the team spends weeks building it.',
    },
    {
      q: 'How do engineering leaders avoid becoming a bottleneck?',
      a: 'Fix the cause of a blocker as well as the instance: name an owner, write the decision down, and give the team the context to settle the next one without you. Delegate decisions that matter, accept that people will solve problems differently, and keep for yourself only the decisions that really need your level.',
    },
  ],
};

export const toc = [
  ['measured', 'I used to count what I built'],
  ['bottleneck', 'Faster for me, slower for everyone else'],
  ['before', 'Much of the work happens before anyone writes code'],
  ['simpler', 'Can we make this simpler for the user?'],
  ['obstacles', 'Clearing the way without standing in it'],
  ['translate', 'Explaining technical problems as decisions'],
  ['invisible', 'Work that never shows up in a tracker'],
  ['learning', 'The parts I’m still learning'],
];

// ---------- Fig. 715-1: one design decision, four places it lands ----------
// General costs from KC's brief, not measurements from a particular project.
const complexityRows = [
  ['The user', 'More choices, modes and steps to understand before finishing the task', 'Fewer steps, less to figure out, done sooner'],
  ['Development', 'More screens, states and conditional logic to build, review and maintain', 'Delivered sooner in smaller changes that are easier to review'],
  ['QA', 'More scenarios and combinations to test, more room for defects', 'A test surface the team can cover inside the release timeline'],
  ['The business', 'Acceptance testing starts later, more effort, more risk to the release date', 'Earlier feedback from real users, less to build, test and maintain'],
];

function ComplexityCost() {
  return (
    <figure className="post__figure">
      {/* A labeled, focusable scroll region, so a phone scrolls the table and never the page. */}
      <div className="elcost__scroll" role="region" aria-label="What unnecessary complexity costs each group compared with a simpler first version" tabIndex={0}>
        <table className="post__table elcost">
          <caption>
            <span className="mono">Fig. 715-1</span> One design decision, four places it lands
          </caption>
          <thead>
            <tr><td></td><th scope="col">Unnecessary complexity</th><th scope="col">A simpler first version</th></tr>
          </thead>
          <tbody>
            {complexityRows.map(([who, complex, simple]) => (
              <tr key={who}><th scope="row">{who}</th><td>{complex}</td><td className="is-better">{simple}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="measured" aria-labelledby="measured-h">
        <h2 id="measured-h" className="post__h2">I used to count what I built</h2>
        <p>Early in my career, a productive day was one I could point to. A router configuration that held up under load. A script that took a manual job off someone’s plate. A bug closed, a feature shipped, a system I designed running in production. The evidence was in the commit history or on the network graphs, and nobody had to tell me whether I’d done a good job.</p>
        <p>That habit came with me when I co-founded a company and became its CTO. For a long stretch I was most of its engineering department, which I’ve written about in <Link to="/writing/why-i-still-write-code/">why I still write code</Link>, so counting my own output still worked. Then the company grew into a global team of more than 30 engineers, VoIP specialists and designers, and the measure quietly stopped working. I could spend a whole day on decisions and conversations and have nothing to point to at the end of it. Some of those turned out to be my most useful days. It took me a while to believe that.</p>
        <p className="post__answer">So what does an engineering leader actually do all day? In my experience, most of the day goes to decisions and the people making them: deciding what to build and what not to, weighing delivery against reliability, security and cost, clearing obstacles, developing engineers, and explaining technical risk in terms the business can act on. Writing code becomes a smaller share of the job, and often not the most valuable one.</p>
      </section>

      <section id="bottleneck" aria-labelledby="bottleneck-h">
        <h2 id="bottleneck-h" className="post__h2">Faster for me, slower for everyone else</h2>
        <p>When you built the first version of a system, you know where everything is. Someone brings you a problem and you can often fix it faster than you can explain it. So I fixed things. It felt responsible, and in the moment it usually was faster.</p>
        <p>The cost showed up later. Every problem I took back taught the team that hard problems came to me. Decisions queued behind my calendar, and engineers who could have worked something out stopped trying, which was reasonable when I was going to step in anyway. I had become the bottleneck I would have flagged in anyone else’s system. The longer version is in the <Link to="/writing/building-a-startup-from-idea-to-acquisition/#delegation">founder story</Link>.</p>
        <p>The lesson is easy to say and still hard to practice. Being able to solve a problem doesn’t always mean I should be the person solving it. My job moved toward making sure the team could solve it: giving people the context and the constraints, handing over ownership, and leaving room for them to do it differently than I would have.</p>
        <p>Later roles pushed the same way. As a VP of Operations I rebuilt an engineering team, and as CTO of a media publisher I worked with the CEO on the business and operations as well as on the platform. Neither job would have worked if every hard problem had waited for me.</p>
      </section>

      <section id="before" aria-labelledby="before-h">
        <h2 id="before-h" className="post__h2">Much of the work happens before anyone writes code</h2>
        <p>A request usually arrives with a solution already attached: a dashboard, an integration, a new service, a redesigned workflow. The team could build it. The first thing I want to know is whether we should, and whether a smaller version would solve the actual problem.</p>
        <p>Plenty of requests are exactly right as written, so this is a habit of asking rather than refusing. Still, the most expensive engineering work I’ve seen is <Link to="/writing/engineering-work-nobody-needed/">work nobody needed</Link>, and the same goes for <Link to="/writing/the-architecture-you-dont-build/">architecture nobody needed</Link>. A team can deliver on time with clean code and still spend a quarter on something that didn’t deserve it. A question asked before the work starts is one of the few places where a leader can save weeks with a single conversation.</p>
      </section>

      <section id="simpler" aria-labelledby="simpler-h">
        <h2 id="simpler-h" className="post__h2">Can we make this simpler for the user?</h2>
        <p>The place I push back most often is the shape of the feature itself. When a UX design or an implementation proposal adds screens, states, settings and branching behavior that the user’s problem doesn’t seem to need, I ask the question I’ve probably asked more than any other as a leader: can we make this simpler for the user?</p>
        <p>People sometimes hear that as an engineer who wants to write less code. Less code is a side effect. I want us to solve the real user problem with the simplest experience that works, because when time and people are limited, extra complexity lands on everyone involved, starting with the user.</p>

        <h3 className="post__h3">For the person using it</h3>
        <p>Users shouldn’t need training to understand a feature. A more complicated interface might do more, but more capability doesn’t make it better for the person in front of it. Teams, mine included, can get so focused on what the system is able to do that we stop picturing someone trying to finish a task on a busy afternoon. Every extra choice, step and mode is something they have to understand before they get what they came for. A simpler workflow means less confusion, fewer steps and less time to finish. I learned that first on a support line, back when <Link to="/writing/ux-ui-design-before-and-after-ai/">I designed every screen myself</Link>.</p>

        <h3 className="post__h3">For the developers</h3>
        <p>Complexity is implementation time. Each additional screen, state, interaction and conditional path is code to write, review and maintain, and the ways those pieces interact multiply faster than the list grows. When we simplify the experience, the team can usually deliver sooner, which puts working software in front of users sooner. Less scope also makes for <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller stories and pull requests</Link> that are easier to review and safer to ship.</p>

        <h3 className="post__h3">For QA</h3>
        <p>Every additional workflow is more scenarios to test. Two optional settings that each change behavior already make four combinations, before anyone tries them on a phone, over a slow connection or with a screen reader. A complicated feature takes longer to validate and gives defects more places to hide. A simpler one gives QA a test surface they can cover within the release timeline, instead of choosing which paths to skip.</p>

        <h3 className="post__h3">For the business</h3>
        <p>Add those up and a simpler first version means working functionality sooner and user acceptance testing that starts earlier. It takes less development and QA effort, puts less pressure on the release commitment, and costs less to maintain afterward. Most importantly, it gets feedback from real users before we invest in more complexity. The benefit runs through the whole delivery process, from design through development, testing, release and adoption.</p>
        <ComplexityCost />
        <p className="post__answer">Engineering leaders should push back on unnecessary UX complexity because it costs everyone at once. Users have more to learn, developers have more to build and maintain, QA has more to test, and the business waits longer for feedback while carrying more release risk. The aim is to remove complexity the user’s problem doesn’t need while keeping essential functionality, accessibility, security and usability.</p>

        <h3 className="post__h3">Simpler has limits</h3>
        <p>Simplifying can go too far. An oversimplified design can hide information people need, behave in ways that surprise them, or leave out something the requirements depend on. Removing the confirmation from an action that can’t be undone doesn’t count as simplifying, and neither does cutting accessibility, security or a permission check to save a sprint.</p>
        <p>The test I use is whether a piece of complexity earns its place. If a designer can show that users will get lost without something, or QA can show a case we would otherwise get wrong, it stays, and I’m glad someone made the case. When nobody can say yet who needs it, I would rather ship the simpler version, watch how people use it, and add complexity when the evidence asks for it.</p>

        <h3 className="post__h3">Why this is a leadership call</h3>
        <p>Everyone in that conversation is doing their job. An engineer focuses on implementing the design. A designer is trying to create the best experience they can. QA wants to know the functionality works, and product wants to deliver the capabilities that were requested. Each of those views is right about its own part of the work.</p>
        <p>My responsibility is the whole picture. I want to know whether the extra complexity is necessary, whether it improves the experience enough to justify what it costs to build and test, and whether a simpler version could solve today’s problem while we learn from users. Those questions sit between roles, and if the engineering leader doesn’t ask them, there’s a good chance nobody will.</p>
        <p className="post__answer">For me, that is the difference between being responsible for implementing a solution and being accountable for delivering the right outcome. Implementation asks whether we built what was specified. Accountability asks whether what we specified was worth building in that form, given the users, the team, the testing effort and the release date. Sometimes the most useful leadership decision is to question a design before the team spends weeks building it.</p>
      </section>

      <section id="obstacles" aria-labelledby="obstacles-h">
        <h2 id="obstacles-h" className="post__h2">Clearing the way without standing in it</h2>
        <p>Some of my most useful days produce nothing I could attach to a ticket. A team is blocked on another team’s change. Two groups each assume the other owns a piece of work. A decision has been sitting with three people who can each block it and none of whom can make it. Sorting those out is my job, whether that means resolving the dependency, making ownership explicit, or escalating when the block needs someone with more authority than I have.</p>
        <p>The risk is that removing obstacles turns me into a new one. If every blocker routes through me, I’ve rebuilt the bottleneck and given it a nicer name.</p>
        <p className="post__answer">The way I try to avoid becoming a bottleneck is to fix the cause of a blocker as well as the instance: name an owner, write the decision down, and give the team the context to settle the next one without me. I don’t want engineers waiting on me for decisions they are closer to than I am.</p>
        <p>That connects to the part of the job I care about most. I want to develop people who could eventually take over what I do. That means mentoring, sharing the context that usually stays in leadership meetings, and delegating decisions that matter, not only the ones nobody else wants. It also means accepting that someone will solve a problem differently from how I would. Sometimes their way turns out better. Sometimes it’s worse in a way that’s cheap to fix, and they learn more from it than they would have from my version. I go into this further in <Link to="/writing/why-i-enjoy-mentoring/">why I enjoy mentoring</Link> and on the <Link to="/mentorship/">mentorship page</Link>.</p>
      </section>

      <section id="translate" aria-labelledby="translate-h">
        <h2 id="translate-h" className="post__h2">Explaining technical problems as decisions</h2>
        <p>A good part of my week is translation. When something goes wrong, or looks like it will, the people who need to act on it rarely need the technical detail first. Engineers tend to lead with the cause because that’s the interesting part to us. The business needs to know what changes for them. So I try to cover four things in plain language:</p>
        <ul className="post__list">
          <li>The impact on customers and the business, as it stands now</li>
          <li>The risk that remains and how likely it is</li>
          <li>The next steps, with an owner and a date for each</li>
          <li>The decisions or tradeoffs that need someone above the team</li>
        </ul>
        <p>The technical detail goes underneath for anyone who wants it. Translation runs the other way too. When I explain to the team why the business needs a date, or why a feature matters to a particular kind of customer, engineers can make better tradeoffs on their own without coming back to ask.</p>
      </section>

      <section id="invisible" aria-labelledby="invisible-h">
        <h2 id="invisible-h" className="post__h2">Work that never shows up in a tracker</h2>
        <p>Some of the most valuable leadership decisions leave nothing behind to look at: a project that never started because a smaller change solved the problem, a service that was never created, a design simplified before anyone built the complicated version, or a risky change that got a rollback plan it turned out not to need. None of that appears as a completed ticket. It’s hard to measure and easy to undervalue, and I include myself in that. I’ve had to get comfortable with a good week looking quiet from the outside.</p>

        <h3 className="post__h3">Today against tomorrow</h3>
        <p>The same tension runs through most planning conversations I’m part of. Shipping features matters, because it’s how the business keeps earning the right to invest. Reliability, security, maintainability and the team’s ability to keep delivering matter too, and they rarely have a stakeholder asking for them by name. The right balance depends on the company. A startup looking for its first paying customers and a team running a public-sector system people depend on should make different calls, and I’ve worked on both sides. I wrote more about matching the process to the risk in <Link to="/writing/speed-vs-quality-software-engineering/">speed versus quality</Link> and <Link to="/writing/when-to-add-engineering-process/">when process helps</Link>.</p>
        <p>Not everyone will like where I land. My job in those conversations is to make an informed decision, explain the tradeoff and own it, so that people who disagree at least understand why.</p>
      </section>

      <section id="learning" aria-labelledby="learning-h">
        <h2 id="learning-h" className="post__h2">The parts I’m still learning</h2>
        <p>Some of this job stays uncomfortable. I push back on deadlines that aren’t realistic, and on technical proposals from people I respect. I address performance problems directly instead of hoping they improve on their own. When something my team shipped goes wrong, I take accountability for it in front of the business, whether or not I wrote the line that caused it.</p>
        <p>I don’t always get those right. Sometimes I still want to jump in and fix the problem myself, especially when it’s technical and I can see the answer. Sometimes I hold onto a decision too long or hand one off too early. Sometimes I argue for the simpler version and later wonder whether we left out something users needed.</p>
        <p>What helps is treating my own decisions the way I would treat a change in production: watch what happens, and change course when the results say I should. Every organization and team is different, and an approach that worked with one group can be wrong for the next. I don’t expect to finish learning this.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">How I count a productive day now</h2>
      <div className="post__close-copy">
        <p className="lead">Early in my career I could point to the code I wrote and know what I had done that day. Now some of my best days go to helping someone else make a decision, clearing something out of a team’s way, talking a feature down to the version users need, or building a team that doesn’t wait on me. I still enjoy difficult technical problems, and I still write code on my own projects.</p>
        <p className="post__close-principle">More often now, I’m finding that the better contribution is making it possible for someone else to solve the problem.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
