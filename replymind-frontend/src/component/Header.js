import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>
            <span className="logo-part1">reply</span>
            <span className="logo-part2">Mind</span>
          </h1>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li>
              <Link to="/" className="nav-link">Login</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
