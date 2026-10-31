import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Replaces the illustrative /work/document-intelligence/ design example
// (redirected by scripts/cloudflare-redirects.mjs). Confirmed facts: AI
// document processing with people in the loop as part of Yippify work (About
// page); the customer-facing product for a no-code ML platform (about.js);
// KC's agent experiments (ai-agents post); FedPath keeps solicitation documents
// on its own server and scores without AI (FedPath case study). Snowflake
// Document AI is deliberately NOT mentioned (KC, Oct 18 2026: no details on
// record). The pipeline diagram and thresholds discussion come from the old
// illustrative page and are labelled as a design, not a deployment. No volumes,
// accuracy figures, clients or outcomes.

export const toc = [
  ['why', 'Why everyone wants to automate documents'],
  ['trust', 'Extracting text is the easy part'],
  ['pipeline', 'Classify, extract, validate, route'],
  ['messy', 'Missing fields, odd formats and low confidence'],
  ['review', 'Human review is part of the design'],
  ['integration', 'The workflow around the model'],
  ['security', 'Sensitive documents need boundaries'],
  ['cost', 'What it costs to run and maintain'],
  ['when', 'When AI helps, and when plain code is better'],
];

const pipeline = {
  label: 'Illustrative design: document pipeline with validation and review routing',
  key: 'The path an uncertain document takes',
  tiers: [
    { name: 'Intake', nodes: [{ id: 'up', label: 'Upload', sub: 'object storage' }] },
    { name: 'Read', nodes: [{ id: 'ocr', label: 'OCR & classify', sub: 'document type' }] },
    { name: 'Extract', nodes: [{ id: 'llm', label: 'Field extraction', sub: 'model' }, { id: 'rag', label: 'Policy lookup', sub: 'retrieval' }] },
    { name: 'Check', nodes: [{ id: 'val', label: 'Validation', sub: 'rules · cross-checks' }] },
    { name: 'Route', nodes: [{ id: 'auto', label: 'Straight through', sub: 'passes checks' }, { id: 'rev', label: 'Reviewer queue', sub: 'uncertain' }] },
    { name: 'Record', nodes: [{ id: 'sor', label: 'System of record', sub: 'with audit trail' }] },
  ],
  edges: [['up', 'ocr', null, true], ['ocr', 'llm', null, true], ['rag', 'llm'], ['llm', 'val', null, true], ['val', 'auto'], ['val', 'rev', null, true], ['auto', 'sor'], ['rev', 'sor', null, true]],
};

export default function Body() {
  return (
    <>
      <section id="why" aria-labelledby="why-h">
        <h2 id="why-h" className="post__h2">Why everyone wants to automate documents</h2>
        <p>Part of the work I do through <Link to="/experience/#yippify">Yippify</Link> involves AI document processing, and the designs keep people in the loop. That choice was deliberate, and the reasons behind it are most of what I have learned about putting AI into a document workflow.</p>
        <p>The appeal is easy to understand. Many organizations still have staff reading PDFs, scans and forms and typing what they find into another system. It is slow, it is tedious, and the errors are hard to catch because the person checking is often the person who typed it. Documents arrive in every format imaginable. Language models can read most of them well enough to be useful, so it is natural to ask whether the reading and typing could be automated.</p>
        <p>It often can, partly. The trouble starts when “the model can read this document” is mistaken for “the business can rely on what the model read.”</p>
      </section>

      <section id="trust" aria-labelledby="trust-h">
        <h2 id="trust-h" className="post__h2">Extracting text is the easy part</h2>
        <p className="post__answer">Document intelligence is the work of turning documents into information a business can act on. It classifies what each document is, extracts the fields that matter, validates them against rules and existing data, and routes anything uncertain to a person, with a record of how each value was produced. Extracting the text is one step of that.</p>
        <p>The demo is a PDF in and JSON out, and it is genuinely impressive the first time. I have had that moment with my own agent experiments, and it leads to the same question I wrote about in <Link to="/writing/ai-agents-reliable-in-production/">making AI agents reliable in production</Link>: what happens on the thousandth document, when nobody is watching?</p>
        <p>The answer depends on the kind of mistake. A blank field is visible, and someone will ask about it. A wrong value that looks right is far more dangerous. A date read in the wrong format, a total taken from the subtotal line or a name matched to the wrong party will pass straight into a system of record and drive decisions there. The engineering problem is knowing which values to trust.</p>
      </section>

      <section id="pipeline" aria-labelledby="pipeline-h">
        <h2 id="pipeline-h" className="post__h2">Classify, extract, validate, route</h2>
        <p>When I design one of these workflows, the model sits in the middle of a pipeline rather than at the end of it. The figure is an illustrative design, not a diagram of a specific client system, but every version I would build has the same stages.</p>
        <div className="post__diagram">
          <Diagram spec={pipeline} id="document-pipeline" no="713-1" />
        </div>
        <p>Classification comes first, because everything after it depends on knowing what the document is. An invoice, a tax form and a signed agreement need different fields and different rules, and a document classified wrongly will be extracted wrongly with total confidence. Extraction is where a model earns its place on documents whose layout and wording vary. For a fixed form, reading known positions is often more reliable and cheaper.</p>
        <p>Validation is where trust gets built. Format checks confirm a value looks like what it should be. Cross-field checks confirm the line items add up to the total and the dates are in a sensible order. Lookups compare extracted values against records the business already holds. Where values have to be checked against policy, retrieval over the current policy documents lets the system cite the rule it applied, which a reviewer can verify. I would choose that over fine-tuning a model on historical documents, because a policy encoded in model weights is hard to inspect when it changes.</p>
        <p>Routing decides what happens next. A document that passes every check can flow straight through. Anything that fails a check, or that the system is unsure about, goes to a person.</p>
      </section>

      <section id="messy" aria-labelledby="messy-h">
        <h2 id="messy-h" className="post__h2">Missing fields, odd formats and low confidence</h2>
        <p>Real documents are untidy. Pages arrive out of order, scans are skewed, a form was filled in by hand, an attachment holds the information the main document refers to. The system has to tell the difference between a field that is absent from the document and a field the extractor failed to find. Those need different responses: one is a question for the person who submitted the document, the other is a question for the reviewer.</p>
        <p>Inconsistent formats are a job for ordinary code. Dates, currencies, phone numbers and names should be normalized deterministically after extraction, so the same input always produces the same stored value, and so the normalization can be tested.</p>
        <p>Confidence needs the most care. A model’s own report of how sure it is isn’t a reliable basis for skipping review. The thresholds that send a document to a person should be set by testing against representative documents with known answers, and by the cost of each kind of error. A wrong value that delays a routine record is not the same as one that affects an eligibility decision or a payment, and the threshold for each should reflect that.</p>
      </section>

      <section id="review" aria-labelledby="review-h">
        <h2 id="review-h" className="post__h2">Human review is part of the design</h2>
        <p>The goal is usually to take the re-keying out of a person’s day while keeping their judgment in the process. So the review experience deserves as much design as the model. A reviewer should see each extracted value next to the passage it came from, so checking it takes seconds instead of a search through the document. Correcting a value should be as fast as accepting it. Every correction should be recorded, because those corrections are the best evaluation data the system will ever get.</p>
        <p>Exceptions need an owner and a queue that someone actually works, with an agreed time to clear it. Approval fatigue is real: a reviewer who accepts fifty suggestions in a row without reading them has stopped being a control. When that happens, the fix is better validation or a narrower scope for automation. I wrote more about designing approvals in <Link to="/writing/ai-agents-reliable-in-production/#oversight">where people stay in the loop</Link>.</p>
      </section>

      <section id="integration" aria-labelledby="integration-h">
        <h2 id="integration-h" className="post__h2">The workflow around the model</h2>
        <p>The extracted values have to go somewhere: an existing database, a case management system, an API another team owns. That is where most of the engineering is, and it is ordinary integration work with the usual failure modes. The same document will be uploaded twice, so processing has to be idempotent. A downstream API will be unavailable, so writes need retries that can’t create duplicates. The schema of what you extract will change, so stored values need to carry the version of the extraction that produced them.</p>
        <p>Downstream systems also need to know how much to trust a value. A field a person reviewed and a field that passed automatically may be treated differently later, and that distinction is lost if the pipeline writes only the value. The lessons I described in <Link to="/writing/building-public-sector-applications/#integrations">designing for external systems that behave unexpectedly</Link> apply in both directions here.</p>
      </section>

      <section id="security" aria-labelledby="security-h">
        <h2 id="security-h" className="post__h2">Sensitive documents need boundaries</h2>
        <p>The documents worth automating are often the sensitive ones: financial statements, identity documents, contracts, personal information. Before choosing a model or a service, I want to know where the documents will be processed and stored, and whether that keeps them inside the boundary the organization has committed to. Often that means keeping data in the client’s own cloud account and choosing processing services that operate there.</p>
        <p>Access control applies to the documents and the review queue alike, since reviewers see everything the pipeline sees. Every value needs an audit trail: which document it came from, which model and version extracted it, which checks it passed, and who approved or corrected it. Document text is also untrusted input. A document can contain instructions, and a pipeline that feeds document text to a model with tools has to be designed so those instructions can’t do anything.</p>
        <p>Sometimes the right boundary is no model at all. When I built <Link to="/projects/fedpath/">FedPath</Link>, I kept federal solicitation documents on its own server instead of sending them to an outside AI service, and scored opportunities with transparent rules. Users needed to see why a contract scored the way it did, and that mattered more than what a model could add.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">What it costs to run and maintain</h2>
        <p>The model bill is the visible cost: per page, per token, multiplied by every document and every reprocessing run. The rest is easier to miss. Reviewer time is part of the system’s cost. The evaluation set of representative documents has to be maintained. Prompts, schemas and validation rules need version control and tests like any other code. And when a provider updates a model, results can change without any change to your code, so the evaluation has to run again before anyone trusts the new results.</p>
        <p>Earlier in my career I built the customer-facing product for a no-code machine-learning platform with its research team. The lesson that carries over is that the model is one component. The product around it, which lets people use the results, check them and recover when they are wrong, is where much of the engineering effort and operating cost goes.</p>
      </section>

      <section id="when" aria-labelledby="when-h">
        <h2 id="when-h" className="post__h2">When AI helps, and when plain code is better</h2>
        <p>AI is useful when documents vary in layout and wording, when the information is buried in prose, and when a reasonable first draft saves a person real time. Conventional code is better for fixed forms, known layouts, normalization, arithmetic and business rules, because it is predictable, cheaper to run and straightforward to test. A rule that can be written down should usually be code, even if a model could also apply it.</p>
        <p>The systems I trust combine the two: code for everything that can be specified, a model for the reading that can’t, validation between them, and a person for the uncertain cases and the decisions that matter. That design is less exciting than the demo. It is also the one a business can depend on, and that is the standard I hold AI work to.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Know which values to trust</h2>
      <div className="post__close-copy">
        <p className="lead">Getting text out of a document is a solved problem for most formats. Knowing which values a business can act on is the work.</p>
        <p className="post__close-principle">The model reads the document. Validation, review and the audit trail decide whether the business can rely on what it read.</p>
        <div className="post__close-actions">
          <Link to="/writing/ai-agents-reliable-in-production/" className="action">Making AI agents reliable in production <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
