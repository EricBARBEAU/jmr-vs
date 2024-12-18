import data from "./data/process_step-data.json";

function ProcessContent() {
  return (
    <div className="process_content ctnr_cntr">

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

    </div>
  );
}

export default ProcessContent;