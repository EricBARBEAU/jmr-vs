// Components
import ServicesHero from './services_hero';
import ServicesQuotation from './quotation_form'

// Data
import data from "./data/letter_services-data.json";

function ServicesLetter() {
  return (
    <div className="services_view services_view-letter">
      <ServicesHero />
      <div className="letter_services ctnr_cntr">
        {data.map((item) => (
          <div className={item.class}>
            <h3>{item.title}</h3>
            <div className="services_blk-content">
              <p>{item.body_1}</p>
              <p>{item.body_2}</p>
            </div>
          </div>
         ))}
      </div>
      <ServicesQuotation />
    </div>
  )
}

export default ServicesLetter;
