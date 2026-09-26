import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import { ArrowOut, ArrowRight } from '../components/Icons';
import { cycling, raceFormats, riderPathways, participation } from '../content/community';

export default function Community() {
  return <article className="community" aria-labelledby="community-title">
    <TitleBlock section="500" title="Community" as="p" />
    <header className="sheet grid community-intro" data-coord="500 · Berkeley Omnium">
      <div className="community-intro__copy">
        <h1 id="community-title" className="display">Berkeley Omnium</h1>
        <p className="community-intro__lead">Two kinds of racing. One cycling community.</p>
        <p className="body-copy">A nonprofit weekend bringing the Berkeley Hills Road Race and Berkeley Streets Criterium together, with all proceeds supporting six East Bay NICA teams.</p>
        <a href={cycling.omnium} className="action">Explore Berkeley Omnium <ArrowOut /></a>
      </div>
      <figure className="community-intro__photo">
        <img src="/images/community/berkeley-hills-road-race-1280.webp" srcSet="/images/community/berkeley-hills-road-race-640.webp 640w, /images/community/berkeley-hills-road-race-1280.webp 1280w" sizes="(max-width: 899px) 92vw, (max-width: 1440px) 46vw, 650px" width="1920" height="1080" fetchPriority="high" alt="A line of cyclists follows a tree-lined road at the Berkeley Hills Road Race" />
        <figcaption className="label">The hills bring the field together. The racing tests it.</figcaption>
      </figure>
    </header>

    <section className="sheet community-organizer" aria-labelledby="organizer-title" data-coord="500 · My involvement">
      <h2 id="organizer-title" className="h3">Why I help organize it</h2>
      <p className="body-copy">I help organize Berkeley Omnium because it helps grow the next generation of cyclists. All proceeds go to six East Bay NICA teams. What I enjoy most is working with a fantastic team of people and volunteers who make the weekend happen.</p>
    </section>

    <nav className="sheet community-contents" aria-label="In this community guide">
      <a href="#races">The two races</a>
      <a href="#legacy">Racing heritage</a>
      <a href="#development">Rider development</a>
      <a href="#impact">Community impact</a>
      <a href="#participate">Get involved</a>
    </nav>

    <section id="races" className="community-format on-blue" aria-labelledby="races-title" data-coord="501 · Race formats">
      <div className="sheet">
        <header className="community-section-head">
          <h2 id="races-title" className="h2">Hills and streets. Different demands.</h2>
          <p>A road race rewards sustained effort over changing terrain. A criterium compresses the action into repeated laps and quick decisions.</p>
        </header>
        <div className="race-comparison">
          {raceFormats.map((race) => <section key={race.id} aria-labelledby={`${race.id}-title`} className="race-comparison__race">
            <span className="label">{race.format}</span>
            <h3 id={`${race.id}-title`}>{race.title}</h3>
            <dl><div><dt>Setting</dt><dd>{race.setting}</dd></div><div><dt>What it tests</dt><dd>{race.focus}</dd></div></dl>
            <p>{race.body}</p>
            <p className="race-comparison__watch"><strong>From the sidelines</strong> {race.watch}</p>
          </section>)}
        </div>
        <div className="omnium-equation" aria-label="The road race and criterium combine into the Berkeley Omnium weekend">
          <span>Road race</span><span aria-hidden="true">+</span><span>Criterium</span><span aria-hidden="true">=</span><strong>Berkeley Omnium</strong>
        </div>
        <p className="community-format__note">An omnium combines results across races into an overall competition. The event’s published guide defines eligible fields, scoring, and tie-breaks.</p>
        <a className="link-arrow" href={cycling.omnium}>Read the Berkeley racing weekend guide <ArrowOut /></a>
      </div>
    </section>

    <section id="legacy" className="sheet grid community-legacy" aria-labelledby="legacy-title" data-coord="502 · Racing heritage">
      <figure>
        <img src="/images/community/berkeley-streets-criterium-1280.webp" srcSet="/images/community/berkeley-streets-criterium-640.webp 640w, /images/community/berkeley-streets-criterium-1280.webp 1280w" sizes="(max-width: 899px) 92vw, (max-width: 1440px) 46vw, 650px" width="1600" height="1066" loading="lazy" decoding="async" alt="Spectators cheer as riders round a corner at the Berkeley Streets Criterium" />
        <figcaption className="label">Street racing makes the competition visible, lap after lap.</figcaption>
      </figure>
      <div>
        <h2 id="legacy-title" className="h2">A local race with a lasting legacy.</h2>
        <p className="body-copy">Berkeley racing has deep roots in Northern California cycling. The Hills Road Race grew from local race promotion into a fixture that brings generations of riders back to the same demanding terrain.</p>
        <p className="body-copy">The <a href={cycling.club}>Berkeley Bicycle Club</a> carries that tradition forward. Its history connects the road race with a broader culture of club rides, amateur competition, and people sharing what they know.</p>
        <p className="body-copy">The street race adds another way to experience that culture: spectators can see the field repeatedly, understand the contest as it unfolds, and cheer for riders they recognize.</p>
      </div>
    </section>

    <section id="development" className="sheet community-development" aria-labelledby="development-title" data-coord="503 · Rider development">
      <header className="community-section-head">
        <h2 id="development-title" className="h2">Room for the next rider.</h2>
        <p>Local racing grows when riders can find an entry point, build confidence, and see a reason to come back.</p>
      </header>
      <div className="community-development__body">
        <div className="rider-pathways">{riderPathways.map((item) => <section key={item.id} aria-labelledby={`${item.id}-title`}>
          <h3 id={`${item.id}-title`} className="h3">{item.title}</h3>
          <p className="body-copy">{item.body}</p>
        </section>)}</div>
        <figure>
          <img src="/images/community/junior-cyclists-1280.webp" srcSet="/images/community/junior-cyclists-640.webp 640w, /images/community/junior-cyclists-1280.webp 1280w" sizes="(max-width: 899px) 92vw, (max-width: 1440px) 46vw, 650px" width="4898" height="3265" loading="lazy" decoding="async" alt="Three junior cyclists ride together on a wooded road" />
          <figcaption className="label">Confidence grows through practice and riding with others.</figcaption>
        </figure>
      </div>
      <p className="community-development__next body-copy">That principle also shapes how I think about <Link to="/mentorship/">mentoring engineers and new leaders</Link>: give people context, meaningful responsibility, and support as they grow.</p>
    </section>

    <section id="impact" className="sheet grid community-impact" aria-labelledby="impact-title" data-coord="504 · Community impact">
      <div className="community-impact__lead">
        <h2 id="impact-title" className="h2">What the weekend makes possible.</h2>
        <p className="body-copy">All event proceeds go to six East Bay teams in the National Interscholastic Cycling Association (NICA). Those teams help young people take part in cycling through coaching, equipment, and opportunities to ride and race.</p>
      </div>
      <div className="community-impact__detail">
        <p className="body-copy">Race entries, sponsors, and volunteer effort contribute in different ways. Together, they make a local event possible and help it support the riders coming next.</p>
        <ol className="community-impact__flow" aria-label="How the race weekend supports youth cycling">
          <li><strong>People contribute</strong><span>Racers, volunteers, and sponsors</span></li>
          <li><strong>The weekend brings them together</strong><span>Competition and community</span></li>
          <li><strong>All proceeds support six youth teams</strong><span>More opportunities to ride</span></li>
        </ol>
        <a href={cycling.club} className="link-arrow">Meet the club supporting local cycling <ArrowOut /></a>
      </div>
    </section>

    <section id="participate" className="sheet community-participate" aria-labelledby="participate-title" data-coord="505 · Get involved">
      <h2 id="participate-title" className="h2">There’s more than one way to join in.</h2>
      <dl>{participation.map((item) => <div key={item.title}><dt className="h3">{item.title}</dt><dd className="body-copy">{item.body}</dd></div>)}</dl>
      <div className="community-participate__links">
        <a href={cycling.omnium} className="action">Find your place at the race weekend <ArrowOut /></a>
        <Link to="/about/" className="link-arrow">More about my work <ArrowRight /></Link>
      </div>
    </section>
  </article>;
}
