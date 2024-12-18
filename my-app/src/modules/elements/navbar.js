import jmr_logo from '../../img/jmr-logo_onwhite@2x.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

function openNav() {
	const mobileNav = document.getElementsByClassName("navbar_mobile");
	alert(mobileNav);
}

function Nav() {

  return (
    <nav className="navbar ctnr_cntr">
    	<Link to="/" className="logo logo_jmr" alt="Home">
    		<img src={jmr_logo} className="logo_jmr-img" alt="JMR Visas Services logo" />
    	</Link>
			<ul className="navbar_menu">
				<li className="navbar_menu-item navbar_menu-item--services" >
					<Link to="/services" alt="Services">Services</Link>
				</li>
				<li className="navbar_menu-item navbar_menu-item--process" >
					<Link to="/our-process" alt="Process">Our process</Link>
				</li>
				<li className="navbar_menu-item navbar_menu-item--testimonials" >
					<Link to="/testimonials" alt="Testimonials">Testimonials</Link>
				</li>
				<li className="navbar_menu-item navbar_menu-item--about" >
					<Link to="/about-us" alt="About us">About us</Link>
				</li>
				<li className="navbar_menu-item navbar_menu-item--contact" >
					<Link to="/contact" alt="Contact">Contact</Link>
				</li>
			</ul>
			<div className="mobile_menu-cta" onClick={openNav} >
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