import React, { useEffect, useState } from "react";
import { makePostRequest } from "../Apis";

import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import { toast, ToastContainer } from "react-toastify";

function VerifyAccount() {
  const { slug } = useParams(); // Extract the slug from the URL
  const [code, setCode] = useState(slug || ""); // Set the initial state to the slug
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (slug) {
      setCode(slug); // Set the slug value to the input when the component mounts
    }
  }, [slug]);

  const handleInputChange = (e) => {
    setCode(e.target.value); // Update the code state when the input changes
  };

  const handleVerifyAccount = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await makePostRequest("auth/verify-customer", { code });

      if (response?.status === "success") {
        toast.success("Verification successful! Redirecting...");
        navigate("/login"); 
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
            <h1>Verify Your Account</h1>
          </div>
        </div>

        <div className="container login-container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form method="post" onSubmit={handleVerifyAccount}>
                <label htmlFor="code">
                  Code <span className="required">*</span>
                </label>
                <input
                  name="code"
                  type="text"
                  className="form-input form-wide"
                  id="code"
                  required
                  placeholder="Paste Your Code Here...."
                  value={code} // Bind the input value to the code state
                  onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-dark btn-md w-100">
                  {loading ? "Please Wait..." : "Verify"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer/>
    </Layout>
  );
}

export default VerifyAccount;
