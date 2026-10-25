import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Why user stories are hard to write. Source: KC's draft (Oct 20 2026), edited for AGENTS.md: forced contrasts,
// fragment chains, the slogan-style ending and an "after years" phrase removed; KC's examples, arguments and the
// six-question checklist kept. The profile-update, submit-button, onboarding, Redis-cache and account-management
// examples are illustrations from the draft, not incidents. "I've seen" observations are KC's own, from his draft.
// Story size and acceptance criteria already have their own posts, so this one links to them.

export const metadata = {
  slug: 'why-writing-good-user-stories-is-hard',
  title: 'Why Is Writing a Good User Story So Hard?',
  shortTitle: 'Why good user stories are hard',
  seoTitle: 'Why Writing Good User Stories Is So Hard',
  description:
    'Why user stories cause so much confusion: different roles, too much or too little detail, stories versus technical tasks, story mapping and acceptance criteria everyone can use.',
  teaser:
    'Product, design, engineering and QA each read the same story differently. Why more detail and smaller tickets don’t fix that on their own, and what does.',
  dek:
    'The format fits on one line. The hard part is that product, design, engineering and QA each bring different knowledge to the same feature, and a story has to work for all of them.',
  summary:
    'Why the user story format hides how hard the job is; how product managers, designers, developers and QA see the same feature; why too much detail can be as bad as too little; stories that are too big or too small; stories versus technical tasks; writing from only one perspective; the cost of developers guessing; acceptance criteria that help everyone; story mapping; using the story to support a conversation; simplicity; who owns the story; and six questions I ask before a story moves into development.',
  topics: ['Delivery', 'Leadership', 'Engineering judgment'],
  minutes: 9,
  related: [
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/good-teams-dont-expect-everyone-to-know-everything/', label: 'Good teams don’t expect everyone to know everything' },
    { to: '/writing/what-engineering-leadership-actually-does/', label: 'What engineering leadership actually does all day' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/why-i-test-my-products-like-someone-who-has-never-used-them/', label: 'When the story is built as written and still confuses users' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review doesn’t start with a pull request' },
    { to: '/writing/when-to-add-engineering-process/', label: 'When process helps' },
  ],
  keywords: [
    'how to write good user stories',
    'why user stories are hard',
    'user stories',
    'acceptance criteria',
    'user story mapping',
    'user story vs technical task',
    'unclear requirements',
    'cross-functional collaboration',
    'product management and engineering',
    'engineering leadership',
  ],
  about: [
    { '@type': 'Thing', name: 'User story', sameAs: 'https://en.wikipedia.org/wiki/User_story' },
    { '@type': 'Thing', name: 'Requirements engineering', sameAs: 'https://en.wikipedia.org/wiki/Requirements_engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Acceptance testing', sameAs: 'https://en.wikipedia.org/wiki/Acceptance_testing' },
    { '@type': 'Thing', name: 'Agile software development', sameAs: 'https://en.wikipedia.org/wiki/Agile_software_development' },
    { '@type': 'Thing', name: 'Software quality assurance', sameAs: 'https://en.wikipedia.org/wiki/Software_quality_assurance' },
  ],
  faq: [
    {
      q: 'Why is writing a good user story so hard?',
      a: 'Because product managers, designers, developers and QA each approach a feature with different knowledge and assumptions, and a story has to give all of them the same understanding. A story written from only one of those perspectives leaves everyone else guessing.',
    },
    {
      q: 'What is the difference between a user story and a technical task?',
      a: 'A user story describes something a user can accomplish and why it matters. A technical task, such as a database migration, an API endpoint or a UI component, is work needed to deliver that outcome. One story often needs several tasks, and splitting a story into tasks doesn’t make it a set of smaller stories.',
    },
    {
      q: 'What should acceptance criteria include?',
      a: 'The expected behavior and the important business rules: what the user can and can’t do, required validation, what success looks like, what happens when something fails, and who has permission. They should help the developer build it, the product manager confirm it and QA test it, without prescribing the implementation.',
    },
    {
      q: 'Who should own a user story?',
      a: 'Usually the product manager or product owner, who owns the business outcome and the priority. Ownership means bringing the right perspectives together and making sure open questions have owners, with engineering, design and QA contributing constraints, interactions and missing scenarios.',
    },
  ],
};

export const toc = [
  ['simple', 'It sounds simple'],
  ['perspectives', 'Everyone sees the feature differently'],
  ['detail', 'Too much detail, or too little'],
  ['size', 'Too big, too small, or a task'],
  ['guessing', 'When developers have to guess'],
  ['criteria', 'Acceptance criteria for everyone'],
  ['mapping', 'Story mapping shows the journey'],
  ['conversation', 'A story should support a conversation'],
  ['owner', 'Who owns the story?'],
  ['questions', 'What I check before development starts'],
];

// ---------- Fig. 718-1: one feature, four perspectives ----------
// Generalizations from KC's draft, not rules about individuals.
const perspectives = [
  ['Product manager', 'The business problem and the outcome', 'How the software works underneath'],
  ['UX/UI designer', 'The user journey and the interaction', 'The technical constraints behind the interface'],
  ['Developer', 'Architecture, data, APIs and implementation', 'Why the business wants it and what matters most'],
  ['QA engineer', 'Conditions, exceptions and expected results', 'Which business rules were included or left out on purpose'],
];

function Perspectives() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 718-1</span> One feature, four perspectives</caption>
        <thead><tr><th scope="col">Role</th><th scope="col">Often knows best</th><th scope="col">Often has to ask about</th></tr></thead>
        <tbody>{perspectives.map(([role, knows, asks]) => <tr key={role}><th scope="row">{role}</th><td>{knows}</td><td>{asks}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">A generalization, not a rule. Plenty of people cross these lines, and everyone has gaps somewhere.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="simple" aria-labelledby="simple-h">
        <h2 id="simple-h" className="post__h2">It sounds simple</h2>
        <p>I’ve worked with a lot of product managers, designers, developers and QA engineers, and it still surprises me how hard it is to write a good user story. On paper the job is small: describe what the user needs, explain why, and define what success looks like. There’s even a familiar format for it: as a user, I want to do something, so that I can achieve some outcome.</p>
        <p>If it were that simple, teams wouldn’t spend so much time discussing requirements, rewriting tickets and discovering missing details halfway through development. I don’t think the problem is that people don’t know the format. Everyone approaches a feature with different knowledge, experience and assumptions, and it’s easy to forget that other people don’t know what we know.</p>
        <p className="post__answer">Writing a good user story is hard because product managers, designers, developers and QA each approach a feature with different knowledge and assumptions, and the story has to give all of them the same understanding. A story written from only one of those perspectives leaves everyone else guessing.</p>
      </section>

      <section id="perspectives" aria-labelledby="perspectives-h">
        <h2 id="perspectives-h" className="post__h2">Everyone sees the feature differently</h2>
        <p>A product manager might understand the business problem extremely well and know little about how the software works. A designer understands the user journey and the interaction, and may not know the technical constraints behind the interface. A developer knows the architecture, the database and the APIs, and may not fully understand the business objective. QA knows how to test the application, and may not know which business rules were included or left out on purpose.</p>
        <Perspectives />
        <p>None of that means anyone is bad at their job. People specialize for good reasons. The trouble starts when we expect one person to write a story that everyone else can understand without further discussion. Not everyone has worked across product, design, engineering and operations, and those of us who have still have gaps. So writing a user story involves more than documenting requirements. It’s an exercise in building shared understanding, which is the same idea behind <Link to="/writing/good-teams-dont-expect-everyone-to-know-everything/">not expecting everyone to know everything</Link>.</p>
        <p>We also tend to write stories in the language we know best. Developers describe features in technical terms, product managers describe business outcomes, designers describe screens and interactions, and QA describes conditions and expected results. A developer might write “Implement a new API endpoint to update the customer record and invalidate the Redis cache.” Another developer knows what to do. The product manager can’t tell what business behavior it supports, and QA can’t tell what the customer should see. A product manager might write “Users should be able to manage their account information easily.” The intent is clear, and the developer still has to work out which information, which permissions and what happens when something goes wrong. Both stories carry useful information, and neither gives the team a shared understanding on its own.</p>
        <p>I don’t expect everyone to become an expert in every discipline. I do expect people to recognize where their knowledge ends and someone else’s expertise is needed.</p>
      </section>

      <section id="detail" aria-labelledby="detail-h">
        <h2 id="detail-h" className="post__h2">Too much detail, or too little</h2>
        <p>I’ve seen user stories that run several pages. They describe every button, every interaction, every condition and sometimes how the code should be written. It looks thorough. In practice it becomes hard to tell what we’re trying to deliver. Is it one feature or five? Which parts are essential, what can ship first, and what depends on something else? How do we know when it’s done? Without a clear breakdown of the user journey, a long list of requirements turns into something to interpret. Developers spend time decoding the document, QA can’t find the boundaries of what to test, and product struggles to say what’s ready for release. More detail doesn’t automatically create more clarity. Sometimes it just creates more to manage.</p>
        <p>The opposite happens just as often. A story says “Allow users to update their profile,” and nothing else. The developer is left to decide which fields can change and which can’t, what validation applies, what happens when the save fails, whether changes take effect immediately, who has permission, and whether the user sees a confirmation. If nobody answers those questions, the developer makes reasonable assumptions and may build something that works technically and misses the business need. The team then spends time correcting it, and the real problem was never the implementation. We never agreed on what to implement.</p>
      </section>

      <section id="size" aria-labelledby="size-h">
        <h2 id="size-h" className="post__h2">Too big, too small, or a task</h2>
        <p>I encourage teams to write smaller stories, because smaller stories are easier to develop, review, test and release. I made that case in <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link>. Smaller doesn’t automatically mean better, though. “Create a submit button” is small, and it leaves the developer guessing what the button submits, what validation runs and what should happen afterward. “Build the entire customer onboarding experience” sits at the other end. It could include registration, authentication, profile creation, document uploads, eligibility checks, notifications and approvals, which makes it hard to estimate, build or test as one piece.</p>
        <p>What works better is understanding the whole user journey first, then finding meaningful pieces that can be delivered independently or in a sensible order. A good story is small enough to deliver and complete enough to understand.</p>
        <p className="post__answer">A user story is different from a technical task. A story describes something a user can accomplish and why it matters. A database migration, an API endpoint and a React component might all be necessary tasks to deliver it, and the user doesn’t care about any of them individually. Splitting a story into tasks is useful planning, and it doesn’t turn the tasks into smaller stories.</p>
      </section>

      <section id="guessing" aria-labelledby="guessing-h">
        <h2 id="guessing-h" className="post__h2">When developers have to guess</h2>
        <p>One of the more expensive problems in software development is discovering requirements after implementation has started. A developer picks up a story, makes reasonable assumptions and starts coding. A few days later the feature is demonstrated. The product manager says it isn’t what they expected, the designer says the interaction is wrong, and QA finds important conditions that were never written down. Sometimes fixing that takes a few lines of code. Sometimes it means redesigning the workflow, changing the data model or rewriting a large part of the feature.</p>
        <p>I’ve seen developers do exactly what the ticket described and still deliver something the business didn’t want. Blaming the person who wrote the story or the developer who built it doesn’t help. The team didn’t share an understanding before the work began, and that’s the problem worth fixing. It ends up as the kind of <Link to="/writing/engineering-work-nobody-needed/">engineering work nobody needed</Link>.</p>
        <p>We can’t anticipate every question before development starts. Requirements evolve, and sometimes we only learn what we need after we see something working. That kind of learning is healthy. Repeatedly discovering basic requirements that should have come up in a five-minute conversation is a different thing, and it’s avoidable.</p>
      </section>

      <section id="criteria" aria-labelledby="criteria-h">
        <h2 id="criteria-h" className="post__h2">Acceptance criteria for everyone</h2>
        <p>Written well, acceptance criteria are one of the most useful parts of a story. They should help the developer understand the expected behavior, the product manager confirm the business need, and QA decide whether the feature works. They don’t need implementation detail, and they should answer the important questions. For the profile example, instead of “Users can update their profile,” we might agree that:</p>
        <ul className="post__list">
          <li>Users can update their display name and phone number.</li>
          <li>Email addresses can’t be changed through this workflow.</li>
          <li>Required fields are validated before saving.</li>
          <li>Users see a confirmation when their changes are saved.</li>
          <li>If saving fails, the user sees an error and their unsaved input is kept.</li>
          <li>Users can only change their own profile.</li>
        </ul>
        <p>Now product, design, engineering and QA have something concrete to discuss. A developer may still have questions, and that’s fine. I’m not trying to eliminate every question. I want to reduce the assumptions nobody needed to make and surface the important decisions while they’re still cheap to change.</p>
      </section>

      <section id="mapping" aria-labelledby="mapping-h">
        <h2 id="mapping-h" className="post__h2">Story mapping shows the journey</h2>
        <p>Sometimes the individual story is fine, and the difficulty is that nobody has explained how the stories fit together. That’s where I find story mapping valuable. Take an onboarding process again. Instead of starting from a pile of tickets, we first walk through what the user is trying to do: create an account, provide information, complete the required steps, review the submission and get a confirmation. With that journey in front of us, we can see which capabilities each stage needs, and decide what belongs in the first release and what can wait.</p>
        <p>The map keeps the context when the work gets divided. A developer working on one story can see how it fits the workflow, QA can see how the pieces connect, designers can spot missing interactions, and product managers can prioritize by user value instead of treating every ticket as equally important. Story mapping doesn’t replace good stories. It makes them easier to write, because the team understands the journey before cutting it into pieces.</p>
      </section>

      <section id="conversation" aria-labelledby="conversation-h">
        <h2 id="conversation-h" className="post__h2">A story should support a conversation</h2>
        <p>I’ve become more and more convinced that a user story should support a conversation, not replace one. A ticket shouldn’t work like a contract where one person writes requirements and another implements them without asking anything. Software involves too many decisions and dependencies for that to work consistently. A short conversation between product, design, engineering and QA can save days of work if it settles a few things: what the user is actually trying to accomplish, the simplest way to deliver that, what we’re deliberately not building, what happens when something goes wrong, and how we’ll know it works.</p>
        <p>That doesn’t need to be a long meeting. A few comments on the ticket or a quick call is often enough. What matters is resolving the uncertainty before it turns into rework. Developers should also feel comfortable challenging a story, usually because they can see a simpler solution or a constraint nobody else has considered. The same goes for QA and designers.</p>
        <p>Simplicity helps here too. I regularly push back on unnecessary complexity, in architecture, in process and in UX, for reasons I went into in <Link to="/writing/what-engineering-leadership-actually-does/#simpler">what engineering leadership actually does</Link>. Workflows grow because we design for every future requirement, abstractions appear because someone anticipates change, and requirements expand because nobody wants to leave out something useful. Every extra step, condition and dependency is more to build, more for QA to test and more for users to learn. A simpler workflow is also easier to describe in a story, which is a good sign it’s easier to build and use. It lets us deliver something earlier and improve it from real usage, which matters most when time and people are limited.</p>
      </section>

      <section id="owner" aria-labelledby="owner-h">
        <h2 id="owner-h" className="post__h2">Who owns the story?</h2>
        <p>Writing a good story shouldn’t fall on one person. Someone needs to own the business outcome and the priority, and in most teams that’s the product manager or product owner. Owning it doesn’t mean knowing every technical detail or predicting every edge case. Engineering brings constraints, dependencies and chances to simplify. Design explains how people will interact with the feature. QA finds ambiguous behavior and missing scenarios. The owner’s job is to bring those perspectives together and make sure every open question has someone responsible for answering it.</p>
        <p>That doesn’t mean every story needs a meeting with the whole team, which would create a different problem. It means involving the right people when their knowledge is needed. I’ve seen teams spend more time maintaining their process than delivering software, and I don’t want story writing to become another administrative burden. The process should make delivery easier. I wrote more about that balance in <Link to="/writing/when-to-add-engineering-process/">when process helps</Link>.</p>
      </section>

      <section id="questions" aria-labelledby="questions-h">
        <h2 id="questions-h" className="post__h2">What I check before development starts</h2>
        <p>I don’t think there’s a perfect template. A simple feature might need a few sentences and clear acceptance criteria. A complicated workflow might need a story map, design references, business rules and a few discussions before anyone writes code. Forcing every feature into the same format doesn’t make sense to me. What matters is whether the people delivering it understand the problem and agree on the outcome. Before a story moves into development, I want to know:</p>
        <ol className="post__list">
          <li>Do we understand the problem we’re solving and who we’re solving it for?</li>
          <li>Do we understand how this feature fits the larger user journey?</li>
          <li>Is the story small enough to implement, review and test without losing its purpose?</li>
          <li>Are the important business rules and expected behaviors clear?</li>
          <li>Have we named the assumptions that could cause significant rework?</li>
          <li>Can product, engineering, design and QA each explain what success looks like?</li>
        </ol>
        <p>If we can’t answer those, I’d rather spend a little more time on the story than find the problems after implementation. I also don’t want a team spending days documenting every scenario for a simple feature. Finding that balance takes judgment, and it’s something I’m still getting better at.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Shared understanding over perfect tickets</h2>
      <div className="post__close-copy">
        <p className="lead">User stories are hard because software is built by people with different knowledge, experience and priorities, and nobody should be expected to know everything. Writing more down doesn’t close those gaps by itself. A good story gives the team enough clarity to make informed decisions without prescribing every step.</p>
        <p className="post__close-principle">That’s why I think the quality of our conversations matters more than the format of our tickets.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
