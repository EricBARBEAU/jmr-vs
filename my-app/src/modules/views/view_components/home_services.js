import services_visual_01 from '../../../img/home_services-packages@2x.png';
import services_visual_02 from '../../../img/home_services-calls@2x.png';
import services_visual_03 from '../../../img/home_services-letters@2x.png';

import { Link } from "react-router-dom";

function HomeServices() {
  return (
    <div className="content_blk home_services ctnr_cntr">
    	<div className="intro home_intro">
        <h2 className="intro_title">Our Schengen visa services</h2>
        <div className="intro_subtitle">
          From our comprehensive solution that supports you through 
          the entire visa application process to our one-time letter 
          service, <b>we are dedicated to ensuring client satisfaction 
          and go the extra mile to make your European trip seamless 
          and stress-free</b>.
        </div>
      </div>
      <div className="home_services-grid">
        <div className="grid_blk grid_blk-01">
          <div className="grid_blk-visual">
            <img src={services_visual_01} alt="Visa service packages" />
          </div>
          <div className="grid_blk-content">
            <h3 className="content_title">Visa service packages</h3>
            <div className="content_copy">
              Navigating the complexities of visa applications can be 
              overwhelming, but our <b>visa service packages</b> are here to 
              take the stress off your shoulders. We handle all the 
              paperwork while you <b>focus on planning your journey</b>.
            </div>
            <div className="content_ctas">
              <Link to="/services/visa-service-packages" className="btn btn_secondary btn_lg btn_red" alt="Service packages">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="grid_blk grid_blk-02">
          <div className="grid_blk-visual">
            <img src={services_visual_02} alt="Consultation calls" />
          </div>
          <div className="grid_blk-content">
            <h3 className="content_title">Consultation calls</h3>
            <div className="content_copy">
              We offer <b>expert consultation calls</b> designed to maximise your 
              chances of a <b>successful visa application</b>. With <b>personalised 
              guidance and strategic advice</b>, we help you navigate the process 
              with confidence and clarity.
            </div>
            <div className="content_ctas">
              <Link to="/services/consultation-calls" className="btn btn_secondary btn_lg btn_yellow" alt="Consultation calls">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="grid_blk grid_blk-03">
          <div className="grid_blk-visual">
            <img src={services_visual_03} alt="Letter services" />
          </div>
          <div className="grid_blk-content">
            <h3 className="content_title">Letter services</h3>
            <div className="content_copy">
              We specialise in assisting clients with the <b>writing and meticulous 
              review of their documents including cover letters</b>, ensuring every 
              detail aligns with the destination country requirements for a 
              <b>successful application</b>.
            </div>
            <div className="content_ctas">
              <Link to="/services/letter-services" className="btn btn_secondary btn_lg btn_blue" alt="Letter services">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;