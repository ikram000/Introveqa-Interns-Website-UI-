import React from 'react';
import { Icons } from './Icons';

const Features = () => {
  return (
    <section id="about" className="section text-center reveal" style={{ backgroundColor: 'var(--bg-subtle-blue)' }}>
      <div className="container">
        <h2 className="heading-lg">More Than Just an Internship</h2>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 1rem auto' }}>
          We provide a comprehensive ecosystem designed to accelerate your learning and professional development.
        </p>
        
        <div className="features-grid">
          <div className="feature-card text-left reveal reveal--delay-1">
            <div className="feature-icon-wrapper icon-blue"><Icons.Building /></div>
            <h3 className="heading-md">Industry Mentors</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>Learn directly from seasoned professionals who guide you through complex challenges and career decisions.</p>
          </div>
          
          <div className="feature-card text-left reveal reveal--delay-2">
            <div className="feature-icon-wrapper icon-orange"><Icons.Wrench /></div>
            <h3 className="heading-md">Real-world Projects</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>Work on live projects that impact actual users, moving beyond theoretical exercises to practical application.</p>
          </div>
          
          <div className="feature-card text-left reveal reveal--delay-3">
            <div className="feature-icon-wrapper icon-blue"><Icons.TrendingUp /></div>
            <h3 className="heading-md">Career Growth</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>Receive dedicated career coaching, resume reviews, and interview preparation to secure your next role.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
