import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function ShippingPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <main className="main about">
        <div
          className="page-header page-header-bg text-left"
          style={{
            background:
              "50%/cover #D4E1EA url(/assets/Images/page-header-bg.jpg)",
          }}
        >
          <div className="container">
            <h1>
              {/* <span>ABOUT US</span> */}
               Shipping Policy
            </h1>
            {/* <a className="btn btn-dark">Contact</a> */}
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
                Shipping Policy
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
            <h2 className="subtitle">OUR STORY</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <p className="lead">
              “ Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model search for evolved over
              sometimes by accident, sometimes on purpose ”
            </p>
          </div>
        </div>

      
          
      </main>
    </Layout>
  );
}

export default ShippingPolicy;
