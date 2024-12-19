import { Link } from "react-router-dom";

function ServicesNav() {

  return (
    <div className="services_subnav ctnr_cntr">
    	<div className="subnav_root">
    		Services
    	</div>
			<ul className="subnav_menu">
				<li className="subnav_menu-item subnav_menu-item--packages" >
					<Link to="/services/visa-service-packages" alt="Visa service packages">Visa service packages</Link>
				</li>
				<li className="subnav_menu-item subnav_menu-item--calls" >
					<Link to="/services/consultation-calls" alt="Consultation calls">Consultation calls</Link>
				</li>
				<li className="subnav_menu-item subnav_menu-item--letter" >
					<Link to="/services/letter-services" alt="Letter services">Letter services</Link>
				</li>
			</ul>
    </div>
  );
}

export default ServicesNav;