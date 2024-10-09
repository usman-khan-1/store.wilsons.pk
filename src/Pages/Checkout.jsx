import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputMask } from "primereact/inputmask";

import { makePostRequest } from "../Apis";
import { clearCart } from "../Store/CartSlice";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.value);
  const [message, setMessage] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const shippingFee = subtotal < 1600 ? 250 : 0;
  const total = subtotal + shippingFee;

  const [formData, setFormData] = useState({
    full_name: "",
    last_name: "",
    address: "",
    city: "",
    zip_code: "",
    phone_no: "",
    email: "",
    remarks: "",
    password: "",
    create_account: false,
    delivery_amount: shippingFee,
    total_amount: subtotal,
    promo_discount: 0,
    final_amount: total,
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

  const handlePlaceOrder = async () => {
    // if (!validateForm()) {
    //   return;
    // }
    if (cartItems?.length === 0) {
      setMessage({ text: "Your Cart Is Empty", type: "error" });
      console.log("hellooo");
      return;
    }

    try {
      const orderResponse = await makePostRequest("orders/add", {
        basic_info: formData,
        product_detail: productDetail,
        payment: paymentDetails,
      });
      console.log("orderResponse", orderResponse);

      // Set the order response state and wait for it to be updated

      navigate("/order-success", { state: orderResponse.data });
      dispatch(clearCart());

      // Use the callback function of the setState to navigate after the state has been updated

      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Order placement failed:", error);
    } finally {
      setTimeout(() => setMessage(""), 2000);
    }

    if (formData.create_account && !user) {
      try {
        const response = await makePostRequest("auth/customer-register", {
          full_name: `${formData.full_name} ${formData.last_name}`,
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
  };
  const handleAddressSelect = (e) => {
    const selectedUid = e.target.value;
    const address = addresses.find((addr) => addr.uid === selectedUid);

    if (address) {
      setSelectedAddress(address);
      setFormData({
        ...formData,
        full_name: address.full_name,
        phone_no: address.contact_no,
        address: address.address,
        city: address.city,
        zip_code: address.postal_code,
      });
    }
  };

  const fetchAddresses = async () => {
    if (user?.logged_id) {
      try {
        const response = await makePostRequest("auth/customer-address-list", {
          customer_id: user.logged_id,
        });
        setAddresses(response?.data || []);
      } catch (error) {
        console.error("Error fetching addresses data:", error);
      }
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, [user?.logged_id]);

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
                            Full name
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
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
                      </div>
                    </div>

                    {addresses.length > 0 ? (
                      <div className="form-group">
                        <label>Select Address</label>
                        <select
                          className="form-control"
                          onChange={handleAddressSelect}
                        >
                          <option value="">Select an address</option>
                          {addresses.map((address) => (
                            <option key={address.uid} value={address.uid}>
                              {address.full_name} - {address.address}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
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
                    )}

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
                            {(data?.quantity * +data?.price).toLocaleString()}
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
                    <tr className="">
                      <td>
                        <h4>Shipping Fee</h4>
                      </td>

                      <td className="price-col">
                        <span>
                          Rs. {""}
                          {shippingFee}
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

                        {/* <div className="form-group form-group-custom-control mb-0">
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
                        </div> */}
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
                            {total.toLocaleString()}
                          </span>
                        </b>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                {message && (
                  <p
                    className={`mt-1 ${
                      message.type === "success"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {message.text}
                  </p>
                )}

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
