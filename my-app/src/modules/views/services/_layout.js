// Components
import ServicesNav from '../../elements/services_subnav'

import { Outlet } from "react-router-dom";

function Services_Layout() {
  return (
    <div className="view view_services">
      <ServicesNav />
      <Outlet />
    </div>
  )
}

export default Services_Layout;