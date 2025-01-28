import React, { useState } from "react";
import data from "./data/testimonials-data.json";

// Utility function to split array into chunks
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

function TestimonialsContent() {

  // Track current page
  const [currentPage, setCurrentPage] = useState(0);
  // Initialize active block to the first testimonial
  const [activeBlock, setActiveBlock] = useState(data[0].id);

  // Split data into chunks of 3 testimonials per page
  const testimonialsPerPage = 3;
  const chunkedData = chunkArray(data, testimonialsPerPage);

  // Handle block click
  const handleBlockClick = (blockId) => {
    // Toggle active state
    setActiveBlock(blockId === activeBlock ? null : blockId); 
  };

  // Handle page change
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    setActiveBlock(chunkedData[pageIndex][0].id); // Set active block to the first testimonial of the new page
  };

  return (
    <div className="testimonials_container">

      <div className="carousel">
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
            <div key={index} className={`carousel_page ${pageClass}`}>
              {page.map((item) => (
                <div
                  key={item.id}
                  className="testimonial"
                  onClick={() => handleBlockClick(item.id)}
                >
                  <span className={activeBlock === item.id ? "active" : ""} id={item.id}>
                    {/* Testimonial Photos */}
                    <div className="testimonial_photo testimonial_photo-01"></div>
                    <div className="testimonial_photo testimonial_photo-02"></div>
                    <div className="testimonial_photo testimonial_photo-03"></div>

                    {/* Testimonial Content */}
                    <div className={item.testimonial_class}>
                      <div className="testimonial_content">“{item.content}”</div>
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

export default TestimonialsContent;