import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Federal application engineering, from KC's draft. Confirmed by KC: work on
// systems supporting federal small business certification programs on
// Python/Django, React, Vue, Rails, PostgreSQL and AWS. The agency and its
// programs are NOT named (KC's instruction, Oct 2026). Role stated as
// engineering that supports compliance and authorization; KC did not obtain an
// ATO or FedRAMP authorization himself and the text says so. No contract
// details, no years. Framework table is general reference.

export const toc = [
  ['different', 'The technology was familiar. Everything around it changed.'],
  ['programs', 'Applications that support federal programs'],
  ['fedramp', 'FedRAMP: implementing a control and proving it works'],
  ['ato', 'Authority to Operate: what production-ready means'],
  ['section-508', 'Section 508: accessibility is an engineering responsibility'],
  ['plain-writing', 'Plain Writing: the hardest problem wasn’t technical'],
  ['architecture', 'Security controls shape the architecture'],
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
  { f: 'Section 508 and WCAG', why: 'Accessibility of federal digital services' },
  { f: 'Plain Writing Act', why: 'Communication the public can understand and use' },
  { f: 'Privacy Act and privacy impact assessments', why: 'Privacy protections where personal information is handled' },
  { f: 'Records management', why: 'Retention and disposition of federal records' },
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
        <span className="mono">Fig. 688-1</span> How a federal system gets authorized, and stays authorized
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
        <caption><span className="mono">Fig. 688-2</span> Federal requirements an engineering team meets, and why each exists. Which apply depends on the agency, the system boundary, the data and the contract.</caption>
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
        <p>After working in software, telecom, startups and engineering leadership, I assumed I had met most of the ways building and running software can be hard. Then I started working on federal government applications, and it was a different experience, though not because the technology was harder. We were still building web applications, designing APIs, working with databases, deploying infrastructure and troubleshooting production, on Python and Django, React, Vue, Ruby on Rails, PostgreSQL, AWS and the usual tools.</p>
        <p>What changed was everything surrounding the software: the security requirements, accessibility, documentation, change management, operational controls, the authorization process, and even how we were allowed to word a message to a user. Building software for the federal government is not only delivering features. You also have to demonstrate that the software is secure, accessible, maintainable and operated according to the requirements that apply to it, and that changed how I approach engineering.</p>
        <p className="post__answer">Building federal government applications teaches an engineer that quality has more dimensions than working code. Security has to be demonstrable, accessibility has to be designed in, communication has to be understandable, changes have to be traceable, operations have to be documented, and risk has to be evaluated continuously. None of those is unique to government, and government is where they stop being optional.</p>
      </section>

      <section id="programs" aria-labelledby="programs-h">
        <h2 id="programs-h" className="post__h2">Applications that support federal programs</h2>
        <p>My government work includes systems that support federal small business certification programs: applications that help businesses interact with a program, submit information and work through a certification process. I built <Link to="/projects/fedpath/">FedPath</Link>, a tool for small businesses finding federal contracts, partly because I had seen how hard those processes are from the inside.</p>
        <p>From an engineering seat the challenges are recognizable: complex business rules, several user roles, long application workflows, document management, integrations with other systems, data validation, reporting, and keeping a system current as the program rules change. What government adds is a set of responsibilities that stay invisible in a startup. A change that looks simple in the code may need security review, accessibility validation, documentation and additional testing before it can ship. At first that feels like process for its own sake. Over time I understood what each piece of it was protecting.</p>
      </section>

      <section id="fedramp" aria-labelledby="fedramp-h">
        <h2 id="fedramp-h" className="post__h2">FedRAMP: implementing a control and proving it works</h2>
        <p>Security was not new to me. My career started with <Link to="/writing/network-security-before-devsecops/">router access control lists, NetScreen firewalls and a managed security service</Link>, and it continued through application and cloud security. Federal cloud security formalized it to a degree I had not worked under before. FedRAMP, the Federal Risk and Authorization Management Program, is the standardized approach to assessing and authorizing cloud services that federal agencies use.</p>
        <p>The lesson that mattered most was the difference between implementing a security control and demonstrating that it operates effectively. It is one thing to say access to production is restricted. It is another to show who has access, how it was approved, how authentication is enforced, how privileged access is controlled, how access is reviewed, how every change to it is recorded, and what happens the day someone leaves. The same applies to logging, vulnerability management, encryption, incident response and configuration management. Security is a set of operational responsibilities as much as a set of technologies, and the responsibilities need evidence.</p>
        <p>One distinction is worth being precise about. A FedRAMP authorization covers a cloud service offering within a defined boundary. It does not authorize every application deployed on that infrastructure. The application still carries its own responsibilities and may face additional agency requirements, and designing a government system means knowing which controls you inherit from the platform and which you own.</p>
      </section>

      <section id="ato" aria-labelledby="ato-h">
        <h2 id="ato-h" className="post__h2">Authority to Operate: what production-ready means</h2>
        <p>In commercial software, deploying usually comes down to whether the organization believes the system is ready. In federal environments the decision is formal. An Authorizing Official evaluates the system’s risk and decides whether to grant an Authority to Operate, an ATO. The engineering team does not make that decision. It contributes to it, by implementing controls, maintaining documentation, addressing findings and providing technical evidence: system security plans, control assessments, risk assessments, plans of action (POA&Ms) for open findings, configuration management, vulnerability management, continuous monitoring, incident response procedures and contingency plans.</p>
        <p>What struck me was how closely that work sits on top of ordinary engineering. A deployment pipeline is no longer only a way to ship code. It is the record of what changed, when and by whom. Logging is no longer only for troubleshooting. It supports auditability, security investigations and continuous monitoring. Infrastructure configuration is no longer only a DevOps concern. It is part of the system’s documented security posture. Production readiness means more than the application working. It means the organization can show that the risks are understood and managed, and the engineering has to produce that showing as a by-product of doing the work well.</p>
      </section>

      <section id="section-508" aria-labelledby="section-508-h">
        <h2 id="section-508-h" className="post__h2">Section 508: accessibility is an engineering responsibility</h2>
        <p>Section 508 requires covered federal information and communication technology to meet applicable accessibility standards, which for web applications means the Web Content Accessibility Guidelines at the required level. In practice it means designing for how people with disabilities use the system, which a development team focused on whether a feature looks right will miss. We need to check screen-reader and keyboard operation, field labels, error messages and contrast. A long workflow also needs to be usable without relying on visual cues. Those checks affect both the design and the implementation.</p>
        <p>A certification application makes it concrete. A business owner completes a long form, uploads documents, reviews the information and submits. If a validation error is only red text, some users never learn what went wrong. If a custom dropdown ignores the keyboard, some users cannot complete the form at all. If focus is not managed when a modal opens, a screen reader user loses their place. A feature can pass every functional test and still be inaccessible, which is why accessibility belongs in design, implementation, testing and the acceptance criteria. Automated tools catch some of it; keyboard and assistive-technology testing by a person catches the rest. I treat it as part of software quality throughout development. The <Link to="/work/public-service-modernization/">public-service modernization example</Link> includes those checks in the proposed release process.</p>
      </section>

      <section id="plain-writing" aria-labelledby="plain-writing-h">
        <h2 id="plain-writing-h" className="post__h2">Plain Writing: the hardest problem wasn’t technical</h2>
        <p>The requirement I find most interesting is Plain Writing. Federal agencies have a responsibility to communicate clearly with the public, and the Plain Writing Act and the guidance around it ask for communication people can understand and use. For a government application that is not decoration. Imagine a small business owner applying for a certification who does not know the difference between an eligibility requirement, supporting documentation, a certification decision and a program-specific rule, and the interface explains itself in legal and administrative language. The software can work perfectly and the person still cannot finish. That is a product problem, and usually an engineering problem too, because the words come out of the code.</p>
        <p>Government applications carry complex business rules, and the user should not have to understand the implementation to complete a task. Instead of exposing internal terminology, the interface should say what to do next. “Validation failed due to missing required documentation” is accurate and useless. “Upload your ownership document before continuing” is actionable, provided the wording reflects the program’s actual requirement, which it has to. Complex rules do not require a complicated experience, and the best software I have shipped for startups and consumers followed the same principle: help people understand what to do next.</p>
      </section>

      <section id="architecture" aria-labelledby="architecture-h">
        <h2 id="architecture-h" className="post__h2">Security controls shape the architecture</h2>
        <p>Government security requirements reach into architecture, and access control is the clearest case. A typical application starts with a few roles. A government system may need permissions by program responsibility, organizational boundary and specific action: who can view an application, who can edit it, who can approve or reject it, who can open a sensitive document, who can export, and what happens when someone’s responsibilities change. Those decisions land in backend authorization, API design, database access and frontend behaviour at the same time.</p>
        <p>Hiding a button in React does not stop anyone from calling the API. Authorization is enforced on the server, on every request, against the specific record, the point I made in <Link to="/writing/api-architecture-lessons/#security">API architecture lessons</Link>. Audit logging asks its own questions: which actions must be recorded, what each record captures, and how the records are protected from the people they describe. Security requirements are never isolated tasks on a backlog. They shape the system.</p>
      </section>

      <section id="monitoring" aria-labelledby="monitoring-h">
        <h2 id="monitoring-h" className="post__h2">Security doesn’t end at deployment</h2>
        <p>A system that was secure the day it was authorized becomes vulnerable if nobody maintains it. Software changes, dependencies acquire vulnerabilities, configurations drift, new threats appear, and users join and leave. Continuous monitoring is how an organization notices and responds, and from an engineering seat it means vulnerability scanning, dependency management, infrastructure monitoring, security logging, access reviews, configuration assessment, patching, incident response and tracking remediation to closure.</p>
        <p>That work has to fold into normal engineering operations. Treated as a separate function, security becomes a bottleneck and a source of surprises. Considered throughout the development lifecycle, it becomes routine. That is why I value automation: automated tests, dependency checks, infrastructure validation and deployment controls make the security work consistent and leave a trace. Automation does not replace review or judgment. It removes the repetitive part and makes the evidence a by-product. On my teams, vulnerabilities are monitored and fixed as high-priority work, in government and out of it.</p>
      </section>

      <section id="process" aria-labelledby="process-h">
        <h2 id="process-h" className="post__h2">Documentation and change management</h2>
        <p>The biggest adjustment is documentation and change management. In a startup, a feature is requested, someone writes it, it is reviewed, and it ships. Government environments may add steps depending on the authorization boundary, the change classification, the contract and the agency’s procedures: a security impact analysis, formal approval, documentation updates, additional testing. When the change is small, that is frustrating. The purpose is to reduce risk and keep accountability, and once you have seen what an untraceable change costs in a system people depend on, the purpose is easier to respect.</p>
        <p>The leadership challenge is making those processes effective without manufacturing bureaucracy. A process nobody understands or follows improves nothing. A process that creates heavy manual work slows delivery without buying proportional safety. The target is requirements that are clear, automation for everything that can be automated, and controls that address real risks rather than ceremonial ones.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">What it taught me about leadership</h2>
        <p>Most of my career was spent where speed and flexibility were essential, and startups still need to deliver fast with little. Government work adds accountability, accessibility, security and operational control. I have learned the two are not opposites. You can build efficiently with strong engineering discipline, and it takes planning: security requirements identified early, accessibility in the acceptance criteria, documentation that evolves with the system, testing that covers the non-functional requirements as well as the functional ones, and a team that understands why each requirement exists.</p>
        <p>As an engineering leader I see my job as helping developers work within those constraints, which means explaining what problem a process solves rather than announcing another process. Engineers who understand the purpose implement the requirement well and find the ways to make the workflow lighter. The ones who were only told to comply do the minimum and resent it, and the system is worse for it. I wrote about how I try to run that conversation in <Link to="/leadership/">how I run engineering</Link>.</p>
      </section>

      <section id="frameworks" aria-labelledby="frameworks-h">
        <h2 id="frameworks-h" className="post__h2">The requirements, on one page</h2>
        <p>The whole thing fits on one page once you see it as a cycle with three kinds of actor: the agency, which decides; engineering, which builds and supplies the evidence; and the monitoring that runs after authorization and feeds the next assessment. The figure is simplified from the NIST Risk Management Framework, and the step where most engineers first meet it, Implement, is only one of six.</p>
        <Cycle />
        <p>Beyond FedRAMP, the ATO, Section 508 and Plain Writing, an engineering team on a federal system works inside a wider set of frameworks. Which ones apply depends on the agency, the system boundary, the data and the contract, and the authoritative text is at FedRAMP, NIST, Section508.gov and PlainLanguage.gov rather than in any blog post. The table is the map I keep in my head.</p>
        <Frameworks />
      </section>

      <section id="still-learning" aria-labelledby="still-learning-h">
        <h2 id="still-learning-h" className="post__h2">Still learning</h2>
        <p>Federal work made me more deliberate about documenting decisions and demonstrating that controls operate as intended. My earlier operations experience helped me recognize the value of those records when a system changes hands or something fails.</p>
        <p>Those disciplines are not only for government. A startup does not need an authorization process, and it still benefits from good access control, accessible interfaces, clear documentation and reliable deployment. The skill is applying the level of rigor the system’s risks and the business actually call for. The biggest lesson for me is that building software means more than making something work. It means making something people can trust, understand, use and maintain, and that is what I will carry into whatever I build next.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What I carry into other work</h2>
      <div className="post__close-copy">
        <p className="lead">Federal applications made me more deliberate about security evidence, accessibility and the records we keep of a change. Those requirements affect how the team builds the software from the start.</p>
        <p className="post__close-principle">Plan for the evidence from the first sprint, and make sure the team knows why each control exists.</p>
        <p>That is how I lead engineering in regulated environments, and the same discipline, at the right level of rigor, makes commercial software better too.</p>
        <div className="post__close-actions">
          <Link to="/work/public-service-modernization/" className="action">Design example: public-service modernization <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
