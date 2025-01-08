import React from 'react';
import jmr_logo from '../../img/jmr-logo_onwhite@2x.png';
import { NavLink } from "react-router-dom";

// function openNav() {
// 	const mobileNav = document.getElementsByClassName("navbar_mobile");
// 	alert(mobileNav);
// }

function Nav() {

	const [status, setStatus] = React.useState(0); 
  // 0: no show // 1: show mobile nav
  const navHandler = (status) => {
    setStatus(status);
    console.log(status);
  };

  return (
    <nav className="navbar ctnr_cntr">
    	<NavLink to="/" className="logo logo_jmr" alt="Home">
    		<img src={jmr_logo} className="logo_jmr-img" alt="JMR Visas Services logo" />
    	</NavLink>
			<ul className="navbar_menu">
				<li className="navbar_menu-item navbar_menu-item--services" >
					<NavLink to="/services/visa-service-packages" alt="Services">Services</NavLink>
				</li>
				<li className="navbar_menu-item navbar_menu-item--process" >
					<NavLink to="/our-process" alt="Process">Our process</NavLink>
				</li>
				<li className="navbar_menu-item navbar_menu-item--testimonials" >
					<NavLink to="/testimonials" alt="Testimonials">Testimonials</NavLink>
				</li>
				<li className="navbar_menu-item navbar_menu-item--about" >
					<NavLink to="/about-us" alt="About us">About us</NavLink>
				</li>
				<li className="navbar_menu-item navbar_menu-item--contact" >
					<NavLink to="/contact" alt="Contact">Contact</NavLink>
				</li>
			</ul>
			<div className="mobile_menu-cta" onClick={(e) => navHandler(1)} >
				<svg viewBox="0 0 100 80" width="20" height="20">
					<rect width="100" height="15"></rect>
					<rect y="35" width="100" height="15"></rect>
					<rect y="70" width="100" height="15"></rect>
				</svg>
			</div>
    </nav>
  );
}

export default Nav;