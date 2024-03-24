import { getCast } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, CastThumb, Img } from './Cast.styled';
import fallbackImageUrl from 'img/fallback-200.png';

const Cast = () => {
  const [isLoading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const movieCast = await getCast(id);
        setCast(movieCast);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (cast.length > 0 ?
    !isLoading && (
      <CastList>
        {cast.map(({ id, name, profile_path }) => (
          <CastItem key={id}>
            <h3>{name}</h3>
            <CastThumb>
              <Img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = fallbackImageUrl;
                }}
              />
            </CastThumb>
          </CastItem>
        ))}
      </CastList>
    ) : !isLoading && <p>Sorry, we have no information about the actors :c</p>
  );
};

export default Cast;
