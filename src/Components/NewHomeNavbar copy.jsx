import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { makePostRequest } from "../Apis";
import { useSelector } from "react-redux";
import CartSidebar from "./CartSideBar";
import Searching from "./Searching";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./Header.css";

function NewHomeNavbar() {
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

  // Mega menu data
  const megaMenuData = {
    popular: {
      title: "Popular Categories",
      sections: [
        
        {
          title: "Popular Categories",
          items: [
            { name: "Single Nutrients", link: "/collections/ultra-supplements" },
            { name: "Pregnancy", link: "/collections/pregnancy" },
            { name: "Men's Health", link: "/collections/vitamins-for-men" }
          ]
        },
        // {
        //   items: [
        //     { name: "Immune Support", link: "/collections/immune-support" },
        //     { name: "Digestive Health", link: "/collections/digestive-health" },
        //     { name: "Joint Support", link: "/collections/joint-support" }
        //   ]
        // },
        // {
        //   items: [
        //     { name: "Energy Support", link: "/collections/energy-support" },
        //     { name: "Sleep Support", link: "/collections/sleep-support" },
        //     { name: "Best Sellers", link: "/collections/best-sellers" }
        //   ]
        // }
      ]
    },
    women: {
      title: "Women's Health",
      sections: [
        {
          title: "Shop By Brand",
          items: [
            { name: "Wellwoman", link: "/pages/womens-vitamins-wellwoman" },
            { name: "Wellwoman 50+", link: "/products/wellman-50-tablets" },
            { name: "Perfectil", link: "/pages/hair-skin-nails-vitamins-perfectil" }
          ]
        },
        {
          title: "Shop By Need",
          items: [
            { name: "Pregnancy", link: "/collections/pregnancy" },
            { name: "Hair", link: "/collections/hair-vitamins-supplements" },
            { name: "Beauty", link: "/collections/hair-and-beauty-supplements" }
          ]
        },
        {
          title: "Featured Products",
          items: [
            { name: "Wellwoman Original", link: "/products/wellwoman-original-30-tablets" },
            { name: "Perfectil Original", link: "/products/perfectil-original-30-tablets" },
            { name: "Wellwoman Max", link: "/products/wellwoman-max-30-tablets" }
          ]
        }
      ]
    },
    men: {
      title: "Men's Health",
      sections: [
        {
          title: "Shop By Brand",
          items: [
            { name: "Wellman", link: "/pages/mens-vitamins-wellman" },
            { name: "Wellman 50+", link: "/products/wellman-50-tablets" },
            { name: "Hairfollic", link: "/pages/hair-health-supplements-hairfollic" }
          ]
        },
        {
          title: "Shop By Need",
          items: [
            { name: "Multivitamins", link: "/collections/multivitamins" },
            { name: "Hair Support", link: "/pages/hair-health-supplements-hairfollic" },
            { name: "Brain", link: "/collections/brain" }
          ]
        },
        {
          title: "Featured Products",
          items: [
            { name: "Wellman Original", link: "/products/wellman-original-30-tablets" },
            { name: "Wellman Max", link: "/products/wellman-max-30-tablets" },
            { name: "Hairfollic for Men", link: "/products/hairfollic-men-60-tablets" }
          ]
        }
      ]
    },
    kids: {
      title: "Kids' Health",
      sections: [
        {
          title: "Shop By Brand",
          items: [
            { name: "Wellbaby", link: "/pages/baby-vitamins-wellbaby" },
            { name: "Wellkid Peppa Pig", link: "/pages/kids-supplements-wellkid-peppa-pig" },
            { name: "Wellkid", link: "/pages/kids-supplements-wellkid" }
          ]
        },
        {
          title: "Shop By Age",
          items: [
            { name: "Baby (0-12 months)", link: "/collections/newborn-baby-vitamins" },
            { name: "Toddler (1-4 years)", link: "/collections/toddler-vitamins" },
            { name: "Children (4+ years)", link: "/pages/kids-supplements-wellkid" }
          ]
        },
        {
          title: "Featured Products",
          items: [
            { name: "Wellbaby Vitamin D", link: "/products/wellbaby-vitamin-d-drops-10ml" },
            { name: "Wellkid Peppa Pig", link: "/products/wellkid-peppa-pig-multivitamin-30ml" },
            { name: "Wellkid Smart", link: "/products/wellkid-smart-chewable-30-tablets" }
          ]
        }
      ]
    }
  };

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

              <div style={{marginLeft:"80px"}}>

                <nav className="main-nav ">
                  <ul className="menu new-navbar-links">
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
              </div>

              


            </div>
            <div className="header-right ml-0 ml-lg-auto">
              <div className="header-icon d-md-block d-none mr-0">
                

                {user?.logged_id && (
                  <NavLink to={"/wishlist"} className="header-icon">
                    <i className="icon-wishlist-2"></i>
                  </NavLink>
                )}
              </div>

              <Searching />

              <CartSidebar setOpenCart={setOpenCart} />
            </div>

          </div>

          {/* Mega Menu Dropdown - Updated structure */}
          <div
            className={`mega-menu-wrapper ${activeMenu ? "active" : ""}`}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="mega-menu-container">
              <div className="px-5">
                <div className="mega-menu">
                  {activeMenu && (
                    <div className="mega-menu-content">
                      <div className="row">
                        <div className="col-12">
                          {/* <h3>{megaMenuData[activeMenu].title}</h3> */}
                        </div>
                        {megaMenuData[activeMenu].sections.map((section, index) => (
                          <div key={index} className="col-lg-2">
                            {section.title && <h4>{section.title}</h4>}
                            <ul>
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a href={item.link}>{item.name}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
            <div className="ctas-container promotional-inner-buttons">
              <a href="/collections/best-sellers">Shop best sellers</a>
              <a href="/collections/all-vitabiotics-products">Shop All products</a>
            </div>
          </div>
        </div>
      </header>

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

export default NewHomeNavbar;