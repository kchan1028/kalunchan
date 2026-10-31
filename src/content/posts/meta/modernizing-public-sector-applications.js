export const metadata = {
  seoTitle: 'Modernizing Public-Sector Applications: Legacy Systems and Risk',
  dek:
    'Replacing the technology is the easy part of modernizing a government application. The hard part is everything the old system does that nobody wrote down, and changing it while people are still using it.',
  related: [
    { to: '/writing/when-technical-debt-becomes-a-business-problem/', label: 'When technical debt becomes a business problem' },
    { to: '/writing/building-public-sector-applications/', label: 'What building public-sector applications taught me' },
    { to: '/writing/should-it-be-a-microservice/#extract-later', label: 'Why extracting a service later is often cheaper than splitting early' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/forward-engineering-isnt-new/', label: 'Forward engineering isn’t new' },
    { to: '/writing/building-document-intelligence-workflows/', label: 'Building document intelligence workflows' },
    { to: '/expertise/#gov', label: 'Government technology and public-sector compliance' },
  ],
  keywords: [
    'modernizing public-sector applications',
    'legacy application modernization',
    'government software modernization',
    'strangler fig pattern government',
    'incremental modernization',
    'public-sector application security and compliance',
    'Section 508 modernization',
    'technical debt legacy systems',
    'engineering leadership government technology',
  ],
  about: [
    { '@type': 'Thing', name: 'Legacy modernization', sameAs: 'https://en.wikipedia.org/wiki/Legacy_modernization' },
    { '@type': 'Thing', name: 'Government software engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Strangler fig pattern', sameAs: 'https://en.wikipedia.org/wiki/Strangler_fig_pattern' },
    { '@type': 'Thing', name: 'Section 508 Amendment to the Rehabilitation Act of 1973', sameAs: 'https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973' },
    { '@type': 'Thing', name: 'FedRAMP', sameAs: 'https://en.wikipedia.org/wiki/FedRAMP' },
    { '@type': 'Thing', name: 'Technical debt', sameAs: 'https://en.wikipedia.org/wiki/Technical_debt' },
  ],
  faq: [
    {
      q: 'Why is modernizing a government application harder than rewriting it?',
      a: 'Because the existing system holds business rules, data, integrations, security controls and accessibility that people and the agency depend on, and many of those rules are recorded only in the code and the data. The service also has to keep running during the replacement, so the work has to happen in small steps that can be verified, approved and rolled back.',
    },
    {
      q: 'Is a big-bang rewrite or incremental modernization better for public-sector systems?',
      a: 'Incremental replacement is usually safer for a service the public relies on. Moving one user journey at a time behind a routing layer keeps each change small enough to test, approve and reverse, and delivers benefits sooner. It costs more in the middle, because the old and new systems must keep data consistent while both run.',
    },
  ],
};
