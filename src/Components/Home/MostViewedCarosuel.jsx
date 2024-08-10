import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { makePostRequest } from "../../Apis";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, clearWishlist, removeFromWishlist, setWishlist } from "../../Store/WishlistSlice";

function TestimonialCarousel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.value); // Get the user state
  const wishlistItems = useSelector((state) => state.wishlist.items); // Get wishlist items from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/list");
        setProducts(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching products data:", error);
      }
    };

    fetchData();

    if (user?.logged_id) {
      // Fetch the wishlist if the user is logged in
      const fetchWishlist = async () => {
        try {
          const response = await makePostRequest("wishlist/list", {
            customer_id: user?.logged_id,
          });
          dispatch(setWishlist(response?.data));
        } catch (error) {
          console.error("Error fetching wishlist data:", error);
        }
      };

      fetchWishlist();
    } else {
      // Clear wishlist if the user is not logged in
      dispatch(clearWishlist());
    }
  }, [user?.logged_id, dispatch]);

  const handleToggle = (product) => {
    if (!user?.logged_id) {
      alert("Please log in to add items to your wishlist.");
      return;
    }

    const isWishlisted = wishlistItems.some((item) => item.uid === product.uid);

    if (isWishlisted) {
      dispatch(removeFromWishlist({ uid: product.uid }));
      makePostRequest("wishlist/remove", {
        customer_id: user?.logged_id,
        product_id: product.uid,
      });
    } else {
      dispatch(addToWishlist(product));
      makePostRequest("wishlist/add", {
        customer_id: user?.logged_id,
        product_id: product.uid,
      });
    }
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
                          // onClick={() => handleToggle(product)}
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
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${product.seo_slug}`}>
                          {product.heading}
                        </Link>
                      </h3>

                      <div className="price-box">
                        Rs.{" "}
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
