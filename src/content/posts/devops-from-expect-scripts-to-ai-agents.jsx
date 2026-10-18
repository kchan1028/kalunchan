import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// NOC facts come from profile.js ('carrier') and about.js; Expect/ksh, field
// technicians and console work were supplied by KC. Keep employers unnamed and
// years out of the visible text. Tools KC hasn't confirmed using hands-on
// (Jenkins, Kubernetes, GitHub Actions) are described as industry tools.

export const toc = [
  ['noc', 'Where I started'],
  ['expect', 'Automating the operator'],
  ['noc-lessons', 'What the NOC taught me'],
  ['devops', 'Then DevOps arrived'],
  ['still-scripts', 'Still writing deployment scripts'],
  ['standardization', 'What standardization fixed'],
  ['ai-devops', 'Can AI automate DevOps?'],
  ['alert-to-pr', 'From alert to pull request'],
  ['guardrails', 'Keep the production keys'],
  ['full-circle', 'The full circle'],
  ['durable', 'What stays the same'],
];

const expectScript = `spawn telnet $host
expect "Username:"
send "$user\\r"
expect "Password:"
send "$pass\\r"
expect {
  "#"     { send "show interfaces status\\r" }
  timeout { puts "no prompt from $host"; exit 1 }
}
expect "#"
send "exit\\r"`;

const pipeline = `git push
  → CI
  → test
  → build
  → container image
  → deploy`;

const aiIncident = {
  label: 'AI-assisted incident response, with a person at the gate',
  key: 'Human approval before production',
  tiers: [
    { name: 'Signal', nodes: [{ id: 'alert', label: 'Alert' }] },
    {
      name: 'Investigate',
      nodes: [{ id: 'agent', label: 'AI agent', sub: 'read-only: logs, metrics, traces, recent commits' }],
    },
    {
      name: 'Propose',
      nodes: [
        { id: 'hypo', label: 'Root-cause hypothesis' },
        { id: 'pr', label: 'Pull request', sub: 'suggested change' },
      ],
    },
    {
      name: 'Gate',
      nodes: [
        { id: 'checks', label: 'Tests & policy checks' },
        { id: 'human', label: 'Human approval' },
      ],
    },
    {
      name: 'Release',
      nodes: [
        { id: 'deploy', label: 'Deploy' },
        { id: 'verify', label: 'Verify', sub: 'roll back if it fails' },
      ],
    },
  ],
  edges: [
    ['alert', 'agent'],
    ['agent', 'hypo'],
    ['hypo', 'pr'],
    ['pr', 'checks'],
    ['checks', 'human', null, true],
    ['human', 'deploy', null, true],
    ['deploy', 'verify'],
  ],
};

function Code({ label, children }) {
  return (
    <div className="post__code">
      <div className="post__code-bar">
        <span className="label">{label}</span>
      </div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

export default function Body() {
  return (
    <>
      <section id="noc" aria-labelledby="noc-h">
        <h2 id="noc-h" className="post__h2">Where I started: a Network Operations Center</h2>
        <p>Early in my career, I worked in a Network Operations Center (NOC) for a <Link to="/experience/#carrier">national broadband network</Link>. We kept a carrier network running across more than 2,000 collocations, from DS1 circuits up to OC links, with routers, switches, Unix systems and fault management tools.</p>
        <p>Deployments looked very different from what engineers see today. There was no Terraform, no Kubernetes, no GitHub Actions and none of the cloud abstractions most teams now take for granted. We automated deployments and routine operational work with Expect scripts and KornShell (ksh) scripts.</p>
        <p>Automation only went so far. Some changes needed a person standing in front of the equipment. We worked with technicians in the field who drove to a site, plugged into a console port, and made the change or ran the troubleshooting with us on the phone.</p>
        <p>Looking back, much of what I believe about DevOps started there. The tools have changed almost completely since then, and the engineering problem underneath them much less.</p>
        <p>The same network is where my security work started, with router access control lists and a new managed firewall service. I tell that part in <Link to="/writing/network-security-before-devsecops/">network security long before DevSecOps</Link>.</p>
      </section>

      <section id="expect" aria-labelledby="expect-h">
        <h2 id="expect-h" className="post__h2">Expect scripts automated a person at a terminal</h2>
        <p>A lot of the equipment we managed wasn’t designed to be automated. It had no API. Often the only interface was an interactive command line built for a person typing at a keyboard. So we automated the person.</p>
        <p>That’s what Expect is for. A script played the part of an operator, one prompt at a time:</p>
        <ol className="post__steps">
          <li>Connect to the device.</li>
          <li>Wait for a prompt.</li>
          <li>Send a command.</li>
          <li>Check the response.</li>
          <li>Handle the next prompt, or the error you didn’t want.</li>
          <li>Repeat.</li>
        </ol>
        <p>A simplified version looked something like this:</p>
        <Code label="Expect (simplified)">{expectScript}</Code>
        <p>The happy path was the easy part. The work was in everything else: a prompt that never came, a device that answered with a slightly different banner after a firmware upgrade, a session that dropped halfway through a change. Every one of those had to be handled, or the script would carry on typing into a terminal that was no longer in the state it assumed.</p>
      </section>

      <section id="noc-lessons" aria-labelledby="noc-lessons-h">
        <h2 id="noc-lessons-h" className="post__h2">What the NOC taught me about operations</h2>
        <p>Those years taught me most of the operational habits I still rely on. None of them were called DevOps at the time.</p>
        <dl className="post__terms">
          <div>
            <dt>Repeatability</dt>
            <dd>If a change was worth doing twice, it was worth scripting, so the hundredth site got the same change as the first.</dd>
          </div>
          <div>
            <dt>Failure handling</dt>
            <dd>A script that only handles success will eventually make an outage worse.</dd>
          </div>
          <div>
            <dt>Deployment safety</dt>
            <dd>Change one site, check it, then widen the rollout. A bad change pushed everywhere at once is very hard to undo.</dd>
          </div>
          <div>
            <dt>Rollback</dt>
            <dd>Before making a change, know how to put things back, and save the configuration you’re about to replace.</dd>
          </div>
          <div>
            <dt>Logging</dt>
            <dd>Capture every session. At three in the morning, the log is how you find out what the script really did.</dd>
          </div>
          <div>
            <dt>Knowing the state</dt>
            <dd>Automation acts on what it believes about a system. When that belief is wrong, it does the wrong thing confidently.</dd>
          </div>
          <div>
            <dt>Dependencies</dt>
            <dd>A device rarely fails alone. You have to know what sits upstream and downstream before you touch it.</dd>
          </div>
          <div>
            <dt>People and equipment</dt>
            <dd>Some steps were software and some were a technician in a cabinet. Coordinating the two was part of the deployment.</dd>
          </div>
        </dl>
        <p>Troubleshooting under pressure belongs on that list too. When a circuit went down, what mattered was how quickly we could find the fault and how sure we were that the fix wouldn’t break something else.</p>
      </section>

      <section id="devops" aria-labelledby="devops-h">
        <h2 id="devops-h" className="post__h2">Then DevOps arrived</h2>
        <p>Shell scripts never went away. What changed is that, piece by piece, the industry agreed on standard tools for the jobs those scripts used to do:</p>
        <ul className="post__list">
          <li>Jenkins gave teams standardized CI/CD pipelines.</li>
          <li>Docker gave us a consistent way to package an application and everything it needs.</li>
          <li>Terraform turned infrastructure configuration into version-controlled code.</li>
          <li>Kubernetes standardized a huge amount of application orchestration.</li>
          <li>GitHub Actions moved CI/CD into the same repository as the code.</li>
          <li>Cloud platforms put APIs in front of infrastructure that once took a truck roll and a console cable.</li>
        </ul>
        <p>Infrastructure that used to be configured by hand, device by device, could now be described in a file and applied with one command:</p>
        <Code label="Terminal">terraform apply</Code>
        <p>Deployment scripts that used to live on somebody’s server became a pipeline that starts when code is pushed:</p>
        <Code label="Pipeline">{pipeline}</Code>
        <p>And a process that crashed at night no longer needed someone to log in and restart it. Kubernetes notices the failed container and starts a new one.</p>
        <p>The approach in <Link to="/writing/modernizing-public-sector-applications/">modernizing public-sector applications</Link> combines infrastructure defined as code and a pipeline with accessibility and security checks. It shows how much of the deployment work can be defined and checked in code, compared with the manual steps of a NOC change window.</p>
      </section>

      <section id="still-scripts" aria-labelledby="still-scripts-h">
        <h2 id="still-scripts-h" className="post__h2">Sometimes it still feels like writing deployment scripts</h2>
        <p>Having worked in both eras, I’ll admit that some days modern DevOps feels like I’m still writing deployment scripts. We finally agreed on better ways to write them.</p>
        <ul className="post__list">
          <li>YAML replaced some of the shell scripts.</li>
          <li>Terraform replaced some of the infrastructure scripts.</li>
          <li>Dockerfiles standardized how applications are packaged.</li>
          <li>Kubernetes manifests describe how applications should run.</li>
          <li>CI/CD pipelines describe how code moves from a commit to production.</li>
        </ul>
        <p>The syntax changed, the abstractions got much better, and infrastructure became programmable. The idea underneath is one I recognize from the NOC.</p>
        <p className="post__pull">Describe what you want the system to do, automate it, watch what happens, and handle the failures.</p>
      </section>

      <section id="standardization" aria-labelledby="standardization-h">
        <h2 id="standardization-h" className="post__h2">What standardization fixed</h2>
        <p>That doesn’t make modern DevOps “just scripts.” Standardization was a major engineering improvement because it changed where operational knowledge lives.</p>
        <p>In the NOC, knowing how to deploy something could live in a shell script on one server, in a runbook that was mostly right, or in the head of the engineer who had done it last. When that engineer was on vacation, the knowledge was too.</p>
        <p>Modern DevOps moved much of that knowledge into declarative, version-controlled files. That brought a long list of things we used to work hard for:</p>
        <ul className="post__list">
          <li>Environments you can rebuild from scratch, the same way every time</li>
          <li>Code review and version history for infrastructure changes</li>
          <li>Automated tests before anything reaches production</li>
          <li>Standard environments from a laptop to production</li>
          <li>Easier rollback, because the previous version is a commit away</li>
          <li>Better observability</li>
          <li>Much less dependence on tribal knowledge</li>
        </ul>
        <p className="post__answer">DevOps changed from hand-written scripts that automated people at terminals to standardized, version-controlled tools: CI/CD pipelines, containers, infrastructure as code, Kubernetes and cloud APIs. Over that time, the industry turned operational knowledge into structured, repeatable instructions that machines can read and people can review.</p>
        <p>Removing single points of failure in knowledge is a big part of <Link to="/leadership/">how I lead engineering teams</Link>, and infrastructure as code is one of the best tools we’ve had for it. It also turned out to be what AI needed: operations described in files that a model can read.</p>
      </section>

      <section id="ai-devops" aria-labelledby="ai-devops-h">
        <h2 id="ai-devops-h" className="post__h2">Can AI automate DevOps?</h2>
        <p className="post__answer">Increasingly, yes. AI can already write Terraform, Kubernetes manifests and CI/CD pipelines, read logs and stack traces, investigate failed deployments and propose fixes. It works best taking on investigation and repetitive work, with an engineer still accountable for what reaches production.</p>
        <p>The list of things AI can help with is already long:</p>
        <ul className="post__list">
          <li>Generating Terraform, Kubernetes manifests and pipeline definitions</li>
          <li>Reading logs, interpreting stack traces and correlating errors across systems</li>
          <li>Investigating failed deployments and alerts</li>
          <li>Explaining unfamiliar infrastructure</li>
          <li>Spotting suspicious configuration</li>
          <li>Writing monitoring queries and runbooks</li>
          <li>Summarizing incidents and proposing remediation</li>
        </ul>
        <p>An engineer can now say something like this to an agent:</p>
        <p className="post__pull">“Our Django service started returning 500s after the last deployment. Find out what changed.”</p>
        <p>To answer it, the agent can work through the same trail I would: Git history, deployment history, application logs, infrastructure configuration, metrics, traces and recent changes. Then it comes back with a likely root cause. I’ve been building with LLMs, agents and the Model Context Protocol, and that kind of investigation is where I see them help most right now.</p>
      </section>

      <section id="alert-to-pr" aria-labelledby="alert-to-pr-h">
        <h2 id="alert-to-pr-h" className="post__h2">From a 3 a.m. page to a pull request</h2>
        <p>Today, an incident usually goes like this: an alert fires, a person wakes up, opens a dashboard, reads logs, connects with SSH or kubectl, works out what’s wrong, changes the configuration and deploys the fix.</p>
        <p>I expect more incidents to start going differently:</p>
        <Diagram spec={aiIncident} id="ai-incident" no="663-1" />
        <p>The agent does the first hour of investigation before anyone is awake. It brings back a hypothesis, the evidence for it, and a proposed change as a pull request. The change runs through the same tests and policy checks as any other. A person reads it, approves it, and watches the deploy verify.</p>
        <p>That shape matters to me more than how clever the agent is. Every step that touches production still goes through a pipeline, a review and a record.</p>
      </section>

      <section id="guardrails" aria-labelledby="guardrails-h">
        <h2 id="guardrails-h" className="post__h2">Don’t hand AI the production keys</h2>
        <p>AI-assisted DevOps and AI changing production on its own are very different things.</p>
        <p>An AI system that misunderstands an application is inconvenient. One that misunderstands IAM, networking, a production database, Terraform state, a Kubernetes cluster or a destructive command can cause a serious outage or a security incident. In the NOC, a bad script could take down a site. An agent with broad credentials can do the same thing at cloud speed.</p>
        <p>So the guardrails I’d put in place look a lot like the ones we already use for people:</p>
        <dl className="post__terms">
          <div>
            <dt>Least privilege</dt>
            <dd>Give the agent only the access the task needs, scoped to one environment.</dd>
          </div>
          <div>
            <dt>Read-only by default</dt>
            <dd>Investigation needs to read logs and metrics. It doesn’t need write access.</dd>
          </div>
          <div>
            <dt>Pull requests, not direct changes</dt>
            <dd>Infrastructure changes go through the repository, where they get reviewed, tested and recorded.</dd>
          </div>
          <div>
            <dt>Human approval for production</dt>
            <dd>A named person approves every production change and owns the result.</dd>
          </div>
          <div>
            <dt>Tests and policy checks</dt>
            <dd>The same automated gates apply whether a person or an agent wrote the change.</dd>
          </div>
          <div>
            <dt>Audit trails</dt>
            <dd>Every action an agent takes is logged, so you can reconstruct what it did and why.</dd>
          </div>
          <div>
            <dt>Rollback</dt>
            <dd>Every change has a tested way back.</dd>
          </div>
          <div>
            <dt>Blast-radius limits</dt>
            <dd>Separate environments, staged rollouts and limits on how much one change can touch.</dd>
          </div>
          <div>
            <dt>Secrets stay out</dt>
            <dd>Production secrets never go into a prompt or a context window unless there’s no other way.</dd>
          </div>
        </dl>
        <p>These are the controls we already built for people, applied to a new kind of operator. In <Link to="/writing/building-document-intelligence-workflows/#messy">a document intelligence workflow</Link>, a review threshold needs to reflect the cost of a wrong answer and be tested against representative documents. Production access deserves at least that much care.</p>
        <p className="post__pull">For now, let AI take the investigation and the repetitive work, and keep the accountability with engineers.</p>
      </section>

      <section id="full-circle" aria-labelledby="full-circle-h">
        <h2 id="full-circle-h" className="post__h2">The full circle: from Expect to AI agents</h2>
        <p>Two decades ago, I wrote Expect scripts because the machines in front of me weren’t designed to be automated. We taught software to act like a human operator: wait for this prompt, type this, look for that response, then type the next command.</p>
        <p>Then infrastructure got APIs. Then it became code. Then it became declarative, so you described the state you wanted and the tooling worked out how to get there. Each step made the machine’s interface more structured, and each one moved automation further from imitating a person at a keyboard.</p>
        <p>AI agents operate one level above that. They read the structured interfaces we spent years building and reason about the outcome someone asked for. At a much smaller scale, it’s the same reason I’ve started <Link to="/writing/why-i-build-my-own-developer-tools/">building little tools for the commands I keep looking up</Link>: once the interface is structured, the lookup can be too.</p>
        <p className="post__pull">I started out writing software that pretended to be a human operator. Now we’re building AI systems that can reason about the work an operator does.</p>
        <p>Laid out end to end, the interfaces I’ve worked through look like this:</p>
        <ol className="post__steps">
          <li>Console</li>
          <li>Shell scripts</li>
          <li>Expect and ksh</li>
          <li>Configuration management</li>
          <li>CI/CD</li>
          <li>Containers</li>
          <li>Infrastructure as code</li>
          <li>Kubernetes</li>
          <li>Cloud APIs</li>
          <li>AI-assisted operations</li>
          <li>Agentic operations, maybe</li>
        </ol>
        <p>The objective at the bottom of that list is close to the one at the top: make systems reliable, repeatable, observable and recoverable, with less manual work each time.</p>
      </section>

      <section id="durable" aria-labelledby="durable-h">
        <h2 id="durable-h" className="post__h2">Tools change. The system underneath them doesn’t change much.</h2>
        <p>Watching these tools come and go has made me careful about getting attached to any of them. Jenkins, Terraform, Kubernetes, GitHub Actions and whichever AI operations platform comes next are all ways of expressing intent to a system.</p>
        <p>What lasts is understanding the system underneath the tool:</p>
        <ul className="post__list">
          <li>Networking, DNS and certificates</li>
          <li>Linux, processes and databases</li>
          <li>Security and access control</li>
          <li>Deployment strategies and rollback</li>
          <li>Distributed systems and their failure modes</li>
          <li>Observability</li>
          <li>Risk</li>
        </ul>
        <p className="post__answer">AI is unlikely to replace DevOps engineers outright. It will write more of the Terraform, investigate more of the logs and propose more of the routine changes. Someone still has to judge whether a proposal makes sense, and know what happens when it doesn’t.</p>
        <p>It’s the same argument I made in <Link to="/writing/you-dont-need-to-remember-everything/">you don’t need to remember everything to be a good software engineer</Link>. I don’t need to remember Expect syntax anymore, and soon I may not need to remember Terraform syntax either. I still need to know what a routing change does to the traffic behind it. That came from the NOC, and I still use it.</p>
        <p>Architecture has followed a similar path, which I wrote about in <Link to="/writing/software-architecture-lessons-from-different-systems/">what different systems taught me about software architecture</Link>. Both stories end up in the same place: every abstraction is useful until it fails, and then someone has to understand what’s underneath.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Still automating the same thing</h2>
      <div className="post__close-copy">
        <p className="lead">Compared with sitting in a NOC writing Expect and ksh scripts, modern DevOps can feel incredibly advanced. Some days it also feels strangely familiar.</p>
        <p>I’m still learning the AI part, the same way I learned every layer before it. But the job hasn’t moved far from where I started:</p>
        <p className="post__close-principle">Make this system do what I want, reliably, without a person doing every step by hand.</p>
        <p>AI may be the next abstraction in that very long journey. I’d like it to be one we can review, test and roll back.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through your DevOps or AI operations plans <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
