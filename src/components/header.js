import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-transparent');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to handle scroll event and change navbar background
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarClass('navbar-solid');
    } else {
      setNavbarClass('navbar-transparent');
    }
  };

  // Function to handle navbar toggle
  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Close navbar when clicking outside or on a link
  const handleClickOutside = (event) => {
    const navbar = document.getElementById('navbarNav');
    if (isNavbarOpen && navbar && !navbar.contains(event.target)) {
      setIsNavbarOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  // Add event listener for scroll and click outside when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarClass}`}>
      <div className="container">
        {/* Logo or Brand Name */}
        <img src="/images/Vector256x256.png" alt="Squareone.finance" className="navbar-logo" style={{ marginRight: '10px' }} />
        <Link to="/" className="navbar-brand">SquareOne</Link>
        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
            </li>

            {/* Blog Link */}
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={handleLinkClick}>Blog</Link>
            </li>

            {/* Call-to-action Button */}
            <li className="nav-item">
              <Link to="/get-started" className="btn btn-warning ms-3" onClick={handleLinkClick}>Get Started</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
