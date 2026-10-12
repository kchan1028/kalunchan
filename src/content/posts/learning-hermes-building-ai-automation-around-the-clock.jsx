import { Link } from 'react-router';
import HermesWorkflow from '../../components/HermesWorkflow';

// Review draft: deliberately absent from writing.js and Post.jsx.
// Personal facts supplied by KC. Official technical sources checked 2026-10-10.
// Proposed metadata is kept here until editorial approval; no publication date.
export const draftMetadata = {
  status: 'draft',
  slug: 'learning-hermes-building-ai-automation-around-the-clock',
  title: 'Learning Hermes: Building AI Automation That Runs Around the Clock.',
  seoTitle: 'Learning Hermes: AI Automation Around the Clock — Ka Lun Chan',
  description: 'My first steps with Hermes on a Docker VPS: planning a content research assistant, separating code from AI, and learning what reliable scheduled work requires.',
  topics: ['Learning', 'AI'],
  keywords: ['Hermes Agent', 'scheduled AI automation', 'Docker VPS', 'content research assistant', 'AI workflow reliability'],
  minutes: 8,
  related: [
    { to: '/writing/connect-hermes-agent-hostinger-vps-vs-code/', label: 'Managing the Hermes VPS through VS Code and SSH' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'From shell scripts to AI agents' },
    { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Why I build my own developer tools' },
    { to: '/writing/scheduling-ai-work-hermes-chatgpt-claude/', label: 'Comparing ways to schedule AI work' },
  ],
};

export const toc = [
  ['why-hermes', 'Taking the work beyond my computer'],
  ['research-assistant', 'A research assistant I want to build'],
  ['code-and-ai', 'Where code ends and AI helps'],
  ['around-the-clock', 'What running around the clock requires'],
  ['failures', 'Knowing when the work failed'],
  ['storage', 'Recovering after a container replacement'],
  ['providers', 'The scheduler and the provider'],
  ['next-steps', 'What I will prove next'],
];

export default function Body() {
  return (
    <>
      <section id="why-hermes" aria-labelledby="why-hermes-h">
        <h2 id="why-hermes-h" className="post__h2">Taking the work beyond my computer</h2>
        <p>I have been using Claude Code and Codex interactively: asking questions, working through changes, reading what they produce, and deciding what to do next. That has made me curious about workflows that keep going while I am away from my computer. I want to learn how to give a system a useful, bounded job and come back to something worth reviewing.</p>
        <p>That is why I started exploring Hermes. I have set it up on a VPS using a Docker installation, explored managing the server through VS Code and SSH, and investigated connections to Claude and ChatGPT/Codex providers. I wrote about the remote setup in <Link to="/writing/connect-hermes-agent-hostinger-vps-vs-code/">connecting the Hermes VPS to VS Code</Link>. The next part is learning how to turn that installation into a dependable workflow.</p>
        <p>I am still at the setup and planning stage for the content assistant described here. I have not completed it or proved that it runs successfully unattended. Getting an agent onto a server gives me a place to experiment; I still need to show that the work is useful and survives the conditions a scheduled job will encounter.</p>
      </section>

      <section id="research-assistant" aria-labelledby="research-assistant-h">
        <h2 id="research-assistant-h" className="post__h2">A research assistant I want to build</h2>
        <p>My concrete example is a content research assistant for <a href="https://usefullittletools.app">usefullittletools.app</a>. I want help finding questions readers would benefit from having answered, with enough evidence to decide whether an article is worth writing. It connects to <Link to="/writing/why-i-build-my-own-developer-tools/">why I build my own tools</Link>: a useful question starts with a task someone is trying to complete.</p>
        <p>The planned workflow would:</p>
        <ol>
          <li>Inventory existing articles, saving their URLs, titles, topics, and the questions they already answer.</li>
          <li>Research useful reader questions around the tools, retaining source links and enough context to check the evidence.</li>
          <li>Compare candidates with published articles and the history of previous suggestions, including ideas I rejected or deferred.</li>
          <li>Save three ranked ideas, each with its reader question, supporting sources, reason for the ranking, and possible overlap.</li>
          <li>Deliver a short brief for my review, with a link to the saved result.</li>
        </ol>
        <p>For example, a calculator may leave a reader unsure which inputs apply to their situation. The research should identify that uncertainty and explain whether existing content already resolves it. Three ideas is the target, not permission to invent weak candidates: if only one survives the checks, the brief should say so.</p>
        <p>Receiving a brief, selecting an article, drafting it, and publishing it are separate decisions. This workflow would stop at the brief. I would choose whether to pursue an idea; any later drafting workflow would have its own instructions and review. Publishing would require another explicit decision.</p>
        <HermesWorkflow />
      </section>

      <section id="code-and-ai" aria-labelledby="code-and-ai-h">
        <h2 id="code-and-ai-h" className="post__h2">Where code ends and AI helps</h2>
        <p className="post__answer">Code handles fetching, filtering, and storage; AI handles synthesis and recommendations. For this assistant, scripts would collect the article inventory and research inputs, normalize URLs, apply exact duplicate checks, and save validated results. The model would interpret reader questions, identify related themes, and recommend which ideas deserve attention.</p>
        <p>Exact matching will not catch two differently worded suggestions that answer the same question. I would use the model to flag that possible overlap, then keep the evidence in the brief. Code can enforce a valid result structure and required source fields; I still need to review whether those sources support the recommendation.</p>
        <p>Some scheduled work needs no model at all. Refreshing an inventory, detecting a changed page, or checking whether an expected output exists can be ordinary scripts. Hermes documents a <a href="https://hermes-agent.nousresearch.com/docs/guides/cron-script-only/">script-only scheduling mode</a> with no LLM involvement. Those jobs can run without spending model tokens, though they still depend on their own inputs and infrastructure.</p>
        <p>This feels familiar from Linux administration, shell scripts, and operations, which I wrote about in <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">my path from scripts to AI agents</Link>. Clear inputs, permissions, exit conditions, and useful logs still matter. AI adds the ability to interpret and summarize information that would be awkward to handle with fixed rules. I want that ability inside a workflow whose behavior I can inspect.</p>
      </section>

      <section id="around-the-clock" aria-labelledby="around-the-clock-h">
        <h2 id="around-the-clock-h" className="post__h2">What running around the clock requires</h2>
        <p>For this experiment, “24/7 automation” means the workflow remains available to run on its schedule while my laptop is closed. It does not mean continuous model calls, and it does not promise uninterrupted service. A weekly research brief could meet the goal.</p>
        <p>The server must be available. The container and scheduler must be running. Instructions, input files, and past results must be durable and readable. Credentials must remain valid, the network must reach the research sources and provider, and model-backed steps need remaining quota or funded API access. Delivery has its own credentials and network dependency.</p>
        <p>Hermes’s <a href="https://hermes-agent.nousresearch.com/docs/user-guide/features/cron/#how-it-works">local cron scheduler runs through its gateway daemon</a>. Saving a schedule alone does not keep that process alive. I need to verify how my Docker installation starts the gateway after a reboot and exposes scheduler health. An SSH session should be a way to administer the job, not what keeps it running.</p>
        <p>Each scheduled run also needs instructions it can execute independently: which site to inventory, where to find prior suggestions, what counts as a useful idea, and where to save the brief. “Research the ideas we discussed” leaves too much in the interactive conversation.</p>
      </section>

      <section id="failures" aria-labelledby="failures-h">
        <h2 id="failures-h" className="post__h2">Knowing when the work failed</h2>
        <p>I would give each run an identifier and log when it started, which stages completed, what it saved, and whether delivery succeeded. Logs should distinguish an empty research result from a failed fetch, and a saved brief from a notification that never arrived. They should record errors without exposing credentials.</p>
        <p>A timeout may justify a retry. An invalid credential needs attention. My starting policy would allow two retries for transient failures, with a delay between attempts and a limit on total runtime and model calls. Once that budget is exhausted, the workflow should stop and send a failure notification with the run identifier and failed stage. These are controls I plan to test, not behavior I have verified in my installation.</p>
        <p>If the server is down, it cannot reliably report its own failure. I would use a separate check for a missing completion signal, so silence does not look like success. Notifications are another path to test, including a failed delivery.</p>
        <p>Duplicate prevention needs durable state. I would store a stable identifier for each idea, its review status, and the run that suggested it. A lock would prevent overlapping runs from saving competing briefs. A delivery record would help a retry avoid sending the same completed brief again. Hermes has scheduler-level protections, but its <a href="https://hermes-agent.nousresearch.com/docs/user-guide/features/cron/">execution-history documentation</a> explicitly stops short of guaranteeing exactly-once external side effects.</p>
        <p>If research and storage succeed but delivery fails, recovery should retry delivery of the saved brief. It should not pay for the same research again. An interrupted run needs inspection before replaying any step that may already have changed something.</p>
      </section>

      <section id="storage" aria-labelledby="storage-h">
        <h2 id="storage-h" className="post__h2">Recovering after a container replacement</h2>
        <p>A container can be replaced during an update. Files kept only in its writable layer disappear when that container is removed. <a href="https://docs.docker.com/engine/storage/volumes/">Docker volumes persist beyond an individual container’s lifecycle</a>, provided the volume itself is retained. I need to inspect the actual mounts on my VPS and put the required state on persistent paths.</p>
        <p>That state includes the Hermes configuration and schedule, workflow instructions and scripts, article inventory, suggestion history, saved briefs, and delivery records. Hermes documents its schedules and outputs under its home directory in the <a href="https://hermes-agent.nousresearch.com/docs/user-guide/features/cron/#job-storage">job storage reference</a>. A default path in a guide does not prove that my installation mounts it correctly.</p>
        <p>My recovery test would replace the container, reattach the retained storage, restore credentials securely, verify file permissions and scheduler health, then inspect any interrupted attempt before running again. I would check that prior suggestions still prevent duplicates and that a saved brief can still be delivered.</p>
        <p>Persistent storage is not a backup. Deleting or corrupting a file changes the persistent copy too; losing the VPS disk can lose the volume. I need separate, versioned backups outside that failure boundary, protected appropriately when they contain credentials, and a restore test. Recreating a container and recovering lost data are different tests.</p>
      </section>

      <section id="providers" aria-labelledby="providers-h">
        <h2 id="providers-h" className="post__h2">The scheduler and the provider</h2>
        <p>The scheduler decides when a job starts. The model provider supplies inference when a step needs it. Hermes can own the schedule on my VPS while a configured external provider handles the model calls. Investigating Claude and ChatGPT/Codex connections has helped me separate those responsibilities; changing the provider would not, by itself, move my schedule into that provider’s managed service.</p>
        <p>Managed scheduling reduces the infrastructure I have to operate. <a href="https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt">ChatGPT scheduled tasks</a> support recurring work, results, and notifications, with availability and limits depending on the account. Tasks can use supported connected apps, but a task created in a project cannot access that project’s uploaded or stored files.</p>
        <p>Claude’s <a href="https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork">scheduled-task documentation</a> describes remote runs on paid plans using saved instructions, connectors, and account files. Tasks requiring local files or apps run locally; some existing tasks also retain their local execution. I would check where a particular task runs before assuming my computer can be asleep. I explored the options further in <Link to="/writing/scheduling-ai-work-hermes-chatgpt-claude/">my scheduling comparison</Link>.</p>
        <p>Self-hosting gives me control over scripts, storage, and recovery, along with responsibility for operating them. Managed tasks may be enough when their supported inputs and permissions fit the job. Hermes interests me partly because I want to learn the system underneath the recurring brief.</p>
        <p>Subscription access and API billing need separate checks. OpenAI documents <a href="https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform">separate billing for ChatGPT and its API platform</a>. Anthropic says <a href="https://support.claude.com/en/articles/8325606-what-is-the-pro-plan">Claude Pro does not include Console API usage</a>. A subscription does not automatically fund API calls made with an API key.</p>
        <p>Hermes also documents a ChatGPT-authenticated Codex route in its <a href="https://hermes-agent.nousresearch.com/docs/user-guide/configuration/">configuration guide</a>. That is distinct from using an OpenAI API key. Before relying on any subscription-authenticated route, I need to verify the supported integration, account eligibility, usage limits, and credential refresh behavior. An available login option is not proof of unlimited unattended access.</p>
      </section>

      <section id="next-steps" aria-labelledby="next-steps-h">
        <h2 id="next-steps-h" className="post__h2">What I will prove next</h2>
        <p>My next step is one manual run, from inventory to saved research brief. I want to check the sources, read the rankings, and decide whether the output helps me choose an article. If it produces generic ideas or repeats existing content, scheduling it would just repeat that problem.</p>
        <p>Once the manual run is useful, I will add scheduling and verify the timezone and execution environment. Then I will test failure handling: unavailable sources, expired credentials, exhausted quota, failed delivery, and a container replacement. I will measure runtime, model usage, cost per useful brief, and how often I need to intervene.</p>
        <p>I will expand only after that workflow earns its place. For now, the result I want is a researched brief waiting for me when I return, with enough evidence to review and enough operational history to understand what happened.</p>
      </section>
    </>
  );
}
