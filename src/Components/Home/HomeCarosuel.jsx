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

               
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomeCarosuel
