import { Link } from 'react-router-dom';
import '../css/component/Header.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Header = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <button className="hamburger-menu" onClick={onMenuToggle}>
        &#9776; {/* Icono de hamburguesa */}
      </button>
      <div className="header-title">
        <Link to="/" className="logo-link">
           <FontAwesomeIcon icon={faFilm} size="2x" color="white" />
        </Link>
        <span className="web-title">MoviesWebApp</span>
      </div>
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
    </header>
  );
};

export default Header;
