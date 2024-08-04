import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import '../Styles/Footer.module.css'; // Import your CSS module for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul className="footer-list">
            <li className="footer-item">
              <Link to="/" className="footer-link">Home</Link>
            </li>
            <li className="footer-item">
              <Link to="/artisans" className="footer-link">Artisans</Link>
            </li>
            <li className="footer-item">
              <Link to="/about" className="footer-link">About</Link>
            </li>
            <li className="footer-item">
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <p className="footer-description">
            Our company provides a platform to connect artisans with customers. We are committed to supporting skilled craftspeople and enhancing their visibility in the market.
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
