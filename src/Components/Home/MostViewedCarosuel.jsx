import React from "react";
import { Carousel } from "react-bootstrap";

function MostViewedCarosuel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productData = [
    {
      imgSrc: "assets/Images/demoes/demo22/products/product-1.jpg",
      category: "category",
      title: "Smart Watches",
      price: "$299.00",
      rating: 80, // percentage
    },
    {
      imgSrc: "assets/Images/demoes/demo22/products/product-1.jpg",
      category: "category",
      title: "Smart Watches",
      price: "$299.00",
      rating: 80, // percentage
    },
    {
      imgSrc: "assets/Images/demoes/demo22/products/product-1.jpg",
      category: "category",
      title: "Smart Watches",
      price: "$299.00",
      rating: 80, // percentage
    },
    {
      imgSrc: "assets/Images/demoes/demo22/products/product-1.jpg",
      category: "category",
      title: "Smart Watches",
      price: "$299.00",
      rating: 80, // percentage
    },
    {
      imgSrc: "assets/Images/demoes/demo22/products/product-1.jpg",
      category: "category",
      title: "Smart Watches",
      price: "$299.00",
      rating: 80, // percentage
    },
    // Add more products here
  ];
  return (
    <div>
      <Carousel responsive={responsive}>
        {productData.map((product, index) => (
          <div
            className="product-default inner-quickview inner-icon"
            key={index}
          >
            <figure>
              <a href="#">
                <img
                  src={product.imgSrc}
                  width="217"
                  height="217"
                  alt="product"
                />
              </a>
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
                    {product.category}
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
                <a href="demo22-product.html">{product.title}</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span
                    className="ratings"
                    style={{ width: `${product.rating}%` }}
                  ></span>
                  <span className="tooltiptext tooltip-top"></span>
                </div>
              </div>
              <div className="price-box">
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MostViewedCarosuel;
