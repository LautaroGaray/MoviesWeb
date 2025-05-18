import React from 'react';
import '../css/component/GenreSection.css';
import { MovieCard } from './MovieCard';

export const GenreSection = ({ genre, movies }) => {
  return (
    <section className="genre-section">
      <h2>{genre}</h2>
      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
