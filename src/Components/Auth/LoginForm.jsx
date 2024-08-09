import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makePostRequest } from "../../Apis";
import { useDispatch } from "react-redux";
import { setUserData } from "../../Store/UserSlice";
import { toast } from "react-toastify";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginCredentials({ ...loginCredentials, [e.target.id]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await makePostRequest(
        "auth/login-customer",
        loginCredentials
      );

      dispatch(setUserData(response?.data));

      if (response?.status === "success") {
        setLoginCredentials({
          email: "",
          password: "",
        });
        toast.success(response?.message);
        setTimeout(() => {
          navigate("/myAccount");
        }, 2000);
        setLoading(false);
      } else {
        toast.error(response?.message);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching videos data:", error);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label htmlFor="email">
        Username or email address
        <span className="required">*</span>
      </label>
      <input
        type="email"
        className="form-input form-wide"
        id="email"
        value={loginCredentials.email}
        onChange={handleLoginChange}
        required
      />

      <label htmlFor="password">
        Password
        <span className="required">*</span>
      </label>
      <input
        type="password"
        className="form-input form-wide"
        id="password"
        value={loginCredentials.password}
        onChange={handleLoginChange}
        required
      />

      <div className="form-footer">
        <div className="custom-control custom-checkbox mb-0">
          <input
            type="checkbox"
            className="custom-control-input"
            id="remember-me"
          />
          <label className="custom-control-label mb-0" htmlFor="remember-me">
            Remember me
          </label>
        </div>

        <Link
          // to="/forgot-password"
          className="forget-password text-dark form-footer-right"
        >
          Forgot Password?
        </Link>
      </div>
      <button type="submit" className="btn btn-dark btn-md w-100">
        {loading ? "Please Wait.." : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
