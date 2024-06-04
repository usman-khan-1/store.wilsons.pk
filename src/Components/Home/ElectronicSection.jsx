import React from "react";
import { Link } from "react-router-dom";

function ElectronicSection() {
  return (
    <section
      className="electronics-container "
      data-animation-name="fadeIn"
      data-animation-delay="200"
    >
      <div className="container">
        <h2 className="section-title border-0 line-height-1 ls-n-10 m-b-4">
          Electronics
        </h2>

        <div className="row no-gutters m-0 bg-gray">
          <div className="col-md-5 col-lg-2">
            <div className="category-lists d-flex flex-md-column flex-wrap">
              <a href="#">3D Printer Kit</a>
              <a href="#">Arduino Compatible Boards</a>
              <a href="#">Digital Microscope</a>
              <a href="#">Furniture</a>
              <a href="#">IP Camera</a>
              <a href="#">Toys</a>
              <a href="#">TV Box</a>
            </div>
          </div>

          <div className="col-md-7 col-lg-3 order-first order-md-0">
            <div
              className="banner banner4 h-100"
              style={{ backgroundColor: "#f4f4f4" }}
            >
              <figure className="h-100">
                <img
                  className="h-100"
                  src="/assets/Images/demoes/demo22/banners/banner-4.jpg"
                  alt="baner"
                  width="360"
                  height="508"
                />
              </figure>
              <div className="banner-layer banner-layer-top">
                <h3 className="font1 text-center text-uppercase">
                  Electronic
                  <br />
                  deals
                </h3>
                <div className="coupon-sale-text d-flex flex-column align-items-start">
                  <h4 className="m-b-2 font1 d-block text-white bg-dark skew-box">
                    Exclusive COUPON
                  </h4>
                  <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                    <i className="text-dark ls-0">UP TO</i>
                    <b className="text-white">$100</b>
                    <sub className="text-dark">OFF</sub>
                  </h5>
                </div>
              </div>
              <div className="banner-layer banner-layer-bottom">
                <a href="demo22-shop.html" className="btn btn-light">
                  View All Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row grid2">
              <div className="grid-item col-md-8 height-x1">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="/assets/Images/demoes/demo22/products/product-10.jpg"
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
                        <a href="demo22-shop.html" className="product-category">
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
                        <span className="ratings" style={{ width: "0%" }}></span>

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
              <div className="grid-item col-6 col-md-4 height-x1">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="/assets/Images/demoes/demo22/products/product-9.jpg"
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
                        <a href="demo22-shop.html" className="product-category">
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
                      <Link to={"/product-details"}>Laptop Case Bag</Link>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{ width: "0%" }}></span>

                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                    </div>

                    <div className="price-box">
                      <span className="old-price">$1,999.00</span>
                      <span className="product-price">$1,699.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item col-6 col-md-4 height-x1">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="/assets/Images/demoes/demo22/products/product-18.jpg"
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
                        <a href="demo22-shop.html" className="product-category">
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
                      <Link to={"/product-details"}>Motor Cap</Link>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{ width: "80%" }}></span>

                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                    </div>

                    <div className="price-box">
                      <span className="old-price">$199.00</span>
                      <span className="product-price">$109.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item col-6 col-md-4 height-x1">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={"/product-details"}>
                      <img
                        src="/assets/Images/demoes/demo22/products/product-23.jpg"
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
                        <a href="demo22-shop.html" className="product-category">
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
                        <span className="ratings" style={{ width: "80%" }}></span>

                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                    </div>

                    <div className="price-box">
                      <span className="product-price">$55.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 col-md-4 grid-col-sizer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElectronicSection;
