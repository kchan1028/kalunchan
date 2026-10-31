import { cycling } from '../../community';

export const metadata = {
  seoTitle: 'Berkeley Omnium Lessons for Leading Teams — Ka Lun Chan',
  dek:
    'Berkeley Omnium is a team effort. Organizing it with volunteers, clubs, sponsors and partners has reinforced what I believe about leading engineering teams: people need a clear purpose, realistic commitments, ownership and support.',
  related: [
    { to: '/writing/what-cycling-taught-me-about-engineering-leadership/', label: 'What cycling taught me about engineering leadership' },
    { to: '/community/', label: 'Berkeley Omnium: the races and the community behind them' },
    { to: '/writing/when-everything-is-a-priority/', label: 'What constant priority changes cost an engineering team' },
    { to: '/writing/fitness-journey-training-smarter/', label: 'What three sports taught me about discipline and leading' },
  ],
  keywords: [
    'Berkeley Omnium',
    'organizing a bike race',
    'leading volunteer teams',
    'engineering leadership lessons',
    'ownership and accountability in teams',
    'NICA fundraising',
    'community event leadership',
  ],
  mentions: [{ '@id': cycling.omnium + '#subject' }, { '@id': cycling.club + '#club' }],
  faq: [
    {
      q: 'How much has the Berkeley Omnium raised for NICA teams?',
      a: 'Berkeley Omnium events raised $21,000 for NICA teams in 2025 and $28,610 for six NICA teams in 2026. Those results come from the combined work of the organizing committee, volunteers, clubs, sponsors, community partners and racers.',
    },
    {
      q: 'What does organizing a community event teach about engineering leadership?',
      a: 'That people need a clear purpose, realistic commitments, a named owner for each piece of work and support when things slip. A fixed event date also forces honest scope decisions, and individually finished tasks don’t guarantee the whole thing works together.',
    },
    {
      q: 'How do you lead a volunteer team with limited time?',
      a: 'Make clear, bounded requests, size responsibilities to the time people actually have, set realistic deadlines, and protect the standards that matter by reducing scope or sharing roles rather than asking people for more time than they have.',
    },
    {
      q: 'Why don’t completed tasks guarantee a ready release?',
      a: 'Because the risk often sits between tasks. Each piece can be finished and tested on its own while the handoff between two pieces has no owner. Testing the whole path early, and making it easy for people to raise concerns, catches those gaps before launch day.',
    },
  ],
};
