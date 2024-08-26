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
import TopBrand from "../Components/Home/TopBrand";
import RecentProductsCarosuel from "../Components/Home/RecentProductsCarosuel";
import { Link } from "react-router-dom";
import CustomCarousel from "../Components/Home/CustomCarosuel";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <Layout>
      <HomeCarosuel />
      {/* <CustomCarousel/> */}
      <TopCategoryCarosuel />

      <div className="container">
        <div className="row m-b-3">
          <div className="col-lg-6">
            <div
              className="banner banner1 mb-2 "
              style={{ backgroundColor: "#f4f4f4" }}
            >
              <figure>
                <img
                  src="/assets/imagess/category-2.jpg"
                  alt="banner"
                  width="700"
                  height="236"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="banner banner1 mb-2 "
              style={{ backgroundColor: "#f4f4f4" }}
            >
              <figure>
                <img
                  src="/assets/imagess/category-1.jpg"
                  alt="banner"
                  width="700"
                  height="236"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

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
                  Free shipping on orders over PKR 2500.
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
                <p className="font-weight-light">Help Anytime, Anywhere</p>
              </div>
            </div>

            <div className="info-box info-box-icon-left col-sm-6 col-lg-3">
              <MdPayment size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">SECURE PAYMENT</h4>
                <p className="font-weight-light">Pay with Confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MostViewedCarosuel />

      <BestSellerElectronics />
      <RecentProductsCarosuel />
{/* 
      <section className="recent-products">
        <div className="container">
          <div
            className="banner banner3 bg-dark  "
            data-animation-name="fadeIn"
            data-animation-delay="200"
          >
            <div className="row m-0 no-gutters align-items-center">
              <div className="col-md-6 col-lg-3 align-self-baseline">
                <figure>
                  <img
                    src="/assets/Images/demoes/demo22/banners/banner-3.jpg"
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
      </section> */}

      {/* <ElectronicSection /> */}
      {/* <TopBrand /> */}
    </Layout>
  );
}

export default Home;
