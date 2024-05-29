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

     
    </Layout>
  );
}

export default Home;
