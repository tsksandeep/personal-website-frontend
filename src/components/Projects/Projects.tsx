import React from "react";
import sankar from "../../assets/img/sankar.jpeg";
import vibeesh from "../../assets/img/vibeesh.jpeg";
import sundar from "../../assets/img/sundar.jpeg";
import sandeep from "../../assets/img/sandeep.jpeg";
import { ProjectsComponentStyle } from "./Projects.style";

const Projects = () => {
  return (
    <section id="projects-section">
      <div className={ProjectsComponentStyle()}>
        <div className="container">
          <div className="heading">
            <h2 className="projects-heading">PROJECTS</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="project-card-wrapper">
                <div className="project-card-no-image">
                  <h3 className="project-card-heading">Fast Torrent</h3>
                  <h4>
                    This project enables users to save torrent file contents
                    (with a maximum size of 5 GB) directly to the cloud and
                    download them quickly without worrying about seeds. <br />{" "}
                    <br /> Tech Stack: React, Go, Python, DynamoDB, PostgreSQL
                  </h4>
                  <div className="project-creators">
                    <img
                      className="rounded-circle project-creator-circle"
                      src={sandeep}
                      alt="sandeep.jpeg"
                    ></img>
                    <img
                      className="rounded-circle project-creator-circle"
                      src={sankar}
                      alt="sankar.jpeg"
                    ></img>
                    <img
                      className="rounded-circle project-creator-circle"
                      src={sundar}
                      alt="sundar.jpeg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="project-card-wrapper">
                <div className="project-card-no-image">
                  <h3 className="project-card-heading">Smart Theatre</h3>
                  <h4>
                    This project lets the audience view and switch subtitles to
                    multiple languages in theatres using augmented reality. As
                    of now, the audience can use android phones to experience
                    it. <br /> <br /> Tech Stack: Go, C#, gRPC, Sqlite3
                  </h4>
                  <div className="project-creators">
                    <img
                      className="rounded-circle project-creator-circle"
                      src={sandeep}
                      alt="sandeep.jpeg"
                    ></img>
                    <img
                      className="rounded-circle project-creator-circle"
                      src={vibeesh}
                      alt="vibeesh.jpeg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-md-3 col-md-6 offset-lg-3 col-lg-6">
              <div className="project-card-wrapper">
                <div className="project-card-no-image">
                  <h3 className="project-card-heading">Crypto Health</h3>
                  <h4>
                    This project enables hospital managements to store their
                    patient's health data in a blockchain, model ensuring high
                    security. <br /> <br /> Tech Stack: React, Django,
                    PostgreSQL
                  </h4>
                  <div className="project-creators">
                    <img
                      className="rounded-circle project-creator-circle"
                      src={sandeep}
                      alt="sandeep.jpeg"
                    ></img>
                    <img
                      className="rounded-circle project-creator-circle"
                      src={sankar}
                      alt="sankar.jpeg"
                    ></img>
                    <img
                      className="rounded-circle project-creator-circle"
                      src={sundar}
                      alt="sundar.jpeg"
                    ></img>
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

export default Projects;
