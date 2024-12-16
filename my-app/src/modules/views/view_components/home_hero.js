import hero_visual from '../../../img/home_hero-visual@2x.png';

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
    			<a className="btn btn_primary btn_yellow btn_lg" type="button" href="/services" >Get started</a>
    			<a className="btn btn_tertiary btn_lg" type="button" href="/contact" >Contact us</a>
    		</div>
    	</div>
    	<div className="hero_visual home_hero-visual">
    		<img src={hero_visual} alt="Something" />
    	</div>
    </div>
  );
}

export default HomeHero;