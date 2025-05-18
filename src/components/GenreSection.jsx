import React, { useRef, useState, useEffect } from 'react';
import '../css/component/GenreSection.css';
import { MovieCard } from './MovieCard';

export const GenreSection = ({ genre, movies }) => {
  const rowRef = useRef(null); // Referencia al contenedor de las películas
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    // Mostrar las flechas solo si hay más de 5 películas
    if (movies.length > 5) {
      setShowArrows(true);
    }
  }, [movies]);

  const scrollLeft = () => {
    rowRef.current.scrollLeft -= 200; // Mueve el contenedor a la izquierda
  };

  const scrollRight = () => {
    rowRef.current.scrollLeft += 200; // Mueve el contenedor a la derecha
  };

  return (
    <section className="genre-section">
      <h2>{genre}</h2>
      {showArrows && (
        <div className="scroll-arrows">
          <button className="scroll-arrow left" onClick={scrollLeft}>
            &#8592;
          </button>
          <button className="scroll-arrow right" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      )}
     <div className="movie-row-wrapper">
        <div className="movie-row" ref={rowRef}>
         {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} />
         ))}
        </div>
      </div>
    </section>
  );
};
