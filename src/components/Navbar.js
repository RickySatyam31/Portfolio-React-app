import React from 'react'
import '../assets/styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  // const navigate = useNavigate();
  return (
    <div>
        <nav className='navBar'>
            {/* <button onClick={()=>navigate('./')}>Home</button> */}
            <button>About</button>
            {/* <button onClick={()=>navigate('./myskills')}>Skills</button> */}
            <button>Experience</button>
            <button>Projects</button>
            <button>Contact</button>

        </nav>
    </div>
  )
}
