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
              "50%/cover #D4E1EA url(/assets/imagess/shipping.jpg)",
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
            <p>
              Enjoy Free Shipping across Pakistan on all orders above PKR 2,500.
            </p>

            <p className="lead">
              Why charge a shipping cost on orders below PKR 2,500?
            </p>
            <p>
              It'll be unfair to expect free shipping on a 300-rupee order,
              after all, shipping has a cost too
            </p>
            <h2 className="subtitle">Note:</h2>
            <p className="lead">Shipping is available all over Pakistan.</p>
            <p>
              Please allow maximum 3 working days for delivery (may change
              during special events or situations in the country).
            </p>
            <p>
              Goods will be delivered to your postal address given during
              check-out.
            </p>
            <p className="lead">For Cash On Delivery Orders:</p>
            <p>Payment will be collected at the time of delivery.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ShippingPolicy;
