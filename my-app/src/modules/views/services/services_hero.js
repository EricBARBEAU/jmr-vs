import data from "./data/services_hero-data.json";

function ServicesHero() {
  return (
    <div className="hero services_hero ctnr_cntr">
    	{data.map((item) => (
			<div className="hero_content services_hero-content" id={item.id}>
				<div className="hero_visual" alt="test" ></div>
				<div className="hero_copy">
					<h2 className="hero_copy-title">{item.title}</h2>
					<div className="hero_copy-body-1">
						{item.body_1}
					</div>
					<div className="hero_copy-body-2">
						{item.body_2}
					</div>
				</div>
			</div>
      	))}
    </div>
  );
}

export default ServicesHero;