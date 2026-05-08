import React from 'react';
import { Icons } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="section section-bg-alt reveal">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info reveal reveal--delay-1">
            <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.5rem' }}>Get in Touch</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '3rem', fontSize: '1.0625rem' }}>
              Have questions about our programs? Our admissions team is ready to help you find the right path.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="contact-detail-item" style={{ margin: 0 }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', display: 'flex' }}>
                  <Icons.Mail />
                </div>
                <span style={{ fontSize: '1rem' }}>apply@introveqainterns.com</span>
              </div>
              <div className="contact-detail-item" style={{ margin: 0 }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', display: 'flex' }}>
                  <Icons.Phone />
                </div>
                <span style={{ fontSize: '1rem' }}>+1 (555) 123-4567</span>
              </div>
              <div className="contact-detail-item" style={{ margin: 0 }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', display: 'flex' }}>
                  <Icons.MapPin />
                </div>
                <span style={{ fontSize: '1rem' }}>San Francisco, CA (Hybrid/Remote)</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container reveal reveal--delay-2">
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Jane Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="(555) 000-0000" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" placeholder="Tell us about your career goals..." style={{ minHeight: '140px', resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-submit-btn" style={{ width: '100%', marginTop: '0.5rem', padding: '1.125rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
