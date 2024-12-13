import jmr_logo from '../../img/jmr-logo_onwhite@2x.png';

function Nav() {
  return (
    <nav className="navbar ctnr_cntr">
		<a href="/" className="logo logo_jmr" alt="Home">
			<img src={jmr_logo} className="logo_jmr-img" alt="JMR Visas Services logo" />
		</a>
		<ul className="navbar_menu">
			<li className="navbar_menu-item navbar_menu-item--services" ><a href="/services"  target="blank">Services</a></li>
			<li className="navbar_menu-item navbar_menu-item--process" ><a href="/our-process"  target="blank">Our process</a></li>
			<li className="navbar_menu-item navbar_menu-item--testimonials" ><a href="/testimonials"  target="blank">Testimonials</a></li>
			<li className="navbar_menu-item navbar_menu-item--about" ><a href="/about-us"  target="blank">About us</a></li>
			<li className="navbar_menu-item navbar_menu-item--contact" ><a href="/contact"  target="blank">Contact</a></li>
		</ul>
    </nav>
  );
}

export default Nav;