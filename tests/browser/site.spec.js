import { test, expect } from '@playwright/test';

async function openSearch(page) {
  await page.getByRole('button', { name: 'Search this site' }).click();
  return page.getByRole('dialog', { name: 'Search this site' });
}

test('search supports keyboard selection and an explicit close action', async ({ page }) => {
  await page.goto('/');
  let dialog = await openSearch(page);
  await dialog.getByRole('combobox').fill('technical debt');
  const options = dialog.getByRole('option');
  await expect(options.first()).toBeVisible();
  await dialog.getByRole('combobox').press('ArrowDown');
  await expect(options.nth(1)).toHaveAttribute('aria-selected', 'true');
  const destination = await options.nth(1).getByRole('link').getAttribute('href');
  await dialog.getByRole('combobox').press('Enter');
  await expect(page).toHaveURL(new RegExp(destination));
  await expect(page.getByRole('main')).not.toBeEmpty();
  dialog = await openSearch(page);
  await dialog.getByRole('button', { name: 'Close search' }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Search this site' })).toBeFocused();
});

test('a second destination waits for its chunk during an exit transition', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Search this site' }).waitFor();
  let release, requested;
  const blocked = new Promise((resolve) => { release = resolve; });
  const requestSeen = new Promise((resolve) => { requested = resolve; });
  await page.route('**/src/pages/Experience.jsx*', async (route) => {
    requested();
    await blocked;
    await route.continue();
  });
  // Preload the first destination so the exit animation starts immediately.
  await page.evaluate(() => import('/src/pageRoutes.js').then((routes) => routes.loadRoute('/about/')));
  await page.getByRole('button', { name: 'Contents', exact: true }).click();
  await page.locator('.site-nav a[href="/about/"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-page', 'leave');
  await page.locator('.site-nav a[href="/experience/"]').click();
  await requestSeen;
  // Wait past the exit timer while the second chunk is still blocked.
  await page.waitForTimeout(250);
  expect(await page.evaluate(() => document.querySelector('main').textContent.trim().length)).toBeGreaterThan(0);
  await expect(page.locator('main')).toHaveCSS('opacity', '1');
  release();
  await expect(page).toHaveURL(/\/experience\/$/);
  await expect(page.locator('main h1')).toContainText('Experience');
});

test('back and forward restore the previous scroll position', async ({ page }) => {
  await page.goto('/about/');
  await page.getByRole('button', { name: 'Search this site' }).waitFor();
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(800);
  // Click without Playwright scrolling the footer into view and changing the position under test.
  const before = await page.evaluate(() => window.scrollY);
  await page.locator('.colophon').getByRole('link', { name: 'For hiring teams' }).evaluate((link) => link.click());
  await expect(page.locator('main h1')).toContainText('Engineering leadership');
  await page.goBack();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect.poll(async () => Math.abs((await page.evaluate(() => window.scrollY)) - before)).toBeLessThan(20);
  await page.goForward();
  await expect(page).toHaveURL(/\/engineering-leadership\/$/);
});

test('reduced motion navigation skips transition phases', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('button', { name: 'Search this site' }).waitFor();
  await page.evaluate(() => {
    window.transitionPhases = [];
    new MutationObserver(() => {
      if (document.documentElement.dataset.page) window.transitionPhases.push(document.documentElement.dataset.page);
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-page'] });
  });
  await page.locator('.colophon').getByRole('link', { name: 'For hiring teams' }).click();
  await expect(page.locator('main h1')).toContainText('Engineering leadership');
  expect(await page.evaluate(() => window.transitionPhases)).toEqual([]);
});

test('contact pending and failed responses preserve the submission for retry', async ({ page }) => {
  const submissions = [];
  await page.route('http://localhost:8787/contact', async (route) => {
    if (route.request().method() === 'OPTIONS') {
      await route.fulfill({ status: 204, headers: {
        'access-control-allow-origin': 'http://127.0.0.1:4173',
        'access-control-allow-methods': 'POST',
        'access-control-allow-headers': 'content-type',
      } });
      return;
    }
    submissions.push(route.request().postDataJSON());
    const status = [409, 502, 200][submissions.length - 1];
    await route.fulfill({ status, headers: { 'access-control-allow-origin': 'http://127.0.0.1:4173' },
      json: status === 200 ? { ok: true } : { ok: false, error: status === 409 ? 'send_pending' : 'send_failed' } });
  });
  await page.goto('/contact/#leadership');
  const form = page.locator('form[aria-labelledby="lead-form-title"]');
  await form.getByLabel('Name', { exact: true }).fill('Test Visitor');
  await form.getByLabel('Email', { exact: true }).fill('visitor@example.test');
  for (let i = 0; i < 2; i++) {
    await form.getByRole('button', { name: 'Send', exact: true }).click();
    await expect(form.locator('.cform__failure')).toBeVisible();
  }
  await form.getByRole('button', { name: 'Send', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Thanks. Your message is on its way.' })).toBeVisible();
  expect(new Set(submissions.map((body) => body.submissionId)).size).toBe(1);
  expect(submissions[0].submissionId).toBeTruthy();
});

test('the theme toggle applies on the next load and survives a reload', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Dark theme' });
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: 'Dark theme' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(16, 19, 21)');
});

test('home shows the availability badge, and the lap button reports with reduced motion on', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.badge')).toHaveText('Open to engineering leadership opportunities');
  await page.getByRole('button', { name: 'Ride a lap' }).click();
  await expect(page.getByRole('status')).toHaveText('1 lap done');
});
