import hero_visual from '../../../img/video_hero-visual.svg';

function VideoHero() {
  return (
    <div className="hero video_hero ctnr_cntr">
    	<div className="hero_content video_hero-content">
    		<div className="content_copy">
    			<h1 className="content_copy-main">Schengen visa & immigration video guide</h1>
{/*    			<div className="content_copy-secondary">
    				Watch step-by-step videos made by Jill, to <b>help Filipinos confidently navigate Schengen visa applications</b>. 
    				<b>Real advice, clear guidance, and expert support</b> every step of the way.
    			</div>*/}
          <div className="content_copy-secondary">
            Discover Jill's <b>step-by-step video guides and expert tips</b> for <b>Filipinos applying for a Schengen visa</b> based on 
            her five years of personal experience and her clients <b>real-life success stories</b>.
          </div>
    		</div>
    	</div>
    	<div className="hero_visual video_hero-visual">
    		<img src={hero_visual} alt="Visual for videos" />
    	</div>
    </div>
  );
}

export default VideoHero;