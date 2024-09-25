import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/MyResume.css';
import Ricky from '../assets/images/Ricky.png'; 

const MyResume = () => {
  const navigate = useNavigate();   

  return (
    <div>
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      <div className="resume">
        <header className="header">
          <img src={Ricky} alt="Ricky Satyam" className="profile-pic" />
          <div className="contact-info">
            <h1>Ricky Satyam</h1>
            <p>Phone: (226)-201-6868</p>
            <p>Email: <a href="mailto:rickysatyam01@gmail.com">rickysatyam01@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ricky-satyam-91929a273/">Ricky Satyam</a></p>
          </div>
        </header>

        <section className="about">
          <h2>About Me</h2>
          <p>Full Stack Developer with a solid two-year experience in the MERN stack, passionate about creating dynamic and responsive web applications...</p>
        </section>
        <section className="experience">
          <h2>Professional Experience</h2>
          <div className="job">
            <h3>Full Stack (MERN) Developer (Full-Time) – AppMixo, Gujarat, India</h3>
            <p>Jul 2021 – Aug 2022</p>
            <ul>
              <li>Collaborated with clients to determine website design and functionality requirements.</li>
              <li>Developed and maintained websites for multiple businesses while ensuring a consistent look and identity.</li>
              <li>Provided advanced technical support to customers via phone and email, addressing account-based and technical inquiries.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Software Developer (Internship - Full Time) – Kartum Infotech, Gujarat, India</h3>
            <p>Jan 2021 – June 2021</p>
            <ul>
              <li>Developed and designed websites using HTML, CSS, Bootstrap, C# and PHP (Laravel).</li>
              <li>Collaborated with product managers and designers to improve user experiences, increasing satisfaction.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Line Cook – Swiss Chalet (Part-Time) – 525 Highland Rd W Unit 1, Kitchener</h3>
            <p>Sept 2022 - Current</p>
            <ul>
              <li>Managing food preparation, food safety, food standards and customer interaction.</li>
              <li>Cooking food items by grilling, frying, sautéing, and other cooking methods to specified recipes and standards.</li>
            </ul>
          </div>
        </section>
        <section className="skills">
          <h2>Skills and Competencies</h2>
          <ul>
            <li>React JS, JavaScript, Next JS, HTML, C++, C#, Node JS, Express JS, PHP CSS (3), Bootstrap, Material UI, Shopify Polaris</li>
            <li>Mongo DB (Atlas, Compass), MySQL</li>
            <li>Figma, Figjam, Postman, MS Office, Visual Studio Code, Visual Paradigm, GitHub, Docker, Microsoft Azure, Terminal, Browser, VM ware, Android Studio</li>
          </ul>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>MERN Project: "Gujju Tiffin"</h3>
            <p>
              Website: <a href="https://gujju-tiffin.onrender.com/">Gujju Tiffin Website</a> | 
              GitHub: <a href="https://github.com/RickySatyam31/tiffin-app-mern">GitHub Link</a>
            </p>
            <p>A business for tiffin services, showcasing my skills in full-stack web development.</p>
          </div>
          <div className="project">
            <h3>Portfolio React App</h3>
            <p><a href="https://github.com/RickySatyam31/Portfolio-React-app">GitHub Link</a></p>
            <p>My personal portfolio website built using React, showcasing my projects and skills.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyResume;
