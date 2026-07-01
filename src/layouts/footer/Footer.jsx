import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <h2>Mars IT</h2>
          <p>
            Learn programming, build projects and become a professional
            developer with Mars IT.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/students">Students</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+998 90 123 45 67</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@marsit.uz</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Tashkent, Uzbekistan</span>
          </div>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Mars IT. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;