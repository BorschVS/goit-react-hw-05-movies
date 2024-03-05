import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'api/movies';
import { useEffect, useState } from 'react';
import {
  List,
  Item,
  MoviesWrapper,
  MovieThumb,
  Img,
} from './TrendingMovies.styled';
import Container from 'components/Container';
import Loader from 'components/Loader/Loader';

const TrendingMovies = () => {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MoviesWrapper>
      <Container>
        <List>
          {!isLoading ? (
            movies &&
            movies.map(movie => (
              <Item key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  <MovieThumb>
                    <Img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.name}
                    />
                  </MovieThumb>
                </Link>
              </Item>
            ))
          ) : (
            <Loader />
          )}
        </List>
      </Container>
    </MoviesWrapper>
  );
};

export default TrendingMovies;
