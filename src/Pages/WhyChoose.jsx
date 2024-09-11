import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function WhyChoose() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <main className="main about">
        <div
          className="page-header page-header-bg text-left"
          style={{
            background:
              "50%/cover #D4E1EA url(/assets/imagess/company-profile.jpg)",
          }}
        >
          <div className="container">
            <h1> Why Choose WILMART</h1>
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Why Choose WILMART
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
            <h2 className="subtitle">Why Choose WILMART?</h2>
            <p>
              WILMART is more than just an online store; it's your all-in-one
              healthcare hub. We know how crucial timely medication is and the
              challenges of managing your health. That's why our mission is to
              make healthcare accessible, convenient, and empowering—so you can
              truly Live Better, Feel Better.
            </p>
         
            <h2 className="subtitle">1. Wide Range of Products</h2>
            <p>
            At WILMART, we bring you a vast selection of medicines and healthcare products all in one place. Whether you need prescription drugs, over-the-counter remedies, vitamins, supplements, or medical equipment, we've got you covered. Plus, explore our curated range of health and wellness essentials, from Bone Health and Skin Health to Immune Support, Digestive Care, Female Wellness, and Heart Health—everything you need to stay vibrant and healthy!
            </p>
            <h2 className="subtitle">2. Quality You Can Trust</h2>
            <p>
            When it comes to health, quality is paramount. We ensure that all products on our platform are genuine and meet the highest quality standards. Every product is thoroughly checked before it reaches you, so you can have peace of mind knowing that you’re getting the best.
            </p>
            <h2 className="subtitle">3. Easy and Secure Shopping Experience</h2>
            <p>
            We know how valuable your time is, so we’ve designed our website to be user-friendly and intuitive. You can easily browse through categories, search for specific products, and place your order in just a few clicks. Plus, our secure payment gateway ensures that your transactions are safe and your personal information is protected.
            </p>
            <h2 className="subtitle">4. Fast and Reliable Delivery</h2>
            <p>
            We understand that when it comes to medication, timing is critical. That’s why we offer fast and reliable delivery services. Whether you need your medicine urgently or prefer to schedule your delivery at a convenient time, we’ve got you covered.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default WhyChoose;
