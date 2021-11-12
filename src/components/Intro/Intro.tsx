import React from "react";
import { IntroComponentStyle } from "./Intro.style";
import avatar from "../../assets/img/avatar.jpg";
import { Link } from "gatsby";

const Intro = () => {
  return (
    <section id="intro-section">
      <div className={IntroComponentStyle()}>
        <div className="container">
          <img className="avatar" src={avatar} alt="avatar.jpg"></img>
          <div className="about-me">
            <p>
              Hello! I am <span className="avatar-name">Sandeep Kumar</span>{" "}
              <br /> I work as a full stack developer. I have passion towards
              Web and Systems development.
            </p>
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
