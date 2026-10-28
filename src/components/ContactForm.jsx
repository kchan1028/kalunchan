import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from './Icons';
import { person } from '../content/profile';
import { responseTime } from '../content/contact';
import { CONTACT_LIMITS, CONTACT_SOURCES, CONTACT_TOPICS, validateContact } from '../../serverless/contact/contact.mjs';
import { track } from '../track';

// The endpoint is a public URL (not a secret), written to .env.production.local by serverless/contact/deploy.sh.
// Without it a production build leaves the form out. Local development posts to `npm run contact:dev`.
const base = (import.meta.env.VITE_CONTACT_ENDPOINT || (import.meta.env.DEV ? 'http://localhost:8787' : '')).replace(/\/$/, '');
export const contactEndpoint = base ? `${base}/contact` : '';

const LABELS = { name: 'Name', email: 'Email', company: 'Company', role: 'Role', location: 'Location expectation', source: 'How did you find me?', topic: 'What it’s about', message: 'Message' };
const LIMIT = CONTACT_LIMITS.message.toLocaleString('en-US');

const newSubmissionId = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`);

// Posts to the contact Lambda (serverless/contact). Without JavaScript the browser posts the form itself and the
// Lambda redirects back to /contact/#message-sent or #message-not-sent, which the :target notices below answer.
// variant="leadership" is the hiring form: topic fixed, only name and email required, its own ids and notices.
export default function ContactForm({ variant = 'general' }) {
  const lead = variant === 'leadership';
  const idp = lead ? 'lead' : 'contact';
  const notice = lead ? 'leadership' : 'message';
  const formRef = useRef(null);
  const summaryRef = useRef(null);
  const failureRef = useRef(null);
  const sentRef = useRef(null);
  const meta = useRef({ startedAt: '', submissionId: '' });
  const again = useRef(false);
  const [enhanced, setEnhanced] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [count, setCount] = useState(0);

  const resetMeta = () => {
    meta.current = { startedAt: String(Date.now()), submissionId: newSubmissionId() };
  };

  // Browser validation stays on without JavaScript; once hydrated, the error summary and inline errors take over.
  // A ?topic= link from another page (e.g. /contact/?topic=mentorship#start) preselects the topic.
  useEffect(() => {
    resetMeta();
    setEnhanced(true);
    if (lead) return;
    const topic = new URLSearchParams(window.location.search).get('topic');
    const select = formRef.current?.elements.namedItem('topic');
    if (select && CONTACT_TOPICS.some((t) => t.value === topic)) select.value = topic;
  }, []);

  useEffect(() => {
    if (status === 'sent') sentRef.current?.focus();
    else if (status === 'failed') failureRef.current?.focus();
    else if (status === 'idle' && again.current) {
      again.current = false;
      formRef.current?.elements.namedItem('name')?.focus();
    }
  }, [status]);

  useEffect(() => {
    if (Object.keys(errors).length) summaryRef.current?.focus();
  }, [errors]);

  const onInput = (event) => {
    if (event.target.name === 'message') setCount(event.target.value.length);
  };

  async function onSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const found = validateContact(values).errors;
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('idle');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...values, ...meta.current }),
        signal: AbortSignal.timeout?.(20000),
      });
      const payload = await response.json().catch(() => ({}));
      if (response.ok && payload.ok) {
        track('contact_submit', values.topic === 'leadership' ? 'leadership' : 'consulting');
        setStatus('sent');
        return;
      }
      if (response.status === 422 && payload.errors) {
        setErrors(payload.errors);
        setStatus('idle');
      } else {
        setStatus('failed');
      }
    } catch {
      setStatus('failed');
    }
  }

  const sendAnother = () => {
    resetMeta();
    setErrors({});
    setCount(0);
    again.current = true;
    setStatus('idle');
  };

  // Links in the error summary move focus to the field, not just scroll to it.
  const focusField = (event) => {
    const target = formRef.current?.querySelector(event.currentTarget.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.focus();
  };

  if (status === 'sent') {
    return (
      <div className="cform cform--sent">
        <h3 className="cform__title" tabIndex={-1} ref={sentRef}>Thanks. Your message is on its way.</h3>
        <p className="cform__lead">{responseTime}</p>
        <p className="cform__lead">If you’re waiting for a reply, check your spam folder, or <a href={person.linkedin} target="_blank" rel="me noopener">message me on LinkedIn</a>{person.email && <> or email <a href={`mailto:${person.email}`}>{person.email}</a></>}.</p>
        <button className="link-arrow cform__again" type="button" onClick={sendAnother}><span>Send another message</span> <ArrowRight /></button>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;
  const sending = status === 'sending';
  const describe = (name, hint) => [hint && `${idp}-${name}-hint`, errors[name] && `${idp}-${name}-error`].filter(Boolean).join(' ') || undefined;
  const control = (name, hint) => ({
    id: `${idp}-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': describe(name, hint),
  });
  const error = (name) => errors[name] && (
    <p className="cform__error" id={`${idp}-${name}-error`}><span className="cform__error-label">Error:</span> {errors[name]}</p>
  );

  return (
    <form ref={formRef} className="cform" action={contactEndpoint} method="post" noValidate={enhanced} onSubmit={onSubmit} onInput={onInput} aria-labelledby={`${idp}-form-title`}>
      <h3 id={`${idp}-form-title`} className="cform__title">{lead ? 'Tell me about the role' : 'Send a note'}</h3>
      <p id={`${notice}-sent`} className="cform__notice" tabIndex={-1}>Thanks. Your message is on its way. {responseTime}</p>
      <p id={`${notice}-not-sent`} className="cform__notice cform__notice--error" tabIndex={-1}>Your message didn’t go through. Check every field is filled in and try again, or <a href={person.linkedin} target="_blank" rel="me noopener">message me on LinkedIn</a>{person.email && <> or email <a href={`mailto:${person.email}`}>{person.email}</a></>}.</p>

      {errorCount > 0 && (
        <div className="cform__summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <h4>{errorCount === 1 ? 'Please fix 1 thing' : `Please fix ${errorCount} things`}</h4>
          <ul>
            {Object.entries(errors).map(([name, message]) => (
              <li key={name}><a href={`#${idp}-${name}`} onClick={focusField}>{LABELS[name] ?? name}</a>: {message}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="cform__fields">
        <div className="cform__field">
          <label htmlFor={`${idp}-name`}>{LABELS.name}</label>
          <input {...control('name')} type="text" autoComplete="name" maxLength={CONTACT_LIMITS.name} required />
          {error('name')}
        </div>
        <div className="cform__field">
          <label htmlFor={`${idp}-email`}>{LABELS.email}</label>
          <input {...control('email', true)} type="email" inputMode="email" autoComplete="email" autoCapitalize="off" spellCheck="false" maxLength={CONTACT_LIMITS.email} required />
          <p className="cform__hint" id={`${idp}-email-hint`}>So I can write back.</p>
          {error('email')}
        </div>
        <div className="cform__field">
          <label htmlFor={`${idp}-company`}>{LABELS.company} <span className="cform__optional">(optional)</span></label>
          <input {...control('company')} type="text" autoComplete="organization" maxLength={CONTACT_LIMITS.company} />
          {error('company')}
        </div>
        {lead ? <>
          <div className="cform__field">
            <label htmlFor="lead-role">{LABELS.role} <span className="cform__optional">(optional)</span></label>
            <input {...control('role')} type="text" autoComplete="off" maxLength={CONTACT_LIMITS.role} />
            {error('role')}
          </div>
          <div className="cform__field">
            <label htmlFor="lead-location">{LABELS.location} <span className="cform__optional">(optional)</span></label>
            <input {...control('location', true)} type="text" autoComplete="off" maxLength={CONTACT_LIMITS.location} />
            <p className="cform__hint" id="lead-location-hint">Remote, hybrid or on-site, and where.</p>
            {error('location')}
          </div>
          <div className="cform__field">
            <label htmlFor="lead-source">{LABELS.source} <span className="cform__optional">(optional)</span></label>
            <select {...control('source')} defaultValue="">
              <option value="">Choose one</option>
              {CONTACT_SOURCES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
            {error('source')}
          </div>
          <input type="hidden" name="topic" value="leadership" />
          <input type="hidden" name="form" value="leadership" />
        </> : (
          <div className="cform__field">
            <label htmlFor="contact-topic">{LABELS.topic}</label>
            <select {...control('topic')} defaultValue="" required>
              <option value="" disabled>Choose one</option>
              {CONTACT_TOPICS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            {error('topic')}
          </div>
        )}
        <div className="cform__field cform__field--wide">
          <label htmlFor={`${idp}-message`}>{LABELS.message}{lead && <> <span className="cform__optional">(optional)</span></>}</label>
          <textarea {...control('message', true)} rows={lead ? 5 : 7} maxLength={CONTACT_LIMITS.message} required={!lead} />
          <p className="cform__hint" id={`${idp}-message-hint`}>{count ? `${count.toLocaleString('en-US')} of ${LIMIT} characters.` : `Up to ${LIMIT} characters.`}</p>
          {error('message')}
        </div>
      </div>

      <div className="cform__hp" aria-hidden="true">
        <label htmlFor={`${idp}-website`}>Leave this field empty</label>
        <input id={`${idp}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'failed' && (
        <p className="cform__failure" role="alert" tabIndex={-1} ref={failureRef}>
          Your message didn’t go through. Please try again, or <a href={person.linkedin} target="_blank" rel="me noopener">message me on LinkedIn</a>{person.email && <> or email <a href={`mailto:${person.email}`}>{person.email}</a></>}.
        </p>
      )}
      <p className="cform__hint">I use what you send only to reply. <Link to="/privacy/">How I handle your message</Link>.</p>
      <button className="action cform__submit" type="submit" disabled={sending} aria-busy={sending || undefined}>
        {sending ? 'Sending…' : <>{lead ? 'Send' : 'Send message'} <ArrowRight /></>}
      </button>
    </form>
  );
}
