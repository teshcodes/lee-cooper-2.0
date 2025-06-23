import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            {}
            <h1>Lee Cooper 2.0</h1> 
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li><a href="#new-collection">New Collection</a></li>
            <li><a href="#heritage">Heritage</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Search Icon (Placeholder) */}
        <div className="search-icon">
          <button>🔍</button> {/* Placeholder for a search icon */}
        </div>
      </div>
    </header>
  );
}

export default Header;