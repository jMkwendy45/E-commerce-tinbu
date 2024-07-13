import React from 'react';
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>HealthXcale</h3>
          <p>Improving lives, one scale at a time</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Health Street</p>
          <p>Wellness City, WC 12345</p>
          <p>USA</p>
        </div>
        <div className="footer-section">
          <h3>Quick links</h3>
          <p>About us</p>
          <p>Services</p>
          <p>FAQs</p>
        </div>
        <div className="footer-section">
          <h3>Contact us</h3>
          <p>info@healthxcale.org</p>
          <p>+1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved @HealthXcale 2024</p>
      </div>
    </footer>
  );
};

export default Footer;