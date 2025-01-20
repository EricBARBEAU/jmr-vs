import data from "./data/process_step-data.json";
import support_visual from '../../../img/process_support.svg';

function ProcessContent() {
  return (
    <div className="process_content ctnr_cntr">

    	{/*Process Steps*/}
    	{data.map((item) => (
				<div className={item.id}>
					<div className="step_visual" alt={item.alt} ></div>
					<div className="step_content">
						<div className="step_content-title">
							<span className={item.color} >{item.alt}</span>
							<h3>{item.title}</h3>
						</div>
						<div className="step_content-body">
							{item.body}
							<div className="step_content-sub">
								<b>{item.body_sub1}</b>
								{item.body_sub2}
							</div>
						</div>
					</div>
				</div>
      ))}

      {/*Customer support*/}
      <div className="process_support">
      	<img src={support_visual} className="step_visual" alt="Customer support" />
      	<div className="step_content">
	      	<h3 className="step_content-title" >Customer support</h3>
	      	<div className="step_content-body">
						We will communicate with you and be available to answer 
						your request 24/7 using regular messaging platforms 
						(WhatsApp, Messenger, Google Meets...).
						<div className="step_content-sub">
							<b>Business hours: </b>
							From 14:00 to 23:59 (Philippines time)
						</div>
					</div>
      	</div>
      </div>
    </div>
  );
}

export default ProcessContent;