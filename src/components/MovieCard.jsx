import React from 'react';
import '../css/component/MovieCard.css';

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterPath} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <span>⭐ {movie.voteAverage}</span>
      </div>
    </div>
  );
};
