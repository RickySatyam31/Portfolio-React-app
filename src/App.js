import React from 'react';
import Home from './components/Home';
import MyResume from './components/MyResume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyResume" element={<MyResume />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
