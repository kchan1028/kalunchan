import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Background supplied by KC (20+ years; VoIP, publishing, SaaS, government;
// Python, Django/DRF, Flask, FastAPI, Rails, Node.js, React, Next.js; Flask APIs
// at Brainome; auth, SSO, JWT, RBAC, object-level authorization). The
// government platform below is hypothetical and is not any real agency system.

export const toc = [
  ['consumer', 'Start with the consumer'],
  ['style', 'Choosing a style'],
  ['boundaries', 'Boundaries and ownership'],
  ['contract', 'The contract'],
  ['security', 'Security follows the data'],
  ['uncertain', 'Uncertain outcomes'],
  ['request-path', 'The request path'],
  ['operations', 'Performance and operations'],
  ['cost', 'Cost and the team'],
  ['checklist', 'Checklist'],
];

const styles = [
  {
    name: 'REST',
    fit: 'Public and partner APIs, browser apps, resource-shaped data',
    strengths: 'Widely understood; HTTP caching, status codes and tooling work out of the box',
    tradeoffs: 'Screens that need many resources can turn into many requests; versioning needs discipline',
  },
  {
    name: 'GraphQL',
    fit: 'Front ends that combine data from many sources and change often',
    strengths: 'Clients ask for exactly the fields they need; one typed schema',
    tradeoffs: 'HTTP caching is harder; query cost and field-level authorization need deliberate work',
  },
  {
    name: 'gRPC',
    fit: 'Internal service-to-service calls with high volume or streaming',
    strengths: 'Compact binary messages, generated clients, strict contracts',
    tradeoffs: 'Browsers need a proxy such as gRPC-Web; payloads are harder to inspect by hand',
  },
];

export default function Body() {
  return (
    <>
      <section id="consumer" aria-labelledby="consumer-h">
        <h2 id="consumer-h" className="post__h2">Start with the consumer and the workflow</h2>
        <p>An API is a promise other people build on. The endpoints are the part everyone sees. Ownership, the contract, how it behaves when something fails and how it’s operated decide whether that promise is still worth anything two years later.</p>
        <p>I’ve built and integrated APIs across VoIP, publishing, SaaS and government applications: in Django and Django REST Framework, Flask, including Flask APIs at Brainome, FastAPI, Rails and Node.js, consumed by React and Next.js front ends and by other services. The frameworks changed often. The questions in this post didn’t. Many of them first came up <Link to="/writing/open-source-voip-distributed-systems-lessons/">operating a VoIP platform</Link>, where the contract between systems was a phone call that had to connect.</p>
        <p className="post__answer">API architecture is how systems agree to cooperate: the contracts between them, who owns each one, how access is controlled, and how requests behave when something fails. Good API architecture lets consumers depend on a stable contract while the team changes the implementation safely.</p>
        <p>To keep it concrete, I’ll use one hypothetical example throughout: a government application platform. Residents submit information, reviewers assess it, and external agency systems receive updates. That’s four consumers with different needs: a browser form, a reviewer dashboard, possibly a mobile app, and partner systems that integrate over months, not days.</p>
        <p>Those consumers shouldn’t see the database. If the API mirrors the tables, every schema change becomes a breaking change for someone else, and partners end up depending on column names you never meant to promise. The contract should describe the workflow: submit an application, assign a reviewer, record a decision.</p>
      </section>

      <section id="style" aria-labelledby="style-h">
        <h2 id="style-h" className="post__h2">Choose an API style for a concrete reason</h2>
        <p>REST is an architectural style, usually over HTTP. GraphQL is a query language and runtime for an API. gRPC is an RPC framework built on HTTP/2 and Protocol Buffers. Django, FastAPI or Rails can implement more than one of them. The choice should come from the consumers, the tooling and what the team already knows how to run.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 669-1</span> REST, GraphQL and gRPC in practice
            </caption>
            <thead>
              <tr>
                <th scope="col">Style</th>
                <th scope="col">Good fit</th>
                <th scope="col">Strengths</th>
                <th scope="col">Tradeoffs</th>
              </tr>
            </thead>
            <tbody>
              {styles.map((s) => (
                <tr key={s.name}>
                  <th scope="row">{s.name}</th>
                  <td data-label="Good fit">{s.fit}</td>
                  <td data-label="Strengths">{s.strengths}</td>
                  <td data-label="Tradeoffs">{s.tradeoffs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
        <p>For the hypothetical platform, REST would suit the partner integrations, because agencies can call it with standard tools. A reviewer dashboard pulling from many places might justify GraphQL or a dedicated endpoint for that screen. Neither choice says one style is better in general.</p>
      </section>

      <section id="boundaries" aria-labelledby="boundaries-h">
        <h2 id="boundaries-h" className="post__h2">Design boundaries around responsibilities</h2>
        <p>Some things are resources: an application, a document, a reviewer. Others are business operations: submit, withdraw, approve. Modeling “approve” as an operation with its own rules is clearer than letting clients set a status field and hoping they set it correctly.</p>
        <p>Each boundary needs an owner, the team that decides how it changes and gets paged when it breaks. An API boundary doesn’t require a separate service or deployment. A well-structured application can expose clean boundaries from one codebase, which I argue for in <Link to="/writing/team-size-should-influence-architecture/">your team size should influence your architecture</Link>.</p>
      </section>

      <section id="contract" aria-labelledby="contract-h">
        <h2 id="contract-h" className="post__h2">Treat the contract as something others depend on</h2>
        <p>Validate input at the edge and return errors in one consistent shape, with a machine-readable code and a message a person can act on. Paginate every list that can grow. Document filtering and sorting instead of letting consumers discover them. Keep the documentation generated from the same schema the code uses, so they can’t drift apart.</p>
        <p>Then treat compatibility as a feature. Adding an optional field is usually safe. Renaming a field, changing a type or tightening validation is not. On the hypothetical platform, renaming one field in the application response could create work for the web team, the mobile team and three partner agencies, each on its own release schedule. Version deliberately, announce deprecations, and watch which consumers still use the old version before you remove it.</p>
      </section>

      <section id="security" aria-labelledby="security-h">
        <h2 id="security-h" className="post__h2">Security has to follow the data and the action</h2>
        <p>Authentication answers who is calling. Authorization answers whether they may do this specific thing to this specific record. A valid JWT proves the first. It says nothing about the second.</p>
        <p>If a resident can change the ID in <code>/applications/1042</code> and read someone else’s application, the token was valid and the API still failed. OWASP lists this, broken object level authorization, first in its <a href="https://api-security.owasp.org/editions/2023/en/0xa1-broken-object-level-authorization/">API Security Top 10</a>. Every request needs an object-level check: is this record in the caller’s tenant, is it theirs or assigned to them, and does their role allow this action? Privileged operations like approving or exporting deserve their own checks and an audit trail. Role-based access and SSO help, but neither replaces the check on the record itself.</p>
        <p>I check that first because of where I started. An access control list on a carrier router is the same idea with IP addresses as the subject: deny by default, allow explicitly, and test the rule with the traffic it is supposed to permit. That story is in <Link to="/writing/network-security-before-devsecops/">network security long before DevSecOps</Link>.</p>
      </section>

      <section id="uncertain" aria-labelledby="uncertain-h">
        <h2 id="uncertain-h" className="post__h2">Design for uncertain outcomes</h2>
        <p>A resident submits an application. The server saves it, then the response is lost on a slow mobile connection, and the client times out. From the client’s side, the outcome is unknown. A timeout doesn’t prove the operation failed. It only proves the client didn’t hear back.</p>
        <p>If the client retries a plain POST, the resident may now have two applications. The fix is idempotency: the client sends a unique key with the request, and the server stores the result under that key. A retry with the same key returns the original result instead of creating a second record. Reads and well-designed PUTs are naturally safe to retry. Creates and anything that moves money or sends messages need the key.</p>
      </section>

      <section id="request-path" aria-labelledby="request-path-h">
        <h2 id="request-path-h" className="post__h2">Decide what belongs in the request path</h2>
        <p>The resident needs to know the application was received. They don’t need to wait while documents are scanned, partner systems are notified and reports are updated. The API can save the application, return <code>202 Accepted</code> with a link to a status endpoint, and let background workers do the rest.</p>
        <p>A job queue handles that well. If several systems need to react to the same submission, an event stream like Kafka may earn its place, with tradeoffs I cover in <Link to="/writing/event-driven-architecture-kafka-tradeoffs/">event-driven architecture with Kafka</Link>. Kafka isn’t required to make an API asynchronous.</p>
      </section>

      <section id="operations" aria-labelledby="operations-h">
        <h2 id="operations-h" className="post__h2">Performance and operations cover the whole path</h2>
        <p>Slow APIs are rarely slow because of the framework. The usual causes are an N+1 query, a response carrying fields nobody reads, a screen that makes twenty requests where one would do, missing caching, a connection pool that runs dry, or a downstream call with no timeout. Rewriting the service in a faster framework keeps all of those.</p>
        <p>Run the API as a production service. Track request rate, error rate and latency per endpoint. Write structured logs with a request ID that travels into downstream calls and traces. Make health checks reflect whether the service can do its job. Set rate limits per consumer, and deploy so old and new versions can run side by side during a rollout. That is what lets support trace a partner’s failing call from the request ID.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">Cost, and matching the architecture to the team</h2>
        <p>API design shows up on the bill. Chatty clients multiply requests and gateway charges. Oversized responses add network transfer. Repeated queries add database load. Every extra service boundary adds hosting, observability and another hop. Third-party APIs you call can charge per request. Each integration also has to be supported long after launch.</p>
        <p>The organizational costs are larger and harder to see: breaking changes that pull several teams off their roadmaps, endpoints nobody owns, and the same integration built three times because nobody knew it existed.</p>
        <p>For many teams, one well-structured API is enough. A backend-for-frontend helps when a web app and a mobile app need different shapes of the same data. Independent services make sense when different teams own them, scale them differently or need a security boundary, and when the team can pay for that overhead.</p>
      </section>

      <section id="checklist" aria-labelledby="checklist-h">
        <h2 id="checklist-h" className="post__h2">A decision checklist</h2>
        <ol className="post__steps">
          <li>Who consumes this API, and what do they need?</li>
          <li>Who owns its contract and production behavior?</li>
          <li>What happens when a request is retried or a dependency fails?</li>
          <li>How do we enforce access to each object and operation?</li>
          <li>How will consumers survive changes?</li>
          <li>Can the team operate this design at an acceptable cost?</li>
        </ol>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Keeping the API dependable</h2>
      <div className="post__close-copy">
        <p className="lead">Consumers care whether the API keeps its promises, so I put ownership, authorization, retries and compatibility ahead of framework choice.</p>
        <p className="post__close-principle">Consumers need to be able to upgrade on their own schedule, with compatibility they can test and changes they can plan for.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk through an API design <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
