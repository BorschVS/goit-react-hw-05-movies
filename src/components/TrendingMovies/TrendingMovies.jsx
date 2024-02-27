import getMovies from 'api/movies';
import { useEffect, useState } from 'react';
import Thumb from 'components/Thumb';
import { List, Item } from './TrendingMovies.styled';
import { useLoading } from 'hooks/useLoader';
import Container from 'components/Container';
import Loader from 'components/Loader/Loader';

const TrendingMovies = () => {
  const { isLoading, setLoading } = useLoading();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      setLoading(true);
      const movies = await getMovies();
      setMovies(movies.results);
    } catch (error) {
      throw new Error('Oh no! Something is crash:(');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div>
        {!isLoading ? (
          <List>
            {movies &&
              movies.map(movie => (
                <Item key={movie.id}>
                  <Thumb
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                  />
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
