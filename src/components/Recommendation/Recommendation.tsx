import React from "react";
import siva from "../../assets/img/siva.jpg";
import ajith from "../../assets/img/ajith.jpeg";
import fx from "../../assets/img/fx.jpeg";
import user from "../../assets/img/user.png";
import { RecommendationComponentStyle } from "./Recommendation.style";

const Recommendation = () => {
  return (
    <section id="recommendation-section">
      <div className={RecommendationComponentStyle()}>
        <div className="container">
          <div className="intro">
            <h2 className="text-center recommendation-heading">
              RECOMMENDATION
            </h2>
          </div>
          <div className="row people">
            <div className="col-lg-12 col-md-12 item">
              <div className="box recommendation-box gradient">
                <p className="description">
                  Sandeep one of the best engineers I have worked with. We had a
                  very complex full stack project and he understood the
                  requirements very quickly. Even though the requirements were
                  vague he was able to bring in clarity during implementation.
                  Some of his strong areas are - Clean design, Test driven
                  development, Neatly written and manageable code. This made our
                  transition to next version very easy (even after he finished
                  the project) because the code he wrote was future proof so new
                  developers were able to understand the code easily and
                  contribute very quickly. <br /> <br /> He also shines as a great leader.
                  During our project he pulled in like minded developers, put
                  together a plan for each one of them to parallelly progress.
                  He made sure everyone is aligned with the project and executed
                  it successfully. I wish him all the best!!
                </p>
              </div>
              <div className="author recommendation-author">
                <img
                  className="rounded-circle recommendation-author-circle"
                  src={user}
                  alt="user.png"
                ></img>
                <h5 className="recommendation-author-name">
                  Manoharan Kuppusamy
                </h5>
                <p className="recommendation-author-title">
                  Principal Software Engineer, Microsoft
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 item">
              <div className="box recommendation-box gradient">
                <p className="description">
                  Sandeep has a real passion for his work. During his time with
                  CargoAi, he accomplished many achievements. He started working
                  with us on our crawlers. He then built our new website and put
                  in place the basis of our track and trace system.
                </p>
              </div>
              <div className="author recommendation-author">
                <img
                  className="rounded-circle recommendation-author-circle"
                  src={fx}
                  alt="fx.jpeg"
                ></img>
                <h5 className="recommendation-author-name">
                  Francois Xavier-Gsell
                </h5>
                <p className="recommendation-author-title">
                  Chief Technology Officer at CargoAi
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 item">
              <div className="box recommendation-box gradient">
                <p className="description">
                  Sandeep has strong passion for technology. He is dedicated and
                  meticulous in his tasks. His background in electronics enables
                  him to come up with solutions that is not limited to software.
                  I wish him all the best.
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
                  the product in no time. The quality of the code he delivered
                  was on par with other experienced Go developers. He is so
                  focused on improving his skills and putting them into reality.{" "}
                  <br /> <br />
                  On a lighter note, Sandeep is a very fun person to work with.
                  Sandeep's agility to work with multiple technologies, writing
                  quality code and friendly attitude makes him an amazing
                  engineer any team can have.
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
      </div>
    </section>
  );
};

export default Recommendation;
