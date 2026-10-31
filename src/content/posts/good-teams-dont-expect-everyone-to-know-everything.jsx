import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// First-person leadership piece from KC: expectations across experience levels,
// smaller PRs and stories, acceptance criteria, precise communication, reviews,
// documentation, distributed teams. The ticket examples are KC's own illustrations.

export const toc = [
  ['expectations', 'What to expect from each other'],
  ['what-i-know', 'What I know vs. what they know'],
  ['experience', 'Experience isn’t one thing'],
  ['clarity', 'Experience vs. clarity'],
  ['pull-requests', 'Smaller pull requests'],
  ['stories', 'Smaller stories'],
  ['acceptance-criteria', 'Acceptance criteria'],
  ['say-what-happened', 'Say what actually happened'],
  ['reviews-and-docs', 'Reviews and documentation'],
  ['time-zones', 'Across time zones'],
  ['everyone', 'What I expect from everyone'],
  ['not-the-bottleneck', 'Not being the bottleneck'],
  ['habits', 'Habits I encourage'],
];

export default function Body() {
  return (
    <>
      <section id="expectations" aria-labelledby="expectations-h">
        <h2 id="expectations-h" className="post__h2">What should we reasonably expect from each other?</h2>
        <p>Across my career writing code and leading engineering teams, there’s one question I keep coming back to: what should we reasonably expect from other people, when everyone has a different level of experience, a different technical background and a different amount of knowledge about the system?</p>
        <p>I have seen teams expect a senior developer to know an entire codebase, or someone six months into a project to remember every technical decision. A junior developer may be expected to investigate an unfamiliar system with little help. Those expectations deserve a closer look, and I expect more than I should when something seems obvious to me.</p>
        <p className="post__answer">The answer changes with the person and the situation. What doesn’t change is this: we shouldn’t make understanding the work harder than the work itself. That’s why I push for smaller pull requests, smaller stories, clearer acceptance criteria and more precise communication. I want people spending less time working out what someone meant and more time solving the actual problem.</p>
      </section>

      <section id="what-i-know" aria-labelledby="what-i-know-h">
        <h2 id="what-i-know-h" className="post__h2">Just because I know something doesn’t mean everyone does</h2>
        <p>I’ve worked with engineering teams across countries, time zones and technical backgrounds. Some developers specialize in the frontend. Others are stronger in backend systems, databases, infrastructure or security. Even within one framework, people have had different experiences, and that’s normal.</p>
        <p>I’ve worked with Python, Django, React, PostgreSQL and AWS for years, and I still look up syntax. Sometimes I forget a Django ORM expression, or a PostgreSQL JSON operation, or a Docker command I haven’t used in months. I know what I’m trying to accomplish. I don’t always remember how to write it. So why would I expect someone else to remember everything? I wrote about this in <Link to="/writing/you-dont-need-to-remember-everything/">you don’t need to remember everything</Link>, and it applies just as much to a codebase as to syntax.</p>
        <p>Even the person who wrote the code six months ago might not remember why they made a particular decision. I’ve looked at my own code from years ago and wondered what I was thinking. Now imagine being someone who just joined the team, or who normally works on a completely different part of the application. How are they supposed to know? I try to remind myself of that whenever I review someone’s work or talk through a problem with them.</p>
      </section>

      <section id="experience" aria-labelledby="experience-h">
        <h2 id="experience-h" className="post__h2">Experience matters, and no two experiences are the same</h2>
        <p>Hiring, mentoring and leading developers taught me that years of experience don’t tell the whole story. Two developers might both have ten years. One spent them on a single application and knows its architecture and business rules deeply. The other moved across companies, frameworks and systems. Both bring something, and their strengths differ.</p>
        <p>A developer with ten years of backend experience might have very little exposure to the frontend. Someone excellent with React might never have written a complex PostgreSQL query. Neither is a weak engineer. They’ve had different opportunities to learn. (The case for building some breadth anyway is in <Link to="/writing/specialization-beyond-your-own-code/">specialization shouldn’t stop at your own code</Link>.)</p>
        <p>When I assign work, I think about what someone knows, what they haven’t been exposed to, and what they can figure out. Sometimes I give a task to the person who can finish it quickly. Sometimes I give it to someone because I want them to learn it. Those are two different expectations, and they start before the person is even on the team: <Link to="/writing/why-hiring-good-engineers-is-so-hard/">what we think we learned about someone in an interview</Link> shapes what we expect from them later, often unfairly. If I’m handing someone a chance to learn, I shouldn’t expect the speed of someone who has done it twenty times. I do still expect them to take ownership, investigate, ask questions and make progress. Not knowing something is understandable, but not making an effort to figure it out is a different issue.</p>
      </section>

      <section id="clarity" aria-labelledby="clarity-h">
        <h2 id="clarity-h" className="post__h2">Experience should change expectations, not replace clarity</h2>
        <p>I expect more independence from a senior engineer than from a junior one. A senior engineer should be better at breaking down problems, recognizing risks, investigating unfamiliar code and making technical decisions. They should also know when to ask. I don’t expect them to know everything. Even a very experienced engineer can’t know a business rule nobody explained or a decision nobody documented.</p>
        <p>I’ve heard “they’re a senior engineer, they should know this” plenty of times. Sometimes it’s fair. Sometimes we’re asking experience to make up for missing information. Before judging their work, I check whether we explained the business requirements, documented the decisions and gave them clear acceptance criteria. A job title cannot fill in information we never shared.</p>
        <p>A challenging problem helps people grow. An unclear problem with not enough context wastes their time. Experience helps people handle ambiguity, which doesn’t give anyone license to create ambiguity that didn’t need to exist. Turning ambiguity into work people can actually execute is <Link to="/leadership/#ambiguity">part of how I lead</Link>.</p>
      </section>

      <section id="pull-requests" aria-labelledby="pull-requests-h">
        <h2 id="pull-requests-h" className="post__h2">Smaller pull requests make everyone’s life easier</h2>
        <p>I’ve seen pull requests with thousands of changed lines. Sometimes they’re unavoidable. More often they come from trying to do too much at once. A developer starts on a feature, notices something that needs refactoring, updates a few dependencies, cleans up some unrelated code, and by the time the PR is ready it holds five different kinds of change. Now someone has to review all of it, and that reviewer probably doesn’t share the author’s context.</p>
        <p>I prefer smaller pull requests whenever possible. They’re easier to understand, review, test, troubleshoot and revert. A reviewer should be able to open a PR and quickly answer three questions:</p>
        <ol className="post__steps">
          <li>What problem are we solving?</li>
          <li>What changed?</li>
          <li>How do we know it works?</li>
        </ol>
        <p>If answering those takes a thirty-minute conversation with the author, we should improve how we describe the work. Smaller doesn’t mean splitting code into meaningless pieces. A PR should still be one logical, reviewable change. The point is to minimize the context someone needs to review it correctly, which is rarely the same as minimizing the line count.</p>
      </section>

      <section id="stories" aria-labelledby="stories-h">
        <h2 id="stories-h" className="post__h2">Smaller stories make progress visible</h2>
        <p>The same thinking applies to Jira tickets and user stories. I’ve seen stories that were entire projects. A ticket says “Implement the new business registration workflow.” That sounds reasonable until you realize the workflow includes multiple forms, API changes, database updates, validation rules, permissions, notifications and integrations. One developer now owns understanding and building all of it. The story sits in progress for weeks. Teammates can’t help because nobody knows which parts are done. QA doesn’t know when to start. Leadership has almost no visibility into real progress.</p>
        <p>I’d rather break that into smaller, meaningful deliverables: the registration form, the API, server-side validation, document upload, permission checks, the status workflow. Each one gets a clear outcome and its own acceptance criteria. Progress becomes visible, and blockers show up early. If one piece is delayed, we know which piece and why, instead of watching one large ticket sit in progress for three weeks. That’s also most of what <Link to="/writing/what-sprint-carryover-is-telling-you/">sprint carryover</Link> is trying to tell you.</p>
        <p>There’s a balance. Twenty tickets for something one person can reasonably finish as a single piece of work is noise, and splitting so aggressively that every ticket depends on five others is worse. Break work down enough to make it understandable, testable and deliverable. The ticket count is not the goal.</p>
      </section>

      <section id="acceptance-criteria" aria-labelledby="acceptance-criteria-h">
        <h2 id="acceptance-criteria-h" className="post__h2">Clear acceptance criteria save more time than they cost</h2>
        <p>A ticket can look perfectly clear to the person who wrote it and still be unclear to everyone else. Take “Update the application status when validation fails.” It leaves out which validation triggers the change, the status to display and what the user should see. It also leaves the developer to guess how to log the failure and handle an unavailable service or a retry.</p>
        <p>The developer makes one set of assumptions. QA makes another. The product owner expected something different again. We discover the gaps during testing, the ticket goes back to development, and we spend the next week in meetings, messages and rework, all because nobody spent a few extra minutes clarifying the requirements up front. Some of that rework is <Link to="/writing/engineering-work-nobody-needed/">work nobody needed in the first place</Link>, built carefully to the wrong understanding.</p>
        <p>I want acceptance criteria that describe the expected behavior clearly enough that someone unfamiliar with the implementation can follow them. They can be short. What matters is that the important questions are answered before development begins.</p>
      </section>

      <section id="say-what-happened" aria-labelledby="say-what-happened-h">
        <h2 id="say-what-happened-h" className="post__h2">Say what actually happened</h2>
        <p>This goes beyond code. It applies to ticket comments, bug reports, incident reports and everyday messages.</p>
        <p>Say someone reports that a validation check “wasn’t performed,” when what actually happened is that the validation ran and the result didn’t match. Those are two very different situations. One suggests a missing step. The other says the validation worked and returned a negative result. If both get described as “not checked,” whoever investigates later can easily reach the wrong conclusion, and unless they worked on that code, they have no way to tell the difference.</p>
        <p>So I ask teams to be specific. Don’t say something wasn’t checked if it was checked and failed. Don’t say something is broken without describing the behavior you’re seeing. Don’t mark a ticket done without saying what was completed. And don’t assume everyone remembers a decision from a meeting three weeks ago. The person reading your message tomorrow may not have been in the room. Good communication makes sense when the author isn’t around to explain it.</p>
      </section>

      <section id="reviews-and-docs" aria-labelledby="reviews-and-docs-h">
        <h2 id="reviews-and-docs-h" className="post__h2">Reviews for understanding, documentation without ceremony</h2>
        <p>I’ve worked with teams where pull requests get approved almost immediately. Sometimes that’s fine: the change is small, obvious and low risk. Sometimes I wonder whether the reviewer understood it. A code review is a chance to catch problems, share knowledge and improve the codebase, and it only works if reviewing is practical. When a PR holds two thousand lines of unrelated changes, even a good reviewer misses things, because there’s too much to process.</p>
        <p>Small, focused PRs give reviewers room to examine the approach, its effects on other parts of the system, and the handling of failure cases. They can consider simpler alternatives and whether the tests cover the risks. Those conversations are worth far more than arguing about formatting, and over time they’re how developers learn from each other.</p>
        <p>Documentation works the same way. I don’t mean long technical documents. Sometimes a few sentences in a pull request are enough. Sometimes it’s a short README explaining how to run a service, a comment explaining why a business rule exists, or a note on the Jira ticket recording what the team decided. I’ve watched teams spend hours in Slack reaching a decision and never write it down anywhere. Three months later someone asks the same question and the team has the same conversation again. Not every conversation needs recording. A decision that affects how the system works does, so that someone can find the reasoning later, especially once the person who made it has left. I hold myself to the same rule for <Link to="/leadership/#decisions">architecture decisions</Link>.</p>
      </section>

      <section id="time-zones" aria-labelledby="time-zones-h">
        <h2 id="time-zones-h" className="post__h2">Across time zones, clarity gets expensive to skip</h2>
        <p>I’ve spent years working with distributed engineering teams. When the team is spread across time zones, an unclear message costs a lot. Someone asks a question. The person who knows the answer is already offline. The developer waits several hours, or worse, makes an assumption and keeps going, and the next day we find out the assumption was wrong.</p>
        <p>Smaller stories, clear acceptance criteria and well-described pull requests cut down how often someone has to stop and ask. A developer should be able to pick up a ticket and understand what needs to happen without scheduling a meeting to get started. A reviewer should be able to understand a PR without waiting for the author to wake up. QA should be able to test a feature without reverse-engineering the requirements. None of that removes communication. It makes the communication you do have count.</p>
      </section>

      <section id="everyone" aria-labelledby="everyone-h">
        <h2 id="everyone-h" className="post__h2">What I expect from everyone, regardless of experience</h2>
        <p className="post__answer">A few things I expect from everyone on an engineering team, whatever their level: say when you’re blocked, ask when something isn’t clear, make an effort to understand the problem before jumping to a solution, take responsibility for your work, and think about the next person who has to read, review, test or maintain what you built.</p>
        <p>That last one matters most to me. You might understand your code today, but the next developer needs enough context to investigate a problem without calling you. QA needs to know what to test, and a future reviewer needs to understand why you made the decision. Providing that context is part of working together.</p>
        <p>I don’t believe in dropping accountability because someone has less experience. Everyone has a responsibility to contribute, communicate and improve. I also don’t believe in holding everyone to identical expectations without considering their experience, their responsibilities and the information they were given. A junior engineer may need more guidance. A senior engineer should show more independence and judgment. A tech lead should help others make progress, not only close their own tickets. An engineering manager should notice when the team’s process is creating obstacles. Different roles carry different expectations, and everyone deserves to know what those expectations are.</p>
        <p>If someone has the information, tools and support they need and still consistently struggles to deliver, that needs addressing. If the whole team keeps asking the same questions or misreading the same requirements, the problem is probably how we communicate and organize the work, and we should fix that instead. Being understanding doesn’t lower the standard. It makes sure the standard is reasonable, clear and applied the same way to everyone.</p>
      </section>

      <section id="not-the-bottleneck" aria-labelledby="not-the-bottleneck-h">
        <h2 id="not-the-bottleneck-h" className="post__h2">I don’t want to be the person who knows everything</h2>
        <p>Early in my leadership career I felt responsible for having an answer to every question. Developers came to me when they were stuck. Product asked me about implementation details. QA asked me to clarify expected behavior. I tried to help everyone, and eventually I became the bottleneck. When every decision runs through one person, the team can’t move without that person.</p>
        <p>I don’t need to remember everything or make every technical decision. My job is to create an environment where people can make good decisions without depending on me: encouraging knowledge sharing, making requirements clearer, helping developers break down work, leaving room for questions, and making sure important decisions don’t live only in someone’s head. A team shouldn’t stall because one developer takes a vacation, and a project shouldn’t stop because the person who built a feature has moved on. If everything depends on one person knowing everything, that’s a risk, whatever it looks like from the outside. It’s also why I <Link to="/mentorship/">mentor engineers until they can replace me</Link>.</p>
        <p>Asking for clear tickets, smaller PRs and better documentation isn’t micromanagement. I don’t need to tell an experienced developer how to implement every feature. I want them to understand the problem, the constraints and the expected outcome, and then use their experience to pick a solution. In reviews, I don’t want developers defending every line. I want the team to understand the reasoning behind the decisions that matter. Clear expectations give people more independence, because they spend their time solving problems rather than guessing what someone meant.</p>
        <p>Experience is also about how much easier you make things for the people around you. A senior engineer who can solve a hard problem is valuable. One who can explain it, help others understand it, and keep the team from hitting it again is more valuable. The same goes for engineering leaders. That takes patience, and it sometimes means explaining something that seems obvious to you and isn’t obvious to someone else. I’ve had to remind myself of that for my whole career. The reverse is true too: there’s plenty other engineers know that I don’t. That’s why it’s a team.</p>
      </section>

      <section id="habits" aria-labelledby="habits-h">
        <h2 id="habits-h" className="post__h2">What I try to encourage on my teams</h2>
        <ul className="post__list">
          <li>Keep pull requests focused. One logical change is easier to review than five unrelated ones bundled together.</li>
          <li>Break large stories into smaller deliverables, so progress is visible and problems surface early.</li>
          <li>Write acceptance criteria someone else can understand. Don’t assume the developer, QA and the product owner read a ticket the same way.</li>
          <li>Explain the reasoning behind a change so the next person can assess whether it still applies.</li>
          <li>Make important decisions discoverable, instead of leaving them in Slack threads or someone’s memory.</li>
          <li>Encourage questions. I’d rather someone ask than spend two days building the wrong thing.</li>
          <li>Review for understanding. A review should improve quality and share knowledge. Getting through the process is the minimum.</li>
          <li>Don’t let the team depend on one person. Share knowledge so work keeps moving when someone is away.</li>
        </ul>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Make the work easier for the next person</h2>
      <div className="post__close-copy">
        <p className="lead">Software engineering is already complicated: frameworks, languages, databases, services and business rules, with requirements changing and people joining and leaving. Nobody can remember all of it, and we shouldn’t expect them to. What we can do is write a clearer ticket, submit a smaller pull request, explain a decision, document an assumption, and ask a question before spending two days going the wrong way.</p>
        <div className="post__close-actions">
          <Link to="/leadership/" className="action">How I lead engineering teams <ArrowRight /></Link>
          <Link to="/contact/" className="link-arrow"><span>Talk about how your team organizes its work</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
