import React from "react";
import "./Intro.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import avatar from "../../assets/img/avatar.jpg";
import { NavHashLink as Link } from "react-router-hash-link";
import publicIp from 'public-ip';

const Intro = () => {
    const sendUserDetails = async () => {
        var ipAddr = await publicIp.v4()

        let body = {
            ipAddr: ipAddr,
        };

        await fetch("/api/v1/user-details", {
            method: "POST",
            body: JSON.stringify(body),
        });
    }

    return (
        <section onLoad={sendUserDetails} id="intro-section">
            <div className="container">
                <img className="avatar" src={avatar} alt="avatar.jpg"></img>
                <div className="about-me">
                    <p>Hello! I am <span className="avatar-name">Sandeep Kumar</span> <br /> I work as a full stack developer. I have passion towards Web and Systems development.</p>
                </div>
                <div
                ><span className="know-me-already">Know me already ?
            </span><Link smooth className="btn btn-outline-primary"
                        role="button" to="/#contact-section">HIRE ME</Link></div>
            </div>
        </section>
    )
}

export default Intro