import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Facts come from KC's brief (the list of startup roles), the founder posts already on this site
// (least-cost routing, the 30+ team of engineers, VoIP specialists and designers) and the projects
// pages (FedPath, Useful Little Tools, this site built with an assistant in the loop).
// The SMS-login example is hypothetical and labelled on the page.
export const toc = [
  ['not-a-plan', 'Being a generalist wasn’t a plan'],
  ['more-interesting', 'AI makes the range more useful'],
  ['questions', 'Knowing enough to ask the right questions'],
  ['specialists', 'Generalists still need specialists'],
  ['building-again', 'Why I’m enjoying building again'],
];

// ---------- Fig. 701-1: one feature, six sets of questions ----------
const lenses = [
  { area: 'Product', q: 'Do our users have reliable phone numbers, or did they sign up with email? What happens when someone changes their number?' },
  { area: 'Engineering', q: 'How long is a code valid, how many tries does someone get, and what happens if the text arrives twice?' },
  { area: 'Infrastructure', q: 'Which SMS provider, and what does login do when that provider is down?' },
  { area: 'Security', q: 'Can a bot make us send thousands of texts to numbers it controls? Is a text message strong enough protection for this account?' },
  { area: 'Cost', q: 'What does each text cost in each country we serve, and who pays when a bot sends ten thousand?' },
  { area: 'Support', q: 'Who answers “I never got the code,” and what can they actually do about it?' },
];

function Lenses() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 701-1</span> One feature, six sets of questions: adding text-message login (hypothetical)</caption>
        <thead><tr><th scope="col">Area</th><th scope="col">The question that sits around the code</th></tr></thead>
        <tbody>{lenses.map((l) => <tr key={l.area}><th scope="row">{l.area}</th><td>{l.q}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">An AI assistant can write the login flow in minutes and answer each of these questions when asked. Knowing to ask them, and seeing that the answers depend on each other, is the generalist’s part.</figcaption>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="not-a-plan" aria-labelledby="not-a-plan-h">
        <h2 id="not-a-plan-h" className="post__h2">Being a generalist wasn’t a plan</h2>
        <p>I’ve been having a lot of fun experimenting with AI lately. I get an idea, open a terminal, start a conversation, and before long there’s something running. One thing keeps surprising me: the part of my background that helps most is that I’ve done a little bit of everything.</p>
        <p>I didn’t choose that. Startups chose it for me. When we started the company there was no budget for a specialist in every seat, so the work went to whoever was there, and a lot of the time that was me. I’ve written about <Link to="/writing/founding-a-startup-isnt-easy/">being almost every department at once</Link>, so I’ll keep the list short. Over the years I’ve worked on product development and strategy, written the software, designed the architecture, run the servers and the network, handled security, done sales and business development, answered customer support, hired and mentored engineers, and watched the operating costs against what customers paid.</p>
        <p>I wasn’t the world’s best at any of those. What I picked up was how they push on each other. In VoIP, least-cost routing was the everyday example. The cheapest carrier for a call and the carrier with the clearest audio were rarely the same one. So every routing rule was also a call-quality question for support and a margin question for the business. You learn to ask what a decision does to the parts of the company you aren’t looking at. That habit is most of what I mean by judgment.</p>
      </section>

      <section id="more-interesting" aria-labelledby="more-interesting-h">
        <h2 id="more-interesting-h" className="post__h2">AI makes the range more useful</h2>
        <p>AI changed how quickly I can move between those areas. In one sitting I can go from a rough product idea to a data model, a first version of the code, the infrastructure to host it, a draft landing page and a first guess at what it would cost to run. Each of those used to be its own project, and sometimes its own hire.</p>
        <p><Link to="/projects/fedpath/">FedPath</Link> is the clearest example. It helps small businesses find and evaluate federal contracts, and it went from an idea to a working product much faster than I could have managed alone. <a href="https://usefullittletools.app">Useful Little Tools</a> and this site were built the same way, with an assistant in the loop and me reading what it wrote.</p>
        <p>What AI doesn’t know is my business. It doesn’t know who the customer is, what they’ll pay, how many support emails a feature will create, or which shortcut will hurt in six months. Ask it for a plan and you’ll get a very confident one. It’s now cheap to get an answer in a field you don’t work in. Telling whether that answer is any good still takes some experience in the field.</p>
      </section>

      <section id="questions" aria-labelledby="questions-h">
        <h2 id="questions-h" className="post__h2">Knowing enough to ask the right questions</h2>
        <p className="post__answer">Experience tells you which questions exist, so you can ask the AI, or an expert, before the problem shows up in production.</p>
        <p>I don’t need to be a security engineer to notice that a login form has no limit on attempts. I don’t need to be in finance to ask what a feature does to the monthly bill. I only need to know those questions are there.</p>
        <p>Here’s a hypothetical. Say I ask an assistant to add text-message login to a side project. It will write a working flow in minutes: a form, a code sent by SMS, a check, a session. The code will probably look fine. The questions that matter sit around it.</p>
        <Lenses />
        <p>A specialist in each area would catch their own row. What a generalist adds is seeing that the rows are connected. The security answer changes the cost, because bots that trigger texts run up the bill. The cost answer changes the product decision, because in some countries a text costs enough that email login makes more sense. Coming from telecom, the cost row is the first one I’d look at.</p>
        <p>The other half is noticing when something doesn’t add up. An AI cost estimate that ignores data transfer looks reasonable until you’ve paid a bandwidth bill. A design with five services for a tool three people will use looks professional until you’ve had to keep five services running. That’s the reason I wrote about <Link to="/writing/should-it-be-a-microservice/">when a microservice should actually be a microservice</Link>. You don’t have to be an expert to feel that something is off. You have to have seen the real version before.</p>
      </section>

      <section id="specialists" aria-labelledby="specialists-h">
        <h2 id="specialists-h" className="post__h2">Generalists still need specialists</h2>
        <p>None of this makes generalists better than specialists. As the company grew, the team grew to more than 30 people. I could talk with them about their work. I couldn’t do it as well as they did, which is why they were there.</p>
        <p>Specialists find the problems a generalist walks past: the slow query that only shows up at a million rows, or the race condition that appears once a week. AI doesn’t replace that depth either. It gets you to a decent first answer in almost any field. The last stretch, where the hard bugs and the real risks are, still belongs to people who have spent years in that one area.</p>
        <p>The generalist’s job on a team is connecting the parts. That means noticing that a security decision changes the support load, explaining an engineering tradeoff to the person who owns the budget, and asking the question that falls between two teams. I wrote about what happens when nobody watches those boundaries in <Link to="/writing/specialization-beyond-your-own-code/">specialization shouldn’t stop at your own code</Link>. Good teams need both kinds of people, and they need them to respect each other.</p>
      </section>

      <section id="building-again" aria-labelledby="building-again-h">
        <h2 id="building-again-h" className="post__h2">Why I’m enjoying building again</h2>
        <p>For a long time an idea had a price. To try a product, I had to find the time to build all of it myself, or find the people and the money to build it with me. Most ideas stayed ideas.</p>
        <p>AI lowered that price. I can try something quickly and find out whether it deserves more of my time. Because I’ve done a bit of everything, I can carry an idea further on my own than I used to: past the code, into hosting, security, a landing page and a rough idea of whether the numbers work. Lately that has meant <Link to="/writing/building-an-ai-job-search-agent-with-hermes/">a job-search agent on Hermes</Link>, <a href="https://getsurgeiq.com">SurgeIQ</a> for cycling stats, and a lot of work on this site.</p>
        <p>I still get things wrong. I still hand the hard parts to people who know them better. But the distance from “I wonder if…” to something I can show people is short again, and I’m enjoying that more than I expected to.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Knowing how the pieces fit</h2>
      <div className="post__close-copy">
        <p className="lead">AI helps me explore unfamiliar areas and try an implementation sooner. My background helps me spot where I need to investigate further or bring in a specialist.</p>
        <p className="post__close-principle">I am comfortable following a problem across several layers, and asking for help when it reaches beyond what I understand.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/about/" className="link-arrow"><span>More about my background</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
