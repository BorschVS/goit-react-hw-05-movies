import { findMoviesByName } from 'api/movies';
import SearchMovies from 'components/SearchMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Accent,
  Img,
  MovieThumb,
  MoviesWrapper,
  Text,
  Title,
} from './Movies.styled';

const Movies = () => {
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        const movies = await findMoviesByName(query);
        setMovies(movies);
      })();
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const updateQueryString = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  return (
    <div>
      <SearchMovies query={query} updateQuery={updateQueryString} />

      {!isLoading && (
        <ul>
          {movies.map(
            ({
              id,
              title,
              overview,
              poster_path,
              vote_average,
              release_date,
            }) => (
              <MoviesWrapper key={id}>
                <MovieThumb>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />
                </MovieThumb>
                <div>
                  <Title>{title}</Title>
                  <Text>{overview}</Text>
                  <Text>
                    <Accent>score </Accent>
                    {vote_average}
                  </Text>
                  <Text>
                    <Accent>release</Accent> {release_date}
                  </Text>
                </div>
              </MoviesWrapper>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Movies;
