import React, { Component } from 'react';
import './ProjectCard.scss';

import ProjectModal from './ProjectModal';

class ProjectCards extends Component {
    state = {
        show: false
    };

    showModal = e => {
        this.setState({ 
            show: !this.state.show 
        });
    };

    render() {
        return (
            <div className="main">
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Bug Manager</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn" onClick={e => { this.showModal() }}>Learn More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
                            <div className="card_content">
                                <h2 className="card_title">QCheck</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn" onClick={e => { this.showModal() }}>Learn More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=6" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Skinet</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn" onClick={e => { this.showModal() }}>Learn More</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <ProjectModal onClose={this.showModal} show={this.state.show}>
                    Message in modal
                </ProjectModal>
            </div>
        )
    }
}

export default ProjectCards;