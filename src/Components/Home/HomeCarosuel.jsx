import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { makePostRequest } from "../../Apis";

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

  const [banner, setBanner] = useState([]);
  console.log("banner", banner);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("branding/banners");
        setBanner(response?.data);
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 mb-2">
        <div className="home-caroseul">
          <Carousel
            indicators={false}
            interval={3000} // Adjust the interval as needed
            controls={true} // Optional: hides the navigation controls
            pause="hover" // Optional: pauses on hover
          >
            {homeSliderBannerImg?.map((data, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={data}
                  alt={`Slide ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomeCarosuel;
