import { Link } from "react-router-dom";

function MobileNav({ isSidebarOpen, toggleSidebar }) {
  return (
  	<div className={`navbar_mobile ${isSidebarOpen ? "active" : ""}`}>
  		<div className="navbar_wrapper">
  			<button onClick={toggleSidebar} className="btn_close">
          &times; {/* Close icon */}
        </button>
	  		<ul className="mobile_nav-container">
					<li className="mobile_nav-link" >
						<Link to="/services/visa-service-packages" alt="Services" onClick={toggleSidebar}>Services</Link>
					</li>
					<li className="mobile_nav-link" >
						<Link to="/our-process" alt="Process" onClick={toggleSidebar}>Our process</Link>
					</li>
					<li className="mobile_nav-link" >
						<Link to="/testimonials" alt="Testimonials" onClick={toggleSidebar}>Testimonials</Link>
					</li>
					<li className="mobile_nav-link" >
						<Link to="/about-us" alt="About us" onClick={toggleSidebar}>About us</Link>
					</li>
					<li className="mobile_nav-link" >
						<Link to="/videos" alt="Videos" onClick={toggleSidebar}>Videos</Link>
					</li>
					<li className="mobile_nav-link" >
						<Link to="/contact" alt="Contact" onClick={toggleSidebar}>Contact</Link>
					</li>
				</ul>
			</div>
  	</div>
  );
}

export default MobileNav;