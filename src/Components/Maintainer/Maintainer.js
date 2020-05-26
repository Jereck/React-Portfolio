import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

import './Maintainer.css';

export default function Maintainer() {
    return (
        <Router>
            <div className="main-container">
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/resume" component={Resume} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
