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
    // Only set activeBlock if the clicked block is not already active
    if (blockId !== activeBlock) {
      setActiveBlock(blockId);
    }
  };

  // Handle page change
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    // Set active block to the first testimonial of the new page
    setActiveBlock(chunkedData[pageIndex][0].id);
  };

  return (
    <div className="testimonials_container">
      {/*Carousel container*/}
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

            // Page container
            <div key={index} className={`carousel_page ${pageClass}`}>
              {page.map((item) => {
                // Generate image URLs dynamically
                const photo1 = `${process.env.PUBLIC_URL}${item.photo1}`;
                const photo2 = `${process.env.PUBLIC_URL}${item.photo2}`;
                const photo3 = `${process.env.PUBLIC_URL}${item.photo3}`;
                const authorPhoto = `${process.env.PUBLIC_URL}${item.author_photo}`;

                return (

                  // Block outer div
                  <div
                    key={item.id}
                    className="testimonial"
                    onClick={() => handleBlockClick(item.id)}
                  >
                    {/*Block container*/}
                    <span
                      className={activeBlock === item.id ? "active" : ""}
                      id={item.id}
                    >
                      {/* Testimonial Photos */}
                      <img className="testimonial_photo" src={photo1} alt="testimonial" />
                      <img className="testimonial_photo" src={photo2} alt="testimonial" />
                      <img className="testimonial_photo" src={photo3} alt="testimonial" />

                      {/* Testimonial Content */}
                      <div className="testimonial_blk">
                        <div className="testimonial_content">
                          “{item.content}”
                        </div>
                        <div className="testimonial_author">
                          <div className="author_photo">
                            <img src={authorPhoto} alt="author" />
                          </div>
                          <div className="testimonial_author-copy">
                            <div className="author_name">{item.author_name}</div>
                            <div className="author_country">
                              {item.author_country}
                            </div>
                          </div>
                        </div>
                      </div>

                    </span>
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

export default TestimonialsContent;