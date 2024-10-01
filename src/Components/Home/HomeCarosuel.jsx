import React, { useEffect, useState } from "react";
import { makePostRequest } from "../../Apis";
import { BeatLoader } from "react-spinners";
import ImageWithLoader from "../ImageWithLoader";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeCarousel() {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const fadeAnimationHandler = (props, state) => {
    const transitionTime = `${props.transitionTime}ms`;
    const transitionTimingFunction = "ease-in-out";

    let slideStyle = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction,
    };

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
      };
    }

    return {
      slideStyle,
      selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
      prevStyle: { ...slideStyle },
    };
  };

  return (
    <div className="row">
      <div className="col-lg-12 mb-2">
        <div className="home-carousel">
          {loading ? (
            <div className="w-100 d-flex align-items-center justify-content-center">
              <BeatLoader color="#01abec" size={20} />
            </div>
          ) : (
            <Carousel
              animationHandler={fadeAnimationHandler}
              showThumbs={false}
              interval={5000}
              autoPlay={true}
              swipeable={false}
              transitionTime={1200}
              showIndicators={false}
              infiniteLoop={true}
            >
              {banner?.map((data, index) => (
                <div key={index}>
                  <ImageWithLoader
                    src={data?.image}
                    width="100%"
                    height="217"
                    alt="product"
                    loaderHeight={470}
                  />
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
