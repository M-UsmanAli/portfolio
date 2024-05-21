import React from "react";
import "./AboutSection.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a software engineer with expertise in React.js and Next.js application development. With a passion for creating innovative and user-friendly solutions.
            </p>
            <p>
              My expertise extends to the entire software development lifecycle,
              from conceptualization and design to implementation and
              deployment.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPREINCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>30+</h1>
            <p>PEOJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>SATISFIED CLIENTS</p>
          </div>
        </div>
    </div>
  );
};

export default AboutSection;
