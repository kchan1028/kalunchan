import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Three side projects and what building them has been like. Source: KC's brief (Oct 19 2026) plus the projects'
// own docs and git history, checked Oct 19 2026. FedPath (gofedpath.com; repo side-projects/govcon-readiness):
// GovCon Readiness merged the GovCon Eligibility Screener and SAM Registration Checklist from Useful Little Tools
// (docs/PLAN.md, /about/); first real watch returned 26 results, 12 Defense spare-parts orders matched a
// construction company on "repair"; 968 of 1,000 notices had no description, 78 no NAICS; missing information was
// shown as ineligibility and is now "unknown"; "a.m." sentence split (docs/MATCHING_VALIDATION.md, commit 4d88dfa);
// no numeric match score by design; private beta, no real-user testing yet (docs/UX_PERSONA_AUDIT.md). VeloWise
// (getvelowise.com; repo delivery-intelligence): grew from the Sprint Progress, Jira Bottleneck and Jira Carryover
// analyzers (README); browser-only first version reversed by multi-tenant persistence (DECISIONS #1, #32); data
// tiers and Observed/Inferred/Unavailable labels (#2, #3); "interrupt load" earned (#20); epic rows counted as
// work items, fixed (#26); Done renamed Completed (#31); worst signal, never a score. Trading Research Lab (local,
// side-projects/trading): research only with demo tickers, Alpaca data and paper trading the same day; paper only,
// live trading out of scope; sizing bug $10k vs $100k (audit GAP-004, a8b10d8); 2026-10-19 audit, four
// overlapping ranking engines, 57 of 104 tables empty, consolidation with identical recommendations (4794bf1);
// AAPL pullback backtest +4.84% vs +96.88% buy-and-hold; BENCHMARK_VALIDATION.md: 58 dates, no measurable edge,
// ~30 forward dates needed (~7 months at 5 days), 63% momentum overlap from uneven sampling. No profitability,
// customers, usage or AI coding claims. KC's motivation for stock research beyond curiosity is not on record.

export const toc = [
  ['three', 'Three different problems'],
  ['idea', 'An idea is usually the easy part'],
  ['working', 'Making something work'],
  ['simple', 'Simple takes more decisions'],
  ['useful', 'Working software and a useful product'],
  ['learning', 'Learning by building'],
  ['enjoy', 'Why I still enjoy it'],
];

export default function Body() {
  return (
    <>
      <section id="three" aria-labelledby="three-h">
        <h2 id="three-h" className="post__h2">Three different problems</h2>
        <p>I’ve been spending some of my free time on three side projects. I came to each from a different direction. One grew out of client work, one out of managing engineering teams, and one out of curiosity about a subject I knew very little about. The problems have nothing in common, and the process of building them has been more alike than I expected.</p>
        <p><a href="https://gofedpath.com">FedPath</a> helps small businesses find U.S. federal contract opportunities and decide whether each one is worth pursuing. Part of my <Link to="/writing/building-public-sector-applications/">public-sector work</Link> has been on systems that support small business certification programs, so I’ve seen how much a small company has to understand before it can even bid. Anyone can search open notices on SAM.gov. Deciding whether a notice fits your business, and is worth the hours a proposal takes, is the hard part.</p>
        <p><a href="https://getvelowise.com">VeloWise</a> comes from leading engineering teams. Most teams already have the data that explains how delivery is going, sitting in their tracker, and what they usually get from it is a velocity number. VeloWise reads that existing data and shows sprint progress, scope changes, carryover, bottlenecks and what actually reached production, so a leader can see why a sprint is behind. I wrote about the causes behind one of those numbers in <Link to="/writing/what-sprint-carryover-is-telling-you/">what sprint carryover is telling you</Link>.</p>
        <p>The third has no public site. Trading Research Lab is a system I’m building to learn how stock research works: finding candidates, scoring them, reading the overall market, checking a trade plan against risk rules, backtesting, and tracking what happened. It trades only simulated money in a paper account, and live trading is out of scope by design. I’m a beginner in this domain, so the project is as much about learning the subject as building the software.</p>
      </section>

      <section id="idea" aria-labelledby="idea-h">
        <h2 id="idea-h" className="post__h2">An idea is usually the easy part</h2>
        <p>Two of the three started as something much smaller. FedPath began as two free tools on <a href="https://usefullittletools.app">Useful Little Tools</a>: an eligibility screener for small business certification programs and a SAM.gov registration checklist. VeloWise began as three separate browser tools that each read a Jira CSV export, one for sprint progress, one for bottlenecks and one for carryover. Each answered one question. Once a tool worked, the next question was obvious, and the answer usually lived in a different tool. A business that knows it’s eligible wants to know which opportunities to go after. A manager looking at carryover wants to know whether a bottleneck caused it.</p>
        <p>Combining the tools into a product brought questions the tools never had to answer. FedPath needed accounts, saved searches, a daily sync with SAM.gov and a way to notice when a solicitation changed. VeloWise’s first version kept everything in the browser, so imported data never left the device. That was a deliberate decision, and I reversed it once the product needed organizations to keep shared projects.</p>
        <p>Trading Research Lab changed direction on its first day. The first version was research only, with no brokerage connection and a handful of made-up tickers for demonstration. By the end of that day it had real market data and a paper trading account, with the connection hard-coded to paper so there is no path to real money.</p>
      </section>

      <section id="working" aria-labelledby="working-h">
        <h2 id="working-h" className="post__h2">Making something work</h2>
        <p>Real data is where most of my assumptions broke. The first time FedPath ran an opportunity watch against real SAM.gov notices for a construction company, it returned 26 results. Twelve were Defense spare-parts orders for things like solenoid valves, matched on the word “repair.”</p>
        <p>When I went through 1,000 notices, 968 had no description text and 78 had no NAICS code. That changed what the product could honestly say. Missing information had been showing up as if the business were ineligible. Now it shows as unknown, with a prompt to check. Smaller things broke too. Splitting a solicitation into sentences cut “11:00 a.m. Eastern time” in half at “a.m.”</p>
        <p>VeloWise had its own version with Jira exports. A plain CSV export has no sprint dates or change history, so the product works in tiers depending on the data you give it, and every number is labelled observed, inferred or unavailable. Real exports also include epic and initiative rows, and for a while those were counted as work items in aging and cycle time. Nothing crashed. The numbers were just wrong.</p>
        <p>Trading Research Lab gave me the clearest case of a bug that looks like a working feature. Trade plans sized positions as if the account held $10,000 while the paper account held $100,000, so a plan that said it risked 1% was really risking about 0.1%. Every calculation was correct for its inputs.</p>
        <p>I should be honest about where these fixes came from. FedPath is in private beta and VeloWise is a personal project, so neither has had many real users putting it through its paces. Most of what I’ve fixed came from running the products against real data and walking through them the way a new user would. That catches a lot. It won’t catch everything.</p>
      </section>

      <section id="simple" aria-labelledby="simple-h">
        <h2 id="simple-h" className="post__h2">Simple takes more decisions</h2>
        <p>At work I push back on unnecessary complexity, especially in UX, and I’ve written about why in <Link to="/writing/what-engineering-leadership-actually-does/#simpler">what engineering leadership actually does</Link>. On my own projects nobody else is in the room to ask the question, so I have to ask it of myself.</p>
        <p>FedPath and VeloWise ended up making the same choice: no single score. FedPath never shows a figure like “82% match.” It shows what matches, what’s missing and what nobody knows yet, each with its reason. VeloWise calls a sprint on track, at risk or behind based on the worst signal it finds, without blending the signals into a number. A score would look tidier. It would also hide the reason, and the reason is what someone needs to decide what to do next.</p>
        <p>Names needed the same care. Finishing work in a sprint doesn’t mean it reached users, so VeloWise’s “Done” column is now “Completed” and released work is shown separately. A metric called interrupt load only appears when there is enough sprint history to justify the name. Otherwise it’s called added work.</p>
        <p>Trading Research Lab needed simplifying more than either of the others. When I stopped and audited it, I found at least four ranking engines doing overlapping jobs, and 57 of its 104 database tables had never held a row. The audit’s summary was that the project was accumulating features faster than it validated them. I consolidated the engines and compared the recommendations before and after. They were identical, which said a lot about how much that extra machinery had been adding.</p>
      </section>

      <section id="useful" aria-labelledby="useful-h">
        <h2 id="useful-h" className="post__h2">Working software and a useful product</h2>
        <p>Everything I’ve described ran and produced output. The questions that decide whether it helps anyone are different for each project.</p>
        <p>For FedPath, after reading an opportunity, does the owner of a small business know whether to spend a week on a proposal? A list of 26 matches with twelve valve orders in it is working software that wastes someone’s evening.</p>
        <p>For VeloWise, can an engineering leader look at a sprint that’s 70% complete and tell whether the cause is a review queue, scope added mid-sprint or finished work waiting to ship? Each of those needs a different response. A dashboard that shows the 70% without the reason hasn’t helped much.</p>
        <p>For Trading Research Lab the question is blunt: does the research lead to better decisions than something simple? So far it doesn’t. A pullback strategy backtested on Apple returned 4.84% over a period when buying and holding returned 96.88%. When I replayed the scoring over 58 historical dates and compared its top five picks with SPY, QQQ, random portfolios, simple momentum and an equal-weighted universe, it showed no measurable edge. Forward tracking has just started, and collecting about 30 independent periods at a five-day horizon will take around seven months. Until then, every pick it makes is a hypothesis to test, and the system only trades on paper.</p>
        <p className="post__answer">Working software runs and produces correct output for its inputs. A useful product helps someone make a better decision or finish a task. A feature can do the first and fail the second, so I judge each of these projects by whether it answers its user’s real question, not by how many features it has.</p>
      </section>

      <section id="learning" aria-labelledby="learning-h">
        <h2 id="learning-h" className="post__h2">Learning by building</h2>
        <p>The three projects sit at different distances from what I already know. FedPath draws on public-sector work, so I started with a decent sense of the domain and still misjudged the data. VeloWise draws on leading engineering teams, so I knew the questions well and had to learn how messy the exports that answer them are.</p>
        <p>Trading Research Lab is the one where I’m learning the domain while building the system, and the mistakes are more basic. I’ve had to learn why a backtest needs data it wasn’t tuned on, why a result from one stock says little about a portfolio, and how easy it is to measure the wrong thing. My own benchmark check once showed a 63% overlap between the lab’s picks and simple momentum. The cause was uneven sampling dates in the measurement, not anything the strategy did.</p>
        <p>To make a system behave, I have to decide what it does when data is missing, when two signals disagree, or when the honest answer is “we don’t know yet.” On all three projects, those decisions are where I’ve learned the most.</p>
      </section>

      <section id="enjoy" aria-labelledby="enjoy-h">
        <h2 id="enjoy-h" className="post__h2">Why I still enjoy it</h2>
        <p>I’ve worked as an engineer, a <Link to="/writing/building-a-startup-from-idea-to-acquisition/">founder</Link>, a CTO and an engineering leader, and I still like being close to the work of building a product. A lot of effort sits between an idea and something useful: decisions nobody sees, an edge case hiding in the thousandth record, and features that work and still need to change. They also keep me close to the problems engineers and product teams deal with every day.</p>
        <p>None of the three is finished. FedPath is in private beta. VeloWise keeps changing as I find better ways to explain a sprint. Trading Research Lab may end up showing me that simple strategies are hard to beat, and that would be worth learning too.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What keeps me building</h2>
      <div className="post__close-copy">
        <p className="lead">I build these because I like working out what a product should actually do.</p>
        <div className="post__close-actions">
          <Link to="/projects/" className="action">See the projects <ArrowRight /></Link>
          <Link to="/contact/" className="link-arrow"><span>Tell me what you’re building</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
