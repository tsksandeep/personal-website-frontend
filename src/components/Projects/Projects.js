import React from "react";
import "./Projects.css";
import "../../assets/bootstrap/css/bootstrap.min.css";

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
                            <h3>Smart Theatre</h3>
                            <h4>Augmented Reality is used to augment subtitles when the movie is played. This is
                            currently built for
                            android with future plans for AR Glass.</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="project-card-no-image">
                            <h3>Crypto Records</h3>
                            <h4>Developed a Dynamic Web app which gets the users data and
                            appends it to the block chain model thereby providing high
                            end security for them.</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="project-card-no-image">
                            <h3>SSN AR App</h3>
                            <h4> An app which shows directions in 3d model of SSN College by
                            scanning respective QR code.</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="project-card-no-image">
                            <h3>Sentiment Analysis</h3>
                            <h4> Predicting whether the twitter feeds is of any emergency or
                            a normal one. Machine Leraning was used to analyse it.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects