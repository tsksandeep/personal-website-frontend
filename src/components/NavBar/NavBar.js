import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavBar.css";
import "../../assets/bootstrap/css/bootstrap.min.css";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="container-fluid navbar navbar-dark fixed-top bg-white portfolio-navbar gradient">
            <Navbar.Brand as={Link} smooth to="/#intro-section">
                <div className="nav-brand-item">
                    Sandeep
          </div>
            </Navbar.Brand>
            <Navbar.Toggle
                className="nav-menu-custom"
                aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse>
                <div className="nav-bar-wrapper">
                    <div id="responsive-navbar-nav">
                        <Nav className="ml-auto nav-bar-items">
                            <Link smooth
                                to="/#experience-section"
                                className="nav-item"
                            >
                                Experience
                </Link>
                            <Link smooth
                                to="/#education-section"
                                className="nav-item"
                            >
                                Education
                </Link>
                            <Link smooth
                                to="/#skills-section"
                                className="nav-item"
                            >
                                Skills
                </Link>
                            <Link smooth
                                to="/#projects-section"
                                className="nav-item"
                            >
                                Projects
                </Link>
                            <Link smooth
                                to="/#recommendation-section"
                                className="nav-item"
                            >
                                Recommendation
                </Link>
                        </Nav>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;