import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuActive(false); // Close menu on click
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className='navBar'>
        <div className='hamburger' onClick={toggleMenu}>
          ☰
        </div>
        <div className='logo'>Ricky's Portfolio</div>
        <div className={`menu ${menuActive ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('Home_Section')}>Home</button>
          <button onClick={() => scrollToSection('MySkills_Section')}>Skills</button>
          <button onClick={() => scrollToSection('MyProjects_Section')}>Projects</button>
          <button onClick={() => scrollToSection('ContactMe_Section')}>Contact</button>
        </div>
      </nav>
    </div>
  );
}
