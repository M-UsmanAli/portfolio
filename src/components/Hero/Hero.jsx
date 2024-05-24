import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_pic from '../../assets/profile_pic.png'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_pic} alt='' className='hero-img'/>
        <h1><span>I am Muhammad Usman Ali,</span> full stack developer.</h1>
        <p>As a dedicated React.js and Next.js application developer, I have played a pivotal role in creating cutting-edge and dynamic user interfaces. My expertise extends to the entire software development life cycle, from conceptualization and design to implementation and deployment.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero