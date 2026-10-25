import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Learning post, Hermes series. From KC: Hermes Agent on a Hostinger VPS; a
// planned content research assistant for usefullittletools.app, not built.
// Verified Oct 2026 against official docs: OpenAI help on scheduled tasks
// (caps 3/5/10/15 by plan, free once a day in windows, hourly on paid, no
// project files); Anthropic help on Cowork scheduled tasks (paid plans, run
// remotely unless local files needed, hourly/daily/weekdays/weekly/manual, each
// run its own session); Claude Code docs on routines (Pro/Max/Team/Enterprise,
// cloud, subscription usage drawdown, usage credits for overage or runs
// rejected, 1 hour minimum, fresh repo clone, connectors, green status is not
// task success), Desktop scheduled tasks (local, app open and awake, one
// catch-up run) and /loop (session-scoped, 7-day expiry); credential
// precedence (ANTHROPIC_API_KEY or AUTH_TOKEN beats a claude.ai login); Hermes
// docs on cron, skills, gateway and Anthropic auth. No years in visible text.

export const toc = [
  ['what-changes', 'What changes when nobody is watching'],
  ['example', 'The example: a content research assistant'],
  ['options', 'Five ways to schedule the same job'],
  ['ownership', 'Who owns what'],
  ['billing', 'Subscription login versus API billing'],
  ['script-or-model', 'Script or model?'],
  ['durable', 'Durable instructions, not a remembered chat'],
  ['recommendations', 'Where I would start'],
];

const rows = [
  { k: 'Runs where', v: ['Your VPS, inside the agent', 'OpenAI’s cloud', 'Anthropic’s cloud (locally only if it needs local files)', 'Anthropic’s cloud, on a fresh clone of a repo', 'Wherever cron runs: VPS, CI, laptop'] },
  { k: 'Needs your machine', v: ['Yes, the VPS', 'No', 'No', 'No', 'Yes, whatever hosts cron'] },
  { k: 'Credentials', v: ['Yours, on the VPS', 'OpenAI’s, plus connectors you link', 'Your Claude connectors and account files', 'Your GitHub access and connectors', 'Whatever the environment holds: a login or an API key'] },
  { k: 'Context on each run', v: ['Its memory, skills and files on the box', 'The saved task prompt', 'The saved instructions, connectors, chosen folder', 'The saved prompt plus the repo', 'The prompt you pass, plus files on disk'] },
  { k: 'Minimum interval / caps', v: ['Cron, any interval', '3 to 15 active tasks by plan; free once a day', 'Hourly presets', '1 hour; 100 scheduled runs an hour', 'Cron, any interval'] },
  { k: 'Billing', v: ['Model API tokens, or a login the provider allows', 'Included in the plan', 'Plan usage (billing not stated)', 'Plan usage; overage via usage credits or runs rejected', 'API tokens if a key is set, else plan usage'] },
  { k: 'Logs and failure', v: ['Your container logs; you build recovery', 'Task history in the app', 'Each run is a session you review', 'Each run is a session; green is not success', 'Your cron log and exit codes'] },
  { k: 'Best for', v: ['Learning, control, custom tools', 'Simple reminders and checks', 'Recurring work on your own documents and connectors', 'Repo-centred, unattended work', 'Pipelines you already own'] },
];
const cols = ['Hermes (self-hosted)', 'ChatGPT scheduled tasks', 'Claude Cowork scheduled tasks', 'Claude Code routines', 'Claude Code via cron'];

function Compare() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 693-1</span> Five ways to run the same AI job on a schedule, as each vendor documents it today</caption>
        <thead>
          <tr><th scope="col"> </th>{cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.k}><th scope="row">{r.k}</th>{r.v.map((v, i) => <td key={i}>{v}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="what-changes" aria-labelledby="what-changes-h">
        <h2 id="what-changes-h" className="post__h2">What changes when nobody is watching</h2>
        <p>I have spent the last few weeks learning self-hosted agents by putting Hermes Agent on a Hostinger VPS, <Link to="/writing/connect-hermes-agent-hostinger-vps-vs-code/">reaching it from VS Code</Link> and designing a job-search agent to run on it. Somewhere in that I realized I was mostly learning about scheduling. The moment an AI task runs on a timer instead of in a conversation, almost every assumption I had about working with an assistant stops holding.</p>
        <p className="post__answer">In a conversation, I supply the context, catch the mistakes, and decide what happens next, turn by turn. On a schedule, nobody does. The task has to carry its own instructions, find its own context, fail in a way someone will notice, and never take an action I would have stopped. Scheduling turns an assistant into a system, and systems need an owner for execution, context, credentials, uptime, logs and recovery.</p>
        <p>This post compares the five ways I could schedule one concrete job, and what each one makes me responsible for. I am still learning; nothing here reports a finished automation.</p>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">The example: a content research assistant</h2>
        <p>The job I keep using as a test case is a research assistant for <a href="https://usefullittletools.app">Useful Little Tools</a>, my site of free calculators. Once a week it should read the articles already on the site, research the questions people ask around each tool, drop any idea that duplicates something published or already suggested, save three ranked ideas with a one-line reason each, and send me a short brief to review. That is where it stops. Drafting and publishing stay separate, done by me when I choose, because an assistant that researches is useful and an assistant that publishes unreviewed is a liability.</p>
        <p>It is a good example because every step is checkable, it needs real data from my own site, it needs memory of past suggestions, it has an obvious failure mode (suggesting last month's idea again), and it has a clean human gate at the end.</p>
      </section>

      <section id="options" aria-labelledby="options-h">
        <h2 id="options-h" className="post__h2">Five ways to schedule the same job</h2>
        <p>Hermes, self-hosted. Hermes has its own cron. I write the job as a skill, attach it to a scheduled run, and the agent executes it on the VPS with whatever tools, memory and files live there, delivering the result to Telegram. The model is whatever I configured: Claude through an Anthropic API key, a Claude Code login where the provider permits it, or a bundled credit. One distinction that confused me at first: Hermes using Claude as its model is a normal API call from Hermes's own agent loop. Hermes running Claude Code as a coding tool is different, a shell command the agent can run like any other, which starts a separate agent with its own permissions and billing. The first is how the research assistant would think; the second is something I would use only for code.</p>
        <p>ChatGPT scheduled tasks. In ChatGPT you ask for a recurring task and OpenAI runs it on its side, on a cadence, and notifies you. The help centre is specific about limits: three active tasks on Free and Go, five on Plus, ten on Business and Edu, fifteen on Pro and Enterprise; free accounts get a once-a-day window rather than an exact time; and a task created inside a project cannot read that project's files. It is the least work to set up and the least able to reach my own data.</p>
        <p>Claude Cowork scheduled tasks. On a paid Claude plan, Cowork saves a prompt and runs it on a schedule as its own session, with your connectors, skills and the files saved to your account, and an optional folder to work in. The help centre says tasks run remotely now, so the laptop can be closed, except for tasks that need local files or apps, which run only locally. Cadences are hourly, daily, weekdays, weekly or on demand. This fits the research assistant well if the inputs are connectors and documents I can put in the account.</p>
        <p>Claude Code routines. Claude Code's cloud scheduling is a routine: a saved prompt, one or more GitHub repositories, connectors and a trigger, run on Anthropic's infrastructure with no permission prompts, at most once an hour. Every run clones the repo fresh, so it sees no local files, and each run is a session I can open afterwards. The docs make a point I have learned the hard way elsewhere: a green status means the session exited cleanly, not that the task succeeded. Since the Useful Little Tools site lives in a repository, a routine could read the articles directly.</p>
        <p>Claude Code from an external scheduler. The last option is the oldest one: cron on the VPS runs Claude Code in non-interactive mode with a prompt, the way I used to run any script. Everything is mine: the schedule, the environment, the logs, the retries. Claude Code also has Desktop scheduled tasks, which run locally only while the app is open and the computer is awake, and <code>/loop</code>, which lives inside one session and expires after seven days, so neither suits a job that should run when I am asleep.</p>
        <Compare />
      </section>

      <section id="ownership" aria-labelledby="ownership-h">
        <h2 id="ownership-h" className="post__h2">Who owns what</h2>
        <p>Execution. With Hermes or cron, I own it: the VPS has to be up, patched and reachable, and if it is down at 6 a.m. the job does not run. With the three managed options the vendor owns it, which is the whole convenience.</p>
        <p>Context. A scheduled run starts cold. Hermes has the most durable context because its memory, skills and data sit on the same disk. Cowork has what is in my account. A routine has what is in the repo. ChatGPT has the saved prompt. Cron has whatever I wrote to disk. In every case, the context the job needs has to be put somewhere the job can read it, before the run.</p>
        <p>Credentials. Self-hosting means my keys on my server, which is both the control I wanted and a thing I now have to protect. The managed options hold their own credentials and borrow mine through connectors, which is less for me to secure and more I have to trust. A routine acts as me on GitHub and in every connector I leave attached, so the docs are right to say remove the ones the job does not need.</p>
        <p>Logs and recovery. Hermes and cron give me raw logs and nothing else; retries, alerts and the "it silently did nothing for a week" problem are mine to build. The managed options keep run histories, and Cowork and routines leave a full session to read. None of them, managed or not, knows whether the research brief was any good. Only I do, which is why the human review step is not optional.</p>
      </section>

      <section id="billing" aria-labelledby="billing-h">
        <h2 id="billing-h" className="post__h2">Subscription login versus API billing</h2>
        <p className="post__answer">Logging in with a subscription does not guarantee that a scheduled run is covered by it. ChatGPT tasks are part of the plan, within the task caps. Cowork tasks run under your plan, and the help article does not state separate billing. Claude Code routines draw down subscription usage like interactive sessions, and when the limit is hit, accounts with usage credits turned on continue at metered overage while accounts without them have further runs rejected until the window resets. A headless Claude Code run is billed to the API whenever an API key or auth token is set in its environment, because those take precedence over a claude.ai login. And Hermes calling Claude bills per token to the Anthropic key, or, through the Claude Code login route, needs a Max plan with extra-usage credits.</p>
        <p>The practical consequence is that a scheduled job can quietly cost more than the interactive version of the same work, in two ways. It can run more often than I would have asked by hand. And it can land on a different billing path than I assumed, most often because a key sat in an environment variable on the box running cron. Before I schedule anything I now write down which account pays, and I check the usage page after the first week.</p>
      </section>

      <section id="script-or-model" aria-labelledby="script-or-model-h">
        <h2 id="script-or-model-h" className="post__h2">Script or model?</h2>
        <p>Most of the research assistant is a script. Fetching the list of published articles is a script. Fetching the stored ideas is a script. Checking whether a candidate idea matches a published title or an earlier suggestion is a script, and a far more reliable one than asking a model whether two things are "basically the same". Sending a message is a script. I would write every one of those deterministically, test them, and run them before any model is involved, for the same reason I put <Link to="/writing/building-an-ai-job-search-agent-with-hermes/#design">deterministic filtering before the model</Link> in the job-search agent.</p>
        <p>The model earns its place in two steps. Reading what people ask about a tool, across messy sources, and turning it into candidate questions is interpretation, which a script does badly. Ranking three ideas and explaining why each is worth writing is judgment I would like a draft of, as long as I make the final call. Everything else is plumbing, and plumbing that is deterministic is plumbing I can trust at 6 a.m.</p>
      </section>

      <section id="durable" aria-labelledby="durable-h">
        <h2 id="durable-h" className="post__h2">Durable instructions, not a remembered chat</h2>
        <p>The mistake I made first was designing the assistant in a VS Code conversation, getting it to work once, and assuming the scheduled version would know what we had agreed. It would not. A scheduled run has no memory of my chat. Whatever I want it to know has to be durable: the instructions in a skill file or a routine prompt that is self-contained and says what success looks like; the data, the published articles and the suggestion history, in a file or a database the job can open; the credentials in the one place the job reads them; and the rules, such as "never publish, only brief", written into the instructions rather than remembered from a session.</p>
        <p>That is why Hermes's skills, Cowork's saved instructions, routine prompts and a cron job's script all converge on the same shape. The scheduled process is a small program with a model inside it, and programs need their inputs on disk. The chat was the design session. The artifact of the design session has to be files.</p>
      </section>

      <section id="recommendations" aria-labelledby="recommendations-h">
        <h2 id="recommendations-h" className="post__h2">Where I would start</h2>
        <p>If the job needs only the vendor's own tools and a reminder, ChatGPT scheduled tasks or Cowork scheduled tasks are the least work and the least to maintain, and the caps tell you when you have outgrown them. If the job lives in a repository, a Claude Code routine gives you unattended runs with a reviewable session each time, at the cost of a GitHub-shaped workflow and no local files. If you want to learn how these systems work, or you need custom tools, your own data on your own disk and control of every step, self-host with Hermes or plain cron, and accept that uptime, logs, retries and security are now yours.</p>
        <p>Whichever you pick: write the instructions as if for a stranger, put the data where the run can read it, decide which account pays, keep every irreversible action behind a human approval, and read the first few runs in full. The convenience of managed scheduling is real. So is the control of running your own, and the maintenance that comes with it. For the research assistant I am starting on Hermes, because the point of this experiment is to learn what the managed versions are hiding from me, and I will report what it costs.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">A schedule turns an assistant into a system</h2>
      <div className="post__close-copy">
        <p className="lead">Asking an AI once and running it every week use the same model. The difference is everything around the model that now needs an owner.</p>
        <p className="post__close-principle">Write instructions that last and keep the data on disk. Name the account that pays, keep the plumbing deterministic, and put a human gate in front of anything irreversible.</p>
        <p>Next in the series: the research assistant's first scheduled runs, what it suggested, and what the first week cost.</p>
        <div className="post__close-actions">
          <Link to="/writing/#chapter-lab" className="action">More from the lab <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
