"""Audit prerendered SEO, link integrity, the site's privacy constraints, and JS size."""
import gzip
import json
import os
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1] / os.environ.get('BUILD_DIR', 'build')
EVENT_YEAR_ROUTES = {'/writing/', '/writing/berkeley-omnium-new-website-next-generation/'}
# Owner-approved dated phrases (POSITIONING.md), allowed only verbatim on their page.
APPROVED_DATED_TEXT = {
    '/about/': ['That figure is from September 2026'],
    # The privacy notice's effective date (src/pages/Privacy.jsx PRIVACY_EFFECTIVE, shown twice).
    '/privacy/': ['Effective 29 October 2026', '29 October 2026'],
    # Token prices change; the pricing table must say when they were checked.
    '/writing/hidden-cost-of-ai-coding/': ['as of October 2026'],
}
# Owner-approved career years, shown only on the founder story; other pages stay undated.
APPROVED_YEARS = {
    '/writing/building-a-startup-from-idea-to-acquisition/': r'\b(?:2007|2013|2024)\b',
    # Owner-approved era and historical dates (Nokia, Symbian, iPhone) on the Nokia VoIP story.
    '/writing/voip-apps-for-nokia-phones-before-the-iphone/': r'\b(?:2003|2005|2006|2007|2008|2009|2010)\b',
    # NetScreen's founding and Juniper acquisition years (public record), not career dates.
    '/writing/network-security-before-devsecops/': r'\b(?:1997|2004)\b',
    # AdSense per-impression change (2024) and FTC Endorsement Guides update (2023): public record, not career dates.
    '/writing/digital-publishing-seo-adsense-affiliate-ai-search/': r'\b(?:2023|2024)\b',
    # Owner-confirmed fundraising totals by event year.
    '/writing/organizing-berkeley-omnium-leadership-lessons/': r'\b(?:2025|2026)\b',
}
OMNIUM_URLS = {'https://berkeleyomnium.com/', 'https://berkeleyomnium.com/sponsor/'}
ORIGIN = 'https://kalunchan.dev'

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.links, self.images, self.ids, self.text, self.headings = [], [], set(), [], []
        self.meta, self.canonical, self.structured = {}, [], []
        self.title, self.titles, self.hidden, self.schema = False, [], 0, None
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.add(a['id'])
        if tag == 'a':
            self.links.append(a)
        if tag == 'img':
            self.images.append(a)
        if re.fullmatch(r'h[1-6]', tag):
            self.headings.append(int(tag[1]))
        if tag == 'meta':
            self.meta[a.get('name', a.get('property'))] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a['href'])
        if tag == 'title':
            self.title = True
        if tag in ('script', 'style'):
            self.hidden += 1
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.schema = ''

    def handle_endtag(self, tag):
        if tag == 'title':
            self.title = False
        if tag in ('script', 'style'):
            self.hidden -= 1
        if tag == 'script' and self.schema is not None:
            self.structured.append(json.loads(self.schema))
            self.schema = None

    def handle_data(self, data):
        if not self.hidden:
            self.text.append(data)
        if self.title:
            self.titles.append(data)
        if self.schema is not None:
            self.schema += data

pages = {p: Page(p.read_text()) for p in ROOT.rglob('*.html')}
assert pages, 'Run npm run build first'
titles, descriptions = set(), set()
link_count = 0
backlinks = {}
for path, page in pages.items():
    route = '/' + str(path.relative_to(ROOT)).removesuffix('index.html')
    title, description = ''.join(page.titles), page.meta.get('description')
    assert title and title not in titles, f'Duplicate/missing title: {path}'
    assert description and description not in descriptions, f'Duplicate/missing description: {path}'
    titles.add(title)
    descriptions.add(description)
    assert page.headings.count(1) == 1, f'Expected one H1: {path}'
    for before, after in zip(page.headings, page.headings[1:]):
        assert after <= before + 1, f'Skipped heading level: {path}'
    assert page.meta.get('og:title') == title, path
    assert page.meta.get('og:description') == description, path
    assert page.meta.get('og:image:alt'), path
    assert (ROOT / urlsplit(page.meta['og:image']).path.lstrip('/')).is_file(), path
    if path.name == '404.html':
        assert page.meta.get('robots') == 'noindex', path
    else:
        expected = '/projects/' if route == '/work/' else route
        assert page.canonical == [ORIGIN + expected], (path, page.canonical)
        assert page.meta.get('og:url') == ORIGIN + expected, path
    # Event years (e.g. "2027 Berkeley Omnium") are owner-approved on these routes only; career dates stay private.
    text = ' '.join(page.text)
    if route in EVENT_YEAR_ROUTES:
        text = re.sub(r'\b20[2-9]\d\b', '', text)
    for phrase in APPROVED_DATED_TEXT.get(route, []):
        text = text.replace(phrase, '')
    if route in APPROVED_YEARS:
        text = re.sub(APPROVED_YEARS[route], '', text)
    assert not re.search(r'\b(?:19|20)\d{2}\b|\bpresent\b', text, re.I), path
    for img in page.images:
        assert img.get('alt') and img.get('width') and img.get('height'), (path, img)
        assert (ROOT / img['src'].lstrip('/')).is_file(), (path, img)
    counts = {'omnium': 0, 'club': 0}
    for a in page.links:
        href = a.get('href', '')
        url = urlsplit(href)
        assert not re.search(r'\.pdf|résumé|resume', href, re.I), (path, href)
        if 'berkeleyomnium' in url.netloc:
            assert href in OMNIUM_URLS, (path, href)
            assert not any(v in a.get('rel', '') for v in ('nofollow', 'sponsored')), (path, a)
            counts['omnium'] += 1
        if 'berkeleybikeclub' in url.netloc:
            assert href == 'https://berkeleybikeclub.org/', (path, href)
            assert 'nofollow' not in a.get('rel', ''), (path, a)
            counts['club'] += 1
        if url.scheme or url.netloc:
            continue
        target = ROOT / url.path.strip('/') / 'index.html' if url.path else path
        assert target in pages, (path, href)
        if url.fragment:
            assert unquote(url.fragment) in pages[target].ids, (path, href)
        link_count += 1
    if any(counts.values()):
        backlinks[route] = counts
    assert any(a.get('href') == 'https://www.linkedin.com/in/kchan1288/' for a in page.links), path
    assert any(a.get('href') == 'https://yippify.com' and 'nofollow' not in a.get('rel', '') for a in page.links), path

banned = r'boulevard|iworld|talkfree|covad|north.?point|milestone|movietimes|s3-website|amazonaws\.com'
for path in ROOT.rglob('*'):
    if path.suffix in ('.html', '.js', '.css', '.xml', '.json', '.svg'):
        assert not re.search(banned, path.read_text(), re.I), f'Private name or staging host in {path}'

sitemap = ElementTree.parse(ROOT / 'sitemap.xml')
urls = {el.text for el in sitemap.findall('.//{*}loc')}
expected_urls = {p.canonical[0] for p in pages.values() if p.canonical}
assert urls == expected_urls, (urls, expected_urls)
for lastmod in sitemap.findall('.//{*}lastmod'):
    assert re.fullmatch(r'\d{4}-\d{2}-\d{2}', lastmod.text), lastmod.text

# Structured data: breadcrumb items are real pages, and every {"@id": ...} reference
# points at a node defined on this page or another page of the site.
def nodes(v):
    if isinstance(v, dict):
        yield v
        for x in v.values():
            yield from nodes(x)
    elif isinstance(v, list):
        for x in v:
            yield from nodes(x)

defined, referenced = set(), set()
for path, page in pages.items():
    for block in page.structured:
        for n in nodes(block):
            if '@id' in n and len(n) > 1:
                defined.add(n['@id'])
            elif set(n) == {'@id'}:
                referenced.add((path, n['@id']))
            if n.get('@type') == 'ListItem' and 'item' in n:
                assert n['item'] in urls, (path, n['item'])
missing = {(str(p), i) for p, i in referenced if i not in defined}
assert not missing, missing
# Moved pages (scripts/redirects.json, served as 301s by npm run redirects): every target is built and
# canonical, no source is still built or linked, and no target is itself redirected.
redirects = json.loads((Path(__file__).resolve().parent / 'redirects.json').read_text())
sources = {r['from'] for r in redirects}
for r in redirects:
    assert r['to'] not in sources, ('redirect chain', r)
    assert (ROOT / r['to'].strip('/') / 'index.html').is_file(), ('redirect target not built', r)
    assert ORIGIN + r['to'] in urls, ('redirect target not in sitemap', r)
    assert not (ROOT / r['from'].strip('/') / 'index.html').exists(), ('redirect source still built', r)
for path, page in pages.items():
    for a in page.links:
        href = urlsplit(a.get('href', ''))
        if href.netloc in ('', 'kalunchan.dev'):
            assert href.path not in sources, ('link to a redirected page', path, a.get('href'))

community = pages[ROOT / 'community/index.html']
graph = community.structured[0]['@graph']
assert {'WebPage', 'Thing', 'SportsOrganization', 'BreadcrumbList'} <= {v['@type'] for v in graph}
assert 'six East Bay NICA teams' in ' '.join(community.text)
# JS budgets, gzipped. Every page shares the main chunk, and a page's HTML lists every chunk it needs. A static import
# of site.js, a page or a post body from shared code fails here. Raise these only for something every reader needs.
MAIN_CHUNK_GZIP = 100_000
PAGE_JS_GZIP = 150_000
gzipped = {f.name: len(gzip.compress(f.read_bytes(), 9)) for f in (ROOT / 'assets').glob('*.js')}
main_chunk = next(f for f in gzipped if f.startswith('index-'))
assert gzipped[main_chunk] <= MAIN_CHUNK_GZIP, f'Main chunk is {gzipped[main_chunk]} bytes gzipped, over {MAIN_CHUNK_GZIP}'
page_js = 0
for path in pages:
    chunks = set(re.findall(r'(?:src|href)="/assets/([^"]+\.js)"', path.read_text()))
    total = sum(gzipped[c] for c in chunks)
    assert total <= PAGE_JS_GZIP, f'{path} loads {total} bytes of JS gzipped, over {PAGE_JS_GZIP}: {sorted(chunks, key=gzipped.get)[-3:]}'
    page_js = max(page_js, total)
print(f'PASS: JS budgets: main chunk {gzipped[main_chunk]}, largest page {page_js} bytes gzipped')
print(f'PASS: {len(pages)} pages, {link_count} internal links/anchors, {len(urls)} canonical sitemap URLs.')
print('PASS: metadata, heading hierarchy, JSON-LD, images, privacy, and permanent followed backlinks.')
print(json.dumps(backlinks, indent=2))
