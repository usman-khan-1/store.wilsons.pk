import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData } from "../Store/UserSlice";
import AccountDetails from "../Components/MyAccountTabs/AccountDetails";
import Addresses from "../Components/MyAccountTabs/Addresses";

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
                    Account details
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

              <div className="tab-pane fade" id="edit" role="tabpanel">
                <h3 className="account-sub-title d-none d-md-block mt-0 pt-1 ml-1">
                  <i className="icon-user-2 align-middle mr-3 pr-1"></i>Account
                  Details
                </h3>
                <div className="account-content">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="acc-name">
                            First name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Editor"
                            id="acc-name"
                            name="acc-name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="acc-lastname">
                            Last name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="acc-lastname"
                            name="acc-lastname"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="acc-text">
                        Display name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="acc-text"
                        name="acc-text"
                        placeholder="Editor"
                        required
                      />
                      <p>
                        This will be how your name will be displayed in the
                        account section and in reviews
                      </p>
                    </div>

                    <div className="form-group mb-4">
                      <label htmlFor="acc-email">
                        Email address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="acc-email"
                        name="acc-email"
                        placeholder="editor@gmail.com"
                        required
                      />
                    </div>

                    <div className="change-password">
                      <h3 className="text-uppercase mb-2">Password Change</h3>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          Current Password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-password"
                          name="acc-password"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          New Password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-new-password"
                          name="acc-new-password"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-confirm-password"
                          name="acc-confirm-password"
                        />
                      </div>
                    </div>

                    <div className="form-footer mt-3 mb-0">
                      <button type="submit" className="btn btn-dark mr-0">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="change_password"
                role="tabpanel"
              >
                <h3 className="account-sub-title d-none d-md-block mt-0 pt-1 ml-1">
                  <i className="icon-user-2 align-middle mr-3 pr-1"></i>Account
                  Details
                </h3>
                <div className="account-content">
                  <form action="#">
                    <div className="change-password">
                      <h3 className="text-uppercase mb-2">Password Change</h3>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          Current Password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-password"
                          name="acc-password"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          New Password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-new-password"
                          name="acc-new-password"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-confirm-password"
                          name="acc-confirm-password"
                        />
                      </div>
                    </div>

                    <div className="form-footer mt-3 mb-0">
                      <button type="submit" className="btn btn-dark mr-0">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5"></div>
      </main>
    </Layout>
  );
}

export default MyAccount;
