// Records short previews of the live project sites for the /projects/ showcase.
// Playwright is not a project dependency, so point NODE_PATH at any install of it, and ffmpeg must be on PATH:
//   NODE_PATH=/path/to/node_modules node scripts/record-project-previews.mjs [slug ...]
// Writes public/videos/projects/<slug>-{960,640}.{webm,mp4} and public/images/projects/<slug>-poster-{960,640}.webp.
// Only public pages are visited. No account is used, nothing is sent through a contact or sign-up form, and cookie prompts are rejected.
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const videoDir = join(root, 'public/videos/projects');
const imageDir = join(root, 'public/images/projects');
const viewport = { width: 1280, height: 800 };
const fps = 24;
const fade = 0.6; // The last 0.6s dissolves back to the first frame, so the loop has no visible jump.

const wait = (page, ms) => page.waitForTimeout(ms);

// Eased, frame-paced scroll, so the recording never shows a jump between positions.
const glide = (page, y, ms = 1500) => page.evaluate(([to, duration]) => new Promise((done) => {
  const from = window.scrollY;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
    window.scrollTo({ top: from + (to - from) * eased, behavior: 'instant' });
    t < 1 ? requestAnimationFrame(step) : done();
  };
  requestAnimationFrame(step);
}), [y, ms]);

const glideTo = async (page, locator, offset = 96, ms = 1500) => {
  const y = await locator.evaluate((el, off) => el.getBoundingClientRect().top + window.scrollY - off, offset);
  await glide(page, y, ms);
};

const scenarios = {
  velowise: {
    url: 'https://getvelowise.com/',
    async act(page) {
      await wait(page, 1000);
      await page.getByRole('button', { name: 'Try sample project' }).first().click();
      await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
      await wait(page, 1800);
      await glide(page, 620, 1800);
      await wait(page, 1400);
    },
  },
  fedpath: {
    url: 'https://gofedpath.com/',
    async act(page) {
      await wait(page, 700);
      await page.getByRole('button', { name: 'Landscaping', exact: true }).first().click();
      await wait(page, 500);
      await page.getByRole('button', { name: 'Next', exact: true }).first().click();
      await wait(page, 700);
      await page.getByLabel('Anywhere in the U.S.').first().check();
      await wait(page, 400);
      await page.getByRole('button', { name: 'Next', exact: true }).first().click();
      await wait(page, 700);
      await page.getByLabel('No, I’m completely new').first().check();
      await wait(page, 400);
      await page.getByRole('button', { name: 'Show me opportunities' }).first().click();
      await wait(page, 900);
      await glideTo(page, page.getByRole('heading', { name: /might fit your business/ }), 96, 1100);
      await wait(page, 1200);
    },
  },
  surgeiq: {
    url: 'https://getsurgeiq.com/',
    async act(page) {
      await wait(page, 700);
      await page.getByRole('button', { name: 'Zones', exact: true }).first().click();
      await wait(page, 1700);
      await page.getByRole('button', { name: 'Workout', exact: true }).first().click();
      await wait(page, 1800);
      await page.getByRole('button', { name: 'Ride', exact: true }).first().click();
      await wait(page, 2300);
    },
  },
  tools: {
    url: 'https://usefullittletools.app/',
    async act(page) {
      await wait(page, 800);
      await page.getByRole('button', { name: 'jwt', exact: true }).first().click();
      await wait(page, 1300);
      await page.keyboard.press('Enter');
      await page.getByText('Expired token', { exact: true }).first().waitFor({ timeout: 8000 });
      await wait(page, 900);
      await page.getByText('Expired token', { exact: true }).first().click();
      await wait(page, 700);
      await glide(page, 300, 1100);
      await wait(page, 1300);
    },
  },
  smog: {
    url: 'https://unioncitysmogcheck.com/',
    // The open/closed badge reflects the moment of recording, which would be wrong forever after.
    prepare: (page) => page.addStyleTag({ content: '.status { visibility: hidden !important; }' }),
    async act(page) {
      await wait(page, 800);
      await glideTo(page, page.getByRole('heading', { name: /Before your smog check/ }), 96, 1800);
      await wait(page, 500);
      await page.locator('summary', { hasText: 'Check engine light is off' }).first().click();
      await wait(page, 1200);
      await page.locator('summary', { hasText: 'No recent battery change' }).first().click();
      await wait(page, 1500);
    },
  },
  omnium: {
    url: 'https://berkeleyomnium.com/',
    async act(page) {
      await wait(page, 1000);
      await glideTo(page, page.getByRole('heading', { name: 'Road race, crit or both?' }), 96, 1900);
      await wait(page, 1100);
      await glideTo(page, page.getByRole('heading', { name: 'Two days, by the numbers.' }), 96, 1500);
      await wait(page, 1200);
    },
  },
};

// CDP screencast rather than recordVideo: recordVideo caps at a low bitrate that smears small type.
async function capture(page, act, framesDir) {
  const cdp = await page.context().newCDPSession(page);
  const frames = [];
  let recording = true;
  cdp.on('Page.screencastFrame', ({ data, metadata, sessionId }) => {
    if (!recording) return;
    const file = join(framesDir, `${String(frames.length).padStart(5, '0')}.jpg`);
    writeFileSync(file, Buffer.from(data, 'base64'));
    frames.push({ file, at: metadata.timestamp });
    cdp.send('Page.screencastFrameAck', { sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, everyNthFrame: 1 });
  await act(page);
  const end = Date.now() / 1000;
  recording = false;
  await cdp.send('Page.stopScreencast');
  if (frames.length < 2) throw new Error('Screencast produced no frames');
  return { frames, end };
}

// Chromium encodes the posters, because stock ffmpeg builds often lack libwebp.
async function poster(page, jpeg, width, height, file) {
  const url = await page.evaluate(async ([src, w, h]) => {
    const image = new Image();
    image.src = src;
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext('2d');
    context.imageSmoothingQuality = 'high';
    context.drawImage(image, 0, 0, w, h);
    return canvas.toDataURL('image/webp', 0.8);
  }, [`data:image/jpeg;base64,${readFileSync(jpeg).toString('base64')}`, width, height]);
  writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
}

async function encode(slug, { frames, end }, framesDir, page) {
  const list = frames.map((f, i) => `file '${f.file}'\nduration ${Math.max(0.001, (frames[i + 1]?.at ?? end) - f.at).toFixed(4)}`).join('\n');
  const listFile = join(framesDir, 'frames.txt');
  writeFileSync(listFile, `${list}\nfile '${frames.at(-1).file}'\n`);
  const duration = end - frames[0].at;
  const ff = (...args) => execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });

  // Master: constant frame rate, with the tail dissolving into the opening frame.
  const master = join(framesDir, 'master.mkv');
  ff('-f', 'concat', '-safe', '0', '-i', listFile, '-loop', '1', '-t', String(fade + 0.1), '-i', frames[0].file,
    '-filter_complex', `[0:v]fps=${fps},format=yuv420p,settb=AVTB[a];[1:v]fps=${fps},format=yuv420p,settb=AVTB[b];[a][b]xfade=transition=fade:duration=${fade}:offset=${(duration - fade).toFixed(3)},format=yuv420p[v]`,
    '-map', '[v]', '-c:v', 'libx264', '-crf', '12', '-preset', 'veryfast', master);

  for (const [width, height, crf264, crf9] of [[960, 600, 29, 46], [640, 400, 31, 48]]) {
    const scale = `scale=${width}:${height}:flags=lanczos`;
    ff('-i', master, '-vf', scale, '-an', '-c:v', 'libx264', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-crf', String(crf264), '-preset', 'slow', '-movflags', '+faststart', join(videoDir, `${slug}-${width}.mp4`));
    ff('-i', master, '-vf', scale, '-an', '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', String(crf9), '-row-mt', '1', '-cpu-used', '2', join(videoDir, `${slug}-${width}.webm`));
    await poster(page, frames[0].file, width, height, join(imageDir, `${slug}-poster-${width}.webp`));
  }
  return duration + 0.1;
}

mkdirSync(videoDir, { recursive: true });
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(scenarios);
const browser = await chromium.launch();
for (const slug of slugs) {
  const { url, act, prepare } = scenarios[slug];
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1, colorScheme: 'light', locale: 'en-US' });
  const page = await context.newPage();
  const framesDir = mkdtempSync(join(tmpdir(), `preview-${slug}-`));
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    await page.getByRole('button', { name: /^(reject|decline|no thanks)/i }).first().click({ timeout: 2500 }).catch(() => {});
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await prepare?.(page);
    await page.evaluate(() => document.fonts.ready);
    await wait(page, 1200);
    const seconds = await encode(slug, await capture(page, act, framesDir), framesDir, page);
    console.log(`${slug}: ${seconds.toFixed(1)}s`);
  } finally {
    rmSync(framesDir, { recursive: true, force: true });
    await context.close();
  }
}
await browser.close();
