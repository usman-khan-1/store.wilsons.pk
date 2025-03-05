import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import { makePostRequest } from "../Apis";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageWithLoader from "../Components/ImageWithLoader";
import { useSelector } from "react-redux";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [value, setValue] = useState([0, 100]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;
  const user = useSelector((state) => state.user.value);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [category, setCategory] = useState([]);
  const [alphabetFilter, setAlphabetFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("product/list");
        setProducts(response?.data);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching products data:", error);
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await makePostRequest("category/list");
        setCategory(response?.data);
      } catch (error) {
        console.error("Error fetching categories data:", error);
      }
    };
    fetchCategoryData();
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
        (product) =>
          (selectedCategory === "All" ||
            product.category === selectedCategory) &&
          (alphabetFilter === "All" ||
            product.heading.startsWith(alphabetFilter)) &&
          product.price >= value[0] &&
          product.price <= value[1]
      );
      setFilteredProducts(filtered);
    }
  }, [products, value, alphabetFilter, selectedCategory]);

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };

  // pagination
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(
    offset,
    offset + productsPerPage
  );
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle Alphabet filter change
  const handleAlphabetFilterChange = (letter) => {
    setAlphabetFilter(letter);
    setCurrentPage(0); // Reset page when alphabet filter changes
  };

  // Handle Category filter change
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset page when category changes
  };

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
              <div
                className="category-banner"
                style={{
                  backgroundImage:
                    "url(/assets/imagess/no-image-prod-category.jpg)",
                }}
              ></div>
              <h1 className="category-heading">Our Products</h1>

              {/* {filteredProducts.length === 0 ? (
                <div className="no-products-message">
                  <h2 className="text-center mt-2">No Products Found</h2>
                </div>
              ) : (
                <div className="row divide-line no-gutters m-0">
                  {currentProducts?.map((data, index) => (
                    <div key={index} className="col-xl-3 col-sm-4 col-12 ">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <Link to={`/product/${data?.seo_slug}`}>
                            <ImageWithLoader
                              src={
                                data?.image ||
                                "/assets/imagess/no_image_product.jpeg"
                              }
                              width="217"
                              height="217"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <Link
                                to={"/category"}
                                className="product-category"
                              >
                                {data?.category}
                              </Link>
                            </div>
                            {user?.logged_id && (
                              <div
                                title="Add to Wishlist"
                                className="btn-icon-wish"
                                onClick={() => handleToggle(data)}
                                style={{
                                  color: wishlistItems.some(
                                    (item) => item.uid === data.uid
                                  )
                                    ? "#01abec"
                                    : "gray",
                                }}
                              >
                                {wishlistItems.some(
                                  (item) => item.uid === data.uid
                                ) ? (
                                  <i className="fa-solid fa-heart"></i>
                                ) : (
                                  <i className="fa-regular fa-heart"></i>
                                )}
                              </div>
                            )}
                          </div>
                          <h3 className="product-title">
                            <Link to={`/product/${data?.seo_slug}`}>
                              {data.heading}
                            </Link>
                          </h3>

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
              )} */}

              {isLoading ? (
                <div className="row divide-line no-gutters m-0 mt-5">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="col-xl-3 col-sm-4 col-12">
                      <div className="shimmer-effect"></div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="no-products-message mt-5">
                  <h2 className="text-center mt-2">No Products Found</h2>
                </div>
              ) : (
                <div className="row divide-line no-gutters m-0 mt-5">
                  {currentProducts?.map((data, index) => (
                    <div key={index} className="col-xl-3 col-sm-4 col-12 ">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <Link to={`/product/${data?.seo_slug}`}>
                            <ImageWithLoader
                              src={
                                data?.image ||
                                "/assets/imagess/no_image_product.jpeg"
                              }
                              width="217"
                              height="217"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <Link
                                to={"/category"}
                                className="product-category"
                              >
                                {data?.category}
                              </Link>
                            </div>
                            {user?.logged_id && (
                              <div
                                title="Add to Wishlist"
                                className="btn-icon-wish"
                                onClick={() => handleToggle(data)}
                                style={{
                                  color: wishlistItems.some(
                                    (item) => item.uid === data.uid
                                  )
                                    ? "#01abec"
                                    : "gray",
                                }}
                              >
                                {wishlistItems.some(
                                  (item) => item.uid === data.uid
                                ) ? (
                                  <i className="fa-solid fa-heart"></i>
                                ) : (
                                  <i className="fa-regular fa-heart"></i>
                                )}
                              </div>
                            )}
                          </div>
                          <h3 className="product-title">
                            <Link to={`/product/${data?.seo_slug}`}>
                              {data.heading}
                            </Link>
                          </h3>


                          <div className="price-box">
                            Rs.{" "}
                            <span className="product-price">
                              {Number(data?.price || 0)?.toLocaleString(
                                "en-US"
                              )}
                            </span>
                          </div>
{/* 
                          <div className="price-box">
                            <span className="product-price">
                              Rs {data?.price}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredProducts.length > 16 && (
                <nav className="toolbox toolbox-pagination">
                  <ReactPaginate
                    previousLabel={<FaChevronLeft />}
                    nextLabel={<FaChevronRight />}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"paginateActive"}
                  />
                </nav>
              )}
            </div>

            <div className="sidebar-overlay"></div>
            <div className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
              <div className="sidebar-wrapper">
                <div className="widget">
                  <Link to="/products">
                    <h3
                      className="widget-title mb-1"
                      style={{ textTransform: "capitalize" }}
                    >
                      All Products
                    </h3>
                  </Link>
                  <h3
                    className="widget-title"
                    style={{ textTransform: "capitalize" }}
                  >
                    Categories
                  </h3>
                  <ul className="list mt-1">
                    {filteredCategory?.map((data, index) => (
                      <li>
                        <Link
                          to={`/category/${data?.slug}`}
                          onClick={() => handleCategorySelect(data?.name)}
                        >
                          {data?.name}
                          <span className="products-count">
                            ({data?.product_count})
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="collapse show" id="widget-body-1">
                    <div className="widget-body">
                      <ul className="cat-list">
                        {filteredCategory?.map((data, index) => (
                          <li key={index}>
                            <Link
                              to={`/category/${data?.slug}`}
                              onClick={() => handleCategorySelect(data?.name)}
                            >
                              {data?.name}
                              <span className="products-count">
                                ({data?.product_count})
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div> */}
                </div>

                <div className="widget">
                  <h3
                    className="widget-title"
                    style={{ textTransform: "capitalize" }}
                  >
                    Price
                    {/* <a
                      data-toggle="collapse"
                      href="#widget-body-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-body-2"
                    >
                      Price
                    </a> */}
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

                <div className="widget">
                  <h3
                    className="widget-title"
                    style={{ textTransform: "capitalize" }}
                  >
                    Alphabetically
                  </h3>
                  <br />
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                    <button
                      key={letter}
                      className={`alphabet-filter-button ${
                        alphabetFilter === letter ? "active" : ""
                      }`}
                      onClick={() => handleAlphabetFilterChange(letter)}
                    >
                      {letter}
                    </button>
                  ))}
                  <button
                    className={`alphabet-filter-button ${
                      alphabetFilter === "All" ? "active" : ""
                    }`}
                    onClick={() => handleAlphabetFilterChange("All")}
                  >
                    All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Shop;
