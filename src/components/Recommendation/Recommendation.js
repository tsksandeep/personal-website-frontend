import React from "react";
import "./Recommendation.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import siva from "../../assets/img/siva.jpg";

const Recommendation = () => {
    return (
        <section id="recommendation-section">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center recommendation-heading">RECOMMENDATION</h2>
                </div>
                <div className="row people">
                    <div className="col-md-offset-6 col-lg-offset-4 item">
                        <div className="box recommendation-box gradient">
                            <p className="description">Sandeep has strong passion for technology. He is dedicated and meticulous
                            in his tasks. His background in electronics enables him to come up with solutions that is
                            not limited to software. I wish him all the best.</p>
                        </div>
                        <div className="author recommendation-author">
                            <img className="rounded-circle recommendation-author-circle" src={siva} alt="siva.jpg"></img>
                            <h5 className="recommendation-author-name">Sivachandran Paramasivam</h5>
                            <p className="recommendation-author-title">Director of Engineering, Qube Cinemas Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendation