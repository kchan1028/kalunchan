// Anonymous hiring CTA, form-start, résumé, LinkedIn and submission counts (serverless/events/worker.mjs,
// answering at kalunchan.dev/e). Sends the event name, the page path and the link target, or for contact_submit the
// form sent (leadership or consulting): no cookies, storage, identifiers or form contents. Production only.
export function track(event, target = '') {
  if (!import.meta.env.PROD || typeof navigator === 'undefined' || !navigator.sendBeacon) return;
  try {
    navigator.sendBeacon('/e', JSON.stringify({ e: event, p: window.location.pathname, t: target }));
  } catch {
    // A lost count never gets in the way of the click.
  }
}
