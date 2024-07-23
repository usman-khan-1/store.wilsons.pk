import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { makePostRequest } from "../../Apis";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader";

function RecentProductsCarosuel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/list");
        setProducts(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Recents Products</h2>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
      >
        {loading
          ? [1, 2, 3, 4, 5].map((_, index) => <ProductShimmer key={index} />)
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
                      {/* <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                  </div> */}
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
                            {product.category}
                          </Link>
                        </div>
                        <Link
                          to={"/wishist"}
                          title="Add to Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>{product.heading}</Link>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="product-price">
                          Rs. {product.price}
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

export default RecentProductsCarosuel;
