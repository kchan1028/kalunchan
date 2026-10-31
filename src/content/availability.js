// The homepage availability badge. Edit this object, then rebuild: scripts/prerender.mjs warns once `updated` is
// more than STALE_AFTER_DAYS old. `updated` is only for that warning and isn't shown on the page. show: false removes
// the badge and the warning. Describe the opportunity by scope, not a job title (POSITIONING.md). timing: null stays
// off the page until there's something true to say.
export const availability = {
  show: true,
  role: 'engineering leadership opportunities',
  location: 'San Francisco Bay Area. Remote across the US, or hybrid and on-site in the Bay Area.',
  timing: null,
  updated: '2026-10',
};

export const STALE_AFTER_DAYS = 90;

function parseUpdated(updated) {
  const match = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(updated);
  if (!match) throw new Error(`availability.updated must look like "2026-10", got "${updated}"`);
  return { year: Number(match[1]), month: Number(match[2]) };
}

export const availabilityLabel = ({ role }) => `Open to ${role}`;

// Age counts from the first of the month, so the warning can only come early, never late.
export function availabilityAgeDays({ updated }, now = new Date()) {
  const { year, month } = parseUpdated(updated);
  return Math.floor((now.getTime() - Date.UTC(year, month - 1, 1)) / 86400000);
}

export const availabilityIsStale = (config, now) => config.show && availabilityAgeDays(config, now) > STALE_AFTER_DAYS;
