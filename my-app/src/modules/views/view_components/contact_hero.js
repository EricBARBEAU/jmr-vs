import hero_visual from '../../../img/contact_hero-visual@2x.png';

function ContactHero() {
  return (
    <div className="hero contact_hero ctnr_cntr">
    	<div className="hero_content contact_hero-content">
    		<div className="content_copy">
    			<h1 className="content_copy-main">Send us a message</h1>
    			<div className="content_copy-secondary">
    				We believe that <b>each request is unique and deserve 
    				to be addressed</b>. We will make sure to <b>answer your 
    				request as best as possible</b>.
    			</div>
    		</div>
    		<div className="content_ctas">
    			<a className="btn btn_primary btn_yellow btn_lg" type="button" href="/services" >See our services</a>
    		</div>
    	</div>
    	<div className="hero_visual contact_hero-visual">
    		<img src={hero_visual} alt="Hero visual" />
    	</div>
    </div>
  );
}

export default ContactHero;