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
import { toast, ToastContainer } from "react-toastify";
import { addToWishlist, removeFromWishlist } from "../Store/WishlistSlice";

function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slug = useParams();
  const dispatch = useDispatch();
  const currentUrl = window.location.href;
  const user = useSelector((state) => state.user.value);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);

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
        // If the product is already in the cart, update the quantity by adding the new quantity to the existing one
        dispatch(
          addToCart({
            product: productDetails.details,
            quantity: isProductInCart.quantity + quantity,
          })
        );
        // toast.success("Product quantity updated in cart!");
      } else {
        // If the product is not in the cart, add it as a new item
        dispatch(addToCart({ product: productDetails.details, quantity }));
        // toast.success("Product added to cart successfully!");
      }
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

  const handleToggle = (product) => {
    if (!user?.logged_id) {
      alert("Please log in to add items to your wishlist.");
      return;
    }
    const isWishlisted = wishlistItems.some(
      (item) => item.uid === product?.uid
    );

    if (isWishlisted) {
      dispatch(removeFromWishlist({ uid: product.uid }));
      makePostRequest("wishlist/remove", {
        customer_id: user.logged_id,
        product_id: product.uid,
      });
    } else {
      dispatch(addToWishlist(product));
      makePostRequest("wishlist/add", {
        customer_id: user.logged_id,
        product_id: product.uid,
      });
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
                  {productDetails?.details?.heading}
                </h1>

                <hr className="short-divider" />

                <div className="price-box">
                  <span className="new-price">
                    Rs. {productDetails?.details?.price}
                  </span>
                </div>

                <div className="product-desc">
                  <p>{productDetails?.details?.short_detail}</p>
                </div>

                <ul className="single-info-list">
                  <li>
                    SKU: <strong>654613612</strong>
                  </li>
                  <li>
                    Formula:{" "}
                    <strong>{productDetails?.details?.generic_name}</strong>
                  </li>
                  <li>
                    CATEGORY:{" "}
                    <strong>{productDetails?.details?.category}</strong>
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

                <hr className="divider mb-0 mt-0" />

                {/* Share buttons */}
                <div className="product-single-share mb-3">
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

                  {/* <button
                    onClick={handleWishlistToggle}
                    style={{
                      color: isWishlisted ? "#01abec" : "gray",
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      fontSize: "24px",
                    }}
                  >
                    {isWishlisted ? (
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
                    )}
                  </button> */}

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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"
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
        <ToastContainer limit={1} />
      </main>
    </Layout>
  );
}

export default ProductDetails;
