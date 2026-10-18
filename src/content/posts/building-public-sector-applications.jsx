import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Public-sector application engineering, from KC's draft. Confirmed by KC: work on
// systems supporting public-sector small business certification programs. The
// tech stack is deliberately not named (KC, Oct 18 2026), nor the agency and its
// programs are NOT named (KC's instruction, Oct 2026). Role stated as
// engineering that supports compliance and authorization; KC did not obtain an
// ATO or FedRAMP authorization himself and the text says so. No contract
// details, no years. Framework table is general reference.
// Oct 18 revision (KC): programs stay unnamed. The ownership-rule change in
// "A form is rarely just a form" is a labelled hypothetical ("Suppose"). The
// integrations section describes what we designed for, not a specific incident.

export const toc = [
  ['different', 'The technology was familiar. Everything around it changed.'],
  ['programs', 'Applications that support public-sector programs'],
  ['form', 'A form is rarely just a form'],
  ['fedramp', 'FedRAMP: implementing a control and proving it works'],
  ['ato', 'Authority to Operate: what production-ready means'],
  ['section-508', 'Section 508: accessibility is an engineering responsibility'],
  ['plain-writing', 'Plain Writing: the hardest problem wasn’t technical'],
  ['architecture', 'Security controls shape the architecture'],
  ['integrations', 'External systems will surprise you'],
  ['monitoring', 'Security doesn’t end at deployment'],
  ['process', 'Documentation and change management'],
  ['leadership', 'What it taught me about leadership'],
  ['frameworks', 'The requirements, on one page'],
  ['still-learning', 'Still learning'],
];

const frameworks = [
  { f: 'FISMA', why: 'Federal information security governance and risk management' },
  { f: 'NIST Risk Management Framework (SP 800-37)', why: 'The structured process for categorizing, selecting, assessing and authorizing' },
  { f: 'NIST SP 800-53', why: 'The catalog of security and privacy controls' },
  { f: 'NIST SP 800-60 and FIPS 199 / 200', why: 'Categorizing a system and its minimum security requirements' },
  { f: 'FedRAMP', why: 'Standardized assessment and authorization of cloud services used by agencies' },
  { f: 'Authority to Operate', why: 'The formal decision that a system’s risk is understood and accepted' },
  { f: 'Section 508 and WCAG', why: 'Accessibility of government digital services' },
  { f: 'Plain Writing Act', why: 'Communication the public can understand and use' },
  { f: 'Privacy Act and privacy impact assessments', why: 'Privacy protections where personal information is handled' },
  { f: 'Records management', why: 'Retention and disposition of government records' },
  { f: 'Continuous monitoring', why: 'Ongoing assessment of security posture after authorization' },
  { f: 'Supply chain security and secure SDLC', why: 'Dependencies, third-party risk and security built into development' },
  { f: 'OMB digital experience guidance', why: 'Usability and accessibility expectations for public-facing services' },
];

// Fig. 688-1: the authorization cycle, simplified from the NIST Risk Management
// Framework. Who acts at each step, and what engineering has to supply.
const cycle = [
  { id: 'categorize', name: 'Categorize', who: 'Agency and system owner', frame: 'FIPS 199, NIST SP 800-60', eng: 'System boundary, the data it handles, architecture diagrams' },
  { id: 'select', name: 'Select controls', who: 'Agency', frame: 'NIST SP 800-53 baseline; FedRAMP for the cloud platform', eng: 'Which controls the platform inherits and which the application owns' },
  { id: 'implement', name: 'Implement', who: 'Engineering', frame: 'Security controls, Section 508, Plain Writing, privacy, records', eng: 'Server-side access control, audit logs, encryption, accessible UI, infrastructure as code, a pipeline that leaves evidence', mine: true },
  { id: 'assess', name: 'Assess', who: 'Independent assessor', frame: 'Control assessment', eng: 'System security plan, test results, scan output, plans of action for open findings' },
  { id: 'authorize', name: 'Authorize', who: 'Authorizing Official', frame: 'Authority to Operate', eng: 'Risk inputs and remediated findings. The decision is the agency’s, never engineering’s' },
  { id: 'monitor', name: 'Monitor', who: 'Operations and engineering, continuously', frame: 'Continuous monitoring, incident response, contingency plans', eng: 'Scanning, patching, dependency updates, access reviews, configuration checks, changes with impact analysis', mine: true },
];

function Cycle() {
  const [active, setActive] = useState(0);
  const select = (i, focus) => {
    const next = (i + cycle.length) % cycle.length;
    setActive(next);
    if (focus) document.getElementById(`rmf-tab-${next}`)?.focus();
  };
  const onKeyDown = (e) => {
    const moves = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: cycle.length - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    select(moves[e.key], true);
  };
  const assess = cycle.findIndex((c) => c.id === 'assess');
  return (
    <figure className="rmf post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 688-1</span> How a government system gets authorized, and stays authorized
        <span className="journey__key label">Simplified from the NIST Risk Management Framework. Select a step, or walk the cycle with Next. Steps where engineering does the work are marked.</span>
      </figcaption>
      <div className="rmf__tabs" role="tablist" aria-label="Steps of the authorization cycle" onKeyDown={onKeyDown}>
        {cycle.map((c, i) => (
          <button
            key={c.id}
            id={`rmf-tab-${i}`}
            type="button"
            role="tab"
            className="rmf__tab"
            aria-selected={i === active}
            aria-controls={`rmf-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
          >
            <span className="rmf__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="rmf__name">{c.name}</span>
            <span className={`layers__tag rmf__who${c.mine ? ' is-mine' : ''}`}>{c.who}</span>
          </button>
        ))}
      </div>
      {cycle.map((c, i) => {
        const last = i === cycle.length - 1;
        const nextIndex = last ? assess : i + 1;
        return (
          <div key={c.id} id={`rmf-panel-${i}`} className="rmf__panel" role="tabpanel" aria-labelledby={`rmf-tab-${i}`} hidden={i !== active}>
            <div>
              <p className="label">Framework</p>
              <p className="rmf__frame">{c.frame}</p>
            </div>
            <div>
              <p className="label">Engineering supplies</p>
              <p className="rmf__eng">{c.eng}</p>
            </div>
            <p className="rmf__nav">
              <button type="button" className="rmf__next" onClick={() => select(nextIndex, true)}>
                {last ? 'Loops back to Assess' : `Next: ${cycle[nextIndex].name}`} <ArrowRight />
              </button>
              {last && <span className="rmf__loop-note">Changes, new findings and reauthorization start the assessment again. Authorization is a loop, and monitoring keeps the evidence true.</span>}
            </p>
          </div>
        );
      })}
    </figure>
  );
}

function Frameworks() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 688-2</span> Government requirements an engineering team meets, and why each exists. Which apply depends on the agency, the system boundary, the data and the contract.</caption>
        <thead><tr><th scope="col">Framework or requirement</th><th scope="col">Why it matters</th></tr></thead>
        <tbody>
          {frameworks.map((r) => <tr key={r.f}><th scope="row">{r.f}</th><td>{r.why}</td></tr>)}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="different" aria-labelledby="different-h">
        <h2 id="different-h" className="post__h2">The technology was familiar. Everything around it changed.</h2>
        <p>After working in software, telecom, startups and engineering leadership, I assumed I had met most of the ways building and running software can be hard. Then I started working on public-sector applications, and it was a different experience, though not because the technology was harder. We were still building web applications, designing APIs, working with databases, deploying infrastructure and troubleshooting production, with the same kinds of frameworks, databases and cloud services I had used elsewhere.</p>
        <p>What changed was everything surrounding the software: the security requirements, accessibility, documentation, change management, operational controls, the authorization process, and even how we were allowed to word a message to a user. Building software for the public sector is not only delivering features. You also have to demonstrate that the software is secure, accessible, maintainable and operated according to the requirements that apply to it, and that changed how I approach engineering.</p>
        <p className="post__answer">Building public-sector applications teaches an engineer that quality has more dimensions than working code. Security has to be demonstrable, accessibility has to be designed in, communication has to be understandable, changes have to be traceable, operations have to be documented, and risk has to be evaluated continuously. None of those is unique to government, and government is where they stop being optional.</p>
      </section>

      <section id="programs" aria-labelledby="programs-h">
        <h2 id="programs-h" className="post__h2">Applications that support public-sector programs</h2>
        <p>My government work includes systems that support public-sector small business certification programs: applications that help businesses interact with a program, submit information and work through a certification process. I built <Link to="/projects/fedpath/">FedPath</Link>, a tool for small businesses finding federal contracts, partly because I had seen how hard those processes are from the inside.</p>
        <p>From an engineering seat the challenges are recognizable: complex business rules, several user roles, long application workflows, document management, integrations with other systems, data validation, reporting, and keeping a system current as the program rules change. What government adds is a set of responsibilities that stay invisible in a startup. A change that looks simple in the code may need security review, accessibility validation, documentation and additional testing before it can ship. At first that feels like process for its own sake. Over time I understood what each piece of it was protecting.</p>
      </section>

      <section id="form" aria-labelledby="form-h">
        <h2 id="form-h" className="post__h2">A form is rarely just a form</h2>
        <p>To the business owner filling it in, a certification application looks like a long form. Each question feeds something underneath it. An answer about who owns the business feeds eligibility rules, and ownership is rarely one number. There can be several owners, a parent company, a trust, or a manager who runs the business day to day without owning much of it. Each certification program has its own definitions of ownership and control, and a business can apply for more than one program, so the same answer may be read by different rules.</p>
        <p>The answer then decides which documents are required, what a reviewer sees, what the reports count, and what the audit trail has to record. Suppose a program clarifies how it counts ownership held through another company. On the ticket that is one field and a validation message. In the system it touches the eligibility check, the document checklist, the reviewer’s screen, the applications already in progress that were valid under the old rule, the reports that count approvals, the wording that explains the rule, and the accessibility of whatever new input appears.</p>
        <p>Finding those paths before anyone writes code is most of the work, and it is why I distrust an estimate given before someone has walked them. The code change may be small. The decision about what happens to the businesses halfway through an application is a program decision, and engineering’s job is to surface it early enough that the right person makes it.</p>
      </section>

      <section id="fedramp" aria-labelledby="fedramp-h">
        <h2 id="fedramp-h" className="post__h2">FedRAMP: implementing a control and proving it works</h2>
        <p>Security was not new to me. My career started with <Link to="/writing/network-security-before-devsecops/">router access control lists, NetScreen firewalls and a managed security service</Link>, and it continued through application and cloud security. Government cloud security formalized it to a degree I had not worked under before. FedRAMP, the Federal Risk and Authorization Management Program, is the standardized approach to assessing and authorizing cloud services that federal agencies use.</p>
        <p>The lesson that mattered most was the difference between implementing a security control and demonstrating that it operates effectively. It is one thing to say access to production is restricted. It is another to show who has access, how it was approved, how authentication is enforced, how privileged access is controlled, how access is reviewed, how every change to it is recorded, and what happens the day someone leaves. The same applies to logging, vulnerability management, encryption, incident response and configuration management. Security is a set of operational responsibilities as much as a set of technologies, and the responsibilities need evidence.</p>
        <p>One distinction is worth being precise about. A FedRAMP authorization covers a cloud service offering within a defined boundary. It does not authorize every application deployed on that infrastructure. The application still carries its own responsibilities and may face additional agency requirements, and designing a government system means knowing which controls you inherit from the platform and which you own.</p>
      </section>

      <section id="ato" aria-labelledby="ato-h">
        <h2 id="ato-h" className="post__h2">Authority to Operate: what production-ready means</h2>
        <p>In commercial software, deploying usually comes down to whether the organization believes the system is ready. In government environments the decision is formal. An Authorizing Official evaluates the system’s risk and decides whether to grant an Authority to Operate, an ATO. The engineering team does not make that decision. It contributes to it, by implementing controls, maintaining documentation, addressing findings and providing technical evidence: system security plans, control assessments, risk assessments, plans of action (POA&Ms) for open findings, configuration management, vulnerability management, continuous monitoring, incident response procedures and contingency plans.</p>
        <p>What struck me was how closely that work sits on top of ordinary engineering. A deployment pipeline is no longer only a way to ship code. It is the record of what changed, when and by whom. Logging is no longer only for troubleshooting. It supports auditability, security investigations and continuous monitoring. Infrastructure configuration is no longer only a DevOps concern. It is part of the system’s documented security posture. Production readiness means more than the application working. It means the organization can show that the risks are understood and managed, and the engineering has to produce that showing as a by-product of doing the work well.</p>
      </section>

      <section id="section-508" aria-labelledby="section-508-h">
        <h2 id="section-508-h" className="post__h2">Section 508: accessibility is an engineering responsibility</h2>
        <p>Section 508 requires covered federal information and communication technology to meet applicable accessibility standards, which for web applications means the Web Content Accessibility Guidelines at the required level. In practice it means designing for how people with disabilities use the system, which a development team focused on whether a feature looks right will miss. We need to check screen-reader and keyboard operation, field labels, error messages and contrast. A long workflow also needs to be usable without relying on visual cues. Those checks affect both the design and the implementation.</p>
        <p>A certification application makes it concrete. A business owner completes a long form, uploads documents, reviews the information and submits. If a validation error is only red text, some users never learn what went wrong. If a custom dropdown ignores the keyboard, some users cannot complete the form at all. If focus is not managed when a modal opens, a screen reader user loses their place. A feature can pass every functional test and still be inaccessible, which is why accessibility belongs in design, implementation, testing and the acceptance criteria. Automated tools catch some of it; keyboard and assistive-technology testing by a person catches the rest. I treat it as part of software quality throughout development. <Link to="/writing/modernizing-public-sector-applications/#requirements">Modernizing public-sector applications</Link> covers carrying those checks into every release of a replacement.</p>
      </section>

      <section id="plain-writing" aria-labelledby="plain-writing-h">
        <h2 id="plain-writing-h" className="post__h2">Plain Writing: the hardest problem wasn’t technical</h2>
        <p>The requirement I find most interesting is Plain Writing. Federal agencies have a responsibility to communicate clearly with the public, and the Plain Writing Act and the guidance around it ask for communication people can understand and use. For a government application that is not decoration. Imagine a small business owner applying for a certification who does not know the difference between an eligibility requirement, supporting documentation, a certification decision and a program-specific rule, and the interface explains itself in legal and administrative language. The software can work perfectly and the person still cannot finish. That is a product problem, and usually an engineering problem too, because the words come out of the code.</p>
        <p>Government applications carry complex business rules, and the user should not have to understand the implementation to complete a task. Instead of exposing internal terminology, the interface should say what to do next. “Validation failed due to missing required documentation” is accurate and useless. “Upload your ownership document before continuing” is actionable, provided the wording reflects the program’s actual requirement, which it has to. Complex rules do not require a complicated experience, and the best software I have shipped for startups and consumers followed the same principle: help people understand what to do next.</p>
      </section>

      <section id="architecture" aria-labelledby="architecture-h">
        <h2 id="architecture-h" className="post__h2">Security controls shape the architecture</h2>
        <p>Government security requirements reach into architecture, and access control is the clearest case. A typical application starts with a few roles. A government system may need permissions by program responsibility, organizational boundary and specific action: who can view an application, who can edit it, who can approve or reject it, who can open a sensitive document, who can export, and what happens when someone’s responsibilities change. Those decisions land in backend authorization, API design, database access and frontend behaviour at the same time.</p>
        <p>Authentication tells the system who is signed in. Authorization decides what that person may do with this application, this document and this field, and it is where most of the design work sits. The data is the reason it matters. A certification application can hold ownership details, financial statements, tax returns and personal information about the owners, and a business owner who uploads those is trusting that only the people who need them will see them.</p>
        <p>Hiding a button in the interface does not stop anyone from calling the API. Authorization is enforced on the server, on every request, against the specific record, the point I made in <Link to="/writing/api-architecture-lessons/#security">API architecture lessons</Link>. Every endpoint is a front door, and the frontend is only one of the clients that can knock on it. Least privilege applies to the system as much as to people: a reviewer sees the applications assigned to their program, a service account reads the storage it needs and nothing else, and access to production data is the exception, with a record of who asked and why.</p>
        <p>Audit logging asks its own questions: which actions must be recorded, what each record captures, and how the records are protected from the people they describe. A useful entry says who did what to which record, when, and what changed, and it lives where the person acting cannot edit it. Those records are also security evidence. When an assessor asks how you know only authorized people changed an application’s status, the answer should be a query someone can run. Security requirements are never isolated tasks on a backlog. They shape the system.</p>
      </section>

      <section id="integrations" aria-labelledby="integrations-h">
        <h2 id="integrations-h" className="post__h2">External systems will surprise you</h2>
        <p>Public-sector applications rarely stand alone. They exchange data with other government systems, accept sign-ins from an external identity provider, and pass results on to systems run by other teams. Each of those is a dependency with its own release schedule, its own priorities and its own idea of what a valid response looks like. The integration you tested last month is not guaranteed to behave the same way this month.</p>
        <p>So we designed for the other system behaving unexpectedly, because eventually it will:</p>
        <ul className="post__list">
          <li>Validate what comes back before trusting it: the shape, the types and the values you depend on. A response that parses is not necessarily a response you can use.</li>
          <li>Treat missing data as missing. In an eligibility workflow, “no data” and “no” lead to different outcomes. A field that silently defaults to empty or zero can turn an outage into a wrong decision about someone’s business.</li>
          <li>Make authentication failures loud. Credentials and certificates expire and get rotated. A failed sign-in to a partner system should alert someone, not look like an empty result.</li>
          <li>Time out, retry within limits, and make retries safe, so a slow dependency doesn’t tie up the application and a retry can’t submit the same thing twice.</li>
          <li>Record what the other system returned and when. Months later a reviewer may need to know why an application showed what it did, and “the other system said so” only helps if you kept what it said.</li>
          <li>Tell the user plainly when a dependency is down, what it means for them, and that their work is saved.</li>
        </ul>
        <p>Testing follows the same assumption. Contract tests against recorded responses catch changes in the shape of the data. Test environments for external systems often differ from production in data and availability, so the plan has to say what can be tested where and what will only be confirmed after release. Defensive programming here is an honest reading of the situation: the other system will change, and it won’t always tell you first.</p>
      </section>

      <section id="monitoring" aria-labelledby="monitoring-h">
        <h2 id="monitoring-h" className="post__h2">Security doesn’t end at deployment</h2>
        <p>A system that was secure the day it was authorized becomes vulnerable if nobody maintains it. Software changes, dependencies acquire vulnerabilities, configurations drift, new threats appear, and users join and leave. Continuous monitoring is how an organization notices and responds, and from an engineering seat it means vulnerability scanning, dependency management, infrastructure monitoring, security logging, access reviews, configuration assessment, patching, incident response and tracking remediation to closure.</p>
        <p>That work has to fold into normal engineering operations. Treated as a separate function, security becomes a bottleneck and a source of surprises. Considered throughout the development lifecycle, it becomes routine. That is why I value automation: automated tests, dependency checks, infrastructure validation and deployment controls make the security work consistent and leave a trace. Automation does not replace review or judgment. It removes the repetitive part and makes the evidence a by-product. On my teams, vulnerabilities are monitored and fixed as high-priority work, in government and out of it.</p>
      </section>

      <section id="process" aria-labelledby="process-h">
        <h2 id="process-h" className="post__h2">Documentation and change management</h2>
        <p>The biggest adjustment is documentation and change management. In a startup, a feature is requested, someone writes it, it is reviewed, and it ships. Government environments may add steps depending on the authorization boundary, the change classification, the contract and the agency’s procedures: a security impact analysis, formal approval, documentation updates, additional testing. When the change is small, that is frustrating. The purpose is to reduce risk and keep accountability, and once you have seen what an untraceable change costs in a system people depend on, the purpose is easier to respect.</p>
        <p>It also changes what “done” means. A working feature and a feature that can be approved and operated are different deliverables. The second one comes with tests that cover the accessibility and authorization paths, a note on its security impact, updated documentation, a way to roll it back, and monitoring that will show whether it behaves in production. Teams that plan only for the first one discover the second at the end of the sprint, and that is a large part of why government delivery has a reputation for being slow.</p>
        <p>The leadership challenge is making those processes effective without manufacturing bureaucracy. Too little process, and an untraceable change lands in a system people depend on. Too much, and engineers start batching changes to avoid the overhead, which makes each release bigger and riskier, the opposite of what the process was for. A process nobody understands or follows improves nothing. Each step should answer a specific risk. If nobody can name the risk, the step is a candidate for automation or removal, through the agency’s change process rather than around it. The target is requirements that are clear, automation for everything that can be automated, and controls that address real risks rather than ceremonial ones. I wrote about the general version of this tradeoff in <Link to="/writing/when-to-add-engineering-process/">when process helps an engineering team</Link>.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">What it taught me about leadership</h2>
        <p>Most of my career was spent where speed and flexibility were essential, and startups still need to deliver fast with little. Government work adds accountability, accessibility, security and operational control. I have learned the two are not opposites. You can build efficiently with strong engineering discipline, and it takes planning: security requirements identified early, accessibility in the acceptance criteria, documentation that evolves with the system, testing that covers the non-functional requirements as well as the functional ones, and a team that understands why each requirement exists.</p>
        <p>As an engineering leader I see my job as helping developers work within those constraints, which means explaining what problem a process solves rather than announcing another process. Engineers who understand the purpose implement the requirement well and find the ways to make the workflow lighter. The ones who were only told to comply do the minimum and resent it, and the system is worse for it. I wrote about how I try to run that conversation in <Link to="/leadership/">how I run engineering</Link>.</p>
        <p>A few habits did more than anything else to keep delivery steady in that environment:</p>
        <ul className="post__list">
          <li>Write the non-functional work into the acceptance criteria. Keyboard and screen-reader behaviour, who may see the record, what gets logged and how a message reads to a business owner belong in the story, so nobody discovers them in review.</li>
          <li>Keep changes small. A small change is easier to review, easier to assess for security impact, easier to approve and easier to roll back. That matters more when every release passes through a change process, and it is the same argument I make in <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link>.</li>
          <li>Name risks early: an integration nobody has tested against, a rule the program hasn’t settled, a control nobody owns. Surprises are cheapest in week one, and in a regulated system they get expensive quickly.</li>
          <li>Coordinate across teams. Security reviewers, accessibility testers, program staff, other contractors and the teams that run the systems we integrate with all have their own schedules. Knowing who needs to see a change, and when, is part of the plan.</li>
          <li>Bring options along with the problem. When a requirement collides with a date, leadership needs the choices, what each costs and a recommendation. “We’re blocked” gives them nothing to decide.</li>
          <li>Deliver predictably. Stakeholders trust a team that ships what it said it would and raises problems before the deadline. That trust is what buys room to push back when a request would add risk.</li>
        </ul>
      </section>

      <section id="frameworks" aria-labelledby="frameworks-h">
        <h2 id="frameworks-h" className="post__h2">The requirements, on one page</h2>
        <p>The whole thing fits on one page once you see it as a cycle with three kinds of actor: the agency, which decides; engineering, which builds and supplies the evidence; and the monitoring that runs after authorization and feeds the next assessment. The figure is simplified from the NIST Risk Management Framework, and the step where most engineers first meet it, Implement, is only one of six.</p>
        <Cycle />
        <p>Beyond FedRAMP, the ATO, Section 508 and Plain Writing, an engineering team on a government system works inside a wider set of frameworks. Which ones apply depends on the agency, the system boundary, the data and the contract, and the authoritative text is at FedRAMP, NIST, Section508.gov and PlainLanguage.gov rather than in any blog post. The table is the map I keep in my head.</p>
        <Frameworks />
      </section>

      <section id="still-learning" aria-labelledby="still-learning-h">
        <h2 id="still-learning-h" className="post__h2">Still learning</h2>
        <p>Public-sector work made me more deliberate about documenting decisions and demonstrating that controls operate as intended. My earlier operations experience helped me recognize the value of those records when a system changes hands or something fails.</p>
        <p>Those disciplines are not only for government. A startup does not need an authorization process, and it still benefits from good access control, accessible interfaces, clear documentation and reliable deployment. The skill is applying the level of rigor the system’s risks and the business actually call for. What I would take from public-sector work into other environments:</p>
        <ul className="post__list">
          <li>In a startup, enforce authorization on the server against the record, and keep an audit log, from the first version. Both are cheap early and painful to retrofit after the first enterprise customer asks.</li>
          <li>In a SaaS company, treat every integration as a dependency that will change. Validate responses, time out, retry safely and record what came back.</li>
          <li>On an enterprise platform, before estimating a “small” change, map which workflows, reports and records it touches.</li>
          <li>In a regulated environment, plan the evidence with the feature and let the pipeline produce it, so compliance is a by-product of delivery rather than a project at the end.</li>
        </ul>
        <p>Writing the code is one part of the job. The rest is making the system secure, maintainable, reliable and understandable, and suited to the people who depend on it. Government work made that harder to forget, and it is what I will carry into whatever I build next.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What I carry into other work</h2>
      <div className="post__close-copy">
        <p className="lead">Public-sector applications made me more deliberate about security evidence, accessibility and the records we keep of a change. Those requirements affect how the team builds the software from the start.</p>
        <p className="post__close-principle">Plan for the evidence from the first sprint, and make sure the team knows why each control exists.</p>
        <p>That is how I lead engineering in regulated environments, and the same discipline, at the right level of rigor, makes commercial software better too.</p>
        <div className="post__close-actions">
          <Link to="/writing/modernizing-public-sector-applications/" className="action">Modernizing public-sector applications <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
