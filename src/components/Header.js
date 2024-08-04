import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import '../Styles/Header.module.css'; // Import your CSS module for styling

const Header = ({ isAuthenticated }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src="/path/to/logo.png" alt="Company Logo" className="logo-image" />
          <span className="company-name">Company Name</span>
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/artisans" className="nav-link">Artisans</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            {isAuthenticated ? (
              <Link to="/profile" className="nav-link">Profile</Link>
            ) : (
              <Link to="/login" className="nav-link">Login / Sign Up</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
