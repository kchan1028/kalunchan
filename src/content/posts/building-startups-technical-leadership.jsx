import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Startup engagements, from KC's draft and the fractional-CTO facts already on
// the site: a hybrid iOS/Android app on a LAMP backend on AWS; consulting for
// the company that acquired his own startup; a fitness platform on Laravel,
// React and Python scraping; a wholesale VoIP business on open-source telecom
// (Asterisk, OpenSIPS) with a Yii application; a real estate platform on Go,
// React and Next.js with a fully remote team; a 360-degree virtual tour app on
// Rails, React and A-Frame. Clients unnamed. No outcomes, users, revenue or
// cost figures are stated for these engagements because none are confirmed;
// KC can add them per project. No years.

export const toc = [
  ['not-just-code', 'Rarely just a developer'],
  ['hybrid', 'A hybrid mobile app on a LAMP backend'],
  ['after-acquisition', 'Staying on after selling my own company'],
  ['fitness', 'A fitness platform on Laravel, React and Python'],
  ['wholesale-voip', 'A wholesale VoIP business on open source'],
  ['real-estate', 'A real estate platform on Go, React and Next.js'],
  ['tours', 'A 360-degree virtual tour app'],
  ['in-common', 'What they had in common'],
  ['what-startups-need', 'What startups need from a technical leader'],
  ['hands-on', 'Being hands-on still matters'],
  ['founder', 'The founder perspective'],
];

const projects = [
  { p: 'Hybrid mobile application', t: 'iOS and Android, LAMP, AWS', f: 'Cross-platform delivery and backend infrastructure' },
  { p: 'Post-acquisition consulting', t: 'The acquired platform', f: 'Technical continuity and knowledge transfer' },
  { p: 'Fitness platform', t: 'Laravel, React, Python', f: 'Full-stack delivery and external data integration' },
  { p: 'Wholesale VoIP', t: 'Asterisk, OpenSIPS, Yii', f: 'Telecom infrastructure and the business application' },
  { p: 'Real estate platform', t: 'Go, React, Next.js', f: 'Modern application architecture with a remote team' },
  { p: '360-degree virtual tours', t: 'Rails, React, A-Frame', f: 'User experience and media delivery' },
];

function Projects() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 687-1</span> Six startup engagements, and where the engineering effort went</caption>
        <thead><tr><th scope="col">Project</th><th scope="col">Technology</th><th scope="col">Engineering focus</th></tr></thead>
        <tbody>
          {projects.map((r) => <tr key={r.p}><th scope="row">{r.p}</th><td>{r.t}</td><td>{r.f}</td></tr>)}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="not-just-code" aria-labelledby="not-just-code-h">
        <h2 id="not-just-code-h" className="post__h2">Rarely just a developer</h2>
        <p>Over the years I have worked with a fair number of startups. Some were building mobile applications. Others were building fitness platforms, telecom services, real estate software or virtual tour technology. Each had to turn an idea into a working product with limited time, limited money and a list of wants longer than either.</p>
        <p>When you work with a startup you are rarely only the developer. You might be helping the founder decide what to build, choosing the stack, designing the architecture, standing up the infrastructure, writing the code, troubleshooting production, and working out how to deliver all of it without spending money the company does not have. Some days you do several of those before lunch. I have lived that as a founder of my own company and as the person helping other people build theirs, and each engagement taught me something the last one had not.</p>
        <p className="post__answer">Startups need more than someone who can write code. They need someone who can help them make the right technical decisions for the stage their business is in: what to build now and what can wait, which stack the team can actually own, how simple the architecture can be, and what it will cost to run.</p>
      </section>

      <section id="hybrid" aria-labelledby="hybrid-h">
        <h2 id="hybrid-h" className="post__h2">A hybrid mobile app on a LAMP backend</h2>
        <p>One startup needed a mobile application on both iOS and Android, and I served as its interim head of engineering. We built a hybrid app, one codebase rendering on both platforms, backed by a LAMP stack, Linux, Apache, MySQL and PHP, running on AWS with REST APIs between them.</p>
        <p>Hybrid was the important decision. Two native apps would have meant two codebases and two sets of skills to hire and keep, and for a startup that maintenance cost is not a rounding error. A hybrid app shared most of the code across both platforms, at a price in native capability, performance and the occasional compatibility surprise that we accepted with our eyes open. The backend was deliberately familiar. LAMP was not fashionable, and it was a stack the team already knew for building APIs and managing data, which meant the surprises were in the product rather than the plumbing. AWS gave us infrastructure without buying servers, which I had done for my own company and did not wish on anyone running on a seed round.</p>
        <p>The question that mattered was whether we could build something useful, maintainable and affordable for that business at that moment, and the answer shaped every technical choice.</p>
      </section>

      <section id="after-acquisition" aria-labelledby="after-acquisition-h">
        <h2 id="after-acquisition-h" className="post__h2">Staying on after selling my own company</h2>
        <p>The startup experience that taught me most was my own. I co-founded a communications company serving underserved communities, built it across software, networking, infrastructure, operations and product, solved the problems of VoIP, call routing, billing, reliability and operating cost, and eventually saw it <Link to="/writing/building-a-startup-from-idea-to-acquisition/#acquisition">acquired</Link>. My involvement did not end at the closing. I kept helping the acquiring company as a consultant.</p>
        <p>That gave me a view of software I had not had as a founder. Building your own startup, you are focused on getting the product working, finding customers and keeping the company moving. After an acquisition the priorities change. The technology has to fit a larger organization. Knowledge has to move out of the heads it lives in. Existing systems have to keep running while the people around them change. And technical decisions have to serve people who were not there when the platform was built and will not have you to ask.</p>
        <p>Ownership of software does not end when the person who built it leaves. A good system is understandable and maintainable by whoever inherits it. That is the principle I now push hardest when I lead engineering teams: build software other people can operate, maintain and improve, and never software that depends entirely on its author.</p>
      </section>

      <section id="fitness" aria-labelledby="fitness-h">
        <h2 id="fitness-h" className="post__h2">A fitness platform on Laravel, React and Python</h2>
        <p>A fitness startup I helped ran on Laravel for the backend, React for the interface, and Python for scraping and collecting the external data the product depended on. A different product from telecom or mobile, and a familiar set of problems: a backend that carries the application logic, a frontend people can use, and a way to gather and process data that lives somewhere else.</p>
        <p>Combining several technologies works when each has a clear job, and it adds complexity whether or not anyone planned for it. How the pieces talk to each other, how data is processed, how failures are handled and how the whole thing is maintained all have to be decided, and a small team cannot afford operational complexity it did not need. External data has its own failure modes. A scraper that works today stops working the day the source changes its markup, so it needs error handling, monitoring, validation and someone who expects to maintain it, and it has to respect the access rules and legal requirements of the sites it reads.</p>
      </section>

      <section id="wholesale-voip" aria-labelledby="wholesale-voip-h">
        <h2 id="wholesale-voip-h" className="post__h2">A wholesale VoIP business on open source</h2>
        <p>Telecom has run through most of my career, so when a wholesale VoIP business needed building I was on familiar ground: open-source telecom infrastructure on Asterisk and OpenSIPS, with a Yii application for the business side of the platform. Wholesale VoIP is unforgiving in a way most web products are not. Real-time communications, carrier relationships, call routing, billing, network performance and reliability all sit on the same path, and a small technical problem has an immediate financial consequence. Calls that fail cost customers. Routing that is not optimized costs margin. Billing or usage data that is wrong costs revenue and trust at the same time.</p>
        <p>Open source let us build serious telecom capability without writing every component ourselves. It did not make the platform free to operate. It still needed engineers who understood the technology, infrastructure, monitoring, security and people who could troubleshoot at the wrong hour. The Yii application carried the customers, rates, accounts and reporting, and the telecom stack carried the calls, and the relationship between those two was the business. In wholesale VoIP, engineering decisions set service quality and operating margin directly, and cutting cost that makes the product worse is not a saving. I wrote about that balance in <Link to="/writing/open-source-voip-distributed-systems-lessons/#routing">routing as a business decision</Link>.</p>
      </section>

      <section id="real-estate" aria-labelledby="real-estate-h">
        <h2 id="real-estate-h" className="post__h2">A real estate platform on Go, React and Next.js</h2>
        <p>A real estate technology platform I worked on, leading a fully remote team, used Go for backend services with React and Next.js for the web application on AWS. Real estate users expect fast search, clear information, a responsive interface and property data they can rely on, and the stack supported that well: Go for solid backend services, React and Next.js for the interface and flexible rendering.</p>
        <p>A modern stack does not make a product. The work was designing the system around what the users needed: how information is organized, how quickly someone finds what they are looking for, how the frontend and backend share the load, what belongs on the server, and how the application stays maintainable as the product changes. Startups make it easy to fall in love with architecture, and much harder to confirm the architecture fits the business. A startup rarely needs a distributed system on day one. A straightforward design is usually the better call, and complexity can be added later when a real reason shows up, which is the argument I make in <Link to="/writing/hidden-cost-of-software-architecture/">the hidden cost of software architecture</Link>.</p>
      </section>

      <section id="tours" aria-labelledby="tours-h">
        <h2 id="tours-h" className="post__h2">A 360-degree virtual tour app</h2>
        <p>A 360-degree virtual tour application, built on Rails and React with A-Frame for the immersive view, was a different kind of engineering. Instead of forms, APIs and database rows, the product had to deliver an interactive visual experience: large image assets, rendering in the browser, navigation between scenes, and acceptable performance on whatever device the visitor happened to be holding.</p>
        <p>The user experience carried the product. Nobody should need instructions to walk through a virtual room; moving around has to feel natural or the tour fails at its only job. Delivering rich media efficiently meant thinking about file sizes, loading order, bandwidth and device capability at the same time.</p>
      </section>

      <section id="in-common" aria-labelledby="in-common-h">
        <h2 id="in-common-h" className="post__h2">What they had in common</h2>
        <Projects />
        <p>The biggest thing I brought to those projects was pattern recognition from the ones before, more than any programming language. After carrier networks, telecom, software, infrastructure and engineering leadership, the same needs show up under every product: reliable infrastructure, software that can change, security appropriate to the risk, a delivery process that actually ships, an understanding of what the thing costs to run, and someone who can connect the technical decisions to the business priorities. Every startup in that table needed all six.</p>
      </section>

      <section id="what-startups-need" aria-labelledby="what-startups-need-h">
        <h2 id="what-startups-need-h" className="post__h2">What startups need from a technical leader</h2>
        <p>More code doesn’t always mean more progress. I have watched teams spend months on features nobody needed yet, adopt architecture they were not ready to maintain, and choose technology because it was interesting rather than because it solved a problem that existed. I have written about that pattern as <Link to="/writing/engineering-work-nobody-needed/">engineering work nobody needed</Link>.</p>
        <p>When I work with a startup I try to understand the business before I recommend anything technical. I need to understand the customers, what the business needs to accomplish, and how much time and money we have. Then we can decide what to build now and what can wait. The answers drive everything from architecture to who gets hired. Sometimes the right decision is a custom application. Sometimes it is an existing service. Often a simple monolith is enough. And sometimes the most valuable thing an engineering leader can do is explain why a feature should not be built yet, which is rarely the exciting answer and regularly the one that saves the company months.</p>
      </section>

      <section id="hands-on" aria-labelledby="hands-on-h">
        <h2 id="hands-on-h" className="post__h2">Being hands-on still matters</h2>
        <p>Even after moving into engineering leadership I have kept working directly with the technology, because I enjoy it and because it is useful. My background runs through networking, Linux, telecom, backend and frontend development, cloud infrastructure and architecture, and that range lets me see past individual components. If an application is slow, the cause may be a query, a backend bottleneck, a network issue or an infrastructure setting, and the frontend engineer staring at the browser cannot see any of them. If cloud costs are climbing, the answer is usually in application behaviour, resource utilization or the architecture, and only rarely in buying a different service.</p>
        <p>On a small team that is a real advantage, and it is also a trap. Technical leadership means helping the team understand the system, make good decisions and grow more capable, until the product and the team can succeed without depending on one person, which is a different job from solving every problem personally. I have thought about that trap more than most, having been that person at my own company, and I describe how I try to avoid it in <Link to="/mentorship/">how I mentor engineers</Link>.</p>
      </section>

      <section id="founder" aria-labelledby="founder-h">
        <h2 id="founder-h" className="post__h2">The founder perspective</h2>
        <p>Having founded and sold a company, I know the pressure founders carry. There is always more to do than time or money allows. Every investment matters, every technical decision has an opportunity cost, and you are often deciding without the information you would like. That changed how I evaluate technology. I do not ask only whether it works. I ask what it costs to build, operate, maintain and eventually replace; whether the company has the people and skills to support it; how fast the business needs to move; and what happens if the product succeeds and demand grows. You do not want to over-engineer a product that has no customers. You also do not want something so fragile that the company stalls the moment it starts to grow. Finding that line is one of the most interesting parts of the work.</p>
        <p>From hybrid mobile apps to fitness platforms, wholesale VoIP, real estate technology and virtual tours, every engagement brought new technology, new users, new requirements and new problems. My responsibility stayed the same: understand the problem, help the company make good technical decisions, build something useful, keep the architecture appropriate to the business, manage complexity and cost, and leave the people involved better at what they do. I still enjoy building software. What I enjoy more is helping a company take an idea and make it real.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The right technical decisions for the stage you are in</h2>
      <div className="post__close-copy">
        <p className="post__close-principle">I try to understand the business before I recommend anything technical, and sometimes the most useful answer is that a feature can wait.</p>
        <p>If you are building something and need that kind of help, tell me what you are building.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
