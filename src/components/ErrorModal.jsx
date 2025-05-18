import React from 'react';
import '../css/component/ErrorModal.css';

export const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2 color='black'>Error</h2>
        <p color='black'>{message || 'Ocurrió un error al cargar las películas.'}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};
