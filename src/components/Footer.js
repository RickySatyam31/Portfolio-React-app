import React from 'react';
import '../assets/styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <h4>Contact Me</h4>
        <div className="footer-social-media">
          <a href="https://github.com/RickySatyam31" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ricky-satyam-91929a273/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:rickysatyam01@gmail.com">
          <i className="fas fa-envelope"></i>
            </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Ricky Satyam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
