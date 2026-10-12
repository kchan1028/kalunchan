// Local stand-in for the contact Lambda: `npm run contact:dev`, then open the dev site's /contact/ page.
// Messages are written to .contact-outbox/ instead of being emailed. Set EMAIL_TRANSPORT=fail to rehearse an outage.
import http from 'node:http';
import { createHandler } from '../serverless/contact/handler.mjs';
import { memoryStore } from '../serverless/contact/store.mjs';
import { failTransport, logTransport } from '../serverless/contact/transport.mjs';

const port = Number(process.env.PORT || 8787);
const env = {
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173',
  SITE_URL: process.env.SITE_URL || 'http://localhost:5173',
  // Placeholder addresses on the reserved .test domain: nothing here is a real inbox.
  FORMS_FROM: process.env.FORMS_FROM || 'kalunchan.dev contact form <contact@forms.example.test>',
  CONTACT_TO: process.env.CONTACT_TO || 'inbox@forms.example.test',
  RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX || '5',
  RATE_LIMIT_WINDOW_SECONDS: process.env.RATE_LIMIT_WINDOW_SECONDS || '3600',
};
const send = process.env.EMAIL_TRANSPORT === 'fail' ? failTransport() : logTransport(process.env.OUTBOX_DIR || '.contact-outbox');
const handle = createHandler({ send, store: memoryStore(), env });

http.createServer(async (request, response) => {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const result = await handle({
    rawPath: new URL(request.url, `http://localhost:${port}`).pathname,
    requestContext: { http: { method: request.method, sourceIp: request.socket.remoteAddress } },
    headers: request.headers,
    body: Buffer.concat(chunks).toString('utf8'),
    isBase64Encoded: false,
  });
  response.writeHead(result.statusCode, result.headers);
  response.end(result.body ?? '');
}).listen(port, () => {
  console.log(`Contact dev server on http://localhost:${port} (POST /contact); transport: ${process.env.EMAIL_TRANSPORT === 'fail' ? 'fail' : 'log'}`);
});
