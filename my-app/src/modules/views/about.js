// Components
import ContactBlk from '../elements/contact_block';
import AboutHero from './view_components/about_hero';
import AboutContent from './view_components/about_content';

function About() {
  return (
    <div className="view view_about">
      <AboutHero />
      <AboutContent />
      <ContactBlk />
    </div>
  )
}

export default About;
