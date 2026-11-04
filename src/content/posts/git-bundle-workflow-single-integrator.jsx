import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Runbook for a team where only one integrator can push to GitHub and the other developers exchange
// commits as Git bundles. General practice, not a claimed incident: first person is used only for
// recommendations and for the command test. The bundle create/verify/clone/fetch, --no-ff merge,
// merge-base --is-ancestor, for-each-ref --merged, incremental baseline and branch --merged steps were
// run end to end on Git 2.54 in a scratch repository (4 November 2026); that run showed `git bundle verify`
// needs an existing repository. format-patch/am, revert -m 1 and the rebase-and-resubmit path were not
// executed; they follow the Git manuals and howto listed in `sources` (meta/).

const gitBundle = 'https://git-scm.com/docs/git-bundle';
const revertHowto = 'https://git-scm.com/docs/howto/revert-a-faulty-merge';
const ghAttribution = 'https://docs.github.com/en/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user';
const ghProtected = 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches';

const C = ({ children }) => <code className="post__tok">{children}</code>;

function Code({ title, children }) {
  return (
    <div className="post__code">
      <div className="post__code-bar"><span className="label">{title}</span></div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

export const toc = [
  ['assumptions', 'What this assumes'],
  ['setup', 'Initial setup'],
  ['ownership', 'Task ownership'],
  ['bundles-vs-patches', 'Bundles or patch files'],
  ['exchange', 'Exchanging work'],
  ['integration', 'Integration'],
  ['coordination', 'Daily coordination'],
  ['beyond', 'Moving beyond it'],
  ['first-day', 'First-day checklist'],
  ['sources', 'Sources'],
];

function Tracker() {
  const rows = [
    ['T-101', 'Password reset email', 'Dev A', 'task/T-101-password-reset', 'baseline-001', 'none', 'auth/', 'Submitted v1'],
    ['T-102', 'Invoice PDF export', 'Dev B', 'task/T-102-invoice-pdf', 'baseline-001', 'none', 'billing/', 'In progress'],
    ['T-103', 'Search pagination', 'Dev C', 'task/T-103-search-pagination', 'baseline-001', 'T-101', 'search/', 'Blocked'],
  ];
  const cols = ['Owner', 'Branch', 'Baseline', 'Depends on', 'Area', 'Status'];
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 726-1</span> A task tracker for three developers and one integrator</caption>
        <thead><tr><th scope="col">Task</th>{cols.map((c) => <th scope="col" key={c}>{c}</th>)}</tr></thead>
        <tbody>
          {rows.map(([id, task, ...rest]) => (
            <tr key={id}>
              <th scope="row">{id} {task}</th>
              {rest.map((v, i) => <td key={cols[i]} data-col={`${cols[i]}:`}>{v}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

function Comparison() {
  const rows = [
    ['What arrives', 'The exact commits, with the same IDs', 'Text diffs that become new commits'],
    ['Authorship', 'Author and committer preserved', 'Author and date preserved; the integrator becomes the committer'],
    ['Already merged?', 'Git can tell by commit ID', 'Only by comparing patch content with git cherry'],
    ['Binary files and merges', 'Handled', 'Binary diffs work; merge commits don’t travel'],
    ['Readable without Git', 'No', 'Yes, in any text viewer'],
    ['Integrity check', 'git bundle verify checks the format and prerequisite commits', 'None built in'],
    ['When main has moved', 'Still imports; conflicts show up at merge time', 'git am can stop partway; git am -3 helps'],
  ];
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 726-2</span> Git bundles and patch files as the exchange format</caption>
        <thead><tr><th scope="col">Question</th><th scope="col">Git bundle</th><th scope="col">Patch files</th></tr></thead>
        <tbody>
          {rows.map(([q, b, p]) => (
            <tr key={q}><th scope="row">{q}</th><td data-col="Bundle:">{b}</td><td data-col="Patches:">{p}</td></tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

// Fig. 726-3: one round of the loop as lanes. Each step sits in the lane where it happens, so the zigzag
// shows work crossing the handoff folder twice and reaching GitHub only through the integrator.
const lanes = ['Developer', 'Handoff folder', 'Integrator', 'GitHub'];
const round = [
  { lane: 2, text: <>Pull <C>main</C>, tag <C>baseline-001</C>, scan for secrets, bundle it</> },
  { lane: 1, text: <><C>baseline-001.bundle</C> and its checksum</> },
  { lane: 0, text: <>Check the checksum, clone, branch <C>task/T-101</C> from the baseline</> },
  { lane: 0, text: <>Bundle <C>baseline-001..task/T-101</C> and verify it</> },
  { lane: 1, text: <><C>T-101-v1.bundle</C>, checksum and handoff note</> },
  { lane: 2, text: <>Verify, fetch into <C>refs/contrib/</C>, review, merge <C>--no-ff</C>, test</>, loop: true },
  { lane: 3, text: <><C>main</C> pushed</> },
  { lane: 1, text: <><C>baseline-002.bundle</C>, tagged and bundled by the integrator</> },
  { lane: 0, text: <>Fetch the new baseline. Accepted branches show as merged</> },
];

function RoundTrip() {
  return (
    <figure className="post__figure lanes" aria-labelledby="lanes-cap">
      <p id="lanes-cap" className="lanes__cap"><span className="mono">Fig. 726-3</span> One integration round. Work crosses the handoff folder twice and reaches GitHub only through the integrator</p>
      <div className="lanes__head" aria-hidden="true">
        {lanes.map((l) => <span key={l} className="label">{l}</span>)}
      </div>
      <ol className="lanes__steps">
        {round.map((s, i) => (
          <li key={i} className={s.loop ? 'lanes__step has-loop' : 'lanes__step'} style={{ '--lane': s.lane + 1 }}>
            <span className="lanes__no mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="lanes__lane label">{lanes[s.lane]}</span>
            <span className="lanes__text">{s.text}</span>
            {s.loop && <span className="lanes__loop">A conflict that isn’t obvious, or changes requested: <C>git merge --abort</C>, then the author rebases onto the next baseline and sends <C>T-101-v2</C>.</span>}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function Body({ metadata: { sources } }) {
  return (
    <>
      <section id="assumptions" aria-labelledby="assumptions-h">
        <p className="post__answer">When only one person can push to a GitHub repository, the other developers can still contribute. They work in ordinary local Git clones, send their commits as Git bundles through a file channel the company already approves, and the integrator reviews, merges and pushes. Nobody shares a GitHub password, token or SSH key, and every commit keeps its real author.</p>
        <p>This is the setup I’d use for three developers and one integrator while access is waiting on a contract, an account review or a security approval. The commands use placeholder paths. I ran the bundle flow end to end on Git 2.54 in a throwaway repository before writing them down.</p>
        <h2 id="assumptions-h" className="post__h2">What does this setup assume?</h2>
        <ul className="post__list">
          <li><strong>The repository owner has agreed in writing</strong> that these developers may receive the source code. Get that first. A temporary access problem doesn’t change who is allowed to see the code.</li>
          <li>There is an approved internal channel for files: a company file share, an internal drive folder or an encrypted transfer tool your security team already allows. I’ll call it the handoff folder.</li>
          <li>Everyone has Git installed locally, ideally the same minor version.</li>
          <li>The integrator can run the project’s tests locally. GitHub Actions only runs after the push, so local tests are the real gate here.</li>
          <li>The arrangement lasts weeks, not quarters. If it starts to look permanent, skip to the last section.</li>
        </ul>
        <p>One risk to say out loud: the integrator is now a single point of failure. If they’re sick for two days, nothing ships, which is the same trap as <Link to="/writing/when-your-best-engineer-becomes-a-bottleneck/">a best engineer who becomes the bottleneck</Link>. Ask the repository owner to authorize a backup integrator early, even if they never push.</p>
      </section>

      <section id="setup" aria-labelledby="setup-h">
        <h2 id="setup-h" className="post__h2">How does the integrator prepare a clean baseline?</h2>
        <p>Start from what is actually on GitHub, then tag it so everyone can refer to the same commit by name.</p>
        <Code title="Integrator: tag the baseline">{`cd /path/to/project
git status --short                 # must print nothing
git switch main
git pull --ff-only origin main
git tag -a baseline-001 -m "Baseline 001"`}</Code>
        <p>Before sharing anything, run a secret scanner such as Gitleaks or TruffleHog over the history you are about to hand out. A bundle carries every committed object in the range, including a key that was committed last year and deleted the next day. If the scan finds something, rotate the credential and talk to the owner before going further.</p>
        <Code title="Integrator: create the baseline bundle">{`git bundle create /path/to/outbox/baseline-001.bundle main baseline-001
git bundle verify /path/to/outbox/baseline-001.bundle
shasum -a 256 /path/to/outbox/baseline-001.bundle > /path/to/outbox/baseline-001.bundle.sha256`}</Code>
        <p>A bundle contains commits and refs only. Per the <a href={gitBundle}><C>git bundle</C> manual</a>, it leaves out the working tree, stash, per-repository config and hooks, so the integrator’s <C>origin</C> URL and credential helper settings stay behind. Copy both files to the handoff folder.</p>

        <h3 className="post__h3">How do developers receive it without GitHub access?</h3>
        <p><C>git bundle verify</C> needs an existing repository, so on a fresh machine check the checksum and let the clone do the rest. Calling the remote <C>baseline</C> instead of <C>origin</C> makes it obvious that it points at a file from the integrator and not at GitHub.</p>
        <Code title="Developer: clone from the bundle">{`cd /path/to/inbox
shasum -a 256 -c baseline-001.bundle.sha256
git clone --branch main /path/to/inbox/baseline-001.bundle /path/to/project
cd /path/to/project
git remote rename origin baseline`}</Code>

        <h3 className="post__h3">How does each developer set their commit identity?</h3>
        <Code title="Developer: set your identity">{`git config user.name  "Your Name"
git config user.email "you@company.example"`}</Code>
        <p>Use the email you will add to your GitHub account later. GitHub <a href={ghAttribution}>links commits to accounts by email</a>, so once you do get access, this period’s commits show up under your name.</p>
      </section>

      <section id="ownership" aria-labelledby="ownership-h">
        <h2 id="ownership-h" className="post__h2">How should the team divide the work?</h2>
        <p>One task, one branch, one owner. Name branches after the tracker ID, such as <C>task/T-101-password-reset</C>, and always branch from the latest baseline tag:</p>
        <Code title="Developer: start a task">{`git switch -c task/T-101-password-reset baseline-001`}</Code>
        <p>To reduce overlapping edits, divide work by area of the codebase rather than by layer. One person owns the billing module this week, another owns search. Conflicts come from the files everyone touches: lockfiles, route tables, database migrations and shared config. Give each of those a single owner per cycle, or let the integrator make those edits. If two tasks both need a migration, the integrator assigns the migration numbers.</p>
        <p>A shared spreadsheet or a Markdown file in the handoff folder is enough for the tracker. It needs the owner, the branch, the baseline the work started from and any dependency on another task.</p>
        <Tracker />
        <p>Keep the status values fixed: To do, In progress, Blocked, Submitted vN, Changes requested, Accepted in baseline-NNN and Reverted. The baseline column tells the integrator which prerequisite commit the bundle should need.</p>
      </section>

      <section id="bundles-vs-patches" aria-labelledby="bundles-vs-patches-h">
        <h2 id="bundles-vs-patches-h" className="post__h2">Should you exchange Git bundles or patch files?</h2>
        <Comparison />
        <p>Use bundles by default. Identical commit IDs make duplicate detection, acceptance tracking and reverts much simpler, and <C>verify</C> catches a wrong baseline before anyone wastes time on it. Patch files from <C>git format-patch</C> are fine for a one-commit fix that someone wants to read in the channel before it is applied.</p>
      </section>

      <section id="exchange" aria-labelledby="exchange-h">
        <h2 id="exchange-h" className="post__h2">How do contributions move between developers and the integrator?</h2>
        <RoundTrip />
        <h3 className="post__h3">Submitting a contribution</h3>
        <p>The developer checks exactly what is leaving their machine before creating anything:</p>
        <Code title="Developer: check what you’re sending">{`git switch task/T-101-password-reset
git status --short                                   # clean, nothing half-done
git log --format='%h %an <%ae> %s' baseline-001..HEAD
git diff --name-only baseline-001..HEAD              # no .env, IDE folders, build output`}</Code>
        <p>If an unrelated file or a secret shows up in that list, a later “remove file” commit won’t help, because the bundle still carries the earlier commit. Rewrite the branch with <C>git rebase -i baseline-001</C>, drop or edit the commit, then check again. A <C>.gitignore</C> that covers <C>.env*</C>, editor folders and build output prevents most of this.</p>
        <Code title="Developer: create the contribution bundle">{`git bundle create /path/to/outbox/T-101-v1.bundle baseline-001..task/T-101-password-reset
git bundle verify /path/to/outbox/T-101-v1.bundle
shasum -a 256 /path/to/outbox/T-101-v1.bundle > /path/to/outbox/T-101-v1.bundle.sha256`}</Code>
        <p>The bundle, the checksum and a handoff note (template below) go into the handoff folder.</p>

        <h3 className="post__h3">Importing a contribution</h3>
        <Code title="Integrator: verify and fetch">{`cd /path/to/project
shasum -a 256 -c /path/to/inbox/T-101-v1.bundle.sha256
git bundle verify /path/to/inbox/T-101-v1.bundle
git bundle list-heads /path/to/inbox/T-101-v1.bundle
git fetch /path/to/inbox/T-101-v1.bundle \\
  task/T-101-password-reset:refs/contrib/dev-a/T-101-v1`}</Code>
        <p>Fetching into <C>{'refs/contrib/<developer>/<task>-v<N>'}</C> keeps every submission apart from the integrator’s own branches and gives each one a permanent name. A revision arrives as <C>T-101-v2</C>, and v1 stays where it was for comparison.</p>

        <h3 className="post__h3">Sending and picking up a new baseline</h3>
        <p>After each integration round, the integrator tags the new state and sends only what changed. A full bundle is worth keeping too, for anyone who joins later or whose clone is missing an earlier baseline.</p>
        <Code title="Integrator: incremental and full baseline">{`git tag -a baseline-002 -m "Baseline 002"
git bundle create /path/to/outbox/baseline-002.bundle baseline-001..main baseline-002
git bundle create /path/to/outbox/baseline-002-full.bundle main baseline-002`}</Code>
        <Code title="Developer: fetch the new baseline">{`git remote set-url baseline /path/to/inbox/baseline-002.bundle
git fetch baseline --tags
git branch --merged baseline/main       # your accepted task branches appear here`}</Code>
        <p>A branch that is still in progress, or came back with changes requested, gets rebased onto the new baseline and submitted as the next version:</p>
        <Code title="Developer: submit a revision">{`git switch task/T-103-search-pagination
git rebase baseline-002
git bundle create /path/to/outbox/T-103-v2.bundle baseline-002..task/T-103-search-pagination`}</Code>
        <p>Rebasing changes the commit IDs, which is why the version number matters. Never rebase a branch that has already been accepted.</p>
      </section>

      <section id="integration" aria-labelledby="integration-h">
        <h2 id="integration-h" className="post__h2">How does the integrator review, merge and push?</h2>
        <h3 className="post__h3">Review and testing checklist</h3>
        <ul className="post__list">
          <li>The checksum matches and <C>git bundle verify</C> passes.</li>
          <li>The bundle holds exactly one branch, and it matches the handoff note.</li>
          <li>Every commit’s author name and email are the developer’s own.</li>
          <li><C>git diff --stat main...refs/contrib/dev-a/T-101-v1</C> touches only the task’s area.</li>
          <li>The diff has no secrets, <C>.env</C> files, local config, build output or large binaries.</li>
          <li>The change does what the tracker says. Read the diff as well as the summary.</li>
          <li>Any dependency named in the note is already accepted.</li>
          <li>Tests and the linter pass on the merged result, as well as on the branch.</li>
          <li>New migrations use the number the integrator assigned.</li>
        </ul>

        <h3 className="post__h3">The integration loop</h3>
        <Code title="Integrator: merge one contribution">{`git switch main
git pull --ff-only origin main
git merge-base --is-ancestor refs/contrib/dev-a/T-101-v1 main && echo "already merged"
git merge --no-ff refs/contrib/dev-a/T-101-v1 -m "Merge T-101 v1 from Dev A"
# run tests and linters here
git push origin main`}</Code>
        <p><C>--no-ff</C> keeps one merge commit per contribution. That gives you one commit to point at when you announce acceptance and one commit to revert if something goes wrong. Merge one contribution at a time and run the tests between merges. When several land in one round, merge anything others depend on first, then the rest smallest first.</p>

        <h3 className="post__h3">Resolving conflicts with the author</h3>
        <p>If the merge conflicts in a file or two and the right answer is obvious, resolve it in the merge commit and mention it in the acceptance note. For anything else, run <C>git merge --abort</C> and send it back. Mark the task Changes requested, cut a new baseline that includes whatever caused the conflict, and let the author rebase and submit the next version. The author understands the intent of the change better than the integrator does, and resolving conflicts in someone else’s code is how subtle bugs get in.</p>

        <h3 className="post__h3">Avoiding the same contribution twice</h3>
        <p>Because bundle commits keep their IDs, Git can answer this directly. The <C>merge-base --is-ancestor</C> line in the loop above stops a repeat merge, and this lists every submission already in <C>main</C>:</p>
        <Code title="Integrator: list accepted submissions">{`git for-each-ref --merged main --format='%(refname)' refs/contrib/`}</Code>
        <p>For a contribution that arrived as patch files, use <C>{'git cherry -v main <branch>'}</C>. Lines starting with <C>-</C> already exist upstream under a different commit ID.</p>

        <h3 className="post__h3">Reverting a problematic contribution</h3>
        <p>Don’t rewrite <C>main</C> on GitHub. Revert the merge commit instead:</p>
        <Code title="Integrator: revert a merged contribution">{`git log --merges --oneline -10              # find the merge commit
git revert -m 1 <merge-commit-sha>
# run tests
git push origin main`}</Code>
        <p><C>-m 1</C> keeps the mainline side and undoes what the contribution brought in. Git’s own guide to <a href={revertHowto}>reverting a faulty merge</a> describes the catch: if the author fixes the branch and you merge it again, Git treats the original commits as already merged. Either revert the revert first, or have the author send the fix as new commits on a fresh baseline. Mark the task Reverted in the tracker with the reason.</p>
      </section>

      <section id="coordination" aria-labelledby="coordination-h">
        <h2 id="coordination-h" className="post__h2">What does daily coordination look like?</h2>
        <p>Every submission comes with the same short note, so the integrator never has to ask what a bundle contains:</p>
        <Code title="Handoff template">{`Task:              T-101 Password reset email
Developer:         Dev A <dev-a@company.example>
Branch:            task/T-101-password-reset
Version:           v1
Baseline commit:   baseline-001 (<short SHA>)
Bundle:            T-101-v1.bundle (sha256 in T-101-v1.bundle.sha256)
Included commits:  <output of git log --oneline baseline-001..HEAD>
Tests:             <commands run and result>
Known issues:      <anything unfinished, risky or needing a decision>
Depends on:        none`}</Code>
        <p>For three developers I’d start with two integration windows a day, one late morning and one mid-afternoon. Whatever is in the handoff folder by the window gets reviewed in that window. A new baseline goes out after each window, even if only one contribution landed, so nobody drifts more than half a day. If reviews keep spilling past the window, the tasks are too big, and <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller stories and pull requests</Link> will help more than extra windows.</p>
        <p>After each window, post one message in the team channel and update the tracker to match. Developers confirm on their side with <C>git branch --merged baseline/main</C> after fetching the new baseline.</p>
        <Code title="Acceptance message">{`baseline-004 is in the handoff folder (main at <short SHA>, pushed to GitHub)
Accepted:          T-101 v1 (Dev A), T-104 v2 (Dev C)
Changes requested: T-102 v1 (Dev B): conflict in billing/routes, rebase on baseline-004
Reverted:          none`}</Code>
      </section>

      <section id="beyond" aria-labelledby="beyond-h">
        <h2 id="beyond-h" className="post__h2">How do you move beyond the temporary setup?</h2>
        <p>The goal is to retire this runbook. Once the owner approves access:</p>
        <ul className="post__list">
          <li>Each developer gets their own GitHub account, added to the organization or as a collaborator with Write permission, ideally through a team so access is easy to remove later.</li>
          <li>Turn on <a href={ghProtected}>branch protection</a> for <C>main</C>: pull requests required, at least one approving review and required status checks. The integrator becomes a reviewer instead of a gatekeeper.</li>
          <li>Each developer adds the commit email they set on day one to their GitHub account, so the history from this period links to them.</li>
          <li>Developers point their clones at GitHub with <C>{'git remote add origin <repository URL>'}</C>, push any unaccepted task branches and open pull requests from them.</li>
          <li>Delete the bundles from the handoff folder once everything is on GitHub.</li>
        </ul>
        <p>An approved internal Git server makes more sense than bundles when the restriction will last more than a few weeks, when the team grows past four or five people, when the integrator spends more time moving files than reviewing code, or when policy rules out external accounts for these developers. A self-managed GitLab or Gitea instance gives you pull requests and permissions. For a short stretch, even a bare repository on an internal SSH host removes the file shuffling. Whichever you pick, the security team has to approve where the code lives.</p>
      </section>

      <section id="first-day" aria-labelledby="first-day-h">
        <h2 id="first-day-h" className="post__h2">A first-day checklist</h2>
        <h3 className="post__h3">Before anyone gets code</h3>
        <ul className="post__list">
          <li>Written approval from the repository owner naming the developers who may receive the source.</li>
          <li>The approved handoff folder exists, and only the four of you can open it.</li>
          <li>A backup integrator is named, or the risk is accepted in writing.</li>
          <li>The history being shared has been scanned for secrets, and anything found has been rotated.</li>
        </ul>
        <h3 className="post__h3">Integrator</h3>
        <ul className="post__list">
          <li>A clean <C>main</C>, tagged <C>baseline-001</C>.</li>
          <li>The baseline bundle and checksum created, verified and copied to the handoff folder.</li>
          <li>The tracker started with the first tasks, owners, areas and dependencies.</li>
          <li>Owners assigned for lockfiles, routes, migrations and shared config.</li>
          <li>Integration windows and the acceptance message format announced.</li>
        </ul>
        <h3 className="post__h3">Each developer</h3>
        <ul className="post__list">
          <li>The checksum matches, the clone came from the bundle and the remote is renamed to <C>baseline</C>.</li>
          <li><C>user.name</C> and <C>user.email</C> match the identity you’ll use on GitHub.</li>
          <li><C>.gitignore</C> covers <C>.env*</C>, editor folders and build output.</li>
          <li>The first task branch is created from <C>baseline-001</C>.</li>
          <li>The project builds and its tests pass locally before any changes.</li>
        </ul>
        <h3 className="post__h3">By the end of day one</h3>
        <ul className="post__list">
          <li>At least one small contribution has gone through the whole loop: bundle, verify, review, merge, push, new baseline and acceptance message.</li>
          <li>Anything that felt awkward is written down and fixed before day two.</li>
        </ul>
      </section>

      <section id="sources" aria-labelledby="sources-h">
        <h2 id="sources-h" className="post__h2">Sources</h2>
        <ul className="post__list">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url}>{s.label}</a></li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Where to start</h2>
      <div className="post__close-copy">
        <p className="lead">Push one small change through the whole loop on the first day, before anyone starts real work. Most of what goes wrong with this setup shows up in that first round.</p>
        <div className="post__close-actions">
          <Link to="/writing/smaller-user-stories-and-pull-requests/" className="action">Smaller stories and pull requests <ArrowRight /></Link>
          <Link to="/writing/code-review-in-the-ai-era/" className="link-arrow"><span>Code review in the AI era</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
