import React, { useEffect } from "react";
import Layout from "../Components/Layout";

function WishList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <main className="main">
        <div className="page-header">
          <div className="container d-flex flex-column align-items-center">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="demo4.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Wishlist
                  </li>
                </ol>
              </div>
            </nav>

            <h1>Wishlist</h1>
          </div>
        </div>

        <div className="container">
          <div className="wishlist-title">
            <h2 className="p-2">My wishlist on Porto Shop 4</h2>
          </div>
          <div className="wishlist-table-container">
            <table className="table table-wishlist mb-0">
              <thead>
                <tr>
                  <th className="thumbnail-col"></th>
                  <th className="product-col">Product</th>
                  <th className="price-col">Price</th>
                  <th className="status-col">Stock Status</th>
                  <th className="action-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="product-row">
                  <td>
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src=" assets/Images/products/product-4.jpg"
                          alt="product"
                        />
                      </a>

                      <a
                        href="#"
                        className="btn-remove icon-cancel"
                        title="Remove Product"
                      ></a>
                    </figure>
                  </td>
                  <td>
                    <h5 className="product-title">
                      <a href="product.html">Men Watch</a>
                    </h5>
                  </td>
                  <td className="price-box">$17.90</td>
                  <td>
                    <span className="stock-status">In stock</span>
                  </td>
                  <td className="action">
                    <a
                      href="ajax/product-quick-view.html"
                      className="btn btn-quickview mt-1 mt-md-0"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                    <button className="btn btn-dark btn-add-cart product-type-simple btn-shop">
                      ADD TO CART
                    </button>
                  </td>
                </tr>

                <tr className="product-row">
                  <td>
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src=" assets/Images/products/product-5.jpg"
                          alt="product"
                        />
                      </a>

                      <a
                        href="#"
                        className="btn-remove icon-cancel"
                        title="Remove Product"
                      ></a>
                    </figure>
                  </td>
                  <td>
                    <h5 className="product-title">
                      <a href="product.html">Men Cap</a>
                    </h5>
                  </td>
                  <td className="price-box">$17.90</td>
                  <td>
                    <span className="stock-status">In stock</span>
                  </td>
                  <td className="action">
                    <a
                      href="ajax/product-quick-view.html"
                      className="btn btn-quickview mt-1 mt-md-0"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                    <a
                      href="product.html"
                      className="btn btn-dark btn-add-cart btn-shop"
                    >
                      SELECT OPTION
                    </a>
                  </td>
                </tr>

                <tr className="product-row">
                  <td>
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src=" assets/Images/products/product-6.jpg"
                          alt="product"
                        />
                      </a>

                      <a
                        href="#"
                        className="btn-remove icon-cancel"
                        title="Remove Product"
                      ></a>
                    </figure>
                  </td>
                  <td>
                    <h5 className="product-title">
                      <a href="product.html">Men Black Gentle Belt</a>
                    </h5>
                  </td>
                  <td className="price-box">$17.90</td>
                  <td>
                    <span className="stock-status">In stock</span>
                  </td>
                  <td className="action">
                    <a
                      href="ajax/product-quick-view.html"
                      className="btn btn-quickview mt-1 mt-md-0"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                    <a
                      href="product.html"
                      className="btn btn-dark btn-add-cart btn-shop"
                    >
                      SELECT OPTION
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default WishList;
