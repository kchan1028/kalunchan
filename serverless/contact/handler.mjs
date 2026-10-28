// kalunchan.dev contact endpoint (AWS Lambda, Node.js 22): POST /contact from the /contact/ page.
// The same pipeline as the Berkeley Bike Club forms endpoint, for one form.
// Mail goes out through Amazon SES using the function's IAM role, so no credentials live in code or in the browser.
// Where mail is delivered comes only from this function's environment; the browser cannot choose a recipient.
import { createHash } from 'node:crypto';
import { cleanSubmissionId, isValidEmail, MAX_BODY_BYTES, spamReason } from './common.mjs';
import { contactEmail, validateContact } from './contact.mjs';
import { dynamoStore, memoryStore } from './store.mjs';
import { failTransport, logTransport, sesTransport } from './transport.mjs';

const FORM = 'contact';
// Without JavaScript the browser posts the form directly; these anchors show a notice on the contact page.
export const SUCCESS_PATH = '/contact/#message-sent';
export const FAILURE_PATH = '/contact/#message-not-sent';
// The leadership form (form=leadership) has its own notices, so a no-JavaScript post lands back on that form.
export const LEADERSHIP_SUCCESS_PATH = '/contact/#leadership-sent';
export const LEADERSHIP_FAILURE_PATH = '/contact/#leadership-not-sent';

const list = (value) => (value ?? '').split(',').map((item) => item.trim()).filter(Boolean);
const lowerKeys = (headers = {}) => Object.fromEntries(Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]));
const log = (outcome, detail) => console.log(JSON.stringify({ form: FORM, outcome, ...(detail ? { detail } : {}) }));

export function createHandler({ send, store, env = process.env, now = () => Date.now() } = {}) {
  return async (event) => {
    const method = event.requestContext?.http?.method ?? event.httpMethod ?? 'GET';
    const path = (event.rawPath ?? event.path ?? '').replace(/\/+$/, '');
    const headers = lowerKeys(event.headers);
    const origin = headers.origin ?? '';
    const originAllowed = list(env.ALLOWED_ORIGINS).includes(origin);
    const cors = originAllowed ? { 'access-control-allow-origin': origin, vary: 'Origin' } : {};
    const json = (statusCode, payload) => ({ statusCode, headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...cors }, body: JSON.stringify(payload) });

    if (method === 'OPTIONS') {
      return { statusCode: originAllowed ? 204 : 403, headers: { ...cors, 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type', 'access-control-max-age': '600' }, body: '' };
    }
    if (!path.endsWith(`/${FORM}`)) return json(404, { ok: false, error: 'not_found' });
    if (method !== 'POST') return json(405, { ok: false, error: 'method_not_allowed' });
    // Browsers always send Origin on POST; anything else is not our page.
    if (!originAllowed) return json(403, { ok: false, error: 'origin_not_allowed' });

    const siteUrl = (env.SITE_URL || 'https://kalunchan.dev').replace(/\/$/, '');
    const isHtmlForm = (headers['content-type'] ?? '').startsWith('application/x-www-form-urlencoded');
    let leadership = false;
    const reply = (statusCode, payload) => (isHtmlForm
      ? { statusCode: 303, headers: { location: `${siteUrl}${leadership ? (payload.ok ? LEADERSHIP_SUCCESS_PATH : LEADERSHIP_FAILURE_PATH) : (payload.ok ? SUCCESS_PATH : FAILURE_PATH)}`, 'cache-control': 'no-store' }, body: '' }
      : json(statusCode, payload));

    const raw = event.isBase64Encoded ? Buffer.from(event.body ?? '', 'base64').toString('utf8') : (event.body ?? '');
    if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) return reply(413, { ok: false, error: 'too_large' });
    let input;
    try {
      input = isHtmlForm ? Object.fromEntries(new URLSearchParams(raw)) : JSON.parse(raw || '{}');
    } catch {
      return reply(400, { ok: false, error: 'bad_request' });
    }
    if (!input || typeof input !== 'object' || Array.isArray(input)) return reply(400, { ok: false, error: 'bad_request' });
    leadership = input.form === 'leadership';

    // Bots get a normal-looking success and nothing is sent.
    const spam = spamReason(input, now());
    if (spam) {
      log('spam', spam);
      return reply(200, { ok: true });
    }

    const { values, errors } = validateContact(input);
    if (Object.keys(errors).length) {
      log('invalid', Object.keys(errors).join(','));
      return reply(422, { ok: false, error: 'validation', errors });
    }

    // Behind CloudFront the connecting address is CloudFront's, so CLIENT_IP_HEADER can name a header the proxy
    // overwrites on every request (cloudfront-viewer-address). Never a header the browser controls.
    const ipHeader = (env.CLIENT_IP_HEADER ?? '').toLowerCase();
    const sourceIp = (ipHeader && headers[ipHeader] ? String(headers[ipHeader]).replace(/:\d+$/, '') : null)
      ?? event.requestContext?.http?.sourceIp ?? 'unknown';

    // Count sends per address (stored as a salted hash, never the raw IP).
    const ipKey = createHash('sha256').update(`${env.IP_HASH_SALT ?? 'kalunchan-contact'}:${sourceIp}`).digest('hex').slice(0, 32);
    const limit = await store.hit(`${FORM}#${ipKey}`, { max: Number(env.RATE_LIMIT_MAX || 5), windowSeconds: Number(env.RATE_LIMIT_WINDOW_SECONDS || 3600) }, now());
    if (!limit.allowed) {
      log('rate_limited');
      return reply(429, { ok: false, error: 'rate_limited' });
    }

    // The page sends a random id per form fill, so a double click or a retry after a lost response sends once.
    const submissionId = cleanSubmissionId(input.submissionId);
    if (submissionId && !(await store.claim(`${FORM}#${submissionId}`, 86_400, now()))) {
      log('duplicate');
      return reply(200, { ok: true, duplicate: true });
    }

    const to = isValidEmail(env.CONTACT_TO ?? '') ? env.CONTACT_TO : null;
    const from = env.FORMS_FROM;
    if (!to || !from) {
      log('not_configured');
      if (submissionId) await store.release(`${FORM}#${submissionId}`);
      return reply(500, { ok: false, error: 'not_configured' });
    }

    try {
      await send({ from, to, replyTo: values.email, ...contactEmail(values, { siteUrl }) });
    } catch (error) {
      log('send_failed', error?.name);
      if (submissionId) await store.release(`${FORM}#${submissionId}`);
      return reply(502, { ok: false, error: 'send_failed' });
    }
    log('sent');
    return reply(200, { ok: true });
  };
}

function transportFromEnv(env) {
  if (env.EMAIL_TRANSPORT === 'log') return logTransport(env.OUTBOX_DIR || '/tmp/outbox');
  if (env.EMAIL_TRANSPORT === 'fail') return failTransport();
  return sesTransport(env.AWS_REGION);
}

export const handler = createHandler({
  send: transportFromEnv(process.env),
  store: process.env.RATE_LIMIT_TABLE ? dynamoStore(process.env.RATE_LIMIT_TABLE, process.env.AWS_REGION) : memoryStore(),
});
