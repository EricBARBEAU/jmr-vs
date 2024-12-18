import { Link } from "react-router-dom";

function ContactBlk() {
  return (
    <div className="contact_block ctnr_cntr">
    	<div className="contact_block-content">
    		<div className="contact_text">
    			<h2 className="contact_text-title">Get in touch with us</h2>
    			<div className="contact_text-body">
    				Not sure yet? Reach out to us! At JMR Visa Services, 
    				we are committed to delivering solutions that address 
    				each client’s unique needs.
    			</div>
    		</div>
    		<div className="contact_ctas">
          <Link to="/contact" className="btn btn_secondary btn_xlg btn_blue" type="button" alt ="Contact us">Send us a message</Link>
    		</div>
    	</div>
    	<div className="contact_block-bg"></div>
    </div>
  );
}

export default ContactBlk;