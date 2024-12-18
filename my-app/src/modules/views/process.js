// Components
import ProcessHero from './view_components/process_hero';
import ProcessContent from './view_components/process_content'
import ContactBlk from '../elements/contact_block';

function Process() {
  return (
    <div className="view view_process">
      <ProcessHero />
      <ProcessContent />
      <ContactBlk />
    </div>
  )
}

export default Process;
