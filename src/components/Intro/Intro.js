import React from "react";
import "./Intro.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import avatar from "../../assets/img/avatar.jpg";

const Intro = () => {
    return (
        <section id="intro-section">
            <div className="container">
                <img className="avatar" src={avatar} alt="avatar.jpg"></img>
                <div className="about-me">
                    <p>Hello! I am <span className="avatar-name">Sandeep Kumar</span> <br /> I work as a full stack developer. I have passion towards Software Development.</p>
                </div>
                <div
                ><span className="know-me-already">Know me already ?
            </span><a className="btn btn-outline-primary"
                        role="button" href="hire-me.html">HIRE ME</a></div>
            </div>
        </section>
    )
}

export default Intro