import React from 'react';
import { Icons } from './Icons';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <a href="#" className="bottom-nav-item active">
        <Icons.Home />
        <span>Home</span>
      </a>
      <a href="#about" className="bottom-nav-item">
        <Icons.Info />
        <span>About</span>
      </a>
      <a href="#programs" className="bottom-nav-item">
        <Icons.Briefcase />
        <span>Programs</span>
      </a>
      <a href="#contact" className="bottom-nav-item">
        <Icons.Mail />
        <span>Contact</span>
      </a>
    </div>
  );
};

export default BottomNav;
