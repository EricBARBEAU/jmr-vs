// Components
import ServicesHero from './services_hero';
import ServicesQuotation from './quotation_form'

function ServicesLetter() {
  return (
    <div className="services_view services_view-letter">
      <ServicesHero />
      <ServicesQuotation />
    </div>
  )
}

export default ServicesLetter;
