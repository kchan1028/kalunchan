import { useState } from 'react';
import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import BandHead from '../components/BandHead';
import useReveal from '../components/useReveal';
import { ArrowOut, ArrowRight, ArrowDown } from '../components/Icons';
import { cycling } from '../content/community';
import {
  ladder, transfers, decisionShift, spof, resilience, directions, career, impact,
  riderQualities, riderPattern, omniumPeople, twoWorlds, flywheel, gives, isNot,
} from '../content/mentorship';

const Swap = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" aria-hidden="true" focusable="false">
    <path d="M2 8h28M6 4 2 8l4 4M26 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

function Ladder() {
  const [active, setActive] = useState(0);
  const cur = ladder[active];
  return (
    <div className="ladder">
      <ol className="ladder__steps" style={{ '--n': ladder.length }}>
        {ladder.map((s, i) => (
          <li key={s.step} style={{ '--i': i }} data-reveal>
            <button type="button" className="ladder__step" aria-pressed={i === active} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
              <span className="mono ladder__no">{String(i + 1).padStart(2, '0')}</span>
              <span className="ladder__name">{s.step}</span>
              <span className="ladder__quote">“{s.quote}”</span>
              <span className="ladder__bar" aria-hidden="true"><span style={{ transform: `scaleX(${s.mine / 100})` }} /></span>
            </button>
          </li>
        ))}
      </ol>
      <div className="ladder__detail" aria-live="polite">
        <p className="ladder__big">“{cur.quote}”</p>
        <p className="body-copy">{cur.note}</p>
        <div className="ladder__meter">
          <span className="label">Who holds the decision</span>
          <span className="ladder__track" aria-hidden="true"><span style={{ transform: `scaleX(${cur.mine / 100})` }} /></span>
          <span className="ladder__ends label" aria-hidden="true"><span>Me</span><span>Them</span></span>
        </div>
      </div>
    </div>
  );
}

// One node everything routes through.
function Star() {
  const pts = [[20, 14], [60, 6], [100, 14], [100, 66], [60, 74], [20, 66]];
  return (
    <svg className="spof__glyph" viewBox="0 0 120 80" aria-hidden="true" focusable="false">
      {pts.map(([x, y]) => <line key={`${x}${y}`} x1={x} y1={y} x2="60" y2="40" />)}
      {pts.map(([x, y]) => <rect key={`r${x}${y}`} x={x - 4} y={y - 4} width="8" height="8" />)}
      <rect className="spof__hub" x="52" y="32" width="16" height="16" />
    </svg>
  );
}

// No node everything depends on.
function Mesh() {
  const n = [[40, 30], [120, 14], [200, 30], [230, 100], [200, 170], [120, 186], [40, 170], [10, 100], [120, 100]];
  const e = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [8, 1], [8, 3], [8, 5], [8, 7], [0, 2], [4, 6], [2, 4], [6, 0]];
  return (
    <svg className="spof__mesh" viewBox="0 0 240 200" aria-hidden="true" focusable="false">
      {e.map(([a, b]) => <line key={`${a}-${b}`} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} pathLength="1" />)}
      {n.map(([x, y]) => <rect key={`${x}-${y}`} x={x - 6} y={y - 6} width="12" height="12" />)}
    </svg>
  );
}

function Flywheel() {
  const cx = 330;
  const cy = 210;
  const r = 150;
  const at = (i, rad = r) => {
    const a = ((-90 + i * 72) * Math.PI) / 180;
    return [cx + rad * Math.cos(a), cy + rad * Math.sin(a), Math.cos(a)];
  };
  const arc = (i) => {
    const a1 = ((-90 + i * 72 + 10) * Math.PI) / 180;
    const a2 = ((-90 + (i + 1) * 72 - 10) * Math.PI) / 180;
    return `M${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} A${r} ${r} 0 0 1 ${cx + r * Math.cos(a2)} ${cy + r * Math.sin(a2)}`;
  };
  const [tx, ty] = at(4);
  return (
    <svg className="flywheel__svg" viewBox="0 -30 640 470" role="img" aria-label="A loop: learn, practice, own, lead, teach, and back to learn. Teaching starts a second loop for the next person." focusable="false">
      <defs>
        <marker id="fw-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill="currentColor" />
        </marker>
      </defs>
      {flywheel.map((_, i) => <path key={i} d={arc(i)} className="flywheel__arc" markerEnd="url(#fw-head)" />)}
      <g className="flywheel__runner" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <rect x={cx - 5} y={cy - r - 5} width="10" height="10" />
      </g>
      {flywheel.map((w, i) => {
        const [x, y] = at(i);
        const [lx, ly, c] = at(i, r + 34);
        const anchor = c > 0.3 ? 'start' : c < -0.3 ? 'end' : 'middle';
        return (
          <g key={w} className={i === 4 ? 'flywheel__node is-teach' : 'flywheel__node'}>
            <rect x={x - 8} y={y - 8} width="16" height="16" />
            <text x={i === 0 ? lx : lx - (c < -0.3 ? 6 : 0)} y={ly + 8} textAnchor={anchor}>{w}</text>
          </g>
        );
      })}
      <text className="flywheel__centre" x={cx} y={cy + 8} textAnchor="middle">Mentorship</text>
      <path className="flywheel__spawn" d={`M${tx - 10} ${ty + 4} C ${tx - 60} ${ty + 40}, 190 290, 150 300`} markerEnd="url(#fw-head)" />
      <circle className="flywheel__next" cx="92" cy="330" r="62" />
      <text className="flywheel__next-label" x="92" y="336" textAnchor="middle">Next person</text>
    </svg>
  );
}

export default function Mentorship() {
  const ref = useReveal();
  return (
    <article className="mentor" ref={ref} aria-labelledby="mentor-title">
      <TitleBlock section="600" title="Mentorship" as="p" cells={[{ k: 'Principle', v: 'Make yourself replaceable' }]} />

      <header className="sheet grid mentor-hero" data-coord="600 · Mentorship">
        <h1 id="mentor-title" className="mentor-hero__title display">Mentor people until they can replace you.</h1>
        <div className="mentor-hero__copy">
          <p className="mentor-hero__lead">That isn’t losing your value as a leader. It’s creating more of it.</p>
          <p className="body-copy">I believe leadership should increase the capability of the people around you. If everything depends on me, I haven’t built a strong team. I’ve built a dependency. A good leader becomes less necessary to the decisions they once had to make.</p>
        </div>
        <ul className="mentor-hero__four" aria-label="What I build">
          <li>I build software.</li>
          <li>I build teams.</li>
          <li>I develop people.</li>
          <li>I help build communities.</li>
        </ul>
      </header>

      <section className="sheet mentor-band" aria-labelledby="ladder-title" data-coord="601 · Dependency to leadership">
        <BandHead no="601" id="ladder-title" title="Every step moves a decision from me to them.">
          <p>Mentorship should create another decision-maker, not another follower. Select a step.</p>
        </BandHead>
        <Ladder />
      </section>

      <section className="sheet grid mentor-band replace" aria-labelledby="replace-title" data-coord="602 · The replacement principle">
        <h2 id="replace-title" className="replace__title display">If you can replace me, I’ve done my job.</h2>
        <div className="replace__not">
          <p className="body-copy">This doesn’t mean stepping back from responsibility or pushing work onto people who aren’t ready. I stay accountable for the team, its results and the support people need. What moves is everything I used to hold alone.</p>
          <ol className="replace__chain" aria-label="What transfers">
            {transfers.map((t, i) => <li key={t} style={{ '--i': i }} data-reveal>{t}</li>)}
          </ol>
        </div>
        <div className="replace__shift">
          <p className="label">As capability grows, my role changes</p>
          <ol>
            {decisionShift.map((d, i) => (
              <li key={d.rest} style={{ '--i': i }} data-reveal><strong>{d.who}</strong> {d.rest}</li>
            ))}
          </ol>
          <p className="replace__leverage">That’s organizational leverage.</p>
        </div>
      </section>

      <section className="sheet mentor-band spof" aria-labelledby="spof-title" data-coord="603 · Single points of failure">
        <BandHead no="603" id="spof-title" title="We remove single points of failure from systems. Why would we create one in leadership?" />
        <div className="spof__table">
          {spof.map((s) => (
            <div key={s.layer} className="spof__row">
              <p className="spof__layer h3">{s.layer}</p>
              <Star />
              <p className="spof__one">{s.one}</p>
              <p className="spof__result"><ArrowRight /> <strong>{s.result}</strong></p>
            </div>
          ))}
        </div>
        <div className="spof__fix grid" data-reveal>
          <ul className="spof__practices" aria-label="What removes the single point">
            {resilience.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <Mesh />
          <p className="spof__out h2">Resilient teams.</p>
        </div>
      </section>

      <section className="sheet grid mentor-band twoway" aria-labelledby="twoway-title" data-coord="604 · Every direction">
        <div className="twoway__head">
          <h2 id="twoway-title" className="h2">Everyone should challenge everyone.</h2>
          <p className="body-copy">I don’t mentor because I think I always have the best answer. I want engineers to challenge my assumptions and bring ideas I haven’t considered.</p>
        </div>
        <div className="twoway__line">
          <svg className="twoway__arcs" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path d="M50 60 C50 10 250 10 250 60M50 60 C50 -12 350 -12 350 60M150 60 C150 10 350 10 350 60" />
          </svg>
          <ol aria-label="Knowledge moves in every direction">
            {directions.map((d, i) => <li key={`${d}${i}`}>{d}{i < directions.length - 1 && <Swap />}</li>)}
          </ol>
          <p className="label twoway__caption">Knowledge moves in every direction. Nobody is at the top of this drawing.</p>
        </div>
        <ul className="twoway__who">
          <li>Sometimes I teach.</li>
          <li>Sometimes they teach me.</li>
          <li>Sometimes we figure it out together.</li>
        </ul>
        <p className="twoway__end">That’s how everyone improves.</p>
      </section>

      <section className="sheet mentor-band arc" aria-labelledby="arc-title" data-coord="605 · Engineer to mentor">
        <BandHead no="605" id="arc-title" title="The definition of impact kept changing.">
          <Link className="link-arrow" to="/about/"><span>The longer story</span> <ArrowRight /></Link>
        </BandHead>
        <ol className="arc__path" aria-label="Career path">
          {career.map((c, i) => <li key={c}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{c}</li>)}
        </ol>
        <dl className="arc__impact">
          {impact.map((m, i) => (
            <div key={m.when} style={{ '--i': i }} data-reveal>
              <dt className="label">{m.when}</dt>
              <dd><strong>Impact =</strong> {m.is}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mentor-turn" aria-labelledby="turn-title" data-coord="606 · Outside work">
        <div className="sheet grid">
          <h2 id="turn-title" className="mentor-turn__title display">
            <span className="mentor-turn__from">Building engineers.</span>
            <ArrowDown className="mentor-turn__arrow" />
            <span>Building the next generation of cyclists.</span>
          </h2>
          <p className="mentor-turn__copy lead">Mentorship isn’t something I only care about at work. I genuinely enjoy helping people develop, and it’s a big part of why I’m involved with junior cycling and the cycling community.</p>
        </div>
        <figure className="sheet mentor-turn__photo">
          <img src="/images/community/junior-cyclists-1280.webp" srcSet="/images/community/junior-cyclists-640.webp 640w, /images/community/junior-cyclists-1280.webp 1280w" sizes="(max-width: 1440px) 92vw, 1330px" width="4898" height="3265" loading="lazy" decoding="async" alt="Three junior cyclists ride together on a wooded road" />
          <figcaption className="label">Confidence grows through practice and riding with others.</figcaption>
        </figure>
      </section>

      <section className="sheet grid mentor-band juniors" aria-labelledby="juniors-title" data-coord="607 · Junior cycling">
        <div className="juniors__copy">
          <h2 id="juniors-title" className="h2">Faster is the smallest part of it.</h2>
          <p className="body-copy">I’m involved with junior cycling because I enjoy watching young athletes develop. The goal isn’t only to ride faster. It’s helping young riders build the things that last well beyond a race result.</p>
        </div>
        <ul className="juniors__qualities" aria-label="What young riders develop">
          {riderQualities.map((q, i) => <li key={q} style={{ '--i': i }} data-reveal>{q}</li>)}
        </ul>
        <div className="juniors__pattern">
          <p className="label">The same pattern shows up again</p>
          <ol>
            {riderPattern.map((p, i) => <li key={p}>{p}{i < riderPattern.length - 1 && <ArrowRight />}</li>)}
          </ol>
        </div>
      </section>

      <section className="sheet grid mentor-band omnium" aria-labelledby="omnium-title" data-coord="608 · Berkeley Omnium">
        <figure className="omnium__photo">
          <img src="/images/community/berkeley-streets-criterium-1280.webp" srcSet="/images/community/berkeley-streets-criterium-640.webp 640w, /images/community/berkeley-streets-criterium-1280.webp 1280w" sizes="(max-width: 899px) 92vw, (max-width: 1440px) 46vw, 650px" width="1600" height="1066" loading="lazy" decoding="async" alt="Spectators cheer as riders round a corner at the Berkeley Streets Criterium" />
          <figcaption className="label">The Berkeley Streets Criterium.</figcaption>
        </figure>
        <div className="omnium__copy">
          <h2 id="omnium-title" className="h2">Bigger than organizing races.</h2>
          <p className="body-copy">I help organize <a href={cycling.omnium}>Berkeley Omnium</a>, a nonprofit weekend that brings the Berkeley Hills Road Race and Berkeley Streets Criterium together. All proceeds go to six East Bay NICA teams. Part of why it matters to me is simple: it creates opportunities for the next generation of cyclists.</p>
          <div className="omnium__join">
            <ul aria-label="Who the weekend brings together">
              {omniumPeople.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p className="omnium__result">Opportunities to participate, learn, compete and grow.</p>
          </div>
          <div className="omnium__links">
            <a className="link-arrow" href={cycling.omnium}><span>Berkeley Omnium</span> <ArrowOut /></a>
            <a className="link-arrow" href={cycling.club}><span>Berkeley Bicycle Club</span> <ArrowOut /></a>
            <Link className="link-arrow" to="/community/"><span>The race weekend, in depth</span> <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="worlds on-blue" aria-labelledby="worlds-title" data-coord="609 · Same principle">
        <div className="sheet">
          <header className="worlds__head">
            <p className="mono worlds__fig">Fig. 600-1</p>
            <h2 id="worlds-title" className="h2">Two worlds, same principle.</h2>
          </header>
          <div className="worlds__cols" aria-hidden="true">
            <p className="h3">Engineering</p><span /><p className="h3">Cycling</p>
          </div>
          <ol className="worlds__rows">
            {twoWorlds.map(([eng, cyc], i) => (
              <li key={eng} style={{ '--i': i }} data-reveal className={i === twoWorlds.length - 1 ? 'is-last' : undefined}>
                <span className="worlds__node"><span className="visually-hidden">Engineering: </span>{eng}</span>
                <span className="mono worlds__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="worlds__node"><span className="visually-hidden">Cycling: </span>{cyc}</span>
              </li>
            ))}
          </ol>
          <svg className="worlds__merge" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path d="M0 0V28H100V0M50 28V60" />
          </svg>
          <p className="worlds__out display">Growth compounds when people teach the next person.</p>
        </div>
      </section>

      <section className="sheet grid mentor-band flywheel" aria-labelledby="flywheel-title" data-coord="610 · Mentorship flywheel">
        <div className="flywheel__copy">
          <h2 id="flywheel-title" className="h2">When the mentored start mentoring, it scales.</h2>
          <p className="body-copy">When someone I mentored begins mentoring another person, knowledge stops depending on one person. That’s the point where mentorship stops being a favour I do and starts being how the team works.</p>
        </div>
        <div className="flywheel__fig"><Flywheel /></div>
      </section>

      <section className="sheet mentor-band gives" aria-labelledby="gives-title" data-coord="611 · What I give people">
        <BandHead no="611" id="gives-title" title="What I try to give people." />
        <ol className="gives__list">
          {gives.map((g, i) => (
            <li key={g.title} style={{ '--i': i }} data-reveal>
              <h3 className="gives__title">{g.title}</h3>
              <p className="body-copy">{g.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sheet grid mentor-band not" aria-labelledby="not-title" data-coord="612 · What it is not">
        <h2 id="not-title" className="not__title h2">Mentorship is not</h2>
        <ul className="not__list" data-reveal>
          {isNot.map((n, i) => <li key={n} style={{ '--i': i }}><span>{n}</span></li>)}
        </ul>
        <p className="not__end">The objective is independence, not dependency.</p>
      </section>

      <section className="sheet grid mentor-band close" aria-labelledby="close-title" data-coord="613 · Leave people stronger">
        <h2 id="close-title" className="close__title display">Leave people stronger than you found them.</h2>
        <ul className="close__change" aria-label="What doesn’t last">
          <li>Software changes.</li>
          <li>Companies change.</li>
          <li>Teams change.</li>
          <li>Racing seasons end.</li>
        </ul>
        <div className="close__copy">
          <p className="lead">But when someone becomes more capable, more confident, and then helps the next person grow, the impact keeps moving forward.</p>
          <p className="body-copy">That’s the kind of leadership and community work I enjoy most. I care about building strong systems, and just as much about building strong people.</p>
          <p className="close__principle">Make yourself replaceable, then help the next person grow.</p>
          <div className="close__actions">
            <Link className="action" to="/leadership/">How I lead <ArrowRight /></Link>
            <Link className="link-arrow" to="/experience/"><span>My experience</span> <ArrowRight /></Link>
            <Link className="link-arrow" to="/contact/"><span>Let’s talk</span> <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </article>
  );
}
