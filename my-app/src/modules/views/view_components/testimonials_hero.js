// Components
import TestimonialsContent from './testimonials_content';

function TestimonialsHero() {

  return (
    <div className="hero testimonials_hero ctnr_cntr">
    	<div className="hero_content testimonials_hero-content">
    		<div className="content_copy">
    			<h1 className="content_copy-main">Customer satisfaction is at our core</h1>
    			<div className="content_copy-secondary">
    				Discover what our clients have to say about JMR Visa Services 
    			</div>
    		</div>
    	</div>
      <TestimonialsContent />
    </div>
  );
}

export default TestimonialsHero;