import React from 'react';
import { useForm } from "react-hook-form";

function FormServicePackages() {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

  	return (
    <div className="form-input subservice-packages">
	    <span className="input-label">Visa service package *</span>
	    {/*Radio list*/}
	    <div className="input-radio">

	      {/*Item: Tourist visa*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="radio" id="tourist-visa" 
	        	name="visa-radio" value="Tourist visa" 
	        	{...register("package_selection", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="tourist-visa">Tourist visa</label>
	          <span className="label-secondary">Self-funded</span>
	        </div>
	      </div>

	      {/*Item: Visit visa*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="radio" id="visit-visa" 
	        	name="visa-radio" value="Visit visa" 
	        	{...register("package_selection", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="visit-visa">Visit visa</label>
	          <span className="label-secondary">Sponsored</span>
	        </div>
	      </div>

	      {/*Item: Marriage/Fiancé visa*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="radio" id="marriage-visa" 
	        	name="visa-radio" value="Marriage/Fiancé visa" 
	        	{...register("package_selection", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="marriage-visa">Marriage/Fiancé visa</label>
	          <span className="label-secondary">Getting married</span>
	        </div>
	      </div>

	      {/*Item: Long Stay visa*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="radio" id="longstay-visa" 
	        	name="visa-radio" value="Long Stay visa" 
	        	{...register("package_selection", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="longstay-visa">Long Stay visa</label>
	          <span className="label-secondary">Settling down</span>
	        </div>
	      </div>

	    </div>
	    {/*Errors*/}
        {errors.package_selection && <span className="input-error">This field is required</span>}
	</div>
  )
}

export default FormServicePackages;
