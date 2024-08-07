import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function ReturnPolicy() {
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
              Return Policy
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
                Return Policy
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
            <p>
              WILMART is committed to supply fresh stock at the time of
              delivery.
            </p>
            <p>
              Products in original & un-tampered condition can be exchanged or
              returned within 7 days from the date of receipt.
            </p>
            <p>
              This policy does not apply to products purchased on “Special
              Offer” and on fridge items.
            </p>
            <ul>
              <li>Opened items will not be exchanged or returned.</li>
              <li>
                Original receipt will be required for the returned item(s).
              </li>
              <li>
                In case of return via courier, customer will bear the return
                courier charges. No charges applicable on return at WILMART.
              </li>
            </ul>

            <h2 className="subtitle">Return / Exchange Process</h2>
            <ul>
              <li>
                Immediately inform us about the product you want to return
                within 7 days of receiving the product by writing to{" "}
                <b>contact@WILMART.pk</b> with your order number in the subject.
              </li>
              <li>Ship the product to our store address (WILMART)</li>
              <li>Make sure to include the invoice in the return parcel.</li>
              <li>
                We will process your return within 3 working days of receiving
                your return order.
              </li>
            </ul>
            <h2 className="subtitle">Return Payment</h2>
            <p>
              In case the product is shipped back to our store via courier, the
              payment will be transferred to your online bank account that you
              will have to provide us by emailing at contact WILMART
            </p>
            <p>
              In case your return the product by hand at the store, the payment
              can be returned by cash.
            </p>
            <p>
              In case of any issues/concerns, please write to{" "}
              <b>contact@WILMART.pk</b> with your order number in the subject.
            </p>

            {/* <p className="lead">
              “ Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model search for evolved over
              sometimes by accident, sometimes on purpose ”
            </p> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ReturnPolicy;
