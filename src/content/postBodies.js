// Post bodies are code-split: each one is its own chunk, loaded only on its own page.
// The client loads the current post before hydrating (entry-client.jsx) and on navigation (Post.jsx);
// prerendering loads them all first (entry-server.jsx), so every page still renders synchronously.
// Hidden drafts (DEV-gated in writing.js) are left out of builds so their bodies never ship as public chunks.
const loaders = import.meta.env.DEV
  ? import.meta.glob('./posts/*.jsx')
  : import.meta.glob(['./posts/*.jsx', '!./posts/why-i-built-fedpath.jsx', '!./posts/learning-hermes-building-ai-automation-around-the-clock.jsx']);
const loaded = {};

export const getBody = (slug) => loaded[slug];

export function loadBody(slug) {
  const load = loaders[`./posts/${slug}.jsx`];
  if (loaded[slug] || !load) return Promise.resolve(loaded[slug]);
  return load().then((mod) => (loaded[slug] = mod));
}

export const loadAllBodies = () => Promise.all(Object.keys(loaders).map((key) => loadBody(key.slice('./posts/'.length, -'.jsx'.length))));
