import React, { useEffect, useState } from "react";
import { makePostRequest } from "../Apis";

import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
// import toast, { Toaster } from "react-hot-toast";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // Added state for messages

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyAccount = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await makePostRequest("auth/forget-password-customer", {
        action: "send_email",
        email: email,
      });

      if (response?.status === "success") {
        setEmail("");
        setMessage({ text: response?.message, type: "success" });
        // navigate("/verify-success");
      } else {
        setEmail("");
        setMessage({
          text: response?.message,
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <Layout>
      <main className="main">
        <div className="page-header">
          <div className="container d-flex flex-column align-items-center">
            <h1>Reset Password</h1>
          </div>
        </div>

        <div className="container login-container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form method="post" onSubmit={handleVerifyAccount}>
                <label htmlFor="code">
                  Email <span className="required">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-input form-wide"
                  id="email"
                  required
                  placeholder="Enter Your Email Here...."
                  value={email} // Bind the input value to the code state
                  onChange={handleInputChange}
                />

                {message && (
                  <p
                    className={` ${
                      message.type === "success"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {message.text}
                  </p>
                )}

                <button type="submit" className="btn btn-dark btn-md w-100">
                  {loading ? "Please Wait..." : "Send Email"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* <Toaster position="top-right" reverseOrder={true} /> */}
    </Layout>
  );
}

export default ResetPassword;
