// Components
import ServicesHero from './services_hero';
import ServicesQuotation from './quotation_form'

function ServicesAppointment() {
  return (
    <div className="services_view services_view-appointment">
      <ServicesHero />
      <ServicesQuotation />
    </div>
  )
}

export default ServicesAppointment;
