import { Link } from "react-router-dom";
import Nav from './navbar';

function MobileNav() {
  return (
  	<div className="navbar_mobile">
  		<div className="navbar_wrapper">
	  		<ul className="">
					<li className="" >
						<Link to="/services" alt="Services">Services</Link>
					</li>
					<li className="" >
						<Link to="/our-process" alt="Process">Our process</Link>
					</li>
					<li className="" >
						<Link to="/testimonials" alt="Testimonials">Testimonials</Link>
					</li>
					<li className="" >
						<Link to="/about-us" alt="About us">About us</Link>
					</li>
					<li className="" >
						<Link to="/contact" alt="Contact">Contact</Link>
					</li>
				</ul>
			</div>
  	</div>
  );
}

export default MobileNav;