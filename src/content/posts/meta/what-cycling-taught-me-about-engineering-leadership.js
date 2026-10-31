import { cycling } from '../../community';

export const metadata = {
  seoTitle: 'Engineering Leadership Lessons from Cycling — Ka Lun Chan',
  dek:
    'Cycling comes down to judgment about effort: when to push, when to recover, when to support someone else, and when to change the plan. Leading engineering teams involves the same decisions.',
  related: [
    { to: '/mentorship/', label: 'Mentoring engineers and junior riders' },
    { to: '/writing/berkeley-omnium-new-website-next-generation/', label: 'Berkeley Omnium: a new website and the next generation of racers' },
    { to: '/writing/when-everything-is-a-priority/', label: 'Leading engineering through constant change' },
    { to: '/writing/first-bike-races-novice-race-reports/', label: 'Race reports from my first three bike races' },
    { to: '/writing/fitness-journey-training-smarter/', label: 'Strength, Spartan and cycling: getting better means training smarter' },
    { to: '/writing/why-i-enjoy-mentoring/', label: 'Why I enjoy mentoring engineers and junior riders' },
  ],
  keywords: [
    'engineering leadership lessons',
    'leadership lessons from cycling',
    'sustainable pace for engineering teams',
    'mentoring engineers',
    'mentoring junior cyclists',
    'leading without authority',
    'teamwork in cycling',
    'Berkeley Omnium',
  ],
  // Defined on /community/; referenced here so the post joins the same entity graph.
  mentions: [{ '@id': cycling.omnium + '#subject' }, { '@id': cycling.club + '#club' }],
  faq: [
    {
      q: 'What can engineering leaders learn from cycling?',
      a: 'Mostly judgment about effort: when to push and when to recover, how predictable behavior lets a group of strong individuals work together, when to take the hardest work yourself and when to hand it to someone else, and how preparation creates options when conditions change.',
    },
    {
      q: 'What does sustainable pace mean for an engineering team?',
      a: 'Planning for the capacity a team can hold over time, including maintenance, learning, unplanned work and recovery, instead of running every sprint as a deadline push. A team at a sustainable pace still has reserve when real urgency arrives.',
    },
    {
      q: 'How do you lead people who don’t report to you?',
      a: 'With a shared goal and follow-through. Make the goal and each person’s part in it explicit, and keep small commitments so people trust the big ones. Ka Lun Chan applies the same approach to cross-team engineering work and to helping organize the Berkeley Omnium with volunteers and partners.',
    },
    {
      q: 'How is engineering leadership different from leading a cycling team?',
      a: 'Engineering effort is less predictable and progress is less visible. A small-looking task can hide a week of complexity, important work like reducing risk often can’t be seen, and an overloaded engineer can struggle for weeks before it shows, so leaders have to check in and watch signals directly.',
    },
  ],
};
