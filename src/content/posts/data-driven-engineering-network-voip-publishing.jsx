import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// The data-to-decision method across three industries. Confirmed facts from
// KC's draft and the site: an R program that analyzed SNMP interface
// statistics to forecast carrier network capacity; VoIP least-cost routing
// improved with call statistics (ASR, ACD, completion, cost, volume,
// availability, media quality) and source-IP geographic routing on Asterisk,
// OpenSIPS, MediaProxy and Linux; publishing analytics on WordPress, Rails and
// custom platforms. The 1 Gbps link and the Article A / Article B figures are
// hypothetical and labelled. Employers unnamed, no years, no results of KC's
// own beyond those already on the site.

export const toc = [
  ['three-systems', 'Three systems that didn’t look alike'],
  ['capacity', 'Carrier networks: when to buy capacity'],
  ['voip', 'VoIP: where to send a call'],
  ['publishing', 'Publishing: which page to improve'],
  ['one-approach', 'Three industries, one approach'],
  ['data', 'The hard part was never collecting the data'],
  ['models', 'Reality doesn’t follow the model'],
  ['cloud-ai', 'Cloud and AI: same questions, new tools'],
  ['leadership', 'What it taught me about leading engineers'],
];

const rows = [
  { k: 'Primary data', a: 'SNMP interface statistics', b: 'Call and carrier statistics', c: 'Web and search analytics' },
  { k: 'Main challenge', a: 'Capacity and congestion', b: 'Cost against call quality', c: 'Traffic against monetization' },
  { k: 'Optimization goal', a: 'Reliable capacity at a reasonable cost', b: 'Good calls at a sustainable margin', c: 'Valuable traffic and revenue' },
  { k: 'Key decision', a: 'When to upgrade a link', b: 'Which carrier or route to use', c: 'Which content to improve or create' },
  { k: 'Business impact', a: 'Infrastructure spend and reliability', b: 'Termination cost and customer experience', c: 'Advertising revenue and profitability' },
];

// Fig. 686-1: a hypothetical day on a 1 Gbps link. Hourly utilization in Mbps,
// chosen so the daily average is exactly 400 and the 8 pm peak is 850.
const hourly = [150, 120, 100, 100, 100, 120, 200, 300, 380, 420, 440, 450, 450, 440, 430, 440, 480, 560, 680, 800, 850, 760, 560, 270];
const capacity = 1000;
const average = hourly.reduce((a, b) => a + b, 0) / hourly.length;
const peakHour = hourly.indexOf(Math.max(...hourly));

function PeakChart() {
  const [hover, setHover] = useState(null);
  const W = 400, H = 240, L = 40, R = 8, T = 22, B = 34;
  const pw = W - L - R, ph = H - T - B;
  const bw = pw / hourly.length;
  const y = (v) => T + ph - (v / capacity) * ph;
  const hour = (h) => `${h % 12 === 0 ? 12 : h % 12} ${h < 12 ? 'am' : 'pm'}`;
  return (
    <figure className="chart post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 686-1</span> Why the average hid the problem: one hypothetical day on a 1 Gbps link
        <span className="journey__key label">Average 400 Mbps looks comfortable. The evening peak is at 85% of capacity, and it was growing every month.</span>
      </figcaption>
      <svg className="chart__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Hourly utilization on a 1 gigabit link over one day" aria-describedby="peak-desc">
        <desc id="peak-desc">Bars show utilization by hour, low overnight and rising through the day. The daily average is 400 megabits per second. The peak at 8 pm is 850 megabits per second, 85 percent of the 1,000 megabit capacity.</desc>
        {[0, 500, 1000].map((v) => (
          <g key={v}>
            <line className="chart__grid" x1={L} x2={W - R} y1={y(v)} y2={y(v)} />
            <text className="chart__tick" x={L - 6} y={y(v) + 4} textAnchor="end">{v}</text>
          </g>
        ))}
        {hourly.map((v, h) => (
          <rect
            key={h}
            className={`chart__bar${h === peakHour ? ' is-peak' : ''}${hover === h ? ' is-hover' : ''}`}
            x={L + h * bw + 1}
            y={y(v)}
            width={bw - 2}
            height={y(0) - y(v)}
            tabIndex={0}
            aria-label={`${hour(h)}: ${v} Mbps`}
            onMouseEnter={() => setHover(h)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(h)}
            onBlur={() => setHover(null)}
          />
        ))}
        {hover !== null && hover !== peakHour && (
          <text className="chart__label" x={L + hover * bw + bw / 2} y={y(hourly[hover]) - 8} textAnchor="middle">{`${hour(hover)}: ${hourly[hover]}`}</text>
        )}
        {[0, 6, 12, 18].map((h) => (
          <text key={h} className="chart__tick" x={L + h * bw + bw / 2} y={H - B + 14} textAnchor="middle">{hour(h)}</text>
        ))}
        <text className="chart__tick" x={L + 23 * bw + bw / 2} y={H - B + 14} textAnchor="middle">11 pm</text>
        <text className="chart__axis" x={L - 6} y={T - 8} textAnchor="end">Mbps</text>
        <line className="chart__ref chart__ref--cap" x1={L} x2={W - R} y1={y(capacity)} y2={y(capacity)} />
        <text className="chart__label" x={W - R} y={y(capacity) - 6} textAnchor="end">Capacity 1,000 Mbps</text>
        <line className="chart__ref" x1={L} x2={W - R} y1={y(average)} y2={y(average)} />
        <text className="chart__label" x={L + 4} y={y(average) - 6}>Average {Math.round(average)} Mbps</text>
        <text className="chart__label is-peak" x={L + peakHour * bw + bw / 2} y={y(hourly[peakHour]) - 8} textAnchor="middle">8 pm: 850, 85%</text>
      </svg>
    </figure>
  );
}

// Fig. 686-2: the loop. Five steps on a ring; Validate feeds Measure again.
const loop = [
  { name: 'Measure', q: 'What is happening?' },
  { name: 'Analyze', q: 'What is the pattern?' },
  { name: 'Forecast', q: 'What will happen next?' },
  { name: 'Optimize', q: 'What do we change?' },
  { name: 'Validate', q: 'Did it work?' },
];

function Loop() {
  const W = 420, H = 320, cx = 210, cy = 160, r = 104;
  const pos = (i) => {
    const a = -Math.PI / 2 + (i / loop.length) * Math.PI * 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), a };
  };
  const arc = (i) => {
    const from = pos(i), to = pos((i + 1) % loop.length);
    const gap = 0.22;
    const a1 = from.a + gap, a2 = to.a - gap;
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  };
  const anchor = (x) => (Math.abs(x - cx) < 12 ? 'middle' : x > cx ? 'start' : 'end');
  const offset = (x) => (Math.abs(x - cx) < 12 ? 0 : x > cx ? 16 : -16);
  return (
    <figure className="chart post__figure">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 686-2</span> One method in every industry: measure, analyze, forecast, optimize, validate
        <span className="journey__key label">The last arrow is the one teams skip. Validation feeds the next measurement, and that is where the model gets corrected.</span>
      </figcaption>
      <svg className="chart__svg chart__svg--loop" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The data-to-decision loop" aria-describedby="loop-desc">
        <desc id="loop-desc">Five steps arranged in a circle: measure what is happening, analyze the pattern, forecast what happens next, optimize what to change, validate whether it worked. An arrow from validate back to measure closes the loop.</desc>
        <defs>
          <marker id="loop-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" fill="currentColor" />
          </marker>
        </defs>
        {loop.map((_, i) => (
          <path key={i} d={arc(i)} className={`loop__arc${i === loop.length - 1 ? ' is-return' : ''}`} markerEnd="url(#loop-head)" />
        ))}
        {loop.map((step, i) => {
          const { x, y } = pos(i);
          const ty = y < cy - 40 ? y - 32 : y > cy + 40 ? y + 30 : y + 4;
          return (
            <g key={step.name}>
              <circle className={`loop__node${i === 0 ? ' is-start' : ''}`} cx={x} cy={y} r="9" />
              <text className="loop__name" x={x + offset(x)} y={ty} textAnchor={anchor(x)}>{step.name}</text>
              <text className="loop__q" x={x + offset(x)} y={ty + 15} textAnchor={anchor(x)}>{step.q}</text>
            </g>
          );
        })}
        <text className="loop__center" x={cx} y={cy - 4} textAnchor="middle">Then adjust</text>
        <text className="loop__center loop__center--sub" x={cx} y={cy + 14} textAnchor="middle">and go around again</text>
      </svg>
    </figure>
  );
}

function Compare() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 686-3</span> Three industries, one method: measure, analyze, predict, optimize, validate</caption>
        <thead>
          <tr><th scope="col"> </th><th scope="col">Carrier networks</th><th scope="col">VoIP</th><th scope="col">Digital publishing</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => <tr key={r.k}><th scope="row">{r.k}</th><td>{r.a}</td><td>{r.b}</td><td>{r.c}</td></tr>)}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="three-systems" aria-labelledby="three-systems-h">
        <h2 id="three-systems-h" className="post__h2">Three systems that didn’t look alike</h2>
        <p>Early in my career I worked on carrier networks: routers, switches and the circuits between them. Later I built VoIP systems that routed telephone calls while trying to keep cost and call quality in balance. Then I ran the technology for a digital publishing business, where the raw material was website traffic, search rankings and advertising revenue. One of those moves packets, one connects calls, and one attracts readers and earns from their attention. Nobody would put them in the same category.</p>
        <p className="post__answer">Carrier capacity planning, VoIP call routing and publishing analytics are the same engineering problem with different data. Each one collects operational measurements, finds the pattern in them, forecasts or spots an opportunity, makes a decision with money attached, measures what happened, and adjusts. The products changed, and so did the definition of success. The method did not.</p>
        <p>I did not see that at the time. Each job felt like learning a new field from the beginning. It took the third one to notice that the lessons from the first two had been quietly doing most of the work.</p>
      </section>

      <section id="capacity" aria-labelledby="capacity-h">
        <h2 id="capacity-h" className="post__h2">Carrier networks: when to buy capacity</h2>
        <p>On a carrier network, capacity could not be added by clicking a button. A link approaching its limit meant understanding the traffic, forecasting demand, planning the upgrade and coordinating with carriers and equipment vendors, on lead times measured in months. Upgrading early spent money on capacity that sat idle. Upgrading late put congestion in front of customers. The question that mattered was when a link would fill, and the answer had to arrive before the lead time ran out.</p>
        <p>I worked on an R program that took network statistics collected over SNMP, the protocol that lets you read interface counters and other operational numbers off network equipment, and used them to analyze utilization on each connection and forecast when it would need more capacity. SNMP gave us visibility. The program’s job was to turn that visibility into a date.</p>
        <p>A hypothetical link shows why the obvious number was the wrong one. Say the connection carries 1 Gbps and its average utilization is 400 Mbps. That sounds comfortable. But if traffic reaches 850 Mbps every evening, and those peaks are higher each month, the average is hiding the problem. What we needed was the trend in the peaks, the growth rate, and the headroom left at the busy hour, which is what the R analysis produced: for each link, an estimate of when it would cross the threshold we had decided on in advance.</p>
        <PeakChart />
        <p>The goal was an answer to a business question, when to invest in more capacity, with reliability on one side of it and spending on the other. That taught me something I have leaned on ever since. More data does not produce better decisions. Understanding what the data means, and what action it calls for, does.</p>
      </section>

      <section id="voip" aria-labelledby="voip-h">
        <h2 id="voip-h" className="post__h2">VoIP: where to send a call</h2>
        <p>VoIP replaced the bandwidth question with a routing one. The platform ran on Asterisk, OpenSIPS, MediaProxy, Linux and software we wrote, and the questions were familiar anyway. How much traffic can the system carry? Where are the bottlenecks? Which routes perform? Where should a call go? How do we keep quality acceptable without spending more than we need to? And how do we know whether any of those decisions is working?</p>
        <p>Least-cost routing decides which carrier completes a call. Carriers charge different rates per destination, and across a large volume of minutes a small difference per minute becomes a real number on the bill, so the naive version picks the cheapest route and moves on. The cheapest route is frequently cheap for a reason. It fails to connect, connects slowly, or connects with one-way audio and delay, and a customer who stops using the service has made the cheap route very expensive.</p>
        <p>So we fed call statistics back into the routing decision. The measurements available to a VoIP operator include the answer-seizure ratio, the share of call attempts that are answered; the average call duration, which drops when quality is bad because people hang up; completion and failure rates; the carrier’s rate for the destination; call volume; route availability; and latency and media quality where it can be measured. Each one answers a different question. One carrier is cheap with a poor answer rate. Another completes everything and charges for it. A third is excellent to one country and useless to the next. With history per route and per destination, the routing decision could balance cost against quality instead of chasing the lowest rate. We also used the caller’s source IP address to route media through the geographically appropriate path, which improved the audio and reduced what we paid to carry it.</p>
        <p>Different data, same shape. Instead of deciding when to upgrade a link, we were deciding where to send a call, and the decision was once again a cost on one side and the customer’s experience on the other. I have written about the rest of that platform in <Link to="/writing/open-source-voip-distributed-systems-lessons/">what open-source VoIP taught me about distributed systems</Link>.</p>
      </section>

      <section id="publishing" aria-labelledby="publishing-h">
        <h2 id="publishing-h" className="post__h2">Publishing: which page to improve</h2>
        <p>Digital publishing looked like a different planet. Content management systems on WordPress, Rails and platforms we built, search engines, advertising networks, and a practically unlimited number of opportunities to attract a reader. The business model was different too: traffic earned revenue through advertising and affiliate programs, and a good article could keep bringing search visitors for years. The engineering questions were the ones I had been asking for a decade. Where is the traffic coming from? Which pages perform, and which underperform? What pattern explains the difference? Where should the next unit of effort go, and how do we improve results without raising costs?</p>
        <p>The analytics covered organic search traffic, rankings, page views, traffic sources, engagement, advertising revenue, revenue per thousand page views, affiliate conversions, and performance per piece of content. A hypothetical pair of articles shows why the obvious number was wrong again. Article A draws 100,000 page views a month and earns $500. Article B draws 20,000 and earns $600. On traffic, A wins. On revenue per thousand views, B earns six times as much, from a fifth of the audience. The interesting questions follow from that: why does B monetize better, is its audience different, does the topic carry commercial intent that advertisers pay for, and could we build more useful content around it? The goal was the right audience, at a value that supported the business, and the largest audience was not always that.</p>
        <p>SEO was the same loop with a different lever. A page already drawing visitors but ranking below competitors for the searches it answered was an opportunity: improve the content, fill the gaps, fix the technical problems, strengthen the internal links, and measure. Rankings were never guaranteed and the competition never stood still, but the process was the one from the network: collect, identify, improve, measure, repeat. The business side of that era is in <Link to="/writing/digital-publishing-seo-adsense-affiliate-ai-search/">what digital publishing taught me</Link>.</p>
      </section>

      <section id="one-approach" aria-labelledby="one-approach-h">
        <h2 id="one-approach-h" className="post__h2">Three industries, one approach</h2>
        <Loop />
        <Compare />
        <p>Put side by side, the differences are all in the nouns. The verbs are the same in every column: measure, analyze, predict, optimize, validate. That sequence is the thing I actually carried from job to job, and it is why the third industry was easier to learn than the first.</p>
      </section>

      <section id="data" aria-labelledby="data-h">
        <h2 id="data-h" className="post__h2">The hard part was never collecting the data</h2>
        <p>Collecting metrics is easy compared with deciding from them. A monitoring system gathers thousands of measurements. A VoIP platform writes a record for every call. A website tracks every interaction a visitor has. More dashboards do not make better decisions, and in each of these industries the most available metric was a trap. Average utilization hid the peaks that caused outages. The lowest carrier rate hid the calls that never connected. Page views hid the articles that lost money. Optimizing the wrong metric made the business worse while the chart went up.</p>
        <p>So I try to understand the business objective before I decide what to measure. Are we cutting cost, improving reliability, growing revenue, improving the customer’s experience, or making room for growth? The answer decides which metrics matter and how to read them. A number without that context is decoration.</p>
      </section>

      <section id="models" aria-labelledby="models-h">
        <h2 id="models-h" className="post__h2">Reality doesn’t follow the model</h2>
        <p>History helps predict the future and never guarantees it. Traffic patterns, calling behaviour and search algorithms all change, and a model that was right last year is wrong this year if the conditions underneath it moved, and nobody sends a notice. Forecasting is therefore a loop. On the network that meant comparing predicted utilization against what the links actually carried. In VoIP it meant checking that a routing choice was still delivering acceptable quality at the expected cost. In publishing it meant measuring whether the content changes produced the visibility, engagement or revenue we expected, or just the work.</p>
        <p>A useful system also tells you afterwards whether its recommendation was right, and that second half is the part teams skip.</p>
      </section>

      <section id="cloud-ai" aria-labelledby="cloud-ai-h">
        <h2 id="cloud-ai-h" className="post__h2">Cloud and AI: same questions, new tools</h2>
        <p>Cloud infrastructure runs the same loop with better instruments. We watch CPU, memory, database performance, request rates, latency and spend; we forecast demand, find the bottleneck, decide when to scale, and ask whether an architectural decision is worth what it costs. The tools moved from SNMP counters and an R script to cloud monitoring, SQL and Python. The questions did not move at all: do we have enough capacity, are we using it well, what happens when demand jumps, what will it cost, and what should we change. I describe that side in <Link to="/writing/capacity-planning-carrier-networks-to-cloud/">capacity planning from carrier networks to the cloud</Link>. The carrier years gave me the foundation long before the cloud was part of my daily work.</p>
        <p>AI adds a layer on top. Assistants can read logs, investigate an anomaly, summarize a trend and propose optimizations faster than a person can, and I use them for exactly that. The distinction that still matters is between finding a pattern and making a good operational decision. An assistant will recommend cutting capacity because average utilization is low, when the capacity exists for the peak, or for the day a region fails. It will recommend the cheaper carrier without the answer rate in front of it. It will recommend three hundred articles on popular keywords without asking whether any of them helps a reader. The tools are getting better quickly. The business and operational context that turns a pattern into a decision is still supplied by someone who has been wrong about it before.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">What it taught me about leading engineers</h2>
        <p>These experiences shaped how I run engineering teams more than any management book did. I do not believe engineering should be disconnected from business outcomes, and the three industries gave me a concrete test: when we build something, what problem does it solve, and how will we know whether it worked? A technically impressive system is not automatically a successful one. A network upgrade that adds capacity nobody needs is sound and wasteful. A routing algorithm that minimizes cost while ruining call quality is a failed optimization. A publishing platform that draws traffic and spends more than it earns is not a business.</p>
        <p>Performance, reliability, scalability, complexity and cost are connected, and understanding how they connect is what lets an engineering team talk to the rest of the company. Instead of “we need more servers”, we can say what demand we are forecasting, what risk we are managing and what the investment buys. Instead of “we improved performance”, we can say what it did to customer experience or operating cost. That is the difference between implementing technology and understanding its effect on the business, and it is the thing I look for when I hire and the thing I try to teach. The way I frame it with my own teams is in <Link to="/leadership/">how I run engineering</Link>.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Different products. Same problems.</h2>
      <div className="post__close-copy">
        <p className="lead">Carrier capacity, call routing, website traffic, cloud infrastructure: every one of them was limited resources, changing demand, performance that mattered, costs that mattered, and decisions made with incomplete information.</p>
        <p className="post__close-principle">Decide with the data you have, then go back and check whether the decision was right.</p>
        <p>After more than two decades, using the information we have to make a system work better and create more value for the business is still one of my favorite problems to solve.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re measuring <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
