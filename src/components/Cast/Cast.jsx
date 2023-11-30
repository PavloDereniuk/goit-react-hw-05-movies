import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api';
import { useParams } from 'react-router-dom';

import Loader from '../../Loader';
import Error from 'components/Error/Error';
import { List, Item, Text } from './Cast.styled';
import NoFoundImage from './image/image_not_found.png';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        setError(false);
        const MovieCast = await fetchMovieCast(movieId);
        setCast(MovieCast);
      } catch (error) {
        setError(true);
      }  finally {
        setLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {cast.length > 0 ? (
        <List>
          {cast.map(({ profile_path, cast_id, name, character }) => {
            const src = profile_path
            ? `https://image.tmdb.org/t/p/w92/${profile_path}`
            : NoFoundImage;
            return (
              <Item key={cast_id}>
                  <img src={src} alt={name} width={92}/>
                <div>
                  <Text>{name}</Text>
                  <Text>
                    <b>Character:</b> {character}
                  </Text>
                </div>
              </Item>
            );
          })}
        </List>
      ) : (
        <Text>Sorry, there is no information about this actor.</Text>
      )}
    </div>
  );
}