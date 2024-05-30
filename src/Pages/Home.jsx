import React from "react";
import HomeNavbar from "../Components/HomeNavbar";
import HomeCarosuel from "../Components/Home/HomeCarosuel";
import Navbar from "../Components/Home/Navbar";
import Layout from "../Components/Layout";
import { FaShippingFast } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiTimerBold } from "react-icons/pi";
import { MdPayment, MdPayments } from "react-icons/md";

function Home() {
  return (
    <Layout>
      <HomeCarosuel />
      <div class="container my-5">
        <div class="info-boxes-container">
          <div class="row m-0 divide-line">
            <div class="col-sm-6 col-lg-3 info-box info-box-icon-left ">
              <FaShippingFast size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">
                  FREE SHIPPING &amp; RETURN
                </h4>
                <p class="font-weight-light">
                  Free shipping on orders over $99.
                </p>
              </div>
            </div>

            <div class="info-box info-box-icon-left col-sm-6 col-lg-3">
              <RiMoneyDollarCircleLine size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">MONEY BACK GUARANTEE</h4>
                <p class="font-weight-light">100% money back guarantee</p>
              </div>
            </div>

            <div class="info-box info-box-icon-left col-sm-6 col-lg-3">
              <PiTimerBold size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">ONLINE SUPPORT 24/7</h4>
                <p class="font-weight-light">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div class="info-box info-box-icon-left col-sm-6 col-lg-3">
              <MdPayment size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">SECURE PAYMENT</h4>
                <p class="font-weight-light">Lorem Ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="top-categories">
        <div class="container">
          <div class="row m-b-3">
            <div class="col-lg-6">
              <div
                class="banner banner1 mb-2 appear-animate"
                data-animation-name="fadeInLeftShorter"
                data-animation-delay="200"
                style={{ backgroundColor: "#f4f4f4" }}
              >
                <figure>
                  <img
                    src="assets/Images/demoes/demo22/banners/banner-1.jpg"
                    alt="banner"
                    width="700"
                    height="236"
                  />
                </figure>
                <div class="banner-layer banner-layer-middle banner-layer-left">
                  <h3 class="font1 ls-10 text-uppercase mb-0">
                    Action
                    <br />
                    Cameras
                  </h3>
                </div>
                <div class="banner-layer banner-layer-middle banner-layer-right">
                  <div class="coupon-sale-text">
                    <h4 class="font1 line-height-1 ls-10 text-white bg-primary skew-box m-b-2">
                      Starting from
                    </h4>
                    <h5 class="d-inline-block font1 text-white bg-primary skew-box mb-0">
                      $399<sub class="text-dark">$499</sub>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="banner banner2 mb-2 appear-animate"
                data-animation-name="fadeInRightShorter"
                data-animation-delay="200"
                style={{ backgroundColor: "#f4f4f4" }}
              >
                <figure>
                  <img
                    src="assets/images/demoes/demo22/banners/banner-2.jpg"
                    alt="banner"
                    width="700"
                    height="236"
                  />
                </figure>
                <div class="banner-layer banner-layer-middle banner-layer-left">
                  <h3 class="font1 text-uppercase ls-10 mb-0">
                    For all
                    <br />
                    styles
                  </h3>
                </div>
                <div class="banner-layer banner-layer-middle banner-layer-right">
                  <div class="coupon-sale-text">
                    <h4 class="font1 line-height-1 ls-10 text-white bg-secondary skew-box m-b-2">
                      Starting from
                    </h4>
                    <h5 class="d-inline-block font1 text-white bg-secondary skew-box mb-0">
                      $199<sub class="text-dark">$299</sub>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 class="section-title line-height-1 ls-10 pb-4 mb-4">
            Top Categories
          </h2>

          <div
            class="mb-2 appear-animate"
            data-animation-name="fadeIn"
            data-animation-delay="200"
          >
            <div
              class="categories-slider owl-carousel owl-theme"
              data-owl-options="{
                            'margin': 0,
                            'nav': false,
                            'responsive': {
                                '480': {
                                    'items': 3
                                },
                                '576': {
                                    'items': 4
                                },
                                '768': {
                                    'items': 5
                                },
                                '992': {
                                    'items': 6
                                },
                                '1200': {
                                    'items': 7
                                }
                            }
                        }"
            >
              <a href="demo22-shop.html">
                <i class="icon-category-fashion"></i>
                <span>Fashion</span>
              </a>
              <a href="demo22-shop.html">
                <i class="icon-category-electronics"></i>
                <span>Electronics</span>
              </a>
              <a href="demo22-shop.html">
                <i class="icon-category-gifts"></i>
                <span>Gifts</span>
              </a>
              <a href="demo22-shop.html">
                <i class="icon-category-garden"></i>
                <span>Garden</span>
              </a>
              <a href="demo22-shop.html">
                <i class="icon-category-music"></i>
                <span>Music</span>
              </a>
              <a href="demo22-shop.html">
                <i class="icon-category-motors"></i>
                <span>Motors</span>
              </a>
              <a href="demo22-shop.html">
                <i class="icon-category-furniture"></i>
                <span>Furniture</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
