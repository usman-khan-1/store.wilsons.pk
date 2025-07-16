import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makePostRequest } from "../../Apis";
import { Link } from "react-router-dom";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader";
import { useSelector } from "react-redux";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function NewRelatedProductsCarosuel({ productDetails, load }) {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [wishlistItems, setWishlistItems] = useState([]);
  const user = useSelector((state) => state.user.value);
  const carouselRef = useRef();

  useEffect(() => {
    if (user?.logged_id) {
      const fetchWishlist = async () => {
        try {
          const response = await makePostRequest("wishlist/list", {
            customer_id: user?.logged_id,
          });
          setWishlistItems(response?.data);
        } catch (error) {
          console.error("Error fetching wishlist data:", error);
        }
      };
      fetchWishlist();
    } else {
      setWishlistItems([]);
    }
  }, [user?.logged_id]);

  const handleToggle = async (product) => {
    if (!user?.logged_id) {
      alert("Please log in to add items to your wishlist.");
      return;
    }

    const isWishlisted = wishlistItems.some((item) => item.uid === product.uid);

    try {
      if (isWishlisted) {
        await makePostRequest("wishlist/remove", {
          customer_id: user?.logged_id,
          product_id: product.uid,
        });
        setWishlistItems((prevItems) =>
          prevItems.filter((item) => item.uid !== product.uid)
        );
      } else {
        await makePostRequest("wishlist/add", {
          customer_id: user?.logged_id,
          product_id: product.uid,
        });
        setWishlistItems((prevItems) => [...prevItems, product]);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <div
      style={{
        background: "#EEF7FF",
        padding: "30px 0px 10px 0px",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="header-row row align-items-center mb-4">
          <div className="col-md-7 col-8">
            <h2 className="relted-product-section-title text-center m-0 pb-0">
              You May Also Like
            </h2>
          </div>
          <div className="col-md-5 col-4 text-end">
            <div className="carousel-nav-arrows">
              <button
                className="custom-top-arrow"
                onClick={() => carouselRef.current?.previous()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="custom-top-arrow"
                onClick={() => carouselRef.current?.next()}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <Carousel
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          responsive={responsive}
          arrows={false}
          ref={carouselRef}
        >
          {load
            ? [1, 2, 3, 4, 5].map((_, index) => <ProductShimmer key={index} />)
            : productDetails?.lists?.map((product, index) => (
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
                      </figure>
                      <div className="product-details text-center text-md-start">
                        <div className="category-wrap d-flex flex-column flex-md-row justify-content-between align-items-center">
                          <Link
                            to="/category"
                            className="product-category mb-1"
                          >
                            {product?.category}
                          </Link>
                          {user && (
                            <div
                              title="Add to Wishlist"
                              className="btn-icon-wish"
                              onClick={() => handleToggle(product)}
                              style={{
                                color: wishlistItems.some(
                                  (item) => item.uid === product.uid
                                )
                                  ? "#01abec"
                                  : "gray",
                              }}
                            >
                              {wishlistItems.some(
                                (item) => item.uid === product.uid
                              ) ? (
                                <i className="fa-solid fa-heart"></i>
                              ) : (
                                <i className="fa-regular fa-heart"></i>
                              )}
                            </div>
                          )}
                        </div>

                        <h3 className="product-title mt-0 mb-0">
                          <Link to={`/product/${product.seo_slug}`}>
                            {product.heading}
                          </Link>
                        </h3>

                        <div className="rating-stars d-flex justify-content-center justify-content-md-start mb-1 mt-1">
                          {[...Array(5)].map((_, i) => {
                            const rating = Math.round(product?.rating || 5); // Default to 5 if not available
                            return (
                              <i
                                key={i}
                                className={
                                  i < rating
                                    ? "fa-solid fa-star"
                                    : "fa-regular fa-star"
                                }
                                style={{
                                  color: "#ffb300",
                                  fontSize: 14,
                                  marginRight: i !== 4 ? "4px" : "0", // add space except after the last star
                                }}
                              ></i>
                            );
                          })}
                        </div>

                        <div className="price-box mb-1">
                          <span className="product-price">
                            Rs.{" "}
                            {Number(product?.price || 0)?.toLocaleString(
                              "en-US"
                            )}{" "}
                            PKR
                          </span>
                        </div>
                        <a
                          className="btn  realted-product-add-cart mr-2 p-0"
                          title="Add to Cart"
                        >
                          <img
                            className="realted-product-add-cart-img"
                            src="/assets/imagess/cart-vector.png"
                          />{" "}
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </Carousel>
      </div>

      <style jsx>{`
        .relted-product-section-title {
          font-size: 22px;
          font-weight: 600;
          text-align: end !important;
          border: none !important;
        }

        .carousel-nav-arrows {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }

        .custom-top-arrow {
          background: none;
          border: none;
          color: #327dc0;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .custom-top-arrow:hover {
          background-color: #327dc0;
          color: white;
        }

        .realted-product-add-cart {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          font-size: 1.2rem;
          font-weight: 700;
          color: #000 !important;
        }
        .realted-product-add-cart-img {
          background: #327dc0;
          padding: 8px 8px !important;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

export default NewRelatedProductsCarosuel;
