import React from 'react';
import { Icons } from './Icons';

const Hero = ({ onApplyClick }) => {
  return (
    <section id="home" className="hero reveal">
      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
        <div className="hero-content">

          <div className="badge hero-animate hero-animate--d1">
            <span className="badge-dot"></span> 2026 Applications Open
          </div>
          <h1 className="heading-xl hero-heading">
            <span className="hero-word hero-animate hero-animate--d2">Launch</span>{' '}
            <span className="hero-word hero-animate hero-animate--d3">Your</span>{' '}
            <span className="hero-word hero-animate hero-animate--d4">Career</span>{' '}
            <span className="hero-word hero-animate hero-animate--d5">with</span>
            <br />
            <span className="hero-word hero-animate hero-animate--d6" style={{ color: 'var(--primary)' }}>
              Introveqa
            </span>{' '}
            <span className="hero-word hero-word--gradient hero-animate hero-animate--d7">
              Internships
            </span>
          </h1>

          <p
            className="text-muted hero-animate hero-animate--d8"
            style={{ fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '520px', lineHeight: '1.7' }}
          >
            Gain real-world experience, learn with our structured internship programs, join a cohort of driven individuals and build the foundation for your future.
          </p>


          <div className="hero-animate hero-animate--d9" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary hero-btn-pulse hero-apply-btn" onClick={() => onApplyClick()}>Apply Now</button>
            <button className="btn btn-outline hero-explore-btn" onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}>Explore Programs</button>
          </div>
        </div>

        <div className="hero-image-wrapper hero-animate hero-animate--d10">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Interns working together"
            className="hero-image"
          />
          <div className="hero-stats-card">
            <div className="hero-stats-icon" style={{ backgroundColor: '#fff7ed', color: '#ea580c', borderRadius: '12px', padding: '10px' }}>
              <Icons.Users />
            </div>
            <div>
              <div className="font-bold" style={{ fontSize: '1.125rem', color: 'var(--text-dark)' }}>500+ Graduates</div>
              <div className="text-muted" style={{ fontSize: '0.875rem' }}>Powered by industry-leading curriculum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
