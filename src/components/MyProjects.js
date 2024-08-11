// MyProjects.js
import React from 'react';
import '../assets/styles/MyProjects.css';

export default function MyProjects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <a href="https://gujju-tiffin.onrender.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-content">
              <h3>Gujju Tiffin</h3>
              <p>A MERN stack project providing online tiffin service.</p>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href="#Home" target="_blank" rel="noopener noreferrer">
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio website showcasing my skills and projects.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
