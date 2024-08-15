import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Checkoutform from "../Components/Checkoutform";
import { InputMask } from "primereact/inputmask";

import {
  clearOrderDetails,
  setCartItems,
  setUserDetails,
  setPaymentDetails,
} from "../Store/OrderSlice";
import { makePostRequest } from "../Apis";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderDeatils = useSelector((state) => state.order.orderDetails);
  const user = useSelector((state) => state.user.value);
  // const [accountPassword, setAccountPassword] = useState(""); // State for account password
  // const [createAccount, setCreateAccount] = useState(false);

  // console.log("orderDeatils", orderDeatils);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    zip_code: "",
    phone_no: "",
    email: "",
    remarks: "",
    password: "",
    create_account: false,
    delivery_amount: 0,
    total_amount: subtotal,
    promo_discount: 0,
  });

  const [paymentDetails, setPaymentDetails] = useState({
    payment_mode: "",
    card_number: "",
    card_name: "",
    card_cvv: "",
    card_expiry: "",
  });

  const [productDetail, setProductDetail] = useState(
    cartItems.map((item) => ({
      uid: item.uid,
      price: item.price,
      quantity: item.quantity,
    }))
  );

  // console.log("carttt", productDetail);
  // console.log("paymentDeatils", paymentDetails);
  console.log("form", formData);

  // useEffect(() => {
  //   setFormData({
  //     ...formData,
  //     create_account: createAccount,
  //   });
  // }, [createAccount]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePaymentModeChange = (mode) => {
    setPaymentDetails({
      payment_mode: mode,
      card_number: "",
      card_name: "",
      card_cvv: "",
      card_expiry: "",
    });
  };

  const handleCreateAccountChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      create_account: e.target.checked,
      password: e.target.checked ? prevData.password : "", // Reset password if unchecked
    }));
  };

  const validateForm = () => {
    if (!formData.first_name) {
      alert("Please enter your first name.");
      return false;
    }
    if (!formData.last_name) {
      alert("Please enter your last name.");
      return false;
    }
    if (!formData.address) {
      alert("Please enter your street address.");
      return false;
    }
    if (!formData.city) {
      alert("Please enter your city.");
      return false;
    }
    if (!formData.zip_code) {
      alert("Please enter your zip/postal code.");
      return false;
    }
    if (!formData.phone_no) {
      alert("Please enter your phone number.");
      return false;
    }
    if (!formData.email) {
      alert("Please enter your email address.");
      return false;
    }
    if (formData.create_account && !formData.password) {
      alert("Please enter a password to create an account.");
      return false;
    }
    return true;
  };
  const handlePlaceOrder = async () => {
    // if (!validateForm()) {

    //   return;
    // }

    try {
      const response = await makePostRequest("orders/add", {
        basic_info: formData,
        product_detail: productDetail,
        payment: paymentDetails,
      });
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Account creation failed:", error);
    }

    if (formData.create_account && !user) {
      try {
        const response = await makePostRequest("auth/customer-register", {
          full_name: `${formData.first_name} ${formData.last_name}`,
          email: formData.email,
          phone: formData.phone_no,
          password: formData.password,
        });
        // Handle success (e.g., show a success message, redirect, etc.)
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Account creation failed:", error);
      }
    }

    // Navigate to order success page or further order processing
    // navigate("/order-success");
  };

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
                            name="first_name"
                            value={formData.first_name}
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
                            name="last_name"
                            value={formData.last_name}
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
                        name="address"
                        value={formData.address}
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
                        Zip / Postal code
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Phone
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <InputMask
                        mask="+99 999 9999999"
                        className="form-control"
                        name="phone_no"
                        value={formData.phone_no}
                        type="tel"
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
                          checked={formData.create_account}
                          onChange={handleCreateAccountChange}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="create-account"
                        >
                          Create an account?
                        </label>
                      </div>
                    </div>

                    {formData.create_account && (
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
                          name="password"
                          className="form-control"
                          value={formData.password}
                          onChange={handleInputChange}
                          required={formData.create_account}
                        />
                      </div>
                    )}

                    <div className="form-group">
                      <label className="order-comments">
                        Order notes (optional)
                      </label>
                      <textarea
                        className="form-control"
                        name="remarks"
                        value={formData.remarks}
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
                            {data?.quantity * (+data?.price).toLocaleString()}
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
                          {subtotal.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                    <tr className="order-shipping">
                      <td className="text-left" colSpan="2">
                        <h4 className="m-b-sm">Payment Method</h4>

                        <div className="form-group form-group-custom-control">
                          <div className="custom-control custom-radio d-flex">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="payment_mode"
                              id="cod"
                              checked={paymentDetails.payment_mode === "cod"}
                              onChange={() => handlePaymentModeChange("cod")}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cod"
                            >
                              Cash On Delivery
                            </label>
                          </div>
                        </div>

                        <div className="form-group form-group-custom-control mb-0">
                          <div
                            className="custom-control custom-radio d-flex mb-0"
                            data-toggle="collapse"
                            href="#collapseExample"
                            role="button"
                            aria-expanded={paymentDetails.payment_mode === "cc"}
                            aria-controls="collapseExample"
                          >
                            <input
                              type="radio"
                              name="payment_mode"
                              className="custom-control-input"
                              id="cc"
                              checked={paymentDetails.payment_mode === "cc"}
                              onChange={() => handlePaymentModeChange("cc")}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cc"
                            >
                              Credit Card
                            </label>
                          </div>

                          <div
                            className={` ${
                              paymentDetails.payment_mode === "cc"
                                ? ""
                                : "d-none"
                            }`}
                            id="collapseExample"
                          >
                            <form className="m-0 mt-3">
                              <div className="form-group">
                                <label>
                                  Name on card
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  name="card_name"
                                  value={paymentDetails.card_name}
                                  onChange={handlePaymentInputChange}
                                  required={
                                    paymentDetails.payment_mode === "cc"
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>
                                  Card number
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <InputMask
                                mask="9999 9999 9999 9999 "
                                  type="tel"
                                  className="form-control"
                                  name="card_number"
                                  value={paymentDetails.card_number}
                                  onChange={handlePaymentInputChange}
                                  required={
                                    paymentDetails.payment_mode === "cc"
                                  }
                                />
                              </div>

                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>
                                      Expiration Date
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <InputMask
                                      mask="99/99"
                                      slotChar="MM/YY"
                                      type="tel"
                                      className="form-control"
                                      name="card_expiry"
                                      value={paymentDetails.card_expiry}
                                      onChange={handlePaymentInputChange}
                                      required={
                                        paymentDetails.payment_mode === "cc"
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>
                                      CVV
                                      <abbr
                                        className="required"
                                        title="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <InputMask
                                      type="tel"
                                      mask="9999"
                                      // placeholder="99/99/9999"
                                      // slotChar="mm/dd/yyyy"
                                      className="form-control"
                                      name="card_cvv"
                                      value={paymentDetails.card_cvv}
                                      onChange={handlePaymentInputChange}
                                      required={
                                        paymentDetails.payment_mode === "cc"
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
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
                            {subtotal.toLocaleString()}
                          </span>
                        </b>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <button
                  onClick={handlePlaceOrder}
                  type="button"
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
