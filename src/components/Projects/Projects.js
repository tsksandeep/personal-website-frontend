import React from "react";
import "./Projects.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import sankar from "../../assets/img/sankar.jpeg";
import vibeesh from "../../assets/img/vibeesh.jpeg";
import sundar from "../../assets/img/sundar.jpeg";
import sandeep from "../../assets/img/sandeep.jpeg";

const Projects = () => {
    return (
        <section id="projects-section">
            <div className="container">
                <div className="heading">
                    <h2 className="projects-heading">PROJECTS</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="project-card-no-image">
                            <h3 className="project-card-heading">Smart Theatre System</h3>
                            <h4>An AR app which enables the audience to view subtitles in a theatre through augmented reality. As of now Android phones can be used to experience it <br /> <br /> Tech Stack: Go, C#, gRPC, Sqlite3</h4>
                            <div className="project-creators">
                                <img className="rounded-circle project-creator-circle" src={sandeep} alt="sandeep.jpeg"></img>
                                <img className="rounded-circle project-creator-circle" src={vibeesh} alt="vibeesh.jpeg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="project-card-no-image">
                            <h3 className="project-card-heading">Crypto Records</h3>
                            <h4>A Web application for hospital management which stores their data in a block chain model thereby providing high end security for them <br /> <br /> Tech Stack: React, Django, PostgreSQL</h4>
                            <div className="project-creators">
                                <img className="rounded-circle project-creator-circle" src={sandeep} alt="sandeep.jpeg"></img>
                                <img className="rounded-circle project-creator-circle" src={sankar} alt="sankar.jpeg"></img>
                                <img className="rounded-circle project-creator-circle" src={sundar} alt="sundar.jpeg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="offset-md-3 col-md-6 offset-lg-3 col-lg-6">
                        <div className="project-card-no-image">
                            <h3 className="project-card-heading">SSN AR App</h3>
                            <h4>An AR app which shows directions in 3d model of our college by scanning respective QR codes <br /> <br /> Tech Stack: Go, C#, PostgreSQL</h4>
                            <div className="project-creators">
                                <img className="rounded-circle project-creator-circle" src={sandeep} alt="sandeep.jpeg"></img>
                                <img className="rounded-circle project-creator-circle" src={sankar} alt="sankar.jpeg"></img>
                                <img className="rounded-circle project-creator-circle" src={sundar} alt="sundar.jpeg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects