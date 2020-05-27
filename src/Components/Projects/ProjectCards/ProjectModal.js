import React, { Component } from 'react';
import './ProjectModal.scss';
import PropTypes from 'prop-types';

class ProjectModal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }
    
    render() {
        if (!this.props.show){
            return null;
        }
        return (
            <div className="modal" id="modal">
                <div className="modal-content">
                    <h1>Project Title</h1>
                    <div className="row">
                        <div className="col-3">
                            <div className="side-one">
                                <div className="image-container">
                                    <img src="https://via.placeholder.com/250.png" />
                                    <div className="ref-links">
                                        <a href="#"><i class="fas fa-globe"></i> Live Preview</a>
                                        <a href="#"><i class="fas fa-code-branch"></i> Source Code</a>
                                    </div>
                                    <div className="technologies">
                                        <p>Technologies Used</p>
                                        <ul>
                                            <li>C#</li>
                                            <li>ASP.Net Core</li>
                                            <li>IIS Server</li>
                                            <li>Microsoft SQL Server</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="side-two">
                                <h2>Challenges</h2>
                                <p>
                                    The Challenge was that a lot of our Researchers were submitting bugs through emails, 
                                    or by telling someone in person, so a lot of them were just slipping through the cracks.
                                    In my role as Test Engineer, bugs were getting past me, and no one was informing me. This was
                                    mostly do to the complex bug form from Azure Dev Ops, that was meant for developers, not common users.
                                </p>
                                <h2>Solution</h2>
                                <p>
                                    The Solution was to build a simple, consumer-facing tool that contained a very simple form to fill out 
                                    (with most of it populated already with username, date, and tool name if followed from a link within the tool).
                                    This solved the problem by making the Bug Manger user friendly, and easy to use.                     
                                </p>
                                <h2>Features</h2>
                                <ul>
                                    <li>Azure AD Login</li>
                                    <li>Bug Monitoring</li>
                                    <li>SendGrid Emails - when a new bug is reported, the tools team gets an email notification</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn card_btn" onClick={ this.onClose }>
                    Close
                </button>
            </div>
        );
    }
}

ProjectModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
}

export default ProjectModal;