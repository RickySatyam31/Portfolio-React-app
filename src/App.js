import React,{useState} from 'react';
import Footer from './componets/Footer';
import Home from './componets/Home';
import MySkills from './componets/MySkills';
import Navbar from './componets/Navbar';
import MyResume from './componets/MyResume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {


  return (
       <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="/myskills" element={<MySkills />} />
          

        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}
