import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import ImageWithLoader from "../Components/ImageWithLoader";
import { makePostRequest } from "../Apis";
import { useSelector } from "react-redux";
import moment from "moment";

function MyOrders() {
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
    <Layout>
      <main className="main">
        <div className="page-header">
          <div className=" d-flex flex-column align-items-center">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={"/myAccount"}>My Account</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My Orders
                  </li>
                </ol>
              </div>
            </nav>

            <h1>My Orders</h1>
          </div>
        </div>

        <div className="container">
          <div className="wishlist-title">
            <h2 className="p-2"> Orders</h2>
          </div>

          {orders?.length === 0 ? (
            <h1>You haven't placed any orders yet</h1>
          ) : (
            <div className="single-order">
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
      </main>
    </Layout>
  );
}

export default MyOrders;
