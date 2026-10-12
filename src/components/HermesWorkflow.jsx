import '../styles/hermes-workflow.css';

const stages = [
  { owner: 'Code', title: 'Collect evidence', detail: 'Inventory articles. Fetch reader questions and keep source links.' },
  { owner: 'Code + AI', title: 'Check overlap', detail: 'Filter exact duplicates. Flag similar questions against articles and past suggestions.' },
  { owner: 'AI', title: 'Recommend', detail: 'Synthesize the evidence into three ranked ideas, with reasons and uncertainties.' },
  { owner: 'Code', title: 'Save and deliver', detail: 'Validate the result. Store the brief and delivery state. Send it for review.' },
];

export default function HermesWorkflow() {
  return (
    <figure className="hermes-flow" aria-labelledby="hermes-flow-title" aria-describedby="hermes-flow-caption">
      <header className="hermes-flow__heading">
        <h3 id="hermes-flow-title">From reader questions<br />to a brief I can review</h3>
        <p>Planned workflow for usefullittletools.app</p>
      </header>

      <div className="hermes-flow__trigger">
        <strong>A scheduled run starts</strong>
        <span>Hermes gateway on the VPS · instructions and history loaded from durable storage</span>
      </div>

      <ol className="hermes-flow__stages" aria-label="Research workflow">
        {stages.map((stage, index) => (
          <li key={stage.title}>
            <div className="hermes-flow__stage-top">
              <span className="hermes-flow__number mono" aria-hidden="true">0{index + 1}</span>
              <span>{stage.owner}</span>
            </div>
            <h4>{stage.title}</h4>
            <p>{stage.detail}</p>
          </li>
        ))}
      </ol>

      <div className="hermes-flow__review">
        <h4>The automation stops at the brief</h4>
        <p>I review the evidence and decide what happens next.</p>
        <ol aria-label="Separate editorial decisions">
          <li>Select an article</li>
          <li>Decide to draft</li>
          <li>Approve publication</li>
        </ol>
      </div>

      <div className="hermes-flow__foundation">
        <h4>What keeps the next run possible</h4>
        <ul aria-label="Operating requirements">
          {['Available server', 'Running scheduler', 'Durable files', 'Valid credentials', 'Network access', 'Provider quota for AI'].map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>Logs make runs inspectable. Failure alerts make missed work visible. Bounded retries and saved state make recovery manageable.</p>
      </div>

      <figcaption id="hermes-flow-caption"><span className="mono">Fig. 694-1</span> Proposed architecture, not a completed assistant. Code handles fetching, filtering, and storage; AI handles synthesis and recommendations.</figcaption>
    </figure>
  );
}
