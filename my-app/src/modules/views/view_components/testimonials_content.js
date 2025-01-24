import data from "./data/testimonials_p1-data.json";


function TestimonialsContent() {

  return (
    <div className="testimonials_container">
      <div className="carousel">
        <div className="carousel_page carousel_p1">

          {data.map((item) => (
            <div className="testimonial">
              <span className={item.isActive} id={item.id}>
                <div className="testimonial_photo testimonial_photo-01"></div>
                <div className="testimonial_photo testimonial_photo-02"></div>
                <div className="testimonial_photo testimonial_photo-03"></div>
                <div className={item.testimonial_class}>
                  <div className="testimonial_content">
                    “{item.content}”
                  </div>
                  <div className="testimonial_author">
                    <div className="author_photo"></div>
                    <div className="testimonial_author-copy">
                      <div className="author_name">{item.author_name}</div>
                      <div className="author_country">{item.author_country}</div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default TestimonialsContent;