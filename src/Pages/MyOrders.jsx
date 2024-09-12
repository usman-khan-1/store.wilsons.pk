import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import ImageWithLoader from "../Components/ImageWithLoader";

function MyOrders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

          <div className="single-order">
            <div className="wishlist-table-container">
              <table className="table table-wishlist mb-0">
                <thead>
                  <tr>
                    <th className="thumbnail-col">SR. No</th>
                    <th className="price-col">Order ID</th>
                    <th className="price-col">Total Price</th>
                    <th className="price-col">Ordered Date</th>
                    <th className="price-col">Action</th>
                    {/* <th className="action-col">Get By</th>
                    <th className="status-col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr className="product-row">
                    <td>1</td>
                    <td>
                      <h5 className="product-title">#123456</h5>
                    </td>
                    <td className="price-box">Rs. 3500</td>
                    <td className="price-box">12 Sep 2023</td>

                    <td className="action">
                      <Link to={"/order-detail"} className="btn btn-dark btn-add-cart product-type-simple btn-shop">
                        View Deatils
                      </Link>
                    </td>
                  </tr>
                  <tr className="product-row">
                    <td>2</td>
                    <td>
                      <h5 className="product-title">#123456</h5>
                    </td>
                    <td className="price-box">Rs. 3500</td>
                    <td className="price-box">12 Sep 2023</td>

                    <td className="action">
                    <Link to={"/order-detail"} className="btn btn-dark btn-add-cart product-type-simple btn-shop">
                        View Deatils
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default MyOrders;
