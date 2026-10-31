export const metadata = {
  seoTitle: 'Specialization Shouldn’t Stop at Your Own Code — Ka Lun Chan',
  dek:
    'Specialists matter. The trouble starts when engineers can’t follow a user’s problem across a system boundary, explain what they need from another team, or see how their decisions land on someone else.',
  related: [
    { to: '/writing/api-architecture-lessons/', label: 'API architecture: what real systems have taught me' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'What I still look up, and what I never have to' },
    { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
  ],
  keywords: [
    'frontend backend collaboration',
    'specialist vs generalist engineer',
    'T-shaped engineer',
    'full stack developer',
    'engineering silos',
    'debugging CORS',
    'server-side filtering',
    'developer experience',
  ],
  about: [
    { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
    { '@type': 'Thing', name: 'Engineering leadership' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Cross-origin resource sharing', sameAs: 'https://en.wikipedia.org/wiki/Cross-origin_resource_sharing' },
    { '@type': 'Thing', name: 'Pagination', sameAs: 'https://en.wikipedia.org/wiki/Pagination' },
  ],
  faq: [
    {
      q: 'Should frontend developers learn backend development?',
      a: 'Enough to ask useful questions. Understanding pagination, server-side filtering, validation, authorization and asynchronous processing lets a frontend developer request the right API change instead of building fragile workarounds in the UI. They don’t need to become backend specialists.',
    },
    {
      q: 'Should backend developers learn frontend development?',
      a: 'Enough to design payloads the UI can use and to investigate problems in the browser. Knowing how a screen renders data helps a backend developer choose the right fields, consistent names and formats, clear null rules and field-level errors. Knowing the network panel, CORS and cookies helps them narrow down issues without owning the frontend.',
    },
    {
      q: 'Why does an API return 200 but the browser shows an error?',
      a: 'Often because of cross-origin resource sharing (CORS). The server handled the request, but the browser won’t give the response to the page without the right headers for that origin. The browser’s network panel and console show the preflight request and the missing headers.',
    },
    {
      q: 'Should validation happen on the frontend or the backend?',
      a: 'Both, for different reasons. Frontend validation gives users faster feedback. The server’s validation is authoritative, because the browser can’t be trusted to enforce business rules or access control.',
    },
  ],
};
