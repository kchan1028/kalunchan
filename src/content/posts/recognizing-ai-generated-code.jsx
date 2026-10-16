import { Link } from 'react-router';
import { ArrowRight } from '../../components/Icons';

// The Django REST Framework example is written for this article and labelled as such on the page;
// it is not code from a client or a teammate. Line counts in Fig. 702-1 are computed from the
// strings below, so the figure and the code can't disagree.
export const metadata = {
  slug: 'recognizing-ai-generated-code',
  title: 'I Can Recognize AI-Generated Code. Here’s Why.',
  shortTitle: 'Recognizing AI-generated code',
  seoTitle: 'How to Recognize AI-Generated Code, and Why It Matters — Ka Lun Chan',
  description:
    'The patterns I keep seeing in AI-generated code, a real Django example where 53 lines lose to 6, and how I review AI output so the code fits the problem.',
  teaser:
    'The habits AI coding tools leave in pull requests, one small request answered two ways in real Python, why the longer version passes its test anyway, and how I work with AI so I can explain every line I merge.',
  dek:
    'I use AI coding tools a lot, and I keep seeing the same habits in what they write. Recognizing them is useful. Whether the author understands the code matters more.',
  summary:
    'Eight patterns that show up in AI-generated code and why none of them prove authorship; a status filter written as 53 lines and as 6; what the AI couldn’t know about the project; a test that passes with the bug in place; when to accept, modify, simplify or reject; and how I use AI coding tools day to day.',
  topics: ['AI', 'Engineering judgment'],
  minutes: 10,
  related: [
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/building-software-before-and-after-ai/', label: 'How I build software now that AI is in the loop' },
    { to: '/writing/generalist-advantage-in-the-ai-era/', label: 'Why being a generalist is an advantage in the AI era' },
    { to: '/writing/ai-learning-curve-future-of-work/', label: 'AI is great, but not everyone is ready to use it yet' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'AI-generated code',
    'how to recognize AI-generated code',
    'signs of AI-generated code',
    'reviewing AI-generated code',
    'AI code review',
    'over-engineered code',
    'engineering judgment',
    'AI coding tools best practices',
  ],
  about: [
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Django REST framework', url: 'https://www.django-rest-framework.org/' },
    { '@type': 'SoftwareApplication', name: 'django-filter', url: 'https://django-filter.readthedocs.io/' },
  ],
  faq: [
    {
      q: 'Can you tell if code was written by AI?',
      a: 'Not reliably. AI-generated code often has recognizable habits, like extra abstractions, defensive checks for things that can’t happen and comments that repeat the code. People write code like that too, so the patterns are a reason to ask questions, not proof of who wrote it.',
    },
    {
      q: 'What are common signs of AI-generated code?',
      a: 'Abstractions with only one use, repeated validation and broad error handling, generic names like data, result and handler, comments that restate the next line, new helper files nobody asked for, and features beyond what the task requested.',
    },
    {
      q: 'Is it bad to use AI to write code?',
      a: 'No. AI coding tools can save a lot of time. The problem is merging code you don’t understand. Whoever opens the pull request is responsible for explaining it, testing it and maintaining it, whoever or whatever typed it.',
    },
    {
      q: 'How should you review AI-generated code?',
      a: 'The same way as any code, with extra attention to size. Check it against the actual request, ask what can be deleted, look for errors that get swallowed instead of reported, compare it with the project’s existing conventions, and make sure the tests cover the case that would break it.',
    },
  ],
};

export const toc = [
  ['patterns', 'The patterns I keep seeing'],
  ['example', 'One small request, two answers'],
  ['more-code', 'More code doesn’t mean better code'],
  ['bigger-picture', 'What the AI couldn’t see'],
  ['tests-pass', 'It passed the tests'],
  ['judgment', 'Accept, modify, simplify or reject'],
  ['how-i-use-it', 'How I use AI coding tools'],
];

// ---------- The example: one request, two implementations ----------
const longFilter = `# opportunities/utils/filters/status_filter.py
import logging
from abc import ABC, abstractmethod
from typing import Any, Optional

from django.db.models import QuerySet

logger = logging.getLogger(__name__)


class BaseFilterStrategy(ABC):
    """Abstract base class for filter strategies."""

    @abstractmethod
    def apply(self, queryset: QuerySet, value: Any) -> QuerySet:
        """Apply the filter to the queryset."""
        pass


class StatusFilterStrategy(BaseFilterStrategy):
    """Filter strategy for filtering by status."""

    VALID_STATUSES = ["open", "closed", "awarded"]

    def apply(self, queryset: QuerySet, value: Any) -> QuerySet:
        # Check if value is None
        if value is None:
            return queryset
        # Check if value is a string
        if not isinstance(value, str):
            logger.warning("Invalid status type: %s", type(value))
            return queryset
        # Normalize the value
        normalized_value = value.strip().lower()
        # Validate the status
        if normalized_value not in self.VALID_STATUSES:
            logger.warning("Invalid status value: %s", value)
            return queryset
        try:
            return queryset.filter(status=normalized_value)
        except Exception as e:
            logger.error("Error filtering by status: %s", e)
            return queryset


class FilterStrategyFactory:
    """Factory for creating filter strategies."""

    _strategies = {"status": StatusFilterStrategy}

    @classmethod
    def get_strategy(cls, filter_name: str) -> Optional[BaseFilterStrategy]:
        strategy_class = cls._strategies.get(filter_name)
        if strategy_class is None:
            return None
        return strategy_class()`;

const longView = `# opportunities/views.py
    def get_queryset(self):
        queryset = Opportunity.objects.filter(owner=self.request.user)
        try:
            status_value = self.request.query_params.get("status", None)
            if status_value is not None:
                strategy = FilterStrategyFactory.get_strategy("status")
                if strategy is not None:
                    queryset = strategy.apply(queryset, status_value)
        except Exception as e:
            logger.error("Unexpected error applying filters: %s", e)
        return queryset`;

const shortView = `# opportunities/views.py
    def get_queryset(self):
        qs = Opportunity.objects.filter(owner=self.request.user)
        status = self.request.query_params.get("status")
        if status:
            qs = qs.filter(status=status)
        return qs`;

const strictView = `        if status:
            if status not in Opportunity.Status.values:
                raise ValidationError({"status": "Unknown status."})
            qs = qs.filter(status=status)`;

const filterBackend = `class OpportunityList(generics.ListAPIView):
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["status"]`;

const happyTest = `def test_filter_by_status(api_client, user):
    OpportunityFactory(owner=user, status="open")
    OpportunityFactory(owner=user, status="closed")
    response = api_client.get("/api/opportunities/?status=open")
    assert response.status_code == 200
    assert len(response.json()) == 1`;

const missingTest = `def test_unknown_status_returns_nothing(api_client, user):
    OpportunityFactory(owner=user, status="open")
    response = api_client.get("/api/opportunities/?status=pending")
    assert response.json() == []`;

// Code lines only: the file-path comment on the first line is a label, not code.
const loc = (s) => s.split('\n').slice(s.startsWith('#') ? 1 : 0).filter((l) => l.trim()).length;

function Code({ label, children }) {
  return (
    <div className="post__code">
      <div className="post__code-bar">
        <span className="label">{label}</span>
      </div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

// ---------- Fig. 702-1: side-by-side comparison ----------
const compare = [
  ['Non-blank lines of code', String(loc(longFilter) + loc(longView)), String(loc(shortView))],
  ['New files', '1, in a new utils/filters/ package', 'None'],
  ['Classes', '3, for one filter', '0'],
  ['Where valid statuses come from', 'A copied list that can drift from the model', 'The model and the database'],
  ['?status=open', 'Open opportunities', 'Open opportunities'],
  ['?status=pending (not a real status)', 'Every opportunity, as if the filter worked', 'An empty list'],
  ['A database error', 'Logged, then an unfiltered list', 'A 500 error someone will see'],
];

function Compare() {
  return (
    <figure className="post__figure">
      <table className="post__table post__compare">
        <caption><span className="mono">Fig. 702-1</span> The same request, two implementations</caption>
        <thead><tr><th scope="col" /><th scope="col">Version A: the long one</th><th scope="col">Version B: the short one</th></tr></thead>
          <tbody>{compare.map(([k, a, b]) => <tr key={k}><th scope="row">{k}</th><td data-col="A">{a}</td><td data-col="B">{b}</td></tr>)}</tbody>
      </table>
      <figcaption className="post__figcaption">Both versions return open opportunities for <code>?status=open</code>, so a quick manual check passes either way. They differ on bad input and on failures, where version A hides the problem.</figcaption>
    </figure>
  );
}

// ---------- Fig. 702-2: what to do with a generated change ----------
const choices = [
  ['Accept', 'It does what was asked, follows the project’s conventions, and I can explain every line.'],
  ['Modify', 'The approach is right but details are off: a name, a missed case, an error that should be loud.'],
  ['Simplify', 'It works but it’s heavier than the problem. Delete layers until it’s the size of the request.'],
  ['Reject', 'It solves a different problem, or I can’t tell why it works. Add context and try again, or write it myself.'],
];

function Choices() {
  return (
    <figure className="post__figure">
      <table className="post__table">
        <caption><span className="mono">Fig. 702-2</span> Four things I can do with a generated change</caption>
        <thead><tr><th scope="col">Decision</th><th scope="col">When I make it</th></tr></thead>
        <tbody>{choices.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}

export default function Body() {
  return (
    <>
      <section id="patterns" aria-labelledby="patterns-h">
        <h2 id="patterns-h" className="post__h2">The patterns I keep seeing</h2>
        <p>I’ve been spending a lot of time with AI coding tools, mostly Claude Code and Codex. The more I use them, the more I notice the same habits in the code they write. Sometimes I read a pull request and think: an AI did most of this.</p>
        <p>I’m not complaining. I use these tools all the time and they make me faster. What I care about is whether the person who opened the pull request understands what’s in it, and whether the code fits the problem it was meant to solve.</p>
        <p>These are the habits I notice most:</p>
        <ul className="post__list">
          <li>Abstractions with one use. A base class, a strategy and a factory, all for a single case.</li>
          <li>Defensive checks for things that can’t happen, like checking that a URL query parameter is a string. It always is.</li>
          <li>The same validation or error handling in three layers, each one catching what the layer below already caught.</li>
          <li>A simple problem solved with a general framework, in case the problem grows. It usually doesn’t grow in that direction.</li>
          <li>Generic names: <code>data</code>, <code>result</code>, <code>handler</code>, <code>process_item</code>, <code>utils</code>.</li>
          <li>Comments that repeat the next line. <code># Check if value is None</code> above <code>if value is None</code>.</li>
          <li>New helper functions and files nobody asked for, often in a new <code>utils/</code> or <code>helpers/</code> folder.</li>
          <li>Features beyond the request: caching, retries, configuration options, a second endpoint “for completeness.”</li>
        </ul>
        <p>None of these prove who wrote the code. People wrote code like this long before AI, and I’ve written some of it myself. A pattern is a reason to ask the author a few questions. That’s all it is.</p>
      </section>

      <section id="example" aria-labelledby="example-h">
        <h2 id="example-h" className="post__h2">One small request, two answers</h2>
        <p>Here’s an example I wrote for this article. It’s a composite of habits I’ve seen, not a pull request from a client or a teammate. The project is a Django REST Framework API that lists contract opportunities for the signed-in user. The request is one sentence:</p>
        <p className="post__answer">Add a status filter, so <code>/api/opportunities/?status=open</code> returns only open opportunities.</p>
        <h3 className="post__h3">Version A</h3>
        <p>This is the kind of answer I get when I give an assistant that one sentence and nothing else. It creates a new file:</p>
        <Code label="Version A · new file">{longFilter}</Code>
        <p>And it changes the view to use it:</p>
        <Code label="Version A · view">{longView}</Code>
        <p>It looks thorough. It has type hints, docstrings, logging and error handling. Read it closely and the problems show up:</p>
        <ul className="post__list">
          <li>An abstract base class, a strategy and a factory exist to support exactly one filter. If a second filter ever arrives, that’s the time to look for a pattern.</li>
          <li><code>isinstance(value, str)</code> guards against something that can’t happen. Query parameters are always strings.</li>
          <li><code>VALID_STATUSES</code> copies the model’s choices by hand. When someone adds a “cancelled” status to the model, this list won’t know.</li>
          <li>An unknown status returns the whole list. Ask for <code>?status=pending</code> and you get every opportunity, so the screen looks like the filter worked. This is the real bug, and it’s the one most likely to reach a user.</li>
          <li>Two <code>except Exception</code> blocks turn a database error into a log line and an unfiltered result. Errors that should be loud are now quiet.</li>
          <li>Every ordinary typo in a URL writes a warning to the logs.</li>
          <li>Half the comments say what the next line says.</li>
        </ul>
        <h3 className="post__h3">Version B</h3>
        <Code label="Version B · view">{shortView}</Code>
        <p>Six lines, no new files. An unknown status returns an empty list, which is the honest answer. A database error raises, so monitoring sees it. The valid statuses live where they always lived: on the model.</p>
        <p>If the team prefers a clear error for an unknown status, that’s two more lines, and the list of statuses still comes from the model:</p>
        <Code label="Version B · stricter, if the team wants a 400">{strictView}</Code>
        <Compare />
      </section>

      <section id="more-code" aria-labelledby="more-code-h">
        <h2 id="more-code-h" className="post__h2">More code doesn’t mean better code</h2>
        <p>AI can write hundreds of lines in the time it takes me to read the ticket. That speed makes long answers feel free. They aren’t. Every line is something a teammate has to read in review, understand during an incident, and keep in mind the next time they change something nearby.</p>
        <p>Version A would also make the next change harder. A developer adding a second filter now has to learn a strategy pattern and a factory first, and will probably copy them. Code tends to grow the way it started.</p>
        <p>I’d rather review six lines I can understand in ten seconds than fifty that look careful. Simple code is easier to test and to change. When something breaks late at night, it’s much easier to fix. Small pull requests make the difference obvious, which is one reason I push for <Link to="/writing/smaller-user-stories-and-pull-requests/">smaller user stories and pull requests</Link>.</p>
      </section>

      <section id="bigger-picture" aria-labelledby="bigger-picture-h">
        <h2 id="bigger-picture-h" className="post__h2">What the AI couldn’t see</h2>
        <p>The assistant saw one file and one sentence. It solved the problem it was given. It had no way to know the rest:</p>
        <ul className="post__list">
          <li>The project might already use django-filter, where the whole feature is a setting on the view. The team’s convention would have made this a three-line change.</li>
          <li>The team might return a 400 error for bad input everywhere else, so silently ignoring a bad value breaks a rule users of the API already rely on.</li>
          <li>The list is scoped to the signed-in user for a security reason. Version A kept that line, but a “cleanup” in the same style could easily lose it.</li>
          <li>Whether the <code>status</code> column has a database index decides whether this filter is fast on a large table.</li>
          <li>Someone has to maintain the new <code>utils/filters/</code> package long after the ticket is closed.</li>
        </ul>
        <Code label="If the project already uses django-filter">{filterBackend}</Code>
        <p>That context is my job to provide. When I don’t give it, the AI fills the gap with guesses that look like best practices. The same tool, given the conventions and the relevant files, usually writes something close to version B.</p>
      </section>

      <section id="tests-pass" aria-labelledby="tests-pass-h">
        <h2 id="tests-pass-h" className="post__h2">It passed the tests</h2>
        <p>Version A comes with a test, and the test passes:</p>
        <Code label="The test that came with it">{happyTest}</Code>
        <p>It would pass with the bug in place, because it never asks for a status that doesn’t exist. This is the test that catches it. Version A returns every opportunity here and fails:</p>
        <Code label="The test that was missing">{missingTest}</Code>
        <p>Both tests assume the usual pytest fixtures for a signed-in client and a factory for test records.</p>
        <p>AI-generated code is convincing. It’s formatted, it has docstrings, and it often has tests. None of that tells you it handles the cases that matter. When I merge a pull request, the code is mine, whoever typed it. If it breaks in production, “the AI wrote it” isn’t an answer anyone on call wants to hear. The person who opens the pull request should be able to explain every line, and the reviewer should ask them to.</p>
      </section>

      <section id="judgment" aria-labelledby="judgment-h">
        <h2 id="judgment-h" className="post__h2">Accept, modify, simplify or reject</h2>
        <p>As writing code gets faster, the decision about what to keep becomes most of the work. Every generated change ends in one of four places.</p>
        <Choices />
        <p>Knowing which one applies takes experience. You have to have seen enough systems to know what this one needs, and enough incidents to know which errors should be loud. I wrote about the cost side of this, including what it looks like when nobody makes these calls, in <Link to="/writing/hidden-cost-of-ai-coding/">the hidden cost of AI coding</Link>.</p>
      </section>

      <section id="how-i-use-it" aria-labelledby="how-i-use-it-h">
        <h2 id="how-i-use-it-h" className="post__h2">How I use AI coding tools</h2>
        <p>This is roughly how I work, on my own projects and on client code:</p>
        <ol className="post__steps">
          <li>I write down what done looks like before I prompt: the behavior, the edge cases, and what’s out of scope.</li>
          <li>I give it the context it can’t guess. That means the relevant files, the libraries we already use, and how we handle errors.</li>
          <li>I keep each change small enough to review in one sitting. One task, one pull request.</li>
          <li>I read every line. If I can’t explain a line, it doesn’t get merged.</li>
          <li>I ask what can be deleted. “Can this be simpler?” is my most useful follow-up prompt.</li>
          <li>I make sure the tests cover the case that would embarrass me, not only the happy path.</li>
          <li>I refactor when the first answer works but doesn’t fit the codebase.</li>
          <li>When it goes in circles, I stop and write the code myself.</li>
        </ol>
      </section>
    </>
  );
}

export function Closing() {
  return (
    <>
      <h2 id="closing-h" className="post__close-title h2">I don’t care who wrote it</h2>
      <div className="post__close-copy">
        <p className="lead">I care whether the code is correct, understandable, maintainable and secure, and whether it solves the problem we actually have.</p>
        <p className="post__close-principle">AI is a tool, and a good one. Engineering judgment is still what decides what gets merged.</p>
        <div className="post__close-actions">
          <Link to="/contact/" className="action">Talk about how your team uses AI <ArrowRight /></Link>
          <Link to="/leadership/" className="link-arrow"><span>How I run engineering</span> <ArrowRight /></Link>
        </div>
      </div>
    </>
  );
}
