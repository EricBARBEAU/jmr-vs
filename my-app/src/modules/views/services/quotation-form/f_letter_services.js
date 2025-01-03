import React from 'react';
import { useForm } from "react-hook-form";

function FormLetterServices() {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div className="form-input subservice-letter_services">
	    <span className="input-label">Letter service (Can select more than one) *</span>
	    {/*Radio list*/}
	    <div className="input-radio">

	      {/*Item: Cover letter*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="checkbox" id="cover-letter" 
	        	name="letter-checkbox" value="Cover letter" 
	        	{...register("letter_service", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="cover-letter">Cover letter</label>
	          <span className="label-secondary">Something here</span>
	        </div>
	      </div>

	      {/*Item: Invitation letter*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="checkbox" id="invitation-letter" 
	        	name="letter-checkbox" value="Invitation letter" 
	        	{...register("letter_service", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="invitation-letter">Invitation letter</label>
	          <span className="label-secondary">Something here</span>
	        </div>
	      </div>

	      {/*Item: Sponsorship letter*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="checkbox" id="sponsorship-letter" 
	        	name="letter-checkbox" value="Sponsorship letter" 
	        	{...register("letter_service", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="sponsorship-letter">Sponsorship letter</label>
	          <span className="label-secondary">Something here</span>
	        </div>
	      </div>

	      {/*Item: Day-to-day itinerary*/}
	      <div className="radio-item">
	        <input className="radio-cta" type="checkbox" id="itinerary" 
	        	name="letter-checkbox" value="Day-to-day itinerary" 
	        	{...register("letter_service", { required: true })} />
	        <div className="radio-label">
	          <label className="label-main" for="itinerary">Day-to-day itinerary</label>
	          <span className="label-secondary">Something here</span>
	        </div>
	      </div>

	    </div>
	    {/*Errors*/}
        {errors.letter_service && <span className="input-error">This field is required</span>}
	</div>
  )
}

export default FormLetterServices;
