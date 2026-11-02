import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// How to practice a skill with AI until you can do it unaided, and when handing the work off is the better call.
// Source: KC's brief (Nov 2026), drafted with Claude; notes in ~/Documents/ChatGPT/Writing/drafts/ai-to-learn-editorial-notes.md.
// The loop, prompt and offloading test are practical advice with no empirical claim. The date bug, project update, profit and
// loss statement and SQL report are invented and framed as examples. The two first-person lines trace to KC's published posts:
// ai-learning-curve-future-of-work (#juniors) and how-i-learn-faster-with-ai.

export const toc = [
  ['job', 'Learning task or delivery task?'],
  ['scores', 'A good result can hide a missing skill'],
  ['loop', 'A loop for learning tasks'],
  ['prompt', 'A tutor prompt you can copy'],
  ['practice', 'What this looks like in practice'],
  ['prerequisites', 'When you don’t know enough to attempt it'],
  ['offloading', 'When offloading is the right call'],
];

const tutorPrompt = `I'm trying to learn [one specific skill]. My goal is to do this without help later, so act as a tutor.

Here is my attempt: [paste it]
Here is where I got stuck: [describe it]

Rules for this conversation:
- Ask me one question or give me one hint at a time, then wait.
- Don't give the full solution unless I write "show me the solution."
- When you review my work, name the most important problem first and explain why it matters.
- Tell me when my reasoning is wrong, even if my final answer is right.
- If you aren't sure about something, say so and tell me how I could check it.`;

function TutorPrompt() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(tutorPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the prompt is still selectable.
    }
  };
  return (
    <div className="post__code post__code--wrap">
      <div className="post__code-bar">
        <span className="label">Tutor prompt</span>
        <button type="button" className="post__copy" onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
          <span className="visually-hidden"> prompt</span>
        </button>
      </div>
      <pre><code>{tutorPrompt}</code></pre>
    </div>
  );
}

export default function Body() {
  return (
    <>
      <section id="job" aria-labelledby="job-h">
        <p className="post__answer">To learn a skill with AI, make the first attempt yourself, ask for the smallest hint that gets you moving, and finish by doing the task again with the chat closed. When you only need the finished work, let AI do as much of it as you can check.</p>
        <p>Both are good uses of the same tool. Trouble starts when you mistake one for the other, because the chat window offers the same fast answer to both.</p>
        <h2 id="job-h" className="post__h2">Learning task or delivery task?</h2>
        <p>Decide which job you have before you type anything. One question settles most cases: if this problem came back next month and AI wasn’t available, would you care whether you could handle it?</p>
        <p>If you wouldn’t care, it’s a delivery task. If you would, it’s a learning task, and getting a good result quickly won’t get you what you came for.</p>
        <p>The same work can be either one. A SQL query for a one-off report is delivery for a product manager who won’t write another. For a product manager moving into analytics, that query is practice. You can also split the two. If the report is due Friday, use AI and ship it, then rebuild the hard part yourself on Monday.</p>
      </section>

      <section id="scores" aria-labelledby="scores-h">
        <h2 id="scores-h" className="post__h2">A good result can hide a missing skill</h2>
        <p>A polished memo shows that you and the AI together can produce a polished memo. It says very little about what you’d write alone. Reading a clear explanation can also feel like understanding, even though recognizing an idea is much easier than producing it.</p>
        <p>Keep two separate scores: how good the work is, and what you can do unaided. To check the second, close the chat after AI has helped you and try the key step again. Then say what would break if one detail changed. If you stall, you’ve found what to practice next, and the work you shipped may still be perfectly good.</p>
      </section>

      <section id="loop" aria-labelledby="loop-h">
        <h2 id="loop-h" className="post__h2">A loop for learning tasks</h2>
        <ol className="post__list">
          <li>Name one skill small enough to test. You can’t test “get better at Python.” You can test “read a stack trace and find where the bad value first appears.”</li>
          <li>Attempt it before asking. Set a short time limit and write down the exact spot where you got stuck.</li>
          <li>Ask for the smallest help that gets you moving: a question first, then a hint. Ask for the answer only when you’ve decided you need it.</li>
          <li>Explain the idea back in your own words, then ask for the single most important problem with your attempt. Check what you can outside the chat, against a test, a reference book or someone who knows the subject.</li>
          <li>Close the chat and redo the task from a blank page.</li>
          <li>A few days later, try a changed version of the problem, with the same skill and different details.</li>
        </ol>
        <p>Steps 5 and 6 carry the most weight because they test what stayed with you after the help ended. An explanation you give in a chat may just be the AI’s wording coming back to you. A blank page is harder to fool. When the retry goes badly, return to step 3 on the part that failed.</p>
        <p>All of this is slower than asking for the answer, so save it for the few skills you want to own. It’s practical advice, and no routine can promise you a particular result.</p>
      </section>

      <section id="prompt" aria-labelledby="prompt-h">
        <h2 id="prompt-h" className="post__h2">A tutor prompt you can copy</h2>
        <p>Leave out anything you aren’t allowed to share with an AI tool, such as customer data or confidential work.</p>
        <TutorPrompt />
        <p>A prompt is only a request. The model may drift back to full answers after a few turns, praise weak work, or give you a wrong hint with total confidence. When it drifts, repeat the rules or start a new chat. Wrong feedback is harder to catch, which is why step 4 sends you outside the chat.</p>
      </section>

      <section id="practice" aria-labelledby="practice-h">
        <h2 id="practice-h" className="post__h2">What this looks like in practice</h2>
        <p>The three cases below are hypothetical. I <Link to="/writing/ai-learning-curve-future-of-work/#juniors">learned to debug by being stuck</Link>, and that article looks at what happens to that practice when an AI writes most of the code.</p>
        <p>Say you’re learning to debug, and a web form saves dates one day off. The delivery version is pasting the code and asking for a fix. The learning version starts with your own guess: maybe a time zone conversion is happening somewhere. You write that down and ask, “What could I inspect to test this guess?” You look at the value at each step until you find where it changes, then explain the cause and write the fix. If the guess was wrong, you’ve still learned how to rule something out. The following week, you take a different bug in the same family, such as a report that groups orders under the wrong day, and work through it without AI.</p>
        <p>For writing, suppose you want to get better at project updates for busy executives. You write the update first, then ask, “Which sentence is a busy reader most likely to misunderstand, and why?” You do the rewriting yourself, because rewriting is the skill you came for. Next week you draft from a blank page and look for the same problem before asking for feedback.</p>
        <p>To learn to read a small business profit and loss statement, take a sample statement and write down what changed from last month and what you think caused it. Then have the AI question your explanation one point at a time. Check the definitions against an accounting textbook or a bookkeeper. Later, try a statement from a different business.</p>
      </section>

      <section id="prerequisites" aria-labelledby="prerequisites-h">
        <h2 id="prerequisites-h" className="post__h2">When you don’t know enough to attempt it</h2>
        <p>Attempting first assumes you have somewhere to start. If you can’t tell what the problem is asking, struggling alone mostly burns time. A full answer is fine here, as long as you change how you use it.</p>
        <p>Ask for a worked example of a similar problem and leave your own problem unsolved. Read each step until you can say why it comes next, then cover the example and reproduce it. On the next problem, ask for the same kind of example with the last few steps left blank for you. On the one after that, ask only for a starting hint. The help shrinks as you can do more, until you’re back in the normal loop.</p>
        <p>Get the fundamentals from a textbook, a course or a person as well as the chat, because a beginner has no way to spot a confident mistake in an explanation. If the whole subject is new, I wrote separately about <Link to="/writing/how-i-learn-faster-with-ai/">mapping an unfamiliar technology with AI before going deep</Link>.</p>
      </section>

      <section id="offloading" aria-labelledby="offloading-h">
        <h2 id="offloading-h" className="post__h2">When offloading is the right call</h2>
        <p>Plenty of work has no learning goal, and handing it off is simply the sensible choice: reformatting data, a first summary of a long document, boilerplate you’ve written many times, a one-off task in a field you’ll never return to. Tomorrow’s deadline can also be reason enough, even for something you’d like to learn eventually. Nobody needs to turn a spreadsheet cleanup into a study session.</p>
        <p>Before you offload, ask whether you could tell if the answer was wrong. When the result is easy to check, handing it off costs you very little. When you can’t judge the output and it matters, the risk stays with you even though the work has moved to the AI. Then you either learn enough to check it or find someone who can.</p>
        <p>Be slowest to hand off the skills you need for judging AI’s work in your own field. If you lead engineers, you need to be able to read the code. If you sign off on the numbers, you need to be able to read the statements. Those skills are worth an occasional slow practice session, even when AI could do the task faster.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Start with one skill this week</h2>
      <div className="post__close-copy">
        <p className="lead">Pick one thing you keep asking AI to do and would like to do yourself, then write it down in a form you could test. Make your next attempt before opening the chat, and use the prompt above when you get stuck. Then put a date on your calendar a few days out for the changed version.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re learning <ArrowRight /></Link>
          <Link to="/writing/how-i-learn-faster-with-ai/" className="link-arrow"><span>How I learn faster with AI</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
