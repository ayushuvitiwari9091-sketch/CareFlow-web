import React from "react";
import "./CSS/Treatment.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer.jsx";
import { FaPlus } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import Trc1 from '../images/TrCard1.jpeg'
import Trc2 from '../images/Tr2.jpeg'
import Trc3 from '../images/Tr3.jpeg'
import Trc4 from '../images/Tr4.jpeg'
import Trc5 from '../images/Tr5.jpeg'
import Trc6 from '../images/tr6.jpeg'
import { useNavigate } from "react-router-dom";
import Treatmentp from '../images/treatment.jpeg'



const Treatment = () => {
  const navigate = useNavigate();

  const treatments = [
    {
      image: Trc1,
      title: "Cardiac Care",
      text: "Complete care and treatment for heart-related healthcare needs.",
      tag: "HEART CARE"
    },
    {
      image: Trc4,
      title: "Neurology",
      text: "Specialized healthcare and treatment for brain and nervous system.",
      tag: "NEURO CARE"
    },
    {
      image: Trc3,
      title: "Orthopedic Care",
      text: "Professional care for bones, joints and movement-related problems.",
      tag: "BONE & JOINT"
    },
    {
      image: Trc2,
      title: "Eye Care",
      text: "Complete eye care and treatment for better vision and eye health.",
      tag: "EYE CARE"
    },
    {
      image: Trc6,
      title: "Dental Care",
      text: "Dental consultation and treatment for healthy teeth and gums.",
      tag: "DENTAL CARE"
    },
    {
      image: Trc5,
      title: "General Care",
      text: "General consultation and healthcare for common health concerns.",
      tag: "GENERAL CARE"
    }
  ];

  return (
    <>
      <Header />

      <div className="treatment-page">

        {/* Heading */}

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
            <button className="primary-btn" onClick={()=> navigate('/tokens')}>
              Book Appointment →
            </button>

            <button className="outline-btn">
              Explore Treatments
            </button>
          </div>

        </section>


        {/* Quick Info */}

        <section className="quick-info">

          <div className="info-box">
            <div className="info-icon">
              <FaPlus />
            </div>

            <div>
              <strong>Expert Doctors</strong>
              <span>Experienced healthcare professionals</span>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <IoMdTime />
            </div>

            <div>
              <strong>Easy Booking</strong>
              <span>Appointments & digital tokens</span>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <FaHeartbeat />
            </div>

            <div>
              <strong>Patient First</strong>
              <span>Care focused on your comfort</span>
            </div>
          </div>

        </section>

        {/* Categories */}

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


        {/* Featured Treatment */}

        <section className="featured">

          <div className="featured-card">

            <div className="featured-image">

              <img
                src={Treatmentp}
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


              <button className="primary-btn" onClick={()=> navigate('/tokens')}>
                Book Appointment →
              </button>

            </div>

          </div>

        </section>


        {/* Process */}

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


        {/* Why CareFlow */}

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
                <p>
                  Connect with qualified healthcare professionals.
                </p>
              </div>

            </div>


            <div className="why-item">

              <span>02</span>

              <div>
                <h3>Easy Appointment</h3>
                <p>
                  Book appointments without unnecessary waiting.
                </p>
              </div>

            </div>


            <div className="why-item">

              <span>03</span>

              <div>
                <h3>Digital Token System</h3>
                <p>
                  Track your queue and token status easily.
                </p>
              </div>

            </div>


            <div className="why-item">

              <span>04</span>

              <div>
                <h3>Better Hospital Visits</h3>
                <p>
                  Save time with organized hospital services.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}

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

          <button onClick={()=> navigate('/tokens')}>
            Book Appointment →
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default Treatment;