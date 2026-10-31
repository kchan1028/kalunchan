import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Learning log, part one of a planned series. Confirmed by KC: uses ChatGPT and
// Claude Code daily, has tried OpenClaw, and has deployed the open-source Hermes
// Agent (Nous Research) on a Hostinger VPS. Target roles and compensation are
// KC's own statement. Status is explicit: the job-search automation is planned,
// not built; nothing below reports a result. Hermes facts (skills, cron,
// gateway, VPS footprint) are from the project's README and docs, Oct 2026.
// Job-board endpoints are the vendors' public posting APIs; access terms are
// theirs. No years in visible text.

export const toc = [
  ['why-hermes', 'Why I started experimenting with Hermes'],
  ['the-problem', 'The problem: a senior job search is repetitive'],
  ['design', 'Designing the agent'],
  ['what-hermes-adds', 'What Hermes adds, and what it does not'],
  ['engineering', 'Engineering considerations'],
  ['next', 'What I plan to try next'],
  ['learning', 'What I hope to learn'],
];

const pipeline = {
  label: 'The job-search agent as I plan to build it',
  key: 'The path a posting takes',
  tiers: [
    { name: 'Agent', nodes: [{ id: 'hermes', label: 'Hermes Agent', sub: 'cron job runs a skill' }] },
    { name: 'Sources', nodes: [{ id: 'gh', label: 'Greenhouse boards', sub: 'public JSON' }, { id: 'lever', label: 'Lever postings' }, { id: 'ashby', label: 'Ashby boards' }] },
    { name: 'Deterministic', nodes: [{ id: 'norm', label: 'Normalize', sub: 'one schema' }, { id: 'dedupe', label: 'Dedupe', sub: 'same job, many boards' }, { id: 'filter', label: 'Filter', sub: 'title · level · pay · location' }] },
    { name: 'Judgment', nodes: [{ id: 'fit', label: 'LLM fit analysis', sub: 'only what survived the filter' }] },
    { name: 'Record', nodes: [{ id: 'db', label: 'Database', sub: 'every posting, every score' }, { id: 'report', label: 'Daily report', sub: 'Telegram or email' }] },
    { name: 'Decision', nodes: [{ id: 'me', label: 'Me', sub: 'apply · skip · tune' }] },
  ],
  edges: [
    ['hermes', 'gh', null, true], ['hermes', 'lever'], ['hermes', 'ashby'],
    ['gh', 'norm', null, true], ['lever', 'norm'], ['ashby', 'norm'],
    ['norm', 'dedupe', null, true], ['dedupe', 'filter', null, true],
    ['filter', 'fit', null, true],
    ['fit', 'db', null, true], ['db', 'report', null, true],
    ['report', 'me', null, true],
  ],
};

export default function Body() {
  return (
    <>
      <section id="why-hermes" aria-labelledby="why-hermes-h">
        <h2 id="why-hermes-h" className="post__h2">Why I started experimenting with Hermes</h2>
        <p>I use ChatGPT and Claude Code most days, as tools for research, drafting and review, which I wrote about in <Link to="/writing/building-software-before-and-after-ai/">building software before and after AI</Link>. Both help enough that I wanted to see what else I could build with one. The thing I kept bumping into is that a chat is a conversation. It starts when I open it, it ends when I close it, and whatever it did in between happened because I was sitting there asking.</p>
        <p>An agent is a different shape. It runs when I am not there, remembers what it did last time, has tools wired to my own systems, and reports back. I tried OpenClaw, an open-source agent that lives on your own machine with real shell access, and then deployed Hermes Agent, the open-source agent from Nous Research, on a Hostinger VPS. Hermes caught my interest for three reasons. It is built around skills, small instruction files the agent loads when a task needs them and can write for itself. It has a scheduler, so a task can run on a cron schedule without me. And it has a gateway that talks to Telegram and other messaging platforms, so the results can come to my phone. The project says it runs on a five-dollar VPS, and so far that is true.</p>
        <p className="post__answer">A conversational assistant and a persistent agent usually run on the same model. The difference is that the agent has infrastructure around it: a place to run, a schedule, state that survives between runs, tools that reach my own systems, and a channel to report on. That infrastructure is what I wanted to learn by building, and self-hosting means I own every piece of it.</p>
        <p>Self-hosting also appeals to the part of me that spent years <Link to="/work/carrier-capacity/">automating carrier network operations with scripts</Link>. An agent on a VPS with cron, a database and a messaging channel is a system with familiar scheduling, storage and messaging components, plus model behavior I need to learn to evaluate. I learn best by building, so I picked a problem I actually have.</p>
      </section>

      <section id="the-problem" aria-labelledby="the-problem-h">
        <h2 id="the-problem-h" className="post__h2">The problem: a senior job search is repetitive</h2>
        <p>I am looking for my next engineering leadership opportunity, where I can build teams, shape technical direction and stay close to delivery. Searching for roles at that level by hand is tedious in ways that are specific to the level. The titles are inconsistent across companies. Compensation is published on some boards, in some states, and not elsewhere. A large share of postings with the right title want something I am not, or are the wrong size of company, or have been open for months. Tracking what I have seen, what I applied to and what I heard back is a spreadsheet that drifts out of date in a week.</p>
        <p>I could keep asking an assistant to find jobs for me, and it would, one conversation at a time, with no memory of yesterday's results. What I want is a system that researches continuously, evaluates against my criteria, remembers what it has already shown me, and hands me a short list each morning. That is an engineering problem, and a good one to learn an agent framework on, because every part of it is checkable.</p>
      </section>

      <section id="design" aria-labelledby="design-h">
        <h2 id="design-h" className="post__h2">Designing the agent</h2>
        <p>The design is a pipeline, and most of it is not AI.</p>
        <div className="post__diagram">
          <Diagram spec={pipeline} id="job-agent" no="689-1" />
        </div>
        <p>Hermes runs a scheduled job that executes a job-research skill. The skill pulls postings from public job-board endpoints. Many companies host their careers pages on Greenhouse, Lever or Ashby, and each exposes a public JSON endpoint per company board: Greenhouse through its Job Board API, Lever through its postings endpoint, and Ashby through its job-board posting API, which can include structured compensation where the employer has opted in. The catch, and it is a real one, is that these are per-company endpoints, so the agent needs a list of companies to watch before it can watch anything. Building and maintaining that list is a task in itself, and it is the first thing I expect to get wrong.</p>
        <p>From there the pipeline is deterministic until the last step. Normalize every posting into one schema: title, company, location, remote policy, level, pay range if published, posting date, source URL. Remove duplicates, because the same role appears on several boards and aggregators. Filter on the things that need no judgment: title keywords, seniority, location, published pay against the floor. Only the postings that survive go to the language model, which reads the description against my background and explains the fit. Everything, scored or not, lands in a database so tomorrow's run knows what today's saw, and a daily report goes to Telegram. Then I decide. Applying and talking to recruiters stay with me.</p>
        <p className="post__answer">Structured data and deterministic filtering come before the language model for the same reason an index comes before a table scan. The model is the most expensive, slowest and least predictable step in the pipeline, so it should see the smallest number of postings that could possibly matter, and the filters that cut the list should be ones I can test with a unit test rather than a prompt.</p>
      </section>

      <section id="what-hermes-adds" aria-labelledby="what-hermes-adds-h">
        <h2 id="what-hermes-adds-h" className="post__h2">What Hermes adds, and what it does not</h2>
        <p>ChatGPT and Claude can do most of these individual tasks today. They browse, they call tools, they have integrations, and Claude Code will happily help write the pipeline. What a self-hosted agent adds is control over how the system operates.</p>
        <p>Self-hosting means the agent, its state and its credentials live on a server I administer. Persistent execution means it runs on a schedule whether or not I am awake, and keeps its own memory and session state between runs. Custom integrations mean the tools are mine: the job-board clients, the database, the report format, all code I can read and change. Scheduling is a cron entry in the agent's own scheduler, not a reminder to go ask again. Workflow orchestration means the sequence above is a defined process with logs, not a chat transcript. And infrastructure ownership means that when the model provider changes a product, the architecture around it is still mine. None of that is beyond a hosted assistant with the right tools attached. It is just that with Hermes the plumbing is explicit, and explicit plumbing is what I wanted to study.</p>
      </section>

      <section id="engineering" aria-labelledby="engineering-h">
        <h2 id="engineering-h" className="post__h2">Engineering considerations</h2>
        <p>Having led engineering for a while, I can see the ways this goes wrong before I have written it, which is the only advantage experience reliably gives you.</p>
        <p>Architecture: this is one modular application on one server. A fetcher per job board, a normalizer, a filter, a scorer, a store, a reporter, each a module with a test. There is no reason for queues or services, and <Link to="/writing/hidden-cost-of-software-architecture/">every box I add is a bill</Link>. Cost: the VPS is cheap and the model is not. Inference is billed per token, so the number of postings reaching the model, and the length of each prompt, is the cost driver, which is one more reason the filter comes first. I plan to log cost per run from the start. Reliability: job boards go down, rate-limit and change their formats. Every fetch needs a timeout, a retry with backoff and a way to report that a source failed without failing the run. Duplicates need a stable key, probably company plus normalized title plus location, because posting IDs differ by board.</p>
        <p>Security: an agent with shell access on a server is a target. Credentials go in a secrets store, not in a skill file. The agent runs as a user with the least privilege the job needs. Anything that could spend money or send a message on my behalf is gated, and I keep in mind that the agent reads text from the open web, which is untrusted input that can carry instructions. Data quality: a job must link back to the employer's own posting, and published pay must be kept separate from anything estimated. A source link lets me check the posting behind a score, including whether it is still available and says what the report claims. Observability: execution time, errors by source, cost per run and the number of matches I actually acted on. Matches I acted on are one measure of usefulness, alongside relevance, missed opportunities and reliable delivery. Human oversight: the agent never applies, never emails a recruiter and never edits my resume without me approving the specific action. That is a design rule, not a preference, and I wrote the same rule for infrastructure in <Link to="/writing/devops-from-expect-scripts-to-ai-agents/#guardrails">don't hand AI the production keys</Link>.</p>
      </section>

      <section id="next" aria-labelledby="next-h">
        <h2 id="next-h" className="post__h2">What I plan to try next</h2>
        <p className="post__answer">Current status: Hermes Agent is deployed and running on a Hostinger VPS. The job-search automation is an experiment I am planning, not a working system. Nothing in this post reports a result, because there are none yet.</p>
        <ol className="post__list">
          <li>Confirm Hermes can research current openings at all, by asking it in chat and reading what it actually did.</li>
          <li>Turn that into a reusable job-research skill, with the criteria written down rather than typed each time.</li>
          <li>Connect the public job-board endpoints for a short list of companies, and find out how the list gets maintained.</li>
          <li>Store every posting and score in a database, so a run can tell new from seen.</li>
          <li>Schedule the run with the agent's cron, and watch what breaks overnight.</li>
          <li>Send a daily report through Telegram or email, short enough to read over coffee.</li>
          <li>Measure matching accuracy against my own judgment, and cost per run, for a few weeks.</li>
          <li>Only then look at resume tailoring and application tracking, still approval-gated.</li>
        </ol>
        <p>Each of those is a post if it turns out to be interesting, and I expect three or four of them to be. The deployment, the board integrations, the matching, the memory, the scheduling and the cost are each their own lesson, and I would rather document them as I learn them than write one triumphant post at the end that hides what went wrong.</p>
      </section>

      <section id="learning" aria-labelledby="learning-h">
        <h2 id="learning-h" className="post__h2">What I hope to learn</h2>
        <p>This experiment lets me test how a model works with scheduled jobs, durable state and tools connected to real systems. I want to understand how to detect a poor result, recover from a failed run and decide which actions need my review. Some of the infrastructure is familiar, though I still need to test where model-driven behavior changes the design. I have scheduled jobs on carrier networks, kept state across the components of a <Link to="/writing/open-source-voip-distributed-systems-lessons/">VoIP platform</Link>, and built reporting that someone actually read.</p>
        <p>I want to find out which of those familiar principles transfer unchanged to a system with a language model in the middle, which ones need rethinking, and what a language model adds that no amount of deterministic code could. If the answer turns out to be that the agent is a cron job with a very good text parser attached, that is still worth knowing, and it will still find me a job.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Learning by building, with the results to come</h2>
      <div className="post__close-copy">
        <p className="lead">A self-hosted agent is a familiar system with a model in the middle: a schedule, state, tools, a channel and a person who decides.</p>
        <p>The next post in this series will cover what the first scheduled runs actually did, including what broke.</p>
        <div className="post__close-actions">
          <Link to="/writing/#chapter-lab" className="action">More from the lab <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
