import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import { makePostRequest } from "../Apis";

function Offers() {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
      const [value, setValue] = useState([0, 100]);
    
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await makePostRequest("product/list");
            setProducts(response?.data);
          } catch (error) {
            console.error("Error fetching videos data:", error);
          }
        };
        fetchData();
      }, []);
    
      const [category, setCategory] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await makePostRequest("category/list");
            setCategory(response?.data);
          } catch (error) {
            console.error("Error fetching videos data:", error);
          }
        };
        fetchData();
      }, []);
    
      return (
        <Layout>
          <main className="main">
            <div className="container">
              <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>
                      <i className="icon-home"></i>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Offers
                  </li>
                </ol>
              </nav>
    
              <div className="row main-content">
                <div className="col-lg-12">
                 
    
                  <nav
                    className="toolbox sticky-header mt-2"
                    data-sticky-options="{'mobile': true}"
                  >
                    <div className="toolbox-left">
                      <a href="#" className="sidebar-toggle">
                        <svg
                          data-name="Layer 3"
                          id="Layer_3"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="15"
                            x2="26"
                            y1="9"
                            y2="9"
                            className="cls-1"
                          ></line>
                          <line
                            x1="6"
                            x2="9"
                            y1="9"
                            y2="9"
                            className="cls-1"
                          ></line>
                          <line
                            x1="23"
                            x2="26"
                            y1="16"
                            y2="16"
                            className="cls-1"
                          ></line>
                          <line
                            x1="6"
                            x2="17"
                            y1="16"
                            y2="16"
                            className="cls-1"
                          ></line>
                          <line
                            x1="17"
                            x2="26"
                            y1="23"
                            y2="23"
                            className="cls-1"
                          ></line>
                          <line
                            x1="6"
                            x2="11"
                            y1="23"
                            y2="23"
                            className="cls-1"
                          ></line>
                          <path
                            d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                            className="cls-2"
                          ></path>
                          <path
                            d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                            className="cls-2"
                          ></path>
                          <path
                            d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                            className="cls-3"
                          ></path>
                          <path
                            d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                            className="cls-2"
                          ></path>
                        </svg>
                        <span>Filter</span>
                      </a>
    
                      <div className="toolbox-item toolbox-sort">
                        <label>Sort By:</label>
    
                        <div className="select-custom">
                          <select name="orderby" className="form-control">
                            <option value="menu_order">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by newness</option>
                            <option value="price">
                              Sort by price: low to high
                            </option>
                            <option value="price-desc">
                              Sort by price: high to low
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
    
                    <div className="toolbox-right">
                      <div className="toolbox-item toolbox-show">
                        <label>Show:</label>
    
                        <div className="select-custom">
                          <select name="count" className="form-control">
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </nav>
    
                  <div className="row divide-line no-gutters m-0">
                    {products?.map((data, index) => (
                      <div className="col-6 col-sm-4 col-xl-3">
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <Link to={`/product/${data?.seo_slug}`}>
                              <img
                                src={data.image}
                                width="217"
                                height="217"
                                alt="product"
                              />
                            </Link>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <Link to={"/category"} className="product-category">
                                  {data?.category}
                                </Link>
                              </div>
                              <Link
                                to={"/wishlist"}
                                title="Wishlist"
                                className="btn-icon-wish"
                              >
                                <i className="icon-heart"></i>
                              </Link>
                            </div>
                            <h3 className="product-title">
                              <Link to={"/product-details"}>{data.heading}</Link>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "80%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div className="price-box">
                              <span className="product-price">
                                Rs {data?.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
    
                  <nav className="toolbox toolbox-pagination">
                    <div className="toolbox-item toolbox-show">
                      <label>Show:</label>
    
                      <div className="select-custom">
                        <select name="count" className="form-control">
                          <option value="12">12</option>
                          <option value="24">24</option>
                          <option value="36">36</option>
                        </select>
                      </div>
                    </div>
    
                    <ul className="pagination toolbox-item">
                      <li className="page-item disabled">
                        <a className="page-link page-link-btn" href="#">
                          <i className="icon-angle-left"></i>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <span className="page-link">...</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link page-link-btn" href="#">
                          <i className="icon-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
    
               
              </div>
            </div>
    
            <div className="mb-4"></div>
          </main>
        </Layout>
      );
}

export default Offers
