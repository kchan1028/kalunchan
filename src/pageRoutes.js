import { matchRoutes } from 'react-router';
import { getBody, loadBody } from './content/postBodies';

// Pages are code-split the same way post bodies are: the client loads the current route before hydrating
// (entry-client.jsx) and before swapping pages (usePageTransition.jsx); prerendering loads them all first
// (entry-server.jsx), so every page still renders synchronously and no fallback ever reaches the HTML.
// Roadmap is local-only (App.jsx), so it never ships as a chunk.
const loaders = import.meta.glob(['./pages/*.jsx', '!./pages/Roadmap.jsx']);
const loaded = {};

export const pageRoutes = [
  { index: true, page: 'Home' },
  { path: 'about', page: 'About' },
  { path: 'community', page: 'Community' },
  { path: 'mentorship', page: 'Mentorship' },
  { path: 'contact', page: 'Contact' },
  { path: 'projects', page: 'Work' },
  { path: 'projects/:slug', page: 'Project' },
  { path: 'leadership', page: 'Leadership' },
  { path: 'engineering-leadership', page: 'EngineeringLeadership' },
  { path: 'experience', page: 'Experience' },
  { path: 'work', page: 'Work' },
  { path: 'work/:slug', page: 'CaseStudy' },
  { path: 'expertise', page: 'Expertise' },
  { path: 'writing', page: 'Writing' },
  { path: 'writing/:slug', page: 'Post' },
  { path: 'privacy', page: 'Privacy' },
  { path: '*', page: 'NotFound' },
];

export const pageFor = (pathname) => matchRoutes(pageRoutes, pathname)[0].route.page;
const postSlugOf = (pathname) => pathname.match(/^\/writing\/([^/]+)\/?$/)?.[1];

export const getPage = (name) => loaded[name];

export function loadPage(name) {
  if (loaded[name]) return Promise.resolve(loaded[name]);
  return loaders[`./pages/${name}.jsx`]().then((mod) => (loaded[name] = mod.default));
}

export const loadAllPages = () => Promise.all(pageRoutes.map((r) => loadPage(r.page)));

// Everything a URL renders: its page, and its body if it's a post.
export function loadRoute(pathname) {
  const slug = postSlugOf(pathname);
  return Promise.all([loadPage(pageFor(pathname)), slug && loadBody(slug)]);
}

export function routeReady(pathname) {
  const slug = postSlugOf(pathname);
  return Boolean(getPage(pageFor(pathname))) && (!slug || Boolean(getBody(slug)));
}
