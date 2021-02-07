import React from "react";
import "./SiteMap.css";
import "../../assets/bootstrap/css/bootstrap.min.css";

const SiteMapComponent = () => {
    return (
        <section id="sitemap-section">
            <div className="container">
                <div className="row">
                    <div className="sitemap-heading-wrapper">
                        <h2 className="sitemap-heading">SITEMAP</h2>
                    </div>
                    <ul className="card sitemap-list portfolio-info-card border-0">
                        <li><a href="https://www.tsksandeep.com/">MAIN</a></li>
                        <li><a href="https://www.tsksandeep.com/#intro-section">INTRO</a></li>
                        <li><a href="https://www.tsksandeep.com#experience-section">EXPERIENCE</a></li>
                        <li><a href="https://www.tsksandeep.com/#education-section">EDUCATION</a></li>
                        <li><a href="https://www.tsksandeep.com/#skills-section">SKILLS</a></li>
                        <li><a href="https://www.tsksandeep.com/#projects-section">PROJECTS</a></li>
                        <li><a href="https://www.tsksandeep.com/#recommendation-section">RECOMMENDATION</a></li>
                        <li><a href="https://www.tsksandeep.com/#contact-section">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SiteMapComponent;