// Components
import React from 'react';
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function ContactForm() {

  const { register, 
        handleSubmit, 
        reset, 
        formState: { errors, isSubmitting, isSubmitSuccessful } 
        } = useForm();

  const [SubmitMessage, clientName] = React.useState('');

  const sendEmail = async data => {

    const emailData = {
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      message: data.message
    };

    await new Promise(resolve => setTimeout(resolve, 2000));
    clientName(`${data.firstname}`);
    emailjs
      .send("service_kl5d86n", "template_a1r7mg6", emailData, "2AlAPb8LU6099B9e6")
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

  return (
    <div className="form_view contact_body ctnr_cntr">

      <div className="form_view-form contact_body-form">

        {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/}
        <form onSubmit={handleSubmit(sendEmail)} className="form contact-form" >

          {/*Success*/}
          {isSubmitSuccessful && 
            <span className="form-success">
            	Thank you <b>{SubmitMessage}</b> for your request. We will get back to you within 2 working days.
            </span>
          }

          <div className="double-input">
	          {/*First name input - Mandatory*/}
	          <div className="form-input form-input_firstname">
	            <span className="input-label">First name *</span>
	            <input name="firstname"
	              className="input-body" 
	              {...register("firstname", 
	              { required: true, pattern: /^[a-zA-Z\s]+$/i })} />
	            {/*Errors*/}
	            {errors.firstname && <span className="input-error">This field is required</span>}
	            {errors?.firstname?.type === "pattern" && (<span className="input-error">Name can only contain letters</span>)}
	          </div>

	          {/*Last name input - Mandatory*/}
	          <div className="form-input form-input_lastname">
	            <span className="input-label">Last name *</span>
	            <input name="lastname"
	              className="input-body" 
	              {...register("lastname", 
	              { required: true, pattern: /^[a-zA-Z\s]+$/i })} />
	            {/*Errors*/}
	            {errors.lastname && <span className="input-error">This field is required</span>}
	            {errors?.lastname?.type === "pattern" && (<span className="input-error">Name can only contain letters</span>)}
	          </div>
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

          {/*Textarea input - Mandatory*/}
          <div className="form-input form-input_textarea">
              <span className="input-label">Your message *</span>
              <textarea className="input-body" placeholder="Your message here" maxLength="600" 
                {...register("message", 
                { required: true })} >
              </textarea>
              {/*Errors*/}
              {errors.message && <span className="input-error">This field is required</span>}
          </div>

          {/*Submit button*/}
          <input  type="submit" 
                  className="btn btn_primary btn_red btn_md" 
                  value={isSubmitting ? "Submitting..." : "Send a message"}
                  disabled={isSubmitting}/>
        </form>

      </div>
    </div>
  )
}

export default ContactForm;
