import React, {useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import LoginForm from "../Components/Auth/LoginForm";
import RegisterForm from "../Components/Auth/RegisterForm";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="main">
        <div className="page-header">
          <div className="container d-flex flex-column align-items-center">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={"/category"}>Shop</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My Account
                  </li>
                </ol>
              </div>
            </nav>
            <h1>My Account</h1>
          </div>
        </div>

        <div className="container login-container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="heading mb-1">
                    <h2 className="title">Login</h2>
                  </div>

                  <LoginForm />
                </div>
                <div className="col-md-6">
                  <div className="heading mb-1">
                    <h2 className="title">Register</h2>
                  </div>

                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Login;
