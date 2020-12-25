import React from "react";
import "./Skills.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/ionicons.min.css";

const Skills = () => {
    return (
        <section id="skills-section">
            <div className="container">
                <div className="heading">
                    <h2>SKILLS</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card special-skill-item portfolio-info-card border-0">
                            <div className="card-header bg-transparent border-0"><i className="icon ion-android-globe"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Web Development</h3>
                                <div className="skills">
                                    <div className="skills-topic">HTML</div>
                                    <div className="progress">
                                        <div className="progress-bar html-progress"></div>
                                    </div>
                                    <div className="skills-topic">CSS</div>
                                    <div className="progress">
                                        <div className="progress-bar css-progress"></div>
                                    </div>
                                    <div className="skills-topic">JavaScript</div>
                                    <div className="progress">
                                        <div className="progress-bar js-progress"></div>
                                    </div>
                                    <div className="skills-topic">React</div>
                                    <div className="progress">
                                        <div className="progress-bar react-progress"></div>
                                    </div>
                                    <div className="skills-topic">Python</div>
                                    <div className="progress">
                                        <div className="progress-bar python-progress"></div>
                                    </div>
                                    <div className="skills-topic">Go</div>
                                    <div className="progress">
                                        <div className="progress-bar go-progress"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card special-skill-item portfolio-info-card border-0">
                            <div className="card-header bg-transparent border-0"><i className="icon ion-android-laptop"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Linux</h3>
                                <div className="skills">
                                    <div className="skills-topic">Shell Script</div>
                                    <div className="progress">
                                        <div className="progress-bar html-progress" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                        ><span className="sr-only">80%</span></div>
                                    </div>
                                    <div className="skills-topic">Yocto</div>
                                    <div className="progress">
                                        <div className="progress-bar css-progress" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                        ><span className="sr-only">80%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card special-skill-item portfolio-info-card border-0">
                            <div className="card-header bg-transparent border-0"><i className="icon ion-ios-cloud"></i></div>
                            <div className="card-body">
                                <h3 className="card-title">Cloud</h3>
                                <div className="skills">
                                    <div className="skills-topic">AWS</div>
                                    <div className="progress">
                                        <div className="progress-bar html-progress" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                        ><span className="sr-only">80%</span></div>
                                    </div>
                                    <div className="skills-topic">Docker</div>
                                    <div className="progress">
                                        <div className="progress-bar css-progress" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                        ><span className="sr-only">80%</span></div>
                                    </div>
                                    <div className="skills-topic">Kubernetes</div>
                                    <div className="progress">
                                        <div className="progress-bar js-progress" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                        ><span className="sr-only">80%</span></div>
                                    </div>
                                    <div className="skills-topic">Jenkins</div>
                                    <div className="progress">
                                        <div className="progress-bar react-progress" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                        ><span className="sr-only">80%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills