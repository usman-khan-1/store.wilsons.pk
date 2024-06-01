import React from "react";
import Carousel from "react-multi-carousel";

function TopCategoryCarosuel() {
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
    <div>
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
                    src="/assets/Images/demoes/demo22/banners/banner-1.jpg"
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
                    src="/assets/Images/demoes/demo22/banners/banner-2.jpg"
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
        </div>
      </section>
    </div>
  );
}

export default TopCategoryCarosuel;
