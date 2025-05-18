import React, { useEffect, useState } from 'react';
import { gateway } from '../../services/gateway';
import { GenreSection } from '../components/GenreSection';
import { ErrorModal } from '../components/ErrorModal';


export const MovieBrowser = () => {
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await gateway('moviesBackend', 'getPopular', { method: 'GET' });
      console.log('RESPUEST')
      console.log(res)

      if (!res.isSuccess || res.code !== 200) {
        setError(res.message || 'Error desconocido');
        return;
      }

      const grouped = {};

      res.data.forEach((movie) => {
        movie.genres.forEach((g) => {
          if (!grouped[g.genre]) grouped[g.genre] = [];
          grouped[g.genre].push(movie);
        });
      });

      setMoviesByGenre(grouped);
    };

    loadMovies();
  }, []);

  return (
    <div className="movie-browser">
      {error && <ErrorModal message={error} onClose={() => setError(null)} />}
      {Object.keys(moviesByGenre).map((genre) => (
        <GenreSection key={genre} genre={genre} movies={moviesByGenre[genre]} />
      ))}
    </div>
  );
};
