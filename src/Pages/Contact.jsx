import React, { useState } from 'react'
import './CSS/Contact.css'
import Header from '../Components/Header'
import { MdLocationPin } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import Footer from '../Components/Footer.jsx'



const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(contactData)
    });

    const Data = await response.json();
    console.log(Data);

  }

  const [contactData, setcontactData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <Header />
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
            <p className="info-text" id='info-text'>
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
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={contactData.name}
                  onChange={(e) =>
                    setcontactData({
                      ...contactData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={contactData.phone}
                  onChange={(e) =>
                    setcontactData({
                      ...contactData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

            </div>

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={contactData.email}
              onChange={(e) =>
                setcontactData({
                  ...contactData,
                  [e.target.name]: e.target.value
                })
              }
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={contactData.subject}
              onChange={(e) =>
                setcontactData({
                  ...contactData,
                  [e.target.name]: e.target.value
                })
              }
            />

            <label>Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              value={contactData.message}
              onChange={(e) =>
                setcontactData({
                  ...contactData,
                  [e.target.name]: e.target.value
                })
              }
            />
            <button onClick={handleSubmit}>Send Message</button>

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

          <a onClick={() => window.location.href = "tel:+919335049033"}>
            Call Emergency
          </a>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Contact