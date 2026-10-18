import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Series "Still Building", part 3. Facts from the site and KC:
// experiments with Claude Code, ChatGPT, OpenAI Codex, Hermes Agent on a VPS,
// OmniRoute, scheduled agents and multiple providers; a job-search agent in
// progress (not in production, stated); FedPath deliberately keeps
// solicitations away from AI services and scores deterministically (FedPath
// case study); Useful Little Tools research assistant planned. Distributed
// systems lessons from the VoIP platform. No production results claimed.

export const toc = [
  ['demo', 'The afternoon it worked'],
  ['production', 'What production asks that a demo never does'],
  ['reliability', 'Reliability is distributed systems again'],
  ['cost', 'Cost is an architecture decision'],
  ['security', 'Scope what the agent can touch'],
  ['readiness', 'How I would decide it is ready'],
];

const checklist = [
  { q: 'Who owns it?', a: 'A named person who gets the alert, not “the AI”' },
  { q: 'What does done look like?', a: 'A measurable result someone checks, beyond the run exiting cleanly' },
  { q: 'What happens when the model or a tool fails?', a: 'Timeouts, bounded retries with backoff, and a failed run that says so' },
  { q: 'What if it runs twice?', a: 'Idempotent writes, keyed so a repeat changes nothing' },
  { q: 'What if it does not run at all?', a: 'A missed run is detected, not discovered a week later' },
  { q: 'What can it touch?', a: 'Least-privilege credentials and tools; irreversible actions behind approval' },
  { q: 'What does a run cost?', a: 'Tokens and dollars logged per run, with a budget that stops it' },
  { q: 'Would a script do?', a: 'Deterministic code for everything that does not need judgment' },
];

function Readiness() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 696-1</span> Eight questions before an agent runs unattended</caption>
        <thead><tr><th scope="col">Question</th><th scope="col">What a good answer looks like</th></tr></thead>
        <tbody>{checklist.map((c) => <tr key={c.q}><th scope="row">{c.q}</th><td>{c.a}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="demo" aria-labelledby="demo-h">
        <h2 id="demo-h" className="post__h2">The afternoon it worked</h2>
        <p>This is the third story in Still Building, and the most current one. For the past while I have been experimenting with AI agents: Claude Code and OpenAI’s Codex in the terminal, ChatGPT in the browser, Hermes Agent on a VPS I administer, OmniRoute as a gateway across several model providers, and scheduled jobs that run without me. I am building a job-search agent on that setup and planning a content research assistant for Useful Little Tools.</p>
        <p>Getting an agent to work the first time is delightful. You describe the task, connect a tool or two, run it, and an afternoon later something that would have taken a week of glue code is answering questions and calling APIs on your behalf. The first time my agent came back with a sensible answer I felt the way I felt the first time a script I wrote configured a router while I watched. Then I asked the question I have asked about every system I have run: what happens tomorrow, at six in the morning, when I am not watching?</p>
        <p className="post__answer">An AI agent demo shows that a model can do the task once with a person watching. A production agent has to do it every day without one: survive failed calls and missed schedules, never do the same irreversible thing twice, stay inside a budget, touch only what it is allowed to, and produce results someone can trust and check. Alongside evaluating the model’s output, I need to design recovery, permissions and the state kept between runs.</p>
      </section>

      <section id="production" aria-labelledby="production-h">
        <h2 id="production-h" className="post__h2">What production asks that a demo never does</h2>
        <p>A demo has an operator. I typed the prompt, I saw the answer, I would have caught a wrong one, and I would never have let it email anyone. Take me out and every one of those duties has to move into the system. Instructions have to be self-contained because there is no conversation to remember. Data has to be on disk because there is no me to paste it in. Errors have to be reported because nobody is reading the screen. And the decision about whether the output is good enough has to be designed, not felt.</p>
        <p>None of my agents is in production yet, and I am saying so plainly because the gap between “it worked” and “it runs” is exactly what this post is about.</p>
      </section>

      <section id="reliability" aria-labelledby="reliability-h">
        <h2 id="reliability-h" className="post__h2">Reliability is distributed systems again</h2>
        <p>When I built a VoIP platform, a single call crossed signaling, media, business logic and billing, and each of those failed independently. I wrote about the lessons in <Link to="/writing/open-source-voip-distributed-systems-lessons/">what open-source VoIP taught me about distributed systems</Link>. An agent is the same shape with a model in the middle.</p>
        <p>The model API will time out, rate-limit you and occasionally return something malformed. Every call needs a timeout and a bounded retry with exponential backoff, and the retries need a ceiling, because an agent that retries forever is an agent that spends forever. Tools will fail too, and the agent needs to know which failures are worth retrying and which mean stop.</p>
        <p>Idempotency matters more than people expect. If a run dies halfway and the scheduler starts it again, will it send the report twice, apply the label twice, or, worse, submit the application twice? Every action with a side effect needs a key so a repeat changes nothing, the same discipline that kept a replayed billing event from charging a caller twice.</p>
        <p>Schedulers miss runs. A VPS reboots, a cloud schedule starts late, a desktop task skips because the laptop was asleep. A missed run has to be detected, by something other than me noticing on Friday that Monday’s report never came. State has to live somewhere durable, so the next run knows what the last one did. And observability is not optional: what ran, how long it took, what it called, what it cost, and whether the result passed whatever check I defined. A green status on a run means the process exited. It does not mean the task succeeded, and I have learned to read the transcript before I believe the light.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">Cost is an architecture decision</h2>
        <p>Every model call has a price, and an unattended agent makes a lot of them. Token consumption is set by design choices: how much context you send, how many steps the agent takes, how many items reach the model at all. That is why I put deterministic filtering in front of the model in my job-search design, so the expensive step sees only what could possibly matter.</p>
        <p>Different steps deserve different models. Extracting fields from a short posting is cheap work a fast, inexpensive model does well. Judging fit and drafting text is where a stronger model pays for itself. A gateway like <Link to="/writing/omniroute-hermes-agent-docker/">OmniRoute</Link> makes switching providers and falling back easier, and adds a container to run and a key store to secure. Free tiers are useful for experiments and unreliable for anything you depend on. Local models trade a bill for hardware and maintenance. And sometimes the right amount of AI is zero. FedPath scores opportunities with transparent rules and keeps solicitation documents on its own server rather than sending them to a model, because users need to see why a contract scored the way it did. That was a deliberate architectural decision, and I would make it again.</p>
      </section>

      <section id="security" aria-labelledby="security-h">
        <h2 id="security-h" className="post__h2">Scope what the agent can touch</h2>
        <p>An agent with tools is a program that acts with your credentials, takes instructions from text, and reads text from the open internet. That last part should worry anyone who has run production systems, because untrusted input can carry instructions. The defences are the old ones, applied with more care. Least-privilege credentials created for the agent alone, so revoking one breaks nothing else. Secrets in a secrets store, never in a prompt or a skill file. A tool allow-list instead of a shell with root. A human approval in front of anything irreversible: sending, publishing, paying, deleting, applying. And an audit trail of what the agent did, so that “why did it do that?” has an answer.</p>
        <p>I learned deny-by-default on carrier routers long before anyone said “agent”. It is the same rule, and it matters more when the thing you are configuring can decide for itself what to try next.</p>
      </section>

      <section id="readiness" aria-labelledby="readiness-h">
        <h2 id="readiness-h" className="post__h2">How I would decide it is ready</h2>
        <p>As an engineering leader, the question I care about is whether I would let the agent run unattended with my name on the result. Impressive is a lower bar. These are the questions I would ask a team before saying yes.</p>
        <Readiness />
        <p>Behind those sit the usual production commitments: a reliability target that someone agreed to, monitoring that pages a person, an incident process that includes “turn the agent off”, and a cost budget reviewed like any other line item. If a team cannot answer them, the agent is still a demo, however good the demo is.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Before I leave an agent running</h2>
      <div className="post__close-copy">
        <p className="lead">AI agents let me attempt work I could not have built a few years ago. Before I rely on one, I need to know how it recovers from failure, what it can access and how I will check its output.</p>
        <p className="post__close-principle">I am still working toward an agent I would trust to run unattended with my name on the result.</p>
        <p>The series began at <Link to="/writing/from-cisco-routers-to-ai-agents/">a router console</Link>, and I still use the troubleshooting habits I learned there.</p>
        <div className="post__close-actions">
          <Link to="/writing/?path=still-building" className="action">The whole series <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
