import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Companion to the before-and-after-AI post, about interfaces. Facts come from
// the founder story (who the customers were, the reseller channel), the
// founding post (KC as the UX designer and the support desk), KC's own notes
// (phone menus, PWAs and AMP at the publishing platform), the public-service
// case study (WCAG and security gates), the smog check and Omnium projects,
// and this site's own at-a-glance figure. Company stays unnamed, no years.

export const toc = [
  ['designer-by-default', 'Designer by default'],
  ['user-in-my-head', 'The user in my head'],
  ['later', 'Readers, residents, drivers'],
  ['today', 'How I design now'],
  ['hasnt-changed', 'What hasn’t changed'],
  ['still-designing', 'Why I still design'],
];

export default function Body() {
  return (
    <>
      <section id="designer-by-default" aria-labelledby="designer-by-default-h">
        <h2 id="designer-by-default-h" className="post__h2">The designer, by default</h2>
        <p>At my first company there was no designer to hand a screen to, so the screens were mine. The signup form, the payment flow, the dashboard our resellers ran their businesses from, the mobile apps. Some of my interfaces had no screen at all. A phone menu is user experience with no pixels, and people get lost in one just as easily.</p>
        <p>My usability lab was the support line, because I answered it. A customer couldn’t find the button I was sure was obvious. Another gave up halfway through a form and called instead. I wrote about building everything myself in the previous post, and design was the part of that job I was least prepared for. I learned it the way I learned networking: by getting it wrong in front of a paying customer and fixing it that night.</p>
      </section>

      <section id="user-in-my-head" aria-labelledby="user-in-my-head-h">
        <h2 id="user-in-my-head-h" className="post__h2">The user in my head was me</h2>
        <p className="post__answer">The biggest design mistakes I made were assumptions I didn’t know I was making. Many of our customers were immigrants, many were underbanked, and a lot of them dealt with money, identity and technology differently from the people who usually design software. A form that assumed a credit card, a stable address, a name that fits in two fields, fluent English and a fast connection on a recent device turned real customers away, and nobody noticed, because the customers who were turned away never showed up in the data.</p>
        <p>The reseller channel made it harder. Businesses sold our service in their own communities and ran on our hosted platform, so they needed tools to run a business, and their customers needed the service to keep working for people who trusted the reseller, not us. I wrote more about <Link to="/writing/building-a-startup-from-idea-to-acquisition/#customers">building for people the system wasn’t designed for</Link> in the founder story. The lesson I took from it predates software for me. At my family’s florist and restaurant, the shop had to fit how customers actually bought things, and a screen is no different.</p>
      </section>

      <section id="later" aria-labelledby="later-h">
        <h2 id="later-h" className="post__h2">Readers, residents and drivers</h2>
        <p>Later roles changed who the person on the other side was. As CTO of a <Link to="/experience/#publishing">media publishing platform</Link>, I finally had designers on the team, and the people using the product were readers arriving from search and social on their phones. Speed was part of the experience. We shipped progressive web apps and AMP pages because a slow article is an unread article, and the design conversation was as much about load time as layout.</p>
        <p>Government work turned the dial again. Residents may depend on a service without being able to choose an alternative. Accessibility and security need attention throughout delivery. The <Link to="/work/public-service-modernization/">public-service modernization example</Link> shows how I would include those checks in a migration.</p>
        <p>The small projects taught the same thing in miniature. On the <Link to="/projects/union-city-smog-check/">Union City Smog Check site</Link>, a driver is on a phone, close to a deadline, picking whichever nearby station they trust fastest, so calling and directions are the first two actions on every screen. The <Link to="/projects/berkeley-omnium/">Berkeley Omnium site</Link> was built for someone checking race details on the way to the start. In each case the design question was the same one the support line used to ask me: what is this person trying to do, and how fast can we let them do it?</p>
      </section>

      <section id="today" aria-labelledby="today-h">
        <h2 id="today-h" className="post__h2">How I design now</h2>
        <p className="post__answer">Today I design with an AI assistant in the loop. I describe who the page is for and the job it has to do, and it comes back with a direction and a working layout in the site’s own type, colors and spacing. I open it on a phone, say what’s wrong, and we go again. It checks contrast and keyboard order, reflows a wide figure for a narrow screen, and drafts the error state and the empty state that I would once have forgotten until a customer found them.</p>
        <p>The at-a-glance figure on my <Link to="/about/">About page</Link> was built this way. I said it had to explain who I am to a hiring manager in five seconds without reading, the assistant proposed a chart instead of a grid of cards, and we spent most of the time on where it should transpose for phones. That’s a conversation I used to have with myself at midnight, with a worse outcome.</p>
        <p>Left alone, an assistant reaches for the defaults every model reaches for: a hero, three cards with icons, a gradient, rounded everything. It looks like every other site built last month. So the first thing I do is say no to that, and the second is to hand it the constraints a designer would want, which is the audience, the device, the one action that matters, and the design system it has to live inside. Given those, it’s fast, patient and better at consistency than I am. Without them, it’s a template generator.</p>
      </section>

      <section id="hasnt-changed" aria-labelledby="hasnt-changed-h">
        <h2 id="hasnt-changed-h" className="post__h2">What hasn’t changed</h2>
        <p className="post__answer">Pixels were never the hardest part. Knowing what the person is trying to do, on which device, with how much patience, was the hard part when I drew the screens myself, and it’s still the hard part when an assistant draws them. AI makes the drawing cheap and leaves the knowing to me.</p>
        <p>It doesn’t know your user. It has read a great deal about users in general, and nothing about the reseller who runs a business from your dashboard, or the resident filling in a form they didn’t ask for. Everything it knows about them comes from what I tell it, so the work moves from drawing to explaining.</p>
        <p>Experience still shows up as noticing. I see the form that breaks at a narrow width, the name field that won’t fit a real name, the contrast that fails for someone my age, and the empty state nobody designed, before they ship. The assistant will happily produce all of those if I let it. Reviewing its screens is the same job as reviewing its code: the mistakes look plausible, and the reason I catch them is that I’ve shipped the real version and taken the call.</p>
        <p>A good-looking product is still not a business. The smog check site exists to produce a phone call, <Link to="/projects/fedpath/">FedPath</Link> exists to produce a bid or no-bid decision, and a publishing platform exists to be found and read. If a screen is beautiful and the action doesn’t happen, the screen failed.</p>
        <p>And learning is still the job. I learned accessibility properly because government work required it, and I learned design tokens because consistency across a dozen pages is hard to keep in your head. The assistant is another thing to learn to work with, and so far the most useful lesson is to give it the brief I wish someone had given me.</p>
      </section>

      <section id="still-designing" aria-labelledby="still-designing-h">
        <h2 id="still-designing-h" className="post__h2">Why I still design screens</h2>
        <p>I lead engineering teams now and I could leave the screens to other people. I still like being the person who notices the button nobody can find. Designing with an assistant means I spend less time pushing boxes around and more time on the question that mattered from the start: who is this for, and what happens when they try to use it?</p>
        <p>That question doesn’t get easier with better tools. It gets easier with every customer you have watched get stuck, and I’ve watched a lot of them.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Review the design with its users in mind.</h2>
      <div className="post__close-copy">
        <p className="lead">An assistant can draw a layout in a minute. It still can’t tell you who will use it, on what phone, with how much patience, or what they do when it fails.</p>
        <p className="post__close-principle">Build for the person using the system. Then give the assistant that person, in detail.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/writing/building-software-before-and-after-ai/" className="link-arrow"><span>The engineering half of this story</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
