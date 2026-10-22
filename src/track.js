// Anonymous click counts for calls to action (serverless/events/worker.mjs, answering at kalunchan.dev/e).
// Sends the event name, the page path and the link target: no cookies, storage or identifiers. Production only.
export function track(event, target = '') {
  if (!import.meta.env.PROD || typeof navigator === 'undefined' || !navigator.sendBeacon) return;
  try {
    navigator.sendBeacon('/e', JSON.stringify({ e: event, p: window.location.pathname, t: target }));
  } catch {
    // A lost count never gets in the way of the click.
  }
}
