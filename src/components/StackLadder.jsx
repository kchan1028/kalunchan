import { useState } from 'react';
import { Link } from 'react-router';
import { stackLayers } from '../content/about';
import { ArrowRight } from './Icons';

// Fig. 050-2 / 684-1: the layers of technology KC has owned, from the carrier
// network to the business paying for it. Each rung: experience, the capacity
// or operational challenge at that layer, and the total cost of ownership.
// Opening a rung shows what he built there, the technologies, and the lesson
// carried into the next layer. All of it is in the HTML; the toggle only hides.

function Rungs() {
  const [open, setOpen] = useState(null);
  return (
    <ol className="ladder__list">
      {stackLayers.map((l, i) => {
        const isOpen = open === i;
        return (
          <li key={l.id} className={`ladder__row${isOpen ? ' is-open' : ''}`}>
            <span className="ladder__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="ladder__name">{l.name}</h3>
            <dl className="ladder__cells">
              <div>
                <dt className="label">Experience</dt>
                <dd>{l.experience}</dd>
              </div>
              <div>
                <dt className="label">Capacity challenge</dt>
                <dd>{l.challenge}</dd>
              </div>
              <div>
                <dt className="label">Total cost of ownership</dt>
                <dd>{l.cost}</dd>
              </div>
            </dl>
            <button type="button" className="ladder__toggle" aria-expanded={isOpen} aria-controls={`ladder-more-${l.id}`} onClick={() => setOpen(isOpen ? null : i)}>
              {isOpen ? 'Less' : 'What I built'}
            </button>
            <div id={`ladder-more-${l.id}`} className="ladder__more" hidden={!isOpen}>
              <div>
                <p className="label">What I built</p>
                <p>{l.built}</p>
              </div>
              <div>
                <p className="label">Technologies</p>
                <p>{l.tech}</p>
              </div>
              <div>
                <p className="label">Lesson carried forward</p>
                <p>{l.lesson}</p>
                <Link to={l.to} className="link-arrow"><span>{l.label}</span> <ArrowRight /></Link>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function StackLadder({ as = 'section', no = '050-2' }) {
  if (as === 'figure') {
    return (
      <figure className="ladder post__figure">
        <figcaption className="journey__cap">
          <span className="mono">Fig. {no}</span> Seven layers of technology, and what each one taught me about cost
          <span className="journey__key label">Top to bottom is the order I worked through them. Open a layer for what I built there.</span>
        </figcaption>
        <Rungs />
      </figure>
    );
  }
  return (
    <section id="stack" className="sheet grid ladder" aria-labelledby="ladder-title" data-coord="050-2 · Every layer of technology">
      <div className="ladder__intro">
        <h2 id="ladder-title" className="h2">From carrier networks to cloud platforms to business ownership.</h2>
        <p>Seven layers of technology, in the order I worked through them. At every one, the question was the same: what does it take to run this, and what does it cost? Open a layer for what I built there and the lesson I carried to the next.</p>
      </div>
      <Rungs />
    </section>
  );
}
