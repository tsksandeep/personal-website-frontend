import React from "react";
import "./Experience.css";
import "../../assets/bootstrap/css/bootstrap.min.css";

const Experience = () => {
    return (
        <section id="experience-section" className="portfolio-block cv">
            <div className="container">
                <div className="work-experience group">
                    <div className="heading">
                        <h2 className="text-center experience-heading">Experience</h2>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Software Developer</h3>
                                <h4 className="organization">CargoAi - Singapore</h4>
                            </div>
                            <div className="col-md-6"><span className="period">Aug 2020 - Present</span></div>
                        </div>
                        <p className="text-muted role-description">• Developed flight crawler micro service which is used by 1000's of users around the world.
                           <br /> <br /> • Designed and Developed company's website using Figma and React.</p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Software Developer - Intern</h3>
                                <h4 className="organization">Qube Cinema - Chennai</h4>
                            </div>
                            <div className="col-md-6"><span className="period">May 2019 - Jul 2020</span></div>
                        </div>
                        <p className="text-muted role-description">• Worked in the development of next generation Playback Server for
                            theatres which will be used in 4000 screens across the world. <br /> <br />
                                • Worked in the development of Automation Controller which automates the manual tasks done
                            in theatres. <br /> <br />
                                    • Worked in the migration of a classical service into Server-less Architecture and deployed
                            it in AWS Lambda which will be used by thousands of distributors.</p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Software Developer - Intern</h3>
                                <h4 className="organization">Qube Cinema - Chennai</h4>
                            </div>
                            <div className="col-md-6"><span className="period">Aug 2018 - Dec 2018</span></div>
                        </div>
                        <p className="text-muted role-description">• Designed and developed an app which generates an XML ﬁle from the
                        available cinema assets. It is used for publishing the content to iTunes.
                            <br /> <br />
                                            • Designed and developed a command line application which monitors the status of hard drives
                            currently in use and store the logs in a ﬁle.</p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Research Analyst - Intern</h3>
                                <h4 className="organization">BotAroma</h4>
                            </div>
                            <div className="col-md-6"><span className="period">Dec 2017</span></div>
                        </div>
                        <p className="text-muted role-description">• Trained Chatbots using deep learning. <br /> <br />
                                                • Collected and generated numerous resources for training the chatbot in order to achieve
                            greater efficiency.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience