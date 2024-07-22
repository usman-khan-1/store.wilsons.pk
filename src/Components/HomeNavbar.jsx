import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { makePostRequest } from "../Apis";

function HomeNavbar() {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openCart, setOpenCart] = useState(false);

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
    <div className={`${openCart && "cart-opened"}`}>
      <header className={`header ${isFixed ? "fixed-top" : ""}`}>
        <div
          className="header-middle sticky-header"
          data-sticky-options="{'mobile': true}"
        >
          <div className="container">
            <div className="header-left">
              <Link to={"/"} className="logo">
                <img
                  src="/assets/Images/logo-white.png"
                  alt="Porto Logo"
                  width="111"
                  height="44"
                />
              </Link>
              <div className="header-col">
                <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0">
                  <a href="#" className="search-toggle" role="button">
                    <i className="icon-search-3"></i>
                  </a>
                  <form action="#" method="get">
                    <div className="header-search-wrapper">
                      <input
                        type="search"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="I'm searching for..."
                        required
                      />
                      <div className="select-custom">
                        <select id="cat" name="cat">
                          <option value="">All Categories</option>
                          {category.map((data, index) => (
                            <option key={index} value="">
                              {data?.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        className="btn icon-magnifier"
                        title="search"
                        type="submit"
                      ></button>
                    </div>
                  </form>
                </div>

                {/* <div className="tagcloud d-none d-lg-flex">
                  <Link to={"/category"}>clothes</Link>
                  <Link to={"/category"}>fashion</Link>
                  <Link to={"/category"}>hub</Link>
                  <Link to={"/category"}>shirt</Link>
                  <Link to={"/category"}>skirt</Link>
                  <Link to={"/category"}>sports</Link>
                  <Link to={"/category"}>sweater</Link>
                </div> */}
              </div>
            </div>

            <div className="header-right ml-0 ml-lg-auto">
              <Link
                to={"/login"}
                className="header-icon d-md-block d-none mr-0"
              >
                <div className="header-user">
                  <i className="fas fa-user"></i>
                  <div className="header-userinfo">
                    <span className="d-inline-block line-height-1 ls-10">
                      Hello!
                    </span>
                    <h4 className="font1 mb-0">My Account</h4>
                  </div>
                </div>
              </Link>

              <Link to={"/wishlist"} className="header-icon">
                <i className="fas fa-heart"></i>
              </Link>

              <div className="dropdown cart-dropdown">
                <Link
                  onClick={() => setOpenCart(true)}
                  title="Cart"
                  className="dropdown-toggle cart-toggle"
                >
                  <i className="minicart-icon"></i>
                  <span className="cart-count badge-circle">3</span>
                </Link>

                <div className="cart-overlay"></div>

                <div className="dropdown-menu mobile-cart show">
                  <a
                    onClick={() => setOpenCart(false)}
                    title="Close (Esc)"
                    className="btn-close"
                    style={{ cursor: "pointer" }}
                  >
                    ×
                  </a>

                  <div className="dropdownmenu-wrapper custom-scrollbar">
                    <div className="dropdown-cart-header">Shopping Cart</div>

                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <Link to={"/product-details"}>
                              Ultimate 3D Bluetooth Speaker
                            </Link>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span> × $99.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <Link
                            to={"/product-details"}
                            className="product-image"
                          >
                            <img
                              src="/assets/Images/products/product-1.jpg"
                              alt="product"
                              width="80"
                              height="80"
                            />
                          </Link>

                          <a
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <span>×</span>
                          </a>
                        </figure>
                      </div>

                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <Link to={"/product-details"}>
                              Brown Women Casual HandBag
                            </Link>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span> × $35.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <Link
                            to={"/product-details"}
                            className="product-image"
                          >
                            <img
                              src="/assets/Images/products/product-2.jpg"
                              alt="product"
                              width="80"
                              height="80"
                            />
                          </Link>

                          <a
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <span>×</span>
                          </a>
                        </figure>
                      </div>

                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <Link to={"/product-details"}>
                              Circled Ultimate 3D Speaker
                            </Link>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span> × $35.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <Link
                            to={"/product-details"}
                            className="product-image"
                          >
                            <img
                              src="/assets/Images/products/product-3.jpg"
                              alt="product"
                              width="80"
                              height="80"
                            />
                          </Link>
                          <a
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <span>×</span>
                          </a>
                        </figure>
                      </div>
                    </div>

                    <div className="dropdown-cart-total">
                      <span>SUBTOTAL:</span>

                      <span className="cart-total-price float-right">
                        $134.00
                      </span>
                    </div>

                    <div className="dropdown-cart-action">
                      <Link
                        to={"/cart"}
                        className="btn btn-gray btn-block view-cart"
                      >
                        View Cart
                      </Link>
                      <Link to={"/checkout"} className="btn btn-dark btn-block">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="header-bottom sticky-header "
          data-sticky-options="{'mobile': false, 'offset': 684}"
        >
          <div className="container">
            <div className="header-center">
              <button
                onClick={() => setIsSideBar(true)}
                className="mobile-menu-toggler"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>

              <nav className="main-nav d-none d-lg-flex flex-wrap">
                <div className="menu-depart show-always">
                  <a href="#" className="toggle">
                    <i className="fas fa-bars"></i>Shop by Category
                  </a>
                  <div className="submenu" style={!isFixed ? submenuStyle : {}}>
                    {category.map((data, index) => (
                      <Link key={index} to={"/category"}>
                        <i className="icon-category-medicine"></i>
                        {data?.name}
                      </Link>
                    ))}

                    <Link to={"/category"}>
                      VIEW ALL <i className="icon-angle-right"></i>
                    </Link>
                  </div>
                </div>
                <ul className="menu">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/wishlist">My Wishlist</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category">Shop</NavLink>
                  </li>
                  <li className="dropdown">
                    <a>Pages</a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/myAccount">My Account</NavLink>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                        <ul className="submenu">
                          <li>
                            <Link to={"/blog"}>Blog</Link>
                          </li>
                          <li>
                            <Link>Blog Post</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="header-dropdowns ml-auto">
                <a
                  href="#"
                  className="link-seller font-weight-bold d-none d-sm-block"
                >
                  Become a Seller
                </a>

                <div className="header-dropdown">
                  <a href="#">USD</a>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <a href="#">EUR</a>
                      </li>
                      <li>
                        <a href="#">USD</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="header-dropdown">
                  <a href="#">
                    <i className="flag-us flag"></i>ENG
                  </a>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="flag-us flag mr-2"></i>ENG
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flag-fr flag mr-2"></i>FRA
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
                    {category.map((data, index) => (
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
                href="#"
                className="social-icon social-facebook icon-facebook"
                target="_blank"
              ></a>
              <a
                href="#"
                className="social-icon social-twitter icon-twitter"
                target="_blank"
              ></a>
              <a
                href="#"
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
