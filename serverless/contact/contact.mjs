import { cleanText, isValidEmail, requireText } from './common.mjs';

export const CONTACT_TOPICS = [
  { value: 'leadership', label: 'An engineering leadership role' },
  { value: 'project', label: 'A project or engagement' },
  { value: 'advice', label: 'Architecture or technical advice' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'speaking', label: 'Speaking, a panel or a podcast' },
  { value: 'community', label: 'Cycling or Berkeley Omnium' },
  { value: 'other', label: 'Something else' },
];

export const CONTACT_LIMITS = { name: 100, email: 254, company: 150, message: 5000 };

const TOPIC_VALUES = new Set(CONTACT_TOPICS.map((topic) => topic.value));
export const topicLabel = (value) => CONTACT_TOPICS.find((topic) => topic.value === value)?.label ?? 'Something else';

export function validateContact(input = {}) {
  const values = {
    name: cleanText(input.name),
    email: cleanText(input.email),
    company: cleanText(input.company),
    topic: cleanText(input.topic),
    message: cleanText(input.message, { multiline: true }),
  };
  const errors = {};
  requireText(values, errors, 'name', 'your name', CONTACT_LIMITS.name);
  if (!values.email) errors.email = 'Enter your email address.';
  else if (!isValidEmail(values.email, CONTACT_LIMITS.email)) errors.email = 'Enter an email address like name@example.com.';
  if (values.company.length > CONTACT_LIMITS.company) errors.company = `Keep the company under ${CONTACT_LIMITS.company} characters.`;
  if (!TOPIC_VALUES.has(values.topic)) errors.topic = 'Choose what you’d like to talk about.';
  requireText(values, errors, 'message', 'a message', CONTACT_LIMITS.message);
  return { values, errors };
}

export function contactEmail(values, { siteUrl }) {
  const page = `${siteUrl.replace(/^https?:\/\//, '')}/contact/`;
  return {
    subject: `[kalunchan.dev] ${topicLabel(values.topic)}: ${values.name}${values.company ? `, ${values.company}` : ''}`.slice(0, 250),
    text: [
      'New message from kalunchan.dev',
      '',
      'From:', values.name, '',
      'Email:', values.email, '',
      'Company:', values.company || '(none)', '',
      'Topic:', topicLabel(values.topic), '',
      'Message:', values.message, '',
      'Submitted from:', page,
      '',
      '---',
      'Reply to this email to answer the sender directly.',
    ].join('\n'),
  };
}
