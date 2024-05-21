import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>I am currently available to take on new projects, so feel free to send me a messgae about anything you want me to work on. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>aliusmanmuhammad98@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>003130874356</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Islamabad, Pakistan</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your E-mail' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="messgae" rows="8" placeholder='Enter Your Message'></textarea>
                <button className='contact-submit' type='submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact