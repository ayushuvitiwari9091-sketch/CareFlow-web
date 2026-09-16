import React from 'react'
import './CSS/Footer.css'

const Footer = () => {
  return (
    <>
     <footer className="footer">

      <div className="footer-wave"></div>

      <div className="footer-container">

        {/* CareFlow */}
        <div className="footer-box brand">
          <h2>♡ <span>Care</span>Flow</h2>

          <h4>Smart Healthcare. Better Tomorrow.</h4>

          <p>
            CareFlow is a modern healthcare platform that makes
            hospital visits easier, faster and more convenient
            for everyone.
          </p>

          <div className="social">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">◎</a>
            <a href="#">𝕏</a>
            <a href="#">▶</a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="/">› Home</a>
          <a href="/about">› About Us</a>
          <a href="/services">› Services</a>
          <a href="/treatments">› Treatments</a>
          <a href="/departments">› Departments</a>
          <a href="/contact">› Contact</a>
        </div>


        {/* Healthcare Services */}
        <div className="footer-box">
          <h3>Healthcare Services</h3>

          <a href="#">♧ OPD Consultation</a>
          <a href="#">♧ Emergency</a>
          <a href="#">♧ Diagnostics</a>
          <a href="#">♧ Pharmacy</a>
          <a href="#">♧ Specialist Doctors</a>
          <a href="#">♧ Treatment Follow-up</a>
        </div>


        {/* Contact Us */}
        <div className="footer-box contact con-footer">
          <h3>Contact Us</h3>

          <p>📍 Rajgarh, Mirzapur</p>
          <small>Uttar Pradesh, India</small>

          <p>📞 +91 98765 43210</p>

          <p>✉️ support@careflow.com</p>

          <p>◷ Available 24/7</p>
        </div>


        {/* Map */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps?q=DigiCoder,Lucknow,Uttar%20Pradesh&output=embed"
            title="CareFlow Location"
            loading="lazy"
          ></iframe>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>© 2026 CareFlow. All Rights Reserved.</p>

        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }
        >
          ↑
        </button>

      </div>

    </footer>
    </>
  )
}

export default Footer