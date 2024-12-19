// Components
import ServicesNav from '../../elements/services_subnav'
import ContactBlk from '../../elements/contact_block';

import { Outlet } from "react-router-dom";

function Services_Layout() {
  return (
    <div className="view view_services">
      <ServicesNav />
      <Outlet />
      <ContactBlk />
    </div>
  )
}

export default Services_Layout;