import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/Navbar.scss';

export default function Navbar() {
  const location = useLocation();

  const path = location.pathname;
  const formattedPath = path.slice(1);

  return (
    <nav className="Navbar">
      <h1>
        <Link to="/" className="Navbar__link">
          Upgames Hub
        </Link>
      </h1>

      <h2 className="Navbar__game">{formattedPath}</h2>
    </nav>
  );
}
