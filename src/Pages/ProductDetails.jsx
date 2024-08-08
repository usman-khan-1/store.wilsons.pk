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

function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const slug = useParams();
  const currentUrl = window.location.href;

  const [loading, setLoading] = useState(false);
  const [borderIndex, setBorderIndex] = useState(0);
  const [productDetails, setProductDetails] = useState({});
  // console.log("productDetails", productDetails);

  const productImages = [
    {
      image: "/assets/Images/products/zoom/joshanda.png  ",
    },
    {
      image: "/assets/Images/products/zoom/plantcal.png",
    },
    {
      image: "/assets/Images/products/zoom/capZyme.png",
    },
    {
      image: "/assets/Images/products/zoom/cranpure.png",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/detail", slug);
        setProductDetails(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, [slug]);

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
              <div className="col-lg-5 col-md-6 product-single-gallery">
                {/* <div className="product-slider-container">
                  <div
                    id="custCarousel"
                    className="carousel slide p-3"
                    data-ride="carousel"
                    align="center"
                  >
                    <div className="carousel-inner cus-carousel-inner">
                      {productImages?.map((image, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${image.image})`,
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              height: "400px",
                              width: "100%",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <a
                      className=" carousel-control-prev"
                      href="#custCarousel"
                      data-slide="prev"
                      onClick={() =>
                        setBorderIndex((prv) => (prv === 0 ? 3 : prv - 1))
                      }
                    >
                      <span className="carousel-control-prev-icon" />
                    </a>
                    <a
                      className=" carousel-control-next"
                      href="#custCarousel"
                      data-slide="next"
                      onClick={() =>
                        setBorderIndex((prv) => (prv === 3 ? 0 : prv + 1))
                      }
                    >
                      <span className="carousel-control-next-icon" />
                    </a>
                  </div>
                </div>

                <div className="prod-thumbnail owl-dots">
                  {productImages?.map((data, index) => (
                    <div className="owl-dot" key={index}>
                      <a
                        data-slide-to={`${index}`}
                        data-target={`#custCarousel`}
                        onClick={() => setBorderIndex(index)}
                        href=""
                      >
                        <img
                          style={{
                            border:
                              borderIndex === index && "2px solid #01abec",
                          }}
                          src={data.image}
                          width="110"
                          height="110"
                          alt="product-thumbnail"
                        />
                      </a>
                    </div>
                  ))}
                </div> */}

                <ImageWithLoader
                  src={productDetails?.details?.image}
                  width="217"
                  height="217"
                  loaderHeight={"450px"}
                  alt="product"
                />

                {/* <img src={productDetails?.details?.image} alt="" /> */}
              </div>

              <div className="col-lg-7 col-md-6 product-single-details">
                <h1 className="product-title">
                  {" "}
                  {productDetails?.details?.heading}
                </h1>
                {/* <h6>Formula: {productDetails?.details?.generic_name}</h6> */}

                <hr className="short-divider" />

                <div className="price-box">
                  {/* <span className="old-price">$1,999.00</span> */}
                  <span className="new-price">
                    {" "}
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
                    <strong>
                      <a href="#" className="product-category">
                        {productDetails?.details?.generic_name}
                      </a>
                    </strong>
                  </li>
                  <li>
                    CATEGORY:{" "}
                    <strong>
                      <a href="#" className="product-category">
                        {productDetails?.details?.category}
                      </a>
                    </strong>
                  </li>
                </ul>

                <div className="product-action">
                  <div className="product-single-qty">
                    <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                      <span className="input-group-btn input-group-prepend">
                        <button
                          className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                          type="button"
                        ></button>
                      </span>
                      <input
                        className="horizontal-quantity form-control"
                        type="text"
                        defaultValue={1}
                      />
                      <span className="input-group-btn input-group-append">
                        <button
                          className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                          type="button"
                        ></button>
                      </span>
                    </div>
                  </div>

                  <a className="btn btn-dark add-cart mr-2" title="Add to Cart">
                    Add to Cart
                  </a>

                  <Link to={"/cart"} className="btn btn-gray view-cart d-none">
                    View cart
                  </Link>
                </div>

                <hr className="divider mb-0 mt-0" />

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
                  

                  <Link
                    to={"/wishlist"}
                    className="btn-icon-wish add-wishlist"
                    title="Add to Wishlist"
                  >
                    <i className="icon-wishlist-2"></i>
                    <span>Add to Wishlist</span>
                  </Link>
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
      </main>
    </Layout>
  );
}

export default ProductDetails;
