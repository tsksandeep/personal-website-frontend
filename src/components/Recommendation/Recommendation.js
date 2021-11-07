import React from "react";
import "./Recommendation.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import siva from "../../assets/img/siva.jpg";
import ajith from "../../assets/img/ajith.jpeg";

const Recommendation = () => {
  return (
    <section id="recommendation-section">
      <div className="container">
        <div className="intro">
          <h2 className="text-center recommendation-heading">RECOMMENDATION</h2>
        </div>
        <div className="row people">
          <div className="col-lg-12 col-md-12 item">
            <div className="box recommendation-box gradient">
              <p className="description">
                Sandeep has strong passion for technology. He is dedicated and
                meticulous in his tasks. His background in electronics enables
                him to come up with solutions that is not limited to software. I
                wish him all the best.
              </p>
            </div>
            <div className="author recommendation-author">
              <img
                className="rounded-circle recommendation-author-circle"
                src={siva}
                alt="siva.jpg"
              ></img>
              <h5 className="recommendation-author-name">
                Sivachandran Paramasivam
              </h5>
              <p className="recommendation-author-title">
                Product Engineer at Platform.sh
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 item">
            <div className="box recommendation-box gradient">
              <p className="description">
                Sandeep is a super quick learner. I know him since he joined
                Qube Cinema as a Software Engineering Intern. He was able to
                quickly pick up Go and started delivering critical features to
                the product in no time. The quality of the code he delivered was
                on par with other experienced Go developers. He is so focused on
                improving his skills and putting them into reality. <br />{" "}
                <br />
                On a lighter note, Sandeep is a very fun person to work with.
                Sandeep's agility to work with multiple technologies, writing
                quality code and friendly attitude makes him an amazing engineer
                any team can have.
              </p>
            </div>
            <div className="author recommendation-author">
              <img
                className="rounded-circle recommendation-author-circle"
                src={ajith}
                alt="ajith.jpeg"
              ></img>
              <h5 className="recommendation-author-name">
                Ajith Panneerselvam
              </h5>
              <p className="recommendation-author-title">
                Software Engineer at Toyota Connected
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
