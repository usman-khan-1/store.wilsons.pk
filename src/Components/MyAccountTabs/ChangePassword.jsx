import React, { useState } from "react";
import { makePostRequest } from "../../Apis";
import { useSelector } from "react-redux";

function ChangePassword({ id }) {
  const user = useSelector((state) => state.user.value);
  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [message, setMessage] = useState(""); // Added state for messages

  // Update the state when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  // Handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwords.new_password !== passwords.confirm_password) {
      setMessage({
        text: "New password and confirmation do not match.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await makePostRequest("auth/customer-password-update", {
        customer_id: user?.logged_id,
        form_data: {
          old_password: passwords.old_password,
          new_password: passwords.new_password,
        },
      });

      if (response.status === "success") {
        setMessage({ text: response.message, type: "success" });
        setPasswords({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
      } else {
        setMessage({
          text: response.message || "An error occurred. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setMessage({
        text: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 2000); // Clear the message after 2 seconds
    }
  };

  return (
    <div className="tab-pane fade" id={id} role="tabpanel">
      <h3 className="account-sub-title d-none d-md-block mt-0 pt-1 ml-1">
      <i className="fas fa-lock align-middle mr-3 pr-1"></i>Change Password
      </h3>
      <div className="account-content">
        <form onSubmit={handleSubmit}>
          <div className="change-password">
            {/* <h3 className="text-uppercase mb-2">Password Change</h3> */}

            <div className="form-group">
              <label htmlFor="acc-old-password">
                Current Password 
              </label>
              <input
                type="password"
                className="form-control"
                id="acc-old-password"
                name="old_password"
                value={passwords.old_password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="acc-new-password">
                New Password 
              </label>
              <input
                type="password"
                className="form-control"
                id="acc-new-password"
                name="new_password"
                value={passwords.new_password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="acc-confirm-password">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                id="acc-confirm-password"
                name="confirm_password"
                value={passwords.confirm_password}
                onChange={handleChange}
              />
            </div>

            {message && (
              <p
                className={`mt-2 ${
                  message.type === "success" ? "text-success" : "text-danger"
                }`}
              >
                {message.text}
              </p>
            )}
          </div>

          <div className="form-footer mt-3 mb-0">
            <button type="submit" className="btn btn-dark mr-0">
              {loading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
