import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
// import { getMovieById } from 'api/movies';

const MovieDetails = () => {
  // const [isLoading, setLoading] = useState(false);
  // const [movie, setMovie] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const movie = await getMovieById(id);
  //       setMovie(movie);
  //     } catch (error) {
  //       throw new Error('Oh no! Something is crash:(');
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  // { name, overview, vote_average, vote_count, poster_path }

  // console.log(movie);

  const location = useLocation();
  const backLinkToLocationRef = useRef(location.state?.from ?? '/');
  return (
    <div>
      <Link to={backLinkToLocationRef.current}>Back</Link>
      {/* <h1>{name}</h1>
      <p>{overview}</p> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
