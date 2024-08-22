import React from 'react';
import Ricky from '../assets/images/Ricky.jpg';
import '../assets/styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import Footer from './Footer';

export default function Home() {
  const Navigate = useNavigate();

  return (
    <div className='home-container'>
      <div className='image-container'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='intro-container'
          id="Home_Section"
        >
          <h1>Hi, I'm <span className='highlight'>Ricky Satyam</span></h1>
          <h2>Your Creative <span className='highlight'>Software Developer</span></h2>
          <div className='button-container'>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => Navigate('#MyProjects_Section')}
              className='home-button'
            >
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => Navigate('./MyResume')}
              className='home-button'
            >
              View Resume
            </motion.button>
          </div>
        </motion.div>
        <motion.img
          src={Ricky}
          alt="Image of Ricky Satyam The software developer at Google"
          className='ricky-image'
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>

      <section id="MySkills_Section">
        <MySkills />
      </section>

      <section id="MyProjects_Section">
        <MyProjects />
      </section>

      <section id="ContactMe_Section">
        <Footer />
      </section>
    </div>
  );
}
