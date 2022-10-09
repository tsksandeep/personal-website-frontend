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
                • Worked in the development of Hobnob Topics that enable the
                users to join and hobnob on the topic (E.g., Sports, Technology,
                etc.,) they like.
                <br />• Worked in the development of Intros that enables new
                joiners in a company to effectively schedule a meeting with
                their colleagues and break the silo.
                <br />• Implemented OAuth Flow (Google and Microsoft) for the
                application.
                <br />• Developed Slack and MS Teams extensions for the
                application.
                <br />• Worked on adding ICS attachments in meeting schedule
                emails by following iMIP best practices.
                <br />• Introduced CloudFormation to the team and used to it
                speed up the deployment process.
                <br />
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
                • Developed an extensible end-to-end Track & Trace microservice
                for several major Airlines (Air France, British Airways, Etihad,
                Finnair, etc.) integrated with our application. 1000s of cargo
                forwarders use this service for the day-to-day tracking of their
                shipments.
                <br />• Implemented Carbon emission calculator plugin for track
                and trace service based on IATA (International Air Transport
                Association) standard for calculating carbon emissions.
                <br />• Optimized Flight schedule microservice and reduced its
                API response time.
                <br />• Rewrote Notification microservice with decoupled
                architecture using well-defined interfaces.
                <br />• Worked in dockerizing crawler service to run selenium
                with headless chrome in AWS Lambda.
                <br />• Implemented an IP tracker module to track the number of
                requests for various services.
                <br />• Integrated Track and trace and Flight schedule APIs with
                RapidAPI to effortlessly subscribe and use the API.
                <br />• Designed and developed the company’s website with
                responsive design and excellent search engine optimization
                <br />
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
                • Developed OTA (Over the Air) update feature for the playback
                servers installed in 4000+ theatres.
                <br />• Develop a module to detect USB drives plugged into the
                playback server, list all the asset packages (DCPs), and detach
                them.
                <br />• Wrote a library for DCP construction from media assets.
                <br />• Developed media player features (play, pause, stop,
                forward, and backward) for the playback server which interacts
                with media streamer device (Raspberry Pi) to execute the
                operations using gRPC.
                <br />• Worked in the development of an Automation Controller
                module that interacts with TMS (Theatre Management System) APIs
                to automatically schedule movies and advertisements,
                increase/decrease volume, and turn on/off lights on multiple
                screens.
                <br />• Cross-compiled Go code (with custom c bindings) against
                Yocto Linux x86 architecture.
                <br />• Customized fonts and cursors of X Window System (X11) in
                the playback server.
                <br />
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
                • Developed an internal iTunes publisher tool that restructures
                and publishes digital cinema contents to iTunes. <br />•
                Developed an HDD health monitor service that monitors the health
                of the hard disk drives currently in use and sends the periodic
                reports in slack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
