import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Background supplied by KC (20+ years; VoIP, publishing, SaaS, government;
// React, Next.js, Python, Django/DRF, Rails, Node.js, APIs, AWS, CI/CD; small and
// distributed teams). Both examples are hypothetical and labelled on the page.

export const toc = [
  ['depth-and-breadth', 'Depth and breadth'],
  ['api-works', '“The API works”'],
  ['frontend-backend', 'What the frontend needs to know'],
  ['backend-frontend', 'What the backend needs to know'],
  ['evidence', 'Start with evidence'],
  ['quality-of-life', 'Developer quality of life'],
  ['where-it-belongs', 'Client or server?'],
  ['leaders', 'How leaders create silos'],
  ['shared-understanding', 'Building shared understanding'],
];

export default function Body() {
  return (
    <>
      <section id="depth-and-breadth" aria-labelledby="depth-and-breadth-h">
        <h2 id="depth-and-breadth-h" className="post__h2">Deep expertise and broad understanding do different jobs</h2>
        <p>Over more than 23 years in VoIP, publishing, SaaS and government applications, I’ve worked across React and Next.js, Python with Django and DRF, Rails, Node.js, APIs, AWS and CI/CD, from application code through architecture to production operations. I’ve led small teams and larger distributed ones. In my experience, the problems that drag on are often the ones that cross a boundary nobody is watching, more than the technically hardest ones.</p>
        <p>Specialists matter. A frontend engineer who understands rendering, accessibility and state management builds things a generalist can’t. A backend engineer who knows query plans and transaction isolation prevents problems most people never see. Neither needs to master the other’s field.</p>
        <p className="post__answer">Specialization becomes a problem when engineers can’t follow a user’s problem across system boundaries, explain what they need from another team, or see how their decisions affect someone else’s work. Depth in one area works best with enough understanding of the neighboring systems to investigate and collaborate.</p>
      </section>

      <section id="api-works" aria-labelledby="api-works-h">
        <h2 id="api-works-h" className="post__h2">“The API works” doesn’t solve the user’s problem</h2>
        <p>Here’s a hypothetical. An endpoint returns <code>200 OK</code> and passes its tests. The frontend developer building on it finds that a field is missing whenever a record is incomplete, dates come back in two formats, and validation errors arrive as a single string the UI can’t attach to a form field. Each problem is small. Together they mean a week of defensive code in the interface.</p>
        <p>From the backend side, the API works. From the user’s side, the form still doesn’t. Correctness for an API includes whether its consumer can build something reliable on it. I go deeper on that in <Link to="/writing/api-architecture-lessons/">what building and operating real systems has taught me about APIs</Link>.</p>
      </section>

      <section id="frontend-backend" aria-labelledby="frontend-backend-h">
        <h2 id="frontend-backend-h" className="post__h2">Frontend engineers need enough backend knowledge to ask</h2>
        <p>Another hypothetical. A frontend developer needs a searchable table of applications. The list endpoint returns everything, so they download the whole dataset and filter it in the browser. With two hundred records, nobody notices. With fifty thousand, the page takes seconds to load, uses a lot of memory on older phones, and may expose records the user shouldn’t see if authorization only happens in the UI.</p>
        <p>The developer did their best with what they had. What was missing was the knowledge to ask for something better. Someone who understands pagination, server-side filtering and sorting, where validation and authorization have to live, and when work should run asynchronously can make a specific request: “Can the list endpoint accept a status filter and a page size, and enforce the reviewer’s permissions on the server?” That’s a twenty-minute conversation instead of a workaround someone maintains for years.</p>
      </section>

      <section id="backend-frontend" aria-labelledby="backend-frontend-h">
        <h2 id="backend-frontend-h" className="post__h2">Backend engineers need enough frontend knowledge to design and investigate</h2>
        <p>The first place that knowledge pays off is the response body. A backend engineer who knows how the screen will use the data can shape a payload the frontend developer can render without reworking it: the fields a list view needs without the extras only the detail page uses, stable field names, a clear rule for which fields can be null, dates in one standard format, status values with labels the UI can show, and validation errors keyed to the form fields they belong to. A quick look at the design or a short conversation with the frontend developer before writing the serializer usually settles most of it.</p>
        <p>The second place is troubleshooting. Here’s the mirror image of the earlier example, also hypothetical. A user reports that saving a form fails. The backend developer checks the logs, sees the request return <code>200</code>, and closes the ticket as “works on our side.” The browser, meanwhile, refuses to hand the response to the page because the API didn’t send the right cross-origin (CORS) headers for that origin.</p>
        <p>The backend developer doesn’t need to own the frontend to catch that. They need to know enough to open the browser’s network panel, read the console error, check the preflight request and the response headers, and understand how cookies and client state affect what gets sent. Ten minutes in the network tab, together with the frontend developer, would have moved the issue to the right place: the server’s CORS configuration.</p>
      </section>

      <section id="evidence" aria-labelledby="evidence-h">
        <h2 id="evidence-h" className="post__h2">Better collaboration starts with evidence</h2>
        <p>“The backend is broken” starts an argument. A report with the request, the response, what was expected, the steps to reproduce it and who is affected starts a fix. The second version takes a few more minutes to write and saves hours on the other side.</p>
        <p>The same goes the other way. “Just handle it in the frontend” closes a conversation. “Where should this responsibility live, and who else will need it?” opens one, and sometimes the answer really is the frontend.</p>
      </section>

      <section id="quality-of-life" aria-labelledby="quality-of-life-h">
        <h2 id="quality-of-life-h" className="post__h2">Developer quality of life is an architecture concern</h2>
        <p>Consistent error shapes, predictable contracts, documentation generated from the schema, stable test data and a local setup that runs with one command don’t show up in product demos. They show up in how much friction every engineer hits every day.</p>
        <p>One backend change, returning field-level validation errors in a consistent format, can remove the same parsing code from every form in the frontend. That trade, a small amount of work in one place to save repeated work in many, is architecture even when nobody draws it on a diagram.</p>
      </section>

      <section id="where-it-belongs" aria-labelledby="where-it-belongs-h">
        <h2 id="where-it-belongs-h" className="post__h2">Some complexity belongs on the client, some on the server</h2>
        <p>Not every frontend inconvenience should become a backend feature. Presentation state, like which panel is open, what’s sorted on screen or a draft the user hasn’t submitted, belongs in the client. Shared business rules, authoritative validation and access control belong on the server, because the browser can’t be trusted to enforce them and every client would otherwise reimplement them. The frontend can validate for a faster experience. The server has the final say.</p>
      </section>

      <section id="leaders" aria-labelledby="leaders-h">
        <h2 id="leaders-h" className="post__h2">Leaders can create the silos they complain about</h2>
        <p>Separate frontend and backend backlogs, ownership drawn tightly around layers, recognition based only on closing individual tickets, and handoffs without shared acceptance criteria all teach people to stop at their boundary. Telling developers to “be more full stack” doesn’t change any of that.</p>
        <p>The costs land on the business: features delayed while two teams negotiate, rework when the pieces finally meet, fragile workarounds, more support tickets, and a growing dependence on the few engineers who understand the whole path. Those people become a single point of failure, which is what I try to remove in <Link to="/mentorship/">how I mentor engineers</Link>.</p>
      </section>

      <section id="shared-understanding" aria-labelledby="shared-understanding-h">
        <h2 id="shared-understanding-h" className="post__h2">Shared understanding without universal expertise</h2>
        <p>A few habits do most of the work:</p>
        <ul className="post__list">
          <li>Pair across specialties on bugs that cross the boundary.</li>
          <li>Trace one real request together, from the click to the database and back.</li>
          <li>Review API contracts before anyone builds either side.</li>
          <li>Run short walkthroughs of adjacent systems, led by the people who own them.</li>
          <li>Write acceptance criteria that describe the user’s outcome, not each layer’s task.</li>
        </ul>
        <p>This takes time, and it has to be protected time. If it only happens after the sprint work is done, it won’t happen.</p>
        <p>How much breadth to expect depends on the team. On a team of three or four, most people need to cover several layers, because there’s nobody else. A larger organization can support deeper specialists, as long as the interfaces between them are clear and people still collaborate across them. In neither case should every developer be expected to handle every layer or every incident. Broader knowledge improves judgment. It shouldn’t become a reason to overload people, which is part of why <Link to="/writing/team-size-should-influence-architecture/">team size should influence architecture</Link> too.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Strong in one area, curious about the next</h2>
      <div className="post__close-copy">
        <p className="lead">I don’t need every engineer to know everything. I need them to be able to follow a problem past the edge of their own code.</p>
        <p className="post__close-principle">Be strong in your specialty, and curious enough about neighboring systems to investigate problems, ask useful questions and help deliver a working product.</p>
        <p>It’s the same argument I made in <Link to="/writing/you-dont-need-to-remember-everything/">you don’t need to remember everything</Link>: understanding how systems connect matters more than memorizing all of them.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk about building a team that collaborates across layers <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
