// Shared by the contact page and the contact Lambda: text cleaning, email checks, spam signals.
// Pure functions only, so the browser and the server run the same rules.

// Real people take longer than this to fill in a form; faster submissions are treated as automated.
export const MIN_FILL_MS = 3000;
export const MAX_BODY_BYTES = 20_000;

const EMAIL_PATTERN = /^[^\s@<>()[\]\\,;:"]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const SUBMISSION_ID_PATTERN = /^[A-Za-z0-9-]{8,64}$/;

// Single-line fields lose every control character, including CR and LF, so nothing can inject email headers.
// Multi-line text keeps line breaks and tabs but drops other control characters.
export function cleanText(value, { multiline = false } = {}) {
  if (typeof value !== 'string') return '';
  let text = value.normalize('NFC').replace(/\r\n?/g, '\n').replace(/[\u2028\u2029]/g, '\n');
  if (multiline) {
    text = text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').replace(/\n{4,}/g, '\n\n\n');
    return text.trim();
  }
  return text.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function isValidEmail(email, maxLength = 254) {
  return typeof email === 'string' && email.length <= maxLength && EMAIL_PATTERN.test(email);
}

// Honeypot filled, or the form was sent faster than a person could fill it in.
export function spamReason(input = {}, now = Date.now()) {
  if (typeof input.website === 'string' && input.website.trim()) return 'honeypot';
  const startedAt = Number(input.startedAt);
  if (Number.isFinite(startedAt) && startedAt > 0 && now - startedAt < MIN_FILL_MS) return 'too_fast';
  return null;
}

export function cleanSubmissionId(value) {
  return typeof value === 'string' && SUBMISSION_ID_PATTERN.test(value) ? value : null;
}

export function requireText(values, errors, field, label, max) {
  if (!values[field]) errors[field] = `Enter ${label}.`;
  else if (values[field].length > max) errors[field] = `Keep ${label} under ${max.toLocaleString('en-US')} characters.`;
}
