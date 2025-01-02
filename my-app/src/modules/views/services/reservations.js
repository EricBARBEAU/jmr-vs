// Components
import ServicesHero from './services_hero';
import ServicesQuotation from './quotation_form'

function ServicesReservations() {
  return (
    <div className="services_view services_view-reservations">
      <ServicesHero />
      <ServicesQuotation />
    </div>
  )
}

export default ServicesReservations;
