import React, { useState } from 'react';
import '../css/component/MovieCard.css';
import MovieModal from './MovieModal';

export const MovieCard = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="movie-card">
        <img src={movie.posterPath} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <span>⭐ {movie.voteAverage}</span>
        </div>
        <button className="see-more-btn" onClick={handleSeeMoreClick}>
          ...Ver más
        </button>
      </div>

      {isModalOpen && <MovieModal movie={movie} onClose={handleCloseModal} />}
    </>
  );
};
