import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Personal engineering story. Confirmed by KC: mobile VoIP apps written in C++
// for Nokia phones, first as VP of Operations at a voice services company and
// then at the company he co-founded (where iPhone and Android followed); the
// era (2005 to 2010); the customers (immigrants calling overseas). Companies
// stay unnamed. The Symbian development environment and the mobile VoIP
// considerations are described as the general environment of the time, not as
// our exact toolchain or architecture. Open with KC: target handsets, and
// whether SIP was implemented directly or through a library. Years on this
// route are owner-approved (scripts/audit-seo.py).

export const toc = [
  ['the-problem', 'The problem came before the phone'],
  ['mobile-world', 'What a phone was in those years'],
  ['symbian-cpp', 'Writing C++ for a Nokia'],
  ['voip-on-a-phone', 'Putting a VoIP service on a handset'],
  ['customers', 'Building for people who weren’t buying an iPhone'],
  ['fun', 'Why it was fun'],
  ['lessons', 'What it taught me'],
  ['then-and-now', 'Then and now'],
];

export default function Body() {
  return (
    <>
      <section id="the-problem" aria-labelledby="the-problem-h">
        <h2 id="the-problem-h" className="post__h2">The problem came before the phone</h2>
        <p>Between 2005 and 2010 I worked on VoIP services whose whole point was a cheaper call home. First at a voice services company where I ran operations, then at the company I co-founded. Most of our customers were immigrants who called family in another country every week, and an international call from a regular phone cost more per minute than they could comfortably spend. The people who made the most international calls had the least money to make them with.</p>
        <p>So the work was about access and cost: shaving the price of a minute, removing a step from placing a call, and reaching people through channels they already trusted, which for us meant resellers in their own communities and a phone menu that had to make sense to someone who had never heard of SIP.</p>
        <p>Then mobile phones got everywhere. Our customers were walking around with a Nokia in their pocket, and the question wrote itself. If the service lived inside the phone, the phone menu could go away, the account could be one tap away, and the call could go out over the internet instead of over a carrier that charged by the minute.</p>
        <p className="post__answer">We built VoIP apps for Nokia phones because that was what our customers carried. Our service made international calls cheaper for immigrants calling family overseas, and the phones in their pockets, across South America, Asia and Africa, were far more often Nokias than iPhones.</p>
      </section>

      <section id="mobile-world" aria-labelledby="mobile-world-h">
        <h2 id="mobile-world-h" className="post__h2">What a phone was in those years</h2>
        <p>It is hard to remember now how big Nokia was. Around 2007 and 2008 it sold roughly four out of every ten phones in the world, and its Symbian operating system was the most common smartphone platform until Android passed it at the end of 2010. Most of those phones were not smartphones at all. The Nokia 1100, launched in 2003, sold over 250 million units, more than any phone before or since, and it could not run an application of any kind. The phones that could run native software were the Symbian S60 models, the E-series and N-series, some with Wi-Fi from 2006.</p>
        <p>The iPhone arrived in the middle of this. Apple announced it in January 2007 and sold it from June that year, in the United States only, on one carrier, at $499 with a two-year contract. It had no third-party apps until the App Store opened in July 2008, and VoIP apps were limited to Wi-Fi until the carrier relented at the end of 2009. The first Android phone followed in October 2008. For the people we served, none of that was on the table yet.</p>
        <p>Mobile internet was the other constraint. GPRS gave you tens of kilobits per second, EDGE a bit more, and 3G existed mostly in richer cities. Data was metered, so a megabyte had a price. A Symbian phone in a capital with cheap Wi-Fi and the same phone in a town with only GPRS were, for our purposes, two different devices.</p>
      </section>

      <section id="symbian-cpp" aria-labelledby="symbian-cpp-h">
        <h2 id="symbian-cpp-h" className="post__h2">Writing C++ for a Nokia</h2>
        <p>Native code on a Nokia meant Symbian, and Symbian meant C++. Symbian C++ was its own dialect, designed for phones with tens of megabytes of memory for everything and no tolerance for a leak. Strings were descriptors instead of <code>char*</code>. Errors were “leaves” caught with a <code>TRAP</code> macro instead of exceptions, with a cleanup stack you pushed objects onto so the system could free them if a leave happened. Objects were built in two phases so a failure halfway through a constructor could not leak. Anything asynchronous, which on a phone was almost everything, went through active objects rather than threads. You could read a line of it and know whether it would leak before you ran it.</p>
        <p>The workflow was its own education. You built for an emulator on Windows with one compiler, then rebuilt for the ARM chip in the phone with another, so some bugs existed only on the device. From Symbian OS 9 onward the installer had to be signed and granted capabilities before the phone would run it. On-device debugging existed, and so did writing to a log file and reading it afterwards. The emulator was usually happy. The phone had opinions.</p>
        <p>If you have only built mobile apps with Swift, Kotlin, React Native or Flutter, the nearest comparison is embedded development with a user interface. No hot reload, no garbage collector, no store to publish through. There was you, a compiler, a cable, and a phone that would tell you, eventually, what you had got wrong.</p>
      </section>

      <section id="voip-on-a-phone" aria-labelledby="voip-on-a-phone-h">
        <h2 id="voip-on-a-phone-h" className="post__h2">Putting a VoIP service on a handset</h2>
        <p>The good news was that the hard part of the service already existed. Our platform ran on open-source VoIP: Asterisk, OpenSIPS, MediaProxy, Python business logic through AGI, and a billing system we wrote ourselves, with least-cost and geolocation routing deciding where each call went. I describe that stack in <Link to="/writing/building-software-before-and-after-ai/#the-stack">how I built software before AI</Link>. From the platform’s point of view, a phone running our app was one more SIP endpoint. It registered, it sent an invite, audio flowed over RTP, it hung up, and billing rated the call.</p>
        <p>The hard part was the stretch between the handset and the server. Every mobile VoIP app of that era, ours included, had to answer the same questions. A SIP registration has to be kept alive through the carrier’s NAT, which means sending packets often enough that the NAT doesn’t forget you, and every one of those packets wakes the radio and drains the battery. A 64 kbps codec on a GPRS connection is a conversation nobody wants to have, so you pick a low-bitrate codec and accept the quality. Jitter and packet loss were worse than anything we saw from home broadband. Signaling could succeed while the audio went nowhere, often because the data session had quietly dropped when the user walked from Wi-Fi onto cellular. And when a session died mid-call, billing still had to end the call at the right second, because a customer paying for minutes notices a minute they didn’t get.</p>
        <p className="post__answer">A mobile VoIP app in those years talked to the telecom backend the way any SIP phone did: register with the SIP proxy, set up the call, send audio over RTP, and let the server side handle routing, call records and billing. The phone-specific work was keeping that session alive on an unreliable, metered data connection without flattening the battery.</p>
        <p>Those were the partial-failure problems I wrote about in <Link to="/writing/open-source-voip-distributed-systems-lessons/">what open-source VoIP taught me about distributed systems</Link>, with a new boundary added at the worst possible place: a radio in someone’s pocket.</p>
      </section>

      <section id="customers" aria-labelledby="customers-h">
        <h2 id="customers-h" className="post__h2">Building for people who weren’t buying an iPhone</h2>
        <p>The industry spent those years staring at the iPhone, and I understand why. It became our future too, since we later shipped on iPhone and Android. But in the years this story covers, our customers were asking different questions. Could the phone they already had connect where they lived? Would the call reach their mother, and would she be able to hear them? Would it cost less than the calling card from the corner store?</p>
        <p>A Symbian app on the phone a customer already owned answered more of those questions than a beautiful app on a phone they would never buy. That was the product decision, and I still think it was right. It also meant resisting the pull to treat “developing markets” as one thing. Data prices, Wi-Fi, handset models and the carriers’ attitude to VoIP differed in each country, and sometimes in each city.</p>
        <p>I’ve written about how those customers changed my <Link to="/writing/building-a-startup-from-idea-to-acquisition/#customers">assumptions about who a user is</Link>. The Nokia work was the same lesson applied to hardware. The newest device is the one the engineers want. The right device is the one the customer has.</p>
      </section>

      <section id="fun" aria-labelledby="fun-h">
        <h2 id="fun-h" className="post__h2">Why it was fun</h2>
        <p>I remember this period fondly, and some of that is the usual glow around anything you did in your early startup days. Some of it is real. There is a specific pleasure in placing a call from a phone in your hand, watching it register on a server you racked yourself, and hearing a voice come back over a network path you can draw on a whiteboard from end to end. Most engineering doesn’t give you that.</p>
        <p>Learning Symbian was fun in the way that learning a strange language is fun. The first week you argue with it. The second week you notice that its rules exist because a phone with no swap file and a user who expects it to stay on for three days cannot afford your usual habits. By the third week you are writing cleanup-stack code without thinking about it and feeling slightly superior about memory. That habit carried into every system I built afterwards, including ones with a thousand times the memory.</p>
      </section>

      <section id="lessons" aria-labelledby="lessons-h">
        <h2 id="lessons-h" className="post__h2">What it taught me</h2>
        <p>Build for your actual customers. The newest technology is rarely the most appropriate one, and the gap between what engineers find exciting and what customers can use is where products quietly fail.</p>
        <p>Constraints shape architecture, and that is useful. Limited memory, a slow processor, a small battery and a bad network forced deliberate decisions about codecs, keepalives, buffers and what to store. Those decisions were better for having been forced.</p>
        <p>Understand the whole system. The app on the phone was the smallest piece. Signaling, media, routing, billing, carriers and the operations team that kept it running were the product. A great client on a bad backend is a bad product, and the reverse is true too.</p>
        <p>Problems outlast technology. Nobody needs a Symbian app today, and calling home is close to free. The question underneath, what does this person need and what will work where they are, is the same one I ask about a <Link to="/projects/fedpath/">federal contracting tool</Link> or a government service now.</p>
        <p>Keep learning. My career has gone through networking, Linux, telecom, backend development, mobile, cloud infrastructure and leading teams. Symbian C++ was one more thing to learn, and the next tool will be too. I made that point about <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">DevOps from Expect scripts to AI agents</Link>, and it holds here.</p>
      </section>

      <section id="then-and-now" aria-labelledby="then-and-now-h">
        <h2 id="then-and-now-h" className="post__h2">Then and now</h2>
        <p>If I were building the same thing today, I would write it in Swift and Kotlin or a cross-platform framework, with a garbage collector, hot reload and a crash reporter catching what I missed in the field. The network would be LTE or 5G nearly everywhere our customers live. The audio would go over WebRTC, with NAT traversal and echo cancellation solved by people who spent a decade on it. And I would build most of it with an AI assistant in the terminal, drafting the signaling layer while I thought about the product.</p>
        <p>Every one of those is a real improvement, and none of them removes the engineering. Battery still drains. Networks still drop. Audio still goes one way when a NAT binding expires. A billing record still has to be right to the second. The tools took care of the parts that used to take weeks. The parts that need judgment, about who the customer is and what the system has to survive, are the same parts they always were.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">We weren’t building something fashionable</h2>
      <div className="post__close-copy">
        <p className="lead">Looking back, writing VoIP apps for Nokia phones was one of the most enjoyable stretches of my engineering career.</p>
        <p className="post__close-principle">We were trying to make an affordable call home available to the people who needed it, on the phones they already had.</p>
        <p>The technology has changed almost completely since then. The satisfaction of solving a real problem for a real person with software has not changed at all.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
