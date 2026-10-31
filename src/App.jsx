import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import { usePageTransition } from './components/usePageTransition';
import { getPage, loadPage, pageRoutes, reloadPage } from './pageRoutes';

// The route's chunk is normally in before this renders. If not (a second click mid-transition), render once it arrives.
function Page({ name }) {
  const [, setLoaded] = useState(null);
  useEffect(() => {
    if (!getPage(name)) loadPage(name).then(() => setLoaded(name), reloadPage);
  }, [name]);
  const Component = getPage(name);
  return Component ? <Component /> : null;
}

export default function App() {
  const shown = usePageTransition();
  return (
    <Routes location={shown}>
      <Route element={<Layout />}>
        {pageRoutes.map((r) => (
          <Route key={r.path || 'index'} index={r.index} path={r.path} element={<Page name={r.page} />} />
        ))}
      </Route>
    </Routes>
  );
}
