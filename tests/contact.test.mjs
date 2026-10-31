// npm run test:contact
import assert from 'node:assert/strict';
import test from 'node:test';
import { createHandler } from '../serverless/contact/handler.mjs';
import { memoryStore } from '../serverless/contact/store.mjs';

const NOW = Date.UTC(2026, 9, 4, 17, 0, 0);
const ORIGIN = 'https://kalunchan.dev';
const baseEnv = {
  ALLOWED_ORIGINS: `${ORIGIN},https://www.kalunchan.dev`,
  SITE_URL: ORIGIN,
  FORMS_FROM: 'kalunchan.dev contact form <contact@forms.example.test>',
  CONTACT_TO: 'inbox@forms.example.test',
};

function setup({ env = {}, send, store = memoryStore() } = {}) {
  const sent = [];
  const handle = createHandler({
    env: { ...baseEnv, ...env },
    now: () => NOW,
    store,
    send: send ?? (async (email) => { sent.push(email); }),
  });
  let ip = 0;
  const post = (path, body, { origin = ORIGIN, contentType = 'application/json', sourceIp } = {}) => handle({
    rawPath: path,
    requestContext: { http: { method: 'POST', sourceIp: sourceIp ?? `203.0.113.${(ip += 1)}` } },
    headers: { ...(origin ? { Origin: origin } : {}), 'Content-Type': contentType },
    body: typeof body === 'string' ? body : JSON.stringify(body),
    isBase64Encoded: false,
  });
  return { sent, handle, post };
}

const json = (response) => JSON.parse(response.body);
let ids = 0;
const contact = (overrides = {}) => ({
  name: 'Alex Rider', email: 'alex@example.com', company: 'Acme', topic: 'leadership', message: 'Do you have time for a call?',
  startedAt: String(NOW - 60_000), submissionId: `test-submission-${(ids += 1)}`, website: '', ...overrides,
});

test('a valid message is emailed to the configured inbox with the visitor as Reply-To', async () => {
  const { sent, post } = setup();
  const response = await post('/contact', contact());
  assert.equal(response.statusCode, 200);
  assert.equal(response.headers['access-control-allow-origin'], ORIGIN);
  assert.deepEqual(json(response), { ok: true });
  assert.equal(sent.length, 1);
  const [email] = sent;
  assert.equal(email.to, 'inbox@forms.example.test');
  assert.equal(email.from, baseEnv.FORMS_FROM, 'the visitor is never the sender');
  assert.equal(email.replyTo, 'alex@example.com');
  assert.equal(email.subject, '[kalunchan.dev] An engineering leadership role: Alex Rider, Acme');
  for (const line of ['From:\nAlex Rider', 'Email:\nalex@example.com', 'Company:\nAcme', 'Topic:\nAn engineering leadership role', 'Message:\nDo you have time for a call?', 'Submitted from:\nkalunchan.dev/contact/']) {
    assert.ok(email.text.includes(line), `email includes ${line.split('\n')[0]}`);
  }
});

test('the browser cannot choose where mail goes', async () => {
  const { sent, post } = setup();
  await post('/contact', contact({ to: 'attacker@example.com', CONTACT_TO: 'attacker@example.com', recipient: 'attacker@example.com' }));
  assert.deepEqual(sent.map((email) => email.to), ['inbox@forms.example.test']);
});

test('invalid email, empty fields, unknown topic and long text are rejected server-side', async () => {
  const { sent, post } = setup();
  const invalidEmail = await post('/contact', contact({ email: 'alex@' }));
  assert.equal(invalidEmail.statusCode, 422);
  assert.ok(json(invalidEmail).errors.email);
  const empty = await post('/contact', { startedAt: String(NOW - 60_000) });
  assert.deepEqual(Object.keys(json(empty).errors).sort(), ['email', 'message', 'name', 'topic']);
  assert.ok(json(await post('/contact', contact({ topic: 'free-money' }))).errors.topic);
  assert.ok(json(await post('/contact', contact({ message: 'a'.repeat(5001) }))).errors.message);
  assert.ok(json(await post('/contact', contact({ company: 'c'.repeat(151) }))).errors.company);
  assert.equal(sent.length, 0);
  assert.equal((await post('/contact', contact({ message: 'a'.repeat(5000), company: '' }))).statusCode, 200);
});

test('line breaks cannot inject headers, and message formatting is kept', async () => {
  const { sent, post } = setup();
  await post('/contact', contact({ name: 'Alex\r\nBcc: victim@example.com', company: 'Acme\nBcc: victim@example.com', message: 'Line one\r\nLine two' }));
  const [email] = sent;
  assert.ok(!/[\r\n]/.test(email.subject));
  assert.ok(!/[\r\n]/.test(email.replyTo));
  assert.ok(email.text.includes('From:\nAlex Bcc: victim@example.com\n'));
  assert.ok(email.text.includes('Message:\nLine one\nLine two\n'));
});

test('an email failure reports an error and the same submission can be retried', async () => {
  let fail = true;
  const delivered = [];
  const { post } = setup({ send: async (email) => { if (fail) throw Object.assign(new Error('down'), { name: 'Throttling' }); delivered.push(email); } });
  const body = contact();
  const failed = await post('/contact', body);
  assert.equal(failed.statusCode, 502);
  assert.deepEqual(json(failed), { ok: false, error: 'send_failed' });
  fail = false;
  const retried = await post('/contact', body);
  assert.equal(retried.statusCode, 200);
  assert.equal(delivered.length, 1);
});

test('a duplicate submission sends one email', async () => {
  const { sent, post } = setup();
  const body = contact();
  const first = await post('/contact', body);
  const second = await post('/contact', body);
  assert.equal(first.statusCode, 200);
  assert.equal(second.statusCode, 200);
  assert.equal(sent.length, 1);
});

test('honeypot and too-fast submissions look successful but send nothing', async () => {
  const { sent, post } = setup();
  assert.deepEqual(json(await post('/contact', contact({ website: 'https://spam.example' }))), { ok: true });
  assert.deepEqual(json(await post('/contact', contact({ startedAt: String(NOW - 1000) }))), { ok: true });
  assert.equal(sent.length, 0);
});

test('each visitor is rate limited', async () => {
  const { sent, post } = setup({ env: { RATE_LIMIT_MAX: '2' } });
  const statuses = [];
  for (let index = 0; index < 3; index += 1) statuses.push((await post('/contact', contact(), { sourceIp: '198.51.100.7' })).statusCode);
  assert.deepEqual(statuses, [200, 200, 429]);
  assert.equal((await post('/contact', contact(), { sourceIp: '198.51.100.8' })).statusCode, 200, 'other visitors are unaffected');
  assert.equal(sent.length, 3);
});

test('requests from other sites, oversized bodies and unknown routes are refused', async () => {
  const { sent, post, handle } = setup();
  assert.equal((await post('/contact', contact(), { origin: 'https://evil.example' })).statusCode, 403);
  assert.equal((await post('/contact', contact(), { origin: null })).statusCode, 403);
  assert.equal((await post('/contact', contact({ message: 'a'.repeat(21_000) }))).statusCode, 413);
  assert.equal((await post('/contact', '{not json')).statusCode, 400);
  assert.equal((await post('/subscribe', contact())).statusCode, 404);
  const preflight = await handle({ rawPath: '/contact', requestContext: { http: { method: 'OPTIONS' } }, headers: { origin: ORIGIN } });
  assert.equal(preflight.statusCode, 204);
  assert.equal(preflight.headers['access-control-allow-origin'], ORIGIN);
  const foreignPreflight = await handle({ rawPath: '/contact', requestContext: { http: { method: 'OPTIONS' } }, headers: { origin: 'https://evil.example' } });
  assert.equal(foreignPreflight.statusCode, 403);
  assert.equal(sent.length, 0);
});

test('without JavaScript, posts redirect back to the contact page notices', async () => {
  const { post } = setup();
  const form = (values) => new URLSearchParams(values).toString();
  const ok = await post('/contact', form(contact({ startedAt: '', submissionId: '' })), { contentType: 'application/x-www-form-urlencoded' });
  assert.equal(ok.statusCode, 303);
  assert.equal(ok.headers.location, `${ORIGIN}/contact/#message-sent`);
  const bad = await post('/contact', form(contact({ email: 'nope' })), { contentType: 'application/x-www-form-urlencoded' });
  assert.equal(bad.headers.location, `${ORIGIN}/contact/#message-not-sent`);
});

test('the leadership form needs only a name and email, and its optional fields reach the email', async () => {
  const { sent, post } = setup();
  const bare = await post('/contact', contact({ company: '', message: '' }));
  assert.equal(bare.statusCode, 200);
  assert.ok(sent[0].text.includes('Message:\n(none)'));
  await post('/contact', contact({ role: 'VP of Engineering', location: 'Remote, US', source: 'recruiter' }));
  for (const line of ['Role:\nVP of Engineering', 'Location expectation:\nRemote, US', 'Found me through:\nA recruiter']) {
    assert.ok(sent[1].text.includes(line), `email includes ${line.split('\n')[0]}`);
  }
  assert.ok(!sent[0].text.includes('Role:'), 'empty optional fields are left out');
});

test('other topics still need a message, and unknown sources or long optional fields are rejected', async () => {
  const { sent, post } = setup();
  const noMessage = await post('/contact', contact({ topic: 'project', message: '' }));
  assert.equal(noMessage.statusCode, 422);
  assert.ok(json(noMessage).errors.message);
  const bad = await post('/contact', contact({ source: 'billboard', role: 'x'.repeat(151), location: 'y'.repeat(151) }));
  assert.equal(bad.statusCode, 422);
  assert.deepEqual(Object.keys(json(bad).errors).sort(), ['location', 'role', 'source']);
  assert.equal(sent.length, 0);
});

test('without JavaScript, the leadership form redirects back to its own notices', async () => {
  const { post } = setup();
  const form = (values) => new URLSearchParams(values).toString();
  const ok = await post('/contact', form(contact({ form: 'leadership', startedAt: '', submissionId: '' })), { contentType: 'application/x-www-form-urlencoded' });
  assert.equal(ok.headers.location, `${ORIGIN}/contact/#leadership-sent`);
  const bad = await post('/contact', form(contact({ form: 'leadership', email: 'nope' })), { contentType: 'application/x-www-form-urlencoded' });
  assert.equal(bad.headers.location, `${ORIGIN}/contact/#leadership-not-sent`);
  const huge = await post('/contact', form(contact({ form: 'leadership', message: 'x'.repeat(30_000) })), { contentType: 'application/x-www-form-urlencoded' });
  assert.equal(huge.headers.location, `${ORIGIN}/contact/#leadership-not-sent`, 'a too-large post still returns to the leadership form');
});

test('a missing sender or inbox fails safely instead of guessing an address', async () => {
  const { post } = setup({ env: { FORMS_FROM: '', CONTACT_TO: '' } });
  const response = await post('/contact', contact());
  assert.equal(response.statusCode, 500);
  assert.equal(json(response).error, 'not_configured');
});


test('an in-progress retry cannot report success if the original send fails', async () => {
  let rejectSend, started;
  const sending = new Promise((resolve) => { started = resolve; });
  let fail = true;
  const { post } = setup({ send: () => {
    if (!fail) return Promise.resolve();
    started();
    return new Promise((_, reject) => { rejectSend = reject; });
  } });
  const body = contact();
  const first = post('/contact', body);
  await sending;
  const retry = await post('/contact', body);
  assert.equal(retry.statusCode, 409);
  assert.deepEqual(json(retry), { ok: false, error: 'send_pending' });
  rejectSend(new Error('Send failed'));
  assert.equal((await first).statusCode, 502);
  fail = false;
  assert.equal((await post('/contact', body)).statusCode, 200);
  assert.deepEqual(json(await post('/contact', body)), { ok: true, duplicate: true });
});


test('a completion-store failure keeps the claim pending without sending twice', async () => {
  const store = memoryStore();
  store.complete = async () => { throw new Error('Store unavailable'); };
  const { sent, post } = setup({ store });
  const body = contact();
  const first = await post('/contact', body);
  assert.equal(first.statusCode, 503);
  assert.equal(json(first).ok, false);
  const retry = await post('/contact', body);
  assert.equal(retry.statusCode, 409);
  assert.equal(sent.length, 1);
});

test('expired submission records can be reclaimed without waiting for cleanup', async () => {
  const store = memoryStore();
  assert.equal(await store.claim('expired', 1, NOW), 'claimed');
  assert.equal(await store.claim('expired', 1, NOW + 500), 'pending');
  await store.complete('expired');
  assert.equal(await store.claim('expired', 1, NOW + 500), 'sent');
  assert.equal(await store.claim('expired', 1, NOW + 1000), 'claimed');
});
