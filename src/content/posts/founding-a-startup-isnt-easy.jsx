import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Reflective companion to the chronological founder story. Facts used here are
// the owner-confirmed ones already on that post (friends-and-family funding,
// open-source VoIP platform, the author racking and configuring the hardware, users in
// South America, Asia and Africa). The company stays unnamed and no years,
// revenue figures or specific incidents are given.

export const toc = [
  ['very-little-money', 'Very little money'],
  ['every-department', 'Every department'],
  ['learning-fast', 'Learning fast'],
  ['first-revenue', 'The first revenue'],
  ['profitable', 'Profitable isn’t finished'],
  ['not-wealthy', 'Not every founder gets rich'],
  ['as-a-leader', 'What it changed in me'],
];

export default function Body() {
  return (
    <>
      <section id="very-little-money" aria-labelledby="very-little-money-h">
        <h2 id="very-little-money-h" className="post__h2">Starting with very little money</h2>
        <p>Starting a company sounds exciting right up until you price the first server. We raised our initial money from friends and family, which is a particular kind of pressure. You’re not spending a fund’s money. You’re spending money from people who will see you at dinner. Every dollar had a face attached.</p>
        <p className="post__answer">So we bootstrapped. There was no engineering budget to speak of, no department for each responsibility, and nobody to escalate to. If something needed doing, someone had to work out how to do it, and most days that someone was me. I’ve told the <Link to="/writing/building-a-startup-from-idea-to-acquisition/">chronological version of the story</Link> elsewhere. This is the part about what it felt like, and what it left behind.</p>
      </section>

      <section id="every-department" aria-labelledby="every-department-h">
        <h2 id="every-department-h" className="post__h2">Being almost every department in the company</h2>
        <p>My job title said CTO. My actual job, on any given day, was whichever department the company was missing.</p>
        <p>Some mornings I was the field technician, in a cold data center racking servers, routers and switches, running cable and working out why a port that was fine yesterday wasn’t fine today. Then the network engineer, configuring routing, talking to carriers, chasing a connectivity problem that only showed up under load. Then the Linux sysadmin, patching the servers I had just racked and keeping them running on fewer of them than anyone would recommend.</p>
        <p>By the afternoon I was the developer, building the platform on open-source VoIP and writing the billing system, the backend, the APIs and the front end on top. I was also the architect, deciding what had to scale now and what could wait, and living with the shortcuts I’d chosen last month. The next day I’d be the UX designer, trying to understand why a customer couldn’t find the button I was sure was obvious, and then the product manager, choosing between the feature a customer wanted and the one that would keep the infrastructure standing.</p>
        <p>In between there was the business: vendors, service providers, customer support, and the spreadsheet where I learned what each server cost against what customers paid. When a customer couldn’t make a call, the person who answered, the person who checked the router, the person who read the logs and the person who had written the code in the logs were all me. There’s a certain clarity to that. Nobody else to blame, and nobody else to ask.</p>
      </section>

      <section id="learning-fast" aria-labelledby="learning-fast-h">
        <h2 id="learning-fast-h" className="post__h2">Learning everything as fast as possible</h2>
        <p>You cannot wait to become an expert when the thing is down. Some problems I learned about in the morning and had in production by the afternoon, because the alternative was customers who couldn’t use the service. That never stops being uncomfortable. You learn to research quickly, decide with incomplete information, watch what happens, and fix what you got wrong.</p>
        <p>The by-product was a versatility no single role would have given me. I learned to troubleshoot from a cable to a packet to a database row to a line of code, because the problem rarely announced which layer it lived in. I learned how a technical decision showed up on an invoice, and how the parts of a business depend on each other in ways no org chart draws. Most of how I think about engineering leadership started there.</p>
      </section>

      <section id="first-revenue" aria-labelledby="first-revenue-h">
        <h2 id="first-revenue-h" className="post__h2">The first revenue is a different kind of excitement</h2>
        <p>Building a product is one challenge. Getting someone to pay for it is another one entirely. You can believe for months that you’ve built something valuable. The first time a customer hands over money for it, the belief stops being yours alone. No launch since has felt quite like that.</p>
        <p>It also doesn’t end anything. After the first paying customer you need the second, then the hundredth. You need to improve the product, control expenses, keep the infrastructure up, support the people paying you, and get all of it to where the business sustains itself. Revenue changed how I thought about engineering. A technical decision stopped being about elegance or performance alone. It affected operating cost, whether customers stayed, and whether the company could keep going. Our users were in South America, Asia and Africa, many in communities the big carriers didn’t serve well, and a dropped call wasn’t an abstraction to them.</p>
      </section>

      <section id="profitable" aria-labelledby="profitable-h">
        <h2 id="profitable-h" className="post__h2">Profitable doesn’t mean finished</h2>
        <p>Profitability felt like a finish line and turned out to be a checkpoint. More customers brought more expectations. More traffic brought more infrastructure, and eventually a move out of the data center I had cabled by hand and into the cloud, so users could be served from a region near them at lower cost. Growth brought organizational problems rather than technical ones, and what had worked when the company was small stopped working as it grew.</p>
        <p>The founder’s job changes there, whether or not the founder notices. It stops being doing everything yourself and becomes building the systems, processes and team that run without you in the room. That was harder for me than racking servers ever was, and it’s what I think about most when I <Link to="/mentorship/">mentor engineers who are becoming leads</Link>.</p>
      </section>

      <section id="not-wealthy" aria-labelledby="not-wealthy-h">
        <h2 id="not-wealthy-h" className="post__h2">Not every startup makes its founders wealthy</h2>
        <p>Startup stories tend to be about the funding round, the acquisition and the founder who never has to work again. That isn’t most founders. Some companies succeed financially. Some survive for years without making their founders rich. Some fail after enormous effort by good people. Building a company is not a reliable path to wealth, and anyone who tells you otherwise is selling a course.</p>
        <p>The experience itself was worth more than I understood at the time. A company teaches you how technology, customers, money, operations and people connect, in a way a single job inside one department rarely can. It teaches you to carry uncertainty, work with less than you need, and take responsibility for the whole operation rather than your corner of it. It changed how I think, and that didn’t leave when I did.</p>
      </section>

      <section id="as-a-leader" aria-labelledby="as-a-leader-h">
        <h2 id="as-a-leader-h" className="post__h2">What it changed in me as an engineering leader</h2>
        <p>Because I’ve been the network engineer, the sysadmin, the developer, the designer, the product manager and the person reading the invoices, I understand what each of those teams means when they tell me something is hard. I’ve also learned, usually by paying for it, that engineering decisions have financial consequences, that technology exists to solve a customer’s problem rather than to be admired, and that the most sophisticated solution is often wrong for the company you actually have. Limited resources force you to prioritize, and that discipline is worth keeping when the resources arrive. The <Link to="/writing/software-architecture-lessons-from-different-systems/">architecture lessons that survived</Link> and <Link to="/writing/open-source-voip-distributed-systems-lessons/">what the VoIP platform taught me about distributed systems</Link> have their own posts.</p>
        <p>The one I hold onto most: a good leader doesn’t need to know everything, but they need to understand how the pieces fit together. A sustainable business matters more than impressive technology. I learned both by being the entire org chart for a while.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Worth more than it paid</h2>
      <div className="post__close-copy">
        <p className="lead">Not every startup makes its founders wealthy. But building something from nothing, learning as you go, and watching customers pay for something you made is something money doesn’t easily replace.</p>
        <p className="post__close-principle">I’d do it again, and I’d still price the first server before telling anyone.</p>
        <div className="post__close-actions">
          <Link to="/writing/building-a-startup-from-idea-to-acquisition/" className="action">Read the full founder story <ArrowRight /></Link>
          <Link to="/contact/" className="link-arrow"><span>Talk about building a company or a team</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
