import React, { useEffect, useState } from 'react';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

import ApplicationModal from './components/ApplicationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const openModal = (program = '') => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Reveal observer — toggles on BOTH enter and leave so it replays every scroll
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
          } else {
            entry.target.classList.remove('reveal--visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero onApplyClick={() => openModal()} />
      <Features />
      <Programs onApplyClick={(program) => openModal(program)} />
      <WhyChooseUs />
      <Contact />
      <Footer onApplyClick={() => openModal()} />
      <BottomNav />
      
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        programName={selectedProgram} 
      />
    </div>
  );
}


export default App;
