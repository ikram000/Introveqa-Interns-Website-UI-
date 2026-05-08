import React from 'react';
import { Icons } from './Icons';

const Footer = ({ onApplyClick }) => {
  return (
    <footer className="footer-section reveal">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col">
            <div className="logo-container" style={{ marginBottom: '1.5rem' }}>
              <div className="logo-mark">
                <div className="logo-pulse-ring"></div>
                <svg className="logo-svg" width="36" height="36" viewBox="0 0 44 44" fill="none">
                  <path d="M22 2 L38 11.5 L38 32.5 L22 42 L6 32.5 L6 11.5 Z" fill="#3b82f6" />
                  <rect x="12" y="14" width="4" height="16" rx="2" fill="white" />
                  <circle cx="26" cy="22" r="7" fill="none" stroke="white" strokeWidth="3" />
                </svg>
              </div>
              <div className="logo-text-block">
                <span className="logo-brand" style={{ color: 'white', fontSize: '1.1rem' }}>Introveqa</span>
                <span className="logo-sub" style={{ color: 'var(--primary-light)' }}>Interns</span>
              </div>
            </div>
            <p className="footer-text">
              Empowering the next generation of tech leaders through structured, high-impact internship programs and industry-driven curriculum.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Icons.Mail /></a>
              <a href="#" className="social-icon"><Icons.Phone /></a>
              <a href="#" className="social-icon"><Icons.MapPin /></a>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">Core Programs</h4>
            <ul className="footer-links-list">
              <li><a href="#programs" onClick={() => onApplyClick('Web Development')}>Web Development</a></li>
              <li><a href="#programs" onClick={() => onApplyClick('Graphic Design')}>Graphic Design</a></li>
              <li><a href="#programs" onClick={() => onApplyClick('Digital Marketing')}>Digital Marketing</a></li>
              <li><a href="#programs" onClick={() => onApplyClick('UI/UX Design')}>UI/UX Design</a></li>
              <li><a href="#programs" onClick={() => onApplyClick('Artificial Intelligence')}>AI & Data Science</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#" onClick={() => onApplyClick()}>Apply Now</a></li>
              <li><a href="#">Career Guide</a></li>
              <li><a href="#">Student Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="footer-text" style={{ marginBottom: '1.25rem' }}>
              Subscribe to our newsletter for the latest program updates and career tips.
            </p>
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="footer-input" />
              <button type="submit" className="footer-btn">
                <Icons.Mail />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Introveqa Interns. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

