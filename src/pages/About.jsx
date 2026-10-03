import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';
import { withTodos } from '../components/Todo';
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

    <Qa id="generalist" coord="Generalist" q="What kind of engineering leader is Ka Lun Chan?">
      <p>KC is a generalist: an engineering leader who has done most of the jobs on his teams, and many of the jobs around them. That range came from building a startup from the ground up to an acquisition, where every problem was his to solve.</p>
      <p>He learned how a business runs before he learned software. At his family’s florist he handled everything from the accounting to buying flowers, arranging them and selling them. At the family restaurant he ran everything from marketing to food delivery. Both taught him that software has to fit the way a business actually works.</p>
      <p>His technical path started on the front line, on an IT helpdesk and in technical support for DSL providers. From there he kept a nationwide carrier network running, from DS1 circuits to OC links, working with routers, switches, Unix systems and fault management tools. He automated that work with scripts before anyone called it DevOps, and forecast network capacity with programs he wrote in R and Excel, using Cacti stats pulled into Excel.</p>
      <p>As a co-founder and CTO, he did whatever the company needed that week: product management, marketing and SEO, racking and cabling servers in the data center, building the web application and building the voice network. Since then he has restructured a startup’s mobile app, network and open-source voice platform, advised many startups, worked in media publishing, and now builds government technology through Yippify.</p>
      <p className="about-qa__highlight">That background lets him talk to the executive team, product, marketing, finance, sales, operations and engineering in their own terms, and see how a technical decision will play out across the whole business.</p>
    </Qa>

    <Qa id="who" coord="Who is KC" q="Who is Ka Lun Chan?">
      <p>Ka Lun Chan, known as KC, is a software engineering leader based in the San Francisco Bay Area. His career covers founding, scaling and running engineering at SaaS and communications companies.</p>
      <p>He has worked as an engineer, SaaS co-founder, engineering manager and CTO. He describes his focus as combining hands-on technical depth, product judgment, strong execution and developing people.</p>
    </Qa>

    <Qa id="now" coord="Working on now" q="What is he working on now?">
      <p>KC consults through Yippify and builds his own products. His Yippify clients include government, startup and entrepreneur teams, for whom he delivers mobile and web applications.</p>
      <ul className="spec-list">{currentWork.map((w) => <li key={w.name}>
        <strong><a href={workUrl[w.name]}>{w.name}</a>:</strong> {w.text}
      </li>)}</ul>
    </Qa>

    <Qa id="delivered" coord="Delivered" q="What has Ka Lun Chan delivered?">
      <p>His record includes scaling a product to 400,000+ users and an acquisition, and infrastructure work across 2,000+ carrier sites.</p>
      <ul className="spec-list">{delivered.map((d) => <li key={d.term}><strong>{d.term}</strong> {d.text}</li>)}</ul>
      <p>{withTodos('[Add company names and years for each role where you’re allowed to. Delete this note.]')}</p>
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
      <p>A founder-CTO has owned every layer at once: product, architecture, hiring, operations and business outcomes. A career manager has usually worked within an established organization and processes. KC has done both: he built from inception as a co-founder and ran established functions as CTO and VP of Operations. That combination suits companies that need structure without losing speed.</p>
    </Qa>

    <Qa id="approach" coord="How he leads" q="How does he lead engineering teams?">
      <p>KC’s guiding principle is to remove single points of failure. That covers systems, knowledge and decision-makers. In practice:</p>
      <ul className="spec-list">{leadershipPractices.map((l) => <li key={l.term}><strong>{l.term}</strong> {l.text}</li>)}</ul>
    </Qa>

    <Qa id="problems" coord="Problems he solves" q="What problems is he brought in to solve?">
      <p>Teams bring KC in when delivery is slow or unpredictable, when the architecture no longer fits the product, or when too much depends on one person or system. Typical situations:</p>
      <ul className="spec-list">{problems.map((p) => <li key={p}>{p}</li>)}</ul>
    </Qa>

    <Qa id="technology" coord="Technology" q="What technologies does he work with?">
      <p>His core stack is Python, Django, Rails, React, Next.js and PostgreSQL, running on AWS. His experience also covers distributed systems, cloud infrastructure, and product and data engineering.</p>
    </Qa>

    <Qa id="ai" coord="AI & data" q="What AI and data work has he done?">
      <p>KC lists AI and machine-learning products and data work among his areas of expertise. VeloWise, his delivery analytics product, turns engineering delivery data into insight for leaders.</p>
      <p>{withTodos('[Add one specific AI or ML project: what it did, the model or approach, and one result. Delete this note.]')}</p>
    </Qa>

    <Qa id="engagements" coord="Engagements" q="How do engagements work?">
      <p>KC works with companies through Yippify, on scoped projects or ongoing engineering leadership. Each engagement starts by agreeing on the problem, the constraints and what a useful outcome looks like, then moves in small steps with working software early.</p>
      <p>For market context, GoFractional reports a median fractional CTO rate of $200 an hour, with the middle 50% between $175 and $250. That figure is from September 2026 and comes from a small sample: 14 job posts and 787 candidate profiles over 90 days.</p>
    </Qa>

    <Qa id="based" coord="Location" q="Where is he based?">
      <p>KC is based in the San Francisco Bay Area and works with teams across the US, remotely and in person in the Bay Area.</p>
      <p>He is also active in the local cycling community. He founded and organizes the Berkeley Omnium, rides with the Berkeley Bicycle Club and leads a Bay Area cycling team.</p>
    </Qa>

    <Qa id="work-with" coord="Contact" q="How can you work with Ka Lun Chan?">
      <p>The fastest way to reach KC is a LinkedIn message at <a href={person.linkedin}>linkedin.com/in/kchan1288</a>. For consulting projects, contact <a href={person.yippify}>Yippify</a>. His code is on GitHub at <a href={person.github}>github.com/kchan1028</a>.</p>
    </Qa>

    <header className="sheet about-words" data-coord="050 · Career story">
      <h2 className="display">Engineering depth.<br />Leadership that scales.</h2>
      <p className="about-opening__lead">I’ve owned the code, the production problem, the product decision, and the business consequences. That experience shapes how I lead: stay close enough to understand the work, and build a team that can take it further.</p>
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
          <p>Engineering and operating production systems taught me to care about what happens after launch. Building products added another question: does this actually solve the problem for the person using it?</p>
        </div>
      </div>
    </section>

    <section id="founder" className="sheet grid about-chapter about-founder" aria-labelledby="founder-title" data-coord="052 · Founder">
      <span className="about-chapter__number mono" aria-hidden="true">02</span>
      <div className="about-chapter__body">
        <h2 id="founder-title" className="h2">Building a company changed how I build software.</h2>
        <div className="about-prose">
          <p>Responsibility for both the product and the business made the consequences of technical decisions much clearer.</p>
          <p>Architecture affects cost. Technical debt affects delivery. Reliability affects customers. Complexity affects who we can hire and how quickly they can contribute. Infrastructure choices show up in the margins.</p>
          <p>I still bring that perspective to a design review: what does this decision make possible for the business, and what does it ask the team to carry?</p>
          <Link to="/work/three-continent-platform/" className="link-arrow">Inside the platform’s growth <ArrowRight /></Link>
        </div>
      </div>
    </section>

    <section id="leadership" className="sheet grid about-chapter" aria-labelledby="leadership-title" data-coord="053 · Engineering leader">
      <span className="about-chapter__number mono" aria-hidden="true">03</span>
      <div className="about-chapter__body">
        <h2 id="leadership-title" className="h2">I didn’t stop being an engineer when I became a leader.</h2>
        <div className="about-prose">
          <p>Moving through technical leadership, engineering management, and CTO responsibilities gave me several views of the same work. Engineers, product, QA, operations, executives, and customers can have different priorities. My job is to make those tradeoffs understandable and help us decide together.</p>
          <p>I can discuss strategy and organizational risk, then go deep into an architecture review, a PostgreSQL query, an API, or an AWS production problem. I still review code and investigate difficult failures.</p>
          <p>Technical depth helps me ask better questions. It doesn’t give me a reason to take the keyboard away. I want to provide context, remove obstacles, and help engineers make good decisions themselves.</p>
        </div>
      </div>
    </section>

    <section className="about-independence on-blue" aria-labelledby="independence-title" data-coord="053-1 · Shared ownership">
      <div className="sheet grid">
        <div className="about-independence__thesis">
          <h2 id="independence-title" className="h2">Remove the single point of failure.</h2>
          <p>We design resilient software. Leadership should follow the same principle.</p>
          <p>If every difficult decision, escalation, or explanation still needs me, I haven’t scaled the organization.</p>
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
          <p>I’ve mentored engineers at different career stages and across distributed teams. The useful work goes beyond syntax: breaking down ambiguity, investigating a problem, understanding business context, communicating tradeoffs, and recovering from mistakes.</p>
          <p>I want people to challenge my thinking and become better engineers and leaders than me. Their growth creates room for them, for me, and for the organization. I consider a capable successor a leadership success.</p>
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
            <p>I’ve worked across SaaS, customer-facing platforms, legacy modernization, government technology, and AI/ML products. Government work in particular demands speed alongside security, compliance, accessibility, reliability, and complex business rules. Process has to help us deliver.</p>
            <p>Whether the work involves Python and Django, Rails, React and Next.js, cloud architecture, or an LLM system, technology is a tool. The outcome is the goal.</p>
            <p>What problem are we solving? Which constraints matter? What is the simplest architecture that can reliably support the outcome? And what will the decision cost the people maintaining it later?</p>
            <Link to="/expertise/" className="link-arrow">Explore my technical approach <ArrowRight /></Link>
          </div>
          <div className="about-prose about-judgment__execution">
            <h3 className="h3">Leadership shouldn’t be surprised by engineering.</h3>
            <p>I look for clear requirements, real ownership, and work small enough to review and release safely. Architecture, technical debt, quality, and operational risk belong in delivery planning.</p>
            <p>Leadership needs to know what is progressing, what is blocked, why a timeline changed, and which decisions need attention. That should be a clear conversation, not an exercise in decoding a backlog.</p>
            <p>Engineering works as a whole: people, decisions, delivery, and production feedback. When those parts connect, teams can act earlier and executives can make informed choices.</p>
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
            <img src="/images/community/junior-cyclists-1280.webp" srcSet="/images/community/junior-cyclists-640.webp 640w, /images/community/junior-cyclists-1280.webp 1280w" sizes="(max-width: 899px) 92vw, (max-width: 1440px) 40vw, 560px" width="1280" height="853" loading="lazy" decoding="async" alt="Three junior cyclists gain riding experience together on a wooded road" />
            <figcaption className="label">Experience grows through practice, support, and opportunities to take the lead.</figcaption>
          </figure>
          <div className="about-prose">
            <p>I put substantial time into cycling through <a href={cycling.club}>Berkeley Bicycle Club</a>, junior development, volunteering, and race organization. Mentoring young cyclists comes from the same place as mentoring engineers: offer guidance and real opportunities, let people gain experience, and give them room to become more capable.</p>
            <p><a href={cycling.omnium}>Berkeley Omnium</a> brings together the Berkeley Hills Road Race and Berkeley Streets Criterium. All proceeds go to six East Bay NICA teams, helping support the next generation of cyclists.</p>
            <p>A race is much more than race day. Volunteers, racers, juniors, collegiate athletes, sponsors, officials, and organizers all contribute. I enjoy working with that team. We make something possible together that none of us could deliver alone.</p>
            <Link to="/community/" className="link-arrow">The racing and the community behind it <ArrowRight /></Link>
          </div>
        </div>
        <p className="about-community__closing">The common thread is simple: leave the system, team, or community stronger, with more people ready to carry it forward.</p>
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
