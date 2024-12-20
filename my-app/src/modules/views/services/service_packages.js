// Components
import ServicesHero from './services_hero';
import ServicesTable from './service_packages_table'

function Services_Packages() {
  return (
    <div className="services_view services_view-packages ctnr_cntr">
      <ServicesHero />
      <ServicesTable />
    </div>
  )
}

export default Services_Packages;
