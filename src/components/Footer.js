import React from 'react';
import './Footer.css';
import './Container.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lewis Gitonga Muriuki</h3>
            <p>Medical Student & Technology Enthusiast</p>
            <p>Bridging medicine and technology through innovation</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/toshlewi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/lewis-gitonga-12783b34a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:adelewigitz@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lewis Gitonga Muriuki. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

