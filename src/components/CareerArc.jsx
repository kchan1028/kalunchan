import { Fragment } from 'react';
import { Link } from 'react-router';
import { arcChapters, arcLayers } from '../content/about';
import { headlineNumbers } from '../content/profile';
import { ArrowRight } from './Icons';

// Fig. 050-1: one bar per career chapter, spanning the layers of a company KC worked in.
// Wide screens: chapters run left to right, layers top to bottom. Phones: transposed.
// The grid is decorative; the visually-hidden list carries the same facts for readers and crawlers.
export default function CareerArc() {
  const layers = arcLayers.length;
  return (
    <section className="sheet grid arc" aria-labelledby="arc-title" data-coord="050 · At a glance">
      <div className="arc__intro">
        <h2 id="arc-title" className="h2">Every layer of a company, one chapter at a time.</h2>
        <p>Each bar is one chapter of KC’s career. Its height is how much of the company he worked in, from the business at the top to the systems at the bottom. Where a bar reaches the infrastructure layer, he planned its capacity and owned what it cost to run.</p>
      </div>
      <ul className="arc__numbers" aria-label="Headline numbers">
        {headlineNumbers.map((n) => <li key={n.figure}><strong>{n.figure}</strong> {n.text}</li>)}
      </ul>

      <figure className="arc__figure" aria-labelledby="arc-caption">
        <figcaption id="arc-caption" className="arc__caption">
          <span className="mono">Fig. 050-1</span>
          <span>Where KC has worked in a company, chapter by chapter</span>
          <span className="arc__key label">
            <span><i aria-hidden="true" /> Worked in</span>
            <span><i className="is-earlier" aria-hidden="true" /> Before software</span>
            <span><i className="is-now" aria-hidden="true" /> Now</span>
          </span>
        </figcaption>
        <div className="arc__chart" style={{ '--layers': layers, '--chapters': arcChapters.length }} aria-hidden="true">
          {arcLayers.map((l, i) => <Fragment key={l.name}>
            <i className="arc__lrule" style={{ '--l': i }} />
            <span className="arc__layer" style={{ '--l': i }}>
              <span className="arc__layer-full">{l.name}</span>
              <span className="arc__layer-short">{l.short}</span>
            </span>
          </Fragment>)}
          {arcChapters.map((c, i) => {
            const mod = `${c.earlier ? ' is-earlier' : ''}${c.now ? ' is-now' : ''}`;
            return <Fragment key={c.id}>
              <i className="arc__crule" style={{ '--c': i }} />
              <div className={`arc__chapter${mod}`} style={{ '--c': i }}>
                <span className="arc__head">
                  <span className="arc__name">{c.name}</span>
                  <span className="arc__role">{c.role}</span>
                </span>
                {c.scale && <span className="arc__scale">{c.scale}</span>}
              </div>
              <i className={`arc__span${mod}`} style={{ '--c': i, '--t': c.top, '--b': c.bottom }} />
            </Fragment>;
          })}
        </div>
        <ol className="visually-hidden">
          {arcChapters.map((c) => <li key={c.id}>
            {c.name}, {c.role}: {arcLayers.slice(c.top, c.bottom + 1).map((l) => l.name.toLowerCase()).join(', ')}.{c.scale ? ` ${c.scale}.` : ''}
          </li>)}
        </ol>
      </figure>

      <div className="arc__close">
        <p className="arc__takeaway">He can talk to every function in its own terms, and still review the code.</p>
        <Link to="/experience/" className="link-arrow"><span>Experience, role by role</span> <ArrowRight /></Link>
      </div>
    </section>
  );
}
