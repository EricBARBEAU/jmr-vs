// Components
import ServicesHero from './services_hero';
import ServicesQuotation from './quotation_form'

// Data
import data from "./data/reservations-data.json";

function ServicesReservations() {
  return (
    <div className="services_view services_view-reservations">
      <ServicesHero />
      <div className="reservations ctnr_cntr">
        {data.map((item) => (
          <div className={item.class} key={item.title}>
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

export default ServicesReservations;
