import { Link } from 'react-router';
import StackLadder from '../../components/StackLadder';
import { ArrowRight } from '../../components/Icons';

// Infrastructure economics from every seat KC has sat in. Companion to the
// capacity planning post (forecasting method) and the hidden-cost post
// (architecture decisions); this one is about what each layer taught about
// money, and the founder's questions. Confirmed facts: carrier network with
// Cisco ACLs and NetScreen managed security; racked and cabled servers, ran
// Linux in production; Asterisk/OpenSIPS/MediaProxy/Python AGI; 8M+ minutes a
// month; LCR improved with call statistics and source-IP geolocation for
// media paths (KC); about 30% lower AWS costs at the media publishing role;
// co-founded platform to acquisition; Yippify. No other numbers. Employers
// unnamed, no years. Data center cost items beyond what KC handled are
// labelled as general considerations.

export const toc = [
  ['seats', 'Seven seats, one bill'],
  ['carrier', 'Carrier networks: capacity was capital'],
  ['data-center', 'Data centers: what a server really costs'],
  ['voip', 'VoIP: the cheapest route is not always the right one'],
  ['cloud', 'Cloud: capital became consumption'],
  ['architecture', 'Architecture: every box has a price'],
  ['people', 'People and process cost too'],
  ['founder', 'The founder’s questions'],
  ['layers', 'Every layer, on one page'],
];

export default function Body() {
  return (
    <>
      <section id="seats" aria-labelledby="seats-h">
        <h2 id="seats-h" className="post__h2">Seven seats, one bill</h2>
        <p>I have looked at infrastructure cost from several seats: as a network engineer at a carrier, as the person racking the servers, as a telecom engineer pricing a phone call, as a software developer and architect, as the infrastructure and DevOps engineer, as an engineering leader with a headcount budget, and as a founder whose own company paid the invoice. The view from each seat is different. The bill is the same bill.</p>
        <p className="post__answer">Infrastructure cost is never one number. It is capital spent ahead of demand, recurring consumption, carrier and vendor charges, the engineers who run what was built, and the complexity that taxes every change afterwards. Having paid each of those from a different seat is why I do not evaluate a technical decision on whether it works. I evaluate it on what it costs to operate as the business grows.</p>
        <p>The forecasting method is in <Link to="/writing/capacity-planning-carrier-networks-to-cloud/">capacity planning, from carrier networks to the cloud</Link>, and the architecture decisions have their own post on the hidden cost of software architecture, linked further down.</p>
      </section>

      <section id="carrier" aria-labelledby="carrier-h">
        <h2 id="carrier-h" className="post__h2">Carrier networks: capacity was capital</h2>
        <p>At a national carrier, capacity was something you bought. Routers, line cards, switch ports, circuits between sites. Adding it meant a purchase order, a shipping date, a circuit provisioning window, a configuration change, and coordination across the teams that owned each of those steps. You could not try something and roll it back by lunch. A decision to add capacity tied up capital for years, and a decision not to showed up as congestion that customers could feel.</p>
        <p>That is where my understanding of infrastructure economics was formed. Every link had a utilization graph and every graph had a date on it after which the hardware would not arrive in time. Running the network security and IP services side, with Cisco access control lists and later a managed firewall and VPN service, added a second lesson: security services ran on the same shared infrastructure, so a capacity decision on a link was also a security and a reliability decision. Nothing was ever just one kind of cost.</p>
      </section>

      <section id="data-center" aria-labelledby="data-center-h">
        <h2 id="data-center-h" className="post__h2">Data centers: what a server really costs</h2>
        <p>At the company I co-founded, I racked the servers, routers and switches myself, cabled them, configured the network, got the circuits turned up and installed Linux on every box before I wrote the software that ran on it. Later I ran the server farm behind more than eight million VoIP minutes a month at a voice services company. Physical infrastructure teaches you the price of things in a way a console never does, because you have to carry it.</p>
        <p>The costs I dealt with directly were the hardware itself, the rack space and connectivity in the colocation facility, and the operational support: the technician visits, the spare parts, the redundancy you buy so one failed drive does not become an outage. The wider list that anyone running a data center learns to count includes the equipment lifecycle, meaning the day the box is out of support arrives whether you planned for it or not; power and cooling, which scale with the hardware whether it is busy or idle; and utilization, because a server at ten percent load costs the same as one at eighty. The number that mattered most was the last one. In a data center you pay for peak capacity every day of the year, and most days are not the peak.</p>
        <p>I would not trade that experience for anything. When someone proposes a deployment today, I can picture the cabinet, the cables and the invoice, and I ask the questions that experience taught before the architecture is drawn.</p>
      </section>

      <section id="voip" aria-labelledby="voip-h">
        <h2 id="voip-h" className="post__h2">VoIP: the cheapest route is not always the right one</h2>
        <p>Telecom is where capacity, performance and cost became one problem for me, because a phone call touches all three at once. On the platform we built with Asterisk, OpenSIPS, MediaProxy and Python business logic through AGI, every call consumed signaling capacity, media bandwidth, proxy capacity and server channels, and every call paid a termination charge to whichever carrier completed it.</p>
        <p>Least-cost routing chooses, per call, the cheapest carrier that can complete it. The naive version picks the lowest rate and moves on. We improved ours with call statistics: answer rates, call durations, post-dial delay and quality by route, fed back into the routing decision. The reason is that the cheapest route is often cheap for a reason. It fails to connect, it connects late, or it connects with audio nobody wants to pay for twice. A customer who hangs up and redials because the quality was bad costs you the minutes, the retry, and sometimes the customer. A route that is slightly more expensive and reliably good is the higher-margin route once you count what bad quality costs. That is a business decision with an engineering implementation, and I have written about it as <Link to="/writing/open-source-voip-distributed-systems-lessons/#routing">routing as a business decision</Link>.</p>
        <p>The other improvement was choosing the media path by the caller’s location, estimated from the source IP address. Audio that hairpins through a single site crosses an ocean twice; audio steered to the geographically appropriate media path arrives sooner, sounds better, and uses less of the bandwidth we paid for. One routing change moved quality and cost in the same direction, which is the kind of change I look for first in any system.</p>
      </section>

      <section id="cloud" aria-labelledby="cloud-h">
        <h2 id="cloud-h" className="post__h2">Cloud: capital became consumption</h2>
        <p>Moving from the data center to the cloud changed the shape of the cost without changing its nature. Capacity stopped being capital bought ahead of demand and became consumption billed behind it. That removes the dark hardware problem and introduces a subtler one: waste is the default state of a cloud account, because nothing stops an over-sized instance, an unused volume or a forgotten environment from running forever.</p>
        <p>As CTO of a media publishing platform I led a re-platform onto AWS, and the infrastructure improvements that came with it helped bring AWS costs down about 30%. Right-sizing instances that had been bought for a peak that never came back. Scaling the web tier on real traffic. Fixing queries and connection handling so the database could be the size it should have been. Caching pages that did not change between requests. Finding resources nobody owned. It is the data center discipline applied to an invoice, and none of it is clever. On client work through Yippify the toolkit is newer, ECS and Fargate, Lambda, RDS, Redis, S3 and CloudFront, with Terraform and GitHub Actions so every change is reviewed before it costs money, and the questions are the ones I asked about cabinets.</p>
      </section>

      <section id="architecture" aria-labelledby="architecture-h">
        <h2 id="architecture-h" className="post__h2">Architecture: every box has a price</h2>
        <p>Software architecture is an infrastructure cost decision in disguise. Each service is compute, monitoring and attention. Kafka is a cluster and a team. A managed database trades a premium for someone else’s pager. A query without an index is a bigger instance next quarter. Buying a capability is often cheaper than building and maintaining one, unless the capability is the product. I lay those tradeoffs out in <Link to="/writing/hidden-cost-of-software-architecture/">the hidden cost of software architecture</Link>, and the principle underneath them is simple. Good architecture is the right solution for the business, and the newest technology is rarely what makes it right.</p>
      </section>

      <section id="people" aria-labelledby="people-h">
        <h2 id="people-h" className="post__h2">People and process cost too</h2>
        <p>Infrastructure optimization does not stop at the servers. As an engineering leader I plan team capacity the way I planned links: measured, with lead times, with headroom. Hiring adds delivery capacity after months, not on the day the offer is signed, and only if the work can be divided. Technical debt is interest paid on every change. Operational overhead grows with every service added and every process introduced. Incidents consume the week after as well as the night of. Deployment friction is a tax on every release.</p>
        <p>So adding engineers does not automatically add throughput, and adding microservices, Kubernetes or another process does not automatically make a system better. Each one is a tradeoff with a cost on both sides, and the job is to weigh it from the engineering side and the business side at the same time. The pattern of a team whose load exceeds its capacity is the one I describe in <Link to="/writing/what-sprint-carryover-is-telling-you/">what sprint carryover is telling you</Link>.</p>
      </section>

      <section id="founder" aria-labelledby="founder-h">
        <h2 id="founder-h" className="post__h2">The founder’s questions</h2>
        <p>The seat that changed me most was the one where the company was mine. As an engineer you ask whether a solution works. As a founder, and now running Yippify, the questions that follow are the ones that decide whether the business survives the solution. I need to estimate the operating cost, including what happens if usage grows tenfold, and identify who maintains it when the author is busy. Extra complexity needs a reason grounded in a problem the business actually has.</p>
        <p>Those questions shaped how I run my own company. Budgets are small and real, so infrastructure gets chosen for the product’s actual maturity and measured demand, not for the company it might become. Software subscriptions get reviewed like headcount, because each one is a recurring cost with a quiet growth curve. Build-or-buy is decided by whether the capability is what clients pay us for. Complexity has to earn its place, because every piece of it is maintained by a small team that also has to ship. Technical quality is balanced against business need, which sounds like a compromise and is really the whole job.</p>
        <p>I have carried those questions back into every engagement. A client does not need a system that would impress a conference. They need one that does the job, that their team can own after hand-over, and that costs what they expected it to cost next year.</p>
      </section>

      <section id="layers" aria-labelledby="layers-h">
        <h2 id="layers-h" className="post__h2">Every layer, on one page</h2>
        <p>Here is the whole stack as I have worked through it, with the capacity challenge and the cost consideration at each layer. The point of the figure is the breadth. Many engineering leaders know one or two of these layers deeply. I have paid the bill at all of them.</p>
        <StackLadder as="figure" no="684-1" />
        <p>I understand how technology works, and I understand how technology decisions affect performance, reliability, scalability, operating cost and business outcomes, because I have been responsible for each of those from the physical network up to the company paying to run it.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">From the network layer to the business layer</h2>
      <div className="post__close-copy">
        <p className="lead">I have worked on capacity and operating cost across carrier networks, data centers, VoIP and cloud infrastructure, as well as running engineering teams and my own businesses.</p>
        <div className="post__close-actions">
          <Link to="/about/#stack" className="action">The layers, on the About page <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
