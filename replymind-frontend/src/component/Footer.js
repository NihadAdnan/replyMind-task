import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copy-right">&copy; 2024 Nihad Adnan Shah  |  All rights reserved</p>
        <nav className="footer-links">
          <Link to="/about" className="footer-item">About</Link>
          <Link to="/contact" className="footer-item">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
