import React from "react";
import HomeNavbar from "../Components/HomeNavbar";
import HomeCarosuel from "../Components/Home/HomeCarosuel";
import Navbar from "../Components/Home/Navbar";
import Layout from "../Components/Layout";
import { FaShippingFast } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiTimerBold } from "react-icons/pi";
import { MdPayment, MdPayments } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MostViewedCarosuel from "../Components/Home/MostViewedCarosuel";

function Home() {
  const categories = [
    {
      icon: "icon-category-fashion",
      label: "Fashion",
      link: "demo22-shop.html",
    },
    {
      icon: "icon-category-electronics",
      label: "Electronics",
      link: "demo22-shop.html",
    },
    { icon: "icon-category-gifts", label: "Gifts" },
    { icon: "icon-category-garden", label: "Garden" },
    { icon: "icon-category-music", label: "Music" },
    { icon: "icon-category-motors", label: "Motors" },
    {
      icon: "icon-category-furniture",
      label: "Furniture",
      link: "demo22-shop.html",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Layout>
      <HomeCarosuel />
      <div class="container my-5">
        <div class="info-boxes-container">
          <div class="row m-0 divide-line">
            <div class="col-sm-6 col-lg-3 info-box info-box-icon-left ">
              <FaShippingFast size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">
                  FREE SHIPPING &amp; RETURN
                </h4>
                <p class="font-weight-light">
                  Free shipping on orders over $99.
                </p>
              </div>
            </div>

            <div class="info-box info-box-icon-left col-sm-6 col-lg-3">
              <RiMoneyDollarCircleLine size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">MONEY BACK GUARANTEE</h4>
                <p class="font-weight-light">100% money back guarantee</p>
              </div>
            </div>

            <div class="info-box info-box-icon-left col-sm-6 col-lg-3">
              <PiTimerBold size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">ONLINE SUPPORT 24/7</h4>
                <p class="font-weight-light">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div class="info-box info-box-icon-left col-sm-6 col-lg-3">
              <MdPayment size={30} className="me-5" />

              <div class="info-box-content">
                <h4 class="font1 line-height-1 ls-10">SECURE PAYMENT</h4>
                <p class="font-weight-light">Lorem Ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="top-categories">
        <div class="container">
          <div class="row m-b-3">
            <div class="col-lg-6">
              <div
                class="banner banner1 mb-2 "
                style={{ backgroundColor: "#f4f4f4" }}
              >
                <figure>
                  <img
                    src="assets/Images/demoes/demo22/banners/banner-1.jpg"
                    alt="banner"
                    width="700"
                    height="236"
                  />
                </figure>
                <div class="banner-layer banner-layer-middle banner-layer-left">
                  <h3 class="font1 ls-10 text-uppercase mb-0">
                    Action
                    <br />
                    Cameras
                  </h3>
                </div>
                <div class="banner-layer banner-layer-middle banner-layer-right">
                  <div class="coupon-sale-text">
                    <h4 class="font1 line-height-1 ls-10 text-white bg-primary skew-box m-b-2">
                      Starting from
                    </h4>
                    <h5 class="d-inline-block font1 text-white bg-primary skew-box mb-0">
                      $399<sub class="text-dark">$499</sub>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="banner banner2 mb-2 "
                data-animation-name="fadeInRightShorter"
                data-animation-delay="200"
                style={{ backgroundColor: "#f4f4f4" }}
              >
                <figure>
                  <img
                    src="assets/Images/demoes/demo22/banners/banner-2.jpg"
                    alt="banner"
                    width="700"
                    height="236"
                  />
                </figure>
                <div class="banner-layer banner-layer-middle banner-layer-left">
                  <h3 class="font1 text-uppercase ls-10 mb-0">
                    For all
                    <br />
                    styles
                  </h3>
                </div>
                <div class="banner-layer banner-layer-middle banner-layer-right">
                  <div class="coupon-sale-text">
                    <h4 class="font1 line-height-1 ls-10 text-white bg-secondary skew-box m-b-2">
                      Starting from
                    </h4>
                    <h5 class="d-inline-block font1 text-white bg-secondary skew-box mb-0">
                      $199<sub class="text-dark">$299</sub>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 class="section-title line-height-1 ls-10 pb-4 mb-4">
            Top Categories
          </h2>

          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000} // Adjust this speed for smoother transitions
            keyBoardControl={true}
            customTransition="transform 0.5s ease"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            arrows={false} // Hide arrows
          >
            {categories.map((category, index) => (
              <a key={index} className="category-item">
                <i className={category.icon}></i>
                <span>{category.label}</span>
              </a>
            ))}
          </Carousel>

          {/* <MostViewedCarosuel /> */}

          {/* <section class="best-sellers bg-gray " data-animation-name="fadeIn" data-animation-delay="200">
                <div class="container">
                    <h2 class="section-title ls-n-10 pb-3 m-b-4">Best Sellers on Electronics</h2>

                    <div class="row">
                        <div class="grid-item col-md-8 col-lg-9 col-xl-5 col-2 height-x2">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo22-product.html">
                                        <img src="assets/Images/demoes/demo22/products/product-big-1.jpg" width="217" height="217"  alt="product"/>
                                    </a>
                                    <div class="label-group">
                                        <div class="product-label label-hot">HOT</div>
                                    </div>
                                    <div class="btn-icon-group">
                                        <a href="#" title="Add To Cart" class="btn-icon btn-add-cart product-type-simple"><i
                                                class="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="demo22-shop.html" class="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" class="btn-icon-wish"><i
                                                class="icon-heart"></i></a>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="demo22-product.html">Smart Watches</a>
                                    </h3>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"80%"}}></span>
                                            
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                        
                                    </div>
                                   
                                    <div class="price-box">
                                        <span class="product-price">$299.00</span>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                        </div>
                        <div class="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo22-product.html">
                                        <img src="assets/Images/demoes/demo22/products/product-22.jpg" width="217" height="217"  alt="product"/>
                                    </a>
                                    <div class="label-group">
                                        <div class="product-label label-sale">-33%</div>
                                    </div>
                                    <div class="btn-icon-group">
                                        <a href="#" title="Add To Cart" class="btn-icon btn-add-cart product-type-simple"><i
                                                class="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                        View</a>
                                    <div class="product-countdown-container">
                                        <span class="product-countdown-title">offer ends in: </span>
                                        <div class="product-countdown countdown-compact" data-until="2021, 10, 5" data-compact="true">
                                        </div>
                                       
                                    </div>
                                  
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="demo22-shop.html" class="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" class="btn-icon-wish"><i
                                                class="icon-heart"></i></a>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="demo22-product.html">HD Camera</a>
                                    </h3>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"80%"}}></span>
                                            
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                        
                                    </div>
                                   
                                    <div class="price-box">
                                        <span class="old-price">$299.00</span>
                                        <span class="product-price">$199.00</span>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                        </div>
                        <div class="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo22-product.html">
                                        <img src="assets/Images/demoes/demo22/products/product-21.jpg" width="217" height="217"  alt="product"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <a href="#" title="Add To Cart" class="btn-icon btn-add-cart product-type-simple"><i
                                                class="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="demo22-shop.html" class="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" class="btn-icon-wish"><i
                                                class="icon-heart"></i></a>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="demo22-product.html">Black Watches</a>
                                    </h3>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"80%"}}></span>
                                            
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                        
                                    </div>
                                   
                                    <div class="price-box">
                                        <span class="old-price">$199.00</span>
                                        <span class="product-price">$129.00</span>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                        </div>
                        <div class="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo22-product.html">
                                        <img src="assets/Images/demoes/demo22/products/product-20.jpg" width="217" height="217"  alt="product"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <a href="#" title="Add To Cart" class="btn-icon btn-add-cart product-type-simple"><i
                                                class="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="demo22-shop.html" class="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" class="btn-icon-wish"><i
                                                class="icon-heart"></i></a>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="demo22-product.html">HD Camera</a>
                                    </h3>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"80%"}}></span>
                                            
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                        
                                    </div>
                                   
                                    <div class="price-box">
                                        <span class="old-price">$199.00</span>
                                        <span class="product-price">$129.00</span>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                        </div>
                        <div class="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo22-product.html">
                                        <img src="assets/Images/demoes/demo22/products/product-23.jpg" width="217" height="217"  alt="product"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <a href="#" title="Add To Cart" class="btn-icon btn-add-cart product-type-simple"><i
                                                class="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="demo22-shop.html" class="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" class="btn-icon-wish"><i
                                                class="icon-heart"></i></a>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="demo22-product.html">Computer Mouse</a>
                                    </h3>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"80%"}}></span>
                                            
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                        
                                    </div>
                                   
                                    <div class="price-box">
                                        <span class="product-price">$55.00</span>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                        </div>
                        <div class="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo22-product.html">
                                        <img src="assets/Images/demoes/demo22/products/product-5.jpg" width="217" height="217" alt="product"/>
                                    </a>
                                    <div class="label-group">
                                        <div class="product-label label-hot">HOT</div>
                                    </div>
                                    <div class="btn-icon-group">
                                        <a href="#" title="Add To Cart" class="btn-icon btn-add-cart product-type-simple"><i
                                                class="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="demo22-shop.html" class="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" class="btn-icon-wish"><i
                                                class="icon-heart"></i></a>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="demo22-product.html">Battery Charger</a>
                                    </h3>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"0%"}}></span>
                                            
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                        
                                    </div>
                                   
                                    <div class="price-box">
                                        <span class="product-price">$299.00</span>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                        </div>
                        <div class="grid-item col-6 col-md-4 col-lg-3 col-xl-5col height-x1">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo22-product.html">
                                        <img src="assets/Images/demoes/demo22/products/product-11.jpg" width="217" height="217" alt="product"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <a href="#" title="Add To Cart" class="btn-icon btn-add-cart product-type-simple"><i
                                                class="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="demo22-shop.html" class="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" class="btn-icon-wish"><i
                                                class="icon-heart"></i></a>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="demo22-product.html">Blue Gentle Shoes</a>
                                    </h3>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"0%"}}></span>
                                            
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                        
                                    </div>
                                   
                                    <div class="price-box">
                                        <span class="product-price">$101.00 &ndash; $111.00</span>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                        </div>
                        <div class="grid-col-sizer col-1 col-xl-5col"></div>
                    </div>
                </div>
            </section> */}

<section class="recent-products">
                <div class="container">
                    <div class=" " data-animation-name="fadeIn" data-animation-delay="200">
                        <h2 class="section-title ls-n-10 pb-3 m-b-4">Recent Products</h2>

                        <div class="row">
                            <div class="products-slider 5col owl-carousel owl-theme owl-nav-outisde show-nav-hover" data-owl-options="{
                            'margin': 0
                        }">
                                <div class="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="demo22-product.html">
                                            <img src="assets/Images/demoes/demo22/products/product-20.jpg" width="217" height="217"  alt="product"/>
                                        </a>
                                        <div class="label-group">
                                            <div class="product-label label-sale">-35%</div>
                                        </div>
                                        <div class="btn-icon-group">
                                            <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                    class="icon-shopping-cart"></i></a>
                                        </div>
                                        <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                            View</a>
                                    </figure>
                                    <div class="product-details">
                                        <div class="category-wrap">
                                            <div class="category-list">
                                                <a href="demo22-shop.html" class="product-category">category</a>
                                            </div>
                                            <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                                    class="icon-heart"></i></a>
                                        </div>
                                        <h3 class="product-title">
                                            <a href="demo22-product.html">HD Camera</a>
                                        </h3>
                                        <div class="ratings-container">
                                            <div class="product-ratings">
                                                <span class="ratings" style={{width:"80%"}}></span>
                                               
                                                <span class="tooltiptext tooltip-top"></span>
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="price-box">
                                            <span class="old-price">$199.00</span>
                                            <span class="product-price">$129.00</span>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                                <div class="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="demo22-product.html">
                                            <img src="assets/Images/demoes/demo22/products/product-21.jpg" width="217" height="217"  alt="product"/>
                                        </a>
                                        <div class="label-group">
                                            <div class="product-label label-sale">-35%</div>
                                        </div>
                                        <div class="btn-icon-group">
                                            <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                    class="icon-shopping-cart"></i></a>
                                        </div>
                                        <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                            View</a>
                                    </figure>
                                    <div class="product-details">
                                        <div class="category-wrap">
                                            <div class="category-list">
                                                <a href="demo22-shop.html" class="product-category">category</a>
                                            </div>
                                            <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                                    class="icon-heart"></i></a>
                                        </div>
                                        <h3 class="product-title">
                                            <a href="demo22-product.html">Black Watches</a>
                                        </h3>
                                        <div class="ratings-container">
                                            <div class="product-ratings">
                                                <span class="ratings" style={{width:"80%"}}></span>
                                               
                                                <span class="tooltiptext tooltip-top"></span>
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="price-box">
                                            <span class="old-price">$199.00</span>
                                            <span class="product-price">$129.00</span>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                                <div class="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="demo22-product.html">
                                            <img src="assets/Images/demoes/demo22/products/product-12.jpg" width="217" height="217"  alt="product"/>
                                        </a>
                                        <div class="label-group">
                                            <div class="product-label label-sale">-89%</div>
                                        </div>
                                        <div class="btn-icon-group">
                                            <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                    class="icon-shopping-cart"></i></a>
                                        </div>
                                        <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                            View</a>
                                    </figure>
                                    <div class="product-details">
                                        <div class="category-wrap">
                                            <div class="category-list">
                                                <a href="demo22-shop.html" class="product-category">category</a>
                                            </div>
                                            <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                                    class="icon-heart"></i></a>
                                        </div>
                                        <h3 class="product-title">
                                            <a href="demo22-product.html">USB Speaker</a>
                                        </h3>
                                        <div class="ratings-container">
                                            <div class="product-ratings">
                                                <span class="ratings" style={{width:"0%"}}></span>
                                               
                                                <span class="tooltiptext tooltip-top"></span>
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="price-box">
                                            <span class="old-price">$596.00</span>
                                            <span class="product-price">$68.00</span>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                                <div class="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="demo22-product.html">
                                            <img src="assets/Images/demoes/demo22/products/product-17.jpg" width="217" height="217"  alt="product"/>
                                        </a>
                                        <div class="label-group">
                                            <div class="product-label label-sale">-89%</div>
                                        </div>
                                        <div class="btn-icon-group">
                                            <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                    class="icon-shopping-cart"></i></a>
                                        </div>
                                        <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                            View</a>
                                    </figure>
                                    <div class="product-details">
                                        <div class="category-wrap">
                                            <div class="category-list">
                                                <a href="demo22-shop.html" class="product-category">category</a>
                                            </div>
                                            <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                                    class="icon-heart"></i></a>
                                        </div>
                                        <h3 class="product-title">
                                            <a href="demo22-product.html">Classic Earphone</a>
                                        </h3>
                                        <div class="ratings-container">
                                            <div class="product-ratings">
                                                <span class="ratings" style={{width:"80%"}}></span>
                                               
                                                <span class="tooltiptext tooltip-top"></span>
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="price-box">
                                            <span class="old-price">$596.00</span>
                                            <span class="product-price">$68.00</span>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                                <div class="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="demo22-product.html">
                                            <img src="assets/Images/demoes/demo22/products/product-10.jpg" width="217" height="217"  alt="product"/>
                                        </a>
                                        <div class="label-group">
                                            <div class="product-label label-sale">-17%</div>
                                        </div>
                                        <div class="btn-icon-group">
                                            <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                    class="icon-shopping-cart"></i></a>
                                        </div>
                                        <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                            View</a>
                                    </figure>
                                    <div class="product-details">
                                        <div class="category-wrap">
                                            <div class="category-list">
                                                <a href="demo22-shop.html" class="product-category">category</a>
                                            </div>
                                            <a href="wishlist.html" title="Wishlist" class="btn-icon-wish"><i
                                                    class="icon-heart"></i></a>
                                        </div>
                                        <h3 class="product-title">
                                            <a href="demo22-product.html">Bluetooth Speaker</a>
                                        </h3>
                                        <div class="ratings-container">
                                            <div class="product-ratings">
                                                <span class="ratings" style={{width:"0%"}}></span>
                                               
                                                <span class="tooltiptext tooltip-top"></span>
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="price-box">
                                            <span class="old-price">$59.00</span>
                                            <span class="product-price">$49.00</span>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="banner banner3 bg-dark  " data-animation-name="fadeIn" data-animation-delay="200">
                        <div class="row m-0 no-gutters align-items-center">
                            <div class="col-md-6 col-lg-3 align-self-baseline">
                                <figure>
                                    <img src="assets/Images/demoes/demo22/banners/banner-3.jpg" alt="image" width="380" height="136"/>
                                </figure>
                            </div>
                            <div class="col-md-6 col-lg-4 py-4 py-lg-5">
                                <div class="px-5 px-md-0">
                                    <h3 class="font1 text-uppercase m-b-2">Check new arrivals</h3>
                                    <h2 class="font1 ls-10 text-uppercase text-white mb-0">Explore Smartphones</h2>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 py-4 py-lg-5 d-flex justify-content-md-center">
                                <div class="px-5 px-md-0">
                                    <div class="coupon-sale-text d-flex flex-column align-items-start">
                                        <h4 class="m-b-2 font1 d-block text-dark bg-white skew-box">Exclusive COUPON
                                        </h4>
                                        <h5 class="mb-0 font1 d-inline-block bg-primary skew-box"><i class="text-white ls-0">UP
                                                TO</i><b class="text-white">$200</b><sub class="text-white">OFF</sub>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-2 py-4 py-lg-5">
                                <div class="px-5 px-md-0">
                                    <a href="demo22-shop.html" class="btn btn-dark font1 ls-10">View All Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
      </section>
    </Layout>
  );
}

export default Home;
