import React from "react";
import CAbout from "../../components/cabout/CAbout";
import Navbar from "../../components/navbar/CNavbar";
import "./about.scss";
import CFooter from "../../components/cfooter/CFooter";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <Navbar />
        <div className="a-main">
          <CAbout className="h-info-wrapper" />
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default About;
