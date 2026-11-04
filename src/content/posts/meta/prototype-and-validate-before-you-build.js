export const metadata = {
  seoTitle: 'Prototype Before You Build: A UX Validation Workflow',
  dek:
    'An eight-stage workflow that tests the design with real users before production code, then verifies the working software in UAT. What each stage produces, who approves it, when it’s done, and how to scale it down for small changes.',
  related: [
    { to: '/writing/why-i-test-my-products-like-someone-who-has-never-used-them/', label: 'Why I test my products like someone who has never used them' },
    { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'UX and UI design before and after AI' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/why-writing-good-user-stories-is-hard/', label: 'Why good user stories are hard' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller stories, smaller pull requests, smaller releases' },
    { to: '/leadership/#risk', label: 'How I reduce delivery risk early' },
  ],
  keywords: [
    'prototype before development',
    'UX validation workflow',
    'prototype validation vs UAT',
    'user acceptance testing',
    'usability testing a prototype',
    'clickable prototype',
    'reduce rework in software development',
    'technical spike',
  ],
  about: [
    { '@type': 'Thing', name: 'Software prototyping', sameAs: 'https://en.wikipedia.org/wiki/Software_prototyping' },
    { '@type': 'Thing', name: 'Usability testing', sameAs: 'https://en.wikipedia.org/wiki/Usability_testing' },
    { '@type': 'Thing', name: 'Acceptance testing', sameAs: 'https://en.wikipedia.org/wiki/Acceptance_testing' },
  ],
  sources: [
    { label: 'Nielsen Norman Group: Why You Only Need to Test with 5 Users', url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/' },
  ],
  faq: [
    {
      q: 'What is the difference between prototype validation and UAT?',
      a: 'Prototype validation tests whether people understand a design and can complete their tasks, before production code exists. User acceptance testing (UAT) tests whether the working software meets the business requirements end to end, with real integrations, permissions and data, usually in a staging environment.',
    },
    {
      q: 'Can a prototype replace user acceptance testing?',
      a: 'No. A prototype can verify navigation, wording, missing steps and whether business rules were understood. Performance, integrations, real data, security and server-side permissions only show up in working software, so they still need UAT.',
    },
    {
      q: 'How many users do you need to test a prototype?',
      a: 'For a qualitative usability test, Nielsen Norman Group’s guidance is that about five users from one group find most of the problems, and that several small rounds teach you more than one large study. Test each main user group separately.',
    },
    {
      q: 'When should you build a technical spike before the design is final?',
      a: 'When feasibility could change the design. If an API, a data source, a device capability or performance at real data volumes might force a different workflow, answer that question with a time-boxed spike before users test the flow.',
    },
    {
      q: 'Does every change need a prototype?',
      a: 'No. Copy fixes and obvious bug fixes can go straight to development and review. A new flow in an existing product needs a quick prototype and a few users, while a new product or a workflow people depend on deserves the full workflow with scope sign-off and UAT.',
    },
  ],
};
