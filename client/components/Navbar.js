import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/components/Navbar.css';

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* Navbar Logo */}
      <Link to="/" className="navbar__logo">
        HabiTool
      </Link>
      {/* Hamburger Menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
