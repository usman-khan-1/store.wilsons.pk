import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { makePostRequest } from "../../Apis";
import { Link } from "react-router-dom";
import ImageWithLoader from "../ImageWithLoader";

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
      items: 8,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [category, setCategory] = useState([]);

  const filteredCategory = category?.filter((cat) => cat?.product_count > 0);

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

  return (
    <div>
      <section className="top-categories">
        <div className="container">
          <h2 className="section-title line-height-1 ls-10 pb-4 mb-4">
            Top Categories
          </h2>

          <div className="">
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={2000} // Adjust this speed for smoother transitions
              keyBoardControl={true}
              customTransition="transform 0.5s ease"
              transitionDuration={500}
              containerclassName="carousel-container"
              dotListclassName="custom-dot-list-style"
              arrows={true} // Hide arrows~
            >
              {filteredCategory?.map((category, index) => (
                <div key={index} className="category-item">
                  <Link to={`/category/${category?.slug}`} key={index}>
                    <ImageWithLoader
                      src={category?.icon}
                      width="217"
                      height="217"
                      loaderHeight={"100px"}
                      alt="product"
                    />
                    {/* <img className="category-icon" src={category?.icon} alt="" /> */}
                    <span>{category?.name}</span>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopCategoryCarosuel;
