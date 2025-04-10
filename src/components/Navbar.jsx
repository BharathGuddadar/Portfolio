import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navcon">
        <h3 className='nav-heading'><a href="#home" style={{textDecoration:"none",color:"  #928cff"}}>BHARATH</a> | 
          <a href="https://www.instagram.com/bharath_guddadar?"><FontAwesomeIcon icon={faInstagram} size="1x"  color="#928cff"/></a>
          <a href="https://www.linkedin.com/in/bharathguddadar"><FontAwesomeIcon icon={faLinkedin} size="1x"  color="#928cff"/></a>
          <a href="https://github.com/BharathGuddadar"><FontAwesomeIcon icon={faGithub} size="1x" color="#928cff"/></a>
        </h3>
        <div class="socialicons">
                        <a href="https://github.com/BharathGuddadar"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/bharathguddadar"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://x.com/BharathGP21?t=Q33a708g4fqwaWT4AMPMYA&s=09"><i class="fa-brands fa-twitter"></i></a>
                    </div>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;
