import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// What a Claude Code cloud environment is and when to use one instead of running Claude Code on your own computer.
// Source: KC's brief (Nov 2026). Written without first-person pronouns at KC's request. Product behavior checked against
// the official Claude Code docs on 2 November 2026; the dated phrase is allowlisted in scripts/audit-seo.py. The two
// worktree incidents are real, from this repo (PR #30 and the 2 November browser test); the font cause is inferred and
// the text says so. The FAQ task is hypothetical and labeled. No measurement of either path is claimed.

const docs = 'https://code.claude.com/docs/en';
const desktop = `${docs}/desktop`;
const cloud = `${docs}/claude-code-on-the-web`;
const cloudEnvs = `${docs}/cloud-environments`;
const compare = `${docs}/web-quickstart#compare-ways-to-run-claude-code`;
const planCode = 'https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan';

const Code = ({ children }) => <code className="post__tok">{children}</code>;

export const toc = [
  ['meaning', 'What a Claude Code environment is'],
  ['contains', 'What you configure'],
  ['compare', 'Cloud or this computer'],
  ['cloud-reasons', 'Why use a cloud environment'],
  ['local-reasons', 'Why stay on this computer'],
  ['drift', 'How environments drift'],
  ['cost', 'What it costs'],
  ['moving', 'Moving work between them'],
  ['example', 'The same task, both ways'],
  ['checklist', 'A checklist for deciding'],
];

function Comparison() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 724-1</span> A Claude Code cloud environment and this computer, side by side</caption>
        <thead><tr><th scope="col">Question</th><th scope="col">Cloud environment</th><th scope="col">This computer</th></tr></thead>
        <tbody>
          <tr><th scope="row">Where does the code run?</th><td data-col="Cloud:">A fresh <a href={`${cloudEnvs}#whats-available-in-cloud-sessions`}>Ubuntu VM on x86_64</a>, managed by Anthropic by default</td><td data-col="This computer:">Your machine, with direct access to your files</td></tr>
          <tr><th scope="row">Which code does Claude see?</th><td data-col="Cloud:">A fresh clone of the repository, so unpushed commits aren’t there</td><td data-col="This computer:">Your working folder, including gitignored and uncommitted files</td></tr>
          <tr><th scope="row">Whose configuration applies?</th><td data-col="Cloud:">Whatever is committed to the repository</td><td data-col="This computer:">The repository plus everything in your <Code>~/.claude</Code></td></tr>
          <tr><th scope="row">What can it reach on the network?</th><td data-col="Cloud:">Set per environment: None, Trusted, Full or a custom list</td><td data-col="This computer:">Whatever your machine can reach, including a VPN</td></tr>
          <tr><th scope="row">Does it need GitHub?</th><td data-col="Cloud:">For cloning and pull requests, yes</td><td data-col="This computer:">No</td></tr>
          <tr><th scope="row">Does it survive closing the laptop?</th><td data-col="Cloud:">Yes</td><td data-col="This computer:">No</td></tr>
        </tbody>
      </table>
    </figure>
  );
}

function SameTask() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 724-2</span> A hypothetical FAQ edit in a cloud environment and on this computer</caption>
        <thead><tr><th scope="col">Step</th><th scope="col">Cloud environment</th><th scope="col">This computer</th></tr></thead>
        <tbody>
          <tr><th scope="row">Getting started</th><td data-col="Cloud:">Clone the repository and restore the cached setup. <Code>AGENTS.md</Code> arrives with the clone</td><td data-col="This computer:">Open the existing checkout, with dependencies already installed</td></tr>
          <tr><th scope="row">Configuration</th><td data-col="Cloud:">No gitignored <Code>.env.production.local</Code>, unless its values are added to the environment</td><td data-col="This computer:">The real file is already in the folder</td></tr>
          <tr><th scope="row">Checking</th><td data-col="Cloud:">Claude runs <Code>npm run validate</Code> on Linux, with browser tests dependent on the setup script</td><td data-col="This computer:">Claude runs the same command where the production settings live</td></tr>
          <tr><th scope="row">Review</th><td data-col="Cloud:">A pushed branch and a diff, reviewable from a phone</td><td data-col="This computer:">A diff in the working folder, with the local dev server available</td></tr>
          <tr><th scope="row">While it runs</th><td data-col="Cloud:">The laptop can close</td><td data-col="This computer:">The laptop stays open, and Claude shares it with everything else on it</td></tr>
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="meaning" aria-labelledby="meaning-h">
        <p className="post__answer">A Claude Code cloud environment is a saved configuration for sessions that run on a remote VM instead of your machine. Use one when the work should keep going with your laptop closed, run several tasks at once or stay away from your machine’s credentials. Stay on this computer when the work depends on something only your machine has.</p>
        <p>Product details here were checked against the official Claude Code documentation on November 2, 2026. They change often, so follow the links before relying on one.</p>
        <h2 id="meaning-h" className="post__h2">What is a Claude Code environment?</h2>
        <p>When you start a session, the <a href={desktop}>environment selector in the desktop app</a> decides where Claude executes. Your own machine sits under Local. The other choices are Cloud, SSH for a remote machine you connect to, and WSL on Windows. Claude Code <a href={compare}>behaves the same in each</a>. What changes is where the session runs and whether your local configuration comes with it.</p>
        <p>“Environment” also has a narrower meaning. In the docs, a <a href={cloudEnvs}>cloud environment</a> is the saved configuration a cloud session starts from. Each session gets its own VM, and many sessions can start from the same environment. That’s the sense used in the rest of this article, with “this computer” meaning a Local session.</p>
      </section>

      <section id="contains" aria-labelledby="contains-h">
        <h2 id="contains-h" className="post__h2">What do you configure in a cloud environment?</h2>
        <ul className="post__list">
          <li>Network access: <a href={`${cloudEnvs}#access-levels`}>None, Trusted, Full or a custom list</a>. The Default environment uses Trusted, which allows package registries, GitHub and cloud SDKs through an allowlist.</li>
          <li>Environment variables: values available to each session. <a href={`${cloudEnvs}#what-carries-over-from-your-setup`}>Anyone who uses the environment can read them</a>, so they’re the wrong place for secrets.</li>
          <li>Network secrets: API keys kept <a href={`${cloudEnvs}#add-network-secrets`}>outside the VM</a> and attached to requests for the hosts you list.</li>
          <li>A setup script: installs what the project needs. If it finishes in <a href={`${cloudEnvs}#environment-caching`}>roughly five minutes</a>, later sessions start from a filesystem snapshot that lasts about seven days.</li>
        </ul>
        <p>You don’t start from nothing. The VM comes with <a href={`${cloudEnvs}#installed-tools`}>common toolchains, Docker, PostgreSQL and Redis</a> installed, though the databases aren’t running until something starts them. The snapshot keeps files and loses processes, so a database or <Code>docker compose up</Code> stack from the setup script has to be started again in each session.</p>
      </section>

      <section id="compare" aria-labelledby="compare-h">
        <h2 id="compare-h" className="post__h2">How does it differ from running on this computer?</h2>
        <Comparison />
        <p>The configuration row is the easy one to miss. <a href={`${cloudEnvs}#what-carries-over-from-your-setup`}>Your personal <Code>~/.claude/CLAUDE.md</Code>, user-level skills and locally added MCP servers don’t follow you</a> to the cloud. The repository’s <Code>CLAUDE.md</Code>, <Code>.claude/</Code> skills and <Code>.mcp.json</Code> do. If Claude behaves well on your laptop and worse in the cloud, compare what’s committed with what only exists in your home directory.</p>
      </section>

      <section id="cloud-reasons" aria-labelledby="cloud-reasons-h">
        <h2 id="cloud-reasons-h" className="post__h2">Why use a cloud environment instead?</h2>
        <ul className="post__list">
          <li>The work outlasts your laptop. A cloud session <a href={cloud}>keeps running after you close it</a>, and you can check on it or steer it from a browser or phone.</li>
          <li>Tasks run in parallel without competing for one machine. Local <a href={desktop}>worktrees</a> keep parallel sessions’ files apart, but they still share your CPU, ports and databases. Each cloud session gets its own VM.</li>
          <li>Your machine stays out of reach. Locally, Claude Code’s <a href={`${docs}/sandboxing`}>Bash sandbox is off by default</a>, and once on, it still lets commands read most of the machine, including <Code>~/.ssh</Code> and <Code>~/.aws/credentials</Code>, unless you narrow it. In an Anthropic-hosted cloud session, <a href={`${cloud}#security-and-isolation`}>Git credentials stay outside the sandbox</a> and those home-directory files were never there.</li>
          <li>Every run starts from the same place. A committed instruction file and a setup script give each session a clean clone instead of whatever state your machine happens to be in, which also tests whether the repository is complete enough to work from.</li>
        </ul>
      </section>

      <section id="local-reasons" aria-labelledby="local-reasons-h">
        <h2 id="local-reasons-h" className="post__h2">Why stay on this computer?</h2>
        <ul className="post__list">
          <li>The work needs something only your machine has: gitignored settings, a local database with real data, a VPN or a signed-in browser.</li>
          <li>The target isn’t Linux on x86_64. The VM <a href={`${cloudEnvs}#whats-available-in-cloud-sessions`}>runs that regardless of your own hardware</a>, so anything that needs macOS, such as an iOS simulator, belongs on your own machine.</li>
          <li>The job is too big for the VM. Anthropic lists <a href={`${cloudEnvs}#resource-limits`}>approximate ceilings of 4 vCPUs, 16 GB of RAM and 30 GB of disk</a>, and it may stop tasks that need significantly more memory.</li>
          <li>The repository isn’t on GitHub. You can <a href={`${cloud}#send-local-repositories-without-github`}>send a bundle of a GitLab or Bitbucket repository</a> to a cloud session, but the session can’t push back to that remote.</li>
          <li>Your organization rules it out. <a href={`${cloud}#github-authentication-options`}>Zero Data Retention, the HIPAA configuration and customer-managed keys</a> all block cloud sessions, and an <a href={`${cloud}#limitations`}>organization IP allowlist</a> makes Anthropic-hosted ones fail unless Anthropic exempts them.</li>
          <li>You’re watching closely. If you’re reading each change and checking it in a local dev server, a remote VM adds a step and gives you little back.</li>
        </ul>
        <p>Staying local also means carrying the risk yourself. Permission prompts only protect you if you read them, and sensitive files in the working folder are within Claude’s reach.</p>
      </section>

      <section id="drift" aria-labelledby="drift-h">
        <h2 id="drift-h" className="post__h2">How can a different environment give you a misleading result?</h2>
        <p>This has happened on this site with no cloud involved. A fresh Git worktree doesn’t have the gitignored <Code>.env.production.local</Code>. Building there left a contact setting empty, the contact page rendered different text, the build gave that page a new last-modified date, and <Code>npm run validate</Code> still passed. In another case, a browser test passed in worktrees with a symlinked <Code>node_modules</Code> and failed in the main checkout, matching what production measured. Fonts not loading through the symlink is the best guess, and it hasn’t been confirmed.</p>
        <p>Both were green checks from a setup that had drifted from the one that mattered. A cloud VM can drift the same way, and further, because it starts with less of your machine. Before trusting a green result, ask what that environment was missing.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">Does a cloud environment cost more?</h2>
        <p>Anthropic lists <a href={cloud}>no separate charge for the cloud VM</a>. Cloud sessions count toward your plan’s limits alongside your other Claude and Claude Code usage, so the cost that changes is how much you run: <a href={`${cloud}#limitations`}>parallel tasks use limits proportionately faster</a>. Cloud sessions also need a claude.ai sign-in, while a local session will <a href={planCode}>bill per token at API rates if <Code>ANTHROPIC_API_KEY</Code> is set</a>, so check that before assuming your plan is paying. <Link to="/writing/hidden-cost-of-ai-coding/">The economics of AI coding</Link> go wrong in other ways too, wherever the code runs.</p>
        <p>The real cost is upkeep. Someone has to write the setup script, keep it inside the caching window and update it when the project moves. Three parallel sessions and a custom environment for a job that runs once is <Link to="/writing/the-architecture-you-dont-build/">architecture you’re better off not building</Link>.</p>
      </section>

      <section id="moving" aria-labelledby="moving-h">
        <h2 id="moving-h" className="post__h2">Can you move work between the two?</h2>
        <p>Yes, with limits. <a href={`${cloud}#start-a-cloud-session-from-your-terminal`}><Code>claude --cloud</Code></a> starts a new cloud session from your terminal, cloning your branch from GitHub, so push first. <a href={`${cloud}#continue-a-cloud-session-in-your-terminal`}><Code>claude --teleport</Code></a> pulls a cloud session into a local checkout once its branch has been pushed. From the command line that’s one-way: an existing terminal session can’t be pushed to the cloud, though the desktop app can <a href={`${desktop}#continue-in-another-surface`}>send a local session there</a> from its Open in menu.</p>
        <p>Push your work as you go. When an idle VM is reclaimed, <a href={`${cloud}#environment-expired`}>your conversation comes back on a fresh VM but background work doesn’t</a>, so treat anything unpushed as at risk.</p>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">The same task in both places</h2>
        <p>This is a hypothetical example, and neither path has been measured. Say the job is adding a two-question FAQ to an existing post on this site, where the visible answers and structured data have to stay consistent.</p>
        <SameTask />
        <p>This one suits the computer with the production settings on it, because the build can’t be trusted without them. Ten similar edits queued for overnight would change the answer, as long as the environment’s setup was fixed first. Either way, <Link to="/writing/ai-generated-code-verification-depth/">the answers still need a person to read them</Link>, since passing the audits doesn’t make them correct.</p>
      </section>

      <section id="checklist" aria-labelledby="checklist-h">
        <h2 id="checklist-h" className="post__h2">A checklist for deciding</h2>
        <ul className="post__list">
          <li>Does the work depend on a gitignored file, a local service, a VPN or a signed-in browser? Stay on this computer.</li>
          <li>Does it need macOS, or more than the VM’s roughly 4 vCPUs and 16 GB of RAM? Stay on this computer.</li>
          <li>Does it need to finish after you close the laptop? Use a cloud environment.</li>
          <li>Do you want several tasks running without sharing ports, databases and CPU? Use a cloud environment.</li>
          <li>Is there anything on your machine that Claude shouldn’t be able to read? Prefer a cloud environment, or narrow the local sandbox.</li>
          <li>Is the repository complete without your home directory? If not, commit the shared instructions before relying on the cloud.</li>
          <li>Can the check you trust run in the cloud, and would it fail there for the right reasons? If not, stay local until it can.</li>
        </ul>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Where to start</h2>
      <div className="post__close-copy">
        <p className="lead">Run the task on this computer first. Once you know what it needs, committing that to the repository and a setup script is most of the work of moving it to a cloud environment.</p>
        <div className="post__close-actions">
          <Link to="/writing/ai-generated-code-verification-depth/" className="action">How deeply to verify AI code <ArrowRight /></Link>
          <Link to="/writing/hidden-cost-of-ai-coding/" className="link-arrow"><span>The hidden cost of AI coding</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
