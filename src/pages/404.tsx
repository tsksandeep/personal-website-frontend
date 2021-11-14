import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import NotFoundImage from "../assets/img/404.jpg";

import "./bootstrap.min.css";
import "./index.css";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div style={{ padding: "100px 0 50px 0", textAlign: "center" }}>
        <img
          style={{ width: "50%", height: "50%", minWidth: "350px" }}
          src={NotFoundImage}
          alt="404.jpg"
        />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
