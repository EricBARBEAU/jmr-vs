// Components
import ServicesHero from './services_hero';
import LetterServices from './letter_services_content'
import ServicesQuotation from './quotation_form'

function ServicesLetter() {
  return (
    <div className="services_view services_view-letter">
      <ServicesHero />
      <LetterServices />
      <ServicesQuotation />
    </div>
  )
}

export default ServicesLetter;
