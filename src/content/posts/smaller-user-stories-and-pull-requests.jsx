import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Short first-person piece from KC on story size, PR size and release size.
// The opening scenario is hypothetical and labelled on the page. No metrics
// or named projects are claimed.

export const toc = [
  ['the-story', 'It starts with the story'],
  ['smaller-stories', 'Smaller stories'],
  ['smaller-prs', 'Smaller pull requests'],
  ['smaller-releases', 'Smaller releases'],
  ['one-person-fast', 'Fast for one, slow for all'],
  ['not-bureaucracy', 'Not more process'],
  ['whose-job', 'Whose job it is'],
];

export default function Body() {
  return (
    <>
      <section id="the-story" aria-labelledby="the-story-h">
        <h2 id="the-story-h" className="post__h2">It usually starts with the user story</h2>
        <p>Here’s a hypothetical most engineering managers will recognize. A developer picks up “Add document upload to the application form.” It turns out to mean an upload component, a storage integration, virus scanning, file validation, a permissions change, a status update and an email. The acceptance criteria are two lines. Ten days later a pull request lands with a few thousand changed lines, and it sits for another week because nobody can hold it in their head long enough to approve it.</p>
        <p className="post__answer">The developer didn’t do anything wrong. The story was too big before anyone typed a line of code, and everything downstream, from the review to the testing to the release, inherited that size.</p>
      </section>

      <section id="smaller-stories" aria-labelledby="smaller-stories-h">
        <h2 id="smaller-stories-h" className="post__h2">Smaller stories fix planning problems</h2>
        <p>Split that story into pieces a user or a tester can see: the upload, then validation, then scanning, then the status and notification. Each piece gets acceptance criteria that fit on a card and mean the same thing to the developer, QA and the product manager. Estimates get more honest, because people estimate an afternoon far better than a fortnight. Dependencies show up in planning instead of on day eight. When the business changes its mind halfway through, which it will, you reprioritize the remaining pieces instead of abandoning <Link to="/writing/engineering-work-nobody-needed/">a half-built feature nobody ends up needing</Link>. Product gets something shipped every sprint and feedback while it can still change the plan. Engineering gets a sprint that ends with finished work instead of <Link to="/writing/what-sprint-carryover-is-telling-you/">a story carrying over for the third time</Link>.</p>
      </section>

      <section id="smaller-prs" aria-labelledby="smaller-prs-h">
        <h2 id="smaller-prs-h" className="post__h2">Smaller pull requests fix review problems</h2>
        <p>A reviewer can read three hundred lines carefully. Nobody reads three thousand carefully, and the approval that eventually lands on a huge PR is mostly an act of trust. Small PRs get real review: someone notices the missing authorization check, the query inside the loop, the retry with no backoff. Feedback gets specific instead of “looks fine, I guess.” Merge conflicts shrink because branches live for days, not weeks. When production breaks, the change that caused it is small enough to find and to revert. And an engineer who doesn’t know that part of the codebase can follow a small PR and learn from it, which is how knowledge spreads without a meeting.</p>
      </section>

      <section id="smaller-releases" aria-labelledby="smaller-releases-h">
        <h2 id="smaller-releases-h" className="post__h2">Smaller releases fix the big-bang problem</h2>
        <p>The same logic applies to what you ship. A feature that goes live all at once, to everyone, on a Thursday afternoon, has the largest possible blast radius and the vaguest failure signal: something is slow, and it could be any of twelve changes. Rolling out in smaller pieces, behind a flag or to a slice of users first, means you learn from real traffic while the exposure is small, you can turn one thing off without rolling back everything, and support knows exactly what changed when the tickets arrive. Small stories and small PRs are what make small releases possible.</p>
      </section>

      <section id="one-person-fast" aria-labelledby="one-person-fast-h">
        <h2 id="one-person-fast-h" className="post__h2">Fast for one person, slow for the team</h2>
        <p>The developer who ships the whole feature in one PR feels productive, and in a narrow sense they were. Then two reviewers lose an afternoon to it, QA can’t tell which behaviors to test, the release slips while someone untangles a conflict, and a bug that would have been obvious in a small change goes out with everything else. Add it up and the fast path was the slow one. Individual coding speed is easy to see and easy to celebrate. Team throughput is what the business actually gets.</p>
      </section>

      <section id="not-bureaucracy" aria-labelledby="not-bureaucracy-h">
        <h2 id="not-bureaucracy-h" className="post__h2">Smaller doesn’t mean more process</h2>
        <p>Breaking work down takes some thought up front, and not everything needs to be tiny. A one-line config change doesn’t need a story, and a feature that genuinely is one coherent change can be one PR. The test is whether a piece is understandable, reviewable, testable and worth something on its own. Splitting a story into twenty tickets that each depend on the other nineteen fails that test as badly as the original monolith did.</p>
      </section>

      <section id="whose-job" aria-labelledby="whose-job-h">
        <h2 id="whose-job-h" className="post__h2">Whose job this is</h2>
        <p>Both of ours. Product managers define increments that are small and still valuable, which is harder than writing one big requirement and far more useful. Engineering leaders help the team cut the implementation into changes they can review and ship. Neither gets to hand a developer a paragraph and hope. It’s the same reason <Link to="/writing/good-teams-dont-expect-everyone-to-know-everything/">good teams don’t expect everyone to know everything</Link>: shape the work so nobody has to.</p>
        <p>Smaller stories and smaller pull requests solve related but different problems. Stories are about planning, prioritization and delivery. PRs are about review, collaboration and getting the code right. One story often needs several PRs, and that’s fine. The goal was never more tickets. It’s less complexity per step and a shorter distance between writing something and finding out whether it works.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Optimize for the team’s clock</h2>
      <div className="post__close-copy">
        <p className="lead">The fastest engineer on the team can’t make the team fast. The size of the work can.</p>
        <p className="post__close-principle">Good engineering teams measure how long it takes for a change to be understood, reviewed, tested and safely in front of users, not how quickly one person closes a ticket.</p>
        <div className="post__close-actions">
          <Link to="/leadership/#execution" className="action">How I improve execution with small, safe changes <ArrowRight /></Link>
          <Link to="/contact/" className="link-arrow"><span>Talk about how your team ships</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
