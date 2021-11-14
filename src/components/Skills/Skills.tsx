import React from "react";
import { SkillsComponentStyle } from "./Skills.style";
import { BiGlobe } from "@react-icons/all-files/bi/BiGlobe";
import { BsLaptop } from "@react-icons/all-files/bs/BsLaptop";
import { AiFillCloud } from "@react-icons/all-files/ai/AiFillCloud";

const Skills = () => {
  return (
    <section id="skills-section">
      <div className={SkillsComponentStyle()}>
        <div className="container">
          <div className="heading">
            <h2 className="skills-heading">SKILLS</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 custom-skill-col">
              <div className="card special-skill-item portfolio-info-card border-0">
                <div className="card-header bg-transparent border-0">
                  <BiGlobe fill="#0ea0ff" className="ion-icons" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Web Development</h3>
                  <div className="skills">
                    <div className="skills-topic">HTML</div>
                    <div className="progress">
                      <div
                        style={{ width: "80%" }}
                        className="progress-bar html-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">CSS</div>
                    <div className="progress">
                      <div
                        style={{ width: "80%" }}
                        className="progress-bar css-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">JavaScript</div>
                    <div className="progress">
                      <div
                        style={{ width: "60%" }}
                        className="progress-bar js-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">React</div>
                    <div className="progress">
                      <div
                        style={{ width: "60%" }}
                        className="progress-bar react-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">Python</div>
                    <div className="progress">
                      <div
                        style={{ width: "80%" }}
                        className="progress-bar python-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">Go</div>
                    <div className="progress">
                      <div
                        style={{ width: "80%" }}
                        className="progress-bar go-progress"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 custom-skill-col">
              <div className="card special-skill-item portfolio-info-card border-0">
                <div className="card-header bg-transparent border-0">
                  <BsLaptop fill="#0ea0ff" className="ion-icons" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Linux</h3>
                  <div className="skills">
                    <div className="skills-topic">Shell Script</div>
                    <div className="progress">
                      <div
                        style={{ width: "60%" }}
                        className="progress-bar html-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">Yocto</div>
                    <div className="progress">
                      <div
                        style={{ width: "40%" }}
                        className="progress-bar css-progress"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 custom-skill-col">
              <div className="card special-skill-item portfolio-info-card border-0">
                <div className="card-header bg-transparent border-0">
                  <AiFillCloud fill="#0ea0ff" className="ion-icons" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Cloud</h3>
                  <div className="skills">
                    <div className="skills-topic">AWS</div>
                    <div className="progress">
                      <div
                        style={{ width: "60%" }}
                        className="progress-bar html-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">Docker</div>
                    <div className="progress">
                      <div
                        style={{ width: "60%" }}
                        className="progress-bar css-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">Kubernetes</div>
                    <div className="progress">
                      <div
                        style={{ width: "40%" }}
                        className="progress-bar html-progress"
                      ></div>
                    </div>
                    <div className="skills-topic">Jenkins</div>
                    <div className="progress">
                      <div
                        style={{ width: "35%" }}
                        className="progress-bar css-progress"
                      ></div>
                    </div>
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

export default Skills;
