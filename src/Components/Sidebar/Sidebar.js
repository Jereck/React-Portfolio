import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <p className="name">Jake Reck</p>
                <p className="job-title">Full-Stack Developer</p>
                <div className="links">
                    <a href=""><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href=""><i className="fab fa-github-square fa-2x"></i></a>
                    <a href=""><i className="fab fa-twitter-square fa-2x"></i></a>
                </div>
                <hr />
            </div>
            <div className="nav-links">
                <Link to="/">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
