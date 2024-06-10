import React from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function HomeCarosuel() {
  return (
    <div>
      <section className="intro-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-2">
              <div className="home-caroseul">
                <Carousel
                  fade
                  indicators={false} // Disable bottom buttons
                >
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCarosuel;
