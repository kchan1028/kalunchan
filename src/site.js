import { person } from './content/profile';
import { cases } from './content/work';
import { cycling } from './content/community';

export const ORIGIN = 'https://kalunchan.dev';

const base = [
  {
    "path": "/",
    "title": "Ka Lun Chan \u2014 Engineering Leader",
    "description": "Engineering leadership, software architecture, community, and mentorship from Ka Lun Chan."
  },
  {
    "path": "/about/",
    "title": "Ka Lun Chan | Engineering Leader & SaaS Founder",
    "description": "Meet KC: an engineering leader and SaaS founder combining hands-on technical depth, product judgment, strong execution, and developing people."
  },
  {
    "path": "/leadership/",
    "title": "Engineering Leadership \u2014 Ka Lun Chan",
    "description": "How I lead engineering teams through architecture decisions, delivery, ownership, and technical growth."
  },
  {
    "path": "/experience/",
    "title": "Experience \u2014 Ka Lun Chan",
    "description": "Engineering impact across carrier networks, communications platforms, media publishing, and public services."
  },
  {
    "path": "/projects/",
    "title": "Projects \u2014 Ka Lun Chan",
    "description": "Engineering case studies covering cloud migration, publishing, public services, and document intelligence."
  },
  {
    "path": "/work/",
    canonical: "/projects/",
    "title": "Work Archive \u2014 Ka Lun Chan",
    "description": "Explore detailed architecture decisions and outcomes from six engineering case studies."
  },
  {
    "path": "/expertise/",
    "title": "Technical Expertise \u2014 Ka Lun Chan",
    "description": "Explore my approach to product engineering, architecture, infrastructure, public services, and AI."
  },
  {
    "path": "/community/",
    "title": "Berkeley Omnium: Racing & Community | Ka Lun Chan",
    "description": "Why I help organize Berkeley Omnium: road and criterium racing, junior and collegiate cycling, and support for six East Bay NICA teams.",
    image: { path: '/images/community/berkeley-hills-road-race.jpg', width: 1920, height: 1080, alt: 'Cyclists on a tree-lined road at the Berkeley Hills Road Race' }
  },
  {
    "path": "/mentorship/",
    "title": "Mentorship \u2014 Ka Lun Chan",
    "description": "Why I mentor engineers until they can replace me, and how the same principle shapes my work in junior cycling and Berkeley Omnium."
  },
  {
    "path": "/contact/",
    "title": "Contact Ka Lun Chan \u2014 Engineering Leader",
    "description": "Talk with Ka Lun Chan, a hands-on engineering leader, about Head of Engineering and VP Engineering roles, scaling teams, software architecture, and platform modernization."
  }
];

export const routes = [
  ...base,
  ...cases.map((c) => ({
    path: `/work/${c.slug}/`,
    title: `${c.title} — Case Study, Ka Lun Chan`,
    description: c.summary,
    type: 'article',
  })),
];

export const NOT_FOUND = {
  path: '/404',
  title: 'Section not found — Ka Lun Chan',
  description: 'This section of the manual does not exist.',
  noindex: true,
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
  if (m.path === '/' || m.path === '/about/') {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url,
      name: m.title,
      description: m.description,
      mainEntity: {
        '@type': 'Person',
        name: person.name,
        alternateName: person.short,
        url: ORIGIN + '/',
        jobTitle: 'Engineering Leader',
        description: person.level,
        sameAs: [person.linkedin, person.github],
        knowsAbout: [
          'Engineering leadership', 'Software architecture', 'Product engineering', 'Cloud architecture',
          'AWS', 'Python', 'Django', 'React', 'Next.js', 'Platform modernization',
          'Government technology', 'AI engineering', 'Event-driven systems', 'Kafka',
          'Engineering management', 'Mentorship',
        ],
      },
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  }
  if (m.path === '/community/') {
    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage', '@id': `${url}#webpage`, url,
          name: m.title, description: m.description,
          author: { '@type': 'Person', name: person.name, url: ORIGIN + '/about/' },
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
      ],
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n    ');
}
