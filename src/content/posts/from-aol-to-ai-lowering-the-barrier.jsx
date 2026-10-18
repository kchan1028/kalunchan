import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// Each technology wave lowered a different barrier and changed who could take part. Source: KC's brief (Oct 2026).
// Career facts from profile.md and earlier posts: 20+ years (site-wide figure; the brief said 25+); BBS and IRC over
// AOL; co-founded platform on open-source VoIP (Asterisk, OpenSIPS); racked and cabled its servers, then moved to cloud
// regions for cost and geo routing; a startup's mobile app on a LAMP backend; media publisher re-platformed to Rails;
// builds FedPath and Useful Little Tools with an AI assistant. Researched, checked 2026-10-18: AOL sold as the service
// for people unfamiliar with computers, tens of millions of subscribers (Wikipedia: AOL); Michael Kunze named LAMP in
// a German computer magazine, late 1990s (Wikipedia: LAMP); S3 launched before EC2, mid-2000s (AWS News Blog);
// Anthropic skills study via post 703. No visible years (audit), so decades only. Possibilities are labelled as such.

export const metadata = {
  slug: 'from-aol-to-ai-lowering-the-barrier',
  title: 'From AOL to AI: How Building Software Became More Accessible',
  shortTitle: 'From AOL to AI',
  seoTitle: 'From AOL to AI: How Technology Keeps Lowering the Barrier',
  description:
    'AOL, open source, the cloud and now AI each lowered a barrier and changed who could build software. What AI may enable next, and the fundamentals to keep.',
  teaser:
    'AOL made getting online easier. Open source and cloud services helped small teams build. AI opens another door, while raising questions about how developers learn.',
  dek:
    'I’ve worked through the move from carrier networks and physical servers to cloud infrastructure and AI. Each shift made some part of building easier. I’m interested in what more people will create with AI, and how we keep learning as the tools do more of the work.',
  summary:
    'How AOL made getting online easier, open source gave small teams a foundation, and faster networks and cloud services reduced the work of launching a product. How AI extends that accessibility, why developers still need practice investigating failures, and how engineering leaders can support learning while using AI. Possible applications are discussed as ideas to explore, not predictions.',
  topics: ['AI', 'Engineering judgment', 'Leadership'],
  related: [
    { to: '/writing/from-dos-to-ai-thirty-years-of-technology/', label: 'From DOS to AI: the same decades from the user’s side' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything' },
    { to: '/writing/ai-learning-curve-future-of-work/', label: 'AI is great, but not everyone is ready to use it yet' },
    { to: '/writing/how-i-learn-faster-with-ai/', label: 'How I learn faster with AI' },
    { to: '/writing/speed-vs-quality-software-engineering/', label: 'Match the process to the risk of the change' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  minutes: 9,
  keywords: [
    'evolution of software development',
    'AOL to artificial intelligence',
    'history of technology innovation',
    'open source and startups',
    'AI impact on software engineers',
    'AI coding and developer fundamentals',
    'future of software engineering',
    'AI and engineering leadership',
    'will AI replace programming skills',
  ],
  about: [
    { '@type': 'Thing', name: 'History of software engineering', sameAs: 'https://en.wikipedia.org/wiki/History_of_software_engineering' },
    { '@type': 'Thing', name: 'Artificial intelligence', sameAs: 'https://en.wikipedia.org/wiki/Artificial_intelligence' },
    { '@type': 'Thing', name: 'Software engineering', sameAs: 'https://en.wikipedia.org/wiki/Software_engineering' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'AOL', sameAs: 'https://en.wikipedia.org/wiki/AOL' },
    { '@type': 'Thing', name: 'LAMP (software bundle)', sameAs: 'https://en.wikipedia.org/wiki/LAMP_(software_bundle)' },
    { '@type': 'Thing', name: 'Open-source software', sameAs: 'https://en.wikipedia.org/wiki/Open-source_software' },
    { '@type': 'Thing', name: 'Ruby on Rails', sameAs: 'https://en.wikipedia.org/wiki/Ruby_on_Rails' },
    { '@type': 'Thing', name: 'Cloud computing', sameAs: 'https://en.wikipedia.org/wiki/Cloud_computing' },
    { '@type': 'Organization', name: 'Amazon Web Services', sameAs: 'https://en.wikipedia.org/wiki/Amazon_Web_Services' },
    { '@type': 'Thing', name: 'Abstraction (computer science)', sameAs: 'https://en.wikipedia.org/wiki/Abstraction_(computer_science)' },
  ],
  // Emitted as JSON-LD citations (site.js).
  sources: [
    { label: 'Wikipedia: AOL', url: 'https://en.wikipedia.org/wiki/AOL' },
    { label: 'Wikipedia: LAMP (software bundle)', url: 'https://en.wikipedia.org/wiki/LAMP_(software_bundle)' },
    { label: 'AWS News Blog: Eight years and counting of cloud computing', url: 'https://aws.amazon.com/blogs/aws/eight-years-and-counting-of-cloud-computing/' },
    { label: 'Anthropic: How AI assistance impacts the formation of coding skills', url: 'https://www.anthropic.com/research/AI-assistance-coding-skills' },
  ],
  faq: [
    {
      q: 'What barrier is AI lowering in software development?',
      a: 'AI reduces the implementation work and familiarity with programming syntax needed to try an idea. Earlier tools, including website builders, already made some software accessible without programming. AI assistants extend that help to a wider range of tasks, but a working prototype still needs checking before people depend on it.',
    },
    {
      q: 'Will AI replace programming skills?',
      a: 'AI can handle much of the typing and lookup in programming. Engineers still need to understand system behavior, investigate failures and weigh security, reliability and cost. As implementation gets easier, those decisions account for more of the work I need to do myself.',
    },
    {
      q: 'Will developers forget the fundamentals because of AI?',
      a: 'Delegating every difficult step can reduce opportunities to practice debugging and reasoning about systems. That is different from looking up syntax or using an abstraction. A small study found lower immediate quiz scores among developers learning with AI, but it does not establish long-term skill loss. Developers can use AI to investigate and explain code while checking their own understanding.',
    },
    {
      q: 'What should engineering leaders do about AI-generated code?',
      a: 'Keep developing junior engineers on purpose, hold the author of every pull request accountable for understanding it, give AI-generated code the same security, testing and reliability standards as any other code, hire for reasoning and problem-solving, and match review to the risk of each change.',
    },
  ],
};

export const toc = [
  ['aol', 'AOL made getting online easier'],
  ['open-source', 'Open source gave small teams more to build on'],
  ['cloud', 'Faster internet, cheaper computing and the cloud'],
  ['ai', 'AI is lowering a different barrier'],
  ['fundamentals', 'Will developers forget the fundamentals?'],
  ['next', 'The possibilities I’m curious about'],
  ['leadership', 'What this means for engineering leadership'],
];

// ---------- Fig. 711-1: which barrier each wave lowered, and who got in ----------
const waves = [
  { wave: 'Consumer online services such as AOL', barrier: 'Getting online at all', who: 'People with no technical background' },
  { wave: 'Open source: Linux, Apache, MySQL, PHP, later Rails', barrier: 'The cost of software licenses', who: 'Startups and small teams without a large budget' },
  { wave: 'Broadband, the cloud and smartphones', barrier: 'The cost of infrastructure and distribution', who: 'Two-person teams reaching a global audience' },
  { wave: 'AI assistants', barrier: 'Implementation effort and unfamiliar programming syntax', who: 'Domain experts and nontechnical founders' },
];

function Waves() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption>
          <span className="mono">Fig. 711-1</span> Each wave lowered a different barrier, and different people got in
        </caption>
        <thead>
          <tr>
            <th scope="col">Wave</th>
            <th scope="col">Barrier it lowered</th>
            <th scope="col">Who could start building</th>
          </tr>
        </thead>
        <tbody>
          {waves.map((w) => (
            <tr key={w.wave}>
              <th scope="row">{w.wave}</th>
              <td>{w.barrier}</td>
              <td>{w.who}</td>
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
      <section id="aol" aria-labelledby="aol-h">
        <h2 id="aol-h" className="post__h2">AOL made getting online easier</h2>
        <p>I remember when getting online took work. You needed a modem, a phone line nobody else in the house wanted, the right dial-up number, and patience. I spent those years on BBSs and IRC, but for a lot of the people around me, America Online was the internet.</p>
        <p className="post__answer">Looking back, I’m struck by how often the important change was who could use the technology. Getting connected became simpler, software became available without large license bills, and starting a service no longer required buying servers. AI is making another part of the work more accessible: turning an idea into an implementation.</p>
        <p>The internet was already there. What AOL did was make being online ordinary. Steve Case <a href="https://en.wikipedia.org/wiki/AOL" target="_blank" rel="noopener noreferrer">sold AOL as the online service for people unfamiliar with computers</a>, the trial discs turned up everywhere, and the subscriber count grew into the tens of millions. People who would never have configured a modem by hand were sending email and sitting in chat rooms.</p>
        <p>AOL was one of several services that helped more people get online. As that audience grew, so did the opportunities to build businesses for it. I doubt I could have pictured the range of services we now use every day. I wrote about those decades from the user’s side in <Link to="/writing/from-dos-to-ai-thirty-years-of-technology/">From DOS to AI</Link>. Here, I’m interested in how those changes affected what a small team could build.</p>
      </section>

      <section id="open-source" aria-labelledby="open-source-h">
        <h2 id="open-source-h" className="post__h2">Open source gave small teams more to build on</h2>
        <p>Commercial licenses for operating systems, databases and server software could be a substantial expense before a company had its first customer. Linux, Apache, MySQL and PHP changed the math. A writer for a German computer magazine, Michael Kunze, gave the bundle a name in the late 1990s, <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank" rel="noopener noreferrer">LAMP</a>, to argue that free software could stand in for expensive commercial packages. Frameworks like Ruby on Rails later cut how much code a small team had to write before it had a working web application.</p>
        <p>I’ve built on that foundation for most of my career. The global communications platform I co-founded ran on <Link to="/writing/building-software-before-and-after-ai/#the-stack">open-source VoIP, with Asterisk and OpenSIPS handling the calls</Link>. I’ve shipped a startup’s <Link to="/writing/building-startups-technical-leadership/#hybrid">mobile app on a LAMP backend</Link>, and I moved a media publisher’s sites onto Rails.</p>
        <p>Open source reduced what we needed to spend on licenses and gave us code we could inspect and modify. We still needed people who understood the stack. Community help and commercial support could be available, but we remained responsible for diagnosing failures and keeping the service running.</p>
      </section>

      <section id="cloud" aria-labelledby="cloud-h">
        <h2 id="cloud-h" className="post__h2">Faster internet, cheaper computing and the cloud</h2>
        <p>Faster connections and cheaper computing made richer applications practical. Virtualization let us run several isolated systems on one physical server. Cloud services offered another option, with AWS launching storage and then rented computing capacity in the mid-2000s, starting with <a href="https://aws.amazon.com/blogs/aws/eight-years-and-counting-of-cloud-computing/" target="_blank" rel="noopener noreferrer">S3</a>. As smartphones and mobile networks improved, those applications could reach people away from a desk too. These changes overlapped; they did not arrive in a tidy sequence.</p>
        <p>I’ve done this work both ways. I racked the servers and ran the cabling for my own company, then moved the platform into cloud regions to lower our cost structure and route users to the nearest region. I wrote about how <Link to="/writing/infrastructure-costs-from-carrier-networks-to-the-cloud/#cloud">the cloud turned capital into consumption</Link>. A small team could rent the capacity it needed to try an idea, with an operating bill instead of the same upfront hardware purchase.</p>
        <p>Each of these shifts moved the work up a layer. Fewer engineers needed to configure a switch. More needed to understand distributed systems, cloud costs and failure modes in a data center they would never see.</p>
      </section>

      <section id="ai" aria-labelledby="ai-h">
        <h2 id="ai-h" className="post__h2">AI is lowering a different barrier</h2>
        <p>AI can help someone get a first implementation working before they have learned the language or framework in depth. Earlier tools, including website builders, already made some kinds of software accessible without programming. AI extends that help to a wider range of tasks, though a working prototype still needs careful checking.</p>
        <Waves />
        <p>I see it in my own work. With an AI assistant in the terminal, I <Link to="/writing/building-software-before-and-after-ai/#today">build products like FedPath and Useful Little Tools</Link> faster than I could alone, and I <Link to="/writing/how-i-learn-faster-with-ai/">learn an unfamiliar technology</Link> in days instead of weeks.</p>
        <p>Someone who runs a clinic, manages construction projects or works in federal contracting may understand a workflow better than an outside software team. An assistant can help them test an idea before they can justify hiring developers. That first version may be fragile, but it gives them something concrete to evaluate and discuss.</p>
        <p className="post__answer">The implementation may take less time, while the work of checking permissions, data handling and failure recovery still needs someone’s attention.</p>
      </section>

      <section id="fundamentals" aria-labelledby="fundamentals-h">
        <h2 id="fundamentals-h" className="post__h2">Will developers forget the fundamentals?</h2>
        <p>Abstraction has always been how this field moves forward. Most web developers have never written a TCP stack, a database storage engine or a garbage collector, and they don’t need to. I’m not worried that a new engineer can’t recite command flags. After more than 20 years <Link to="/writing/you-dont-need-to-remember-everything/">I still look things up</Link>, and memorizing syntax was never the same as understanding engineering.</p>
        <p>What worries me is losing the practice of reasoning through a problem independently. Debugging, networking, databases and security take time to understand. If the assistant handles every difficult step, a junior engineer can finish the task without learning much about the system.</p>

        <h3 className="post__h3">When AI-generated software fails in production</h3>
        <p>Consider a service that runs out of database connections. Increasing the pool might help, or it might hide a connection leak and put more pressure on the database. Someone needs to read the logs, form a hypothesis and test it. An assistant can help with that investigation, but accepting its next fix without understanding the cause can leave the underlying fault in place.</p>
        <p>There’s early evidence that the way people use AI matters. In a small randomized study by Anthropic, engineers who learned a new library with an AI assistant scored lower on a quiz afterward than those who coded by hand, with the biggest gap on debugging. Participants who sought explanations tended to score higher than those who delegated the task. That comparison was observational within the study, and the quiz measured understanding shortly after the exercise, not long-term skill development. I went through the study in <Link to="/writing/ai-learning-curve-future-of-work/#juniors">what happens to junior engineers</Link>.</p>

        <h3 className="post__h3">Use AI to understand the system</h3>
        <p>I want developers to use the assistant to explain unfamiliar code, compare approaches and investigate why a fix works. Then check that explanation against documentation or an experiment. Generating a change and understanding it are separate tasks; reviews need to make room for both. I can see how much this could have helped me when I was learning, though I would still have needed to do the work of checking my understanding.</p>
        <p className="post__answer">AI can handle much of the typing and lookup in programming. Engineers still need to understand system behavior, investigate failures and weigh security, reliability and cost. As implementation gets easier, those decisions account for more of the work I need to do myself.</p>
      </section>

      <section id="next" aria-labelledby="next-h">
        <h2 id="next-h" className="post__h2">The possibilities I’m curious about</h2>
        <p>AI feels to me a lot like the internet in the AOL years: useful, uneven, and mostly unbuilt. Predictions made from that position tend to age badly, mine included, so treat these as possibilities I’m watching.</p>
        <ul className="post__list">
          <li>Smaller teams building larger businesses, because one engineer with good judgment can cover more ground.</li>
          <li>Nontechnical founders shipping a first version themselves and hiring engineers once they’ve found demand.</li>
          <li>Industry experts building specialized applications for problems too small for a software company to notice.</li>
          <li>Business software shaped around one company’s workflow, where today a general product fits nobody exactly.</li>
          <li>Business models and industries that sound strange today, the way search advertising would have sounded to someone installing AOL from a trial disc.</li>
          <li>Engineering roles that shift toward architecture, judgment, reliability and problem-solving.</li>
        </ul>
        <p>I expect some useful ideas to come from people outside software engineering, because they encounter problems I never see. I don’t know which of those ideas will turn into lasting products or businesses.</p>
      </section>

      <section id="leadership" aria-labelledby="leadership-h">
        <h2 id="leadership-h" className="post__h2">What this means for engineering leadership</h2>
        <p className="post__answer">When writing software gets cheaper, the bottleneck may shift from writing software to understanding and trusting it. Engineering leaders are responsible for making sure AI raises a team’s engineering capability instead of replacing its critical thinking.</p>
        <p>Keep hiring and developing junior engineers, and design their learning on purpose: debugging without the assistant, explaining their own code in review, owning small pieces end to end. I wrote about <Link to="/writing/why-i-enjoy-mentoring/">why mentoring matters to me</Link>, and it matters more now.</p>
        <p>Keep accountability with people. The engineer who opens the pull request owns the change, whoever drafted it, and “the AI wrote it” doesn’t answer a review question. I think <Link to="/writing/code-review-in-the-ai-era/">code review starts with the plan</Link>, before any code exists.</p>
        <p>Require understanding before merge. If nobody on the team can explain how a change works, it isn’t ready. Knowing <Link to="/writing/recognizing-ai-generated-code/">what AI-generated code tends to get wrong</Link> helps reviewers ask better questions.</p>
        <p>Hold AI-generated code to the same security, reliability and maintainability standards as any other code. More code, faster, means more surface to protect and more to maintain.</p>
        <p>Hire for reasoning and problem-solving. Ask candidates how they would track down a failure or weigh a tradeoff, and pay less attention to what they’ve memorized. <Link to="/writing/why-hiring-good-engineers-is-so-hard/">Hiring is hard enough</Link> without testing the part AI already does well.</p>
        <p>Balance speed with quality by <Link to="/writing/speed-vs-quality-software-engineering/">matching review to the risk of each change</Link>. A copy change and a change to payments shouldn’t get the same scrutiny, whether a person or a model wrote them.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">What I want to keep exploring</h2>
      <div className="post__close-copy">
        <p className="lead">I could not have pictured my later work on voice platforms when I was dialing into BBSs. My view of what AI will make possible is probably just as incomplete. I want to keep trying it on real problems and see where it helps.</p>
        <p className="post__close-principle">As a leader, I also want the people using it to understand more of the system by the time they finish. That gives them a better starting point for whatever they build next.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Tell me what you’re building <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
