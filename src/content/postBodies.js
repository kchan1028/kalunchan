// Post bodies are code-split: each one is its own chunk, loaded only on its own page.
// The client loads the current post before hydrating (entry-client.jsx) and on navigation (Post.jsx);
// prerendering loads them all first (entry-server.jsx), so every page still renders synchronously.
const loaders = import.meta.glob('./posts/*.jsx');
const loaded = {};

export const getBody = (slug) => loaded[slug];

export function loadBody(slug) {
  const load = loaders[`./posts/${slug}.jsx`];
  if (loaded[slug] || !load) return Promise.resolve(loaded[slug]);
  return load().then((mod) => (loaded[slug] = mod));
}

export const loadAllBodies = () => Promise.all(Object.keys(loaders).map((key) => loadBody(key.slice('./posts/'.length, -'.jsx'.length))));
