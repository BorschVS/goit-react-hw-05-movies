import { useRef, useState, useEffect } from 'react';
import { Accent, Title, Text } from 'pages/Movies/Movies.styled';
import { CardInfo, PageWrapper, StyledLink } from './MovieDetails.styled';
import { CardWrapper } from './MovieDetails.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import { HiOutlineArrowLeft } from 'react-icons/hi2';

import { getMovieById } from 'api/movies';
import {
  Img,
  MovieThumb,
} from 'components/TrendingMovies/TrendingMovies.styled';

const MovieDetails = () => {
  const [isLoading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const movie = await getMovieById(id);
        setMovie(movie);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    })();

    // eslint-disable-next-line
  }, []);

  const { title, overview, vote_average, vote_count, poster_path } = movie;

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
            <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
          </MovieThumb>
          <CardInfo>
            <Title style={{ alignSelf: 'start' }}>{title}</Title>

            <Accent>overiview</Accent>
            <Text>{overview}</Text>

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
