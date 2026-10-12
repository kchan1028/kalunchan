import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Security career story. Confirmed by KC: Cisco router ACLs in a carrier
// network; a new managed security service on NetScreen firewall/VPN products;
// one of the first three people supporting it in the Security Operations
// Center; travelled to the East Coast to train the Technical Assistance Center;
// later AAA on the voice platforms, then authentication, SSO, OAuth, JWT, RBAC
// and object-level authorization in applications, AWS/IAM/Terraform on client
// work, and government systems with federal security requirements. Employers
// unnamed, no job title invented, no customer incidents, no metrics. NetScreen
// history is public record (founded 1997, bought by Juniper in 2004); those two
// years are owner-approved on this route in scripts/audit-seo.py. The stages in
// Fig. 679-1 are undated on purpose.

export const toc = [
  ['routers-and-acls', 'Before cloud security, there were routers and ACLs'],
  ['managed-security', 'When the carrier started selling security'],
  ['first-three', 'One of the first three in the SOC'],
  ['netscreen', 'Firewalls, VPNs and the whole path'],
  ['tac', 'Flying east to train the TAC'],
  ['more-than-a-firewall', 'Security is more than a firewall'],
  ['carried-forward', 'What carried into software, cloud and government work'],
  ['every-layer', 'Security at every layer of a company'],
  ['learned', 'What I learned'],
];

// Fig. 679-1. Stages, not a schedule: no years, by site rule.
const stages = [
  { title: 'Carrier network operations', text: 'Cisco router access control lists: which traffic may reach which system, and which rule just took a customer offline.' },
  { title: 'A managed security service', text: 'The carrier starts selling managed firewalls and VPNs on NetScreen. Security becomes a product with customers.' },
  { title: 'Security Operations Center', text: 'One of the first three people supporting the new service. Learning the product, the customers and the process at the same time.', accent: true },
  { title: 'Training the TAC', text: 'A trip to the East Coast to teach the Technical Assistance Center how to support and troubleshoot it.' },
  { title: 'Voice platforms and AAA', text: 'Authentication, authorization and accounting for every call: who is calling, what they may call, and what it cost.' },
  { title: 'Application security', text: 'Authentication, SSO, OAuth, JWT, role-based access and object-level authorization in Django, Rails and Node APIs.' },
  { title: 'Mobile application security', text: 'Nokia, iPhone and Android apps as untrusted clients: credentials on the device, tokens on the wire, and every permission checked again on the server.' },
  { title: 'Cloud infrastructure security', text: 'IAM, network controls, secrets and Terraform on AWS. The ACL came back as a security group and a policy document.' },
  { title: 'Government systems', text: 'Federal security requirements: access control, auditability and secure deployment as part of the scope, with FedRAMP-aligned environments.' },
  { title: 'Engineering leadership', text: 'Security as a release gate and a named owner, pulled to the front of delivery instead of the week before launch.', now: true },
];

// Fig. 679-2. `mine` is first-hand; `concerns` and `controls` are general practice.
const layers = [
  {
    id: 'network', name: 'Network', hint: 'ACLs, firewalls, segmentation',
    concerns: 'Traffic reaching systems it has no business reaching, flat networks where one compromised host sees everything, and management interfaces exposed to the world.',
    controls: ['Access control lists and firewall policies', 'Segmentation into zones', 'VPNs for traffic that crosses untrusted networks', 'Logging what was denied'],
    mine: 'Cisco router ACLs in a carrier network, then NetScreen firewall and VPN services in the Security Operations Center.',
    to: '/experience/#carrier', label: 'The carrier network role',
  },
  {
    id: 'infrastructure', name: 'Infrastructure', hint: 'Servers, operating systems, patching',
    concerns: 'Unpatched systems, default configuration, services listening that nobody remembers starting, and hosts reachable from more places than they need to be.',
    controls: ['Hardened baseline images', 'Patching on a schedule, not after an incident', 'Only the services the system needs', 'Reviewing what is exposed'],
    mine: 'Linux administration for the servers I racked and the open-source VoIP platform that ran on them.',
    to: '/writing/building-software-before-and-after-ai/#the-stack', label: 'What the platform was made of',
  },
  {
    id: 'application', name: 'Application', hint: 'Authentication, authorization, input',
    concerns: 'A valid login that can read someone else’s record, input trusted because it came from the client, and privileged actions with no audit trail.',
    controls: ['Authentication and single sign-on', 'Role-based and object-level authorization', 'Input validation at the boundary', 'Secure coding practice and review', 'Audit logs for privileged actions'],
    mine: 'Authentication, SSO, OAuth, JWT, RBAC and object-level authorization in Django REST Framework, Rails and Node.js APIs.',
    to: '/writing/api-architecture-lessons/#security', label: 'Authorization in API design',
  },
  {
    id: 'mobile', name: 'Mobile apps', hint: 'Untrusted clients, device storage, tokens',
    concerns: 'An app that is trusted because it is ours, credentials or API keys shipped inside the binary, tokens kept in plain storage on the device, and permissions requested because they might be useful later.',
    controls: ['Treat the app as an untrusted client; authorize every request on the server', 'Short-lived tokens with refresh, stored in the platform keychain or keystore', 'TLS everywhere, with certificate pinning where the risk warrants it', 'No secrets in the app bundle', 'Only the device permissions the feature needs'],
    mine: 'Mobile VoIP apps on Nokia, iPhone and Android, where the handset was an endpoint that had to register and authenticate against the platform. Later iOS and Android apps for a startup and for government clients, built as untrusted clients of the API.',
    to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/#voip-on-a-phone', label: 'Putting a VoIP service on a handset',
  },
  {
    id: 'data', name: 'Data', hint: 'Access, encryption, retention',
    concerns: 'Every service sharing one database login, sensitive fields in logs and exports, and backups nobody has tested or restricted.',
    controls: ['Database roles per service, least privilege', 'Encryption in transit and at rest', 'Retention and deletion rules', 'Access logging on sensitive tables'],
    mine: 'Call records and billing data were the most sensitive thing the VoIP platform held. Keeping them correct, reconciled and access-limited was part of the job.',
    to: '/writing/open-source-voip-distributed-systems-lessons/#records', label: 'State and records that had to reconcile',
  },
  {
    id: 'cloud', name: 'Cloud', hint: 'IAM, network config, secrets, IaC',
    concerns: 'Over-permissive IAM policies, public storage buckets, secrets committed to code, and configuration that drifted from what was reviewed.',
    controls: ['IAM with least privilege and no shared keys', 'Private networks, security groups, minimal public surface', 'Secrets in a secrets manager', 'Infrastructure as code with review'],
    mine: 'AWS environments for client work, provisioned with Terraform, with ECS, RDS, S3 and CloudFront behind IAM policies that are reviewed like code.',
    to: '/work/public-service-modernization/', label: 'Case study: a public service rebuilt on AWS',
  },
  {
    id: 'delivery', name: 'Software delivery', hint: 'Reviews, dependencies, pipelines',
    concerns: 'Unreviewed changes reaching production, dependencies with known vulnerabilities, and pipelines holding credentials powerful enough to delete the account.',
    controls: ['Code review for every change', 'Dependency updates and scanning', 'Automated security checks in CI', 'Scoped pipeline credentials and deployment approvals'],
    mine: 'Security and accessibility checks as release gates in client pipelines, and a rule about never handing an automated agent the production keys.',
    to: '/writing/devops-from-expect-scripts-to-ai-agents/#guardrails', label: 'Don’t hand AI the production keys',
  },
  {
    id: 'operations', name: 'Operations', hint: 'Logging, monitoring, response',
    concerns: 'Logs nobody reads, alerts nobody owns, known vulnerabilities that stay open for months, and incidents handled from memory.',
    controls: ['Centralized logging and monitoring', 'An incident process with an owner', 'Vulnerability remediation with deadlines', 'Runbooks that survive the person who wrote them'],
    mine: 'Network and security operations at a carrier: escalation paths, process and training so support did not depend on a few experts.',
    to: '/work/carrier-capacity/', label: 'Case study: operations across 2,000+ collocations',
  },
  {
    id: 'organization', name: 'Leadership', hint: 'Ownership, standards, priority',
    concerns: 'Security owned by nobody in particular, treated as an audit at the end, and risk that never makes it into the roadmap conversation.',
    controls: ['Risk assessment as part of planning', 'A named owner for each control', 'Engineering standards and training', 'Documentation and compliance awareness'],
    mine: 'Pulling security risk to the front of delivery, training other engineers to support what we built, and government work where compliance is part of the scope.',
    to: '/leadership/', label: 'How I run engineering',
  },
];

function Timeline() {
  return (
    <figure className="journey">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 679-1</span> My security engineering journey, by stage
        <span className="journey__key label">Stages, not a schedule. Undated on purpose.</span>
      </figcaption>
      <ol className="journey__list">
        {stages.map((s, i) => (
          <li key={s.title} className={`journey__stage${s.accent ? ' is-accent' : ''}${s.now ? ' is-now' : ''}`}>
            <span className="journey__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="journey__node" aria-hidden="true" />
            <div className="journey__body">
              <p className="journey__title">{s.title}</p>
              <p className="journey__text">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Layers() {
  const [active, setActive] = useState(0);
  const select = (i, focus) => {
    const next = (i + layers.length) % layers.length;
    setActive(next);
    if (focus) document.getElementById(`layer-tab-${next}`)?.focus();
  };
  const onKeyDown = (e) => {
    const moves = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: layers.length - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    select(moves[e.key], true);
  };
  return (
    <figure className="layers">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 679-2</span> Security across the technology stack
        <span className="journey__key label">Select a layer. First-hand experience is marked; the rest is general practice.</span>
      </figcaption>
      <div className="layers__grid">
        <div className="layers__tabs" role="tablist" aria-label="Layers of the technology stack" aria-orientation="vertical" onKeyDown={onKeyDown}>
          {layers.map((l, i) => (
            <button
              key={l.id}
              id={`layer-tab-${i}`}
              type="button"
              role="tab"
              className="layers__tab"
              aria-selected={i === active}
              aria-controls={`layer-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
            >
              <span className="layers__no mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="layers__name">{l.name}</span>
              <span className="layers__hint">{l.hint}</span>
            </button>
          ))}
        </div>
        {layers.map((l, i) => (
          <div key={l.id} id={`layer-panel-${i}`} className="layers__panel" role="tabpanel" aria-labelledby={`layer-tab-${i}`} hidden={i !== active}>
            <h3 className="layers__h h3">{l.name}</h3>
            <p className="label">What goes wrong here</p>
            <p>{l.concerns}</p>
            <p className="label">Typical controls <span className="layers__tag">General practice</span></p>
            <ul className="ticks">
              {l.controls.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p className="label">Where I’ve worked in it <span className="layers__tag is-mine">First-hand</span></p>
            <p>{l.mine}</p>
            <Link to={l.to} className="link-arrow"><span>{l.label}</span> <ArrowRight /></Link>
          </div>
        ))}
      </div>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="routers-and-acls" aria-labelledby="routers-and-acls-h">
        <h2 id="routers-and-acls-h" className="post__h2">Before cloud security, there were routers and ACLs</h2>
        <p>The words today are Zero Trust, DevSecOps, identity and access management, infrastructure as code, automated scanning. My first security work had none of those words in it. It was an access control list on a Cisco router in a carrier network, and the question it answered was older than any of them: which traffic is allowed to reach which thing.</p>
        <p className="post__answer">An access control list (ACL) is an ordered set of permit and deny rules that a router checks against each packet: source address, destination address, protocol and port. It is applied to an interface in one direction, inbound or outbound, the first matching rule wins, and anything that matches nothing is dropped. In a carrier network, ACLs protected the network itself: who could reach a router’s management interface, which neighbours were trusted, what a customer’s traffic was allowed to do once it entered our side.</p>
        <p>What I learned quickly is that network security was never about blocking traffic. The network existed to carry traffic. Every rule had two ways to fail. It could let through something it should have stopped, which you might not find out about for a long time. Or it could block something legitimate, which you found out about in minutes, because a customer’s application stopped working and the ticket came to us. A rule that drops a customer’s real traffic is an outage with a security label on it.</p>
        <p>So the actual skill was understanding which systems needed to talk to each other, writing rules that allowed exactly that, and knowing where to look when something that should connect didn’t. An ACL was a frequent suspect in connectivity troubleshooting, and reading one carefully, in order, with the implicit deny at the bottom in mind, became a habit I never lost.</p>
      </section>

      <section id="managed-security" aria-labelledby="managed-security-h">
        <h2 id="managed-security-h" className="post__h2">When the carrier started selling security</h2>
        <p>Then the carrier introduced a managed security service built on NetScreen firewall and VPN products, and security stopped being something we did to protect our own network and became something we sold.</p>
        <p>NetScreen Technologies was founded in 1997 and built firewalls and VPN gateways as purpose-built hardware, with security processing in custom silicon rather than on a general-purpose server. The devices ran ScreenOS, which organized a network into zones and expressed security as policies between them. They were fast, they were reliable, and they were a good fit for a carrier that wanted to put a managed box at the customer’s edge. Juniper Networks bought the company in 2004 for about four billion dollars, and ScreenOS lived on in Juniper’s product line for years afterward.</p>
        <p>A managed security service changed what the carrier was responsible for. Before, a customer bought connectivity and we made sure the circuit was up. Now the customer bought a firewall we configured, a VPN between their offices that ran across our network, a security policy we maintained on their behalf, and monitoring to tell us when any of it broke. Every change request was a security decision made for someone else. Every outage on that box was both a security event and a connectivity outage. The operational side of that, the process for taking a change, verifying it, applying it and recording it, had to be built alongside the service.</p>
      </section>

      <section id="first-three" aria-labelledby="first-three-h">
        <h2 id="first-three-h" className="post__h2">One of the first three people in the Security Operations Center</h2>
        <p>I was one of the first three people supporting that service in the Security Operations Center. I want to be precise about what that was. It was not a title and I was not running it. It was a chair in a new room, next to two other people, with a service that had customers and not yet a runbook.</p>
        <p>Being that early meant learning several things at once. The product, from the documentation and from devices in front of us. The customers’ environments, because a firewall policy only makes sense when you know what sits behind it and what it needs to reach. And the process, because none existed yet: how a change request came in, how we confirmed it was really the customer asking, how we applied it without taking them offline, where we wrote down what we did, and what we escalated to the vendor.</p>
        <p>In a team of three, everything ends up with you at some point. That is exhausting and it is also the fastest way I know to learn a system end to end. The habit I took from it was writing things down as we learned them, so the fourth person would not have to learn them the way we did. Looking back, that was the first operational documentation I ever cared about, and it was because I could see exactly who would need it.</p>
      </section>

      <section id="netscreen" aria-labelledby="netscreen-h">
        <h2 id="netscreen-h" className="post__h2">Firewalls, VPNs and the whole path</h2>
        <p>The technology is worth a short explanation, because the ideas have not changed much. A stateful firewall remembers the connections it has allowed, so it can let the reply traffic back in without a separate rule for it. Interfaces belong to zones, with names like Trust, Untrust and DMZ, and a policy says which traffic may cross from one zone to another: from where, to where, which service, and whether to permit, deny and log it. Network address translation lets a private network sit behind one public address, or maps a public address to one inside machine. An IPsec VPN builds an encrypted tunnel between two sites, and both ends have to agree on every parameter before it comes up. The firewall is also a router, so it has routes, and the routes can be wrong. And it keeps logs and a session table, which is where most troubleshooting starts.</p>
        <p>The lesson underneath all of it was that a security device sits on a path, and you cannot troubleshoot it in isolation. A customer calls to say an application cannot connect. The cause might be routing on either side, an ACL upstream, the firewall policy, the NAT rule, a VPN tunnel that is up in one phase and not the other, DNS, or the application’s own configuration, which nobody mentioned because it was changed yesterday by someone else. The firewall was the suspect in every ticket. It was the cause less often than people assumed. Finding out which meant tracing the path from the client to the server and ruling things out in order.</p>
        <p>That is still how I debug a production problem that touches several systems. It is the same instinct behind the <Link to="/writing/open-source-voip-distributed-systems-lessons/#whole-path">way I followed a VoIP call through signaling, media and billing</Link> years later.</p>
      </section>

      <section id="tac" aria-labelledby="tac-h">
        <h2 id="tac-h" className="post__h2">Flying east to train the TAC</h2>
        <p>As the service grew, I travelled to the East Coast to train the Technical Assistance Center, the team that would take customer calls and troubleshoot the service after us. It is one of the experiences I remember most clearly from those years, and the reason has little to do with firewalls.</p>
        <p>Up to that point I had been learning the technology. Now I had to explain it to engineers who would be on the phone with customers without me in the room. That is a different skill. The questions they asked found every gap in my understanding and every gap in our documentation. Things I did by feel had to become steps someone else could follow at three in the morning: what to check first, how to read a log, what a healthy tunnel looks like, when to stop and escalate. I had to turn how I troubleshoot into something repeatable, and watching other engineers get confident with it was more satisfying than fixing the problem myself.</p>
        <p>I did not have the words for it then, but that trip was the start of how I think about <Link to="/mentorship/">mentoring engineers</Link>: understanding a system is one skill, and being able to teach someone else to troubleshoot it is another. A support organization that depends on the two or three people who were there at the beginning is a single point of failure, and I have spent most of my career since trying not to be one.</p>
      </section>

      <section id="more-than-a-firewall" aria-labelledby="more-than-a-firewall-h">
        <h2 id="more-than-a-firewall-h" className="post__h2">Security is more than a firewall</h2>
        <p>The security work did not end when I left carrier networks. It changed shape with every job. On the voice platforms it was AAA: every call was authenticated, authorized and accounted for, so the platform always knew who was calling, what they were allowed to call, and what it cost. In application work it became authentication, single sign-on, OAuth, tokens, roles and the check on the individual record. On mobile it became the same questions asked of a client we did not control: where the credentials live on the device, what travels on the wire, and what the server re-checks. In cloud work it became IAM policies, network configuration and secrets, written as code. In government work it became federal security requirements, access control and auditability as part of the scope. And in leadership it became deciding who owns security on a team and when in the delivery cycle it gets attention.</p>
        <Timeline />
        <p>That is not a strict chronology, and I have gone back and forth between layers more than once. The point is that security was never a separate specialty I visited. It was part of every layer I worked in, and each layer taught me something the next one needed.</p>
      </section>

      <section id="carried-forward" aria-labelledby="carried-forward-h">
        <h2 id="carried-forward-h" className="post__h2">What carried into software, cloud and government work</h2>
        <p className="post__answer">An ACL is an authorization policy whose subjects are IP addresses. Role-based access control is an ACL whose subjects are roles. Object-level authorization is the ACL on a single record. The habits transfer directly: deny by default, allow explicitly, mind the order of the rules, log what you deny, and test every rule with the traffic it is supposed to permit, not only the traffic it is supposed to block.</p>
        <p>When I later built APIs in Django REST Framework, Rails and Node.js, the authorization bugs I cared about most were the ones a firewall engineer would recognize. A valid token proves who is calling. It says nothing about whether they may touch this record. I wrote about that distinction in <Link to="/writing/api-architecture-lessons/#security">API architecture lessons from real systems</Link>, and the reason I check it first is that I spent years watching what happens when a rule permits more than its author intended.</p>
        <p>Mobile made that lesson sharper. From the <Link to="/writing/voip-apps-for-nokia-phones-before-the-iphone/">VoIP apps we wrote for Nokia phones</Link> through the iOS and Android apps I have shipped since, the app in someone’s pocket is a client we do not control. Anything it holds can be read, anything it sends can be replayed, and anything it is trusted to decide will eventually be decided wrong. So the credentials live in the platform’s secure storage, the tokens are short-lived, the secrets stay out of the bundle, and every authorization decision is made again on the server, where the app cannot argue with it.</p>
        <p>Telecom taught me that security and reliability are the same discipline wearing different badges. On a VoIP platform, registration, routing and billing all have to agree on who is calling and what they may do, and a security control that drops legitimate calls is an outage. The platform I co-founded needed routing, billing and access control to be right at the same time, and a failure in any of them looked, to the customer, like the same failure.</p>
        <p>Cloud infrastructure felt familiar faster than I expected. A security group is a stateful ACL. An IAM policy is an ACL over API calls. A VPC with public and private subnets is a zone design. Terraform is the configuration I used to type into a router, now in version control with a reviewer. The differences are real too: the perimeter is mostly gone, identity carries the weight the network edge used to carry, everything is an API, and change moves through a pipeline instead of a maintenance window. The questions underneath are the ones from the ACL days. Who needs to reach what, and what happens to legitimate traffic when the rule is wrong.</p>
        <p>Government work added a discipline I had not had before. Systems built for federal programs come with security requirements that are written down, including FedRAMP-aligned environments, and the requirements have to be visible in how the system is designed, deployed and operated: access control, auditability, secure configuration and a deployment path that can be shown to someone. My role there was engineering, designing and building systems to meet those requirements. I have not obtained an authorization myself or worked as a security assessor, and I would not want this story to suggest otherwise.</p>
      </section>

      <section id="every-layer" aria-labelledby="every-layer-h">
        <h2 id="every-layer-h" className="post__h2">Security at every layer of a company</h2>
        <p>Good security is not the property of a security team. It is the sum of decisions made at every layer, by the people who work there, most of whom do not have security in their title. The figure below walks the stack from the network up to the organization. For each layer it lists what typically goes wrong and the controls that usually answer it, which is general practice, and where I have worked in that layer myself, which is first-hand. I have kept the two apart on purpose.</p>
        <Layers />
        <p>Two things stand out when you read it as a whole. The technical controls get most of the attention and the organizational ones decide whether the technical ones exist. A team with no named owner for security does not have a firewall problem. It has a priority problem, and the firewall configuration is where it shows up.</p>
      </section>

      <section id="learned" aria-labelledby="learned-h">
        <h2 id="learned-h" className="post__h2">What I learned</h2>
        <p>Security starts with understanding how systems work. I could not write a correct ACL until I understood which systems needed to talk, and I cannot write a correct authorization check today without understanding who the users are and what they are trying to do. Most security failures I have seen were failures of understanding before they were failures of tooling.</p>
        <p>Security and availability have to work together. A control that breaks legitimate use will be removed, quietly, by someone under pressure, and then you have neither. The rule that survives is the one that was tested with real traffic.</p>
        <p>Operational knowledge matters as much as the tool. A firewall is only as good as the people who configure it, read its logs and troubleshoot it at the wrong hour. The same is true of IAM, and of every scanner in a pipeline.</p>
        <p>Documentation and training are engineering work. The trip to train the TAC taught me that a system nobody else can support is not finished, and I have treated runbooks and hand-over as part of done ever since.</p>
        <p>Security belongs in the engineering decision, not after it. The cheapest place to find a security problem is the design review. The most expensive is the week before launch, which is where it ends up when nobody owns it earlier.</p>
        <p>The tools changed completely. The fundamentals did not. Router ACLs became security groups and IAM policies. Physical firewalls became policies as code. Zones became VPCs and tenants. Reading a rule in order, with the default deny in mind, and asking who it will accidentally block, is the same job it was on a Cisco router in a carrier network.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">I didn’t discover security when it got a name</h2>
      <div className="post__close-copy">
        <p className="lead">My security experience started with Cisco ACLs in a carrier network and a chair in a brand-new Security Operations Center, and it never stopped.</p>
        <p className="post__close-principle">Security is part of every layer I have worked in, from the router to the application, the cloud account and the roadmap conversation.</p>
        <p>Those early years are why I treat security as an engineering decision, test every rule with the traffic it is supposed to allow, and make sure the system can be supported by people who weren’t there at the beginning.</p>
        <div className="post__close-actions">
          <Link to="/expertise/#security" className="action">Security engineering, role by role <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
