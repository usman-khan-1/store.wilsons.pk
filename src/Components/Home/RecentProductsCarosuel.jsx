import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function RecentProductsCarosuel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const productData = [
    {
      imageUrl: "assets/Images/demoes/demo22/products/product-1.jpg",
      productName: "Smart Watches",
      productCategory: "Electronics",
      productPrice: "$299.00",
    },
    {
      imageUrl: "assets/Images/demoes/demo22/products/product-2.jpg",
      productName: "Digital Camera 16x",
      productCategory: "Electronics",
      productPrice: "$101.00 - $111.00",
    },
    {
      imageUrl: "assets/Images/demoes/demo22/products/product-3.jpg",
      productName: "Porto Extended Camera",
      productCategory: "Electronics",
      productPrice: "$599.00",
    },
    {
      imageUrl: "assets/Images/demoes/demo22/products/product-4.jpg",
      productName: "Black Grey Headset",
      productCategory: "Accessories",
      productPrice: "$39.00",
    },
    {
      imageUrl: "assets/Images/demoes/demo22/products/product-5.jpg",
      productName: "Battery Charger",
      productCategory: "Accessories",
      productPrice: "$299.00",
    },
    {
      imageUrl: "assets/Images/demoes/demo22/products/product-6.jpg",
      productName: "Brown Bag",
      productCategory: "Bags",
      productPrice: "$299.00",
    },
  ];

  return (
    <div className="container">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Recents Products</h2>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
      >
        {productData.map((product, index) => (
          <div key={index}>
            <div className="single-testimonial-item">
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <Link to={"/product-details"}>
                    <img
                      src={product.imageUrl}
                      width="217"
                      height="217"
                      alt="product"
                    />
                  </Link>
                  <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                  </div>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart"></i>
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo22-shop.html" className="product-category">
                        {product.productCategory}
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart"></i>
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo22-product.html">{product.productName}</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <div className="price-box">
                    <span className="product-price">
                      {product.productPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default RecentProductsCarosuel;
