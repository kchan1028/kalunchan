import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';
import { person } from '../content/profile';
import { cycling } from '../content/community';
import { careerChapters, independence, mentoringProgression } from '../content/about';

export default function About() {
  return <article className="about-story" aria-labelledby="about-title">
    <TitleBlock section="050" title="About" as="p" />

    <header className="sheet about-opening" data-coord="050 · Career story">
      <h1 id="about-title" className="display">Engineering depth.<br />Leadership that scales.</h1>
      <div className="about-opening__intro">
        <p className="about-opening__lead">I’m KC. I’ve spent 23+ years building software, taking a SaaS business from inception through acquisition, and leading engineering teams.</p>
        <p className="body-copy">I’ve owned the code, the production problem, the product decision, and the business consequences. That experience shapes how I lead: stay close enough to understand the work, and build a team that can take it further.</p>
      </div>
      <a href="#contact" className="link-arrow about-opening__contact">Start a conversation <ArrowRight /></a>
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
          <p>My work grew across software and product engineering, architecture, cloud infrastructure, and distributed systems. I learned to connect implementation choices with reliability, delivery, and the team that would have to maintain the result.</p>
        </div>
      </div>
    </section>

    <section id="founder" className="sheet grid about-chapter about-founder" aria-labelledby="founder-title" data-coord="052 · Founder">
      <span className="about-chapter__number mono" aria-hidden="true">02</span>
      <div className="about-chapter__body">
        <h2 id="founder-title" className="h2">Building a company changed how I build software.</h2>
        <div className="about-founder__story">
          <div className="about-prose">
            <p>I co-founded a SaaS company, built the product from inception, and led engineering through acquisition. Responsibility for both the product and the business made the consequences of technical decisions much clearer.</p>
            <p>Architecture affects cost. Technical debt affects delivery. Reliability affects customers. Complexity affects who we can hire and how quickly they can contribute. Infrastructure choices show up in the margins.</p>
            <p>I still bring that perspective to a design review: what does this decision make possible for the business, and what does it ask the team to carry?</p>
            <Link to="/work/three-continent-platform/" className="link-arrow">Inside the platform’s growth <ArrowRight /></Link>
          </div>
          <dl className="about-founder__evidence" aria-label="Scale of the SaaS platform">
            <div><dt>Users served</dt><dd>400k+</dd></div>
            <div><dt>Continents supported</dt><dd>3</dd></div>
            <div><dt>Company outcome</dt><dd>Acquired</dd></div>
          </dl>
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
            <p>I help organize <a href={cycling.omnium}>Berkeley Omnium</a>, bringing together the Berkeley Hills Road Race and Berkeley Streets Criterium. All proceeds go to six East Bay NICA teams, helping support the next generation of cyclists.</p>
            <p>A race is much more than race day. Volunteers, racers, juniors, collegiate athletes, sponsors, officials, and organizers all contribute. I enjoy working with that team. We make something possible together that none of us could deliver alone.</p>
            <Link to="/community/" className="link-arrow">The racing and the community behind it <ArrowRight /></Link>
          </div>
        </div>
        <p className="about-community__closing">The common thread is simple: leave the system, team, or community stronger, with more people ready to carry it forward.</p>
        <p className="about-context-links">For the full career history, <a href={person.linkedin}>find me on LinkedIn</a>. Consulting engagements are available through <a href={person.yippify}>Yippify</a>.</p>
      </div>
    </section>
  </article>;
}
