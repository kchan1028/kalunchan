import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import './styles/index.css';

export { routes, headFor, llmsTxt } from './site';
export { loadAllBodies } from './content/postBodies';
export { loadAllPages, pageFor } from './pageRoutes';

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
