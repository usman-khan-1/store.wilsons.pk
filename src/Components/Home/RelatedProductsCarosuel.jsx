import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makePostRequest } from "../../Apis";
import { Link } from "react-router-dom";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader";
import { useSelector } from "react-redux";

function RelatedProductsCarousel({ productDetails, load }) {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [wishlistItems, setWishlistItems] = useState([]);

  const user = useSelector((state) => state.user.value); // Get the user state

  useEffect(() => {
    if (user?.logged_id) {
      // Fetch the wishlist if the user is logged in
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
      // Clear wishlist if the user is not logged in
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
        // Remove from wishlist
        await makePostRequest("wishlist/remove", {
          customer_id: user?.logged_id,
          product_id: product.uid,
        });
        setWishlistItems((prevItems) =>
          prevItems.filter((item) => item.uid !== product.uid)
        );
      } else {
        // Add to wishlist
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
    <div className="">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Related Products</h2>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
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
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to={"/category"} className="product-category">
                            {product?.category}
                          </Link>
                        </div>
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
                      <h3 className="product-title">
                        <Link to={`/product/${product.seo_slug}`}>
                          {product.heading}
                        </Link>
                      </h3>

                      <div className="price-box">
                            Rs.{" "}
                            <span className="product-price">
                              {Number(product?.price || 0)?.toLocaleString(
                                "en-US"
                              )}
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

export default RelatedProductsCarousel;
