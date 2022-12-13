import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FooterComponentStyle } from "./Footer.style";

const Footer = () => {
  const downloadResume = async (e) => {
    e.preventDefault();
    fetch("/api/v1/download/resume").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "sandeep_resume.pdf";
        a.click();
      });
    });
  };

  const handleFormSubmit = async (e) => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    e.preventDefault();

    let form = document.getElementById("custom-form") as HTMLFormElement;
    let custom_response = document.getElementById(
      "custom-response"
    ) as HTMLInputElement;
    let name = (document.getElementById("form-name") as HTMLInputElement).value;
    let email = (document.getElementById("form-email") as HTMLInputElement)
      .value;
    let message = (document.getElementById("form-message") as HTMLInputElement)
      .value;

    if (name === "" || email === "" || message === "") {
      custom_response.innerText = "Please fill all the fields";
      custom_response.setAttribute(
        "style",
        "background-color: #d9534f; visibility: visible; opacity: 1;"
      );
      await sleep(3000);
      custom_response.setAttribute("style", "visibility: hidden; opacity: 0;");
      return;
    }

    let body = {
      name: name,
      email: email,
      message: message,
    };

    const response = await fetch("https://submit-form.com/jtsnSuDO", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      custom_response.innerText = "Unable to submit the response";
      custom_response.setAttribute(
        "style",
        "background-color: #d9534f; visibility: visible; opacity: 1;"
      );
    } else {
      custom_response.innerText = "Successfully submitted the response";
      custom_response.setAttribute(
        "style",
        "background-color: #5cb85c; visibility: visible; opacity: 1;"
      );
    }

    await sleep(3000);

    custom_response.setAttribute("style", "visibility: hidden; opacity: 0;");

    form.reset();
  };
  return (
    <section id="contact-section">
      <div className={FooterComponentStyle()}>
        <footer id="contact" className="section-margin">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <h2 className="contact-heading">CONTACT</h2>
              </div>
              <div className="col-md-6 footer-top details">
                <div id="contact-left">
                  <div id="contact-info" className="address-custom">
                    <div>
                      <p>
                        3/446-B, KN Colony Post, <br />
                        Selva Nagar, Ammapet, <br /> Salem - 636014
                      </p>
                    </div>
                    <div id="phone-email-landline">
                      <p>+91 9442142327</p>
                      <p>tsksandeep11@gmail.com</p>
                    </div>
                    <ul className="fontawesome-icons-custom">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/sandeepkumar-tamilmani-49b532147/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/sandeep.slasher"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/tsk_sandeep/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/tsksandeep"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                        </a>
                      </li>
                    </ul>
                    <Button
                      className="btn btn-primary btn-resume"
                      variant="primary"
                      type="submit"
                      onClick={downloadResume}
                    >
                      DOWNLOAD RESUME
                    </Button>
                  </div>
                </div>
              </div>
              <div id="contact-me" className="col-md-6 footer-top">
                <div id="custom-response"></div>
                <Form onSubmit={handleFormSubmit} id="custom-form">
                  <Form.Group controlId="form-name">
                    <Form.Control
                      className="contact-input-style"
                      name="name"
                      type="text"
                      placeholder="NAME"
                    />
                  </Form.Group>
                  <Form.Group controlId="form-email">
                    <Form.Control
                      className="contact-input-style"
                      name="email"
                      type="email"
                      placeholder="EMAIL"
                    />
                  </Form.Group>
                  <Form.Group controlId="form-message">
                    <Form.Control
                      className="contact-input-style"
                      name="message"
                      as="textarea"
                      rows={5}
                      placeholder="MESSAGE"
                    />
                  </Form.Group>
                  <Button
                    className="btn btn-primary btn-send"
                    variant="primary"
                    type="submit"
                  >
                    SEND
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <div id="footer-bottom" className="section-margin">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div id="footer-copyrights">
                    <p>
                      Copyrights &copy; {new Date().getFullYear()} All rights
                      reserved by Sandeep
                    </p>
                  </div>
                </div>
                <div className="col-md-7">
                  <div id="footer-menu">
                    <ul className="footer-menu-items">
                      <li>
                        <Link
                          to="/#experience-section"
                          className="footer-menu-item"
                        >
                          Experience
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#education-section"
                          className="footer-menu-item"
                        >
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#skills-section"
                          className="footer-menu-item"
                        >
                          Skills
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#projects-section"
                          className="footer-menu-item"
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#recommendation-section"
                          className="footer-menu-item"
                        >
                          Recommendation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
