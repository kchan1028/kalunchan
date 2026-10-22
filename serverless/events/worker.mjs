// Anonymous link-click counts for kalunchan.dev, served by a Cloudflare Worker at kalunchan.dev/e and stored in
// Workers Analytics Engine. Cloudflare Web Analytics only counts page views, so the calls to action on
// /engineering-leadership/ report clicks here (src/track.js). Each data point holds the event name, the page path
// and the link target: no cookies, IP address, user agent or identifier. Deployed by npm run events.
// Described on /privacy/; keep that page in step with what this file stores.

export const ORIGIN = 'https://kalunchan.dev';
export const EVENTS = new Set(['resume_request', 'linkedin_click', 'contact_click', 'article_click']);
const MAX_BODY = 512;
const PATH = /^\/[a-z0-9/-]{0,199}$/;
const TARGET = /^(?:\/[\w/?=#.-]{0,199}|https:\/\/www\.linkedin\.com\/[\w/.-]{0,150})$/;

// Returns { event, path, target } for a well-formed event, or null.
export function parseEvent(body) {
  if (typeof body !== 'string' || body.length > MAX_BODY) return null;
  let data;
  try {
    data = JSON.parse(body);
  } catch {
    return null;
  }
  if (!data || !EVENTS.has(data.e) || typeof data.p !== 'string' || !PATH.test(data.p)) return null;
  const target = typeof data.t === 'string' && TARGET.test(data.t) ? data.t : '';
  return { event: data.e, path: data.p, target };
}

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') return new Response(null, { status: 405, headers: { Allow: 'POST' } });
    const origin = request.headers.get('Origin');
    if (origin && origin !== ORIGIN) return new Response(null, { status: 403 });
    if (Number(request.headers.get('Content-Length') || 0) > MAX_BODY) return new Response(null, { status: 413 });
    const event = parseEvent(await request.text());
    if (!event) return new Response(null, { status: 400 });
    env.EVENTS.writeDataPoint({ indexes: [event.event], blobs: [event.event, event.path, event.target] });
    return new Response(null, { status: 204 });
  },
};
