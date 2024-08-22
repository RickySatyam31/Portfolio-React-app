// MyProjects.js
import React from 'react';
import '../assets/styles/MyProjects.css';

export default function MyProjects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <div className="project-content">
                <h3>Gujju Tiffin</h3>
                <p>A MERN stack project providing online tiffin service.</p>
              </div>
            </div>
            <div className="project-card-back">
              <h4>Technologies Used:</h4>
              <ul>
                <li>React.js</li>
                <li>HTML/CSS</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Shopify Polaris</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <br/><br/>

          <a href="https://gujju-tiffin.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Gujju Tiffin Project
          </a>
        </div>
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>A personal portfolio website showcasing my skills and projects.</p>
              </div>
            </div>
            <div className="project-card-back">
              <h4>Technologies Used:</h4>
              <ul>
                <li>React.js</li>
                <li>HTML/CSS</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>
          <br/><br/>
          <a href="#Home" target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Portfolio Website
          </a>
        </div>
      </div>
    </section>
  );
}
