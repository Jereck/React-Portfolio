import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <div className="resume">
            <h1 className="display-1">Jake Reck</h1>
            <div className="location">
                <p>Redmond, WA</p>
                <p>jakereck@gmail.com</p>
                <p>(860)933-0862</p>
            </div>
            <div className="block education">
                <h2 className="display-2">Education</h2>
                <div className="course">
                    <p className="title">Complete React Developer in 2020(w. Redux, Hooks, GraphQL)</p>
                    <p className="date">Udemy, February 2020</p>
                </div>
                <div className="course">
                    <p className="title">Responsive Web Design &amp; JavaScript Algorithms and Data Structures Certification</p>
                    <p className="date">FreeCodeCamp, July 1018</p>
                </div>
                <div className="course">
                    <p className="title">The Web Developer Bootcamp</p>
                    <p className="date">Udemy, March 2017</p>
                </div>
            </div>

            <div className="block experience">
                <h2 className="display-2">Professional Work Experience</h2>
                <div className="work-experience">
                    <p className="title">User Research Associate/Quality Test Engineer</p>
                    <p className="company">Xbox Research at Microsoft, via Experis</p>
                    <p className="date">(promotion) April 2019 - present</p>
                    <ul>
                        <li>Perform quality testing, assurance, and control of internal and external tools used by the Xbox Research Team.</li>
                        <li>Work in an Agile team environment.</li>
                        <li>Develop, update, and maintain internal applications used by Xbox Research Team.</li>
                        <li>Establish and maintain a development process for the Xbox Research Tools team from conception to deployment.</li>
                        <li>Run monthly research surveys from creation, generate contact lists, deployment, monitoring and analyzing data.</li>
                    </ul>
                </div>

                <div class="work-experience">
                    <p className="title">User Research Coordinator</p>
                    <p className="company">Xbox Research at Microsoft, via Harman International</p>
                    <p className="date">November 2018 - April 2019</p>
                    <ul>
                        <li>Carried out team-focused work supporting qualitative and quantitative study protocol designed by a User Researcher.</li>
                        <li>Ensured optimal quality and efficiency of data collection through study methods including interviews, surveys, lab studies, telemetry, and dial testing.</li>
                        <li>Caried out day-to-day tasks requiring proficiency in various tools and processes, while remaining sensitive to the confidentiality of in-develpment projects and complying
                            with privacy regulations.
                        </li>
                        <li>Provided a wide range of support to User Researchers through detailed review and testing of surveys, recruiting and scheduling participants for internal studies,
                            and assisting with other post-study activities such as quantitative coding and transcriptions.
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}
