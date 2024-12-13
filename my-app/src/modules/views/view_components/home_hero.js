import hero_visual from '../../../img/home_hero-visual@2x.png';

function HomeHero() {
  return (
    <div className="home_hero ctnr_cntr">
    	<div className="home_hero-content">
    		<div className="content_copy">
    			<h1 className="content_copy-main">The gateway to your European dream</h1>
    			<div className="content_copy-secondary">
    				Trusted <b>visa assistance solutions</b> to travel Europe confidently with expert guidance, so you can focus on the <b>fun adventure</b> ahead!
    			</div>
    		</div>
    		<div className="content_ctas">
    			<button className="btn btn_primary btn_yellow btn_lg" type="button">Get started</button>
    			<button className="btn btn_tertiary btn_lg" type="button">Contact us</button>
    		</div>
    	</div>
    	<div className="home_hero-visual">
    		<img src={hero_visual} alt="Something" />
    	</div>
    </div>
  );
}

export default HomeHero;