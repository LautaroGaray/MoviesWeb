import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTh } from '@fortawesome/free-solid-svg-icons'; 
import '../css/component/Sidebar.css';

const Sidebar = ({ isVisible, onClose }) => {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <ul className="sidebar-links">
        <li>
          <Link to="/" onClick={onClose}>
            <FontAwesomeIcon icon={faHome} size="lg" style={{ marginRight: '8px' }} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" onClick={onClose}>
            <FontAwesomeIcon icon={faFilm} size="lg" style={{ marginRight: '8px' }} />
            Movies
          </Link>
        </li>
        <li>
          <Link to="/genres" onClick={onClose}>
            <FontAwesomeIcon icon={faTh} size="lg" style={{ marginRight: '8px' }} />
            Genres
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
