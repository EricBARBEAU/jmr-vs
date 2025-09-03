
function LegalNotice() {
  return (
    <div className="view view_legal">
      {/*Hero*/}
    	<div className="hero legal_hero ctnr_cntr">
    		<div className="hero_content legal_hero-content">
    			<div className="content_copy">
    				<h1 className="content_copy-main">Legal notice</h1>
	    			<div className="content_copy-secondary">
	    				<div className="last_update">
	    					<span>LAST UPDATED</span>
	    					2 September 2025
	    				</div>
	    				<p>Find below all the legal information about <b>JMR Visa Services</b> - a company registered under inpi.fr</p>
	    			</div>
    			</div>
    		</div>
    	</div>
    	{/*Content*/}
    	<div className="legal_content ctnr_cntr">
    		<div className="content_list">
    			<div className="legal_blk">
    				<h3 className="title">Business identity</h3>
    				<ul className="body">
    					<li><b>Company name:</b> JMR Visa Services</li>
    					<li><b>Company owner name:</b> Jillian M. Rebollos</li>
    					<li><b>Registration number (SIRET):</b> 99066013600013</li>
    				</ul>
    			</div>
    			<div className="legal_blk">
    				<h3 className="title">Contact details</h3>
    				<ul className="body">
    					<li><b>Email address:</b> jmrfvs@gmail.com</li>
    				</ul>
    			</div>
    			<div className="legal_blk">
    				<h3 className="title">Website hosting provider</h3>
    				<ul className="body">
    					<li><b>Name:</b> Canva</li>
    					<li><b>Address:</b> Canva Pty Ltd 110 Kippax St Surry Hills 2010 AU</li>
    				</ul>
    			</div>
    			<div className="legal_blk">
    				<h3 className="title">VAT status</h3>
    				<ul className="body">
    					<li><b>VAT not applicable:</b> Article 293B of the French CGI</li>
    				</ul>
    			</div>
    		</div>
    	</div>
    </div>
  )
}

export default LegalNotice;