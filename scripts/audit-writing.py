"""Audit prerendered pages for AI-writing patterns (see AGENTS.md).

Fails on: em dashes, en/double-hyphen sentence separators, "isn't X. It's Y" contrasts,
and "Here's the thing" / "Here's how" run-ups in rendered prose. Code is excluded.
Warns on: pages where more than 25% of bullets open with a bold label, and post closing lines that are slogan lists.
A hit listed in KNOWN warns instead of failing; keep that list empty.
"""
import os
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / os.environ.get('BUILD_DIR', 'build')
BOLD_LEAD_MAX = 0.25
BOLD_LEAD_MIN_ITEMS = 8  # a page with a handful of bullets says little about habit
BLOCKS = {'p', 'li', 'blockquote', 'figcaption', 'td', 'th', 'dd', 'h1', 'h2', 'h3', 'h4'}
SKIP = {'script', 'style', 'nav', 'header', 'footer', 'pre', 'code'}

A = "['’]"  # straight or curly apostrophe
ISNT_ITS = re.compile(rf"[^.!?]*\b(?:isn{A}t|is not|aren{A}t|are not|wasn{A}t|was not)\b[^.!?]*[.!?]\s+It(?:{A}s| is)\b[^.!?]*[.!?]?")
HERES = re.compile(rf"\bHere{A}s (?:the thing|how)\b", re.I)

# (route, start of the matched text) for a hit that has to stay live for now. Rewrite it and delete the entry.
KNOWN = set()

# En dashes between numbers are ranges, not sentence separators.
EM_DASH = re.compile('—')
EN_SEPARATOR = re.compile(r'(?<!\d)–|–(?!\d)')
DOUBLE_HYPHEN = re.compile(r'(?<=\s)--(?=\s)')


class Page(HTMLParser):
    """Collects the text of each block inside <main>, the bullets, and the post's closing principle."""

    def __init__(self, source):
        super().__init__()
        self.skip = self.in_main = 0
        self.blocks, self.stack = [], []
        self.items = self.bold_items = 0
        self.li_open = False  # inside an <li> that has shown no text yet
        self.bold_pending = False  # the current <li> opened with <strong>; counted once we see its text
        self.principle, self.in_principle = None, False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in SKIP:
            self.skip += 1
        if tag == 'main':
            self.in_main += 1
        if self.skip or not self.in_main:
            return
        if tag in BLOCKS:
            self.stack.append([tag, ''])
        if tag == 'li':
            self.items += 1
            self.li_open = True
        if tag in ('strong', 'b') and self.li_open:
            self.bold_pending = True
            self.li_open = False
        if 'post__close-principle' in (a.get('class') or ''):
            self.principle, self.in_principle = '', True

    def handle_endtag(self, tag):
        if tag in SKIP:
            self.skip = max(0, self.skip - 1)
        if tag == 'main':
            self.in_main -= 1
        if self.skip or not self.in_main:
            return
        if tag in BLOCKS and self.stack and self.stack[-1][0] == tag:
            text = re.sub(r'\s+', ' ', self.stack.pop()[1]).strip()
            if text:
                self.blocks.append(text)
        if tag == 'p':
            self.in_principle = False

    def handle_data(self, data):
        if self.skip or not self.in_main:
            return
        for block in self.stack:
            block[1] += data
        if data.strip():
            self.li_open = False
            if self.bold_pending:
                # A bold figure ("20+", "400,000+") is a stat callout, not a label.
                self.bold_items += not re.match(r'\s*[\d$~<>]', data)
                self.bold_pending = False
        if self.in_principle:
            self.principle += data


def is_slogan_list(line):
    """A closing line built as a list of imperatives or nouns: four or more comma-separated parts in one sentence."""
    return any(s.count(',') >= 3 for s in re.split(r'(?<=[.!?])\s+', line))


def known(route, text):
    return any(r == route and text.startswith(start) for r, start in KNOWN)


pages = {p: Page(p.read_text()) for p in ROOT.rglob('index.html')}
assert pages, 'Run npm run build first'
failures, warnings, debt, seen = [], [], [], set()
for path, page in sorted(pages.items()):
    route = '/' + str(path.relative_to(ROOT)).removesuffix('index.html')
    for block in page.blocks:
        for rx, label in ((EM_DASH, 'em dash in prose'), (EN_SEPARATOR, 'en dash sentence separator'), (DOUBLE_HYPHEN, 'double-hyphen sentence separator'), (ISNT_ITS, '"isn’t X. It’s Y" contrast'), (HERES, '"Here’s the thing/how" run-up')):
            for m in rx.finditer(block):
                text = m.group(0).strip()
                if (route, text) in seen:
                    continue
                seen.add((route, text))
                (debt if known(route, text) else failures).append(f'{route}: {label}: {text[:140]}')
    if page.items >= BOLD_LEAD_MIN_ITEMS and page.bold_items / page.items > BOLD_LEAD_MAX:
        warnings.append(f'{route}: {page.bold_items} of {page.items} bullets open with a bold label (over {BOLD_LEAD_MAX:.0%})')
    if page.principle and is_slogan_list(page.principle.strip()):
        warnings.append(f'{route}: closing line is a slogan list: {page.principle.strip()[:140]}')

for line in warnings:
    print(f'warn  {line}')
for line in debt:
    print(f'debt  {line}')
for line in failures:
    print(f'FAIL  {line}', file=sys.stderr)
print(f'Writing audit: {len(pages)} pages, {len(failures)} failures, {len(warnings)} warnings, {len(debt)} known hits to rewrite')
sys.exit(1 if failures else 0)
