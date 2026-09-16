import './CSS/Home.css'
import Header from '../Components/Header'
import React, { useState } from "react";
import doctorimg from '../images/doctorimg.svg'
import Homeimg from '../images/Home-img.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Homeimg2 from '../images/Home-img-2.png'
import Nabh from '../images/nabh.jpg'
import Nabl from '../images/NABL_2025_c2c349983e.png'
import Aboutimg1 from '../images/homeaboutimg-1.png'
import Aboutimg2 from '../images/homeaboutimg-2.png'
import Aboutimg3 from '../images/homeaboutimg-3.png'
import Aboutimg4 from '../images/homeaboutimg-4.png'
import Dctb from '../images/doctor-b.png'
import DoctorCard from '../Components/DoctorCard';
import Doctor1 from '../images/doctor-1.jpg'
import Doctor2 from '../images/doctor-2.jpg'
import Doctor3 from '../images/doctor-3.jpg'
import Doctor4 from '../images/doctor-4.jpg'
import Doctor5 from '../images/doctor-5.jpg'
import Doctor6 from '../images/doctor-6.jpg'
import Doctor7 from '../images/doctor-7.jpg'
import Doctor8 from '../images/doctor-8.jpg'
import tecimg from '../images/technology.jpg'
import updateimg from '../images/updateimg.png'
import maxupdate1 from '../images/max-update-1.png'
import maxupdate2 from '../images/max-update-2.png'
import ElectrolyteCard from '../Components/ElectrolyteCard';
import Footer from '../Components/Footer.jsx'
import Electroimg1 from '../images/Ele1.jpg'
import Electroimg2 from '../images/ele2.jpg'
import Electroimg3 from '../images/ele3.jpeg'
import Whatsapp  from '../images/whatsaap.png';
const Home = () => {

  const DoctorData = [
    {
      name: "Dr. Mazhar Husain",
      image: Doctor1,
      branch: "Neurosurgery, Spine Surgery"
    },
    {
      name: "Dr. Sushil Gupta",
      image: Doctor2,
      branch: "Endocrinology & Diabetes"
    },
    {
      name: "Dr. Vijayant Devendraj",
      image: Doctor3,
      branch: "Cardiac Surgery (CVTS), "
    },
    {
      name: "Prof (Col.) Narinder",
      image: Doctor4,
      branch: "Orthopaedics & Joint "
    },
    {
      name: "Dr. Rajesh Kumar",
      image: Doctor5,
      branch: "General Surgery & Laparoscopic"
    },
    {
      name: "Dr. Anil Sharma",
      image: Doctor6,
      branch: "Cardiology & Heart Care"
    },
    {
      name: "Dr. Amit Verma",
      image: Doctor7,
      branch: "Internal Medicine & Diabetes"
    },
    {
      name: "Dr. Neha Singh",
      image: Doctor8,
      branch: "Obstetrics & Gynaecology"
    }
  ];

  const ElectroData = [
    {
      heading: "Vaginal Itching Explained: Causes, Home Remedies & When to See a Doctor",
      image: Electroimg1,
      Text: "When we think about Alzheimer’s disease, we often focus on ",
    },
    {
      heading: "Understanding Electrolyte Imbalance: Types, Symptoms, Causes, and Treatment Pathways",
      image: Electroimg2,
      Text: " Electrolytes are essential minerals that keep the body function",
    },
    {
      heading: "Blood Pressure and Cholesterol: Impact on Alzheimer’s Risk",
      image: Electroimg3,
      Text: "When we think about Alzheimer’s disease, we often focus on ",
    },
  ];

  const specialities = ["GI Sciences", "Renal Sciences", "Neuroscience", "Orthopaedics and Joint Replacement", "Cardiac Sciences", "Liver Transplant and Biliary Sciences", "Cancer Care / Oncology", "Obstetrics and Gynaecology", "Internal Medicine",];
  return (
    <>
      <Header />

      <a href="https://wa.me/9304485279?text=Hello%20sir,%20I%20am%20intersted%20in%20your%20service" target="_blank">
        <div class="floating-btn">
          <span>WHATSAAP</span>
        </div>
      </a>

      <div className="home-img-main">
        <img src={Homeimg} alt="img" />
      </div>

      <div className="home-img-2">
        <img src={Homeimg2} alt="" />
      </div>

      <div className="home-about-outer">

        <div className='home-about-main'>
          <div className="home-about-left">
            <p>CareFlow Super Speciality Hospital, Lucknow (a unit of Starlit Medical Centre Pvt Ltd), is a multidisciplinary 426 bedded tertiary care hospital provides comprehensive medical care across all the medical specialties. Our compassionate care blended with the advanced technology helps our clinicians to deliver superior clinical outcomes in all the disciplines of medical specialities.Experts at Max Super Speciality Hospital, Lucknow, have treated more than 6 lakh patients across 39 specialities, including Cardiac sciences, Onco Sciences (Medical, Surgical and Radiation), Neurosciences, Obstetrics and Gynaecology, Urology, Nephrology, Kidney Transplant, Aesthetic and Reconstructive Surgery and other ancillary services.Max Super Speciality Hospital, Lucknow has a complete spectrum of diagnostic and t...</p>

            <button>Read more <MdOutlineKeyboardArrowRight /></button>
          </div>


          <div className="home-about-right">

            <div className="home-about-right-img">
              <img src={Nabh} alt="" />
              <p>Our Nabh accredited hospitals offer best in class services to our paceints</p>
            </div>
            <div className="home-about-right-img">
              <img src={Nabl} alt="" />
              <p>NABL accredited Labs</p>
            </div>

          </div>
        </div>

        <div className="home-about-bottom">
          <img src={Aboutimg1} alt="" />
          <img src={Aboutimg2} alt="" />
          <img src={Aboutimg3} alt="" />
          <img src={Aboutimg4} alt="" />

        </div>

      </div>


      <section className="specialities-section">

        <div className="specialities-left">

          <h2>Specialities & Procedures</h2>

          <div className="specialities-tab">
            Specialities
          </div>

          <div className="specialities-list">
            {specialities.map((item, index) => (
              <div className="speciality-item" key={index}>

                <div className="speciality-icon">
                  +
                </div>

                <p>{item}</p>

              </div>
            ))}
          </div>
        </div>
        <div className="specialities-right">
          <div className="image-placeholder">
            <img src={doctorimg} alt="" />
          </div>
        </div>
      </section>

      {/* doctors */}
      <section className='medical-experts-outer'>

        <div className="medical-corner-div">
          <div className="medical-corner-top-div">
            <div className="medical-corner-top-left">
              <h2>Our Medical Experts</h2>
              <p>Max Healthcare is home to eminent doctors in the world, most of whom are pioneers in their respective fields. Additionally, they are renowned for developing innovative and revolutionary clinical procedures.</p>

              <div className="doctor-button">
                <span>Find a Doctor</span>
                <div><MdOutlineKeyboardArrowRight /></div>
              </div>

            </div>

            <div className="medical-corner-top-right">

            </div>
          </div>


          <div className="medical-corner-bottom-div">
            <div className="medical-corner-bottom-left">
              <img src={Dctb} alt="" />
            </div>

            <div className="medical-corner-bottom-right"></div>
          </div>

        </div>
        <div className="doctores-img-div">
          {
            DoctorData.map((item) => (
              <DoctorCard image={item.image} name={item.name} branch={item.branch} />
            ))
          }
        </div>
      </section>

      <section className='technological-advancements'>
        <h1>Our Technological Advancements</h1>

        <div className="technological-advancements-main">
          <img src={tecimg} alt="" />

          <div className="mri-div">
            <h2>MRI</h2>

            <p>This hefty machine is well known for utilizing shorter scan times and maximizing patiend comfort without compromising on quality. The superb reliability of high-field MRI</p>

            <div className="mri-div-button">
              <button>Learn More</button>
              <div><MdOutlineKeyboardArrowRight /></div>
            </div>

          </div>
          <div className="mri-div">
            <h2>CT SCAN</h2>

            <p>LG Lightspeed 128-slice CT-Scanner xtream FX suite workflow management full Dicom connectvity Auto-sugmentation 70cm gantry opening 65cm variable field of view heigh 2D and 3D resolution</p>

            <div className="mri-div-button">
              <button>Learn More</button>
              <div><MdOutlineKeyboardArrowRight /></div>
            </div>

          </div>
        </div>

      </section>


      {/* Max update */}


      <section className='medical-experts-outer'>

        <div className="medical-corner-div">
          <div className="medical-corner-top-div">
            <div className="medical-corner-top-left">
              <h2>CareFlow Updates</h2>
              <p>Stay updated with the latest initiatives and healthcare updates from across CareFlow Healthcare.</p>

              <div className="doctor-button">
                <span>View All</span>
                <div><MdOutlineKeyboardArrowRight /></div>
              </div>

            </div>

            <div className="medical-corner-top-right">

            </div>
          </div>


          <div className="medical-corner-bottom-div">
            <div className="medical-corner-bottom-left update-img">
              <img src={updateimg} alt="" />
            </div>

            <div className="medical-corner-bottom-right"></div>
          </div>

        </div>
        <div className="doctores-img-div">
          <div className="health-cards">

            {/* Card 1 */}
            <div className="health-card">
              <div className="health-card-image">
                <img
                  src={maxupdate1}
                  alt="Men's Health Clinic"
                />
              </div>

              <div className="health-card-content">
                <h3>
                  Introducing the Men’s Health Clinic at CareFlow Super Speciality
                  Hospital, Lucknow
                </h3>

                <p>
                  CareFlow Super Speciality Hospital, Lucknow, proudly launches its
                  dedicated Men’s Health Clinic
                </p>
              </div>
            </div>


            {/* Card 2 */}
            <div className="health-card">
              <div className="health-card-image">
                <img
                  src={maxupdate2}
                  alt="Men's Health Clinic"
                />
              </div>

              <div className="health-card-content">
                <h3>
                  Introducing the Men’s Health Clinic at CareFlow Super Speciality
                  Hospital, Lucknow
                </h3>

                <p>
                  CareFlow Super Speciality Hospital, Lucknow, proudly launches its
                  dedicated Men’s Health Clinic
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='electro-div'>
        {
          ElectroData.map((item) => (
            <ElectrolyteCard image={item.image} Text={item.Text} Heading={item.heading} />
          ))
        }
      </section>

      <Footer />

    </>
  )
}

export default Home