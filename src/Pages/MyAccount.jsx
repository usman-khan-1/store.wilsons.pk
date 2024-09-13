import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData } from "../Store/UserSlice";
import AccountDetails from "../Components/MyAccountTabs/AccountDetails";
import Addresses from "../Components/MyAccountTabs/Addresses";
import ChangePassword from "../Components/MyAccountTabs/ChangePassword";

function MyAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => (dispatch(clearUserData()), navigate("/login"));

  return (
    <Layout>
      <main className="main">
        <div className="page-header">
          <div className="container d-flex flex-column align-items-center">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
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

        <div className="container account-container custom-account-container">
          <div className="row">
            <div className="sidebar widget widget-dashboard mb-lg-0 mb-3 col-lg-3 order-0">
              <h2 className="text-uppercase">My Account</h2>
              <ul className="nav nav-tabs list flex-column mb-0" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="dashboard-tab"
                    data-toggle="tab"
                    href="#dashboard"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="true"
                  >
                    Dashboard
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="address-tab"
                    data-toggle="tab"
                    href="#address"
                    role="tab"
                    aria-controls="address"
                    aria-selected="false"
                  >
                    Addresses
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="edit-tab"
                    data-toggle="tab"
                    href="#edit"
                    role="tab"
                    aria-controls="edit"
                    aria-selected="false"
                  >
                 Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="change-password-tab"
                    data-toggle="tab"
                    href="#change_password"
                    role="change_password"
                    aria-controls="change_password"
                    aria-selected="false"
                  >
                    change password
                  </a>
                </li>

                <li className="nav-item" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
            <div className="col-lg-9 order-lg-last order-1 tab-content">
              <div
                className="tab-pane fade show active"
                id="dashboard"
                role="tabpanel"
              >
                <div className="dashboard-content">
                  <div className="row row-lg">
                    <div className="col-6 col-md-3">
                      <Link to={"/my-orders"} className="link-to-tab">
                        <div className="feature-box text-center pb-4">
                          <i className="sicon-social-dropbox"></i>
                          <div className="feature-box-content">
                            <h3>ORDERS</h3>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="col-6 col-md-3">
                      <div className="feature-box text-center pb-4">
                        <a href="#address" className="link-to-tab">
                          <i className="sicon-location-pin"></i>
                        </a>
                        <div className="feature-box-content">
                          <h3>ADDRESSES</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-3">
                      <div className="feature-box text-center pb-4">
                        <a href="#edit" className="link-to-tab">
                          <i className="icon-user-2"></i>
                        </a>
                        <div className="feature-box-content p-0">
                          <h3>ACCOUNT DETAILS</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-3">
                      <Link to={"/wishlist"}>
                        <div className="feature-box text-center pb-4">
                          <i className="sicon-heart"></i>
                          <div className="feature-box-content">
                            <h3>WISHLIST</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <AccountDetails
                id={"edit"}
              
              />

              <Addresses id={"address"} />
              <ChangePassword id={"change_password"} />

           
           
            </div>
          </div>
        </div>

        <div className="mb-5"></div>
      </main>
    </Layout>
  );
}

export default MyAccount;
