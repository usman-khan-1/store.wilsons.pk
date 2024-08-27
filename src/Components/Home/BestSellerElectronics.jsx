import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makePostRequest } from "../../Apis";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader";
import { useSelector } from "react-redux";

function BestSellerElectronics() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const user = useSelector((state) => state.user.value); // Get the user state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/best-seller");
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
    <div className="container">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Best Sellers</h2>
      <div className="row">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-6">
                <ProductShimmer />
              </div>
            ))
          : products?.map((product, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-6">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={`/product/${product.seo_slug}`}>
                      <ImageWithLoader
                      loaderHeight={200}
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
                          {product?.category}
                        </Link>
                      </div>
                      {user?.logged_id && (
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
                        {product?.heading}
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
            ))}
      </div>
    </div>
  );
}

export default BestSellerElectronics;
