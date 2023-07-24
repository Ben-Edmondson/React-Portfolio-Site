import React from 'react';
import Homepage from './Homepage';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import About from './About';


const Navbar = () => {
  return (
    <Router>
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>

        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  );
};

export default Navbar;