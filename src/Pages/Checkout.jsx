import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Checkoutform from "../Components/Checkoutform";
import { setCartItems, setUserDetails } from "../Store/OrderSlice";
import { makePostRequest } from "../Apis";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderDeatils = useSelector((state) => state.order.orderDetails);
  const user = useSelector((state) => state.user.value);
  const [accountPassword, setAccountPassword] = useState(""); // State for account password
  const [createAccount, setCreateAccount] = useState(false);

  console.log("orderDeatils", orderDeatils);

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

  const handlePasswordChange = (e) => {
    setAccountPassword(e.target.value);
  };

  const handleCreateAccountChange = (e) => {
    setCreateAccount(e.target.checked);
  };

  const handlePlaceOrder = async () => {
    dispatch(setCartItems(cartItems));
    dispatch(setUserDetails(formData));

    if (createAccount && !user) {
      try {
        const response = await makePostRequest("auth/customer-register", {
          full_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          password: accountPassword,
        });
        // Handle success (e.g., show a success message, redirect, etc.)
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Account creation failed:", error);
      }
    }
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
                          checked={createAccount}
                          onChange={handleCreateAccountChange}
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
                          value={accountPassword}
                          onChange={handlePasswordChange}
                          required={createAccount}
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
                        <h4 className="m-b-sm">Payment Method</h4>

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
                              Credit Card
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
                  onClick={handlePlaceOrder}
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
