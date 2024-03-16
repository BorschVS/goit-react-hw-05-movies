import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// components
import Layout from '../Layout';

// pages
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('components/Reviews'));
const Cast = lazy(() => import('components/Cast'));
const Error = lazy(() => import('pages/Error'));

const App = () => (
  <main>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </main>
);

export default App;
