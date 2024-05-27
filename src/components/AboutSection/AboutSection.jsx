import React from "react";
import new_p_img from "../../assets/new_p_img.png";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={new_p_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a software engineer specializing in React.js and Next.js
              development, passionate about creating innovative and
              user-friendly web applications.
            </p>
            <p>
              My skills cover the full software development lifecycle:
              conceptualization, design, implementation, and deployment.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "77%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>WordPress</p>
              <hr style={{ width: "75%" }} />
            </div>
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
