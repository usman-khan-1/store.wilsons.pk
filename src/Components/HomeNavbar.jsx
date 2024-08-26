import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { makePostRequest } from "../Apis";
import { useSelector } from "react-redux";
import CartSidebar from "./CartSideBar";
import Searching from "../Components/Searching";


function HomeNavbar() {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [isLeftSidebar, setIsLeftSidebar] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const user = useSelector((state) => state.user.value);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const submenuStyle =
    location.pathname === "/"
      ? {
          opacity: "1",
          top: "100%",
          visibility: "visible",
        }
      : {};

  const ToggleCategoryDropdown = () => {
    setOpenCategory(!openCategory);
  };

  const toggleLeftSidebar = () => {
    setIsLeftSidebar(!isLeftSidebar);
  };

  const [category, setCategory] = useState([]);

  const filteredCategory = category.filter(
    (category) => category.product_count > 0
  );

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
    <div className={`${openCart && "cart-opened"}`}>
      <header className={`header ${isFixed ? "fixed-top" : ""}`}>
        <div
          className="header-middle sticky-header"
          data-sticky-options="{'mobile': true}"
        >
          <div className={`${isLeftSidebar ? "left-sidebar-active" : ""}`}>
            {isLeftSidebar && (
              <div
                className="left-sidebar-overlay"
                onClick={() => setIsLeftSidebar(false)}
              ></div>
            )}
            <div className="left-sidebar-container">
              <div className="left-sidebar-wrapper">
                <span
                  onClick={() => setIsLeftSidebar(false)}
                  className="left-sidebar-close"
                >
                  <i className="fa fa-times"></i>
                </span>
                <div className="Categories">
                  <h4>Shops By Category</h4>
                  <div className="row">
                    {filteredCategory?.map((data, index) => (
                      <div key={index} className="col-12 category">
                        <Link key={index} to={`/category/${data?.slug}`}>
                          <img
                            className="category-icon"
                            src={data?.icon}
                            alt=""
                          />
                          {data?.name} ({data?.product_count})
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="header-left">
              <div className="category-bars">
                <i className="fas fa-bars" onClick={toggleLeftSidebar}></i>
              </div>

              <Link to={"/"} className="logo">
                <img
                  src="/assets/Images/wilmart-logo.png"
                  alt="Porto Logo"
                  width="200"
                />
              </Link>


            <Searching/>
            </div>

            <div className="header-right ml-0 ml-lg-auto">
              <div className="header-icon d-md-block d-none mr-0">
                <div className="header-user">
                  <Link to={"/"}>
                    <div className="header-userinfo">
                      <h4 className="font1 mb-0">Home</h4>
                    </div>
                  </Link>

                  <ul className="menu">
                    <li className="dropdown">
                      <a>
                        <b>About</b>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/company-profile">Company Profile</Link>
                        </li>
                        <li>
                          <Link to="/manufacturing">Manufacturing</Link>
                        </li>
                        <li>
                          <Link to="/quality-policy">Quality Policy</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <Link to={"/offers"}>
                    <div className="header-userinfo">
                      <h4 className="font1 mb-0">Offers</h4>
                    </div>
                  </Link>
                  <Link to={"/blog"}>
                    <div className="header-userinfo">
                      <h4 className="font1 mb-0">Medical Insight</h4>
                    </div>
                  </Link>

                  {user?.logged_id  ? (
                    <>
                      <Link to={"/myAccount"}>
                        <div className="header-userinfo">
                          {/* <span className="d-inline-block line-height-1 ls-10">
                          Hello!
                        </span> */}
                          <h4 className="font1 mb-0">My Account</h4>
                        </div>
                      </Link>
                      <Link to={"/wishlist"} className="header-icon">
                        <i className="icon-wishlist-2"></i>
                      </Link>
                    </>
                  ) : (
                    <Link to={"/login"}>
                      <div className="header-userinfo">
                        <h4 className="font1 mb-0">Login / Register</h4>
                      </div>
                    </Link>
                  )}
                </div>
              </div>

              <CartSidebar setOpenCart={setOpenCart} />
            </div>
          </div>
        </div>
      </header>

      <div className={`${isSideBar ? "mmenu-active" : ""}`}>
        <div className="mobile-menu-overlay"></div>

        <div className="mobile-menu-container">
          <div className="mobile-menu-wrapper">
            <span
              onClick={() => setIsSideBar(false)}
              className="mobile-menu-close"
            >
              <i className="fa fa-times"></i>
            </span>
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link onClick={ToggleCategoryDropdown}>
                    Categories <span className="mmenu-btn"></span>
                  </Link>
                  <ul className={`${openCategory && "d-block"}`}>
                    {category?.map((data, index) => (
                      <li key={index}>
                        <Link>{data?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/wishList"}>Wishlist</Link>
                </li>
                <li>
                  <Link to={"/cart"}>Cart</Link>
                </li>
                <li>
                  <Link to={"/category"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/cart"}>My Account</Link>
                </li>
              </ul>
            </nav>

            <form className="search-wrapper mb-2" action="#">
              <input
                type="text"
                className="form-control mb-0"
                placeholder="Search..."
                required
              />
              <button
                className="btn icon-search text-white bg-transparent p-0"
                type="submit"
              ></button>
            </form>

            <div className="social-icons">
              <a
                className="social-icon social-facebook icon-facebook"
                target="_blank"
              ></a>
              <a
                className="social-icon social-twitter icon-twitter"
                target="_blank"
              ></a>
              <a
                className="social-icon social-instagram icon-instagram"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
