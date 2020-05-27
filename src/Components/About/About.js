import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="content-body">
            <div className="introduction">
                <h1>
                    <span className="call-to-action">Hi!</span> My name is Jake Reck.
                </h1>
                <p className="announcement">I am a self-taught developer with a passion for developing creative solutions for solving problems.</p>
            </div>

            <div className="current">
                <p>
                    <span className="learning">Currently Learning: </span> 
                    <span className="skill">Electron.js</span>
                </p>
            </div>

            <h2>Skills</h2>
            <div className="grid-container">
                <div className="row skill-lists">
                    <div className="col-2">
                        <h3>Front-End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3>Back-End</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Asp.Net (Core)</li>
                            <li>Python (Django/Flask)</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3>Other Skills</h3>
                        <ul>
                            <li>Git</li>
                            <li>SQL</li>
                            <li>Azure</li>
                            <li>Firebase</li>
                            <li>Agile/Scrum Methodologies</li>
                            <li>User Testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
