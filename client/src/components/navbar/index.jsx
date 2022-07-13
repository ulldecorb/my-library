import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export function NavBar() {
  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/">
        <h1>My Library</h1>
      </Link>
      <Link className="navbar__link" to="/addbook">
        <h2>Add Book</h2>
      </Link>
    </nav>
  );
}

export default NavBar;
