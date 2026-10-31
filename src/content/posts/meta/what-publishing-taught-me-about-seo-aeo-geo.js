export const metadata = {
  seoTitle: 'What CTOs Should Know About SEO, AEO and GEO — Ka Lun Chan',
  dek:
    'Publishing taught me that a technically good website is only part of the job. If nobody discovers the content, the technology behind it doesn’t matter very much. Now AI is changing how people discover things again.',
  related: [
    { to: '/work/publishing-distribution/', label: 'Case study: making a publishing platform compete on distribution' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why experienced developers still Google things' },
    { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Software architecture lessons from different systems' },
    { to: '/writing/digital-publishing-seo-adsense-affiliate-ai-search/', label: 'The business side: AdSense, affiliate networks and the publishing revenue engine' },
  ],
  keywords: [
    'CTO lessons',
    'what CTOs should know about SEO',
    'engineering leadership and SEO',
    'technical SEO for engineering leaders',
    'SEO AEO GEO',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'engineering and content marketing',
    'site migration SEO',
    'publishing platform engineering',
  ],
  about: [
    { '@type': 'Thing', name: 'Search engine optimization', alternateName: 'SEO', sameAs: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
    { '@type': 'Thing', name: 'Answer engine optimization', alternateName: 'AEO' },
    { '@type': 'Thing', name: 'Generative engine optimization', alternateName: 'GEO', sameAs: 'https://en.wikipedia.org/wiki/Generative_engine_optimization' },
    { '@type': 'Thing', name: 'Engineering leadership' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Content marketing', sameAs: 'https://en.wikipedia.org/wiki/Content_marketing' },
    { '@type': 'Thing', name: 'Social media optimization', sameAs: 'https://en.wikipedia.org/wiki/Social_media_optimization' },
    { '@type': 'Thing', name: 'Open Graph protocol', url: 'https://ogp.me/' },
    { '@type': 'Thing', name: 'Core Web Vitals', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
  ],
  // Rendered at the end of the post and emitted as JSON-LD citations.
  sources: [
    { label: 'Google Search Central: Creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    { label: 'Google Search Central: Site moves with URL changes', url: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes' },
    { label: 'Google Search Central: Consolidate duplicate URLs (canonicalization)', url: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls' },
    { label: 'Google Search Central: JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' },
    { label: 'Google Search Central: Core Web Vitals', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
    { label: 'Google Search Central: AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
    { label: 'The Open Graph protocol', url: 'https://ogp.me/' },
    { label: 'Aggarwal et al., GEO: Generative Engine Optimization (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
  ],
  faq: [
    {
      q: 'What should a CTO know about SEO?',
      a: 'Enough to recognize when an engineering decision helps or hurts discovery. URL changes, redirects, canonical URLs, rendering, page speed, information architecture and structured data are all decided in engineering, and each one can affect years of accumulated search traffic. A CTO doesn’t need to be the SEO specialist, but should bring that expertise in before a release, not after traffic drops.',
    },
    {
      q: 'How can engineering decisions hurt organic traffic?',
      a: 'Changing URLs without redirects, rendering content only with client-side JavaScript, redesigns that remove headings or internal links, poor information architecture, slow pages and deleting old pages that still earn links and traffic can all reduce how often a site is found in search.',
    },
    {
      q: 'What is the difference between SEO, AEO and GEO?',
      a: 'SEO (search engine optimization) helps search engines crawl, understand and rank pages. AEO (answer engine optimization) structures content so search features and AI assistants can extract a direct answer. GEO (generative engine optimization) makes content and the entities behind it easy for generative AI systems to understand, trust and cite.',
    },
    {
      q: 'Is SEO dead because of AI search?',
      a: 'No. AEO and GEO expand the problem rather than replace SEO. AI systems still depend on crawlable, technically healthy, trustworthy pages, and Google says the same SEO best practices apply to its AI features. What changes is that discovery is no longer only about earning a blue link.',
    },
    {
      q: 'How do you make content that AI systems can cite?',
      a: 'Answer real questions directly, write passages that make sense on their own, support claims with first-hand experience, evidence and sources, use clear headings and structured data that match the visible page, keep pages fast and server-rendered, and connect related pages with meaningful internal links.',
    },
    {
      q: 'What did Ka Lun Chan learn as CTO of a publishing platform?',
      a: 'Ka Lun Chan (KC) learned that discovery is part of the product. As CTO of a media publishing platform, he moved distribution into the platform itself: structured content, fast cached rendering, and metadata for search engines and social cards. Organic traffic, social traffic and social engagement each grew 50%.',
    },
  ],
};
