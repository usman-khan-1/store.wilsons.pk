import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import ImageWithLoader from "../Components/ImageWithLoader";
import { makePostRequest } from "../Apis";
import { useSelector } from "react-redux";
import moment from "moment";

function Orders({ id }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const user = useSelector((state) => state.user.value);
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    try {
      const response = await makePostRequest("orders/record", {
        customer_id: user?.logged_id,
      });
      setOrders(response?.data || []);
    } catch (error) {
      console.error("Error fetching addresses data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.logged_id]);
  return (
    <div class="tab-pane fade" id={id} role="tabpanel">
      <div className="">
        <div className="">
          <h3 class="account-sub-title d-none d-md-block">
            <i class="sicon-social-dropbox align-middle mr-3"></i>Orders
          </h3>
        </div>

        {orders?.length === 0 ? (
          <h1>You haven't placed any orders yet</h1>
        ) : (
          <div className="">
            <div className="wishlist-table-container">
              <table className="table table-wishlist mb-0">
                <thead>
                  <tr>
                    <th className="thumbnail-col">SR. No</th>
                    <th className="price-col">Order ID</th>
                    <th className="price-col">Total Price</th>
                    <th className="price-col">Ordered Date</th>
                    <th className="price-col">Status</th>
                    <th className="price-col">Action</th>
                    {/* <th className="action-col">Get By</th>
                    <th className="status-col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((data, index) => {
                    const formattedDate = moment(data?.date).format(
                      "DD MMM, YYYY"
                    );

                    return (
                      <tr key={data?.uid} className="product-row">
                        <td>{index + 1}</td>
                        <td>
                          <h5 className="price-box">{data?.order_id}</h5>
                        </td>
                        <td className="price-box">
                          Rs. {(data?.total_price).toLocaleString()}
                        </td>
                        <td className="price-box">{formattedDate}</td>
                        <td className="price-box">{data?.order_status}</td>

                        <td className="action">
                          <Link
                            to={`/order-detail/${data?.uid}`}
                            className="btn btn-dark btn-add-cart product-type-simple btn-shop"
                          >
                            View Deatils
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
