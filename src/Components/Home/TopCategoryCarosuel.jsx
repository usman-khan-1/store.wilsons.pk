import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { makePostRequest } from "../../Apis";

function TopCategoryCarosuel() {
  const categoryList = [
    "Bones & Joint Health",
    "Brain Health",
    "Child Health",
    "Cold & Flu",
    "Digestive & Liver Health",
    "Heart Health ",
    "Hemoglobin Health ",
    "General Well Being ",
    "Immune Health ",
    "Reproductive Health ",
    "Organic Calcium ",
    "Urinary tract Health ",
    "Zinc Deficiency ",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("category/list");
        setCategory(response?.data);
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  console.log("category", category);

  return (
    <div>
      <section className="top-categories">
        <div className="container">
          <div className="row m-b-3">
            <div className="col-lg-6">
              <div
                className="banner banner1 mb-2 "
                style={{ backgroundColor: "#f4f4f4" }}
              >
                <figure>
                  <img
                    src="/assets/imagess/category-2.jpg"
                    alt="banner"
                    width="700"
                    height="236"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner banner1 mb-2 "
                style={{ backgroundColor: "#f4f4f4" }}
              >
                <figure>
                  <img
                    src="/assets/imagess/category-1.jpg"
                    alt="banner"
                    width="700"
                    height="236"
                  />
                </figure>
              </div>
            </div>
           
          </div>
          <h2 className="section-title line-height-1 ls-10 pb-4 mb-4">
            Top Categories
          </h2>

          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000} // Adjust this speed for smoother transitions
            keyBoardControl={true}
            customTransition="transform 0.5s ease"
            transitionDuration={500}
            containerclassName="carousel-container"
            dotListclassName="custom-dot-list-style"
            arrows={false} // Hide arrows
          >
            {category.map((category, index) => (
              <a key={index} className="category-item">
                <i className="icon-category-medicine"></i>
                <span>{category?.name}</span>
              </a>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default TopCategoryCarosuel;
