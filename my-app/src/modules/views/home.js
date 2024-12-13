// Components
import HomeHero from './view_components/home_hero';
import HomeServices from './view_components/home_services';

function Home() {
  return (
    <div className="view view_home">
      <HomeHero />
      <HomeServices />
    </div>
  )
}

export default Home;
