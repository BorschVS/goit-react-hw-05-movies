import { findMoviesByName } from 'api/movies';
import SearchMovies from 'components/SearchMovies';
import Thumb from 'components/Thumb';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Accent, MoviesWrapper, Text, Title } from './Pages.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    (async () => {
      const movies = await findMoviesByName(query);
      setMovies(movies);
    })();
  }, [query]);

  const updateQueryString = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  return (
    <div>
      <SearchMovies query={query} updateQuery={updateQueryString} />
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
              <Thumb src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
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
    </div>
  );
};

export default Movies;
