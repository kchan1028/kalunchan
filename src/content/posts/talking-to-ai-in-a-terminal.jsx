import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Reflective learning post. Facts from the site: KC's first computers ran DOS;
// he worked in a carrier NOC, administered Linux, configured routers and
// switches, and automated deployments with Expect and KornShell scripts; he
// uses Claude Code daily as a tool. Product names checked: Claude Code and
// OpenAI's Codex CLI are terminal tools; ChatGPT is a web and desktop app.
// The error-fixing example is illustrative and says so. No dates, no
// employers, no invented dialogue.

export const toc = [
  ['familiar', 'The familiar part'],
  ['changed', 'What changed'],
  ['why-terminal', 'Why the terminal never went away'],
  ['example', 'Remembering a command versus describing a problem'],
  ['leadership', 'What it means for the people I lead'],
  ['reflection', 'Same prompt, different conversation'],
];

// Fig. 692-1: three prompts, same shape. The DOS and Expect exchanges are
// generic; the AI exchange is illustrative and the caption says so.
const prompts = [
  {
    id: 'dos', era: 'DOS', screen: 'C:\\> copy report.txt a:\\\n        1 file(s) copied\nC:\\> _',
    you: 'The exact command, flags and paths, from memory.',
    machine: 'Runs it. Nothing more.',
    judgment: 'Yours, before you press Enter.',
  },
  {
    id: 'expect', era: 'Expect script, carrier NOC', screen: 'spawn ssh router01\nexpect "#"\nsend "show int summary\\r"\nexpect "#"',
    you: 'The exact steps, written once in a script.',
    machine: 'Types them for you, on a schedule, on every device in the list.',
    judgment: 'Yours, when you wrote and reviewed the script.',
  },
  {
    id: 'ai', era: 'AI assistant in the terminal', change: true, screen: '> api won\'t start, find out why\n\n  api.log: port 8080 is held by\n  an older instance (pid 4312).\n  Stop it and restart? [y/N] _',
    you: 'The intent, in your own words.',
    machine: 'Reads the files, works out the cause, proposes the commands.',
    judgment: 'Yours, when you approve. The commands run with your permissions.',
  },
];

function Prompts() {
  return (
    <figure className="term post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 692-1</span> Three prompts, one shape, and the one row that changed
        <span className="journey__key label">The first two exchanges are generic; the third is illustrative, not a transcript. In every column the commands run with real permissions.</span>
      </figcaption>
      <div className="term__grid">
        {prompts.map((p) => (
          <div key={p.id} className={`term__col${p.change ? ' is-change' : ''}`}>
            <div className="term__win">
              <p className="term__bar label">{p.era}</p>
              <pre className="term__screen"><code>{p.screen}</code></pre>
            </div>
            <dl className="term__rows">
              <div className="term__row term__row--you">
                <dt className="label">You supply</dt>
                <dd>{p.you}</dd>
              </div>
              <div className="term__row">
                <dt className="label">The machine supplies</dt>
                <dd>{p.machine}</dd>
              </div>
              <div className="term__row">
                <dt className="label">The judgment</dt>
                <dd>{p.judgment}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <p className="term__same"><span className="mono">Unchanged</span> A prompt, text in, text out, and real effects on the machine. <span className="mono term__changed">Changed</span> Who speaks the machine’s language.</p>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="familiar" aria-labelledby="familiar-h">
        <h2 id="familiar-h" className="post__h2">The familiar part</h2>
        <p>Most of my working day now happens in a terminal window, talking to an AI assistant. Claude Code is the one I use most; OpenAI’s Codex CLI does the same job from the same kind of window. A prompt, something typed, text coming back, and then a file changes or a command runs. That is why it felt so comfortable the first time I noticed: it is where I started.</p>
        <p>My first computers ran DOS, a story I told in <Link to="/writing/from-dos-to-ai-thirty-years-of-technology/">from DOS to AI</Link>. A blinking cursor, a drive letter, and the understanding that nothing would happen until I typed something correct. Later it was Unix shells, router consoles and a Network Operations Center, where the screen was still text and the work was still typed. We spent the next two decades building graphical interfaces so people would never have to do that. And here I am, back at a prompt, with the satisfaction of making something happen without clicking through a single menu.</p>
        <p className="post__answer">Talking to an AI assistant in a terminal feels like the command line of the DOS and early Unix years because the shape is identical: a prompt, typed instructions, text output, and real effects on the machine. What is different is the language. The old prompt needed exact syntax. The new one accepts intent.</p>
        <Prompts />
      </section>

      <section id="changed" aria-labelledby="changed-h">
        <h2 id="changed-h" className="post__h2">What changed</h2>
        <p>DOS and the Unix shells were unforgiving in a way younger engineers may not have met. The command had to be right: the name, the flags, the order, the path. A typo was an error, or worse, a different command. You learned by reading manuals, by trial, and by remembering, which is why so much of early expertise was simply knowing the incantations. I wrote about letting go of that in <Link to="/writing/you-dont-need-to-remember-everything/">you don’t need to remember everything</Link>, and the terminal assistants are the strongest version of the argument.</p>
        <p>Claude Code and Codex CLI interpret what I mean. I can describe the outcome, and the assistant proposes the command, reads the files, edits them, runs the tests and reads the error back to me when something fails. It can look at a stack trace and suggest where the bug is. It can draft a script I would have written from memory, badly, in twenty minutes.</p>
        <p>What has not changed is the part underneath. When the assistant runs a command, the command runs, with my user’s permissions and the consequences that go with them. A deleted directory is deleted. A migration against the wrong database is applied. The natural-language layer makes the terminal approachable. It does not make it safe. I still read what it is about to run before it runs, the way I read a script before I executed it in a data center.</p>
      </section>

      <section id="why-terminal" aria-labelledby="why-terminal-h">
        <h2 id="why-terminal-h" className="post__h2">Why the terminal never went away</h2>
        <p>The terminal survived the graphical era for reasons that have nothing to do with nostalgia. Anything you can type you can script, and anything you can script you can repeat exactly, on a schedule, on a hundred machines. Remote access is a terminal by nature; the server on the other side of an SSH session has no desktop. And the Unix habit of small tools joined by pipes turned out to be the most durable idea in computing: each tool does one thing, the output of one becomes the input of the next, and the combination does something none of them could alone.</p>
        <p>I spent years inside that model. On the carrier network we automated deployments and routine operations with Expect and KornShell scripts, which I described in <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">DevOps from Expect scripts to AI agents</Link>. Expect is a good example of the lineage: it typed into a console so a person did not have to, waited for the prompt, and typed the next thing. The AI assistant in my terminal is Expect’s descendant. It types into the console so I do not have to, and it decides what to type by understanding what I asked for.</p>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">Remembering a command versus describing a problem</h2>
        <p>Here is an illustrative version of the difference, not a transcript of anything in particular. A service will not start. The old way: remember which log to read and the command that tails it, spot the line that matters, remember the command that shows what holds the port, work out that a previous instance is still running, remember how to find and stop it, restart, and tail the log again. Six commands, each from memory, each with its own flags.</p>
        <p>The new way: tell the assistant the service will not start and ask it to find out why. It reads the log, notices the port conflict, finds the process, explains the cause, and proposes the fix, which is the same six commands, now shown to me for approval. I read them, I agree, it runs them. The work done is identical. What I supplied was the intent and the judgment; what the assistant supplied was the recall and the typing.</p>
        <p>I would not want to pretend the first way was better. It was slower, and the recall was a skill I kept sharp mainly because I had no choice. I would also not want to pretend the second way removes the need to understand what happened. If the proposed fix had been to stop the wrong process, the only thing standing between the assistant and a worse outage is a person who reads the command and knows what it does.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">What it means for the people I lead</h2>
        <p>A more approachable interface is good news for anyone starting out. The command line used to gate the work behind months of memorization, and now a new engineer can be useful in a terminal in their first week. I welcome that without reservation.</p>
        <p>It also moves the bar rather than lowering it. When execution is nearly free, the scarce things are knowing what you want, saying it clearly, and recognizing when what you got is wrong. Reviewing a change the assistant made is the same discipline as reviewing a pull request from a fast colleague who has not been with the company long: trust the work, check the work, and check harder when it touches production. Verifying results, by running the tests, reading the output and looking at the system afterwards, is not a step the assistant can take for you, because it is the step that decides whether you believe the assistant. I wrote about keeping that line in <Link to="/writing/building-software-before-and-after-ai/#hasnt-changed">what hasn’t changed about building software</Link>, and I hold the people I lead to it as much as I hold myself.</p>
      </section>

      <section id="reflection" aria-labelledby="reflection-h">
        <h2 id="reflection-h" className="post__h2">Same prompt, different conversation</h2>
        <p>So the interface feels familiar, and I think the feeling is honest. A prompt and a cursor, text in and text out, a machine that does what the words say. I learned computing that way, kept networks running that way, and automated operations that way with scripts that typed on my behalf.</p>
        <p>What changed is who the words are for. In DOS and in every shell since, I spoke the machine’s language and the machine did exactly what I said. Now I speak my own language and the assistant works out what I meant, then asks me to confirm what it is about to do. The prompt looks the same, but I now describe intent and approve the commands. I was never more at home in an interface, and I have never had to pay closer attention to what I say in one.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Describing a task at the prompt</h2>
      <div className="post__close-copy">
        <p className="lead">Decades after DOS, I am back at a prompt. The difference is that I describe what I want and read what the assistant proposes before it runs.</p>
        <p className="post__close-principle">Approachable interfaces help people start. Understanding the system, reviewing the change and verifying the result are still the job.</p>
        <div className="post__close-actions">
          <Link to="/writing/#chapter-lab" className="action">More from the lab <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
