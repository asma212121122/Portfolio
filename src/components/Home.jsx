import React from "react";
import homeImg from "../images/home-img.png";
import { Button } from 'react-bootstrap';

export default function Home() {
    const handleContactClick = () => {
        window.location.href = '#Contact';
    };

    const handleCvClick = () => {
        window.location.href = 'https://flowcv.com/resume/ta3i810git';
    };

    return (
        <div className="Home" id="Home">
            <div className="container">
                <div className="content">
                    <h2>Hello, My name is Asma<span className="color"> CHOHRA</span>, I am a Frontend developer</h2>
                    <div className="buttons">
                        <Button id="contact-btn" onClick={handleContactClick} className="btn primary">Let's talk</Button>
                        <Button id="cv-btn" onClick={handleCvClick} className="btn secondary">Download CV</Button>        
                    </div>
                </div>
                <div className="image"><img src={homeImg} alt="Home" /></div>
            </div>
        </div>
    );
}
