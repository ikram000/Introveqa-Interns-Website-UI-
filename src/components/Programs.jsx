import React from 'react';

const Programs = ({ onApplyClick }) => {
  return (
    <section id="programs" className="section section-bg-alt reveal">
      <div className="container">
        <h2 className="heading-lg reveal reveal--delay-1" style={{ marginBottom: '0.5rem' }}>Our Core Programs</h2>
        <p className="text-muted reveal reveal--delay-2" style={{ maxWidth: '600px', marginBottom: '3rem', fontSize: '1rem' }}>
          Select a track that aligns with your passions and career goals. Each program is carefully structured for maximum learning.
        </p>
        
        <div className="programs-grid">
          {/* Program 1: Web Development */}
          <div className="program-card reveal reveal--delay-3">
            <div className="program-image-container" style={{ backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              {/* CSS representation of the monitor image */}
              <div style={{ width: '100%', maxWidth: '200px', background: '#3b82f6', borderRadius: '8px', padding: '10px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)', position: 'relative', border: '4px solid #94a3b8' }}>
                <div style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'monospace', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  WEB DOP<br/>WORK
                </div>
                <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '16px', background: '#cbd5e1', borderRadius: '0 0 4px 4px' }}></div>
                <div style={{ position: 'absolute', bottom: '-24px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: '#94a3b8', borderRadius: '4px' }}></div>
              </div>
              <div className="program-badge">12 Weeks</div>
            </div>
            <div className="program-content">
              <h3 className="heading-md">Web Development</h3>
              <p className="program-desc">Master modern frontend and backend frameworks. Build scalable applications from scratch.</p>
              <button className="program-btn" onClick={() => onApplyClick('Web Development')}>Apply</button>
            </div>
          </div>
          
          {/* Program 2: Graphic Design */}
          <div className="program-card reveal reveal--delay-4">
            <div className="program-image-container" style={{ backgroundColor: '#18181b', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div style={{ textAlign: 'center', zIndex: 1, transform: 'rotate(-5deg)' }}>
                <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', textShadow: '0 0 10px rgba(255,255,255,0.3)', fontFamily: 'Impact, sans-serif' }}>GRAPHIC DESIGN</div>
                <div style={{ color: '#a1a1aa', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'cursive', marginTop: '0.5rem' }}>SAFIE</div>
                <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '4px', marginTop: '0.5rem' }}>WORK</div>
              </div>
              <div className="program-badge">8 Weeks</div>
            </div>
            <div className="program-content">
              <h3 className="heading-md">Graphic Design</h3>
              <p className="program-desc">Create compelling visual identities, UI designs, and marketing assets for real brands.</p>
              <button className="program-btn" onClick={() => onApplyClick('Graphic Design')}>Apply</button>
            </div>
          </div>
          
          {/* Program 3: Digital Marketing */}
          <div className="program-card reveal reveal--delay-5">
            <div className="program-image-container" style={{ backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '150px', height: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                  <div style={{ width: '20%', height: '40%', background: '#3b82f6', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '20%', height: '60%', background: '#3b82f6', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '20%', height: '30%', background: '#3b82f6', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '20%', height: '80%', background: '#60a5fa', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '20%', height: '100%', background: '#93c5fd', borderRadius: '2px 2px 0 0', boxShadow: '0 0 10px #93c5fd' }}></div>
                </div>
              </div>
              <div className="program-badge">10 Weeks</div>
            </div>
            <div className="program-content">
              <h3 className="heading-md">Digital Marketing</h3>
              <p className="program-desc">Drive growth through SEO, content strategy, and data-driven performance marketing.</p>
              <button className="program-btn" onClick={() => onApplyClick('Digital Marketing')}>Apply</button>
            </div>
          </div>
          
          {/* Program 4: UI/UX Design (UUUX Design in mockup) */}
          <div className="program-card reveal reveal--delay-6">
            <div className="program-image-container" style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '80%', background: 'white', borderRadius: '8px', padding: '1rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '8px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                  <div style={{ width: '60px', height: '8px', background: '#e2e8f0', borderRadius: '4px' }}></div>
                </div>
                <div style={{ width: '100%', height: '40px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                <div style={{ width: '100%', height: '8px', background: '#cbd5e1', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                <div style={{ width: '70%', height: '8px', background: '#cbd5e1', borderRadius: '4px' }}></div>
              </div>
              <div className="program-badge">8 Weeks</div>
            </div>
            <div className="program-content">
              <h3 className="heading-md">UUUX Design</h3>
              <p className="program-desc">Create intuitive, user-centered digital experiences through research, wireframing, and high-fidelity prototyping.</p>
              <button className="program-btn" onClick={() => onApplyClick('UI/UX Design')}>Apply</button>
            </div>
          </div>
          
          {/* Program 5: Backend Development */}
          <div className="program-card reveal reveal--delay-7">
            <div className="program-image-container" style={{ backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '180px', border: '2px solid #3b82f6', borderRadius: '8px', padding: '1rem', position: 'relative' }}>
                <div style={{ textAlign: 'center', color: '#60a5fa', fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: '1rem', borderBottom: '1px solid rgba(59,130,246,0.3)', paddingBottom: '0.5rem' }}>
                  {`{ backend: 'node' }`}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', border: '1px solid #3b82f6' }}></div>
                  <div style={{ width: '30px', height: '30px', background: 'rgba(59,130,246,0.2)', border: '1px solid #3b82f6', transform: 'rotate(45deg)' }}></div>
                </div>
                <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'rgba(59,130,246,0.3)', zIndex: 0 }}></div>
              </div>
              <div className="program-badge">12 Weeks</div>
            </div>
            <div className="program-content">
              <h3 className="heading-md">Backend Development</h3>
              <p className="program-desc">Build robust server-side logic, databases, and APIs using technologies like Node.js, Python, and SQL.</p>
              <button className="program-btn" onClick={() => onApplyClick('Backend Development')}>Apply</button>
            </div>
          </div>
          
          {/* Program 6: Frontend Development */}
          <div className="program-card reveal reveal--delay-8">
            <div className="program-image-container" style={{ backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '180px', height: '110px', background: '#334155', borderRadius: '8px 8px 0 0', position: 'relative', border: '2px solid #475569', borderBottom: 'none' }}>
                <div style={{ display: 'flex', gap: '4px', padding: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                </div>
                <div style={{ background: '#0f172a', margin: '0 6px 6px 6px', height: '70px', borderRadius: '4px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ width: '60%', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></div>
                  <div style={{ width: '80%', height: '4px', background: '#e2e8f0', borderRadius: '2px' }}></div>
                  <div style={{ width: '40%', height: '4px', background: '#e2e8f0', borderRadius: '2px' }}></div>
                  <div style={{ width: '30%', height: '12px', background: '#eab308', borderRadius: '2px', marginTop: 'auto' }}></div>
                </div>
                <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', right: '-10px', height: '10px', background: '#94a3b8', borderRadius: '0 0 8px 8px' }}></div>
              </div>
              <div className="program-badge">12 Weeks</div>
            </div>
            <div className="program-content">
              <h3 className="heading-md">Frontend Development</h3>
              <p className="program-desc">Translate designs into responsive, interactive web interfaces using React, Next.js, and modern CSS frameworks.</p>
              <button className="program-btn" onClick={() => onApplyClick('Frontend Development')}>Apply</button>
            </div>
          </div>
          
          {/* Program 7: Artificial Intelligence */}
          <div className="program-card reveal reveal--delay-9">
            <div className="program-image-container" style={{ backgroundColor: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle at center, rgba(56,189,248,0.4) 0%, transparent 70%)', position: 'absolute' }}></div>
              <div style={{ width: '150px', height: '150px', border: '1px dashed rgba(56,189,248,0.3)', borderRadius: '50%', position: 'absolute', animation: 'spin 20s linear infinite' }}></div>
              <div style={{ width: '80px', height: '80px', border: '2px solid rgba(56,189,248,0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: '0 0 20px rgba(56,189,248,0.5)' }}>
                <div style={{ width: '40px', height: '40px', background: '#38bdf8', borderRadius: '50%', boxShadow: '0 0 15px #38bdf8' }}></div>
              </div>
              <div className="program-badge">16 Weeks</div>
            </div>
            <div className="program-content">
              <h3 className="heading-md">Artificial Intelligence</h3>
              <p className="program-desc">Explore machine learning, natural language processing, and neural networks through hands-on project implementation.</p>
              <button className="program-btn" onClick={() => onApplyClick('Artificial Intelligence')}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
