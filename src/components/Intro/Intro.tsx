import React from "react";
import { IntroComponentStyle } from "./Intro.style";
import Sandeep from "../../assets/img/sandeep.jpeg";
import { Link } from "gatsby";

const Intro = () => {
  return (
    <section id="intro-section">
      <div className={IntroComponentStyle()}>
        <div className="container">
          <img className="avatar" src={Sandeep} alt="sandeep.jpg"></img>
          <div className="about-me">
            <div className="about-intro-heading">
              Hello! I am <span className="avatar-name">Sandeep Kumar</span>
            </div>
            <div className="about-intro">
              I am a software developer with over 4 years of experience in
              creating software solutions for clients worldwide. My expertise
              lies in designing databases and developing applications using
              cutting-edge technologies. Throughout the course of my
              professional trajectory within the digital realm, I have acquired
              a profound comprehension and exceptional proficiency that greatly
              surpasses industry standards. <br /> <br />
              {"     "}My main concentration lies in providing superior software that
              satisfies the requirements of my customers or final users. I have
              faith in utilizing agile methodologies to guarantee the timely and
              budget-friendly accomplishment of development projects. As an
              individual, I am committed to delivering outstanding software
              solutions that drive business success and improve the lives of
              end-users.
            </div>
          </div>
          <div>
            <span className="know-me-already">Know me already ?</span>
            <Link
              className="btn btn-outline-primary"
              role="button"
              to="/#contact-section"
            >
              HIRE ME
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
