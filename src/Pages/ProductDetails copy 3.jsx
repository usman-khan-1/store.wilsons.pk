import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import RelatedProductsCarosuel from "../Components/Home/NewRelatedProductsCarosuel";
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
import ReactImageMagnify from "react-image-magnify";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import CustomerReviewsSlider from "../Components/CustomerReviewsSlider";
import RelatedProductFaqs from "../Components/RelatedProductFaqs";

function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slug = useParams();
  const dispatch = useDispatch();
  const currentUrl = window.location.href;
  const user = useSelector((state) => state.user.value);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all product images (assuming they're named image, image1, image2, etc.)
  const getProductImages = () => {
    const images = [];
    if (productDetails?.details?.image) {
      images.push(productDetails.details.image);
    }

    // Add additional images if they exist
    for (let i = 1; i <= 4; i++) {
      const imgKey = `image${i}`;
      if (productDetails?.details?.[imgKey]) {
        images.push(productDetails.details[imgKey]);
      }
    }

    return images;
  };

  const productImages = getProductImages();

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/detail", {
          slug: "calcee-500",
        });
        setProductDetails(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [slug]);

  const [ratingData, setRatingData] = useState({
    averageRating: 4.5,
    totalReviews: 28,
  });

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratingData.averageRating);
    const hasHalfStar = ratingData.averageRating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" className="text-warning" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-secondary" />);
    }

    return stars;
  };

  const handleAddToCart = () => {
    if (quantity > 0 && productDetails?.details?.uid) {
      const isProductInCart = cartItems?.find(
        (item) => item?.uid === productDetails.details.uid
      );

      if (isProductInCart) {
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
        dispatch(addToCart({ product: productDetails.details, quantity }));
        setMessage({
          text: "Product added to cart successfully",
          type: "success",
        });
      }

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
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

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
        setMessage({ text: "Product Removed Successfully", type: "success" });
      } else {
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
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const certifiedCompanies = [
    {
      name: "Company A",
      logo: "/assets/imagess/gmp-logo.png",
    },
    {
      name: "Company B",
      logo: "/assets/imagess/haccp-logo.webp",
    },
    {
      name: "Company C",
      logo: "/assets/imagess/gmp-logo.png",
    },
    {
      name: "Company D",
      logo: "/assets/imagess/haccp-logo.webp",
    },
    {
      name: "Company E",
      logo: "/assets/imagess/gmp-logo.png",
    },
    {
      name: "Company F",
      logo: "/assets/imagess/haccp-logo.webp",
    },
  ];

  return (
    <Layout>
      <main className="main">
        <div className="container">
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

          <div className="product-single-container product-single-default">
            <div className="row">
              {/* Product Image Gallery with Slider */}
              <div className="col-lg-6 col-md-6 product-single-gallery">
                <div
                  className="product-main-image"
                  style={{ position: "relative", marginBottom: "15px" }}
                >
                  <ImageWithLoader
                    src={productImages[currentImageIndex]}
                    width="100%"
                    height="450px"
                    loaderHeight={"450px"}
                    alt={`product ${currentImageIndex + 1}`}
                  />

                  {/* Navigation Arrows */}
                  {productImages.length > 1 && (
                    <>
                      <button
                        onClick={goToPreviousImage}
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "#D9D9D9",
                          color: "#327DC0",
                          border: "none",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                          zIndex: 1,
                        }}
                      >
                        <FaArrowLeftLong style={{ fontSize: "18px" }} />
                      </button>
                      <button
                        onClick={goToNextImage}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "#D9D9D9",
                          color: "#327DC0",
                          border: "none",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                          zIndex: 1,
                        }}
                      >
                        <FaArrowRightLong style={{ fontSize: "18px" }} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {productImages.length > 1 && (
                  <div
                    className="product-thumbnails"
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    {productImages.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => selectImage(index)}
                        style={{
                          width: "80px",
                          height: "80px",
                          border:
                            currentImageIndex === index
                              ? "2px solid #007bff"
                              : "1px solid #ddd",
                          cursor: "pointer",
                          overflow: "hidden",
                        }}
                      >
                        <ImageWithLoader
                          src={image}
                          width="100%"
                          height="100%"
                          alt={`product thumbnail ${index + 1}`}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details (rest of your existing code remains the same) */}
              <div className="col-lg-6 col-md-6 product-single-details">
                <h1 className="product-title">
                  {productDetails?.details?.heading ? (
                    productDetails.details.heading
                  ) : (
                    <span className="shimmer-box"></span>
                  )}
                </h1>

                <div className="d-flex align-items-center mb-2">
                  <span className="mr-2 font-weight-bold">
                    ({ratingData.averageRating.toFixed(1)})
                  </span>
                  <div className="d-flex mr-2" style={{ gap: "2px" }}>
                    {renderStars()}
                  </div>
                  <span>({ratingData.totalReviews} Reviews)</span>
                </div>

                {productDetails?.details?.short_detail &&
                  productDetails?.details?.short_detail !== "0" && (
                    <ul className="single-info-list">
                      <li>{productDetails?.details?.short_detail}</li>
                    </ul>
                  )}
                <div>
                  <ul className="single-info-list">
                    <li>
                      <strong>Vendor : </strong> Wilmart
                    </li>
                    <li>
                      <strong>Availability : </strong> In Stock
                    </li>
                  </ul>
                </div>

                <div className="price-box">
                  {productDetails?.details?.price ? (
                    <span className="new-price">
                      Rs.{" "}
                      {Number(productDetails?.details?.price)?.toLocaleString(
                        "en-US"
                      )}
                    </span>
                  ) : (
                    <span className="shimmer shimmer-box"></span>
                  )}
                </div>

                <div className="product-action product-add-buy-wrapper">
                  <ul className="single-info-list">
                    <li className="mb-0">
                      <strong>Quantity : </strong>{" "}
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
                            className="horizontal-quantity form-control product-quantity-bg"
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
                    </li>
                  </ul>

                  <div className="product-add-buy-mobile">
                    <a
                      className="btn  add-cart mr-2"
                      title="Add to Cart"
                      onClick={handleAddToCart}
                    >
                      <img src="/assets/imagess/cart-vector.png" /> Add to Cart
                    </a>
                    <a className="btn product-buy-now-button mr-2">
                      Buy It Now
                    </a>

                    <FaRegHeart
                      style={{
                        color: "#327DC0",
                        fontSize: "31px",
                        border: "1px solid #e3e3e3",
                        borderRadius: "50px",
                        padding: "5px",
                        fontWeight: "600",
                      }}
                    />
                  </div>
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
                    {productDetails?.details?.category?.join(", ")}
                  </li>

                  <li>
                    <strong>Tags : </strong>
                    Bone Health , Heart Health , Immune Health , Respiratory
                    Health
                  </li>
                </ul>

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
                {productDetails?.details?.DesImage ? (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: productDetails?.details?.heading,
                        width: 400,
                        height: 300,
                        src: productDetails?.details?.DesImage,
                      },
                      largeImage: {
                        src: productDetails?.details?.DesImage,
                        width: 1500,
                        height: 800,
                      },
                      enlargedImageContainerStyle: {
                        zIndex: 9,
                        width: "200%",
                        height: "100%",
                      },
                      enlargedImageContainerDimensions: {
                        width: "200%",
                        height: "200%",
                      },
                    }}
                  />
                ) : (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"
                    style={{ width: "250px", height: "100%" }}
                    alt="Placeholder"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="certified-companies my-5">
            <div
              className="d-flex align-items-center align-items-center flex-wrap"
              style={{ gap: "0px" }}
            >
              {certifiedCompanies.map((company, index) => (
                <div key={index}>
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{
                      width: "100% !important",
                      height: "130px",
                      // objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <RelatedProductFaqs />

        {productDetails?.lists?.length > 0 && (
          <div className="products-section pt-0">
            <RelatedProductsCarosuel
              productDetails={productDetails}
              load={loading}
            />
          </div>
        )}
        <CustomerReviewsSlider />
      </main>
    </Layout>
  );
}

export default ProductDetails;
