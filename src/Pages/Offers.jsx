import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";
import ImageWithLoader from "../Components/ImageWithLoader";
import { BeatLoader } from "react-spinners";
import { Carousel } from "react-responsive-carousel";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

function Offers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [value, setValue] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;
  const [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const user = useSelector((state) => state.user.value);

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

  const homeSliderBannerImg = ["/assets/imagess/web-offer-ban.jpg"];

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = products?.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

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
      <Carousel
        showThumbs={false}
        interval={8000}
        autoPlay={true}
        swipeable={true}
        transitionTime={1200}
        showIndicators={false}
        // infiniteLoop={true}
      >
        {homeSliderBannerImg?.map((data, index) => (
          <div key={index}>
            <ImageWithLoader
              src={data}
              width="100%"
              height="217"
              alt="product"
              loaderHeight={470}
            />
          </div>
        ))}
      </Carousel>
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
              <div className="row divide-line no-gutters m-0">
                {currentProducts?.length === 0 ? (
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <BeatLoader color="#01abec" />
                  </div>
                ) : (
                  currentProducts?.map((data, index) => (
                    <div key={index} className="col-6 col-sm-3 col-xl-2">
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
                  ))
                )}
              </div>

              <nav className="toolbox toolbox-pagination">
                <div className="toolbox-item toolbox-show"></div>

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
          </div>
        </div>

        <div className="mb-4"></div>
      </main>
    </Layout>
  );
}

export default Offers;
