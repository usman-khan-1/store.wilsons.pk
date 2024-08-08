import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makePostRequest } from "../../Apis";
import { Link } from "react-router-dom";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader";

function RelatedProductsCarosuel({ productDetails, load }) {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [toggleStates, setToggleStates] = useState([]);
  const handleToggle = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  return (
    <div className="container">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Related Products</h2>

      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
      >
        {
          // load
          //   ? [1, 2, 3, 4, 5].map((_, index) => <ProductShimmer key={index} />)
          //   :
          productDetails?.lists?.map((product, index) => (
            <div key={index}>
              <div className="single-testimonial-item">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={`/product/${product?.seo_slug}`}>
                      <ImageWithLoader
                        src={product?.icon}
                        width="217"
                        height="217"
                        alt="product"
                      />
                    </Link>

                    <div className="btn-icon-group">
                      <a
                        title="Add To Cart"
                        className="btn-icon btn-add-cart product-type-simple"
                      >
                        <i className="icon-shopping-cart"></i>
                      </a>
                    </div>
                    <a
                      // href="ajax/product-quick-view.html"
                      className="btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <Link to={"/category"} className="product-category">
                          {product?.category}
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
                      <Link to={"/product-details"}>{product?.heading}</Link>
                    </h3>

                    <div className="price-box">
                      <span className="product-price">
                        Rs. {product?.price.toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  );
}

export default RelatedProductsCarosuel;
