import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { makePostRequest } from "../../Apis";
import { BeatLoader } from "react-spinners";
import ImageWithLoader from "../ImageWithLoader";

function HomeCarosuel() {
  const homeSliderBannerImg = [
    "/assets/imagess/cozymebanner.jpg",
    "/assets/imagess/wil-d-banner.jpg",
    "/assets/imagess/daily-cal.jpg",
    "/assets/imagess/seacal-banner.jpg",
  ];

  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("banner", banner);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("branding/banners");
        setBanner(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 mb-2">
        <div className="home-caroseul">
          {loading ? (
            <div className="w-100 d-flex align-items-center justify-content-center">
              <BeatLoader color="#01abec" size={20} />
            </div>
          ) : (
            <Carousel
              indicators={false}
              interval={3000} // Adjust the interval as needed
              controls={true} // Optional: hides the navigation controls
              pause="hover" // Optional: pauses on hover
            >
              {banner?.map((data, index) => (
                <Carousel.Item key={index}>
                  {/* <img
                    className="d-block w-100"
                    src={data?.image}
                    alt={`Slide ${index}`}
                  /> */}

                  <ImageWithLoader
                    src={data?.image}
                    width="100%"
                    height="217"
                    alt="product"
                    loaderHeight={470}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeCarosuel;
