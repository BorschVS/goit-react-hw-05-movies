import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'api/movies';
import { useEffect, useState } from 'react';
import {
  List,
  Item,
  MoviesWrapper,
  MovieThumb,
  Img,
  MovieInfo,
  Accent,
  UpperText,
} from './TrendingMovies.styled';
import Container from 'components/Container';
import Loader from 'components/Loader/Loader';
import { Title, Text } from './TrendingMovies.styled';

import fallbackImageUrl from 'img/fallback-280.png';

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
            movies.map(
              ({
                id,
                title,
                poster_path,
                vote_average,
                original_language,
                original_title,
              }) => (
                <Item key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    <MovieThumb>
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
                    </MovieThumb>
                  </Link>
                </Item>
              )
            )
          ) : (
            <Loader />
          )}
        </List>
      </Container>
    </MoviesWrapper>
  );
};

export default TrendingMovies;
