import hero_visual from '../../../img/home_hero-visual.svg';
import AnimatedHero from './home_hero-visual';
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div className="hero home_hero ctnr_cntr">
    	<div className="hero_content home_hero-content">
    		<div className="content_copy">
    			<h1 className="content_copy-main">The gateway to your European dream</h1>
    			<div className="content_copy-secondary">
    				Trusted <b>visa assistance solutions</b> to travel Europe confidently with expert guidance, so you can focus on the <b>fun adventure</b> ahead!
    			</div>
    		</div>
    		<div className="content_ctas">
          <Link to="/services/visa-service-packages" className="btn btn_primary btn_yellow btn_lg" type="button" alt="Services">Get started</Link>
          <Link to="/contact" className="btn btn_tertiary btn_lg" type="button" alt ="Contact">Contact us</Link>
    		</div>
    	</div>
    	<div className="hero_visual home_hero-visual">
        <AnimatedHero />
    		{/*<img src={hero_visual} alt="Hero visual" />*/}
    	</div>
    </div>
  );
}

export default HomeHero;