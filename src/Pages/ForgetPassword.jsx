import React, { useEffect, useState } from "react";
import { makePostRequest } from "../Apis";

import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import { useDispatch } from "react-redux";
import { setUserData } from "../Store/UserSlice";

function ForgetPassword() {
  const { slug } = useParams(); // Extract the slug from the URL
  const [code, setCode] = useState(slug || ""); // Set the initial state to the slug
  const [newPassword, setNewPassword] = useState(""); // Set the initial state to the slug
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (slug) {
      setCode(slug); // Set the slug value to the input when the component mounts
    }
  }, [slug]);

  const handleInputChange = (e) => {
    setCode(e.target.value); // Update the code state when the input changes
  };
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value); // Update the newPassword state when the password input changes
  };

  const handleVerifyAccount = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://apis.wilsons.pk/auth/forget-password-customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "wilson-api-key": "4575f1bc766790287f077b425b960a52",
          },
          body: JSON.stringify({
            code: code,
            new_password: newPassword,
            action: "change_password",
          }),
        }
      );

      const data = await response.json();

  

      if (data?.status === "success") {
        setMessage({ text: data?.message, type: "success" });
        console.log("dataaaa",data)
        setTimeout(() => {
          navigate("/login");
        }, 2000);

      } else {
       
        setMessage({
          text: data?.message,
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "An error occurred. Please try again.",
        type: "error",
      });
      console.error("Error verifying account:", error);
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
            <h1>Forget Password</h1>
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
                <label htmlFor="code">
                  New Password <span className="required">*</span>
                </label>
                <input
                  name="new_password"
                  type="text"
                  className="form-input form-wide"
                  id="new_password"
                  required
                  placeholder="Enter New Password...."
                  value={newPassword} // Bind the input value to the code state
                  onChange={handlePasswordChange}
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
                  {loading ? "Please Wait..." : "Change Password"}
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

export default ForgetPassword;
