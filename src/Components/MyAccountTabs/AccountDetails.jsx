import React, { useEffect, useState, useMemo, useCallback } from "react";
import { makePostRequest } from "../../Apis";
import { useSelector } from "react-redux";

function AccountDetails({ id }) {
  const user = useSelector((state) => state.user.value);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null); // State to manage API response message
  const [updatedInfo, setUpdatedInfo] = useState({
    customer_id: user?.logged_id,
    full_name: "",
    contact_no: "",
  });

  const fetchUserInfo = useCallback(async () => {
    if (!user?.logged_id) return;
    try {
      const response = await makePostRequest("auth/customer-info", {
        customer_id: user?.logged_id,
      });
      setUserInfo(response?.data);
      setUpdatedInfo((prevInfo) => ({
        ...prevInfo,
        full_name: response?.data?.full_name || "",
        contact_no: response?.data?.contact_no || "",
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [user?.logged_id]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await makePostRequest(
        "auth/customer-update",
        updatedInfo
      );
      setUserInfo(response?.data);
      setResponseMessage({
        status: response.status,
        message: response.message,
      });
    } catch (error) {
      setResponseMessage({
        status: "error",
        message: "Error updating profile",
      });
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setResponseMessage(null), 3000); // Hide message after 3 seconds
    }
  };

  const renderMessage = useMemo(() => {
    if (!responseMessage) return null;
    const alertClass =
      responseMessage.status === "success" ? "alert-success" : "alert-danger";
    return (
      <div className={`alert ${alertClass}`} role="alert">
        {responseMessage.message}
      </div>
    );
  }, [responseMessage]);

  return (
    <div className="tab-pane fade" id={id} role="tabpanel">
      <h3 className="account-sub-title d-none d-md-block mt-0 pt-1 ml-1">
        <i className="icon-user-2 align-middle mr-3 pr-1"></i>Account Details
      </h3>
      <div className="account-content">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="acc-name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={updatedInfo.full_name}
                  placeholder="Enter Your Full Name"
                  id="acc-name"
                  name="full_name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-4">
                <label htmlFor="acc-contact">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="acc-contact"
                  name="contact_no"
                  value={updatedInfo.contact_no}
                  placeholder="Enter Your Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="acc-email">
              Email address <span className="required">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="acc-email"
              value={userInfo?.email}
              name="acc-email"
              placeholder="editor@gmail.com"
              readOnly
            />
          </div>

          {renderMessage}

          <div className="form-footer mt-3 mb-0">
            <button
              type="submit"
              className="btn btn-dark mr-0"
              disabled={loading}
            >
              {loading ? "Updating..." : "Edit Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountDetails;
