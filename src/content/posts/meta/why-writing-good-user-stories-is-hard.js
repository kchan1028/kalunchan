export const metadata = {
  seoTitle: 'Why Writing Good User Stories Is So Hard',
  dek:
    'The format fits on one line. The hard part is that product, design, engineering and QA each bring different knowledge to the same feature, and a story has to work for all of them.',
  related: [
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/good-teams-dont-expect-everyone-to-know-everything/', label: 'Good teams don’t expect everyone to know everything' },
    { to: '/writing/what-engineering-leadership-actually-does/', label: 'What engineering leadership actually does all day' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/why-i-test-my-products-like-someone-who-has-never-used-them/', label: 'When the story is built as written and still confuses users' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review doesn’t start with a pull request' },
    { to: '/writing/when-to-add-engineering-process/', label: 'When process helps' },
  ],
  keywords: [
    'how to write good user stories',
    'why user stories are hard',
    'user stories',
    'acceptance criteria',
    'user story mapping',
    'user story vs technical task',
    'unclear requirements',
    'cross-functional collaboration',
    'product management and engineering',
    'engineering leadership',
  ],
  about: [
    { '@type': 'Thing', name: 'User story', sameAs: 'https://en.wikipedia.org/wiki/User_story' },
    { '@type': 'Thing', name: 'Requirements engineering', sameAs: 'https://en.wikipedia.org/wiki/Requirements_engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Acceptance testing', sameAs: 'https://en.wikipedia.org/wiki/Acceptance_testing' },
    { '@type': 'Thing', name: 'Agile software development', sameAs: 'https://en.wikipedia.org/wiki/Agile_software_development' },
    { '@type': 'Thing', name: 'Software quality assurance', sameAs: 'https://en.wikipedia.org/wiki/Software_quality_assurance' },
  ],
  faq: [
    {
      q: 'Why is writing a good user story so hard?',
      a: 'Because product managers, designers, developers and QA each approach a feature with different knowledge and assumptions, and a story has to give all of them the same understanding. A story written from only one of those perspectives leaves everyone else guessing.',
    },
    {
      q: 'What is the difference between a user story and a technical task?',
      a: 'A user story describes something a user can accomplish and why it matters. A technical task, such as a database migration, an API endpoint or a UI component, is work needed to deliver that outcome. One story often needs several tasks, and splitting a story into tasks doesn’t make it a set of smaller stories.',
    },
    {
      q: 'What should acceptance criteria include?',
      a: 'The expected behavior and the important business rules: what the user can and can’t do, required validation, what success looks like, what happens when something fails, and who has permission. They should help the developer build it, the product manager confirm it and QA test it, without prescribing the implementation.',
    },
    {
      q: 'Who should own a user story?',
      a: 'Usually the product manager or product owner, who owns the business outcome and the priority. Ownership means bringing the right perspectives together and making sure open questions have owners, with engineering, design and QA contributing constraints, interactions and missing scenarios.',
    },
  ],
};
