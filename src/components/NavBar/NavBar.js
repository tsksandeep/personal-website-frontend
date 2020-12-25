import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavBar.css";
import "../../assets/bootstrap/css/bootstrap.min.css";

const NavBar = () => {
    const navCollapse = () => {
        document.getElementById("navCollapse").classList.remove("show");
    }

    return (
        <Navbar collapseOnSelect expand="xl" className="container-fluid navbar navbar-dark fixed-top bg-white portfolio-navbar gradient">
            <Navbar.Brand as={Link} smooth to="/#intro-section">
                <div className="nav-brand-item">
                    Sandeep
          </div>
            </Navbar.Brand>
            <Navbar.Toggle
                className="nav-menu-custom"
                aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="navCollapse">
                <div className="nav-bar-wrapper">
                    <div id="responsive-navbar-nav">
                        <Nav className="ml-auto nav-bar-items">
                            <Link smooth
                                to="/#experience-section"
                                className="nav-item"
                                onClick={navCollapse}
                            >
                                Experience
                </Link>
                            <Link smooth
                                to="/#education-section"
                                className="nav-item"
                                onClick={navCollapse}
                            >
                                Education
                </Link>
                            <Link smooth
                                to="/#skills-section"
                                className="nav-item"
                                onClick={navCollapse}
                            >
                                Skills
                </Link>
                            <Link smooth
                                to="/#projects-section"
                                className="nav-item"
                                onClick={navCollapse}
                            >
                                Projects
                </Link>
                            <Link smooth
                                to="/#recommendation-section"
                                className="nav-item"
                                onClick={navCollapse}
                            >
                                Recommendation
                </Link>
                            <Link smooth
                                to="/#contact-section"
                                className="nav-item"
                                onClick={navCollapse}
                            >
                                Contact
                </Link>
                        </Nav>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;