#!/usr/bin/env python3
"""Internal-link audit for the writing section.

Checks that every /writing/ link in post bodies, related lists and reading
paths resolves, that no post is orphaned, that no article links to the same
post more than once in its body, and that related lists have no duplicates.
Exit code 1 on any failure. Run: python3 scripts/check-internal-links.py
"""
import collections
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WRITING = os.path.join(ROOT, 'src/content/writing.js')
POSTS = os.path.join(ROOT, 'src/content/posts')
PAGE_ROUTES = os.path.join(ROOT, 'src/pageRoutes.js')

src = open(WRITING, encoding='utf-8').read()
slugs = re.findall(r"^\s{4}slug: '([^']+)',", src, re.M)
related = {}
missing_meta = []
for slug in slugs:
    meta_file = os.path.join(POSTS, 'meta', slug + '.js')
    if not os.path.exists(meta_file):
        missing_meta.append(slug)
        related[slug] = []
        continue
    meta = open(meta_file, encoding='utf-8').read()
    m = re.search(r"related: \[(.*?)\n\s{2}\],", meta, re.S)
    related[slug] = re.findall(r"to: '([^']+)'", m.group(1)) if m else []
# Reading paths and chapters on /writing/ both link every slug they list.
journey_slugs = []
for name in ('journeys', 'chapters'):
    block = re.search(r"export const " + name + r" = \[(.*?)\n\]", src, re.S).group(1)
    journey_slugs += re.findall(r"^\s{6}'([^']+)',", block, re.M)

# Routes outside /writing/ that links may point at.
routes = set(re.findall(r"path: '([^']+)'", open(PAGE_ROUTES, encoding='utf-8').read()))
case_slugs = re.findall(r"slug: '([^']+)'", open(os.path.join(ROOT, 'src/content/work.js'), encoding='utf-8').read())
project_slugs = re.findall(r"slug: '([^']+)'", open(os.path.join(ROOT, 'src/content/projects.js'), encoding='utf-8').read())

def resolves(to):
    path = to.split('#')[0].split('?')[0]
    m = re.match(r'^/writing/([^/]+)/$', path)
    if m:
        return m.group(1) in slugs
    if path == '/writing/' or path == '/':
        return True
    m = re.match(r'^/work/([^/]+)/$', path)
    if m:
        return m.group(1) in case_slugs
    m = re.match(r'^/projects/([^/]+)/$', path)
    if m:
        return m.group(1) in project_slugs
    return path.strip('/') in routes

errors, warnings = [f'{slug}: no meta file in src/content/posts/meta' for slug in missing_meta], []
inbound = collections.defaultdict(set)
for slug in slugs:
    f = os.path.join(POSTS, slug + '.jsx')
    if not os.path.exists(f):
        errors.append(f'{slug}: no body file in src/content/posts')
        continue
    body = open(f, encoding='utf-8').read()
    links = [l for l in re.findall(r'(?:to|href)=["\']([^"\']+)["\']', body) if l.startswith('/')]
    counts = collections.Counter(re.sub(r'[#?].*$', '', l) for l in links)
    for to in links:
        if not resolves(to):
            errors.append(f'{slug}: body link does not resolve: {to}')
        m = re.match(r'^/writing/([^/#?]+)/', to)
        if m:
            if m.group(1) == slug:
                errors.append(f'{slug}: links to itself')
            inbound[m.group(1)].add(slug)
    for to, n in counts.items():
        if n > 1 and to.startswith('/writing/'):
            warnings.append(f'{slug}: links to {to} {n} times in the body')
    seen = set()
    for to in related[slug]:
        if not resolves(to):
            errors.append(f'{slug}: related link does not resolve: {to}')
        if to in seen:
            errors.append(f'{slug}: duplicate related link {to}')
        seen.add(to)
        m = re.match(r'^/writing/([^/#?]+)/', to)
        if m:
            if m.group(1) == slug:
                errors.append(f'{slug}: related list links to itself')
            inbound[m.group(1)].add(slug)

for s in journey_slugs:
    if s not in slugs:
        errors.append(f'journeys: unknown slug {s}')
for slug in slugs:
    in_journey = slug in journey_slugs
    if not inbound[slug] and not in_journey:
        errors.append(f'{slug}: orphaned (no inbound body or related link, not in a reading path)')
    elif not inbound[slug]:
        warnings.append(f'{slug}: only reachable through a reading path')

for w in warnings:
    print('WARN ', w)
for e in errors:
    print('FAIL ', e)
print(f'{len(slugs)} posts, {sum(len(v) for v in inbound.values())} post-to-post links, {len(journey_slugs)} reading-path steps, {len(errors)} failures, {len(warnings)} warnings')
sys.exit(1 if errors else 0)
