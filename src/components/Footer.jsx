import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; All Right Reserved |{' '}
        <a href="#" className="footer-link">Privacy Policy</a>
      </p>
      <div className="footer-buttons">
        <button className="footer-btn">Contact</button>
        <button className="footer-btn">About us</button>
        <button className="footer-btn">Community</button>
      </div>
    </footer>
  );
};

export default Footer;