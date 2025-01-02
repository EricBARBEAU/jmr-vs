// Components
import ServicesHero from './services_hero';
import ServicesQuotation from './quotation_form'

function ServicesCalls() {
  return (
    <div className="services_view services_view-calls">
      <ServicesHero />
      <ServicesQuotation />
    </div>
  )
}

export default ServicesCalls;
