import React from 'react'
import { Carousel } from 'react-bootstrap'

function HomeCarosuel() {
  return (
    <div>
        <section class="intro-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 mb-2">
                <div className="home-caroseul">
                  <Carousel fade>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="/assets/Images/slider/home_slide1.jpg"
                      />
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="/assets/Images/slider/home_slide2.jpg"
                      />
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>

                {/* <div class="home-slider slide-animate owl-carousel owl-theme custom-nav" data-owl-options="{
                                'loop': false
                            }">
                                <div class="home-slide home-slide-1 banner">
                                    <img class="slide-bg" src="assets/images/demoes/demo22/slider/home_slide1.jpg" alt="slider image" width="772" height="434"/>
                                    <div class="banner-layer banner-layer-middle banner-layer-right">
                                        <div class="appear-animate" data-animation-name="rotateInUpLeft">

                                            <h2 class="font1 ls-10 text-uppercase text-right m-b-4">Electronic<br/>Deals
                                            </h2>
                                            <div class="coupon-sale-text">
                                                <h4 class="m-b-2 font1 d-block text-white bg-dark skew-box">Exclusive COUPON
                                                </h4>
                                                <h5 class="mb-0 font1 d-inline-block bg-dark skew-box"><i class="text-dark ls-0">UP
                                                        TO</i><b class="text-white">$100</b><sub class="text-dark">OFF</sub>
                                                </h5>
                                            </div>

                                            <a href="demo22-shop.html" class="btn btn-light btn-lg ls-10">View All
                                                Now</a>
                                        </div>
                                    </div>
                                    <div class="banner-layer banner-layer-bottom banner-layer-right">
                                        <p class="ls-0 mb-0">* Only 200 Available</p>
                                    </div>
                                </div>
                                <div class="home-slide home-slide-2 banner">
                                    <img class="slide-bg" src="assets/images/demoes/demo22/slider/home_slide2.jpg" alt="slider image" width="772" height="434"/>
                                    <div class="banner-layer banner-layer-middle banner-layer-left">
                                        <div class="appear-animate" data-animation-name="rotateInUpLeft">
                                            <h2 class="font1 ls-10 text-uppercase m-b-4">Top Brands
                                                <br/>Smartphones</h2>
                                            <div class="coupon-sale-text d-flex flex-column align-items-start">
                                                <h4 class="m-b-2 font1 d-block text-uppercase text-white bg-dark skew-box">
                                                    Starting From
                                                </h4>
                                                <h5 class="mb-0 font1 d-inline-block bg-dark skew-box"><b class="text-white">$199</b>
                                                </h5>
                                            </div>

                                            <a href="demo22-shop.html" class="btn btn-light btn-lg ls-10">View All
                                                Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomeCarosuel
