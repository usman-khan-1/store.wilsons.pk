import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RelatedProductsCarosuel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="container">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Related Products</h2>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
      >
        <div className="single-testimonial-item">
          <div class="product-default">
            <figure>
              <a href="product.html">
                <img
                  src="assets/Images/products/product-1.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
                <img
                  src="assets/Images/products/product-1-2.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
              </a>
              <div class="label-group">
                <div class="product-label label-hot">HOT</div>
                <div class="product-label label-sale">-20%</div>
              </div>
            </figure>
            <div class="product-details">
              <div class="category-list">
                <a href="category.html" class="product-category">
                  Category
                </a>
              </div>
              <h3 class="product-title">
                <a href="product.html">Ultimate 3D Bluetooth Speaker</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style={{ width: "80%" }}></span>

                  <span class="tooltiptext tooltip-top"></span>
                </div>
              </div>

              <div class="price-box">
                <del class="old-price">$59.00</del>
                <span class="product-price">$49.00</span>
              </div>

              <div class="product-action">
                <a href="wishlist.html" title="Wishlist" class="btn-icon-wish">
                  <i class="icon-heart"></i>
                </a>
                <a href="product.html" class="btn-icon btn-add-cart">
                  <i class="fa fa-arrow-right"></i>
                  <span>SELECT OPTIONS</span>
                </a>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="single-testimonial-item">
          <div class="product-default">
            <figure>
              <a href="product.html">
                <img
                  src="assets/Images/products/product-3.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
                <img
                  src="assets/Images/products/product-3-2.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
              </a>
              <div class="label-group">
                <div class="product-label label-hot">HOT</div>
                <div class="product-label label-sale">-20%</div>
              </div>
            </figure>
            <div class="product-details">
              <div class="category-list">
                <a href="category.html" class="product-category">
                  Category
                </a>
              </div>
              <h3 class="product-title">
                <a href="product.html">Circled Ultimate 3D Speaker</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style={{width:"80%"}}></span>

                  <span class="tooltiptext tooltip-top"></span>
                </div>
              </div>

              <div class="price-box">
                <del class="old-price">$59.00</del>
                <span class="product-price">$49.00</span>
              </div>

              <div class="product-action">
                <a href="wishlist.html" title="Wishlist" class="btn-icon-wish">
                  <i class="icon-heart"></i>
                </a>
                <a href="product.html" class="btn-icon btn-add-cart">
                  <i class="fa fa-arrow-right"></i>
                  <span>SELECT OPTIONS</span>
                </a>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="single-testimonial-item">
          <div class="product-default">
            <figure>
              <a href="product.html">
                <img
                  src="assets/Images/products/product-7.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
                <img
                  src="assets/Images/products/product-7-2.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
              </a>
              <div class="label-group">
                <div class="product-label label-hot">HOT</div>
                <div class="product-label label-sale">-20%</div>
              </div>
            </figure>
            <div class="product-details">
              <div class="category-list">
                <a href="category.html" class="product-category">
                  Category
                </a>
              </div>
              <h3 class="product-title">
                <a href="product.html">Brown-Black Men Casual Glasses</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style={{width:"80%"}}></span>

                  <span class="tooltiptext tooltip-top"></span>
                </div>
              </div>

              <div class="price-box">
                <del class="old-price">$59.00</del>
                <span class="product-price">$49.00</span>
              </div>

              <div class="product-action">
                <a href="wishlist.html" title="Wishlist" class="btn-icon-wish">
                  <i class="icon-heart"></i>
                </a>
                <a href="product.html" class="btn-icon btn-add-cart">
                  <i class="fa fa-arrow-right"></i>
                  <span>SELECT OPTIONS</span>
                </a>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="single-testimonial-item">
          <div class="product-default">
            <figure>
              <a href="product.html">
                <img
                  src="assets/Images/products/product-6.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
                <img
                  src="assets/Images/products/product-6-2.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
              </a>
              <div class="label-group">
                <div class="product-label label-hot">HOT</div>
                <div class="product-label label-sale">-20%</div>
              </div>
            </figure>
            <div class="product-details">
              <div class="category-list">
                <a href="category.html" class="product-category">
                  Category
                </a>
              </div>
              <h3 class="product-title">
                <a href="product.html">Men Black Gentle Belt</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style={{width:"80%"}}></span>

                  <span class="tooltiptext tooltip-top"></span>
                </div>
              </div>

              <div class="price-box">
                <del class="old-price">$59.00</del>
                <span class="product-price">$49.00</span>
              </div>

              <div class="product-action">
                <a href="wishlist.html" title="Wishlist" class="btn-icon-wish">
                  <i class="icon-heart"></i>
                </a>
                <a href="product.html" class="btn-icon btn-add-cart">
                  <i class="fa fa-arrow-right"></i>
                  <span>SELECT OPTIONS</span>
                </a>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="single-testimonial-item">
          <div class="product-default">
            <figure>
              <a href="product.html">
                <img
                  src="assets/Images/products/product-4.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
                <img
                  src="assets/Images/products/product-4-2.jpg"
                  width="280"
                  height="280"
                  alt="product"
                />
              </a>
              <div class="label-group">
                <div class="product-label label-hot">HOT</div>
                <div class="product-label label-sale">-20%</div>
              </div>
            </figure>
            <div class="product-details">
              <div class="category-list">
                <a href="category.html" class="product-category">
                  Category
                </a>
              </div>
              <h3 class="product-title">
                <a href="product.html">Blue Backpack for the Young - S</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style={{width:"80%"}}></span>

                  <span class="tooltiptext tooltip-top"></span>
                </div>
              </div>

              <div class="price-box">
                <del class="old-price">$59.00</del>
                <span class="product-price">$49.00</span>
              </div>

              <div class="product-action">
                <a href="wishlist.html" title="Wishlist" class="btn-icon-wish">
                  <i class="icon-heart"></i>
                </a>
                <a href="product.html" class="btn-icon btn-add-cart">
                  <i class="fa fa-arrow-right"></i>
                  <span>SELECT OPTIONS</span>
                </a>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default RelatedProductsCarosuel;
