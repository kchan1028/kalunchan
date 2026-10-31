export const metadata = {
  seoTitle: 'What Does Engineering Leadership Actually Do All Day?',
  dek:
    'Earlier in my career I measured a day by what I built. Leading engineering teams changed that. Much of my work now is deciding what is worth building, keeping it simple enough to ship, and making sure the team doesn’t need me for every answer.',
  related: [
    { to: '/writing/hidden-cost-of-too-many-meetings/', label: 'The hidden cost of too many meetings' },
    { to: '/writing/why-i-still-write-code/', label: 'Why I still write code as an engineering leader' },
    { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/writing/the-architecture-you-dont-build/', label: 'The architecture you don’t build' },
    { to: '/leadership/', label: 'How I run engineering' },
    { to: '/mentorship/', label: 'How I mentor engineers until they can replace me' },
  ],
  keywords: [
    'what does an engineering leader do',
    'engineering leadership',
    'engineering manager responsibilities',
    'from engineer to engineering leader',
    'technical founder to CTO',
    'UX complexity and engineering',
    'simplifying product design',
    'engineering tradeoffs',
    'avoiding being a bottleneck as a leader',
    'communicating technical risk to the business',
  ],
  about: [
    { '@type': 'Thing', name: 'Engineering management', sameAs: 'https://en.wikipedia.org/wiki/Engineering_management' },
    { '@type': 'Thing', name: 'Leadership', sameAs: 'https://en.wikipedia.org/wiki/Leadership' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'User experience design', sameAs: 'https://en.wikipedia.org/wiki/User_experience_design' },
    { '@type': 'Thing', name: 'Usability', sameAs: 'https://en.wikipedia.org/wiki/Usability' },
    { '@type': 'Thing', name: 'Software quality assurance', sameAs: 'https://en.wikipedia.org/wiki/Software_quality_assurance' },
    { '@type': 'Thing', name: 'Acceptance testing', sameAs: 'https://en.wikipedia.org/wiki/Acceptance_testing' },
    { '@type': 'Thing', name: 'Mentorship', sameAs: 'https://en.wikipedia.org/wiki/Mentorship' },
  ],
  faq: [
    {
      q: 'What does an engineering leader actually do all day?',
      a: 'In my experience, most of the day goes to decisions and the people making them: deciding what to build and what not to, weighing delivery against reliability, security and cost, clearing obstacles, developing engineers, and explaining technical risk in terms the business can act on. Writing code becomes a smaller share of the job.',
    },
    {
      q: 'Why should engineering leaders push back on UX complexity?',
      a: 'Unnecessary complexity costs everyone at once. Users have more to learn, developers have more screens, states and conditions to build and maintain, QA has more scenarios to test, and the business waits longer for feedback and carries more release risk. The aim is to remove complexity the user’s problem doesn’t need while keeping essential functionality, accessibility, security and usability.',
    },
    {
      q: 'What is the difference between implementing a solution and being accountable for the outcome?',
      a: 'Implementing a solution means building what was specified. Being accountable for the outcome means asking whether what was specified is worth building in that form, given the users, the team, the testing effort and the release commitment. Sometimes the most useful leadership decision is to question a design before the team spends weeks building it.',
    },
    {
      q: 'How do engineering leaders avoid becoming a bottleneck?',
      a: 'Fix the cause of a blocker as well as the instance: name an owner, write the decision down, and give the team the context to settle the next one without you. Delegate decisions that matter, accept that people will solve problems differently, and keep for yourself only the decisions that really need your level.',
    },
  ],
};
