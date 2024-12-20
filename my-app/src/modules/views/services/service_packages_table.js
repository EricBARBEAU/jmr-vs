import data from "./data/services_table-data.json";

function ServicesTable() {
  return (
    <div className="services_table">
    	{data.map((item) => (
			<div className="services_table-section" id={item.id}>
				<div className="table_title">
					<div className="table_title-label">{item.title}</div>
					<span className="pill">in demand</span>
				</div>
				<div className="table_timeframe">
					<div className="table_timeframe-time">
						Processing time: 
						<span className="duration">{item.processing_time}</span>
					</div>
					<div className="table_timeframe-info">
						<div>
							<span className="timeframe-info-01">{item.visa_info_01}</span>
							<span className="timeframe-info-02">{item.visa_info_02}</span>
							<span className="timeframe-info-03">{item.visa_info_03}</span>
						</div>
					</div>
				</div>
				<div className="table_inclusions">
					<div className="inclusions_title">
						Includes:
					</div>
					<ul className="inclusions_list">
						<li className="list_item list_item-01">{item.inclusion_01}</li>
						<li className="list_item list_item-02">{item.inclusion_02}</li> 
						<li className="list_item list_item-03">{item.inclusion_03}</li> 
						<li className="list_item list_item-04">{item.inclusion_04}</li> 
						<li className="list_item list_item-05">{item.inclusion_05}</li> 
						<li className="list_item list_item-06">{item.inclusion_06}</li> 
						<li className="list_item list_item-07">{item.inclusion_07}</li> 
						<li className="list_item list_item-08">{item.inclusion_08}</li> 
						<li className="list_item list_item-09">{item.inclusion_09}</li> 
						<li className="list_item list_item-10">{item.inclusion_10}</li> 
						<li className="list_item list_item-11">{item.inclusion_11}</li> 
						<li className="list_item list_item-12">{item.inclusion_12}</li> 
						<li className="list_item list_item-13">{item.inclusion_13}</li> 
						<li className="list_item list_item-14">{item.inclusion_14}</li> 
					</ul>
				</div>
				<div className="table_exclusions">
					<div className="exclusions_title">
						What is not included:
					</div>
					<ul className="exclusions_list">
						<li className="list_item list_item-01">{item.exclusion_01}</li>
						<li className="list_item list_item-01">{item.exclusion_02}</li>
						<li className="list_item list_item-01">{item.exclusion_03}</li>
					</ul>
				</div>
			</div>
      	))}
    </div>
  )
}

export default ServicesTable;
