import React from "react";
import "./Education.css";
import "../../assets/bootstrap/css/bootstrap.min.css";

const Education = () => {
    return (
        <section id="education-section" className="portfolio-block cv">
            <div className="container">
                <div className="education group">
                    <div className="heading">
                        <h2 className="text-center education-heading">Education</h2>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Bachelors of Engineering, Electronics and Communication</h3>
                                <h4 className="organization">SSN College of Engineering</h4>
                            </div>
                            <div className="col-6"><span className="period">2016 - 2020</span></div>
                        </div>
                        <p className="text-muted role-description">• Coursework: Networking, FPGA Programming, Digital Electronics, Digital
                        Signal Processing, Antennas and Wave Propagation.<br /> <br /> • CGPA: 7.4 / 10</p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="role">Science Group</h3>
                                <h4 className="organization">Holy Cross School</h4>
                            </div>
                            <div className="col-md-6"><span className="period">2003 - 2016</span></div>
                        </div>
                        <p className="text-muted role-description">• Coursework: Biology, Maths, Physics, Chemistry. <br /><br />• Percentage: 94%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;