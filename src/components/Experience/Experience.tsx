import React from "react";
import { ExperienceComponentStyle } from "./Experience.style";

const Experience = () => {
  return (
    <section id="experience-section" className="portfolio-block cv">
      <div className={ExperienceComponentStyle()}>
        <div className="container">
          <div className="work-experience group">
            <div className="heading">
              <h2 className="text-center experience-heading">Experience</h2>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="role">Software Engineer</h3>
                  <h4 className="organization">Hobnob.ai - Singapore</h4>
                </div>
                <div className="col-md-6 custom-period">
                  <span className="period">May 2022 - Present</span>
                </div>
              </div>
              <p className="role-description">
                • <span className="bold">Hobnob</span>
                : Worked in the development of Hobnob Topics that enable the
                users to join and hobnob on the topic (E.g., Sports, Technology,
                etc.,) they like.
                <br />• <span className="bold">Intros</span>
                : Worked in the development of Intros that enables new joiners
                in a company to effectively schedule a meeting with their
                colleagues and break the silo. <br />
              </p>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="role">Software Engineer</h3>
                  <h4 className="organization">CargoAi - Singapore</h4>
                </div>
                <div className="col-md-6 custom-period">
                  <span className="period">Aug 2020 - Apr 2022</span>
                </div>
              </div>
              <p className="role-description">
                • <span className="bold">Subscription Platform</span>
                : Architected and built a subscription platform for all the
                services offered by CargoAi. Integrated with RapidAPI to
                effortlessly subscribe and use the API.
                <br />• <span className="bold">Track and Trace</span>
                : Designed and developed an extensible end-to-end Track & Trace
                service for several major Airlines (Air France, British Airways,
                Etihad, Finnair, etc.) integrated with our application. 1000’s
                of cargo forwarders use this service for day-to-day tracking of
                their shipments. <br />•{" "}
                <span className="bold">Carbon Emission Calculator</span>
                : Designed and developed a 99% accurate carbon emission
                calculator service for air cargo shipments transported with
                various carriers. Both airlines and forwarders use this service
                extensively to calculate carbon emission for shipments and
                transport it eco-friendly.
                <br />• <span className="bold">Flight Schedule</span>:
                Implemented flight schedule service to get real-time schedules
                of all cargo airlines with the market rate. Helped forwarders to
                choose the best cost-effective carrier for their shipment.{" "}
                <br />• <span className="bold">Website</span>: Designed and
                developed the company’s website with responsive design and
                excellent search engine optimization using GatsbyJS.
              </p>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="role">Software Engineer - Intern</h3>
                  <h4 className="organization">Qube Cinema - Chennai</h4>
                </div>
                <div className="col-md-6 custom-period">
                  <span className="period">May 2019 - Jul 2020</span>
                </div>
              </div>
              <p className="role-description">
                • <span className="bold">XP 4.0</span>
                : Worked in the development of DCI certified next-generation
                digital cinema server that enables movie playback in more than
                4500 screens around the world. <br />•{" "}
                <span className="bold">Automation Controller</span>
                : Worked in the development of Automation Controller, which
                automates around 90% of the manual tasks done when playing
                movies in theatres. It can be easily integrated with theatre
                management system for much more automation.
                <br />• <span className="bold">Distributor Asset Manager</span>:
                Designed and developed distributor asset management service
                which helps distributor’s to manage their assets in the cloud.
              </p>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="role">Software Engineer - Intern</h3>
                  <h4 className="organization">Qube Cinema - Chennai</h4>
                </div>
                <div className="col-md-6 custom-period">
                  <span className="period">Aug 2018 - Dec 2018</span>
                </div>
              </div>
              <p className="role-description">
                • <span className="bold">iTunes Publisher</span>
                : Developed an internal iTunes publisher tool that restructures
                and publishes digital cinema contents to iTunes. <br />•
                <span className="bold"> HDD health monitor</span>: Developed an
                HDD health monitor service that monitors the health of the hard
                disk drives currently in use and sends the periodic reports in
                slack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
