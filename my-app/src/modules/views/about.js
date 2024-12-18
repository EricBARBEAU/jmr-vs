// Components
import ContactBlk from '../elements/contact_block';
import AboutHero from './view_components/about_hero';

function About() {
  return (
    <div className="view view_about">
      <AboutHero />
      <h1>About page</h1>
      <ContactBlk />
    </div>
  )
}

export default About;
