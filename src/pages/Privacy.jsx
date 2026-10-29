import { Link } from 'react-router';
import TitleBlock from '../components/TitleBlock';
import { person } from '../content/profile';

// Privacy notice (CalOPPA, GDPR Art. 13, PIPEDA openness). Every statement here must match what the code does:
// serverless/contact (form, hashed IP, logs), serverless/events (click counts), the Cloudflare edge, Cloudflare Web Analytics and Google Analytics (index.html). Change the
// effective date whenever the practices described here change. The phrase is allowed in scripts/audit-seo.py.
export const PRIVACY_EFFECTIVE = 'Effective 29 October 2026';
const OPERATOR = 'Yippify';

export default function Privacy() {
  return (
    <>
      <TitleBlock section="800" title="Privacy" cells={[{ k: 'Updated', v: PRIVACY_EFFECTIVE.replace('Effective ', '') }]} />
      <div className="sheet grid page-lead">
        <p className="page-lead__claim">This site collects as little as it can: what you send through the contact form, page statistics and anonymous link counts.</p>
      </div>
      <div className="sheet grid privacy">
        <div className="privacy__body">
          <p className="label">{PRIVACY_EFFECTIVE}</p>

          <h2 className="h3">Who runs this site</h2>
          <p>kalunchan.dev is the personal site of Ka Lun Chan (KC). It is operated by {OPERATOR}, which is responsible for the personal information described here. To reach me about privacy, use the <Link to="/contact/">contact form</Link> or <a href={person.linkedin} target="_blank" rel="me noopener">message me on LinkedIn</a>.</p>

          <h2 className="h3">What I collect</h2>
          <h3 className="privacy__sub">When you use the contact form</h3>
          <ul className="ticks">
            <li>Your name, email address, company (optional), the topic you choose, and your message.</li>
            <li>A random ID for that form fill and the time you opened the form. They stop double sends and filter out automated spam.</li>
            <li>A one-way, salted hash of your IP address, used only to limit each visitor to a few messages an hour. Your IP address itself is never stored or emailed.</li>
          </ul>
          <p>Your message is emailed to my inbox. It is not kept in a database on this site.</p>
          <h3 className="privacy__sub">When you read the site</h3>
          <ul className="ticks">
            <li>Page views and page speed, through Cloudflare Web Analytics. It sets no cookies, stores nothing in your browser, and doesn’t identify you.</li>
            <li>Visits and how people move through the site, through Google Analytics. It sets first-party cookies (named <code>_ga</code>) that recognize a returning browser, and records the pages you view, roughly where you are, your device and browser, and the site that sent you. It isn’t loaded for visitors in the European Union, the wider European Economic Area, the United Kingdom, Gibraltar, Jersey, Guernsey or the Isle of Man, or if your browser sends Global Privacy Control.</li>
            <li>A count each time someone requests my résumé, opens my LinkedIn profile from this site, or sends the contact form. Each count records only which link or form was used and on which page, with no cookie, IP address, identifier or anything you typed.</li>
            <li>Standard request details such as IP address, browser and the page requested, which Cloudflare and Amazon Web Services handle to deliver the site and protect it from abuse.</li>
          </ul>
          <p>Apart from the Google Analytics cookies, which aren’t set for visitors in those places, this site sets no cookies and doesn’t use advertising or cross-site tracking. Cloudflare may set a strictly necessary security cookie if it needs to check that a visitor isn’t a bot.</p>

          <h2 className="h3">Why</h2>
          <ul className="ticks">
            <li>To read and reply to your message.</li>
            <li>To keep the form free of spam and abuse.</li>
            <li>To see which pages people read, which links they use, and whether the site loads quickly.</li>
          </ul>
          <p>Where the law asks for a legal basis, replying to you rests on your request, and spam protection and site statistics rest on legitimate interests in running a usable, secure site.</p>

          <h2 className="h3">Who else handles it</h2>
          <p>I don’t sell or share personal information, and I don’t use it for advertising. These service providers process it on my behalf:</p>
          <ul className="ticks">
            <li><strong>Amazon Web Services</strong> (United States, Oregon region): runs the contact form, sends the email and keeps the short-lived spam and rate-limit records.</li>
            <li><strong>Cloudflare</strong>: delivers the site, provides Web Analytics and keeps the link counts.</li>
            <li><strong>Google</strong>: provides Google Analytics and processes its data in the United States and other countries.</li>
            <li><strong>My email provider</strong>: holds the messages you send.</li>
          </ul>
          <p>If you write from outside the United States, your message is processed in the United States.</p>

          <h2 className="h3">How long I keep it</h2>
          <ul className="ticks">
            <li>Contact messages: up to 24 months after our last exchange, then deleted.</li>
            <li>Rate-limit hashes: expire after two hours, then are deleted automatically.</li>
            <li>Form IDs: expire after 24 hours, then are deleted automatically.</li>
            <li>Link counts: kept by Cloudflare for three months, then deleted automatically.</li>
            <li>Google Analytics data: deleted automatically under the retention setting in Google Analytics, at most 14 months.</li>
            <li>Contact form logs, which record only the outcome and never what you wrote: 30 days.</li>
          </ul>

          <h2 className="h3">Your choices</h2>
          <p>You can ask what I hold about you, ask me to correct it, or ask me to delete it. Send the request through the <Link to="/contact/">contact form</Link> or LinkedIn and I’ll answer within 30 days. Depending on where you live (for example the EU, the UK, Canada or California), you may have further rights, including the right to object and to complain to your local data protection authority.</p>

          <h2 className="h3">Do Not Track and Global Privacy Control</h2>
          <p>This site doesn’t track you across other sites and has no advertising cookies. If your browser sends Global Privacy Control, Google Analytics isn’t loaded. Do Not Track isn’t a consistent standard, so the site doesn’t change for it.</p>

          <h2 className="h3">Children</h2>
          <p>This site is for professionals and isn’t directed at children under 13. I don’t knowingly collect their information.</p>

          <h2 className="h3">Other sites</h2>
          <p>Links to LinkedIn, GitHub and other sites lead to services with their own privacy policies.</p>

          <h2 className="h3">Changes</h2>
          <p>If these practices change, I’ll update this page and the date at the top.</p>
        </div>
      </div>
    </>
  );
}
