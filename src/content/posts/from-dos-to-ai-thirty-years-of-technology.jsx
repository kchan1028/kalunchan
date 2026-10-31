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
  ['bbs', 'Dialing into a BBS'],
  ['irc', 'IRC and the first online communities'],
  ['aol', 'Then AOL'],
  ['broadband', 'Dial-up to DSL and cable'],
  ['two-thousands', 'The internet became everyday life'],
  ['mobile', '3G to 5G'],
  ['fiber', 'More bandwidth, different applications'],
  ['cloud', 'Renting infrastructure in the cloud'],
  ['ai', 'Now AI'],
  ['decades', 'The changes overlapped'],
  ['keep-learning', 'Learning with AI'],
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
        <p>Today we complain when a page takes three seconds to load. We expect video to stream instantly, the phone to have internet everywhere, and an AI to answer in seconds. I remember when getting online meant dialing a phone number, listening to a modem scream at another modem, and hoping nobody in the house picked up the extension. I looked forward to it.</p>
        <p>My first computers were the Intel 286, then a 386, then a 486, and the operating system was DOS. You typed commands to move between directories, start a program and manage files, and you learned the commands because there was no other way in. Then Windows 3.1 arrived and the same machine felt like a different object. With windows, icons and a mouse, more of the work was visible on screen. You could get started without memorizing as many commands.</p>
        <p>I was still in high school and already working, and I learned about computers whenever I could get time on one. There was no video tutorial for the problem in front of you. When something didn’t work, you read the manual, asked someone who knew more, or spent hours trying things until one of them worked. I think that is where my approach to technology was set. You get comfortable troubleshooting when troubleshooting is the only way forward, and I have been <Link to="/writing/you-dont-need-to-remember-everything/">looking things up ever since</Link>.</p>
      </section>

      <section id="bbs" aria-labelledby="bbs-h">
        <h2 id="bbs-h" className="post__h2">Before I was on the internet, I dialed into BBSs</h2>
        <p className="post__answer">A Bulletin Board System (BBS) was a computer you dialed into directly with a modem, one caller per phone line. Once connected you could read and post messages, download files, join discussions and sometimes chat with whoever else was on. You usually navigated text menus rather than web pages. You dialed one particular system, and if its lines were busy you waited for someone to hang up.</p>
        <p>I was still in high school when I started dialing into them, and I spent a lot of time on them, mostly chatting. The technology was interesting, but the part that got me was simpler than that: I was talking to someone who was not in the room, or the building, or the city. Today that is the most ordinary thing in the world. At the time it was astonishing. A computer had stopped being a machine for running programs and playing games and had become a way to reach people. I was hooked. It made me curious about computers, about networks, and about how people communicate through them. My career came later, starting on a helpdesk, but a lot of it has gone into building ways for people to reach each other.</p>
      </section>

      <section id="irc" aria-labelledby="irc-h">
        <h2 id="irc-h" className="post__h2">IRC, mIRC and the first online communities</h2>
        <p>Before I finished high school, internet access became easier to get, and Internet Relay Chat opened a bigger room. I used mIRC on Windows. IRC was channels: you joined one for technology, gaming, a hobby or nothing in particular, and talked with people from other cities and countries. The conversation came from whoever was in the channel at the time.</p>
        <p>It had its own problems. Anyone who spent time there remembers channel operators, bots, and arguments that went on far longer than they deserved. It was still fun, and the needs it served have not changed. Discord, Slack and every messaging product since do the same basic job. The interface changed and the infrastructure changed. People still want to talk, share what they know and belong somewhere.</p>
      </section>

      <section id="aol" aria-labelledby="aol-h">
        <h2 id="aol-h" className="post__h2">AOL made getting online easier</h2>
        <p>For a lot of people, America Online was their introduction to being online. Its software made connecting and finding things to do much easier, with email, chat rooms and other services in one place. AOL’s own service and the wider internet were different things, though they could feel like the same thing to a new user. I spent more time on IRC and mIRC myself.</p>
        <p>What stayed with me was how much the interface mattered. The internet already existed, but AOL gave people a way in without requiring them to learn the networking first. I have seen that pattern throughout my career: making a technology easier to use changes who can participate.</p>
      </section>

      <section id="broadband" aria-labelledby="broadband-h">
        <h2 id="broadband-h" className="post__h2">From dial-up to DSL and cable: the internet finally got faster</h2>
        <p>Dial-up tied up the phone line. Large downloads took planning, and a dropped connection could mean starting over. DSL and cable made an always-on connection practical for more households. Downloading software and using richer websites became less of a chore, and streaming media became more usable as speeds improved.</p>
        <p>I stopped thinking about getting online as a separate activity. The connection was simply there when I needed it. That made new businesses possible, moved services online that could not have survived dial-up, and let software assume a connection. I ended up working on the networks, telecom systems and software that depended on exactly that assumption, which gave me a strange double view of the period: a user delighted by the speed, and an engineer learning what it took to keep the speed up.</p>
      </section>

      <section id="two-thousands" aria-labelledby="two-thousands-h">
        <h2 id="two-thousands-h" className="post__h2">Open source made more of the software available</h2>
        <p>By then email was everywhere, websites were real applications, and online businesses were growing fast. My own work moved into telecommunications, networking and Voice over IP. We were building services that carried phone calls over IP networks instead of relying entirely on the telephone system, with Asterisk, SIP, Linux servers and a lot of network equipment. I have written about what that <Link to="/writing/open-source-voip-distributed-systems-lessons/">open-source VoIP stack taught me</Link>.</p>
        <p>Open source changed what a small company could afford to attempt. Linux and Asterisk gave us a foundation we could inspect, modify and learn from. We still had to integrate the pieces, write the business logic and keep the platform running, but we did not have to build the operating system or the voice engine first. As computing became cheaper and internet connections improved, more of the budget could go toward the product.</p>
        <p>We were also writing <Link to="/writing/voip-apps-for-nokia-phones-before-the-iphone/">mobile VoIP apps for Nokia phones</Link> in C++, before smartphones were what they are now. The devices had little processing power, the mobile networks were slow and metered, and reliable internet was not something everyone could assume. Much of our work went into handling those limits. Better devices and networks later removed some of them, though reliable calls still needed careful engineering.</p>
      </section>

      <section id="mobile" aria-labelledby="mobile-h">
        <h2 id="mobile-h" className="post__h2">From 3G to 5G: the internet moved into our pockets</h2>
        <p>Mobile networks changed just as much. A phone went from a device for calls and texts to a computer in your pocket. 3G made mobile internet usable. 4G made video, apps and real-time services part of an ordinary day. 5G adds capacity and, in the right conditions, much lower latency.</p>
        <p>Think about what a phone does now: navigation, video, meetings, banking, remote work, conversations across the world, and increasingly a direct line to an AI. Every one of those would have sounded like science fiction to me in front of a 386 running DOS. Most of them would have sounded unlikely in front of the Nokia app we shipped.</p>
      </section>

      <section id="fiber" aria-labelledby="fiber-h">
        <h2 id="fiber-h" className="post__h2">More bandwidth made different applications practical</h2>
        <p>DSL and cable felt fast after dial-up. Fiber later brought gigabit and multi-gigabit connections to more homes and offices, while cable networks continued to improve too. Availability still varies. Where the bandwidth is available, video calls, large downloads and cloud applications can run together in ways I would not have expected on my first modem.</p>
        <p>Our expectations rise to meet the capacity. When connections get faster we do not run the same applications faster and call it a day. We invent new ones that need the extra bandwidth, those become normal, and then we ask for more. I have watched that cycle run three or four times now, and I expect to watch it again.</p>
      </section>

      <section id="cloud" aria-labelledby="cloud-h">
        <h2 id="cloud-h" className="post__h2">Cloud changed how we paid for infrastructure</h2>
        <p>The way we built and ran software changed too. Early in my career, deploying infrastructure meant physically installing servers, configuring switches, routers and firewalls, and maintaining the equipment in a data center. I have done that work, including <Link to="/writing/building-a-startup-from-idea-to-acquisition/#zero-to-one">racking and cabling the servers for my own company</Link>, and I remember how many things could go wrong between the loading dock and a working service.</p>
        <p>Cloud services were already emerging in the previous decade, and became a much larger part of how we built systems in the 2010s. We could rent computing capacity without buying and installing the machines first. Infrastructure as code, containers and delivery pipelines developed alongside that shift. They solved different problems, but together they reduced much of the setup and deployment work.</p>
        <p>The underlying problems did not go away. You still need networking, security, monitoring, and an understanding of how your applications talk to each other. What changed is the tooling and the amount of automation around those problems. When I look at modern DevOps practice I think of the <Link to="/writing/devops-from-expect-scripts-to-ai-agents/">shell and Expect scripts I wrote to automate network deployments</Link> years ago. The goal then and now was making systems reliable and taking repetitive work off people.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">AI is making software easier to create</h2>
        <p>Since the DOS days I have gone from writing software to building systems and leading engineering teams. Now I can describe what I want to build and an AI assistant will draft code, explain an unfamiliar system or help me troubleshoot. For some tasks, work that took days takes hours. For others, checking and correcting the output takes longer than I expected.</p>
        <p>That makes software creation accessible to people who might never have started with a programming language. They can try an idea and get something working. Turning that experiment into a service people depend on still requires understanding the data, security, failure cases and cost. The assistant can help investigate those things, but someone has to check the answers. I wrote about how it changed my own work in <Link to="/writing/building-software-before-and-after-ai/">building software before and after AI</Link>.</p>
        <p>AI lowers another barrier: the amount of implementation work needed to get started. As that work gets easier, I spend more of my time deciding what is worth building and whether the result is sound.</p>
      </section>

      <section id="decades" aria-labelledby="decades-h">
        <h2 id="decades-h" className="post__h2">The changes overlapped</h2>
        <Decades />
        <p>These technologies overlapped, and adoption varied depending on where you lived and what you could afford. Each generation lowered some barrier to entry while leaving other problems for us to solve. A small team could attempt more than it could before, and people found uses for the tools that their creators had not planned.</p>
      </section>

      <section id="keep-learning" aria-labelledby="keep-learning-h">
        <h2 id="keep-learning-h" className="post__h2">Use the assistant to learn the system</h2>
        <p>My concern is what happens when a developer can produce working code without understanding much of it. I learned by reading manuals, troubleshooting networks and following failures through systems I had to keep running. Those experiences gave me something to compare a proposed solution against. If an assistant handles every difficult step, a newer engineer may miss the chance to build that understanding.</p>
        <p>I think AI can help with that learning if we use it deliberately. Ask it to explain why the code works, follow the request through the system, and check the explanation against documentation and experiments. Try changing an assumption and see what breaks. A passing test is useful, but I still want the engineer to explain what it proves and what it leaves unchecked. I have gone from DOS to cloud infrastructure and AI, and understanding how systems behave has remained useful through every change.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What I want to learn next</h2>
      <div className="post__close-copy">
        <p className="lead">When I was dialing into BBSs, I could not have pictured the voice platforms or cloud systems I would later build. I expect my view of AI is just as incomplete.</p>
        <p className="post__close-principle">For now, I want to use it to understand unfamiliar systems and try ideas that used to take too much time.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
