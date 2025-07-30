// Components
import React, { useEffect } from 'react';
import { getNames } from "country-list";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function ServicesQuotation() {

  const { register, 
        handleSubmit, 
        reset, 
        formState: { errors, isSubmitting, isSubmitSuccessful } 
        } = useForm();

  const [SubmitMessage, clientName] = React.useState('');

  // Countries for the dropdown
  let countries = getNames();

  // Filter them
  const excludedCountries = ["Israel", "North Korea", "Saudi Arabia"]; 
  countries = countries.filter(country => !excludedCountries.includes(country));

  // Order alphabetically
  countries.sort();

  const sendEmail = async data => {

    const emailData = {
      user_name: data.name,
      user_email: data.email,
      service_selected: data.service_selection,
      message: data.message
    };

    // Only display the selected sub-service with matching intro
    if (data.service_selection === "Visa service packages") {
      emailData.sub_intro = "Package selected";
      emailData.sub_service = data.package_selection;
    }
    if (data.service_selection === "Letter services") {
      emailData.sub_intro = "Letter service selected";
      emailData.sub_service = data.letter_service;
    }
    if (data.service_selection === "Flight/hotel reservations") {
      emailData.sub_intro = "Choice made";
      emailData.sub_service = data.flight_hotel;
    }

    // Only use country when it exists
    if (data.country) {
      emailData.country = data.country;
    } else {
      emailData.country = "Not informed";
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
    clientName(`${data.name}`);
    emailjs
      .send(
        "service_q4c6e3c", 
        "template_q09msrq", 
        emailData, 
        "2AlAPb8LU6099B9e6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  const [status, setStatus] = React.useState(0); 
  // 0: no show 
  // 1: service packages 
  // 2: consultation calls 
  // 3: letter services 
  // 4: flight/hotel reservation 
  // 5: show appointment scheduling 
  // 6: show general information
  const radioHandler = (status) => {
    setStatus(status);
  };

  // Clear the post-submit state after 3 seconds
  useEffect(() => {
    if (SubmitMessage) {
      const timer = setTimeout(() => {
        clientName('');
      }, 4200);

      // Cleanup timeout if component unmounts or message changes
      return () => clearTimeout(timer);
    }
  }, [SubmitMessage]);

  console.log(status);

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
          {isSubmitSuccessful && SubmitMessage &&
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
                  // eslint-disable-next-line
                  name="services-radio" value="Visa service packages" 
                  checked={status === 1} onClick={(e) => radioHandler(1)} 
                  onChange={e => {}} {...register("service_selection", { required: true })}  />
                
                <div className="radio-label">
                  <label className="label-main" htmlFor="service-packages">Visa service packages</label>
                  <span className="label-secondary">Our complete assistance</span>
                </div>
              </div>

              {/*Item: Consultation calls*/}
              <div className="radio-item">
                <input name="Service: Consultation Calls"
                  className="radio-cta" type="radio" id="consultation-calls"
                  // eslint-disable-next-line 
                  name="services-radio" value="Consultation calls" 
                  checked={status === 2} onClick={(e) => radioHandler(2)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
               
                <div className="radio-label">
                  <label className="label-main" htmlFor="consultation-calls">Consultation calls</label>
                  <span className="label-secondary">Professional advices</span>
                </div>
              </div>

              {/*Item: Letter services*/}
              <div className="radio-item">
                <input name="Service: Letter Services"
                  className="radio-cta" type="radio" id="letter-services"
                  // eslint-disable-next-line 
                  name="services-radio" value="Letter services" 
                  checked={status === 3} onClick={(e) => radioHandler(3)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" htmlFor="letter-services">Letter services</label>
                  <span className="label-secondary">Power up your application</span>
                </div>
              </div>

              {/*Item: Flight/hotel reservations*/}
              <div className="radio-item">
                <input name="Service: Flight/hotel reservations"
                  className="radio-cta" type="radio" id="flight-reservation"
                  // eslint-disable-next-line 
                  name="services-radio" value="Flight/hotel reservations" 
                  checked={status === 4} onClick={(e) => radioHandler(4)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" htmlFor="flight-reservation">Flight/hotel reservations</label>
                  <span className="label-secondary">Avoid unnecessary expenses</span>
                </div>
              </div>

              {/*Item: Appointment scheduling*/}
              <div className="radio-item">
                <input name="Service: Appointment scheduling"
                  className="radio-cta" type="radio" id="appointment-scheduling"
                  // eslint-disable-next-line 
                  name="services-radio" value="Appointment scheduling" 
                  checked={status === 5} onClick={(e) => radioHandler(5)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" htmlFor="appointment-scheduling">Appointment scheduling</label>
                  <span className="label-secondary">Administrative support</span>
                </div>
              </div>

              {/*Item: General information*/}
              <div className="radio-item">
                <input name="Service: General information"
                  className="radio-cta" type="radio" id="general-information"
                  // eslint-disable-next-line 
                  name="services-radio" value="General information" 
                  checked={status === 6} onClick={(e) => radioHandler(6)} 
                  onChange={e => {}} {...register("service_selection", { required: true })} />
                
                <div className="radio-label">
                  <label className="label-main" htmlFor="general-information">General information</label>
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
                      <label className="label-main" htmlFor="tourist-visa">Tourist visa</label>
                      <span className="label-secondary">Self-funded</span>
                    </div>
                  </div>

                  {/*Item: Visit visa*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="radio" id="visit-visa" 
                      name="visa-radio" value="Visit visa" 
                      {...register("package_selection", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" htmlFor="visit-visa">Visit visa</label>
                      <span className="label-secondary">Sponsored</span>
                    </div>
                  </div>

                  {/*Item: Marriage/Fiancé visa*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="radio" id="marriage-visa" 
                      name="visa-radio" value="Marriage/Fiancé visa" 
                      {...register("package_selection", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" htmlFor="marriage-visa">Marriage/Fiancé visa</label>
                      <span className="label-secondary">Getting married</span>
                    </div>
                  </div>

                  {/*Item: Long Stay visa*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="radio" id="longstay-visa" 
                      name="visa-radio" value="Long Stay visa" 
                      {...register("package_selection", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" htmlFor="longstay-visa">Long Stay visa</label>
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
                      <label className="label-main" htmlFor="cover-letter">Cover letter</label>
                    </div>
                  </div>

                  {/*Item: Invitation letter*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="invitation-letter" 
                      name="letter-checkbox" value="Invitation letter" 
                      {...register("letter_service", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" htmlFor="invitation-letter">Invitation letter</label>
                    </div>
                  </div>

                  {/*Item: Sponsorship letter*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="sponsorship-letter" 
                      name="letter-checkbox" value="Sponsorship letter" 
                      {...register("letter_service", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" htmlFor="sponsorship-letter">Sponsorship letter</label>
                    </div>
                  </div>

                  {/*Item: Day-to-day itinerary*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="itinerary" 
                      name="letter-checkbox" value="Day-to-day itinerary" 
                      {...register("letter_service", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" htmlFor="itinerary">Day-to-day itinerary</label>
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
                      <label className="label-main" htmlFor="flight-reservation">Flight reservation</label>
                    </div>
                  </div>

                  {/*Item: Invitation letter*/}
                  <div className="radio-item">
                    <input className="radio-cta" type="checkbox" id="hotel-reservation" 
                      name="letter-checkbox" value="Hotel reservation" 
                      {...register("flight_hotel", { required: true })} />
                    <div className="radio-label">
                      <label className="label-main" htmlFor="hotel-reservation">Hotel reservation</label>
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
            {/* 6 - General information*/}
            {status===6 && 
              <div></div>
            }
          </div>

          {/*Country input - When not general information*/}
          {(status !== 0 && status !== 6) && (

            <div className="form-input form-input_country">
              <span className="input-label">Destination country *</span>
              <select
                name="country"
                className="input-body"
                {...register("country", {
                  required: true,
                  validate: (value) => countries.includes(value),
                })}
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {/* Errors */}
              {errors.country && <span className="input-error">This field is required</span>}
              {errors?.country?.type === "validate" && (
                <span className="input-error">Please enter a valid country</span>
              )}
            </div>

          )}

          {/*Textarea input - Not mandatory*/}
          <div className="form-input form-input_textarea">
              <span className="input-label">Tell us more about your needs (Optional)</span>
              <textarea className="input-body" placeholder="Your message here" maxLength="400" 
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
