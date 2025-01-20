// Components
import React from 'react';
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function ServicesQuotation() {

  const { register, 
        handleSubmit, 
        reset, 
        formState: { errors, isSubmitting, isSubmitSuccessful } 
        } = useForm();

  const [SubmitMessage, clientName] = React.useState('');

  const sendEmail = async data => {

    const emailData = {
      user_name: data.name,
      user_email: data.email,
      service_selected: data.service_selection,
      service_package: data.package_selection,
      letter_service: data.letter_service,
      flight_hotel: data.flight_hotel,
      message: data.message
    };

    await new Promise(resolve => setTimeout(resolve, 2000));
    clientName(`${data.name}`);
    emailjs
      .send("service_kl5d86n", "template_q09msrq", emailData, "2AlAPb8LU6099B9e6")
      .then(
        (result) => {
          console.log(result.text);
          // console.log(data);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  const [status, setStatus] = React.useState(0); 
  // 0: no show // 1: service packages // 2: consultation calls // 3: letter services // 4: flight/hotel reservation // 5: show appointment scheduling // 6: show general information
  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <div className="form_view services_quotation ctnr_cntr">
      <div className="form_view-title services_quotation-title">
        <h2 className="quotation-title">Interested? Get a quote!</h2>
        <div className="quotation-intro">
          Give us some details about your project and 
          we will send you a quote <b>within a few business hours</b>.
        </div>
      </div>
      <div className="form_view-form services_quotation-form">

        {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/}
        <form onSubmit={handleSubmit(sendEmail)} className="form quotation-form" >

          {/*Success*/}
          {isSubmitSuccessful && 
            <span className="form-success">
            Thank you <b>{SubmitMessage}</b> for your request. We will get back to you within 2 working days.
            </span>
          }

          {/*Full name input - Mandatory*/}
          <div className="form-input form-input_name">
            <span className="input-label">Full name *</span>
            <input name="name"
              className="input-body" 
              {...register("name", 
              { required: true, pattern: /^[a-zA-Z\s]+$/i })} />
            {/*Errors*/}
            {errors.name && <span className="input-error">This field is required</span>}
            {errors?.name?.type === "pattern" && (<span className="input-error">Name can only contain letters</span>)}
          </div>

          {/*Email input - Mandatory*/}
          <div className="form-input form-input_email">
            <span className="input-label">Email *</span>
            <input name="email"
              className="input-body" 
              {...register("email", 
              { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
            {/*Errors*/}
            {errors.email && <span className="input-error">This field is required</span>}
            {errors?.email?.type === "pattern" && (<span className="input-error">Please enter a valid email</span>)}
          </div>

          {/*Services input - Mandatory*/}
          <div className="form-input form-input_services">
            <span className="input-label">I'm interested in *</span>
            {/*Radio list*/}
            <div className="input-radio">

              {/*Item: Service packages*/}
              <div className="radio-item">
                <input name="Service: Service Packages"
                  className="radio-cta" type="radio" id="service-packages" 
                  name="services-radio" value="Visa service packages" 
                  checked={status === 1} onClick={(e) => radioHandler(1)} 
                  onChange={e => {}} {...register("service_selection", { required: true })}  />
                
                <div className="radio-label">
                  <label className="label-main" for="service-packages">Visa service packages</label>
                  <span className="label-secondary">Our complete assistance</span>
                </div>
              </div>

              {/*Item: Consultation calls*/}
              <div className="radio-item">
                <input name="Service: Consultation Calls"
                  className="radio-cta" type="radio" id="consultation-calls" 
                  name="services-radio" value="Consultation calls" 
                  checked={status === 2} onClick={(e) => radioHandler(2)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
               
                <div className="radio-label">
                  <label className="label-main" for="consultation-calls">Consultation calls</label>
                  <span className="label-secondary">Professional advices</span>
                </div>
              </div>

              {/*Item: Letter services*/}
              <div className="radio-item">
                <input name="Service: Letter Services"
                  className="radio-cta" type="radio" id="letter-services" 
                  name="services-radio" value="Letter services" 
                  checked={status === 3} onClick={(e) => radioHandler(3)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" for="letter-services">Letter services</label>
                  <span className="label-secondary">Power up your application</span>
                </div>
              </div>

              {/*Item: Flight/hotel reservations*/}
              <div className="radio-item">
                <input name="Service: Flight/hotel reservations"
                  className="radio-cta" type="radio" id="flight-reservation" 
                  name="services-radio" value="Flight/hotel reservations" 
                  checked={status === 4} onClick={(e) => radioHandler(4)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" for="flight-reservation">Flight/hotel reservations</label>
                  <span className="label-secondary">Something here</span>
                </div>
              </div>

              {/*Item: Appointment scheduling*/}
              <div className="radio-item">
                <input name="Service: Appointment scheduling"
                  className="radio-cta" type="radio" id="appointment-scheduling" 
                  name="services-radio" value="Appointment scheduling" 
                  checked={status === 5} onClick={(e) => radioHandler(5)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" for="appointment-scheduling">Appointment scheduling</label>
                  <span className="label-secondary">Administrative support</span>
                </div>
              </div>

              {/*Item: General information*/}
              <div className="radio-item">
                <input name="Service: General information"
                  className="radio-cta" type="radio" id="general-information" 
                  name="services-radio" value="General information" 
                  checked={status === 6} onClick={(e) => radioHandler(6)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" for="general-information">General information</label>
                  <span className="label-secondary">You’re not sure yet</span>
                </div>
              </div>

            </div>
            {/*Errors*/}
            {errors.service_selection && <span className="input-error">This field is required</span>}
          </div>

          {/*Subservice input - Mandatory*/}
          <div className="form-input form-input_subservices">
            {/* 1 - Visa service packages*/}
            {status===1 && 
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
            }
            {/* 2 - Consultation calls*/}
            {status===2 && 
              <div></div>
            }
            {/* 3 - Letter services*/}
            {status===3 && 
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
                    </div>
                  </div>

                  {/*Item: Invitation letter*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="invitation-letter" 
                      name="letter-checkbox" value="Invitation letter" 
                      {...register("letter_service", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" for="invitation-letter">Invitation letter</label>
                    </div>
                  </div>

                  {/*Item: Sponsorship letter*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="sponsorship-letter" 
                      name="letter-checkbox" value="Sponsorship letter" 
                      {...register("letter_service", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" for="sponsorship-letter">Sponsorship letter</label>
                    </div>
                  </div>

                  {/*Item: Day-to-day itinerary*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="itinerary" 
                      name="letter-checkbox" value="Day-to-day itinerary" 
                      {...register("letter_service", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" for="itinerary">Day-to-day itinerary</label>
                    </div>
                  </div>

                </div>
                {/*Errors*/}
                  {errors.letter_service && <span className="input-error">This field is required</span>}
              </div>
            }
            {/* 4 - Flight/hotel reservations*/}
            {status===4 && 
              <div className="form-input subservice-flight_hotel">
                <span className="input-label">Your choice (Can select more than one) *</span>
                {/*Radio list*/}
                <div className="input-radio">

                  {/*Item: Flight reservation*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="flight-reservation" 
                      name="letter-checkbox" value="Flight reservation" 
                      {...register("flight_hotel", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" for="flight-reservation">Flight reservation</label>
                    </div>
                  </div>

                  {/*Item: Invitation letter*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="hotel-reservation" 
                      name="letter-checkbox" value="Hotel reservation" 
                      {...register("flight_hotel", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" for="hotel-reservation">Hotel reservation</label>
                    </div>
                  </div>

                </div>
                {/*Errors*/}
                  {errors.flight_hotel && <span className="input-error">This field is required</span>}
              </div>
            }
            {/* 5 - Appointment scheduling*/}
            {status===5 && 
              <div></div>
            }
            {/* 6 - Appointment scheduling*/}
            {status===6 && 
              <div></div>
            }
          </div>

          {/*Textarea input - Not mandatory*/}
          <div className="form-input form-input_textarea">
              <span className="input-label">Tell us more about your needs (Optional)</span>
              <textarea className="input-body" placeholder="Your message here" maxlength="400" 
                {...register("message", 
                { required: false })} >
              </textarea>
              {/*Errors*/}
          </div>

          {/*Submit button*/}
          <input  type="submit" 
                  className="btn btn_primary btn_yellow btn_md" 
                  value={isSubmitting ? "Submitting..." : "Get a quote"}
                  disabled={isSubmitting}/>
        </form>

      </div>
    </div>
  )
}

export default ServicesQuotation;
