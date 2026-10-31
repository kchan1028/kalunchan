import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Replaces the illustrative /work/public-service-modernization/ design example
// (redirected by scripts/cloudflare-redirects.mjs). Confirmed facts: building,
// modernizing and supporting public-sector applications, including federal small
// business certification systems (practice.js); no tech stack named (KC, Oct
// 18 2026); FedRAMP-aligned environments, Section 508
// and change management (profile.js, practice.js); Yippify's default of
// well-understood platforms a client team can own after hand-over (profile.js).
// The agency, its programs and the employer stay unnamed (KC, Oct 2026). The
// strangler diagram is the old page's illustrative design, labelled as such.
// No incidents, decisions, metrics or outcomes from a specific system.

export const toc = [
  ['not-a-rewrite', 'More than replacing the technology'],
  ['rules', 'The old system is the specification'],
  ['keep-working', 'Keeping it working while you change it'],
  ['incremental', 'Small changes, one journey at a time'],
  ['debt', 'Technical debt while still delivering'],
  ['requirements', 'Security, accessibility and audit from the first slice'],
  ['stakeholders', 'Delivery runs through other people’s calendars'],
  ['people', 'Who feels the change'],
  ['starting', 'What I would tell a team starting one'],
];

const strangler = {
  label: 'Illustrative design: incremental replacement behind a routing layer',
  key: 'The path that moves first',
  tiers: [
    { name: 'Users', nodes: [{ id: 'web', label: 'Web app', sub: 'accessible' }] },
    { name: 'Routing', nodes: [{ id: 'gw', label: 'Routing layer', sub: 'routes by journey' }] },
    { name: 'Services', nodes: [{ id: 'new', label: 'New services', sub: 'one journey at a time' }, { id: 'old', label: 'Legacy system', sub: 'shrinking' }] },
    { name: 'Data', nodes: [{ id: 'pg', label: 'New database', sub: 'managed' }, { id: 'ldb', label: 'Legacy data' }] },
  ],
  edges: [['web', 'gw', null, true], ['gw', 'new', null, true], ['gw', 'old'], ['new', 'pg', null, true], ['old', 'ldb'], ['new', 'ldb', 'sync']],
};

export default function Body() {
  return (
    <>
      <section id="not-a-rewrite" aria-labelledby="not-a-rewrite-h">
        <h2 id="not-a-rewrite-h" className="post__h2">Modernizing is more than replacing the technology</h2>
        <p>When someone first describes a modernization project, it usually sounds like a technology problem. The framework is old, the interface is hard to use on a phone, deployments are painful, and the plan is to rebuild it on something current. Working on public-sector applications, including systems behind public-sector small business certification programs, taught me that the technology is the easiest part to replace. The hard part is everything the old system does that nobody wrote down.</p>
        <p className="post__answer">Modernizing a public-sector application means replacing or improving its technology while preserving the business rules, data, integrations, security controls and accessibility that people and the agency depend on, without interrupting the service. Most of the work is understanding what the existing system really does, changing it in steps small enough to verify and approve, and leaving the agency with something its own team can operate.</p>
        <p>I wrote about <Link to="/writing/building-public-sector-applications/">what building public-sector applications taught me</Link> in general.</p>
      </section>

      <section id="rules" aria-labelledby="rules-h">
        <h2 id="rules-h" className="post__h2">The old system is the specification</h2>
        <p>A system that has run a government program for a while has absorbed a long series of decisions. A validation rule was added after a policy clarification. A status exists because reviewers needed a way to park an application while they asked for documents. A report counts something a particular way because someone outside the team depends on that number. Some of those decisions are in the requirements. Many live only in the code, in the data and in the habits of the staff who use the system every day.</p>
        <p>So before replacing anything, I want to know what the current system actually does. That means reading the code behind each workflow, querying the data to see which states and edge cases really occur, and talking to the people who use it, because they will tell you about the workaround the code doesn’t explain. Eligibility workflows are where this matters most. An answer about ownership can feed several rules, the rules differ by program, and an application can be in progress across a rule change. I walked through how one field ripples through a certification system in <Link to="/writing/building-public-sector-applications/#form">a form is rarely just a form</Link>.</p>
        <p>The output I want from that work is a written list: behaviours the new system must preserve, behaviours it should deliberately change, and questions only the program office can answer. The third list is the one that stops a modernization from quietly changing policy. Engineers should not be deciding eligibility rules by accident while porting a function.</p>
      </section>

      <section id="keep-working" aria-labelledby="keep-working-h">
        <h2 id="keep-working-h" className="post__h2">Keeping it working while you change it</h2>
        <p>A public service can’t close for renovation. Businesses are partway through applications, reviewers have queues, and connected systems expect data in the shape they have always received it. Modernization has to happen while all of that keeps running, which rules out the plan many teams find most appealing: build the replacement in parallel and switch over in one weekend.</p>
        <p>A big-bang cutover concentrates the risk on a single date. Every rule you missed, every data mapping that was slightly wrong and every integration that behaves differently shows up at once, in front of the users. It also holds back every benefit until the end, and in a government program the end can be a long way off.</p>
        <p>I would rather run the old and new systems side by side, with the new one taking over a piece at a time. That costs more in the middle, because two systems have to agree on data and something has to route traffic between them. In exchange, each step is small enough to test, approve and roll back.</p>
      </section>

      <section id="incremental" aria-labelledby="incremental-h">
        <h2 id="incremental-h" className="post__h2">Small changes, one journey at a time</h2>
        <p>The pattern I reach for is often called the strangler fig. You put a routing layer in front of the existing system, then move one user journey at a time behind it to new code. The legacy system shrinks with each release instead of being replaced all at once. The figure is an illustrative design, not a diagram of a system I worked on, but it shows the shape.</p>
        <div className="post__diagram">
          <Diagram spec={strangler} id="modernization-strangler" no="712-1" />
        </div>
        <p>Choosing the order is a business decision as much as a technical one. I like to start with a journey that is valuable, reasonably self-contained and low enough in risk that the team can learn the deployment, review and rollback path on it. The journey with the most tangled rules usually comes later, once the team understands the data well enough to move it safely.</p>
        <p>The difficult parts don’t disappear. Data has to stay consistent between old and new, often through a sync someone has to monitor. Routing has to be tested as carefully as the code behind it. Every slice needs a way back. Small changes reduce deployment risk because they make each of those questions small enough to answer, and because an approver can understand what is changing. I made the general case in <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link>, and it carries more weight when every release passes through a change process.</p>
      </section>

      <section id="debt" aria-labelledby="debt-h">
        <h2 id="debt-h" className="post__h2">Technical debt while still delivering</h2>
        <p>A modernization rarely gets the team to itself. The program still needs changes: a new requirement, a policy update, a fix for something reviewers have been working around. The team has to deliver those while replacing the system underneath, and the temptation is to build each new feature in the old code because that is where the workflow lives today.</p>
        <p>My default is to put new work where it will live, unless that would delay something the program needs by a fixed date. When a feature does have to go into the legacy system, I want it recorded as debt with a plan to move it, so it isn’t a surprise for whoever builds the next slice. Debt is a financing decision. In a modernization it is easy to borrow without noticing, because every shortcut sits in the part of the system you plan to throw away, until the plan slips.</p>
        <p>Program leadership needs that tradeoff in plain terms: what we are deferring, what it will cost later, and what would trigger paying it down. Engineers usually see the debt clearly. The people funding the work often can’t, unless someone translates it.</p>
      </section>

      <section id="requirements" aria-labelledby="requirements-h">
        <h2 id="requirements-h" className="post__h2">Security, accessibility and audit from the first slice</h2>
        <p>A modernization is a chance to fix accessibility and security problems in the old system, and a risk of introducing new ones. A replacement screen has to meet Section 508 from the first slice, because users of assistive technology may have learned to work around the old one and now have to learn the new one. Audit logging has to continue without a gap, so an investigator can follow a record across the moment it moved from the old system to the new one.</p>
        <p>Authorization needs extra care. Legacy systems sometimes enforce access in the interface, in a stored procedure or in a report filter, and a rewrite that moves the screen without moving the rule creates an exposure nobody intended. I would rather list the access rules as part of the behaviour inventory and test them explicitly in every slice. The server-side authorization and audit evidence I expect are in <Link to="/writing/building-public-sector-applications/#architecture">the security section of the public-sector applications post</Link>.</p>
        <p>The infrastructure changes too. If the new services run in a FedRAMP-aligned cloud environment, the team needs to know which controls the platform provides and which the application still owns, and the security documentation has to keep up with a system that is changing every few weeks. Infrastructure as code helps here, because the configuration that gets reviewed is the configuration that runs.</p>
      </section>

      <section id="stakeholders" aria-labelledby="stakeholders-h">
        <h2 id="stakeholders-h" className="post__h2">Delivery runs through other people’s calendars</h2>
        <p>On public-sector work, shipping a slice involves more people than the engineering team. Program staff confirm the rules. Security reviewers assess the change. Accessibility testers check the screens. Teams that run connected systems need notice before anything they consume changes, and change approval has its own schedule. All of that affects when a release can actually happen.</p>
        <p>The engineering leader’s job is to make it predictable. That means planning releases around review lead times instead of discovering them at the end, and giving approvers small, clearly described changes they can assess quickly. It also means raising risks while there is still time to act on them. When a requirement and a date collide, the program office needs options with costs attached and a recommendation. A team that delivers what it said it would, slice after slice, earns the room to push back when a request would add risk.</p>
      </section>

      <section id="people" aria-labelledby="people-h">
        <h2 id="people-h" className="post__h2">Who feels the change</h2>
        <p>It is easy to talk about modernization in terms of frameworks and hosting. The people who notice it are a small business owner partway through an application, a reviewer with a queue to clear, and the agency staff who answer questions when something is confusing. A change that makes the code cleaner but moves a reviewer’s most-used action, or renames a status a business owner has been watching for weeks, has a cost the backlog doesn’t show.</p>
        <p>So I want those users in the plan. They should help confirm behaviour, hear about a change to their workflow before it ships, and be watched for closely after each release. I judge a modernization by whether the people using the service can do what they came to do more easily than before, without the service ever going away.</p>
      </section>

      <section id="starting" aria-labelledby="starting-h">
        <h2 id="starting-h" className="post__h2">What I would tell a team starting one</h2>
        <p>Inventory the behaviour before you replace it, and give the program office the list of questions only they can answer. Replace one journey at a time, in an order chosen for value and risk, with a way back for each slice. Carry security, accessibility and audit into the first slice instead of a later phase. Plan around approval lead times, and record the debt you take on while delivering.</p>
        <p>Then design for the team that will run the system after you. I default to conventional, well-documented technology an agency team can hire for and maintain, with infrastructure defined as code and a pipeline that runs accessibility and security checks on every change. In government, the team that inherits the system decides whether the modernization lasts, and a clever architecture they can’t operate becomes the next legacy system.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Replace it one piece at a time</h2>
      <div className="post__close-copy">
        <p className="lead">Modernizing a public-sector application is mostly understanding what the old system does and changing it in steps small enough for everyone involved to check.</p>
        <div className="post__close-actions">
          <Link to="/writing/building-public-sector-applications/" className="action">What building public-sector applications taught me <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
