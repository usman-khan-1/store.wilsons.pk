import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarosuel() {
  const homeSliderBannerImg = [
    "/assets/imagess/banner.jpg",
  ];
  return (
    <div>
      <section className="">
        <div className="">
          <div className="row">
            <div className="col-lg-12 mb-2">
              <div className="home-caroseul">
                <Carousel
                  fade
                  indicators={false}
                 
                >
                  {homeSliderBannerImg.map((data, index) => (
                    <Carousel.Item key={index}>
                      <img className="d-block w-100" src={data} />
                    </Carousel.Item>
                  ))}
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
