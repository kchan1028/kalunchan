import assert from 'node:assert/strict';
import test from 'node:test';
import { availabilityIsStale, availabilityLabel } from '../src/content/availability.js';

const config = { show: true, role: 'engineering leadership opportunities', updated: '2026-10' };

test('the badge names the role and the month it was updated', () => {
  assert.equal(availabilityLabel(config), 'Open to engineering leadership opportunities · Updated Oct 2026');
});

test('a malformed month fails the build instead of rendering a broken badge', () => {
  assert.throws(() => availabilityLabel({ ...config, updated: '2026-13' }), /availability\.updated/);
});

test('staleness starts after 90 days, counted from the first of the month', () => {
  assert.equal(availabilityIsStale(config, new Date('2026-12-30T00:00:00Z')), false);
  assert.equal(availabilityIsStale(config, new Date('2026-12-31T00:00:00Z')), true);
});

test('a hidden badge never warns', () => {
  assert.equal(availabilityIsStale({ ...config, show: false }, new Date('2030-01-01T00:00:00Z')), false);
});
