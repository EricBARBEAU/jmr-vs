// Components
import ServicesHero from './services_hero';
import ServicesTable from './service_packages_table'
import ServicesQuotation from './quotation_form'

function ServicesPackages() {
  return (
    <div className="services_view services_view-packages">
      <ServicesHero />
      <ServicesTable />
      <ServicesQuotation />
    </div>
  )
}

export default ServicesPackages;
