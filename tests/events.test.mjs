// node --test tests/events.test.mjs
import assert from 'node:assert/strict';
import test from 'node:test';
import worker, { parseEvent } from '../serverless/events/worker.mjs';

const ORIGIN = 'https://kalunchan.dev';
const body = (data) => JSON.stringify({ e: 'resume_request', p: '/engineering-leadership/', t: '/contact/?topic=leadership#start', ...data });

function call(payload, { method = 'POST', origin = ORIGIN } = {}) {
  const points = [];
  const request = new Request(`${ORIGIN}/e`, {
    method,
    headers: origin ? { Origin: origin } : {},
    body: method === 'POST' ? payload : undefined,
  });
  return worker.fetch(request, { EVENTS: { writeDataPoint: (p) => points.push(p) } }).then((res) => ({ res, points }));
}

test('parses a known event with its page and target', () => {
  assert.deepEqual(parseEvent(body()), { event: 'resume_request', path: '/engineering-leadership/', target: '/contact/?topic=leadership#start' });
});

test('keeps LinkedIn targets and drops any other external target', () => {
  assert.equal(parseEvent(body({ e: 'linkedin_click', t: 'https://www.linkedin.com/in/kchan1288/' })).target, 'https://www.linkedin.com/in/kchan1288/');
  assert.equal(parseEvent(body({ t: 'https://evil.example/x' })).target, '');
});

test('contact_submit carries only which form was sent', () => {
  assert.deepEqual(parseEvent(body({ e: 'contact_submit', p: '/contact/', t: 'leadership' })), { event: 'contact_submit', path: '/contact/', target: 'leadership' });
  assert.equal(parseEvent(body({ e: 'contact_submit', p: '/contact/', t: 'consulting' })).target, 'consulting');
  assert.equal(parseEvent(body({ e: 'contact_submit', p: '/contact/', t: 'alex@example.com' })), null);
  assert.equal(parseEvent(body({ e: 'contact_submit', p: '/contact/', t: '' })), null);
});

test('rejects unknown events, bad paths, junk and oversized bodies', () => {
  assert.equal(parseEvent(body({ e: 'page_view' })), null);
  assert.equal(parseEvent(body({ e: 'contact_click' })), null);
  assert.equal(parseEvent(body({ e: 'article_click' })), null);
  assert.equal(parseEvent(body({ p: 'https://kalunchan.dev/' })), null);
  assert.equal(parseEvent(body({ p: '/Engineering<script>' })), null);
  assert.equal(parseEvent('not json'), null);
  assert.equal(parseEvent(body({ t: `/${'a'.repeat(600)}` })), null);
});

test('stores only the event, path and target', async () => {
  const { res, points } = await call(body());
  assert.equal(res.status, 204);
  assert.deepEqual(points, [{ indexes: ['resume_request'], blobs: ['resume_request', '/engineering-leadership/', '/contact/?topic=leadership#start'] }]);
});

test('refuses other origins, other methods and bad events without writing', async () => {
  assert.equal((await call(body(), { origin: 'https://evil.example' })).res.status, 403);
  assert.equal((await call(null, { method: 'GET' })).res.status, 405);
  const bad = await call(body({ e: 'nope' }));
  assert.equal(bad.res.status, 400);
  assert.equal(bad.points.length, 0);
});
