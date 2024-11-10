import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo-section">
        <img src={logo} alt="Agroconnect Logo" className="footer-logo" />
        <p className="footer-description">
          Connecting buyers and suppliers in the agriculture industry through a seamless, innovative platform.
        </p>
      </div>
      
      <div className="footer-links-section">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Buyer</li>
            <li>Seller</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
        <div className="footer-about">
          <h3>About Us</h3>
          <ul>
            <li>Purpose</li>
            <li>Vision & Mission</li>
            <li>Team Agroconnect</li>
            <li>Achievements</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-contact-section">
        <h3>Contact Us</h3>
        <p>Phone: 022-48964142</p>
        <p>Email: contact@agroconnect.com</p>
        <div className="social-media">
          <span className="social-icon">F</span>
          <span className="social-icon">T</span>
          <span className="social-icon">In</span>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>© Agroconnect 2024. All Rights Reserved.</p>
      <p>Terms & Conditions | Privacy Policy | Sitemap</p>
    </div>
  </footer>
);

export default Footer;
