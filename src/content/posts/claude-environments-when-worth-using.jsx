import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// What "Claude environment" means across Claude Code, Cowork and Projects, what each costs, and when chat is enough.
// Source: KC's brief (Nov 2026). Product behavior and prices checked against official Anthropic and OpenAI pages on
// 2 November 2026; the dated phrases are allowlisted in scripts/audit-seo.py. The two worktree incidents are real, from
// this repo (PR #30 and the 2 November browser test); the font cause is inferred and the text says so. The FAQ task is
// hypothetical and labeled. No measurement of either path is claimed.

const docs = 'https://code.claude.com/docs/en';
const support = 'https://support.claude.com/en/articles';
const desktop = `${docs}/desktop`;
const cloud = `${docs}/claude-code-on-the-web`;
const cloudEnvs = `${docs}/cloud-environments`;
const memory = `${docs}/memory`;
const costs = `${docs}/costs`;
const cowork = `${support}/13345190-get-started-with-claude-cowork`;
const coworkCloud = `${support}/15520349-use-claude-cowork-on-web-desktop-and-mobile`;
const chatFiles = `${support}/12111783-create-and-edit-files-with-claude`;
const planCode = `${support}/11145838-use-claude-code-with-your-pro-or-max-plan`;
const credits = `${support}/12429409-manage-usage-credits-for-paid-claude-plans`;
const apiPricing = 'https://platform.claude.com/docs/en/about-claude/pricing';
const chatgptDocs = 'https://learn.chatgpt.com/docs';

const Code = ({ children }) => <code className="post__tok">{children}</code>;

export const toc = [
  ['meaning', 'What “Claude environment” means'],
  ['provides', 'What an environment gives Claude'],
  ['local-cloud', 'Local or cloud'],
  ['advantages', 'Advantages'],
  ['cost', 'What it costs'],
  ['disadvantages', 'Disadvantages'],
  ['worth-it', 'When it’s worth using'],
  ['chat', 'When chat is enough'],
  ['cannot-fix', 'What it can’t fix'],
  ['openai', 'How OpenAI compares'],
  ['example', 'The same task, both ways'],
  ['checklist', 'A checklist for deciding'],
];

function Terms() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 724-1</span> What each term means, where work runs and what persists</caption>
        <thead><tr><th scope="col">Term</th><th scope="col">What it is</th><th scope="col">Where work runs</th><th scope="col">What persists</th></tr></thead>
        <tbody>
          <tr>
            <th scope="row"><a href={desktop}>Claude Code, Local</a></th>
            <td data-col="What:">A session with direct access to your files</td>
            <td data-col="Runs:">Your computer (SSH and WSL are close variants)</td>
            <td data-col="Persists:">Your files and tools. Each session starts with fresh context, then <a href={memory}>loads CLAUDE.md and auto memory</a>. Auto memory stays on that machine</td>
          </tr>
          <tr>
            <th scope="row"><a href={cloud}>Claude Code cloud environment</a></th>
            <td data-col="What:">A saved configuration for network access, environment variables and setup scripts</td>
            <td data-col="Runs:">An isolated VM Anthropic manages, or your organization’s self-hosted environment</td>
            <td data-col="Persists:">Conversation history and pushed branches. A <a href={`${cloudEnvs}#environment-caching`}>setup snapshot</a> lasts about seven days. Running processes don’t carry over</td>
          </tr>
          <tr>
            <th scope="row"><a href={cowork}>Cowork</a></th>
            <td data-col="What:">Agentic mode for knowledge work outside coding</td>
            <td data-col="Runs:">Anthropic’s servers, reaching local files through Claude Desktop</td>
            <td data-col="Persists:">Sessions and files in your account. <a href={coworkCloud}>Your folders stay on your computer</a></td>
          </tr>
          <tr>
            <th scope="row"><a href="https://claude.com/docs/cowork/guide/projects">Cowork project</a></th>
            <td data-col="What:">Local folders, instructions, links and memory grouped together</td>
            <td data-col="Runs:">Sessions inside Cowork</td>
            <td data-col="Persists:">Stored on your computer, not synced</td>
          </tr>
          <tr>
            <th scope="row"><a href={`${support}/9517075-what-are-projects`}>claude.ai project</a></th>
            <td data-col="What:">Chat history, a knowledge base and instructions</td>
            <td data-col="Runs:">Nothing runs because of the project itself</td>
            <td data-col="Persists:">Stored in your account. <a href={`${support}/9519177-how-can-i-create-and-manage-projects`}>Chats don’t share context</a> unless it’s in the knowledge base</td>
          </tr>
          <tr>
            <th scope="row"><a href={`${docs}/claude-projects`}>Claude Code project</a></th>
            <td data-col="What:">One conversation coordinating parallel cloud sessions (public beta, gradual rollout)</td>
            <td data-col="Runs:">Usually cloud sessions</td>
            <td data-col="Persists:">Repositories, instructions and project memory</td>
          </tr>
        </tbody>
      </table>
    </figure>
  );
}

function Meters() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 724-2</span> The four meters, with figures as of November 2, 2026</caption>
        <thead><tr><th scope="col">Meter</th><th scope="col">How it works</th><th scope="col">Figures</th></tr></thead>
        <tbody>
          <tr>
            <th scope="row">Subscription allowance</th>
            <td data-col="How:"><a href={planCode}>Limits are shared across Claude and Claude Code</a>, with <a href={credits}>session and weekly limits</a>. <a href={cowork}>Multi-step Cowork tasks use more than quick questions</a></td>
            <td data-col="Figures:"><a href="https://claude.com/pricing">Pro $20 a month ($17 billed annually), Max $100, Ultra $200. Team standard seats $25 ($20 annually), premium $125 ($100 annually)</a></td>
          </tr>
          <tr>
            <th scope="row">Usage credits (older pages say “extra usage”)</th>
            <td data-col="How:"><a href={credits}>Optional pay-as-you-go after you hit a limit</a>, with a monthly cap you can set</td>
            <td data-col="Figures:">Standard API rates</td>
          </tr>
          <tr>
            <th scope="row">API billing</th>
            <td data-col="How:">Per token. If <a href={planCode}><Code>ANTHROPIC_API_KEY</Code></a> is set, Claude Code bills this way instead of using your plan</td>
            <td data-col="Figures:"><a href={apiPricing}>Sonnet 5.5: $2 input, $10 output per million tokens. Opus 5.5: $4 and $20</a></td>
          </tr>
          <tr>
            <th scope="row">Infrastructure</th>
            <td data-col="How:"><a href={cloud}>No separate charge for the Claude Code cloud VM</a>. SSH machines and self-hosted runners are your own bill. API products differ</td>
            <td data-col="Figures:"><a href={apiPricing}>API code execution: 1,550 free hours a month, then $0.05 per container hour, and free alongside web search or fetch. Managed Agents: $0.08 per session-hour plus tokens</a></td>
          </tr>
        </tbody>
      </table>
    </figure>
  );
}

function SameTask() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 724-3</span> A hypothetical FAQ edit in chat and in an execution environment</caption>
        <thead><tr><th scope="col">Step</th><th scope="col">Chat</th><th scope="col">Execution environment</th></tr></thead>
        <tbody>
          <tr><th scope="row">Context</th><td data-col="Chat:">I paste the post and explain the conventions</td><td data-col="Environment:">Claude reads <Code>AGENTS.md</Code>, the post and its metadata file</td></tr>
          <tr><th scope="row">Output</th><td data-col="Chat:">Suggested questions and answers to copy over</td><td data-col="Environment:">An edited file and a diff to review</td></tr>
          <tr><th scope="row">Checking</th><td data-col="Chat:">I run <Code>npm run validate</Code> and paste back anything that fails</td><td data-col="Environment:">Claude runs it and reads the SEO and writing audits</td></tr>
          <tr><th scope="row">What it costs me</th><td data-col="Chat:">My time relaying, few tokens</td><td data-col="Environment:">More usage, because build output enters context, plus permission to run commands</td></tr>
          <tr><th scope="row">What could still go wrong</th><td data-col="Chat:">A paste error, or a convention I forgot to mention</td><td data-col="Environment:">Answers that pass the audits and are still wrong</td></tr>
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="meaning" aria-labelledby="meaning-h">
        <p className="post__answer">A Claude environment is worth using when the task needs Claude to read real files, change them and check the result. If the work ends in an answer or a piece of text you can judge yourself, chat is usually enough.</p>
        <p>An environment gives Claude more to work with, but it doesn’t make Claude any smarter, and the setup, usage and risk it adds have to pay for themselves on the task in front of you.</p>
        <p>I checked product details and prices against official documentation on November 2, 2026. They change often, so follow the links before you budget around them.</p>
        <h2 id="meaning-h" className="post__h2">What does “Claude environment” actually mean?</h2>
        <p>Anthropic doesn’t sell one product called a Claude environment. The word has a specific meaning in Claude Code, and other products use other words. “Project” is worse: it means three different things.</p>
        <Terms />
        <p>I couldn’t find “Cowork workspace” as a product term. Cowork’s documentation talks about connected folders and projects, while Anthropic calls claude.ai projects “self-contained workspaces.”</p>
        <p>Two more things blur the line. Regular chat has its own <a href={chatFiles}>sandbox for code execution and file creation</a>, and Anthropic is <a href={`${support}/16761823-claude-cowork-and-chat-are-one-claude`}>merging chat and Cowork into one conversation</a> in a staged rollout. So the useful question is what your task needs, whichever screen you start from.</p>
      </section>

      <section id="provides" aria-labelledby="provides-h">
        <h2 id="provides-h" className="post__h2">What does an environment give Claude that a chat doesn’t?</h2>
        <p>In a plain chat, you’re the transport layer. You paste the code, copy the answer, run it and paste back the error. An environment takes you out of that relay by providing:</p>
        <ul className="post__list">
          <li>Files and dependencies: the actual project, plus the runtimes and packages needed to run it.</li>
          <li>Instructions: standing guidance such as CLAUDE.md. Anthropic says Claude treats these <a href={memory}>as context, not enforced configuration</a>, so use a hook for anything that must never happen.</li>
          <li>Tools and permissions: the shell, Git and test runners, with rules for using them. In Claude Code’s Manual mode, <a href={`${docs}/permissions`}>file reads in the working directory need no approval</a>, while most shell commands and edits do.</li>
          <li>Somewhere to execute: a place where a command can run and fail.</li>
        </ul>
        <p>That last one matters most to me. When Claude can run the check and read the failure, it gets the same <Link to="/writing/loop-engineering-feedback-loops/">feedback loop</Link> that makes any engineer faster.</p>
      </section>

      <section id="local-cloud" aria-labelledby="local-cloud-h">
        <h2 id="local-cloud-h" className="post__h2">Local or cloud: what stays between sessions?</h2>
        <p>Local suits work that depends on your machine: gitignored settings, a local database, a VPN, a signed-in browser. You also carry the risk. Claude Code’s <a href={`${docs}/sandboxing`}>Bash sandbox is off by default</a>, and once on, it still lets commands read most of the machine, including <Code>~/.ssh</Code> and <Code>~/.aws/credentials</Code>, unless you narrow it.</p>
        <p>Cloud suits work you want to <a href={cloud}>leave running with the laptop closed</a> or run in parallel. Sessions are isolated and the default network access is <a href={`${cloudEnvs}#access-levels`}>an allowlist</a>, but Claude only sees what reached the VM. <a href={`${cloud}#limitations`}>Cloning and pull requests need GitHub</a>, your <a href={`${cloudEnvs}#what-carries-over-from-your-setup`}>personal <Code>~/.claude</Code> instructions, skills and locally added MCP servers don’t follow you</a>, and a database started during setup has to be started again. If an idle VM is reclaimed, <a href={`${cloud}#environment-expired`}>your conversation comes back on a fresh VM but background work doesn’t</a>. I’d treat anything unpushed as at risk.</p>
        <p>Cowork sits between the two. On Pro, Max and Ultra, <a href={coworkCloud}>new tasks have run in the cloud since October 6, 2026</a>. A cloud session can fetch a copy of a file from a connected folder, but only while the Desktop app is open on that computer.</p>
        <p>Environment differences have caught me without any cloud involved. A fresh Git worktree of this site doesn’t have my gitignored <Code>.env.production.local</Code>. Building there left a contact setting empty, the contact page rendered different text, the build gave that page a new last-modified date, and <Code>npm run validate</Code> still passed. Another time, a browser test passed in worktrees with a symlinked <Code>node_modules</Code> and failed in the main checkout, matching what production measured. Fonts not loading through the symlink is my best guess, which I haven’t confirmed. Both were green checks from a setup that had drifted from the one I cared about, and a cloud VM can drift the same way.</p>
      </section>

      <section id="advantages" aria-labelledby="advantages-h">
        <h2 id="advantages-h" className="post__h2">What are the advantages?</h2>
        <p>Claude works from your actual project instead of your memory of it. It edits files in place, so you review a diff instead of merging pasted snippets. It can run your checks and respond to what they say. A committed instruction file and setup script make the next run start the same way. And a multi-step task can finish without you relaying each step.</p>
        <p>That pays off on repeated work in one codebase. On a one-off, you may never earn back the setup.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">What does it actually cost?</h2>
        <p>There are four separate meters, and mixing them up is how people get surprised.</p>
        <Meters />
        <p>The monthly API credits on Max and Ultra <a href={planCode}>can’t be used in Claude Code or the apps</a>. For a sense of scale, Anthropic says enterprise deployments average <a href={costs}>about $13 per developer per active day and $150 to $250 a month</a>, with 90% of users under $30 per active day. Measure your own usage, because a one-line question in a session open all day still draws usage for the whole conversation. I’ve written separately about <Link to="/writing/hidden-cost-of-ai-coding/">how the economics go wrong when AI coding is used badly</Link>.</p>
      </section>

      <section id="disadvantages" aria-labelledby="disadvantages-h">
        <h2 id="disadvantages-h" className="post__h2">What are the disadvantages?</h2>
        <p>Someone has to write the setup script, keep it finishing within <a href={`${cloudEnvs}#environment-caching`}>roughly five minutes so it can be cached</a>, and update the instructions when the project moves.</p>
        <p>Permission boundaries take judgment. Too tight and you approve commands all day. Too loose and a bad command runs unreviewed. Prompts also stop protecting you once you approve them without reading.</p>
        <p>Sensitive information needs a decision before you start, because Claude can read what’s in its working directory. Anthropic warns that <a href={cowork}>Cowork can take real actions and that prompt injection is a concern</a>, and that a chat sandbox <a href={chatFiles}>can be tricked into sending out information from its context</a>. In the cloud, <a href={`${cloudEnvs}#add-network-secrets`}>network secrets</a> keep API keys outside the VM. Organizations with <a href={cloud}>Zero Data Retention, the HIPAA configuration or customer-managed keys can’t use cloud sessions</a> at all.</p>
        <p>Complexity is the last cost. A cloud environment, a scheduled run and three parallel sessions for a job that runs once is the kind of <Link to="/writing/the-architecture-you-dont-build/">architecture you’re better off not building</Link>.</p>
      </section>

      <section id="worth-it" aria-labelledby="worth-it-h">
        <h2 id="worth-it-h" className="post__h2">When is an environment worth using?</h2>
        <ul className="post__list">
          <li>Implementing and testing a website change, where the answer lives in the build, the browser and the audit output.</li>
          <li>Working across project files, such as a route change or a content update that has to stay consistent in several places.</li>
          <li>Producing deliverables that need verification: a spreadsheet whose totals should be recalculated, a report checked against its source files, or code with tests that can fail.</li>
        </ul>
      </section>

      <section id="chat" aria-labelledby="chat-h">
        <h2 id="chat-h" className="post__h2">When is ordinary chat enough?</h2>
        <p>Brainstorming, explaining a concept and drafting a standalone article all finish in text you can judge by reading. Nothing needs to run, so there’s nothing for an environment to verify. Once a draft has to go into the site and pass its checks, the task has changed and an environment starts earning its place.</p>
      </section>

      <section id="cannot-fix" aria-labelledby="cannot-fix-h">
        <h2 id="cannot-fix-h" className="post__h2">What can’t an environment fix?</h2>
        <p>It can’t resolve unclear requirements. Claude will finish the vague version faster. It can’t judge whether the change should exist, or whether a technically correct decision is the wrong business call. It can’t rescue weak verification either: tests written from the same wrong assumption as the code will pass, which is why <Link to="/writing/ai-generated-code-verification-depth/">how deeply you verify should follow the risk</Link>. More capability just carries a wrong assumption further before anyone notices.</p>
      </section>

      <section id="openai" aria-labelledby="openai-h">
        <h2 id="openai-h" className="post__h2">How does OpenAI compare?</h2>
        <p>The closest matches, by my reading and with no official mapping behind them: Codex with Claude Code, ChatGPT Work with Cowork, and <a href="https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt">ChatGPT Projects</a> with claude.ai projects.</p>
        <ul className="post__list">
          <li>Execution: <a href={`${chatgptDocs}/environments/modes`}>Codex offers Local, Worktree and Cloud</a>. <a href="https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex">Work runs in the cloud on web and mobile</a>, and the desktop app can use local files with permission where your plan and workspace allow it.</li>
          <li>Persistence: <a href={`${chatgptDocs}/environments/cloud-environments`}>a new Codex Cloud task starts from a published environment</a>, while an existing task keeps its own files. Saved VM state is recoverable for up to seven days, and personal skills on your computer don’t sync.</li>
          <li>Local boundary: Codex’s <a href={`${chatgptDocs}/sandboxing`}>sandbox applies automatically in its default permissions mode</a>. Claude Code relies on permission prompts until you turn its sandbox on.</li>
          <li>Cost: <a href={`${chatgptDocs}/pricing`}>Plus is $20 a month, Pro starts at $100, Business is $25 a seat or $20 annually</a>. Local and cloud work share an allowance, cloud tasks may use more of it, no separate cloud-task fee is listed, and credits cover overages. An API key gets you the CLI, SDK and IDE extension but no cloud features. The API prices <a href="https://developers.openai.com/api/docs/pricing">hosted containers separately</a>.</li>
        </ul>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">The same task in chat and in an environment</h2>
        <p>This is a hypothetical example, and I haven’t measured either path. Say I want to add a two-question FAQ to an existing post on this site, where the visible answers and structured data have to stay consistent.</p>
        <SameTask />
        <p>For the wording alone, I’d use chat. To get it onto the site and through validation, I’d use the environment. Either way, I’d still read the answers myself.</p>
      </section>

      <section id="checklist" aria-labelledby="checklist-h">
        <h2 id="checklist-h" className="post__h2">A checklist for deciding</h2>
        <ul className="post__list">
          <li>Does the task need files or tools Claude can’t get from a paste?</li>
          <li>Is there a check that can actually fail? If not, write one first or stay in chat.</li>
          <li>Can you say what done means in a sentence?</li>
          <li>Will the setup be reused, or is this a one-off?</li>
          <li>Is there anything in reach that Claude shouldn’t read, and can you keep it out?</li>
          <li>Does it depend on something only your machine has? Start local. Does it need to outlive your open laptop? Consider cloud.</li>
          <li>Which meter are you on? Check <Code>/usage</Code>, confirm no API key is set by accident, and put a cap on usage credits.</li>
        </ul>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Where I start</h2>
      <div className="post__close-copy">
        <p className="lead">If I can’t name the check an environment would run, I start in chat.</p>
        <div className="post__close-actions">
          <Link to="/writing/ai-generated-code-verification-depth/" className="action">How deeply to verify AI code <ArrowRight /></Link>
          <Link to="/writing/hidden-cost-of-ai-coding/" className="link-arrow"><span>The hidden cost of AI coding</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
