import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// From KC's brief (Oct 18 2026): learning agentic engineering by building a
// real product; uses Claude Code and Codex for implementation, research,
// testing and review; vague requests produce work that looks complete and
// isn't; some ideas, UX and AI-generated code get redesigned; operating costs
// justify paid tiers while core tools stay free. Product facts checked against
// gofedpath.com on Oct 18 2026 (platform, pricing, privacy, compliance matrix
// tool) and the FedPath case study: rule-based Fit Analysis and Compliance
// Matrix; uploaded solicitations, profiles and drafts never sent to an AI
// provider; AI summaries by Gemini from public SAM.gov notice text only,
// labelled, run as background jobs through OmniRoute; private beta, nothing
// charged, prices set before billing. Public-sector certification work from
// building-public-sector-applications. The brief's "agent that investigates
// an opportunity" is discussed as not built, with no plans claimed. The
// set-aside rule example is a labelled hypothetical. No users, metrics or
// results are claimed. Opportunity Watch frequency left out (case study and
// live site differ).
export const toc = [
  ['why', 'Learning on a real product'],
  ['problem', 'Why federal contracting'],
  ['map', 'Which parts are agentic'],
  ['rules', 'Where I kept the model out'],
  ['model', 'The one place a model earns its keep'],
  ['agent', 'The agent I haven’t built'],
  ['build', 'Building it with coding agents'],
  ['free', 'Why the core tools are free'],
  ['learning', 'Still learning'],
];

// ---------- Fig. 714-1: every part of FedPath, by kind of system ----------
const parts = [
  ['Opportunity Watch', 'Scheduled automation', 'Saved criteria checked against new SAM.gov notices'],
  ['Change detection', 'Scheduled automation', 'Saved opportunities checked for amendments and deadline changes'],
  ['Fit Analysis', 'Fixed rules', 'Matches, gaps and unknowns, each with its source'],
  ['Compliance Matrix', 'Fixed rules', 'Requirements from the solicitation, with the page each came from'],
  ['Opportunity summaries', 'AI processing', 'A model summarizes the public notice; labelled AI-written'],
  ['Go/No-Go', 'A person decides', 'Suggested ratings the user reviews and changes'],
  ['Building FedPath', 'Agentic engineering', 'Coding agents inside requirements, review and testing'],
];

function PartsMap() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 714-1</span> What kind of system each part of FedPath is</caption>
        <thead><tr><th scope="col">Part</th><th scope="col">Kind</th><th scope="col">What it does</th></tr></thead>
        <tbody>{parts.map(([part, kind, what]) => <tr key={part}><th scope="row">{part}</th><td>{kind}</td><td>{what}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="why" aria-labelledby="why-h">
        <h2 id="why-h" className="post__h2">Learning on a real product</h2>
        <p>Throughout my career I have learned new technology by building something real with it, and I wanted to learn AI agents the same way. I had already been experimenting with Claude Code, Codex, Hermes Agent and scheduled jobs, which I wrote about in <Link to="/writing/ai-agents-reliable-in-production/">making AI agents reliable in production</Link>. Experiments show an agent finishing a task once. They don’t show what happens when the data source is down, a document contradicts itself, or a model gets something wrong that a customer was relying on.</p>
        <p>To learn that part, I needed real data, real users and a workflow complicated enough to break. <a href="https://gofedpath.com">FedPath</a> is the product I built for it. It helps small businesses find U.S. federal contracts and decide whether to bid on them, and it is in private beta.</p>
      </section>

      <section id="problem" aria-labelledby="problem-h">
        <h2 id="problem-h" className="post__h2">Why federal contracting</h2>
        <p>Part of my <Link to="/writing/building-public-sector-applications/">public-sector work</Link> has been on systems that support small business certification programs. I have seen from the inside how many registrations, certifications, eligibility rules and documents a small business has to understand before it can win government work. I have also founded and run businesses, so I know what it is like to watch subscriptions add up before any revenue arrives.</p>
        <p>Finding opportunities is free. SAM.gov lists every open federal notice, and anyone can search it. The expensive part comes after the search. Say you run a small IT consulting company and a notice looks promising. Is it set aside for a certification you hold? Does the work match your experience? Can you deliver it where the agency needs it, by the date they need it? And is it worth the hours a proposal will take? A business with a capture team has people to answer those questions. A five-person company answers them at night, often after the hours are already spent.</p>
        <p>Building another search interface wouldn’t help much with that. So FedPath became one workflow, from a readiness check through watching for opportunities, checking fit, making a Go/No-Go decision and tracking what the solicitation requires. The <Link to="/projects/fedpath/">case study</Link> covers the product decisions in more detail.</p>
      </section>

      <section id="map" aria-labelledby="map-h">
        <h2 id="map-h" className="post__h2">Which parts are agentic</h2>
        <p className="post__answer">FedPath has no autonomous agent inside the product today. Opportunity monitoring and change detection are scheduled automation, fit and compliance run on fixed rules, and one model writes labelled summaries of public notices. The agentic engineering is in how I build it: Claude Code and Codex working inside requirements, review and testing.</p>
        <p>It is worth being precise about the terms. Automation runs fixed steps on a schedule. AI processing uses a model for one step, like summarizing a document. An agent decides what to do next toward a goal: which tools to call, what to read, and when it is finished. Using an AI coding agent to build an application doesn’t make the application agentic.</p>
        <PartsMap />
        <p>Writing that table was useful in itself. Each row has different failure modes, different costs and a different way to test it, and treating them all as “the AI part” would have hidden that.</p>
      </section>

      <section id="rules" aria-labelledby="rules-h">
        <h2 id="rules-h" className="post__h2">Where I kept the model out</h2>
        <p>The obvious design for Fit Analysis was to hand a model the solicitation and the company profile and ask for a score. It would have demoed well. I chose fixed rules instead, for three reasons.</p>
        <p>The first is explanation. In a domain this regulated, someone deciding whether to spend a week on a proposal needs to see why an opportunity fits, and a score without reasons doesn’t give them that. Every Fit Analysis finding shows where it came from and is labelled as known or inferred. The second is data. Uploaded solicitations, company profiles and drafts never leave FedPath for an AI provider. The Compliance Matrix reads solicitations with the same fixed rules, and the free <a href="https://gofedpath.com/tools/rfp-compliance-matrix/">compliance matrix tool</a> does it in the browser, so the PDF never leaves the user’s machine. The third is testing. The same document always produces the same result, so ordinary tests with known solicitations catch a regression before a user does.</p>
        <p>Rules have a cost too. They miss requirements written in unusual ways, which is why rows the rules are unsure about are marked for review and the product tells people to read the attachments and amendments themselves. I would still make the same choice. A rule I can read and test is easier to trust than a model I can only sample.</p>
      </section>

      <section id="model" aria-labelledby="model-h">
        <h2 id="model-h" className="post__h2">The one place a model earns its keep</h2>
        <p>Federal notices are dense, and a short summary saves real reading time when you are scanning dozens of them. That is where FedPath uses a model. Some plans include summaries written by Google’s Gemini models, and the only input is the public SAM.gov notice. That boundary was the reason the feature was acceptable at all. The text is already public, so sending it to a provider risks little, and nothing a user uploads or types goes with it. Each summary is labelled as AI-written, with a reminder to check it against the notice.</p>
        <p>The requests run as background jobs on a separate server, through <Link to="/writing/omniroute-hermes-agent-docker/">OmniRoute</Link> as a gateway. Keeping them in the background keeps a slow or failed model call off the page someone is reading, and the gateway means changing models or providers is a configuration change. It is a small feature. It still needed decisions about data, failure, labelling and cost that a quick demo would skip.</p>
      </section>

      <section id="agent" aria-labelledby="agent-h">
        <h2 id="agent-h" className="post__h2">The agent I haven’t built</h2>
        <p>The feature people imagine when they hear “AI for government contracting” is an agent that investigates an opportunity for you. It would read the solicitation, pull the attachments and amendments, check them against your certifications and past work, find what’s missing and decide what to look into next. That would be a real agent, and parts of it would be useful.</p>
        <p>Before it is worth building, a few questions need answers I don’t have yet. It would have to read solicitations and company profiles, which today never reach a model, so it needs either a model running inside that boundary or a different promise to users. It needs an evaluation set of real solicitations with known answers, rerun on every prompt or model change, because a confident wrong reading of an eligibility requirement costs someone a week. It needs a budget per run, so an agent going in circles stops. And every claim it makes has to cite its source, the way Fit Analysis does now, with the person still making the decision.</p>
        <p>Until those are answered, rules plus one narrow model step make the better product. Working out when not to use an agent turned out to be a large part of learning agentic engineering. The <Link to="/writing/ai-agents-reliable-in-production/#readiness">readiness questions</Link> I use for any unattended agent apply here too.</p>
      </section>

      <section id="build" aria-labelledby="build-h">
        <h2 id="build-h" className="post__h2">Building it with coding agents</h2>
        <p>Where agents do the most work is in building FedPath. I use Claude Code and Codex for implementation, research, testing and code review. I write less of the code by hand and spend more of my time on requirements, architecture, tradeoffs and checking what was built. I described that lifecycle in <Link to="/writing/vibe-coding-vs-agentic-engineering/">vibe coding vs. agentic engineering</Link>, and FedPath is where I practice it.</p>
        <p>The lesson that keeps repeating is that a vague request produces something that looks complete and doesn’t solve the problem. Agents can write the wrong code very quickly. In this domain, plausible and wrong is the dangerous combination. As an example, a fit rule that handled a set-aside slightly wrong would pass a demo and then mislead someone deciding whether to bid. So requirements are written down before an agent starts, rules come with tests built on real notices, and security boundaries like what reaches an AI provider get reviewed by me, not delegated.</p>
        <p>The deterministic core helps here as well. Because the rules give the same output for the same input, I can check an agent’s change against tests with known answers. That is much harder to do for a feature whose output is different every run.</p>
      </section>

      <section id="free" aria-labelledby="free-h">
        <h2 id="free-h" className="post__h2">Why the core tools are free</h2>
        <p>Someone exploring government contracting shouldn’t need several subscriptions before they know whether the market makes sense for their business. On FedPath, searching every open opportunity, the readiness check, the SAM.gov registration checklist and the guides are free without an account. The free plan adds a handful of Fit Analyses and Go/No-Go decisions each month.</p>
        <p>The paid plans add the work FedPath does on your behalf: daily briefs, checking saved opportunities for amendments, alerts and room for a team. That is also where the operating costs are, in scheduled jobs, data sync and model calls. FedPath is in private beta, nothing is charged yet, and prices will be set before billing starts. If it helps a small business win work, the free tier has done its job. If it becomes useful enough that businesses want more of the work done for them, that is how I hope it becomes sustainable.</p>
      </section>

      <section id="learning" aria-labelledby="learning-h">
        <h2 id="learning-h" className="post__h2">Still learning</h2>
        <p>Not every idea has worked. Some screens turned out too complicated and had to be simplified. Some agent-written implementations needed redesigning once I understood the problem better. A few features that sounded impressive turned out to give users very little. That is the reason to learn on a real product. A demo can’t tell you a feature isn’t worth having.</p>
        <p>The hard parts so far have been the familiar ones: deciding what to build, protecting people’s data, testing what matters and knowing when the simpler tool is the right one.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Use a model where it saves real work</h2>
      <div className="post__close-copy">
        <p className="lead">FedPath gave me a place to learn agentic engineering where a mistake costs someone else their time.</p>
        <div className="post__close-actions">
          <Link to="/projects/fedpath/" className="action">Read the FedPath case study <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
