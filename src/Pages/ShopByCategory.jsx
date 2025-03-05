import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link, useParams } from "react-router-dom";
import { Slider } from "@mui/material";
import { makePostRequest } from "../Apis";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageWithLoader from "../Components/ImageWithLoader";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

function ShopByCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const slug = useParams();

  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;
  const [category, setCategory] = useState([]);
  const [categoryDetail, setCategoryDetail] = useState([]);
  const [showSideBar, setShowSideBar] = useState(false);
  const user = useSelector((state) => state.user.value);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("category/detail", slug);
        setCategoryDetail(response?.data);
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, [slug]);

  // price filter

  const minPrice = Math.min(
    ...(categoryDetail?.products?.map((p) => p.price) || [0])
  );
  const maxPrice = Math.max(
    ...(categoryDetail?.products?.map((p) => p.price) || [100])
  );

  useEffect(() => {
    if (categoryDetail?.products?.length) {
      setValue([minPrice, maxPrice]);
    }
  }, [categoryDetail]);

  useEffect(() => {
    if (categoryDetail?.products) {
      const filtered = categoryDetail?.products?.filter(
        (product) => product.price >= value[0] && product.price <= value[1]
      );
      setFilteredProducts(filtered);
      setLoading(false);
    }
  }, [categoryDetail?.products, value]);

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts?.slice(
    offset,
    offset + productsPerPage
  );
  const pageCount = Math.ceil(filteredProducts?.length / productsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/most-viewed");
        setProducts(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching products data:", error);
      }
    };

    fetchData();

    if (user?.logged_id) {
      // Fetch the wishlist if the user is logged in
      const fetchWishlist = async () => {
        try {
          const response = await makePostRequest("wishlist/list", {
            customer_id: user?.logged_id,
          });
          setWishlistItems(response?.data);
        } catch (error) {
          console.error("Error fetching wishlist data:", error);
        }
      };

      fetchWishlist();
    } else {
      // Clear wishlist if the user is not logged in
      setWishlistItems([]);
    }
  }, [user?.logged_id]);

  const handleToggle = async (product) => {
    const isWishlisted = wishlistItems.some((item) => item.uid === product.uid);

    try {
      if (isWishlisted) {
        await makePostRequest("wishlist/remove", {
          customer_id: user?.logged_id,
          product_id: product.uid,
        });
        setWishlistItems((prevItems) =>
          prevItems.filter((item) => item.uid !== product.uid)
        );
      } else {
        await makePostRequest("wishlist/add", {
          customer_id: user?.logged_id,
          product_id: product.uid,
        });
        setWishlistItems((prevItems) => [...prevItems, product]);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
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
            <div
              className={showSideBar ? "sidebar-opened col-lg-3" : "col-lg-3"}
            >
              <aside className="sidebar-shop  order-lg-first mobile-sidebar ">
                <div className="sidebar-wrapper">
                  {/* <div className="text-right">
                    <RxCross2 onClick={() => setShowSideBar(false)} />
                  </div> */}
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
                  </div>

                  <div className="widget">
                    <h3
                      className="widget-title"
                      style={{ textTransform: "capitalize" }}
                    >
                      Price
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
                        {/* <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                        <div className="filter-price-text">
                          Price Range:
                          <span id="filter-price-range">{`Rs ${value}`}</span>
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="sidebar-overlay"></div>
            </div>

            <div className="col-lg-9">
              <div
                className="category-banner"
                style={{
                  backgroundImage: `url(${
                    categoryDetail?.detail?.cover_image
                      ? categoryDetail?.detail?.cover_image
                      : "/assets/imagess/no-image-prod-category.jpg"
                  })`,
                }}
              ></div>
              <h1
                className={`category-heading ${
                  loading ? "shimmer-heading" : ""
                }`}
              >
                {loading ? "" : categoryDetail?.detail?.heading}
              </h1>

              {/* <div className="category-banner banner bg-gray py-3 mb-3"></div> */}

              <nav
                className="toolbox sticky-header mt-2"
                data-sticky-options="{'mobile': true}"
              >
                <div className="toolbox-left">
                  <a
                    onClick={() => setShowSideBar(true)}
                    href="#"
                    className="sidebar-toggle"
                  >
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
                </div>

                <div className="toolbox-right">
                  <div className="toolbox-item toolbox-show"></div>
                </div>
              </nav>

              <div className="row divide-line no-gutters m-0">
                {loading
                  ? [1, 2, 3, 4]?.map((data, index) => (
                      <div key={index} className="col-xl-3 col-sm-4 col-12">
                        <div className="shimmer-effect"></div>
                      </div>
                    ))
                  : currentProducts?.map((data, index) => (
                      <div key={index} className="col-xl-3 col-sm-4 col-12">
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
                              <Link to={"/product-details"}>
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
                          </div>
                        </div>
                      </div>
                    ))}
              </div>

              <nav className="toolbox toolbox-pagination">
                <div className="toolbox-item toolbox-show">
                  {/* <label>Show:</label>

                  <div className="select-custom">
                    <select name="count" className="form-control">
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                    </select>
                  </div> */}
                </div>

                {/* <ul className="pagination toolbox-item">
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
                </ul> */}

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
            </div>
          </div>
        </div>

        <div className="mb-4"></div>
      </main>
    </Layout>
  );
}

export default ShopByCategory;
