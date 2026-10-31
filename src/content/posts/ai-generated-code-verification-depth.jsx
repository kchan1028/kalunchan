import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// AI-generated code and how deeply to verify it. Source: KC's brief (Oct 20 2026). Werner Vogels quotes checked on
// 2026-10-20 against the auto-generated captions of the official keynote video (AWS re:Invent 2025, closing keynote,
// Dec 4 2025, youtube.com/watch?v=3Y1G9najGiI): "the work is yours, not that of the tools" (~14:04, ~56:58);
// "You will write less code… you will review more code because understanding it takes time" (~57:11);
// "verification debt" (~57:39); "AI can generate code faster than you can understand it. Code arrives instantly,
// but comprehension does not." (~57:50); "the craft is still learned person to person" (~65:09); five qualities
// recapped at ~71:28 (curious, systems, communicate with precision, owner, polymath; T-shaped ~69:30); his final
// re:Invent keynote (~6:36). The session title in KC's brief isn't in any source, so the talk is described as his
// closing keynote. Career facts from profile.md and existing posts (carrier network, Expect/Korn shell, C++ VoIP
// apps for Nokia, Asterisk/OpenSIPS, Rails re-platform, racked servers then AWS). The five verification levels are
// KC's illustration, labelled as such. Juniors research and the review-by-risk table already live in 703 and 704,
// so this post links to them. No incidents, metrics or anecdotes invented.

export const toc = [
  ['moved', 'Each abstraction moved the complexity'],
  ['debt', 'Code arrives instantly, comprehension doesn’t'],
  ['levels', 'Five levels of verification depth'],
  ['risk', 'How deep is deep enough?'],
  ['cost', 'Understanding is now the expensive part'],
  ['juniors', 'How will juniors learn to spot a wrong answer?'],
  ['breadth', 'Broad enough to ask the right questions'],
  ['leaders', 'What changes for engineering leaders'],
  ['learning', 'I’m still adjusting too'],
  ['sources', 'Sources'],
];

// ---------- Fig. 717-1: five levels of verification depth ----------
// KC's illustration, not an industry standard.
const levels = [
  ['1. Does it run?', 'It compiles, starts and the tests pass', 'Syntax errors, missing imports, obvious breakage'],
  ['2. Does it solve the right problem?', 'It meets the real requirement, edge cases included, without extra complexity', 'A correct answer to the wrong question'],
  ['3. Does it fit the system?', 'Queries, API contracts, authorization, errors, concurrency, data and cost all hold up', 'A function that works alone and hurts something else'],
  ['4. Do we understand how it fails?', 'Behavior under load, with failed dependencies and odd input, and who can debug it', 'The incident nobody on the team can explain'],
  ['5. Can we trust it in production?', 'Independent testing, security review, observability, safe rollout and rollback, an owner', 'A change nobody can watch, undo or answer for'],
];

function Levels() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 717-1</span> Five levels of verification depth</caption>
        <thead><tr><th scope="col">Level</th><th scope="col">What it establishes</th><th scope="col">What it catches that earlier levels miss</th></tr></thead>
        <tbody>{levels.map(([level, what, catches]) => <tr key={level}><th scope="row">{level}</th><td>{what}</td><td>{catches}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">My own illustration, not an industry standard. Each level assumes the ones before it, and most changes don’t need all five.</figcaption>
    </figure>
  );
}

export default function Body({ metadata: { sources } }) {
  return (
    <>
      <section id="moved" aria-labelledby="moved-h">
        <h2 id="moved-h" className="post__h2">Each abstraction moved the complexity</h2>
        <p>I’ve watched the tools change several times. On a carrier network I automated configuration with Expect and Korn shell scripts. I wrote VoIP apps for Nokia phones in C++, built voice platforms on Asterisk and OpenSIPS, moved a publishing platform to Rails, and moved systems out of racked servers into AWS. Each step made some work dramatically easier.</p>
        <p>None of them made the complexity disappear. It moved somewhere else. The cloud meant I stopped racking servers, and capacity planning turned into cost management. Splitting a system into services made each piece easier to change, and turned function calls into network calls that can time out, retry and arrive twice. An ORM hides SQL right up until a page makes a few hundred queries. The work that remained was usually the part that needed someone to understand what was going on underneath.</p>
        <p>AI-assisted development is the latest step, and the biggest one I’ve seen for the speed of turning an idea into working code. I use AI coding tools every day, and I wrote about how in <Link to="/writing/recognizing-ai-generated-code/#how-i-use-it">recognizing AI-generated code</Link>. The complexity hasn’t gone anywhere this time either. It has moved into understanding what was generated.</p>
      </section>

      <section id="debt" aria-labelledby="debt-h">
        <h2 id="debt-h" className="post__h2">Code arrives instantly, comprehension doesn’t</h2>
        <p>Werner Vogels put this well in his closing keynote at AWS re:Invent last December, which he said would be his last. Most of the talk was about what he calls the Renaissance Developer, and one passage stayed with me. “You will write less code, ’cause generation is so fast, you will review more code because understanding it takes time.” When you write code yourself, he said, comprehension comes with the act of writing it. When a machine writes it, that comprehension has to be rebuilt during review, and he called the gap “verification debt.” His summary was blunt: “AI can generate code faster than you can understand it. Code arrives instantly, but comprehension does not.”</p>
        <p>He also said, more than once, that “the work is yours, not that of the tools.” I agree with that completely. When something goes wrong in production, “the AI wrote it” doesn’t explain anything to a customer or a regulator, and it doesn’t help the engineer who gets paged. Whoever accepts the code into the system owns it.</p>
        <p>That leaves a practical question the keynote didn’t try to answer, and it’s the one I think about most when I review my own AI-assisted work. How much do I need to understand before I accept a change?</p>
      </section>

      <section id="levels" aria-labelledby="levels-h">
        <h2 id="levels-h" className="post__h2">Five levels of verification depth</h2>
        <p>I find it useful to think about verification as depth. These levels are my own way of describing it, not a formal standard, and each one assumes the ones before it.</p>
        <Levels />

        <h3 className="post__h3">Level 1: Does it run?</h3>
        <p>The code compiles, the application starts, the tests pass, and the feature appears to work when I click through it. This is where AI-generated code is strongest, and also where it’s most convincing. When the same tool writes the code and the tests, the tests can pass with the bug still in place, which I showed in <Link to="/writing/recognizing-ai-generated-code/#tests-pass">an earlier post</Link>. Running proves very little about correctness.</p>

        <h3 className="post__h3">Level 2: Does it solve the right problem?</h3>
        <p>Here I check the implementation against what was actually needed. Does it meet the requirement as the user would describe it? Does it handle the empty list, the duplicate submission and the record that’s halfway through being edited? And did it solve the problem with roughly the amount of code the problem deserves? Generated code tends to be thorough in places nobody asked for, and every extra branch is something to test and maintain.</p>

        <h3 className="post__h3">Level 3: Does it fit the system?</h3>
        <p>A function can be correct on its own and still cause problems around it. This level asks how it behaves with everything else: whether the query uses an index or scans a large table, whether an API change breaks an existing client, whether authorization is checked on the object as well as the route, how errors propagate, what happens when two requests change the same record, whether the data stays consistent, and what it adds to the infrastructure bill. An AI tool only sees the context it was given, and most of a real system lives outside that context.</p>

        <h3 className="post__h3">Level 4: Do we understand how it fails?</h3>
        <p>Every system fails eventually, so the question is whether we know how this part will fail. What happens under load, when a dependency times out, or when the input is something nobody planned for? Can someone troubleshoot it in production at two in the morning from the logs it writes? Can another engineer change it safely next year? Code I can’t explain is code I can’t debug, however clean it looks.</p>

        <h3 className="post__h3">Level 5: Can we trust it in production?</h3>
        <p>The last level is operational. The change has been tested by something other than the tool that wrote it, security-sensitive parts have had a real review, performance has been checked against realistic data, there is enough observability to see it misbehave, the rollout can be stopped and rolled back, and someone owns it afterward. This is where the familiar practices of running production systems come back in, and none of them got easier because the code was generated.</p>
      </section>

      <section id="risk" aria-labelledby="risk-h">
        <h2 id="risk-h" className="post__h2">How deep is deep enough?</h2>
        <p className="post__answer">How deeply developers should verify AI-generated code depends on the risk of the change. A copy change may only need to run and look right. Code that touches money, permissions, personal data or a production database needs the developer to understand how it fits the system, how it fails and how it will be operated. Every change doesn’t need every level, and I’d rather decide the depth before accepting the code than after something breaks.</p>
        <p>A button label, a layout tweak or an internal report can stop at the first two levels. A new API endpoint usually needs the third. A financial calculation, an authentication flow, a permission rule or a database migration needs all five, whoever or whatever wrote it. I went into matching review effort to the type of change in <Link to="/writing/code-review-in-the-ai-era/#risk">code review in the AI era</Link>, and the same thinking applies here from the author’s side: the person accepting generated code should know which level the change needs before they call it done.</p>
        <p>Going deeper than the risk requires has a cost too. If a copy change gets the same scrutiny as a migration, the team slows down for no benefit and people learn to treat review as ceremony. I’m not aiming for the most verification possible. I want enough confidence for what’s at stake.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">Understanding is now the expensive part</h2>
        <p>For most of my career, writing code and understanding it cost roughly the same effort, because they happened together. AI split them apart. Writing a change can now take minutes, while understanding it at level three or four takes about as long as it always did. As writing gets cheaper, understanding becomes a much bigger share of what software costs.</p>
        <p>That shift has consequences beyond the individual developer. If a team can generate more code than it can meaningfully verify, the difference doesn’t disappear. It turns into unverified behavior in production, a review queue that slows everything down, or review that quietly becomes a skim. Verification capacity, mostly the time of people who can judge whether a change is right, becomes the real limit on how fast a team can safely ship.</p>
        <p>I think that changes a few things. When I’m hiring, I care at least as much about whether someone can read unfamiliar code, explain why it’s wrong and debug it as about how fast they can produce it, which ties into why <Link to="/writing/why-hiring-good-engineers-is-so-hard/">hiring good engineers is so hard</Link>. When planning, review and testing time belong in the estimate instead of being squeezed in after the code is “done.” And keeping changes small matters more than ever, because a reviewer can hold a small change in their head and can’t do that with a two-thousand-line pull request. That’s why I keep coming back to <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller stories and pull requests</Link>.</p>
        <p>I also look at the cost per change that’s accepted and stays correct, rather than the cost of producing it. I worked through that comparison in <Link to="/writing/hidden-cost-of-ai-coding/">the hidden cost of AI coding</Link>. A change that took five minutes to generate and two days to untangle wasn’t cheap.</p>
      </section>

      <section id="juniors" aria-labelledby="juniors-h">
        <h2 id="juniors-h" className="post__h2">How will juniors learn to spot a wrong answer?</h2>
        <p>This is the part I’m least sure about. I learned to recognize a bad implementation by writing a lot of them: getting stuck, reading logs, investigating behavior that made no sense, reading other people’s code, and slowly understanding why something failed. That’s where judgment came from. If AI writes most of the first draft, the work left for a junior developer is increasingly verification, which happens to be the work that depends most on judgment they haven’t had the chance to build yet.</p>
        <p>I don’t think AI automatically makes developers less capable, and I don’t think anyone needs to write everything by hand to learn. Used well, an assistant is a patient tutor that will explain a concept five different ways. The early research I covered in <Link to="/writing/ai-learning-curve-future-of-work/#juniors">AI and the learning curve</Link> points the same way: people who used AI to explain and question code scored much higher than people who handed the whole task over. How someone uses the tool matters more than whether they have it.</p>
        <p>What changes is that the learning has to be designed on purpose. In practice that means asking juniors to explain generated code in review, in their own words, and to say what they checked. It means some debugging without the assistant, reading code they didn’t write, and owning small changes from start to finish, including what happens after deployment. Vogels made a similar point about code review: more of it person to person, with experienced and newer engineers working through code together. “AI will change many things,” he said, “but the craft is still learned person to person.” That matches why I <Link to="/writing/why-i-enjoy-mentoring/">enjoy mentoring</Link>, and why I think it matters more now.</p>
      </section>

      <section id="breadth" aria-labelledby="breadth-h">
        <h2 id="breadth-h" className="post__h2">Broad enough to ask the right questions</h2>
        <p>Vogels’ Renaissance Developer has five qualities, in his own recap: be curious and keep learning, think in systems, communicate with precision, be an owner, and become a polymath. By polymath he means T-shaped, deep in one area with a working understanding of others. I think breadth is the quality that matters most for verification, because most of the problems at levels three and four sit at the boundary between specialties.</p>
        <p>Take a developer who generates a database-backed API endpoint. They don’t need to be a database administrator, a security engineer and an SRE. They do need to know enough to ask whether the query will use an index as the table grows, whether a user can read another user’s record by changing an ID, whether the list endpoint is paginated, what happens when the database is slow, and what the endpoint will cost to run. Just as important, they need to recognize when the answer is beyond them and bring in someone who knows more. I wrote about that range in <Link to="/writing/generalist-advantage-in-the-ai-era/">the generalist advantage in the AI era</Link>.</p>
        <p>That’s also why I don’t expect any one engineer to cover every specialty. <Link to="/writing/good-teams-dont-expect-everyone-to-know-everything/">Good teams don’t expect everyone to know everything</Link>. They make it normal to ask, so the person who knows the database or the security model gets pulled in before the change ships, and everyone else learns a little in the process.</p>
      </section>

      <section id="leaders" aria-labelledby="leaders-h">
        <h2 id="leaders-h" className="post__h2">What changes for engineering leaders</h2>
        <p>When implementation gets faster, the familiar measures of productivity get less meaningful. More pull requests, more lines or more tickets closed can simply mean more code that someone has to understand and maintain. More generated code doesn’t automatically mean more business value. The questions I find more useful are these:</p>
        <ul className="post__list">
          <li>Are we solving the right problems, or building faster in the wrong direction?</li>
          <li>Do our code reviews verify anything, or have they become approvals?</li>
          <li>Can the author of a change explain how it works and how it fails?</li>
          <li>Is AI adding maintenance cost we aren’t counting yet?</li>
          <li>Are junior engineers building judgment, or only producing output?</li>
          <li>Can the team operate and debug what it ships?</li>
        </ul>
        <p>I push back on unnecessary complexity a lot, and I wrote about why in <Link to="/writing/what-engineering-leadership-actually-does/#simpler">what engineering leadership actually does</Link>. AI raises the stakes. It costs almost nothing to generate an elaborate implementation with extra configuration, abstraction layers and options nobody asked for, and every bit of it still has to be understood, tested and maintained by people. A simpler solution is easier to verify at every level in the table above. Being able to generate more software doesn’t mean we should build more software.</p>
      </section>

      <section id="learning" aria-labelledby="learning-h">
        <h2 id="learning-h" className="post__h2">I’m still adjusting too</h2>
        <p>I don’t have this worked out. I’m still finding where the depth should sit for different kinds of work, and the right answer isn’t always obvious until after a change has been running for a while. I expect it to keep shifting as the tools improve and as I learn which of my checks actually catch problems.</p>
        <p>These are my views from my own work and the teams I’ve led. Other teams, with different systems and different risks, may reasonably land somewhere else.</p>
      </section>

      <section id="sources" aria-labelledby="sources-h">
        <h2 id="sources-h" className="post__h2">Sources</h2>
        <p>Quotes were checked against the keynote video in October. The levels, examples and opinions are mine.</p>
        <ul className="post__list">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} rel="noopener" target="_blank">{s.label}</a></li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What happens after the code is generated</h2>
      <div className="post__close-copy">
        <p className="lead">AI has changed how quickly we can turn an idea into working software, and I’m genuinely excited about that. What interests me more and more is what comes after: whether we can explain the code, test it, maintain it, recognize when it’s wrong, and trust it when something unexpected happens. The tools will keep changing, as they always have.</p>
        <p className="post__close-principle">I don’t think the future belongs to the developers who generate the most code. I think it belongs to the ones who understand what they’re building and know how to verify it.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
