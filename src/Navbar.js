import React from 'react';
import Homepage from './Homepage';
import Projects from './Projects';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './About';
import Journal from './Journal';


function Navbar() {
  return (
    <Router>
        <nav className='nav'>
        <Link className='site-title text' to="/">Ben Edmondson</Link>
            <ul>
                <li className='active'>
                <Link className='navtext' to="/">Home</Link>
                </li>
                <li>
                <Link className='navtext' to="/about">About</Link>
                </li>
                <li>
                <Link className='navtext' to="/projects">Projects</Link>
                </li>
                <li>
                  <Link className='navtext' to="/journal">Journal</Link>
                </li>
            </ul>
        </nav>

        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journal" element={<Journal />} />
        </Routes>
    </Router>
  );
};

export default Navbar;