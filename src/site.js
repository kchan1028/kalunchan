import { cases } from './content/work';
import { projects, shotSrc } from './content/projects';
import { cycling } from './content/community';
import { publishedFaq } from './content/about';
import { isPlaceholder } from './content/profile';
import { posts } from './content/writing';

export const ORIGIN = 'https://kalunchan.dev';

const base = [
  {
    "path": "/",
    "title": "Ka Lun Chan (KC) \u2014 Engineering Leader, SF Bay Area",
    "description": "Ka Lun Chan (KC): Bay Area engineering leader and generalist. Co-founder and CTO who built a startup from the ground up to 400k+ users and an acquisition."
  },
  {
    "path": "/about/",
    name: "About",
    "title": "Ka Lun Chan | Engineering Leader & SaaS Founder",
    "description": "Meet KC: an engineering leader and SaaS founder combining hands-on technical depth, product judgment, strong execution, and developing people."
  },
  {
    "path": "/leadership/",
    name: "Leadership",
    "title": "How I Lead Engineering Teams \u2014 Ka Lun Chan",
    "description": "My engineering leadership operating manual: eight practices for architecture decisions, technical debt, delivery and growing engineers, and the signals I watch."
  },
  {
    "path": "/experience/",
    name: "Experience",
    "title": "Engineering Leadership Experience \u2014 Ka Lun Chan",
    "description": "Co-founder and CTO through an acquisition, media CTO, VP of Operations and carrier network engineering: the problems, decisions and results behind each role."
  },
  {
    "path": "/projects/",
    name: "Projects",
    "title": "Projects & Case Studies \u2014 Ka Lun Chan",
    "description": "Products and sites I’ve shipped, including FedPath, Berkeley Omnium and Union City Smog Check, plus case studies in cloud, platforms and AI.",
    image: { path: '/images/projects/fedpath-og.jpg', width: 1200, height: 630, alt: 'FedPath home page, one of the products on Ka Lun Chan’s projects page' }
  },
  {
    "path": "/work/",
    canonical: "/projects/",
    "title": "Work Archive \u2014 Ka Lun Chan",
    "description": "Explore detailed architecture decisions and outcomes from six engineering case studies."
  },
  {
    "path": "/expertise/",
    name: "Expertise",
    "title": "Technical Expertise: Architecture, Cloud & AI \u2014 Ka Lun Chan",
    "description": "Seven capabilities, from engineering leadership and software architecture to AWS, government technology and AI, mapped to the roles where each was earned."
  },
  {
    "path": "/community/",
    name: "Community",
    "title": "Berkeley Omnium: Racing & Community | Ka Lun Chan",
    "description": "Why I help organize Berkeley Omnium: road and criterium racing, junior and collegiate cycling, and support for six East Bay NICA teams.",
    image: { path: '/images/community/berkeley-hills-road-race.jpg', width: 1920, height: 1080, alt: 'Cyclists on a tree-lined road at the Berkeley Hills Road Race' }
  },
  {
    "path": "/mentorship/",
    name: "Mentorship",
    "title": "How I Mentor Engineers Until They Can Replace Me \u2014 Ka Lun Chan",
    "description": "Why I mentor engineers until they can replace me, and how the same principle shapes my work in junior cycling and Berkeley Omnium."
  },
  {
    path: '/writing/',
    name: 'Writing',
    title: 'Writing on Cycling, AI, Software and Learning — Ka Lun Chan',
    description: 'What I’m learning, building, riding and testing: cycling and training, AI experiments, tools I use, and essays from two decades of building software.',
  },
  {
    "path": "/contact/",
    name: "Contact",
    "title": "Contact Ka Lun Chan \u2014 Engineering Leader",
    "description": "Talk with Ka Lun Chan, a hands-on engineering leader, about scaling teams, software architecture, platform modernization, and engineering delivery."
  }
];

export const routes = [
  ...base,
  ...projects.map((p) => ({
    path: `/projects/${p.slug}/`,
    title: p.seoTitle,
    description: p.description,
    type: 'article',
    image: { path: shotSrc(p).og, width: 1200, height: 630, alt: p.alt.desktop },
    project: p,
  })),
  ...cases.map((c) => ({
    path: `/work/${c.slug}/`,
    title: `${c.seoTitle || c.title} — Ka Lun Chan`,
    description: c.description || c.summary,
    type: 'article',
    case: c,
  })),
  ...posts.map((p) => ({
    path: `/writing/${p.slug}/`,
    title: p.seoTitle,
    description: p.description,
    type: 'article',
    image: p.image,
    post: p,
  })),
];

export const NOT_FOUND = {
  path: '/404',
  title: 'Section not found — Ka Lun Chan',
  description: 'This section of the manual does not exist.',
  noindex: true,
};

// Sitewide Person (PROFILE.md section 4). Page schemas reference it by @id.
// knowsAbout also keeps the terms from the site's earlier ProfilePage Person.
const PERSON_ID = `${ORIGIN}/#person`;
const WEBSITE_ID = `${ORIGIN}/#website`;
// Section pages without a more specific schema of their own.
const sectionPageTypes = {
  '/leadership/': 'WebPage', '/experience/': 'WebPage', '/expertise/': 'WebPage',
  '/mentorship/': 'WebPage', '/contact/': 'ContactPage',
};
const personLd = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Ka Lun Chan',
  alternateName: 'KC',
  url: 'https://kalunchan.dev/',
  image: 'REPLACE_WITH_PHOTO_URL',
  jobTitle: 'Engineering Leader',
  description: 'San Francisco Bay Area engineering leader and generalist with 23+ years across support, network operations, product and architecture; co-founder and CTO who built a startup from the ground up to 400,000+ users and an acquisition.',
  homeLocation: { '@type': 'Place', name: 'San Francisco Bay Area' },
  worksFor: { '@type': 'Organization', name: 'Yippify', url: 'https://yippify.com/' },
  knowsAbout: [
    'Engineering leadership', 'Software architecture', 'Product engineering', 'Cloud infrastructure', 'AWS',
    'Python', 'Django', 'Ruby on Rails', 'React', 'Next.js', 'PostgreSQL', 'Distributed systems', 'AI and data',
    'Cloud architecture', 'Platform modernization', 'Government technology', 'AI engineering',
    'Event-driven systems', 'Kafka', 'Engineering management', 'Mentorship',
    'Network operations', 'Capacity planning', 'Unix systems', 'Product management', 'SEO',
    'Government contracting', 'SAM.gov', 'Local SEO', 'Answer engine optimization', 'Generative engine optimization',
    'Web performance', 'Small-business modernization', 'Event promotion', 'Community leadership', 'Youth cycling',
  ],
  sameAs: [
    'https://www.linkedin.com/in/kchan1288/',
    'https://github.com/kchan1028',
    'https://yippify.com/',
    'https://getvelowise.com/',
    'https://getsurgeiq.com/',
  ],
};

// Drops any property or array entry still set to a REPLACE_WITH_ placeholder.
const dropPlaceholders = (v) => {
  if (Array.isArray(v)) return v.filter((x) => !isPlaceholder(x)).map(dropPlaceholders);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).filter(([, x]) => !isPlaceholder(x)).map(([k, x]) => [k, dropPlaceholders(x)]));
  }
  return v;
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function metaFor(path) {
  const norm = path.endsWith('/') ? path : `${path}/`;
  return routes.find((r) => r.path === norm) || NOT_FOUND;
}

export function headFor(path) {
  const m = metaFor(path);
  const url = ORIGIN + (m.canonical || m.path);
  const preview = m.image || { path: '/logo512.png', width: 512, height: 512, alt: 'Ka Lun Chan monogram' };
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${m.type || 'website'}" />`,
    `<meta property="og:site_name" content="Ka Lun Chan" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ORIGIN}${preview.path}" />`,
    `<meta property="og:image:width" content="${preview.width}" />`,
    `<meta property="og:image:height" content="${preview.height}" />`,
    `<meta property="og:image:alt" content="${esc(preview.alt)}" />`,
    `<meta name="twitter:card" content="${m.image ? 'summary_large_image' : 'summary'}" />`,
  ];
  if (m.post) {
    tags.push(
      `<meta property="article:published_time" content="${m.post.published}" />`,
      `<meta property="article:modified_time" content="${m.post.modified}" />`,
      `<meta property="article:author" content="${ORIGIN}/about/" />`,
      ...m.post.topics.map((t) => `<meta property="article:tag" content="${esc(t)}" />`),
    );
  }
  if (m.path === '/') {
    tags.push(
      `<meta name="twitter:title" content="${esc(m.title)}" />`,
      `<meta name="twitter:description" content="${esc(m.description)}" />`,
    );
  }
  // One JSON-LD graph per page: the sitewide Person plus any page-specific nodes.
  const graph = [personLd];
  if (m.path === '/') {
    graph.push({
      '@type': 'WebSite', '@id': WEBSITE_ID, url,
      name: 'Ka Lun Chan', alternateName: 'KC', inLanguage: 'en-US',
      publisher: { '@id': PERSON_ID },
    });
  }
  // Top-level sections: Home › Section. /community/ builds its own trail below.
  if (m.name && m.path !== '/community/') {
    graph.push({
      '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
        { '@type': 'ListItem', position: 2, name: m.name, item: url },
      ],
    });
  }
  if (sectionPageTypes[m.path]) {
    graph.push({
      '@type': sectionPageTypes[m.path], '@id': `${url}#webpage`, url,
      name: m.title, description: m.description, inLanguage: 'en-US',
      isPartOf: { '@id': WEBSITE_ID },
      author: { '@id': PERSON_ID },
      breadcrumb: { '@id': `${url}#breadcrumbs` },
    });
  }
  if (m.case) {
    const c = m.case;
    graph.push(
      {
        '@type': 'Article', '@id': `${url}#article`, url,
        mainEntityOfPage: url,
        headline: c.title,
        description: c.summary,
        inLanguage: 'en-US',
        keywords: c.domain.join(', '),
        articleSection: 'Case study',
        author: { '@id': PERSON_ID },
        publisher: { '@id': PERSON_ID },
        isPartOf: { '@id': `${ORIGIN}/projects/#webpage` },
        breadcrumb: { '@id': `${url}#breadcrumbs` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${ORIGIN}/projects/` },
          { '@type': 'ListItem', position: 3, name: c.title, item: url },
        ],
      },
    );
  }
  if (m.path === '/' || m.path === '/about/') {
    graph.push({
      '@type': 'ProfilePage',
      url,
      name: m.title,
      description: m.description,
      mainEntity: { '@id': PERSON_ID },
    });
  }
  if (m.path === '/about/') {
    graph.push(
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: 'Ka Lun Chan (KC): Engineering Leader, San Francisco Bay Area',
        description: 'Profile of Ka Lun Chan, a Bay Area engineering leader with 23+ years in software, co-founder and CTO experience through acquisition, and hands-on architecture skills.',
        url,
        mainEntityOfPage: url,
        image: 'REPLACE_WITH_IMAGE_URL',
        // Keep in sync with the visible "Updated" date on /about/.
        datePublished: 'REPLACE_WITH_DATE',
        dateModified: 'REPLACE_WITH_DATE',
        inLanguage: 'en-US',
        author: { '@id': PERSON_ID },
        about: { '@id': PERSON_ID },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: publishedFaq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    );
  }
  if (m.path === '/community/') {
    graph.push(
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url,
        name: m.title, description: m.description,
        author: { '@id': PERSON_ID },
        about: [{ '@id': cycling.omnium + '#subject' }, { '@id': cycling.club + '#club' }],
        image: ORIGIN + preview.path,
        breadcrumb: { '@id': `${url}#breadcrumbs` },
      },
      // An evergreen subject, not a dated Event listing or registration offer.
      {
        '@type': 'Thing', '@id': cycling.omnium + '#subject',
        name: cycling.title, url: cycling.omnium, description: cycling.description,
      },
      {
        '@type': 'SportsOrganization', '@id': cycling.club + '#club',
        name: 'Berkeley Bicycle Club', url: cycling.club, sport: 'Cycling',
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Community', item: url },
        ],
      },
    );
  }
  if (m.path === '/projects/') {
    graph.push({
      '@type': 'CollectionPage', '@id': `${url}#webpage`, url,
      name: m.title, description: m.description, inLanguage: 'en-US',
      author: { '@id': PERSON_ID },
      breadcrumb: { '@id': `${url}#breadcrumbs` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          ...projects.map((p) => `${ORIGIN}/projects/${p.slug}/`),
          ...cases.map((c) => `${ORIGIN}/work/${c.slug}/`),
        ].map((item, i) => ({ '@type': 'ListItem', position: i + 1, url: item })),
      },
    });
  }
  if (m.project) {
    const p = m.project;
    const entityId = `${p.site}#entity`;
    graph.push(
      {
        '@type': 'CreativeWork', '@id': `${url}#project`, url,
        mainEntityOfPage: url,
        name: p.name,
        headline: p.title,
        description: p.summary,
        image: ORIGIN + preview.path,
        inLanguage: 'en-US',
        keywords: [...p.domain, ...p.capabilities].join(', '),
        creator: { '@id': PERSON_ID },
        author: { '@id': PERSON_ID },
        about: { '@id': entityId },
        isPartOf: { '@id': `${ORIGIN}/projects/#webpage` },
        breadcrumb: { '@id': `${url}#breadcrumbs` },
      },
      {
        ...p.schema,
        '@id': entityId,
        name: p.name,
        url: p.site,
        description: p.summary,
        image: ORIGIN + preview.path,
        creator: { '@id': PERSON_ID },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${ORIGIN}/projects/` },
          { '@type': 'ListItem', position: 3, name: p.name, item: url },
        ],
      },
    );
    if (p.slug === 'berkeley-omnium') {
      graph.push({
        '@type': 'Thing', '@id': cycling.omnium + '#subject',
        name: cycling.title, url: cycling.omnium, description: cycling.description,
      });
    }
  }
  if (m.path === '/writing/') {
    graph.push({
      '@type': 'Blog', '@id': `${url}#blog`, url,
      name: m.title, description: m.description, inLanguage: 'en-US',
      author: { '@id': PERSON_ID },
      blogPost: posts.map((p) => ({ '@id': `${ORIGIN}/writing/${p.slug}/#article` })),
    });
  }
  if (m.post) {
    const p = m.post;
    graph.push(
      {
        '@type': 'BlogPosting', '@id': `${url}#article`, url,
        mainEntityOfPage: url,
        headline: p.title,
        description: p.description,
        image: ORIGIN + preview.path,
        datePublished: p.published,
        dateModified: p.modified,
        inLanguage: 'en-US',
        keywords: p.keywords.join(', '),
        articleSection: 'Writing',
        ...(p.about && { about: p.about }),
        ...(p.mentions && { mentions: p.mentions }),
        ...(p.sources && { citation: p.sources.map((s) => s.url) }),
        timeRequired: `PT${p.minutes}M`,
        author: { '@id': PERSON_ID },
        publisher: { '@id': PERSON_ID },
        isPartOf: { '@id': `${ORIGIN}/writing/#blog` },
        breadcrumb: { '@id': `${url}#breadcrumbs` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Writing', item: `${ORIGIN}/writing/` },
          { '@type': 'ListItem', position: 3, name: p.title, item: url },
        ],
      },
    );
    if (p.faq) {
      graph.push({
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: p.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      });
    }
  }
  const ld = { '@context': 'https://schema.org', '@graph': dropPlaceholders(graph) };
  tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  return tags.join('\n    ');
}
