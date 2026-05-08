import React from 'react';
import { Icons } from './Icons';

const WhyChooseUs = () => {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="why-choose-section">
          <div className="why-left reveal reveal--delay-1">
            <h2 className="heading-lg">Why Choose Introveqa?</h2>
            <p className="text-muted" style={{ marginBottom: '2.5rem', maxWidth: '550px' }}>
              We don't just give you busywork. We integrate you into our core teams so you can experience the pace and rigor of a modern tech startup.
            </p>
            
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon"><Icons.Briefcase /></div>
                <div>
                  <h4 className="font-semibold" style={{ marginBottom: '0.25rem' }}>Hands-on Projects</h4>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>Real code, real campaigns.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}><Icons.UserCheck /></div>
                <div>
                  <h4 className="font-semibold" style={{ marginBottom: '0.25rem' }}>Industry Mentorship</h4>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>1-on-1 guidance from pros.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}><Icons.Award /></div>
                <div>
                  <h4 className="font-semibold" style={{ marginBottom: '0.25rem' }}>Verified Certificates</h4>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>Industry recognized credentials.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}><Icons.Compass /></div>
                <div>
                  <h4 className="font-semibold" style={{ marginBottom: '0.25rem' }}>Career Support</h4>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>Resume & interview prep.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="why-right reveal reveal--delay-2">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="text-primary font-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>MONTH 1</div>
                <h4 className="heading-md" style={{ marginBottom: '0.5rem' }}>Onboarding & Foundations</h4>
                <p className="text-muted" style={{ fontSize: '0.9375rem' }}>Master the tools and workflows of the team while tackling initial guided tasks.</p>
              </div>
              <div className="timeline-item active">
                <div className="timeline-dot"></div>
                <div className="text-primary font-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>MONTH 2</div>
                <h4 className="heading-md" style={{ marginBottom: '0.5rem' }}>Deep Dive Integration</h4>
                <p className="text-muted" style={{ fontSize: '0.9375rem' }}>Take ownership of a minor project feature or campaign segment with mentor oversight.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="text-primary font-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>MONTH 3</div>
                <h4 className="heading-md" style={{ marginBottom: '0.5rem' }}>Capstone Execution</h4>
                <p className="text-muted" style={{ fontSize: '0.9375rem' }}>Present your final project to leadership and prep for post-internship opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
