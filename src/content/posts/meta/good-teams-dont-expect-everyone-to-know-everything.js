export const metadata = {
  seoTitle: 'Good Engineering Teams Don’t Expect Everyone to Know Everything — Ka Lun Chan',
  dek:
    'Experience should change what we expect from an engineer. It shouldn’t excuse unclear tickets, oversized pull requests or decisions that live in one person’s head.',
  related: [
    { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is actually telling you' },
    { to: '/writing/specialization-beyond-your-own-code/', label: 'Why frontend and backend engineers need some of each other’s world' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'Why understanding a system beats memorizing it' },
    { to: '/writing/why-hiring-good-engineers-is-so-hard/', label: 'Why hiring is so hard' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Why smaller stories and pull requests make better teams' },
    { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
  ],
  keywords: [
    'engineering team expectations',
    'senior vs junior engineer expectations',
    'smaller pull requests',
    'how to write acceptance criteria',
    'breaking down user stories',
    'code review best practices',
    'distributed engineering teams',
    'engineering leadership',
    'bus factor',
  ],
  about: [
    { '@type': 'Thing', name: 'Engineering leadership' },
    { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
    { '@type': 'Thing', name: 'User story', sameAs: 'https://en.wikipedia.org/wiki/User_story' },
    { '@type': 'Thing', name: 'Acceptance testing', sameAs: 'https://en.wikipedia.org/wiki/Acceptance_testing' },
  ],
  faq: [
    {
      q: 'Should a senior engineer know everything about the codebase?',
      a: 'No. A senior engineer should be more independent at breaking down problems, spotting risks and investigating unfamiliar code, but nobody can know a business rule that was never explained or a decision that was never documented. Experience changes expectations; it doesn’t replace clear requirements.',
    },
    {
      q: 'Why are smaller pull requests better?',
      a: 'They’re easier to understand, review, test, troubleshoot and revert. A reviewer should be able to tell what problem the PR solves, what changed and how we know it works without a long conversation. Smaller means one logical change with less context required, not fewer lines for their own sake.',
    },
    {
      q: 'How small should a user story be?',
      a: 'Small enough that it has one clear outcome and its own acceptance criteria, so progress is visible and blockers show early. Not so small that every ticket depends on five others. A story like “implement the registration workflow” is usually several deliverables: the form, the API, validation, uploads, permissions and status changes.',
    },
    {
      q: 'What should acceptance criteria include?',
      a: 'Enough expected behavior that someone unfamiliar with the implementation can follow it: which cases apply, what the user sees, what gets logged, and what happens on failure or retry. Answering those questions before development starts prevents the developer, QA and the product owner from each assuming something different.',
    },
  ],
};
