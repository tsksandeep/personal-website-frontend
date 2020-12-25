import React from "react";
import "./HomePage.css";
import Intro from "../../components/Intro/Intro";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";
import Recommendation from "../../components/Recommendation/Recommendation";
import Projects from "../../components/Projects/Projects";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="home-page-component">
        <Intro />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Recommendation />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
