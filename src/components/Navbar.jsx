import React, { useState } from 'react';
import { Icons } from './Icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo-container">
          <div className="logo-mark">
            <div className="logo-pulse-ring"></div>
            <svg
              className="logo-svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              {/* Hexagon background */}
              <path
                d="M22 2 L38 11.5 L38 32.5 L22 42 L6 32.5 L6 11.5 Z"
                fill="url(#logoGrad)"
                className="logo-hex"
              />
              {/* Shine overlay */}
              <path
                d="M22 2 L38 11.5 L38 32.5 L22 42 L6 32.5 L6 11.5 Z"
                fill="url(#shineGrad)"
                opacity="0.4"
              />
              {/* I letter */}
              <rect x="12" y="14" width="4" height="16" rx="2" fill="white" />
              {/* Q letter */}
              <circle cx="26" cy="22" r="7" fill="none" stroke="white" strokeWidth="3" />
              <line x1="30" y1="27" x2="34" y2="31" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="logo-orbit-dot"></div>
          </div>

          {/* Logo Text */}
          <div className="logo-text-block">
            <span className="logo-brand">Introveqa</span>
            <span className="logo-sub">Interns</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#home" className="nav-link active" style={{ outline: 'none' }}>Home</a>
          <a href="#about" className="nav-link" style={{ outline: 'none' }}>About</a>
          <a href="#programs" className="nav-link" style={{ outline: 'none' }}>Programs</a>
          <a href="#contact" className="nav-link" style={{ outline: 'none' }}>Contact</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', outline: 'none' }}
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icons.Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#0f172a',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.4)',
          zIndex: 999
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
            <a href="#home" className="nav-link active" onClick={handleLinkClick} style={{ fontSize: '1.125rem', outline: 'none' }}>Home</a>
            <a href="#about" className="nav-link" onClick={handleLinkClick} style={{ fontSize: '1.125rem', outline: 'none' }}>About</a>
            <a href="#programs" className="nav-link" onClick={handleLinkClick} style={{ fontSize: '1.125rem', outline: 'none' }}>Programs</a>
            <a href="#contact" className="nav-link" onClick={handleLinkClick} style={{ fontSize: '1.125rem', outline: 'none' }}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
