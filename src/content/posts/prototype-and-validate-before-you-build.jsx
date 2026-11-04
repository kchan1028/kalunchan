import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// A workflow that puts UX prototyping and user validation ahead of production code, then verifies the working
// software in UAT. Source: KC's brief (4 Nov 2026), an eight-stage process with activities, people, entry and exit
// criteria and checklists for each stage. First-person opinions match practice.js (#hands-on "Prototyping the riskiest
// part first"; #risk "Surprises are cheapest in week one", walking skeletons, real data before demos). No project,
// client, result or user-testing finding is claimed. The NN/g five-user guidance was checked 4 November 2026.

const nngroup = 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/';

export const toc = [
  ['why', 'Why validate before you build'],
  ['overview', 'The workflow at a glance'],
  ['two-tests', 'Prototype validation vs UAT'],
  ['stages', 'The eight stages'],
  ['spikes', 'When to build something early'],
  ['proportion', 'Keep it proportional'],
];

// Fig. 728-1: the eight stages in two phases, with the one gate between them. Notes mark the loops and the side path.
const phases = [
  {
    id: 'design',
    title: 'Before production code: validate the design',
    stages: [
      { no: 1, name: 'Define requirements', q: 'Who is it for, what must it do, and how will we know it worked?' },
      { no: 2, name: 'Map user flows', q: 'What path does each user take, including when something goes wrong?', note: 'Side path: if feasibility could change the design, test that part now in a time-boxed spike.', kind: 'spike' },
      { no: 3, name: 'Build a prototype', q: 'What will people see at each step, with real content in it?' },
      { no: 4, name: 'Validate with users and stakeholders', q: 'Can real users finish the tasks, and does the business agree?', note: 'Loop: stages 4 and 5 repeat until no critical issue is left. Retest only the flows that changed.', kind: 'loop' },
      { no: 5, name: 'Revise and agree on scope', q: 'What are we building, and what are we still unsure about?' },
    ],
  },
  {
    id: 'software',
    title: 'On working software: verify the system',
    stages: [
      { no: 6, name: 'Develop', q: 'Does each increment match the validated design and its acceptance criteria?' },
      { no: 7, name: 'Run UAT', q: 'Does the working system meet the business requirements with real integrations and data?', note: 'Defects go back to stage 6. A workflow problem found here is the expensive kind the first phase exists to catch.', kind: 'loop' },
      { no: 8, name: 'Release and measure', q: 'Do people use it the way testing suggested?', note: 'What you learn becomes requirements for the next round.', kind: 'loop' },
    ],
  },
];

function StageFlow() {
  return (
    <figure className="post__figure stageflow" aria-labelledby="stageflow-cap">
      <p id="stageflow-cap" className="stageflow__cap"><span className="mono">Fig. 728-1</span> Eight stages, two kinds of evidence. Production code starts only after scope is agreed on a tested design</p>
      {phases.map((p, i) => (
        <div key={p.id} className="stageflow__phase">
          {i > 0 && <p className="stageflow__gate"><span className="mono">Gate</span> Scope agreed. Production code starts here.</p>}
          <p className="stageflow__title">{p.title}</p>
          <ol className="stageflow__list" start={p.stages[0].no}>
            {p.stages.map((s) => (
              <li key={s.no} className="stageflow__stage">
                <span className="stageflow__no mono" aria-hidden="true">{String(s.no).padStart(2, '0')}</span>
                <span className="stageflow__name">{s.name}</span>
                <span className="stageflow__q">{s.q}</span>
                {s.note && <span className={`stageflow__note is-${s.kind}`}>{s.note}</span>}
              </li>
            ))}
          </ol>
        </div>
      ))}
      <figcaption className="post__figcaption">Only two stages need a formal sign-off: agreeing scope at stage 5 and accepting the software at stage 7.</figcaption>
    </figure>
  );
}

// One reference block per stage. "Starts when" is the entry criterion; the checklist doubles as the exit criteria.
function Stage({ no, title, children, activities, deliverables, people, approves, starts, checklist }) {
  return (
    <div className="stage" id={`stage-${no}`}>
      <h3 className="post__h3">{no}. {title}</h3>
      {children}
      <dl className="post__terms stage__terms">
        <div><dt>Activities</dt><dd>{activities}</dd></div>
        <div><dt>Deliverables</dt><dd>{deliverables}</dd></div>
        <div><dt>Who takes part</dt><dd>{people}</dd></div>
        <div><dt>Who approves</dt><dd>{approves}</dd></div>
        <div className="stage__wide"><dt>Starts when</dt><dd>{starts}</dd></div>
      </dl>
      <p className="stage__check-h">Done when</p>
      <ul className="post__list stage__check">
        {checklist.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </div>
  );
}

export default function Body() {
  return (
    <>
      <section id="why" aria-labelledby="why-h">
        <p>A lot of rework comes from building the right code for the wrong workflow. The feature passes review and ships, and then a real user gets stuck on step two. Fixing it takes new code, new tests and another deployment, for a problem a clickable mock-up could have shown in an afternoon.</p>
        <h2 id="why-h" className="post__h2">Why prototype before production development?</h2>
        <p className="post__answer">Prototyping and testing a design with real users before writing production code finds workflow, wording and missing-step problems while they are still cheap to change. A screen in a prototype can be redrawn in minutes. The same mistake in shipped software costs code, tests, review, a deployment and sometimes a data migration.</p>
        <p>The workflow below puts the cheap questions first. Whether people understand the design, whether they can finish the task and whether the business agrees it’s what it needs all get answered on a prototype. Questions that need real software, like whether the integrations hold up and whether permissions are enforced, get answered in development and user acceptance testing (UAT). Surprises are cheapest at the start, which is also why I <Link to="/leadership/#risk">pull delivery risk to the front</Link> once the build begins.</p>
      </section>

      <section id="overview" aria-labelledby="overview-h">
        <h2 id="overview-h" className="post__h2">The workflow at a glance</h2>
        <p>There are eight stages in two phases. The first five work on requirements, flows and a prototype. The last three work on software. Between them is the gate that matters most: an agreed scope, based on a design real users have tried.</p>
        <StageFlow />
        <p>The stages describe what has to be true before moving on. They don’t need to be eight meetings or eight documents. On a small team, stages 2 and 3 might be one working session, and stage 5 might be a short written decision in the ticket.</p>
      </section>

      <section id="two-tests" aria-labelledby="two-tests-h">
        <h2 id="two-tests-h" className="post__h2">What is the difference between prototype validation and UAT?</h2>
        <p className="post__answer">Prototype validation tests whether people understand a design and can complete their tasks, before production code exists. User acceptance testing (UAT) tests whether the working software meets the business requirements end to end, with real integrations, permissions and data, usually in a staging environment. A prototype can’t replace UAT, and UAT is a costly place to discover the workflow was wrong.</p>
        <figure className="post__figure">
          <div className="twotests__scroll" tabIndex={0} role="region" aria-labelledby="twotests-cap">
            <table className="post__table twotests">
              <caption id="twotests-cap"><span className="mono">Fig. 728-2</span> Two tests that answer different questions</caption>
              <thead>
                <tr><td></td><th scope="col">Prototype validation</th><th scope="col">UAT</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Question</th><td>Is this the right design for the task?</td><td>Does the built system do what the business agreed?</td></tr>
                <tr><th scope="row">Tested on</th><td>Wireframes or a clickable prototype with realistic content</td><td>Working software in staging, with production-like configuration and data</td></tr>
                <tr><th scope="row">Who tests</th><td>Representative users doing realistic tasks; stakeholders reviewing the flows</td><td>Business owners and the people who will use or support the system</td></tr>
                <tr><th scope="row">Can verify</th><td>Navigation, wording, missing steps, task order, which states are needed, whether business rules were understood</td><td>Business rules as built, integrations, permissions, data handling, notifications, end-to-end behavior</td></tr>
                <tr><th scope="row">Can’t verify</th><td>Performance, integrations, real data, security, whether permissions are enforced</td><td>Whether a different workflow would have been better, at least not cheaply</td></tr>
                <tr><th scope="row">A failure means</th><td>Redrawing a screen or a flow</td><td>Changing code and tests, then deploying again</td></tr>
              </tbody>
            </table>
          </div>
        </figure>
        <p>Some risks only show up in working software, however well the prototype tested:</p>
        <ul className="post__list">
          <li>Performance with real data volumes and real network conditions.</li>
          <li>Third-party integrations, including how they fail, time out and retry.</li>
          <li>Permissions enforced on the server. A prototype can show a button hidden from a role; only the built system shows whether the API refuses the request anyway.</li>
          <li>Data migration and data quality. Old records rarely match the clean examples in a prototype.</li>
          <li>Two people changing the same record at once.</li>
          <li>Email, SMS and push delivery.</li>
          <li>Device and browser differences, and screen-reader behavior. A prototype can check structure, labels and contrast, but assistive technology needs the real markup.</li>
        </ul>
        <p>That list is why the workflow keeps UAT. Validating the design early shrinks what UAT has to find, so UAT can focus on the system.</p>
      </section>

      <section id="stages" aria-labelledby="stages-h">
        <h2 id="stages-h" className="post__h2">The eight stages</h2>
        <p>Each stage lists its activities, deliverables, who takes part and who approves. “Starts when” gives the entry criteria. The “Done when” checklist doubles as the exit criteria, so one stage’s checklist is roughly the next stage’s entry check.</p>

        <Stage
          no={1}
          title="Define requirements"
          activities="Identify the target users and the main tasks they need to finish. Write down business rules, constraints (budget, deadline, regulation, existing systems) and how success will be measured."
          deliverables="A one- or two-page requirements brief with success criteria, a list of assumptions, and the open questions with an owner for each."
          people="Product owner, a designer, a tech lead, and someone who knows the users well, such as support or operations."
          approves="The product owner, or whoever owns the budget and the outcome."
          starts="Someone can describe the problem and who has it. A solution isn’t required yet."
          checklist={[
            'Each user group is named, along with the main task it needs to finish.',
            'Success criteria are measurable, such as task completion in testing, time to finish, fewer support requests, or adoption after launch.',
            'Business rules and constraints are written down where everyone can find them.',
            'Assumptions are labeled as assumptions, and each open question has an owner.',
          ]}
        >
          <p>Flagging assumptions is the step teams skip. “Users already have an account” and “managers approve every request” sound like facts until a user test proves otherwise. Writing them down turns them into things stage 4 can check.</p>
        </Stage>

        <Stage
          no={2}
          title="Map user flows"
          activities="Sketch the main journey for each user group, then the alternative paths, the permission differences between roles, and what happens when something fails."
          deliverables="Flow diagrams, or a numbered list of steps, covering the main path, alternatives, permissions and error scenarios. New questions go on the open list."
          people="Designer and product owner, with a tech lead for feasibility and someone close to the users."
          approves="No formal approval. The product owner and tech lead review the flows before prototyping starts."
          starts="The requirements brief exists and the main tasks are agreed."
          checklist={[
            'Every main task has a path from start to finish.',
            'Alternative paths and early exits are covered, such as saving a draft, cancelling or coming back later.',
            'Each role’s differences are marked: what it can see, change and approve.',
            'Error scenarios are listed: bad input, missing data, a service that’s down, an expired session.',
            'Any step whose feasibility is uncertain is flagged for a spike.',
          ]}
        >
          <p>Error paths are where most of the missing requirements live. Asking “what does the user see if this fails?” at each step usually turns up a business rule nobody has decided yet.</p>
        </Stage>

        <Stage
          no={3}
          title="Build a prototype"
          activities="Start with low-fidelity wireframes to settle layout and order. Then build a clickable prototype of the main flows with realistic content: real labels, realistic names and numbers, and text at its real length."
          deliverables="A clickable prototype of the flows that will be tested, including loading, empty, error and success states wherever the flow needs them."
          people="Designer, with the product owner reviewing content and an engineer checking that nothing in it is unbuildable."
          approves="No formal approval. The designer decides when it’s ready to test."
          starts="The flows are reviewed, and any spike that could change the design has answered its question."
          checklist={[
            'Every flow in the test plan can be clicked from start to finish.',
            'Content is realistic, and long names, long lists and empty fields are represented.',
            'Loading, empty, error and success states exist wherever the flow needs them.',
            'The prototype promises nothing the business hasn’t agreed to, such as a price or a policy.',
          ]}
        >
          <p>Placeholder text hides problems. A label that fits as “Lorem ipsum” may wrap to three lines with a long product name or a translation, and a table that looks clean with three sample rows can fall apart with three hundred.</p>
        </Stage>

        <Stage
          no={4}
          title="Validate with users and stakeholders"
          activities="Ask representative users to complete realistic tasks on the prototype without help. Record whether each task was completed, where people hesitated or got confused, the errors they made and what they said. Separately, walk stakeholders through the flows and ask them to confirm the flows meet business needs."
          deliverables="Short test notes for each task covering completion, confusion, errors and feedback. A ranked issue list with critical ones marked, and the stakeholders’ confirmation or objections."
          people="Representative users from each main group, a facilitator, a note-taker, and the relevant stakeholders."
          approves="Stakeholders confirm business fit. Users don’t approve anything; their results are evidence."
          starts="The prototype covers the tasks in the test plan, and you have recruited users who match the target groups."
          checklist={[
            'Each main user group has tested the tasks that matter to it.',
            'Results are recorded per task, so patterns across users are visible.',
            'Issues are ranked, and critical ones (a task people can’t finish, or a wrong business rule) are marked.',
            'Stakeholders have confirmed the flows, or their objections are written down.',
          ]}
        >
          <p>You don’t need a big study. <a href={nngroup}>Nielsen Norman Group’s guidance</a> is that about five users from one group find most of the usability problems in a qualitative test, and that several small rounds teach you more than one large one. When users and stakeholders disagree, take the conflict into stage 5 as a decision instead of leaving it for a meeting after launch.</p>
        </Stage>

        <Stage
          no={5}
          title="Revise and agree on scope"
          activities="Fix the critical issues, retest the flows those fixes touched, and decide what to do with everything else: fix now, accept, or defer. Then write down what will be built."
          deliverables="A short scope agreement: the accepted requirements, the final prototype, acceptance criteria for each flow, what’s out of scope, and the remaining uncertainties with a plan for each."
          people="Product owner, designer, tech lead, and the stakeholders who raised objections."
          approves="The product owner signs off the scope. The tech lead confirms it can be built within the constraints."
          starts="Test results are in, and the issues are ranked."
          checklist={[
            'No critical issue is left open, and every fixed flow has been retested.',
            'Each flow has acceptance criteria someone could test against.',
            'Out-of-scope items are written down so they don’t come back as surprises.',
            'Remaining uncertainties are listed with how each will be resolved: a spike, a measurement after launch, or a decision by a date.',
          ]}
        >
          <p>This is the gate. Everything before it was cheap to change, and everything after it costs more. The agreement can be short, but it has to be written down, because “I thought we agreed” is how scope drifts in week three.</p>
        </Stage>

        <Stage
          no={6}
          title="Develop"
          activities="Build the validated design in small increments, each one a usable slice of a flow. Review each increment against its acceptance criteria and the prototype."
          deliverables="Working increments in a test environment, each traced to the requirements, screens and acceptance criteria it covers."
          people="Engineers, the designer for questions and review, and the product owner reviewing increments."
          approves="Code review approves each change. The product owner accepts each increment against its criteria."
          starts="The scope agreement is signed off. Spikes and environment setup can start earlier."
          checklist={[
            'Each increment links to a requirement, a screen and its acceptance criteria.',
            'Departures from the prototype were agreed with the designer before review.',
            'Automated tests cover the business rules and the error paths from stage 2.',
            'New uncertainty goes back to the product owner as a decision instead of a guess in code.',
          ]}
        >
          <p>Traceability sounds heavier than it is. A requirement ID that appears in the screen name, the user story and the pull request is usually enough to answer “why does this exist?” six months later. <Link to="/writing/smaller-user-stories-and-pull-requests/">Smaller stories and smaller pull requests</Link> also make each increment easier to check against the design.</p>
        </Stage>

        <Stage
          no={7}
          title="Run UAT on working software"
          activities="In a staging environment, business owners and future users run realistic scenarios end to end. They verify business requirements, integrations, permissions for each role, data handling and the error paths."
          deliverables="UAT results per scenario, a defect list ranked by severity, and either a written acceptance or a list of what must change first."
          people="Business owners and the people who will use and support the system, with QA and engineers fixing defects."
          approves="The business owner, or the designated UAT approvers, accept the release."
          starts="The agreed scope is built, staging matches production closely enough to trust, and the test data is realistic."
          checklist={[
            'Every acceptance criterion has passed in staging.',
            'Each role has been tested with its real permissions, including what it shouldn’t be able to do.',
            'Integrations have been tested in both success and failure cases.',
            'Data imports, exports and migrations have been checked against real or production-like records.',
            'No open defect blocks acceptance.',
          ]}
        >
          <p>UAT should mostly find defects: things built differently from what was agreed. If it keeps finding “that’s not how we work,” stage 4 tested the wrong people or the wrong tasks, and that’s worth fixing before the next project.</p>
        </Stage>

        <Stage
          no={8}
          title="Release and measure"
          activities="Deploy once the acceptance criteria pass. Watch actual usage against the success criteria from stage 1, along with errors and support requests, and fix what comes up."
          deliverables="The release, a rollback plan, a dashboard or report on the success criteria, and a short list of follow-ups."
          people="Engineers and operations for the release; the product owner and support watching usage."
          approves="The product owner decides when to release, with the tech lead confirming it’s safe to deploy."
          starts="UAT is accepted and the rollback plan is ready."
          checklist={[
            'Monitoring and alerts cover the new flows before release.',
            'Success criteria are being measured in production.',
            'Support knows what changed and where to send problems.',
            'Findings become requirements for the next round, which starts again at stage 1.',
          ]}
        >
          <p>Prototype testing and UAT both rely on a handful of people in controlled conditions. Production is the first time you see everyone, and the success criteria from stage 1 tell you whether the earlier stages got it right.</p>
        </Stage>
      </section>

      <section id="spikes" aria-labelledby="spikes-h">
        <h2 id="spikes-h" className="post__h2">When should you build something before the design is final?</h2>
        <p className="post__answer">Build a small technical prototype, often called a spike, before the design is final whenever feasibility could change the design. If the answer to “can we actually do this?” might force a different workflow, find out before users test a flow you can’t build.</p>
        <p>I prototype the riskiest part first. These are typical questions a spike answers:</p>
        <ul className="post__list">
          <li>Can the third-party API return data in real time, or only in a nightly batch? A live status screen depends on the answer.</li>
          <li>Can we get the data at all, in the format and quality the flow assumes?</li>
          <li>Will offline use, camera access or file upload work on the devices the users actually have?</li>
          <li>Is the search or calculation fast enough at real data volumes to run as the user types?</li>
        </ul>
        <p>Keep each spike to one question and a fixed amount of time, and treat the code as disposable. The deliverable is the answer, fed back into the flows in stage 2. Once the plan holds up, a <Link to="/leadership/#risk">walking skeleton</Link> early in stage 6 proves the pieces connect end to end before features pile up on top.</p>
      </section>

      <section id="proportion" aria-labelledby="proportion-h">
        <h2 id="proportion-h" className="post__h2">Does every change need a prototype?</h2>
        <p className="post__answer">No. Match the process to the cost of being wrong. Copy fixes and obvious bug fixes can go straight to development and review. A new flow in an existing product needs a quick prototype and a few users, while a new product or a workflow people depend on deserves all eight stages.</p>
        <figure className="post__figure">
          <div className="twotests__scroll" tabIndex={0} role="region" aria-labelledby="proportion-cap">
            <table className="post__table">
              <caption id="proportion-cap"><span className="mono">Fig. 728-3</span> How much of the workflow a change needs</caption>
              <thead>
                <tr><th scope="col">Change</th><th scope="col">Stages</th><th scope="col">Sign-off</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Copy fix, small visual tweak, obvious bug</th><td>Develop, review, release</td><td>Code review, with the product owner agreeing in the ticket</td></tr>
                <tr><th scope="row">New screen or changed step in an existing flow</th><td>A sketch or clickable mock of the affected flow, a walkthrough with a few users, then build</td><td>The product owner, once the flow is tested</td></tr>
                <tr><th scope="row">New product, or a workflow people depend on</th><td>All eight</td><td>Scope agreement at stage 5 and UAT acceptance at stage 7</td></tr>
              </tbody>
            </table>
          </div>
        </figure>
        <p>The more a mistake costs after release, the more of the first phase is worth doing. Data migrations, regulated or public-sector workflows, mobile apps that wait on app store review, and anything people have been trained to use all raise that cost. An internal tool with five users who sit near the team lowers it.</p>
        <p>Two habits keep the process light. Formal approvals happen only at the scope gate and at UAT, and the stages in between use reviews. A minor change to a flow that has already been validated gets a quick check with the designer instead of another round of testing.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Tailor it before you start</h2>
      <div className="post__close-copy">
        <p>The same eight stages look very different for a public-sector form, a mobile app and an internal dashboard. Before planning any of them, I’d want answers to four questions:</p>
        <ol className="post__close-list">
          <li>What is the product idea, in a sentence or two?</li>
          <li>Who are the target users, and which group matters most?</li>
          <li>What platform is it on: web, mobile, desktop or several?</li>
          <li>What is the main workflow a user has to finish?</li>
        </ol>
        <p>Those answers decide which users to recruit, which risks need a spike, and how many of the stages are worth doing at all.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/writing/why-i-test-my-products-like-someone-who-has-never-used-them/" className="link-arrow"><span>Why I test my products like someone who has never used them</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
