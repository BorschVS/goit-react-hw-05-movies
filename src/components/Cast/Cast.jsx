import { getCast } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, CastThumb, Img } from './Cast.styled';

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

  return (
    !isLoading && (
      <CastList>
        {cast.map(({ id, name, profile_path }) => (
          <CastItem key={id}>
            <h3>{name}</h3>
            <CastThumb>
              <Img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            </CastThumb>
          </CastItem>
        ))}
      </CastList>
    )
  );
};

export default Cast;
