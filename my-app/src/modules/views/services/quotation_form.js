// Components
import React from 'react';
import { useForm } from "react-hook-form";

// Form parts
import FormServicePackages from './quotation-form/f_service_packages';

function ServicesQuotation() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [status, setStatus] = React.useState(0); 
  // 0: no show // 1: show service packages // 2: show consultation calls // 3: show letter services // 4: show flight/hotel reservation // 5: show appointment scheduling // 6: show general information
  const radioHandler = (status) => {
    setStatus(status);
    console.log(status);
  };

  return (
    <div className="services_quotation ctnr_cntr">
      <div className="services_quotation-title">
        <h2 className="quotation-title">Interested? Get a quote!</h2>
        <div className="quotation-intro">
          Give us some details about your project and 
          we will send you a quote <b>within a few business hours</b>.
        </div>
      </div>
      <div className="services_quotation-form">

        {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/}
        <form onSubmit={handleSubmit(onSubmit)} className="quotation-form">

          {/*Full name input - Mandatory*/}
          <div className="form-input form-input_name">
            <span className="input-label">Full name *</span>
            <input className="input-body" placeholder="John Doe" {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {/*Errors*/}
            {errors.name && <span className="input-error">This field is required</span>}
            {errors?.name?.type === "pattern" && (<span className="input-error">Name can only contain letters</span>)}
          </div>

          {/*Email input - Mandatory*/}
          <div className="form-input form-input_email">
            <span className="input-label">Email *</span>
            <input className="input-body" placeholder="johndoe@mail.com" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
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
                <input className="radio-cta" type="radio" id="service-packages" name="services-radio" value="Visa service packages" checked={status === 1} onClick={(e) => radioHandler(1)}  />
                <div className="radio-label">
                  <label className="label-main" for="service-packages">Visa service packages</label>
                  <span className="label-secondary">Our complete assistance</span>
                </div>
              </div>

              {/*Item: Consultation calls*/}
              <div className="radio-item">
                <input className="radio-cta" type="radio" id="consultation-calls" name="services-radio" value="Consultation calls" checked={status === 2} onClick={(e) => radioHandler(2)} />
                <div className="radio-label">
                  <label className="label-main" for="consultation-calls">Consultation calls</label>
                  <span className="label-secondary">Professional advices</span>
                </div>
              </div>

              {/*Item: Letter services*/}
              <div className="radio-item">
                <input className="radio-cta" type="radio" id="letter-services" name="services-radio" value="Letter services" checked={status === 3} onClick={(e) => radioHandler(3)} />
                <div className="radio-label">
                  <label className="label-main" for="letter-services">Letter services</label>
                  <span className="label-secondary">Power up your application</span>
                </div>
              </div>

            </div>
            {/*Errors*/}
          </div>

          <div className="form-input form-input_subservices">

            {/* 1 - Visa service packages*/}
            {status===1 && 
              <FormServicePackages />
            }

            {/* 2 - Consultation calls*/}
            {status===2 && 
              <div>This is the content for consultation calls</div>
            }

            {/* 3 - Letter services*/}
            {status===3 && 
              <div>This is the content for letter services</div>
            }

            {/* 4 - Flight/hotel reservations*/}
            {status===4 && 
              <div>This is the content for flight/hotel reservations</div>
            }

            {/* 5 - Appointment scheduling*/}
            {status===5 && 
              <div>This is the content for appointment scheduling</div>
            }

            {/* 6 - Appointment scheduling*/}
            {status===6 && 
              <div>This is the content for general information</div>
            }

          </div>
          
          <input type="submit" className="btn btn_primary btn_yellow btn_md" value="Get a quote"/>
        </form>

      </div>
    </div>
  )
}

export default ServicesQuotation;
