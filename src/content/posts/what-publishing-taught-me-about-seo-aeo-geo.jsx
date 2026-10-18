import { Link } from 'react-router';
import { postBySlug } from '../writing';
import { ArrowRight } from '../../components/Icons';

// Facts about the publishing role come from profile.js (id: 'publishing') and the
// publishing-distribution case study in work.js. Keep the outcome wording identical.

const google = {
  helpful: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
  siteMove: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  javascript: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
  vitals: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
  canonical: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls',
  ai: 'https://developers.google.com/search/docs/appearance/ai-features',
};

export const toc = [
  ['engineering-lens', 'Seeing websites as an engineer'],
  ['content-is-product', 'Content is a product'],
  ['search-intent', 'Search intent shapes the build'],
  ['technical-seo', 'Technical SEO is engineering'],
  ['consequences', 'Decisions that cost traffic'],
  ['social', 'Beyond Google'],
  ['measurement', 'Traffic isn’t the goal'],
  ['cto-role', 'What changed about the CTO role'],
  ['discovery-again', 'Discovery is changing again'],
  ['learning-now', 'What I’m learning about AEO and GEO'],
  ['seo-foundation', 'SEO is still the foundation'],
  ['questions', 'The questions I ask now'],
  ['sources', 'Sources'],
];

export default function Body() {
  const { sources } = postBySlug['what-publishing-taught-me-about-seo-aeo-geo'];
  return (
    <>
      <section id="engineering-lens" aria-labelledby="engineering-lens-h">
        <h2 id="engineering-lens-h" className="post__h2">I used to judge a website by how well it was built</h2>
        <p>For most of my career, I looked at a website the way an engineer does. Is the architecture sound? Is it fast? Does it stay up? Can we ship changes safely? Will the infrastructure hold when traffic spikes?</p>
        <p>Those are good questions. I still ask all of them. But when I became CTO of a <Link to="/experience/#publishing">media publishing platform</Link>, I found out they weren’t enough.</p>
        <p>We ran a portfolio of media titles on a shared platform, competing for readers with media companies far larger than us. Our editors produced good content. A lot of it still lost on search rankings and social feeds to publishers with more money and more people.</p>
        <p>That was hard for an engineer to accept at first. The site worked and it was reliable, but the readers we wanted weren’t finding it.</p>
        <p className="post__pull">If nobody discovers the content, the technology behind it doesn’t matter very much.</p>
      </section>

      <section id="content-is-product" aria-labelledby="content-is-product-h">
        <h2 id="content-is-product-h" className="post__h2">In publishing, content is the product and the distribution channel</h2>
        <p>At a software company, marketing exists to bring people to the product. In publishing, the content is the product, and it’s also how people find you. Each article is something a reader came for and, at the same time, the reason they found the site in the first place.</p>
        <p>That changed how I thought about the platform. An article wasn’t finished when an editor pressed publish. It was finished when it could be found, understood, shared and read on whatever device someone happened to be holding. A lot of that depended on engineering.</p>
        <p>It also explained why content marketing works for companies outside publishing. A useful article that answers a real question keeps bringing people in long after it’s written. Content doesn’t replace a product, but for a lot of companies it’s the first part of the product anyone sees.</p>
      </section>

      <section id="search-intent" aria-labelledby="search-intent-h">
        <h2 id="search-intent-h" className="post__h2">Search intent changes what you should build and write</h2>
        <p>Before publishing, I thought of search as a ranking problem. Get the keywords right, get the page indexed, move up the list.</p>
        <p>Working alongside editors taught me to start somewhere else: what was the person trying to do when they typed that search? Someone looking for a quick fact, someone comparing options and someone trying to follow steps are three different readers, even when their searches share most of their words. The page that serves one of them well usually serves the others badly.</p>
        <p className="post__answer">Search intent is the goal behind a search: to learn something, find a specific site, compare options or get something done. It decides what kind of page should exist, how it should be structured and what a reader should be able to do next.</p>
        <p>For engineering, intent turned into concrete requirements. It affected page templates, how much content loaded before the first scroll, how we structured content in the CMS, and which pages linked to which. It’s the same habit I describe in <Link to="/writing/engineering-work-nobody-needed/">the most expensive engineering work is work nobody needed</Link>: start from the need, then decide what to build.</p>
      </section>

      <section id="technical-seo" aria-labelledby="technical-seo-h">
        <h2 id="technical-seo-h" className="post__h2">Technical SEO turned out to be engineering work</h2>
        <p>I had assumed SEO belonged to marketing. Much of it does. But a large part of what decides whether a page can be found is decided in the codebase, long before anyone in marketing sees it.</p>
        <p className="post__answer">Technical SEO is the engineering side of search: making sure search engines can crawl, render, understand and index a site’s pages, and that those pages load quickly and work well on every device. Most of it lives in architecture, templates, routing and infrastructure.</p>
        <p>This is the part I had to learn properly, because my team owned it:</p>
        <dl className="post__terms">
          <div><dt>Site architecture</dt><dd>How sections and titles relate to each other, and whether a reader or a crawler can tell what the site is about from its structure.</dd></div>
          <div><dt>URL structure</dt><dd>Readable, stable URLs that describe the page and don’t change when a framework or CMS does.</dd></div>
          <div><dt>Redirects</dt><dd>Permanent redirects from every old URL to its closest new equivalent whenever something moves.</dd></div>
          <div><dt>Canonical URLs</dt><dd>One <a href={google.canonical}>preferred URL for each piece of content</a>, so syndicated copies, tracking parameters and duplicate paths don’t compete with the original.</dd></div>
          <div><dt>Structured data and metadata</dt><dd>Titles, descriptions and machine-readable markup that tell search engines what a page is, who wrote it and when.</dd></div>
          <div><dt>Sitemaps</dt><dd>A current list of the pages that matter, so new content gets discovered quickly.</dd></div>
          <div><dt>Internal linking</dt><dd>Links between related pages, which help readers keep going and show search engines how topics connect.</dd></div>
          <div><dt>Crawlability</dt><dd>Making sure important content is reachable through links and included in the HTML a crawler receives.</dd></div>
          <div><dt>Performance and mobile</dt><dd>Fast pages that hold steady while loading and work properly on a phone, measured with <a href={google.vitals}>Core Web Vitals</a>.</dd></div>
          <div><dt>Migrations</dt><dd>Redesigns and platform moves that don’t leave a trail of broken links behind them.</dd></div>
        </dl>
        <p>Most of it was ordinary engineering discipline, applied with an extra question in mind: what does this change do to how people and search engines find the content?</p>
      </section>

      <section id="consequences" aria-labelledby="consequences-h">
        <h2 id="consequences-h" className="post__h2">Why should a CTO care about SEO?</h2>
        <p className="post__answer">Because engineering decisions change how a company gets discovered. A routine change to URLs, rendering, templates or page speed can undo years of accumulated search value, and the people who would notice first often aren’t in engineering.</p>
        <p>That was the lesson that stuck with me most. Search value builds up slowly: pages earn links, rankings and reader trust over years. It can be lost in a single release by a team that had no idea it was there.</p>
        <p>These are the kinds of decisions I learned to look at twice:</p>
        <dl className="post__terms">
          <div><dt>Changing URL structures</dt><dd>A cleaner URL scheme looks like a harmless improvement. Without a <a href={google.siteMove}>careful redirect map</a>, every link and ranking the old URLs earned is thrown away.</dd></div>
          <div><dt>Heavy client-side JavaScript</dt><dd>If content only appears after scripts run, crawlers may see an empty page or index it late. Google can render JavaScript, but its <a href={google.javascript}>own guidance</a> explains why server-rendered or prerendered HTML is the safer default.</dd></div>
          <div><dt>A beautiful redesign</dt><dd>A redesign can look better and still remove headings, collapse text into images, drop internal links or bury articles three clicks deeper.</dd></div>
          <div><dt>Poor information architecture</dt><dd>Excellent content that no hub, category or related link points to is close to invisible, to readers and crawlers alike.</dd></div>
          <div><dt>Slow pages</dt><dd>Slow pages lose readers before the first paragraph appears, and page experience is part of how search engines evaluate a site.</dd></div>
          <div><dt>Deleting “old” pages</dt><dd>A page can look obsolete and still be earning backlinks and steady traffic. Removing it without a redirect removes all of that too.</dd></div>
        </dl>
        <p>These usually come from teams that measure a release by whether it works, without anyone asking what it does to discovery. I see that as a leadership gap more than a skills gap.</p>
      </section>

      <section id="social" aria-labelledby="social-h">
        <h2 id="social-h" className="post__h2">Content has to work beyond Google</h2>
        <p>Search was only one channel. A lot of our readers found articles because someone shared them, and that taught me social media optimization as a separate discipline from SEO.</p>
        <p>A link shared in a feed is judged in a second or two, on a title, a short description and an image. If the <a href="https://ogp.me/">Open Graph</a> data was missing or wrong, the card showed the wrong image, a cropped headline or a description pulled from the site navigation. The article underneath could be excellent and nobody would click.</p>
        <p>So social cards became part of the platform too: a headline written for a feed, which isn’t always the same as one written for search; a description that gives a reason to click; an image sized for each platform; and pages that load quickly when someone arrives from a phone. It also meant paying attention to how people discovered content on each platform, rather than assuming everyone arrived from a search box.</p>
      </section>

      <section id="measurement" aria-labelledby="measurement-h">
        <h2 id="measurement-h" className="post__h2">Traffic was never the real goal</h2>
        <p>Once you can measure traffic, it’s tempting to treat it as the scoreboard. Publishing taught me that traffic tells you very little on its own.</p>
        <p>The more useful questions were about the reader:</p>
        <ul className="post__list">
          <li>What did people search for before they arrived?</li>
          <li>Which channel brought them: search, social, a newsletter, another site?</li>
          <li>What did they do once they got here? Did they read, scroll, click through to something related, come back later?</li>
          <li>Did the page answer what they came for?</li>
        </ul>
        <p>A page that ranks for a search it doesn’t answer brings in visitors who leave immediately. That isn’t success, even when the traffic chart says it is. Because so much of our audience depended on algorithms we didn’t control, we measured every release against traffic and engagement. Measurement ended up shaping much of the roadmap.</p>
      </section>

      <section id="cto-role" aria-labelledby="cto-role-h">
        <h2 id="cto-role-h" className="post__h2">What it changed about how I see the CTO role</h2>
        <p>The biggest shift was realizing that engineering couldn’t work as a separate function in that business.</p>
        <p>Editorial knew what readers wanted. Marketing knew where they came from. The business side knew which audiences and titles mattered most. Engineering controlled whether the platform made any of that easy or hard. Every one of those groups was affected by decisions the others made, often without knowing it.</p>
        <p>The decision that came out of that was to treat distribution as something the platform did, rather than something editors did after publishing. We put structure into the CMS, made rendering fast and cached, and generated metadata for search engines and social cards automatically, so every title got it by default and improvements carried across the portfolio. Over that period, organic traffic, social traffic and social engagement each grew 50%. I’ve written up the decisions behind that in the <Link to="/work/publishing-distribution/">publishing platform case study</Link>.</p>
        <p className="post__pull">A platform capability beats a process. It still works on the busiest day.</p>
        <p>A CTO doesn’t need to become the company’s SEO specialist or content marketer. There are people who do that work far better. But a technology leader should understand these systems well enough to recognize when an engineering decision helps or hurts the company’s ability to be found, and to bring the right people in before the release, not after the traffic drops. That’s a large part of how I think about <Link to="/leadership/#cross-functional">working across product, marketing and leadership</Link>.</p>
      </section>

      <section id="discovery-again" aria-labelledby="discovery-again-h">
        <h2 id="discovery-again-h" className="post__h2">Discovery is changing again</h2>
        <p>For years, the model we optimized for was simple:</p>
        <dl className="post__contrast">
          <div className="is-before"><dt className="label">Search</dt><dd>Search → results page → click → website.</dd></div>
          <div><dt className="label">AI answers</dt><dd>Question → answer, sometimes with a source attached.</dd></div>
        </dl>
        <p>More and more, people ask ChatGPT, Google’s AI features, Perplexity, Claude or another AI system a question and expect the answer right away. Some of them never visit a website at all. Others click a cited source to check the answer or go deeper.</p>
        <p>That raises a question that is part engineering and part content:</p>
        <p className="post__pull">How do we create information that people can understand, search engines can index, and AI systems can reliably interpret, retrieve, cite and use?</p>
        <p className="post__answer">Answer Engine Optimization (AEO) is the practice of structuring content so search features and AI assistants can pull a clear, direct answer from it. Generative Engine Optimization (GEO) is the practice of making content and the entities behind it easy for generative AI systems to understand, trust and cite when they write an answer.</p>
        <p>The term GEO comes in part from a research paper, <a href="https://arxiv.org/abs/2311.09735">GEO: Generative Engine Optimization</a>, that tested how changes such as adding citations, quotations and statistics affected how visible a source was in AI-generated answers. The field is young, and I’m treating most of what I read about it as hypotheses rather than settled practice.</p>
      </section>

      <section id="learning-now" aria-labelledby="learning-now-h">
        <h2 id="learning-now-h" className="post__h2">What I’m learning about AEO and GEO</h2>
        <p>I’m still learning this. Some of it is familiar from publishing, some of it is new, and I’m testing it on my own sites, including this one. Each post here ends with short answers to the questions it covers, the pages carry structured data that describes who wrote them and what they’re about, and I try to keep the people, organizations and projects I mention consistent from page to page.</p>
        <p>This is what I’m paying attention to:</p>
        <ul className="post__list">
          <li>Be direct: answer the question near the top, in plain language, without a long warm-up written for keyword density.</li>
          <li>Structure pages around real questions, with headings that match what people ask instead of every variation of a keyword.</li>
          <li>Write passages that stand alone. An AI system may quote one paragraph with nothing around it. That paragraph should still name what it’s about and make sense.</li>
          <li>Show first-hand experience. Evidence, data, examples and original observations are the parts nobody else can write, and they’re what make content worth citing.</li>
          <li>Use semantic structure: clear headings, lists and tables, and an information architecture that shows how pages relate.</li>
          <li>Keep content readable by machines without hurting people. Server-rendered HTML, accurate structured data and fast pages help both.</li>
          <li>Link with meaning. Internal links that connect related topics show what a site knows about.</li>
          <li>Aim to be cited as well as ranked. A page that’s accurate, specific and clearly sourced is more likely to be used in an answer than one written only to rank.</li>
        </ul>
        <p>Most of that list is good writing and good engineering, applied with AI readers in mind.</p>
      </section>

      <section id="seo-foundation" aria-labelledby="seo-foundation-h">
        <h2 id="seo-foundation-h" className="post__h2">Is SEO dead because of AI search?</h2>
        <p className="post__answer">No. AEO and GEO don’t replace SEO; they expand the problem. A technically healthy, authoritative and useful website is still the foundation that search engines and AI systems both depend on.</p>
        <p>Google’s own <a href={google.ai}>guidance on AI features</a> says the same SEO best practices still apply, and its advice on <a href={google.helpful}>helpful, reliable, people-first content</a> reads a lot like what makes a page worth citing. AI systems still need to crawl pages, still prefer sources that look trustworthy, and often still send readers to a website to check or go deeper.</p>
        <p>What changes is the goal. Discovery now also means being the source an answer is built on, which raises the bar on clarity, accuracy and evidence.</p>
      </section>

      <section id="questions" aria-labelledby="questions-h">
        <h2 id="questions-h" className="post__h2">The questions I ask when I build something now</h2>
        <p>Publishing changed the questions I ask about software. “Does it work?” is still first. It just isn’t the last one anymore:</p>
        <ol className="post__steps">
          <li><strong>Can people find it?</strong> Through search, social, links from other sites, or wherever they already are.</li>
          <li><strong>Can search engines understand it?</strong> Crawlable HTML, stable URLs, accurate metadata, a clear structure.</li>
          <li><strong>Can AI systems understand it?</strong> Clear entities, standalone answers, structured data that matches what’s on the page.</li>
          <li><strong>Does it answer a real question?</strong> One that someone is asking, not one we invented to fill a keyword.</li>
          <li><strong>Does it create value after we ship it?</strong> Measured by what readers did after the release went out.</li>
        </ol>
        <p>I asked versions of these on the <Link to="/projects/berkeley-omnium/">Berkeley Omnium website</Link> and the <Link to="/projects/union-city-smog-check/">Union City Smog Check redesign</Link>, where answer-first pages and structured data were part of the build from the start rather than a cleanup task afterward. I wrote up the Omnium rebuild, and what the old site was failing at, in <Link to="/writing/berkeley-omnium-new-website-next-generation/">a new website for the next generation of the Berkeley Omnium</Link>.</p>
      </section>

      <section id="sources" aria-labelledby="sources-h">
        <h2 id="sources-h" className="post__h2">Sources</h2>
        <p>The technical points above follow Google Search Central’s documentation and the research paper that introduced the term GEO. Everything else is my own experience.</p>
        <ul className="post__list">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url}>{s.label}</a></li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Still learning the interface</h2>
      <div className="post__close-copy">
        <p className="lead">One of the more interesting parts of a long career in technology is finding out how much is still left to learn.</p>
        <ol className="post__close-list">
          <li>I learned engineering.</li>
          <li>Then leadership.</li>
          <li>Then product and operations.</li>
          <li>Publishing made me learn content, SEO, technical SEO and distribution.</li>
          <li>Now AI is making me rethink discovery again, through AEO and GEO.</li>
        </ol>
        <p>Technology keeps changing the interface between information and people. Part of being a technology leader is continuing to learn how that interface works, the same way I still <Link to="/writing/you-dont-need-to-remember-everything/">look things up after two decades in software</Link>.</p>
        <p className="post__close-principle">Does it work, and can the people who need it find it?</p>
        <div className="post__close-actions">
          <Link to="/work/publishing-distribution/" className="action">Read the publishing platform case study <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
