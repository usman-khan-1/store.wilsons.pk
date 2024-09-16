import React from "react";
import { Button, Modal } from "react-bootstrap";

function NewAddressModal({
  showAdd,
  handleCloseAdd,
  newAddress,
  handleChange,
  loading,
  handleAddAddress,
}) {
  return (
    <Modal show={showAdd} onHide={handleCloseAdd}>
      <Modal.Header>
        <Modal.Title>Add New Address</Modal.Title>
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
                    value={newAddress.full_name}
                    onChange={handleChange}
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
                    value={newAddress.contact_no}
                    onChange={handleChange}
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
                    value={newAddress.address}
                    onChange={handleChange}
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
                    value={newAddress.city}
                    onChange={handleChange}
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
                    value={newAddress.postal_code}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* <div className="col-md-6 d-flex align-items-center">
                  <div className="form-group d-flex align-items-center mb-0">
                    <input
                      type="checkbox"
                      name="default"
                      checked={newAddress.default}
                      onChange={() =>
                        setNewAddress((prev) => ({
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
        <Button variant="secondary" onClick={handleCloseAdd}>
          Close
        </Button>
        <Button onClick={handleAddAddress} variant="primary" disabled={loading}>
          {loading ? "Adding Address..." : "Add Address"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewAddressModal;
