import React, { useEffect, useState } from "react";
import { makePostRequest } from "../../Apis";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [registerCredentials, setRegisterCredentials] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // Save register credentials
    setLoading(true);
    try {
      const response = await makePostRequest(
        "auth/customer-register",
        registerCredentials
      );
      // setProducts(response?.data);
      setRegisterCredentials({
        full_name: "",
        email: "",
        phone: "",
        password: "",
      });
      setLoading(false);

      if (response?.status === "success") {
        navigate("/registration-success");
        // toast.success(response?.message);
      } else if (response?.status === "fail") {
        toast.error(response?.message);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching videos data:", error);
    }
    console.log("Register Credentials:", registerCredentials);
  };

  const handleRegisterChange = (e) => {
    setRegisterCredentials({
      ...registerCredentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <label htmlFor="register-fullName">
        Full Name
        <span className="required">*</span>
      </label>
      <input
        id="full_name"
        type="text"
        className="form-input form-wide"
        value={registerCredentials.full_name}
        onChange={handleRegisterChange}
        required
      />

      <label htmlFor="register-email">
        Email address
        <span className="required">*</span>
      </label>
      <input
        id="email"
        type="email"
        className="form-input form-wide"
        value={registerCredentials.email}
        onChange={handleRegisterChange}
        required
      />

      <label htmlFor="register-phone">
        Phone
        <span className="required">*</span>
      </label>
      <input
        id="phone"
        type="tel"
        className="form-input form-wide"
        value={registerCredentials.phone}
        onChange={handleRegisterChange}
        required
      />

      <label htmlFor="register-password">
        Password
        <span className="required">*</span>
      </label>
      <input
        id="password"
        type="password"
        className="form-input form-wide"
        value={registerCredentials.password}
        onChange={handleRegisterChange}
        required
      />

      <div className="form-footer mb-2">
        <button type="submit" className="btn btn-dark btn-md w-100 mr-0">
          {loading ? "Please Wait.." : "Register"}
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default RegisterForm;
