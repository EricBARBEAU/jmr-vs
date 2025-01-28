
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
      				“Thank you for helping me with my visa for the second time 
      				(90 Days). The JMR team has been amazing, and I really 
      				appreciate how easy and smooth the process was. 
      				I’ll definitely recommend JMR to anyone needing visa help!”
      			</div>
      			<div className="testimonial_author">
      				<img 	className="author_photo" 
      							src={`${process.env.PUBLIC_URL}/img/testimonials/01/testimonial_01-client_picture.png`}
      							alt="Author" 
      				/>
      				<div className="testimonial_author-copy">
      					<div className="author_name">Mickey A.</div>
      					<div className="author_country">Approved Germany Visa</div>
      				</div>
      			</div>
      		</div>
      		<div className="testimonial_blk testimonial_blk-02">
      			<div className="testimonial_content">
      				“Miss Jill made everything so much easier! I’m absolutely over 
      				the moon and can’t wait to visit Switzerland! Even though it’s 
      				just for 13 days because of work here. I’m sure I’ll be able 
      				to visit again soon! Thank you for your assistance!”
      			</div>
      			<div className="testimonial_author">
      				<img 	className="author_photo" 
      							src={`${process.env.PUBLIC_URL}/img/testimonials/02/testimonial_02-client_picture.png`}
      							alt="Author" 
      				/>
      				<div className="testimonial_author-copy">
      					<div className="author_name">Reynalyn R.</div>
      					<div className="author_country">Approved Switzerland Visa</div>
      				</div>
      			</div>
      		</div>
      		<div className="testimonial_blk testimonial_blk-03">
      			<div className="testimonial_content">
      				“Thank you for guiding us with our application Jill. Thank you so 
      				much and sorry to have you been stressed during the process. Thank 
      				God! my visa is approved! Thank you so much for helping us!”
      			</div>
      			<div className="testimonial_author">
      				<img 	className="author_photo" 
      							src={`${process.env.PUBLIC_URL}/img/testimonials/03/testimonial_03-client_picture.png`}
      							alt="Author" 
      				/>
      				<div className="testimonial_author-copy">
      					<div className="author_name">Emely A.</div>
      					<div className="author_country">Approved France Visa</div>
      				</div>
      			</div>
      		</div>
      	</div>
    </div>
  );
}

export default HomeTestimonials;