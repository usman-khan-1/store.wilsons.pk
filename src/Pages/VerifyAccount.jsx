import React, { useEffect, useState } from "react";
import { makePostRequest } from "../Apis";
import { toast, Toaster } from "react-hot-toast";

function VerifyAccount() {
  const [code, setCode] = useState();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleVerifyAccount = async () => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await makePostRequest("auth/verify-customer", code);

      if (response.status === "success") {
        toast.success("Verification successful! Redirecting...");
        navigate("/myAccount");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching videos data:", error);
    }
  };
  return (
    <div>
      <main class="main">
        <div class="page-header">
          <div class="container d-flex flex-column align-items-center">
            <h1>Verify Your Account</h1>
          </div>
        </div>

        <div class="container login-container">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <form onSubmit={handleVerifyAccount}>
                <label for="login-email">
                  Code
                  <span class="required">*</span>
                </label>
                <input
                  name="code"
                  type="text"
                  class="form-input form-wide"
                  id="code"
                  required
                  placeholder="Paste Your Code Here...."
                  onChange={handleInputChange}
                />

                <button type="submit" class="btn btn-dark btn-md w-100">
                  {loading ? "Please Wait..." : "Verify"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}

export default VerifyAccount;
