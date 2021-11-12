import React from "react";
import { EducationComponentStyle } from "./Education.style";

const Education = () => {
  return (
    <section id="education-section" className="portfolio-block cv">
      <div className={EducationComponentStyle()}>
        <div className="container">
          <div className="education group">
            <div className="heading">
              <h2 className="text-center education-heading">Education</h2>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="role">
                    Bachelors of Engineering, Electronics and Communication
                  </h3>
                  <h4 className="organization">SSN College of Engineering</h4>
                </div>
                <div className="col-6 custom-period">
                  <span className="period">2016 - 2020</span>
                </div>
              </div>
              <p className="role-description">
                •{" "}
                <span style={{ letterSpacing: "0.7px" }} className="bold">
                  Coursework
                </span>
                : Networking, FPGA Programming, Digital Electronics, Digital
                Signal Processing, Antennas and Wave Propagation.
              </p>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="role">Science Group</h3>
                  <h4 className="organization">Holy Cross School</h4>
                </div>
                <div className="col-md-6 custom-period">
                  <span className="period">2003 - 2016</span>
                </div>
              </div>
              <p className="role-description">
                •{" "}
                <span style={{ letterSpacing: "0.7px" }} className="bold">
                  Coursework
                </span>
                : Biology, Maths, Physics, Chemistry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
