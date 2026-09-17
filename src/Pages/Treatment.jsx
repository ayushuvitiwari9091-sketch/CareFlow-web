import React from 'react'
import './CSS/Treatment.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer.jsx'

const Treatment = () => {

  const treatments = [
    {
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",
      title: "Cardiac Care",
      text: "Complete care and treatment for heart-related healthcare needs.",
      tag: "HEART CARE"
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=85",
      title: "Neurology",
      text: "Specialized healthcare and treatment for brain and nervous system.",
      tag: "NEURO CARE"
    },
    {
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85",
      title: "Orthopedic Care",
      text: "Professional care for bones, joints and movement-related problems.",
      tag: "BONE & JOINT"
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=85",
      title: "Eye Care",
      text: "Complete eye care and treatment for better vision and eye health.",
      tag: "EYE CARE"
    },
    {
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
      title: "Dental Care",
      text: "Dental consultation and treatment for healthy teeth and gums.",
      tag: "DENTAL CARE"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
      title: "General Care",
      text: "General consultation and healthcare for common health concerns.",
      tag: "GENERAL CARE"
    }
  ]

  return (
    <>
      <Header />
      <div className="treatment-page">
        <section className="treatment-heading">
          <div className="heading-badge">
            CAREFLOW HEALTHCARE
          </div>
          <h1>
            Healthcare Designed
            <br />
            <span>Around You.</span>
          </h1>
          <p>
            From routine consultation to specialized treatment,
            CareFlow helps you find the right care with less waiting
            and more convenience.
          </p>
          <div className="heading-buttons">
            <button className="primary-btn">
              Book Appointment →
            </button>
            <button className="outline-btn">
              Explore Treatments
            </button>
          </div>
        </section>


        {/* ================= QUICK INFO ================= */}

        <section className="quick-info">

          <div className="info-box">
            <div className="info-icon">✚</div>
            <div>
              <strong>Expert Doctors</strong>
              <span>Experienced healthcare professionals</span>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">◷</div>
            <div>
              <strong>Easy Booking</strong>
              <span>Appointments & digital tokens</span>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">♡</div>
            <div>
              <strong>Patient First</strong>
              <span>Care focused on your comfort</span>
            </div>
          </div>

        </section>


        {/* ================= CATEGORIES ================= */}

        <section className="categories">

          <div className="section-top">

            <div>
              <span className="section-label">
                OUR SPECIALITIES
              </span>

              <h2>
                Treatment for Every
                <span> Healthcare Need</span>
              </h2>
            </div>

            <p>
              Explore our major treatment categories and
              choose the care that matches your needs.
            </p>

          </div>


          <div className="category-container">

            {treatments.map((item, index) => (

              <div className="category-card" key={index}>

                <div className="card-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <span className="card-tag">
                    {item.tag}
                  </span>

                  <div className="image-number">
                    0{index + 1}
                  </div>

                </div>

                <div className="card-content">

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <button>
                    View Treatment
                    <span>→</span>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= FEATURED ================= */}

        <section className="featured">

          <div className="featured-card">

            <div className="featured-image">

              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85"
                alt="Healthcare"
              />

              <div className="featured-badge">
                <strong>24/7</strong>
                <span>Healthcare Support</span>
              </div>

            </div>


            <div className="featured-content">

              <span className="section-label">
                FEATURED CARE
              </span>

              <h2>
                Complete Healthcare,
                <br />
                <span>Under One Roof.</span>
              </h2>

              <p>
                CareFlow brings consultation, appointments,
                digital tokens and healthcare services together
                in one simple system.
              </p>

              <div className="featured-points">

                <div>
                  <span>✓</span>
                  Experienced Doctors
                </div>

                <div>
                  <span>✓</span>
                  Modern Healthcare Facilities
                </div>

                <div>
                  <span>✓</span>
                  Digital Token Management
                </div>

              </div>

              <button className="primary-btn">
                Book Appointment →
              </button>

            </div>

          </div>

        </section>


        {/* ================= PROCESS ================= */}

        <section className="process">

          <div className="process-heading">

            <span className="section-label">
              SIMPLE PROCESS
            </span>

            <h2>
              Your Treatment Journey
            </h2>

            <p>
              From selecting your treatment to meeting your doctor,
              CareFlow keeps the process simple.
            </p>

          </div>


          <div className="process-container">

            <div className="process-box">

              <div className="process-circle">
                01
              </div>

              <h3>Choose Treatment</h3>

              <p>
                Select the treatment according to your healthcare needs.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-box">

              <div className="process-circle">
                02
              </div>

              <h3>Select Doctor</h3>

              <p>
                Find a suitable doctor or healthcare specialist.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-box">

              <div className="process-circle">
                03
              </div>

              <h3>Book Appointment</h3>

              <p>
                Book an appointment or get your digital token.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-box">

              <div className="process-circle">
                04
              </div>

              <h3>Get Treatment</h3>

              <p>
                Visit the hospital and receive your treatment.
              </p>

            </div>

          </div>

        </section>


        {/* ================= WHY CAREFLOW ================= */}

        <section className="why-careflow">

          <div className="why-left">

            <span className="section-label">
              WHY CAREFLOW?
            </span>

            <h2>
              Healthcare Made
              <span> Simple.</span>
            </h2>

            <p>
              We use technology to make hospital visits more
              organized, convenient and patient-friendly.
            </p>

            <button className="light-btn">
              Learn More →
            </button>

          </div>


          <div className="why-list">

            <div className="why-item">
              <span>01</span>
              <div>
                <h3>Experienced Doctors</h3>
                <p>Connect with qualified healthcare professionals.</p>
              </div>
            </div>

            <div className="why-item">
              <span>02</span>
              <div>
                <h3>Easy Appointment</h3>
                <p>Book appointments without unnecessary waiting.</p>
              </div>
            </div>

            <div className="why-item">
              <span>03</span>
              <div>
                <h3>Digital Token System</h3>
                <p>Track your queue and token status easily.</p>
              </div>
            </div>

            <div className="why-item">
              <span>04</span>
              <div>
                <h3>Better Hospital Visits</h3>
                <p>Save time with organized hospital services.</p>
              </div>
            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="treatment-cta">

          <div>

            <span>NEED MEDICAL ASSISTANCE?</span>

            <h2>
              Start Your Healthcare
              <br />
              Journey Today.
            </h2>

            <p>
              Choose the right treatment, select your doctor
              and book your appointment with CareFlow.
            </p>

          </div>

          <button>
            Book Appointment →
          </button>

        </section>

      </div>

      <Footer />
    </>
  )
}

export default Treatment