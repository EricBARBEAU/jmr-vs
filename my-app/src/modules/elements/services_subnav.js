import { NavLink } from "react-router-dom";

function ServicesNav() {

  return (
    <div className="services_subnav ctnr_cntr">
    	<div className="subnav_root">
    		Services
    	</div>
			<ul className="subnav_menu">
				<li className="subnav_menu-item subnav_menu-item--packages" >
					<NavLink to="/services/visa-service-packages" alt="Visa service packages">Visa service packages</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--calls" >
					<NavLink to="/services/consultation-calls" alt="Consultation calls">Consultation calls</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--letter" >
					<NavLink to="/services/letter-services" alt="Letter services">Letter services</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--reservations" >
					<NavLink to="/services/reservations" alt="Flight/Hotel reservations">Flight/Hotel reservations</NavLink>
				</li>
				<li className="subnav_menu-item subnav_menu-item--appointment" >
					<NavLink to="/services/appointment-scheduling" alt="Appointment scheduling">Appointment scheduling</NavLink>
				</li>
			</ul>
    </div>
  );
}

export default ServicesNav;