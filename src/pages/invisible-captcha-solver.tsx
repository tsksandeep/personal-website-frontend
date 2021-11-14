import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import InvisibleCaptchaSolver from "../components/InvisibleCaptchaSolver/InvisibleCaptchaSolver";

import "./bootstrap.min.css";
import "./index.css";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <InvisibleCaptchaSolver />
      <Footer />
    </>
  );
};

export default NotFound;
