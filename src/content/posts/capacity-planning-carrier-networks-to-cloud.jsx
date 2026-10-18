import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Capacity planning and cost, across infrastructure generations. Confirmed
// facts: carrier network capacity planning across 2,000+ collocations from
// measured utilization (SNMP/Cacti data); voice services server farm behind
// 8M+ VoIP minutes a month with expansion planned ahead of demand; the
// co-founded platform's Asterisk/OpenSIPS/MediaProxy stack, least-cost routing,
// source-IP geolocation to choose media paths, one data center to cloud
// regions on three continents; media publishing re-platform to AWS where
// infrastructure improvements contributed to about 30% lower AWS costs (KC);
// Yippify client work on ECS/Fargate, RDS, Lambda, S3, CloudFront, Terraform,
// Docker, GitHub Actions, PostgreSQL, Redis, Kafka. No other numbers. Employers
// unnamed, no years.

export const toc = [
  ['purchase-order', 'When capacity was a purchase order'],
  ['forecast', 'Forecasting from what you measure'],
  ['voip', 'A phone call is a capacity problem'],
  ['geo', 'Routing media by where the caller is'],
  ['to-cloud', 'Leaving the data center'],
  ['cloud-cost', 'Cloud capacity is a bill'],
  ['differences', 'What changed, what didn’t'],
  ['leadership', 'Capacity is a leadership problem too'],
  ['questions', 'The questions I ask'],
];

const compare = [
  { dim: 'Unit of capacity', then: 'A router, a line card, a circuit, a server in a rack', now: 'A container, a database instance size, a concurrency limit' },
  { dim: 'Lead time', then: 'Weeks to months: procurement, shipping, a technician at the site', now: 'Minutes, through an API or a Terraform plan' },
  { dim: 'Cost of being wrong', then: 'Too little: congestion and outages. Too much: hardware idle for years', now: 'Too little: throttling and errors. Too much: a bill every month, quietly' },
  { dim: 'What you forecast', then: 'Utilization on physical links and devices, months ahead', now: 'Demand curves, and the cost of each unit at each level of demand' },
  { dim: 'Who notices waste', then: 'Almost nobody; the box is already paid for', now: 'Finance, when the invoice arrives' },
  { dim: 'What stays the same', then: 'Measure first, plan from data, leave headroom, know the bottleneck', now: 'Measure first, plan from data, leave headroom, know the bottleneck' },
];

function Compare() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption>
          <span className="mono">Fig. 682-1</span> Capacity planning on physical infrastructure and in the cloud
        </caption>
        <thead>
          <tr>
            <th scope="col">Dimension</th>
            <th scope="col">Carrier and data center</th>
            <th scope="col">Cloud</th>
          </tr>
        </thead>
        <tbody>
          {compare.map((r) => (
            <tr key={r.dim}>
              <th scope="row">{r.dim}</th>
              <td>{r.then}</td>
              <td>{r.now}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="purchase-order" aria-labelledby="purchase-order-h">
        <h2 id="purchase-order-h" className="post__h2">When capacity was a purchase order</h2>
        <p>My first capacity planning job had a loading dock. I worked on a national carrier network spread across more than 2,000 collocations, and capacity meant physical things: bandwidth on a circuit, ports on a router, slots in a chassis, power and cooling in a cabinet. When a link filled up, the fix was a purchase order, a shipping date, and a technician driving to a site. If you noticed the link filling up the week it filled up, you were already late by a quarter.</p>
        <p className="post__answer">Capacity planning is the work of making sure a system has enough resources to meet demand before the demand arrives, without paying for resources that sit idle. On a carrier network that meant forecasting utilization on links and devices far enough ahead to cover hardware lead times. In the cloud it means the same forecast, with a monthly bill replacing the purchase order.</p>
        <p>The constraints taught the discipline. Several network generations ran side by side, from ATM to IP to VoIP, so capacity in one layer was not capacity in another. Hardware lead times were long. Security services shared the same infrastructure, so a congested link was also a security problem. And a mistake in either direction was expensive: too little capacity meant congestion customers could feel, and too much meant equipment sitting dark for years that someone had already paid for.</p>
      </section>

      <section id="forecast" aria-labelledby="forecast-h">
        <h2 id="forecast-h" className="post__h2">Forecasting from what you measure</h2>
        <p>The approach we settled on was simple and it has not changed since: plan from measured utilization, not from hope. We pulled interface statistics from the network over SNMP, graphed them, and projected the trend far enough ahead to order before the lead time ran out. Where the data said growth was, that is where the next circuit or line card went. Where it said nothing was happening, nothing was ordered, however loudly someone wanted a bigger box.</p>
        <p>Two habits came out of that. The first is to know the bottleneck. Every system has one resource that fills first, and the forecast only matters for that resource. On a router it might be a specific uplink, not the chassis. On a web platform it is usually the database, not the web tier. The second is headroom as policy. You decide in advance what utilization triggers an order and what utilization is an incident, and you write it down, so the decision is not made at two in the morning. I described the operational side of that network in the <Link to="/work/carrier-capacity/">carrier capacity case study</Link>.</p>
      </section>

      <section id="voip" aria-labelledby="voip-h">
        <h2 id="voip-h" className="post__h2">A phone call is a capacity problem</h2>
        <p>Voice made the problem sharper. At a voice services company I ran the engineering and the server farm behind more than eight million VoIP minutes a month, and the lesson there was that a phone call consumes capacity in four places at once, and they fill at different rates.</p>
        <p>SIP signaling sets up and tears down calls, and it scales with calls per second, so a burst of short calls hits it harder than a steady stream of long ones. Media is the audio, and it scales with concurrent calls times the bandwidth of the codec, so a thousand long calls hit it harder than a thousand short ones. The media proxies that relay audio for users behind NAT carry that same traffic again. And the Asterisk servers that handle call logic and features have their own ceiling in concurrent channels, which arrives sooner if the server is also transcoding. Plan for calls per second and you run out of bandwidth. Plan for bandwidth and signaling falls over on the busy hour.</p>
        <p>We planned expansion ahead of demand instead of after incidents, which sounds obvious and is mostly a matter of nerve, because the money goes out before the minutes come in. Routing was the other half. Least-cost routing picks, per call, the cheapest carrier that can still deliver acceptable quality, and the cheapest route is often the one that fails most interestingly. Every routing rule was a capacity decision and a cost decision at the same time, and <Link to="/writing/open-source-voip-distributed-systems-lessons/#routing">routing was a business decision</Link> long before it was an engineering one.</p>
      </section>

      <section id="geo" aria-labelledby="geo-h">
        <h2 id="geo-h" className="post__h2">Routing media by where the caller is</h2>
        <p>At the company I co-founded, our users were in South America, Asia and Africa and our platform started in one data center. Distance was the problem. Audio that crosses an ocean twice arrives late and arrives damaged, and no amount of server capacity fixes latency.</p>
        <p>The improvement that mattered most was choosing the media path by where the caller was. We used the source IP address to estimate the caller’s location and steered the audio through the geographically appropriate media path, instead of hairpinning every call through a single site. Call quality went up for distant users, because the audio travelled a shorter path, and the cost of carrying that audio went down, because we stopped paying to haul it across the world and back. Geolocation is an estimate, so the routing needed a sensible fallback for the cases where it was wrong, but as a single decision it changed both the quality customers felt and the bandwidth bill at once.</p>
        <p>That is the pattern I keep seeing. The best capacity decisions avoid consuming capacity in the first place.</p>
      </section>

      <section id="to-cloud" aria-labelledby="to-cloud-h">
        <h2 id="to-cloud-h" className="post__h2">Leaving the data center</h2>
        <p>Over time we moved that platform out of the data center I had cabled by hand and into cloud regions on three continents. Two things drove it. Users were far from the servers, and regions near them were the only real fix. And capacity in a data center is bought in large, lumpy steps, while a startup’s revenue grows in small, uneven ones. We needed capacity that followed revenue instead of leading it by a rack at a time.</p>
        <p>The move happened one region at a time, with customers on the phone throughout and a way back at every step. The <Link to="/work/three-continent-platform/">three-continent case study</Link> walks through the decisions. For this post the point is narrower: the migration was a capacity planning decision as much as an architecture one, and the business case was latency and cost structure, not fashion.</p>
      </section>

      <section id="cloud-cost" aria-labelledby="cloud-cost-h">
        <h2 id="cloud-cost-h" className="post__h2">Cloud capacity is a bill</h2>
        <p>The cloud removed the loading dock and added an invoice. Capacity became something you could have in minutes, and waste became something you paid for every month without anyone having to notice. Most of the cost optimization work I have done since is the carrier discipline applied to that invoice: measure what is used, plan from the data, and stop paying for what is not.</p>
        <p>As CTO of a media publishing platform, I led a re-platform of a portfolio of titles from WordPress to Ruby on Rails and a move of the hosting to AWS, and the infrastructure improvements that came with that move contributed to AWS costs roughly 30% lower. No single trick did it. It was the unglamorous list: right-sizing instances that had been provisioned for a traffic peak that never recurred, scaling the web tier on actual demand instead of a guess, fixing database queries and connection handling so the database did not need to be twice the size it should be, caching pages that did not change between requests, and finding resources that nobody was using and nobody remembered creating.</p>
        <p>On <Link to="/experience/#yippify">client work through Yippify</Link>, the same questions come up with a newer toolkit: ECS and Fargate for services that should scale with load, Lambda for work that happens rarely, RDS PostgreSQL sized for the real query load rather than the feared one, Redis in front of the queries that repeat, S3 and CloudFront for everything that does not need a server at all, and Terraform so that every one of those choices is reviewed before it costs money. Managed services win most of these decisions for a small team, because the operational cost of self-hosting is paid in engineers, which are more expensive than instances. They lose some of them at scale, where the managed premium stops being small. The job is knowing which side of that line a workload is on this year, and checking again next year.</p>
      </section>

      <section id="differences" aria-labelledby="differences-h">
        <h2 id="differences-h" className="post__h2">What changed, and what didn’t</h2>
        <Compare />
        <p>The bottom row is the one I would keep if I had to throw the rest away. The unit of capacity changed, the lead time collapsed, and the cost of over-provisioning turned from sunk hardware into a recurring bill, which is both better and more dangerous. The method did not change. Measure first, plan from data, decide the headroom in advance, and know which resource fills first.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">Capacity is a leadership problem too</h2>
        <p>The system with enough compute and not enough engineers to run it is the more common failure, and it is harder to see on a dashboard. Engineering capacity is team size, yes, but also velocity, the technical debt that taxes it, the operational overhead that each new service adds, the budget, the commitments already made, and the reliability the business expects. Every one of those is a resource that fills up, and each has a lead time: hiring takes months, onboarding takes longer, and paying down debt is a purchase order in engineer-weeks.</p>
        <p>Hiring more engineers does not add delivery capacity the way adding instances adds compute. It adds it after a delay, with coordination overhead, and only if the architecture gives the new people something separable to own, which is the argument in <Link to="/writing/team-size-should-influence-architecture/">your team size should influence your architecture</Link>. The leadership job is the same as the network job: find the constraint before it becomes an expensive incident, and order ahead of the lead time. <Link to="/writing/what-sprint-carryover-is-telling-you/">Sprint carryover</Link> is usually the utilization graph for a team that nobody read.</p>
      </section>

      <section id="questions" aria-labelledby="questions-h">
        <h2 id="questions-h" className="post__h2">The questions I ask</h2>
        <p>Before I size anything, physical or cloud, I want answers to a short list. What resource fills first, and what does it cost at the next step up. What is the real lead time, including the people. What utilization triggers action, and who decides. What demand are we planning for: measured growth, a launch we believe in, or a number from a pitch deck. What would we stop paying for if we were honest about usage. And what would it cost to be wrong in each direction, because those costs are never symmetric.</p>
        <p>I learned those questions when the answer was a purchase order and a technician in a truck. They work just as well when the answer is a line in a Terraform plan. The difference is that in the cloud, nobody stops you from being wrong. They just send the bill.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Build it, scale it, run it, and know what it costs</h2>
      <div className="post__close-copy">
        <p className="lead">Capacity planning taught me on carrier hardware, VoIP servers and cloud accounts that the method survives every generation of infrastructure.</p>
        <p className="post__close-principle">Know which resource fills first, and decide the headroom before two in the morning decides it for you.</p>
        <p>That is how I approach scaling a system and controlling what it costs to run, whether the constraint is a line card or a monthly invoice.</p>
        <div className="post__close-actions">
          <Link to="/writing/hidden-cost-of-software-architecture/" className="action">Next: the hidden cost of scaling too early <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
