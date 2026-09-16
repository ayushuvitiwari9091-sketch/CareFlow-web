import React from 'react'
import './CSS/Contact.css'
import Header from '../Components/Header'
import { MdLocationPin } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import Footer from '../Components/Footer.jsx'



const Contact = () => {
  return (
    <>
    <Header/>
    <div className="contact">

      {/* Contact Header */}
      <section className="contact-head">
        <h1>Contact Us</h1>
        <p>
          Have a question or need help? We are here to assist you.
        </p>
      </section>

      {/* Contact Details */}
      <section className="contact-area">

        <div className="contact-info">

          <h2>Get In Touch</h2>
          <p className="info-text">
            Feel free to contact us for any information about our
            hospital, doctors, treatments or appointments.
          </p>

          <div className="info-box">
            <div className="info-icon">
              <MdLocationPin />
            </div>
            <div>
              <h3>Our Address</h3>
              <p>CareFlow Hospital, Lucknow, Uttar Pradesh</p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <MdAddCall />
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <MdMessage />
            </div>
            <div>
              <h3>Email Address</h3>
              <p>support@careflow.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <MdWatchLater />
            </div>
            <div>
              <h3>Working Hours</h3>
              <p>Open 24 Hours / 7 Days</p>
            </div>
          </div>

        </div>


        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <div className="input-row">
            <div>
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div>
              <label>Phone Number</label>
              <input type="text" placeholder="Enter phone number" />
            </div>
          </div>

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Subject</label>
          <input type="text" placeholder="Enter subject" />

          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
          ></textarea>

          <button>Send Message</button>

        </div>

      </section>


      {/* Location */}
      <section className="location">

        <div className="location-text">
          <h2>Find Our Hospital</h2>
          <p>
            Visit CareFlow Hospital for quality healthcare and
            professional medical services.
          </p>

          <button>Get Directions</button>
        </div>

        <div className="location-img">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
            alt="CareFlow Hospital"
          />
        </div>

      </section>


      {/* Emergency */}
      <section className="emergency">
        <div>
          <h2>Need Emergency Assistance?</h2>
          <p>
            Our emergency department is available 24 hours a day.
          </p>
        </div>

        <a href="tel:+919876543210">
          Call Emergency
        </a>
      </section>

    </div>
    <Footer/>
    </>
  )
}

export default Contact