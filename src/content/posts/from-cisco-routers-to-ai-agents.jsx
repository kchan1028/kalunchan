import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Series "Still Building After 20 Years", part 1. Facts from the site and KC:
// carrier network MTS (Cisco routers and switches, ACLs, ATM/IP/VoIP, 2,000+
// collocations, Expect/KornShell); one of the first three in a new SOC on
// NetScreen managed firewall/VPN; trained the TAC on the East Coast; VoIP on
// Asterisk, OpenSIPS, MediaProxy, Python AGI, in-house billing, LCR with call
// statistics, source-IP geo routing for media; racked a data center, then cloud
// regions on three continents; later PHP/LAMP, Django, Rails, React/Next.js,
// AWS, Docker, Terraform, CI/CD, Kafka; now Hermes, Claude Code, Codex,
// OmniRoute. Deliberately does not retell the security, VoIP or capacity posts;
// it links to them. No employers, no years.

export const toc = [
  ['before-cloud', 'Before the cloud, the network was the computer'],
  ['security', 'Security as an operations job'],
  ['voip', 'VoIP: where the network met the business'],
  ['up-the-stack', 'Up the stack, with the network still in my head'],
  ['every-layer', 'Security belongs to every layer'],
  ['agents', 'AI agents are a network problem too'],
  ['carried', 'What carried over'],
];

const carried = [
  { then: 'A router ACL: deny by default, allow what must pass', now: 'IAM policies, security groups, an agent’s tool allow-list' },
  { then: 'Trace the path hop by hop when a circuit fails', now: 'Trace a request through gateway, service, queue and model provider' },
  { then: 'Capacity ordered ahead of the hardware lead time', now: 'Token budgets and rate limits planned before the bill arrives' },
  { then: 'A runbook so the TAC could support what the SOC built', now: 'Instructions and data an unattended agent can run from' },
  { then: 'Least-cost routing weighed against call quality', now: 'Model routing weighed against answer quality' },
];

function Carried() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 694-1</span> Five habits from the network that I still use every week</caption>
        <thead><tr><th scope="col">Where I learned it</th><th scope="col">Where I use it now</th></tr></thead>
        <tbody>{carried.map((c) => <tr key={c.then}><td>{c.then}</td><td>{c.now}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="before-cloud" aria-labelledby="before-cloud-h">
        <h2 id="before-cloud-h" className="post__h2">Before the cloud, the network was the computer</h2>
        <p>This is the first story in a short series I am calling Still Building After 20 Years. It is the infrastructure one, and it starts where my engineering career did: on a carrier network, at a console prompt, with a Cisco router on the other end of a serial cable.</p>
        <p>The network spanned more than 2,000 collocations, carrying ATM, IP and VoIP traffic for a national broadband provider. The work was routers and switches, access control lists, circuits that went down at inconvenient hours, Linux and Unix boxes doing the monitoring, and a lot of scripts in Expect and KornShell that typed into consoles so a person did not have to. There was no console in a browser and no API to call for more capacity. If a link was full, someone ordered hardware, and someone else drove to a building to install it.</p>
        <p>What that kind of work teaches is how to think in paths. When a customer could not reach something, the answer was somewhere between them and it, and the job was to walk the path one hop at a time until you found the hop that disagreed with the others. I have used that habit on every system since, including ones with no routers in them.</p>
      </section>

      <section id="security" aria-labelledby="security-h">
        <h2 id="security-h" className="post__h2">Security as an operations job</h2>
        <p>My security education happened on the same network. The ACLs on the routers were my first security policy, and when the carrier launched a managed firewall and VPN service on NetScreen, I was one of the first three people supporting it in a brand-new Security Operations Center. Later I flew to the East Coast to train the Technical Assistance Center that would support it after us. I wrote the full version of that story in <Link to="/writing/network-security-before-devsecops/">network security long before DevSecOps</Link>, so here is only what it changed in me.</p>
        <p>I learned that security work is mostly operations. Change requests, troubleshooting a tunnel that is up in one direction, reading a rule set in order with the implicit deny at the bottom, writing it down so the next shift can do it. And I learned that a security control that blocks legitimate traffic is an outage, which is a lesson I find myself repeating to people configuring cloud permissions twenty-something years later.</p>
        <p>Teaching the TAC taught me something else: if I could not explain how to troubleshoot it, I did not understand it as well as I thought.</p>
      </section>

      <section id="voip" aria-labelledby="voip-h">
        <h2 id="voip-h" className="post__h2">VoIP: where the network met the business</h2>
        <p>Voice was where infrastructure turned into a business for me. At a voice services company and then at the communications platform I co-founded, the stack was Asterisk for calls, OpenSIPS for SIP signaling, MediaProxy for users behind NAT, Python business logic through AGI, and a billing system we wrote ourselves. I racked the servers for that platform in a data center, cabled them, and later moved it into cloud regions on three continents.</p>
        <p>Two pieces of that work belong in this story. Least-cost routing picked a carrier for every call, and we improved it with call statistics so the cheapest route also had to be a good one. And we used the caller’s source IP to send the audio through a media path closer to them, which made calls sound better and cost less to carry at the same time. Both were networking problems with a price tag on them, which is the most useful kind of problem I know. The details are in <Link to="/writing/data-driven-engineering-network-voip-publishing/#voip">different industries, same engineering problems</Link>.</p>
      </section>

      <section id="up-the-stack" aria-labelledby="up-the-stack-h">
        <h2 id="up-the-stack-h" className="post__h2">Up the stack, with the network still in my head</h2>
        <p>From there my work moved upward. PHP and LAMP backends, including the one behind a hybrid mobile app for a startup. Ruby on Rails for a publishing platform I re-built off WordPress. Python and Django, React and Next.js, PostgreSQL. AWS, Docker, Terraform and CI/CD pipelines. Kafka and event-driven services where the decoupling earned its cost.</p>
        <p>I did not leave the network behind. I carried it up. A VPC with public and private subnets is a zone design. A security group is a stateful ACL. A service mesh is routing with opinions. A distributed system is a set of hops that each fail differently, and debugging one is walking the path. When a junior engineer tells me the cloud is magic, I understand why it looks that way, and I also know there is a router somewhere that disagrees.</p>
        <p>The network background helped most in the boring places: latency budgets, DNS, timeouts, what happens when one dependency is slow rather than down. Those are the failures that never show up in a demo and always show up in production.</p>
      </section>

      <section id="every-layer" aria-labelledby="every-layer-h">
        <h2 id="every-layer-h" className="post__h2">Security belongs to every layer</h2>
        <p>Having worked at every layer from the wire up, I think of security as a property of each layer, owned by whoever works there, more than as a team down the hall. Network controls decide what can talk to what. Infrastructure controls decide what runs and who can log in. Application code decides, on every request, whether this caller may touch this record. Secrets management decides how many places a key can leak from. Cloud access controls decide how much damage one leaked key can do. Production operations decide how fast anyone notices.</p>
        <p>A weakness at any one of those layers is a weakness in the system, and the people who can fix it are usually the people who built it. That is why I want engineers to own the security of what they ship, with specialists to help, rather than the reverse. The habits are the ones the router taught me: deny by default, allow on purpose, log what you deny, and test every rule with the traffic it is supposed to permit.</p>
      </section>

      <section id="agents" aria-labelledby="agents-h">
        <h2 id="agents-h" className="post__h2">AI agents are a network problem too</h2>
        <p>Lately I have been experimenting with AI agents: Hermes Agent on a VPS I administer, Claude Code and OpenAI’s Codex in the terminal, and OmniRoute as a gateway in front of several model providers. The newest part of my career turns out to be the most familiar.</p>
        <p>An agent calls a model over the network, with a credential, through a gateway, with a timeout. It calls tools, which are other services with their own permissions. It keeps state somewhere and runs on a schedule on a machine that has to stay up. Every one of those is a thing I learned to worry about on a carrier network. The model is new. The authentication, the authorization, the latency, the retries, the logs, the cost of every request and the boundary around what the agent may touch are not. I wrote about the <Link to="/writing/omniroute-hermes-agent-docker/">gateway</Link> and the <Link to="/writing/scheduling-ai-work-hermes-chatgpt-claude/">scheduling</Link> separately; the short version is that an agent is a distributed system with a very good text parser in the middle.</p>
      </section>

      <section id="carried" aria-labelledby="carried-h">
        <h2 id="carried-h" className="post__h2">What carried over</h2>
        <Carried />
        <p>The tools changed almost completely. Routers became APIs, data centers became regions, scripts became pipelines, and now some of the scripts write themselves. The questions did not change much. What can talk to what? Who is allowed? What happens when this hop fails? Who will notice? What does it cost? I learned to ask those at a console port, and I have not found a system yet where they stopped being the right questions.</p>
        <p>The next story in the series is about why, after all of that and several leadership roles, I still write code.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The tools changed. The fundamentals mostly did not.</h2>
      <div className="post__close-copy">
        <p className="lead">From Cisco routers and physical servers to cloud infrastructure and AI agents, the work kept moving up the stack.</p>
        <p className="post__close-principle">Walk the path a request takes before you trust it, whether it crosses a router or an AI agent.</p>
        <p>Those habits came from the network, and they are still how I engineer systems that are reliable, secure and maintainable.</p>
        <div className="post__close-actions">
          <Link to="/writing/why-i-still-write-code/" className="action">Part 2: Why I still write code <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
