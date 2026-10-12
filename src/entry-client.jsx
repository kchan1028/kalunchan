import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import { loadBody } from './content/postBodies';
import './styles/index.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// A prerendered post page hydrates only after its body chunk is in, so the first client render matches the HTML.
const postSlug = window.location.pathname.match(/^\/writing\/([^/]+)\/?$/)?.[1];
(postSlug ? loadBody(postSlug) : Promise.resolve()).finally(() => {
  if (container.firstElementChild) hydrateRoot(container, app);
  else createRoot(container).render(app);
});
