import React from 'react'
import './CSS/Services.css'
import Header from '../Components/Header'
import heroimage from '../images/services1.jpeg'
import Footer from '../Components/Footer.jsx'



const Services = () => {
  return (
    <>
    <Header/>
    <div className="services">

      <div className="service-hero">
        <img src={heroimage} alt="CareFlow Services" />
      </div>

      <section className="popular">
        <div className="title">
          <span>OUR SERVICES</span>
          <h2>Popular Healthcare Services</h2>
          <p>Easy and reliable healthcare services for every patient.</p>
        </div>

        <div className="service-list">

          <div className="service-box">
            <div className="icon">🩺</div>
            <h3>OPD Consultation</h3>
            <p>Consult experienced doctors for your healthcare needs.</p>
            <button>Learn More →</button>
          </div>

          <div className="service-box">
            <div className="icon">🚑</div>
            <h3>Emergency</h3>
            <p>Quick medical assistance for emergency situations.</p>
            <button>Get Help →</button>
          </div>

          <div className="service-box">
            <div className="icon">🔬</div>
            <h3>Diagnostics</h3>
            <p>Get diagnostic and laboratory services easily.</p>
            <button>View Services →</button>
          </div>

          <div className="service-box">
            <div className="icon">💊</div>
            <h3>Pharmacy</h3>
            <p>Get medicines and pharmacy services at one place.</p>
            <button>Explore →</button>
          </div>

          <div className="service-box">
            <div className="icon">👨‍⚕️</div>
            <h3>Specialist Doctors</h3>
            <p>Find doctors from different medical departments.</p>
            <button>Find Doctor →</button>
          </div>

          <div className="service-box">
            <div className="icon">📋</div>
            <h3>Treatment Follow-up</h3>
            <p>Manage your follow-up appointments easily.</p>
            <button>Know More →</button>
          </div>

        </div>
      </section>


      <section className="token">

        <div className="token-text">
          <span>SMART QUEUE MANAGEMENT</span>

          <h2>
            Skip the Long Queue with
            <b> Digital Tokens</b>
          </h2>

          <p>
            Book your token online and track your queue without
            waiting for a long time at the hospital.
          </p>

          <div className="features">
            <p>✓ Online Token Booking</p>
            <p>✓ Live Queue Tracking</p>
            <p>✓ Estimated Waiting Time</p>
            <p>✓ Turn Notification</p>
          </div>

          <button className="main-btn">Get Token →</button>
        </div>


        <div className="token-box">

          <div className="token-top">
            <span>YOUR TOKEN</span>
            <span>● LIVE</span>
          </div>

          <h3>024</h3>

          <div className="token-data">

            <div>
              <span>Now Serving</span>
              <b>018</b>
            </div>

            <div>
              <span>People Ahead</span>
              <b>06</b>
            </div>

            <div>
              <span>Wait Time</span>
              <b>15 min</b>
            </div>

          </div>

          <div className="progress">
            <div></div>
          </div>

          <p>Your turn is coming soon!</p>

        </div>

      </section>


      <section className="departments">

        <div className="title">
          <span>MEDICAL DEPARTMENTS</span>
          <h2>Explore Departments</h2>
          <p>Choose the right department for your healthcare needs.</p>
        </div>

        <div className="department-list">

          <div className="dept-card">
            <div>❤️</div>
            <section>
              <h3>Cardiology</h3>
              <p>Heart & cardiovascular care</p>
            </section>
            <b>→</b>
          </div>

          <div className="dept-card">
            <div>🧠</div>
            <section>
              <h3>Neurology</h3>
              <p>Brain & nervous system care</p>
            </section>
            <b>→</b>
          </div>

          <div className="dept-card">
            <div>🦴</div>
            <section>
              <h3>Orthopedics</h3>
              <p>Bone & joint treatment</p>
            </section>
            <b>→</b>
          </div>

          <div className="dept-card">
            <div>👶</div>
            <section>
              <h3>Pediatrics</h3>
              <p>Child healthcare services</p>
            </section>
            <b>→</b>
          </div>

          <div className="dept-card">
            <div>✨</div>
            <section>
              <h3>Dermatology</h3>
              <p>Skin & hair care</p>
            </section>
            <b>→</b>
          </div>

          <div className="dept-card">
            <div>⚕️</div>
            <section>
              <h3>General Medicine</h3>
              <p>General health consultation</p>
            </section>
            <b>→</b>
          </div>

        </div>

      </section>


      <section className="how">

        <div className="title">
          <span>HOW IT WORKS</span>
          <h2>A Better Way to Visit Hospital</h2>
          <p>Complete your hospital visit in four simple steps.</p>
        </div>

        <div className="steps">

          <div className="step">
            <strong>01</strong>
            <h3>Select Service</h3>
            <p>Choose the service you need.</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <strong>02</strong>
            <h3>Choose Doctor</h3>
            <p>Select your doctor or department.</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <strong>03</strong>
            <h3>Book Token</h3>
            <p>Book your token online.</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <strong>04</strong>
            <h3>Track Queue</h3>
            <p>Track your queue status.</p>
          </div>

        </div>

      </section>


      <section className="why">

        <div className="why-title">
          <span>WHY CAREFLOW?</span>
          <h2>Healthcare Without the Hassle</h2>
          <p>
            Simple technology for a better hospital experience.
          </p>
        </div>

        <div className="why-list">

          <div>
            <h3>⏱️ Less Waiting</h3>
            <p>Spend less time waiting in long queues.</p>
          </div>

          <div>
            <h3>📱 Easy Booking</h3>
            <p>Book appointments and tokens online.</p>
          </div>

          <div>
            <h3>📊 Live Queue</h3>
            <p>Check your current queue position.</p>
          </div>

          <div>
            <h3>🕐 24/7 Support</h3>
            <p>Get important healthcare information anytime.</p>
          </div>

        </div>

      </section>


      <section className="cta">

        <div>
          <span>NEED HEALTHCARE ASSISTANCE?</span>
          <h2>Find the Right Service for You.</h2>
          <p>Book an appointment or get your digital token today.</p>
        </div>

        <button>Book Appointment →</button>

      </section>

    </div>
    <Footer/>
    </>
  )
}

export default Services