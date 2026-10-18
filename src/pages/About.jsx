import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import CareerArc from '../components/CareerArc';
import StackLadder from '../components/StackLadder';
import { ArrowRight } from '../components/Icons';
import { entity, isPlaceholder, person, updated } from '../content/profile';
import { cycling } from '../content/community';
import {
  careerChapters, independence, mentoringProgression,
  keyTakeaways, currentWork, delivered, valueFit, leadershipPractices, problems, publishedFaq, sources,
} from '../content/about';

const workUrl = Object.fromEntries([['Yippify', person.yippify], ...person.products.map((p) => [p.name, p.url])]);

// One question-and-answer block of the profile: question on the left, answer on the right.
function Qa({ id, coord, q, children }) {
  return <section id={id} className="sheet grid about-qa" aria-labelledby={`${id}-title`} data-coord={`050 · ${coord}`}>
    <h2 id={`${id}-title`} className="about-qa__q">{q}</h2>
    <div className="about-qa__a">{children}</div>
  </section>;
}

export default function About() {
  return <article className="about-story" aria-labelledby="about-title">
    <TitleBlock section="050" title="About" as="p" />

    <header className="sheet about-opening" data-coord="050 · Profile">
      <h1 id="about-title" className="display">Ka Lun Chan (KC): Engineering Leader, San Francisco Bay Area</h1>
      {!isPlaceholder(updated) && <p className="about-updated label">Updated {updated}</p>}
      <div className="about-opening__intro">
        <p className="about-opening__lead">{entity}</p>
        <div className="about-takeaways">
          <h2 className="label">Key takeaways</h2>
          <ul className="spec-list">{keyTakeaways.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
      <a href="#contact" className="link-arrow about-opening__contact">Start a conversation <ArrowRight /></a>
    </header>

    <CareerArc />

    <Qa id="generalist" coord="Generalist" q="What kind of engineering leader is Ka Lun Chan?">
      <p>KC is a generalist: an engineering leader who has done most of the jobs on his teams, and many of the jobs around them. That range came from building a startup from the ground up to an acquisition, where every problem was his to solve.</p>
      <p>He learned how a business runs before he learned software. At his family’s florist he handled everything from the accounting to buying flowers, arranging them and selling them. At the family restaurant he ran everything from marketing to food delivery. Both taught him that software has to fit the way a business works.</p>
      <p>His curiosity started in high school, on a 286 running DOS and then on bulletin boards, dial-up and IRC, a story he tells in <Link to="/writing/from-dos-to-ai-thirty-years-of-technology/">from DOS to AI</Link>. His professional path started later, on the front line, on an IT helpdesk and in technical support for DSL providers. From there he kept a nationwide carrier network running, from DS1 circuits to OC links, working on routers and Unix systems. He automated that work with scripts before anyone called it DevOps. He also forecast network capacity with an R program over SNMP statistics, so upgrades were ordered ahead of lead times instead of after congestion.</p>
      <p>As a co-founder and CTO, he did whatever the company needed that week, from marketing and SEO to racking and cabling servers in the data center. Since then he has restructured a startup’s mobile app and voice platform, <Link to="/writing/building-startups-technical-leadership/">helped six startups build their products</Link>, and run technology and business operations for a media publisher. Today he builds government and startup technology through Yippify. That includes public-sector applications built to <Link to="/writing/building-public-sector-applications/">security authorization and accessibility requirements</Link>, and AI document processing with people in the loop.</p>
      <p className="about-qa__highlight">That background lets him talk to finance or sales as easily as to engineering, and see how a technical decision will play out across the whole business.</p>
    </Qa>

    <Qa id="security" coord="Security" q="Where does his security experience come from?">
      <p>From the network up. In carrier network operations KC wrote access control lists on Cisco routers, and when the carrier launched a managed firewall and VPN service on NetScreen products he was one of the first three people supporting it in the Security Operations Center. He later travelled to the East Coast to train the Technical Assistance Center to support and troubleshoot the service.</p>
      <p>It never became a separate specialty. On the voice platforms it was AAA for every call. In application work it has been single sign-on and object-level authorization in Django, Rails and Node.js APIs. Mobile apps were treated as untrusted clients, from VoIP apps on Nokia phones to iOS and Android apps for a startup and for government clients. In cloud work it is IAM and network controls on AWS. In government work it is public-sector security requirements, including FedRAMP-aligned environments, built into the scope. On every team he runs, vulnerabilities are monitored and fixed as high-priority work, and nothing ships until it has passed security review.</p>
      <p className="about-qa__highlight">The full story, with a layer-by-layer view of where security lives in a company: <Link to="/writing/network-security-before-devsecops/">I was working on network security long before DevSecOps was a thing</Link>.</p>
    </Qa>

    <Qa id="capacity" coord="Scale and cost" q="How does he think about scaling systems and what they cost to run?">
      <p>KC learned capacity planning when capacity was a purchase order. On a carrier network spread across 2,000+ collocations he forecast utilization from measured data far enough ahead to cover hardware lead times. At a voice services company he ran the server farm behind 8M+ VoIP minutes a month and planned expansion ahead of demand. At the company he co-founded, least-cost routing and media paths chosen by caller location improved call quality and cut bandwidth cost at the same time. The platform also moved from one data center to cloud regions on three continents so that capacity could follow revenue.</p>
      <p>The cloud replaced the purchase order with a monthly bill, and the same discipline applies to it. As CTO of a media publishing platform he led a re-platform onto AWS where right-sizing and database fixes, among other changes, contributed to about 30% lower AWS costs. On client work he reviews architecture alongside infrastructure and support costs, defaults to managed services for small teams, and treats engineering capacity and technical debt as resources with lead times, the same as a circuit order. Running his own businesses added the questions an engineer rarely has to ask: can we afford to operate it, who maintains it, what does it cost at ten times the usage, and is the complexity justified by a problem we have today?</p>
      <p className="about-qa__highlight">The method is the same across every generation: <Link to="/writing/capacity-planning-carrier-networks-to-cloud/">measure first, plan from data, know which resource fills first</Link>, and <Link to="/writing/hidden-cost-of-software-architecture/">count what each architecture decision costs to run</Link>.</p>
    </Qa>

    <StackLadder />

    <Qa id="startups" coord="Startups" q="What does he do for startups?">
      <p>Three things. Zero-to-one product development: turning an idea into a working application, as he did for his own company and for products from a wholesale VoIP business to a 360-degree virtual tour. Hands-on technical leadership: setting the architecture and the stack while still writing code, reviewing it and troubleshooting production. Business-aware engineering: choosing what to build now and what can wait, by budget and by what the system will cost to run.</p>
      <p className="about-qa__highlight">Startups need more than someone who can write code. They need someone who can help them make the right technical decisions for the stage of their business. The six engagements are in <Link to="/writing/building-startups-technical-leadership/">building startups: what I’ve learned turning ideas into working products</Link>.</p>
    </Qa>

    <Qa id="who" coord="Who is KC" q="Who is Ka Lun Chan?">
      <p>Ka Lun Chan, known as KC, is a software engineering leader based in the San Francisco Bay Area. His career covers founding, scaling and running engineering at SaaS and communications companies.</p>
      <p>He has worked as an engineer, SaaS co-founder, engineering manager and CTO. He describes his focus as hands-on technical depth and product judgment. Execution and developing people matter as much.</p>
    </Qa>

    <Qa id="now" coord="Working on now" q="What is he working on now?">
      <p>KC consults through Yippify and builds his own products. His Yippify clients include government, startup and entrepreneur teams, for whom he delivers mobile and web applications.</p>
      <ul className="spec-list">{currentWork.map((w) => <li key={w.name}>
        <a href={workUrl[w.name]}>{w.name}</a>: {w.text}
      </li>)}</ul>
    </Qa>

    <Qa id="delivered" coord="Delivered" q="What has Ka Lun Chan delivered?">
      <p>His record includes scaling a product to 400,000+ users and an acquisition, and infrastructure work across 2,000+ carrier sites.</p>
      <ul className="spec-list">{delivered.map((d) => <li key={d.term}><strong>{d.term}</strong> {d.text}</li>)}</ul>
      <p>Employer names and dates are on <a href={person.linkedin}>his LinkedIn profile</a>.</p>
    </Qa>

    <Qa id="value" coord="Where he adds value" q="Where does Ka Lun Chan add the most value?">
      <p>KC is most useful where a company needs someone who can set technical direction and still do the work: taking a product from idea to launch, scaling past a first platform, or fixing slow and unpredictable delivery.</p>
      <table className="about-roles">
        <caption className="visually-hidden">Situations where KC adds value, what he does, and relevant experience</caption>
        <thead>
          <tr><th scope="col" className="label">Situation</th><th scope="col" className="label">What he does</th><th scope="col" className="label">Relevant experience</th></tr>
        </thead>
        <tbody>{valueFit.map((r) => <tr key={r.situation}>
          <th scope="row">{r.situation}</th>
          <td data-label="What he does">{r.does}</td>
          <td data-label="Relevant experience">{r.experience}</td>
        </tr>)}</tbody>
      </table>
    </Qa>

    <Qa id="founder-cto" coord="Founder-CTO" q="How does a founder-CTO background differ from a career engineering manager’s?">
      <p>A founder-CTO has owned every layer at once, from the architecture to the business outcome. A career manager has usually worked within an established organization and processes. KC has done both: he built from inception as a co-founder and ran established functions as CTO and VP of Operations. That combination suits companies that need structure without losing speed.</p>
      <p>He tells the longer version, from the first line of code through 1→10 and the acquisition, in <Link to="/writing/building-a-startup-from-idea-to-acquisition/">From an Idea to an Acquisition: What Building a Startup Taught Me</Link>.</p>
    </Qa>

    <Qa id="approach" coord="How he leads" q="How does he lead engineering teams?">
      <p>KC’s guiding principle is to remove single points of failure. That covers systems, knowledge and decision-makers. In practice:</p>
      <ul className="spec-list">{leadershipPractices.map((l) => <li key={l.term}>{l.term} {l.text}</li>)}</ul>
    </Qa>

    <Qa id="problems" coord="Problems he solves" q="What problems is he brought in to solve?">
      <p>Teams bring KC in when delivery is slow or unpredictable, when the architecture no longer fits the product, or when too much depends on one person or system. Typical situations:</p>
      <ul className="spec-list">{problems.map((p) => <li key={p}>{p}</li>)}</ul>
    </Qa>

    <Qa id="technology" coord="Technology" q="What technologies does he work with?">
      <p>His core stack is Python, Django, Rails, React, Next.js and PostgreSQL, running on AWS. His experience also reaches into distributed systems and data engineering.</p>
    </Qa>

    <Qa id="engagements" coord="Engagements" q="How do engagements work?">
      <p>KC works with companies through Yippify, on scoped projects or ongoing engineering leadership. Each engagement starts by agreeing on the problem, the constraints and what a useful outcome looks like, then moves in small steps with working software early.</p>
      <p>For market context, GoFractional reports a median fractional CTO rate of $200 an hour, with the middle 50% between $175 and $250. That figure is from September 2026 and comes from a small sample: 14 job posts and 787 candidate profiles over 90 days.</p>
    </Qa>

    <Qa id="based" coord="Location" q="Where is he based?">
      <p>KC is based in the San Francisco Bay Area and works with teams across the US, remotely and in person in the Bay Area.</p>
      <p>He is also active in the local cycling community. He helps organize the Berkeley Omnium, rides with the Berkeley Bicycle Club and leads a Bay Area cycling team.</p>
    </Qa>

    <Qa id="work-with" coord="Contact" q="How can you work with Ka Lun Chan?">
      <p>The fastest way to reach KC is a LinkedIn message at <a href={person.linkedin}>linkedin.com/in/kchan1288</a>. For consulting projects, contact <a href={person.yippify}>Yippify</a>. His code is on GitHub at <a href={person.github}>github.com/kchan1028</a>.</p>
    </Qa>

    <header className="sheet about-words" data-coord="050 · Career story">
      <h2 className="display">From writing the code to leading the people who write it.</h2>
      <p className="about-opening__lead">I’ve owned the code and the production problem, and later the business consequences. That experience shapes how I lead: stay close enough to understand the work, and build a team that can take it further.</p>
    </header>

    <nav className="sheet about-chapters" aria-label="Career story chapters">
      <ol>{careerChapters.map((chapter) => <li key={chapter.id}>
        <a href={`#${chapter.id}`}><span className="mono">{chapter.no}</span><span>{chapter.label}</span></a>
      </li>)}</ol>
    </nav>

    <section id="engineering" className="sheet grid about-chapter" aria-labelledby="engineering-title" data-coord="051 · Engineer & builder">
      <span className="about-chapter__number mono" aria-hidden="true">01</span>
      <div className="about-chapter__body">
        <h2 id="engineering-title" className="h2">The work doesn’t end when the code ships.</h2>
        <div className="about-prose">
          <p>Engineering and operating production systems taught me to care about what happens after launch. Building products added another question: does this solve the problem for the person using it?</p>
        </div>
      </div>
    </section>

    <section id="founder" className="sheet grid about-chapter about-founder" aria-labelledby="founder-title" data-coord="052 · Founder">
      <span className="about-chapter__number mono" aria-hidden="true">02</span>
      <div className="about-chapter__body">
        <h2 id="founder-title" className="h2">Building a company changed how I build software.</h2>
        <div className="about-prose">
          <p>Responsibility for both the product and the business made the consequences of technical decisions much clearer.</p>
          <p>Architecture shows up in cost, technical debt in delivery dates, and reliability in what customers say about you. Complexity decides who we can hire and how quickly they can contribute. Infrastructure choices show up in the margins.</p>
          <p>I still bring that perspective to a design review: what does this decision make possible for the business, and what does it ask the team to carry?</p>
          <Link to="/writing/building-a-startup-from-idea-to-acquisition/" className="link-arrow">Read the founder story, from idea to acquisition <ArrowRight /></Link>
          <Link to="/work/three-continent-platform/" className="link-arrow">Inside the platform’s growth <ArrowRight /></Link>
        </div>
      </div>
    </section>

    <section id="leadership" className="sheet grid about-chapter" aria-labelledby="leadership-title" data-coord="053 · Engineering leader">
      <span className="about-chapter__number mono" aria-hidden="true">03</span>
      <div className="about-chapter__body">
        <h2 id="leadership-title" className="h2">I didn’t stop being an engineer when I became a leader.</h2>
        <div className="about-prose">
          <p>Moving from engineering management into CTO responsibilities gave me several views of the same work. Engineers and executives can want different things. So can customers. My job is to make those tradeoffs understandable and help us decide together.</p>
          <p>I can discuss strategy and organizational risk, then go deep into a PostgreSQL query or an AWS production problem. I still review code and investigate difficult failures.</p>
          <p>Technical depth helps me ask better questions. It doesn’t give me a reason to take the keyboard away. I want to give context and clear obstacles so engineers make good decisions themselves.</p>
        </div>
      </div>
    </section>

    <section className="about-independence on-blue" aria-labelledby="independence-title" data-coord="053-1 · Shared ownership">
      <div className="sheet grid">
        <div className="about-independence__thesis">
          <h2 id="independence-title" className="h2">Remove the single point of failure.</h2>
          <p>We design resilient software. Leadership should follow the same principle.</p>
          <p>If every difficult decision still needs me, I haven’t scaled the organization.</p>
          <p className="about-independence__conviction">My goal is to develop people who can eventually replace me.</p>
        </div>
        <ol className="about-independence__flow" aria-label="From resilient systems to stronger communities">
          {independence.map((item) => <li key={item.name}>
            <h3>{item.name}</h3><p className="about-independence__principle">{item.principle}</p><p>{item.detail}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="sheet grid about-mentoring" aria-labelledby="mentoring-title" data-coord="053-2 · Developing people">
      <div className="about-mentoring__intro">
        <h2 id="mentoring-title" className="h2">From asking for answers to owning decisions.</h2>
        <div className="about-prose">
          <p>I’ve mentored engineers at different career stages and across distributed teams. The useful work goes beyond syntax. It is learning to break down ambiguity and to recover from mistakes.</p>
          <p>I want people to challenge my thinking and become better engineers and leaders than me. I consider a capable successor a leadership success.</p>
          <Link to="/mentorship/" className="link-arrow">More on mentoring engineers <ArrowRight /></Link>
        </div>
      </div>
      <ol className="about-mentoring__progression" aria-label="How engineering ownership grows">
        {mentoringProgression.map((step, index) => <li key={step.title}>
          <span className="mono" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div><h3 className="h3">{step.title}</h3><p>{step.body}</p></div>
        </li>)}
      </ol>
    </section>

    <section id="judgment" className="sheet grid about-chapter" aria-labelledby="judgment-title" data-coord="054 · Judgment & execution">
      <span className="about-chapter__number mono" aria-hidden="true">04</span>
      <div className="about-chapter__body">
        <h2 id="judgment-title" className="h2">Good judgment has to turn into delivery.</h2>
        <div className="about-judgment">
          <div className="about-prose">
            <h3 className="h3">Make the tradeoffs explicit.</h3>
            <p>I’ve worked on SaaS platforms, legacy modernization and AI/ML products. Government work asks for speed alongside strict security and accessibility rules. Process there has to earn its place by helping us ship.</p>
            <p>The stack changes from job to job, from Django to LLM systems. The questions I ask before choosing any of it stay the same.</p>
            <p>What problem are we solving? Which constraints matter? What is the simplest architecture that can reliably support the outcome? And what will the decision cost the people maintaining it later?</p>
            <Link to="/expertise/" className="link-arrow">Explore my technical approach <ArrowRight /></Link>
          </div>
          <div className="about-prose about-judgment__execution">
            <h3 className="h3">Leadership shouldn’t be surprised by engineering.</h3>
            <p>I look for clear requirements and work small enough to review and release safely. Technical debt and operational risk belong in delivery planning.</p>
            <p>Leadership needs to know what is blocked and why a timeline changed. That should take one clear conversation. Nobody should have to decode a backlog to find out.</p>
            <p>When delivery and production feedback are connected, teams spot problems earlier and executives hear about them while there’s still time to choose.</p>
            <Link to="/leadership/" className="link-arrow">How I run engineering <ArrowRight /></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="community" className="sheet grid about-chapter about-community" aria-labelledby="community-title" data-coord="055 · Community leadership">
      <span className="about-chapter__number mono" aria-hidden="true">05</span>
      <div className="about-chapter__body">
        <h2 id="community-title" className="h2">Create opportunities. Make room for the next person.</h2>
        <div className="about-community__story">
          <figure>
            <img src="/images/community/junior-cyclists-1280.webp" srcSet="/images/community/junior-cyclists-640.webp 640w, /images/community/junior-cyclists-960.webp 960w, /images/community/junior-cyclists-1280.webp 1280w" sizes="(max-width: 899px) 92vw, (max-width: 1440px) 40vw, 560px" width="1280" height="853" loading="lazy" decoding="async" alt="Three junior cyclists gain riding experience together on a wooded road" />
            <figcaption className="label">Experience grows through practice, support, and opportunities to take the lead.</figcaption>
          </figure>
          <div className="about-prose">
            <p>I put substantial time into cycling through <a href={cycling.club}>Berkeley Bicycle Club</a>, from junior development to race organization. Mentoring young cyclists comes from the same place as mentoring engineers. Offer guidance and real opportunities, then give people room to grow.</p>
            <p><a href={cycling.omnium}>Berkeley Omnium</a> brings together the Berkeley Hills Road Race and Berkeley Streets Criterium. All proceeds go to six East Bay NICA teams, helping support the next generation of cyclists.</p>
            <p>Race day is the visible part. Volunteers and organizers do most of the work long before it, and I enjoy being part of that team.</p>
            <Link to="/community/" className="link-arrow">The racing and the community behind it <ArrowRight /></Link>
          </div>
        </div>
        <p className="about-community__closing">I treat a race weekend the way I treat a system or a team: leave it stronger, with more people ready to carry it forward.</p>
      </div>
    </section>

    <Qa id="faq" coord="FAQ" q="FAQ">
      <div className="about-faq">{publishedFaq.map((item) => <div key={item.q}>
        <h3 className="h3">{item.q}</h3>
        <p>{item.a}</p>
      </div>)}</div>
    </Qa>

    <Qa id="sources" coord="Sources" q="Sources">
      <ul className="spec-list">{sources.map((s) => <li key={s.url}><a href={s.url}>{s.label}</a></li>)}</ul>
    </Qa>
  </article>;
}
