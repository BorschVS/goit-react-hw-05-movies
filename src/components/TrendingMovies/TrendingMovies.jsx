import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'api/movies';
import { useEffect, useState } from 'react';
import Thumb from 'components/Thumb';
import { List, Item } from './TrendingMovies.styled';
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
        throw new Error('Oh no! Something is crash:(');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <div>
        {!isLoading ? (
          <List>
            {movies &&
              movies.map(movie => (
                <Item key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    <Thumb
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.name}
                    />
                  </Link>
                </Item>
              ))}
          </List>
        ) : (
          <Loader />
        )}
      </div>
    </Container>
  );
};

export default TrendingMovies;
