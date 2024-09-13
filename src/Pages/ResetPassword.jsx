import React, { useEffect, useState } from "react";
import { makePostRequest } from "../Apis";

import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import toast, { Toaster } from "react-hot-toast";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("email", email);

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
        // navigate("/verify-success");
      } else {
        toast.error("Verification failed. Please check your code.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error verifying account:", error);
    } finally {
      setLoading(false);
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

                <button type="submit" className="btn btn-dark btn-md w-100">
                  {loading ? "Please Wait..." : "Send Email"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Toaster position="top-right" reverseOrder={true} />
    </Layout>
  );
}

export default ResetPassword;
