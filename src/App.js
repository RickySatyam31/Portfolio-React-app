import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyResume from './components/MyResume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyResume" element={<MyResume/>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
