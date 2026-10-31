import { Link } from 'react-router';
import Diagram from '../../components/Diagram';
import { ArrowRight } from '../../components/Icons';

// Digital publishing as a business, from an engineer's seat. Confirmed facts:
// CTO of a media publishing platform; WordPress to Rails, hosting to AWS;
// organic traffic, social traffic and social engagement each up 50%;
// infrastructure improvements contributed to about 30% lower AWS costs;
// business and operations work with the CEO and partners across the
// affiliated publishing network; SEO, advertising monetization and affiliate
// marketing in scope. Employers unnamed, no years, no revenue or traffic
// figures of KC's own. Worked examples are hypothetical and labelled.
// Verified against current sources (Oct 2026): AdSense pays per impression
// and publishers keep about 68% overall (80% of the sell side); Page RPM =
// estimated earnings / page views x 1000; FTC Endorsement Guides (2023):
// "paid link" is an adequate disclosure, "affiliate link" alone is not.

export const toc = [
  ['when-content-paid', 'When content could make a lot of money'],
  ['adsense', 'How AdSense actually makes money'],
  ['affiliate', 'Affiliate marketing: paid for an action'],
  ['seo', 'SEO: the foundation of organic traffic'],
  ['smo', 'SMO: distribution you don’t own'],
  ['aeo-geo', 'AEO and GEO: visibility without the visit'],
  ['together', 'How the four work together'],
  ['economics', 'The publishing economics have changed'],
  ['engineering', 'The engineering behind a profitable platform'],
  ['today', 'What I’m applying today'],
  ['learned', 'What I learned'],
];

const engine = {
  label: 'The digital publishing revenue engine',
  key: 'Where the money is made',
  tiers: [
    { name: 'Content', nodes: [{ id: 'content', label: 'Content creation', sub: 'original · useful · costs money' }] },
    { name: 'Distribution', nodes: [{ id: 'seo', label: 'SEO', sub: 'search demand' }, { id: 'smo', label: 'SMO', sub: 'social reach' }, { id: 'aeo', label: 'AEO / GEO', sub: 'answers · AI citations' }] },
    { name: 'Audience', nodes: [{ id: 'visit', label: 'Website visit', sub: 'the page loads' }, { id: 'novisit', label: 'Answer without a visit', sub: 'mention · brand · trust' }] },
    { name: 'Monetization', nodes: [{ id: 'ads', label: 'Display ads', sub: 'AdSense · per impression' }, { id: 'aff', label: 'Affiliate', sub: 'per action' }, { id: 'direct', label: 'Direct', sub: 'sponsors · leads · products' }] },
    { name: 'Result', nodes: [{ id: 'profit', label: 'Profit', sub: 'revenue minus hosting, content, engineering, marketing' }] },
  ],
  edges: [
    ['content', 'seo', null, true], ['content', 'smo'], ['content', 'aeo'],
    ['seo', 'visit', null, true], ['smo', 'visit'], ['aeo', 'visit'], ['aeo', 'novisit'],
    ['visit', 'ads', null, true], ['visit', 'aff'], ['visit', 'direct'], ['novisit', 'direct'],
    ['ads', 'profit', null, true], ['aff', 'profit'], ['direct', 'profit'],
  ],
};

const metrics = [
  { term: 'CPC', means: 'Cost per click', note: 'What an advertiser pays when someone clicks. Mostly an advertiser-side number now.' },
  { term: 'CPM', means: 'Cost per thousand impressions', note: 'What an advertiser pays per thousand ad views. The buy side of display.' },
  { term: 'Page RPM', means: 'Revenue per thousand page views', note: 'Estimated earnings ÷ page views × 1,000. The publisher number that matters most.' },
  { term: 'Impression RPM', means: 'Revenue per thousand ad impressions', note: 'Same idea per ad unit shown, so it moves with how many units a page carries.' },
  { term: 'CTR', means: 'Click-through rate', note: 'Clicks ÷ impressions. Still reported; no longer what you are paid on.' },
  { term: 'Viewability', means: 'Share of impressions actually seen', note: 'An ad below the fold that nobody scrolls to is an impression advertisers pay less for.' },
  { term: 'Fill rate', means: 'Ad requests that returned an ad', note: 'Unfilled slots earn nothing and still cost the page load.' },
];

const channels = [
  { s: 'SEO', goal: 'Organic search visibility', outcome: 'Search traffic to your pages' },
  { s: 'SMO', goal: 'Social visibility and engagement', outcome: 'Reach, shares and referral traffic' },
  { s: 'AEO', goal: 'Clear, extractable answers', outcome: 'Answer visibility, with or without a click' },
  { s: 'GEO', goal: 'Being cited by generative AI systems', outcome: 'Mentions, citations and some referrals' },
];

function Code({ title, children }) {
  return (
    <div className="post__code">
      <div className="post__code-bar"><span className="label">{title}</span></div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

export default function Body() {
  return (
    <>
      <section id="when-content-paid" aria-labelledby="when-content-paid-h">
        <h2 id="when-content-paid-h" className="post__h2">When content could make a lot of money</h2>
        <p>I came to digital publishing as a CTO who had already built and sold a company, and it still taught me a different business. As CTO of a media publishing platform, a portfolio of titles competing for audience against much larger companies, I owned the technology and worked with the CEO on business and operations across the partners in our affiliated network. In telecom, revenue arrived one call at a time and the customer paid us directly. In publishing, the reader paid nothing, the advertiser paid for attention, and the engineering had to serve a cost of production, a distribution strategy, an audience, and a way of turning that attention into money, all at once.</p>
        <p>The model of that era was simple to state. Create useful content, rank in search, attract visitors, show them advertising, earn. Some publishers ran thousands of pages aimed at specific topics and queries, and a good article could keep bringing readers for years. Evergreen content was an asset that paid out monthly. Search engines were the largest traffic source most publishers had, and the traffic was free at the margin: you paid to produce the article once and nothing per visitor afterwards.</p>
        <p>It was never free money, whatever it looked like from outside. Ranking was not guaranteed, and a competitor with better content or better technical hygiene could take a position you had held for a year. Production had real costs: writers, editors, photography, a CMS that worked, hosting that held up on a good day. And not all traffic was worth the same. A reader researching insurance, a mortgage or business software was worth far more to advertisers than a reader passing through an entertainment piece, so category, geography, advertiser demand and the reader’s intent all set the revenue per visitor. Two sites with the same traffic could have very different businesses.</p>
        <div className="post__diagram">
          <Diagram spec={engine} id="publishing-engine" no="685-1" />
        </div>
        <p>Answer engines and AI assistants can now serve your expertise to someone who never visits, which is why the Audience column has two boxes. The old model only had one.</p>
      </section>

      <section id="adsense" aria-labelledby="adsense-h">
        <h2 id="adsense-h" className="post__h2">How AdSense actually makes money</h2>
        <p className="post__answer">Google AdSense pays a publisher a share of what advertisers pay to show ads on the publisher’s pages. The publisher builds a site with original content, applies, is reviewed for eligibility and policy, adds Google’s ad code once approved, and ads are served to eligible visitors. Since early 2024 AdSense pays per impression, the display-advertising norm, rather than per click, and the publisher keeps about 68% of what the advertiser pays overall, stated as 80% of the sell-side revenue.</p>
        <p>The vocabulary confuses people because half of it describes what advertisers pay and half describes what publishers earn.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption><span className="mono">Fig. 685-2</span> Advertising metrics, and which side of the market each one describes</caption>
            <thead><tr><th scope="col">Term</th><th scope="col">Means</th><th scope="col">What it tells a publisher</th></tr></thead>
            <tbody>
              {metrics.map((m) => <tr key={m.term}><th scope="row">{m.term}</th><td>{m.means}</td><td>{m.note}</td></tr>)}
            </tbody>
          </table>
        </figure>
        <p>Clicks no longer determine earnings directly. An ad that is shown and seen earns; an ad that is clicked earns the advertiser a visit. What a publisher can control is page RPM, and it moves with audience quality, geography, advertiser demand in the category, how much of the page a reader sees, and how cleanly the ads are implemented.</p>
        <p>A hypothetical example makes the point about volume. A site with 100,000 monthly page views at a page RPM of $5 earns about $500 a month: 100,000 divided by 1,000, times five. The same site at a page RPM of $15 earns $1,500 from the same traffic. Doubling traffic in a low-value category is often harder, and less profitable, than improving the value of the traffic you already have. That is also why a publisher cannot read its own earnings from a traffic chart.</p>
        <p>Implementing it is mostly not technical. Build a site with original, useful content and clear navigation. Add a privacy policy and a way to contact you. Make it work on a phone. Check the technical SEO basics below. Apply, and once approved add the verification or ad code, configure where ads appear, and put a consent flow in front of them where consent rules apply, which for visitors in the EEA and UK means a Google-certified consent management platform. Then monitor earnings and policy compliance, because approval can be withdrawn.</p>
        <p>The technical part is small and easy to get wrong. On a React or Astro site, load the AdSense script once, asynchronously, from the document head, and render each ad unit as a component that reserves its own space so the page does not jump when the ad arrives. Layout shift is a Core Web Vitals metric and an ad that pushes the article down as it loads is the most common cause of it on publisher sites.</p>
        <Code title="React ad unit">{`// index.html, once:
// <script async crossorigin="anonymous"
//   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX">
// </script>

import { useEffect, useRef } from 'react';

export function AdUnit({ slot }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.loaded) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      el.dataset.loaded = '1';
    } catch (e) {
      // script blocked or not loaded yet; the slot stays empty
    }
  }, []);
  return (
    <ins
      ref={ref}
      className="adsbygoogle"
      style={{ display: 'block', minHeight: 280 }}
      data-ad-client="ca-pub-XXXX"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}`}</Code>
        <p>Push once per unit, never on every render. Reserve the height. Keep ad units away from navigation and buttons so nobody clicks one by accident, label nothing as “click here”, and do not bury the article under units: accidental clicks, misleading placement and excessive advertising are the policy violations that get accounts limited, and they also make pages people leave. The current implementation rules and the metric definitions are in Google’s AdSense Help, which changes often enough that I would read it before any blog post, including this one.</p>
      </section>

      <section id="affiliate" aria-labelledby="affiliate-h">
        <h2 id="affiliate-h" className="post__h2">Affiliate marketing: paid for an action</h2>
        <p className="post__answer">Affiliate marketing pays a publisher when a reader completes a defined action after following the publisher’s link: a purchase, a qualified lead, a subscription, a registration. The chain is advertiser, affiliate network, publisher, visitor, conversion, with the network tracking the link and paying the commission, although some programs run directly between an advertiser and a publisher with no network in between.</p>
        <p>The compensation models follow the action. Cost per sale pays a share of a purchase. Cost per lead pays for a form that an advertiser accepts as qualified. Cost per acquisition is the general term for either. Revenue share pays a percentage of what the customer spends, sometimes recurring for as long as they stay a customer, which is why software subscriptions are the affiliate category publishers like best.</p>
        <p>The tracking is where the engineering lives. A link carries an identifier for the publisher and often for the specific page. A cookie, or a server-side record, remembers who sent the visitor for an attribution window of days or weeks. When the advertiser records a conversion, the network matches it to the identifier, holds it for validation, and reverses it if the order is refunded or the lead is rejected. Attribution is imperfect by design now: browsers restrict third-party cookies and shorten first-party ones, privacy tools strip identifiers, and two networks will count the same month differently. A publisher that reconciles its own click logs against the network’s reports learns a lot about which half of its traffic is being credited.</p>
        <p>Another hypothetical. A product comparison page draws 10,000 visitors. Five percent click an affiliate link, 500 clicks. Three percent of those clicks convert, 15 sales. At an average commission of $40 that page earned $600. Change the conversion rate to one percent and it earned $200 from the same traffic; change the commission to $120 and it earned $1,800. Affiliate revenue is a product of two rates and a price, and the page’s job is to move the rates by being genuinely useful to someone deciding.</p>
        <p>Implementing it: pick products your readers consider, research programs that carry them, apply to the network or the direct program, and get approved tracking links. Then publish comparisons and tutorials that would be worth reading with the links removed. Disclose clearly. Track outbound clicks yourself, measure conversions where the network reports them, watch commissions and reversals, and improve the pages on what readers needed rather than what paid. On disclosure, the FTC’s Endorsement Guides, updated in 2023, require it to be hard to miss and easy to understand: “paid link” next to the link is adequate, “affiliate link” on its own is not, and a disclosure hidden behind a “more” link does not count. Editorial independence is the whole asset. The moment readers suspect the recommendation is for sale, the rates in that example fall and do not come back.</p>
      </section>

      <section id="seo" aria-labelledby="seo-h">
        <h2 id="seo-h" className="post__h2">SEO: the foundation of organic traffic</h2>
        <p>Search engine optimization is the work of helping search engines discover, understand and evaluate your pages, so that a search with a given intent finds the page that serves it. Publishers built whole content strategies on search demand: research what people ask, write the page that answers it better than the current results, link it into the site so it is found and understood, and earn the position. A well-ranked article could carry an audience for years without paying per visitor, and ranking was never guaranteed. I wrote the long version, from the same CTO seat, in <Link to="/writing/what-publishing-taught-me-about-seo-aeo-geo/">what publishing taught me about SEO, AEO and GEO</Link>, so here I will keep to what the engineering team owned.</p>
        <p>Technical SEO is a checklist, and the checklist is most of the job. Semantic HTML with one heading hierarchy per page. A title and meta description that say what the page is for. A canonical URL on every page, so syndicated and parameterized copies do not compete with the original. Open Graph metadata, which social platforms read. An XML sitemap that lists what you want indexed and nothing else, and a robots file that does not accidentally block it. JSON-LD structured data describing the article, its author and the organization. Server-side rendering or static generation, because a page whose content only exists after JavaScript runs is a page some crawlers see empty, and the ones that render it do so later and less often. Correct status codes: a missing page returns 404, a moved page redirects once, and nothing returns 200 with an error message in it. On the publishing platform, re-platforming from WordPress to Rails was partly about getting every one of these under engineering control, and organic traffic grew by half.</p>
        <p>Google Search Console is where you find out whether any of it worked: which queries show your pages, where they rank, what is indexed and what was excluded and why, and which Core Web Vitals are failing on which templates. It is free, it is the search engine’s own view, and a publisher that does not read it weekly is guessing.</p>
      </section>

      <section id="smo" aria-labelledby="smo-h">
        <h2 id="smo-h" className="post__h2">SMO: distribution you don’t own</h2>
        <p>Social platforms changed distribution because they did not wait for someone to search. Facebook, Instagram, LinkedIn, Reddit, YouTube and smaller communities could put an article in front of people who had not asked for it, and for a while that was a traffic source as large as search for some titles. Social media optimization is the work of making content discoverable, engaging and shareable inside those platforms, and it differs from SEO in one important way: search captures demand that already exists, social has to create interest where there was none.</p>
        <p>The implementation starts with the same metadata. Open Graph tags and a preview image sized for each platform decide whether a shared link looks like something or like a grey box. After that it is editorial: a summary written for the platform instead of pasted from the article, participation in the communities where readers are, and the restraint to post something only when it is useful there. Being new is not a reason on its own. Posting the same link to every platform at once produces a feed nobody follows. The same article can become a chart, a thread, a short video and a discussion prompt without becoming spam, if each format serves the people on that platform. Measure it with UTM parameters on the links and the platform’s own analytics, and compare referral traffic to what it costs to produce. On the publishing platform, treating social distribution as a product feature rather than an editorial afterthought grew social traffic and social engagement by half each.</p>
      </section>

      <section id="aeo-geo" aria-labelledby="aeo-geo-h">
        <h2 id="aeo-geo-h" className="post__h2">AEO and GEO: visibility without the visit</h2>
        <p className="post__answer">Answer engine optimization (AEO) is the practice of making information clear, accurate and easy to extract into a direct answer, for search features, voice assistants and AI tools that answer a question rather than list links. Generative engine optimization (GEO) is the practice of making your expertise discoverable, accurately represented and cited by AI systems that synthesize answers from many sources. Both are industry terms for ways of working, not ranking systems with guarantees.</p>
        <p>AEO in practice is information architecture. Take an article about cloud infrastructure costs. Instead of a broad introduction, give it a section headed with the question people ask, “What is cloud cost optimization?”, followed by a two-sentence answer that stands on its own, then the examples, then the deeper technical material. Add a short FAQ for the questions readers ask, in semantic HTML, with sources for any fact that could be checked. That structure serves a person skimming on a phone and a machine extracting an answer equally well, and it is how the posts on this site are built, including this one. FAQ markup does not create rich results or AI citations by itself, whatever anyone selling it says.</p>
        <p>GEO adds the question of whether an AI system will trust and credit you. The practices that seem to matter are the ones that would have mattered to a careful human editor: original, experience-based content that says something the generic articles cannot; a clearly identified author and organization, consistently described everywhere; descriptive headings and precise definitions; concrete examples and evidence; links to authoritative sources; information kept current; and pages that relevant crawlers can read. Measure AI referral traffic where your analytics can see it, and evaluate visibility knowing that many mentions produce no visit at all. Original experience is the one thing a generated article cannot copy, and it is why a page written by someone who did the work still has a place in a world that can generate ten thousand pages about the same topic by lunch.</p>
      </section>

      <section id="together" aria-labelledby="together-h">
        <h2 id="together-h" className="post__h2">How SEO, SMO, AEO and GEO work together</h2>
        <figure className="post__figure">
          <table className="post__table">
            <caption><span className="mono">Fig. 685-3</span> Four distribution strategies, one article</caption>
            <thead><tr><th scope="col">Strategy</th><th scope="col">Primary goal</th><th scope="col">Typical outcome</th></tr></thead>
            <tbody>
              {channels.map((c) => <tr key={c.s}><th scope="row">{c.s}</th><td>{c.goal}</td><td>{c.outcome}</td></tr>)}
            </tbody>
          </table>
        </figure>
        <p>They overlap more than the acronyms suggest, and the mistake is to run them as four disconnected content programs with four owners and four backlogs. One strong, original article, with a clear structure, credible information, correct technical implementation and a thoughtful distribution plan, supports all four. The structure that helps an answer engine extract a definition helps a reader skim. The metadata that makes a search result accurate makes a social preview accurate. The author credibility that earns a citation earns a share.</p>
      </section>

      <section id="economics" aria-labelledby="economics-h">
        <h2 id="economics-h" className="post__h2">The publishing economics have changed</h2>
        <p>The model I described at the start still exists and it has become a much harder business. Competition for every query is higher, and a growing share of it is generated content. Search algorithms change, and a publisher can lose a third of its traffic in a week without changing a word. AI-generated summaries at the top of results answer the question before the links, and zero-click searches, where the person gets what they need without visiting anyone, are a large and growing share. Advertising rates move with the economy. Privacy restrictions have made both ad targeting and affiliate attribution less precise, so the same audience earns less and gets credited less. Production costs did not fall. Infrastructure costs are still there every month. And the platforms a publisher depends on for distribution are owned by companies with their own priorities, which is the polite way to say the rules change without notice.</p>
        <p>The lesson I took from watching that happen is that relying entirely on organic search is a business risk, and a publisher that has never lost traffic has simply not been publishing long enough. The response is diversification, of revenue more than of traffic. Display advertising, affiliate partnerships, direct sponsorships, subscriptions, digital products, software tools, and consulting or services each depend on a different thing going right, and a business with three of them survives a bad quarter in one. The deeper shift is from maximizing traffic to building something people come back to on purpose: an audience you can reach without asking a platform’s permission. A newsletter list, a community or a product people use weekly is that kind of audience.</p>
      </section>

      <section id="engineering" aria-labelledby="engineering-h">
        <h2 id="engineering-h" className="post__h2">The engineering behind a profitable platform</h2>
        <p>Running a publishing business is far more than writing articles, and most of the rest landed on the engineering team I led. Content management: WordPress at first, then a Rails platform we built because the portfolio needed infrastructure that every title could share, with editorial workflows, permissions, publishing automation and the migrations that come with moving a lot of content. Performance: rendering, caching, CDN delivery, image optimization, JavaScript weight and Core Web Vitals, each of which is both a ranking input and a reader-retention input. Advertising technology: script integration, placements, revenue tracking, consent management, and watching ad performance per template. Analytics: Google Analytics and Search Console, traffic acquisition by channel, engagement, conversion tracking and revenue attribution, which is the only way to know what a visitor from each source was worth. And infrastructure economics: hosting, bandwidth, CDN, database capacity, caching and scaling, which I have written about in <Link to="/writing/capacity-planning-carrier-networks-to-cloud/">capacity planning from carrier networks to the cloud</Link>.</p>
        <p className="post__answer">A website that earns advertising revenue is not necessarily profitable. The simplified test is operating contribution: advertising revenue plus affiliate revenue plus other revenue, minus direct operating costs, where direct costs include hosting, content production, software services and whatever else is attributable to running the site. A page that earns $5 per thousand views and costs $6 per thousand to serve and produce is a page losing money at any scale.</p>
        <p>That is why infrastructure optimization and performance are revenue work as well as cost work. On the publishing platform, the move to AWS and the improvements that came with it contributed to about 30% lower AWS costs, which is the cost side of the formula. The faster pages that came with the same work improved rankings, retention and ad viewability, which is the revenue side. The same engineering moved both terms. I have found that to be true of most infrastructure work that is done carefully, and it is the reason I ask what a technical decision costs to run before I ask whether it is elegant, an argument I make in <Link to="/writing/hidden-cost-of-software-architecture/">the hidden cost of software architecture</Link>.</p>
      </section>

      <section id="today" aria-labelledby="today-h">
        <h2 id="today-h" className="post__h2">What I’m applying today</h2>
        <p>I run four sites now, and each one has a different answer to the question of what content is for, which is the question publishing taught me to ask first.</p>
        <p><a href="https://usefullittletools.app">Useful Little Tools</a> is the closest to a classic publisher: practical calculators with supporting educational content, where I am exploring organic search, engagement, advertising monetization and possibly affiliate partnerships in the way this post describes. It is an experiment in whether the model still works for a small, useful site, and I am applying the lessons here, with no results to report yet. <a href="https://yippify.com">Yippify</a> publishes educational content and technical insight to reach potential software development clients, so the objective is lead generation and trust, and a display ad on a page meant to win a client would cost more in credibility than it earned. <a href="https://gofedpath.com">FedPath</a> publishes GovCon education to help small businesses understand federal contracting, where content exists for product discovery, trust and eventually customers. And this site publishes original engineering experience, architecture and leadership lessons for professional credibility and discoverability, with no monetization at all. The four sites share one technical foundation for metadata, structured data, performance and answers that stand on their own.</p>
      </section>

      <section id="learned" aria-labelledby="learned-h">
        <h2 id="learned-h" className="post__h2">What I learned</h2>
        <p>Through all the changes in search, social, advertising and AI, one principle held: content creates business value only when it reaches the right audience and serves a real purpose for them.</p>
        <p>The lesson I keep is that building a fast, well-architected site is only part of the job, even for a CTO who has built one before. You also need to understand why visitors arrive, what they are looking for, how they behave once they are there, and how the business turns that into revenue that covers its costs. That combination, technology, content, distribution, user experience and economics, is what made digital publishing interesting to me, and it is the same combination I look for when I evaluate any product today. After watching the industry change this much, I am still learning it, and the learning is the part I would not give up.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Distribution, revenue and operating cost</h2>
      <div className="post__close-copy">
        <p className="lead">Publishing taught me that a website with good architecture, fast APIs and clean code is not yet a business.</p>
        <p>That is the judgment I bring to engineering leadership: the audience, the distribution, the revenue model and the operating costs are part of the system, and the engineering has to serve all of them.</p>
        <div className="post__close-actions">
          <Link to="/work/publishing-distribution/" className="action">Case study: the publishing platform <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
