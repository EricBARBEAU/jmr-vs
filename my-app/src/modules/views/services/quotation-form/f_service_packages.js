
function FormServicePackages() {
  return (
    <div className="form-input subservice-packages">
	    <span className="input-label">Visa service package *</span>
	    {/*Radio list*/}
	    <div className="input-radio">

	      {/*Item: Tourist visa*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="radio" id="tourist-visa" name="visa-radio" value="Tourist visa" />
	        <div className="radio-label">
	          <label className="label-main" for="tourist-visa">Tourist visa</label>
	          <span className="label-secondary">Self-funded</span>
	        </div>
	      </div>

	      {/*Item: Visit visa*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="radio" id="visit-visa" name="visa-radio" value="Visit visa" />
	        <div className="radio-label">
	          <label className="label-main" for="visit-visa">Visit visa</label>
	          <span className="label-secondary">Sponsored</span>
	        </div>
	      </div>

	    </div>
	</div>
  )
}

export default FormServicePackages;
