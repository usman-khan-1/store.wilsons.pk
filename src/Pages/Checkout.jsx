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
  const [rxPrescription, setRxPrescription] = useState({
    file: null,
    base64: "",
    extension: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const hasRxItems = cartItems?.some((item) => item?.rx !== "0");

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
    payment_mode: "cod", // Default to Cash on Delivery
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
    // Clear validation error for the field being updated
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
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

  // const handleRxPrescriptionChange = (e) => {
  //   setRxPrescription(e.target.value);
  //   setValidationErrors((prevErrors) => ({
  //     ...prevErrors,
  //     rxPrescription: "",
  //   }));
  // };
  const handleRxPrescriptionChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Extract base64 string
        setRxPrescription({
          file,
          base64: base64String,
          extension: file.name.split(".").pop(), // Get file extension
        });
      };
      reader.readAsDataURL(file); // Convert file to base64
    }

    // Clear validation error for RX prescription
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      rxPrescription: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.full_name) {
      errors.full_name = "Please enter your full name";
    }
    if (!formData.phone_no) {
      errors.phone_no = "Please enter your phone number";
    }
    if (!formData.address) {
      errors.address = "Please enter your address";
    }
    if (!formData.city) {
      errors.city = "Please enter your city";
    }
    if (!formData.zip_code) {
      errors.zip_code = "Please enter your zip code";
    }
    if (!formData.email) {
      errors.email = "Please enter your email";
    }
    if (hasRxItems && !rxPrescription) {
      errors.rxPrescription = "Please upload your prescription";
    }
    if (formData.create_account && !formData.password) {
      errors.password = "Please create a password for your account";
    }
    if (!paymentDetails.payment_mode) {
      errors.payment_mode = "Please select a payment method";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      return;
    }

    if (cartItems?.length === 0) {
      setMessage({ text: "Your Cart Is Empty", type: "error" });
      return;
    }

    try {
      const orderData = {
        basic_info: formData,
        product_detail: productDetail,
        payment: paymentDetails,
      };

      if (hasRxItems && rxPrescription.base64) {
        orderData.rx_prescription = {
          file: rxPrescription.base64, // Send base64 string
          extension: rxPrescription.extension, // Send file extension
        };
      }

      const orderResponse = await makePostRequest("orders/add", orderData);

      navigate("/order-success", { state: orderResponse.data });
      dispatch(clearCart());
    } catch (error) {
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
      } catch (error) {
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
                  <form id="checkout-form">
                    {/* {hasRxItems && (
                      <div className="row">
                        <div className="col-12">
                          <h2 className="step-title mb-1 mt-0">Please Upload Prescription</h2>
                          <div className="form-group">
                            <label>
                              RX Prescription
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <textarea
                              rows="4"
                              className="form-control"
                              value={rxPrescription}
                              onChange={handleRxPrescriptionChange}
                              required
                            ></textarea>
                            {validationErrors.rxPrescription && (
                              <p className="text-danger">
                                {validationErrors.rxPrescription}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )} */}
                    {hasRxItems && (
                      <div className="row">
                        <div className="col-12">
                          <h2 className="step-title mb-1 mt-0">
                            Please Upload Prescription
                          </h2>
                          <div className="form-group">
                            {/* <label>
          RX Prescription
          <abbr className="required" title="required">
            *
          </abbr>
        </label> */}
                            <input
                              type="file"
                              className="form-control pt-3"
                              onChange={handleRxPrescriptionChange}
                              required
                            />
                            {validationErrors.rxPrescription && (
                              <p className="text-danger">
                                {validationErrors.rxPrescription}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    <h2 className="step-title my-2">Billing Details</h2>
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
                          {validationErrors.full_name && (
                            <p className="text-danger">
                              {validationErrors.full_name}
                            </p>
                          )}
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
                          {validationErrors.phone_no && (
                            <p className="text-danger">
                              {validationErrors.phone_no}
                            </p>
                          )}
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
                        {validationErrors.address && (
                          <p className="text-danger">
                            {validationErrors.address}
                          </p>
                        )}
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
                      {validationErrors.city && (
                        <p className="text-danger">{validationErrors.city}</p>
                      )}
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
                      {validationErrors.zip_code && (
                        <p className="text-danger">
                          {validationErrors.zip_code}
                        </p>
                      )}
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
                      {validationErrors.email && (
                        <p className="text-danger">{validationErrors.email}</p>
                      )}
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
                        {validationErrors.password && (
                          <p className="text-danger">
                            {validationErrors.password}
                          </p>
                        )}
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
                      <th colSpan="1">Product</th>
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
                          {data?.rx !== "0" && (
                              <p className="rx-prescription-label">
                                prescription required
                              </p>
                            )}
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
                        {validationErrors.payment_mode && (
                          <p className="text-danger">
                            {validationErrors.payment_mode}
                          </p>
                        )}
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
