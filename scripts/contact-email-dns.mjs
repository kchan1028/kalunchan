// Email authentication for the contact form's sender domain, so its mail passes DMARC instead of landing in spam:
// an SES domain identity with Easy DKIM (2048-bit), a custom MAIL FROM subdomain for aligned SPF, and a DMARC record.
// With a Cloudflare token that has Zone · DNS · Edit (CLOUDFLARE_DNS_API_TOKEN, else CLOUDFLARE_API_TOKEN) it publishes
// the records in Cloudflare; otherwise it prints them to add by hand. Settings come from .env.
// Safe to re-run: it only adds what's missing and never replaces a record that differs.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

process.chdir(fileURLToPath(new URL('..', import.meta.url)));

function readEnvFile(file) {
  if (!existsSync(file)) return {};
  return Object.fromEntries(readFileSync(file, 'utf8').split('\n')
    .map((line) => line.trim().match(/^([A-Z0-9_]+)=(.*)$/))
    .filter(Boolean)
    .map(([, key, value]) => [key, value.replace(/^(['"])(.*)\1$/, '$2')]));
}

const fail = (message) => { console.error(message); process.exit(1); };
const config = { ...process.env, ...readEnvFile('.env') };
const from = config.CONTACT_FROM_ADDRESS || config.CONTACT_TO;
if (!from?.includes('@')) fail('Set CONTACT_FROM_ADDRESS (the sender, e.g. website@kalunchan.dev) in .env.');
const domain = from.split('@')[1].toLowerCase();
const mailFrom = `mail.${domain}`;
const region = config.CONTACT_AWS_REGION || 'us-west-2';
// Only the profile named in .env: the shell's AWS_PROFILE may be a work account.
const profile = config.CONTACT_AWS_PROFILE || config.DEPLOY_AWS_PROFILE;
if (!profile) fail('Set CONTACT_AWS_PROFILE or DEPLOY_AWS_PROFILE in .env.');
const expectedAccount = config.CONTACT_AWS_ACCOUNT_ID || config.DEPLOY_AWS_ACCOUNT_ID;

const awsEnv = { ...process.env };
for (const key of ['AWS_PROFILE', 'AWS_DEFAULT_PROFILE', 'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_SESSION_TOKEN']) delete awsEnv[key];
const aws = (...args) => {
  const out = execFileSync('aws', ['--profile', profile, '--region', region, '--output', 'json', ...args], { env: awsEnv, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  return out.trim() ? JSON.parse(out) : null;
};

if (expectedAccount && aws('sts', 'get-caller-identity').Account !== expectedAccount) {
  fail(`Profile ${profile} is signed in to a different account than DEPLOY_AWS_ACCOUNT_ID. Nothing was changed.`);
}

// ---------- SES ----------
console.log(`SES (${region})`);
let identity = null;
try {
  identity = aws('sesv2', 'get-email-identity', '--email-identity', domain);
} catch (error) {
  if (!String(error.stderr).includes('NotFoundException')) throw error;
}
if (!identity) {
  aws('sesv2', 'create-email-identity', '--email-identity', domain, '--dkim-signing-attributes', 'NextSigningKeyLength=RSA_2048_BIT');
  console.log(`  created domain identity ${domain} with Easy DKIM (2048-bit)`);
} else if (!identity.DkimAttributes?.Tokens?.length) {
  // A domain verified the legacy TXT way has no DKIM; without it mail can't pass DMARC.
  aws('sesv2', 'put-email-identity-dkim-signing-attributes', '--email-identity', domain, '--signing-attributes-origin', 'AWS_SES', '--signing-attributes', 'NextSigningKeyLength=RSA_2048_BIT');
  console.log(`  turned on Easy DKIM (2048-bit) for ${domain}`);
}
if (identity?.MailFromAttributes?.MailFromDomain !== mailFrom) {
  // USE_DEFAULT_VALUE: until the MX record resolves, SES keeps using its own MAIL FROM, so mail still goes out.
  aws('sesv2', 'put-email-identity-mail-from-attributes', '--email-identity', domain, '--mail-from-domain', mailFrom, '--behavior-on-mx-failure', 'USE_DEFAULT_VALUE');
  console.log(`  set custom MAIL FROM ${mailFrom}`);
}
identity = aws('sesv2', 'get-email-identity', '--email-identity', domain);

const records = [
  ...identity.DkimAttributes.Tokens.map((token) => ({ type: 'CNAME', name: `${token}._domainkey.${domain}`, content: `${token}.dkim.amazonses.com` })),
  { type: 'MX', name: mailFrom, content: `feedback-smtp.${region}.amazonses.com`, priority: 10 },
  { type: 'TXT', name: mailFrom, content: 'v=spf1 include:amazonses.com ~all' },
  // p=none: report-only, so a DNS mistake can never send the form's own mail to spam or bounce it.
  { type: 'TXT', name: `_dmarc.${domain}`, content: 'v=DMARC1; p=none' },
];

// ---------- Cloudflare ----------
const token = config.CLOUDFLARE_DNS_API_TOKEN || config.CLOUDFLARE_API_TOKEN;
const zone = config.CONTACT_CLOUDFLARE_ZONE_ID || config.CLOUDFLARE_ZONE_ID;
const norm = (value) => String(value).replace(/^"|"$/g, '').replace(/\.$/, '').toLowerCase();
const describe = (record) => `${record.type.padEnd(5)} ${record.name}  →  ${record.priority ? `${record.priority} ` : ''}${record.content}`;

async function cf(path, init = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zone}${path}`, {
    ...init,
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
  });
  const body = await response.json().catch(() => ({}));
  if (!body.success) throw Object.assign(new Error((body.errors ?? []).map((e) => e.message).join('; ') || `HTTP ${response.status}`), { status: response.status });
  return body.result;
}

let published = false;
if (token && zone) {
  console.log('Cloudflare DNS');
  try {
    let conflicts = 0;
    for (const record of records) {
      const existing = await cf(`/dns_records?type=${record.type}&name=${encodeURIComponent(record.name)}`);
      if (existing.some((r) => norm(r.content) === norm(record.content))) {
        console.log(`  ✓ ${describe(record)}  (already set)`);
        continue;
      }
      // One CNAME per name, one MX for the MAIL FROM host, one SPF and one DMARC record: never add beside a different one.
      const tag = record.type === 'TXT' ? norm(record.content).split(/[ ;]/)[0] : null;
      const conflict = tag ? existing.find((r) => norm(r.content).startsWith(tag)) : existing[0];
      if (conflict) {
        console.log(`  ✗ ${describe(record)}  (skipped: a different ${record.type} record exists: ${conflict.content})`);
        conflicts += 1;
        continue;
      }
      await cf('/dns_records', {
        method: 'POST',
        body: JSON.stringify({
          type: record.type, name: record.name, content: record.content, ttl: 1,
          ...(record.priority ? { priority: record.priority } : {}),
          // DKIM CNAMEs must be DNS only: a proxied record resolves to Cloudflare, not to SES.
          ...(record.type === 'CNAME' ? { proxied: false } : {}),
          comment: 'Amazon SES for the kalunchan.dev contact form',
        }),
      });
      console.log(`  + ${describe(record)}`);
    }
    published = conflicts === 0;
    if (conflicts) process.exitCode = 1;
  } catch (error) {
    if (error.status !== 401 && error.status !== 403) throw error;
    console.log(`  The Cloudflare token can't edit DNS (${error.message}).`);
  }
}

if (!published) {
  console.log('\nAdd these records in Cloudflare (DNS only, TTL Auto), or set CLOUDFLARE_DNS_API_TOKEN');
  console.log('(Zone · DNS · Edit on this zone) in .env and run this again:');
  for (const record of records) console.log(`  ${describe(record)}`);
}

console.log(`\nStatus: DKIM ${identity.DkimAttributes.Status}, MAIL FROM ${identity.MailFromAttributes?.MailFromDomainStatus ?? 'not set'}.`);
console.log('SES checks DNS on its own; once the records are live, both turn SUCCESS within minutes to a few hours.');
