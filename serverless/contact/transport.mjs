import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Amazon SES through the Lambda's IAM role: no SMTP password or API key exists anywhere.
// The From address must be an SES-verified identity; the visitor's address only goes in Reply-To.
export function sesTransport(region) {
  let clientPromise;
  return async (email) => {
    clientPromise ??= import('@aws-sdk/client-sesv2').then((sdk) => ({ sdk, ses: new sdk.SESv2Client(region ? { region } : {}) }));
    const { sdk, ses } = await clientPromise;
    await ses.send(new sdk.SendEmailCommand({
      FromEmailAddress: email.from,
      Destination: { ToAddresses: [email.to] },
      ...(email.replyTo ? { ReplyToAddresses: [email.replyTo] } : {}),
      Content: { Simple: { Subject: { Data: email.subject, Charset: 'UTF-8' }, Body: { Text: { Data: email.text, Charset: 'UTF-8' } } } },
    }));
  };
}

// Local development: writes each message to a text file instead of sending it.
export function logTransport(directory = '.contact-outbox') {
  return async (email) => {
    await mkdir(directory, { recursive: true });
    const file = path.join(directory, `${new Date().toISOString().replace(/[:.]/g, '-')}-${Math.random().toString(36).slice(2, 8)}.txt`);
    const replyTo = email.replyTo ? `Reply-To: ${email.replyTo}\n` : '';
    await writeFile(file, `From: ${email.from}\nTo: ${email.to}\n${replyTo}Subject: ${email.subject}\n\n${email.text}\n`);
    console.log(`[contact] message written to ${file}`);
  };
}

// Local development: simulates the email provider being down.
export function failTransport() {
  return async () => {
    const error = new Error('Simulated email delivery failure');
    error.name = 'SimulatedSendFailure';
    throw error;
  };
}
