import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ServicesNav() {

	// Create a ref for the <ul> element
  const subnavMenuRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  // Check if the navigation is scrollable
  useEffect(() => {
    const menu = subnavMenuRef.current;
    if (menu) {
      const handleScroll = () => {
        const isAtEnd = menu.scrollLeft + menu.clientWidth >= menu.scrollWidth;
        setIsScrollable(!isAtEnd);
      };

      menu.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check

      return () => {
        menu.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Function to handle the "See more" button click
  const handleSeeMoreClick = () => {
    if (subnavMenuRef.current) {
      subnavMenuRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div className="services_subnav ctnr_cntr">
    	<div className="subnav_root">
    		Services
    	</div>
			<ul className="subnav_menu" ref={subnavMenuRef}>
				<li className="subnav_menu-item subnav_menu-item--packages" >
					<NavLink 	to="/services/visa-service-packages" 
										alt="Visa service packages">
										Visa service packages
					</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--calls" >
					<NavLink 	to="/services/consultation-calls" 
										alt="Consultation calls">
										Consultation calls
					</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--letter" >
					<NavLink 	to="/services/letter-services" 
										alt="Letter services">
										Letter services
					</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--reservations" >
					<NavLink 	to="/services/reservations" 
										alt="Flight/Hotel reservations">
										Flight/Hotel reservations
					</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--appointment" >
					<NavLink 	to="/services/appointment-scheduling" 
										alt="Appointment scheduling">
										Appointment scheduling
					</NavLink>
				</li>
			</ul>
			{isScrollable && (
				<button className="btn_seemore" onClick={handleSeeMoreClick} >See more</button>
			)}
    </div>
  );
}

export default ServicesNav;