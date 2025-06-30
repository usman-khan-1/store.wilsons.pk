import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { makePostRequest } from "../Apis";
import { useSelector } from "react-redux";
import CartSidebar from "./CartSideBar";
import Searching from "../Components/Searching";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SidebarSearching from "./SidebarSearching";
import "./Header.css";

function HomeNavbar() {
  const location = useLocation();
  const theme = useTheme();
  const [isFixed, setIsFixed] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [isLeftSidebar, setIsLeftSidebar] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const ToggleCategoryDropdown = () => {
    setOpenCategory(!openCategory);
  };

  const toggleLeftSidebar = () => {
    if (isMobile) {
      setIsSideBar(!isSideBar);
    } else {
      setIsLeftSidebar(!isLeftSidebar);
    }
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

  const [showCtas, setShowCtas] = useState(false);

  const toggleCtas = () => {
    setShowCtas(!showCtas);
  };

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

              <Searching />
            </div>

            <div className="header-right ml-0 ml-lg-auto">
              <div className="header-icon d-md-block d-none mr-0">
                <nav className="main-nav">
                  <ul className="menu">
                    <li
                      className="has-submenu"
                      onMouseEnter={() => setActiveMenu("popular")}
                    >
                      <a href="/collections/best-sellers">Popular</a>
                    </li>
                    <li
                      className="has-submenu"
                      onMouseEnter={() => setActiveMenu("women")}
                    >
                      <a href="/collections/vitamins-for-women">Women</a>
                    </li>
                    <li
                      className="has-submenu"
                      onMouseEnter={() => setActiveMenu("men")}
                    >
                      <a href="/collections/vitamins-for-men">Men</a>
                    </li>
                    <li
                      className="has-submenu"
                      onMouseEnter={() => setActiveMenu("kids")}
                    >
                      <a href="/collections/kids-vitamins">Kids</a>
                    </li>
                  </ul>
                </nav>

                {user?.logged_id && (
                  <NavLink to={"/wishlist"} className="header-icon">
                    <i className="icon-wishlist-2"></i>
                  </NavLink>
                )}
              </div>

              <CartSidebar setOpenCart={setOpenCart} />
            </div>
          </div>

          {/* Mega Menu Dropdown - Updated structure */}
          <div 
            className={`mega-menu-wrapper ${activeMenu ? "active" : ""}`}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="mega-menu-container">
              <div className="container">
                <div className="mega-menu">
                  {activeMenu === "popular" && (
                    <div className="mega-menu-content">
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Popular Categories</h3>
                        </div>
                        <div className="col-md-4">
                          <ul>
                            <li>
                              <a href="/collections/ultra-supplements">
                                Single Nutrients
                              </a>
                            </li>
                            <li>
                              <a href="/collections/pregnancy">Pregnancy</a>
                            </li>
                            <li>
                              <a href="/collections/vitamins-for-men">
                                Men's Health
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul>
                            <li>
                              <a href="/collections/immune-support">
                                Immune Support
                              </a>
                            </li>
                            <li>
                              <a href="/collections/digestive-health">
                                Digestive Health
                              </a>
                            </li>
                            <li>
                              <a href="/collections/joint-support">
                                Joint Support
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul>
                            <li>
                              <a href="/collections/energy-support">
                                Energy Support
                              </a>
                            </li>
                            <li>
                              <a href="/collections/sleep-support">
                                Sleep Support
                              </a>
                            </li>
                            <li>
                              <a href="/collections/best-sellers">Best Sellers</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMenu === "women" && (
                    <div className="mega-menu-content">
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Women's Health</h3>
                        </div>
                        <div className="col-md-4">
                          <h4>Shop By Brand</h4>
                          <ul>
                            <li>
                              <a href="/pages/womens-vitamins-wellwoman">
                                Wellwoman
                              </a>
                            </li>
                            <li>
                              <a href="/products/wellwoman-50-tablets">
                                Wellwoman 50+
                              </a>
                            </li>
                            <li>
                              <a href="/pages/hair-skin-nails-vitamins-perfectil">
                                Perfectil
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Shop By Need</h4>
                          <ul>
                            <li>
                              <a href="/collections/pregnancy">Pregnancy</a>
                            </li>
                            <li>
                              <a href="/collections/hair-vitamins-supplements">
                                Hair
                              </a>
                            </li>
                            <li>
                              <a href="/collections/hair-and-beauty-supplements">
                                Beauty
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Featured Products</h4>
                          <ul>
                            <li>
                              <a href="/products/wellwoman-original-30-tablets">
                                Wellwoman Original
                              </a>
                            </li>
                            <li>
                              <a href="/products/perfectil-original-30-tablets">
                                Perfectil Original
                              </a>
                            </li>
                            <li>
                              <a href="/products/wellwoman-max-30-tablets">
                                Wellwoman Max
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMenu === "men" && (
                    <div className="mega-menu-content">
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Men's Health</h3>
                        </div>
                        <div className="col-md-4">
                          <h4>Shop By Brand</h4>
                          <ul>
                            <li>
                              <a href="/pages/mens-vitamins-wellman">Wellman</a>
                            </li>
                            <li>
                              <a href="/products/wellman-50-tablets">
                                Wellman 50+
                              </a>
                            </li>
                            <li>
                              <a href="/pages/hair-health-supplements-hairfollic">
                                Hairfollic
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Shop By Need</h4>
                          <ul>
                            <li>
                              <a href="/collections/multivitamins">
                                Multivitamins
                              </a>
                            </li>
                            <li>
                              <a href="/pages/hair-health-supplements-hairfollic">
                                Hair Support
                              </a>
                            </li>
                            <li>
                              <a href="/collections/brain">Brain</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Featured Products</h4>
                          <ul>
                            <li>
                              <a href="/products/wellman-original-30-tablets">
                                Wellman Original
                              </a>
                            </li>
                            <li>
                              <a href="/products/wellman-max-30-tablets">
                                Wellman Max
                              </a>
                            </li>
                            <li>
                              <a href="/products/hairfollic-men-60-tablets">
                                Hairfollic for Men
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMenu === "kids" && (
                    <div className="mega-menu-content">
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Kids' Health</h3>
                        </div>
                        <div className="col-md-4">
                          <h4>Shop By Brand</h4>
                          <ul>
                            <li>
                              <a href="/pages/baby-vitamins-wellbaby">Wellbaby</a>
                            </li>
                            <li>
                              <a href="/pages/kids-supplements-wellkid-peppa-pig">
                                Wellkid Peppa Pig
                              </a>
                            </li>
                            <li>
                              <a href="/pages/kids-supplements-wellkid">
                                Wellkid
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Shop By Age</h4>
                          <ul>
                            <li>
                              <a href="/collections/newborn-baby-vitamins">
                                Baby (0-12 months)
                              </a>
                            </li>
                            <li>
                              <a href="/collections/toddler-vitamins">
                                Toddler (1-4 years)
                              </a>
                            </li>
                            <li>
                              <a href="/pages/kids-supplements-wellkid">
                                Children (4+ years)
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Featured Products</h4>
                          <ul>
                            <li>
                              <a href="/products/wellbaby-vitamin-d-drops-10ml">
                                Wellbaby Vitamin D
                              </a>
                            </li>
                            <li>
                              <a href="/products/wellkid-peppa-pig-multivitamin-30ml">
                                Wellkid Peppa Pig
                              </a>
                            </li>
                            <li>
                              <a href="/products/wellkid-smart-chewable-30-tablets">
                                Wellkid Smart
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="promotional-banner-container">
        <div className="promotional-banner">
          <div className="promotional-banner-inner">
            <div className="promotional-tag">
              <img
                className="tag"
                loading="lazy"
                width="22"
                height="22"
                src="https://cdn.shopify.com/s/files/1/0027/7263/1621/files/double_price_tag.webp?v=1689861190"
                alt="3for2 tag"
              />
              <div className="promotional-message" onClick={toggleCtas}>
                3 for 2 all products
                <span
                  className={`promotional-arrow ${showCtas ? "up" : "down"}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className={`promotional-ctas ${showCtas ? "show" : "hide"}`}>
          <div className="ctas-container">
            <a href="/collections/best-sellers">Shop best sellers</a>
            <a href="/collections/all-vitabiotics-products">Shop All products</a>
          </div>
        </div>
      </div>
      </header>

      {/* Promotional Banner - Positioned below the header */}

      {/* Mobile Menu */}
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
                        <Link to={`/category/${data?.slug}`}>{data?.name}</Link>
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
                {user?.logged_id && (
                  <li>
                    <Link to={"/wishlist"}>Wishlist</Link>
                  </li>
                )}
                <li>
                  <Link to={"/cart"}>Cart</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;