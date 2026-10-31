import { Link } from 'react-router';
import { ArrowRight, ArrowOut } from '../../components/Icons';
import { person } from '../profile';

const ult = person.products.find((p) => p.name === 'Useful Little Tools');

// First-person account from KC: the lookup workflow (bookmarks, Stack Overflow,
// AI assistants) and the origin of Useful Little Tools. Tools named are the
// ones KC listed; nothing else is claimed about the product.

export const toc = [
  ['still-look-it-up', 'I still look it up'],
  ['bookmarks', 'Bookmarks'],
  ['stack-overflow', 'Stack Overflow'],
  ['more-tools-less-syntax', 'More tools, less syntax'],
  ['ai', 'AI assistants'],
  ['repeat-searches', 'The repeat searches'],
  ['useful-little-tools', 'Useful Little Tools'],
  ['building-teaches', 'Building teaches'],
  ['keeping-it-small', 'Keeping it small'],
  ['worse-developer', 'A worse developer?'],
  ['what-i-remember', 'What I remember'],
  ['experience', 'What experience changes'],
];

export default function Body() {
  return (
    <>
      <section id="still-look-it-up" aria-labelledby="still-look-it-up-h">
        <h2 id="still-look-it-up-h" className="post__h2">I still look up syntax almost every day</h2>
        <p>I’ve worked in technology long enough to have used more languages, frameworks and tools than I could list. I started with shell scripts, network operations and open-source VoIP. Since then I’ve written PHP, Perl, Python, Ruby on Rails, JavaScript and React, run Django against PostgreSQL, and spent a lot of time in AWS, Docker and Terraform.</p>
        <p className="post__answer">I still look up syntax almost every day. Sometimes it’s a PostgreSQL query I haven’t written in a while, or a Docker flag, or a Django ORM expression, or a JavaScript method I know exists but can’t picture. I know what I want the code to do. I just can’t always remember how to spell it.</p>
        <p>At some point I accepted that there’s too much to keep in my head, and I stopped treating that as a problem to fix. What changed instead was my system for finding things again. It went from bookmarks to Stack Overflow to AI assistants, and none of them quite fit the problem, so I started building small tools of my own.</p>
      </section>

      <section id="bookmarks" aria-labelledby="bookmarks-h">
        <h2 id="bookmarks-h" className="post__h2">Back when I bookmarked everything</h2>
        <p>Before AI assistants, and before Stack Overflow was everyone’s first stop, my system was bookmarks. Lots of them. Linux commands, regular expressions, SQL syntax, Git commands: if I found a useful cheat sheet or doc page, I saved it.</p>
        <p>I kept notes too, in text files or whatever note app I was using that year. If something took me an hour to figure out, I wrote it down, because I knew I’d need it again in six months.</p>
        <p>Six months later, I couldn’t remember where I’d put it. Was it a bookmark? A text file? A note from a previous job? I’d spend ten minutes hunting for something that took thirty seconds to use once I found it. Sometimes I gave up and searched the web again.</p>
      </section>

      <section id="stack-overflow" aria-labelledby="stack-overflow-h">
        <h2 id="stack-overflow-h" className="post__h2">Then came Stack Overflow</h2>
        <p>Stack Overflow made this easier. Instead of digging through my own notes, I could usually find someone who’d hit the same problem. Copy the example, adjust it, test it, move on.</p>
        <p>It brought its own problem. Not every answer was right. Some were out of date, and some worked without being good solutions. I’ve watched developers paste in a fix without understanding why it worked, and sometimes that fix solved the immediate problem and introduced a new one. You still had to understand what the code was doing. Finding an answer is one skill. Knowing whether the answer makes sense is a different one, and it’s the one that keeps you out of trouble.</p>
      </section>

      <section id="more-tools-less-syntax" aria-labelledby="more-tools-less-syntax-h">
        <h2 id="more-tools-less-syntax-h" className="post__h2">Knowing more tools meant remembering less syntax</h2>
        <p>I think I remembered more syntax when I knew fewer technologies. When I worked with a small set of tools, I typed the same commands every day, so of course they stuck.</p>
        <p>As my career went on I moved across the stack. One day I’d be debugging a React app, the next day a Django API, then PostgreSQL queries, Terraform configs, an AWS deployment that wouldn’t come up, or a Kafka consumer behaving strangely. Each of those has its own conventions and configuration, and even when two frameworks solve the same problem they tend to do it differently. After a while they blur together.</p>
        <p>I know how joins work. I might still need to look up the exact syntax for a JSON operation in PostgreSQL. I understand how authentication works. I don’t remember every option in a specific auth library. The engineering knowledge hasn’t gone anywhere. The implementation details have just stopped living in my head. I’ve written more about that distinction in <Link to="/writing/you-dont-need-to-remember-everything/">you don’t need to remember everything</Link>.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">AI made lookups easier, and showed me something else</h2>
        <p>I use AI coding assistants regularly now. They’re useful when I need syntax, want to explore a library I haven’t used, or want to understand how a framework handles something. Describing what I’m trying to do is faster than reading five documentation pages. The same idea reaches past code: I <Link to="/writing/connect-strava-to-claude-mcp/">connected my Strava data to Claude</Link> mostly so I could ask training questions in plain language instead of exporting spreadsheets.</p>
        <p>A lot of the time I don’t want an assistant to write code for me, and I don’t want a conversation at all. I want to remember a command. Find a Git commit, inspect a Docker container, check a regex, remind myself how a JOIN behaves. Open something, find it, get back to work.</p>
      </section>

      <section id="repeat-searches" aria-labelledby="repeat-searches-h">
        <h2 id="repeat-searches-h" className="post__h2">The things I kept searching for</h2>
        <p>Git was the obvious one. I’ve used it for years and there are still commands I don’t use often enough to keep. Finding which commit introduced a change. Checking where a branch diverged. Pulling something back out of the reflog. I know Git can do all of these. I just don’t remember the incantation.</p>
        <p>Docker was the same. I use it most weeks, and I still don’t memorize every combination of flags. SQL, regular expressions and JWTs went on the same list.</p>
        <p>Every one of these was the same small problem. I know what I want to do, and I need help remembering how. More bookmarks weren’t going to fix that, so I built something.</p>
      </section>

      <section id="useful-little-tools" aria-labelledby="useful-little-tools-h">
        <h2 id="useful-little-tools-h" className="post__h2">Useful Little Tools</h2>
        <p className="post__answer">That’s where <a href={ult.url}>Useful Little Tools</a> came from. It’s a collection of small browser tools I built to solve problems I actually hit in my own work, each one a page I can open and use. No platform, no feature list.</p>
        <ul className="post__list">
          <li>A Git command finder, where I search by what I’m trying to accomplish instead of by the command name.</li>
          <li>A Docker command finder that works the same way.</li>
          <li>A SQL JOIN visualizer, because joins aren’t hard once you understand them, but seeing how the tables relate helps when a query is unfamiliar.</li>
          <li>A regex tester, since regular expressions are something I understand while writing and forget a few weeks later.</li>
          <li>A JWT debugger, for when I just want to see what’s inside a token without setting anything up.</li>
        </ul>
        <p>The list keeps growing. I’ve been experimenting with tools for Django, Kafka and SQL query analysis. Most of these exist elsewhere already, probably in better versions. Mine are built around how I work and how I think, and I learn something each time I build one.</p>
      </section>

      <section id="building-teaches" aria-labelledby="building-teaches-h">
        <h2 id="building-teaches-h" className="post__h2">Building the tool teaches me the thing</h2>
        <p>To build a tool that explains something, I have to understand it well enough to make it useful.</p>
        <p>Take joins. Reading a description of <code>INNER</code>, <code>LEFT</code> and <code>FULL OUTER JOIN</code> is easy. Building a visualizer forces harder questions. What happens to the unmatched rows? What does the result actually look like? How do you show the difference without a wall of text? The same is true for Kafka partitions and consumer groups, or for database execution plans. Building the tool makes me organize what I know, and now and then I find that something I thought I understood has more to it than I remembered. That’s part of the fun.</p>
      </section>

      <section id="keeping-it-small" aria-labelledby="keeping-it-small-h">
        <h2 id="keeping-it-small-h" className="post__h2">Keeping it small</h2>
        <p>One thing I’ve learned from building software products is how fast a simple idea gets complicated. You start with one feature. Someone suggests accounts. Then dashboards, notifications, integrations. Before long you’ve built an application around something that needed one page.</p>
        <p>I’m trying to avoid that here. Most of these tools don’t need accounts. They don’t need to store anyone’s data on a server, and they don’t need much infrastructure. Many run entirely in the browser: open the page, use it, close it. Browser-only tools have limits, and some things do need an external service. I’ll take the simplicity. A little JavaScript covers a lot of problems that people reach for a backend, a database and a cluster of microservices to solve. It’s the same instinct behind <Link to="/writing/should-it-be-a-microservice/">how I decide whether something should be a microservice</Link>.</p>
      </section>

      <section id="worse-developer" aria-labelledby="worse-developer-h">
        <h2 id="worse-developer-h" className="post__h2">Does this make me a worse developer?</h2>
        <p className="post__answer">I think it makes me a better one. Over the years I’ve cared less and less about how much syntax a developer can recite. When I work with engineers, I want to know how they approach a problem. I look at how they investigate unfamiliar work, follow an issue across an application, and explain their decisions. I want them to understand why a solution works and notice unnecessary complexity. Those matter far more to me than a function signature.</p>
        <p>I’ve worked with developers who know their framework cold and stall the moment a problem crosses into another part of the system. A frontend developer who understands React but can’t investigate an API issue. A backend developer who knows Django inside out and can’t tell what’s happening in the browser. Specializing is fine. Software doesn’t run in isolation, though. The browser, the API, the database, the infrastructure and the external services all have to work together, and you need enough understanding of each to follow how they connect. Sometimes that means opening the docs, asking someone, or reaching for a tool that jogs your memory. I’ve made the longer version of that argument in <Link to="/writing/specialization-beyond-your-own-code/">specialization shouldn’t stop at your own code</Link>.</p>
      </section>

      <section id="what-i-remember" aria-labelledby="what-i-remember-h">
        <h2 id="what-i-remember-h" className="post__h2">What I actually try to remember</h2>
        <p>I’ve gotten selective about what stays in my head. Concepts, mostly. How a request moves through a system. How a database executes a query. How distributed systems talk to each other, and how to investigate when they stop. How an architecture decision shows up later in performance, cost and maintenance. How to notice that we’re building something more complicated than it needs to be.</p>
        <p>Those carry over from one technology to the next. Syntax usually doesn’t. Frameworks change, libraries get deprecated, APIs evolve, tools come and go, and the fundamentals outlast all of them. I’ve collected the ones that held up across very different systems in <Link to="/writing/software-architecture-lessons-from-different-systems/">software architecture lessons from different systems</Link>. When I forget the details, I look them up. Increasingly, I open one of my own tools.</p>
      </section>

      <section id="experience" aria-labelledby="experience-h">
        <h2 id="experience-h" className="post__h2">What experience changes</h2>
        <p>Early in my career I assumed experienced developers knew everything. They seemed to have an answer for every question. Now I think they’d just seen more problems. They recognize patterns, they know where things tend to break, they understand the tradeoffs behind different solutions, and they’ve learned how to work things out when they don’t know.</p>
        <p>I still forget commands. I still read documentation. And instead of maintaining hundreds of bookmarks, I’m slowly building a set of small tools that make my own work easier. If they help someone else, even better.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Open one and use it</h2>
      <div className="post__close-copy">
        <p className="lead">Useful Little Tools is a set of small, practical developer tools for everyday problems. No setup, no account.</p>
        <p className="post__close-principle">Building these tools gives me a reason to revisit the concepts and a convenient place to check the details next time.</p>
        <div className="post__close-actions">
          <a href={ult.url} className="action">Explore Useful Little Tools <ArrowOut /></a>
          <Link to="/projects/" className="link-arrow"><span>The larger systems I write up instead</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
