import { useState } from 'react';
import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Learning article, Hermes series. From KC: Hermes Agent (one-click Hostinger
// Docker install, v0.21.5 at the time) on a Hostinger VPS, VS Code Remote-SSH,
// Telegram gateway; exploring OmniRoute. Verified against OmniRoute's README and
// docker-compose.selfhost.yml (diegosouzapw/OmniRoute, MIT, release v3.8.52
// branch) and the Hermes provider docs, Oct 2026: docker run command, port
// 20128, /v1 endpoint, Bearer key from Dashboard > Endpoints, providers added
// in Dashboard > Providers, auto/combos routing, quota-aware fallback,
// analytics headers; Hermes custom endpoint via model.provider custom +
// base_url + api_key/key_env. Status is explicit: the OmniRoute integration is
// in progress, not verified end to end. No secrets, no years in visible text.

export const toc = [
  ['what', 'What OmniRoute is'],
  ['why-together', 'Why put a router in front of an agent'],
  ['architecture', 'Two architectures, side by side'],
  ['install', 'Step by step on the VPS'],
  ['lifecycle', 'How a request travels'],
  ['tradeoffs', 'Costs, performance and security'],
  ['job-agent', 'My job-search agent as the test case'],
  ['need-it', 'Do you really need an AI model router?'],
];

const direct = {
  label: 'Direct: Hermes calls one provider',
  key: 'The request path',
  tiers: [
    { name: 'Laptop', nodes: [{ id: 'mac', label: 'MacBook', sub: 'VS Code · Remote-SSH' }] },
    { name: 'Hostinger VPS', nodes: [{ id: 'hermes', label: 'Hermes Agent', sub: 'Docker · Telegram · cron · tools' }] },
    { name: 'Provider', nodes: [{ id: 'anthropic', label: 'Anthropic API', sub: 'one key, one bill' }] },
  ],
  edges: [['mac', 'hermes', null, true], ['hermes', 'anthropic', null, true]],
};

const routed = {
  label: 'Routed: Hermes calls OmniRoute, which calls providers',
  key: 'The request path',
  tiers: [
    { name: 'Laptop', nodes: [{ id: 'mac', label: 'MacBook', sub: 'VS Code · Remote-SSH' }] },
    { name: 'Hostinger VPS', nodes: [{ id: 'hermes', label: 'Hermes Agent', sub: 'Docker · Telegram · cron · tools' }, { id: 'omni', label: 'OmniRoute', sub: 'Docker · /v1 · dashboard · keys' }] },
    { name: 'Providers', nodes: [{ id: 'anthropic', label: 'Anthropic' }, { id: 'openai', label: 'OpenAI' }, { id: 'google', label: 'Google Gemini' }, { id: 'other', label: 'Others', sub: 'free tiers · local models' }] },
  ],
  edges: [['mac', 'hermes', null, true], ['hermes', 'omni', null, true], ['omni', 'anthropic', null, true], ['omni', 'openai'], ['omni', 'google'], ['omni', 'other']],
};

const modes = [
  {
    id: 'direct', name: 'Direct', spec: direct,
    gains: ['One container, one key, one bill', 'Nothing between the agent and the model to fail or secure', 'Hermes native provider features, including Anthropic OAuth'],
    costs: ['Changing provider means changing Hermes config', 'No fallback when the provider or the quota is down', 'Cost visibility is whatever the provider’s console shows'],
  },
  {
    id: 'routed', name: 'Through OmniRoute', spec: routed,
    gains: ['One endpoint, many providers, swapped in a dashboard', 'Quota-aware fallback and retries when a provider fails', 'Usage, cost and latency in one place, per key'],
    costs: ['A second container to run, update, back up and secure', 'A second place to store API keys', 'Added hop on every request, and a new failure domain'],
  },
];

function Modes() {
  const [active, setActive] = useState(1);
  return (
    <figure className="layers post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 691-1</span> Two ways to wire the same agent to a model
        <span className="journey__key label">Switch between them. The second one gains flexibility and pays for it in moving parts.</span>
      </figcaption>
      <div className="phases__tabs" role="tablist" aria-label="Architecture">
        {modes.map((m, i) => (
          <button key={m.id} id={`mode-tab-${i}`} type="button" role="tab" className="phases__tab" aria-selected={i === active} aria-controls={`mode-panel-${i}`} tabIndex={i === active ? 0 : -1} onClick={() => setActive(i)}>
            <span className="phases__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="phases__name">{m.name}</span>
            <span className="phases__job">{m.spec.label}</span>
          </button>
        ))}
      </div>
      {modes.map((m, i) => (
        <div key={m.id} id={`mode-panel-${i}`} role="tabpanel" aria-labelledby={`mode-tab-${i}`} hidden={i !== active}>
          <div className="post__diagram">
            <Diagram spec={m.spec} id={`arch-${m.id}`} no={`691-1${m.id === 'direct' ? 'a' : 'b'}`} />
          </div>
          <div className="phases__panel">
            <div>
              <p className="label">What you gain</p>
              <ul className="ticks">{m.gains.map((g) => <li key={g}>{g}</li>)}</ul>
            </div>
            <div>
              <p className="label">What it costs you</p>
              <ul className="ticks">{m.costs.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </div>
      ))}
    </figure>
  );
}

const lifecycle = [
  ['Telegram', 'I send a message to the bot.'],
  ['Hermes', 'The gateway receives it and loads the session, memory and any skill the task needs.'],
  ['Hermes', 'The agent decides the next action: answer, call a tool, or ask the model.'],
  ['Hermes', 'It sends a chat completion request to its configured endpoint, which is now OmniRoute’s /v1.'],
  ['OmniRoute', 'The router picks a provider and model according to the model name I asked for, direct or an auto alias or a combo, and applies its fallback rules if the first choice fails.'],
  ['Provider', 'Anthropic, OpenAI, Google or whoever was chosen generates the response.'],
  ['Hermes', 'It reads the response, runs any tool call the model asked for, and loops until the task is done.'],
  ['Telegram', 'The result comes back to my phone.'],
];

function Lifecycle() {
  return (
    <figure className="post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 691-2</span> One message, eight steps, four actors
        <span className="journey__key label">Steps 3 and 7 are the agent loop. Step 5 is the only one the router owns.</span>
      </figcaption>
      <ol className="journey__list">
        {lifecycle.map(([actor, text], i) => (
          <li key={i} className={`journey__stage${actor === 'OmniRoute' ? ' is-accent' : ''}`}>
            <span className="journey__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="journey__node" aria-hidden="true" />
            <div className="journey__body">
              <p className="journey__title"><span className="journey__tag mono">{actor}</span>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Code({ title, children }) {
  return (
    <div className="post__code">
      <div className="post__code-bar"><span className="label">{title}</span></div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

export default function Body() {
  return (
    <>
      <section id="what" aria-labelledby="what-h">
        <h2 id="what-h" className="post__h2">What OmniRoute is</h2>
        <p>This is the third post in my self-hosted agent experiment. The <Link to="/writing/connect-hermes-agent-hostinger-vps-vs-code/">first one</Link> got me from my laptop to the Hermes Agent container on a Hostinger VPS through VS Code; the <Link to="/writing/building-an-ai-job-search-agent-with-hermes/">second</Link> designed the job-search agent I want to run on it. Somewhere between the two I started wondering which model that agent should call, and whether I wanted the answer baked into the agent's configuration. That is how I found OmniRoute.</p>
        <p className="post__answer">OmniRoute is an open-source, MIT-licensed AI gateway you run yourself. It exposes one OpenAI-compatible endpoint, and behind it you connect the providers you have accounts with: Anthropic, OpenAI, Google, OpenRouter, free tiers, local models. Your application sends every request to the gateway, which picks a provider and model by the name you asked for or by a routing policy, retries and falls back when a provider fails or a quota runs out, and records usage, cost and latency in a dashboard.</p>
        <p>The point of a model router is that your application talks to one address with one key. Calling Anthropic, OpenAI and Google directly means three SDKs or three request formats, three keys in three places, three places to look when something fails, and a code change when you want to move a workload from one to another. A router collapses that to one. OmniRoute speaks the OpenAI chat-completions protocol, which almost every agent framework already supports, so the application usually needs nothing more than a base URL and a key.</p>
        <p>What I have been able to confirm from the project's own documentation: the endpoint is <code>/v1</code> on port 20128, with the dashboard on the same port in the single-container setup; providers and their keys are added in the dashboard, and the keys are stored encrypted; the gateway's own API key is copied from the dashboard's Endpoints page; routing is by model name, with <code>auto</code> aliases such as <code>auto/coding</code>, <code>auto/fast</code> and <code>auto/cheap</code>, or "combos" built from a list of strategies that includes priority, round-robin and cost-optimized; fallback is quota-aware, with a circuit breaker per provider; and the response carries usage and cost headers, with per-key spend limits and live analytics in the dashboard. What depends on version and configuration: the exact set of providers, which free tiers work without a payment method, and the separate API port that the self-host compose file uses. The project moves fast, so read the README for the version you install rather than trusting this post for details.</p>
        <p>What it does not solve is anything above the model call. It does not know what my agent is doing, which step it is on, or whether a cheaper model is acceptable for this particular prompt. That judgment stays in the application, and I will come back to it.</p>
      </section>

      <section id="why-together" aria-labelledby="why-together-h">
        <h2 id="why-together-h" className="post__h2">Why put a router in front of an agent</h2>
        <p>Hermes and OmniRoute do different jobs. Hermes is the agent runtime: it holds the conversation, keeps memory, runs tools, talks to Telegram, schedules jobs with its cron, and loads skills. OmniRoute is the model gateway: it holds provider credentials, chooses a model and provider for each request, handles retries and fallback, and keeps the ledger. Hermes already supports many providers directly, including Anthropic through an API key or a Claude Code login, so the router is not required to make the agent work.</p>
        <p>Separating the two is useful when the model choice is a thing you expect to change. Switching the agent from one provider to another becomes a dashboard change rather than a config edit and restart. A provider outage or an exhausted quota becomes a fallback instead of a failed cron run at three in the morning. Several agents, or several jobs within one agent, can share one set of credentials and one cost report. And the credentials live in one hardened place instead of inside every container that needs them.</p>
        <p>It is simpler to connect Hermes directly when there is one agent, one provider and one person watching it. That describes my setup today, which is why the honest version of this post is that I am adding the router to learn what it costs, not because my one cron job needs it yet.</p>
      </section>

      <section id="architecture" aria-labelledby="architecture-h">
        <h2 id="architecture-h" className="post__h2">Two architectures, side by side</h2>
        <Modes />
        <p>Both diagrams start from the same laptop and the same VPS. The difference is one box, and every item in the second list is the price of that box. If the left list does not hurt yet, the right list is not worth paying for yet.</p>
      </section>

      <section id="install" aria-labelledby="install-h">
        <h2 id="install-h" className="post__h2">Step by step on the VPS</h2>
        <p className="post__answer">Status: Hermes Agent runs on my Hostinger VPS from the one-click Docker install, reachable from VS Code, with the Telegram gateway working. The OmniRoute steps below are taken from the project's documentation and my setup notes. I have not yet verified the full chain, Telegram to Hermes to OmniRoute to a provider and back, so treat the sequence as the procedure, and the final test as the thing I will report on next.</p>
        <p><strong>1. Connect and look around.</strong> From the laptop, <code>ssh hermes</code>, or open the remote window in VS Code. Then see what is running and where Hermes keeps its state.</p>
        <Code title="VPS">{`docker ps
docker inspect HERMES_CONTAINER --format '{{json .Mounts}}'`}</Code>
        <p>The mounts matter because Hermes's configuration file is what you will edit, and it has to be on a volume or the change disappears when the container is recreated. The previous post covers finding the container and its volumes in detail.</p>
        <p><strong>2. Verify the image.</strong> The official image is <code>diegosouzapw/omniroute</code> on Docker Hub, published by the project that lives at <code>github.com/diegosouzapw/OmniRoute</code>. Several forks mirror the README under other names; use the upstream one, and check the README's install section for the current command before running mine.</p>
        <p><strong>3. Create a shared network.</strong> This is the step that makes the rest work. Inside a container, <code>localhost</code> means that container, so Hermes cannot reach a gateway bound to the host's loopback address. Two containers on the same user-defined Docker network can reach each other by container name, with no host port involved.</p>
        <Code title="VPS">{`docker network create ai
docker network connect ai HERMES_CONTAINER`}</Code>
        <p><strong>4. Run OmniRoute.</strong> The README's command binds the dashboard to the host's loopback so it is not reachable from the internet, and keeps data in a named volume. I add the network so Hermes can reach it, and the memory flag the README suggests for agent workloads.</p>
        <Code title="VPS">{`docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \\
  --network ai \\
  -p 127.0.0.1:20128:20128 \\
  -v omniroute-data:/app/data \\
  -e OMNIROUTE_MEMORY_MB=3072 \\
  diegosouzapw/omniroute:latest
docker logs -f omniroute   # wait for it to finish starting`}</Code>
        <p><strong>5. Open the dashboard from your laptop.</strong> It is bound to the VPS's loopback, so tunnel it over SSH rather than exposing it.</p>
        <Code title="Laptop">{`ssh -L 20128:127.0.0.1:20128 hermes
# then open http://localhost:20128 in a browser on the laptop`}</Code>
        <p><strong>6. Add providers and get the gateway key.</strong> In the dashboard, open Providers, choose a provider and paste its API key or complete its sign-in flow. Then open Endpoints and copy the OmniRoute key. That key is what Hermes will send; the provider keys stay inside OmniRoute, encrypted on its data volume. Nothing in this step belongs in a file you commit or a screenshot you post.</p>
        <p><strong>7. Test the gateway from the VPS.</strong> First from the host, then from inside the Hermes container, because those are two different networks.</p>
        <Code title="VPS">{`# from the host, over the published loopback port
curl -s http://127.0.0.1:20128/v1/models -H "Authorization: Bearer $OMNIROUTE_KEY" | head -c 400

# from inside the Hermes container, over the shared network
docker exec -it HERMES_CONTAINER sh -c \\
  'curl -s http://omniroute:20128/v1/models -H "Authorization: Bearer $OMNIROUTE_KEY" | head -c 400'`}</Code>
        <p>If the second one fails and the first works, the containers are not on the same network, or the API is on a different port than the dashboard in your version. The self-host compose file, for example, puts the API on 20129 and the dashboard on 20128; the single-container README command uses 20128 for both. Check which you are running before changing anything in Hermes.</p>
        <p><strong>8. Point Hermes at it.</strong> Hermes treats any OpenAI-compatible server as a custom endpoint. Inside the container, run the interactive picker and choose the custom endpoint option, or edit the config directly. The base URL is the container name on the shared network, ending in <code>/v1</code>. Put the key in the env file through <code>key_env</code> rather than inline.</p>
        <Code title="Inside the Hermes container">{`hermes config set OMNIROUTE_API_KEY omr_...   # written to ~/.hermes/.env
hermes config edit`}</Code>
        <Code title="~/.hermes/config.yaml (excerpt)">{`model:
  provider: custom
  base_url: http://omniroute:20128/v1
  key_env: OMNIROUTE_API_KEY
  default: auto/coding        # or a specific provider/model name OmniRoute exposes`}</Code>
        <Code title="Inside the Hermes container">{`hermes config check
hermes chat          # ask something small and watch the OmniRoute dashboard register it`}</Code>
        <p><strong>9. Test through Telegram.</strong> Send the bot a message and watch two things at once: <code>docker logs -f HERMES_CONTAINER</code> for the request leaving, and the OmniRoute dashboard for it arriving, with the provider it chose and what it cost. This is the test I have not completed yet, and the one that proves the chain.</p>
        <p><strong>10. Make it survive a rebuild.</strong> OmniRoute's state is in the <code>omniroute-data</code> volume. Hermes's config is in its own volume if the template mounted one, which step 1 told you. The network connection to the Hermes container does not survive if the container is recreated by a template update, so after any Hermes update, run the <code>docker network connect</code> command again, or recreate the container with <code>--network ai</code>. Write that down; it is the kind of thing that fails silently a month later.</p>
      </section>

      <section id="lifecycle" aria-labelledby="lifecycle-h">
        <h2 id="lifecycle-h" className="post__h2">How a request travels</h2>
        <Lifecycle />
        <p>The distinction the sequence makes visible is between routing a model request and orchestrating an agent. OmniRoute owns one step: given a chat-completion request, choose a provider and model and get a response back, retrying if it must. Hermes owns the loop around it: what to ask, which tools to run on the answer, what to remember, when to stop, and how to report. A router makes step five cheaper, more reliable or more flexible. It does nothing for steps two through four and six through eight, which is where most of an agent's quality comes from.</p>
      </section>

      <section id="tradeoffs" aria-labelledby="tradeoffs-h">
        <h2 id="tradeoffs-h" className="post__h2">Costs, performance and security</h2>
        <p>Costs. The gateway is free software; the models are not. Every request still pays the provider per token, so the router's cost features are about seeing and capping spend, not avoiding it. OmniRoute's free-tier routing can genuinely reduce the bill for experiments, with the catch that free tiers have low limits, sometimes need a payment method on file, and sometimes have terms that forbid this use, which is why the project excludes providers it marks as such from automatic routing. On subscriptions: the project supports signing in with ChatGPT and Claude accounts for providers that allow it and reports those as zero cost, and whether that is permitted and how much it covers depends on each provider's terms and plan. I treat an API key as the predictable option and subscriptions as a bonus to check, not a plan.</p>
        <p>Performance. The router adds a network hop, inside the same host, so the latency it adds is small next to the model's own response time. What it adds in reliability matters more: a provider outage or a rate limit becomes a fallback to another provider instead of a failed job, if you configured one. Model compatibility is the subtle cost. Not every model handles tool calls or long contexts the same way, so an automatic fallback from one model to another can change behaviour in ways the agent did not expect. For an agent that calls tools, I would pin specific models for the steps that matter and let <code>auto</code> handle only the cheap, low-stakes ones.</p>
        <p>Security. You now have two containers holding secrets: Hermes with the gateway key, OmniRoute with every provider key. The gateway's port stays bound to loopback and the dashboard is reached through an SSH tunnel; the self-host compose file ships with API-key enforcement off and says explicitly not to bind to all interfaces until it is on. Trust the image you run: pull the upstream image, pin a version once you are happy, and read the release notes before upgrading. Keep OmniRoute's data volume in your backups, because the encrypted keys and the usage history are in it. And remember that every prompt now passes through one more process that logs it: if the agent will handle anything sensitive, decide what the gateway retains and for how long, and which providers are allowed to see it at all. The habits are the ones from <Link to="/writing/network-security-before-devsecops/">network security</Link>: least privilege, nothing exposed by default, and know where the keys are.</p>
        <p>The sentence that summarizes the section: a model gateway is another piece of infrastructure, and infrastructure has to be secured, monitored, updated and backed up by someone, which on this VPS is me.</p>
      </section>

      <section id="job-agent" aria-labelledby="job-agent-h">
        <h2 id="job-agent-h" className="post__h2">My job-search agent as the test case</h2>
        <p>The project that will exercise this is the job-search agent I am building, and it is a project in progress, not a deployed system. Its workflows are discovering engineering leadership openings, extracting requirements from each posting, comparing them against my experience, scoring the fit, naming the qualifications I am missing, drafting tailored application material for my review, and producing a daily summary.</p>
        <p>Those are not one workload. Extraction is a cheap, structured task on short text, where a fast inexpensive model is fine and a fallback to another cheap model costs nothing. Fit scoring and gap analysis are judgment tasks where I want a specific strong model and consistent behaviour, so I would pin them. Drafting is the most expensive and the one I review most carefully, so quality beats price. The daily summary is small and happens once.</p>
        <p>Can OmniRoute make those choices? Partly. It can route by the model name I ask for, including aliases like <code>auto/cheap</code> and <code>auto/coding</code>, and combos I define with a strategy. What it cannot know is which of my pipeline steps is calling. That decision has to live in the application: the extraction step asks for one model name, the scoring step asks for another, and the router honours each. So the routing policy is split, with the application choosing the class of model per step and the gateway choosing the provider within that class and handling failure. That is a reasonable division, and it means the router does not remove the need to think about models in the code; it moves the thinking up a level.</p>
      </section>

      <section id="need-it" aria-labelledby="need-it-h">
        <h2 id="need-it-h" className="post__h2">Do you really need an AI model router?</h2>
        <p>Most of what I believe about architecture applies here without modification, and I have written the general argument in <Link to="/writing/hidden-cost-of-software-architecture/">the hidden cost of software architecture</Link>. A router is an abstraction, and abstractions are worth their cost when the thing they hide varies. If you call one provider and will for the foreseeable future, the router hides nothing and adds a container, a second key store, a failure domain and an upgrade cadence. If you call three providers, want fallback when one fails, and need one place to see what the whole thing costs, the router is doing real work and the complexity is earned.</p>
        <p>Vendor lock-in is the argument people reach for first, and it is weaker than it sounds for agents: the OpenAI-compatible protocol is already the common language, and Hermes itself can switch providers. The stronger arguments are reliability, where fallback is hard to build well inside every application, and observability, where one ledger of usage and cost per key is worth a lot once more than one job is spending money. Against those sit the new security boundary and the operational overhead, which are real and permanent.</p>
        <p>My rule is the one I apply to every box on a whiteboard: it should solve a problem I have today, not one I might have, and I should be able to say what it costs to run. For my single agent with one provider, OmniRoute is an experiment, and I have said so throughout. If the job-search pipeline grows to several model classes and I find myself wanting fallback at two in the morning, it will become infrastructure. The next post will report which.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">One more box, and the bill that comes with it</h2>
      <div className="post__close-copy">
        <p className="lead">A model router gives an agent one endpoint, many providers, fallback and a cost ledger, and in return it asks to be run, secured, updated and backed up like any other infrastructure.</p>
        <p className="post__close-principle">Add it when the model choice actually varies or when fallback and visibility are problems you have. Until then, connect the agent directly and keep the diagram small.</p>
        <p>Next in the series: the first end-to-end run, Telegram to Hermes to OmniRoute to a provider, and what it cost.</p>
        <div className="post__close-actions">
          <Link to="/writing/?path=learning" className="action">More from the learning path <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
