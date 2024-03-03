import { useRef, useState, useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import Thumb from 'components/Thumb';
import { HiOutlineArrowLeft } from 'react-icons/hi2';

import { getMovieById, cancelRequest } from 'api/movies';
import {
  Title,
  CardInfo,
  CardWrapper,
  Text,
  Accent,
  StyledLink,
  PageWrapper,
} from './Pages.styled';
import Cast from './Cast';

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
    <PageWrapper>
      <StyledLink to={backLinkToLocationRef.current}>
        <HiOutlineArrowLeft />
        <span>Back</span>
      </StyledLink>
      <CardWrapper>
        <Thumb src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
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

          <Text>
            <Accent>
              <Link to="credits">CAST</Link>
            </Accent>
          </Text>
        </CardInfo>
      </CardWrapper>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </PageWrapper>
  );
};

export default MovieDetails;
