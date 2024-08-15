import React, { useState } from 'react';
// import './CustomCarousel.css'; // Create this CSS file for styling

function CustomCarousel() {
  const homeSliderBannerImg = [
    "/assets/imagess/banner.jpg",
    "/assets/imagess/seacal.jpg",
    "/assets/imagess/supreme-z.jpg",
    "/assets/imagess/vitamin-c.jpg",
    "/assets/imagess/cozme-10.jpg",
    "/assets/imagess/daiy-cal.jpg",
    "/assets/imagess/wil-D.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeSliderBannerImg.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + homeSliderBannerImg.length) % homeSliderBannerImg.length);
  };

  return (
    <div className="carousel-container">
      <img
        src={homeSliderBannerImg[currentIndex]}
        alt="slider"
        className="carousel-image"
      />
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default CustomCarousel;
