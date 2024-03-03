import { Routes, Route } from 'react-router-dom';
import { LoadingProvider } from 'hooks/useLoader';

import { lazy } from 'react';
// components
import Layout from '../Layout';
import Cast from 'pages/Cast';

// pages
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

const App = () => (
  <main>
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </LoadingProvider>
  </main>
);

export default App;
