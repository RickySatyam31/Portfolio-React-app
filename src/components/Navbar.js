import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  const navigate = useNavigate();

  return (
    <div>
      <nav className='navBar'>
        <button onClick={() => scrollToSection('Home_Section')}>Home</button>
        <button onClick={() => scrollToSection('MySkills_Section')}>Skills</button>
        <button onClick={() => scrollToSection('MyProjects_Section')}>Projects</button>
        <button onClick={() => scrollToSection('ContactMe_Section')}>Footer</button>
      </nav>
    </div>
  );
}
