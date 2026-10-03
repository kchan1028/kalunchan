import { Link } from 'react-router';
import { person } from '../profile';

const ult = person.products.find((p) => p.name === 'Useful Little Tools');

export const toc = [
  ['still-look-things-up', 'I still look things up'],
  ['remember-everything', 'Do you need to remember everything?'],
  ['syntax-vs-understanding', 'Syntax vs. understanding'],
  ['fundamentals', 'Fundamentals'],
  ['something-looks-wrong', 'When something looks wrong'],
  ['senior-engineers', 'What seniors need to know'],
  ['ai', 'What changes with AI'],
  ['small-tools', 'Why I build small tools'],
  ['keep-learning', 'How I keep learning'],
];

const lookups = [
  {
    area: 'Git',
    looked: <>The argument order for <code>git rebase --onto</code>, and how to dig a lost commit out of <code>git reflog</code>.</>,
    knew: 'Commits form a graph, branches are just pointers, and almost nothing is gone until garbage collection runs.',
  },
  {
    area: 'SQL',
    looked: <>Window function syntax like <code>ROW_NUMBER() OVER (PARTITION BY …)</code>, and the exact <code>ON CONFLICT</code> upsert form in Postgres.</>,
    knew: 'How indexes, joins and the query planner work, and why the same query is fine on ten thousand rows and painful on ten million.',
  },
  {
    area: 'Django ORM',
    looked: <>When to use <code>select_related</code> versus <code>prefetch_related</code>, and how <code>Subquery</code> and <code>OuterRef</code> fit together.</>,
    knew: 'The ORM writes SQL for you. A queryset evaluated inside a loop is an N+1 problem waiting for production data.',
  },
  {
    area: 'Kafka',
    looked: <>Consumer settings like <code>max.poll.interval.ms</code> and <code>enable.auto.commit</code>, and what producer <code>acks</code> values actually guarantee.</>,
    knew: 'Partitions, consumer groups and offsets. At-least-once delivery means every handler has to be safe to run twice.',
  },
  {
    area: 'AWS',
    looked: 'IAM condition keys, S3 bucket policy syntax, and the default idle timeout on a load balancer.',
    knew: 'Least privilege, where each timeout sits in the request path, and what breaks when one layer gives up before another.',
  },
  {
    area: 'JWT',
    looked: <>Which registered claims to validate (<code>exp</code>, <code>nbf</code>, <code>aud</code>, <code>iss</code>) and how much clock-skew leeway a library allows.</>,
    knew: 'A JWT is signed, not encrypted. Once it’s issued, you can’t revoke it without keeping extra state somewhere.',
  },
  {
    area: 'Docker',
    looked: 'Multi-stage build syntax, and the flags for cleaning up old images and volumes.',
    knew: 'Layers cache in order, and a container is an isolated process, not a small virtual machine.',
  },
  {
    area: 'Performance',
    looked: <>How to read <code>EXPLAIN ANALYZE</code> output, profiler flags, and the <code>curl</code> options that break a request into timings.</>,
    knew: 'Measure before changing anything. Most of the slowness I’ve chased was waiting on I/O, not burning CPU.',
  },
];

export default function Body() {
  return (
    <>
      <section id="still-look-things-up" aria-labelledby="still-look-things-up-h">
        <h2 id="still-look-things-up-h" className="post__h2">I still look things up, every week</h2>
        <p>I’ve worked with Python and Django, Ruby on Rails, React and Next.js, SQL databases, Git, AWS, Docker, Kafka, APIs, authentication and distributed systems. I’ve been a co-founder and CTO, led teams, and reviewed more pull requests than I could count. I still open the docs for things I’ve done hundreds of times.</p>
        <p>Earlier in my career, I treated that as a gap I needed to close. If a senior engineer had to search for how to rebase onto a different branch, what did that say about them? It took me years to see it the other way around. The engineers I trusted most looked things up constantly. They just knew exactly what to look for, and they could tell quickly when the answer they found was wrong.</p>
        <p>Here’s a fairly honest list of things I’ve looked up recently, next to the things I didn’t need to.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 650-1</span> What I looked up, and what I already knew
            </caption>
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">What I looked up</th>
                <th scope="col">What I already understood</th>
              </tr>
            </thead>
            <tbody>
              {lookups.map((l) => (
                <tr key={l.area}>
                  <th scope="row">{l.area}</th>
                  <td data-label="Looked up">{l.looked}</td>
                  <td data-label="Already understood">{l.knew}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
        <p>The middle column changes all the time. Flags get renamed, APIs get new versions, cloud consoles move things around. The right column changes slowly, and most of it carries over from one tool to the next. It’s also the part that actually lets me do the job.</p>
      </section>

      <section id="remember-everything" aria-labelledby="remember-everything-h">
        <h2 id="remember-everything-h" className="post__h2">Do software engineers need to remember everything?</h2>
        <p className="post__answer">No. Nobody remembers everything, and trying to is a poor use of your attention. What good engineers carry around is a working model of how systems behave. Syntax is cheap to retrieve. Understanding is not.</p>
        <p>Looking something up does not mean you don’t know what you’re doing. Often it means the opposite. You know enough to recognize the problem, you know roughly what the answer should look like, and you want to confirm the details before you put them into a system other people depend on.</p>
        <p>I’d much rather work with an engineer who checks the docs than one who confidently types a flag from memory and gets it slightly wrong.</p>
      </section>

      <section id="syntax-vs-understanding" aria-labelledby="syntax-vs-understanding-h">
        <h2 id="syntax-vs-understanding-h" className="post__h2">Memorizing syntax vs. understanding how a system works</h2>
        <p>These are two different kinds of knowledge, and they fail in different ways.</p>
        <p>If you forget syntax, you find out immediately. The code doesn’t compile, the command errors, the test fails. You look it up and move on in a few minutes.</p>
        <p>If you don’t understand the system, you often don’t find out at all, at least not right away. The code runs. The tests pass. Then it meets real traffic, real data or a real failure, and it behaves in a way you didn’t predict.</p>
        <p>A pattern I’ve run into more than once is a Kafka consumer group that keeps rebalancing under load. Messages get processed twice, lag climbs, and the logs fill up with partition reassignments. I don’t keep the exact property names in my head. But I know that if a consumer takes too long between polls, the group decides it’s dead and hands its partitions to someone else. That gives me the right question to ask. From there, finding <code>max.poll.interval.ms</code> and <code>max.poll.records</code> takes a minute, and so does checking whether offsets are committed before or after the work is done.</p>
        <p>Understanding tells you where to look. Search tells you the exact words. You need both, but only one of them is hard to replace.</p>
      </section>

      <section id="fundamentals" aria-labelledby="fundamentals-h">
        <h2 id="fundamentals-h" className="post__h2">The fundamentals that keep paying off</h2>
        <p>When I say fundamentals, I don’t mean trivia or algorithm puzzles. I mean the ideas that show up underneath every framework I’ve used:</p>
        <ul className="post__list">
          <li>How data is stored, indexed and queried, and what that costs as it grows.</li>
          <li>How requests move across a network: DNS, TCP, TLS, HTTP, proxies, timeouts and retries.</li>
          <li>Processes, memory, concurrency, and what happens when two things touch the same state.</li>
          <li>Failure: what your system does when a dependency is slow, down, or returns something unexpected.</li>
          <li>Security basics: authentication versus authorization, trust boundaries, least privilege, and where secrets live.</li>
          <li>Debugging: form a hypothesis, shrink the problem, change one thing at a time, and read the actual error.</li>
        </ul>
        <p>I started my career in <Link to="/experience/">technical support and network operations</Link>, long before I was writing much application code. A lot of what I learned there still shows up in my work. When a web request times out, I think about every hop between the browser and the database, because I spent years watching real traffic cross real networks. Frameworks have come and gone since then. That mental model hasn’t.</p>
        <p>Fundamentals also make new tools easier to pick up. Rails and Django look different, but once you understand request lifecycles, ORMs, migrations and background jobs, you’re mostly learning where things live and what they’re called.</p>
      </section>

      <section id="something-looks-wrong" aria-labelledby="something-looks-wrong-h">
        <h2 id="something-looks-wrong-h" className="post__h2">Knowing when something doesn’t look right</h2>
        <p>One of the most useful skills I’ve built isn’t knowing the answer. It’s the feeling that something is off before I can fully explain why.</p>
        <p>In code review, it usually looks like one of these:</p>
        <ul className="post__list">
          <li>A migration that rewrites or locks a large table, scheduled to run at peak traffic.</li>
          <li>A database query inside a loop that looks harmless with twenty rows of test data.</li>
          <li>A retry with no backoff, pointed at a service that’s already struggling.</li>
          <li>An access token with a very long expiry, stored somewhere any script on the page can read it.</li>
          <li>A cache with no clear story for how it gets invalidated.</li>
          <li>An endpoint that checks whether you’re logged in, but not whether you’re allowed to see that record.</li>
          <li>A response that comes back suspiciously fast, which sometimes means it never did the work.</li>
        </ul>
        <p>None of these take memorized syntax to spot. They come from seeing systems fail, reading other people’s postmortems, and fixing my own mistakes. You don’t get that from a cheat sheet. You get it from building things, running them, and paying attention when they break.</p>
      </section>

      <section id="senior-engineers" aria-labelledby="senior-engineers-h">
        <h2 id="senior-engineers-h" className="post__h2">What senior software engineers need to know keeps growing</h2>
        <p>Early on, I thought seniority meant knowing more about the code. It does, but that turned out to be the smaller part.</p>
        <p>As you move into senior, staff and leadership roles, the list of things you need to understand gets wider, not narrower:</p>
        <dl className="post__terms">
          <div><dt>Architecture</dt><dd>How the pieces fit, what it will cost to change them later, and <Link to="/writing/should-it-be-a-microservice/">whether a piece should be its own service at all</Link>.</dd></div>
          <div><dt>Security</dt><dd>Threat models, data exposure, and who can do what.</dd></div>
          <div><dt>Infrastructure</dt><dd>Networking, deployment, observability, and the bill at the end of the month.</dd></div>
          <div><dt>Delivery</dt><dd>How work gets from an idea to production safely, and how to keep it moving.</dd></div>
          <div><dt>Requirements</dt><dd>What the business actually needs, which isn’t always what the ticket says.</dd></div>
          <div><dt>Technical debt</dt><dd>Which shortcuts are fine, which ones will hurt, and when to pay them down.</dd></div>
          <div><dt>Mentoring</dt><dd>Helping other engineers grow into the decisions you used to make.</dd></div>
          <div><dt>Communication</dt><dd>Explaining a technical risk to someone who doesn’t need the details but does need to decide.</dd></div>
          <div><dt>Business constraints</dt><dd>Deadlines, budgets, contracts, compliance, and the size of the team you actually have.</dd></div>
          <div><dt>Tradeoffs</dt><dd>There’s rarely a perfect answer, only one that fits this situation better than the others.</dd></div>
        </dl>
        <p>As a <Link to="/work/three-continent-platform/">co-founder and CTO</Link>, most of my hardest days had nothing to do with syntax. The questions were more like: Should we build this at all? What happens when it fails at two in the morning? Who is going to maintain it? Can we ship something smaller first? None of those have an answer you can paste in.</p>
        <p>Nobody holds all of that in their head in full detail. What you can do is understand each area well enough to ask good questions, know who to bring in, and notice when a decision in one area creates a problem in another. I’ve written more about that side of the work on my <Link to="/leadership/">engineering leadership</Link> page.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">What changes with AI, and what doesn’t</h2>
        <p>AI tools have changed how I work. I use them to recall syntax, draft boilerplate, explain an unfamiliar codebase, and sketch a first version of something I’d otherwise spend an hour scaffolding. Retrieving information and generating code are both much faster than they used to be.</p>
        <p>What hasn’t changed is who is responsible for the result. An AI answer is a starting point, and it’s only as useful as your ability to judge it. You still need enough understanding to:</p>
        <ul className="post__list">
          <li><strong>Ask the right question.</strong> A vague prompt gets a plausible, generic answer. A precise one comes from knowing what matters in your system.</li>
          <li><strong>Validate the answer.</strong> Does it do what it claims? Does it handle the edge cases you care about?</li>
          <li><strong>Recognize incorrect assumptions.</strong> Generated code often assumes a different library version, a different schema, or a simpler world than the one you run in.</li>
          <li><strong>Understand the tradeoffs.</strong> There are usually several ways to solve a problem, and the first one offered isn’t always right for your constraints.</li>
          <li><strong>Debug it when it doesn’t work.</strong> Sometimes it won’t, in ways that only make sense if you understand what’s underneath.</li>
          <li><strong>Decide whether it fits the system.</strong> Code that works in isolation can still be wrong for your architecture, your team or your security model.</li>
        </ul>
        <p>I’ve seen generated code that looked clean and would pass a quick review: a Django view that ran one query per row once real data showed up, a JWT check that never validated the audience claim, a Kafka consumer that committed offsets before the work was done. Each one would have worked in a demo. Each one is the kind of thing you only catch if you already understand how the system behaves.</p>
        <p className="post__pull">So I don’t think AI makes understanding less important. It does the opposite. When information gets easier to retrieve, the scarce skill is knowing what to do with it: which answer to trust, which to question, and which to throw away.</p>
      </section>

      <section id="small-tools" aria-labelledby="small-tools-h">
        <h2 id="small-tools-h" className="post__h2">Why I build small tools</h2>
        <p>There’s a thought I have a lot. I keep looking this up. Or I keep working this out by hand, drawing the same diagram on a whiteboard, or explaining the same idea to someone new.</p>
        <p>At some point I stop and ask: <em>why don’t I just build a small tool for this?</em></p>
        <p>That habit is a big part of why I build side projects like <a href={ult.url}>Useful Little Tools</a>, a collection of small, focused browser tools. Some started because I needed a quick answer and didn’t want to open a spreadsheet again. Others started because I wanted to understand something properly, and building it was the fastest way to find the gaps in what I thought I knew.</p>
        <p>Small tools are a good way to learn because they’re honest. You can’t hand-wave a calculation you have to implement. You find out quickly which edge cases you forgot, which formula you only half remembered, and what you assumed without checking.</p>
        <p>They pay off three ways. I learn something while building them. I have something to reuse the next time the problem comes up. And now and then someone else hits the same problem, finds the tool, and saves themselves twenty minutes. For larger systems I write up the decisions instead, like the case studies on my <Link to="/projects/">projects</Link> page.</p>
      </section>

      <section id="keep-learning" aria-labelledby="keep-learning-h">
        <h2 id="keep-learning-h" className="post__h2">How I keep learning as a software engineer</h2>
        <p>I don’t have a grand system. These are the habits that have stuck:</p>
        <ol className="post__steps">
          <li><strong>Read the official docs, not just the first answer.</strong> A snippet tells you what to type. The docs tell you why, and what the defaults are.</li>
          <li><strong>Reproduce it small.</strong> When something confuses me, I build the smallest version that shows the behavior: a throwaway script, a local container, a two-table database.</li>
          <li><strong>Write down anything I’ve looked up twice.</strong> If I searched for it twice, I’ll search for it a third time. A short note saves that time.</li>
          <li><strong>Read the source when it matters.</strong> Frameworks are just code. Seeing how Django builds a query or how a client library retries teaches more than most articles, including this one.</li>
          <li><strong>Explain it to someone else.</strong> <Link to="/mentorship/">Mentoring</Link> is one of the best ways I know to find out what I don’t really understand.</li>
          <li><strong>Build something small.</strong> See above.</li>
          <li><strong>Stay curious outside my lane.</strong> Some of my most useful lessons came from support tickets, sales calls and budget reviews, not code.</li>
        </ol>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What I’d tell a newer engineer</h2>
      <div className="post__close-copy">
        <p className="lead">Being a strong engineer isn’t about remembering everything. It’s about:</p>
        <ol className="post__close-list">
          <li>Understanding the fundamentals.</li>
          <li>Knowing how to find what you need.</li>
          <li>Recognizing when something doesn’t look right.</li>
          <li>Continuing to learn.</li>
        </ol>
        <p>I still look things up. I expect I always will. The difference is that I no longer read it as a sign I’m behind. It’s part of the job. So is the learning, and that part is never finished.</p>
      </div>
    </>
  );
}
