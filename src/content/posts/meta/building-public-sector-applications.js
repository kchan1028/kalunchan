export const metadata = {
  seoTitle: 'Building Public-Sector Applications: FedRAMP, ATO, 508 — Ka Lun Chan',
  dek:
    'From startup development to supporting public-sector systems: what I learned about FedRAMP, Authority to Operate, Section 508, Plain Writing, security and building software that must meet government requirements, and why the discipline makes commercial software better too.',
  related: [
    { to: '/writing/modernizing-public-sector-applications/', label: 'Modernizing public-sector applications is more than rewriting code' },
    { to: '/writing/network-security-before-devsecops/', label: 'Where my security habits come from: network security before DevSecOps' },
    { to: '/writing/api-architecture-lessons/#security', label: 'Authorization is enforced on the server, on the record' },
    { to: '/projects/fedpath/', label: 'FedPath: finding and evaluating federal contracts' },
    { to: '/expertise/#gov', label: 'Government technology and public-sector compliance' },
    { to: '/writing/when-to-add-engineering-process/', label: 'When process helps an engineering team, and when it doesn’t' },
  ],
  keywords: [
    'building public-sector applications',
    'government API integration',
    'object-level authorization public-sector systems',
    'audit logging government applications',
    'FedRAMP for engineers',
    'Authority to Operate engineering',
    'Section 508 accessibility web applications',
    'Plain Writing Act software',
    'NIST SP 800-53 controls engineering team',
    'continuous monitoring public-sector systems',
    'government software engineering lessons',
    'public-sector certification systems engineering',
    'regulated environment engineering leadership',
  ],
  about: [
    { '@type': 'Thing', name: 'FedRAMP', sameAs: 'https://en.wikipedia.org/wiki/FedRAMP' },
    { '@type': 'Thing', name: 'Section 508 Amendment to the Rehabilitation Act of 1973', sameAs: 'https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973' },
    { '@type': 'Thing', name: 'Government software engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Federal Information Security Management Act of 2002', sameAs: 'https://en.wikipedia.org/wiki/Federal_Information_Security_Management_Act_of_2002' },
    { '@type': 'Thing', name: 'NIST Special Publication 800-53', sameAs: 'https://en.wikipedia.org/wiki/NIST_Special_Publication_800-53' },
    { '@type': 'Thing', name: 'Risk Management Framework', sameAs: 'https://en.wikipedia.org/wiki/Risk_Management_Framework' },
    { '@type': 'Thing', name: 'Plain Writing Act of 2010', sameAs: 'https://en.wikipedia.org/wiki/Plain_Writing_Act_of_2010' },
    { '@type': 'Thing', name: 'Web Content Accessibility Guidelines', sameAs: 'https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines' },
  ],
  faq: [
    {
      q: 'What is the difference between FedRAMP and an Authority to Operate?',
      a: 'FedRAMP is the standardized program for assessing and authorizing cloud services that federal agencies use, and its authorization covers a cloud service within a defined boundary. An Authority to Operate is the formal decision by an agency’s Authorizing Official that a specific system’s risk is understood and accepted. An application on a FedRAMP-authorized platform still needs its own controls, evidence and authorization.',
    },
    {
      q: 'What does an engineering team contribute to an Authority to Operate?',
      a: 'Implemented controls and the evidence that they work: system security plans, control assessments, risk assessments, plans of action (POA&Ms) for open findings, configuration and vulnerability management, continuous monitoring, incident response procedures and contingency plans. The Authorizing Official makes the decision; engineering makes it possible.',
    },
    {
      q: 'Why is Section 508 an engineering responsibility rather than a design one?',
      a: 'Because a feature can pass every functional test and still be unusable with a screen reader or a keyboard. Labelled fields, understandable validation errors, sufficient contrast, keyboard-operable controls and correct focus management are implemented in code, tested by people as well as tools, and belong in the acceptance criteria.',
    },
    {
      q: 'How should a public-sector application handle external government system integrations?',
      a: 'Assume the other system will change or fail without warning. Validate responses before trusting them, treat missing data as missing rather than as a default value, alert on authentication failures, time out and retry safely, record what the external system returned, and tell users plainly when a dependency is unavailable. Contract tests against recorded responses catch changes in the data’s shape.',
    },
    {
      q: 'Do government engineering disciplines apply to commercial software?',
      a: 'Yes, at the right level of rigor. A startup does not need an authorization process, and it still benefits from server-side access control, accessible interfaces, clear user communication, traceable changes and reliable deployment. Security has to be demonstrable, accessibility designed in, and risk evaluated continuously, wherever people depend on the system.',
    },
  ],
};
