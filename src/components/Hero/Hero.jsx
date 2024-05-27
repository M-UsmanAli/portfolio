import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_pic from '../../assets/profile_pic.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_pic} alt='' className='hero-img'/>
        <h1><span>I am Muhammad Usman Ali,</span> a Full Stack Developer.</h1>
        <p>As a full stack developer specializing in React.js and Next.js, I create dynamic user interfaces and responsive web applications. I handle the entire software development life cycle, from design to deployment, ensuring high-quality solutions and optimized performance.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero