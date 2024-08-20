import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import { makePostRequest } from "../Apis";
import ReactPaginate from "react-paginate";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageWithLoader from "../Components/ImageWithLoader";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [value, setValue] = useState([0, 100]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;

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

  const filteredCategory = category.filter((cat) => cat?.product_count > 0);

  // price filter

  const minPrice = Math.min(...(products?.map((p) => p.price) || [0]));
  const maxPrice = Math.max(...(products?.map((p) => p.price) || [100]));

  useEffect(() => {
    if (products?.length) {
      setValue([minPrice, maxPrice]);
    }
  }, [products]);

  useEffect(() => {
    if (products) {
      const filtered = products.filter(
        (product) => product.price >= value[0] && product.price <= value[1]
      );
      setFilteredProducts(filtered);
    }
  }, [products, value]);

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };

  // pagination

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts?.slice(
    offset,
    offset + productsPerPage
  );
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

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
                Shop
              </li>
            </ol>
          </nav>

          <div className="row main-content">
            <div className="col-lg-9">
              <div className="category-banner banner bg-gray py-3 mb-3"></div>

              <div className="row divide-line no-gutters m-0">
                {currentProducts?.map((data, index) => (
                  <div key={index} className="col-6 col-sm-4 col-xl-3">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <Link to={`/product/${data?.seo_slug}`}>
                          <ImageWithLoader
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
                          <Link to={`/product/${data?.seo_slug}`}>
                            {data.heading}
                          </Link>
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
               
                </div>

                

                <ReactPaginate
                  previousLabel={<FaChevronLeft />}
                  nextLabel={<FaChevronRight />}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"paginateActive"}
                />
              </nav>
            </div>

            <div className="sidebar-overlay"></div>
            <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
              <div className="sidebar-wrapper">
                <div className="widget">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-body-1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-body-1"
                    >
                      Categories
                    </a>
                  </h3>

                  <div className="collapse show" id="widget-body-1">
                    <div className="widget-body">
                      <ul className="cat-list">
                        {filteredCategory?.map((data, index) => (
                          <li key={index}>
                            <Link to={`/category/${data?.slug}`}>
                              {data?.name}
                              <span className="products-count">
                                ( {data?.product_count})
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="widget">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-body-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-body-2"
                    >
                      Price
                    </a>
                  </h3>

                  <div className="collapse show" id="widget-body-2">
                    <div className="widget-body pt-4 pb-0">
                      <Slider
                        value={value}
                        min={minPrice}
                        max={maxPrice}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="widget widget-featured">
                  <h3 className="widget-title">Featured Products</h3>

                  <div className="widget-body">
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <Link to={"/product-details"}>
                            <img
                              src="/assets/Images/demoes/demo22/products/small/product-1.jpg"
                              width="75"
                              height="75"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            <Link to={"/product-details"}>
                              Digital Camera 16x
                            </Link>
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
                              $101.00 &ndash; $111.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <Link to={"/product-details"}>
                            <img
                              src="/assets/Images/demoes/demo22/products/small/product-2.jpg"
                              width="75"
                              height="75"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            <Link to={"/product-details"}>
                              Porto Extended Camera
                            </Link>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "0%" }}
                              ></span>

                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div className="price-box">
                            <span className="product-price">$599.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </aside>
          </div>
        </div>

        <div className="mb-4"></div>
      </main>
    </Layout>
  );
}

export default Shop;
