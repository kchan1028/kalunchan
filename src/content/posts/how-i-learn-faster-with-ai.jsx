import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// How KC learns new technologies with AI. Source: KC's own brief (Oct 2026): 20+ years, the two learning paths, the
// Kafka and vector search examples, the prompts, the two-developer comparison, and the career range (carrier networks,
// VoIP, cloud, distributed systems, AI tools). The Kafka and vector search walkthroughs are learning exercises, not
// client work. Useful Little Tools URLs checked against the useful-little-tools repo (JOIN visualizer, JWT debugger,
// EXPLAIN analyzer, RAG playground).

export const metadata = {
  slug: 'how-i-learn-faster-with-ai',
  title: 'How I Learn Faster With AI: From Research to Implementation',
  shortTitle: 'How I learn faster with AI',
  seoTitle: 'How to Learn Faster With AI: An Engineer’s Framework — Ka Lun Chan',
  description:
    'How I use AI to learn new technologies faster: set a goal, map the subject, prime, test my understanding, build something small, and know when to skip steps.',
  teaser:
    'The five-stage path I use for unfamiliar or risky subjects, the three-stage shortcut for familiar ground, the prompts behind each, and why finishing faster is not the same as learning faster.',
  dek:
    'Quick answers are the small part. What changed my learning is how fast I can go from knowing very little about a subject to building something with it, and still understand what I built.',
  summary:
    'Why finishing faster and learning faster are different; the full path (goals, research, priming, comprehension, implementation) with Kafka as the example; the faster path for familiar fundamentals; how risk decides which path to use; why AI shouldn’t do all the thinking; how experience helps and where it misleads; small tools as a place to learn; and a six-step workflow with prompts, using vector search.',
  topics: ['AI', 'Learning', 'Engineering judgment'],
  related: [
    { to: '/writing/ai-learning-curve-future-of-work/', label: 'The AI learning curve and the future of work' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything' },
    { to: '/writing/why-i-build-my-own-developer-tools/', label: 'Why I build my own developer tools' },
    { to: '/writing/why-i-still-write-code/', label: 'Why I still write code' },
    { to: '/writing/loop-engineering-feedback-loops/', label: 'Loop engineering: faster, more honest feedback loops' },
    { to: '/writing/event-driven-architecture-kafka-tradeoffs/', label: 'Event-driven architecture with Kafka: the tradeoffs' },
  ],
  minutes: 11,
  keywords: [
    'how to learn faster with AI',
    'AI-assisted learning',
    'learning programming with AI',
    'AI learning workflow',
    'AI for software engineers',
    'learning new technologies with AI',
    'priming',
    'test your understanding with AI',
    'learn by building',
  ],
  about: [
    { '@type': 'Thing', name: 'Learning', sameAs: 'https://en.wikipedia.org/wiki/Learning' },
    { '@type': 'Thing', name: 'Large language model', sameAs: 'https://en.wikipedia.org/wiki/Large_language_model' },
    { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Apache Kafka', sameAs: 'https://en.wikipedia.org/wiki/Apache_Kafka' },
    { '@type': 'Thing', name: 'Vector database', sameAs: 'https://en.wikipedia.org/wiki/Vector_database' },
    { '@type': 'Thing', name: 'Join (SQL)', sameAs: 'https://en.wikipedia.org/wiki/Join_(SQL)' },
    { '@type': 'Thing', name: 'JSON Web Token', sameAs: 'https://en.wikipedia.org/wiki/JSON_Web_Token' },
  ],
  faq: [
    {
      q: 'How can I learn faster with AI?',
      a: 'Use AI to build understanding as well as to produce answers. Decide what you need to learn and why, ask AI to map the subject, have it explain new ideas in terms you already know, let it quiz you without giving the answers, and then build something small and break it on purpose. Check important technical details against official documentation.',
    },
    {
      q: 'What does priming mean when learning with AI?',
      a: 'Priming means giving yourself enough context that new information has somewhere to land. In practice, you ask AI to explain an unfamiliar technology using concepts you already understand, at a simple level first and then in engineering and production terms, and to say where the comparison breaks down.',
    },
    {
      q: 'How do I know if I really understand something AI explained?',
      a: 'Try to explain it without AI. Ask the assistant to quiz you and hold back the answers until you respond, or explain the concept back and ask it to find mistakes. A practical test: can you explain it, apply it, and say when not to use it?',
    },
    {
      q: 'When can I skip steps and learn faster?',
      a: 'When you already understand the fundamentals and the cost of a mistake is low, such as learning a new library in a familiar language, trying a new API, or building a prototype. Research, priming and a small implementation are usually enough. Unfamiliar, security-sensitive or production-critical work deserves the full process.',
    },
    {
      q: 'Should beginners and computer science students use AI to learn programming?',
      a: 'Yes, as long as they stay involved in the thinking. Letting AI write a whole project can leave a beginner with working code and little understanding. Using it to explain concepts, quiz you, review your own attempts and explain errors builds the mental models that make the next subject easier.',
    },
  ],
};

export const toc = [
  ['faster', 'Finishing faster isn’t learning faster'],
  ['paths', 'Two paths, depending on the subject'],
  ['full', 'The full path, with Kafka as the example'],
  ['shortcut', 'The faster path for familiar ground'],
  ['choose', 'How I choose a path'],
  ['thinking', 'Don’t let AI do all the thinking'],
  ['experience', 'Experience speeds it up, and can mislead'],
  ['small', 'Build small, break things'],
  ['try', 'A workflow you can try'],
  ['slow', 'Faster isn’t always the goal'],
];

// ---------- Fig. 709-1: the two learning paths ----------
// One column per stage; the two path rows show which stages each path uses. Skipped stages say so in text.
const stages = [
  { name: 'Goals', note: 'Decide what you need to learn, and why.', fast: false },
  { name: 'Research', note: 'Map the subject before going deep.', fast: true },
  { name: 'Priming', note: 'Connect it to what you already know.', fast: true },
  { name: 'Comprehension', note: 'Explain it without AI.', fast: false },
  { name: 'Implementation', note: 'Build something small and break it.', fast: true },
];

function LearningPaths() {
  return (
    <figure className="learnpaths post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 709-1</span> Two ways to learn with AI
        <span className="journey__key label">The full path for new, complex or risky subjects. The faster path when you already know the fundamentals.</span>
      </figcaption>
      <div className="learnpaths__grid">
        <span className="learnpaths__rowname is-full label" aria-hidden="true">Full path</span>
        <span className="learnpaths__rowname is-fast label" aria-hidden="true">Faster path</span>
        <ol className="learnpaths__stages">
          {stages.map((s, i) => (
            <li key={s.name} className="learnpaths__stage">
              <span className="learnpaths__head">
                <span className="learnpaths__no mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="learnpaths__name">{s.name}</span>
                <span className="learnpaths__note">{s.note}</span>
              </span>
              <span className="learnpaths__mark is-on">
                <span className="learnpaths__dot" aria-hidden="true"></span>
                <span className="learnpaths__marklabel label">Full path</span>
              </span>
              <span className={`learnpaths__mark ${s.fast ? 'is-on' : 'is-off'}`}>
                <span className="learnpaths__dot" aria-hidden="true"></span>
                <span className="learnpaths__marklabel label">Faster path</span>
                {!s.fast && <span className="learnpaths__skip label">skipped</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <p className="learnpaths__loop">
        <span className="learnpaths__loopicon" aria-hidden="true">↺</span>
        On either path, when building exposes a gap, go back to research or comprehension.
      </p>
    </figure>
  );
}

// ---------- Fig. 709-2: which path for which situation ----------
const situations = [
  ['A completely unfamiliar technology', 'full', ''],
  ['A complex architectural decision', 'full', ''],
  ['A security-sensitive implementation', 'full', 'Extra validation against official documentation'],
  ['Production-critical infrastructure', 'full', 'Testing and review before it ships'],
  ['A new library in a language I know', 'fast', ''],
  ['A new API', 'fast', ''],
  ['A small prototype', 'fast', ''],
];

function PathChooser() {
  return (
    <figure className="post__figure">
      {/* A labeled, focusable scroll region, so a phone scrolls the table and never the page. */}
      <div className="learnchoose__scroll" role="region" aria-label="Which learning path fits which situation" tabIndex={0}>
        <table className="post__table learnchoose">
          <caption>
            <span className="mono">Fig. 709-2</span> The deciding question is what happens if I get it wrong
          </caption>
          <thead>
            <tr><th scope="col">Situation</th><th scope="col">Path</th><th scope="col">Also</th></tr>
          </thead>
          <tbody>
            {situations.map(([situation, path, extra]) => (
              <tr key={situation}>
                <th scope="row">{situation}</th>
                <td className={`is-${path}`}>{path === 'full' ? 'Full path (5 stages)' : 'Faster path (3 stages)'}</td>
                <td>{extra || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="faster" aria-labelledby="faster-h">
        <h2 id="faster-h" className="post__h2">Finishing faster isn’t the same as learning faster</h2>
        <p>In more than 20 years of software engineering I’ve learned technologies from books, documentation, forums and a lot of trial and error. Some took weeks before I trusted myself with them. Others took months before I’d use them in a real project.</p>
        <p>With AI, something that used to take me several days to understand can sometimes be explored, tested and running in a few hours. The quick answers are the smaller part of that. What changed is how fast I get from curiosity to a working example.</p>
        <p>I’ve also noticed a trap. If I ask an assistant to build everything, I can finish the project with very little idea of how it works. I want both: the work done, and more knowledge than I had when I started.</p>
        <p className="post__answer">To learn faster with AI, use it to build understanding: decide what you need to learn, ask it to map the subject, connect new ideas to ones you already know, have it test you, and then build something small. An answer you can’t explain hasn’t taught you anything yet.</p>
      </section>

      <section id="paths" aria-labelledby="paths-h">
        <h2 id="paths-h" className="post__h2">Two paths, depending on what I’m learning</h2>
        <p>My process has settled into two versions. For something new or complicated I go through five stages. When I already know the fundamentals and need a new library, API or tool, three are enough.</p>
        <LearningPaths />
        <p>Neither path is a straight line. Building something is often how I find out I misunderstood a concept, and then I go back a step.</p>
      </section>

      <section id="full" aria-labelledby="full-h">
        <h2 id="full-h" className="post__h2">The full path: goals, research, priming, comprehension, implementation</h2>
        <p>I’ll use Kafka as the running example. Event-driven systems are a subject I’ve <Link to="/writing/event-driven-architecture-kafka-tradeoffs/">written about before</Link>, and Kafka has enough moving parts to show every stage.</p>

        <h3 className="post__h3">Goals: what am I trying to learn?</h3>
        <p>Before I ask AI anything, I write down what I’m trying to do and why. With Kafka, my goal usually isn’t to become an expert. It’s to answer questions like these:</p>
        <ul className="post__list">
          <li>When does Kafka make sense compared with a traditional message queue?</li>
          <li>How do producers, consumers, partitions and consumer groups work together?</li>
          <li>What happens when a consumer fails, and how do I handle duplicate messages?</li>
          <li>What operational work does Kafka add, and when is it unnecessary?</li>
        </ul>
        <p>Without a goal, AI will follow me down every rabbit hole. There’s always another framework, pattern or optimization to read about. The goal separates what I need from what is merely interesting.</p>

        <h3 className="post__h3">Research: build a map before going deep</h3>
        <p>This is where AI saves me the most time. I used to open twenty browser tabs, read articles, watch tutorials and stitch it all together. Now I ask for a map:</p>
        <blockquote className="post__quote">
          <p>“I’m learning Kafka for event-driven applications. Explain the major concepts, common architectural patterns, operational challenges and alternatives. Focus on what an engineering leader and hands-on developer should understand.”</p>
        </blockquote>
        <p>I don’t expect every detail to be right. I use the answer to find the important concepts and the questions I should be asking, then check technical details against official documentation, especially for security, infrastructure, APIs and anything headed for production. At this stage I want the layout of the subject. Mastery comes later, if I need it.</p>

        <h3 className="post__h3">Priming: give new ideas somewhere to land</h3>
        <p>Priming is the stage people skip most, and I think it does the most good. It means getting enough context that the next piece of information is easier to understand. I’ve worked with distributed systems, APIs, databases, infrastructure and messaging for years, so I ask AI to explain new things in those terms:</p>
        <blockquote className="post__quote">
          <p>“Explain Kafka using concepts I’m already familiar with, such as traditional message queues, relational databases and distributed systems. Focus on similarities, differences, and where the analogy breaks down.”</p>
        </blockquote>
        <p>After that, a partition stops being an abstract word. I can relate it to ordering, parallel processing and how data is spread across machines.</p>
        <p>I also ask for the same idea at three depths: a simple explanation, then an engineering one, then what it means in production. That moves me from basic understanding toward actual decisions. And I always ask where my comparison is wrong, because a bad analogy can make a technology look simpler than it is.</p>
        <p className="post__answer">In AI-assisted learning, priming means asking for explanations framed in concepts you already understand, including where the comparison breaks down. New information then connects to a mental model you already have, so it is easier to absorb.</p>

        <h3 className="post__h3">Comprehension: can I explain it without AI?</h3>
        <p>AI explains things well. I can read an explanation, nod along and feel like I understand it. Recognizing an explanation is much easier than producing one, so I ask the AI to test me:</p>
        <blockquote className="post__quote">
          <p>“Ask me five questions about Kafka consumer groups, message ordering and failure recovery. Don’t give me the answers until I respond. Challenge any incorrect assumptions.”</p>
        </blockquote>
        <p>Sometimes I find out I knew the vocabulary and not the behavior. That’s a good result. I’d much rather discover a misunderstanding while learning than after something is in production. The other method I use is to explain the concept back in my own words and ask AI to point out mistakes and missing considerations.</p>
        <p className="post__answer">My test for comprehension is simple: can I explain it, apply it, and recognize when not to use it? If I can’t say why an architecture works, when it fails and what the alternatives are, I need more time with the subject.</p>

        <h3 className="post__h3">Implementation: build something small</h3>
        <p>This is my favorite stage. I’ve always learned best by building, and building exposes details that explanations leave out. For Kafka, a small project might go like this:</p>
        <ol className="post__list">
          <li>Write a producer that publishes events.</li>
          <li>Write a consumer that processes them.</li>
          <li>Add more consumers to the group.</li>
          <li>Kill one consumer and watch what happens.</li>
          <li>Look for retries and duplicate processing.</li>
          <li>Experiment with message ordering.</li>
        </ol>
        <p>It doesn’t need to be a large application. It needs to be small enough that I can understand all of it and change it. AI can write the boilerplate, explain errors and suggest experiments. I still want to know the reasons behind the code. Why this configuration? What happens if the service crashes? How does it behave under load? What would need to change before production?</p>
        <p>Those questions turn a demo into learning. Sometimes the most useful thing I learn is that a simpler solution would have been enough.</p>
      </section>

      <section id="shortcut" aria-labelledby="shortcut-h">
        <h2 id="shortcut-h" className="post__h2">The faster path: research, priming, implementation</h2>
        <p>Not every subject needs all five stages. When I already understand the fundamentals and need a new library, framework, API or developer tool, I skip the written goals and the formal comprehension check.</p>
        <p>Research becomes a practical overview: what problem the tool solves, what it does well, where it falls short, how it compares with alternatives, and what I should know before I start. I need enough to start sensibly, not a course.</p>
        <p>Priming anchors it to something I know. For a new Python web framework, I’d ask how it compares with Django, Flask or FastAPI, and I quickly see its structure, conventions and tradeoffs. The more experience you have, the more this pays off, because you only need to learn what’s different.</p>
        <p>Implementation is where I spend most of the time. I might ask for a minimal working example, then change the configuration, break things on purpose, read the errors and ask why something behaved differently from what I expected. An unfamiliar error used to cost me an hour of searching. Now I can investigate it in a conversation, which shortens the <Link to="/writing/loop-engineering-feedback-loops/">feedback loop</Link> a lot.</p>
        <p className="post__answer">Research gives direction, priming gives context, and implementation gives experience. When implementation shows a gap in my understanding, I go back to research or comprehension.</p>
      </section>

      <section id="choose" aria-labelledby="choose-h">
        <h2 id="choose-h" className="post__h2">How I decide which path to use</h2>
        <p>I ask three questions. How familiar am I with the subject? How complex is it? What happens if I get it wrong? The last one decides most cases.</p>
        <PathChooser />
        <p>A quick prototype doesn’t need the depth of understanding that a production authentication system does. For high-risk work, a working implementation isn’t the finish line either: testing, documentation, security review and operational readiness still apply. AI makes it easier to move quickly. It doesn’t make a wrong decision any cheaper.</p>
      </section>

      <section id="thinking" aria-labelledby="thinking-h">
        <h2 id="thinking-h" className="post__h2">The biggest mistake: letting AI do all the thinking</h2>
        <p>AI coding assistants can now take a feature description, write the implementation, run the tests and fix the failures. That’s impressive, and it raises a question I keep coming back to: if the tool does all the thinking, what am I learning?</p>
        <p>Picture two developers building the same application. The first asks AI to implement everything and accepts the result once it works. The second uses AI to understand the architecture, questions the implementation, tries alternatives and digs into failures. Both finish. The first has a working application. The second has one too, and a much stronger picture of how it runs and how it breaks.</p>
        <p>I don’t think you need to type every line yourself to learn. That would throw away much of what AI is good for. You do need to stay involved in the important decisions, assumptions, failure modes and tradeoffs. Otherwise you slowly come to depend on tools you don’t understand, and it shows later in <Link to="/writing/code-review-in-the-ai-era/">code review</Link> and in <Link to="/writing/hidden-cost-of-ai-coding/">what AI coding really costs</Link>.</p>
      </section>

      <section id="experience" aria-labelledby="experience-h">
        <h2 id="experience-h" className="post__h2">Experience makes learning with AI faster, and can mislead</h2>
        <p>I’ve worked on carrier networks, VoIP platforms, cloud infrastructure, distributed applications and now AI tools. Those technologies are very different. The engineering questions underneath them have barely changed: reliability, latency, security, data consistency and operational complexity still matter, and every architectural decision still involves tradeoffs.</p>
        <p>When I started learning about AI agents and automated workflows, I leaned on what I already knew about distributed systems, background jobs, APIs, retries and failure recovery. The tools were new and the questions were familiar, which is much of why <Link to="/writing/ai-agents-reliable-in-production/">making agents reliable</Link> felt like ground I’d covered before. I was extending what I knew instead of starting from zero.</p>
        <p>Experience has a cost too. It tempts me to force a new technology into a familiar pattern. I try to keep questioning old assumptions, which is one more reason I ask AI where my analogies break.</p>
      </section>

      <section id="small" aria-labelledby="small-h">
        <h2 id="small-h" className="post__h2">Build small, break things, understand why</h2>
        <p>Small tools let me learn without committing to a big project. I can explore a concept, build something useful and share it. That’s part of why I build <a href="https://usefullittletools.app/developer/">Useful Little Tools</a>.</p>
        <p>The <a href="https://usefullittletools.app/developer/sql/join-visualizer/">SQL JOIN visualizer</a> is for people learning SQL, and building it meant working out how to show data relationships and query behavior visually. The <a href="https://usefullittletools.app/developer/security/jwt-debugger/">JWT debugger</a>, the <a href="https://usefullittletools.app/developer/sql/explain-analyze/">Postgres EXPLAIN analyzer</a> and the <a href="https://usefullittletools.app/developer/ai/rag/">RAG playground</a> came out of the same habit, which I wrote about in <Link to="/writing/why-i-build-my-own-developer-tools/">why I build my own developer tools</Link>.</p>
        <p>A small project is a manageable place to experiment, without the weight of a whole production platform, and when something breaks I can find out why. Explanation, experimentation, failure and reflection together teach me more than any one of them does alone.</p>
      </section>

      <section id="try" aria-labelledby="try-h">
        <h2 id="try-h" className="post__h2">A practical AI learning workflow you can try</h2>
        <p>Here is the full path as six steps, with vector search as the subject. It works whether you’re a student picking up your first framework or an experienced engineer learning something new.</p>

        <h3 className="post__h3">1. Define the outcome</h3>
        <p>Decide what you want to be able to do when you’re finished. For example: “I want to understand how vector search works and build a simple semantic search application.”</p>

        <h3 className="post__h3">2. Ask AI to map the subject</h3>
        <blockquote className="post__quote">
          <p>“I’m learning vector search. Identify the essential concepts, common misconceptions, practical applications and prerequisites. Prioritize what I need to know to build a small working example.”</p>
        </blockquote>

        <h3 className="post__h3">3. Connect new concepts to familiar ones</h3>
        <blockquote className="post__quote">
          <p>“Explain vector search by comparing it with traditional SQL queries and full-text search. Show where the comparison is useful and where it breaks down.”</p>
        </blockquote>

        <h3 className="post__h3">4. Test your understanding</h3>
        <blockquote className="post__quote">
          <p>“Give me five practical questions to test my understanding of embeddings, similarity search and vector databases. Challenge my answers and explain what I’m missing.”</p>
        </blockquote>
        <p>If you’re early in your career, this is the step not to skip. You have fewer older concepts to compare against, so being quizzed is how you find out what didn’t stick.</p>

        <h3 className="post__h3">5. Build a minimal implementation</h3>
        <blockquote className="post__quote">
          <p>“Help me build a minimal semantic search application. Explain the major design decisions and give me small experiments that show how changing the inputs affects the results.”</p>
        </blockquote>

        <h3 className="post__h3">6. Experiment and reflect</h3>
        <p>Once it works, keep going. Try different inputs, investigate results you didn’t expect, change the implementation and ask AI to explain the behavior. Then explain the system yourself without looking at the generated explanation.</p>
        <p className="post__answer">If you can explain how it works, why it works and when it might fail, you’ve probably learned something that will last.</p>
      </section>

      <section id="slow" aria-labelledby="slow-h">
        <h2 id="slow-h" className="post__h2">The goal isn’t to learn everything faster</h2>
        <p>AI makes information so easy to get that it’s tempting to jump from one subject to the next without staying long enough to understand any of them. I’ve felt that pull. There’s always another interesting tool.</p>
        <p>Reading more doesn’t mean remembering more. Sometimes the most useful thing I can do is stop asking questions and think. Or write a small piece of code myself, explain a concept with no help, or come back the next day to see whether I still understand it. I don’t try to <Link to="/writing/you-dont-need-to-remember-everything/">remember everything</Link>, but I do want to understand what I use.</p>
        <p className="post__answer">AI can speed up learning, but I still have to do the learning. I try to put my effort into the parts that build understanding and let AI take the rest.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">AI should make us better engineers</h2>
      <div className="post__close-copy">
        <p className="lead">After more than two decades in engineering, I’m probably learning new technologies faster than at any other point in my career. AI didn’t hand me the knowledge. It shortened the time between curiosity, research, experimentation and feedback. I use the full path for unfamiliar or complex subjects and the faster one when I know the fundamentals, and on both I stay responsible for understanding the result. That matters most for engineers early in their careers. Generating code keeps getting easier. Understanding systems, spotting risks, making sound architecture decisions and solving unfamiliar problems are still worth a great deal.</p>
        <p className="post__close-principle">I want AI to help me think better, learn faster and build things I couldn’t have built as quickly before. The thinking stays mine.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re learning <ArrowRight /></Link>
          <Link to="/writing/why-i-still-write-code/" className="link-arrow"><span>Why I still write code</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
