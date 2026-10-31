import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import { loadRoute } from './pageRoutes';
import './styles/index.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// A prerendered page hydrates only after its chunks are in, so the first client render matches the HTML.
// If they fail to load, it stays as readable static HTML whose links still work.
loadRoute(window.location.pathname).then(() => {
  if (container.firstElementChild) hydrateRoot(container, app);
  else createRoot(container).render(app);
});
