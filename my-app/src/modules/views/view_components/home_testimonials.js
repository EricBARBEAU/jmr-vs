// React stuff import
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import data from "./data/testimonials-data.json";

// Utility function to split array into chunks
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

function HomeTestimonials() {

	// Track current page
  const [currentPage, setCurrentPage] = useState(0);

  // Split data into chunks of 3 testimonials per page
  const testimonialsPerPage = 3;
  const chunkedData = chunkArray(data, testimonialsPerPage);

  // Handle page change
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < chunkedData.length - 1) {
        handlePageChange(currentPage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 0) {
        handlePageChange(currentPage - 1);
      }
    },
  });

  return (
    <div className="content_blk home_testimonials ctnr_cntr" >

    	<div className="intro home_intro">
				<h2 className="intro_title">What our customers say about us</h2>
				<div className="intro_subtitle">
					<b>Trust is a key factor</b> when engaging in the visa-demand process. 
					That’s why we dedicate ourselves to offering personalised, 
					tailored services designed to <b>meet each client’s unique needs</b>.
				</div>
    	</div>

    	{/*Testimonials grid*/}
      <div className="home_testimonials-grid" {...swipeHandlers}>

      	{chunkedData.map((page, index) => {
          let pageClass = "";
          if (index === currentPage) {
            pageClass = "active";
          } else if (index < currentPage) {
            pageClass = "slide-left";
          } else {
            pageClass = "slide-right";
          }

          return (

			      	<div key={index} className={`grid_container ${pageClass}`}>
			      		{page.map((item) => {

			      			// Generate image URLs dynamically
			      			const authorPhoto = `${process.env.PUBLIC_URL}${item.author_photo}`;

			      			return (

			      				// Blk
			      				<div key={item.id} className={`testimonial_blk ${item.blk}`}  >
						    			<div className="testimonial_content">
						    				“{item.content}”
						    			</div>
						    			<div className="testimonial_author">
						    				<div className="author_photo">
			                    <img src={authorPhoto} alt="author" />
			                  </div>
						    				<div className="testimonial_author-copy">
						    					<div className="author_name">{item.author_name}</div>
						    					<div className="author_country">{item.author_country}</div>
						    				</div>
						    			</div>
						    		</div>
			      			);

			          })}
			      	</div>
          	);
        })}
        <div className="navigation">
          {chunkedData.map((_, index) => (
            <div
              key={index}
              className={`circle ${currentPage === index ? "active" : ""}`}
              onClick={() => handlePageChange(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials;