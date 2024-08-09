import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { makePostRequest } from "../../Apis";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader"; // import the ImageWithLoader component

function TestimonialCarousel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleStates, setToggleStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/list");
        setProducts(response?.data);
        // setToggleStates(new Array(response?.data.length).fill(false)); // initialize toggle states
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  const handleToggle = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  return (
    <div className="container">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Most Viewed Products</h2>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
        className="TestimonialCarousel"
      >
        {loading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => <ProductShimmer key={index} />)
          : products?.map((product, index) => (
              <div key={index}>
                <div className="single-testimonial-item">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={`/product/${product.seo_slug}`}>
                        <ImageWithLoader
                          src={product.image}
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to={"/category"} className="product-category">
                            {product.category}
                          </Link>
                        </div>
                        <div
                          title="Add to Wishlist"
                          className="btn-icon-wish"
                          onClick={() => handleToggle(index)}
                          style={{
                            color: toggleStates[index] ? "#01abec" : "gray",
                          }}
                        >
                          {toggleStates[index] ? (
                            <i class="fa-solid fa-heart"></i>
                          ) : (
                            <i class="fa-regular fa-heart"></i>
                          )}
                        </div>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${product.seo_slug}`}>
                          {product.heading}
                        </Link>
                      </h3>

                      <div className="price-box">
                        Rs. {""}
                        <span className="product-price">
                          {product.price.toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </Carousel>
    </div>
  );
}

export default TestimonialCarousel;
