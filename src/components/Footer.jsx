import React from 'react';
import { MapPin, Mail, Phone, Code2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">

        <div className="footer-brand">
          <h2 className="logo">
            <span className="gradient-text">SUWY TECH</span> LLP
          </h2>
          <p className="llpin">LLPIN-ACV-3207</p>
          <p className="footer-description">
            Software Development, Training & Consultancy. <br />
            On a mission to make India the ultimate AI Hub.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={20} className="text-cyan" style={{ color: 'var(--accent-cyan)' }} />
              <span>Vazhappilly Towers, Koratty-680309, Thrissur District, Kerala, India</span>
            </li>
            {/* <li>
              <Mail size={20} className="text-cyan" style={{color: 'var(--accent-cyan)'}}/>
              <span>info@suwytech.com</span>
            </li> */}
            <li>
              <Phone size={20} className="text-cyan" style={{ color: 'var(--accent-cyan)' }} />
              <span>+91 9037246845</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SUWY TECH LLP. All Rights Reserved.</p>
          {/* <p className="built-with">
            Built with <Code2 size={16} style={{display: 'inline', verticalAlign: 'middle', margin: '0 4px', color: 'var(--accent-cyan)'}} /> using Modern Web Tech
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
