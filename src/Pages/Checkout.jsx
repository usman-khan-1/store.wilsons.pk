import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });
  console.log("formData", formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();

  return (
    <Layout>
      <main className="main main-test">
        <div className="container checkout-container">
          <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
            <li>
              <Link to={"/cart"}>Shopping Cart</Link>
            </li>
            <li className="active">
              <Link>Checkout</Link>
            </li>
            <li className="disabled">
              <Link href="#">Order Complete</Link>
            </li>
          </ul>

          {/* <div className="login-form-container">
                    <h4>Returning customer?
                        <button data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn btn-link btn-toggle ml-2">Login</button>
                    </h4>

                    <div id="collapseOne" className="collapse">
                        <div className="login-section feature-box">
                            <div className="feature-box-content">
                                <form action="#" id="login-form">
                                    <p>
                                        If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.
                                    </p>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-0 pb-1">Username or email <span
                                                        className="required">*</span></label>
                                                <input type="email" className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-0 pb-1">Password <span
                                                        className="required">*</span></label>
                                                <input type="password" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn">LOGIN</button>

                                    <div className="form-footer mb-1">
                                        <div className="custom-control custom-checkbox mb-0 mt-0">
                                            <input type="checkbox" className="custom-control-input" id="lost-password" />
                                            <label className="custom-control-label mb-0"  htmlFor="lost-password">Remember
                                                me</label>
                                        </div>

                                        <a  className="forget-password">Lost your password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-discount">
                    <h4>Have a coupon?
                        <button data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne" className="btn btn-link btn-toggle ml-2">ENTER YOUR CODE</button>
                    </h4>

                    <div id="collapseTwo" className="collapse">
                        <div className="feature-box">
                            <div className="feature-box-content">
                                <p>If you have a coupon code, please apply it below.</p>

                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-sm w-auto" placeholder="Coupon code" required="" />
                                        <div className="input-group-append">
                                            <button className="btn btn-sm mt-0" type="submit">
                                                Apply Coupon
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}

          <div className="row">
            <div className="col-lg-7">
              <ul className="checkout-steps">
                <li>
                  <h2 className="step-title">Billing details</h2>

                  <form id="checkout-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            First name
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Last name
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-1 pb-2">
                      <label>
                        Street address
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        placeholder="House number and street name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Town / City
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Postcode / Zip
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Phone{" "}
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Email address
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="create-account"
                        />
                        <label
                          className="custom-control-label"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-controls="collapseThree"
                          htmlFor="create-account"
                        >
                          Create an account?
                        </label>
                      </div>
                    </div>

                    <div id="collapseThree" className="collapse">
                      <div className="form-group">
                        <label>
                          Create account password
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="order-comments">
                        Order notes (optional)
                      </label>
                      <textarea
                        className="form-control"
                        name="orderNotes"
                        value={formData.orderNotes}
                        onChange={handleInputChange}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea>
                    </div>

                  
                  </form>
                </li>
              </ul>
            </div>

            <div className="col-lg-5">
              <div className="order-summary">
                <h3>YOUR ORDER</h3>

                <table className="table table-mini-cart">
                  <thead>
                    <tr>
                      <th colSpan="2">Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((data, index) => (
                      <tr key={index}>
                        <td className="product-col">
                          <h3 className="product-title">
                            {data?.heading} ×
                            <span className="product-qty">
                              {" "}
                              {data?.quantity}
                            </span>
                          </h3>
                        </td>

                        <td className="price-col">
                          <span>
                            Rs. {""}
                            {data?.quantity * data?.price}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="cart-subtotal">
                      <td>
                        <h4>Subtotal</h4>
                      </td>

                      <td className="price-col">
                        <span>
                          Rs. {""}
                          {subtotal}
                        </span>
                      </td>
                    </tr>
                    <tr className="order-shipping">
                      <td className="text-left" colSpan="2">
                        <h4 className="m-b-sm">Delivery</h4>

                        <div className="form-group form-group-custom-control">
                          <div className="custom-control custom-radio d-flex">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="radio"
                            />
                            <label className="custom-control-label">
                              Cash On Delivery
                            </label>
                          </div>
                        </div>

                        <div className="form-group form-group-custom-control mb-0">
                          <div className="custom-control custom-radio d-flex mb-0">
                            <input
                              type="radio"
                              name="radio"
                              className="custom-control-input"
                            />
                            <label className="custom-control-label">
                              Other Payment Method
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="order-total">
                      <td>
                        <h4>Total</h4>
                      </td>
                      <td>
                        <b className="total-price">
                          <span>
                            {" "}
                            Rs. {""}
                            {subtotal}
                          </span>
                        </b>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <div className="payment-methods">
                  <h4 className="">Payment methods</h4>
                  <div className="info-box with-icon p-0">
                    <p>
                      Sorry, it seems that there are no available payment
                      methods for your state. Please contact us if you require
                      assistance or wish to make alternate arrangements.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark btn-place-order"
                  form="checkout-form"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Checkout;
