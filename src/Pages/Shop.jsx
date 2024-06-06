import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [value, setValue] = useState([0, 100]);
  return (
    <Layout>
      <main className="main">
        <div className="container">
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="demo22.html">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shop
              </li>
            </ol>
          </nav>

          <div className="row main-content">
            <div className="col-lg-9">
              <div className="category-banner banner bg-gray py-3 mb-3">
                <div className="row m-0 no-gutters align-items-center">
                  <div className="col-sm-4">
                    <h2 className="font1 ls-10 text-left text-sm-right text-uppercase mb-0">
                      Smart
                    </h2>
                    <h3 className="font1 ls-10 text-left text-sm-right text-uppercase m-0">
                      Phone Deals
                    </h3>
                  </div>
                  <div className="col-sm-4">
                    <figure>
                      <img
                        src="assets/Images/demoes/demo22/banners/category-banner.jpg"
                        alt="banner"
                        width="372"
                        height="247"
                      />
                    </figure>
                  </div>
                  <div className="col-sm-4">
                    <div className="coupon-sale-text d-flex flex-column align-items-start mb-4">
                      <h4 className="m-b-2 font1 ls-10 text-white bg-dark skew-box">
                        Exclusive COUPON
                      </h4>
                      <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                        <i className="text-dark ls-0">UP TO</i>
                        <b className="text-white">$100</b>
                        <sub className="text-dark">OFF</sub>
                      </h5>
                    </div>

                    <a href="#" className="btn btn-light btn-lg font1 ml-0">
                      View All Now
                    </a>
                  </div>
                </div>
              </div>

              <nav
                className="toolbox sticky-header mt-2"
                data-sticky-options="{'mobile': true}"
              >
                <div className="toolbox-left">
                  <a href="#" className="sidebar-toggle">
                    <svg
                      data-name="Layer 3"
                      id="Layer_3"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="15"
                        x2="26"
                        y1="9"
                        y2="9"
                        className="cls-1"
                      ></line>
                      <line
                        x1="6"
                        x2="9"
                        y1="9"
                        y2="9"
                        className="cls-1"
                      ></line>
                      <line
                        x1="23"
                        x2="26"
                        y1="16"
                        y2="16"
                        className="cls-1"
                      ></line>
                      <line
                        x1="6"
                        x2="17"
                        y1="16"
                        y2="16"
                        className="cls-1"
                      ></line>
                      <line
                        x1="17"
                        x2="26"
                        y1="23"
                        y2="23"
                        className="cls-1"
                      ></line>
                      <line
                        x1="6"
                        x2="11"
                        y1="23"
                        y2="23"
                        className="cls-1"
                      ></line>
                      <path
                        d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                        className="cls-2"
                      ></path>
                      <path
                        d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                        className="cls-2"
                      ></path>
                      <path
                        d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                        className="cls-3"
                      ></path>
                      <path
                        d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                        className="cls-2"
                      ></path>
                    </svg>
                    <span>Filter</span>
                  </a>

                  <div className="toolbox-item toolbox-sort">
                    <label>Sort By:</label>

                    <div className="select-custom">
                      <select name="orderby" className="form-control">
                        <option value="menu_order">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="toolbox-right">
                  <div className="toolbox-item toolbox-show">
                    <label>Show:</label>

                    <div className="select-custom">
                      <select name="count" className="form-control">
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                      </select>
                    </div>
                  </div>

                  <div className="toolbox-item layout-modes">
                    <a
                      href="category.html"
                      className="layout-btn btn-grid active"
                      title="Grid"
                    >
                      <i className="icon-mode-grid"></i>
                    </a>
                    <a
                      href="category-list.html"
                      className="layout-btn btn-list"
                      title="List"
                    >
                      <i className="icon-mode-list"></i>
                    </a>
                  </div>
                </div>
              </nav>

              <div className="row divide-line no-gutters m-0">
                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-icon inner-quickview">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-4.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="label-group">
                        <span className="product-label label-sale">- 34%</span>
                      </div>
                      <div className="product-countdown-container">
                        <span className="product-countdown-title">
                          offer ends in:
                        </span>
                        <div
                          className="product-countdown countdown-compact"
                          data-until="2021, 10, 5"
                          data-compact="true"
                        ></div>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link
                            to={"/product-details"}
                            className="product-category"
                          >
                            category
                          </Link>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>
                          1080p Wifi IP Camera
                        </Link>
                      </h3>

                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>

                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>

                      <div className="price-box">
                        <span className="old-price">$596.00</span>
                        <span className="product-price">$299.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-5.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="label-group">
                        <div className="product-label label-hot">HOT</div>
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
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Battery Charger</Link>
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
                        <span className="product-price">$299.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-4.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="label-group">
                        <div className="product-label label-hot">HOT</div>
                      </div>
                      <div className="btn-icon-group">
                        <Link
                          to={"/product-details"}
                          className="btn-icon btn-add-cart"
                        >
                          <i className="fa fa-arrow-right"></i>
                        </Link>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Black Grey Headset</Link>
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
                        <span className="product-price">$39.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-8.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                        <img
                          src="assets/Images/demoes/demo22/products/product-8-2.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart"></i>
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Black Shoes</Link>
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
                          $101.00 &ndash; $111.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-7.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart"></i>
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Black Watch</Link>
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
                        <span className="product-price">
                          $555.00 &ndash; $666.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
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
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
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
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-11.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart"></i>
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Blue Gentle Shoes</Link>
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
                        <span className="product-price">
                          $101.00 &ndash; $111.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
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
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
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

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-6.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="label-group">
                        <div className="product-label label-hot">HOT</div>
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
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Brown Bag</Link>
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
                        <span className="product-price">$299.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-13.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart"></i>
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Casual Blue Shoes</Link>
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
                          $101.00 &ndash; $108.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
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
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
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
                </div>

                <div className="col-6 col-sm-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <Link to={"/product-details"}>
                        <img
                          src="assets/Images/demoes/demo22/products/product-23.jpg"
                          width="217"
                          height="217"
                          alt="product"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart"></i>
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo22-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a
                          href="wishlist.html"
                          title="Wishlist"
                          className="btn-icon-wish"
                        >
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h3 className="product-title">
                        <Link to={"/product-details"}>Computer Mouse</Link>
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
                        <span className="product-price">$55.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="toolbox toolbox-pagination">
                <div className="toolbox-item toolbox-show">
                  <label>Show:</label>

                  <div className="select-custom">
                    <select name="count" className="form-control">
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                    </select>
                  </div>
                </div>

                <ul className="pagination toolbox-item">
                  <li className="page-item disabled">
                    <a className="page-link page-link-btn" href="#">
                      <i className="icon-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <span className="page-link">...</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link page-link-btn" href="#">
                      <i className="icon-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="sidebar-overlay"></div>
            <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
              <div className="sidebar-wrapper">
                <div className="widget">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-body-1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-body-1"
                    >
                      Categories
                    </a>
                  </h3>

                  <div className="collapse show" id="widget-body-1">
                    <div className="widget-body">
                      <ul className="cat-list">
                        <li>
                          <a
                            href="#widget-category-1"
                            data-toggle="collapse"
                            role="button"
                            aria-expanded="true"
                            aria-controls="widget-category-1"
                          >
                            Electronics
                            <span className="products-count">(8)</span>
                            <span className="toggle"></span>
                          </a>
                          <div className="collapse show" id="widget-category-1">
                            <ul className="cat-sublist">
                              <li>
                                <a href="#">
                                  Headphone
                                  <span className="products-count">(3)</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#widget-category-2"
                            className="collapsed"
                            data-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="widget-category-2"
                          >
                            Fashion<span className="products-count">(3)</span>
                            <span className="toggle"></span>
                          </a>
                          <div className="collapse" id="widget-category-2">
                            <ul className="cat-sublist">
                              <li>
                                Motors
                                <span className="products-count">(3)</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="#">
                            Gifts<span className="products-count">(5)</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#widget-category-4"
                            className="collapsed"
                            data-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="widget-category-4"
                          >
                            Music<span className="products-count">(5)</span>
                            <span className="toggle"></span>
                          </a>
                          <div className="collapse" id="widget-category-4">
                            <ul className="cat-sublist">
                              <li>
                                Garden
                                <span className="products-count">(4)</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="#">Trousers</a>
                          <span className="products-count">(5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="widget">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-body-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-body-2"
                    >
                      Price
                    </a>
                  </h3>

                  <div className="collapse show" id="widget-body-2">
                    <div className="widget-body pt-4 pb-0">
                      <Slider
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                        min={0}
                        max={100}
                      />
                      <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                        <div className="filter-price-text">
                          Price: 
                          <span id="filter-price-range">{`$${value}`}</span>
                        </div>
                      </div>
                      {/* <form action="#">
                                            <div className="price-slider-wrapper">
                                                <div id="price-slider"></div> 
                                            </div> 

                                            <div
                                                className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                <div className="filter-price-text">
                                                    Price:
                                                    <span id="filter-price-range"></span>
                                                </div> 

                                                <button type="submit" className="btn btn-primary">Filter</button>
                                            </div> 
                                        </form> */}
                    </div>
                  </div>
                </div>

                <div className="widget widget-color">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-body-3"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-body-3"
                    >
                      Color
                    </a>
                  </h3>

                  <div className="collapse show " id="widget-body-3">
                    <div className="widget-body pb-0">
                      <ul className="config-swatch-list">
                        <li className="active">
                          <a href="#" style={{ backgroundColor: "#000" }}>
                            Black
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ backgroundColor: "#0188cc" }}>
                            Blue
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ backgroundColor: "#81d742" }}>
                            Green
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ backgroundColor: "#eded65" }}>
                            Yellow
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ backgroundColor: "#6085a5" }}>
                            Indigo
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ backgroundColor: "#ab6e6e" }}>
                            Red
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="widget widget-size">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-body-4"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-body-4"
                    >
                      Size
                    </a>
                  </h3>

                  <div className="collapse show" id="widget-body-4">
                    <div className="widget-body">
                      <ul className="cat-list">
                        <li>
                          <a href="#">Extra Large</a>
                        </li>
                        <li>
                          <a href="#">Large</a>
                        </li>
                        <li>
                          <a href="#">Medium</a>
                        </li>
                        <li>
                          <a href="#">Small</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="widget widget-featured">
                  <h3 className="widget-title">Featured Products</h3>

                  <div className="widget-body">
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <Link to={"/product-details"}>
                            <img
                              src="assets/Images/demoes/demo22/products/small/product-1.jpg"
                              width="75"
                              height="75"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            <Link to={"/product-details"}>
                              Digital Camera 16x
                            </Link>
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
                              $101.00 &ndash; $111.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <Link to={"/product-details"}>
                            <img
                              src="assets/Images/demoes/demo22/products/small/product-2.jpg"
                              width="75"
                              height="75"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            <Link to={"/product-details"}>
                              Porto Extended Camera
                            </Link>
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
                            <span className="product-price">$599.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mb-4"></div>
      </main>
    </Layout>
  );
}

export default Shop;
