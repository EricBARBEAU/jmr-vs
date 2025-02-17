import jmr_logo from '../../img/jmr-logo_ondark.svg';
import facebook from '../../img/logo_footer-facebook.svg';
import instagram from '../../img/logo_footer-instagram.svg';
import youtube from '../../img/logo_footer-youtube.svg';
import tiktok from '../../img/logo_footer-tiktok.svg';

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer ctnr_cntr">
      <div className="footer_blk footer_blk-01">
        <img src={jmr_logo} className="logo_jmr-img" alt="JMR Visas Services logo" />
        <div className="social_links">
          <a href="https://www.facebook.com/jmrvisaservices" className="social_link social_link-fb" alt="Facebook">
            <img src={facebook} className="" alt="Facebook logo" />
          </a>
          <a href="https://www.instagram.com/jmr.vs/" className="social_link social_link-ig" alt="Instagram">
            <img src={instagram} className="" alt="Instagram logo" />
          </a>
          <a href="https://www.youtube.com/@JMRvisas" className="social_link social_link-yt" alt="Youtube">
            <img src={youtube} className="" alt="Youtube logo" />
          </a>
          <a href="https://www.tiktok.com/@jmrvisaservices" className="social_link social_link-tt" alt="Tik Tok">
            <img src={tiktok} className="" alt="TikTok logo" />
          </a>
        </div>
        <div className="footer_email">
          jmrfvs@gmail.com
        </div>
      </div>
      <div className="footer_blk footer_blk-02">
        <h4 className="footer_blk-title">Services</h4>
        <div className="footer_blk-content">
          <Link to="/services/visa-service-packages" alt ="Service packages">Visa service packages</Link>
          <Link to="/services/consultation-calls" alt ="Consultation calls">Consultation calls</Link>
          <Link to="/services/letter-services" alt ="Letter services">Letter services</Link>
          <Link to="/services/reservations" alt ="Flight/Hotel reservation">Flight/Hotel reservation</Link>
          <Link to="/services/appointment-scheduling" alt ="Appointment scheduling">Appointment scheduling</Link>
        </div>
      </div>
      <div className="footer_blk footer_blk-03">
        <Link className="footer_blk-title" to="/our-process" alt ="Visa types">Our process</Link>
        <Link className="footer_blk-title" to="/testimonials" alt ="Visa types">Testimonials</Link>
        <Link className="footer_blk-title" to="/about-us" alt ="Visa types">About us</Link>
        <Link className="footer_blk-title" to="/contact" alt ="Visa types">Contact</Link>
      </div>
      <div className="footer_blk footer_blk-04">
        <h4 className="footer_blk-title">Legal informations</h4>
        <div className="footer_blk-content">
          <div>
            Business name registered under the Department of Trade and 
            Industry of the Philippines.
          </div>
          <div>
            Registration number: <b>6482135</b>
          </div>
        </div>
        <div className="footer_legal">
          2025 · All Rights Reserved. 
        </div>
      </div>
      <div className="footer-bg"></div>
    </footer>
  );
}

export default Footer;