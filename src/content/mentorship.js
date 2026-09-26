// Mentorship philosophy supplied by KC. Community facts follow docs/COMMUNITY-CONTENT.md: no dates, totals or invented roles.

// `mine`: how much of the decision still sits with me at each step (drawn, never printed).
export const ladder = [
  { step: 'Ask me', quote: 'How should I solve this?', mine: 92, note: 'We clarify the problem and its business context. I give enough structure to get started, and explain why, not just what.' },
  { step: 'Show me', quote: 'Here’s what I’m thinking.', mine: 74, note: 'You bring the investigation: what you tried and what is still unclear. We work through the reasoning together.' },
  { step: 'Recommend', quote: 'Here’s what I think we should do.', mine: 52, note: 'You lay out the options, the tradeoffs and your call. My view is on the table too, and open to challenge.' },
  { step: 'Decide', quote: 'Here’s the decision I made and why.', mine: 28, note: 'You own the call, communicate it and follow through. If it goes wrong, we recover together without taking ownership away.' },
  { step: 'Lead', quote: 'I’ll take ownership of this.', mine: 12, note: 'You set direction for the work and the people around it. I become a sounding board, not a checkpoint.' },
  { step: 'Teach', quote: 'Now I’ll help someone else learn it.', mine: 0, note: 'You pass on the context and the judgment. The ladder starts again with someone new, and it no longer runs through me.' },
];

export const transfers = ['Knowledge', 'Context', 'Judgment', 'Ownership', 'Leadership'];

export const decisionShift = [
  { who: 'I', rest: 'make the decision.' },
  { who: 'We', rest: 'discuss the decision.' },
  { who: 'You', rest: 'make the decision.' },
  { who: 'You', rest: 'teach someone else how to make it.' },
];

export const spof = [
  { layer: 'Software', one: 'One service knows everything', result: 'Fragile architecture' },
  { layer: 'Team', one: 'One engineer knows everything', result: 'Fragile team' },
  { layer: 'Leadership', one: 'One leader makes every decision', result: 'Fragile organization' },
];

export const resilience = ['Documentation', 'Knowledge sharing', 'Delegation', 'Mentorship', 'Decision ownership'];

export const directions = ['Engineer', 'Engineer', 'Tech lead', 'Manager'];

export const career = ['Engineer', 'Builder', 'Founder', 'CTO & engineering leader', 'Mentor'];

export const impact = [
  { when: 'Early career', is: 'what I could build.' },
  { when: 'Later', is: 'what the team could build.' },
  { when: 'Leadership', is: 'what people can accomplish without depending on me.' },
];

export const riderQualities = ['Confidence', 'Discipline', 'Independence', 'Teamwork', 'Race experience', 'Resilience', 'Leadership', 'Love for the sport'];

export const riderPattern = ['Guidance', 'Experience', 'Confidence', 'Independence', 'Helping the next person'];

export const omniumPeople = ['Racers', 'Juniors', 'Collegiate riders', 'Volunteers', 'Clubs', 'Sponsors', 'Community'];

export const twoWorlds = [
  ['Teach', 'Teach'],
  ['Give context', 'Create opportunity'],
  ['Delegate', 'Build confidence'],
  ['Trust', 'Let them race'],
  ['Engineer becomes leader', 'Junior becomes experienced rider'],
  ['They mentor someone else', 'They help the next generation'],
];

export const flywheel = ['Learn', 'Practice', 'Own', 'Lead', 'Teach'];

export const gives = [
  { title: 'Context, not just answers.', body: 'The why behind the problem, so the next one like it doesn’t need me.' },
  { title: 'Room to make decisions.', body: 'Real calls with real consequences, sized to where someone is now.' },
  { title: 'Permission to challenge me.', body: 'If my reasoning is wrong, I want to hear it before we ship it, not after.' },
  { title: 'Support when things go wrong.', body: 'We learn and recover together. I don’t take the work back.' },
  { title: 'Increasing ownership.', body: 'More scope as judgment grows, handed over on purpose rather than by accident.' },
  { title: 'Opportunities to teach others.', body: 'Teaching is where understanding gets tested, and where the team starts to scale.' },
];

export const isNot = [
  'Micromanagement.',
  'Creating copies of yourself.',
  'Always having the answer.',
  'Taking the keyboard when someone struggles.',
  'Keeping yourself at the center of every decision.',
];
