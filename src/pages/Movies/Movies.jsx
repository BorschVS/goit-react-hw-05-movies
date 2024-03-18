import { findMoviesByName } from 'api/movies';
import SearchMovies from 'components/SearchMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  List,
  Item,
  MoviesWrapper,
  MovieThumb,
  Img,
  Accent,
  MovieInfo,
  UpperText,
  Text,
  Title,
} from 'components/TrendingMovies/TrendingMovies.styled';

import fallbackImageUrl from 'img/fallback-280.png';

const Movies = () => {
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';
  console.log(query);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        console.log(query);

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
    const nextQuery = { query };
    setSearchParams(nextQuery);
  };

  return (
    <div>
      <SearchMovies query={query} updateQuery={updateQueryString} />

      {!isLoading && (
        <List>
          {movies.map(
            ({
              id,
              title,
              poster_path,
              vote_average,
              original_title,
              original_language,
            }) => (
              <Item key={id}>
                <MoviesWrapper key={id}>
                  <MovieThumb>
                    <Link to={`${id}`} state={{ from: location }}>
                      <Img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src = fallbackImageUrl;
                        }}
                      />
                      <MovieInfo>
                        <Title> {title ? title : original_title}</Title>
                        <Text>
                          <Accent>score: </Accent>
                          {vote_average}
                        </Text>
                        <Text>
                          <Accent>language: </Accent>
                          <UpperText>{original_language}</UpperText>
                        </Text>
                      </MovieInfo>
                    </Link>
                  </MovieThumb>
                </MoviesWrapper>
              </Item>
            )
          )}
        </List>
      )}
    </div>
  );
};

export default Movies;
