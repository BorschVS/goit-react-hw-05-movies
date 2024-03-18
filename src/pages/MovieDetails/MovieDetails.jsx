import { useRef, useState, useEffect } from 'react';
import {
  Accent,
  Title,
  Text,
  UpperText,
} from '../MovieDetails/MovieDetails.styled';
//
import {
  CardInfo,
  PageWrapper,
  StyledLink,
  CardWrapper,
} from './MovieDetails.styled';
//
import { Outlet, useLocation, useParams } from 'react-router-dom';
//
import { Suspense } from 'react';
import Loader from 'components/Loader';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
//
import { getMovieById } from 'api/movies';
import {
  Img,
  MovieThumb,
} from 'components/TrendingMovies/TrendingMovies.styled';

import fallbackImageUrl from 'img/fallback-280.png';

const MovieDetails = () => {
  const [isLoading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const movieInfo = await getMovieById(id);
        if (movieInfo) {
          setMovie(movieInfo);
        }
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const {
    title,
    overview,
    original_language,
    vote_average,
    vote_count,
    poster_path,
    original_title,
  } = movie;

  const location = useLocation();
  const backLinkToLocationRef = useRef(location.state?.from ?? '/');
  return (
    !isLoading && (
      <PageWrapper>
        <StyledLink to={backLinkToLocationRef.current}>
          <HiOutlineArrowLeft />
          <span>Back</span>
        </StyledLink>
        <CardWrapper>
          <MovieThumb>
            <Img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              onError={e => {
                e.target.onerror = null;
                e.target.src = fallbackImageUrl;
              }}
            />
          </MovieThumb>
          <CardInfo>
            <Title style={{ alignSelf: 'start' }}>
              {title ? title : original_title}
            </Title>

            <Accent>overiview</Accent>
            <Text>{overview}</Text>

            <Text>
              <Accent>language: </Accent>
              <UpperText>{original_language}</UpperText>
            </Text>

            <Text>
              <Accent>score: </Accent>

              {vote_average}
            </Text>
            <Text>
              <Accent>votes: </Accent>
              {vote_count}
            </Text>
          </CardInfo>
        </CardWrapper>

        <CardWrapper>
          <StyledLink style={{ justifyContent: 'center' }} to="credits">
            CAST
          </StyledLink>
          <StyledLink style={{ justifyContent: 'center' }} to="reviews">
            REVIEWS
          </StyledLink>
        </CardWrapper>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PageWrapper>
    )
  );
};

export default MovieDetails;
