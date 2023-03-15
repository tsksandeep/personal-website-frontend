import React from "react";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";
import Skills from "../components/Skills/Skills";
import Recommendation from "../components/Recommendation/Recommendation";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Metatags from "../components/Metatags/Metatags";

import MetaImg from "../assets/img/meta.png";

import "./bootstrap.min.css";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Metatags
        title="Sandeep - Website"
        description="Hello! I am Sandeep Kumar. I am a software developer with over 4 years of experience in creating software solutions for clients worldwide. My expertise lies in designing databases and developing applications using cutting-edge technologies. Throughout the course of my professional trajectory within the digital realm, I have acquired a profound comprehension and exceptional proficiency that greatly surpasses industry standards."
        type="website"
        url="https://sandeep.app/"
        image={MetaImg}
      />
      <NavBar />
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Recommendation />
      <Footer />
    </>
  );
};

export default HomePage;
