import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

export const toc = [
  ['on-time', 'On time isn’t proof of value'],
  ['after-launch', 'The cost after launch'],
  ['how-it-happens', 'How it gets built'],
  ['request-need', 'Request, solution, need'],
  ['examples', 'Three hypothetical examples'],
  ['questioning', 'Room to question the work'],
  ['challenge', 'Challenging a request'],
  ['justified', 'Work worth doing anyway'],
  ['ai', 'Faster with AI'],
  ['checklist', 'Before you commit a team'],
];

export default function Body() {
  return (
    <>
      <section id="on-time" aria-labelledby="on-time-h">
        <h2 id="on-time-h" className="post__h2">Shipping on time doesn’t prove the work was worth doing</h2>
        <p>Most engineering organizations are good at measuring whether work was delivered. Was it on time? On budget? Did the launch go smoothly? Far fewer go back and ask whether anyone needed it.</p>
        <p>A team can execute perfectly and still deliver something that didn’t deserve the investment. The estimates held, the code is clean, the release was quiet, and six months later almost nobody uses the feature.</p>
        <p className="post__answer">The most expensive engineering work is work nobody needed. It costs the time to build it, keeps costing maintenance, support and operational complexity for as long as it exists, and takes the place of work that would have mattered.</p>
        <p>On-time delivery tells you the team can execute. It says nothing about whether the decision to build was sound, and that decision usually has a different owner.</p>
      </section>

      <section id="after-launch" aria-labelledby="after-launch-h">
        <h2 id="after-launch-h" className="post__h2">Unnecessary work keeps consuming capacity after launch</h2>
        <p>The build is the cost everyone sees, and often the smallest one. Once a feature ships, the team has to carry it:</p>
        <ul className="post__list">
          <li>It has to survive every framework upgrade, dependency patch and schema change.</li>
          <li>It produces bugs that someone has to triage.</li>
          <li>Support has to understand it, and the few customers who use it expect it to stay.</li>
          <li>It adds code paths and tests that make nearby changes slower and riskier.</li>
        </ul>
        <p>The largest cost appears on no report: the work the team didn’t do because it was building this instead. And once even a handful of customers depend on a feature, retiring it becomes its own project. Services behave the same way, which is why I care more about <Link to="/writing/should-it-be-a-microservice/#five-years">what it costs to own a service for years</Link> than what it costs to create one.</p>
      </section>

      <section id="how-it-happens" aria-labelledby="how-it-happens-h">
        <h2 id="how-it-happens-h" className="post__h2">How do teams end up building features nobody needs?</h2>
        <p className="post__answer">Rarely through carelessness. Unneeded features usually start with a vague problem, pressure from a stakeholder, a solution proposed before anyone understood the problem, or a priority nobody felt able to challenge.</p>
        <dl className="post__terms">
          <div><dt>Vague problems</dt><dd>“Customers want better reporting” can justify almost any amount of work, because nobody has said which customers or which decision.</dd></div>
          <div><dt>Stakeholder pressure</dt><dd>A senior leader or a large customer asks, and the request becomes a commitment before anyone checks how widely the problem exists.</dd></div>
          <div><dt>Premature solutions</dt><dd>The request arrives as a design: “Build a dashboard.” The team estimates the dashboard instead of asking what question it should answer.</dd></div>
          <div><dt>Unchallenged priorities</dt><dd>Something entered the roadmap a quarter ago, the reasons behind it changed, and nobody revisits it because it’s already planned.</dd></div>
        </dl>
        <p>None of this requires bad intent, only a process where the first reasonable-sounding idea becomes the plan.</p>
      </section>

      <section id="request-need" aria-labelledby="request-need-h">
        <h2 id="request-need-h" className="post__h2">A request, a proposed solution and the underlying need are different things</h2>
        <p>Most requests arrive with all three mixed together. Take a hypothetical one from an account manager:</p>
        <dl className="post__terms">
          <div><dt>The request</dt><dd>“Our biggest customer needs an export to Excel.”</dd></div>
          <div><dt>The proposed solution</dt><dd>A scheduled export with configurable columns and email delivery.</dd></div>
          <div><dt>The underlying need</dt><dd>Their finance team reconciles invoices at month-end and can’t easily see which payments failed.</dd></div>
        </dl>
        <p>Once the need is clear, the options change. A filtered view of failed payments might solve it, or a one-off CSV and a short call. The scheduled export could still be right, but now the team is choosing it on purpose. It’s the same discipline as <Link to="/leadership/#ambiguity">turning ambiguity into executable work</Link>: start from the outcome and make the first slice test the riskiest assumption.</p>
      </section>

      <section id="examples" aria-labelledby="examples-h">
        <h2 id="examples-h" className="post__h2">Three hypothetical examples</h2>
        <p>These are illustrations, not accounts of a specific company.</p>

        <h3 className="post__h3">Hypothetical example 1: A reporting dashboard when an existing report would do</h3>
        <p>Leadership asks for a dashboard to track customer churn, and the team scopes a pipeline, charts and filters. Before committing, someone asks what decision it will inform. The answer is a monthly retention review, and an existing report with two added columns already answers that question. The dashboard might earn its place later if people need the answer weekly. Today it would be a live system maintained for one meeting a month.</p>

        <h3 className="post__h3">Hypothetical example 2: An integration built before customer demand is validated</h3>
        <p>Sales believes a CRM integration will unlock deals, so the team spends a quarter building it. A few customers turn it on, and the deals turn out to have stalled for other reasons. A cheaper first step would have been a CSV import, or syncing data by hand for the three customers who asked, long enough to see whether it changed anything. Instead, the integration now needs updating every time the partner changes its API.</p>

        <h3 className="post__h3">Hypothetical example 3: A rewrite proposed before anyone names what it must fix</h3>
        <p>A team wants to rewrite a legacy service because it’s painful to work in. Everyone agrees, but nobody has written down what has to be better afterward: deploy time, defects in one module, onboarding time, a scaling limit. Without that list, the rewrite has no finish line and no way to show it worked. With it, the team can often fix the worst problems in place and choose a rewrite only if that falls short. I treat it the way I treat <Link to="/writing/building-a-startup-from-idea-to-acquisition/#technical-debt">technical debt: as an investment decision</Link>.</p>
      </section>

      <section id="questioning" aria-labelledby="questioning-h">
        <h2 id="questioning-h" className="post__h2">Engineers need room to question the work</h2>
        <p>Engineers are often the first to notice that something doesn’t add up: a feature that duplicates an existing one, or a dashboard built on data nobody trusts. Whether they say so depends on what happened the last time someone did. If questioning a request gets an engineer labeled difficult, people stop asking, and the team gets very efficient at building whatever arrives.</p>
        <p>So I try to make those questions a normal part of the work:</p>
        <ul className="post__list">
          <li>Questions about the need are welcome at planning, alongside questions about the estimate.</li>
          <li>Engineers hear the context behind a request: who asked, what problem, what evidence.</li>
          <li>“Could we test this first?” is treated as a proposal, not a refusal.</li>
        </ul>
        <p>It’s also how engineers learn to reason about the business, a big part of how I <Link to="/mentorship/">mentor engineers until they can replace me</Link>.</p>
      </section>

      <section id="challenge" aria-labelledby="challenge-h">
        <h2 id="challenge-h" className="post__h2">How do you challenge a request constructively?</h2>
        <p className="post__answer">Ask about the outcome before the solution, and offer a smaller way to test it instead of a flat no. Most stakeholders welcome those questions once it’s clear they’re aimed at getting them the result they want.</p>
        <ul className="post__list">
          <li>“What outcome are we trying to change?”</li>
          <li>“Who has this problem today, and how are they handling it now?”</li>
          <li>“How will we know it worked?”</li>
          <li>“Could we test this before committing a team?”</li>
          <li>“If we build this, what moves out of the quarter?”</li>
        </ul>
        <p>Product and sales should get <Link to="/leadership/#cross-functional">honest options with the costs attached</Link>, and the decision stays with the people accountable for it. Engineering’s job is to make sure that decision is made with the full cost in view.</p>
      </section>

      <section id="justified" aria-labelledby="justified-h">
        <h2 id="justified-h" className="post__h2">When work is justified without immediate revenue</h2>
        <p>None of this means every piece of work needs a revenue forecast.</p>
        <dl className="post__terms">
          <div><dt>Experiments</dt><dd>An experiment that disproves a hypothesis did its job. The waste is one with no hypothesis, no success criteria and no end date, or one that becomes a permanent feature by default.</dd></div>
          <div><dt>Compliance and security</dt><dd>These are justified by the risk they remove. The useful question is what the smallest compliant version looks like.</dd></div>
          <div><dt>Foundational work</dt><dd>Platform, reliability and tooling work pays off through everything built on it. It still needs a named problem: which teams it unblocks, which incidents it prevents.</dd></div>
        </dl>
        <p>The test is the same for all three: a clear reason, a way to tell whether it worked, and someone who owns the result. A well-run experiment that came back “no” wasn’t a mistake. Continuing to build as if it had come back “yes” would be.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">Faster development with AI makes this decision more important</h2>
        <p>AI tools make code much cheaper to produce. When the build gets cheaper, it becomes a smaller share of the total cost, while maintenance, support, operational complexity and the team’s attention stay roughly where they were. A team that can produce features twice as fast can also accumulate work nobody needed twice as fast.</p>
        <p>Cheap code is a real advantage when it’s pointed at testing a need: throwaway prototypes, quick experiments, a rough version in front of a few customers. It’s a liability when it lets a team skip the question of whether the thing should exist. As with <Link to="/writing/you-dont-need-to-remember-everything/#ai">what AI changes for engineers</Link>, the judgment around the output is still the scarce part.</p>
      </section>

      <section id="checklist" aria-labelledby="checklist-h">
        <h2 id="checklist-h" className="post__h2">What should you ask before committing engineering capacity?</h2>
        <p className="post__answer">Before a team commits, I want answers to eight questions about the problem, the evidence, the cost of doing nothing, the smallest test, existing alternatives, what gets delayed, who owns the outcome, and what would make us continue, change direction or stop.</p>
        <ol className="post__steps">
          <li><strong>Who has this problem, and how often?</strong> A daily problem for many users and a quarterly annoyance for one are different investments.</li>
          <li><strong>What evidence shows it matters?</strong> Support tickets, lost deals, usage data, customer conversations. One loud request is a signal, not evidence.</li>
          <li><strong>What happens if we do nothing?</strong> Sometimes the honest answer is “not much,” and that’s worth knowing.</li>
          <li><strong>What is the smallest way to test the need?</strong> A prototype, a manual process, or a conversation with five customers.</li>
          <li><strong>What existing solution or manual process could work?</strong> An existing report, a configuration change, or someone doing it by hand for a month.</li>
          <li><strong>What are we delaying by choosing this?</strong> Every yes delays something else. Name it.</li>
          <li><strong>Who owns the outcome after launch?</strong> Someone responsible for whether it worked, and for retiring it if it didn’t.</li>
          <li><strong>What result would make us continue, change direction or stop?</strong> Decide before launch, while nobody is attached to the answer.</li>
        </ol>
        <p>Thin answers don’t automatically mean no. They mean the first piece of work is finding out.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Protect capacity, measure outcomes</h2>
      <div className="post__close-copy">
        <p className="lead">Engineering capacity is one of the most constrained resources a company has, and every piece of work spends it twice: once to build, and again for as long as it lives in the system. So I judge work by the outcome it changed, not only by whether it shipped on time.</p>
        <p>Before asking how fast we can build something, I start here:</p>
        <p className="post__close-principle">Does this deserve the team’s time, and how will we know?</p>
        <div className="post__close-actions">
          <Link to="/leadership/" className="action">How I lead engineering teams <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
