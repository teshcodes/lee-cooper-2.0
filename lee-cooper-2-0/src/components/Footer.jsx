import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand Info / Logo */}
        <div className="footer-brand">
          <a href="/">
            <h2>Lee Cooper 2.0</h2> {/* Use consistent logo text for now */}
          </a>
          <p>&copy; {new Date().getFullYear()} Lee Cooper. All rights reserved.</p>
        </div>

        {/* Navigation Column 1 */}
        <div className="footer-nav">
          <h3>Shop</h3>
          <ul>
            <li><a href="#new-collection">New Arrivals</a></li>
            <li><a href="#products">Denim</a></li>
            <li><a href="#">Jackets</a></li>
            <li><a href="#">Tees & Shirts</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        {/* Navigation Column 2 */}
        <div className="footer-nav">
          <h3>About</h3>
          <ul>
            <li><a href="#heritage">Our Heritage</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Store Locator</a></li>
          </ul>
        </div>

        {/* Customer Service / Contact */}
        <div className="footer-nav">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div className="footer-newsletter-social">
          <h3>Stay Connected</h3>
          <p>Sign up for exclusive updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i>FB</a> {/* Placeholders */}
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i>IG</a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i>TW</a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i>YT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;