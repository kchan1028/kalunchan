import { Link } from 'react-router';
import { capabilities, eras } from '../content/practice';
import TitleBlock from '../components/TitleBlock';
import { ArrowRight } from '../components/Icons';

const depthLabel = ['Not a focus', 'Practiced', 'Led'];

export default function Expertise() {
  return (
    <>
      <TitleBlock section="400" title="Expertise" cells={[{ k: 'Areas', v: `${capabilities.length} capabilities` }, { k: 'Evidence', v: '5 roles' }]} />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">
          Each capability is mapped to the roles where I actually used it. Tools are listed last because they changed the most.
        </p>
      </div>

      <section className="sheet matrix-wrap" aria-labelledby="matrix-h" data-coord="400 · Matrix">
        <h2 id="matrix-h" className="visually-hidden">Capabilities by role</h2>
        <table className="matrix">
          <caption>
            <span className="visually-hidden">Capabilities by role. </span>
            <span className="matrix__legend">
              <span><i className="dot dot--2" aria-hidden="true" /> Led</span>
              <span><i className="dot dot--1" aria-hidden="true" /> Practiced</span>
              <span><i className="dot dot--0" aria-hidden="true" /> Not a focus</span>
            </span>
          </caption>
          <thead>
            <tr>
              <th scope="col" className="matrix__corner"><span className="label">Capability</span></th>
              {eras.map((e) => (
                <th scope="col" key={e.id}>
                  <span className="matrix__era">{e.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {capabilities.map((c, i) => (
              <tr key={c.id} className={i === 0 ? 'on-blue' : undefined}>
                <th scope="row">
                  <a href={`#${c.id}`}>
                    <span className="mono">{c.no}</span>
                    <span className="matrix__cap">{c.name}</span>
                  </a>
                </th>
                {eras.map((e) => (
                  <td key={e.id} data-era={e.label}>
                    <i className={`dot dot--${c.depth[e.id]}`} aria-hidden="true" />
                    <span className="visually-hidden">{depthLabel[c.depth[e.id]]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="capabilities">
        {capabilities.map((c) => (
          <section key={c.id} id={c.id} className="capability sheet grid" aria-labelledby={`${c.id}-h`} data-coord={`${c.no} · ${c.name}`}>
            <p className="capability__no mono" aria-hidden="true">{c.no}</p>
            <div className="capability__head">
              <h2 id={`${c.id}-h`} className="h2">{c.name}</h2>
              <p className="capability__claim">{c.claim}</p>
            </div>
            <div className="capability__cols">
              <div>
                <h3 className="capability__subh label">What I do</h3>
                <ul className="ticks">
                  {c.practice.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              {c.stack.length > 0 && (
                <div>
                  <h3 className="capability__subh label">Tools</h3>
                  <p className="capability__stack">{c.stack.join(', ')}</p>
                </div>
              )}
              {c.evidence && (
                <div className="capability__evidence">
                  <h3 className="capability__subh label">See it applied</h3>
                  <ul>
                    {c.evidence.map((e) => (
                      <li key={e.to}>
                        <Link to={e.to} className="link-arrow"><span>{e.label}</span> <ArrowRight /></Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
      <div className="sheet expertise-next">
        <Link to="/projects/" className="link-arrow">
          <span>See these capabilities applied in six case studies</span> <ArrowRight />
        </Link>
      </div>
    </>
  );
}
