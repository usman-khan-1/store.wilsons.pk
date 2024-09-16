import React from "react";
import { Button, Modal } from "react-bootstrap";

function EditAddressModal({
  showEdit,
  handleCloseEdit,
  editAddress,
  handleEditChange,
  loading,
  handleEditAddress,

}) {
  return (
    <Modal show={showEdit} onHide={handleCloseEdit}>
      <Modal.Header>
        <Modal.Title>Edit Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="address account-content mt-0 pt-2">
          <h4 className="title">Billing address</h4>
          <form className="mb-2">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label>
                    Full name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="full_name"
                    value={editAddress?.full_name || ""}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label>
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="contact_no"
                    value={editAddress?.contact_no || ""}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Street address <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House number or street name"
                    name="address"
                    value={editAddress?.address || ""}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Town / City <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={editAddress?.city || ""}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Postcode / ZIP <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="postal_code"
                    value={editAddress?.postal_code || ""}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </div>
              {/* <div className="col-md-6 d-flex align-items-center">
              <div className="form-group d-flex align-items-center mb-0">
                <input
                  type="checkbox"
                  name="default"
                  checked={editAddress?.default || false}
                  onChange={() =>
                    setEditAddress((prev) => ({
                      ...prev,
                      default: !prev.default,
                    }))
                  }
                />
                <label className="ml-2">Set as default address</label>
              </div>
            </div> */}
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEdit}>
          Close
        </Button>
        <Button
          onClick={handleEditAddress}
          variant="primary"
          disabled={loading}
        >
          {loading ? "Updating Address..." : "Update Address"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditAddressModal;
