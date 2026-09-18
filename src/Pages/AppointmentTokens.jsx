import React, { useState } from "react";
import "./CSS/AppointmentTokens.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer.jsx";

const AppointmentTokens = () => {
  const [ganrated, setganrated] = useState(false)

  const handlegenratetocken = () => {
    setganrated(true)
  }

  const [formData, setformData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    department: "",
    doctor: "",
    reason: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    const response = await fetch("http://localhost:5000/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    console.log(data);
  }
  return (
    <>
      <Header />

      <div className="token-page">

        <section className="token-heading">
          <span>CAREFLOW HOSPITAL</span>
          <h1>Get Your Token</h1>
          <p>
            Enter your details and generate your hospital token easily.
          </p>
        </section>

        {!ganrated && (
          <section className="token-form-section">
            <div className="token-form-card">

              <div className="form-title">
                <h2>Patient Details</h2>
                <p>Please fill in your details to get a token.</p>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="form-group full">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" value={formData.name} onChange={(e) => { setformData({ ...formData, name: e.target.value, }) }} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      placeholder="Enter age" value={formData.age} onChange={(e) => { setformData({ ...formData, age: e.target.value }) }} />
                  </div>

                  <div className="form-group">
                    <label>Gender</label>
                    <select value={formData.gender} onChange={(e) => { setformData({ ...formData, gender: e.target.value }) }}>
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group full">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    value={formData.phone} onChange={(e) => { setformData({ ...formData, phone: e.target.value }); }} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Department</label>
                    <select value={formData.department} onChange={(e) => { setformData({ ...formData, department: e.target.value }); }} >
                      <option>Select Department</option>
                      <option>General Medicine</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedic</option>
                      <option>Dental</option>
                      <option>Eye Care</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Doctor</label>
                    <select value={formData.doctor} onChange={(e) => { setformData({ ...formData, doctor: e.target.value }); }}>
                      <option>Select Doctor</option>
                      <option>Dr. Sharma</option>
                      <option>Dr. Verma</option>
                      <option>Dr. Singh</option>
                      <option>Dr. Kumar</option>
                    </select>
                  </div>

                </div>

                <div className="form-group full">
                  <label>Reason for Visit</label>
                  <textarea
                    placeholder="Enter your problem or reason for visit"
                    rows="4" value={formData.reason} onChange={(e) => { setformData({ ...formData, reason: e.target.value }); }}
                  ></textarea>
                </div>

                <button type="submit" className="generate-btn" onClick={handlegenratetocken}>
                  Generate Token →
                </button>

              </form>
            </div>
          </section>

        )}




        {ganrated && (

          <section className="generated-section">
            <div className="generated-card">

              <div className="success-icon">✓</div>

              <span className="generated-label">
                TOKEN GENERATED
              </span>

              <h2>Your Token</h2>

              <div className="token-number">
                A04
              </div>

              <p className="token-message">
                Your token has been successfully generated.
              </p>

              <div className="patient-info">
                <div>
                  <span>Patient</span>
                  <strong>{formData.name}</strong>
                </div>

                <div>
                  <span>Department</span>
                  <strong>{formData.department}</strong>
                </div>

                <div>
                  <span>Doctor</span>
                  <strong>{formData.doctor}</strong>
                </div>
              </div>

              <div className="queue-info">

                <div className="queue-box">
                  <span>Current Token</span>
                  <strong>A03</strong>
                </div>

                <div className="queue-box">
                  <span>Patients Ahead</span>
                  <strong>01</strong>
                </div>

                <div className="queue-box">
                  <span>Estimated Wait</span>
                  <strong>5 min</strong>
                </div>

              </div>

              <button className="queue-btn">
                Download Tocken →
              </button>

            </div>
          </section>

        )}
      </div>
      <Footer />
    </>
  );
};

export default AppointmentTokens;