import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarosuel() {
  const homeSliderBannerImg = [
    "/assets/imagess/banner.jpg",
    "/assets/imagess/seacal.jpg",
    "/assets/imagess/supreme-z.jpg",
    "/assets/imagess/vitamin-c.jpg",
    "/assets/imagess/cozme-10.jpg",
    "/assets/imagess/daiy-cal.jpg",
    "/assets/imagess/wil-D.jpg",
  ];
  return (
    <div className="row">
      <div className="col-lg-12 mb-2">
        <div className="home-caroseul">
          <Carousel fade indicators={false}>
            {homeSliderBannerImg.map((data, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={data} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomeCarosuel;
