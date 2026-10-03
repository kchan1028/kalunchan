"""Audit prerendered SEO, link integrity, and the site's privacy constraints."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1] / 'build'
EVENT_YEAR_ROUTES = {'/writing/', '/writing/berkeley-omnium-new-website-next-generation/'}
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
community = pages[ROOT / 'community/index.html']
graph = community.structured[0]['@graph']
assert {'WebPage', 'Thing', 'SportsOrganization', 'BreadcrumbList'} <= {v['@type'] for v in graph}
assert 'six East Bay NICA teams' in ' '.join(community.text)
print(f'PASS: {len(pages)} pages, {link_count} internal links/anchors, {len(urls)} canonical sitemap URLs.')
print('PASS: metadata, heading hierarchy, JSON-LD, images, privacy, and permanent followed backlinks.')
print(json.dumps(backlinks, indent=2))
