// Components
import HomeHero from './view_components/home_hero';
import HomeServices from './view_components/home_services';
import HomeTestimonials from './view_components/home_testimonials';

function Home() {
  return (
    <div className="view view_home">
      <HomeHero />
      <HomeServices />
      <HomeTestimonials />
    </div>
  )
}

export default Home;
