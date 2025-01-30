// Components
import HomeHero from './view_components/home_hero';
import HomeServices from './view_components/home_services';
import HomeTestimonials from './view_components/home_testimonials';
import HomePaymentMethods from './view_components/home_paymentmethods';
import ContactBlk from '../elements/contact_block';

function Home() {
  return (
    <div className="view view_home">
      <HomeHero />
      <HomeServices />
      <HomeTestimonials />
      <HomePaymentMethods />
      <ContactBlk />
    </div>
  )
}

export default Home;
