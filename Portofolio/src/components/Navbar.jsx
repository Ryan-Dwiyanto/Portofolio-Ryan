import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Ryan</h2>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
