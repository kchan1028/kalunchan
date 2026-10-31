import { useEffect, useState } from 'react';
import { Routes, Route, useNavigationType } from 'react-router';
import Layout from './components/Layout';
import { NavigationTypeContext, usePageTransition } from './components/usePageTransition';
import { getPage, loadPage, pageRoutes } from './pageRoutes';

// The route's chunk is normally in before this renders. If not (a second click mid-transition), render once it arrives;
// a chunk that won't load usually means a deploy replaced it, so fetch the current page fresh.
function Page({ name }) {
  const [, setLoaded] = useState(null);
  useEffect(() => {
    if (!getPage(name)) loadPage(name).then(() => setLoaded(name), () => window.location.reload());
  }, [name]);
  const Component = getPage(name);
  return Component ? <Component /> : null;
}

export default function App() {
  const shown = usePageTransition();
  const navigationType = useNavigationType();
  return (
    <NavigationTypeContext.Provider value={navigationType}>
      <Routes location={shown}>
        <Route element={<Layout />}>
          {pageRoutes.map((r) => (
            <Route key={r.path || 'index'} index={r.index} path={r.path} element={<Page name={r.page} />} />
          ))}
        </Route>
      </Routes>
    </NavigationTypeContext.Provider>
  );
}
