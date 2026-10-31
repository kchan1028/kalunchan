import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// When technical debt becomes a business problem. Source: KC's brief (Oct 22 2026). Verified experience only: the
// startup's mix of deliberate debt and mistakes (building-a-startup-from-idea-to-acquisition), public-sector ATO and
// authorization concerns (modernizing-public-sector-applications), and the publishing AWS re-platform where query fixes
// and deleting unused resources contributed to about 30% lower AWS costs (hidden-cost-of-software-architecture). The
// brief's Elasticsearch-to-SQL and framework-upgrade examples aren't on the site, so they stay general. "Debt isn't
// automatically bad" and the startup question list live in the startup post, which this one links instead of repeating.
// Ward Cunningham, "The WyCash Portfolio Management System", OOPSLA '92 experience report, quotes checked 2026-10-22.
// The roadmap sentence in #visible is an illustration of wording, not a quote from a real meeting. No statistics.

export const toc = [
  ['shortcuts', 'Some shortcuts are the right call'],
  ['friction', 'The cost shows up as friction first'],
  ['business', 'When it reaches the business'],
  ['options', 'Refactor, replace, rewrite or leave it alone'],
  ['how-much', 'How much debt to fix'],
  ['visible', 'Making the tradeoff visible'],
];

// ---------- Fig. 720-1: where I'd start for common kinds of debt ----------
// Starting points, not rules. Not drawn from a specific system.
const startingPoints = [
  ['Code the team changes every week, where defects keep landing', 'Refactor incrementally, alongside features', 'The interest is paid on every change'],
  ['An unsupported dependency or a known security exposure', 'Fix it soon, with a date', 'The risk grows, and compliance may force the timing anyway'],
  ['One component with the wrong design in an otherwise healthy system', 'Replace that component behind a stable interface', 'It contains the risk to one part of the system'],
  ['Stable code that rarely changes and does its job', 'Leave it, and write down why', 'Cleaning it up buys very little'],
  ['A feature the business plans to retire', 'Leave it', 'The debt goes away with the feature'],
  ['An area the roadmap is about to expand', 'Pay it down before the expansion', 'It is cheaper before more is built on top of it'],
];

function StartingPoints() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 720-1</span> Where I’d start for common kinds of technical debt</caption>
        <thead><tr><th scope="col">Situation</th><th scope="col">Where I’d lean</th><th scope="col">Why</th></tr></thead>
        <tbody>{startingPoints.map(([situation, lean, why]) => <tr key={situation}><th scope="row">{situation}</th><td>{lean}</td><td>{why}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">Starting points, not rules. Capacity, deadlines and what the business needs this quarter still decide the timing.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="shortcuts" aria-labelledby="shortcuts-h">
        <h2 id="shortcuts-h" className="post__h2">Some shortcuts are the right call</h2>
        <p>Engineers use “technical debt” for almost everything: messy code, an outdated framework, missing tests, a system everyone wants to refactor. I’ve worked on systems where taking a shortcut was the right decision, because we needed to ship something, test an idea or support the business with the people and money we had. I’ve also seen what happens when those shortcuts stay around much longer than anyone planned.</p>
        <p>Ward Cunningham introduced the metaphor in an <a href="https://c2.com/doc/oopsla92.html" target="_blank" rel="noopener noreferrer">experience report about a portfolio management system</a>. He wrote that “shipping first time code is like going into debt” and that “a little debt speeds development so long as it is paid back promptly.” The next line is the one that tends to get dropped: “The danger occurs when the debt is not repaid.” In his framing, the problem was not repaying it.</p>
        <p>Context matters a lot here. A startup trying to find out whether anyone wants its product has different priorities from a company supporting hundreds of thousands of users. When I co-founded a communications platform, we built some things quickly because a customer needed them now, or because we couldn’t yet afford to build them properly. Some of our debt was also just mistakes, and I wrote about telling those apart in <Link to="/writing/building-a-startup-from-idea-to-acquisition/#technical-debt">how a startup taught me to treat debt as an investment</Link>. Calling every shortcut strategic after the fact would have hidden the lesson. Even so, a simple solution today often beats months of design for requirements that may never arrive, which is the argument I made in <Link to="/writing/the-architecture-you-dont-build/">the architecture you don’t build</Link>.</p>
        <p className="post__answer">Technical debt becomes a business problem when its cost moves out of the codebase and into things the business cares about: delivery dates, operating costs, security exposure, reliability, customer experience and the ability to act on an opportunity. Until then it is an engineering tradeoff, and often a reasonable one.</p>
      </section>

      <section id="friction" aria-labelledby="friction-h">
        <h2 id="friction-h" className="post__h2">The cost shows up as friction first</h2>
        <p>Debt rarely announces itself with an outage. It makes everything a little harder. A feature that once took two days now takes two weeks. A small change has to touch several components. Developers start avoiding one part of the codebase, and estimates for anything near it get padded without anyone saying why. QA asks for more regression testing because changes there have consequences nobody can predict.</p>
        <p>None of that looks like failure. The software works, customers use it and the dashboards are green, which is exactly why debt is easy to defer. The cost is paid in small amounts across every change, and nobody receives a bill for it. One of the few places it becomes visible on its own is sprint carryover. When unfinished work keeps landing in the same parts of the system, that is often <Link to="/writing/what-sprint-carryover-is-telling-you/#causes">debt charging interest</Link>.</p>
        <p>People are part of the cost too. When only one or two engineers understand a system, onboarding takes longer, those engineers end up reviewing or approving every change, and the business carries a risk it probably hasn’t priced: what happens when one of them leaves or goes on vacation during an incident. I try to remove single points of failure wherever I find them, and knowledge that lives in one person’s head is one of the most common.</p>
      </section>

      <section id="business" aria-labelledby="business-h">
        <h2 id="business-h" className="post__h2">When it reaches the business</h2>
        <p>The point I watch for is where engineering friction turns into something the business would notice if it were written down. A release date slips again because the same module needed rework. An infrastructure bill keeps growing for resources nobody can safely remove. A security patch can’t be applied because the framework underneath is too old to take it. The same incident keeps coming back because every fix is a workaround. A customer or partner asks for something reasonable and the answer is “not this year,” because the system can’t be changed fast enough.</p>
        <p>Security and compliance move that point much earlier. On public-sector applications, a dependency that has fallen out of support, or an authorization rule enforced only in the interface, affects whether the system can keep its authorization to operate. That kind of debt has a deadline whether or not anyone has put it on the roadmap, and I wrote about carrying it through a replacement in <Link to="/writing/modernizing-public-sector-applications/#debt">modernizing public-sector applications</Link>.</p>
        <p>Cost behaves the same way. When I led a media publishing platform’s move onto AWS, the work that contributed to about 30% lower AWS costs included query fixes and <Link to="/writing/hidden-cost-of-software-architecture/#aws-bill">deleting resources nobody used</Link>. Some of that was debt nobody had counted as debt, because it showed up on an invoice instead of in the code.</p>
      </section>

      <section id="options" aria-labelledby="options-h">
        <h2 id="options-h" className="post__h2">Refactor, replace, rewrite or leave it alone</h2>
        <p>Once a piece of debt is worth acting on, there are roughly four choices: keep the existing implementation and work around it, refactor the worst parts incrementally, replace one service or module, or rewrite the application.</p>
        <p>A stable module that rarely changes, has no security exposure and does its job can stay ugly for years. The interest only accrues when someone has to change it, so cleaning it up buys almost nothing.</p>
        <p>Incremental refactoring is my default when the debt sits in code the team changes often. It happens alongside feature work, each step is small enough to review and roll back, and the business doesn’t have to wait for anything. Its weakness is that it needs steady attention. It stalls the moment a deadline arrives unless someone protects it.</p>
        <p>Replacing a component makes sense when the problem is concentrated: one module with the wrong data model, or one service built on a dependency that has reached end of life. Put a stable interface in front of it and move traffic over in stages. That’s the <Link to="/writing/modernizing-public-sector-applications/#incremental">one-journey-at-a-time approach</Link> I described for government systems, and it works just as well outside government.</p>
        <p>A full rewrite is the most tempting option and usually the riskiest. Engineers see the mess clearly and can picture the clean version. What’s harder to see is how much behaviour the old system carries that nobody wrote down: an edge case handled after a customer complaint, a rule added for a regulator, a workaround for a partner’s unusual API. The rewrite has to rediscover all of it while the old system keeps changing underneath. Before replacing anything, I want to understand why it was built the way it was, because the part that looks strangest is sometimes the most important rule in the system. I also want the team to name what has to be better afterward, or the rewrite has <Link to="/writing/engineering-work-nobody-needed/#examples">no finish line</Link>.</p>
      </section>

      <section id="how-much" aria-labelledby="how-much-h">
        <h2 id="how-much-h" className="post__h2">How much debt to fix</h2>
        <p>I keep some capacity for debt in every cycle, but I don’t tie it to a fixed percentage of each sprint. A fixed number tends to get spent on whatever is annoying engineers that week, which isn’t always what’s hurting the business. How much goes in, and where, depends on what the debt is costing.</p>
        <p>How often the code changes matters most to me. Debt in a file nobody touches costs nothing, while debt on the path every feature goes through is paid again and again. After that I look at security and compliance exposure, the maintenance burden and the incidents it causes, and where the product is going. Debt in a feature the business plans to retire can probably stay. Debt in the area the roadmap is about to expand is worth paying before the expansion, because everything built on top of it makes the fix more expensive. Capacity is real too. A team already stretched across commitments can take on one serious cleanup, not five.</p>
        <p>Some debt stays roughly the same size for years. Other debt compounds: a dependency that falls further behind with every release, or a data model that more features depend on each quarter. That second kind is where waiting is the expensive choice.</p>
        <StartingPoints />
        <p className="post__answer">How much technical debt to fix depends on business impact, security and compliance exposure, how often the code changes, maintenance and reliability burden, product direction, available engineering capacity and the cost of waiting. Debt in stable code nobody changes can stay for years. Debt in code that changes weekly, or that creates security risk, usually can’t.</p>
      </section>

      <section id="visible" aria-labelledby="visible-h">
        <h2 id="visible-h" className="post__h2">Making the tradeoff visible</h2>
        <p>Engineers often ask for time to clean something up and get told no, and I understand why. “We need to refactor this module because the code is messy” gives a product manager or an executive nothing to weigh against a feature. It sounds like a preference.</p>
        <p>Describing the consequence works better. Something like: “Every change to this module needs extra regression testing and carries a higher risk of a production issue. Improving it would shorten delivery for the roadmap items that depend on it and reduce that risk.” It lands harder when it’s backed by things the team can show, such as how long the last few changes took, which incidents traced back to that module and which upcoming work runs through it.</p>
        <p>I’m not trying to convince anyone that all debt is bad. I want the people deciding to see the same thing engineering sees: what the debt costs to keep, what it costs to fix and what we give up either way. Sometimes the business looks at that and keeps the debt because a deadline matters more, and that is a legitimate call. What matters is that it was a decision, written down with a point at which we’d look again, rather than something that happened by default. Putting it to leadership as <Link to="/writing/speed-vs-quality-software-engineering/#options">options with their costs</Link> works better than putting it as a request.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Knowing which situation you’re in</h2>
      <div className="post__close-copy">
        <p className="lead">Technical debt comes with building software, and I don’t think the goal is to get rid of it. Part of leading engineering is recognizing when debt is a reasonable tradeoff and when its accumulated cost has started to land on the business. Sometimes that means refactoring, and sometimes it means replacing one component.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through your technical debt <ArrowRight /></Link>
          <Link to="/leadership/#debt" className="link-arrow"><span>How I balance delivery and debt</span> <ArrowRight /></Link>
          <Link to="/engineering-leadership/#technical-debt" className="link-arrow"><span>Hiring a leader to get debt under control?</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
