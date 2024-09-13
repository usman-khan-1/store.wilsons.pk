import React, { useEffect, useState } from "react";
import { makePostRequest } from "../../Apis";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";

function AddressesCopy({ id }) {
  const user = useSelector((state) => state.user.value);
  const [addresses, setAddresses] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedAddressUid, setSelectedAddressUid] = useState(null);
  const [newAddress, setNewAddress] = useState({
    customer_id: user?.logged_id,
    full_name: "",
    contact_no: "",
    address: "",
    city: "",
    postal_code: "",
    default: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("auth/customer-address-list", {
          customer_id: user?.logged_id,
        });
        setAddresses(response?.data || []);
      } catch (error) {
        console.error("Error fetching addresses data:", error);
      }
    };
    fetchData();
  }, [user?.logged_id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClose = () => {
    setShow(false);
    setIsEditMode(false);
    setSelectedAddressUid(null);
    setNewAddress({
      customer_id: user?.logged_id,
      full_name: "",
      contact_no: "",
      address: "",
      city: "",
      postal_code: "",
      default: false,
    });
  };

  const handleShow = (address = null) => {
    if (address) {
      setIsEditMode(true);
      setSelectedAddressUid(address.uid);
      setNewAddress(address);
    } else {
      setIsEditMode(false);
      setNewAddress((prevState) => ({
        ...prevState,
        default: addresses.length === 0,
      }));
    }
    setShow(true);
  };

  const handleAddOrEditAddress = async () => {
    setLoading(true);
    try {
      const endpoint = isEditMode
        ? "auth/customer-address-action"
        : "auth/customer-address-add";
      const payload = isEditMode
        ? { ...newAddress, uid: selectedAddressUid, fav_action: "update" }
        : { ...newAddress };

      const response = await makePostRequest(endpoint, payload);
      setLoading(false);

      if (isEditMode) {
        setAddresses((prevAddresses) =>
          prevAddresses.map((addr) =>
            addr.uid === selectedAddressUid ? response.data : addr
          )
        );
      } else {
        setAddresses((prevAddresses) => [...prevAddresses, response.data]);
      }

      handleClose();
    } catch (error) {
      setLoading(false);
      console.error("Error adding or editing address:", error);
    }
  };

  const handleDeleteAddress = async (uid) => {
    setLoading(true);
    try {
      await makePostRequest("auth/customer-address-action", {
        uid,
        fav_action: "",
      });
      setAddresses((prevAddresses) =>
        prevAddresses.filter((addr) => addr.uid !== uid)
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error deleting address:", error);
    }
  };

  return (
    <div className="tab-pane fade" id={id} role="tabpanel">
      <h3 className="account-sub-title d-none d-md-block mb-1">
        <i className="sicon-location-pin align-middle mr-3"></i>
        Address
      </h3>
      <div className="addresses-content">
        <p className="mb-4">
          The following address will be used on the checkout page by default.
        </p>

        <div className="addresses">
          {addresses.map((data) => (
            <div className="address" key={data.uid}>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1 text-center">
                  <input
                    type="checkbox"
                    name="default"
                    checked={data.default}
                    onChange={() =>
                      setNewAddress((prev) => ({
                        ...prev,
                        default: data.uid,
                      }))
                    }
                  />
                </div>
                <div className="col-lg-7 col-md-9 col-9">
                  <h4 className="text-dark ">{data.full_name}</h4>
                  <p className="mb-0">
                    {data.address}, {data.city}, {data.postal_code}
                  </p>
                  <p>{data.contact_no}</p>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12">
                  <button
                    className="btn btn-default address-action"
                    onClick={() => handleShow(data)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-default address-action"
                    onClick={() => handleDeleteAddress(data.uid)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="address col-md-12 mt-5 mt-md-0">
            <button
              onClick={() => handleShow()}
              className="btn btn-default address-action"
            >
              Add New Address
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {isEditMode ? "Edit Address" : "Add New Address"}
          </Modal.Title>
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
                <div className="col-md-6 d-flex align-items-center">
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
                    <label className="ml-2">
                      Set as default address
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleAddOrEditAddress}
            disabled={loading}
          >
            {loading ? "Saving..." : isEditMode ? "Update Address" : "Add Address"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddressesCopy;
