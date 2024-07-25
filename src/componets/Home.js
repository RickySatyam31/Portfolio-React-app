import React from 'react'
import Navbar from './Navbar.js'
import Ricky from '../assets/images/Ricky.png';
import '../assets/styles/Home.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const Navigate = useNavigate();
  return (
    
    <div>
        <div className='ImageContainer'>
        <img src ={Ricky} alt = "Image of Ricky Satyam The software devloper at GOOGle"/>
        </div>
        <h1>Hi, My name is Ricky Satyam</h1>
        <h2> I am a software Developer</h2>

        <button> View Projects</button>
        <button onClick={()=>Navigate('./resume')}>View Resume</button>
    </div>
  )
}
