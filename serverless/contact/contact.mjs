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

// Optional fields on the leadership form (/contact/#leadership). The message is optional there too.
export const CONTACT_SOURCES = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'referral', label: 'A referral' },
  { value: 'recruiter', label: 'A recruiter' },
  { value: 'search', label: 'Search' },
  { value: 'other', label: 'Other' },
];

export const CONTACT_LIMITS = { name: 100, email: 254, company: 150, role: 150, location: 150, message: 5000 };

const TOPIC_VALUES = new Set(CONTACT_TOPICS.map((topic) => topic.value));
const SOURCE_VALUES = new Set(CONTACT_SOURCES.map((source) => source.value));
const sourceLabel = (value) => CONTACT_SOURCES.find((source) => source.value === value)?.label;
export const topicLabel = (value) => CONTACT_TOPICS.find((topic) => topic.value === value)?.label ?? 'Something else';

export function validateContact(input = {}) {
  const values = {
    name: cleanText(input.name),
    email: cleanText(input.email),
    company: cleanText(input.company),
    role: cleanText(input.role),
    location: cleanText(input.location),
    source: cleanText(input.source),
    topic: cleanText(input.topic),
    message: cleanText(input.message, { multiline: true }),
  };
  const errors = {};
  requireText(values, errors, 'name', 'your name', CONTACT_LIMITS.name);
  if (!values.email) errors.email = 'Enter your email address.';
  else if (!isValidEmail(values.email, CONTACT_LIMITS.email)) errors.email = 'Enter an email address like name@example.com.';
  if (values.company.length > CONTACT_LIMITS.company) errors.company = `Keep the company under ${CONTACT_LIMITS.company} characters.`;
  for (const field of ['role', 'location']) {
    if (values[field].length > CONTACT_LIMITS[field]) errors[field] = `Keep this under ${CONTACT_LIMITS[field]} characters.`;
  }
  if (values.source && !SOURCE_VALUES.has(values.source)) errors.source = 'Choose one of the options.';
  if (!TOPIC_VALUES.has(values.topic)) errors.topic = 'Choose what you’d like to talk about.';
  // A leadership enquiry can be just a name and an email; every other topic needs a message.
  if (values.message || values.topic !== 'leadership') requireText(values, errors, 'message', 'a message', CONTACT_LIMITS.message);
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
      ...(values.role ? ['Role:', values.role, ''] : []),
      ...(values.location ? ['Location expectation:', values.location, ''] : []),
      ...(values.source ? ['Found me through:', sourceLabel(values.source), ''] : []),
      'Message:', values.message || '(none)', '',
      'Submitted from:', page,
      '',
      '---',
      'Reply to this email to answer the sender directly.',
    ].join('\n'),
  };
}
