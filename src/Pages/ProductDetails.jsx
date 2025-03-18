import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import RelatedProductsCarosuel from "../Components/Home/RelatedProductsCarosuel";
import { Link, useParams } from "react-router-dom";
import { makePostRequest } from "../Apis";
import ImageWithLoader from "../Components/ImageWithLoader";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/CartSlice";

import toast from "react-hot-toast";

function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slug = useParams();
  const dispatch = useDispatch();
  const currentUrl = window.location.href;
  const user = useSelector((state) => state.user.value);
  // console.log("wishlistItems",wishlistItems)
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/detail", slug);
        setProductDetails(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [slug]);

  const handleAddToCart = () => {
    if (quantity > 0 && productDetails?.details?.uid) {
      const isProductInCart = cartItems?.find(
        (item) => item?.uid === productDetails.details.uid
      );

      if (isProductInCart) {
        // Update the quantity if the product is already in the cart
        const updatedQuantity = isProductInCart.quantity + quantity;
        dispatch(
          addToCart({
            product: productDetails.details,
            quantity: updatedQuantity,
          })
        );
        setMessage({
          text: "Product quantity updated in cart!",
          type: "success",
        });
      } else {
        // Add the product as a new item if it's not in the cart
        dispatch(addToCart({ product: productDetails.details, quantity }));
        setMessage({
          text: "Product added to cart successfully",
          type: "success",
        });
      }

      // Clear the message after 2 seconds
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  useEffect(() => {
    console.log("Cart Items:", cartItems); // Log cartItems to the console to check if it’s working
  }, [cartItems]);

  // const isWishlisted = wishlistItems.some((item) => item.uid === product.uid);

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
        setMessage({ text: "Product Removed Successfully", type: "success" });
      } else {
        // Add to wishlist
        await makePostRequest("wishlist/add", {
          customer_id: user?.logged_id,
          product_id: product.uid,
        });
        setWishlistItems((prevItems) => [...prevItems, product]);
        setMessage({ text: "Product Added Successfully", type: "success" });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 2000); // Clear the message after 2 seconds
    }
  };
  return (
    <Layout>
      <main className="main">
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Product</a>
              </li>
            </ol>
          </nav>

          {/* Product Details */}
          <div className="product-single-container product-single-default">
            <div className="row">
              <div className="col-lg-5 col-md-6 product-single-gallery">
                <ImageWithLoader
                  src={productDetails?.details?.image}
                  width="217"
                  height="217"
                  loaderHeight={"450px"}
                  alt="product"
                />
              </div>

              <div className="col-lg-7 col-md-6 product-single-details">
                <h1 className="product-title">
                  {productDetails?.details?.heading ? (
                    productDetails.details.heading
                  ) : (
                    <span className="shimmer-box"></span>
                  )}
                </h1>

                <hr className="short-divider" />

                <div className="price-box">
                  {productDetails?.details?.price ? (
                    <span className="new-price">
                      Rs.{" "}
                      {Number(productDetails?.details?.price)?.toLocaleString(
                        "en-US"
                      )}
                    </span>
                  ) : (
                    <span className="shimmer shimmer-box"></span> // Added a class with dimensions
                  )}
                </div>

                {productDetails?.details?.short_detail &&
                  productDetails?.details?.short_detail !== "0" && (
                    <ul className="single-info-list">
                      <li>{productDetails?.details?.short_detail}</li>
                    </ul>
                    // <div className="product-desc">
                    //   <p>{productDetails?.details?.short_detail}</p>
                    // </div>
                  )}

                <ul className="single-info-list">
                  <li>
                    <strong>SKU : </strong> {productDetails?.details?.sku}
                  </li>
                  {productDetails?.details?.generic_name &&
                    productDetails?.details?.generic_name !== "0" && (
                      <li>
                        <strong>Formula : </strong>
                        {productDetails?.details?.generic_name}
                      </li>
                    )}

                  {productDetails?.details?.rx &&
                    productDetails?.details?.rx !== "0" && (
                      <li className="d-flex align-items-center">
                        <img
                          src="/assets/imagess/rx-image.webp"
                          style={{ width: "40px", marginRight: "10px" }}
                          alt=""
                        />
                        <strong>Prescription Required</strong>
                      </li>
                    )}

                  <li>
                    <strong>CATEGORY : </strong>
                    {productDetails?.details?.category}
                  </li>
                </ul>
                <div className="product-action">
                  <div className="product-single-qty">
                    <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                      <span className="input-group-btn input-group-prepend">
                        <button
                          className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                          type="button"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                      </span>
                      <input
                        className="horizontal-quantity form-control"
                        type="text"
                        value={quantity}
                        readOnly
                      />
                      <span className="input-group-btn input-group-append">
                        <button
                          className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                          type="button"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </div>

                  <a
                    className="btn btn-dark add-cart mr-2"
                    title="Add to Cart"
                    onClick={handleAddToCart} // Add to Cart handler
                  >
                    Add to Cart
                  </a>

                  {/* <Link to={"/cart"} className="btn btn-gray view-cart d-none">
                    View cart
                  </Link> */}
                </div>

                {message && (
                  <p
                    className={` ${
                      message.type === "success"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {message.text}
                  </p>
                )}

                <hr className="divider mb-0 mt-0" />

                {/* Share buttons */}
                <div className="product-single-share ">
                  <label className="sr-only">Share:</label>
                  <div className="social-icons mr-2">
                    <FacebookShareButton url={currentUrl}>
                      <a
                        className="social-icon social-facebook icon-facebook"
                        target="_blank"
                        title="Facebook"
                      ></a>
                    </FacebookShareButton>

                    <TwitterShareButton url={currentUrl}>
                      <a
                        className="social-icon social-twitter icon-twitter"
                        target="_blank"
                        title="Twitter"
                      ></a>
                    </TwitterShareButton>
                    <LinkedinShareButton url={currentUrl}>
                      <a
                        className="social-icon social-linkedin fab fa-linkedin-in"
                        target="_blank"
                        title="Linkedin"
                      ></a>
                    </LinkedinShareButton>
                  </div>

                  {user?.logged_id && (
                    <div
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                      onClick={() => handleToggle(productDetails?.details)}
                      style={{
                        color: wishlistItems.some(
                          (item) => item.uid === productDetails?.details?.uid
                        )
                          ? "#01abec"
                          : "gray",
                      }}
                    >
                      {wishlistItems.some(
                        (item) => item.uid === productDetails?.details?.uid
                      ) ? (
                        <i className="fa-solid fa-heart"></i>
                      ) : (
                        <i className="fa-regular fa-heart"></i>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="product-single-tabs">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="product-tab-desc"
                  data-toggle="tab"
                  href="#product-desc-content"
                  role="tab"
                  aria-controls="product-desc-content"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-tab-tags"
                  data-toggle="tab"
                  href="#product-tags-content"
                  role="tab"
                  aria-controls="product-tags-content"
                  aria-selected="false"
                >
                  Inner Leaf
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-desc-content"
                role="tabpanel"
                aria-labelledby="product-tab-desc"
              >
                {productDetails?.details?.details === "<p><br></p>" ? (
                  <p>No Description Yet</p>
                ) : (
                  <div
                    className="my-3"
                    dangerouslySetInnerHTML={{
                      __html: productDetails?.details?.details,
                    }}
                  />
                )}
              </div>

              <div
                className="tab-pane fade"
                id="product-tags-content"
                role="tabpanel"
                aria-labelledby="product-tab-tags"
              >
                <img
                  src={
                    productDetails?.details?.DesImage ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"
                  }
                  style={{width:"250px",height:"100%"}}
                  alt=""
                />
              </div>
            </div>
          </div>

          {productDetails?.lists?.length > 0 && (
            <div className="products-section pt-0">
              <RelatedProductsCarosuel
                productDetails={productDetails}
                load={loading}
              />
            </div>
          )}

          <hr className="mt-0 m-b-5" />
        </div>
      </main>
    </Layout>
  );
}

export default ProductDetails;
