import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import ImageWithLoader from "../Components/ImageWithLoader";

function OrderDeatil() {
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
                  <li className="breadcrumb-item">
                    <Link to={"/my-orders"}>My Orders</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Orders Detail
                  </li>
                </ol>
              </div>
            </nav>

            <h1>Orders Detail</h1>
          </div>
        </div>

        <div className="container">
          <div className="wishlist-title">
            <h2 className="p-2">Order Detail</h2>
          </div>

          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="single-order">
                <div className="order-detail">
                  <div>
                    <h4>
                      Order: <span>#123456</span>
                    </h4>
                  
                  </div>
                  <p>
                    Status: <span className="ship-status"> Shipped</span>
                  </p>
                </div>
                <div className="wishlist-table-container">
                  <table className="table table-wishlist mb-0">
                    <thead>
                      <tr>
                        <th className="thumbnail-col">Image</th>
                        <th className="product-col">Name</th>
                        <th className="price-col">Price</th>
                        <th className="price-col">Quantity</th>
                        {/* <th className="action-col">Get By</th>
                    <th className="status-col">Status</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="product-row">
                        <td>
                          <figure className="product-image-container">
                            <Link
                              // to={`/product/${data?.slug}`}
                              className="product-image"
                            >
                              <ImageWithLoader
                                loaderHeight={80}
                                src={"/assets/imagess/Wilsop-60mg.webp"}
                                alt="product"
                              />
                            </Link>

                          
                          </figure>
                        </td>
                        <td>
                          <h5 className="product-title">
                            <Link
                            //   to={`/product/${data.slug}`}
                            >
                              Wilsop 60mg
                            </Link>
                          </h5>
                        </td>
                        <td className="price-box">Rs. 300</td>
                        <td className="price-box">1</td>
                      
                      </tr>
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="single-order">
                <p>Tracking ID: #23453213</p>
                <p>Placed On: 12 Sep 2023</p>
                <p>Get By: 22 Sep 2023 - 25 Sep 2023</p>
                <button className="btn btn-dark btn-add-cart product-type-simple btn-shop">
                 Track Your Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default OrderDeatil;
