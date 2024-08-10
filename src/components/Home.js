import React from 'react';
import Ricky from '../assets/images/Subject.png';
import '../assets/styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';

export default function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <div className='ImageContainer'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 1 }}
          className='IntroContainer'
        >
          <h1>Hi, My name is Ricky Satyam</h1>
          <h2>I am a software Developer</h2>
        </motion.div>
        <motion.img
          src={Ricky}
          alt="Image of Ricky Satyam The software developer at Google"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>
      <div className='buttonContainer'>
        <button>View Projects</button>
        <button onClick={() => Navigate('./MyResume')}>View Resume</button> 
        <MySkills/>
        <MyProjects/>
        <ContactMe/>

      </div>
    </div>
  );
}
