import React from 'react';
import '../css/component/MovieModal.css'

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="movie-modal-overlay" onClick={onClose}>
      <div className="movie-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{movie.title}</h2>
        <img src={movie.posterPath} alt={movie.title} />
        <p>{movie.overview}</p>
        <span>⭐ {movie.voteAverage}</span>
      </div>
    </div>
  );
};

export default MovieModal;
