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
                            <div className="col-md-6 custom-period"><span className="period">Aug 2020 - Present</span></div>
                        </div>
                        <p className="text-muted role-description">‣ Developed a Track & Trace system for several Airlines (Etihad, Finnair, etc.) integrated with our application using Angular and Java. <br /><br />
                            ‣ Developed a Subscription system for CO2 Shipment tracker service using Go and Python.<br /><br />
                            ‣ Developed CO2 Shipment tracker microservice using Go and Python, used by 1000's of users worldwide.<br /><br />
                            ‣ Developed Flight tracker microservice using Go and Python, used by 1000's of users worldwide.<br /><br />
                            ‣ Developed the company's website using React.</p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Software Developer - Intern</h3>
                                <h4 className="organization">Qube Cinema - Chennai</h4>
                            </div>
                            <div className="col-md-6 custom-period"><span className="period">May 2019 - Jul 2020</span></div>
                        </div>
                        <p className="text-muted role-description">‣ Worked in developing next-generation playback server XP 4.0 for theatres used in 4000 screens across the world. <br /><br />
                            ‣ Worked in the development of Automation Controller, which automates the manual tasks done in theatres. <br /><br />
                            ‣ Worked in the migration of a classical architecture into serverless architecture and
                            deployed it in AWS Lambda, which thousands of distributors will use.</p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Software Developer - Intern</h3>
                                <h4 className="organization">Qube Cinema - Chennai</h4>
                            </div>
                            <div className="col-md-6 custom-period"><span className="period">Aug 2018 - Dec 2018</span></div>
                        </div>
                        <p className="text-muted role-description">‣ Designed and developed an app which generates an XML ﬁle from the
                            available cinema assets. It is used for publishing the content to iTunes.
                            <br /> <br />
                            ‣ Designed and developed a command line application which monitors the status of hard drives
                            currently in use and store the logs in a ﬁle.</p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Research Analyst - Intern</h3>
                                <h4 className="organization">BotAroma</h4>
                            </div>
                            <div className="col-md-6 custom-period"><span className="period">Dec 2017</span></div>
                        </div>
                        <p className="text-muted role-description">‣ Trained Chatbots using deep learning. <br /> <br />
                            ‣ Collected and generated numerous resources for training the chatbot in order to achieve
                            greater efficiency.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience