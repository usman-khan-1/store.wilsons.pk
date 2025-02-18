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
                  src="/assets/imagess/category-2.jpeg"
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
                  src="/assets/imagess/category-1.jpeg"
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
            <div className="col-sm-6 col-lg-3 info-box  ">
              <FaShippingFast size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">
                  FREE SHIPPING &amp; RETURN
                </h4>
                <p className="font-weight-light">
                  Free shipping on orders over PKR 1600.
                </p>
              </div>
            </div>

            <div className="info-box  col-sm-6 col-lg-3">
              <RiMoneyDollarCircleLine size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">
                  MONEY BACK GUARANTEE
                </h4>
                <p className="font-weight-light">100% money back guarantee</p>
              </div>
            </div>

            <div className="info-box  col-sm-6 col-lg-3">
              <PiTimerBold size={30} className="me-5" />

              <div className="info-box-content">
                <h4 className="font1 line-height-1 ls-10">
                  ONLINE SUPPORT 24/7
                </h4>
                <p className="font-weight-light">Help Anytime, Anywhere</p>
              </div>
            </div>

            <div className="info-box  col-sm-6 col-lg-3">
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


      {/* <ElectronicSection /> */}
      {/* <TopBrand /> */}
    </Layout>
  );
}

export default Home;
