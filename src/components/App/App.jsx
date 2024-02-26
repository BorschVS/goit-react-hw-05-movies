import { Routes, Route } from 'react-router-dom';
import { LoadingProvider } from 'hooks/useLoader';

import { lazy } from 'react';
// components
import Layout from '../Layout';

// pages
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));

const App = () => (
  <main>
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </LoadingProvider>
  </main>
);

export default App;
