import React, { useEffect, useState } from "react";
import { makePostRequest } from "../../Apis";
import { useSelector } from "react-redux";

function Addresses({ id }) {
  const [addresses, setAddresses] = useState([]);

  const user = useSelector((state) => state.user.value);
  console.log("addresses", addresses);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("auth/customer-address-list", {
          customer_id: user?.logged_id,
        });
        setAddresses(response?.data);
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

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
          {addresses.map((data, index) => (
            <div className="address" key={index}>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1 text-center">
                  {/* Grouping all radio buttons with the same name */}
                  <input type="radio" name="selectedAddress" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                  <h4 className="text-dark mb-0">{data?.full_name}</h4>
                  <p>
                    {data?.address +
                      ", " +
                      data?.city +
                      ", " +
                      data?.postal_code}
                  </p>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-12">
                  <a
                    href="#shipping"
                    className="btn btn-default address-action link-to-tab"
                  >
                    Change
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="address col-md-12 mt-5 mt-md-0">
            <div className="heading d-flex">
              <h4 className="text-dark mb-0">Shipping address</h4>
            </div>

            <div className="address-box">
              You have not set up this type of address yet.
            </div>

            <a
              href="#shipping"
              className="btn btn-default address-action link-to-tab"
            >
              Add Address
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addresses;
