import React from "react";
import aboutImg from "../images/about-img1.png";

export default function About(){
    return(
        <div className="About" id="About">
            
            <div className="container">
                <div className="image">
                    <img src={aboutImg} alt="About Me" />
                </div>
                <div className="content">
                <h2 className="title">About <span className="color">Me</span></h2>
                I am an aspiring frontend developer passionate about crafting <span className="color">visually appealing and user-friendly web interfaces</span>.
                 With a strong foundation in <span className="color">HTML, CSS, and JavaScript</span>, I am committed to continuously learning and improving
                  my skills. My projects, though personal and academic, demonstrate my ability to translate design concepts 
                  into <span className="color">functional and responsive websites</span>. I am eager to contribute to dynamic teams and take on new challenges
                   to grow professionally in the ever-evolving field of web development.
                </div>
                
            </div>
            
        </div>
    );
}