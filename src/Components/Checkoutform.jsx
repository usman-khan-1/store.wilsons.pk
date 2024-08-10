import React, { useState } from "react";
import { useSelector } from "react-redux";

function Checkoutform() {



  return (
    <ul className="checkout-steps">
      <li>
        <h2 className="step-title">Billing details</h2>

        <form id="checkout-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  First name
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Last name
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group mb-1 pb-2">
            <label>
              Street address
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              className="form-control"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              placeholder="House number and street name"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Town / City
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Postcode / Zip
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              className="form-control"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Phone{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Email address
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="create-account"
              />
              <label
                className="custom-control-label"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-controls="collapseThree"
                htmlFor="create-account"
              >
                Create an account?
              </label>
            </div>
          </div>

          <div id="collapseThree" className="collapse">
            <div className="form-group">
              <label>
                Create account password
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="order-comments">Order notes (optional)</label>
            <textarea
              className="form-control"
              name="orderNotes"
              value={formData.orderNotes}
              onChange={handleInputChange}
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </form>
      </li>
    </ul>
  );
}

export default Checkoutform;
