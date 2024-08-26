import React, { useEffect, useState } from "react";
import { makePostRequest } from "../../Apis";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterForm() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

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
        toast.success(response?.message);
      } else if (response?.status === "fail") {
        toast.error(response?.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error");
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
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
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

        <div
          className="password-input-container"
          style={{ position: "relative" }}
        >
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="form-input form-wide"
            value={registerCredentials.password}
            onChange={handleRegisterChange}
            required
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-90%)",
              cursor: "pointer",
            }}
          >
            {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
          </span>
        </div>

        <div className="form-footer mb-2">
          <button type="submit" className="btn btn-dark btn-md w-100 mr-0">
            {loading ? "Please Wait.." : "Register"}
          </button>
        </div>
      </form>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 15000,
          style: {
            display: "none",
          },
        }}
        position="top-right"
      />
    </>
  );
}

export default RegisterForm;
