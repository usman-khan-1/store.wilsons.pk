import React, { useEffect, useState } from "react";
import { makePostRequest } from "../../Apis";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import NewAddressModal from "./NewAddressModal";
import EditAddressModal from "./EditAddressModal";

function Addresses({ id }) {
  const user = useSelector((state) => state.user.value);
  const [addresses, setAddresses] = useState([]);
  console.log("addresses", addresses?.length === 0);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDefaultAddress, setSelectedDefaultAddress] = useState(null); // Track selected default address

  const [newAddress, setNewAddress] = useState({
    customer_id: user?.logged_id,
    full_name: "",
    contact_no: "",
    address: "",
    city: "",
    postal_code: "",
    default: false,
  });
  const [editAddress, setEditAddress] = useState({
    customer_id: user?.logged_id,
    full_name: "",
    contact_no: "",
    address: "",
    city: "",
    postal_code: "",
    default: false,
  });

  const fetchData = async () => {
    try {
      const response = await makePostRequest("auth/customer-address-list", {
        customer_id: user?.logged_id,
      });
      const addressesData = response?.data || [];
      setAddresses(addressesData);

      // Automatically set the default address if it exists
      const defaultAddress = addressesData.find((address) => address.default);
      if (defaultAddress) {
        setSelectedDefaultAddress(defaultAddress.uid);
      }
    } catch (error) {
      console.error("Error fetching addresses data:", error);
    }
  };

  useEffect(() => {
    if (user?.logged_id) {
      fetchData();
    }
  }, [user?.logged_id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditAddress((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
  };

  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  const handleShowEdit = (address) => {
    setEditAddress(address);
    setShowEdit(true);
  };

  const handleAddAddress = async () => {
    const isFirstAddress = addresses.length === 0;
    setLoading(true);
    try {
      await makePostRequest("auth/customer-address-add", {
        customer_id: user?.logged_id,
        ...newAddress,
        default: isFirstAddress,
      });
      setLoading(false);
      fetchData();
      handleCloseAdd();
      setNewAddress({
        customer_id: user?.logged_id,
        full_name: "",
        contact_no: "",
        address: "",
        city: "",
        postal_code: "",
        default: false,
      });
    } catch (error) {
      setLoading(false);
      console.error("Error adding address:", error);
    }
  };

  const handleEditAddress = async () => {
    setLoading(true);
    try {
      await makePostRequest("auth/customer-address-action", {
        customer_id: user?.logged_id,
        address: editAddress.address,
        uid: editAddress.uid,
        fav_action: "update",
        ...editAddress,
      });
      setLoading(false);
      fetchData();
      handleCloseEdit();
    } catch (error) {
      setLoading(false);
      console.error("Error updating address:", error);
    }
  };

  const handleDeleteAddress = async (uid, address) => {
    setLoading(true);
    try {
      await makePostRequest("auth/customer-address-action", {
        customer_id: user?.logged_id,
        address,
        uid,
        fav_action: "", // Empty string for deletion
      });
      setLoading(false);
      fetchData();
    } catch (error) {
      setLoading(false);
      console.error("Error deleting address:", error);
    }
  };

  // Handle default address selection and API call
  const handleDefaultAddressChange = async (addressUid) => {
    setLoading(true);
    try {
      await makePostRequest("auth/customer-address-default", {
        customer_id: user?.logged_id,
        address_id: addressUid,
        default: "true",
      });
      setSelectedDefaultAddress(addressUid); // Update UI to show the selected default address
      fetchData(); // Refresh address list
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error setting default address:", error);
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
          {addresses.map((data,index) => (
            <div className="address" key={data.uid}>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1 text-center">
                  <input
                    type="radio"
                    name="default"
                    checked={index === 0}
                    onClick={()=> handleDefaultAddressChange(data.uid)}
                  />
                </div>
                <div className="col-lg-7 col-md-9 col-9">
                  <h4 className="text-dark">{data.full_name}</h4>
                  <p className="mb-0">
                    {data.address}, {data.city}, {data.postal_code}
                  </p>
                  <p>{data.contact_no}</p>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12">
                  <button
                    className="btn btn-default address-action"
                    onClick={() => handleShowEdit(data)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-default address-action"
                    onClick={() => handleDeleteAddress(data.uid, data.address)}
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
              onClick={handleShowAdd}
              className="btn btn-default address-action"
            >
              Add New Address
            </button>
          </div>
        </div>
      </div>

      <NewAddressModal
        showAdd={showAdd}
        handleCloseAdd={handleCloseAdd}
        newAddress={newAddress}
        handleChange={handleChange}
        loading={loading}
        handleAddAddress={handleAddAddress}
      />
      <EditAddressModal
        showEdit={showEdit}
        handleCloseEdit={handleCloseEdit}
        editAddress={editAddress}
        handleEditChange={handleEditChange}
        loading={loading}
        handleEditAddress={handleEditAddress}
      />
    </div>
  );
}

export default Addresses;
