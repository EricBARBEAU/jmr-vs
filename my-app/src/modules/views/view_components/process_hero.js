import hero_visual from '../../../img/process_hero-visual.svg';
import { Link } from "react-router-dom";

function ProcessHero() {
  return (
    <div className="hero process_hero ctnr_cntr">
    	<div className="hero_content process_hero-content">
    		<div className="content_copy">
    			<h1 className="content_copy-main">Understand our process in 7 steps</h1>
    			<div className="content_copy-secondary">
    				Before getting started, take a moment to <b>follow our guide</b> and  
    				<b> understand what it’s like to collaborate with us</b> on your <b>visa 
    				application process</b>.
    			</div>
    		</div>
    		<div className="content_ctas">
          <Link to="/services/visa-service-packages" className="btn btn_primary btn_yellow btn_lg" type="button" alt="Services">Our services</Link>
          <Link to="/contact" className="btn btn_tertiary btn_lg" type="button" alt ="Contact">Contact us</Link>
    		</div>
    	</div>
    	<div className="hero_visual process_hero-visual">
    		<img src={hero_visual} alt="Hero visual" />
    	</div>
    </div>
  );
}

export default ProcessHero;