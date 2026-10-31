import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// How-to, part of the Hermes series. From KC: Hermes Agent installed with
// Hostinger's one-click Docker template on a Hostinger VPS (image seen on his
// install: ghcr.io/hostinger/hvps-hermes-agent:latest), connected from a Mac
// with VS Code Remote-SSH. Commands verified against the Hermes docs
// (config.yaml + .env, `hermes model`, `hermes config set`, gateway, Anthropic
// by API key or Claude Code OAuth with Max extra-usage credits), Hostinger's
// template flow (Docker Manager > Catalog, admin user, optional nexos.ai
// credits), VS Code Remote-SSH docs, and OpenSSH defaults. Hostinger, never
// HostGator. No years in visible text. No secrets, placeholder values only.

export const toc = [
  ['why', 'Why I wanted to try Hermes'],
  ['prereqs', 'What you need'],
  ['ssh', 'Configure SSH access'],
  ['vscode', 'Connect VS Code to the VPS'],
  ['docker', 'Find the Hermes container'],
  ['claude', 'Configure Hermes to use Claude'],
  ['using', 'Using Hermes from VS Code'],
  ['troubleshooting', 'Common problems'],
  ['next', 'What I am building next'],
];

const setup = {
  label: 'The path from my laptop to the model',
  key: 'Where commands travel',
  tiers: [
    { name: 'Laptop', nodes: [{ id: 'mac', label: 'MacBook', sub: 'VS Code · Remote-SSH' }] },
    { name: 'Server', nodes: [{ id: 'vps', label: 'Hostinger VPS', sub: 'Linux · sshd · firewall' }] },
    { name: 'Runtime', nodes: [{ id: 'docker', label: 'Docker', sub: 'hermes container · volumes' }] },
    { name: 'Agent', nodes: [{ id: 'hermes', label: 'Hermes Agent', sub: 'gateway · cron · skills' }] },
    { name: 'Model', nodes: [{ id: 'anthropic', label: 'Anthropic API', sub: 'API key' }, { id: 'nexos', label: 'nexos.ai credits', sub: 'Hostinger bundle' }] },
  ],
  edges: [['mac', 'vps', null, true], ['vps', 'docker', null, true], ['docker', 'hermes', null, true], ['hermes', 'anthropic', null, true], ['hermes', 'nexos']],
};

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
      <section id="why" aria-labelledby="why-h">
        <h2 id="why-h" className="post__h2">Why I wanted to try Hermes</h2>
        <p>This is part of my ongoing experiment with self-hosted AI agents, and it is the setup half. The design half, a job-search agent that runs on a schedule and reports to my phone, is in <Link to="/writing/building-an-ai-job-search-agent-with-hermes/">building my own AI job search agent with Hermes</Link>. Before any of that could happen I needed to get at the machine it runs on, and I wanted to do that from the editor I already live in rather than a web console.</p>
        <p className="post__answer">Hermes Agent is an open-source, self-hosted AI agent from Nous Research. It runs as a long-lived process on your own server, loads small instruction files called skills when a task needs them, schedules recurring jobs with its own cron, and talks to you through a gateway that connects to Telegram and other messaging platforms. You bring the model: an Anthropic, OpenAI or OpenRouter key, a local model, or the credits a host bundles.</p>
        <p>I use ChatGPT and Claude Code most days as tools, and they are good. Hermes is no smarter than they are. It runs when I am not there, keeps state between runs, and has tools wired to my own systems, all of it on a server I administer. That is why self-hosting interests me as an engineer: the plumbing is explicit, and explicit plumbing is what I want to learn. What I hope to automate is the repetitive research in a senior job search, and later some of my own development chores.</p>
        <p>VS Code matters here because Remote-SSH turns the VPS into a workspace. I can browse the file system, open the agent's configuration in a real editor, keep a terminal open on the box, read Docker logs, and write the skills and scripts that will become the job-search pipeline, all with the same keybindings and extensions I use locally. A browser console can do some of that. It cannot do it comfortably for hours.</p>
        <div className="post__diagram">
          <Diagram spec={setup} id="hermes-setup" no="690-1" />
        </div>
      </section>

      <section id="prereqs" aria-labelledby="prereqs-h">
        <h2 id="prereqs-h" className="post__h2">What you need</h2>
        <ul className="post__list">
          <li>A Hostinger VPS with Hermes Agent installed. In hPanel, open the VPS, then Docker Manager, then Catalog, search for Hermes Agent and select it. The wizard asks for an admin username and password and offers to connect nexos.ai credits if your plan included them. Hostinger’s own tutorial recommends at least 2 vCPU and 8 GB of RAM for the agent.</li>
          <li>Visual Studio Code on your laptop, with Microsoft’s Remote - SSH extension.</li>
          <li>SSH access to the VPS: its IP address, and the root password Hostinger set, which you will stop using once a key works.</li>
          <li>An SSH key pair. Password logins work, and keys are the right habit on a server that will hold API credentials.</li>
          <li>Basic Docker familiarity: what a container, an image and a volume are, and that a container’s filesystem is disposable unless a path is mounted.</li>
        </ul>
        <p>Everything below is from a Mac. Linux is the same. Windows users can do all of it from PowerShell with OpenSSH, which ships with Windows.</p>
      </section>

      <section id="ssh" aria-labelledby="ssh-h">
        <h2 id="ssh-h" className="post__h2">Configure SSH access</h2>
        <p>Generate a key pair on the laptop. The comment is a label so you recognize the key later; it is not a secret.</p>
        <Code title="Laptop">{`ssh-keygen -t ed25519 -C "hermes-vps"
# accept the default path (~/.ssh/id_ed25519) and set a passphrase`}</Code>
        <p>Install the public key on the VPS. If password SSH works, the quickest route is the standard helper, which appends the key to the server’s authorized keys and fixes permissions:</p>
        <Code title="Laptop">{`ssh-copy-id -i ~/.ssh/id_ed25519.pub root@YOUR_VPS_IP`}</Code>
        <p>If SSH does not work yet at all, which is common right after provisioning or after a firewall change, use the browser terminal in hPanel. Open the VPS, start the browser terminal, log in as root, and paste the key in by hand:</p>
        <Code title="VPS browser terminal">{`mkdir -p ~/.ssh && chmod 700 ~/.ssh
echo "ssh-ed25519 AAAA...your public key... hermes-vps" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys`}</Code>
        <p>Then give the host a short name on the laptop so you never type the IP again. The name is what VS Code will show.</p>
        <Code title="~/.ssh/config">{`Host hermes
    HostName YOUR_VPS_IP
    User root
    Port 22
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes`}</Code>
        <p>Test it. The first connection asks you to confirm the server’s fingerprint; after that it should drop you at a prompt without a password.</p>
        <Code title="Laptop">{`ssh hermes`}</Code>
        <p>Once the key works, create a non-root user for day-to-day administration and use root only when something needs it. A mistake typed as root on a server that holds API keys has no safety net.</p>
        <Code title="VPS, as root">{`adduser kc
usermod -aG sudo,docker kc
mkdir -p /home/kc/.ssh && cp ~/.ssh/authorized_keys /home/kc/.ssh/
chown -R kc:kc /home/kc/.ssh && chmod 700 /home/kc/.ssh && chmod 600 /home/kc/.ssh/authorized_keys`}</Code>
        <p>Change <code>User root</code> to <code>User kc</code> in the SSH config after that, and consider turning off password authentication in the server’s SSH daemon once you have confirmed the key login works from a second terminal. Adding the user to the docker group lets them run Docker commands without sudo; it also makes them effectively root for Docker, which is why the account still needs a strong key and nothing else on it.</p>
      </section>

      <section id="vscode" aria-labelledby="vscode-h">
        <h2 id="vscode-h" className="post__h2">Connect VS Code to the VPS</h2>
        <ol className="post__list">
          <li>Install the Remote - SSH extension from Microsoft in VS Code.</li>
          <li>Open the Command Palette (Cmd+Shift+P on a Mac).</li>
          <li>Run Remote-SSH: Connect to Host.</li>
          <li>Pick <code>hermes</code>. VS Code reads it from the same SSH config file you edited.</li>
          <li>A new window opens and installs the VS Code server on the VPS. The first time takes a minute. The status bar’s bottom-left corner shows SSH: hermes when it is connected.</li>
          <li>Open a folder with File, then Open Folder. Start with your home directory; you will add the agent’s paths once you know them.</li>
          <li>Open the integrated terminal (Ctrl+backtick). It is a shell on the VPS, not on your laptop.</li>
        </ol>
        <p>That last point is the one that confuses people. In a remote window, everything is remote: the file tree, the terminal, the extensions that run on the server, the files you save. If you open a file in a local window and edit it, you have edited your laptop. If you want a file on the VPS, open it from the remote window. The green or blue indicator in the bottom-left corner is how you tell which kind of window you are in, and I check it before I save anything.</p>
      </section>

      <section id="docker" aria-labelledby="docker-h">
        <h2 id="docker-h" className="post__h2">Find the Hermes container</h2>
        <p>Hostinger’s one-click install runs Hermes inside Docker, so the agent is not installed on the host the way a package would be. From the remote terminal:</p>
        <Code title="VPS">{`docker ps`}</Code>
        <p>Each row is a running container. The columns that matter are IMAGE, which tells you what software it is; PORTS, which tells you what, if anything, is published to the network; STATUS, which should say Up; and NAMES, which is the handle you use in every other command. On my install the image was <code>ghcr.io/hostinger/hvps-hermes-agent:latest</code>, Hostinger’s packaging of the agent. Yours may differ as they update the template, so read the output rather than copying mine.</p>
        <p>Logs are the first place to look when anything misbehaves, and the container name goes where I have written CONTAINER_NAME:</p>
        <Code title="VPS">{`docker logs --tail 100 CONTAINER_NAME
docker logs -f CONTAINER_NAME     # follow live; Ctrl+C to stop`}</Code>
        <p>To get a shell inside the container:</p>
        <Code title="VPS">{`docker exec -it CONTAINER_NAME /bin/sh
# or, if the image has it:
docker exec -it CONTAINER_NAME /bin/bash`}</Code>
        <p>Inside, you are in the agent’s environment, with the <code>hermes</code> command on the path. Two things to find out while you are there: where its configuration lives, by default the <code>.hermes</code> directory in the container user’s home, and which paths are volumes.</p>
        <Code title="VPS">{`docker inspect CONTAINER_NAME --format '{{json .Mounts}}'`}</Code>
        <p>Paths listed there survive a container restart or recreate. Anything you change elsewhere inside the container is gone the next time the template updates or the container is rebuilt. Put your configuration, skills and data on a mounted path, and if the config directory is not mounted, mount it before you spend an evening configuring the agent.</p>
      </section>

      <section id="claude" aria-labelledby="claude-h">
        <h2 id="claude-h" className="post__h2">Configure Hermes to use Claude</h2>
        <p>Four things get confused here, so I will separate them. A Claude subscription (Pro, Max, Team) pays for the Claude apps and Claude Code. Anthropic API access is a separate, pay-per-token account on the developer platform with its own key. Hermes’s model provider configuration is where you tell the agent which of those to use. And Hostinger’s nexos.ai credits are a third option: a bundled gateway with prefilled credentials that routes to several models, including Claude, until the credits run out.</p>
        <p className="post__answer">A Claude subscription does not give you Anthropic API credits. For Hermes, the predictable route is an Anthropic API key, billed per token to the developer platform account. Hermes can also reuse a Claude Code login through OAuth, and its own docs say that path needs a Max plan with extra-usage credits; users on other plans report running into usage errors. Hostinger’s nexos.ai credits are the simplest start if your plan included them, and they are finite.</p>
        <p>Hermes keeps non-secret settings in <code>~/.hermes/config.yaml</code> and secrets in <code>~/.hermes/.env</code>, and it has an interactive command that writes both. Run it inside the container:</p>
        <Code title="Inside the container">{`hermes model
# choose Anthropic, paste the API key when asked, pick a Claude model`}</Code>
        <p>Or set the pieces directly. The config command writes keys to the env file, so the secret never lands in the YAML:</p>
        <Code title="Inside the container">{`hermes config set ANTHROPIC_API_KEY sk-ant-...   # written to ~/.hermes/.env
hermes config edit                                # opens config.yaml
hermes config check                               # validates what you have`}</Code>
        <Code title="~/.hermes/config.yaml (excerpt)">{`model:
  provider: anthropic
  default: claude-sonnet-4-6   # pick a current model from the Anthropic docs`}</Code>
        <p>The Hermes configuration and provider documentation are the source of truth for the exact keys, and they change between releases, so read the version that matches your container. If Hostinger’s wizard already connected nexos.ai credits, the provider is set for you and you can leave it until you want your own key.</p>
        <p>On credentials: the env file is the only place the key belongs. Never put it in config.yaml, in a skill, in a Git repository, or in a screenshot of your terminal; if you paste a terminal into a post, redact the line first, and if you ever expose a key, revoke it in the Anthropic console and make a new one. Keep the file permissions tight (<code>chmod 600</code>), keep the directory on a volume, and prefer a key created for the agent alone, so revoking it affects nothing else.</p>
      </section>

      <section id="using" aria-labelledby="using-h">
        <h2 id="using-h" className="post__h2">Using Hermes from VS Code</h2>
        <p>With the remote window open, the work is ordinary. Open <code>~/.hermes</code> from the container’s mounted volume on the host, or exec into the container, and edit config.yaml and your skills in the editor. Run <code>hermes</code> commands in the integrated terminal through <code>docker exec</code>: chat with it, list and add cron jobs, start the gateway. Keep a second terminal following the container logs while you try things, because the log is where a bad config or a rejected key shows up first. Write the scripts and skills for an automation on the host, in a project folder under version control, and bind-mount or copy them into the container where the agent can load them.</p>
        <p>One expectation to set straight: Remote-SSH gives you remote development access to the machine Hermes runs on. It does not make Hermes a coding assistant inside VS Code. Hermes is an agent you talk to through its CLI, its gateway and its scheduled jobs; the editor is how you administer it and build around it. My plan for the pipeline in the companion post is to develop it as a normal Python project in this remote workspace, test it from the terminal, and only then hand the scheduled run to Hermes.</p>
      </section>

      <section id="troubleshooting" aria-labelledby="troubleshooting-h">
        <h2 id="troubleshooting-h" className="post__h2">Common problems</h2>
        <p><strong>Permission denied (publickey,password).</strong> The server rejected both methods. Usually the public key is not in the right file, or permissions are wrong: the home directory must not be group-writable, <code>~/.ssh</code> must be 700, and <code>authorized_keys</code> must be 600, all owned by the user you log in as. Check which key the client offered with <code>ssh -v hermes</code>; if it is offering the wrong one, <code>IdentitiesOnly yes</code> with the right <code>IdentityFile</code> fixes it. If you pasted the key through the browser terminal, confirm it is one line with no breaks.</p>
        <p><strong>Wrong private key.</strong> If you have several keys, <code>ssh-add -l</code> on the laptop shows what the agent holds, and the SSH config pins the one to use. The public key on the server must match that private key, which <code>ssh-keygen -y -f ~/.ssh/id_ed25519</code> will print for comparison.</p>
        <p><strong>VS Code connects, then hangs.</strong> Usually the VS Code server failed to install on the VPS, often from a full disk or a missing <code>tar</code>. Check free space with <code>df -h</code> and read the Remote-SSH output panel.</p>
        <p><strong>Container not running.</strong> <code>docker ps -a</code> shows exited containers too. <code>docker logs CONTAINER_NAME</code> says why. <code>docker start CONTAINER_NAME</code> brings it back, and if it exits again immediately, the log holds a configuration error.</p>
        <p><strong>hermes: command not found.</strong> You are on the host, and Hermes lives in the container. Prefix the command with <code>docker exec -it CONTAINER_NAME</code>, or exec into the container first.</p>
        <p><strong>Missing or rejected API key.</strong> <code>hermes config check</code> inside the container, then look at the env file’s permissions and spelling of the variable name. An HTTP 401 in the log is a bad or revoked key; an error mentioning extra usage means the OAuth route is hitting the subscription billing limit described above.</p>
        <p><strong>Changes vanish after an update.</strong> They were written to the container’s own filesystem, not a volume. Re-check <code>docker inspect</code> mounts and move your configuration and skills onto a mounted path. Note that <code>hermes update</code> refuses to run inside Docker by design; updates come from pulling a new image.</p>
        <p><strong>Exposed ports.</strong> If <code>docker ps</code> shows a port published as <code>0.0.0.0:PORT</code>, it is reachable from the whole internet unless the VPS firewall blocks it. An agent with shell access and your API keys should not have a public port. Bind management interfaces to localhost and reach them through an SSH tunnel, and keep the gateway’s user allow-list on; Hermes’s own deployment guidance warns against allowing all users.</p>
      </section>

      <section id="next" aria-labelledby="next-h">
        <h2 id="next-h" className="post__h2">What I am building next</h2>
        <p>With the box reachable from my editor, the experiment can start. The application I want to build collects engineering leadership postings, searches for Director of Engineering, Head of Engineering, VP of Engineering and Senior Engineering Manager roles, filters by compensation, location and remote availability, compares each description against my background, scores the fit, identifies the gaps between my resume and the requirements, drafts a tailored application for my review, tracks applications and follow-ups, and runs on a schedule.</p>
        <p>The split I have in mind: Hermes orchestrates. Its cron runs the search, its skills hold the criteria, its gateway sends the daily report, and its memory keeps track of what it has already shown me. Claude does the thinking in two places: as the model Hermes calls for the fit analysis and the gap list, and as the assistant I use in this remote workspace to write the pipeline itself. Of the list above, Hermes already provides scheduling, skills, messaging and persistent state out of the box. Everything else, the job-board clients, the normalizer, the filters, the database and the scoring prompts, is an integration I have to build, which is the point of the exercise. The design, and why deterministic filtering comes before any model call, is in <Link to="/writing/building-an-ai-job-search-agent-with-hermes/#design">the companion post</Link>.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Where this leaves the setup</h2>
      <div className="post__close-copy">
        <p className="lead">With key-based access and a non-root account in place, I can use VS Code to inspect the container and understand where it stores its data and configuration. That gives me a workspace for learning how the agent runs and troubleshooting it when something goes wrong.</p>
        <p>Next in the series: the first scheduled runs of the job-search agent, and what broke.</p>
        <div className="post__close-actions">
          <Link to="/writing/#chapter-lab" className="action">More from the lab <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
