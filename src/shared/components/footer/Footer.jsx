import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';


export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/imges/Group.png" alt="termbi" />
          </div>
          
          <div className="footer-section">
            <h3>Features</h3>
            <ul>
              <li>Get Website</li>
              <li>Reservation</li>
              <li>Ordering</li>
              <li>Marketing</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Quick Link</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          
          <div className="footer-section newsletter">
            <h3>Newsletters</h3>
            <p>Stay up to date with our latest news, receive exclusive deals, and more</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
     
      </div>
         <div className="footer-bottom">
          <div className="copyright ">
            <p>Copyright © 2024 | termbi</p>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
    </footer>
  );
}