import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function HomeNavbar() {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

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
  return (
    <div>
      <header className={`header ${isFixed ? "fixed-top" : ""}`}>
        <div
          className="header-middle sticky-header"
          data-sticky-options="{'mobile': true}"
        >
          <div className="container">
            <div className="header-left">
              <a href="demo22.html" className="logo">
                <img
                  src="/assets/Images/logo-white.png"
                  alt="Porto Logo"
                  width="111"
                  height="44"
                />
              </a>
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
                          <option value="4">Fashion</option>
                          <option value="12">- Women</option>
                          <option value="13">- Men</option>
                          <option value="66">- Jewellery</option>
                          <option value="67">- Kids Fashion</option>
                          <option value="5">Electronics</option>
                          <option value="21">- Smart TVs</option>
                          <option value="22">- Cameras</option>
                          <option value="63">- Games</option>
                          <option value="7">Home &amp; Garden</option>
                          <option value="11">Motors</option>
                          <option value="31">- Cars and Trucks</option>
                          <option value="32">
                            - Motorcycles &amp; Powersports
                          </option>
                          <option value="33">- Parts &amp; Accessories</option>
                          <option value="34">- Boats</option>
                          <option value="57">
                            - Auto Tools &amp; Supplies
                          </option>
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

                <div className="tagcloud d-none d-lg-flex">
                  <a href="demo22-shop.html">clothes</a>
                  <a href="demo22-shop.html">fashion</a>
                  <a href="demo22-shop.html">hub</a>
                  <a href="demo22-shop.html">shirt</a>
                  <a href="demo22-shop.html">skirt</a>
                  <a href="demo22-shop.html">sports</a>
                  <a href="demo22-shop.html">sweater</a>
                </div>
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

              <a href="wishlist.html" className="header-icon">
                <i className="fas fa-heart"></i>
              </a>

              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  title="Cart"
                  className="dropdown-toggle cart-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <i className="minicart-icon"></i>
                  <span className="cart-count badge-circle">3</span>
                </a>

                <div className="cart-overlay"></div>

                <div className="dropdown-menu mobile-cart">
                  <a href="#" title="Close (Esc)" className="btn-close">
                    ×
                  </a>

                  <div className="dropdownmenu-wrapper custom-scrollbar">
                    <div className="dropdown-cart-header">Shopping Cart</div>

                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <a href="demo22-product.html">
                              Ultimate 3D Bluetooth Speaker
                            </a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span> × $99.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a
                            href="demo22-product.html"
                            className="product-image"
                          >
                            <img
                              src="/assets/Images/products/product-1.jpg"
                              alt="product"
                              width="80"
                              height="80"
                            />
                          </a>

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
                            <a href="demo22-product.html">
                              Brown Women Casual HandBag
                            </a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span> × $35.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a
                            href="demo22-product.html"
                            className="product-image"
                          >
                            <img
                              src="/assets/Images/products/product-2.jpg"
                              alt="product"
                              width="80"
                              height="80"
                            />
                          </a>

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
                            <a href="demo22-product.html">
                              Circled Ultimate 3D Speaker
                            </a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span> × $35.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a
                            href="demo22-product.html"
                            className="product-image"
                          >
                            <img
                              src="/assets/Images/products/product-3.jpg"
                              alt="product"
                              width="80"
                              height="80"
                            />
                          </a>
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
                      <a
                        href="cart.html"
                        className="btn btn-gray btn-block view-cart"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-dark btn-block"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="header-bottom sticky-header"
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
                    <Link to={"/"} className="active">
                      <i className="icon-category-home"></i>Home
                    </Link>
                    <a href="demo22-shop.html">
                      <i className="icon-category-fashion"></i>Fashion
                    </a>
                    <a href="demo22-shop.html">
                      <i className="icon-category-electronics"></i>Electronics
                    </a>
                    <a href="demo22-shop.html">
                      <i className="icon-category-gifts"></i>Gifts
                    </a>
                    <a href="demo22-shop.html">
                      <i className="icon-category-garden"></i>Garden
                    </a>
                    <a href="demo22-shop.html">
                      <i className="icon-category-music"></i>Music
                    </a>
                    <a href="demo22-shop.html">
                      <i className="icon-category-motors"></i>Motors
                    </a>
                    <a href="demo22-shop.html">
                      <i className="icon-category-furniture"></i>Furniture
                    </a>
                    <a href="demo22-shop.html">
                      VIEW ALL <i className="icon-angle-right"></i>
                    </a>
                  </div>
                </div>
                <ul className="menu">
                  <li className="active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="">
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/wishlist"}>My Wishlist</Link>
                  </li>
                  <li>
                    <Link to={"/cart"}>Cart</Link>
                  </li>
                  <li className="dropdown">
                    <a>Pages</a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to={"/myAccount"}>My Account</Link>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="single.html">Blog Post</a>
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
            <span onClick={() => setIsSideBar(false)} className="mobile-menu-close">
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
                    <li>
                      <Link>Fashion</Link>
                    </li>
                    <li>
                      <Link>Electronic</Link>
                    </li>
                    <li>
                      <Link>Gifts</Link>
                    </li>
                    <li>
                      <Link>Garden</Link>
                    </li>
                    <li>
                      <Link>Music</Link>
                    </li>
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
