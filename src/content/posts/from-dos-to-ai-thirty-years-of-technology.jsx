import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Personal technology journey, rewritten from KC's own draft. Facts from that
// draft: 286/386/486 and DOS, Windows 3.1, still in high school and already
// working, BBSs, IRC and mIRC (used them more than AOL), dial-up to DSL and
// cable, VoIP and Nokia C++ work, 3G to 5G, fiber, cloud, AI. Roles and
// employers are not tied to decades (career dates stay private). Decades are
// written as "1990s" etc., which the audit allows; no specific years.

export const toc = [
  ['nineties', 'When a 486 was a big deal'],
  ['bbs', 'Before the internet, the BBS'],
  ['irc', 'IRC and the first online communities'],
  ['aol', 'Then AOL'],
  ['broadband', 'Dial-up to DSL and cable'],
  ['two-thousands', 'The internet became everyday life'],
  ['mobile', '3G to 5G'],
  ['fiber', 'Fast is never fast enough'],
  ['cloud', 'Everything moved to the cloud'],
  ['ai', 'Now AI'],
  ['decades', 'Every ten years'],
  ['keep-learning', 'Keep learning'],
];

const decades = [
  { when: '1990s', tech: 'DOS, Windows 3.1, 286 to 486 PCs, BBSs, dial-up modems, IRC, the first web services', me: 'Learning on whatever machine I could get time on, then working the helpdesk and support lines' },
  { when: '2000s', tech: 'DSL and cable broadband, Wi-Fi, online business, VoIP, phones that could run software', me: 'Operating carrier networks, then building voice platforms and the mobile apps that sat on them' },
  { when: '2010s', tech: 'Smartphones everywhere, 4G, cloud computing, social media, streaming', me: 'Moving platforms from racks I cabled myself into cloud regions, and leading the teams that ran them' },
  { when: '2020s', tech: 'Fiber to the home, 5G, AI assistants, automation that writes code', me: 'Building products and government systems with an AI assistant in the terminal' },
];

function Decades() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption>
          <span className="mono">Fig. 681-1</span> What changed each decade, and what I was doing while it changed
        </caption>
        <thead>
          <tr>
            <th scope="col">Decade</th>
            <th scope="col">What arrived</th>
            <th scope="col">Where I was</th>
          </tr>
        </thead>
        <tbody>
          {decades.map((d) => (
            <tr key={d.when}>
              <th scope="row">{d.when}</th>
              <td>{d.tech}</td>
              <td>{d.me}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="nineties" aria-labelledby="nineties-h">
        <h2 id="nineties-h" className="post__h2">The 1990s: when a 486 was a big deal</h2>
        <p>Today we complain when a page takes three seconds to load. We expect video to stream instantly, the phone to have internet everywhere, and an AI to answer in seconds. I remember when getting online meant dialing a phone number, listening to a modem scream at another modem, and hoping nobody in the house picked up the extension. It was thrilling.</p>
        <p>My first computers were the Intel 286, then a 386, then a 486, and the operating system was DOS. You typed commands to move between directories, start a program and manage files, and you learned the commands because there was no other way in. Then Windows 3.1 arrived and the same machine felt like a different object. Windows, icons, a mouse. Computers were becoming something a person could use without a reference card.</p>
        <p>I was still in high school and already working, and I learned about computers whenever I could get time on one. There was no video tutorial for the problem in front of you. When something didn’t work, you read the manual, asked someone who knew more, or spent hours trying things until one of them worked. I think that is where my approach to technology was set. You get comfortable troubleshooting when troubleshooting is the only way forward, and I have been <Link to="/writing/you-dont-need-to-remember-everything/">looking things up ever since</Link>.</p>
      </section>

      <section id="bbs" aria-labelledby="bbs-h">
        <h2 id="bbs-h" className="post__h2">Before the internet, there was the BBS</h2>
        <p className="post__answer">A Bulletin Board System (BBS) was a computer you dialed into directly with a modem, one caller per phone line. Once connected you could read and post messages, download files, join discussions and sometimes chat with whoever else was on. There was no browser and no search. You dialed one particular system, and if its lines were busy you waited for someone to hang up.</p>
        <p>I spent a lot of time on them, mostly chatting. The technology was interesting, but the part that got me was simpler than that: I was talking to someone who was not in the room, or the building, or the city. Today that is the most ordinary thing in the world. At the time it was astonishing. A computer had stopped being a machine for running programs and playing games and had become a way to reach people. I was hooked, and I have been building ways to reach people, in one form or another, for most of my career since.</p>
      </section>

      <section id="irc" aria-labelledby="irc-h">
        <h2 id="irc-h" className="post__h2">IRC, mIRC and the first online communities</h2>
        <p>When internet access became easier to get, Internet Relay Chat opened a bigger room. I used mIRC, like most people on Windows did. IRC was channels: you joined one for technology, gaming, a hobby or nothing in particular, and talked with people from other cities and countries. There was no algorithm deciding what you saw and nothing to scroll. There were people typing.</p>
        <p>It had its own problems. Anyone who spent time there remembers channel operators, bots, and arguments that went on far longer than they deserved. It was still fun, and the needs it served have not changed. Discord, Slack and every messaging product since do the same basic job. The interface changed and the infrastructure changed. People still want to talk, share what they know and belong somewhere.</p>
      </section>

      <section id="aol" aria-labelledby="aol-h">
        <h2 id="aol-h" className="post__h2">Then AOL, and suddenly everyone was online</h2>
        <p>For a lot of people, America Online was the internet. You did not need to understand networking or configure anything. You installed the disc, dialed, and there were chat rooms, everywhere, full of people discovering they could talk to strangers. I stayed on IRC and mIRC through most of it. Old habits.</p>
        <p>What AOL showed me is something I have kept seeing throughout my engineering career. Technology does not go mainstream because it is powerful. It goes mainstream when ordinary people can use it. The internet existed long before AOL mattered. AOL put it in front of millions of people who would never have typed a modem init string, and that was the bigger change.</p>
      </section>

      <section id="broadband" aria-labelledby="broadband-h">
        <h2 id="broadband-h" className="post__h2">From dial-up to DSL and cable: the internet finally got faster</h2>
        <p>Dial-up tied up the phone line. Downloads took forever, you thought twice before starting a big one, and if the connection dropped halfway through you started over. Then DSL and cable arrived and the connection stayed up. Pages loaded. Downloading software became practical. Online games stopped stuttering, and streaming media went from a demo to something you could use.</p>
        <p>The real change was in the verb. The internet stopped being something you connected to for a while and became something that was simply there. That made new businesses possible, moved services online that could not have survived dial-up, and let software assume a connection. I ended up working on the networks, telecom systems and software that depended on exactly that assumption, which gave me a strange double view of the period: a user delighted by the speed, and an engineer learning what it took to keep the speed up.</p>
      </section>

      <section id="two-thousands" aria-labelledby="two-thousands-h">
        <h2 id="two-thousands-h" className="post__h2">The 2000s: the internet became part of everyday life</h2>
        <p>By then email was everywhere, websites were real applications, and online businesses were growing fast. My own work moved into telecommunications, networking and Voice over IP. We were building services that carried phone calls over IP networks instead of relying entirely on the telephone system, with Asterisk, SIP, Linux servers and a lot of network equipment. I have written about what that <Link to="/writing/open-source-voip-distributed-systems-lessons/">open-source VoIP stack taught me</Link>.</p>
        <p>We were also writing <Link to="/writing/voip-apps-for-nokia-phones-before-the-iphone/">mobile VoIP apps for Nokia phones</Link> in C++, before smartphones were what they are now. The devices had little processing power, the mobile networks were slow and metered, and reliable internet was not something everyone could assume. We made it work anyway. Looking back, a remarkable amount of engineering went into problems that today’s infrastructure has simply made go away.</p>
      </section>

      <section id="mobile" aria-labelledby="mobile-h">
        <h2 id="mobile-h" className="post__h2">From 3G to 5G: the internet moved into our pockets</h2>
        <p>Mobile networks changed just as much. A phone went from a device for calls and texts to a computer in your pocket. 3G made mobile internet usable. 4G made video, apps and real-time services part of an ordinary day. 5G adds capacity and, in the right conditions, much lower latency.</p>
        <p>Think about what a phone does now: navigation, video, meetings, banking, remote work, conversations across the world, and increasingly a direct line to an AI. Every one of those would have sounded like science fiction to me in front of a 386 running DOS. Most of them would have sounded unlikely in front of the Nokia app we shipped.</p>
      </section>

      <section id="fiber" aria-labelledby="fiber-h">
        <h2 id="fiber-h" className="post__h2">From DSL and cable to fiber: fast is never fast enough</h2>
        <p>DSL and cable felt unbelievably fast after dial-up. Now most people would call those connections slow. Fiber brought gigabit and multi-gigabit service to homes and offices, and we move enormous amounts of data without thinking about it: cloud applications, video calls, streaming, games, a whole workforce working from home. Fiber is not everywhere and cable still carries a lot of the internet, but the direction is not in doubt.</p>
        <p>Our expectations rise to meet the capacity. When connections get faster we do not run the same applications faster and call it a day. We invent new ones that need the extra bandwidth, those become normal, and then we ask for more. I have watched that cycle run three or four times now, and I expect to watch it again.</p>
      </section>

      <section id="cloud" aria-labelledby="cloud-h">
        <h2 id="cloud-h" className="post__h2">The 2010s: everything moved to the cloud</h2>
        <p>The way we built and ran software changed too. Early in my career, deploying infrastructure meant physically installing servers, configuring switches, routers and firewalls, and maintaining the equipment in a data center. I have done that work, including <Link to="/writing/building-a-startup-from-idea-to-acquisition/#zero-to-one">racking and cabling the servers for my own company</Link>, and I remember how many things could go wrong between the loading dock and a working service.</p>
        <p>Then cloud computing changed the question. Instead of buying servers and waiting for them to arrive, you provisioned computing through an API. Instead of configuring every machine by hand, you described infrastructure as code. AWS, Docker, Terraform and modern CI/CD pipelines changed software delivery for good.</p>
        <p>The underlying problems did not go away. You still need networking, security, monitoring, and an understanding of how your applications talk to each other. What changed is the tooling and the amount of automation around those problems. When I look at modern DevOps practice I think of the <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">shell and Expect scripts I wrote to automate network deployments</Link> years ago. Different tools, same goal: make systems reliable and take the repetitive work off people.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">The 2020s: now AI is changing everything again</h2>
        <p>I have spent more than two decades writing software, building systems and leading engineering teams. Now I can describe what I want to build and an AI assistant will draft the code, explain an unfamiliar system, write tests and help troubleshoot. Things that took days sometimes take hours.</p>
        <p>It is not perfect. It makes mistakes, some of them confident ones, and it still needs a person who understands the problem, the architecture, the security implications and whether the proposed solution makes sense for the business. With that person in the loop, the gain is large. I wrote about how it changed my own work in <Link to="/writing/building-software-before-and-after-ai/">building software before and after AI</Link>.</p>
        <p>It reminds me of DOS to Windows, dial-up to broadband, and physical servers to cloud. Each shift made some tasks easy, created work that did not exist before, and changed the skills the job needed. I do not think software engineers are going away. I do think the way we work will keep changing, which is what it has done for my whole career.</p>
      </section>

      <section id="decades" aria-labelledby="decades-h">
        <h2 id="decades-h" className="post__h2">Every ten years, the impossible becomes ordinary</h2>
        <Decades />
        <p>The transitions were never divided neatly by decade, because technology does not wait for the calendar. The pattern holds anyway. Each generation builds on the one before. The internet made online services possible. Broadband made richer applications practical. Cloud made infrastructure available to anyone with a credit card. Smartphones put all of it in everyone’s pocket. Now AI is changing how we interact with software itself, and in ten years that will look as normal as a web browser does today.</p>
      </section>

      <section id="keep-learning" aria-labelledby="keep-learning-h">
        <h2 id="keep-learning-h" className="post__h2">The most important thing I’ve learned is to keep learning</h2>
        <p>After watching this since the DOS days, the one lesson I trust is that you cannot stop learning. The technology you know today will change. The tools you rely on will be replaced. Some languages will fade, new architectures will show up, and the way we build software will keep moving. I have gone from DOS and early networking to Linux servers, telecom, web applications, cloud infrastructure, distributed systems and now AI. Some of those transitions were exciting. Some were annoying. More than once I wondered why we needed a new technology when the old one worked perfectly well, and more than once the new one turned out to be right.</p>
        <p>The fundamentals stay surprisingly steady under all of it. Experience is mostly the ability to tell a problem that is new from a familiar problem in new clothes. I still enjoy learning a new technology, I still enjoy building things, and I still get a small jolt when I find a better way to solve something. That is probably what has kept me in this field.</p>
        <p>I started on machines with a tiny fraction of the power in today’s phone. Now I talk to software and it writes software back. I cannot picture the next ten years, and I have stopped trying. Whatever impresses us today will be ordinary soon enough, and I would like to be there when it is.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Whatever impresses us today will be ordinary tomorrow</h2>
      <div className="post__close-copy">
        <p className="lead">From a 286 and a screaming modem to fiber, a phone that does everything, and an AI that writes code: every decade changed what I thought was possible.</p>
        <p className="post__close-principle">I’ve never been able to stop learning, because the tools have never stopped changing.</p>
        <p>I built some of the infrastructure that made those changes ordinary, and I am still building on whatever comes next.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
