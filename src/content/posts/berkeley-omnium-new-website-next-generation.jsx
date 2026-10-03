import { Link } from 'react-router';
import { cycling } from '../community';
import { person } from '../profile';
import { ArrowOut } from '../../components/Icons';

export const sponsorUrl = 'https://berkeleyomnium.com/sponsor/';

export const toc = [
  ['new-website', 'A new home for the races'],
  ['two-races', 'Two races, one weekend'],
  ['why', 'Why I keep doing this'],
  ['takes-a-community', 'It takes a community'],
  ['sponsors', 'Sponsoring the 2027 Omnium'],
  ['lasts', 'Building something that lasts'],
];

export default function Body() {
  return (
    <>
      <section id="new-website" aria-labelledby="new-website-h">
        <h2 id="new-website-h" className="post__h2">A new home for the Berkeley Omnium</h2>
        <p>I spend most of my time building software and leading engineering teams. One of the projects I care about most happens away from a computer.</p>
        <p>As we start building toward the 2027 Berkeley Omnium, we’re launching a completely new website: <a href={cycling.omnium}>berkeleyomnium.com</a>.</p>
        <p className="post__answer">I wanted the new site to do more than say when and where the races happen. It tells the story behind them: the history, the racers, the volunteers, the sponsors, the kids, and the cycling community that keeps all of it going.</p>
        <p>I built it the way I’d build any product: start with who needs it and what they need to do. Racers need race details and registration. Sponsors need to see where their support goes. Someone who has never watched a bike race needs a reason to care. You can read how the site came together in the <Link to="/projects/berkeley-omnium/">Berkeley Omnium project write-up</Link>.</p>
        <p>And we’re just getting started.</p>
      </section>

      <section id="two-races" aria-labelledby="two-races-h">
        <h2 id="two-races-h" className="post__h2">Two races. One weekend. A lot of history.</h2>
        <p>The Berkeley Omnium brings together two very different kinds of bike racing.</p>
        <dl className="post__terms">
          <div>
            <dt>Berkeley Hills Road Race</dt>
            <dd>The history and tradition of Northern California road racing, on the climbs of the Three Bears loop.</dd>
          </div>
          <div>
            <dt>Berkeley Streets Criterium</dt>
            <dd>Fast, exciting racing in Berkeley, where spectators, families, kids and the whole community can see bike racing up close.</dd>
          </div>
        </dl>
        <p>The new website brings those stories together with race videos, photography, community impact, collegiate racing, junior racing, kids events, and the people behind the races.</p>
        <p>My test for it is simple. Someone who has never experienced bike racing should be able to visit the site and understand why we’re so passionate about keeping these events alive.</p>
      </section>

      <section id="why" aria-labelledby="why-h">
        <h2 id="why-h" className="post__h2">Why I keep doing this</h2>
        <p>Bike racing gave many of us much more than fitness and competition. It teaches you how to work as a team.</p>
        <p>Sometimes your job isn’t to win. Your job might be to protect a teammate, chase down a break, help someone after a mechanical, or give up your own result so someone else has a chance.</p>
        <ul className="post__list">
          <li>You learn discipline.</li>
          <li>You learn how to win, and how to lose.</li>
          <li>You learn that improvement takes time.</li>
          <li>You learn that your individual result isn’t always the most important result for the team.</li>
        </ul>
        <p>Those lessons go far beyond cycling. It’s why I’m especially passionate about getting more juniors and young riders involved.</p>
        <p>I want young cyclists to have a place where they can race, challenge themselves, make friends, learn teamwork, build confidence, and discover what they’re capable of.</p>
        <p className="post__pull">Some may become great racers. Most won’t become professional cyclists, and that’s not the point. What they learn along the way matters much more.</p>
      </section>

      <section id="takes-a-community" aria-labelledby="takes-a-community-h">
        <h2 id="takes-a-community-h" className="post__h2">Keeping local racing alive takes a community</h2>
        <p>One thing the new website tries to show is how many people it takes to make local racing happen: volunteers, race officials, organizers, clubs, parents, sponsors, course marshals, photographers, community partners, racers, and many others working behind the scenes.</p>
        <p>A starting line doesn’t just appear on Saturday morning.</p>
        <p>It also costs money. That’s why sponsorship matters so much. It lets us think beyond paying the bills for another race weekend, toward:</p>
        <ul className="post__list">
          <li>More opportunities for juniors</li>
          <li>Support for collegiate and women’s racing</li>
          <li>More families involved</li>
          <li>A better experience for racers</li>
          <li>Resources that go back into the cycling community</li>
        </ul>
        <p>All event proceeds support six East Bay NICA teams, so a stronger race weekend means more young people riding. There’s more on that in <Link to="/community/">why I help organize Berkeley Omnium</Link>.</p>
      </section>

      <section id="sponsors" aria-labelledby="sponsors-h">
        <h2 id="sponsors-h" className="post__h2">We’re looking for 2027 Berkeley Omnium sponsors</h2>
        <p className="post__answer">As we prepare for the 2027 Berkeley Omnium, I’m looking for companies and individuals who want to be part of what we’re building. This isn’t about putting a logo on a banner. I want to work with sponsors who see value in supporting a community, creating opportunities for young athletes, and keeping grassroots bike racing alive.</p>
        <p>There are opportunities to support:</p>
        <ul className="post__list">
          <li>The Berkeley Hills Road Race</li>
          <li>The Berkeley Streets Criterium</li>
          <li>Junior and kids racing</li>
          <li>Women’s racing</li>
          <li>Collegiate racing</li>
          <li>Prizes and community activities</li>
          <li>The overall event</li>
        </ul>
        <p>We also work with the KaiVelo Foundation, our 501(c)(3) nonprofit partner, which connects our racing community with a broader mission of supporting youth and grassroots cycling.</p>
        <p><a href={sponsorUrl} className="link-arrow"><span>See 2027 sponsorship opportunities</span> <ArrowOut /></a></p>
      </section>

      <section id="lasts" aria-labelledby="lasts-h">
        <h2 id="lasts-h" className="post__h2">Building something that lasts</h2>
        <p>One thing I’ve learned from <Link to="/leadership/">engineering leadership</Link> is that building something sustainable is rarely about one person.</p>
        <ol className="post__steps">
          <li>You build a good team.</li>
          <li>You share what you know.</li>
          <li>You give people opportunities.</li>
          <li>You help others step up.</li>
        </ol>
        <p>Eventually, you want the next group to be capable of doing even more than you did. It’s the same idea behind how I <Link to="/mentorship/">mentor engineers</Link>, and I think cycling works the same way.</p>
        <p>The goal isn’t simply to organize another successful race. It’s to make sure there are kids discovering cycling today who will still be riding, racing, volunteering, mentoring, organizing and giving back 10 or 20 years from now.</p>
        <p>That’s the impact I want Berkeley Omnium to have. It’s also why I wanted to build a better website: to give the history, people, sponsors, volunteers and next generation behind these races a place to tell their story.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Check out the new BerkeleyOmnium.com</h2>
      <div className="post__close-copy">
        <p className="lead">The site is live, and we’ll keep adding stories, photos, videos and history as we build toward 2027.</p>
        <ol className="post__close-list">
          <li>Raced Berkeley Hills or Berkeley Streets? Send me your old photos, videos and stories.</li>
          <li>Want your company to sponsor the 2027 Berkeley Omnium? Let’s talk.</li>
          <li>Know someone who might help support the next generation of cyclists? Pass this along.</li>
        </ol>
        <p>Let’s keep local bike racing going, and make sure the next generation gets the same chance to discover it that we did.</p>
        <div className="post__close-actions">
          <a href={cycling.omnium} className="action">Visit berkeleyomnium.com <ArrowOut /></a>
          <a href={sponsorUrl} className="link-arrow"><span>Sponsorship opportunities</span> <ArrowOut /></a>
          <a href={person.linkedin} className="link-arrow" rel="me noopener" target="_blank"><span>Message me on LinkedIn</span> <ArrowOut /></a>
        </div>
      </div>
    </>
  );
}
