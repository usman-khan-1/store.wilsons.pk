import React, { useEffect } from "react";
import HomeCarosuel from "../Components/Home/HomeCarosuel";
import Layout from "../Components/Layout";
import { FaShippingFast } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiTimerBold } from "react-icons/pi";
import { MdPayment } from "react-icons/md";

import "react-multi-carousel/lib/styles.css";
import MostViewedCarosuel from "../Components/Home/MostViewedCarosuel";
import BestSellerElectronics from "../Components/Home/BestSellerElectronics";
import TopCategoryCarosuel from "../Components/Home/TopCategoryCarosuel";
import ElectronicSection from "../Components/Home/ElectronicSection";
import TopBrand from "../Components/Home/TopBrand";
import RecentProductsCarosuel from "../Components/Home/RecentProductsCarosuel";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <HomeCarosuel />
      <div className="container my-5">
        <div className="info-boxes-container">
          <div className="row m-0 divide-line">
            <div className="col-sm-6 col-lg-3 info-box info-box-icon-left ">
              <FaShippingFast size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">
                  FREE SHIPPING &amp; RETURN
                </h4>
                <p className="font-weight-light">
                  Free shipping on orders over $99.
                </p>
              </div>
            </div>

            <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
              <RiMoneyDollarCircleLine size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">
                  MONEY BACK GUARANTEE
                </h4>
                <p className="font-weight-light">100% money back guarantee</p>
              </div>
            </div>

            <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
              <PiTimerBold size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">
                  ONLINE SUPPORT 24/7
                </h4>
                <p className="font-weight-light">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
              <MdPayment size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">SECURE PAYMENT</h4>
                <p className="font-weight-light">Lorem Ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MostViewedCarosuel />
      <TopCategoryCarosuel />

      <BestSellerElectronics />
      <RecentProductsCarosuel />

      <section className="recent-products">
        <div className="container">
          <div
            className=" "
            data-animation-name="fadeIn"
            data-animation-delay="200"
          >
            <h2 className="section-title ls-n-10 pb-3 m-b-4">
              Recent Products
            </h2>

            <div className="row">
              <div
                className="products-slider 5col owl-carousel owl-theme owl-nav-outisde show-nav-hover"
                data-owl-options="{
                            'margin': 0
                        }"
              >
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="assets/Images/demoes/demo22/products/product-20.jpg"
                        width="217"
                        height="217"
                        alt="product"
                      />
                    </Link>
                    <div className="label-group">
                      <div className="product-label label-sale">-35%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a
                        href="#"
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
                        <Link to={"/shop"} className="product-category">
                          category
                        </Link>
                      </div>
                      <Link
                        to={"/wishlist"}
                        title="Wishlist"
                        className="btn-icon-wish"
                      >
                        <i className="icon-heart"></i>
                      </Link>
                    </div>
                    <h3 className="product-title">
                      <Link to={"/shop"}>HD Camera</Link>
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
                      <span className="old-price">$199.00</span>
                      <span className="product-price">$129.00</span>
                    </div>
                  </div>
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="assets/Images/demoes/demo22/products/product-21.jpg"
                        width="217"
                        height="217"
                        alt="product"
                      />
                    </Link>
                    <div className="label-group">
                      <div className="product-label label-sale">-35%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a
                        href="#"
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
                        <Link to={"/shop"} className="product-category">
                          category
                        </Link>
                      </div>
                      <Link
                        to={"/wishlist"}
                        title="Wishlist"
                        className="btn-icon-wish"
                      >
                        <i className="icon-heart"></i>
                      </Link>
                    </div>
                    <h3 className="product-title">
                      <Link to={"/product-details"}>Black Watches</Link>
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
                      <span className="old-price">$199.00</span>
                      <span className="product-price">$129.00</span>
                    </div>
                  </div>
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="assets/Images/demoes/demo22/products/product-12.jpg"
                        width="217"
                        height="217"
                        alt="product"
                      />
                    </Link>
                    <div className="label-group">
                      <div className="product-label label-sale">-89%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a
                        href="#"
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
                        <Link to={"/shop"} className="product-category">
                          category
                        </Link>
                      </div>
                      <Link
                        to={"/wishlist"}
                        title="Wishlist"
                        className="btn-icon-wish"
                      >
                        <i className="icon-heart"></i>
                      </Link>
                    </div>
                    <h3 className="product-title">
                      <Link to={"/product-details"}>USB Speaker</Link>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span
                          className="ratings"
                          style={{ width: "0%" }}
                        ></span>

                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                    </div>

                    <div className="price-box">
                      <span className="old-price">$596.00</span>
                      <span className="product-price">$68.00</span>
                    </div>
                  </div>
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="assets/Images/demoes/demo22/products/product-17.jpg"
                        width="217"
                        height="217"
                        alt="product"
                      />
                    </Link>
                    <div className="label-group">
                      <div className="product-label label-sale">-89%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a
                        href="#"
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
                        <Link to={"/shop"} className="product-category">
                          category
                        </Link>
                      </div>
                      <Link
                        to={"/wishlist"}
                        title="Wishlist"
                        className="btn-icon-wish"
                      >
                        <i className="icon-heart"></i>
                      </Link>
                    </div>
                    <h3 className="product-title">
                      <Link to={"/product-details"}>Classic Earphone</Link>
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
                      <span className="old-price">$596.00</span>
                      <span className="product-price">$68.00</span>
                    </div>
                  </div>
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="assets/Images/demoes/demo22/products/product-10.jpg"
                        width="217"
                        height="217"
                        alt="product"
                      />
                    </Link>
                    <div className="label-group">
                      <div className="product-label label-sale">-17%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a
                        href="#"
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
                        <Link to={"/shop"} className="product-category">
                          category
                        </Link>
                      </div>
                      <Link
                        to={"/wishlist"}
                        title="Wishlist"
                        className="btn-icon-wish"
                      >
                        <i className="icon-heart"></i>
                      </Link>
                    </div>
                    <h3 className="product-title">
                      <Link to={"/product-details"}>Bluetooth Speaker</Link>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span
                          className="ratings"
                          style={{ width: "0%" }}
                        ></span>

                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                    </div>

                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="banner banner3 bg-dark  "
            data-animation-name="fadeIn"
            data-animation-delay="200"
          >
            <div className="row m-0 no-gutters align-items-center">
              <div className="col-md-6 col-lg-3 align-self-baseline">
                <figure>
                  <img
                    src="assets/Images/demoes/demo22/banners/banner-3.jpg"
                    alt="image"
                    width="380"
                    height="136"
                  />
                </figure>
              </div>
              <div className="col-md-6 col-lg-4 py-4 py-lg-5">
                <div className="px-5 px-md-0">
                  <h3 className="font1 text-uppercase m-b-2">
                    Check new arrivals
                  </h3>
                  <h2 className="font1 ls-10 text-uppercase text-white mb-0">
                    Explore Smartphones
                  </h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 py-4 py-lg-5 d-flex justify-content-md-center">
                <div className="px-5 px-md-0">
                  <div className="coupon-sale-text d-flex flex-column align-items-start">
                    <h4 className="m-b-2 font1 d-block text-dark bg-white skew-box">
                      Exclusive COUPON
                    </h4>
                    <h5 className="mb-0 font1 d-inline-block bg-primary skew-box">
                      <i className="text-white ls-0">UP TO</i>
                      <b className="text-white">$200</b>
                      <sub className="text-white">OFF</sub>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 py-4 py-lg-5">
                <div className="px-5 px-md-0">
                  <Link
                    to={"/product-details"}
                    className="btn btn-dark font1 ls-10"
                  >
                    View All Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ElectronicSection /> */}
      {/* <TopBrand /> */}
    </Layout>
  );
}

export default Home;
