import testimonial_01 from '../../../img/home_services-packages@2x.png';
import testimonial_02 from '../../../img/home_services-calls@2x.png';
import testimonial_03 from '../../../img/home_services-letters@2x.png';

function HomeTestimonials() {
  return (
    <div className="content_blk home_testimonials ctnr_cntr">
    	<div className="intro home_intro">
			<h2 className="intro_title">What our customers say about us</h2>
			<div className="intro_subtitle">
			<b>Trust is a key factor</b> when engaging in the visa-demand process. 
			That’s why we dedicate ourselves to offering personalised, 
			tailored services designed to <b>meet each client’s unique needs</b>.
			</div>
      	</div>
      	<div className="home_testimonials-grid">
      		<div className="testimonial_blk testimonial_blk-01">
      			<div className="testimonial_content">
      				“The team at JMR Visa Services was so patient and always 
      				very accomodative for all my queries. I really enjoy the 
      				professionalism and touch of empathy for their clients.”
      			</div>
      			<div className="testimonial_author">
      				<img className="author_photo" src={testimonial_01} alt="Author" />
      				<div className="testimonial_author-copy">
      					<div className="author_name">Diana F.</div>
      					<div className="author_country">Approved Germany Visa</div>
      				</div>
      			</div>
      		</div>
      		<div className="testimonial_blk testimonial_blk-02">
      			<div className="testimonial_content">
      				“JMR Visa Services was very  helpful when it comes to any 
      				service, very trustworthy and  professional. I definitely 
      				recommend to avail their visa assistance.”
      			</div>
      			<div className="testimonial_author">
      				<img className="author_photo" src={testimonial_02} alt="Author" />
      				<div className="testimonial_author-copy">
      					<div className="author_name">Sophia R.</div>
      					<div className="author_country">Approved French Visa</div>
      				</div>
      			</div>
      		</div>
      		<div className="testimonial_blk testimonial_blk-03">
      			<div className="testimonial_content">
      				“Jillian at JMR Visa Services is very easy to talk with given the 
      				fact that she can speaks different dialects. I love her services 
      				approach, she's so professional!”
      			</div>
      			<div className="testimonial_author">
      				<img className="author_photo" src={testimonial_03} alt="Author" />
      				<div className="testimonial_author-copy">
      					<div className="author_name">April L.</div>
      					<div className="author_country">Approved Danemark Visa</div>
      				</div>
      			</div>
      		</div>
      	</div>
    </div>
  );
}

export default HomeTestimonials;