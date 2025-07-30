// Assets
const not_found = '/img/404.svg';

function FourZeroFour({location}) {
  return (
    <div className="view view_404">
      <div className="f0f_content ctnr_cntr">
      	<img src={not_found} alt="404 Not Found" className="visual" />
      	<div className="content_text">
	      	<h1>404 - Page Not Found</h1>
		    <p>No match for <code>jmrvisas.com{location.pathname}</code></p>
	    </div>
      </div>
    </div>
  )
}

export default FourZeroFour;
