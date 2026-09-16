import React from 'react'
import './CSS/About.css'
import Header from '../Components/Header'
import aboutHero from '../images/aboutHero.jpeg'
import about2 from '../images/about1.jpeg'
import doctor3 from '../images/about2.jpeg'
import about3 from '../images/about3.jpeg'


const About = () => {
  return (
    <>
    <Header/>
     <div className="about-page">
      
      <section className="about-hero">
        <div className="hero-left">
          <p className="small-title">ABOUT CAREFLOW</p>

          <h1>
            Better Care.<br />
            <span>Less Waiting.</span>
          </h1>

          <p>
            CareFlow Hospital is a modern healthcare platform that
            combines advanced technology with compassionate care to
            make your hospital visits easier, faster and stress-free.
          </p>

          <div className="hero-points">
            <div>
              <b>♡</b>
              <span>Quality<br />Healthcare</span>
            </div>

            <div>
              <b>♧</b>
              <span>Experienced<br />Doctors</span>
            </div>

            <div>
              <b>◷</b>
              <span>24/7<br />Support</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={aboutHero}
            alt="CareFlow Hospital"
          />
        </div>
      </section>

      <section className="who-section">

        <div className="who-image">
          <img
            src={about2}
            alt="Doctor with patient"
          />
        </div>

        <div className="who-content">
          <p className="small-title">WHO WE ARE</p>

          <h2>
            CareFlow Hospital &<br />
            Queue Management System
          </h2>

          <p>
            CareFlow is a smart healthcare platform designed to make
            hospital visits easier for everyone. Patients can find
            doctors, explore treatments, book appointments and manage
            their tokens through a simple digital system.
          </p>

          <p>
            Our goal is to connect patients with healthcare services
            while reducing unnecessary waiting time and confusion
            inside hospitals.
          </p>

          <button>Learn More →</button>
        </div>

      </section>


      {/* Mission */}
      <section className="mission-section">

        <p className="small-title">OUR MISSION</p>

        <h2>Making Healthcare Simple & Accessible</h2>

        <p className="mission-text">
          We believe everyone deserves quality healthcare without the
          hassle of long waiting times.
        </p>

        <div className="mission-boxes">

          <div>
            <span>◷</span>
            <h3>Reduce Waiting Time</h3>
            <p>Spend less time standing in hospital queues.</p>
          </div>

          <div>
            <span>▣</span>
            <h3>Easy Booking & Access</h3>
            <p>Book appointments and tokens easily.</p>
          </div>

          <div>
            <span>♡</span>
            <h3>Better Patient Experience</h3>
            <p>Simple and organized healthcare experience.</p>
          </div>

        </div>

      </section>


      {/* What We Offer */}
      <section className="offer-section">

        <div className="section-heading">
          <p className="small-title">WHAT CAREFLOW OFFERS</p>
          <h2>Everything You Need in One Place</h2>
          <p>
            Simple digital services for a better hospital experience.
          </p>
        </div>

        <div className="offer-main">

          <div className="offer-cards">

            <div className="offer-card">
              <span>⌕</span>
              <div>
                <h3>Doctor Search</h3>
                <p>Find the right doctor for your needs.</p>
              </div>
            </div>

            <div className="offer-card">
              <span>▣</span>
              <div>
                <h3>Appointment Booking</h3>
                <p>Book appointments in just a few clicks.</p>
              </div>
            </div>

            <div className="offer-card">
              <span>♧</span>
              <div>
                <h3>Token System</h3>
                <p>Get digital tokens and avoid long queues.</p>
              </div>
            </div>

            <div className="offer-card">
              <span>◉</span>
              <div>
                <h3>Queue Tracking</h3>
                <p>Track your position in real-time.</p>
              </div>
            </div>

            <div className="offer-card">
              <span>▤</span>
              <div>
                <h3>Treatment Information</h3>
                <p>Get information about treatments and services.</p>
              </div>
            </div>

            <div className="offer-card">
              <span>◷</span>
              <div>
                <h3>24/7 Support</h3>
                <p>We are always here to help you.</p>
              </div>
            </div>

          </div>

          <div className="doctor-image">
            <img
              src={doctor3}
              alt="Doctor"
            />
          </div>

        </div>

      </section>


      {/* How CareFlow Works */}
      <section className="work-section">

        <div className="section-heading">
          <p className="small-title">HOW CAREFLOW WORKS</p>
          <h2>A Simple Process for Better Experience</h2>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">🏥</div>
            <h3>Select Hospital</h3>
            <p>Choose your hospital and department.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">♙</div>
            <h3>Choose Doctor</h3>
            <p>Find and select your doctor.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">▣</div>
            <h3>Book Token</h3>
            <p>Get your appointment or token.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <div className="step-number">04</div>
            <div className="step-icon">♧</div>
            <h3>Track Queue</h3>
            <p>Follow your queue in real-time.</p>
          </div>
        </div>
      </section>


      {/* Why Choose */}
      <section className="why-section">

        <div className="why-image">
          <img
            src={about3}
            alt="Hospital Interior"
          />
        </div>

        <div className="why-content">
          <p className="small-title">WHY CHOOSE CAREFLOW?</p>

          <h2>We Focus on What Matters Most</h2>

          <p>
            CareFlow brings technology and healthcare together to
            provide a simple, organized and convenient experience
            for patients.
          </p>

          <div className="checks">
            <p>✓ Save Time & Avoid Long Queues</p>
            <p>✓ Easy to Use Interface</p>
            <p>✓ Live Queue & Real-Time Updates</p>
            <p>✓ Digital Token System</p>
            <p>✓ Better Patient Experience</p>
            <p>✓ Organized Hospital Management</p>
          </div>
        </div>

      </section>


      {/* Services */}
      <section className="services-section">

        <div className="section-heading">
          <p className="small-title">OUR SERVICES</p>
          <h2>Complete Healthcare Services</h2>
        </div>

        <div className="service-list">

          <div className="service-card">
            <span>✚</span>
            <h3>OPD</h3>
            <p>Consultation</p>
          </div>

          <div className="service-card">
            <span>✚</span>
            <h3>Emergency</h3>
            <p>Care</p>
          </div>

          <div className="service-card">
            <span>▣</span>
            <h3>Diagnostics</h3>
            <p>Lab Tests</p>
          </div>

          <div className="service-card">
            <span>♧</span>
            <h3>Pharmacy</h3>
            <p>Services</p>
          </div>

          <div className="service-card">
            <span>♙</span>
            <h3>Specialist</h3>
            <p>Doctors</p>
          </div>

          <div className="service-card">
            <span>♡</span>
            <h3>Treatment</h3>
            <p>Follow Up</p>
          </div>

        </div>

      </section>


      {/* Numbers */}
      <section className="numbers-section">

        <div className="number">
          <h2>10K+</h2>
          <p>Happy Patients</p>
        </div>

        <div className="number">
          <h2>50+</h2>
          <p>Expert Doctors</p>
        </div>

        <div className="number">
          <h2>5+</h2>
          <p>Departments</p>
        </div>

        <div className="number">
          <h2>24/7</h2>
          <p>Support Team</p>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div>
          <p>READY TO GET STARTED?</p>
          <h2>Your Health Journey Starts Here</h2>
          <span>
            Book your appointment and experience easier healthcare.
          </span>
        </div>

        <button>Book Appointment →</button>

      </section>

    </div>
    </>
  )
}

export default About