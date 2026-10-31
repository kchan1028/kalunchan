import { useState } from 'react';
import { Link } from 'react-router';
import { person } from '../profile';
import { ArrowOut } from '../../components/Icons';

// Strava MCP guide. Setup steps, requirements and limits follow the first-party
// pages in `sources` (meta/). Strava changes its menus, so re-check those
// pages before editing any step. Tool names come from Strava's listing in
// Claude's connector directory.

const ult = person.products.find((p) => p.name === 'Useful Little Tools');
const stravaHelp = 'https://support.strava.com/en-us/articles/15401531-what-is-the-strava-mcp-connector';
const stravaFaq = 'https://support.strava.com/en-us/articles/15401526-strava-api-and-mcp-faq';
const apiPolicy = 'https://www.strava.com/legal/api_policy';
const devFaq = 'https://communityhub.strava.com/developers-knowledge-base-14/strava-api-faq-12906';
const directory = 'https://claude.com/marketplace/connectors/strava';
const claudeConnectors = 'https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities#h_f35bc1fd02';
const claudeCodeMcp = 'https://code.claude.com/docs/en/mcp';
const mcpIntro = 'https://modelcontextprotocol.io/docs/getting-started/intro';

const addCommand = 'claude mcp add --transport http strava-mcp https://mcp.strava.com/mcp';
const addUserCommand = 'claude mcp add --transport http --scope user strava-mcp https://mcp.strava.com/mcp';

export const toc = [
  ['curious', 'Why I wanted this'],
  ['what-is-it', 'What the connector is'],
  ['requirements', 'What you need'],
  ['connect', 'How to connect it'],
  ['what-happened', 'What happens when you ask'],
  ['questions', 'What to ask'],
  ['racers', 'Prompts for road racers'],
  ['conversation', 'A sample conversation'],
  ['mcp-vs-export', 'MCP vs exporting'],
  ['limits', 'What it can’t do'],
  ['privacy', 'Privacy and disconnecting'],
  ['mcp-vs-api', 'Strava MCP vs the API'],
  ['unofficial', 'Unofficial servers'],
  ['learning-mcp', 'A good way to learn MCP'],
  ['sources', 'Sources'],
];

// Fig. 657-3: one question at a time, through the connector and back.
const flows = [
  {
    label: 'Weekly volume',
    question: 'How much did I ride each week for the last six weeks?',
    tools: ['list_activities'],
    returns: 'Your rides from those six weeks, with summary numbers such as time, distance and elevation for each one.',
    answer: 'Adds up each week and tells you which weeks went up and which went down.',
  },
  {
    label: 'Easy rides',
    question: 'Are my easy rides actually easy?',
    tools: ['get_athlete_zones', 'list_activities', 'get_activity_streams'],
    returns: 'Your heart rate and power zones, your recent rides, and second-by-second heart rate and power for the rides it checks.',
    answer: 'Works out how much of each easy ride stayed in your lower zones and points out the ones that didn’t.',
  },
  {
    label: 'Bikes',
    question: 'How far have I ridden on each of my bikes?',
    tools: ['get_gear'],
    returns: 'The bikes on your Strava account and the distance Strava has logged on each.',
    answer: 'Lists each bike with its distance.',
  },
];

const recent = [
  { q: 'Show me my rides from the last four weeks.' },
  { q: 'How many hours did I ride each week?' },
  { q: 'How has my weekly volume changed over the last two months?' },
  {
    q: 'Compare this month with last month: rides, hours, distance and climbing.',
    why: 'Ask for hours as well as miles. A windy week, a hilly week and a week of flat group rides can cover the same distance and take very different amounts out of you.',
  },
];

const intensity = [
  { q: 'Which of my rides in the last month had the highest training load?' },
  { q: 'Am I doing more intensity than I was a month ago? Use my power zones.' },
  { q: 'How much time did I spend in Zone 2 over the last four weeks?' },
  {
    q: 'Are my easy rides actually easy?',
    why: 'Strava uses this one as an example, and it’s a good one. It’s easy to drift into Zone 3 on “easy” days without noticing, especially in a group.',
  },
];

const climbing = [
  { q: 'How much climbing did I do each week over the last two months?' },
  { q: 'Which of my recent rides had the most elevation gain?' },
  { q: 'Compare my climbing this month with last month.' },
  {
    q: 'What was my VAM on the main climb of Saturday’s ride?',
    why: 'VAM is vertical meters climbed per hour. It lets you compare climbs of different lengths, and Claude can work it out from the altitude and time data.',
  },
];

const comparing = [
  { q: 'Compare my last three rides on the Three Bears loop.' },
  { q: 'Compare heart rate and power between Tuesday’s ride and Thursday’s.' },
  { q: 'Was I faster at a similar effort than I was six weeks ago?' },
];

const consistency = [
  { q: 'How many weeks this year did I ride at least four times?' },
  { q: 'What’s my average weekly riding time over the last 12 weeks?' },
  {
    q: 'Show me weeks where my riding time jumped more than 30% from the week before.',
    why: 'Sudden jumps are worth finding, because that’s usually where fatigue piles up. Steady weeks tend to build more fitness than one huge week followed by a forced rest.',
  },
];

const crossTraining = [
  { q: 'How much running am I doing alongside my riding?' },
  { q: 'Did my cycling volume drop when my running went up?' },
  { q: 'How many strength sessions did I log per week this winter?' },
  { q: 'What share of my total training time is on the bike?' },
];

const gear = [
  { q: 'How far have I ridden on each bike?' },
  { q: 'Which bike have I used for most of my rides this year?' },
];

const racing = [
  {
    q: 'Compare my training volume in the six weeks before my last two races.',
    why: 'Tell Claude which activities were the races, by name or date. It can’t always tell a race from a hard group ride.',
  },
  {
    q: 'How much riding above threshold have I done in the last 30 days, and how does that compare with the 30 days before?',
    why: 'Threshold here comes from the FTP in your Strava settings, so make sure it’s current.',
  },
  {
    q: 'In Sunday’s crit, how many efforts over 150% of my FTP lasted longer than 10 seconds?',
    why: 'A criterium is mostly repeated accelerations out of corners. Counting them shows what the race asked of you, and whether your interval sessions look anything like it.',
  },
  {
    q: 'On my long rides this month, how did my power in the last hour compare with the first hour at a similar heart rate?',
    why: 'Road races are usually decided late, when everyone is tired. How well you hold power then often matters more than a fresh five-minute number.',
  },
  {
    q: 'Did my volume actually drop in the ten days before my last race?',
    why: 'A taper is easy to plan and easy to abandon once race nerves kick in.',
  },
  {
    q: 'After my last three race weekends, how many easy or rest days did I take before the next hard ride?',
    why: 'How you recover shows up in the easy days between hard ones, and those are hard to see by scrolling the feed.',
  },
  {
    q: 'Compare Saturday’s road race with my hardest group ride this month: time above threshold, peak power and average heart rate.',
    why: 'Group rides often feel like races. This tells you whether yours are close enough to count as race practice.',
  },
  {
    q: 'Find my longest rides from the last three months.',
    why: 'If your next road race is longer than anything you’ve ridden recently, it’s better to find out now than in the last hour of the race.',
  },
];

function Command({ children }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the command is still selectable.
    }
  };
  return (
    <div className="post__code">
      <div className="post__code-bar">
        <span className="label">Terminal</span>
        <button type="button" className="post__copy" onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
          <span className="visually-hidden"> command</span>
        </button>
      </div>
      <pre><code>{children.split(' ').map((t, i) => (
        <span key={i}>{i > 0 && ' '}<span className="post__tok">{t}</span></span>
      ))}</code></pre>
    </div>
  );
}

// Inline command, flag or tool name. Never breaks at a hyphen.
const Cmd = ({ children }) => <code className="post__tok">{children}</code>;

function Prompts({ items }) {
  return (
    <ul className="post__prompts">
      {items.map((p) => (
        <li key={p.q}>
          <p className="post__prompt">“{p.q}”</p>
          {p.why && <p className="post__why">{p.why}</p>}
        </li>
      ))}
    </ul>
  );
}

function Path({ no, caption, rows }) {
  return (
    <figure className="paths">
      <figcaption className="journey__cap">
        <span className="mono">Fig. {no}</span> {caption}
      </figcaption>
      {rows.map((r) => (
        <div className="paths__row" key={r.label}>
          <p className="label">{r.label}</p>
          <ol className="paths__seq">
            {r.seq.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </div>
      ))}
    </figure>
  );
}

function Note({ label, children }) {
  return (
    <div className="post__note" role="note">
      <p className="label">{label}</p>
      <p>{children}</p>
    </div>
  );
}

function Flow() {
  const [active, setActive] = useState(0);
  const f = flows[active];
  const steps = [
    { who: 'You', what: 'Ask a question', text: `“${f.question}”` },
    { who: 'Claude', what: 'Decides it needs your Strava data', text: 'It reads the question and works out which data would answer it.' },
    {
      who: 'Strava MCP',
      what: f.tools.length > 1 ? 'Claude calls a few tools' : 'Claude calls a tool',
      text: f.tools.map((t, i) => (
        <span key={t}>{i > 0 && (i === f.tools.length - 1 ? ' and ' : ', ')}<Cmd>{t}</Cmd></span>
      )),
      accent: true,
    },
    { who: 'Strava', what: 'Returns only what you authorized', text: f.returns },
    { who: 'Claude', what: 'Answers', text: f.answer },
  ];
  return (
    <figure className="journey flow">
      <figcaption className="journey__cap">
        <span className="mono">Fig. 657-3</span> One question, from you to Strava and back
        <span className="journey__key label">Pick a question to see which tools Claude might call.</span>
      </figcaption>
      <div className="flow__picker" role="group" aria-label="Example question">
        {flows.map((x, i) => (
          <button key={x.label} type="button" className="flow__pick" aria-pressed={i === active} aria-controls="flow-steps" onClick={() => setActive(i)}>
            {x.label}
          </button>
        ))}
      </div>
      <ol className="journey__list" id="flow-steps">
        {steps.map((s, i) => (
          <li key={s.who + s.what} className={`journey__stage${s.accent ? ' is-accent' : ''}`}>
            <span className="journey__no mono" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="journey__node" aria-hidden="true" />
            <div className="journey__body">
              <p className="journey__title">
                <span className="journey__tag mono">{s.who}</span>
                {s.what}
              </p>
              <p className="journey__text">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="flow__note">Tool names come from Strava’s listing in Claude’s connector directory. Which tools Claude calls depends on the question.</p>
    </figure>
  );
}

export default function Body({ metadata: { sources } }) {
  return (
    <>
      <section id="curious" aria-labelledby="curious-h">
        <h2 id="curious-h" className="post__h2">Years of rides, and no easy way to ask about them</h2>
        <p>I have years of rides sitting in Strava: distance, power, heart rate, elevation, the odd race, and a lot of weeknight loops that look the same in the feed.</p>
        <p>When I want to understand something across all of that history, I end up clicking from activity to activity, comparing charts in two browser tabs, or exporting everything into a spreadsheet.</p>
        <p>Strava now has an official MCP connector that lets Claude read your Strava data while you talk to it. That got my attention right away. Instead of opening ride after ride, I could just ask:</p>
        <Prompts
          items={[
            { q: 'Compare my last four Saturday rides.' },
            { q: 'Was my heart rate higher than usual on today’s ride?' },
            { q: 'How has my climbing volume changed over the last six weeks?' },
          ]}
        />
        <p>This guide shows the three ways to connect it (in Claude, from Strava, or in Claude Code), what happens when you ask a question, and the questions I think are worth asking. It also covers the limits, because a few of them change how much you should trust an answer.</p>
      </section>

      <section id="what-is-it" aria-labelledby="what-is-it-h">
        <h2 id="what-is-it-h" className="post__h2">What is the Strava MCP connector?</h2>
        <p className="post__answer">The Strava MCP connector is Strava’s official Model Context Protocol server. Once you authorize it, Claude can read your Strava activities, including heart rate, power, pace and GPS data, and use them to answer questions about your training. It’s read-only, it comes with a paid Strava subscription, and Strava built it and runs it.</p>
        <p>MCP stands for Model Context Protocol, an open standard for connecting AI assistants like Claude to outside systems. Strava runs an MCP server that offers a small set of approved, read-only tools, such as listing your activities or fetching the second-by-second data from one ride. When a question needs your data, Claude calls one of those tools, gets the result back and works from it.</p>
        <Path
          no="657-1"
          caption="How the pieces connect"
          rows={[{ label: 'The chain', seq: ['Claude', 'MCP', 'Strava’s MCP server', 'Your activities and training data'] }]}
        />
        <p>You don’t need to know any protocol details to use it. If you’re curious anyway, the <a href={mcpIntro}>official MCP introduction</a> explains clients, servers and tools.</p>
      </section>

      <section id="requirements" aria-labelledby="requirements-h">
        <h2 id="requirements-h" className="post__h2">What you need before you start</h2>
        <h3 className="post__h3">Does Strava MCP require a subscription?</h3>
        <p className="post__answer">Yes. You need a paid Strava subscription, and free accounts can’t use the connector. You also need Claude: Strava’s instructions cover Claude on the web, the Claude desktop app and Claude Code.</p>
        <dl className="post__terms">
          <div>
            <dt>Strava</dt>
            <dd>A paid subscription. Strava lists the standard subscription, the Strava + Runna bundle, the Family and Student plans, and its military, educator and medical discounts. A free trial gets access only once it converts to paid.</dd>
          </div>
          <div>
            <dt>Claude</dt>
            <dd>Claude at claude.ai or in the desktop app (Strava’s instructions call the desktop app Claude Cowork). Strava launched with Claude and says it wants to support other AI assistants later.</dd>
          </div>
          <div>
            <dt>Claude Code</dt>
            <dd>Optional. Installed and signed in, if you want Strava in your terminal.</dd>
          </div>
          <div>
            <dt>Request limits</dt>
            <dd>Strava caps requests per minute and per day without publishing the numbers. Second-by-second data for dozens of rides uses far more requests than a weekly summary.</dd>
          </div>
        </dl>
      </section>

      <section id="connect" aria-labelledby="connect-h">
        <h2 id="connect-h" className="post__h2">How do I connect Strava to Claude?</h2>
        <p className="post__answer">In Claude, open Customize, then Connectors, click the + icon, search for Strava and click Connect. Strava then asks you to approve access. You can also start from Strava’s settings, or add it to Claude Code with one command.</p>
        <Note label="About OAuth">You sign in on Strava’s own page and approve access there, so Claude never sees your Strava password. Claude gets a token that can only read your account, and you can revoke it whenever you like.</Note>

        <h3 id="connect-claude" className="post__h3">Option 1: Claude on the web or desktop</h3>
        <ol className="post__steps">
          <li>Open claude.ai or the Claude desktop app and expand the sidebar.</li>
          <li>Click <strong>Customize</strong>, then <strong>Connectors</strong>.</li>
          <li>Click the <strong>+</strong> icon and search for Strava.</li>
          <li>Click <strong>Connect</strong>.</li>
          <li>Claude sends you to Strava. Sign in if it asks, then approve access for Claude.</li>
          <li>Back in Claude, ask something about your training.</li>
        </ol>
        <p>To be sure you’re adding the official connector, look at the <a href={directory}>Strava listing in Claude’s directory</a>. It’s made by Strava, Inc., and its connector URL is <Cmd>https://mcp.strava.com/mcp</Cmd>.</p>
        <p>If Claude answers without looking at your Strava data, check that the connector is switched on for that chat. Click <strong>+</strong> in the message box, open <strong>Connectors</strong> and make sure Strava is on. Mentioning Strava in your question helps too.</p>

        <h3 id="connect-strava" className="post__h3">Option 2: Start from Strava</h3>
        <p>On strava.com:</p>
        <ol className="post__steps">
          <li>Hover over your profile picture in the top right corner.</li>
          <li>Click <strong>Settings</strong>, then <strong>MCP</strong>.</li>
        </ol>
        <p>In the Strava app:</p>
        <ol className="post__steps">
          <li>Tap <strong>You</strong>, then <strong>Settings</strong>.</li>
          <li>Tap <strong>AI Assistants</strong>. (<strong>Your Strava Subscription</strong>, then <strong>Tools</strong>, gets you to the same place.)</li>
        </ol>
        <p>From there, follow Strava’s prompts to connect Claude.</p>

        <h3 id="claude-code" className="post__h3">Option 3: Claude Code</h3>
        <p>If you spend your day in a terminal like I do, you can add Strava to Claude Code. This is the command from Strava’s help article:</p>
        <Command>{addCommand}</Command>
        <dl className="post__terms">
          <div>
            <dt><Cmd>--transport http</Cmd></dt>
            <dd>Strava’s server is remote, so there’s nothing to install or run on your machine.</dd>
          </div>
          <div>
            <dt><Cmd>strava-mcp</Cmd></dt>
            <dd>The name Claude Code uses for the server.</dd>
          </div>
          <div>
            <dt><Cmd>https://mcp.strava.com/mcp</Cmd></dt>
            <dd>Strava’s MCP server.</dd>
          </div>
        </dl>
        <p>Claude Code adds servers at local scope by default, which means Strava is only available in the project directory where you ran the command. To use it from any directory, add <Cmd>--scope user</Cmd>:</p>
        <Command>{addUserCommand}</Command>
        <p>Then sign in. Start Claude Code with <Cmd>claude</Cmd>, type <Cmd>/mcp</Cmd>, choose <Cmd>strava-mcp</Cmd>, and follow the browser prompt to approve access on Strava. Running <Cmd>claude mcp login strava-mcp</Cmd> from your shell does the same thing.</p>
        <p>To check the connection:</p>
        <Command>claude mcp list</Command>
        <p>Strava should show <Cmd>✔ Connected</Cmd>. If it shows <Cmd>! Needs authentication</Cmd>, go back to <Cmd>/mcp</Cmd> and finish signing in. Then try something small:</p>
        <Prompts items={[{ q: 'Use Strava to list my rides from the last seven days.' }]} />
        <Note label="Already on claude.ai?">If you connected Strava in Claude on the web and sign in to Claude Code with the same claude.ai account, your claude.ai connectors appear in Claude Code automatically. Strava may already be in <Cmd>/mcp</Cmd> without running the command.</Note>
        <p>The full set of commands and scopes is in Anthropic’s <a href={claudeCodeMcp}>Claude Code MCP documentation</a>.</p>
      </section>

      <section id="what-happened" aria-labelledby="what-happened-h">
        <h2 id="what-happened-h" className="post__h2">What just happened?</h2>
        <p>Connecting Strava gave Claude a route to your training data that it didn’t have before.</p>
        <Path
          no="657-2"
          caption="Before and after connecting Strava"
          rows={[
            { label: 'Before', seq: ['You', 'Claude'] },
            { label: 'After', seq: ['You', 'Claude', 'Strava MCP', 'Your Strava data'] },
          ]}
        />
        <p>Every time you ask a training question, five things happen. Pick an example to see how the tool calls change with the question:</p>
        <Flow />
        <p>Claude asks for what each question needs, when it needs it, and it can ask again when you follow up. The connection stays available for the whole conversation, so the next question can build on the last one. It’s a small, concrete example of what makes MCP interesting, which I come back to <a href="#learning-mcp">at the end</a>.</p>
      </section>

      <section id="questions" aria-labelledby="questions-h">
        <h2 id="questions-h" className="post__h2">What can Claude do with my Strava data?</h2>
        <p className="post__answer">Claude can read your activities and their heart rate, power, pace and GPS data, along with your training zones and gear. It uses that to answer questions about volume, intensity, climbing, consistency and cross-training. The best questions span several weeks or several rides, where clicking through the Strava app gets slow.</p>
        <p>A few habits make the answers better:</p>
        <ul className="post__list">
          <li>Give it a time window. “The last six weeks” works better than “recently.”</li>
          <li>Say what you mean by hard, easy or long. Otherwise Claude picks a definition, and it may not be yours.</li>
          <li>Ask it to show the numbers behind a conclusion, so you can check one or two rides in Strava.</li>
          <li>Start with weekly totals, then go into individual rides. Second-by-second data for one ride is a lot of data, and for forty rides it’s a lot of requests.</li>
        </ul>

        <h3 className="post__h3">Recent training</h3>
        <Prompts items={recent} />

        <h3 className="post__h3">Intensity and fitness</h3>
        <Prompts items={intensity} />
        <p>Zone answers are only as good as the zones in your Strava settings. If your FTP or max heart rate there is a year old, update it first, or every zone question will be off.</p>
        <p>It also helps to ask for heart rate and power on the same ride. Power measures the work you did. Heart rate shows how hard your body worked to do it, and it drifts with heat, fatigue, caffeine and sleep. When the two disagree, that’s usually worth a follow-up question.</p>

        <h3 className="post__h3">Climbing</h3>
        <Prompts items={climbing} />
        <p>If you want to estimate VAM or climb time before a ride, I built a <a href={`${ult.url}/cycling/climbing-calculator/`}>climbing calculator</a> on Useful Little Tools that works it out from gradient, weight and power. Elevation also varies by device: a barometric altimeter and GPS-only elevation can disagree on the same ride, so compare rides recorded the same way.</p>

        <h3 className="post__h3">Comparing rides</h3>
        <Prompts items={comparing} />
        <p>Be careful with comparisons. Speed on the same loop depends on wind, temperature, traffic, how fresh you were, which wheels you ran, and above all whether you were in a group. A solo ride and a fast group ride on the same roads aren’t comparable at all. Power at a given heart rate is a fairer comparison than speed, and even that moves with heat and fatigue.</p>
        <p>Strava’s tool list for the connector doesn’t include segments, so Claude finds similar rides by name, date, distance or route. If every ride you own is called “Morning Ride,” give it the dates.</p>

        <h3 className="post__h3">Consistency</h3>
        <Prompts items={consistency} />

        <h3 className="post__h3">Cross-training</h3>
        <p>Strava lists cross-sport training as one of the things the connector is for, so anything you record counts: runs, strength sessions, swims, hikes.</p>
        <Prompts items={crossTraining} />

        <h3 className="post__h3">Gear</h3>
        <Prompts items={gear} />
      </section>

      <section id="racers" aria-labelledby="racers-h">
        <h2 id="racers-h" className="post__h2">Useful Strava MCP prompts for road racers</h2>
        <p>Through the <Link to="/community/">Berkeley Omnium</Link> I spend a lot of time around racers, and their training questions are mostly about two stretches: the build into a race and the recovery after it. These prompts are for exploring your own history around both.</p>
        <p>Claude isn’t a coach here. It sees what you recorded, and it can’t see your sleep, your job, how your legs felt on race morning, or the plan you agreed with an actual coach.</p>
        <Prompts items={racing} />
        <p>Treat the answers as a starting point for a conversation with yourself, or with your coach, and check any number that would change a decision.</p>
      </section>

      <section id="conversation" aria-labelledby="conversation-h">
        <h2 id="conversation-h" className="post__h2">What a conversation looks like</h2>
        <Note label="Illustrative">I wrote this exchange to show the shape of a conversation. The numbers aren’t from my account or anyone else’s.</Note>
        <dl className="post__chat">
          <div className="is-me">
            <dt className="label">Me</dt>
            <dd>How has my cycling volume changed over the last six weeks?</dd>
          </div>
          <div>
            <dt className="label">Claude</dt>
            <dd>You rode 5.5, 6, 7, 6.5, 8 and 8.5 hours over the last six weeks, so this week is about 55% above the first. Most of the increase came in weeks three and five. Your longest ride grew from 2 hours 10 minutes to 3 hours 40.</dd>
          </div>
          <div className="is-me">
            <dt className="label">Me</dt>
            <dd>Was the increase mostly from longer rides or more riding days?</dd>
          </div>
          <div>
            <dt className="label">Claude</dt>
            <dd>Mostly longer rides. You rode four days a week in five of the six weeks and five days in week four. Your average ride went from about 1 hour 20 minutes to just over 2 hours, mainly because your weekend rides got longer.</dd>
          </div>
          <div className="is-me">
            <dt className="label">Me</dt>
            <dd>Did my easy rides stay easy while that happened?</dd>
          </div>
          <div>
            <dt className="label">Claude</dt>
            <dd>I counted rides averaging under 65% of your FTP as easy. Of those 14 rides, 11 spent most of their time in Zones 1 and 2. The other three were Tuesday group rides, with a lot more time in Zone 4.</dd>
          </div>
        </dl>
        <p>Each follow-up builds on the last answer, because the Strava connection stays available for the whole conversation. I don’t have to export another file or paste activity data into the chat to ask the next question.</p>
      </section>

      <section id="mcp-vs-export" aria-labelledby="mcp-vs-export-h">
        <h2 id="mcp-vs-export-h" className="post__h2">Strava MCP vs exporting your data</h2>
        <p className="post__answer">Use MCP for questions and follow-ups about your current data. Use an export when you want a complete copy of your history to analyze in your own tools.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 657-4</span> Exporting your data vs connecting with MCP
            </caption>
            <thead>
              <tr>
                <th scope="col">Question</th>
                <th scope="col">Export</th>
                <th scope="col">MCP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">What Claude sees</th>
                <td data-label="Export">A snapshot from the day you exported</td>
                <td data-label="MCP">Your current Strava data, read when it’s needed</td>
              </tr>
              <tr>
                <th scope="row">How it gets there</th>
                <td data-label="Export">You download it and upload it to a chat</td>
                <td data-label="MCP">Claude requests it through the connector</td>
              </tr>
              <tr>
                <th scope="row">After your next ride</th>
                <td data-label="Export">Out of date until you export again</td>
                <td data-label="MCP">Already included</td>
              </tr>
              <tr>
                <th scope="row">Who can use it</th>
                <td data-label="Export">Any Strava account, free or paid</td>
                <td data-label="MCP">Paid subscribers</td>
              </tr>
              <tr>
                <th scope="row">Best for</th>
                <td data-label="Export">Deep offline analysis, spreadsheets, your own scripts</td>
                <td data-label="MCP">Conversational questions and follow-ups</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <p>Neither one is better in general. If I want to model a whole season in a notebook, I want the file. If I want to know whether last week was harder than it felt, I want the connector.</p>
      </section>

      <section id="limits" aria-labelledby="limits-h">
        <h2 id="limits-h" className="post__h2">What Strava MCP can’t do</h2>
        <h3 className="post__h3">Is Strava MCP read-only?</h3>
        <p className="post__answer">Yes. Claude can read your Strava data through the connector, but it can’t upload, edit, rename or delete activities, or change anything else in your account.</p>
        <p>So you can’t ask it to rename all those “Morning Ride” activities, fix a ride your head unit split in two, or post anything. The other limits are worth knowing before you rely on an answer:</p>
        <ul className="post__list">
          <li>It only works with Claude for now. Strava says other AI assistants may follow.</li>
          <li>Its answers can differ from Strava’s own numbers. Strava says AI assistants process data differently, so Claude’s view can disagree with features like Performance Predictions or a Runna training plan.</li>
          <li>Strava’s tool list for it doesn’t include segments or saved routes, so don’t expect segment times or leaderboards.</li>
          <li>Requests are limited per minute and per day.</li>
          <li>It only knows what you recorded. Sleep, stress, illness and how your legs feel aren’t in Strava unless you tell Claude about them.</li>
        </ul>
        <Note label="Check the math">When an answer would change what you do, like skipping a workout or changing a race plan, ask Claude how it calculated it and check a ride or two in Strava yourself.</Note>
      </section>

      <section id="privacy" aria-labelledby="privacy-h">
        <h2 id="privacy-h" className="post__h2">Privacy, access and disconnecting</h2>
        <p>The connector uses OAuth. You approve access on Strava’s site, Claude gets a token instead of your password, and that token can only read your own account. Strava describes the access as read-only, scoped to your account and revocable at any time.</p>
        <p>Once Claude reads your data, it’s part of that conversation, the same as anything you paste in, and Claude’s own <a href={claudeConnectors}>connector security and privacy terms</a> apply. Strava says it launched with Anthropic because it believes Anthropic will honor terms not to train models on your data without your consent.</p>
        <p>GPS data shows where your rides start and finish, which is often your home. Think about that before you share a chat that includes routes or locations.</p>

        <h3 id="disconnect" className="post__h3">How do I disconnect Strava from Claude?</h3>
        <p className="post__answer">Revoke access on strava.com under Settings, then My Apps. That works no matter how you connected. You can also disconnect from Claude, the Strava app or Claude Code.</p>
        <dl className="post__terms">
          <div>
            <dt>Strava website</dt>
            <dd>Hover over your profile picture, click Settings, then My Apps, and click Revoke Access next to Claude.</dd>
          </div>
          <div>
            <dt>Strava app</dt>
            <dd>Tap You, then Settings, then AI Assistants. Tap Claude, then Disconnect.</dd>
          </div>
          <div>
            <dt>Claude</dt>
            <dd>Expand the sidebar and click Customize, then Connectors. Click Strava, then Disconnect.</dd>
          </div>
          <div>
            <dt>Claude Code</dt>
            <dd>Run <Cmd>claude mcp remove strava-mcp</Cmd>. Claude Code also deletes the stored sign-in tokens when you remove a remote server.</dd>
          </div>
        </dl>
      </section>

      <section id="mcp-vs-api" aria-labelledby="mcp-vs-api-h">
        <h2 id="mcp-vs-api-h" className="post__h2">What’s the difference between Strava MCP and the Strava API?</h2>
        <p className="post__answer">The Strava API is for developers building applications. Strava MCP connects an AI assistant to your own Strava data so you can ask questions in plain language. MCP doesn’t replace the API for building apps.</p>
        <figure className="post__figure">
          <table className="post__table">
            <caption>
              <span className="mono">Fig. 657-5</span> The Strava API and Strava MCP side by side
            </caption>
            <thead>
              <tr>
                <th scope="col">Question</th>
                <th scope="col">Strava API</th>
                <th scope="col">Strava MCP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Built for</th>
                <td data-label="Strava API">Developers building apps and services</td>
                <td data-label="Strava MCP">Athletes asking an AI assistant about their own data</td>
              </tr>
              <tr>
                <th scope="row">You handle</th>
                <td data-label="Strava API">OAuth, tokens, endpoints, rate limits, storage, app logic and app review</td>
                <td data-label="Strava MCP">Clicking Connect and approving access</td>
              </tr>
              <tr>
                <th scope="row">Who it serves</th>
                <td data-label="Strava API">Your app’s users. Up to 10 without review on Strava’s Standard tier.</td>
                <td data-label="Strava MCP">Just you</td>
              </tr>
              <tr>
                <th scope="row">Subscription</th>
                <td data-label="Strava API">Required for Standard tier developers</td>
                <td data-label="Strava MCP">Required</td>
              </tr>
              <tr>
                <th scope="row">Using it with AI</th>
                <td data-label="Strava API">Restricted by Strava’s API Policy</td>
                <td data-label="Strava MCP">The route Strava supports</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <p>The last row matters if you were planning to pull your rides through the API and feed them to a model. Strava’s <a href={apiPolicy}>API Policy</a> (section 5.3) says API data can’t be used with AI applications, including putting it into a model’s context window, and it makes the Strava MCP the exception. Strava’s <a href={devFaq}>developer FAQ</a> draws the same line: a single athlete who wants to use AI with their own data goes through MCP, with no app or review needed.</p>
        <p>If you’re building a product other athletes will use, you still want the API, its review process and its rate limits. If you want answers about your own training, MCP gets you there without writing any code.</p>
      </section>

      <section id="unofficial" aria-labelledby="unofficial-h">
        <h2 id="unofficial-h" className="post__h2">Official vs unofficial Strava MCP servers</h2>
        <p>Search GitHub for “Strava MCP” and you’ll find plenty of open-source servers. Until Strava launched its own connector, running one of these was the only way to use Strava with Claude over MCP. Most run with your own Strava API credentials and expose whatever their author decided to build.</p>
        <p>Strava’s rules have changed since then. Its <a href={apiPolicy}>API Policy</a> names the Strava MCP as the only authorized agent interface to Strava (section 3.5) and says developers may not operate any other MCP server that exposes Strava data (section 5.16). The <a href={devFaq}>developer FAQ</a> also calls entering your API credentials on a third-party site that makes requests for you non-compliant.</p>
        <ul className="post__list">
          <li>Strava’s official connector is the place to start for most subscribers, and it’s the only one Strava supports.</li>
          <li>Unofficial servers are still worth reading if you want to see how an MCP server is built. Running one against your account means managing your own keys and tokens, keeping it working as Strava’s API changes, and checking it against Strava’s current policy first.</li>
          <li>Features you read about in an unofficial server, such as write access or segment tools, don’t tell you anything about the official connector.</li>
        </ul>
      </section>

      <section id="learning-mcp" aria-labelledby="learning-mcp-h">
        <h2 id="learning-mcp-h" className="post__h2">Why Strava is a good way to learn MCP</h2>
        <p>I like Strava as an MCP example because anyone who trains already understands the problem it solves.</p>
        <dl className="post__contrast">
          <div className="is-before"><dt className="label">Without MCP</dt><dd>Your training data is in Strava, your AI assistant is somewhere else, and you move data between them by hand.</dd></div>
          <div><dt className="label">With MCP</dt><dd>The assistant has an approved way to ask Strava for the data it needs.</dd></div>
        </dl>
        <p>If you’re learning how MCP works, each of its parts shows up in this one setup:</p>
        <dl className="post__terms">
          <div>
            <dt>MCP server</dt>
            <dd>Strava’s server at mcp.strava.com. It decides what can be read and how.</dd>
          </div>
          <div>
            <dt>MCP client</dt>
            <dd>Claude or Claude Code, the app that connects to the server on your behalf.</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>The actions the server offers, like <Cmd>list_activities</Cmd> and <Cmd>get_activity_streams</Cmd>. Claude chooses which ones to call.</dd>
          </div>
          <div>
            <dt>Authorization</dt>
            <dd>OAuth with read-only scopes. Strava’s published OAuth metadata for the server lists only read scopes, such as <Cmd>activity:read_all</Cmd>.</dd>
          </div>
          <div>
            <dt>External data</dt>
            <dd>Live data that never had to be exported, copied or indexed first.</dd>
          </div>
          <div>
            <dt>Agents</dt>
            <dd>Claude deciding to call two or three tools in a row to answer one question, as in the easy-rides example above.</dd>
          </div>
        </dl>
        <p>If you’ve been reading about retrieval-augmented generation (RAG), MCP makes a useful contrast. RAG searches an index of documents built ahead of time, while MCP calls a tool and gets fresh data back. I built a <a href={`${ult.url}/developer/ai/semantic-search/`}>semantic search playground</a> on Useful Little Tools that shows how the retrieval side works, and the <a href={mcpIntro}>MCP documentation</a> covers the protocol itself.</p>
      </section>

      <section id="sources" aria-labelledby="sources-h">
        <h2 id="sources-h" className="post__h2">Sources</h2>
        <p>The setup steps, requirements and limits in this guide come from these first-party pages. Strava changes its menus from time to time, so if a step doesn’t match what you see, <a href={stravaHelp}>Strava’s help article</a> is the place to check.</p>
        <ul className="post__list">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url}>{s.label}</a></li>
          ))}
        </ul>
        <p>Strava also explains why the connector needs a subscription and why it launched with Anthropic in its <a href={stravaFaq}>API and MCP FAQ</a>.</p>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">The short version</h2>
      <div className="post__close-copy">
        <p className="lead">Most of the value is in the follow-up questions, so connect it and start with something simple.</p>
        <ol className="post__close-list">
          <li>Get a paid Strava subscription.</li>
          <li>In Claude, open Customize, then Connectors, and add Strava.</li>
          <li>Approve access on Strava.</li>
          <li>Ask about your last four weeks, then follow up.</li>
        </ol>
        <div className="post__close-actions">
          <a href={stravaHelp} className="action">Strava’s setup guide <ArrowOut /></a>
          <a href={directory} className="link-arrow"><span>Strava in Claude’s directory</span> <ArrowOut /></a>
        </div>
      </div>
    </>
  );
}
