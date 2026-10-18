import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// First-person reflection from KC on hiring and managing engineers. Every
// scenario in this post is hypothetical and labelled as such on the page;
// no real candidate, hire or incident is described.

export const toc = [
  ['predicting', 'Predicting years from hours'],
  ['on-paper', 'The resume'],
  ['interviews', 'Interviews'],
  ['coding-tests', 'Coding tests'],
  ['references', 'References'],
  ['what-would-you-ask', '“What would you ask?”'],
  ['cost', 'What a bad hire costs'],
  ['good-hire-fails', 'When a good hire still fails'],
  ['managing', 'Managing is the harder half'],
  ['team', 'A team vs. talented individuals'],
  ['two-way', 'The candidate is evaluating you'],
];

export default function Body() {
  return (
    <>
      <section id="predicting" aria-labelledby="predicting-h">
        <h2 id="predicting-h" className="post__h2">We’re predicting years of work from a few hours</h2>
        <p>Most of my working life has been in software: writing code, chasing production problems at bad hours, building products, and eventually hiring and leading the people who do those things. Of everything on that list, hiring is the part I’m least confident I’ve gotten right, and I’ve done a fair amount of it.</p>
        <p className="post__answer">Hiring engineers is hard because you’re trying to predict how someone will perform over the next several years from a resume, a few conversations and maybe a coding exercise. That’s a few hours of evidence for a decision that can shape a team for a long time. Every signal we use is partial, and the person on the other side of the table is as nervous as you are tired.</p>
        <p>On a large team, a miss gets absorbed. On a team of five with a fixed budget, one wrong hire changes what the whole team can ship that year, and so does leaving the seat empty for six months while you look for someone perfect. As a founder, <Link to="/writing/building-a-startup-from-idea-to-acquisition/">every hire was a meaningful share of the payroll</Link>, and that’s part of why I think <Link to="/writing/team-size-should-influence-architecture/">team size should shape the architecture</Link> as much as the hiring plan. Neither option is comfortable. You pick with the information you have, and you find out later whether you were right.</p>
      </section>

      <section id="on-paper" aria-labelledby="on-paper-h">
        <h2 id="on-paper-h" className="post__h2">A resume is a writing sample, and not everyone is a writer</h2>
        <p>Being good at engineering and being good at describing engineering are different skills. Some excellent engineers write a flat resume because they’ve never had to sell themselves. Others have learned exactly which words a job post is fishing for.</p>
        <p>Applicant tracking systems make that gap wider. When a recruiter has several hundred applications and the first pass is a keyword filter, a candidate who spent five years running Postgres in production but wrote “relational databases” can lose to one who listed every tool they sat near. I don’t blame candidates for optimizing. I blame the filter for pretending it measures ability.</p>
        <p>When I read a resume, I look for what someone owned, how their responsibilities grew, and whether they stayed with a problem long enough to see the consequences of their decisions. A thin resume from someone who has only worked at one company for eight years tells me very little, and that’s a reason to talk to them, not a reason to pass.</p>
      </section>

      <section id="interviews" aria-labelledby="interviews-h">
        <h2 id="interviews-h" className="post__h2">Interviews measure interviewing</h2>
        <p>Some people think out loud and sound confident while doing it. Others need a minute of silence before they say anything useful, and a 45-minute slot with three strangers watching is not where they do their best thinking. Both kinds of people can be very good engineers. Only one of them interviews well.</p>
        <p>Here’s a hypothetical I find useful. A candidate fumbles a question about how they’d design a rate limiter. Long pauses, a half answer, visible frustration with themselves. The same person, dropped into a production incident where requests are timing out and nobody knows why, would be the one quietly reading logs, forming a theory and testing it while everyone else argues in the channel. The interview never gets to see that person. It sees the one who was nervous about rate limiters.</p>
        <p>I’ve stopped treating a smooth interview as strong evidence of anything other than a smooth interview. It’s one input. If someone struggles in conversation, I try to find another way to see them work, whether that’s a take-home they can do at their own pace or a pairing session on a real problem where I do some of the talking.</p>
      </section>

      <section id="coding-tests" aria-labelledby="coding-tests-h">
        <h2 id="coding-tests-h" className="post__h2">Coding tests measure one kind of engineer</h2>
        <p>Engineering has many shapes. Some developers are brilliant at building something from an empty repository. Others are at their best inside a codebase they didn’t write, working out how it fits together. Some can diagnose a production problem that has frustrated everyone else for hours. Others specialize in performance, architecture, security or keeping a legacy system alive without anyone noticing. Most roles need two or three of these, and almost none need all of them.</p>
        <p>An algorithm exercise tests one of them, and often not the one the job calls for. It also tends to test recall, and <Link to="/writing/you-dont-need-to-remember-everything/">recall is the cheapest thing an engineer brings</Link>. If the role is maintaining a ten-year-old Django application with a lot of business rules in it, a candidate who can reverse a linked list on a whiteboard is less interesting to me than one who can open an unfamiliar module and tell me what it does and what worries them about it.</p>
        <p>So before I set an assessment, I try to ask what this person will actually do in the first six months. Then I test that. For a backend role, that might be reading an existing service and finding the bug. For a frontend role, it might be a small feature in a messy component. The result tells me more than a puzzle would, and the candidate learns what the job is really like. I’ve written more about why I care about the engineer who can follow a problem across boundaries in <Link to="/writing/specialization-beyond-your-own-code/">specialization shouldn’t stop at your own code</Link>.</p>
      </section>

      <section id="references" aria-labelledby="references-h">
        <h2 id="references-h" className="post__h2">A reference comes with a manager attached</h2>
        <p>A glowing reference doesn’t guarantee anything, and a lukewarm one doesn’t mean someone is a weak engineer. Every reference is one manager’s opinion, shaped by that manager’s expectations, that team’s structure and that company’s habits.</p>
        <p>Imagine, hypothetically, an engineer who was judged slow at a company where nobody wrote tickets and every requirement arrived in a hallway conversation. Put the same engineer on a team with clear acceptance criteria and small pull requests, and they might be the most reliable person on it. The reference from the first manager would be accurate and still tell you almost nothing about how they’d do with you.</p>
        <p>I use references to understand the team someone worked in, the responsibilities they held and the work they preferred. I also ask where they needed support. Those answers help me set someone up well if I hire them. “Would you hire them again?” mostly tells me about the person answering.</p>
      </section>

      <section id="what-would-you-ask" aria-labelledby="what-would-you-ask-h">
        <h2 id="what-would-you-ask-h" className="post__h2">Why I ask “what would you ask?”</h2>
        <p>Behavioral questions, situational questions and system-design exercises became common because they get closer to judgment, which is the thing I’m actually trying to hire. Here’s the kind of prompt I like: “Your team wants to introduce Kafka because the application is getting slow. What would you want to know before agreeing?”</p>
        <p>One candidate explains Kafka well: brokers, partitions, consumer groups, the works. That tells me they know the technology. Another asks why the application is slow, whether anyone has measured it, whether Kafka addresses that cause at all, who would run it, what it would cost, and what happens to the team’s delivery while they learn it. The second candidate might know less about Kafka. They’re showing me how they make decisions, and that’s what I’ll be living with. (I’ve been on both ends of that exact conversation, and I wrote up <Link to="/writing/event-driven-architecture-kafka-tradeoffs/">the tradeoffs I actually weigh</Link>.)</p>
        <p>Scenario questions have limits too. Some people are much better at thinking through a problem quietly than at narrating their reasoning on demand, and a question like this still rewards talkers. When I notice a candidate going quiet, I try to give them the problem in writing and come back to it, or ask them to walk me through a real decision they already made, which beats one I invented on the spot.</p>
      </section>

      <section id="cost" aria-labelledby="cost-h">
        <h2 id="cost-h" className="post__h2">What a bad hire actually costs</h2>
        <p>The salary is the smallest part. The larger cost shows up in the team. Picture a small group where one person dismisses feedback, treats questions as attacks, and makes everyone else a little more careful about what they say in standup. Within a few months, people stop asking questions in the open. Reviews get shorter because nobody wants the argument. Two of your better engineers start taking recruiter calls. The code might even be fine. The team isn’t.</p>
        <p>I want to be careful here, because it’s easy to label every struggling hire a mistake. Someone who creates conflict and someone who hasn’t been given a chance to succeed can look similar from a distance. If a new engineer is floundering, I ask what we gave them first. I check the onboarding, the clarity of their tickets, and whether they received useful feedback early enough to act on it. They also need someone with time to answer questions. Some performance problems begin with what I failed to provide.</p>
      </section>

      <section id="good-hire-fails" aria-labelledby="good-hire-fails-h">
        <h2 id="good-hire-fails-h" className="post__h2">Hiring the right person doesn’t guarantee anything either</h2>
        <p>Excellent engineers struggle in badly run organizations all the time. Requirements change weekly. Tickets are a sentence long. Nobody has written down an architectural decision in years, so the reasons for everything live in two people’s heads. Developers are expected to know the whole system on day one. Feedback arrives once a year, if at all. Onboarding is a laptop, a Slack invite and a backlog.</p>
        <p>Put a great hire into that and they’ll produce roughly what everyone else produces there. Then someone will wonder what went wrong in the interview. Nothing went wrong in the interview. I’ve seen enough of this to believe that leadership quality explains more of an engineer’s output than most hiring processes do, which is why I spend so much time on <Link to="/writing/good-teams-dont-expect-everyone-to-know-everything/">clear tickets, small pull requests and recorded decisions</Link>, and why <Link to="/writing/when-everything-is-a-priority/">constant priority changes</Link> worry me more than any single hire.</p>
        <p>The question I keep asking is uncomfortable. Do we spend anything like the effort helping a new engineer succeed that we spent deciding whether to hire them? For most teams I’ve seen, including some of mine, the honest answer is no.</p>
      </section>

      <section id="managing" aria-labelledby="managing-h">
        <h2 id="managing-h" className="post__h2">Managing people is the harder half</h2>
        <p>Hiring is where the work starts. After that you’re managing a person, and people are harder than systems. A system behaves the same way given the same inputs. People don’t, and they don’t come with logs.</p>
        <p>Some engineers want autonomy and will go quiet if you check in too often. Others want more guidance than you expected and will spin for a week before they say so. Some are superb individual contributors who have no interest in mentoring, and that’s fine. Others make an entire team better through patience and explanation and never top the commit count, and that’s valuable in a way a dashboard won’t show you.</p>
        <p>The job is to notice those differences while keeping expectations fair. That means supporting someone and still giving them honest feedback. It means setting expectations clearly enough that nobody is surprised, and then holding to them. And sometimes it means admitting that a working relationship isn’t working, after you’ve genuinely tried, and handling that with as much respect as the hiring process had. I don’t find any of that easy. I find it easier than it used to be, mostly because I’ve made the mistakes already. How I try to do the mentoring part is on <Link to="/mentorship/">my mentorship page</Link>.</p>
      </section>

      <section id="team" aria-labelledby="team-h">
        <h2 id="team-h" className="post__h2">A team is not a pile of talented individuals</h2>
        <p>Put five brilliant engineers in a room and you have five brilliant engineers. You don’t have a team yet. A team needs trust, people who say what they don’t know, people who pick up the unglamorous ticket because it’s blocking someone else, and a habit of helping that doesn’t show up in anyone’s performance review.</p>
        <p>So when I hire, I try to ask what this person adds to the group rather than whether they’re the strongest individual in the pipeline. Sometimes the strongest individual is also the best addition. Sometimes the best addition is the person who will make the two quiet engineers you already have more effective.</p>
        <p>This is where “culture fit” tends to go wrong. It gets used to mean people who think like us, went to the same kinds of schools, and laugh at the same jokes. That makes a team comfortable and worse at its job. The teams I’ve been proudest of had people from different countries, different first languages and different ideas about how to build things, and they argued more than a homogeneous team would have. The arguments were the point. What they shared was a willingness to be wrong in front of each other.</p>
      </section>

      <section id="two-way" aria-labelledby="two-way-h">
        <h2 id="two-way-h" className="post__h2">The candidate is evaluating you, too</h2>
        <p>Companies put enormous effort into evaluating candidates and are often surprised when a candidate does the same back. They should. A strong engineer joining a badly run company is signing up to struggle, and the company has responsibilities in this transaction too.</p>
        <p>As a candidate, I would ask how leadership communicates a change in direction and what happens when a project goes wrong. I would also want examples of engineers taking on larger responsibilities. Specific answers tell me more than a general assurance that the culture is good.</p>
        <p>As the hiring manager, I try to answer those questions before they’re asked, including the unflattering parts. A candidate who takes the job knowing what’s broken is far more likely to stay and help fix it than one who finds out in week three.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">Supporting the person after hiring</h2>
      <div className="post__close-copy">
        <p className="lead">Resumes, interviews, coding tests, references and scenario questions are all imperfect signals, and I don’t think a perfect process exists. What I can do is remember that each one is partial, look at the whole person instead of one measurement, and stay honest about the times I’ve still been wrong.</p>
        <p className="post__close-principle">After investing time in hiring someone, I want to make sure they get clear expectations, useful feedback and a colleague with time to help them learn the system.</p>
        <p>That gives the person a fair chance to do the work we hired them for. It also gives me better information when something is not going well.</p>
        <div className="post__close-actions">
          <Link to="/leadership/" className="action">How I lead engineering teams <ArrowRight /></Link>
          <Link to="/contact/" className="link-arrow"><span>Talk about hiring or building a team</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
