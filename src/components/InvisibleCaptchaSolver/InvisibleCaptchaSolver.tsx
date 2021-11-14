import React from "react";
import Robot from "../../assets/img/robot.png";
import { InvisibleCaptchaSolverStyle } from "./InvisibleCaptchaSolver.style";

const InvisibleCaptchaSolver = () => {
  return (
    <section id="invisible-captcha-solver-section">
      <div className={InvisibleCaptchaSolverStyle()}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="robot-image-wrapper">
                <img className="robot" src={Robot} alt="robot.png" />
              </div>
              <div className="app-name">INVISIBLE CAPTCHA SOLVER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvisibleCaptchaSolver;
