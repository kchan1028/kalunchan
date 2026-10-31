export const metadata = {
  seoTitle: 'Smaller User Stories and Pull Requests Make Better Teams — Ka Lun Chan',
  dek:
    'A story that was too big on day one makes a pull request nobody can review and a release nobody can roll back. Smaller stories, PRs and rollouts fix different problems, and a team needs all three.',
  related: [
    { to: '/writing/why-writing-good-user-stories-is-hard/', label: 'Why is writing a good user story so hard?' },
    { to: '/writing/good-teams-dont-expect-everyone-to-know-everything/', label: 'Why good teams don’t expect everyone to know everything' },
    { to: '/writing/what-sprint-carryover-is-telling-you/', label: 'What sprint carryover is actually telling you' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/leadership/#execution', label: 'How I improve execution with small, safe changes' },
    { to: '/writing/forward-engineering-isnt-new/', label: 'Agile as forward engineering in small slices' },
  ],
  keywords: [
    'smaller pull requests',
    'user story splitting',
    'how to split user stories',
    'small pull requests code review',
    'incremental delivery',
    'feature flags gradual rollout',
    'agile development',
    'engineering leadership',
    'software delivery',
  ],
  about: [
    { '@type': 'Thing', name: 'Agile software development', sameAs: 'https://en.wikipedia.org/wiki/Agile_software_development' },
    { '@type': 'Thing', name: 'Engineering leadership' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'User story', sameAs: 'https://en.wikipedia.org/wiki/User_story' },
    { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
    { '@type': 'Thing', name: 'Feature toggle', sameAs: 'https://en.wikipedia.org/wiki/Feature_toggle' },
  ],
  faq: [
    {
      q: 'Why are smaller user stories better?',
      a: 'Each piece can be understood, estimated and tested on its own. Acceptance criteria fit on a card, dependencies show up in planning rather than mid-sprint, and when priorities change the team reprioritizes the remaining pieces instead of abandoning a half-built feature.',
    },
    {
      q: 'Why are smaller pull requests better for code quality?',
      a: 'A reviewer can read a few hundred lines carefully and notice a missing authorization check or a query inside a loop. A few thousand lines get approved on trust. Small PRs also mean fewer merge conflicts, changes that are easy to find and revert when production breaks, and code other engineers can learn from.',
    },
    {
      q: 'Does one user story need one pull request?',
      a: 'No. Stories solve a planning problem and PRs solve a review problem, so one story often ships as several PRs. The aim is less complexity per step, not a particular ratio of tickets to PRs.',
    },
    {
      q: 'Why roll out features in smaller pieces?',
      a: 'A feature released to everyone at once has the largest blast radius and the vaguest failure signal. Releasing behind a flag or to a slice of users first lets the team learn from real traffic while exposure is small, and turn one thing off without rolling everything back.',
    },
  ],
};
