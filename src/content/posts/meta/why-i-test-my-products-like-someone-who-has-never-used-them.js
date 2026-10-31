export const metadata = {
  seoTitle: 'Why I Test My Products Like Someone Who Has Never Used Them',
  dek:
    'Something can make complete sense to the person who built it and still confuse the person using it. I test as specific people with less context than me to find out where.',
  related: [
    { to: '/writing/why-writing-good-user-stories-is-hard/', label: 'Why writing good user stories is so hard' },
    { to: '/writing/ux-ui-design-before-and-after-ai/', label: 'I used to design every screen myself' },
    { to: '/writing/what-engineering-leadership-actually-does/#simpler', label: 'Pushing for the simpler version' },
    { to: '/writing/engineering-work-nobody-needed/', label: 'The most expensive engineering work is work nobody needed' },
    { to: '/projects/fedpath/', label: 'FedPath: from SAM.gov notice to bid decision' },
    { to: '/projects/berkeley-omnium/', label: 'Berkeley Omnium: a site with a path for every audience' },
  ],
  keywords: [
    'software usability testing',
    'user experience testing',
    'testing software from a user’s perspective',
    'UX testing for developers',
    'beginner-friendly software design',
    'curse of knowledge in software',
    'product development lessons',
    'engineering leadership',
  ],
  about: [
    { '@type': 'Thing', name: 'Usability testing', sameAs: 'https://en.wikipedia.org/wiki/Usability_testing' },
    { '@type': 'Thing', name: 'User experience', sameAs: 'https://en.wikipedia.org/wiki/User_experience' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Persona (user experience)', sameAs: 'https://en.wikipedia.org/wiki/Persona_(user_experience)' },
    { '@type': 'Thing', name: 'Curse of knowledge', sameAs: 'https://en.wikipedia.org/wiki/Curse_of_knowledge' },
    { '@type': 'SoftwareApplication', name: 'FedPath', url: 'https://gofedpath.com/' },
  ],
  faq: [
    {
      q: 'What is the hardest part of testing your own product?',
      a: 'Forgetting what you already know about it. The people who build a product understand its terminology, navigation and business rules, so they can’t easily see where a newcomer will get stuck. Walking through it as someone with less context exposes those assumptions.',
    },
    {
      q: 'How do you test software from a user’s perspective?',
      a: 'Pick a specific person, such as a first-time visitor, someone new to the industry, a younger user or an experienced user in a hurry, and stay in character for the whole walkthrough. For each one, ask whether they can tell what the product does, where to start and what to do next without anyone explaining it.',
    },
    {
      q: 'Can a feature work correctly and still have poor usability?',
      a: 'Yes. A feature can pass its automated tests, meet its acceptance criteria and work exactly as designed while people still struggle to use it. Those checks confirm the team built what it agreed to build. They don’t show whether someone who wasn’t part of those conversations can figure it out.',
    },
    {
      q: 'Do imagined personas replace usability testing with real users?',
      a: 'No. Walking through a product as an imagined beginner is still a guess, and real users find problems no walkthrough predicts. The walkthroughs catch the obvious problems early and cheaply, so testing with real people can focus on what nobody on the team could anticipate.',
    },
  ],
};
