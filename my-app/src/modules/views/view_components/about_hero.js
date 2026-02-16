// Components
import CountUp from 'react-countup';

function AboutHero() {

  return (
    <div className="hero about_hero ctnr_cntr">
    	<div className="hero_content about_hero-content">
    		<div className="content_copy">
    			<h1 className="content_copy-main">Visa assistance powered by real-life experience.</h1>
    			<div className="content_copy-secondary">
    				<b>Since 2022</b>, we have been putting our <b>knowledge and 
    				experience</b> to the <b>service of Filipinos</b> wanting to 
    				travel to the Schengen space. 
    			</div>
    		</div>
    		<div className="approval_rate">
    			<div className="approval_rate-copy">
            <div className="main">
    				  Visa approval rate
            </div>
            <div className="secondary">  
					    (Feb 2026)
            </div>
    			</div>
    			<div className="approval_rate-chart">
            <div className="chart">
              <CountUp start={0} end={97} duration={2.5}/>%
            </div>
    			</div>
    		</div>
    	</div>
      <div className="hero_legend">
        <div className="main">
          Sierra Nevada, Spain
        </div>
        <div className="secondary">  
          October 2024
        </div>
      </div>
    </div>
  );
}

export default AboutHero;